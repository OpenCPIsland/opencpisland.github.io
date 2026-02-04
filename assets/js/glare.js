/* assets/js/glare.js */
(function () {
    var targets = [];
    function add(sel) {
        var list = document.querySelectorAll(sel);
        for (var i = 0; i < list.length; i++) targets.push(list[i]);
    }

    function setVars(el, e) {
        var r = el.getBoundingClientRect();
        var x = ((e.clientX - r.left) / r.width) * 100;
        var y = ((e.clientY - r.top) / r.height) * 100;
        if (x < 0) x = 0;
        if (x > 100) x = 100;
        if (y < 0) y = 0;
        if (y > 100) y = 100;
        el.style.setProperty("--mx", x.toFixed(2) + "%");
        el.style.setProperty("--my", y.toFixed(2) + "%");
    }

    function onEnter(e) {
        this.style.setProperty("--g", "1");
        setVars(this, e);
    }

    function onMove(e) {
        setVars(this, e);
    }

    function onLeave() {
        this.style.setProperty("--g", "0");
    }

    function init() {
        add("header");
        add("#h1footer");
        add("#h2footer");
        add(".underbanner");
        add(".abovefooter");
        add("grid");
        add("grid > div");
        add("button");
        add(".dlbtnforwin");
        add(".dlbtnforand");
        add(".pcmactxt");
        add(".jointheislandtxt");

        for (var i = 0; i < targets.length; i++) {
            var el = targets[i];
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mousemove", onMove);
            el.addEventListener("mouseleave", onLeave);
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
