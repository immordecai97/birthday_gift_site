// gsap(selector, {props})
console.log(gsap);

const selectElement = (selector) => document.querySelector(selector);

const avatarContainer = selectElement(".avatar-container");
const title = selectElement(".title");
const bdayAge = selectElement("#bday-age");
const bdayDate = selectElement("#bday-date");

// const giftImgHappy = selectElement("#gift-img-happy");
// const giftImgHot = selectElement("#gift-img-hot");
// const giftImgGenius = selectElement("#gift-img-genius");
// const giftImgBadass = selectElement("#gift-img-badass");
// const giftImgCheers = selectElement("#gift-img-cheers");

gsap.from(avatarContainer, {
    color: "red",
    duration: 1,
    y: 100,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(title, {
    color: "red",
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(bdayAge, {
    color: "red",
    duration: 2.5,
    x: -100,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(bdayDate, {
    color: "red",
    duration: 3,
    x: -100,
    opacity: 0,
    ease: "power3.out"
});
