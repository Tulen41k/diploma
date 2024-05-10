import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import './styles.css';
import { Header } from "./components/Header";
import { makeStyles } from "@material-ui/styles";
import { HomePage } from "./modules/ homePage";
import { createGamePage } from "./modules/createGamePage/routes";
import { editPage } from "./modules/editPage/routes";
import { rulesPage } from "./modules/rulesPage/routes";
import { gamePage } from "./modules/gamePage/routes";
import { resultPage } from "./modules/resultPage/routes";

const useStyles = makeStyles(() => ({
	container: {
		margin: '80px 0 0 0',
	}
}))

const Layout = () => {
	return (
		<div>
			<Header/>
			<Outlet/>
		</div>
	)
}

function App() {
	const styles = useStyles();
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					{editPage()}
					{rulesPage()}
					{createGamePage()}
					{gamePage()}
					{resultPage()}
					<Route index element={<HomePage/>} />
				</Route>
			</Routes>
		</BrowserRouter>
  )
}

export default App
