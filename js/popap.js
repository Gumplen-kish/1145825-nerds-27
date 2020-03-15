/*Обьявляем, необходимые для окна обратной связи, переменные*/ 
var button = document.querySelector(".btn-contact");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=email]");
var textarea = popup.querySelector("[name=text-letter]");
var isStorageSupport = true;
var storage = "";
/*Переменные для слайдера*/
var slider=document.querySelector(".slider-list");
console.log(slider);
var totalSlider = slider.children;
var totalToggles = document.querySelectorAll(".slider-toggle");
console.log(totalToggles);
/*Слайдер */
function toggleSlides (toggles,slider) {
    for (var i=0; i<toggles.length; i++) {
        toggles[i].addEventListener("click",function() {
            for (var j=0; j<slider.length; j++) {
                slider[j].classList.remove("active");
                slider[i].classList.add("active");
                toggles[j].classList.remove("active-toggle");
                toggles[i].classList.add("active-toggle");
            }
        });
    }
}
toggleSlides(totalToggles, totalSlider);
try {
    storage = localStorage.getItem("name");
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport=false;
}
/*Задаем добавление класса при клике на кнопку*/
button.addEventListener("click",function(evt) {
    popup.classList.add("write-us-show");
    if  (storage) {
        name.value=storage;
        email.focus();
    } else {
    name.focus();
    }
});
/*Задаем удаление класса при клике на кнопку*/
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove(".write-us-show");
});
/*Отменяем отправку форму если.. */
form.addEventListener("submit",function(evt) {
    if (!name.value ||!email.value) {
        evt.preventDefault();
        popup.classList.remove("write-us-show-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("write-us-show-error");
        console.log("Введите ваше имя и email");
    } else {
        if (isStorageSupport) { 
            localStorage.setItem("name",user-name.value);
        }
    }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("write-us-show")) {
          popup.classList.remove("write-us-show");
        }
    }
});