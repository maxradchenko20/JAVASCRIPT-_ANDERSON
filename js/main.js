//1
function converter(firstNumber,secondNumber){
    firstNumber = prompt('Введите число:','');
    secondNumber = prompt('В какую систему счисления конвертируем???','');
    if (!isNaN(firstNumber) && !isNaN(secondNumber)){
        console.log(parseInt(firstNumber).toString(secondNumber));
    }else {
        console.error("Некорректный ввод!")
    }
}
converter();

//2
const isValidNumber = (string) => {
    return !Number.isNaN(Number(string));
};

const aggregator1 = () => {
    const firstNumber = prompt('first');
    if (!isValidNumber(firstNumber)) {
        console.error('is not a valid number');
        return;
    }
    const secondNumber = prompt('second');
    if (!isValidNumber(secondNumber)) {
        console.error('is not a valid number');
        return;
    }

    console.log(`Ответ: ${+firstNumber + +secondNumber},${firstNumber / secondNumber}`);
}
aggregator1();
