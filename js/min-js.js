var button=document.querySelector(".btn-contact");var popup=document.querySelector(".write-us");var close=popup.querySelector(".close");var form=popup.querySelector("form");var name=popup.querySelector("[name=user-name]");var email=popup.querySelector("[name=email]");var textarea=popup.querySelector("[name=text-letter]");var isStorageSupport=true;var storage="";var slider=document.querySelector(".slider-list");console.log(slider);var totalSlider=slider.children;var totalToggles=document.querySelectorAll(".slider-toggle");console.log(totalToggles);function toggleSlides(c,b){for(var a=0;a<c.length;a++){c[a].addEventListener("click",function(){for(var d=0;d<b.length;d++){b[d].classList.remove("active");b[a].classList.add("active");c[d].classList.remove("active-toggle");c[a].classList.add("active-toggle")}})}}toggleSlides(totalToggles,totalSlider);try{storage=localStorage.getItem("name");storage=localStorage.getItem("email")}catch(err){isStorageSupport=false}button.addEventListener("click",function(a){a.preventDefault();popup.classList.add("write-us-show");if(storage){name.value=storage;email.focus()}else{name.focus()}});close.addEventListener("click",function(a){a.preventDefault();popup.classList.remove("write-us-show")});form.addEventListener("submit",function(a){if(!name.value||!email.value){a.preventDefault();popup.classList.remove("write-us-show-error");popup.offsetWidth=popup.offsetWidth;popup.classList.add("write-us-show-error");console.log("Введите ваше имя и email")}else{if(isStorageSupport){localStorage.setItem("name",user-name.value)}}});window.addEventListener("keydown",function(a){if(a.keyCode===27){a.preventDefault();if(popup.classList.contains("write-us-show")){popup.classList.remove("write-us-show")}}});