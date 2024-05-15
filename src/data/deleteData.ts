export const deleteData = (page: string, value: string) => {
    let raw ="";
    let data;
    switch (page) {
        case "profession":
            raw = localStorage.getItem('professions'); 
            console.log(value);
            const professions = JSON.parse(raw);
            data = professions.filter(el => el !== value);
            console.log(data);
            localStorage.setItem('professions', JSON.stringify(data));
            break;
        case "health":
            raw = localStorage.getItem('health');
            const health = JSON.parse(raw);
            data = health.filter(el => el !== value);
            localStorage.setItem('health',JSON.stringify(data))
            break;
        case "phobia":
            raw = localStorage.getItem('phobia');
            const phobia = JSON.parse(raw);
            data = phobia.filter(el => el !== value);
            localStorage.setItem('phobia', JSON.stringify(data));
            break;
        case "baggage":
            raw = localStorage.getItem('baggage');
            const baggage = JSON.parse(raw);
            console.log(raw);
            data = baggage.filter(el => el !== value);
            console.log(data);
            localStorage.setItem('baggage', JSON.stringify(data));
            break;
        case "character":
            raw = localStorage.getItem('chatacter');
            const character = JSON.parse(raw);
            data = character.filter(el => el !== value);
            localStorage.setItem('character', JSON.stringify(data));
            break;
        case "hobby":
            raw = localStorage.getItem('hobby');
            const hobby = JSON.parse(raw);
            data = hobby.filter(el => el !== value);
            localStorage.setItem('hobby', JSON.stringify(data));
            break;
        case "pfact":
            raw = localStorage.getItem('pfact');
            const pfact = JSON.parse(raw);
            data = pfact.filter(el => el !== value);
            localStorage.setItem('pfact', JSON.stringify(data));
            break;
        case "nfact":
            raw = localStorage.getItem('nfact');
            const nfact = JSON.parse(raw);
            data = nfact.filter(el => el !== value);
            localStorage.setItem('nfact', JSON.stringify(data));
            break;
        case "names":
            raw = localStorage.getItem('names');
            const names = JSON.parse(raw);
            data = names.filter(el => el !== value);
            localStorage.setItem('names', JSON.stringify(data));
            break;
        default:
            break;
    }
}