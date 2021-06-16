function getInput() {

    // Get the clicked element from the target object of our event
    let input = event.target.innerText;
    
    // Print the clicked value to the screen of the calculator
    printNum(input);
}


// It will print the values inside of our field
function printNum(val) {

    let out = document.querySelector('#result');
    let current = out.innerHTML;

    // When our screen is empty, the next operation is that we add clicked number/operation
    if (out.innerHTML == '0') {
        if (val != 'C' && val != 'DEL') {
            out.innerHTML = '';
            out.innerHTML += val;
        } 
    } else {
        if (val == 'DEL') {

            // slice method allows us to remove the last part of the string
            out.innerHTML = current.slice(0, -1);
            if (out.innerHTML.length <= 1) {
                out.innerHTML = '0';
            }
        }

        // We add the value to our screen unless we want to perform an operation
        if (val != 'C' && val != 'DEL' && val != '=') {
            out.innerHTML += val;
        }

        if (val == 'C') {
            out.innerHTML = '0';
        }

        // Now we need to calculate our expression
        // For that we will use eval math function
        if (val == '=') {
            let result = out.innerHTML;
            out.innerHTML = eval(result);
        }
    }
}

const buttons = document.querySelectorAll('button');


buttons.forEach(function(button){

    // We set attribute for each  button element with function of getInput when clicked
    button.setAttribute('onclick', 'getInput()');

});