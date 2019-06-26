class DropDown {
    constructor(element) {

        this.element = element;

        this.button = this.element.querySelector('.dropdown-button');

        this.buttonIcon = this.element.querySelectorAll('.fas');

        this.content = this.element.querySelector('.dropdown-content');

        this.links = this.element.querySelectorAll('ul li a');

        this.links = Array.from(this.links).map(link => new Link(link));


        this.button.addEventListener('click', event => {
            this.toggle();
            event.stopPropagation(); // must be used to prevent the document click event from running
        });

        document.addEventListener('click', event => {
            if (this.content.classList.contains('toggle-content')) {
                this.toggle();
            }
        });

        this.button.addEventListener('mouseenter', event => this.hover());
    }


    toggle() {
        this.content.classList.toggle('toggle-content');

        // animates the nav menus opening and closing
        if (this.content.classList.contains('toggle-content')) {
            TweenMax.to(this.content, 0.5, {
                height: 272
            });

            TweenMax.to(this.buttonIcon[0], 0.3, {
                scale: 0,
                opacity: 0
            });
            TweenMax.to(this.buttonIcon[1], 0.3, {
                scale: 1,
                opacity: 1
            });

        } else {
            TweenMax.to(this.content, 0.5, {
                height: 0
            });

            TweenMax.to(this.buttonIcon[0], 0.3, {
                scale: 1,
                opacity: 1
            });
            TweenMax.to(this.buttonIcon[1], 0.3, {
                scale: 0,
                opacity: 0
            });
        }

    }
}

// Objects from this class will be created inside the constructor if the drop down class above
class Link {
    constructor(element) {
        this.element = element;
    }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new DropDown(dropdown));