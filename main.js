const inputEl=document.querySelector(".input-date");
const spanEl=document.querySelector(".age-display")


const ageCalc =()=>{
    let todayDate=new Date().getFullYear()
    let dob = new Date(inputEl.value).getFullYear()

    let age = todayDate - dob

    spanEl.innerHTML=Math.max(age,0)

}




inputEl.addEventListener("change",ageCalc)




























