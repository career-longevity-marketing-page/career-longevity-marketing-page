class DropDown {
    constructor(element) {

        this.element = element;

        this.button = this.element.querySelector('.dropdown-button');

        this.buttonIcon = this.element.querySelector('.fa-bars');

        this.content = this.element.querySelector('.dropdown-content');

        this.links = this.element.querySelectorAll('ul li a');

        this.links = Array.from(this.links).map(link => new Link(link));


        this.button.addEventListener('click', event => {
            this.toggle();
            event.stopPropagation(); // must be used to prevent the document click event from running
        });

        document.addEventListener('click', event => {
            if(this.content.classList.contains('toggle-content')) {
                this.toggle();
            }
        });

        this.button.addEventListener('mouseenter', event => this.hover());
    }
    

    toggle() {
        this.content.classList.toggle('toggle-content');
        
        // animates the nav menus opening and closing
        if (this.content.classList.contains('toggle-content')) {
            TweenMax.to(this.content, 0.5, {height: 272});

            this.buttonIcon.classList.remove('fa-bars');
            this.buttonIcon.classList.add('fa-times');
        } else {
            TweenMax.to(this.content, 0.5, {height: 0});
            
            this.buttonIcon.classList.remove('fa-times');
            this.buttonIcon.classList.add('fa-bars');
        }
        
    }

    hover() {
        // TweenMax.to(this.buttonIcon, 1, {fontSize: "5rem"});
       
    }
}

// Objects from this class will be created inside the constructor if the drop down class above
class Link {
    constructor(element) {
        this.element = element;
    }
}

let dropdowns = document.querySelectorAll('.dropdown').forEach(dropdown => new DropDown(dropdown));