import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ChevronRight, FolderOpen } from 'lucide-react-native';
import { fonts } from '../theme/fonts';
import ProgressBar from './ProgressBar';

interface LevelCardProps {
    title: string;
    description: string;
    completedLessons: number;
    totalLessons: number;
    onPress: () => void;
}

export default function LevelCard({ title, description, completedLessons, totalLessons, onPress }: LevelCardProps) {
    const { colors } = useTheme();
    const progress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;
    const isCompleted = completedLessons === totalLessons && totalLessons > 0;

    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.card, borderColor: isCompleted ? '#4CAF50' : colors.border }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={styles.header}>
                <View style={[styles.iconWrapper, { backgroundColor: isCompleted ? '#E8F5E9' : colors.background }]}>
                    <FolderOpen color={isCompleted ? '#2E7D32' : colors.primary} size={28} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <ChevronRight color="#C7C7CC" size={24} />
            </View>

            <View style={styles.progressSection}>
                <View style={styles.progressTextRow}>
                    <Text style={styles.progressText}>
                        {isCompleted ? 'Đã hoàn thành xuất sắc 🎉' : 'Tiến độ Cấp độ này:'}
                    </Text>
                    <Text style={[styles.progressCount, { color: colors.primary }]}>{completedLessons}/{totalLessons} bài</Text>
                </View>
                <ProgressBar progress={progress} height={6} trackColor={colors.background} fillColor={colors.primary} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: { padding: 16, borderRadius: 20, borderWidth: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2, marginBottom: 16 },
    header: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
    iconWrapper: { width: 56, height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
    textContainer: { flex: 1, paddingRight: 8 },
    title: { fontFamily: fonts.bold, fontSize: 18, marginBottom: 4 },
    description: { fontFamily: fonts.regular, fontSize: 14, color: '#666666' },
    progressSection: { marginTop: 4, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#F0F0F0' },
    progressTextRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
    progressText: { fontFamily: fonts.medium, fontSize: 14, color: '#666666' },
    progressCount: { fontFamily: fonts.bold, fontSize: 14 },
});