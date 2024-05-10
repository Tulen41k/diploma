import { Paper, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { TPlayer } from "../../../types/TPlayer";
import { makeStyles } from "@material-ui/styles";
import DopCards from "./dopCards";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        width: "100%",
        justifyContent: "space-between",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },

    value: {
        width: "90%",
        height: "40px",
        marginTop: "5px",
        textAlign: "center"
    },

    name: {
        display: "flex",
        flexDirection: "row",
        width: "90%"
    },

    hide: {
        height: "40px",
        width: "80px",
        marginRight: "10px"
    },

    delete: {
        height: "100%",
        width: "90%"
    },

    status: {
        height: "100%",
        width: "50%"

    },

    menu: {
        position: "fixed",
        margin: "auto",
        marginTop: "250px",
        zIndex: 1000,
        width: "20%"
    },

    punkt: {
        height: "40px"
    }
}));

const PlayerCard: React.FC<{player: TPlayer, index: number}> = ({player, index}) => {
    const styles = useStyles();

    return (
        <Paper className={styles.container}>
            <Typography variant="h5">{player.name}</Typography>
                <Paper className={styles.value}>
                    {'Возраст: ' + player.age}
                </Paper>
                <Paper className={styles.value}>
                    {'Пол: ' + player.sex}
                </Paper>
                <Paper className={styles.value}>
                    {'Профессия: ' + player.profession}
                </Paper>
                <Paper className={styles.value}>
                    {'Стаж: ' + player.stage}
                </Paper>
                <Paper className={styles.value}>
                    {'Здоровье: ' + player.health}
                </Paper>
                <Paper className={styles.value}>
                    {'Фобия: ' + player.phobia}
                </Paper>
                <Paper className={styles.value}>
                    {'Багаж: ' + player.baggage}
                </Paper>
                <Paper className={styles.value}>
                    {'Характер: ' + player.character}
                </Paper>
                <Paper className={styles.value}>
                    {'Хобби: ' + player.hobby}
                </Paper>
                <Paper className={styles.value}>
                    {'Положительный факт: ' + player.pfact}
                </Paper>
                <Paper className={styles.value}>
                    {'Отрицательный факт: ' + player.nfact}
                </Paper>
                {player.dop.map((card, index) => (
                    <DopCards key={index} card={card}/>))}
        </Paper>
    );


};
export default PlayerCard;