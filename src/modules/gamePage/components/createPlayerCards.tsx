import React from "react";
import { getData } from "../../../data/getData";
import PlayerCard from "./playerComponent";

const createPlayerCards = () => {
    const dataArray = getData('players');
    const length = dataArray.length;
    const string = length / 3;


    for (let i = 0; i < string; i ++) {
            for (let j = 0; j < 3; j ++ ) {
                //Вызывать создание карточки с индексом j+i*3
                //Как при этом хранить индекс карточки, чтобы не ошибиться с кликами? Передавать его в функцию.
            }
    }

    return dataArray.map((player, index) => (
        <PlayerCard key={index} player={player}/>
    ));
};

export default createPlayerCards;