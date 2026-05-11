(function () {
    var root = document.documentElement;
    var btn = document.querySelector(".themeToggle");
    var logo = document.getElementById("disneyLogo");
    var discord = document.querySelector(".footerDiscordLogo img");

    function applyUI() {
        if (btn) btn.textContent = (root.getAttribute("data-theme") === "light") ? "Dark" : "Light";
        if (logo) logo.src = (root.getAttribute("data-theme") === "light")
            ? "/assets/img/logo-disney-black.png"
            : "/assets/img/logo-disney-grey.png";
        if (discord) discord.src = (root.getAttribute("data-theme") === "light")
            ? "/assets/img/Discord-dark.png"
            : "/assets/img/Discord.png";
    }

    function setTheme(theme) {
        root.setAttribute("data-theme", theme);
        try { localStorage.setItem("theme", theme); } catch (e) {}
        applyUI();
    }

    function init() {
        var saved = null;
        try { saved = localStorage.getItem("theme"); } catch (e) {}
        if (saved !== "light" && saved !== "dark") saved = "dark";
        setTheme(saved);

        if (!btn) return;
        btn.addEventListener("click", function () {
            var cur = (root.getAttribute("data-theme") === "light") ? "light" : "dark";
            setTheme(cur === "light" ? "dark" : "light");
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
