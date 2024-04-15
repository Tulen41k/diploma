import { useEffect } from "react";
import { homePage } from "./models";
import { Paper, makeStyles } from "@mui/material";
import VButton from "../../mvvm/Button/VButton";
import { observer } from "mobx-react-lite";

const useStyles = makeStyles(() => ({

}));


export const HomePage: React.FC = observer(() => {
    const {start, gameBtn, editBtn, rulesBtn} = homePage;
    useEffect(() => {
        start();
    }, []);

    return (
        <Paper>
            <VButton model={gameBtn}/>
            <VButton model={editBtn}/>
            <VButton model={rulesBtn}/>
        </Paper>
    )
});