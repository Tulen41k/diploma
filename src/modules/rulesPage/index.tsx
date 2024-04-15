import { useEffect } from "react";
import { rulesPage } from "./models";
import { Paper, Link} from "@mui/material";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        width: "60%",
        height: "700px",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },
    rules: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "500px",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },
    rule: {
        marginLeft: "10px",
        marginRight: "10px"
    },
    btn: {
        width: "30%",
        height: "50px",
        backgroundColor: "#B0C4DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
}));


export const RulesPage: React.FC = observer(() => {
    const {start} = rulesPage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();

    return (
        <Paper className={styles.container} elevation={3}>
            <h1>Правила игры</h1>
            <Paper className={styles.rules} elevation={1}>
                <div className={styles.rule}>В данной игре вам надо убедить других игроков, что вас точно нужно взять в убежище, которое имеет ограниченное количество мест.</div>
                <div className={styles.rule}>На Земле произошла катастрофа. В начале игры вы получите описание произошедшего, задачу на выживание и характеристики бункера.</div>
                <div className={styles.rule}>Каждый игрок получает характеристику своего персонажа:</div>
                <div className={styles.rule}>Пол, возраст, профессия и многое другое.</div>
                <div className={styles.rule}>В первый круг открывается две характеристики, в последующие - по одной. На основании открытых характеристик каждый круг игроки
                    решают, кто будет выгнан из бункера.
                </div>
                <div className={styles.rule}>Также игроки могут использовать дополнительные карты, которые могут помочь им выжить.</div>
            </Paper>
            <Paper className={styles.btn}>
                <Link href={'/'}>Назад</Link>
            </Paper>
        </Paper>
    )
});