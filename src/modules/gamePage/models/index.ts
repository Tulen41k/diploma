import { types } from "mobx-state-tree";
import { getData } from "../../../data/getData";
import VMButton from "../../../mvvm/Button/VMButton";

export const gamePage = types.model('gamePage')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	isProblem: true,

	kollPlace: 0,

	problemBtn: VMButton.create({
		text: "Катастрофа"
	}),

	addBtn: VMButton.create({
		text: "+"
	}),

	deleteBtn: VMButton.create ({
		text: "-"
	}),

	status: true,

	inGame: 0

}))
.views(() => ({
}))
.actions((self) => ({
	// здесь другие
	checkStatus() {
		self.status = (self.inGame > parseInt(getData('kollPlace')));
	},
	addInGame() {
		self.inGame = self.inGame + 1;
		this.checkStatus();
		console.log(self.inGame);
	},
	deleteInGame() {
		self.inGame = self.inGame - 1;
		console.log(self.inGame);
		this.checkStatus();
		console.log(self.status);
	},
	setisProblem() {
		self.isProblem = !self.isProblem;
	},
	async addPlace() {
		self.kollPlace = self.kollPlace + 1;
		localStorage.setItem('kollPlace', JSON.stringify(self.kollPlace));
	},
	async deletePlace() {
		self.kollPlace = self.kollPlace -1;
		localStorage.setItem('kollPlace', JSON.stringify(self.kollPlace));
		
	}
}))
.actions((self) => ({
	// здесь другие методы страницы
	afterCreate(){
		self.problemBtn.setOnClick(() => {self.setisProblem()});
		self.addBtn.setOnClick(()=> {self.addPlace(), self.checkStatus()});
		self.deleteBtn.setOnClick(()=> {self.deletePlace(), self.checkStatus()})
	}
}))
.actions((self) => ({
	start() {

		self.kollPlace = parseInt(getData('kollPlace')),
		self.inGame = getData('players').length,
		console.log(self.inGame)
		
	},
}))
.create({});