const windowImg = document.getElementById("window");
const lightingOverlay = document.getElementById("lightingOverlay");
const buttons = document.querySelectorAll(".mood-btn");
const drinkImg = document.getElementById("drinkImg");
const music = document.getElementById("music");
const drink = document.getElementById("drink");
const scent = document.getElementById("scent");
const lighting = document.getElementById("lighting");
const decor1 = document.getElementById("decor1");
const moods = {
    happy: {
        weather:"assets/weather/sunny.png",
        drink:"assets/drinks/coffee.png",
        drinkName: "Coffee",
        overlay: "rgba(255,220,120,0.08)",
        lighting: "Bright Sunshine",
        music:"Indie Pop",
        scent: "Citrus",
        decor1:"assets/decorations/happy/1.png"
    },
    stressed: {
        weather: "assets/weather/rain.png",
        drink: "assets/drinks/tea.png",
        drinkName: "Tea",
        overlay: "rgba(255,180,80,0.12)",
        lighting: "Warm Amber",
        music: "Lo-fi Rain",
        scent: "Lavender",
        decor1:"assets/decorations/stressed/flowers.png"
    },
    sleepy: {
        weather: "assets/weather/night.png",
        drink: "assets/drinks/hotchocolate.png",
        drinkName: "Hot Chocolate",
        overlay: "rgba(40,50,90,0.25)",
        lighting: "Soft Moonlight",
        music: "Soft Piano",
        scent: "Vanilla",
        decor1:"assets/decorations/sleepy/pillow.png"
    },
    creative: {
        weather: "assets/weather/sunset.png",
        drink: "assets/drinks/matcha.png",
        drinkName: "Matcha Latte",
        overlay: "rgba(180,140,255,0.18)",
        lighting: "Purple LED Glow",
        music: "Jazz & Chill",
        scent: "Peppermint",
        decor1:"assets/decorations/creative/art.png"
    },
    productive: {
        weather: "assets/weather/cloudy.png",
        drink: "assets/drinks/espresso.png",
        drinkName: "Espresso",
        overlay: "rgba(220,240,255,0.08)",
        lighting: "Cool White",
        music: "Focus Beats",
        scent: "Eucalyptus",
        decor1:"assets/decorations/productive/laptop.png"
    }
};
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const mood = moods[button.dataset.mood];
        if (!mood) return;
        windowImg.src = mood.weather;
        drinkImg.src = mood.drink;
        lightingOverlay.style.background = mood.overlay;
        lighting.textContent =mood.lighting;
        music.textContent =mood.music;
        drink.textContent =mood.drinkName;
        scent.textContent =mood.scent;
        decor1.src = mood.decor1;
    });
});