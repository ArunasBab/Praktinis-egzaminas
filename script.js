const burger = document.getElementById("burger")
const links = document.querySelector(".links")
const anchors = document.querySelectorAll(".links1")

burger.addEventListener("click", function(){
    links.classList.toggle("absolute")
})

for(var anchor of anchors){
    anchor.addEventListener("click", function(){
        for(var anchor of anchors){
            anchor.classList.remove("active")
        }
        this.classList.add("active")

        links.classList.remove("absolute")
    })
}