import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fonts } from '../theme/fonts';
import KimoButton from '../components/KimoButton';
import { LESSON_DATA } from '../data/lessons';

export default function LessonScreen({ navigation, route }: any) {
    const { colors } = useTheme();
    const { lessonId, title } = route.params;
    const lesson = LESSON_DATA[lessonId];

    const [isCompleted, setIsCompleted] = useState(false);

    // Load lại trạng thái xem bài học đã hoàn thành chưa mỗi khi màn hình hiển thị
    useFocusEffect(
        useCallback(() => {
            const loadProgress = async () => {
                try {
                    const existingData = await AsyncStorage.getItem('@kimo_progress');
                    if (existingData) {
                        const progress = JSON.parse(existingData);
                        if (progress[lessonId]?.completed) setIsCompleted(true);
                    }
                } catch (error) {
                    console.error('Lỗi khi tải tiến trình:', error);
                }
            };
            loadProgress();
        }, [lessonId])
    );

    if (!lesson) {
        return (
            <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background, padding: 24, justifyContent: 'center' }]}>
                <Text style={[styles.errorTitle, { color: colors.text }]}>{title}</Text>
                <Text style={styles.errorText}>Bài học này đang được Kimo xây dựng và sẽ sớm ra mắt nhé!</Text>
                <KimoButton title="Quay lại" onPress={() => navigation.goBack()} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, { backgroundColor: colors.card, borderColor: colors.border }]}>
                    <ArrowLeft color={colors.text} size={24} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: colors.text }]} numberOfLines={1}>{title}</Text>
                <View style={styles.placeholder} />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Text style={[styles.description, { color: colors.text }]}>{lesson.description}</Text>

                <View style={styles.timelineContainer}>
                    {lesson.steps.map((step, index) => {
                        const isLast = index === lesson.steps.length - 1;
                        return (
                            <View key={step.id} style={styles.timelineRow}>
                                <View style={styles.timelineIconColumn}>
                                    {isCompleted ? (
                                        <CheckCircle2 color="#4CAF50" size={28} />
                                    ) : (
                                        <View style={[styles.circleNumber, { backgroundColor: colors.primary }]}>
                                            <Text style={styles.circleNumberText}>{index + 1}</Text>
                                        </View>
                                    )}
                                    {!isLast && <View style={[styles.timelineLine, { backgroundColor: isCompleted ? '#4CAF50' : colors.border }]} />}
                                </View>

                                <View style={[styles.timelineContent, { backgroundColor: colors.card, borderColor: colors.border }]}>
                                    <Text style={[styles.stepType, { color: step.type === 'info' ? '#1976D2' : '#F57C00' }]}>
                                        {step.type === 'info' ? 'LÝ THUYẾT' : 'THỰC HÀNH'}
                                    </Text>
                                    <Text style={[styles.stepInstruction, { color: colors.text }]}>{step.instruction}</Text>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>

            <View style={[styles.footer, { backgroundColor: colors.background }]}>
                <KimoButton
                    title={isCompleted ? "Ôn tập lại từ đầu" : "Bắt đầu học ngay"}
                    onPress={() => navigation.navigate('InteractiveLesson', { lessonId, title })}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#E5E5E5' },
    backButton: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', borderWidth: 1, marginRight: 16 },
    headerTitle: { flex: 1, fontFamily: fonts.bold, fontSize: 20 },
    placeholder: { width: 48 },
    scrollContainer: { padding: 24, paddingBottom: 40 },
    description: { fontFamily: fonts.regular, fontSize: 16, marginBottom: 32, lineHeight: 24, color: '#666666' },
    errorTitle: { fontFamily: fonts.bold, fontSize: 24, textAlign: 'center', marginBottom: 16 },
    errorText: { fontFamily: fonts.regular, fontSize: 16, color: '#666666', textAlign: 'center', marginBottom: 32, lineHeight: 24 },

    timelineContainer: { marginTop: 8 },
    timelineRow: { flexDirection: 'row', marginBottom: 16 },
    timelineIconColumn: { alignItems: 'center', width: 32, marginRight: 16 },
    circleNumber: { width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
    circleNumberText: { fontFamily: fonts.bold, color: '#FFFFFF', fontSize: 14 },
    timelineLine: { width: 2, flex: 1, marginTop: 8, marginBottom: 8, borderRadius: 1 },

    timelineContent: { flex: 1, padding: 16, borderRadius: 16, borderWidth: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 1 },
    stepType: { fontFamily: fonts.bold, fontSize: 12, marginBottom: 8, letterSpacing: 0.5 },
    stepInstruction: { fontFamily: fonts.medium, fontSize: 15, lineHeight: 22 },

    footer: { padding: 24, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#E5E5E5' },
});