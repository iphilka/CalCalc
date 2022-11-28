// тут в переменные мы записали наши кнопки.
const resetButton = document.querySelector(".reset");
const submitButton = document.querySelector(".submit");
// получаем в переменную нашу форму и все данные которые в ней есть.
// подробнее можно посмотреть тут https://learn.javascript.ru/form-elements
const caloriesForm = document.forms.counter;

// span с калориями
const normalCal = document.querySelector(".normal_cal");

// вешаем событие щелчка по кнопки внутри пример функции
resetButton.addEventListener("click", (event) => {
    alert("Reset!");

    // нужно чтобы страница после нажатия не обновлялась
    event.preventDefault();
});

submitButton.addEventListener("click", (event) => {
    alert("Submit!");

    // эту строчку можно будет убрать, она для теста
    // пример того как можно получить значения в форме. У нас два инпута с именем gender
    // поэтому внутри массива gender мы проверяем поле checked. Нажмите "Рассчитать" и проверьте
    console.log(caloriesForm.gender[0].checked);

    // тоже можно будет удалить, пример как менять верстку из JS
    // нажмите "Рассчитать" и проверьте
    normalCal.textContent = "999999999999";

    // нужно чтобы страница после нажатия не обновлялась
    event.preventDefault();
});

