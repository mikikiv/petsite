import { petsData } from "../data/pets";

interface Pet {
  name: string;
  image: string;
  link: string;
  birthday: string;
  breed: string;
  death: string;
  feeding: {
    amount: string;
    frequency: string;
    quirks: string;
    treats: string;
    medications: string;
    allergies: string;
  };
  favoriteThings: string[];
}


export function getPetData(petName: string, key: keyof Pet) {
  const pet = petsData.find((pet) => pet.name === petName);
  if (pet && key in pet) {
    return pet[key];
  }
  if (pet) {
    return pet;
  }
  return undefined;
}
