let buttons = document.getElementsByClassName("number");

 for(let i=0; i<buttons.length; i++){
    buttons[i]. addEventListener("click", function(){
        let numberClicked = this.textContent;
        submitClick(numberClicked);
    })
 }

function submitClick(num){
    document.querySelector(".submit").addEventListener("click", function(){
        let result = document.querySelector(".result");
        result.innerHTML = `You selected ${num} out of 5`;
        let thanksCont = document.getElementById("hideThanks");
        thanksCont.style.display = "flex";
        let mainCont = document.getElementById("hideForm");
        mainCont.style.display = "none";
    })
}

