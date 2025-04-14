import { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, ScrollView, Stack, Text, XStack } from 'tamagui';

import { ListItem } from '@/components/ListItem';

type List = {
  id: number;
  title: string;
  detail: string;
  tags: string[];
};

export default function HomeScreen() {
  const data: List[] = [
    { id: 1, title: 'ラーメン一郎', detail: '濃厚豚骨', tags: ['ラーメン', '豚骨'] },
    { id: 2, title: 'カフェ花子', detail: '落ち着いた雰囲気', tags: ['カフェ', 'スイーツ'] },
    { id: 3, title: 'ほげ旅館', detail: '落ち着いた雰囲気', tags: ['旅館', '温泉'] },
    { id: 4, title: '寿司 太郎', detail: '新鮮なネタと職人技', tags: ['寿司', '和食'] },
    { id: 5, title: 'ステーキ次郎', detail: 'ジューシーな赤身肉', tags: ['ステーキ', '肉料理'] },
    {
      id: 6,
      title: 'パン屋のんのん',
      detail: '焼きたてクロワッサン',
      tags: ['パン', 'ベーカリー'],
    },
    { id: 7, title: 'バー 夜空', detail: 'おしゃれなカクテルが楽しめる', tags: ['バー', '夜'] },
    {
      id: 8,
      title: '山の宿 まったり',
      detail: '絶景露天風呂と地元料理',
      tags: ['旅館', '温泉', '自然'],
    },
    {
      id: 9,
      title: '中華料理 龍華',
      detail: '本格四川料理が自慢',
      tags: ['中華', '辛い', '麻婆豆腐'],
    },
    {
      id: 10,
      title: '喫茶 さくら',
      detail: '昔ながらの純喫茶',
      tags: ['カフェ', 'レトロ', 'モーニング'],
    },
    {
      id: 11,
      title: 'ファミレス ふじ',
      detail: '家族で楽しめる定番メニュー',
      tags: ['ファミレス', '洋食'],
    },
    {
      id: 12,
      title: 'イタリアン ルチア',
      detail: '自家製パスタとワイン',
      tags: ['イタリアン', '洋食', 'パスタ'],
    },
  ];
  const [filteredData, setfilteredData] = useState<List[]>([]);

  const tags = ['すべて', ...new Set(data.map((i) => i.tags).flat())];
  const [selectedTag, setSelectedTag] = useState<string>('');

  const selectTag = (tag: string) => {
    setSelectedTag(tag);
  };

  useEffect(() => {
    if (selectedTag == '' || selectedTag == 'すべて') {
      setfilteredData(data);
      return;
    }
    const filterData = data.filter((i) => i.tags.includes(selectedTag));
    setfilteredData(filterData);
  }, [selectedTag]);
  const renderHeader = useMemo(
    () => (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} backgroundColor={'$gray1'}>
        <XStack gap="$2" marginLeft={16} paddingVertical={8}>
          {tags.map((tag, index) => (
            <Button
              key={index}
              size="$4"
              borderRadius="$6"
              color={selectedTag === tag ? '$blue1' : undefined}
              backgroundColor={selectedTag === tag ? '$blue10' : '$blue5'}
              onPress={() => selectTag(tag)}
              paddingHorizontal="$4"
              paddingVertical="$2"
              chromeless
            >
              {tag}
            </Button>
          ))}
        </XStack>
      </ScrollView>
    ),
    [tags, selectedTag],
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListItem title={item.title} detail={item.detail} tags={item.tags} />
        )}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        contentContainerStyle={{ paddingTop: 16, paddingBottom: 30 }}
      />
    </SafeAreaView>
  );
}
