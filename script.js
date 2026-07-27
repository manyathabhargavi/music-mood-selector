// ===============================
// Select Elements
// ===============================

const buttons = document.querySelectorAll(".mood-btn");
const resultCard = document.getElementById("result-card");

const moodText = document.getElementById("mood");
const genreText = document.getElementById("genre");
const messageText = document.getElementById("message");
const emojiText = document.getElementById("emoji");
const playlistLink = document.getElementById("playlist-link");

// ===============================
// Mood Data
// ===============================

const moodData = {

    study: {
        mood: "Study",
        genre: "Lo-fi Beats",
        message: "Stay focused. Every minute counts.",
        emoji: "📚",
        color: "#d6ecff",
        playlist: "https://open.spotify.com/playlist/37i9dQZF1DX8NTLI2TtZa6"
    },

    relax: {
        mood: "Relax",
        genre: "Acoustic / Nature Sounds",
        message: "Take a deep breath and enjoy the moment.",
        emoji: "😌",
        color: "#d8f5d2",
        playlist: "https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ"
    },

    workout: {
        mood: "Workout",
        genre: "EDM / Hip-Hop",
        message: "Push your limits. Energy starts now!",
        emoji: "💪",
        color: "#ffe5c2",
        playlist: "https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP"
    },

    happy: {
        mood: "Happy",
        genre: "Pop Music",
        message: "Smile! Good vibes only.",
        emoji: "😊",
        color: "#fff7b2",
        playlist: "https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC"
    }

};

// ===============================
// Function
// ===============================

function changeMood(selectedMood){

    const data = moodData[selectedMood];

    moodText.textContent = data.mood;
    genreText.textContent = data.genre;
    messageText.textContent = data.message;
    emojiText.textContent = data.emoji;

    playlistLink.href = data.playlist;
    playlistLink.textContent = "🎵 Open " + data.mood + " Playlist";

    document.body.style.backgroundColor = data.color;

    resultCard.classList.remove("hidden");

}

// ===============================
// Event Listeners
// ===============================

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        const mood = button.dataset.mood;

        changeMood(mood);

    });

});