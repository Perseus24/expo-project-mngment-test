import React from 'react';
import { Button } from '@/components/button';
import { Dimensions, Text, View } from 'react-native';
import { colors } from '@/theme';
import { Plus } from 'lucide-react-native';
import { ProjectCarousel } from '@/components/ProjectCarousel';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/types';


export const ProjectListScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 16, gap: 12}}>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', gap: 4 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: colors.textPrimary, fontFamily: 'Poppins-Regular' }}>Projects</Text>
                    <Text 
                        style={{ color: colors.textSecondary, fontFamily: 'Poppins-Regular' }}
                        >
                            You have <Text style={{ color: colors.success, fontFamily: 'Poppins-Regular', fontWeight: '700' }}>4</Text> projects
                    </Text>
                </View>
                <Button 
                    title="Add" 
                    onPress={() => navigation.navigate('AddProject')} 
                    icon={<Plus color={colors.primary} size={16} style={{ marginRight: 8 }} />}
                    />
            </View>
            <ProjectCarousel />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <View style={{ flexDirection: 'column'}}>
                    <Text style={{ fontSize: 20, color: colors.white, fontFamily: 'Poppins-Regular' }}>Today's Task</Text>
                    <Text style={{ fontSize: 14, color: colors.textSecondary, fontFamily: 'Poppins-Regular' }}>{new Date().toLocaleDateString('en-US', { weekday: 'long' })},  {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}</Text>
                </View>
                <Button 
                    title="New Task" 
                    onPress={() => navigation.navigate('AddProject')} 
                    icon={<Plus color={colors.primary} size={16} style={{ marginRight: 8 }} />}
                    styleProps={{ paddingVertical: 1 }}
                    />
            </View>
        </View>
    )
}