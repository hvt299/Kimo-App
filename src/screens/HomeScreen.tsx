import { useState, useCallback, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme, useFocusEffect } from '@react-navigation/native';
import { Award } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fonts } from '../theme/fonts';
import ProgressBar from '../components/ProgressBar';
import LevelCard from '../components/LevelCard';
import { CURRICULUM, TOTAL_LESSONS } from '../data/curriculum';

export default function HomeScreen({ navigation }: any) {
    const { colors } = useTheme();
    const [progressData, setProgressData] = useState<Record<string, any>>({});
    const [completedTotal, setCompletedTotal] = useState(0);

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
                        setCompletedTotal(count);
                    }
                } catch (error) {
                    console.error('Lỗi khi tải tiến trình:', error);
                }
            };
            loadProgress();
        }, [])
    );

    const globalProgress = TOTAL_LESSONS > 0 ? (completedTotal / TOTAL_LESSONS) * 100 : 0;

    // Hàm tính số bài đã hoàn thành trong 1 Cấp độ
    const getLevelCompletedCount = (lessons: any[]) => {
        return lessons.filter(lesson => progressData[lesson.id]?.completed).length;
    };

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
                                <Text style={styles.progressTitle}>Tiến độ tổng thể</Text>
                                <Text style={styles.progressSubtitle}>Đã hoàn thành {completedTotal}/{TOTAL_LESSONS} bài học</Text>
                            </View>
                            <View style={styles.badgeContainer}>
                                <Award color="#2E7D32" size={28} />
                            </View>
                        </View>
                        <ProgressBar progress={globalProgress} trackColor="rgba(255,255,255,0.3)" fillColor="#FFFFFF" />
                    </LinearGradient>

                    <Text style={[styles.sectionTitle, { color: colors.text }]}>Các Cấp Độ Học Tập</Text>

                    <View>
                        {CURRICULUM.map((level) => (
                            <LevelCard
                                key={level.levelId}
                                title={level.levelTitle}
                                description={level.description}
                                completedLessons={getLevelCompletedCount(level.lessons)}
                                totalLessons={level.lessons.length}
                                onPress={() => navigation.navigate('LevelDetail', { levelId: level.levelId })}
                            />
                        ))}
                    </View>
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
    progressCard: { padding: 20, borderRadius: 20, marginBottom: 32, shadowColor: '#2E7D32', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 12, elevation: 8 },
    progressHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    progressTitle: { fontFamily: fonts.bold, fontSize: 20, color: '#FFFFFF', marginBottom: 4 },
    progressSubtitle: { fontFamily: fonts.medium, fontSize: 14, color: '#E8F5E9' },
    badgeContainer: { backgroundColor: '#FFFFFF', padding: 10, borderRadius: 16 },
    sectionTitle: { fontFamily: fonts.bold, fontSize: 22, marginBottom: 16 },
});