document.addEventListener("DOMContentLoaded", function () {

    const tamilBtn = document.getElementById("tamilBtn");
    const englishBtn = document.getElementById("englishBtn");

    function setLanguage(language) {

        if (language === "english") {

            document.querySelectorAll(".tamil").forEach(function (element) {
                element.style.display = "none";
            });

            document.querySelectorAll(".english").forEach(function (element) {
                element.style.display = "";
            });

            if (tamilBtn) {
                tamilBtn.classList.remove("active");
            }

            if (englishBtn) {
                englishBtn.classList.add("active");
            }

            localStorage.setItem("dailyHappensLanguage", "english");

        } else {

            document.querySelectorAll(".tamil").forEach(function (element) {
                element.style.display = "";
            });

            document.querySelectorAll(".english").forEach(function (element) {
                element.style.display = "none";
            });

            if (englishBtn) {
                englishBtn.classList.remove("active");
            }

            if (tamilBtn) {
                tamilBtn.classList.add("active");
            }

            localStorage.setItem("dailyHappensLanguage", "tamil");
        }
    }


    if (tamilBtn) {
        tamilBtn.addEventListener("click", function () {
            setLanguage("tamil");
        });
    }


    if (englishBtn) {
        englishBtn.addEventListener("click", function () {
            setLanguage("english");
        });
    }


    // Remember the selected language
    const savedLanguage =
        localStorage.getItem("dailyHappensLanguage") || "tamil";

    setLanguage(savedLanguage);

});