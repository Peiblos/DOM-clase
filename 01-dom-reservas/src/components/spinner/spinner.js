

// spinner

const createSpinner = () => {
    const spinner = document.createElement('div');
    spinner.id = "spinner";
    spinner.classList.add('hidden spinner');
    spinner.textContent = "Cargando...";

    return spinner;
}

const showSpinner = () => { }

const hideSpinner = () => { }