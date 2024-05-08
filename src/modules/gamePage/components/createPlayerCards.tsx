import React from "react";
import { getData } from "../../../data/getData";
import PlayerCard from "./playerComponent";
import { makeStyles } from "@material-ui/styles";

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

const CreatePlayerCards: React.FC<{}> = ({}) =>{
    const styles = useStyles();

    const dataArray = getData('players');
    const length = dataArray.length;
    let string: number;

    if (length%3 === 0)
        string = length/3;
    else 
        if (length%3 === 1)
            string = (length + 2)/3;
        else
            string = (length + 1)/3;
        
    const getPlayersForRow = (rowIndex: number) => {
        const start = rowIndex * 3;
        const end = Math.min(start + 3, length);
        return dataArray.slice(start, end);
    }

    return (
        <div className={styles.bigContainer}>
            {[...Array(string)].map((_,rowIndex) => (
                <div className={styles.container}>
                    {getPlayersForRow(rowIndex).map((player, index) => (
                        <PlayerCard key={index} player={player}/>
                    ))}
                </div>
            ))}
        </div>
    )
};

export default CreatePlayerCards;