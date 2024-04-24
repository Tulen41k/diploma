import { useEffect } from "react";
import { gamePage } from "./models";
import { Paper, Link} from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import createPlayerCards from "./components/createPlayerCards";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "row",
        marginTop: "60px",
        width: "99%",
        height: "99%",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    }
}));

export const GamePage: React.FC = observer(() => {
    const { start, gameData} = gamePage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();

    return (
        <Paper className={styles.container} elevation={3}>
            {createPlayerCards()}
        </Paper>
    );
});