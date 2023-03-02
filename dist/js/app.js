console.log("Working");
const digraphs = ["ts", "tsy", "dz", "kp", "gb", "ny"];
const nasalVowels = ["aa", "ee", "ɛɛ", "ii", "ɔɔ", "oo", "ũ"];
const vowels = ["Aa", "Ee", "Ɛɛ", "Ii", "Oo", "Ɔɔ", "Uu"];
const consonants = [
    "a",
    "b",
    "d",
    "ɖ",
    "e",
    "ɛ",
    "f",
    "ɸ",
    "g",
    "ɣ",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "ɔ",
    "p",
    "r",
    "s",
    "t",
    "u",
    "v",
    "β",
    "w",
    "y",
    "z",
];

//functions for displaying various sounds

//digraphs
digraphs.forEach((digraph) => {
    const btn = document.querySelector(`.${digraph}`);
    btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(digraph).play();
    });
});

//Vowels
vowels.forEach((vowel) => {
    const btn = document.querySelector(`.${vowel}`);
    btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(vowel).play();
    });
});

//nasalVowels
nasalVowels.forEach((nasalVowel) => {
    const btn = document.querySelector(`.${nasalVowel}`);
    btn.addEventListener("click", () => {
        // stopSongs();
        // document.getElementById(nasalVowel).play();
    });
});

// Consonants
consonants.forEach((consonant) => {
    const btn = document.querySelector(`.${consonant}`);

    btn.addEventListener("click", () => {
        stopSongs();
        document.getElementById(consonant).play();
    });
});

// === Functions to stop sounds ===

//Stop all sounds
const stopSongs = () => {
    stopDigraphSongs();
    //    stopNasalVowelSongs();
    stopVowelSongs();
    stopConsonantSongs();
};

//stop playing current digraphs sound
const stopDigraphSongs = () => {
    digraphs.forEach((digraph) => {
        const song = document.getElementById(digraph);

        song.pause();
        song.currentTime = 0;
    });
};

//stop playing current vowel sound
const stopVowelSongs = () => {
    vowels.forEach((vowel) => {
        const song = document.getElementById(vowel);

        song.pause();
        song.currentTime = 0;
    });
};

//stop playing current nasalVowel sound
//const stopNasalVowelSongs = () => {
//    nasalVowels.forEach((nasalVowel) => {
//        const song = document.getElementById(nasalVowel);
//
//        song.pause();
//        song.currentTime = 0;
//    });
//};

//stop playing current consonant sound
const stopConsonantSongs = () => {
    consonants.forEach((consonant) => {
        const song = document.getElementById(consonant);
        song.pause();
        song.currentTime = 0;
    });
};
