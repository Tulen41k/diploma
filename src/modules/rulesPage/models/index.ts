import { types } from "mobx-state-tree";

export const rulesPage = types.model('editPage')
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
		// здесь логика того что будет происходить при открытии страницы
	},
}))
.create({});