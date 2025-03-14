

const container = document.getElementById("p");
const careers = [
    "creativity sparks the imagination, and innovation brings those visions to life.",
    "we blend boundless creativity with cutting-edge innovation to craft exceptional experiences",
    "thinking new things meets doing new things, resulting in truly transformative creations.",
    "innovation is our driving force, turning bold ideas into tangible realities",
    "we don't just dream, we innovate – delivering groundbreaking solutions",
    "we specialize in doing new things, pushing boundaries and redefining possibilities.",
    "creativity knows no bounds, and every project begins with a fresh, imaginative perspective.",
    "thinking new things is our passion, and artistic expression is our cornerstone"
];
let careerIndex = 0;
let characterIndex = 0;

updateText();
function updateText() {
    characterIndex ++;
    container.textContent = `
    Welcome to Elysian Studio where ${careers[careerIndex].slice(0, characterIndex)}`;
    if(characterIndex === careers[careerIndex].length) {
        careerIndex ++;
        characterIndex = 0;
    } 
     if(careerIndex === careers.length) {
       careerIndex = 0;
     }
    setTimeout(updateText, 100);
}
