import { types } from "mobx-state-tree";
import VMNumberTextField from "../../../mvvm/TextField/VMNumberTextField";
import VMButton from "../../../mvvm/Button/VMButton";
import VMTextField from "../../../mvvm/TextField/VMTextField";
import { TGameData } from "../../../types/TGameData";
import { TPlayer } from "../../../types/TPlayer";
import { createArrayPlayers } from "./createArrayPlayers";
import { getData } from "../../../data/getData";

export const createGamePage = types.model('createGamePage')
.volatile(() => ({
	// здесь будут модели компонентов страницы

	isForm: true,

	isName: false,

	isDownload: false,

	playersField: VMNumberTextField.create({
		label: "Количество игроков"
	}),

	playersNames: [] as string[],

	cardField: VMNumberTextField.create({
		label: "Количество доп карт на игрока"
	}),

	createBtn: VMButton.create({
		text: "Далее"
	}),

	readyBtn: VMButton.create({
		text: "Далее"
	}),

	nameField: VMTextField.create({
		label: "Имя игрока"
	}),


}))
.views((self) => ({
	get gameData(): TGameData {
		return {
			players: Number (self.playersField.value),
			cards: Number (self.cardField.value)
		}
	}
}))
.actions((self) => ({
	setisForm(value: boolean) {
		self.isForm = value
	},

	setISName(value: boolean) {
		self.isName = value
	},

	setISDownload(value: boolean) {
		self.isDownload = value
	},
	async addPlayers() {
		let raw = getData('names');
		console.log(raw);
		const players = createArrayPlayers(raw, self.gameData.players);
		localStorage.setItem('players', JSON.stringify(players));
	},
}))

.actions((self) => ({
	// здесь другие методы страницы
	afterCreate(){
		self.createBtn.setOnClick(() => {self.setisForm(false), self.setISName(true), console.log(self.gameData)}),
		self.readyBtn.setOnClick(() => {self.setISName(false), self.setISDownload(true), self.addPlayers()})
	}
}))

.actions((self) => ({
	
}))
.actions(() => ({
	start() {
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});