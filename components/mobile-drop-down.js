class DropDown {
    constructor(element) {

        this.element = element;

        this.button = this.element.querySelector('.dropdown-button');

        this.content = this.element.querySelector('.dropdown-content');

        this.button.addEventListener('click', event => this.toggle());

    }


    toggle() {
        this.content.classList.toggle('toggle-content');
    }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new DropDown(dropdown));