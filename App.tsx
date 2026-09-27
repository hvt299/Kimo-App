import { useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, BeVietnamPro_400Regular, BeVietnamPro_500Medium, BeVietnamPro_700Bold } from '@expo-google-fonts/be-vietnam-pro';
import { BookOpen, LifeBuoy, Settings } from 'lucide-react-native';

import HomeScreen from './src/screens/HomeScreen';
import LessonScreen from './src/screens/LessonScreen';
import UtilitiesScreen from './src/screens/UtilitiesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { lightTheme, darkTheme } from './src/theme/colors';
import { fonts } from './src/theme/fonts';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Lesson" component={LessonScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const scheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    BeVietnamPro_400Regular,
    BeVietnamPro_500Medium,
    BeVietnamPro_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              if (route.name === 'HomeTab') return <BookOpen color={color} size={28} />;
              if (route.name === 'UtilitiesTab') return <LifeBuoy color={color} size={28} />;
              if (route.name === 'SettingsTab') return <Settings color={color} size={28} />;
            },
            tabBarActiveTintColor: '#2E7D32',
            tabBarInactiveTintColor: '#8E8E93',
            tabBarStyle: {
              height: 70,
              paddingBottom: 12,
              paddingTop: 8,
              borderTopWidth: 1,
              elevation: 8,
            },
            tabBarLabelStyle: {
              fontFamily: fonts.medium,
              fontSize: 13,
            }
          })}
        >
          <Tab.Screen
            name="HomeTab"
            component={HomeStackNavigator}
            options={{ title: 'Lộ trình' }}
          />
          <Tab.Screen
            name="UtilitiesTab"
            component={UtilitiesScreen}
            options={{ title: 'Tiện ích' }}
          />
          <Tab.Screen
            name="SettingsTab"
            component={SettingsScreen}
            options={{ title: 'Cài đặt' }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}