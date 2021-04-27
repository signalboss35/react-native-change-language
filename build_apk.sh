echo 'cd directory android'
cd android
echo 'clean android'
./gradlew cleanBuildCache
echo 'build apk file production'
./gradlew assembleRelease
cd ..
echo 'build apk successful'