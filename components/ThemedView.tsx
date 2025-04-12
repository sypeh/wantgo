import { Stack, type StackProps, useTheme } from 'tamagui';

export type ThemedViewProps = StackProps;

export function ThemedView(props: ThemedViewProps) {
  const theme = useTheme();

  return <Stack background={theme.background.val} {...props} />;
}
