import { useState } from "react";
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

    const [showCard, setShowCard] = useState<boolean>(false);

    const toggleShowCard = () => {
        if(showCard) {}
            else {
                const confirmMessage = 'Открыть доп карту';
                if (window.confirm(confirmMessage)) {
                    setShowCard(true);
                }
        }
    };

    return (
        <Paper className={styles.value} onClick={toggleShowCard}>
            {showCard ? 'Доп карта: ' + card : 'Доп карта'}
        </Paper>
    )

}

export default DopCards;