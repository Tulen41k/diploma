import { types } from "mobx-state-tree";
import VMButton from "../../../mvvm/Button/VMButton";

export const homePage = types.model('homePage')
.volatile(() => ({
	// здесь будут модели компонентов страницы

	gameBtn : VMButton.create({
		text: "Начать игру"
	}),
	editBtn: VMButton.create({
		text: "Редактировать характеристики"
	}),
	rulesBtn: VMButton.create({
		text: "Правила игры"
	})
}))
.views(() => ({

}))
.actions(() => ({
	// здесь другие методы страницы
}))
.actions(() => ({
	start() {
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});