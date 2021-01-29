//this part is for dom manipulation

const container = document.getElementById("form-container");
const slider = document.getElementById("slider");
const logInSlider = document.getElementById("log-in");
const signUpSlider = document.getElementById("sign-up");
const logInForm = document.getElementById("log-in-form")
const SignUpForm = document.getElementById("sign-up-form")
const errors = document.getElementById("errors")
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const username = document.getElementsByClassName('username')
const passwords = document.getElementsByClassName('password')
const button = document.getElementById('button')
const number = document.getElementById('number')
const cont = document.getElementById('container')
const dialingCode = document.getElementById("dialing-code")
let count = 0

signUpSlider.addEventListener("click", () => {
    container.style.height = "24.5rem";
    slider.style.transform = "translateX(-26rem)"
    errors.textContent = ''
})

logInSlider.addEventListener("click", () => {
    container.style.height = "10rem";
    slider.style.transform = "translateX(0)"
    errors.textContent = ''
})




    //this is for the fullname
    firstname.addEventListener('focus',() => {
        if(firstname.value == '') errors.textContent = " first name can't be empty"
        firstname.addEventListener('keyup', () => {
            if(firstname.value == '') errors.textContent = " first name can't be empty"
            else if(/\d/gi.test(firstname.value)) errors.textContent = 'cannot contain numbers'
            else if(!/^[ a-z ]*$/gi.test(firstname.value)) errors.textContent = 'only use alphabetic characters'
            else errors.textContent = ''
        })
    })


    lastname.addEventListener('focus',() => {
        if(lastname.value == '') errors.textContent = "last name can't be empty"
        lastname.addEventListener('keyup', () => {
            if(lastname.value == '') errors.textContent = "last name can't be empty"
            else if(/\d/gi.test(lastname.value)) errors.textContent = 'cannot contain numbers'
            else if(!/^[ a-z ]*$/gi.test(lastname.value)) errors.textContent = 'only use alphabetic characters'
            else errors.textContent = ''
        })
    })
    
        
    //this is for the email
    email.addEventListener('focus', () => {
        if(email.value.length === 0) errors.textContent = "email can't be empty"
        email.addEventListener('keyup', () => {
            if(email.value.length === 0) errors.textContent = "email can't be empty"
            else if(/ +/g.test(email.value)) errors.textContent = "don't use spaces"
            else if(!/\./g.test(email.value)) errors.textContent = 'email must have .'
            else if(!/@/g.test(email.value)) errors.textContent = 'email must have @'
            else if(/[@]{2,}/g.test(email.value)) errors.textContent = 'too many @\'s'
            else if(/[.]{2,}/g.test(email.value)) errors.textContent = 'too many .\'s'
            else if(/[A-Z]/g.test(email.value)) errors.textContent = "don't use uppercase letters"
            else errors.textContent = ""
        })
    })
   
    if(container.style.height == "10rem"){
        Array.from(passwords).forEach((password) => {
            password.addEventListener('focus', () => {
            if(password.value.length === 0) errors.textContent = "password can't be empty"
            password.addEventListener('keyup', () => {
                if(password.value.length === 0) errors.textContent = "password can't be empty"
                else if(/[ ]+/gi.test(password.value)) errors.textContent = "don't use spaces"
                else if(!/\d/g.test(password.value)) errors.textContent = "too weak! add a number"
                else if(!/[A-Z]/g.test(password.value)) errors.textContent = "too weak! add uppercase letters"
                else if(/^[a-z0-9]*$/gi.test(password.value)) errors.textContent = "too weak! add alphanumericals"
                else errors.textContent = ""
            })
        })
        })
    }


    number.addEventListener('focus', () => {
        if(number.value.length === 0) errors.textContent = "I can't be empty"
        number.addEventListener('keyup', () => {
            if(number.value.length === 0) errors.textContent = "I can't be empty"
            else if(!/\d*/g.test(number.value)) errors.textContent = "only use numbers"
            else if(number.value.length < 7) errors.textContent = "too short"
            else if(number.value.length > 15) errors.textContent = "too long"
            else errors.textContent = ""
        })
    })

//remember to add username to check in database if the username is already being used


const test = document.getElementById("test");
let red = 255
let green = 0
let blue = 0
let time = 10

   
        setInterval(() => { 
            green++
            document.body.style.background = `linear-gradient(90deg, rgba(${red},${green},${blue},1) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 83%, rgba(${red},${green},${blue},1) 100%)`
            if(red == 255 && blue == 0 && green == 0){
                console.log(green)
                }
        },time)
    
    
        if(green == 255 && red == 255 && blue == 0) {
            setInterval(() => { 
                document.body.style.background = `linear-gradient(90deg, rgba(${red},${green},${blue},1) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 83%, rgba(${red},${green},${blue},1) 100%)`
                red--
            },time)
            green = 255
        }
     
    
    
      
        // setInterval(() => { 
        //     document.body.style.background = `linear-gradient(90deg, rgba(${red},${green},${blue},1) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 83%, rgba(${red},${green},${blue},1) 100%)`
        //     blue++
        //     if(red == 0 && blue == 0 && green == 255){
        //         red = 0;
           
        //     console.log(blue)}
        // },time)
    
  
        
        // setInterval(() => { 
        //     document.body.style.background = `linear-gradient(90deg, rgba(${red},${green},${blue},1) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 83%, rgba(${red},${green},${blue},1) 100%)`
        //     green--
        //     if(blue == 255 && green == 255 && red == 0){
        //         blue = 255
           
        //      console.log(green)}
        //     },time)
       
            
     
        // setInterval(() => {
        //     document.body.style.background = `linear-gradient(90deg, rgba(${red},${green},${blue},1) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 83%, rgba(${red},${green},${blue},1) 100%)`  
        //     red++
        //     console
        //     if(green == 0 && red == 0 && blue == 255){
        //         green = 0
        //     .log(red)}
        // },time)
        
    
   
     
        // setInterval(() => {
        //     document.body.style.background = `linear-gradient(90deg, rgba(${red},${green},${blue},1) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 83%, rgba(${red},${green},${blue},1) 100%)`
        //      blue--
        //     if(red == 255 && blue == 255 && green == 0){
        //         red = 255
            
        //      console.log(blue)}
        //     }, time)
        
    





