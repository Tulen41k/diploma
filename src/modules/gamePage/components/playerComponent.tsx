import { Paper, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { getData } from "../../../data/getData";
import { TPlayer } from "../../../types/TPlayer";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        width: "60%",
        height: "300px",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },

    name: {
        display: "flex",
        flexDirection: "column",
        marginTop: "5px",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px"
    }
}));

const PlayerCard: React.FC<{player: TPlayer}> = ({player}) => {
    const [showAge, setShowAge] = useState<boolean>(false);

    const toggleShowAge = () => {
        setShowAge(!showAge);
    };

    return (
        <Paper>
            <Paper>{player.name}</Paper>
            <Paper onClick={toggleShowAge}>
                {showAge ? player.age : 'Возраст'}
            </Paper>
        </Paper>
    );


};
export default PlayerCard;