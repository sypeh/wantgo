// ↓を変数で管理してますが、環境変数にするなどお好きな方法で管理してください。
const isStorybook = false;
if (isStorybook) {
  // storbookを表示するための処理
  const { registerRootComponent } = require('expo');
  const Storybook = require('./.storybook').default;
  registerRootComponent(Storybook);
} else {
  // 参考: https://github.com/expo/expo/blob/main/packages/expo-router/entry.js
  require('expo-router/entry-classic');
}
