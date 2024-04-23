import { TPlayer } from "../../../types/TPlayer"
import { createPerson } from "./createPerson";
import { TTextFieldModel } from "./createTextFieldModels";

export const createArrayPlayers = (models: TTextFieldModel[]): TPlayer[] => {
    const players: TPlayer[] = [];

    for (let i = 0;i < models.length; i++) {
        const player = createPerson(models[i].value);
        players.push(player);
    }
console.log(players);
    return players;
}