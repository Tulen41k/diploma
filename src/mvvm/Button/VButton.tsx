import { Button } from "@mui/material";
import { observer } from "mobx-react-lite";
import { TVMButtonInstance } from "./VMButton";

type props = {
	model: TVMButtonInstance;
	className?: string;
}

const VButton: React.FC<props> = ({model, className}): JSX.Element => {
	const { onClick, isDisabled, text, key } = model;
	return (
			<Button
				className={className}
				onClick={onClick} 
				disabled={isDisabled} 
				variant="contained"
				key={key}
			>{text}</Button>
		)
};
export default observer(VButton);