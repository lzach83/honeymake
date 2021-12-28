npx rn-nodeify --install assert,events,stream,crypto,process --hack --yarn

# rm -rf ~/Library/Caches/CocoaPods
# rm -rf ios/Pods
yarn install

cd ios && pod install