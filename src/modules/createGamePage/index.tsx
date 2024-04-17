import { useCallback, useEffect } from "react";
import { createGamePage } from "./models";
import { Paper, Link} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import VTextField from "../../mvvm/TextField/VTextField";
import VButton from "../../mvvm/Button/VButton";
import React from "react";
import { TGameData } from "../../types/TGameData";
import { useState } from "react";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        width: "90%",
        height: "700px",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },
    global: {
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
    }
}));


export const CreateGamePage: React.FC = observer(() => {
    const { start, playersField, cardField, createBtn, isForm, isName, isDownload, gameData, nField, readyBtn} = createGamePage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();


    return (
        <Paper className={styles.global} elevation={3}>
            <div>
                {isForm
                    ? <>
                        <div className={styles.container}>
                        <h1>Введите количество игроков и количество карт на человека</h1>
                        <div>Оптимальное количсетво игроков от 5 до 12 человек</div>
                        <VTextField model={playersField}/>
                        <div>Оптимальное количество дополнительных карт на игрока</div>
                        <ul>
                            <li>От 5 игроков - 1 карта</li>
                            <li>От 7 игроков - 2 карты</li>
                            <li>От 9 игроков - 3 карты</li>
                        </ul>
                        <VTextField model={cardField}/>
                        <VButton model={createBtn}/>
                        </div>
                    </>
                    : <></>
                }
                {isName
                    ? <>
                        <div className={styles.container}>
                            <h1>Введите имена игроков</h1>
                            <VButton model={readyBtn}/>
                        </div>
                    </>
                    : <></>
                }
                {isDownload
                    ? <>
                    </>
                    : <></>
                }
            </div>
        </Paper>
    );
}
);