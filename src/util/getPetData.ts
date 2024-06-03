import { petsData, PetsDataType } from "../data/pets";

export function getPetData(petName: string, obj: keyof PetsDataType): PetsDataType[keyof PetsDataType] | undefined {
  const pet = petsData.find((pet) => pet.name === petName);
  if (pet && obj in pet) {
    return pet[obj];
  }
  if (pet) {
    return pet;
  }
  return undefined;
}