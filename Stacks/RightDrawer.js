import { ScrollView, Text, View } from 'native-base';
import React, {useState, useEffect} from 'react';
import Ingredient from '../components/Ingredient'

export default function RightDrawer(props) {
    const [ingredient, setIngredients] = useState([]);

    const GetRecipes = () => {
        fetch('http://192.168.1.74:5000/ingredients')
        .then(response => response.json())
        .then((data) => {
            setIngredients(data.splice(0,25));
        })
        .catch((error) => console.log(error.message))
    }

    useEffect(() => {
        GetRecipes()
    },[])
    return (        
        <View flex="1">
            <View alignItems="center" pt="50">
                <Text pb="5" fontSize="2xl">Short List</Text>
            </View>
            <ScrollView maxW="3000" width="100%" _contentContainerStyle={{ minW: "72" }}>
                {ingredient.map(ingredient => {return <Ingredient key={ingredient.id_ingredient} item={ingredient}/>})}
            </ScrollView>
        </View>
    );
}