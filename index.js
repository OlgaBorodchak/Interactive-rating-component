const btns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const getScore = document.querySelector(".score");
const submitCard = document.querySelector(".submit-card");
const thankYouCard = document.querySelector(".thank-you-card");


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        removeFocus();
    getScore.innerHTML = btn.innerHTML;
    btn.classList.add("active");
    })

    removeFocus = () => {
        btns.forEach(btn => {
        btn.classList.remove("active"); 
        })
    }    
})

submitBtn.addEventListener("click", () => {
    submitCard.classList.add("d-none");    
    thankYouCard.classList.remove("d-none");
})












