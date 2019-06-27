// The form class is responsible for creating the neccesary classes inside of a form
class Form {
    constructor(formElement) {
        this.element = formElement;

        // Creating the children classes
        this.labels = this.element.querySelectorAll('label').forEach(label => new Label(label));
        this.inputs = this.element.querySelectorAll('input').forEach(input => new Input(input));
        this.textAreas = this.element.querySelectorAll('textarea').forEach(texarea => new TextArea(texarea));

        // In this case my buttons are an input, so what i need to do is filter through
        // the inputs that i have already found and only return the ones with a type
        // of button
        this.buttons = Array.from(this.inputs).filter(input => input.type === 'button');

        // Creating new button objects
        this.buttons = this.buttons.forEach(button => new Button(button));
    }
}

// LABEL
class Label extends Form {
    constructor(labelElement) {
        super(labelElement);

        this.element = labelElement;
    }
}

// INPUT
class Input extends Form {
    constructor(inputElement) {
        super(inputElement);

        this.element = inputElement;
    }
}

// TEXT AREA
class TextArea extends Form {
    constructor(textAreaElement) {
        super(textAreaElement);

        this.element = textAreaElement;
    }
}

// BUTTON
class Button extends Form {
    constructor(buttonElement) {
        super(buttonElement);

        this.element = buttonElement;
    }


}


// find the forms in the html and make a new class Form from each of the elements
const forms = document.querySelectorAll('form').forEach(form => new Form(form));