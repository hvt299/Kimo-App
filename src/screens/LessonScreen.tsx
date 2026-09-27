import { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { ArrowLeft, PlayCircle } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fonts } from '../theme/fonts';

export default function LessonScreen({ navigation, route }: any) {
    const { colors } = useTheme();
    const { lessonId, title } = route.params;

    const scaleAnim = useRef(new Animated.Value(0.5)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                friction: 5,
                tension: 40,
                useNativeDriver: true,
            })
        ]).start();
    }, []);

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.backButton, { backgroundColor: colors.card, borderColor: colors.border }]}
                >
                    <ArrowLeft color={colors.text} size={24} />
                </TouchableOpacity>
            </View>

            <Animated.View style={[styles.content, { opacity: opacityAnim }]}>
                <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                    <LinearGradient
                        colors={['#4CAF50', '#2E7D32']}
                        style={styles.iconContainer}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <PlayCircle color="#FFFFFF" size={48} strokeWidth={2} />
                    </LinearGradient>
                </Animated.View>

                <Text style={[styles.lessonTitle, { color: colors.text }]}>{title}</Text>
                <Text style={styles.lessonDescription}>
                    Bài học này sẽ hướng dẫn bác các thao tác cơ bản nhất.
                    Cứ thong thả làm theo hướng dẫn trên màn hình nhé.
                </Text>

                <View style={[styles.infoCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
                    <Text style={[styles.infoText, { color: colors.text }]}>- Không sợ bấm sai</Text>
                    <Text style={[styles.infoText, { color: colors.text }]}>- Có thể làm lại nhiều lần</Text>
                    <Text style={[styles.infoText, { color: colors.text }]}>- Có âm thanh hướng dẫn</Text>
                </View>
            </Animated.View>

            <Animated.View style={[styles.footer, { opacity: opacityAnim }]}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => console.log('Bắt đầu bài: ', lessonId)}
                >
                    <LinearGradient
                        colors={['#4CAF50', '#2E7D32']}
                        style={styles.startButton}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                    >
                        <Text style={styles.startButtonText}>Bắt đầu học ngay</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animated.View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    header: { paddingHorizontal: 24, paddingTop: 16, paddingBottom: 8 },
    backButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
    },
    content: { flex: 1, padding: 24, alignItems: 'center', justifyContent: 'center' },
    iconContainer: {
        width: 96,
        height: 96,
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: '#2E7D32',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 16,
        elevation: 8,
    },
    lessonTitle: { fontFamily: fonts.bold, fontSize: 28, textAlign: 'center', marginBottom: 16 },
    lessonDescription: { fontFamily: fonts.regular, fontSize: 16, color: '#666666', textAlign: 'center', lineHeight: 24, marginBottom: 32, paddingHorizontal: 16 },
    infoCard: {
        width: '100%',
        padding: 20,
        borderRadius: 16,
        borderWidth: 1,
        gap: 12,
    },
    infoText: { fontFamily: fonts.medium, fontSize: 16 },

    footer: { padding: 24, paddingBottom: 40 },
    startButton: {
        paddingVertical: 18,
        borderRadius: 100,
        alignItems: 'center',
        shadowColor: '#2E7D32',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    startButtonText: { fontFamily: fonts.bold, fontSize: 20, color: '#FFFFFF' },
});