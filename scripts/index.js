
document.querySelector("#form").addEventListener("submit",myfunc)


function myfunc(){
  event.preventDefault()
  let name=user_name.value
  let image=user_pic.value
  let email=user_email.value
  let country=user_country.value
  console.log(name,email,image,country)


  let obj={
    name,
    image,
    email,
    country
  }
  localStorage.setItem("user",JSON.stringify(obj))
  window.location.reload()
}
