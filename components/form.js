// The form class is responsible for creating the neccesary classes inside of a form
class Form {
    constructor(formElement) {
        this.element = formElement;

        // Creating the children classes
        this.labels = this.element.querySelectorAll('label').forEach(label => new Label(label));
        this.textAreas = this.element.querySelectorAll('textarea').forEach(texarea => new TextArea(texarea));

        // this.inputs should only give back input elements that are NOT buttons, buttons
        // will have its own individual class
        this.inputs = Array.from(this.element.querySelectorAll('input')).filter(input => input.type !== 'button')

        // Creating the new input objects
        this.inputs = this.inputs.forEach(input => new Input(input));

        // The buttons here are a type of input so after query selecting for all the inputs I
        // Change it to an array and then filter out only the inputs that have a type of 'button'
        this.buttons = Array.from(this.element.querySelectorAll('input')).filter(input => input.type === 'button');

        // Creating the new button objects
        this.buttons = this.buttons.forEach(button => new Button(button));


        // Since there is only ever going to be one submit button per form i can just
        // grab the single input element inside the form that has the type of submit
        this.submit = this.element.querySelector('input[type="submit"]');



        this.element.addEventListener('submit', event => {
            // Stops the submit button from refreshing the page when clicked
            event.preventDefault();

        });
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

        // since currently text and email are the only input types that need to be validated
        // with an 'input' listener, we use an if statement to make sure that only those types of
        // elements get the event listener added onto it
        if (this.element.type === 'text') {
            this.element.addEventListener('input', event => {
                // Here we call the validation method and put in the parameter of the element
                // type. We do this because the email and text should have different criteria for
                // validating
                this.validation();
            });
        }
    }

    // The validation function should check the different inputs and determine if
    // they are valid or not (i.e. has the user entered text into the input? etc.)
    validation() {
        console.log(this.element.checkValidity());


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