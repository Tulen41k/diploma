import React from "react";
import { getData } from "../../../data/getData";
import PlayerCard from "./cardComponent";
import { makeStyles } from "@material-ui/styles";
import { TPlayer } from "../../../types/TPlayer";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },
    bigContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
    }
}));

const CreateWinCards: React.FC<{}> = ({}) =>{
    const styles = useStyles();

    const dataArray = getData('players');

    const winners: TPlayer[] = dataArray.filter((person) => person.win === true);

    return (
        <div className={styles.bigContainer}>

            
            {winners.map((player,index) => (
                <PlayerCard key={index} index={index} player={player}/>
            ))}
        </div>
    )
};

export default CreateWinCards;