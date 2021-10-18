// CARD BUTTON ANIMATION

const buttons = document.querySelectorAll(".cardBtn");
buttons.forEach((btn) => {
    const cardBack = btn.previousElementSibling;
    const cardFront = cardBack.previousElementSibling;
    btn.addEventListener("click", () => {
        if (btn.classList.contains("cardBtn-active")) {
            btn.classList.remove("cardBtn-active")
            btn.style.transform = "rotate(0deg)"
            cardBack.classList.remove("show")
            cardBack.classList.add("hide")
            cardFront.classList.remove("hide")
            cardFront.classList.add("show")
        } else {
            btn.classList.add("cardBtn-active")
            btn.style.transform = "rotate(45deg)"
            cardBack.classList.add("show")
            cardBack.classList.remove("hide")
            cardFront.classList.add("hide")
            cardFront.classList.remove("show")
        }
    })
    let clicked = false;
    btn.addEventListener("mouseover", () => {
        btn.addEventListener("touchstart", () => {
            clicked = true;
            btn.style.animation = ""
        }, {once: true})
        if (cardFront.classList.contains("show")){
            btn.style.animation = "blueShift 0.5s forwards"
        } else {
            btn.style.animation = "redShift 0.5s forwards"
        }
        
    })
    btn.addEventListener("mouseleave", () => {
        if (clicked) {
            clicked = false;
        } else {
            if (cardFront.classList.contains("show")){
                btn.style.animation = "redShift 0.5s forwards"
            } else {
                btn.style.animation = "blueShift 0.5s forwards"
            }
        }
        
    })
})

// CONTACT VALIDATION

const submit = document.querySelector('button[type="submit"]');
const form = document.querySelector("#contactForm") ? 
    document.querySelector("#contactForm").elements :
    null;
const inputs = document.querySelectorAll("input");
const textarea = document.querySelector("textarea")

if (textarea) {
    textarea.addEventListener("input", () => {
        const message = textarea.nextElementSibling;
        message.classList.remove("show")
        textarea.classList.remove("invalid")
    })
}
if (submit) {
    submit.addEventListener("click", (e) => {
        const fields = [
            form["name"], 
            form["email"],
            form["company"],
            form["title"],
            form["message"]
        ]
        fields.forEach((field) => {
            if (!field.value) {
                e.preventDefault();
                const message = field.nextElementSibling;
                message.classList.add("show")
                field.classList.add("invalid")
                console.log("here", field.nextElementSibling)
            }
        })
        
    })
}

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        const message = input.nextElementSibling;
        message.classList.remove("show")
        input.classList.remove("invalid")
    })
})

// MOBILE MENU

const hamburger = document.querySelector(".hamburger");
const toggle = document.getElementById("mobileMenuToggle");
const exit = document.querySelector(".exit");
const menu = document.querySelector(".mobileMenu");
const shade = document.querySelector(".shade");

hamburger.addEventListener("click", (e) => {
    toggle.classList.remove("hide")
    shade.style.animation = "fadeIn 1s forwards";
    menu.style.animation = "slideIn 1s forwards";
})
exit.addEventListener("click", () => {
    shade.style.animation = "fadeOut 1s forwards";
    menu.style.animation = "slideOut 1s forwards"
    shade.addEventListener("animationend", () => {
        toggle.classList.add("hide")
    }, {once : true})
    
})


