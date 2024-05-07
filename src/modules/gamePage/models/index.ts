import { types } from "mobx-state-tree";
import { getData } from "../../../data/getData";
import { TGameData } from "../../../types/TGameData";
import VMButton from "../../../mvvm/Button/VMButton";

export const gamePage = types.model('gamePage')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	isProblem: true,

	kollPlace: getData('kollPlace'),

	problemBtn: VMButton.create({
		text: "Катастрофа"
	}),

	addBtn: VMButton.create({
		text: "+"
	}),

	deleteBtn: VMButton.create ({
		text: "-"
	})

}))
.views(() => ({
}))
.actions((self) => ({
	// здесь другие
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
		self.addBtn.setOnClick(()=> {self.addPlace()});
		self.deleteBtn.setOnClick(()=> {self.deletePlace()})
	}
}))
.actions(() => ({
	start() {
		
	},
}))
.create({});