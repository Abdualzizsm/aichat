#!/bin/bash

# استبدال متغيرات البيئة في index.html
sed -i "s|__API_KEY__|$API_KEY|g" index.html
sed -i "s|__ENDPOINT__|$ENDPOINT|g" index.html
sed -i "s|__DEPLOYMENT_NAME__|$DEPLOYMENT_NAME|g" index.html

echo "تم استبدال متغيرات البيئة بنجاح"
