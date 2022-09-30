let sidebar=document.querySelector("#sidebar")
  let user=JSON.parse(localStorage.getItem("user"))||[]
 

  let pic=document.createElement("img")
  pic.src=user.image
  pic.setAttribute("id","user_img")
  let names=document.createElement("p")
  names.innerText=user.name
  pic.setAttribute("id","user_name")
  let emails=document.createElement("p")
  emails.innerText=user.email
  emails.setAttribute("id","user_email")
  let desh=document.createElement("p")
  desh.innerText=user.country
  desh.setAttribute("id","user_country")
sidebar.append(pic,names,emails,desh)



let newsbar=document.querySelector("#news_result")




async function api(a){
  newsbar.innerHTML=null
  let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${a}`

  let res=await fetch(url)
  let data=await res.json()

  appending(data.articles)
}
api(user.country)



function appending(data){
  console.log(data)
  data.forEach(function(ele,ind){
let div=document.createElement("div")
div.setAttribute("class","news")
let img=document.createElement("img")
img.src=data[ind].urlToImage
let author=document.createElement("p")
author.innerText=data[ind].author
let title=document.createElement("h3")
title.innerText=data[ind].title

div.append(img,author,title)
newsbar.append(div)
  })


}
function myfunc(a){
  api(a)


}

document.querySelector("#search_box").addEventListener("keypress",vipin)
function vipin(){
    let value=search_box.value
    console.log(value)
}

{/* <input id="search_box" type="text" placeholder="search news"/> */}


