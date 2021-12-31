const form = document.querySelector("#newuser") 
console.log(form)

document.addEventListener("submit", (e)=> {
    e.preventDefault();
    let userObj = {
        email: form[0].value.trim(),
        name: form[1].value.trim(),
        password: form[2].value.trim()
    }
    console.log(userObj)
})