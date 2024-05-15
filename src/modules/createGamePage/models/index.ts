import { types } from "mobx-state-tree";
import VMNumberTextField from "../../../mvvm/TextField/VMNumberTextField";
import VMButton from "../../../mvvm/Button/VMButton";
import VMTextField from "../../../mvvm/TextField/VMTextField";
import { TGameData } from "../../../types/TGameData";
import { createArrayPlayers } from "./createArrayPlayers";
import { getData } from "../../../data/getData";
import { createDataForFiles } from "./createDataForFile";
import { downloadFile } from "./downloadFile";

export const createGamePage = types.model('createGamePage')
.volatile(() => ({
	// здесь будут модели компонентов страницы

	isForm: true,

	isName: false,

	isDownload: false,

	isProblem: false,

	problemBtn: VMButton.create({
		text: "Далее"
	}),

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

	downloadBtn: VMButton.create({
		text: 'Скачать характеристики'
	}),

	randomBtn: VMButton.create({
		text: "Придумать имена"
	})


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

	setinProblem(value: boolean) {
		self.isProblem = value
	},

	setISName(value: boolean) {
		self.isName = value
	},

	setISDownload(value: boolean) {
		self.isDownload = value
	},
	async addPlayers() {
		const raw = getData('names');
		const players = createArrayPlayers(raw, self.gameData.cards);
		localStorage.setItem('players', JSON.stringify(players));
	},

	async download() {
		const players = getData('players');
		for (let i = 0; i < players.length; i++) {
			const text = createDataForFiles(i);
			const filename = players[i].name;
			downloadFile(text.fileData, filename);
		}
		localStorage.setItem('gameData', JSON.stringify(self.gameData));
	},

	async getKollPlace() {
		if (self.gameData.players%2) {
			const kollPlace = (self.gameData.players+1)/2;
			localStorage.setItem('kollPlace', JSON.stringify(kollPlace));
		}
		else {
			const kollPlace = self.gameData.players/2;
			localStorage.setItem('kollPlace', JSON.stringify(kollPlace));
		}
	},
	saveNames() {
		const names = getData('names');
		console.log('Names:', names);
		const usedNames = getData('usedNames');
		console.log('Used Names:', usedNames);

    	const namesValues = names.map(item => item.value.trim());
    	const usedNamesValues = usedNames.map(item => item.trim());

    	// Объединяем и удаляем дубликаты
    	const combinedNames = Array.from(new Set([...namesValues, ...usedNamesValues]));
    	console.log('Combined:', combinedNames);
		
		localStorage.setItem('usedNames', JSON.stringify(combinedNames));
	}
}))

.actions((self) => ({
	// здесь другие методы страницы
	afterCreate(){
		self.createBtn.setOnClick(() => {self.setisForm(false), self.setISName(true), self.getKollPlace()}),
		self.readyBtn.setOnClick(() => {self.setISName(false), self.setISDownload(true), self.addPlayers()}),
		self.downloadBtn.setOnClick(() => {self.download()})
		self.problemBtn.setOnClick(() => {self.setISDownload(false), self.setinProblem(true), self.saveNames()})
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