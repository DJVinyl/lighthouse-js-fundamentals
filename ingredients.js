const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

const quantity = ingredients.length;
// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < quantity)
{
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < quantity; i++)
{
  console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = quantity - 1; i >= 0; i--)
{
  console.log(ingredients[i]); 
}