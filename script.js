const moods = {
    happy:{
        lighting:"Bright Sunshine",
        music:"Indie Pop",
        drink:"Iced Coffee",
        scent:"Citrus"
    },
    stressed:{
        lighting:"Warm Amber",
        music:"Lo-fi Rain",
        drink:"Chamomile Tea",
        scent:"Lavender"
    },
    sleepy:{       
        lighting:"Moonlight",
        music:"Soft Piano",
        drink:"Hot Chocolate",
        scent:"Vanilla"
    },
    creative:{
        lighting:"Purple LEDs",
        music:"Jazz",
        drink:"Matcha Latte",
        scent:"Peppermint"
    },
    productive:{
        lighting:"Cool White",
        music:"Focus Beats",
        drink:"Espresso",
        scent:"Eucalyptus"
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
    });
});