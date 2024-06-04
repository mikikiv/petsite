import React from "react";
import { petsData } from "../data/pets";
import { getPetData } from "../util/getPetData";

// Create a table of the feeding data for each pet from petsData
const PetFoodTable = () => {
  const PetNameHeaderRow = () => {
    return (
      <>
        <th></th>
        {petsData
          .filter((pet) => pet.death == undefined)
          .map((pet) => {
            return <th key={pet.name}>{pet.name}</th>;
          })}
      </>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <PetNameHeaderRow />
        </tr>
      </thead>
      <tbody className="">
        {Object.keys(petsData[0].feeding).map((key) => {
          return (
            <tr className="h-20" key={key}>
              <td className="capitalize">{key}</td>
              {
                // Create a cell for each pet's feeding data
                petsData
                  .filter((pet) => pet.death == undefined)
                  .map((pet) => {
                    return (
                      <td
                        key={`${pet.name}-${key}`}
                        className="hover:bg-gray-800"
                      >
                        {getPetData(pet.name, "feeding")[key]}
                      </td>
                    );
                  })
              }
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PetFoodTable;
