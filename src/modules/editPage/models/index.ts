import { types } from "mobx-state-tree";
import VMButton from "../../../mvvm/Button/VMButton";
import VMTextField from "../../../mvvm/TextField/VMTextField";
import VMSelect from "../../../mvvm/Select/VMSelect";
import { string } from "mobx-state-tree/dist/internal";
import { baggage, character, health, hobby, nfact, pfact, phobia, professions } from "../../../data/data";
import { getData } from "../../../data/getData";
import { putData } from "../../../data/putData";

export const editPage = types.model('editPage')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	isHome: true,

	isAdd: false,

	isPage: "",

	namePage: "",

	professionBtn: VMButton.create({
		text: "Профессия"
	}),

	healfBtn: VMButton.create({
		text: "Здоровье"
	}),

	phobiaBtn: VMButton.create({
		text: "Фобия"
	}),

	baggageBtn: VMButton.create({
		text: "Багаж"
	}),

	chatacterBtn: VMButton.create({
		text: "Характер"
	}),

	hobbyBtn: VMButton.create({
		text: "Хобби"
	}),

	pfactBtn: VMButton.create({
		text: "Положительные факты"
	}),

	nfactBtn: VMButton.create({
		text: "Отрицательные факты"
	}),

	returnBtn: VMButton.create({
		text: "Назад"
	}),

	addField: VMTextField.create({
		label: "Введите значение новой характеристики"
	}),

	readSelect: VMSelect.create({
		label: "Существующие характеристики",
		options: []

	}),

	addBtn: VMButton.create({
		text: "Добавить характеристику"
	}),

	saveBtn: VMButton.create({
		text: "Сохранить"
	}),

	deleteBtn: VMButton.create({
		text: "Удалить характеристику"
	})
}))
.views(() => ({

}))

.actions((self) => ({
	setisHome(value:boolean) {
		self.isHome = value
	},
	setisPage(value:string) {
		self.isPage = value
	},
	setNamePage(value:string) {
		self.namePage = value
	},
	setisAdd(value:boolean) {
		self.isAdd = value
	}
}))

.actions((self) => ({
	async fetchSelect() {
		const data = getData(self.isPage);
		self.readSelect.setOptions(data);
		
	},

	async addValue(value: string) {
		putData(self.isPage, value);
		
	},

	async deleteValue (value: string) {
		switch (self.isPage) {
			case "profession":
				raw = localStorage.getItem('professions'); 
				const professions = JSON.parse(raw);
				localStorage.setItem('professions', JSON.stringify(professions.filter(el => el !== 'value')));
				break;
			case "health":
				raw = localStorage.getItem('health');
				const health = JSON.parse(raw);
				localStorage.setItem('health',JSON.stringify(health.filter(el => el !== 'value')))
				break;
			case "phobia":
				raw = localStorage.getItem('phobia');
				const phobia = JSON.parse(raw);
				localStorage.setItem('phobia', JSON.stringify(phobia.filter(el => el !== 'value')));
				break;
			case "baggage":
				raw = localStorage.getItem('bagage');
				const baggage = JSON.parse(raw);
				localStorage.setItem('baggage', JSON.stringify(baggage.filter(el => el !== 'value')));
				break;
			case "character":
				raw = localStorage.getItem('chatacter');
				const character = JSON.parse(raw);
				localStorage.setItem('character', JSON.stringify(character.filter(el => el !== 'value')));
				break;
			case "hobby":
				raw = localStorage.getItem('hobby');
				const hobby = JSON.parse(raw);
				localStorage.setItem('hobby', JSON.stringify(hobby.filter(el => el !== 'value')));
				break;
			case "pfact":
				raw = localStorage.getItem('pfact');
				const pfact = JSON.parse(raw);
				localStorage.setItem('pfact', JSON.stringify(pfact.filter(el => el !== 'value')));
				break;
			case "nfact":
				raw = localStorage.getItem('nfact');
				const nfact = JSON.parse(raw);
				localStorage.setItem('nfact', JSON.stringify(nfact.filter(el => el !== 'value')));
				break;
			default:
				break;
		}
	}
}))

.actions((self) => ({
	afterCreate(){
		self.professionBtn.setOnClick(() => {self.setisHome(false), self.setisPage("profession"), self.setNamePage("Профессия"), self.fetchSelect()})
		self.healfBtn.setOnClick(() => {self.setisHome(false), self.setisPage("health"), self.setNamePage("Состояние здоровья"), self.fetchSelect()})
		self.phobiaBtn.setOnClick(() => {self.setisHome(false), self.setisPage("phobia"), self.setNamePage("Фобия"), self.fetchSelect()})
		self.baggageBtn.setOnClick(() => {self.setisHome(false), self.setisPage("baggage"), self.setNamePage("Багаж"), self.fetchSelect()})
		self.chatacterBtn.setOnClick(() => {self.setisHome(false), self.setisPage("character"), self.setNamePage("Характер"), self.fetchSelect()})
		self.hobbyBtn.setOnClick(() => {self.setisHome(false), self.setisPage("hobby"), self.setNamePage("Хобби"), self.fetchSelect()})
		self.pfactBtn.setOnClick(() => {self.setisHome(false), self.setisPage("pfact"), self.setNamePage("Положительные факты"), self.fetchSelect()})
		self.nfactBtn.setOnClick(() => {self.setisHome(false), self.setisPage("nfact"), self.setNamePage("Негативные факты"), self.fetchSelect()})
		self.returnBtn.setOnClick(() => {self.setisHome(true)})
		self.addBtn.setOnClick(() => {self.setisAdd(true)})
		self.saveBtn.setOnClick(() => {self.setisAdd(false), self.addValue(self.addField.value), console.log(self.addField.value), self.fetchSelect()})
		self.deleteBtn.setOnClick(() => {self.deleteValue(self.readSelect.selected.value)})
	}
}))
.actions(() => ({
	start() {
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});