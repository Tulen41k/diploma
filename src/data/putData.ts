export const putData = (page: string, value: string) => {
    let raw ="";
    switch (page) {
        case "profession":
            raw = localStorage.getItem('professions'); 
            const professions = JSON.parse(raw);
            professions.push(value);
            localStorage.setItem('professions', JSON.stringify(professions));
            break;
        case "health":
            raw = localStorage.getItem('health');
            const health = JSON.parse(raw);
            health.push(value);
            localStorage.setItem('health',JSON.stringify(health))
            break;
        case "phobia":
            raw = localStorage.getItem('phobia');
            const phobia = JSON.parse(raw);
            phobia.push(value);
            localStorage.setItem('phobia', JSON.stringify(phobia));
            break;
        case "baggage":
            raw = localStorage.getItem('baggage');
            const baggage = JSON.parse(raw);
            baggage.push(value);
            localStorage.setItem('baggage', JSON.stringify(baggage));
            break;
        case "character":
            raw = localStorage.getItem('character');
            const character = JSON.parse(raw);
            character.push(value);
            localStorage.setItem('character', JSON.stringify(character));
            break;
        case "hobby":
            raw = localStorage.getItem('hobby');
            const hobby = JSON.parse(raw);
            hobby.push(value);
            localStorage.setItem('hobby', JSON.stringify(hobby));
            break;
        case "pfact":
            raw = localStorage.getItem('pfact');
            const pfact = JSON.parse(raw);
            pfact.push(value);
            localStorage.setItem('pfact', JSON.stringify(pfact));
            break;
        case "nfact":
            raw = localStorage.getItem('nfact');
            const nfact = JSON.parse(raw);
            nfact.push(value);
            localStorage.setItem('nfact', JSON.stringify(nfact));
            break;
        default:
            break;
    }

}