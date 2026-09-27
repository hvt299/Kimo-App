import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { fonts } from '../theme/fonts';

export default function SettingsScreen() {
    const { colors } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.title, { color: colors.text }]}>Cài đặt</Text>
            <Text style={[styles.subtitle, { color: colors.text }]}>Điều chỉnh cỡ chữ và âm thanh sẽ nằm ở đây.</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 24, justifyContent: 'center', alignItems: 'center' },
    title: { fontFamily: fonts.bold, fontSize: 28, marginBottom: 12 },
    subtitle: { fontFamily: fonts.regular, fontSize: 16, textAlign: 'center', color: '#666666' }
});