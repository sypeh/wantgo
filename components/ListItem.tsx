// components/ListItem.tsx
import { Image, Text, XStack, YStack } from 'tamagui';

type ListItemProps = {
  title: string;
  detail: string;
  tags?: string[];
  imageUrl?: string;
};

export const ListItem = ({ title, detail, tags = [], imageUrl }: ListItemProps) => {
  const noImage = 'https://placehold.co/100x100?text=No+Image'; // 任意のnoImage画像

  return (
    <XStack
      p="$3"
      bg="$background"
      borderRadius="$4"
      alignItems="center"
      justifyContent="space-between"
      gap="$4"
    >
      {/* 左側：テキストエリア */}
      <YStack flex={1} gap="$2">
        <Text fontWeight="600" fontSize="$5">
          {title}
        </Text>

        <XStack flexWrap="wrap" gap="$1">
          {tags.map((tag, i) => (
            <Text
              key={i}
              fontSize="$3"
              color="$color"
              bg="$gray4"
              px="$2"
              py="$1"
              borderRadius="$2"
            >
              #{tag}
            </Text>
          ))}
        </XStack>

        <Text fontSize="$3" color="$gray10">
          {detail}
        </Text>
      </YStack>

      {/* 右側：画像エリア */}
      <Image
        source={{ uri: imageUrl ?? noImage }}
        width={80}
        height={80}
        borderRadius="$3"
        resizeMode="cover"
      />
    </XStack>
  );
};
