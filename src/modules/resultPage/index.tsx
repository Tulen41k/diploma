import { Paper, Typography, Link} from "@mui/material";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/styles";
import CreateWinCards from "./components/createCards";
import CreateLoseCards from "./components/createLoseCards";

const useStyles = makeStyles(() => ({
    container: {
        marginTop: "60px",
        display: "flex",
        flexDirection: "column",
        width: "95%",
        height: "100%",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },

    link: {
        width: "30%",
        height: "50px",
        backgroundColor: "#B0C4DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "10px",
        marginTop: "5px"
    }
}));


export const ResultPage: React.FC = observer(() => {
    //const {start} = resultPage;
    //useEffect(() => {
    //    start();
    //}, []);

    const styles = useStyles();

    return (
        <Paper className={styles.container} elevation={3}>
            <Typography variant="h4">Выжившие</Typography>
            <CreateWinCards/>
            <Typography variant="h4">Погибшие</Typography>
            <CreateLoseCards/>
            <Paper className={styles.link}>
                <Link href={'/'}>Домашняя страница</Link>
            </Paper>
        </Paper>
    )
});