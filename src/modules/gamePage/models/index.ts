import { types } from "mobx-state-tree";
import { getData } from "../../../data/getData";
import { TGameData } from "../../../types/TGameData";

export const gamePage = types.model('gamePage')
.volatile(() => ({
	// здесь будут модели компонентов страницы
}))
.views(() => ({
	get gameData(): TGameData {
		return (
			getData('gameData')
		)
			
		
	},
}))
.actions(() => ({
	// здесь другие
}))
.actions(() => ({
	start() {
		
	},
}))
.create({});