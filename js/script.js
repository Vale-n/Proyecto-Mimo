class Acordeon {
    constructor({ element }) {
    this.element = element;
    this.siblingsLength = this.element.parentNode.childNodes; // Hermanos del acordeon que se le da click
    this.classToShowContent = "is-dropdown-show"; // Clase que se pone para mostrar el contenido
    this.init();
}
// Inicia mis funciones
init() {
    this.toggleDropdown();
}
toggleDropdown() {
    // Acción de click para cada elemento
    this.element.addEventListener("click", () => {
        // Valida si el elemento contiene la clase is-dropdown-show
        if (this.element.classList.contains(this.classToShowContent)) {
            //  Remueve la clase is-dropdown-show al elemento
            this.element.classList.remove(this.classToShowContent)
        } else {
            //  Recorre todos los hermanos del elemento al que se le dio click actualmente
            for (let i = 0; i < this.siblingsLength.length; i++) {
                const sibling = this.siblingsLength[i]
                if (sibling.classList) {
                    //  Valida si algún elemento tiene la clase is-dropdown-show
                    if (sibling.classList.contains(this.classToShowContent)) {
                        // Remueve la clase is-dropdown-show al elemento
                        sibling.classList.remove(this.classToShowContent)
                    }
                }
            }
            //  Agrega la clase is-dropdown-show al elemento
            this.element.classList.add(this.classToShowContent)
        }
    })
}
}
// Iniciar instancia de la clase Acordeon
const dropdownButtons = document.querySelectorAll(".js-dropdown-target");
dropdownButtons.forEach(currentDropdown => {
    new Acordeon({
        element: currentDropdown
    });
});