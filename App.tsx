import { AppNavigator } from './src/navigation/AppNavigator';
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_700Bold,
  Poppins_800ExtraBold 
} from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Bold': Poppins_700Bold,
    'Poppins-ExtraBold': Poppins_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null; // Or a loading spinner
  }
  
  return <AppNavigator />;
}