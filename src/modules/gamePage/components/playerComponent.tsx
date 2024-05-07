import { Paper, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { TPlayer } from "../../../types/TPlayer";
import { makeStyles } from "@material-ui/styles";
import DopCards from "./createDopCards";

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
    const [showHealth, setShowHealth] = useState<boolean>(false);
    const [showPhobia, setShowPhobia] = useState<boolean>(false);
    const [showBaggage, setShowBaggage] = useState<boolean>(false);
    const [showCharacter, setShowCharacter] = useState<boolean>(false);
    const [showHobby, setShowHobby] = useState<boolean>(false);
    const [showPfact, setShowPfact] = useState<boolean>(false);
    const [showNfact, setShowNfact] = useState<boolean>(false);
    const [showSex, setShowSex] = useState<boolean>(false);

    const toggleShowAge = () => {
        if(showAge) {}
            else {
                const confirmMessage = 'Открыть возраст для игрока ' + player.name;
                if (window.confirm(confirmMessage)) {
                    setShowAge(true);
                }
        }
    };
    const toggleShowProfession = () => {
        if(showProfession) {}
        else {
            const confirmMessage = 'Открыть профессию для игрока ' + player.name;
                if (window.confirm(confirmMessage)) {
                    setShowProfession(true);
                }
        }
    };
    const toggleShowHealth = () => {
        if(showHealth) {}
        else {
            const confirmMessage = 'Открыть здоровье для игрока ' + player.name;
                if (window.confirm(confirmMessage)) {
                    setShowHealth(true);
                }
        }
    };
    const toggleShowPhobia = () => {
        if(showPhobia) {}
        else {
            const confirmMessage = 'Открыть фобию для игрока ' + player.name;
                if (window.confirm(confirmMessage)) {
                    setShowPhobia(true);
                }
        }
    };
    const toggleShowBaggage = () => {
        if(showBaggage) {}
        else {
            const confirmMessage = 'Открыть багаж для игрока ' + player.name;
                if (window.confirm(confirmMessage)) {
                    setShowBaggage(true);
                }
        }
    };
    const toggleShowCharacter = () => {
        if(showCharacter) {}
        else {
            const confirmMessage = 'Открыть характер для игрока ' + player.name;
                if (window.confirm(confirmMessage)) {
                    setShowCharacter(true);
                }
        }
    };
    const toggleShowHobby = () => {
        if(showHobby) {}
        else {
            const confirmMessage = 'Открыть хобби для игрока ' + player.name;
                if (window.confirm(confirmMessage)) {
                    setShowHobby(true);
                }
        }
    };
    const toggleShowPfact = () => {
        if(showPfact) {}
        else {
            const confirmMessage = 'Открыть положительный факт для игрока ' + player.name;
                if (window.confirm(confirmMessage)) {
                    setShowPfact(true);
                }
        }
    };
    const toggleShowNfact = () => {
        if(showNfact) {}
        else {
            const confirmMessage = 'Открыть отрицательный факт для игрока ' + player.name;
                if (window.confirm(confirmMessage)) {
                    setShowNfact(true);
                }
        }
    };
    const toggleShowSex = () => {
        if(showSex) {}
        else {
            const confirmMessage = 'Открыть пол для игрока ' + player.name;
                if (window.confirm(confirmMessage)) {
                    setShowSex(true);
                }
        }
    };



    return (
        <Paper className={styles.container}>
            <Typography variant="h5" className={styles.value}>{player.name}</Typography>
            <Paper className={styles.value} onClick={toggleShowAge}>
                {showAge ? 'Возраст: ' + player.age : 'Возраст'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowSex}>
                {showSex ? 'Пол: ' + player.sex : 'Пол'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowProfession}>
                {showProfession ? 'Профессия: ' + player.profession : 'Профессия'}
            </Paper>
            <Paper className={styles.value} onClick={toggleShowProfession}>
                {showProfession ? 'Стаж: ' + player.stage : 'Стаж'}
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
            {player.dop.map((card, index) => (
            <DopCards key={index} card={card}/>))}
        </Paper>
    );


};
export default PlayerCard;