var formMain = document.querySelector(".form_index_search form");
var formOpenButton = formMain.querySelector(".open_form");
var formData = formMain.querySelector(".container_fieldset");
var arrivalDate = formData.querySelector("[name = arrival_date]");
var departureDate = formData.querySelector("[name = date_of_departure]");
var peopleAmount = formData.querySelectorAll(".input_number");
var map = document.querySelector(".map a");
var modalMap = document.querySelector(".modal_map");
var closeModalMap = modalMap.querySelector(".modal_close");
var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";
try {
    storageAdults = localStorage.getItem("adults");
    storageChildren = localStorage.getItem("children");
} catch (err) {
    isStorageSupport = false;
}
formOpenButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    formData.classList.toggle("visually-hidden");
    if (!formData.classList.contains("visually-hidden")) {
        formData.classList.add("modal_show");
        if (storageAdults) {
            peopleAmount[0].value = storageAdults;
        }
        if (storageChildren) {
            peopleAmount[1].value = storageChildren;
        }
        arrivalDate.focus();
    } else {
        formData.classList.remove("modal_show");
    }
});
formMain.addEventListener("submit", function(evt) {
    if (!arrivalDate.value || !departureDate.value || !peopleAmount[0].value || !peopleAmount[1].value) {
        evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adults", peopleAmount[0].value);
            localStorage.setItem("children", peopleAmount[1].value);
        }
    }
    evt.preventDefault();
});
map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.remove("visually-hidden");
    if (!formData.classList.contains("visually-hidden")) {
        formData.classList.add("visually-hidden");
    }
});
closeModalMap.addEventListener("click", function(evt) {
    modalMap.classList.add("visually-hidden");
});
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (!formData.classList.contains("visually-hidden")) {
            evt.preventDefault();
            formData.classList.add("visually-hidden");
            formData.classList.remove("modal_show");
        }
        if (!modalMap.classList.contains("visually-hidden")) {
            evt.preventDefault();
            modalMap.classList.add("visually-hidden");
        }
    }
});
