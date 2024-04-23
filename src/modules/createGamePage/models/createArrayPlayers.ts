import { TPlayer } from "../../../types/TPlayer"
import { createPerson } from "./createPerson";
import { TTextFieldModel } from "./createTextFieldModels";

export const createArrayPlayers = (models: TTextFieldModel[], playersKoll: number): TPlayer[] => {
    const players: TPlayer[] = [];

    for (let i = 0;i < playersKoll; i++) {
        const player = createPerson(models[i].value);
        players.push(player);
    }
console.log(players);
    return players;
}