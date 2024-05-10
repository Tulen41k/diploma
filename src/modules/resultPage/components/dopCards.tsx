import { Paper } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    value: {
        width: "90%",
        height: "40px",
        marginTop: "5px",
        textAlign: "center"
    }
}));


const DopCards : React.FC<{card: string}> = ({card}) => {
    const styles = useStyles();    
    return (
        <Paper className={styles.value}>
            {'Доп карта: ' + card}
        </Paper>
    )
}

export default DopCards;