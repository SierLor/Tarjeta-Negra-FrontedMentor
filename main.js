let numberContainer = document.querySelector(".rating-state__number-container");
let rateNumber = document.querySelector(".thankyou-state__result__number");
let submitBtn = document.querySelector(".rating-state__button");
let retingState = document.querySelector(".rating-state");
let thankyouState = document.querySelector(".thankyou-state");

numberContainer.addEventListener("click" , event=>{
   let numberSelected = event.target.innerText;
   rateNumber.innerText = numberSelected;
   if(numberSelected > 1 || numberSelected <=5) {
      submitBtn.addEventListener("click" , ()=>{
       retingState.style.display = "none";
       thankyouState.style.display = "flex";
      });
   }
  
});

 
   