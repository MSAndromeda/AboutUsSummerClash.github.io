// local reviews data
const reviews = [{
        id: 1,
        name: "Manas Anand Singh",
        job: "web developer",
        img: "./20201201_114959-01.jpeg",
        text: "Hi, i am the developer of this website nice to see you here. We all would really appriciate if you participate in the event. piacere di conoscerti",
    },
    {
        id: 2,
        name: "Akshat Shukla",
        job: "resource Manager",
        img: "./WhatsApp Image 2021-06-28 at 00.12.02.jpeg",
        text: "Hi as a Resource manager; I make sure that our organization's resources have enough capacity to deliver upcoming projects.I also Assign people to projects based on their skills. Well good to see you here would appriciate if you participate in our Event.",
    },
    {
        id: 3,
        name: "Manas Singh Chauhan",
        job: "Poetry event host",
        img: "./मानस चौहान 3.png",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime magni nisi cupiditate!",
    },
    {
        id: 4,
        name: "Neha Sharma",
        job: "Invitation Designer",
        img: "./WhatsApp Image 2021-06-28 at 00.50.23.jpeg",
        text: "As a invitation designer i am helping the hosts to handle the event better as they can make arrangements accordingly.",
    },
    {
        id: 5,
        name: "Shikhar Bajpai",
        job: "participant's guide",
        img: "./WhatsApp Image 2021-06-28 at 12.32.21.jpeg",
        text: "It has been an honor to have you present in our event. Your participation ensured the success of our event. We hope to invite you again soon. Thank you. ",
    },
    {
        id: 6,
        name: "Vaishnavi Singh",
        job: "Dance event host",
        img: "./WhatsApp Image 2021-06-28 at 04.55.39.jpeg",
        text: "Hi, I am the event host of Dance Competition. Dance the movement of body in rhythmic way, usually to music and within a given space for the purpose of expressing an idea or emotion. Thankyou!",
    },
    {
        id: 7,
        name: "Pawan Singh",
        job: "Certificate Designer",
        img: "IMG-20210628-WA0065.jpg",
        text: "As a designer i play a key role in a creative Events. Using elements like typography, illustration, photography and layouts, as a designer i always have an extremely creative mind that can absorb visual trends and deploy them in fresh and exciting ways.",
    },
    {
        id: 8,
        name: "Zikra Rafat",
        job: "participant's guide",
        img: "./Screenshot_2021-06-29-12-56-40-87_965bbf4d18d205f782c6b8409c5773a4.jpg",
        text: "Hi very sweet of you to pay a visit to us; I will regularly keep you all updated with the stuffs going on in the competition",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let CurrentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    ShowPerson();
});

function ShowPerson() {
    const item = reviews[CurrentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function() {
    CurrentItem++;
    if (CurrentItem > reviews.length - 1)
        CurrentItem = 0;
    ShowPerson();
});

prevBtn.addEventListener("click", function() {
    CurrentItem--;
    if (CurrentItem < 0)
        CurrentItem = reviews.length - 1;
    ShowPerson();
});

randomBtn.addEventListener("click", function() {
    CurrentItem = Math.floor(Math.random() * reviews.length);
    ShowPerson();
});