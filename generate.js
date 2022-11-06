import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from 'fs';

const configuration = new Configuration({
  apiKey: 'abc',
})


const openai = new OpenAIApi(configuration)

const prompt = 'cartoon of a llama sitting in lotus position looking peaceful'

const result = await openai.createImage({
  prompt,
  n: 5,
  size: "1024x1024",
  user: "theBlueBoy"
})

const url = result.data.data[0].url;

console.log(url)

// Save Image ULR to Disk
const imgResult = await fetch(url)
const blob = await imgResult.blob()
const buffer = Buffer.from(await blob.arrayBuffer())
writeFileSync(`./img/${Date.now()}.png`, buffer)