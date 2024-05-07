import { Typography } from "@mui/material";
import { getData } from "../../../data/getData";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({

  description: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    height: "100px",
    justifyContent: "space-around",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center"
  }

}))

export const ProblemDescriprion: React.FC<{}> = () => {

    const problem = getData('problem');
    const styles = useStyles();

    return (
        <div className={styles.description}>
          <Typography variant="h6">{problem.name}</Typography>
          <p>{problem.description}</p>
          <p>{problem.final}</p>
        </div>
      );
}