(function () {
    var root = document.documentElement;
    var logo = document.getElementById("disneyLogo");

    function applyLogo() {
        if (!logo) return;
        if (root.getAttribute("data-theme") === "light") {
            logo.src = "assets/img/logo-disney-black.png";
        } else {
            logo.src = "assets/img/logo-disney-grey.png";
        }
    }

    function setTheme(theme) {
        root.setAttribute("data-theme", theme);
        try { localStorage.setItem("theme", theme); } catch (e) {}
        applyLogo();
    }

    function init() {
        var saved = null;
        try { saved = localStorage.getItem("theme"); } catch (e) {}
        if (saved !== "light" && saved !== "dark") saved = "dark";
        setTheme(saved);

        var btn = document.querySelector(".themeToggle");
        if (!btn) return;

        btn.addEventListener("click", function () {
            var cur = root.getAttribute("data-theme") === "light" ? "light" : "dark";
            setTheme(cur === "light" ? "dark" : "light");
        });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
