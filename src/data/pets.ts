
export const petsData = [
    {
      "name": "CJ",
      "image": "/img/cj.png",
      "link": "/docs/pets/cj",
      "birthday": "2011/07/10",
      "breed": "German Shepherd",
      "death": "2024/04/14",
      "feeding": {
        "amount": "2+ cups per day",
        "frequency": "Morning and evening",
        "quirks": "Eats while laying down often. Rings his food bowl like a bell for when hungry, but sometimes for fun. Loves trying to get cat poops.",
        "treats": "Treats as needed and for fun",
        "medications": "Dynomax, 1 per breakfast. Easier to feed when broken up a bit. Carprofen, 100mg each meal",
        "allergies": "None"
      },
      "favoriteThings": ["Tennis Ball"]
    },
    {
      "name": "Scout",
      "image": "/img/scout.jpg",
      "link": "/docs/pets/scout",
      "birthday": "2016/05/04",
      "breed": "Cat",
      "favoriteThings": ["Laser Pointer", "Catnip"],
      "feeding": {
        "amount": "Self fed, about 1/2 cup per day",
        "frequency": "Feeder scheduled 8am/8pm",
        "quirks": "Food and bowl in Family room on table above litter box.",
        "treats": "Really Only eats treats from a flat surface",
        "medications": "None",
        "allergies": "None"
      }
    },
    {
      "name": "Olympia",
      "image": "/img/olympia.jpg",
      "link": "/docs/pets/olympia",
      "birthday": "2019/09/10",
      "breed": "Mini Pit Aussie Mix?",
      "feeding": {
        "amount": "1.5 cups kibble per day",
        "frequency": "Morning and evening",
        "quirks": "Sneaks food from CJ's bowl. Generally looks uncomfortable while eating. Loves feeding from puzzles..",
        "treats": "Treats as needed and for fun",
        "medications": "None",
        "allergies": "None"
      },
      "favoriteThings": ["Kong", "Tennis Ball"]
    },
    {
      "name": "Teton",
      "image": "/img/teton.jpg",
      "link": "/docs/pets/teton",
      "birthday": "2020/07/10",
      "breed": "Chinchilla",
      "death": "2020/09/01",
      "feeding": {
        "amount": "Self fed, just keep the hay topped off.",
        "frequency": "Anytime",
        "quirks": "Most active in the evening. Loves dust baths. Loves hay.",
        "treats": "Treats as needed and for fun",
        "medications": "None",
        "allergies": "None"
      },
      "favoriteThings": ["Dust Bath", "Hay"]
    }
  ]

  export type PetsDataType = typeof petsData;