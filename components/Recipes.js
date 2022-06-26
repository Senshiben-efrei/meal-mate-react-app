import React, {useState, useEffect} from 'react';
import { ScrollView, Center, View, Input, Icon, Pressable } from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import Recipe from './Recipe';

export default function Recipes({navigation}) {
    const [recipe, setRecipe] = useState([]);

    const GetRecipes = (n) => {
        fetch('http://192.168.1.74:5000/recipes')
        .then(response => response.json())
        .then((data) => {
            setRecipe(data.splice(25,n));
        })
        .catch((error) => console.log(error.message))
    }

    useEffect(() => {
        GetRecipes(30)
    },[])
    return (
        <View>
            <Center bgColor="white" pt="10" pb="5" px="5">
                <Input h="12" placeholder="What recipe are you looking for ?" variant="filled" width="100%" borderRadius="10" px="5" borderWidth="0" InputRightElement={<Icon mr="4" size="4" color="black" as={<Ionicons name="ios-search" />} />} />
            </Center>
            <Center h = "87%">
                <ScrollView maxW="3000" width="100%" _contentContainerStyle={{
                minW: "72"
                }}>
                {recipe.map(recipe => {return (
                    <Pressable onPress={() => {
                        navigation.navigate('recipe', recipe)}}
                        key={recipe.id_recipe}>
                        <Recipe item={recipe} />
                    </Pressable>
                    )})}
                </ScrollView>
            </Center>
        </View>
    )
  }