const { HfInference } = require("@huggingface/inference");
const hf = new HfInference("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");

export async function embedding(input: string) {
  const output = await hf.featureExtraction({
    model: "thenlper/gte-small",
    inputs: input,
    pooling: "mean",
    normalize: true
  });

  return output;
}
