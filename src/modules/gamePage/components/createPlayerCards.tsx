import React from "react";
import { getData } from "../../../data/getData";
import PlayerCard from "./playerComponent";

const createPlayerCards = () => {
    const dataArray = getData('players');

    return dataArray.map((player, index) => (
        <PlayerCard key={index} player={player}/>
    ));
};

export default createPlayerCards;