import { useEffect } from "react";
import { Paper, Link} from "@mui/material";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/styles";
import { resultPage } from "./routes";

const useStyles = makeStyles(() => ({
    
}));


export const ResultPage: React.FC = observer(() => {
    const {start} = resultPage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();

    return (
        <Paper elevation={3}>
        </Paper>
    )
});