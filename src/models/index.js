// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Household, Recipes } = initSchema(schema);

export {
  User,
  Household,
  Recipes
};