// إعدادات Azure OpenAI
const OPENAI_API_KEY = process.env.GITHUB_TOKEN || "YOUR_API_KEY_HERE"; // سيتم تحديثه في Render
const OPENAI_MODEL = "gpt-4o-mini";
const OPENAI_BASE_URL = "https://models.inference.ai.azure.com";

// تصدير الإعدادات
export { OPENAI_API_KEY, OPENAI_MODEL, OPENAI_BASE_URL };
