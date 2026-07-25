const moods={
happy:{
wallpaper:"assets/room/wallpaper-pink.png",
window:"assets/weather/sunny.png",
drink:"assets/drinks/coffee.png",
overlay:"rgba(255,220,120,.08)",
lighting:"Bright Sunshine",
music:"Indie Pop",
scent:"Citrus"
},
stressed:{
wallpaper:"assets/room/wallpaper-beige.png",
window:"assets/weather/rain.png",
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
        wallpaper.src=mood.wallpaper;
        window.src=mood.window;
        drinkImg.src=mood.drink;
        lightingOverlay.style.background=mood.overlay;
        document.getElementById("lighting").innerHTML =
        mood.lighting;
        document.getElementById("music").innerHTML =
        mood.music;
        document.getElementById("drink").innerHTML =
        mood.drink;
        document.getElementById("scent").innerHTML =
        mood.scent;
    });
});