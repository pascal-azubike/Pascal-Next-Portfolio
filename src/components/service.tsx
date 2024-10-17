import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const services = [
  {
    id: "1",
    title: "ADD/ADHD",
    img: "service-icon-4.png",
    text: "Comprehensive care for attention deficit disorders.",
    description:
      "At Wellcresttherapy, we understand that living with ADD/ADHD can be challenging, both for children and adults. Our telepsychiatry services offer specialized care tailored to the unique needs of individuals with attention deficit disorders. Under the expert guidance of our experienced practitioner, Oladunni Faminu DNP, PMHNP, we provide a holistic approach that includes psychotherapy, behavioral strategies, and medication management. We strive to create a supportive environment that empowers patients to achieve better focus, improved behavior, and enhanced quality of life. Whether you’re in Washington, Georgia, North Carolina, or Florida, we ensure you have access to the care you need, when you need it."
  },
  {
    id: "2",
    title: "Anxiety",
    img: "service-icon-4.png",
    text: "Effective treatments to help you manage anxiety.",
    description:
      "Anxiety can be overwhelming, but with Wellcresttherapy, you don’t have to face it alone. Our comprehensive anxiety treatment program is designed to help you regain control over your life. We offer a range of evidence-based therapies, including cognitive-behavioral therapy (CBT) and mindfulness practices, all accessible through our telepsychiatry services. Our team is dedicated to understanding the root causes of your anxiety and providing personalized treatment plans that address your specific needs. With Wellcresttherapy, you can access affordable mental health care from the comfort of your home, whether you’re in Atlanta, Washington, or anywhere in between. Let us help you take the first step towards a calmer, more peaceful mind."
  },
  {
    id: "3",
    title: "Bipolar Disorder",
    img: "service-icon-4.png",
    text: "Specialized care for bipolar disorder.",
    description:
      "Managing bipolar disorder requires a nuanced and compassionate approach, and that’s exactly what we offer at Wellcresttherapy. Our telepsychiatry services are designed to support patients with bipolar disorder through every stage of their journey. Led by Oladunni Faminu DNP, PMHNP, our practice provides a combination of psychotherapy and medication management to stabilize mood swings and improve overall functioning. We work closely with our patients to develop individualized treatment plans that promote long-term stability and well-being. Whether you’re dealing with manic episodes or depressive phases, Wellcresttherapy is here to offer the support you need, wherever you are in Washington, Georgia, North Carolina, or Florida."
  },
  {
    id: "4",
    title: "Eating Disorder",
    img: "service-icon-4.png",
    text: "Support and treatment for eating disorders.",
    description:
      "Eating disorders can be complex and deeply personal, but at Wellcresttherapy, we believe that recovery is possible. Our telepsychiatry services provide a safe and confidential space for patients struggling with eating disorders, including anorexia, bulimia, and binge eating disorder. Under the compassionate care of Oladunni Faminu DNP, PMHNP, we offer comprehensive treatment plans that include psychotherapy, nutritional counseling, and medication management. Our goal is to help patients develop a healthier relationship with food and their bodies. By focusing on the underlying issues that contribute to disordered eating, we guide our patients towards lasting recovery and a renewed sense of self-worth."
  },
  {
    id: "5",
    title: "OCD",
    img: "service-icon-4.png",
    text: "Tailored treatments for obsessive-compulsive disorder.",
    description:
      "Obsessive-compulsive disorder (OCD) can be a debilitating condition, but Wellcresttherapy is here to help. Our telepsychiatry services provide specialized treatment for patients struggling with OCD, offering evidence-based therapies like cognitive-behavioral therapy (CBT) and exposure and response prevention (ERP). Under the expert care of Oladunni Faminu DNP, PMHNP, we create personalized treatment plans that address the unique challenges of OCD. We are committed to helping our patients reduce their symptoms, manage their compulsions, and regain control over their lives. With our convenient and affordable mental health services, patients in Washington, Georgia, North Carolina, and Florida can access the care they need from the comfort of their homes."
  },
  {
    id: "6",
    title: "PTSD",
    img: "service-icon-4.png",
    text: "Comprehensive support for post-traumatic stress disorder.",
    description:
      "Post-traumatic stress disorder (PTSD) can have a profound impact on every aspect of a person’s life. At Wellcresttherapy, we offer compassionate and effective care for patients dealing with PTSD. Our telepsychiatry services are designed to help individuals process their trauma and develop healthy coping mechanisms. Led by Oladunni Faminu DNP, PMHNP, our practice provides a range of therapeutic approaches, including trauma-focused cognitive-behavioral therapy (TF-CBT) and eye movement desensitization and reprocessing (EMDR). We understand the complexities of PTSD and are dedicated to supporting our patients through their healing journey. Whether you’re located in Washington, Georgia, North Carolina, or Florida, Wellcresttherapy is here to help you reclaim your life."
  },
  {
    id: "7",
    title: "Depression",
    img: "service-icon-4.png",
    text: "Professional help for managing depression.",
    description:
      "Depression is more than just feeling sad—it’s a serious condition that requires professional treatment. At Wellcresttherapy, we provide comprehensive care for patients struggling with depression. Our telepsychiatry services allow patients to receive the help they need from the comfort of their homes. Under the guidance of Oladunni Faminu DNP, PMHNP, we offer a combination of psychotherapy and medication management to help alleviate the symptoms of depression. We work closely with our patients to develop personalized treatment plans that promote recovery and improve overall well-being. With our support, patients in Washington, Georgia, North Carolina, and Florida can take the first steps towards a brighter, more hopeful future."
  },
  {
    id: "8",
    title: "Substance Abuse",
    img: "service-icon-4.png",
    text: "Effective programs to combat substance abuse.",
    description:
      "Substance abuse can be a challenging and isolating experience, but recovery is possible with the right support. Wellcresttherapy offers comprehensive telepsychiatry services for individuals struggling with substance abuse. Our programs are designed to help patients break free from the cycle of addiction and regain control over their lives. Under the expert care of Oladunni Faminu DNP, PMHNP, we provide a combination of psychotherapy, medication management, and support groups to address the root causes of substance abuse and promote lasting recovery. Whether you’re in Washington, Georgia, North Carolina, or Florida, Wellcresttherapy is committed to helping you achieve and maintain sobriety."
  },
  {
    id: "9",
    title: "Addiction",
    img: "service-icon-4.png",
    text: "Specialized care for overcoming addiction.",
    description:
      "Addiction can take many forms, and at Wellcresttherapy, we’re here to help you overcome it. Our telepsychiatry services provide specialized care for individuals battling addiction, offering a holistic approach to treatment that includes psychotherapy, medication management, and support networks. Led by Oladunni Faminu DNP, PMHNP, our practice is dedicated to helping patients identify the underlying issues that contribute to their addiction and develop healthy coping strategies. We believe in empowering our patients to take control of their recovery journey, and we’re here to support them every step of the way. Whether you’re dealing with substance addiction, gambling addiction, or another form of dependency, Wellcresttherapy is here to help you achieve lasting change."
  },
  {
    id: "10",
    title: "Stress",
    img: "service-icon-4.png",
    text: "Support and strategies for managing stress.",
    description:
      "Stress is an unavoidable part of life, but with the right tools, it doesn’t have to take over your life. Wellcresttherapy offers telepsychiatry services designed to help individuals manage stress more effectively. Our treatment plans include a combination of psychotherapy, mindfulness practices, and stress management techniques tailored to each patient’s unique needs. Led by Oladunni Faminu DNP, PMHNP, our practice is dedicated to helping patients reduce their stress levels and improve their overall well-being. Whether you’re facing work-related stress, family pressures, or other challenges, Wellcresttherapy is here to provide the support and guidance you need to navigate life’s stresses with greater ease."
  },
  {
    id: "11",
    title: "Family Issues",
    img: "service-icon-4.png",
    text: "Counseling for family-related concerns.",
    description:
      "Family dynamics can be complex and challenging, but Wellcresttherapy is here to help. Our telepsychiatry services provide counseling for individuals and families dealing with a wide range of issues, from communication problems to more serious conflicts. Led by Oladunni Faminu DNP, PMHNP, our practice offers a safe and supportive space where families can work through their challenges and build stronger, healthier relationships. We offer evidence-based therapeutic approaches that address the root causes of family issues and promote lasting change. Whether you’re dealing with parenting struggles, marital conflicts, or other family-related concerns, Wellcresttherapy is here to help you find the solutions you need."
  }
];

export const Service = () => {
  return (
    <section className=" mt-[4rem] relative">
      <div className="services-shape">
        <Image
          src="/assets/images/curve-shape-1.png"
          alt=""
          width={500}
          height={300}
        />
      </div>
      <div className="container">
        <div className="services-content">
          <div className="title-box text-center">
            <div className="content-wrapper">
              <h3 className="title-box-name">Our services</h3>
              <div className="title-separator mx-auto"></div>
              <p className="text title-box-text">
                We provide you the best choices for you. Adjust it to your
                health needs and make sure you undergo treatment with our highly
                qualified doctors you can consult with us which type of service
                is suitable for your health
              </p>
            </div>
          </div>

          <div className="services-list ">
            {services.map((service, index) => (
              <div
                key={index}
                className="services-item border border-[#e5caf0] flex flex-col  items-center justify-between"
              >
                <div className="item-icon">
                  <Image
                    src={`/assets/images/${service.img}`}
                    alt="service icon"
                    width={50}
                    height={50}
                  />
                </div>
                <h5 className="item-title fw-7">{service.title}</h5>
                <p className="text">{service.text}</p>
                <Link
                  href={`/services/${service.id}`}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "text-base font-medium border-2 -border-[#e5caf0"
                  )}
                >
                  learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
