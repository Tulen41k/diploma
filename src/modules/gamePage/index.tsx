import { useEffect } from "react";
import { gamePage } from "./models";
import { Paper, Link} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import CreatePlayerCards from "./components/createPlayerCards";
import VButton from "../../mvvm/Button/VButton";
import { ProblemDescriprion } from "./components/problemDescription";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "row",
        marginTop: "10px",
        width: "1800px",
        height: "99%",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },
    header: {
        display: "flex",
        flexDirection: "column",
        marginTop: "60px"
    },
    params: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: "15px",
    },
    koll: {
        display: "flex",
        flexDirection: "row"
    },
    kollPlace: {
        width: "50px",
        marginTop: "10px",
        textAlign: "center"
    }
}));

export const GamePage: React.FC = observer(() => {
    const { start, kollPlace, problemBtn, isProblem, addBtn, deleteBtn} = gamePage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();

    return (
        <>
        <Paper className={styles.header}>
            <div className={styles.params}>
            <VButton model={problemBtn}></VButton>
            <div className={styles.koll}>
            <VButton model={deleteBtn}></VButton>
            <Paper className={styles.kollPlace}>{kollPlace}</Paper>
            <VButton model={addBtn}></VButton>
            </div>
            </div>
            {isProblem
            ? <ProblemDescriprion/>
            :
            <></>
            }
        </Paper>
        <Paper className={styles.container} elevation={3}>
            <CreatePlayerCards/>
        </Paper>
        </>
        
    );
});