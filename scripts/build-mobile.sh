echo "--------------------------------"
echo "---🍯 Initializing Honeymake 🍯---"
echo "--------------------------------"
echo ""

yarn install

cd frontend && cd mobile-app && cd ios

pod install

cd ..
