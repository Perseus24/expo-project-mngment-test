import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/button';
import { Dimensions, Text, View } from 'react-native';
import { colors } from '@/theme';
import { Plus } from 'lucide-react-native';
import { ProjectCarousel } from '@/components/ProjectCarousel';

import { database } from '@/database/index';
import Project from '@/database/models/Project';

export const ProjectListScreen = () => {

    const handleAddProject = async () => {
        try {
            await database.write(async () => {
                const newProject = await database.get<Project>('projects').create(project => {
                    project.title = 'First Project';
                    project.status = 'active';
                    project.description = 'This is my first project';
                    project.createdAt = new Date();
                })
            });
        } catch (error) {
            console.error("Failed to add project:", error);
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start', padding: 16, gap: 12}}>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', gap: 4 }}>
                    <Text style={{ fontSize: 24, fontWeight: '500', color: colors.textPrimary, fontFamily: 'Poppins-Regular' }}>Projects</Text>
                    <Text 
                        style={{ color: colors.textSecondary, fontFamily: 'Poppins-Regular' }}
                        >
                            You have <Text style={{ color: colors.success, fontFamily: 'Poppins-Regular', fontWeight: '700' }}>4</Text> projects
                    </Text>
                </View>
                <Button 
                    title="Add" 
                    onPress={handleAddProject} 
                    icon={<Plus color={colors.primary} size={16} style={{ marginRight: 8 }} />}
                    />
            </View>
            <ProjectCarousel />
        </View>
    )
}