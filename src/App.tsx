import { BrowserRouter, Routes, Route } from "react-router-dom"
import './styles.css';
import { Header } from "./components/Header";
import { makeStyles } from "@material-ui/styles";
import { HomePage } from "./modules/ homePage";

const useStyles = makeStyles(() => ({
	container: {
		margin: '80px 0 0 0',
	}
}))

function App() {
	const styles = useStyles();
	return (
		<>
		<Header />
		<div className={styles.container}>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={< HomePage />} />			
				</Routes>
			</BrowserRouter>
		</div>
		</>
  )
}

export default App
