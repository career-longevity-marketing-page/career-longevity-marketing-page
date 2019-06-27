class Form {
    constructor(element) {
        this.element = element;

        this.labels = this.element.querySelectorAll('label');

        this.inputs = this.element.querySelectorAll('input');

        this.textAreas = this.element.querySelectorAll('textarea');

        // In this case my buttons are an input, so what i need to do is filter through
        // the inputs that i have already found and only return the ones with a type
        // of button
        this.buttons = Array.from(this.inputs).filter(input => input.type === 'button');

        // Creating new button objects
        this.buttons = this.buttons.forEach(button => new Button(button));
    }
}

class Button {
    constructor(element) {
        this.element = element;
    }
}


// find the forms in the html and make a new class Form from each of the elements
const forms = document.querySelectorAll('form').forEach(form => new Form(form));