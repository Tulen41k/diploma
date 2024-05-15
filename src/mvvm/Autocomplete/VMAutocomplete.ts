import { Instance, types } from "mobx-state-tree";

export type TVMAutocompleteInstance = Instance<typeof VMAutocomplete>;

const VMAutocomplete = types.model('VMAutocomplete', {
	value: types.optional(types.string, ''),
    options: types.array(types.string),
    isDisabled: false,
    key: types.optional(types.number, 0),
    label: types.optional(types.string, ''),
})
.actions(self => ({
    onChange(value: string) {
        self.value = value;
    },
    setIsDisabled(value: boolean) {
        self.isDisabled = value;
    },
    toggleIsDisabled() {
        self.isDisabled = !self.isDisabled;
    },
    setLabel(value: string) {
		self.label = value;
	},
    setValue(value: string) {
		self.value = value;
	},
    setOptions(value: string[]) {
		self.options = value;
    }
}))
.actions((self) => ({
	onChange(value: string) {
		self.setValue(value);
	}
}))
.actions((self) => ({
	setOnChange(callback: (value: string) => void) {
		self.onChange = callback;
	}
}))

export default VMAutocomplete;