//create the stars for the background
function createStar() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.width = "4px";
        star.style.height = "4px";

        //random position
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";

        //random animation
        const duration = .5 + Math.random() * 5;
        const delay = Math.random() * 3;
        star.style.animationDuration = `${duration}s`;
        star.style.animationDelay = `-${delay}s`;

        container.appendChild(star);
    }
}
//call function
createStar();
