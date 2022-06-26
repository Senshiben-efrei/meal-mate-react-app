import { Text, View, Box, Center, Heading, IconButton, AspectRatio, Divider, Image, Icon, HStack, Badge, ZStack, ScrollView } from 'native-base';
import { Octicons, MaterialCommunityIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import React, {useState, useEffect} from 'react';

export default function RecipeScreen({navigation, route}) {
    const [recipeIngredient, setRecipeIngredient] = useState([]);

    const GetRecipes = () => {
        fetch('http://192.168.1.74:5000/prepare/'+route.params.id_recipe)
        .then(response => response.json())
        .then((data) => {
            setRecipeIngredient(data.splice(0,30));
        })
        .catch((error) => console.log(error.message))
    }

    useEffect(() => {
        GetRecipes()
    },[])
    return(
        <View flex="1">
            <ZStack>
                <AspectRatio w="100%" ratio={16 / 10}>
                <Image borderRadius="25" source={{
                uri: route.params.image_url}} alt="image" />
                </AspectRatio>
                <HStack space="73%" alignItems="center" px="3"  pt="7" pb="1" borderRadius="15">
                    <IconButton backgroundColor="white:alpha.70" icon={<Icon as={<Ionicons name="close-outline" />} />} borderRadius="15" _icon={{
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
                            onPress={() => { navigation.navigate('List') }}/>
                    <IconButton backgroundColor="white:alpha.70" icon={<Icon as={<Ionicons name="heart-outline" />} />} borderRadius="15" _icon={{
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
                            onPress={() => { console.log(`liked recipe ${route.params.id_recipe + ' ' + route.params.recipe_name}`) }}/>
                </HStack>
            </ZStack>

            <ScrollView alignSelf="center" width="90%" borderRadius="15" p="5" backgroundColor="white" mt="50%" >
                <View>
                    <Text fontSize="xl" fontWeight="bold">{route.params.recipe_name}</Text>
                    <HStack mt="3" space={3} justifyContent="space-around">
                    <Badge width="30%" color="black" variant="outline" rounded="xl" >{route.params.calories + ' Kcal'}</Badge>
                    <Badge width="30%" color="black" variant="outline" rounded="xl" >{route.params.fat + 'g fat'}</Badge>
                    <Badge width="30%" color="black" variant="outline" rounded="xl" >{route.params.tags0}</Badge>
                    </HStack>
                    <Divider alignSelf="center" bg="#59DBB7" mx="4" my="5" thickness="2" width="75%" self />
                    <Text fontSize="lg" mb="3" fontWeight="bold" italic>Ingredients</Text>
                    {recipeIngredient.map((recipeIngredient, index) => {return <Text fontSize="md" key={index}> • {recipeIngredient.ingredient_name}</Text>})}
                    <Divider alignSelf="center" bg="#59DBB7" mx="4" my="5" thickness="2" width="75%" self  />
                    <Text fontSize="lg" mb="3" fontWeight="bold" italic>Instructions</Text>
                    <Text textAlign="justify" pb="10">{route.params.instructions}</Text>
                </View>
            </ScrollView>
        </View>
    )
}