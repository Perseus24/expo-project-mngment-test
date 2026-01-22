import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProjectListScreen } from '@/features/projects/ProjectListScreen';
import { AddProjectScreen } from '@/features/projects/AddProjectScreen';
import { colors } from '@/theme';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{ 
                    contentStyle: { backgroundColor: colors.background },
                }}
            >
                <Stack.Screen name="Manifest" component={ProjectListScreen} />
                <Stack.Screen name="AddProject" component={AddProjectScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};