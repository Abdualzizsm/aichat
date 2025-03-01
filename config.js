// إعدادات OpenAI
const OPENAI_API_KEY = process.env.GITHUB_TOKEN || "YOUR_API_KEY_HERE"; // استخدام GITHUB_TOKEN من متغيرات البيئة
const OPENAI_MODEL = "gpt-4o-mini";
const OPENAI_BASE_URL = "https://api.openai.com"; // استخدام OpenAI مباشرة

// تصدير الإعدادات
export { OPENAI_API_KEY, OPENAI_MODEL, OPENAI_BASE_URL };
