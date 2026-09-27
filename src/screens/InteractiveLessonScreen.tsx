import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, PanResponder, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { ArrowLeft, Hand, ArrowRight, ArrowLeft as ArrowLeftIcon, ArrowUp, ArrowDown } from 'lucide-react-native';
import { fonts } from '../theme/fonts';
import KimoButton from '../components/KimoButton';
import KimoMascot from '../components/KimoMascot';
import { LESSON_DATA } from '../data/lessons';
import { saveLessonProgress } from '../utils/storage';

export default function InteractiveLessonScreen({ navigation, route }: any) {
    const { colors } = useTheme();
    const { lessonId, title } = route.params;
    const lesson = LESSON_DATA[lessonId];

    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);
    const [attempts, setAttempts] = useState(0);

    const opacityAnim = useRef(new Animated.Value(1)).current;
    const currentStep = lesson?.steps[currentStepIndex];
    const isLastStep = lesson ? currentStepIndex === lesson.steps.length - 1 : true;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderRelease: (evt, gestureState) => {
                const { dx, dy } = gestureState;
                if (!currentStep) return;
                if (currentStep.type === 'swipe_right' && dx > 50) handleStepSuccess();
                if (currentStep.type === 'swipe_left' && dx < -50) handleStepSuccess();
                if (currentStep.type === 'swipe_down' && dy > 50) handleStepSuccess();
                if (currentStep.type === 'swipe_up' && dy < -50) handleStepSuccess();
            },
        })
    ).current;

    useEffect(() => {
        setIsSuccess(false);
        Animated.timing(opacityAnim, { toValue: 1, duration: 300, useNativeDriver: true }).start();
    }, [currentStepIndex, opacityAnim]);

    if (!lesson || !currentStep) return null;

    const handleStepSuccess = () => setIsSuccess(true);

    const handleNext = async () => {
        if (isLastStep) {
            await saveLessonProgress(lessonId, attempts + 1, true);
            navigation.goBack(); // Học xong quay về màn Bản đồ bài học
        } else {
            setAttempts(attempts + 1);
            Animated.timing(opacityAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
                setCurrentStepIndex(prev => prev + 1);
            });
        }
    };

    const renderSwipeIcon = (type: string) => {
        switch (type) {
            case 'swipe_left': return <ArrowLeftIcon color="#FFFFFF" size={32} />;
            case 'swipe_up': return <ArrowUp color="#FFFFFF" size={32} />;
            case 'swipe_down': return <ArrowDown color="#FFFFFF" size={32} />;
            default: return <ArrowRight color="#FFFFFF" size={32} />;
        }
    };

    const swipeText = currentStep.type.includes('right') ? 'Vuốt sang phải' : currentStep.type.includes('left') ? 'Vuốt sang trái' : currentStep.type.includes('up') ? 'Vuốt lên trên' : 'Vuốt xuống dưới';

    return (
        <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={[styles.backButton, { backgroundColor: colors.card, borderColor: colors.border }]}>
                    <ArrowLeft color={colors.text} size={24} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: colors.text }]}>Bước {currentStepIndex + 1}/{lesson.steps.length}</Text>
                <View style={styles.placeholder} />
            </View>
            <Animated.View style={[styles.content, { opacity: opacityAnim }]}>
                <View style={styles.badgeWrapper}>
                    <View style={[styles.stepBadge, { backgroundColor: currentStep.type === 'info' ? '#E3F2FD' : '#FFF3E0' }]}>
                        <Text style={[styles.stepBadgeText, { color: currentStep.type === 'info' ? '#1976D2' : '#F57C00' }]}>{currentStep.type === 'info' ? 'LÝ THUYẾT' : 'THỰC HÀNH'}</Text>
                    </View>
                </View>
                <KimoMascot message={isSuccess ? (currentStep.successMessage || 'Tuyệt vời!') : currentStep.instruction} />
                <View style={styles.interactiveArea}>
                    {currentStep.imageUrl && <Image source={typeof currentStep.imageUrl === 'string' ? { uri: currentStep.imageUrl } : currentStep.imageUrl} style={styles.mediaFrame} resizeMode="contain" />}
                    {!isSuccess ? (
                        <View style={styles.actionContainer}>
                            {currentStep.type === 'info' && <KimoButton title="Đã hiểu, tiếp tục" onPress={handleStepSuccess} />}
                            {currentStep.type === 'tap' && (
                                <TouchableOpacity style={[styles.tapTarget, { backgroundColor: colors.primary }]} onPress={handleStepSuccess} activeOpacity={0.7}><Hand color="#FFFFFF" size={40} /></TouchableOpacity>
                            )}
                            {currentStep.type.startsWith('swipe') && (
                                <View style={[styles.swipeTrack, { backgroundColor: colors.border }]} {...panResponder.panHandlers}>
                                    <View style={[styles.swipeThumb, { backgroundColor: colors.primary }]}>{renderSwipeIcon(currentStep.type)}</View>
                                    <Text style={styles.swipeText}>{swipeText}</Text>
                                </View>
                            )}
                        </View>
                    ) : <KimoButton title={isLastStep ? "Hoàn thành bài học" : "Bước tiếp theo"} onPress={handleNext} />}
                </View>
            </Animated.View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1 },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 24, paddingTop: 16, paddingBottom: 16 },
    backButton: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', borderWidth: 1 },
    headerTitle: { fontFamily: fonts.bold, fontSize: 18 },
    placeholder: { width: 48 },
    content: { flex: 1, padding: 24 },
    interactiveArea: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    actionContainer: { width: '100%', alignItems: 'center' },
    tapTarget: { width: 120, height: 120, borderRadius: 60, justifyContent: 'center', alignItems: 'center', shadowColor: '#2E7D32', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 12, elevation: 8 },
    swipeTrack: { width: '100%', height: 80, borderRadius: 40, flexDirection: 'row', alignItems: 'center', padding: 8 },
    swipeThumb: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', zIndex: 2 },
    swipeText: { flex: 1, textAlign: 'center', fontFamily: fonts.medium, fontSize: 18, color: '#666666', marginLeft: -64 },
    mediaFrame: { width: '100%', height: 200, borderRadius: 16, marginBottom: 24 },
    badgeWrapper: { alignItems: 'flex-start', marginBottom: 12 },
    stepBadge: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 100 },
    stepBadgeText: { fontFamily: fonts.bold, fontSize: 12, letterSpacing: 1 },
});