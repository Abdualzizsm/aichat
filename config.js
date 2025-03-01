// إعدادات Azure OpenAI
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "YOUR_API_KEY_HERE"; // سيتم تعيينه في متغيرات البيئة في Render
const OPENAI_MODEL = "gpt-4o-mini";
const OPENAI_BASE_URL = "https://api.openai.com"; // استخدام OpenAI مباشرة بدلاً من Azure

// تصدير الإعدادات
export { OPENAI_API_KEY, OPENAI_MODEL, OPENAI_BASE_URL };
