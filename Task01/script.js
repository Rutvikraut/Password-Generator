const lengthSlider=document.querySelector(".passwordLength input")
const options=document.querySelectorAll(".option input")
const copybtn=document.querySelector(".copyBtn")
const passwordInput=document.querySelector(".input-box input")
const generateBtn=document.querySelector(".generateButton")
const passwordIndicator=document.querySelector(".passwordIndicator")
const characters={
    lowercase:"abcdefghijklmnopqrstuvwxyz",
    uppercase:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers:"0123456789",
    symbols:"^!$%&|[](){}:;.,*+-#@<>~"
}

const generatePassword=()=>{
    let staticPassword=""
    let randomPassword=""
    let passwordlength=lengthSlider.value
    options.forEach(option=>{
        if(option.checked){
            staticPassword += characters[option.id];
        }
    })
    for(let i=0;i<passwordlength;i++){
        let randomchar=staticPassword[Math.floor(Math.random()*staticPassword.length)]
        randomPassword+=randomchar
    }
    passwordInput.value=randomPassword
}

const upadatePassIndicator=()=>{
    passwordIndicator.id=lengthSlider.value<=8?"weak":lengthSlider.value<=16?"medium":"strong";
}

const updateSlider=()=>{
    generatePassword();
    upadatePassIndicator();
}
updateSlider()

const copyPassword=()=>{
    navigator.clipboard.writeText(passwordInput.value)
    copybtn.innerHTML="Copied"
    copybtn.style.background="#1E40AF"
    setTimeout(() => { 
        copybtn.innerText = "Copy";
        copybtn.style.background="#1D4ED8"
    }, 1000);
}

copybtn.addEventListener("click",copyPassword)
lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click",generatePassword)