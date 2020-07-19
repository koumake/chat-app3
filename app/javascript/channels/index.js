window.addEventListener('load', function(){
    const pullDownButton = document.getElementById("lists")
    const pullDownparents = document.getElementById("pull-down")
    const pullDownchild = document.addEventListener;queryselectorAll(".pull-down-list")

    pullDownButton.addEventListener('mouseover', function(){
        pullDownButton.setAttribute("style", "background-color:#FFBEDA;");

    })
    pullDownButton.addEventListener('mouseout', function(){
        pullDownButton.removeAttribute("style", "background-color:#FFBEDA;");

    })
    pullDownButton.addEventListener('click', function(){
        if (pullDownparents.getAttribute("style") == "display:block;") {
            pullDownparents.removeAttribute("style", "display:block;");
        } else {
            pulllDownparents.setAttribute("style", "display:block;");
        }
        
    })
})


