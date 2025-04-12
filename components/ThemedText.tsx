import { Text, styled } from 'tamagui';

export type ThemedTextProps = {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
  children: React.ReactNode;
};

export function ThemedText({ type = 'default', children }: ThemedTextProps) {
  switch (type) {
    case 'title':
      return (
        <Text fontSize={32} fontWeight="bold" lineHeight={32}>
          {children}
        </Text>
      );
    case 'subtitle':
      return (
        <Text fontSize={20} fontWeight="bold">
          {children}
        </Text>
      );
    case 'defaultSemiBold':
      return (
        <Text fontSize={16} fontWeight="600" lineHeight={24}>
          {children}
        </Text>
      );
    case 'link':
      return (
        <Text fontSize={16} lineHeight={30} color="$blue10">
          {children}
        </Text>
      );
    default:
      return (
        <Text fontSize={16} lineHeight={24}>
          {children}
        </Text>
      );
  }
}
