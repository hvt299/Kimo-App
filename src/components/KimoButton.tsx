import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { fonts } from '../theme/fonts';

interface KimoButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary';
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
}

export default function KimoButton({
    title,
    onPress,
    variant = 'primary',
    style,
    textStyle,
    disabled = false
}: KimoButtonProps) {

    if (variant === 'primary') {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                disabled={disabled}
                style={[styles.container, style, disabled && styles.disabled]}
            >
                <LinearGradient
                    colors={disabled ? ['#9E9E9E', '#757575'] : ['#4CAF50', '#2E7D32']}
                    style={styles.gradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <Text style={[styles.text, styles.textPrimary, textStyle]}>{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            disabled={disabled}
            style={[styles.container, styles.secondary, style, disabled && styles.disabled]}
        >
            <Text style={[styles.text, styles.textSecondary, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4,
    },
    gradient: {
        paddingVertical: 18,
        paddingHorizontal: 24,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondary: {
        paddingVertical: 18,
        paddingHorizontal: 24,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#E5E5E5',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
        shadowOpacity: 0,
    },
    text: {
        fontFamily: fonts.bold,
        fontSize: 20,
    },
    textPrimary: {
        color: '#FFFFFF',
    },
    textSecondary: {
        color: '#1C1C1E',
    },
    disabled: {
        opacity: 0.6,
    }
});