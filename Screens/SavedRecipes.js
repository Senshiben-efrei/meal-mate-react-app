import { HStack, View, Icon, IconButton, Text, ScrollView } from 'native-base';
import React, {useState, useEffect} from 'react';
import { AntDesign, Ionicons } from "@expo/vector-icons"
import FavRecipe from '../components/FavRecipe';

export default function Saved({navigation}) {
  const [fav, setFavs] = useState([]);

  const GetRecipes = () => {
      fetch('http://192.168.1.74:5000/recipes')
      .then(response => response.json())
      .then((data) => {
        setFavs(data.splice(0,15));
      })
      .catch((error) => console.log(error.message))
  }

  useEffect(() => {
      GetRecipes()
  },[])
  return (
    <View flex={1} alignItems="center">
      <HStack space="16" alignItems="center" px="3"  pt="7" pb="1" borderRadius="15" background="white" shadow="3">
      <IconButton icon={<Icon as={<Ionicons name="close-outline" />} />} borderRadius="full" _icon={{
                  color: "black",
                  size: "xl"
                }} _hover={{
                  bg: "black:alpha.20"
                }} _pressed={{
                  bg: "black:alpha.20",
                  _icon: {
                    name: "emoji-flirt"
                  },
                  _ios: {
                    _icon: {
                      size: "2xl"
                    }
                  }
                }} _ios={{
                  _icon: {
                    size: "2xl"
                  }
                }} 
                onPress={() => { navigation.navigate('Home Page') }}/>
        <Text fontSize="3xl">Recipe Book</Text>
        <Icon color="#59DBB7" as={AntDesign} name="heart" size="lg"/>
      </HStack>

      <ScrollView maxW="3000" width="100%" _contentContainerStyle={{ minW: "72" }}>
          {fav.map(fav => {return <FavRecipe key={fav.id_recipe} item={fav}/>})}
      </ScrollView>

    </View>
  );
}