import { Paper, Typography } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { TPlayer } from "../../../types/TPlayer";
import { makeStyles } from "@material-ui/styles";
import DopCards from "./createDopCards";
import { getData } from "../../../data/getData";
import { getRandomItem } from "../../createGamePage/models/createPerson";

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
    const [deletePerson, setDeletePerson] = useState<boolean>(false);
    const [status, setStatus] = useState<string>('Выгнять');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [selectedAttribute, setSelectedAttribute] = useState<string>("");

    const toggleMenu = (param: string) => {
        setMenuOpen(!menuOpen);
        setSelectedAttribute(param);
    }

    const openPunkt = () => {
        switch (selectedAttribute) {
            case "Возраст":
                setShowAge(true);
                toggleMenu('');
                break;
            case "Профессия":
                setShowProfession(true);
                toggleMenu('');
                break;
            case "Здоровье":
                setShowHealth(true);
                toggleMenu('');
                break;
            case "Фобия":
                setShowPhobia(true);
                toggleMenu('');
                break;
            case "Багаж":
                setShowBaggage(true);
                toggleMenu('');
                break;
            case "Характер":
                setShowCharacter(true);
                toggleMenu('');
                break;
            case "Хобби":
                setShowHobby(true);
                toggleMenu('');
                break;
            case "Положительный факт":
                setShowPfact(true);
                toggleMenu('');
                break;
            case "Отрицательный факт":
                setShowNfact(true);
                toggleMenu('');
                break;
            case "Пол":
                setShowSex(true);
                toggleMenu('');
                break;
            default:
                break;
        }
    }

    const change = () => {
        const data = getData('players');
        const person = data[index];
        switch (selectedAttribute) {
            case "Возраст":
                const age = Math.floor(Math.random() * (99 - 18 + 1) + 18);
                person.age = age;
                person.stage = Math.floor(Math.random() * (age-18 + 1));
                break;
            case "Профессия":
                person.profession = getRandomItem(getData('profession'));
                person.stage = Math.floor(Math.random() * (person.age-18 + 1));
                break;
            case "Здоровье":
                person.health = getRandomItem(getData('health'));
                break;
            case "Фобия":
                person.phobia = getRandomItem(getData('phobia'));
                break;
            case "Багаж":
                person.baggage = getRandomItem(getData('baggage'));
                break;
            case "Характер":
                person.character = getRandomItem(getData('character'));
                break;
            case "Хобби":
                person.hobby = getRandomItem(getData('hobby'));
                break;
            case "Положительный факт":
                person.pfact = getRandomItem(getData('pfact'));
                break;
            case "Отрицательный факт":
                person.nfact = getRandomItem(getData('nfact'));
                break;
            case "Пол":
                person.sex = getRandomItem(getData(''));
                break;
            default:
                break;
        }
        player = person;
        data[index] = person;
        localStorage.setItem('players', JSON.stringify(data));
    }

    const deleteChar = () => {
        const data = getData('players');
        switch (selectedAttribute) {
            case "Возраст":
                break;
            case "Профессия":
                break;
            case "Здоровье":
                player.health = 'Здоров';
                break;
            case "Фобия":
                break;
            case "Багаж":
                player.baggage ="Нет багажа";
                break;
            case "Характер":
                break;
            case "Хобби":
                break;
            case "Положительный факт":
                break;
            case "Отрицательный факт":
                break;
            case "Пол":
                break;
            default:
                break;
        }
        data[index] = player;
        localStorage.setItem('players', JSON.stringify(data));
    };

    const hidePerson = () => {
        if(deletePerson) {
            const confirmMessage = "Вернуть игрока: "+ player.name;
            if (window.confirm(confirmMessage)) {
                setDeletePerson(false);
            }
            setStatus('Выгнать');
        }
        else {
            const confirmMessage = 'Выгнать игрока ' + player.name;
            if (window.confirm(confirmMessage)) {
                setDeletePerson(true);
            }
            setStatus('Вернуть');
        }
    }

    return (
        <Paper className={styles.container}>
            {menuOpen
                ? <Paper className={styles.menu}>
                    <Typography className={styles.punkt} variant="h6">{selectedAttribute}</Typography>
                    <Paper className={styles.punkt} onClick={openPunkt}>Открыть характеристику</Paper>
                    <Paper className={styles.punkt} onClick={change}>Изменить характеристику на случайную</Paper>
                    <Paper className={styles.punkt} onClick={deleteChar}>Удалить характеристику</Paper>
                    <Paper className={styles.punkt} onClick={() => toggleMenu('')}>Закрыть</Paper>
                </Paper>
                : <></>
            }
            <Paper className={styles.name}>
                <Typography variant="h5" className={styles.value}>{player.name}</Typography>
                <Paper onClick={hidePerson} className={styles.hide}>{status}</Paper>
            </Paper>
            {deletePerson
                ? <>
                    <Paper className={styles.delete}>
                        <Typography variant="h5" className={styles.status}>Персонаж выгнан</Typography>
                    </Paper>
                </>
                : <>
                <Paper className={styles.value} onClick={() => toggleMenu('Возраст')}>
                    {showAge ? 'Возраст: ' + player.age : 'Возраст'}
                </Paper>
                <Paper className={styles.value} onClick={() => toggleMenu('Пол')}>
                    {showSex ? 'Пол: ' + player.sex : 'Пол'}
                </Paper>
                <Paper className={styles.value} onClick={() => toggleMenu('Профессия')}>
                    {showProfession ? 'Профессия: ' + player.profession : 'Профессия'}
                </Paper>
                <Paper className={styles.value} onClick={() => toggleMenu('Профессия')}>
                    {showProfession ? 'Стаж: ' + player.stage : 'Стаж'}
                </Paper>
                <Paper className={styles.value} onClick={() => toggleMenu('Здоровье')}>
                    {showHealth ? 'Здоровье: ' + player.health : 'Здоровье'}
                </Paper>
                <Paper className={styles.value} onClick={() => toggleMenu('Фобия')}>
                    {showPhobia ? 'Фобия: ' + player.phobia : 'Фобия'}
                </Paper>
                <Paper className={styles.value} onClick={() => toggleMenu('Багаж')}>
                    {showBaggage ? 'Багаж: ' + player.baggage : 'Багаж'}
                </Paper>
                <Paper className={styles.value} onClick={() => toggleMenu('Характер')}>
                    {showCharacter ? 'Характер: ' + player.character : 'Характер'}
                </Paper>
                <Paper className={styles.value} onClick={() => toggleMenu('Хобби')}>
                    {showHobby ? 'Хобби: ' + player.hobby : 'Хобби'}
                </Paper>
                <Paper className={styles.value} onClick={() => toggleMenu('Положительный факт')}>
                    {showPfact ? 'Положительный факт: ' + player.pfact : 'Положительный факт'}
                </Paper>
                <Paper className={styles.value} onClick={() => toggleMenu('Отрицательный факт')}>
                    {showNfact ? 'Отрицательный факт: ' + player.nfact : 'Отрицательный факт'}
                </Paper>
                {player.dop.map((card, index) => (
                    <DopCards key={index} card={card}/>))}
                </>
            }
        </Paper>
    );


};
export default PlayerCard;