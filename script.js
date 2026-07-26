const windowImg = document.getElementById("window");
const lightingOverlay = document.getElementById("lightingOverlay");
const buttons = document.querySelectorAll(".mood-btn");
const drinkImg = document.getElementById("drinkImg");
const music = document.getElementById("music");
const drink = document.getElementById("drink");
const scent = document.getElementById("scent");
const lighting = document.getElementById("lighting");
const decor1 = document.getElementById("decor1");
const bgMusic = document.getElementById("bgMusic");
const songName = document.getElementById("songName");
const toggleMusic = document.getElementById("toggleMusic");
const checklist = document.getElementById("checklist");
const historyList = document.getElementById("historyList");
const moods = {
    happy: {
        weather:"assets/weather/sunny.png",
        drink:"assets/drinks/coffee.png",
        drinkName: "Coffee",
        overlay: "rgba(255,220,120,0.08)",
        lighting: "Bright Sunshine",
        music:"Indie Pop",
        scent: "Citrus",
        decor1:"assets/decorations/happy/1.png",
        song:"Morning Sunshine",
        musicFile:"assets/music/happy.mp3",
        checklist:[
    "Smile at someone",
    "Drink water ",
    "Go for a short walk ",
    "Listen to your favorite song "
],
    },
    stressed: {
        weather: "assets/weather/rain.png",
        drink: "assets/drinks/tea.png",
        drinkName: "Tea",
        overlay: "rgba(255,180,80,0.12)",
        lighting: "Warm Amber",
        music: "Lo-fi Rain",
        scent: "Lavender",
        decor1:"assets/decorations/stressed/flowers.png",
        song:"Lo-fi Rain",
        musicFile:"assets/music/stressed.mp3",
        checklist:[
    "Take 5 deep breaths",
    "Drink some tea",
    "Stretch for 5 minutes",
    "Step away from your screen"
],
    },
    sleepy: {
        weather: "assets/weather/night.png",
        drink: "assets/drinks/hotchocolate.png",
        drinkName: "Hot Chocolate",
        overlay: "rgba(40,50,90,0.25)",
        lighting: "Soft Moonlight",
        music: "Soft Piano",
        scent: "Vanilla",
        decor1:"assets/decorations/sleepy/pillow.png",
        song:"Night Piano",
        musicFile:"assets/music/sleepy.mp3",
        checklist:[
    "Make some hot chocolate",
    "Dim the lights",
    "Read a few pages",
    "Sleep before midnight"
],
    },
    creative: {
        weather: "assets/weather/sunset.png",
        drink: "assets/drinks/matcha.png",
        drinkName: "Matcha Latte",
        overlay: "rgba(180,140,255,0.18)",
        lighting: "Purple LED Glow",
        music: "Jazz & Chill",
        scent: "Peppermint",
        decor1:"assets/decorations/creative/art.png",
        song:"Dreamy Jazz",
        musicFile:"assets/music/creative.mp3",
        checklist:[
    "Sketch an idea",
    "Listen to inspiring music",
    "Write down new ideas",
    "Organize your workspace"
],
    },
    productive: {
        weather: "assets/weather/cloudy.png",
        drink: "assets/drinks/espresso.png",
        drinkName: "Espresso",
        overlay: "rgba(220,240,255,0.08)",
        lighting: "Cool White",
        music: "Focus Beats",
        scent: "Eucalyptus",
        decor1:"assets/decorations/productive/laptop.png",
        song:"Deep Focus",
        musicFile:"assets/music/productive.mp3",
        checklist:[
    "Plan today's tasks",
    "Study for 25 minutes",
    "Take a 5-minute break",
    "Celebrate one small win"
],
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
        bgMusic.src = mood.musicFile;
        songName.textContent = mood.song;
        bgMusic.play();
        toggleMusic.textContent = "⏸ Pause";
        saveMoodHistory(moodName);
        checklist.innerHTML = "";
        mood.checklist.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `
            <input type="checkbox">
            <span>${task}</span>
            `;
            checklist.appendChild(li);
});
    });
});
toggleMusic.addEventListener("click",()=>{
    if(bgMusic.paused){
        bgMusic.play();
        toggleMusic.textContent="⏸ Pause";
    }else{
        bgMusic.pause();
        toggleMusic.textContent="▶ Play";
    }
});
function saveMoodHistory(moodName){
    const history =
        JSON.parse(localStorage.getItem("moodHistory")) || [];
    history.unshift({
        mood:moodName,
        date:new Date().toLocaleDateString(),
        time:new Date().toLocaleTimeString([],{
            hour:"2-digit",
            minute:"2-digit"
        })
    });
    if(history.length > 10){
        history.pop();
    }
    localStorage.setItem(
        "moodHistory",
        JSON.stringify(history)
    );
    loadMoodHistory();
}
function loadMoodHistory(){
    const history =
        JSON.parse(localStorage.getItem("moodHistory")) || [];
    historyList.innerHTML = "";
    if(history.length === 0){
        historyList.innerHTML =
            "<p>No moods recorded yet.</p>";
        return;
    }
    history.forEach(item=>{
        historyList.innerHTML += `
        <div class="history-item">
            <h4>${item.mood}</h4>
            <small>${item.date}</small><br>
            <small>${item.time}</small>
        </div>
        `;
    });
}
loadMoodHistory();