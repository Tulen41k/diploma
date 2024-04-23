import { getData } from "../../../data/getData";
import { TPlayer } from "../../../types/TPlayer";

const getRandomItem = <T>(array: T[]): T => {
    const randomItem = Math.floor(Math.random() * array.length);
    return array[randomItem];
}

const getCards = (cards: number) => {
    const dopCard = Array.from({length: cards}, () => getRandomItem(getData('dop')));
    return dopCard;
}



const sex = ['мужской', 'женский'];

export const createPerson = (name: string, cards: number): TPlayer => {
    const age = Math.floor(Math.random() * (99 - 18 + 1) + 18);

    const newPlayer: TPlayer = {
        name: name,
        age: age,
        sex: getRandomItem(sex),
        profession: getRandomItem(getData('profession')),
        stage: Math.floor(Math.random() * (age-18 + 1)),
        health: getRandomItem(getData('health')),
        phobia: getRandomItem(getData('phobia')),
        baggage: getRandomItem(getData('baggage')),
        character: getRandomItem(getData('character')),
        hobby: getRandomItem(getData('hobby')),
        pfact: getRandomItem(getData('pfact')),
        nfact: getRandomItem(getData('nfact')),
        dopCard: getCards(cards)
    }

    return newPlayer;
}