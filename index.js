const form = document.querySelector(".rating-container");
const btns = document.querySelectorAll(".rating-btn");
const getScore = document.querySelector(".score");
const submitCard = document.querySelector(".submit-card");
const thankYouCard = document.querySelector(".thank-you-card");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const rating = form.rating.value;
    removeFocus();
    getScore.textContent = rating;
    submitCard.classList.add("d-none");    
    thankYouCard.classList.remove("d-none");
})

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        removeFocus();
        btn.classList.add("active");
        })

    removeFocus = () => {
    btns.forEach(btn => {
        btn.classList.remove("active"); 
        })
    }    
})
