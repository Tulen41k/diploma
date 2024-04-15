import { makeStyles } from "@material-ui/styles";
import { Paper } from "@mui/material";

const useStyles = makeStyles(() => ({
	header: {
		width: '100vw',
		position: 'fixed',
		top: 0,
		left: 0,
		height: 40,
		backgroundColor: "#E6E6FA"
	},
	h1: {
		textAlign: "center"
	}
}));

export const Header: React.FC = () => {
	const styles = useStyles();
	return (
		<Paper className={styles.header}>
			<h1 className={styles.h1}>Бункер</h1>
		</Paper>
	)
		
};