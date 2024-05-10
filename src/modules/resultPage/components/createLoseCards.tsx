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

const CreateLoseCards: React.FC<{}> = ({}) =>{
    const styles = useStyles();

    const dataArray = getData('players');

    const lose: TPlayer[] = dataArray.filter((person) => person.win === false);

    return (
        <div className={styles.bigContainer}>            
            {lose.map((player,index) => (
                <PlayerCard key={index} index={index} player={player}/>
            ))}
        </div>
    )
};

export default CreateLoseCards;