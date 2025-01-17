import { useEffect } from "react";
import { createGamePage } from "./models";
import { Paper, Link, Typography} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import VTextField from "../../mvvm/TextField/VTextField";
import VButton from "../../mvvm/Button/VButton";
import React from "react";
import { useState } from "react";
import { createTextFieldModels } from "./models/createTextFieldModels";
import { ProblemDescriprion } from "./models/problemDescription";
import { names } from "../../data/data";
import { getData } from "../../data/getData";
import { AutoCompleteInput } from "./models/AutoCompleteInput";

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
    },
    link: {
        width: "30%",
        height: "50px",
        backgroundColor: "#B0C4DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px"
    },

    btn: {
        width: "15%",
        height: "50px",
        backgroundColor: "#B0C4DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "15px"
    }
}));


export const CreateGamePage: React.FC = observer(() => {
    const { start, playersField, cardField, createBtn, isForm, isName, isDownload, gameData, readyBtn, downloadBtn, isProblem, problemBtn} = createGamePage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();
    const [textFieldModels, setTextFieldModels] = useState(createTextFieldModels(gameData));

    useEffect(() => {
        setTextFieldModels(createTextFieldModels(gameData));
    }, [gameData]);

    const handleInputChange = (index: number, value: string) => {
        const updatedTextFieldModels = [...textFieldModels];
        updatedTextFieldModels[index].value = value;
        setTextFieldModels(updatedTextFieldModels);
        localStorage.setItem('names', JSON.stringify(textFieldModels));
    }

    const randomInput = () => {
        const updatedTextFieldModels = [... textFieldModels];
        const name = names;
        updatedTextFieldModels.forEach((field, index) => {
            const randomIndex = Math.floor(Math.random() * name.length);
            const randomName = name.splice(randomIndex, 1)[0];
            field.value = randomName;
        })
        setTextFieldModels(updatedTextFieldModels);
        localStorage.setItem('names', JSON.stringify(textFieldModels));
        
    }


    return (
        <Paper className={styles.global} elevation={3}>
            <div>
                {isForm
                    ? <>
                        <div className={styles.container}>
                        <Typography variant="h4">Введите количество игроков и карт</Typography>
                        <div>Оптимальное количество игроков от 5 до 12 человек</div>
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
                            <Typography variant="h4">Введите имена игроков</Typography>
                            {textFieldModels.map((textFieldModel, index) => (
                                <AutoCompleteInput
                                key={index}
                                textFieldModel={textFieldModel}
                                index={index}
                                handleInputChange={handleInputChange}
                                usedNames={getData('usedNames')}
                                />
                            ))}
                            <Paper className={styles.btn} elevation={3} onClick={() => randomInput()}>Придумать имена</Paper>
                            <VButton model={readyBtn}/>
                        </div>
                    </>
                    : <></>
                }
                {isDownload
                    ? <>
                    <div className={styles.container}>
                        <Typography variant="h4">Скачайте характеристики игроков</Typography>
                        <VButton model={downloadBtn}/>
                        <VButton model={problemBtn}/>
                    </div>
                    </>
                    : <></>
                }
                {isProblem
                    ? <>
                    <div className={styles.container}>
                        <Typography variant="h4">Описание катастрофы</Typography>
                        <ProblemDescriprion/>
                        <Link className={styles.link} href={'game'}>Начать игру</Link>
                    </div>
                    </>
                    : <></>

                }
            </div>
            <Paper className={styles.link}>
                <Link href={'/'}>Назад</Link>
            </Paper>
        </Paper>
    );
}
);