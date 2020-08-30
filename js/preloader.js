var isMobile = /Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent),
    MouseCursor = function () {
        var e, o, r, i, n = document.querySelector("#cursor"),
            s = document.querySelector("#preloader"),
            t = (e, o, r) => (1 - r) * e + r * o;
        document.onmousemove = function (s) {
            r = s.clientX, i = s.clientY, e || (e = r, o = i, n.classList.remove("hide"))
        }, isMobile || function s() {
            r && (e = t(e, r, .1), o = t(o, i, .1), n.style.transform = "translate3d(" + e + "px," + o + "px,0px)", window.main && window.main.header && window.main.header.updateCursor()), window.requestAnimationFrame(s)
        }(), s.classList.add("show")
    },
    mouseCursor = new MouseCursor;