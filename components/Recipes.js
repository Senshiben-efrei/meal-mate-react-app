import React, {useState, useEffect} from 'react';
import { ScrollView, Center } from 'native-base';
import Recipe from './Recipe';

export default function Recipes() {
    const [recipe, setRecipe] = useState([]);

    const GetRecipes = () => {
        fetch('http://192.168.1.74:5000/recipes')
        .then(response => response.json())
        .then((data) => {
            setRecipe(data.splice(0,15));
        })
        .catch((error) => console.log(error.message))
    }

    useEffect(() => {
        GetRecipes()
    },[])
    return <Center>
        <ScrollView maxW="3000" width="100%" height="90%" _contentContainerStyle={{
        px: "0",
        mb: "4",
        minW: "72"
      }}>
        {recipe.map(recipe => {return <Recipe key={recipe.id_recipe} imgUrl={recipe.image_url} title={recipe.recipe_name} preptime={recipe.preptime} calories={recipe.calories} fat={recipe.fat}/>})}
        </ScrollView>
      </Center>;
  }