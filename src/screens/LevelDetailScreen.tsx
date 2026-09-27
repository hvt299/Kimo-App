import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import { ArrowLeft } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fonts } from '../theme/fonts';
import LessonCard from '../components/LessonCard';
import { CURRICULUM } from '../data/curriculum';

export default function LevelDetailScreen({ navigation, route }: any) {
    const { colors } = useTheme();
    const { levelId } = route.params;

    const level = CURRICULUM.find(l => l.levelId === levelId);
    const [progressData, setProgressData] = useState<Record<string, any>>({});

    useFocusEffect(
        useCallback(() => {
            const loadProgress = async () => {
                try {
                    const existingData = await AsyncStorage.getItem('@kimo_progress');
                    if (existingData) setProgressData(JSON.parse(existingData));
                } catch (error) {
                    console.error('Lỗi khi tải tiến trình:', error);
                }
            };
            loadProgress();
        }, [])
    );

    if (!level) return null;

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, { backgroundColor: colors.card, borderColor: colors.border }]}>
                    <ArrowLeft color={colors.text} size={24} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: colors.text }]} numberOfLines={1}>
                    {level.levelTitle}
                </Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Text style={[styles.description, { color: colors.text }]}>{level.description}</Text>

                <View style={styles.listContainer}>
                    {level.lessons.map((lesson) => (
                        <LessonCard
                            key={lesson.id}
                            title={lesson.title}
                            subtitle={lesson.subtitle}
                            Icon={lesson.Icon}
                            isCompleted={progressData[lesson.id]?.completed}
                            onPress={() => navigation.navigate('Lesson', { lessonId: lesson.id, title: lesson.title })}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#E5E5E5' },
    backButton: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginRight: 16 },
    headerTitle: { flex: 1, fontFamily: fonts.bold, fontSize: 20 },
    scrollContainer: { padding: 24, paddingBottom: 40 },
    description: { fontFamily: fonts.medium, fontSize: 16, marginBottom: 24, lineHeight: 24 },
    listContainer: { gap: 16 },
});