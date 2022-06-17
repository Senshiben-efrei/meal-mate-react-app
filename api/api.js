export default {
    getRecipes(){
        fetch('http://192.168.1.74:5000/recipes')
        .then(response => response.json())
        .then((data) => {
            console.log(data.splice(0,15));
        })
        .catch((error) => console.log(error.message))
    }
}