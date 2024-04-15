import { useEffect } from "react";
import { editPage } from "./models";
import { Paper} from "@mui/material";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/styles";

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
    }
}));



export const EditPage: React.FC = observer(() => {
    const {start} = editPage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();

    return (
        <Paper className={styles.container} elevation={3}>
            <div>Правила игры</div>
        </Paper>
    )
});