import { Text, View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { database } from '@/database/index';
import Project from '@/database/models/Project';
import { useState } from 'react';
import { colors } from '@/theme';
import { Button } from '@/components/button';

import { useNavigation } from '@react-navigation/native';

export const AddProjectScreen = () => {
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddProject = async () => {
        try {
            await database.write(async () => {
                const newProject = await database.get<Project>('projects').create(project => {
                    project.title = title;
                    project.status = 'active';
                    project.description = description;
                    project.createdAt = new Date();
                })
            });

            navigation.goBack();
        } catch (error) {
            console.error("Failed to add project:", error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{flex:1 , padding:16, gap:12}}>
                <View style={{ flexDirection: 'column', gap: 8}}>
                    <Text style={style.label}>Title</Text>
                    <TextInput 
                        style={style.input} 
                        value={title} 
                        onChangeText={setTitle} />
                </View>
                <View style={{ flexDirection: 'column', gap: 8}}>
                    <Text style={style.label}>Description</Text>
                    <TextInput 
                        multiline={true}
                        numberOfLines={4}
                        maxLength={200}
                        style={[style.input, { height: 100, textAlignVertical: 'top' }]} 
                        value={description} 
                        onChangeText={setDescription} />
                </View>
                <Button title="Save" styleProps={{ marginTop: 32 }} onPress={handleAddProject} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const style = StyleSheet.create({
    label: {
        color: colors.accent,
        fontFamily: 'Poppins-Regular'
    },
    input: {
        borderWidth: 1,
        width: '100%',
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        color: 'white',
        fontFamily: 'Poppins-Regular'
    }
});