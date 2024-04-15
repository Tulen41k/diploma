import { makeStyles } from "@material-ui/styles";
import { Link, Paper } from "@mui/material";

const useStyles = makeStyles(() => ({
	header: {
		width: '100vw',
		position: 'fixed',
		top: 0,
		left: 0,
		height: 60,
		display: 'flex',
		alignItems: 'center',
		padding: 15,
		gap: 15,
	},
}));

export const Header: React.FC = () => {
	const styles = useStyles();
	return <Paper className={styles.header}>
		Бункер
	</Paper>;
};