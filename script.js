document.querySelector(".button-col").addEventListener("click", function(){
    let numberOne = parseInt(document.querySelector("#number-one").value);
    let numberTwo = parseInt(document.querySelector("#number-two").value);

    document.querySelector("#answer").innerHTML = ' = ';
    document.querySelector("#number-one").value = '';
    document.querySelector("#number-one").focus();
    document.querySelector("#number-two").value = '';

    if (isNaN(numberOne) == false && isNaN(numberTwo) == false){
        let answer = 0;
        if(event.target.id.split("-")[1] == "add"){
            answer = numberOne + numberTwo;
            console.log(answer)
        }
        else if(event.target.id.split("-")[1] == "subtract"){
            answer = numberOne - numberTwo;
            console.log(answer)
        }
        else if(event.target.id.split("-")[1] == "multiply"){
            answer = numberOne * numberTwo;
            console.log(answer)
        }
        else if(event.target.id.split("-")[1] == "divide"){
            answer = numberOne / numberTwo;
            console.log(answer)
        }

        
        document.querySelector("#answer").innerHTML += `${answer}`;
    }
    else{
        document.querySelector("#answer").innerHTML = "Please enter a valid number";
    }
})