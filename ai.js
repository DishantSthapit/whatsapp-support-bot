// ai.js
const OpenAI = require("openai");
const { Mistral} = require("@mistralai/mistralai");

const client = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY
});


async function askAI(question, context = "") {
  const messages = [
    { role: "system", content: "You are a helpful customer support assistant. If you don't know the answer, say 'I will escalate this to a human.'" },
    { role: "user", content: `Context: ${context}\n\nQuestion: ${question}` }
  ];

  const chatResponse = await client.chat.complete({
    model: "mistral-small-latest",
    messages
  });

  return chatResponse.choices[0].message.content;
}

module.exports = { askAI };
