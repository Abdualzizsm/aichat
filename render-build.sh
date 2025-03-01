#!/bin/bash

# تأكد من أن السكربت قابل للتنفيذ
chmod +x render-build.sh

# استبدال متغيرات البيئة في index.html
if [ -n "$GITHUB_TOKEN" ]; then
  echo "جاري استبدال مفتاح API..."
  # إنشاء ملف config.js جديد بمفتاح API من متغيرات البيئة
  cat > config.js << EOL
// إعدادات OpenAI - تم إنشاؤها تلقائيًا بواسطة سكربت البناء
const OPENAI_API_KEY = "$GITHUB_TOKEN";
const OPENAI_MODEL = "gpt-4o-mini";
const OPENAI_BASE_URL = "https://api.openai.com";

// تصدير الإعدادات
export { OPENAI_API_KEY, OPENAI_MODEL, OPENAI_BASE_URL };
EOL
  echo "تم إنشاء ملف config.js بنجاح"
else
  echo "تحذير: لم يتم تعيين GITHUB_TOKEN في متغيرات البيئة"
fi

echo "تم بناء التطبيق بنجاح"
