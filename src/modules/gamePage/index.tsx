import { useEffect } from "react";
import { gamePage } from "./models";
import { Paper, Link, Typography} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import CreatePlayerCards from "./components/createPlayerCards";
import VButton from "../../mvvm/Button/VButton";
import { ProblemDescriprion } from "./components/problemDescription";
import React from "react";


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
    },
    end: {
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        alignItems: "center"
    },

    link: {
        width: "20%",
        height: "50px",
        backgroundColor: "#B0C4DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px"
    }

}));



export const GamePage: React.FC = observer(() => {
    const { start, data, kollPlace, problemBtn, isProblem, addBtn, deleteBtn, status} = gamePage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();


    return (
        
        <>{
            status
            ? <> 
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
            : <>
                <Paper className={styles.end}>
                    <Typography variant="h4">Игра окончена</Typography>
                    <Link className={styles.link} href={'/result'}>Перейти к результатам</Link>
                </Paper>
            </>
        }
        </>
        
    );
});