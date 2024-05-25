import { types } from "mobx-state-tree";
import VMButton from "../../../mvvm/Button/VMButton";
import VMTextField from "../../../mvvm/TextField/VMTextField";
import { getData } from "../../../data/getData";
import { putData } from "../../../data/putData";
import { deleteData } from "../../../data/deleteData";
import VMAutocomplete from "../../../mvvm/Autocomplete/VMAutocomplete";

export const editPage = types.model('editPage')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	isHome: true,

	isAdd: false,

	isDelete: false,

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

	readComplete: VMAutocomplete.create({
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
	}),

	saveDeleteBtn: VMButton.create({
		text: "Удалить"
	}),

	deleteSelect:VMAutocomplete.create({
		label: "Выберите характеристику",
		options: []
	}),
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
	},
	setisDelete(value: boolean) {
		self.isDelete = value
	}
}))

.actions((self) => ({
	async fetchSelect() {
		const data = getData(self.isPage);
		self.readComplete.setOptions(data);
	},

	async addValue(value: string) {
		putData(self.isPage, value);
		this.fetchSelect();
		
	},

	async deleteValue (value: string) {
		deleteData(self.isPage, value);
		this.fetchSelect();
	},

	async select() {
		const data = getData(self.isPage);
		self.deleteSelect.setOptions(data);
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
		self.deleteBtn.setOnClick(() => {self.select(), self.setisDelete(true)})
		self.saveDeleteBtn.setOnClick(() => {self.deleteValue(self.deleteSelect.value), self.setisDelete(false)})
	}
}))
.actions(() => ({
	start() {
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});