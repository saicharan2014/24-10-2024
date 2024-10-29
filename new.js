let mainDiv=document.createElement("div")
document.body.appendChild(mainDiv)
mainDiv.style.height="100vh"
mainDiv.style.width="100vw"
mainDiv.style.border="2px solid red"
mainDiv.style.display="flex"
mainDiv.style.justifyContent="center"
mainDiv.style.alignItems="center"
mainDiv.style.flexWrap="wrap"
mainDiv.style.gap="1rem"


for(let i=1;i<=8;i++){
    let nDiv=document.createElement("div")
    mainDiv.appendChild(nDiv)
    nDiv.style.height="300px"
    nDiv.style.width="300px"
    nDiv.style.border="2px solid red"

    let nimage=document.createElement("img")
    let para=document.createElement("p")
    let nspan=document.createElement("span")
    nDiv.appendChild(nimage)
    nimage.style.height="70%"
    nimage.style.width="100%"
    nimage.setAttribute("src","https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600")
    nDiv.appendChild(para)
    nspan.textContent="span"
    nDiv.appendChild(nspan)
    para.textContent="para"
}
