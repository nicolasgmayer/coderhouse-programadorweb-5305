var text1 = document.getElementById('firstName');

text1.onblur = validate;

function validate(event) {
    var inputNode = event.target;
    if (inputNode.value === '') {
        inputNode.className = inputNode.className + ' is-invalid';
    } else {
        inputNode.className = inputNode.className + ' is-valid';

    }

    console.log(inputNode);





}