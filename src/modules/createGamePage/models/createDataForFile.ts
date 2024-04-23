import { getData } from "../../../data/getData"

export const createDataForFiles = (index: number) => {
    const data = getData('players');
    const player = data[index];
    let dopString = '';
    if (player && player.dop) { // Проверяем существование player и player.dop
        dopString = player.dop.join(', '); // Преобразуем массив в строку
    };
    console.log(typeof dopString);
    const fileData = 'Имя: '+ player.name +  ' Возраст: ' + player.age + ' Пол: ' + player.sex + ' Профессия: ' + player.profession + ' Стаж: ' + player.stage + ' Здоровье: ' + player.health + ' Фобия: ' + player.phobia + ' Багаж: ' + player.baggage +  ' Характер: ' + player.character + ' Хобби: ' + player.hobby + ' Положительный факт: ' + player.pfact + ' Отрицательный факт: ' + player.nfact + ' Дополнительные карты: ' + dopString;
        
    return {
        fileData
    }
}