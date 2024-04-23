import { TGameData } from "../../../types/TGameData";

export type TTextFieldModel = {
    value: string;
};


export const createTextFieldModels = (gameData: TGameData): TTextFieldModel[] => {
    const textFieldModels: TTextFieldModel[] = [];

    for (let i = 0; i < gameData.players; i++) {
        textFieldModels.push({ value: ""});
    }

    return textFieldModels;
};