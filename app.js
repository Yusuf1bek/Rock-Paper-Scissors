const gameContainer = document.querySelector(".container")
const userResult = document.querySelector(".user_result img")
const pcResult = document.querySelector(".pc_result img")
const result = document.querySelector(".result")
const optionImages = document.querySelectorAll(".option_image")

// Loop Images
optionImages.forEach((image,index)=> {
    // add active for images
    image.addEventListener("click", (e) =>{
        image.classList.add("active")
        userResult.src = pcResult.src = "images/rock.png"
        result.textContent = "Wait..."
        // remove images active
        optionImages.forEach((image2, index2) =>{
            index !== index2 && image2.classList.remove("active")
        })
        gameContainer.classList.add("start")
        let time = setTimeout(() =>{
            gameContainer.classList.remove("start")
        // change user images
        let imageSrc = e.target.querySelector("img").src
        userResult.src = imageSrc
        // random number for pc
        let randomNumber = Math.floor(Math.random() * 3)
        // change pc images
        let pcImages = ["images/rock.png", "images/paper.png", "images/scissors.png"]
        pcResult.src = pcImages[randomNumber]
        // choose option for pc
        let pcValue = ["R", "P", "S"] [randomNumber]
        // choose option for user
        let userValue = ["R", "P", "S"] [index]

        let outcomes = {
            RR: "Draw",
            RP: "PC",
            RS: "User",
            PP: "Draw",
            PR: "User",
            PS: "PC",
            SS: "Draw",
            SR: "PC",
            SP: "User"
        }
        // Display result
        let outComeValue = outcomes[userValue + pcValue]
        result.textContent = userValue === pcValue ? "Macth draw" : `${outComeValue} Won!`
        }, 2500)
    })
})
