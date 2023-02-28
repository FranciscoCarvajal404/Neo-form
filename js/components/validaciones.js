export function validation(input){
    const inputType = input.dataset.type;
    if (validators[inputType]){
        validators[inputType](input);
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("form__input--invalid")
        input.nextElementSibling.nextElementSibling.innerHTML ="";
    }else{
        input.parentElement.classList.add("form__input--invalid")
        input.nextElementSibling.nextElementSibling.innerHTML = showError(inputType, input);
    }
}

const validators ={
    birth: (input) => ageValidation(input),
}

const errorType = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

function showError(inputType, input){
    let message = "";

    errorType.forEach((error) => {
        if(input.validity[error]){
            message = errorMessage[inputType][error];
        }
    });

    return message;
}

const errorMessage ={
    name:{
        valueMissing: "Por favor, ingresa tu nombre"
    },

    email:{
        valueMissing: "Por favor, ingresa tu correo electrónico",
        typeMismatch: "El correo no es válido"
    },

    password:{
        valueMissing: "Ingresa una contraseña válida",
        patternMismatch: "La contraseña debe contener al menos 6 caracteres y máximo 15"
    },

    birth:{
        valueMissing: "Por favor, ingresa tu fecha de nacimiento",
        customError: "Por favor, ingresa una fecha"
    },

    tel:{
        valueMissing: "Por favor, ingresa tu número telefónico",
        customError: "Por favor, ingresa un número válido"
    },

    adress:{
        valueMissing: "Por favor, ingresa tu dirección",
    },

    city:{
        valueMissing: "Por favor, ingresa la ciudad donde vives",
    },

    state:{
        valueMissing: "Por favor, ingresa el estado donde vives",
    }
}

function ageValidation(input){
    const date = new Date(input.value);
    let message = "";
    if (!fullAge(date)){
        message = "Debes de tener al menos 18 años";
    }

    input.setCustomValidity(message);
}

function fullAge(date){
    const today = new Date();
    const dif = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());
    return dif <= today;
}