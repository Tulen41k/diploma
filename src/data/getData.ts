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
				break;
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
				break;
			case "names":
				raw = localStorage.getItem('names');
				raw = JSON.parse(raw);
				break;
			case "players":
				raw = localStorage.getItem('players');
				raw = JSON.parse(raw);
				break;
			case "gameData":
				raw = localStorage.getItem('gameData');
				raw = JSON.parse(raw);
				break;
			case "problem":
				raw = localStorage.getItem('problem');
				raw = JSON.parse(raw);
				break;
			case "kollPlace":
				raw = localStorage.getItem('kollPlace');
				raw = JSON.parse(raw);
				break;
			default:
				break;
		}

    return raw;
}