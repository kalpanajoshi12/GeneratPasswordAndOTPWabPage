const generatepassword = document.querySelector(".btn1")
const inputbox1 = document.querySelector("#input1")
const mypasswords = document.querySelector(".passwords")

const generateOTP = document.querySelector(".btn2")
const inputbox2 = document.querySelector("#input2")
const myotps = document.querySelector(".otps")


let charsetpassword = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_"

let password = ""

generatepassword .addEventListener("click", function(){
    let length = inputbox1.value

    for(let i = 0;i<length;i++){
        password = password+ charsetpassword[Math.floor(Math.random()* charsetpassword.length)]
    }

    const myh4 = document.createElement("h4")

    myh4.textContent = password
    mypasswords.append(myh4)

    password = ""
    inputbox1 = ""
})



let charsetotps= "0123456789"

let otp = ""

generateOTP.addEventListener("click", function(){
    let length = inputbox2.value

    for(let i = 0;i<length;i++){
        otp = otp+ charsetotps[Math.floor(Math.random() * charsetotps.length)]

    }

    const myh4 = document.createElement("h4")
    myh4.textContent = otp

    myotps.append(myh4)

    otp = ""
    inputbox2 = ""

})

