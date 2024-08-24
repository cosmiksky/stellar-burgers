import { SerializedError } from '@reduxjs/toolkit';

export type TIngredient = {
  _id: string;
  name: string;
  type: IngredientType;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_large: string;
  image_mobile: string;
};

export enum IngredientType {
  bun = 'bun',
  main = 'main',
  sauce = 'sauce',
  top = 'top',
  bottom = 'bottom'
}

export type TConstructorIngredient = TIngredient & {
  id: string;
};

export type TOrder = {
  _id: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  ingredients: string[];
};

export type TOrdersData = {
  orders: TOrder[];
  total: number;
  totalToday: number;
};

export type TUser = {
  email: string;
  name: string;
};

export type TResponseStatus = {
  isLoading: boolean;
  error: SerializedError['message'] | null;
};

export type TTabMode = 'bun' | 'sauce' | 'main';
