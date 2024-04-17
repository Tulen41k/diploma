import { useEffect } from "react";
import { homePage } from "./models";
import { Paper, Link} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        width: "60%",
        height: "500px",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },

    btn: {
        width: "60%",
        height: "50px",
        backgroundColor: "#B0C4DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },

    link: {
        color: "black",
        fontWeight: "bold"
    }
}));

export const HomePage: React.FC = observer(() => {
    const { start} = homePage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();

    return (
        <Paper className={styles.container} elevation={3}>
            <Paper className={styles.btn} elevation={2}>
                <Link className={styles.link} href={'/create'}>Начать игру</Link>
            </Paper>
            <Paper className={styles.btn} elevation={2}>
                <Link className={styles.link} href={'/edit'}>Редактировать характеристики</Link>
            </Paper>
            <Paper className={styles.btn} elevation={2}>
                <Link className={styles.link} href={'/rules'}>Правила игры</Link>
            </Paper>
        </Paper>
    );
});