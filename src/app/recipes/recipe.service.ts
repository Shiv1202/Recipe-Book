import { Recipe } from "./recipe.model";


export class RecipeServices {
   
    private recipes = [
        new Recipe('A Test recipe',
         'This is simply a test', 
         'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg'),
        new Recipe('A Test recipe',
         'This is simply a test', 
         'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg')
      ];

      getRecipes() {
        return this.recipes.slice();
      }
}