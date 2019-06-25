class DropDown {
    constructor(element) {

        this.element = element;

        this.button = this.element.querySelector('.dropdown-button');

        this.content = this.element.querySelector('.dropdown-content');

        this.links = this.element.querySelectorAll('ul li a');

        this.links = Array.from(this.links).map(link => new Link(link));

        this.button.addEventListener('click', event => {
            this.toggle();
            event.stopPropagation(); // must be used to prevent the document click event from running
        });

        document.addEventListener('click', event => {
            if(this.content.classList.contains('toggle-content')) {
                this.content.classList.remove('toggle-content');
            }
        });
    }
    

    toggle() {
        this.content.classList.toggle('toggle-content');
    }
}

// Objects from this class will be created inside the constructor if the drop down class above
class Link {
    constructor(element) {
        this.element = element;
    }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new DropDown(dropdown));