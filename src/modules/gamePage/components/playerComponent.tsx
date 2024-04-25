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
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },

    value: {
        width: "90%",
        height: "40px",
        marginTop: "5px",
        textAlign: "center"
    }
}));

const PlayerCard: React.FC<{player: TPlayer}> = ({player}) => {

    const styles = useStyles();

    const [showAge, setShowAge] = useState<boolean>(false);
    const [showProfession, setShowProfession] = useState<boolean>(false);
    const [showStage, setShowStage] = useState<boolean>(false);
    const [showHealth, setShowHealth] = useState<boolean>(false);
    const [showPhobia, setShowPhobia] = useState<boolean>(false);
    const [showBaggage, setShowBaggage] = useState<boolean>(false);
    const [showCharacter, setShowCharacter] = useState<boolean>(false);
    const [showHobby, setShowHobby] = useState<boolean>(false);
    const [showPfact, setShowPfact] = useState<boolean>(false);
    const [showNfact, setShowNfact] = useState<boolean>(false);
    const [showSex, setShowSex] = useState<boolean>(false);

    const toggleShowAge = () => {
        setShowAge(!showAge);
    };
    const toggleShowProfession = () => {
        setShowProfession(!showProfession);
    };
    const toggleShowStage = () => {
        setShowStage(!showStage);
    };
    const toggleShowHealth = () => {
        setShowHealth(!showHealth);
    };
    const toggleShowPhobia = () => {
        setShowPhobia(!showPhobia);
    };
    const toggleShowBaggage = () => {
        setShowBaggage(!showBaggage);
    };
    const toggleShowCharacter = () => {
        setShowCharacter(!showCharacter);
    };
    const toggleShowHobby = () => {
        setShowHobby(!showHobby);
    };
    const toggleShowPfact = () => {
        setShowPfact(!showPfact);
    };
    const toggleShowNfact = () => {
        setShowNfact(!showNfact);
    };
    const toggleShowSex = () => {
        setShowSex(!showSex);
    };






    return (
        <Paper className={styles.container}>
            <Paper className={styles.value}>{player.name}</Paper>
            <Paper className={styles.value} onClick={toggleShowAge}>
                {showAge ? 'Возраст: ' + player.age : 'Возраст'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowSex}>
                {showSex ? 'Пол: ' + player.sex : 'Пол'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowProfession}>
                {showProfession ? 'Профессия: ' + player.profession : 'Профессия'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowStage}>
                {showStage ? 'Стаж: ' + player.stage : 'Стаж'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowHealth}>
                {showHealth ? 'Здоровье: ' + player.health : 'Здоровье'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowPhobia}>
                {showPhobia ? 'Фобия: ' + player.phobia : 'Фобия'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowBaggage}>
                {showBaggage ? 'Багаж: ' + player.baggage : 'Багаж'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowCharacter}>
                {showCharacter ? 'Характер: ' + player.character : 'Характер'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowHobby}>
                {showHobby ? 'Хобби: ' + player.hobby : 'Хобби'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowPfact}>
                {showPfact ? 'Положительный факт: ' + player.pfact : 'Положительный факт'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowNfact}>
                {showNfact ? 'Отрицательный факт: ' + player.nfact : 'Отрицательный факт'}
            </Paper>
        </Paper>
    );


};
export default PlayerCard;