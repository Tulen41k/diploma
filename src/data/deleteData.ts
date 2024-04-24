export const deleteData = (page: string, value: string) => {
    let raw ="";
    switch (page) {
        case "profession":
            raw = localStorage.getItem('professions'); 
            const professions = JSON.parse(raw);
            professions.filter(el => el !== 'value');
            localStorage.setItem('professions', JSON.stringify(professions));
            break;
        case "health":
            raw = localStorage.getItem('health');
            const health = JSON.parse(raw);
            health.filter(el => el !== 'value');
            localStorage.setItem('health',JSON.stringify(health))
            break;
        case "phobia":
            raw = localStorage.getItem('phobia');
            const phobia = JSON.parse(raw);
            phobia.filter(el => el !== 'value');
            localStorage.setItem('phobia', JSON.stringify(phobia));
            break;
        case "baggage":
            raw = localStorage.getItem('bagage');
            const baggage = JSON.parse(raw);
            localStorage.setItem('baggage', JSON.stringify(baggage.filter(el => el !== 'value')));
            break;
        case "character":
            raw = localStorage.getItem('chatacter');
            const character = JSON.parse(raw);
            localStorage.setItem('character', JSON.stringify(character.filter(el => el !== 'value')));
            break;
        case "hobby":
            raw = localStorage.getItem('hobby');
            const hobby = JSON.parse(raw);
            localStorage.setItem('hobby', JSON.stringify(hobby.filter(el => el !== 'value')));
            break;
        case "pfact":
            raw = localStorage.getItem('pfact');
            const pfact = JSON.parse(raw);
            localStorage.setItem('pfact', JSON.stringify(pfact.filter(el => el !== 'value')));
            break;
        case "nfact":
            raw = localStorage.getItem('nfact');
            const nfact = JSON.parse(raw);
            localStorage.setItem('nfact', JSON.stringify(nfact.filter(el => el !== 'value')));
            break;
        default:
            break;
    }
}