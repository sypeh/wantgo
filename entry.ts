// コピペ元: https://github.com/expo/expo/blob/main/packages/expo-router/entry.js
// This is aliased to another location when server components are enabled.
// We use this intermediate file to avoid issues with aliases not applying to package.json main field resolution.
const isStorybook = process.env.EXPO_PUBLIC_STORYBOOK === 'true';
console.log(process.env.STORYBOOK);
if (isStorybook) {
  // storbookを表示するための処理
  const { registerRootComponent } = require('expo');
  const Storybook = require('./.storybook').default;
  registerRootComponent(Storybook);
} else {
  // 参考: https://github.com/expo/expo/blob/main/packages/expo-router/entry.js
  require('expo-router/entry-classic');
}
