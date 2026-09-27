import AsyncStorage from '@react-native-async-storage/async-storage';

const PROGRESS_KEY = '@kimo_progress';

export const saveLessonProgress = async (lessonId: string, attempts: number, completed: boolean) => {
    try {
        const existingData = await AsyncStorage.getItem(PROGRESS_KEY);
        const progress = existingData ? JSON.parse(existingData) : {};

        progress[lessonId] = {
            completed,
            attempts,
            lastUpdated: new Date().toISOString(),
        };

        await AsyncStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (error) {
        console.error('Lỗi khi lưu tiến trình:', error);
    }
};

export const getLessonProgress = async (lessonId: string) => {
    try {
        const existingData = await AsyncStorage.getItem(PROGRESS_KEY);
        if (!existingData) return null;
        const progress = JSON.parse(existingData);
        return progress[lessonId] || null;
    } catch (error) {
        console.error('Lỗi khi lấy tiến trình:', error);
        return null;
    }
};