//1
function conwerter() {
    const firstNumber = prompt('Введите число:','');
    const secondNumber = prompt('В какую систему счисления конвертируем???','');
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        console.log(parseInt(firstNumber).toString(secondNumber));
    } else {
        console.error("Некорректный ввод!")
    }
}
conwerter();

//2
const isValidNumber = (string) => {
    return !isNaN(string);
};

const aggregator1 = () => {
    const firstNumber = prompt('first');
    if (!isValidNumber(firstNumber)) {
        console.error('is not a valid number');
        return;
    }
    const secondNumber = prompt('second');
    if (!isValidNumber(secondNumber)) {
        const errorMessage = ('is not a valid number');
        console.log(errorMessage)
    }

    console.log('Ответ:', Number(firstNumber) + Number(secondNumber), Number(firstNumber)/Number(secondNumber));
}
aggregator1();
