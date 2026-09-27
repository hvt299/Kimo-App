import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { ChevronRight } from 'lucide-react-native';
import { fonts } from '../theme/fonts';

interface LessonCardProps {
    title: string;
    subtitle: string;
    Icon: any;
    onPress: () => void;
}

export default function LessonCard({ title, subtitle, Icon, onPress }: LessonCardProps) {
    const { colors } = useTheme();

    return (
        <TouchableOpacity
            style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}
            onPress={onPress}
            activeOpacity={0.7}
        >
            <View style={[styles.iconWrapper, { backgroundColor: colors.background }]}>
                <Icon color={colors.primary} size={28} strokeWidth={2.5} />
            </View>

            <View style={styles.cardContent}>
                <Text style={[styles.cardTitle, { color: colors.text }]}>{title}</Text>
                <Text style={styles.cardSubtitle}>{subtitle}</Text>
            </View>

            <ChevronRight color="#C7C7CC" size={24} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row', alignItems: 'center', padding: 16, borderRadius: 20, borderWidth: 1,
        shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, elevation: 2,
    },
    iconWrapper: { width: 60, height: 60, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 16 },
    cardContent: { flex: 1, justifyContent: 'center' },
    cardTitle: { fontFamily: fonts.bold, fontSize: 18, marginBottom: 4 },
    cardSubtitle: { fontFamily: fonts.regular, fontSize: 14, color: '#666666' },
});