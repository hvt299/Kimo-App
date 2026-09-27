import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Smile } from 'lucide-react-native';
import { fonts } from '../theme/fonts';

interface KimoMascotProps {
    message: string;
}

export default function KimoMascot({ message }: KimoMascotProps) {
    const { colors } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={[styles.avatarContainer, { backgroundColor: colors.primary }]}>
                <Smile color="#FFFFFF" size={32} strokeWidth={2} />
            </View>
            <View style={styles.bubble}>
                <Text style={[styles.messageText, { color: colors.text }]}>{message}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
        marginBottom: 24,
    },
    avatarContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    bubble: {
        flex: 1,
    },
    messageText: {
        fontFamily: fonts.medium,
        fontSize: 16,
        lineHeight: 24,
    },
});