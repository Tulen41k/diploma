import { Typography } from "@mui/material";
import { problem } from "../../../data/data";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({

  description: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "400px",
    justifyContent: "space-around",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center"
  }

}))

export const ProblemDescriprion: React.FC<{}> = () => {
    const randomProblem = problem[Math.floor(Math.random() * problem.length)];
    localStorage.setItem('problem', JSON.stringify(randomProblem));
    const styles = useStyles();
    
    return (
        <div className={styles.description}>
          <Typography variant="h5">{randomProblem.name}</Typography>
          <p>{randomProblem.description}</p>
          <p>{randomProblem.final}</p>
        </div>
      );
}