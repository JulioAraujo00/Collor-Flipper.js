        //colors array
        var color = ["#021859","#032CA6","#0433BF","#F25CA2","#027368","#025959",
                    "#024873","#587AA6","#8E9EBF"]

        var i = 0
        //get button
        var button = document.getElementById("button")

        button.addEventListener("click", function() {
            var changeColor = color[Math.round(Math.random() * color.length)]
            //get body as a container
            var body = document.querySelector("body")
            //apply the randomization of the colors
            body.style.background = changeColor
        })
   