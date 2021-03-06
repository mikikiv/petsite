import React from 'react';
import PetCard from './PetCard';
import styles from '@site/src/pages/index.module.css'


export default function AllPets() {
    
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age + " years";
    }
    const pets = {        
            "olympia": "2019/09/10",
            "cj": "2011/07/10",
            "scout": "2016/05/14"
        }

    return <div className={styles.homeContainer}>
            
        <PetCard name="Olympia" href="/docs/pets/olympia" imagePath="/img/olympia.jpg" breed="Basenji Mix" age={getAge(pets.olympia)}> Our little monster was born September 2018. She makes funny sounds and can have a ton of energy. We know that she is just the perfect little dog. Just over 40 pounds of pure muscle, don't let her crash into your legs at top speed. And watch for her jumping up to lick your face! </PetCard>

        <PetCard name="Scout" href="/docs/pets/scout" imagePath="/img/scout.jpg" breed="cat" age={getAge(pets.scout)}>Scout was born in 2016 in a truck yard in Southern California. She came to our family as a tiny tiny cat and always ruled the house, until CJ came along. She's social and curious, but has entirely a type-A personality. Belly rubs are requested, she rewards belly rubs with scratches and friendly bites. </PetCard>
        
        <PetCard name="CJ" href="/docs/pets/cj" imagePath="/img/cj.png" breed="German Shephard" age={getAge(pets.cj)}>CJ was born July 20 2011 and been a part of Tayler's family since birth. His parents, Chato and Molia, were part of Tayler's grandparents family and also gave CJ two brothers and a sister who stayed in the family, and 5 others that went to other families.
        </PetCard>
        </div>  
}