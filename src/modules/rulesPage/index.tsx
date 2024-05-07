import { useEffect } from "react";
import { rulesPage } from "./models";
import { Paper, Link} from "@mui/material";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: "100px",
        width: "60%",
        height: "700px",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },
    rules: {
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "500px",
        justifyContent: "space-around",
        marginLeft: "auto",
        marginRight: "auto",
        alignItems: "center"
    },
    rule: {
        marginLeft: "10px",
        marginRight: "10px"
    },
    btn: {
        width: "30%",
        height: "50px",
        backgroundColor: "#B0C4DE",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
}));


export const RulesPage: React.FC = observer(() => {
    const {start} = rulesPage;
    useEffect(() => {
        start();
    }, []);

    const styles = useStyles();

    return (
        <Paper className={styles.container} elevation={3}>
            <h1>Правила игры</h1>
            <Paper className={styles.rules} elevation={1}>
                <div className={styles.rule}>На Земле грядет глобальная катастрофа. Вам повезло, вы оказались перед входом в бункер, в котором можно переждать опасный период. И вы, возможно, не только выживете, но и станете теми героями, что спасут человечество. Есть проблема: в бункер попадет лишь половина из вас. А остальные будут обречены встречать катастрофу снаружи.</div>
                <div className={styles.rule}>Игроки получают характеристики своего персонажа: профессия, злоровье, хобби и другие. Постепенно вы раскрываете свои карты, знакомитесь друг с другом и решаете, кто и насколько будет полезен для выживания и восстановления жизни после выхода из бункера.</div>
                <div className={styles.rule}>В ходе нескольких раундов часть игроков становится изгнанными, а те, кто прошли все круги голосования, попадают в бункер.</div>
                <div className={styles.rule}>В первый круг открывается две характеристики, в последующие - по одной. На основании открытых характеристик каждый круг игроки
                    решают, кто будет выгнан из бункера.
                </div>
                <div className={styles.rule}>Помимо характеристик персонажа, есть дополнительные карты. Они могут быть сыграны в любой момент. За исключением тех, на которых написан момент использования.</div>
                <div className={styles.rule}>Когда игроков останется столько, сколько сможет пройти в бункер, игра завершится. Попавшие в бункер - выжившие, остальные - погибшие. Сначала вксрываются все характеристики выживших игроков, затем все характеристики погибших.</div>
            </Paper>
            <Paper className={styles.btn}>
                <Link href={'/'}>Назад</Link>
            </Paper>
        </Paper>
    )
});