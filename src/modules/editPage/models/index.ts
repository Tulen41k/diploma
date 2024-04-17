import { types } from "mobx-state-tree";
import VMButton from "../../../mvvm/Button/VMButton";

export const editPage = types.model('editPage')
.volatile(() => ({
	// здесь будут модели компонентов страницы
	isHome: true,

	isPage: "",

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
	}
}))

.actions(() => ({
}))

.actions((self) => ({
	afterCreate(){
		self.professionBtn.setOnClick(() => {self.setisHome(false), self.setisPage("profession")})
		self.healfBtn.setOnClick(() => {self.setisHome(false), self.setisPage("health")})
		self.phobiaBtn.setOnClick(() => {self.setisHome(false), self.setisPage("phobia")})
		self.baggageBtn.setOnClick(() => {self.setisHome(false), self.setisPage("baggage")})
		self.chatacterBtn.setOnClick(() => {self.setisHome(false), self.setisPage("character")})
		self.hobbyBtn.setOnClick(() => {self.setisHome(false), self.setisPage("hobby")})
		self.pfactBtn.setOnClick(() => {self.setisHome(false), self.setisPage("pfact")})
		self.nfactBtn.setOnClick(() => {self.setisHome(false), self.setisPage("nfact")})
		self.returnBtn.setOnClick(() => {self.setisHome(true)})
	}
}))
.actions(() => ({
	start() {
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});