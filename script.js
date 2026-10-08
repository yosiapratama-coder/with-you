/* =========================================
   DATA
========================================= */


/*
    GANTI NAMA PACAR DI SINI
*/

const girlName = "Tio Gokmaria Br. Sagala";


/*
    GANTI TANGGAL JADIAN

    Format:

    Tahun, Bulan, Hari, Jam, Menit

    Contoh:
    2026, , 24, 0, 0

    berarti:
    1 Januari 2026
*/

const relationshipStart =
    new Date(2026, 5, 24, 0, 0);


/*
    ISI SURAT DI SINI
*/

const letterText = `Hai sayang...

Aku sebenarnya bingung harus mulai dari mana.

Karena kalau aku harus menuliskan semua hal yang aku rasakan tentang kamu, mungkin satu website ini pun masih belum cukup.

Aku cuma ingin kamu tahu bahwa aku benar-benar bersyukur karena pernah dipertemukan dengan kamu.

Di antara begitu banyak orang yang ada di dunia ini, entah kenapa hati aku memilih kamu.

Aku suka cara kamu tersenyum.

Aku suka cara kamu bercerita.

Aku suka ketika kamu perhatian.

Aku suka ketika kamu manja.

Aku bahkan suka hal-hal kecil tentang kamu yang mungkin menurutmu tidak penting.

Aku tahu hubungan kita tidak akan selalu sempurna.

Akan ada hari ketika kita berbeda pendapat.

Akan ada saat ketika kita salah paham.

Akan ada waktu ketika kita sama-sama capek.

Tapi kalau hari seperti itu datang, aku ingin kita mengingat satu hal.

Kita pernah memilih satu sama lain.

Jadi daripada menyerah, aku ingin kita belajar.

Belajar memahami.

Belajar memaafkan.

Belajar menjadi lebih baik.

Dan yang paling penting...

Belajar untuk tetap memilih satu sama lain.

Kalau suatu hari kamu merasa dunia terlalu berat, semoga kamu ingat bahwa ada seseorang yang ingin melihat kamu baik-baik saja.

Ada seseorang yang ingin mendengar cerita kamu.

Ada seseorang yang ingin melihat senyum kamu.

Dan orang itu adalah aku.

Terima kasih sudah hadir dalam hidupku.

Terima kasih sudah menjadi bagian dari cerita hidupku.

Aku mungkin tidak selalu bisa menjadi seseorang yang sempurna untuk kamu.

Tapi aku akan selalu berusaha menjadi seseorang yang tulus menyayangi kamu.

Aku sayang kamu.

Hari ini.

Besok.

Dan selama Tuhan masih memberikan kita kesempatan untuk berjalan bersama.

`;


/* =========================================
   INITIALIZE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("girlName")
        .textContent = girlName;

    document.getElementById("startDate")
        .textContent =
        formatDate(relationshipStart);

    createBackgroundHearts();

    updateCounter();

    setInterval(updateCounter, 1000);

});



/* =========================================
   OPEN LETTER
========================================= */

function openLetter() {

    const opening =
        document.getElementById("opening");

    const website =
        document.getElementById("website");


    const flap =
        document.querySelector(".envelope-flap");


    const preview =
        document.querySelector(".letter-preview");


    flap.style.transform =
        "rotateX(180deg)";


    preview.style.transform =
        "translateY(-90px)";


    setTimeout(() => {

        opening.style.opacity = "0";

    }, 700);


    setTimeout(() => {

        opening.style.display = "none";

        website.style.display = "block";

        document.body.style.overflowY = "auto";

        typeLetter();

        startFloatingHearts();

        tryPlayMusic();

        window.scrollTo(0,0);

    }, 1500);

}



/* =========================================
   TYPEWRITER
========================================= */

function typeLetter() {

    const element =
        document.getElementById("typedLetter");

    let index = 0;

    element.textContent = "";


    function type() {

        if (index < letterText.length) {

            element.textContent +=
                letterText.charAt(index);

            index++;

            setTimeout(type, 18);

        }

    }


    type();

}



/* =========================================
   DATE
========================================= */

function formatDate(date) {

    return date.toLocaleDateString(
        "id-ID",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

}



/* =========================================
   COUNTER
========================================= */

function updateCounter() {

    const now =
        new Date();

    const difference =
        now - relationshipStart;


    if (difference < 0) return;


    const seconds =
        Math.floor(difference / 1000);


    const minutes =
        Math.floor(seconds / 60);


    const hours =
        Math.floor(minutes / 60);


    const days =
        Math.floor(hours / 24);


    document.getElementById("days")
        .textContent = days;


    document.getElementById("hours")
        .textContent =
        hours % 24;


    document.getElementById("minutes")
        .textContent =
        minutes % 60;


    document.getElementById("seconds")
        .textContent =
        seconds % 60;

}



/* =========================================
   BACKGROUND HEARTS
========================================= */

function createBackgroundHearts() {

    setInterval(() => {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";


        heart.textContent =
            randomHeart();


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (Math.random() * 18 + 12)
            + "px";


        heart.style.animationDuration =
            (Math.random() * 5 + 5)
            + "s";


        document.getElementById("hearts")
            .appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 10000);

    }, 700);

}



function startFloatingHearts() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            createSingleHeart();

        }, i * 100);

    }

}



function createSingleHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    heart.textContent =
        randomHeart();


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (Math.random() * 30 + 15)
        + "px";


    heart.style.animationDuration =
        (Math.random() * 3 + 3)
        + "s";


    document.getElementById("hearts")
        .appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 7000);

}



function randomHeart() {

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💞"
    ];

    return hearts[
        Math.floor(
            Math.random() * hearts.length
        )
    ];

}



/* =========================================
   ANSWER
========================================= */

function yesAnswer() {

    const answer =
        document.getElementById("answer");


    answer.innerHTML =
        `🥺❤️ Aku janji akan menjaga cerita kita.`;


    celebration();

}



function loveAnswer() {

    const answer =
        document.getElementById("answer");


    answer.innerHTML =
        `Aku juga sayang kamu, lebih dari yang bisa aku tuliskan di sini. ❤️`;


    celebration();

}



/* =========================================
   CELEBRATION
========================================= */

function celebration() {

    for (let i = 0; i < 60; i++) {

        setTimeout(() => {

            createSingleHeart();

        }, i * 50);

    }

}



/* =========================================
   MUSIC
========================================= */

function tryPlayMusic() {

    const music =
        document.getElementById("music");


    if (!music) return;


    music.volume = .35;


    music.play()
        .catch(() => {

            console.log(
                "Browser membutuhkan interaksi user untuk memutar musik."
            );

        });

}