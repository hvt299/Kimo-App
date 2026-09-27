import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, StatusBar, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { Pointer, Phone, Camera, ChevronRight, Award } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fonts } from '../theme/fonts';

const LESSON_CATEGORIES = [
    {
        id: 'touch_swipe',
        title: 'Làm quen màn hình',
        subtitle: 'Học cách chạm, vuốt và thu phóng',
        Icon: Pointer
    },
    {
        id: 'call',
        title: 'Gọi điện thoại',
        subtitle: 'Lưu danh bạ, nghe và gọi',
        Icon: Phone
    },
    {
        id: 'camera',
        title: 'Chụp ảnh & Thư viện',
        subtitle: 'Cách lưu giữ kỷ niệm',
        Icon: Camera
    },
];

export default function HomeScreen({ navigation }: any) {
    const { colors } = useTheme();

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(30)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
            Animated.spring(slideAnim, {
                toValue: 0,
                tension: 50,
                friction: 7,
                useNativeDriver: true,
            })
        ]).start();
    }, []);

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
                    <View style={styles.header}>
                        <Text style={[styles.greeting, { color: colors.text }]}>Chào buổi sáng,</Text>
                        <Text style={[styles.appName, { color: colors.primary }]}>Kimo</Text>
                    </View>

                    <LinearGradient
                        colors={['#4CAF50', '#2E7D32']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.progressCard}
                    >
                        <View style={styles.progressHeader}>
                            <View>
                                <Text style={styles.progressTitle}>Tiến độ của bác</Text>
                                <Text style={styles.progressSubtitle}>Đã hoàn thành 0/15 bài học</Text>
                            </View>
                            <View style={styles.badgeContainer}>
                                <Award color="#2E7D32" size={28} />
                            </View>
                        </View>
                        <View style={styles.progressBarBackground}>
                            <View style={[styles.progressBarFill, { width: '5%' }]} />
                        </View>
                    </LinearGradient>

                    <Text style={[styles.sectionTitle, { color: colors.text }]}>Hôm nay bác muốn học gì?</Text>

                    <View style={styles.listContainer}>
                        {LESSON_CATEGORIES.map((category, index) => (
                            <Animated.View
                                key={category.id}
                                style={{
                                    opacity: fadeAnim,
                                    transform: [{ translateY: slideAnim }],
                                }}
                            >
                                <TouchableOpacity
                                    style={[styles.lessonCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                                    onPress={() => navigation.navigate('Lesson', { lessonId: category.id, title: category.title })}
                                    activeOpacity={0.7}
                                >
                                    <View style={[styles.iconWrapper, { backgroundColor: colors.background }]}>
                                        <category.Icon color={colors.primary} size={28} strokeWidth={2.5} />
                                    </View>

                                    <View style={styles.cardContent}>
                                        <Text style={[styles.cardTitle, { color: colors.text }]}>{category.title}</Text>
                                        <Text style={styles.cardSubtitle}>{category.subtitle}</Text>
                                    </View>

                                    <ChevronRight color="#C7C7CC" size={24} />
                                </TouchableOpacity>
                            </Animated.View>
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

    progressCard: {
        padding: 20,
        borderRadius: 20,
        marginBottom: 32,
        shadowColor: '#2E7D32',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 8,
    },
    progressHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    progressTitle: { fontFamily: fonts.bold, fontSize: 20, color: '#FFFFFF', marginBottom: 4 },
    progressSubtitle: { fontFamily: fonts.medium, fontSize: 14, color: '#E8F5E9' },
    badgeContainer: { backgroundColor: '#FFFFFF', padding: 10, borderRadius: 16 },
    progressBarBackground: { height: 8, backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 4 },
    progressBarFill: { height: 8, backgroundColor: '#FFFFFF', borderRadius: 4 },

    sectionTitle: { fontFamily: fonts.bold, fontSize: 22, marginBottom: 16 },
    listContainer: { gap: 16 },

    lessonCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 20,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
    },
    iconWrapper: {
        width: 60,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    cardContent: { flex: 1, justifyContent: 'center' },
    cardTitle: { fontFamily: fonts.bold, fontSize: 18, marginBottom: 4 },
    cardSubtitle: { fontFamily: fonts.regular, fontSize: 14, color: '#666666' },
});