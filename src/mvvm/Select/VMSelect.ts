import { Instance, types } from "mobx-state-tree";
import MSelectOption from "./MSelectOption";

export type TVMSelectInstance = Instance<typeof VMSelect>;

const VMSelect = types.model('VMSelect', {
	options: types.array(MSelectOption),
	label: types.optional(types.string, ''),
})
.views((self) => ({
	get selected() {
		return self.options.filter((option) => option.isSelected)[0] || '';
	},
}))
.actions((self) => ({
	onChange(item: any) {
		self.options.forEach((option) => {
			if (item.target.value === option.value) {
				option.setIsSelected(true);
			} else {
				option.setIsSelected(false);
			}
		})
	},
	setOptions(value: string[]) {
		self.options = value.map((count) =>
		MSelectOption.create({
			label: count,
			value: count,
			isSelected: false,
			isDisabled: false
		})
		)
	}
}))
export default VMSelect;