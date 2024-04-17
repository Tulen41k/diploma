import { useEffect } from "react";
import { editPage } from "./models";
import { Paper, Link, Typography} from "@mui/material";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/styles";
import VButton from "../../mvvm/Button/VButton";

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
    global: {
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
    },
    select: {
        width: "80%"
    },
    btn: {
        width: "100%"
    },
    btnc: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        width: "100%"
    },
    link: {
        width: "30%",
        height: "50px",
        backgroundColor: "#B0C4DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
}));



export const EditPage: React.FC = observer(() => {
    const {start, professionBtn, healfBtn, phobiaBtn, baggageBtn, chatacterBtn, hobbyBtn, pfactBtn, nfactBtn, isHome, returnBtn, isPage} = editPage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();

    return (
        <Paper className={styles.global} elevation={3}>
            {isHome
                ? <>
                <div className={styles.container}>
                    <Typography variant="h4">
                    Редактирование характеристик
                    </Typography>
                    <div className={styles.btnc}>
                        <VButton className={styles.btn} model={professionBtn}/>
                        <VButton className={styles.btn} model={healfBtn}/>
                        <VButton className={styles.btn} model={phobiaBtn}/>
                        <VButton className={styles.btn} model={baggageBtn}/>
                        <VButton className={styles.btn} model={chatacterBtn}/>
                        <VButton className={styles.btn} model={hobbyBtn}/>
                        <VButton className={styles.btn} model={pfactBtn}/>
                        <VButton className={styles.btn} model={nfactBtn}/>
                    </div>
                    <Paper className={styles.link}>
                        <Link href={'/'}>Назад</Link>
                    </Paper>
                </div>
                </>
                : <>
                    <div className={styles.container}>
                        <Typography variant="h4">
                        {isPage}
                        </Typography>
                        <VButton model={returnBtn}/>
                    </div>
                </>
            }

        </Paper>
    )
});