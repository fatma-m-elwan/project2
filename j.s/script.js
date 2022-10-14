var allProduct = document.querySelectorAll("ul li")
var content =document.querySelector("#addcontent")
var btn = document.querySelector("#btn")
var totalPrice =document.querySelector("#tatalprice")
var text =document.querySelector("#text")
var total = 0;


allProduct.forEach(function(item){
    item.onclick = function(){
        content.innerHTML += text.textContent;
        total += parseInt(item.getAttribute("price"))

        if (content.innerHTML != ""){
            btn.style.display="block";
        }
    }
})

btn.onclick=function(){
    totalPrice.innerHTML = total +"$" ;
    
    if(total >= 50){
        totalPrice.style.background = "red"
    }
    else{
        totalPrice.style.background = "#6E8A3C "
    }
}

