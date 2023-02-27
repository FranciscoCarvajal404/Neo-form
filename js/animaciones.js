const inputs = document.querySelectorAll('.form__input');

inputs.forEach(input => {
    input.addEventListener('blur', (event) => {
    if (event.target.value.length) {
        event.target.classList.add("full");
    } else {
        event.target.classList.remove("full");
    }
});
})