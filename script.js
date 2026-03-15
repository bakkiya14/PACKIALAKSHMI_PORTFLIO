// page fade animation

document.body.style.opacity=0

window.onload=function(){

document.body.style.transition="opacity 1s"

document.body.style.opacity=1

}


// contact form

document.getElementById("form")?.addEventListener("submit",function(e){

e.preventDefault()

alert("Message Sent Successfully!")

})