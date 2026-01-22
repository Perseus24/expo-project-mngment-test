import React from 'react';
import withObservables from '@nozbe/with-observables'
import { database } from '@/database/index'
import Project from '@/database/models/Project'
import Carousel from 'react-native-reanimated-carousel';
import { View, Text, Dimensions } from 'react-native'
import { colors } from '@/theme';
import { Trash } from 'lucide-react-native';

const enhance = withObservables([], () => ({
    projects: database.get<Project>('projects').query().observe()
}))

export const ProjectCarousel = enhance(({ projects} : { projects: Project[] }) => {
    const screenWidth = Dimensions.get('window').width;
    const shouldLoop = projects.length > 3;

    const handleDeleteProject = async (project: Project) => {
        try {
            await database.write( async() => {
                await project.destroyPermanently();
            });
            console.log(`Deleted project with id: ${project.id}`);
        } catch (error) {
            console.error("Failed to delete project:", error);
        }
    }
    return (
        <Carousel
            key={`carousel-${projects.length}`}
            loop={shouldLoop}
            width={screenWidth - 32}
            height={150}
            data={projects}
            mode="parallax"
            modeConfig={{
                parallaxScrollingScale: 0.9,
                parallaxScrollingOffset: 50,
            }}
            scrollAnimationDuration={1000}
            autoPlay={false}
            renderItem={({item}) => (
                <View style={{ flexDirection: 'column', gap: 12, backgroundColor: colors.white, borderRadius: 12, padding: 16, height: 150 }}>
                    <View
                        style={{  justifyContent: 'space-between', flexDirection: 'row' }}
                        >
                        <Text style={{ flex: 3, color: colors.black, fontFamily: 'Poppins-Regular', fontSize: 16 }}>{item.title}</Text>
                        <Trash onPress={() => handleDeleteProject(item)} color={colors.error} size={20}  />
                    </View>
                    <Text style={{ color: colors.textSecondary, fontFamily: 'Poppins-Regular', fontSize: 15}}>{item.description}</Text>
                </View>
            )}
        />
    );
});