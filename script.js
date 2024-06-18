reviews = [
    {
        id: 1,
        name: "Patricia Arevalo",
        job: "Software Engineer",
        img: "./assets/img/pat.jpg",
        comment:
            "Hiring Jhest was the best decision I made for my business. He's such a great collaborator on a project that we've been working on!",
    },
    {
        id: 2,
        name: "Ron-Ron Echave",
        job: "IT Specialist",
        img: "./assets/img/ron.jpg",
        comment:
            "Working with Jhest was a breeze! He was responsive, professional, and delivered beyond my expectations.",
    },
    {
        id: 3,
        name: "Shaina Rose Dañas",
        job: "Network Engineer",
        img: "./assets/img/shai.jpg",
        comment:
            "I've hired many developers in the past, but Jhest stands out. His attention to detail and creativity brought my website to life.",
    },
    {
        id: 4,
        name: "Nicole Balingbing",
        job: "Network Engineer",
        img: "./assets/img/nics.jpg",
        comment:
            "Thanks to Jhest, my website now not only looks amazing but performs flawlessly. I highly recommend his services!",
    },
];

//select elements
const image = document.getElementById("img");
const fullName = document.getElementById("name");
const job = document.getElementById("job");
const comment = document.getElementById("comment");

const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const randomBtn = document.querySelector(".shuffleBtn");

//initial display
let currentUser = 0;


//function for displaying user
function displayUser() {
    let user = reviews[currentUser];
    image.src = user.img;
    fullName.textContent = user.name;
    job.textContent = user.job;
    comment.textContent = user.comment;
}

window.addEventListener("DOMContentLoaded", () => {
    displayUser();
});

//Next Function 
function next(){
    currentUser++;
    if (currentUser > reviews.length - 1) {
        currentUser = 0;
    }
    displayUser(currentUser);
};

//Prev Function
function prev(){
    currentUser--;
    if (currentUser < 0) {
        currentUser = reviews.length - 1;
    }
    displayUser(currentUser);
};

//Next Button
nextBtn.addEventListener("click", () => {
    next();
});

//Prev Button
prevBtn.addEventListener("click", () => {
    prev();
});

//

//Random Button
randomBtn.addEventListener("click", () => {
    currentUser = Math.floor(Math.random() * reviews.length);
    displayUser();
});

//Keyboard shortcut
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        next();
    } else if (event.key === "ArrowLeft") {
        prev();
    }
});