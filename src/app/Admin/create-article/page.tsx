"use client"
import * as React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
// You can choose a different style if you prefer
import Resizer from "react-image-file-resizer";

import "highlight.js/styles/atom-one-dark.css";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

import { FileUpload } from "@/components/ui/file-upload";

// Modify the ReactQuill dynamic import
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    if (typeof window !== "undefined") {
      const { default: ImageUploader } = await import("quill-image-uploader");
      const { default: BlotFormatter } = await import("quill-blot-formatter");
      const Quill = require("quill");

      Quill.register("modules/imageUploader", ImageUploader);
      Quill.register("modules/blotFormatter", BlotFormatter);
    }
    return RQ;
  },
  {
    ssr: false,
    loading: () => <p>Loading editor...</p>
  }
);

import { Loader2 } from "lucide-react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import useUploadMutation from "@/hooks/useUploadMutation";
import { handleImageUpload } from "@/hooks/handleImageUpload";
import { Textarea } from "@/components/ui/textarea";
import { modulesObject } from "@/components/admin-panel/modules";


const formSchema = z.object({
  title: z.string().nonempty({ message: "Title is required." }),
  shortSummary: z
    .string()
    .max(200, { message: "Short summary should be 200 characters or less." })
    .nonempty({ message: "Short summary is required." }),
  description: z.any(),
  image: z.string().nonempty({ message: "Image is required." }),
  blurImage: z.string().nonempty({ message: "Blur Image string is required." }),
  tags: z.array(z.string()).default([])
});

export default function CreateProduct() {
  return (
    <React.Suspense>
      <ProductForm />
    </React.Suspense>
  );
}

function ProductForm() {
  const [isFetchingImage, setIsFetchingImage] = useState(false);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [shouldFetch, setShouldFetch] = useState(false); // Control fetch trigger

  const url = id
    ? `https://pascal-portfolio-backend.onrender.com/api/articles/${id}`  // Updated URL for edit
    : "https://pascal-portfolio-backend.onrender.com/api/articles";       // Updated URL for create


  const {
    isPending: fetchEditIsPending,
    error: fetchEditIsError,
    data: fetchEditIsData,
    isSuccess: fetchEditIsSuccess
  } = useQuery({
    queryKey: [id], // Query key should be an array
    queryFn: () =>
      axios(`/api/routes/fetchSingleArticle?articleId=${id}&place=create`), // Query function
    enabled: shouldFetch // Trigger query only when `shouldFetch` is true
  });

  useEffect(() => {
    if (fetchEditIsSuccess) {
      // Disable further fetching after successful fetch
      setShouldFetch(false);
    }
  }, [fetchEditIsSuccess]);
  useEffect(() => {
    // Trigger the query after the component mounts
    setShouldFetch(true);
  }, []);
  const { toast } = useToast();

  const { error, isSuccess, mutate, isPending } = useUploadMutation(url, [
    "newArticle",
    "featureArticles"
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      shortSummary: "",
      description: "",
      image: "",
      blurImage: "",
      tags: []
    }
  });

  const [editorContent, setEditorContent] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {

    await mutate(values);
  };

  useEffect(() => {
    isSuccess &&
      toast({
        description: id
          ? "Article updated successfully"
          : "Article created successfully"
      });
  }, [isSuccess, id, toast]);

  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        24,
        24,
        "JPEG",
        30,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleImageChange = async (files: File[]) => {
    if (files.length === 0) return;

    setIsFetchingImage(true);
    const file = files[0];

    try {
      // Create a proper input element
      const input = document.createElement('input');
      input.type = 'file';
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      input.files = dataTransfer.files;

      // Create a synthetic change event
      const changeEvent = {
        target: input,
        currentTarget: input,
        preventDefault: () => { },
        stopPropagation: () => { },
        nativeEvent: new Event('change'),
        bubbles: true,
        cancelable: true,
        timeStamp: Date.now(),
        type: 'change'
      } as React.ChangeEvent<HTMLInputElement>;

      const imageUrl = await handleImageUpload(changeEvent);
      const resizedImage: any = await resizeFile(file);

      form.setValue("blurImage", resizedImage.split(",")[1]);
      setImagePreview(imageUrl);
      form.setValue("image", imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
      toast({
        variant: "destructive",
        description: "Error uploading image. Please try again.",
      });
    } finally {
      setIsFetchingImage(false);
    }
  };

  const modules = modulesObject;

  const handleQuillChange = (content: string) => {
    setEditorContent(content);
    form.setValue("description", content);
  };

  useEffect(() => {
    if (fetchEditIsSuccess && fetchEditIsData?.data?.article) {
      const product = fetchEditIsData.data.article;
      form.reset({
        title: product.title,
        shortSummary: product.shortSummary || "",
        description: product.description,
        image: product.imageUrl,
        blurImage: product.blurImage,
        tags: product.tags
      });
      setImagePreview(product.imageUrl);
      setEditorContent(product.description);
    }
  }, [fetchEditIsSuccess, fetchEditIsData, form]);

  const [tags, setTags] = useState<string>("");

  const handleTagsChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tags.trim()) {
      e.preventDefault();
      const currentTags = form.getValues('tags');
      form.setValue('tags', [...currentTags, tags.trim()]);
      setTags('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-zinc-800 p-6 rounded-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold text-blue-400">Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Write a captivating title..."
                    className="bg-zinc-800 border-0 focus:ring-2 focus:ring-blue-400/50 text-white placeholder:text-zinc-500 rounded-xl p-4"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            name="shortSummary"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold text-blue-400">Short Summary</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a brief, engaging summary..."
                    className="bg-zinc-800 border-0 focus:ring-2 focus:ring-blue-400/50 text-white placeholder:text-zinc-500 rounded-xl p-4 min-h-[100px]"
                    {...field}
                    maxLength={200}
                  />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            name="tags"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-semibold text-blue-400">Tags</FormLabel>
                <FormControl>
                  <div className="space-y-2">
                    <Input
                      placeholder="Type a tag and press Enter..."
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      onKeyDown={handleTagsChange}
                      className="bg-zinc-800 border-0 focus:ring-2 focus:ring-blue-400/50 text-white placeholder:text-zinc-500 rounded-xl p-4"
                    />
                    <div className="flex flex-wrap gap-2 mt-2">
                      {field.value.map((tag, index) => (
                        <div
                          key={index}
                          className="bg-zinc-800 px-4 py-2 rounded-full flex items-center gap-2 text-blue-400 border border-blue-400/20"
                        >
                          <span>{tag}</span>
                          <button
                            type="button"
                            onClick={() => {
                              const newTags = field.value.filter((_, i) => i !== index);
                              form.setValue('tags', newTags);
                            }}
                            className="hover:text-red-400 transition-colors"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            name="image"
            control={form.control}
            render={({ field }) => (
              <FormItem className="bubble-form-item">
                <FormLabel className="text-lg font-semibold text-blue-400">Cover Image</FormLabel>

                <FormControl>
                  <div className="relative">
                    <FileUpload
                      onChange={handleImageChange}
                      disabled={isFetchingImage}
                    />
                    {isFetchingImage && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
                        <Loader2 className="h-6 w-6 animate-spin" />
                      </div>
                    )}
                  </div>
                </FormControl>
                {imagePreview && (
                  <div className=" mt-12 relative h-[200px] overflow-hidden rounded-lg">
                    <Image
                      src={imagePreview}
                      alt="Preview"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-8">
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="bubble-form-item">
                  <FormLabel className="text-lg font-semibold text-blue-400">Content</FormLabel>
                  <FormControl>
                    <div className="min-h-[300px]">
                      <ReactQuill
                        value={editorContent}
                        onChange={handleQuillChange}
                        modules={modules}
                        theme="bubble"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isPending}
              className="bg-transparent border border-gray-300 text-gray-300 hover:bg-gray-50"
            >
              {isPending ? "Submitting..." : "Publish Article"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}