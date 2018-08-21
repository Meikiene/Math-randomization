//Build an array of cooking methods
var cooking = [
"slow cooked",
"Barbequed",
"Boiled",
"Fried",
"Baked",
"Microwaved",
"Deep fried",
"Steamed"
];
//Build an array of foods
var foods = [
"Noodles",
"Musibi",
"Steak",
"Pork",
"Carrots",
"Oreo",
"Bacon",
"Spaghetti",
"Egg",
"Ham",
"Baby back ribs",
"Ice cream",
"Chicken",
"Pizza",
"Cake",
"Fish",
"Tomato",
"Rice"
];
//Concat the cooking method and the food based on a random sequence.
var x = Math.floor(Math.random() * cooking.length);
var y = Math.floor(Math.random() * foods.length);

window.alert(cooking[x] + " " + foods[y]);