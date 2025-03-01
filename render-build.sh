#!/bin/bash

# استبدال متغيرات البيئة في index.html
sed -i "s|__API_KEY__|$GITHUB_TOKEN|g" index.html

echo "تم استبدال متغيرات البيئة بنجاح"
