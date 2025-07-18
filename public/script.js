let message = document.querySelector(".mssge");
let button = document.querySelectorAll("button")[1];
let section1 = document.querySelector(".section1");
let form = document.querySelector("form")
let input = document.querySelector("form input");
let formdiv = document.querySelector(".formdiv")
let heading = document.querySelector(".heading");
let app = document.querySelector(".app");
let user="";
console.log(button)
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    user = input.value;
    input.value="";
    app.classList.remove("hidden");
    heading.classList.remove("hidden");
    formdiv.classList.add("hidden");
})
let socket = io();
// console.log(button)
button.addEventListener("click",()=>{
    let messageSend = message.value.trim();
    if(messageSend.length === 0){
        alert("please enter some text")
        return;
    }
    socket.emit('sendMssge',{
        msg : messageSend,
        sender:user
    })                                
    //Meassge is now sended
    message.value = '';
})
socket.on("reveivedMssge",(data)=>{
    console.log("client : " ,data.msg)
    section1.innerHTML += `<li>${data.sender} :  ${data.msg}</li>`;
})