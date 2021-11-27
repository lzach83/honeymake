import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserMetaData = {
  readOnlyFields: 'updatedAt';
}

type HouseholdMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RecipesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly householdCode: string;
  readonly createdAt?: string;
  readonly household?: Household;
  readonly recipes?: (Recipes | null)[];
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Household {
  readonly id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Household, HouseholdMetaData>);
  static copyOf(source: Household, mutator: (draft: MutableModel<Household, HouseholdMetaData>) => MutableModel<Household, HouseholdMetaData> | void): Household;
}

export declare class Recipes {
  readonly id: string;
  readonly householdCode?: string;
  readonly quantity?: string;
  readonly name?: string;
  readonly foodCategory?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Recipes, RecipesMetaData>);
  static copyOf(source: Recipes, mutator: (draft: MutableModel<Recipes, RecipesMetaData>) => MutableModel<Recipes, RecipesMetaData> | void): Recipes;
}