import { Instance } from "mobx-state-tree";
import VMTextField from "./VMTextField";

export type TVMNumberTextFieldInstance = Instance<typeof VMNumberTextField>;

const VMNumberTextField = VMTextField.named('VMNamedTextField')
.actions((self) => ({
	onChange(value: string) {
		if (value && Number.isNaN(Number(value))) {
			self.setIsError(true);
			self.setHelperText('Можно вводить только числа');
			return;
		}
		if (Number(value) > 15) {
			self.setIsError(true);
			self.setHelperText('Кажется, вы ввели слишком большое число (больше 15)');
			return;
		}
		self.setIsError(false);
		self.setHelperText('');
		self.setValue(value);

	}
}));
export default VMNumberTextField;