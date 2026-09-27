import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
    progress: number;
    height?: number;
    trackColor?: string;
    fillColor?: string;
}

export default function ProgressBar({
    progress,
    height = 8,
    trackColor = 'rgba(255,255,255,0.3)',
    fillColor = '#FFFFFF'
}: ProgressBarProps) {
    const validProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <View style={[styles.track, { height, backgroundColor: trackColor }]}>
            <View style={[styles.fill, { width: `${validProgress}%`, backgroundColor: fillColor }]} />
        </View>
    );
}

const styles = StyleSheet.create({
    track: {
        width: '100%',
        borderRadius: 100,
        overflow: 'hidden',
    },
    fill: {
        height: '100%',
        borderRadius: 100,
    },
});