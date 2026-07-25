const windowImg = document.getElementById("window");
const lightingOverlay = document.getElementById("lightingOverlay");
const moods={
happy:{
window:"assets/room/sunny.png",
drink:"assets/drinks/coffee.png",
overlay:"rgba(255,220,120,.08)",
lighting:"Bright Sunshine",
music:"Indie Pop",
scent:"Citrus"
},
stressed:{
window:"assets/room/rain.png",
drink:"assets/drinks/tea.png",
overlay:"rgba(255,180,80,.12)",
lighting:"Warm Amber",
music:"Lo-fi Rain",
scent:"Lavender"
}
};
const buttons = document.querySelectorAll(".mood-btn");
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        const mood = moods[button.dataset.mood];
        document.getElementById("lighting").innerHTML =
        mood.lighting;
        document.getElementById("music").innerHTML =
        mood.music;
        document.getElementById("drink").innerHTML =
        mood.drink;
        document.getElementById("scent").innerHTML =
        mood.scent;
        windowImg.src = mood.window;
        drinkImg.src=mood.drink;
        lightingOverlay.style.background=mood.overlay;
    });
});