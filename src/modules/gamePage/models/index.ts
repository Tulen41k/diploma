import { types } from "mobx-state-tree";
import { getData } from "../../../data/getData";
import VMButton from "../../../mvvm/Button/VMButton";
import { TPlayer } from "../../../types/TPlayer";
import { string } from "mobx-state-tree/dist/internal";

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

	inGame: 0,
	
	data: getData('players')

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
	},
	deleteInGame() {
		self.inGame = self.inGame - 1;
		this.checkStatus();
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
		
	},
	changePerson(index: number, person: TPlayer){
		self.data[index]=person;
		localStorage.setItem('players', JSON.stringify(self.data))
		self.data = getData('players');
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
		self.data = getData('players')
		
	},
}))
.create({});