/*
اختبار الاتصال بـ Azure OpenAI
قم بتشغيل هذا الملف باستخدام Node.js:
> npm install openai
> node azure-test.js
*/
import OpenAI from "openai";

// استخدام توكن GitHub كمفتاح API
const token = process.env.GITHUB_TOKEN || "YOUR_API_KEY_HERE"; // سيتم تحديثه يدويًا

async function main() {
  console.log("بدء اختبار الاتصال بـ Azure OpenAI...");

  const client = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: token
  });

  try {
    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: "" },
        { role: "user", content: "ما هي عاصمة فرنسا؟" }
      ],
      model: "gpt-4o-mini",
      temperature: 1,
      max_tokens: 4096,
      top_p: 1
    });

    console.log("تم الاتصال بنجاح!");
    console.log("الرد:", response.choices[0].message.content);
  } catch (error) {
    console.error("حدث خطأ أثناء الاتصال:", error);
  }
}

main();
