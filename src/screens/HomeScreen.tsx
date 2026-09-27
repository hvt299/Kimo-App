import { useState, useCallback, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import { Award } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fonts } from '../theme/fonts';
import ProgressBar from '../components/ProgressBar';
import LessonCard from '../components/LessonCard';
import { CURRICULUM, TOTAL_LESSONS } from '../data/curriculum';

export default function HomeScreen({ navigation }: any) {
    const { colors } = useTheme();
    const [progressData, setProgressData] = useState<Record<string, any>>({});
    const [completedCount, setCompletedCount] = useState(0);

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(30)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
            Animated.spring(slideAnim, { toValue: 0, tension: 50, friction: 7, useNativeDriver: true })
        ]).start();
    }, [fadeAnim, slideAnim]);

    useFocusEffect(
        useCallback(() => {
            const loadProgress = async () => {
                try {
                    const existingData = await AsyncStorage.getItem('@kimo_progress');
                    if (existingData) {
                        const progress = JSON.parse(existingData);
                        setProgressData(progress);
                        const count = Object.values(progress).filter((item: any) => item.completed).length;
                        setCompletedCount(count);
                    }
                } catch (error) {
                    console.error('Lỗi khi tải tiến trình:', error);
                }
            };
            loadProgress();
        }, [])
    );

    const progressPercentage = TOTAL_LESSONS > 0 ? (completedCount / TOTAL_LESSONS) * 100 : 0;

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
                    <View style={styles.header}>
                        <Text style={[styles.greeting, { color: colors.text }]}>Chào buổi sáng,</Text>
                        <Text style={[styles.appName, { color: colors.primary }]}>Kimo</Text>
                    </View>

                    <LinearGradient colors={['#4CAF50', '#2E7D32']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.progressCard}>
                        <View style={styles.progressHeader}>
                            <View>
                                <Text style={styles.progressTitle}>Tiến độ của bác</Text>
                                <Text style={styles.progressSubtitle}>Đã hoàn thành {completedCount}/{TOTAL_LESSONS} bài học</Text>
                            </View>
                            <View style={styles.badgeContainer}>
                                <Award color="#2E7D32" size={28} />
                            </View>
                        </View>
                        <ProgressBar progress={progressPercentage} trackColor="rgba(255,255,255,0.3)" fillColor="#FFFFFF" />
                    </LinearGradient>

                    {CURRICULUM.map((level) => (
                        <View key={level.levelId} style={styles.levelSection}>
                            <Text style={[styles.levelTitle, { color: colors.text }]}>{level.levelTitle}</Text>
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
                        </View>
                    ))}
                </Animated.View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    scrollContainer: { padding: 24, paddingBottom: 40 },
    header: { marginBottom: 24 },
    greeting: { fontFamily: fonts.medium, fontSize: 20, marginBottom: 4 },
    appName: { fontFamily: fonts.bold, fontSize: 32 },
    progressCard: {
        padding: 20, borderRadius: 20, marginBottom: 32,
        shadowColor: '#2E7D32', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 12, elevation: 8,
    },
    progressHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    progressTitle: { fontFamily: fonts.bold, fontSize: 20, color: '#FFFFFF', marginBottom: 4 },
    progressSubtitle: { fontFamily: fonts.medium, fontSize: 14, color: '#E8F5E9' },
    badgeContainer: { backgroundColor: '#FFFFFF', padding: 10, borderRadius: 16 },
    levelSection: { marginBottom: 32 },
    levelTitle: { fontFamily: fonts.bold, fontSize: 20, marginBottom: 16 },
    listContainer: { gap: 12 },
});