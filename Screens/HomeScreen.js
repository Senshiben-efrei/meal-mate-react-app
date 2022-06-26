import React from 'react';
import { NativeBaseProvider,View, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from "native-base";
import { MaterialCommunityIcons, Ionicons, Octicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Catalog from '../components/Catalog';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
import RecipeScreen from './RecipeScreen';
import Saved from '../components/Saved';


const Stack = createNativeStackNavigator();

export default function Home({navigation}) {
  return (
    <NativeBaseProvider>
        <View flex={1}>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name="List" component={Recipes} />
                        <Stack.Screen name="recipe" component={RecipeScreen} />
                    </Stack.Navigator>
            <Box bg="white" width="100%" maxW="3000px" alignSelf="center">
                <HStack bg="white" alignItems="center" safeAreaBottom shadow={6}>
                    <Pressable cursor="pointer" opacity={0.5} py="3" flex={1} onPress={() => {
                        navigation.getParent('LeftDrawer').openDrawer()}}>
                    <Center>
                        <Icon mb="1" as={<Ionicons name={"md-reorder-three-outline"} />} color="black" size="2xl" />
                    </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={0.5} py="2" flex={1} onPress={() => {
                        navigation.navigate('Saved Recipes')
                        }}>
                    <Center>
                        <Icon mb="1" as={<MaterialCommunityIcons name={"notebook-outline"} />} color="black" size="xl" />
                    </Center>
                    </Pressable>
                    <Pressable cursor="pointer" opacity={0.6} py="2" flex={1} onPress={() => {
                        navigation.getParent('RightDrawer').openDrawer()
                        }}>
                    <Center>
                        <Icon mb="1" as={<Octicons name={"checklist"} />} color="black" size="lg" />
                    </Center>
                    </Pressable>
                </HStack>
            </Box>
        </View>
    </NativeBaseProvider>
  );
}