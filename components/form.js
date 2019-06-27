class Form {
    constructor(element) {
        this.element = element;

        this.labels = this.element.querySelectorAll('label');

        this.inputs = this.element.querySelectorAll('input');

        this.textArea = this.element.querySelectorAll('textarea');
    }
}


// find the forms in the html and make a new class Form from each of the elements
const forms = document.querySelectorAll('form').forEach(form => new Form(form));