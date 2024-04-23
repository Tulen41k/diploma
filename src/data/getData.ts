export const getData = (value: string) => {
    let raw ="";
		switch (value) {
			case "profession":
				raw = localStorage.getItem('professions'); 
				raw = JSON.parse(raw);
				break;
			case "health":
				raw = localStorage.getItem('health');
				raw = JSON.parse(raw);
				break;
			case "phobia":
				raw = localStorage.getItem('phobia');
				raw = JSON.parse(raw);
				break;
			case "baggage":
				raw = localStorage.getItem('baggage');
				raw = JSON.parse(raw);
				break;
			case "character":
				raw = localStorage.getItem('character');
				raw = JSON.parse(raw);
				break;
			case "hobby":
				raw = localStorage.getItem('hobby');
				raw = JSON.parse(raw);
			case "pfact":
				raw = localStorage.getItem('pfact');
				raw = JSON.parse(raw);
				break;
			case "nfact":
				raw = localStorage.getItem('nfact');
				raw = JSON.parse(raw);
				break;
			case "dop":
				raw = localStorage.getItem('dop');
				raw = JSON.parse(raw);
			case "names":
				raw = localStorage.getItem('names');
				raw = JSON.parse(raw);
			default:
				break;
		}

    return raw;
}