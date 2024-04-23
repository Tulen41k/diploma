import { types } from "mobx-state-tree";

export const homePage = types.model('homePage')
.volatile(() => ({
	// здесь будут модели компонентов страницы

}))
.views(() => ({

}))
.actions(() => ({
	// здесь другие методы страницы
}))
.actions(() => ({
	start() {
		localStorage.removeItem('players');
	},
}))
.create({});