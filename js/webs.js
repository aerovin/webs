if (Alldefaultconfig.redirectMobile) {
    var curl = window.location.href;
    if (curl.indexOf('m=1') != -1) {
        curl = curl.replace('m=1', 'm=0');
        window.location.href = curl;
    }
}

function resizeimage(a) {
    var b = a.currentTarget;
    h = Number($(b)
        .height());
    w = Number($(b)
        .width());
    th = Number($(b)
        .parents()
        .height());
    tw = Number($(b)
        .parents()
        .width());
    new_w = (w / h) * th;
    new_h = th;
    left = ($("#outer-wrapper")
        .hasClass("rtl") ? "margin-right" : "margin-left");
    if (new_w < tw) {
        new_w = tw;
        new_h = (h / w) * tw;
        margin_top = -((new_h - th) / 2);
        $(b)
            .css("width", new_w + "px");
        $(b)
            .css("height", new_h + "px");
        $(b)
            .css("margin-top", margin_top + "px")
    } else {
        margin_left = -((new_w - tw) / 2);
        $(b)
            .css("width", new_w + "px");
        $(b)
            .css("height", new_h + "px");
        $(b)
            .css(left, margin_left + "px")
    }
};

function changeimage() {
    $(".thumbimage img")
        .each(function () {
            $(this)
                .removeAttr("style");
            h = Number($(this)
                .height());
            w = Number($(this)
                .width());
            th = Number($(this)
                .parents()
                .height());
            tw = Number($(this)
                .parents()
                .width());
            new_w = (w / h) * th;
            new_h = th;
            left = ($("#outer-wrapper")
                .hasClass("rtl") ? "margin-right" : "margin-left");
            if (new_w < tw) {
                new_w = tw;
                new_h = (h / w) * tw;
                margin_top = -((new_h - th) / 2);
                $(this)
                    .css("width", new_w + "px");
                $(this)
                    .css("height", new_h + "px");
                $(this)
                    .css("margin-top", margin_top + "px")
            } else {
                margin_left = -((new_w - tw) / 2);
                $(this)
                    .css("width", new_w + "px");
                $(this)
                    .css("height", new_h + "px");
                $(this)
                    .css(left, margin_left + "px")
            }
        })
};
$(window)
    .bind("load resize", changeimage);

function createPostSummary(A, z, u) {
    var l, D, H, e, G, n, k, m, o, g, p, B, t, w, v, h, r = "",
        q = "",
        F = document,
        y = configSummary,
        j = F.getElementById(A)
        .value,
        C = F.getElementById(z),
        E = u;
    m = jQuery("#" + A)
        .parents(".post");
    p = m.find(".post-title.entry-title a")
        .text();
    G = m.find(".index-post-labels")
        .html();
    H = jQuery("#" + z + " img");
    t = H.attr("src");
    n = A.replace("postData-", "");
    var c = $.get(window.location.protocol + "//" + window.location.host + "/feeds/posts/default/" + n + "?alt=json-in-script", function (a) {
        h = a.entry;
        if (h !== undefined) {
            w = h.author[0].name.$t;
            v = h.author[0].gd$image.src.replace(/\/s[0-9]+(\-c|\/)/, "/s40$1");
            o = (h.author[0].uri) ? '<a title="' + w + '" href="' + h.author[0].uri.$t + '"><img title="' + w + '" src="' + v + '"/></a>' : '<img title="' + w + '" src="' + v + '"/>'
        } else {
            o = '<img title="Guest" src="http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s180-c/grey.gif"/>'
        }
        m.append('<span class="authoravatar">' + o + "</span>")
    }, "jsonp");
    k = encodeURIComponent(u);
    B = encodeURIComponent(p);
    var x = [{
        name: "Facebook",
        url: "http://www.facebook.com/share.php?u=" + k + "&t=" + B
    }, {
        name: "Twitter",
        url: "https://twitter.com/intent/tweet?text=" + B + "&amp;url=" + k
    }, {
        name: "Google Plus",
        url: "https://plus.google.com/share?url=" + k
    }];
    for (var s = 0; s < x.length; s++) {
        r += '<a target="_blank" title="Share to ' + x[s].name + '" class="' + x[s].name.replace(" ", "-")
            .toLowerCase() + '" href="' + x[s].url + '"><i class="fa fa-' + x[s].name.replace(" ", "-")
            .toLowerCase() + '"></i></a>'
    }
    g = '<div class="socialpostshare">' + r + "</div>";
    D = '<div class="thumbimage imglatest"><a class="thumbimgx" title="' + p + '" href="' + E + '"><span class="mark"><i class="fa fa-link"></i></span><img onload="resizeimage(event);" class="post-thumbnail" src="' + t.replace(/\/s[0-9]+(\-c)?\//, "/" + y.thumbnailSize + "/") + '" alt="' + p + '"></a></div>';
    if (t.indexOf("img.youtube.com") != -1) {
        D = '<div class="thumbimage imglatest"><a class="thumbimgx" title="' + p + '" href="' + E + '"><span class="mark"><i class="fa fa-link"></i></span><img onload="resizeimage(event);" class="post-thumbnail" src="' + t.replace("default", "0") + '" alt="' + p + '"><span class="youtubeplay"><i class="fa fa-youtube-play"></i></span></a></div>'
    }
    l = j.replace(/<(.*?)>/g, "")
        .replace(/[\n\r]+/g, " ");
    C.innerHTML = D + '<span class="index-post-labels">' + G + '</span><strong><a class="titlex" href="' + E + '">' + p + "</a></strong><p>" + l.substring(0, y.summaryLength) + "&hellip;</p>" + g
};

(function (d) {
    var b = ["DOMMouseScroll", "mousewheel"];
    if (d.event.fixHooks) {
        for (var a = b.length; a;) {
            d.event.fixHooks[b[--a]] = d.event.mouseHooks
        }
    }
    d.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) {
                for (var e = b.length; e;) {
                    this.addEventListener(b[--e], c, false)
                }
            } else {
                this.onmousewheel = c
            }
        },
        teardown: function () {
            if (this.removeEventListener) {
                for (var e = b.length; e;) {
                    this.removeEventListener(b[--e], c, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    d.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    });

    function c(j) {
        var h = j || window.event,
            g = [].slice.call(arguments, 1),
            k = 0,
            i = true,
            f = 0,
            e = 0;
        j = d.event.fix(h);
        j.type = "mousewheel";
        if (h.wheelDelta) {
            k = h.wheelDelta / 120
        }
        if (h.detail) {
            k = -h.detail / 3
        }
        e = k;
        if (h.axis !== undefined && h.axis === h.HORIZONTAL_AXIS) {
            e = 0;
            f = -1 * k
        }
        if (h.wheelDeltaY !== undefined) {
            e = h.wheelDeltaY / 120
        }
        if (h.wheelDeltaX !== undefined) {
            f = -1 * h.wheelDeltaX / 120
        }
        g.unshift(j, k, f, e);
        return (d.event.dispatch || d.event.handle)
            .apply(this, g)
    }
})(jQuery);

var shuffleArray = function (a) {
    var d = a.length,
        c, b;
    if (d === 0) {
        return false
    }
    while (--d) {
        c = Math.floor(Math.random() * (d + 1));
        b = a[d];
        a[d] = a[c];
        a[c] = b
    }
    return a
};
var getRandomInt = function (b, a) {
    return Math.floor(Math.random() * (a - b + 1)) + b
};

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function (e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function (e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function (e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function (e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function (e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function (e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function (e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function (e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function (e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function (e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function (e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function (e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function (e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function (e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function (e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function (f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function (e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function (e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function (e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function (e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});

function createCookie(c, d, e) {
    if (e) {
        var b = new Date();
        b.setTime(b.getTime() + (e * 24 * 60 * 60 * 1000));
        var a = "; expires=" + b.toGMTString()
    } else {
        var a = ""
    }
    document.cookie = c + "=" + d + a + "; path=/"
}

function readCookie(b) {
    var e = b + "=";
    var a = document.cookie.split(";");
    for (var d = 0; d < a.length; d++) {
        var f = a[d];
        while (f.charAt(0) == " ") {
            f = f.substring(1, f.length)
        }
        if (f.indexOf(e) == 0) {
            return f.substring(e.length, f.length)
        }
    }
    return null
}

function eraseCookie(a) {
    createCookie(a, "", -1)
};

(function (a) {
    a.fn.hoverIntent = function (m, d, h) {
        var j = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };
        if (typeof m === "object") {
            j = a.extend(j, m)
        } else {
            if (a.isFunction(d)) {
                j = a.extend(j, {
                    over: m,
                    out: d,
                    selector: h
                })
            } else {
                j = a.extend(j, {
                    over: m,
                    out: m,
                    selector: d
                })
            }
        }
        var l, k, g, f;
        var e = function (n) {
            l = n.pageX;
            k = n.pageY
        };
        var c = function (o, n) {
            n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
            if ((Math.abs(g - l) + Math.abs(f - k)) < j.sensitivity) {
                a(n)
                    .off("mousemove.hoverIntent", e);
                n.hoverIntent_s = 1;
                return j.over.apply(n, [o])
            } else {
                g = l;
                f = k;
                n.hoverIntent_t = setTimeout(function () {
                    c(o, n)
                }, j.interval)
            }
        };
        var i = function (o, n) {
            n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
            n.hoverIntent_s = 0;
            return j.out.apply(n, [o])
        };
        var b = function (p) {
            var o = jQuery.extend({}, p);
            var n = this;
            if (n.hoverIntent_t) {
                n.hoverIntent_t = clearTimeout(n.hoverIntent_t)
            }
            if (p.type == "mouseenter") {
                g = o.pageX;
                f = o.pageY;
                a(n)
                    .on("mousemove.hoverIntent", e);
                if (n.hoverIntent_s != 1) {
                    n.hoverIntent_t = setTimeout(function () {
                        c(o, n)
                    }, j.interval)
                }
            } else {
                a(n)
                    .off("mousemove.hoverIntent", e);
                if (n.hoverIntent_s == 1) {
                    n.hoverIntent_t = setTimeout(function () {
                        i(o, n)
                    }, j.timeout)
                }
            }
        };
        return this.on({
            "mouseenter.hoverIntent": b,
            "mouseleave.hoverIntent": b
        }, j.selector)
    }
})(jQuery);

(function (b) {
    var a = (function () {
        var p = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
            f = /iPhone|iPad|iPod/i.test(navigator.userAgent),
            k = (function () {
                var c = document.documentElement.style;
                return ("behavior" in c && "fill" in c && /iemobile/i.test(navigator.userAgent))
            })(),
            d = (function () {
                if (f) {
                    b(window)
                        .load(function () {
                            b("body")
                                .children()
                                .on("click", b.noop)
                        })
                }
            })(),
            m = function (s, t) {
                var c = p.menuClass;
                if (t.cssArrows) {
                    c += " " + p.menuArrowClass
                }
                s.toggleClass(c)
            },
            r = function (c, s) {
                return c.find("li." + s.pathClass)
                    .slice(0, s.pathLevels)
                    .addClass(s.hoverClass + " " + p.bcClass)
                    .filter(function () {
                        return (b(this)
                            .children("ul")
                            .hide()
                            .show()
                            .length)
                    })
                    .removeClass(s.pathClass)
            },
            n = function (c) {
                c.children("a")
                    .toggleClass(p.anchorClass)
            },
            g = function (c) {
                var s = c.css("ms-touch-action");
                s = (s === "pan-y") ? "auto" : "pan-y";
                c.css("ms-touch-action", s)
            },
            j = function (t, u) {
                var c = "li:has(ul)";
                if (b.fn.hoverIntent && !u.disableHI) {
                    t.hoverIntent(l, h, c)
                } else {
                    t.on("mouseenter.superfish", c, l)
                        .on("mouseleave.superfish", c, h)
                }
                var s = "MSPointerDown.superfish";
                if (!f) {
                    s += " touchend.superfish"
                }
                if (k) {
                    s += " mousedown.superfish"
                }
                t.on("focusin.superfish", "li", l)
                    .on("focusout.superfish", "li", h)
                    .on(s, "a", i)
            },
            i = function (t) {
                var s = b(this),
                    c = s.siblings("ul");
                if (c.length > 0 && c.is(":hidden")) {
                    s.one("click.superfish", false);
                    if (t.type === "MSPointerDown") {
                        s.trigger("focus")
                    } else {
                        b.proxy(l, s.parent("li"))()
                    }
                }
            },
            l = function () {
                var c = b(this),
                    s = o(c);
                clearTimeout(s.sfTimer);
                c.siblings()
                    .superfish("hide")
                    .end()
                    .superfish("show")
            },
            h = function () {
                var c = b(this),
                    s = o(c);
                if (f) {
                    b.proxy(q, c, s)()
                } else {
                    clearTimeout(s.sfTimer);
                    s.sfTimer = setTimeout(b.proxy(q, c, s), s.delay)
                }
            },
            q = function (c) {
                c.retainPath = (b.inArray(this[0], c.$path) > -1);
                this.superfish("hide");
                if (!this.parents("." + c.hoverClass)
                    .length) {
                    c.onIdle.call(e(this));
                    if (c.$path.length) {
                        b.proxy(l, c.$path)()
                    }
                }
            },
            e = function (c) {
                return c.closest("." + p.menuClass)
            },
            o = function (c) {
                return e(c)
                    .data("sf-options")
            };
        return {
            hide: function (s) {
                if (this.length) {
                    var v = this,
                        w = o(v);
                    if (!w) {
                        return this
                    }
                    var t = (w.retainPath === true) ? w.$path : "",
                        c = v.find("li." + w.hoverClass)
                        .add(this)
                        .not(t)
                        .removeClass(w.hoverClass)
                        .children("ul"),
                        u = w.speedOut;
                    if (s) {
                        c.show();
                        u = 0
                    }
                    w.retainPath = false;
                    w.onBeforeHide.call(c);
                    c.stop(true, true)
                        .animate(w.animationOut, u, function () {
                            var x = b(this);
                            w.onHide.call(x)
                        })
                }
                return this
            },
            show: function () {
                var t = o(this);
                if (!t) {
                    return this
                }
                var s = this.addClass(t.hoverClass),
                    c = s.children("ul");
                t.onBeforeShow.call(c);
                c.stop(true, true)
                    .animate(t.animation, t.speed, function () {
                        t.onShow.call(c)
                    });
                return this
            },
            destroy: function () {
                return this.each(function () {
                    var s = b(this),
                        t = s.data("sf-options"),
                        c = s.find("li:has(ul)");
                    if (!t) {
                        return false
                    }
                    clearTimeout(t.sfTimer);
                    m(s, t);
                    n(c);
                    g(s);
                    s.off(".superfish")
                        .off(".hoverIntent");
                    c.children("ul")
                        .attr("style", function (u, v) {
                            return v.replace(/display[^;]+;?/g, "")
                        });
                    t.$path.removeClass(t.hoverClass + " " + p.bcClass)
                        .addClass(t.pathClass);
                    s.find("." + t.hoverClass)
                        .removeClass(t.hoverClass);
                    t.onDestroy.call(s);
                    s.removeData("sf-options")
                })
            },
            init: function (c) {
                return this.each(function () {
                    var t = b(this);
                    if (t.data("sf-options")) {
                        return false
                    }
                    var u = b.extend({}, b.fn.superfish.defaults, c),
                        s = t.find("li:has(ul)");
                    u.$path = r(t, u);
                    t.data("sf-options", u);
                    m(t, u);
                    n(s);
                    g(t);
                    j(t, u);
                    s.not("." + p.bcClass)
                        .superfish("hide", true);
                    u.onInit.call(this)
                })
            }
        }
    })();
    b.fn.superfish = function (d, c) {
        if (a[d]) {
            return a[d].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof d === "object" || !d) {
                return a.init.apply(this, arguments)
            } else {
                return b.error("Method " + d + " does not exist on jQuery.fn.superfish")
            }
        }
    };
    b.fn.superfish.defaults = {
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: true,
        disableHI: false,
        onInit: b.noop,
        onBeforeShow: b.noop,
        onShow: b.noop,
        onBeforeHide: b.noop,
        onHide: b.noop,
        onIdle: b.noop,
        onDestroy: b.noop
    };
    b.fn.extend({
        hideSuperfishUl: a.hide,
        showSuperfishUl: a.show
    })
})(jQuery);

jQuery.fn.liScroll = function (c) {
    c = jQuery.extend({
        travelocity: 0.07
    }, c);
    return this.each(function () {
        function d(h, b) {
            $("#outer-wrapper")
                .hasClass("ltr") ? a.animate({
                    left: "-=" + h
                }, b, "linear", function () {
                    a.css("left", f);
                    d(e, g)
                }) : a.animate({
                    right: "-=" + h
                }, b, "linear", function () {
                    a.css("right", f);
                    d(e, g)
                })
        }
        var a = jQuery(this);
        a.addClass("newsticker");
        var b = 1;
        a.find("li")
            .each(function (a) {
                b += jQuery(this, a)
                    .outerWidth(!0)
            });
        a.wrap("<div class='mask'></div>");
        a.parent()
            .wrap("<div class='tickercontainer'></div>");
        var f =
            a.parent()
            .parent()
            .width();
        a.width(b);
        var e = b + f,
            g = e / c.travelocity;
        d(e, g);
        a.hover(function () {
            jQuery(this)
                .stop()
        }, function () {
            var a = jQuery(this)
                .offset()
                .left + b;
            d(a, a / c.travelocity)
        })
    })
};

(function (b) {
    b.organicTabs = function (f, k) {
        var a = this;
        a.$el = b(f);
        a.$nav = a.$el.find(".navtab");
        a.init = function () {
            a.options = b.extend({}, b.organicTabs.defaultOptions, k);
            b(".list-tabwrap .hide")
                .css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    display: "none"
                });
            a.$nav.delegate("li > a", "click", function () {
                var d = a.$el.find("a.current")
                    .attr("href")
                    .substring(1),
                    c = b(this),
                    g = c.attr("href")
                    .substring(1),
                    h = a.$el.find(".list-tabwrap"),
                    e = h.height();
                h.height(e);
                g != d && 0 == a.$el.find(":animated")
                    .length && a.$el.find("#" + d)
                    .fadeOut(a.options.speed,
                        function () {
                            a.$el.find("#" + g)
                                .fadeIn(a.options.speed);
                            var b = a.$el.find("#" + g)
                                .height();
                            h.animate({
                                height: b
                            });
                            a.$el.find(".navtab li a")
                                .removeClass("current");
                            c.addClass("current")
                        });
                return !1
            });
            b(".sidebarmd-widget .BlogArchive .toggle")
                .length && b(".sidebarmd-widget .BlogArchive .toggle")
                .click(function () {
                    var a = b(this)
                        .parents(".BlogArchive"),
                        d = b(this)
                        .parent("li")
                        .children("ul"),
                        c = function () {
                            var c = a.height();
                            b("#sidebar-tengah .list-tabwrap")
                                .animate({
                                    height: c
                                })
                        };
                    b(this)
                        .children()
                        .is(".toggle-open") ?
                        setTimeout(c, 500) : 0 < d.length ? setTimeout(c, 500) : setTimeout(c, 4E3)
                });
            var d, c, e;
            d = a.$el.find("#populartab");
            c = a.$el.find("#commenttabs");
            e = a.$el.find("#archivetab");
            d = d.find(".widget > h2:first")
                .html();
            c = c.find(".widget > h2:first")
                .html();
            e = e.find(".widget > h2:first")
                .html();
            a.$el.find(".navtab .nav-one a")
                .html(d);
            a.$el.find(".navtab .nav-two a")
                .html(c);
            a.$el.find(".navtab .nav-three a")
                .html(e)
        };
        a.init()
    };
    b.organicTabs.defaultOptions = {
        speed: 300
    };
    b.fn.organicTabs = function (f) {
        return this.each(function () {
            new b.organicTabs(this, f)
        })
    }
})(jQuery);

;
eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    };
    while (c--)
        if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(q($){f 2P=0,5G=[];$.2o.3G=q(D){Z c.3H(q(){l($(c).5H(\'5I\')==1W){$(c).5H(\'5I\',2P);5G.5J(2K $3e(c,D,2P));++2P}})};f 5K={1f:1,2L:8d,47:\'\',48:S,49:S,2z:S,N:\'\',k:1w,8e:1w,1m:1w,1s:1w,1N:1w,3f:1w,3g:\'4V\',B:1w,O:1w,1y:1,19:R,2X:R,4a:1w,5L:R,4b:R,3h:R,4c:R,4d:R,2p:R,4e:R,3i:R,3I:R,3J:1w,2q:0.75,2a:1L,2r:2Q,4W:1w,4X:1w,8f:20,4Y:\'r\',3j:R,2M:R,2R:R,4Z:\'4f\',2Y:R,51:\'4f\',1E:R,2s:{},2A:R,3k:R,3l:R,4g:0,2b:0,2Z:S,5M:R,4h:[],5N:1w,5O:1w,3K:S,4i:\'4j\',52:1w,5P:\'<a 1O="#" 1u="2c">8g</a>\'+\'<a 1O="#" 1u="23">8h</a>\'+\'<2S 1u="1B"></2S>\'+\'<1p 1u="4k">\'+\'<1p 1u="1K">\'+\'<a 1O=""><P 1u="1a" /></a>\'+\'<1p 1u="2t"></1p>\'+\'</1p>\'+\'</1p>\'};$.3G=q(3L,D,5Q){c.k=$(3L);c.31=1w;c.g=$.1P({},5K,D||{});c.2P=5Q;c.5R()};f $3e=$.3G;$3e.2o=$3e.53={};$3e.2o.1P=$.1P;$3e.2o.1P({5R:q(){f h=c;l(c.g.4e){f C=$(32).C();f H=$(32).H();c.k.C(C).H(H);c.k.w({\'2B\':\'54\',\'s\':0,\'r\':0,\'z-5S\':5T});c.g.2Z=R;$(\'55\').w({\'8i\':\'8j\'})}c.g.B=3m(c.k.w(\'C\'));c.g.O=3m(c.k.w(\'H\'));l(!c.g.B||!c.g.O){8k.8l(\'8m 5U H 4l 5V 1w! - 8n 8o\');Z R}l(c.g.52){c.k.3n(\'3G-\'+c.g.52)}c.k.1F(c.g.5P);c.g.N=c.5W(c.g.L);l(c.g.1f>=2)c.g.1f=1.3;l(c.g.1f<=0)c.g.1f=1;c.k.j(\'.1B\').1q();c.k.j(\'.2t\').1q();c.k.j(\'.2c\').1q();c.k.j(\'.23\').1q();c.k.j(\'.4k\').C(c.g.B);c.k.j(\'.4k\').H(c.g.O);f 3J=c.g.3J?c.g.3J:c.g.B;c.k.j(\'.2t\').C(3J);f 4m=\' 33\',u=0;c.g.1m=2K 4n();f 56=q(2T,W,24,2z,26){h.g.1m.5J([W,2T,24,2z,26]);l(h.g.4b){f 4o=\'\';l(h.g.B>h.g.O){4o=\'H="1v"\'}13{4o=\'C="1v"\'}h.k.j(\'.1B\').1F(\'<2S 1u="1X\'+4m+\'" 3o="\'+(u-1)+\'" 4p="57\'+u+\'58\'+h.2P+\'">\'+\'<P W="\'+W+\'" \'+4o+\' />\'+\'</2S> \')}13{h.k.j(\'.1B\').1F(\'<2S 1u="1X\'+4m+\'" 3o="\'+(u-1)+\'" 4p="57\'+u+\'58\'+h.2P+\'">\'+u+\'</2S> \')}4m=\'\'};l(c.g.3i){$.8p({4q:\'8q\',5X:c.g.3i,8r:R,8s:\'3i\',8t:q(3i){f 2C=$(\'<2C></2C>\');$(3i).j(\'3G 8u\').3H(q(){++u;f 2T=($(c).j(\'2T\').3p())?$(c).j(\'2T\').3p():\'#\';f W=$(c).j(\'1K\').3p();f 24=$(c).j(\'1K\').U(\'4q\');f 2z=$(c).j(\'2z\').3p();f 26=($(c).j(\'26\').3p())?$(c).j(\'26\').3p():\'4V\';56(2T,W,24,2z,26)})}})}13 l(c.g.8v){}13{c.k.j(\'2C 3q\').3H(q(){++u;f 2T=($(c).j(\'a\').1z)?$(c).j(\'a\').U(\'1O\'):\'#\';f W=$(c).j(\'P\').U(\'W\');f 24=$(c).j(\'P\').U(\'1u\');f 2z=$(c).j(\'.8w\').34();f 26=($(c).j(\'a\').1z&&$(c).j(\'a\').U(\'26\'))?$(c).j(\'a\').U(\'26\'):\'4V\';56(2T,W,24,2z,26)})}l(h.g.4b&&!h.g.4e){h.g.3h={V:0.3};h.g.4c={V:0.5};h.g.4d={V:1};h.k.j(\'.1B\').3n(\'2N\');f 4r=(u+1)*h.k.j(\'.2N .1X\').C();h.k.j(\'.2N\').C(4r);h.k.w({H:h.k.H()+h.k.j(\'.1B\').H()});h.k.1F(\'<1p 1u="5Y"></1p>\');f 5Z=h.k.j(\'.1B\').8x();h.k.j(\'.1B\').28();h.k.j(\'.5Y\').C(h.g.B).1F(5Z);f 59=0,B=c.g.B,O=c.g.O,3M=0,2N=h.k.j(\'.2N\'),5a=0,60=h.k.3r().s;2N.j(\'.1X\').3H(q(){59+=$(c).8y()});2N.C(59+\'11\');3M=2N.C();4s=c.g.B;4s=B-1v;l(4r>h.g.B){h.k.8z(q(e){5a=h.k.3r().r+90;f x=e.8A,y=e.8B,35=0;x=x-5a;y=y-60;61=3M-4s;35=-((61*x)/4s);l(35>0)35=0;l(35<-(3M-B))35=-(3M-B);l(y>O){2N.w({r:35})}})}h.k.j(\'.8C\').w({\'r\':10});l(4r<h.g.B){h.k.j(\'.1B\').C(\'36\');h.k.j(\'.8D\').1q();f 1Q=\'.1B\';2D(h.g.4Y){J\'4f\':f 18=(h.g.B-h.k.j(1Q).C())/2;h.k.j(1Q).w({\'r\':18});K;J\'2d\':h.k.j(1Q).w({\'r\':\'36\',\'2d\':\'-8E\'});K;J\'r\':h.k.j(1Q).w({\'r\':\'8F\'});K}}}13{f 1Q=\'.1B\';l(h.g.3I){h.k.j(\'.1B\').3n(\'5b\').5c(\'1B\');1Q=\'.5b\'}2D(h.g.4Y){J\'4f\':f 18=(h.g.B-h.k.j(1Q).C())/2;h.k.j(1Q).w({\'r\':18});K;J\'2d\':h.k.j(1Q).w({\'r\':\'36\',\'2d\':\'62\'});K;J\'r\':h.k.j(1Q).w({\'r\':\'62\'});K}l(!h.g.3I){l(h.k.j(\'.1B\').H()>20){h.k.j(\'.1B\').1q()}}}c.k.j(\'2C\').1q();l(c.g.5L)c.g.1m.63(q(a,b){Z E.1n()-0.5});c.g.1s=c.g.1m[0][0];c.g.1N=c.g.1m[0][1];c.g.3f=c.g.1m[0][3];c.g.3g=c.g.1m[0][4];l(c.g.1m.1z>1){c.k.j(\'.2c\').2O(q(){l(h.g.19==R){h.g.1y-=2;l(h.g.1y==-2){h.g.1y=h.g.1m.1z-2}13 l(h.g.1y==-1){h.g.1y=h.g.1m.1z-1}h.4t(h.g.1y)}Z R});c.k.j(\'.23\').2O(q(){h.4t(h.g.1y);Z R});h.k.j(\'.23, .2c\').4u(\'5d\',h.g.5N);h.k.j(\'.23, .2c\').4u(\'64\',h.g.5O);c.k.j(\'.1X\').3s(q(){l($(c).U(\'1u\')!=\'1X 33\'){l(h.g.4c){$(c).1R().I(h.g.4c,2Q)}}},q(){l($(c).U(\'1u\')!=\'1X 33\'){l(h.g.3h){$(c).1R().I(h.g.3h,1S)}}});c.k.j(\'.1X\').2O(q(){l($(c).U(\'1u\')!=\'1X 33\'){f 4v=3t($(c).U(\'3o\'));h.4t(4v)}Z R});l(h.g.3h){c.k.j(\'.1X\').w(h.g.3h)}l(h.g.4d){c.k.j(\'.1X:8G(0)\').w(h.g.4d)}l(h.g.3j&&h.g.3I){f 3j=$(\'<1p 1u="4w"><2C></2C></1p>\');1h(f i=0;i<c.g.1m.1z;i++){f 3q=$(\'<3q></3q>\');f P=$(\'<P />\');P.U(\'W\',c.g.1m[i][0]);3q.1F(P);3j.j(\'2C\').1F(3q)}f 65=3t(c.g.1m.1z*1v);3j.j(\'2C\').C(65);$(1Q).1F(3j);h.k.j(1Q).j(\'.1X\').8H(q(){f 66=3m(h.k.j(1Q).3r().r);f 67=3m($(c).3r().r);f 68=(67-66)-43;f 3o=3t($(c).U(\'3o\'));f 8I=h.k.j(\'.8J P\').U(\'W\');f 69=-(3o*1v);h.k.j(\'.4w\').j(\'2C\').I({r:69},{4x:1L,3N:R,L:\'6a\'});h.k.j(\'.4w\').1T(1,1).I({r:68},{4x:1L,3N:R})});h.k.j(1Q).64(q(){$(\'.4w\').I({V:\'1q\'},{4x:1L,3N:R})})}}l(h.g.2M){h.6b()}l(h.g.2Y){h.6c()}l(h.g.1E&&h.g.3K){h.6d()}l(h.g.2p){h.2p()}l(h.g.5M){h.6e()}c.6f()},6f:q(){f h=c;f 2E=$(\'<1p 1u="2E">8K</1p>\');c.k.1F(2E);f t=c.g.1m.1z;f u=0;$.3H(c.g.1m,q(i){f 6g=c;f 2E=$(\'<2S 1u="4y"></2S>\');2E.w({2B:\'54\',s:\'-8L\'});h.k.1F(2E);f P=2K 8M();$(P).8N(q(){++u;l(u==t){h.k.j(\'.2E\').28();h.k.j(\'.4y\').28();h.6h()}}).8O(q(){h.k.j(\'.2E, .4y, .1X, .23, .2c\').28();h.k.34(\'<p 2e="8P:8Q;4z:8R;">8S 2E 6i. 8T 5U 8U 6i 8V 8W 8X.</p>\')}).U(\'W\',6g[0])})},6h:q(){f h=c;f 5e=R;l(c.g.48||c.g.4b)c.k.j(\'.1B\').3O(1S);l(c.g.3I)c.k.j(\'.5b\').3O(1S);l(c.g.2z)c.k.j(\'.2t\').T();l(c.g.49){c.k.j(\'.2c\').3O(1S);c.k.j(\'.23\').3O(1S)}l(h.g.3K){h.3P()}h.6j();h.1Y();h.k.j(\'.1K a P\').U({\'W\':h.g.1s});4A=h.k.j(\'.1K a\');4A=h.4B(4A);4A.j(\'P\').3O(8Y);h.3Q();h.5f();l(h.g.3K){h.6k()}f 5g=q(){l(h.g.2Z){5e=S;h.g.2X=S;h.2F(S);h.5h()}};h.k.5d(5g);h.k.j(\'.23\').5d(5g);l(h.g.1m.1z>1&&!5e){l(h.g.3K){h.31=3R(q(){h.4C()},h.g.2L)}}13{h.k.j(\'.2E, .4y, .1X, .23, .2c\').28()}l($.6l(h.g.4W))h.g.4W(h)},4t:q(4v){l(c.g.19==R){c.g.2b=0;c.k.j(\'.n\').1R();c.2F(S);c.g.1y=E.6m(4v);c.k.j(\'.1K a\').U({\'1O\':c.g.1N});c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.n\').28();c.4C()}},4C:q(){f h=c;3S=[\'6n\',\'6o\',\'6p\',\'6q\',\'6r\',\'6s\',\'6t\',\'6u\',\'6v\',\'6w\',\'6x\',\'6y\',\'6z\',\'6A\',\'6B\',\'6C\',\'6D\',\'6E\',\'6F\',\'6G\',\'6H\',\'6I\',\'6J\',\'6K\',\'6L\',\'6M\',\'6N\',\'6O\',\'6P\',\'6Q\',\'6R\',\'6S\',\'6T\',\'6U\',\'6V\'];l(h.g.1E)h.6W();24=(c.g.47==\'\'&&c.g.1m[c.g.1y][2])?c.g.1m[c.g.1y][2]:(c.g.47==\'\'?\'3a\':c.g.47);l(24==\'8Z\'){l(!c.g.4a){3S.63(q(){Z 0.5-E.1n()});c.g.4a=3S}24=c.g.4a[c.g.1y]}13 l(24==\'1n\'){f 6X=3t(E.1n()*3S.1z);24=3S[6X]}13 l(h.g.4h.1z>0){f 6Y=h.g.4h.1z;l(c.g.3u==1W){c.g.3u=0}24=h.g.4h[c.g.3u];++c.g.3u;l(c.g.3u>=6Y)c.g.3u=0}2D(24){J\'6n\':c.5i();K;J\'6o\':c.5i({1n:S});K;J\'6p\':c.6Z();K;J\'6q\':c.5j();K;J\'6r\':c.5j({1n:S});K;J\'6s\':c.71();K;J\'6t\':c.72();K;J\'6u\':c.73();K;J\'6v\':c.5k();K;J\'6w\':c.5k({1n:S});K;J\'6x\':c.5l();K;J\'6y\':c.74();K;J\'6z\':c.76();K;J\'6A\':c.77();K;J\'6B\':c.78();K;J\'6C\':c.5m({H:S});K;J\'6D\':c.5m({H:R,F:2u,1b:50});K;J\'6E\':c.3T({2v:\'s\'});K;J\'6F\':c.3T({2v:\'3b\'});K;J\'6G\':c.3T({2v:\'2d\',t:5});K;J\'6H\':c.3T({2v:\'r\',t:5});K;J\'6I\':c.79();K;J\'91\':c.7a();K;J\'6J\':c.7b();K;J\'6K\':c.7c();K;J\'6L\':c.7d();K;J\'6M\':c.7e();K;J\'6N\':c.7f();K;J\'6O\':c.7g();K;J\'6P\':c.5n({2v:\'s\'});K;J\'6Q\':c.5n({2v:\'3b\'});K;J\'6R\':c.7h();K;J\'6S\':c.5o();K;J\'6T\':c.5o({L:\'5p\'});K;J\'6U\':c.7i();K;J\'6V\':c.7j();K;3a:c.5l();K}},5i:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'3c\':c.g.N;f F=3U/c.g.1f;c.1l();f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=c.g.O+1L;f 1g=c.g.O+1L;f X=0;f 14=0;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X)+(X*5q);f 18=-h.g.B;f 1r=-(A*X);f 1o=-(v*14);f Y=(A*X);f 17=(v*14);f n=c.1x();n.1q();f G=50*(i);l(D.1n){G=40*(14);n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A})}13{F=1S;n.w({r:(c.g.B)+(v*i),s:c.g.O+(A*i),C:v,H:A})}c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.T().1b(G).I({s:Y+\'11\',r:17+\'11\'},F,L,Q);l(D.1n){n.j(\'P\').w({r:1o+1v,s:1r+50});n.j(\'P\').1b(G+(F/2)).I({r:1o,s:1r},5T,\'5p\')}13{n.j(\'P\').w({r:1o,s:1r});n.j(\'P\').1b(G+(F/2)).1T(1v,0.5).1T(2Q,1)}X++;l(X==1j){X=0;14++}}},6Z:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=1S/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/15));f v=E.M(c.g.B/t);f A=(c.g.O);1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:c.g.B+1v,s:0,C:v,H:A});n.j(\'P\').w({r:-(v*i)});c.1d(n);f G=80*(i);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.T().1b(G).I({s:Y,r:17},F,L);n.j(\'P\').1q().1b(G+1v).I({V:\'T\'},F+2Q,L,Q)}},5j:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'4D\':c.g.N;f F=2Q/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.B/8));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f 1G=c.g.B/16;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-1G;f 17=18-1G;f n=c.1U(1i);n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);n.T();f G=50*i;l(D.1n){F=(2u*(h.3V(2)+1))/c.g.1f;Y=1c;17=18;G=E.M(30*h.3V(30))}l(D.1n&&i==(t-1)){F=2u*3;G=30*30}f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'1q\',s:Y+\'11\',r:17+\'11\'},F,L,Q);X++;l(X==1j){X=0;14++}}},71:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=1S/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-50;f 17=18-50;f n=c.1U(1i);n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);n.T();f G=50*i;G=(i==(t-1))?(t*50):G;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'1q\'},F,L,Q);X++;l(X==1j){X=0;14++}}},7a:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'7k\':c.g.N;f F=2Q/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f u=-1;1h(i=0;i<t;i++){l(14%2!=0){l(X==0){u=u+1j+1}u--}13{l(14>0&&X==0){u=u+2}u++}1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-50;f 17=18-50;f n=c.1U(1i);n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);n.T();f G=(50*i);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({C:\'+=2G\',H:\'+=2G\',s:\'-=7l\',r:\'-=7l\',V:\'1q\'},F,L,Q);X++;l(X==1j){X=0;14++}}},72:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'3d\':c.g.N;f F=7m/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/3));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f 1G=E.M(c.g.B/6);1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c-1G;f 17=18-1G;f n=c.1U(1i);n.w({r:18,s:1c,C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);n.T();f G=50*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'1q\',C:\'1q\',H:\'1q\',s:1c+(v*1.5),r:18+(A*1.5)},F,L,Q);X++;l(X==1j){X=0;14++}}},73:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'3c\':c.g.N;f F=3U/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/7));f v=(c.g.B);f A=E.M(c.g.O/t);1h(i=0;i<t;i++){f 17=(i%2==0?\'\':\'\')+v;f Y=(i*A);f n=c.1x();n.w({r:17+\'11\',s:Y+\'11\',C:v,H:A});n.j(\'P\').w({r:0,s:-Y});c.1d(n);f G=90*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'T\',s:Y,r:0},F,L,Q)}},5k:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=2u/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f v=E.M(c.g.B/t);f A=(c.g.O);1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y-50,C:v,H:A});n.j(\'P\').w({r:-(v*i),s:0});c.1d(n);l(D.1n){f 1n=c.3V(t);f G=50*1n;G=(i==(t-1))?(50*t):G}13{f G=70*(i);F=F-(i*2)}f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\'},F,L,Q)}},5l:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'7n\':c.g.N;f F=7m/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f Y=0;f 1c=A;f 5r=v*i;f n=c.1x();n.w({r:5r,s:1c,H:A,C:v});n.j(\'P\').w({r:-(5r)});c.1d(n);f 1n=c.3V(t);f G=30*1n;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.T().1b(G).I({s:Y},F,L,Q)}},74:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=7o/c.g.1f;c.1l();f v=c.g.B;f A=c.g.O;f t=2;1h(i=0;i<t;i++){f 1c=0;f 18=0;f n=c.1x();n.w({r:18,s:1c,C:v,H:A});c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.I({V:\'T\',r:0,s:0},F,L,Q)}},76:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=1S/c.g.1f;c.1l();f v=c.g.B;f A=c.g.O;f t=4;1h(i=0;i<t;i++){l(i==0){f 1c=\'-2G\';f 18=\'-2G\'}13 l(i==1){f 1c=\'-2G\';f 18=\'2G\'}13 l(i==2){f 1c=\'2G\';f 18=\'-2G\'}13 l(i==3){f 1c=\'2G\';f 18=\'2G\'}f n=c.1x();n.w({r:18,s:1c,C:v,H:A});c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.I({V:\'T\',r:0,s:0},F,L,Q)}},77:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=2u/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/16));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y-c.g.O,C:v,H:A});n.j(\'P\').w({r:-(v*i),s:0});c.1d(n);f G;l(i<=((t/2)-1)){G=7p-(i*1L)}13 l(i>((t/2)-1)){G=((i-(t/2))*1L)}G=G/2.5;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({s:Y+\'11\',r:17+\'11\',V:\'T\'},F,L,Q)}},78:q(D){f h=c;f D=$.1P({},{H:R},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=2u/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/16));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y,C:v,H:A});n.j(\'P\').w({r:-(v*i),s:0});c.1d(n);f G;l(!D.H){l(i<=((t/2)-1)){G=7p-(i*1L)}13 l(i>((t/2)-1)){G=((i-(t/2))*1L)}f Q=(i==(t-1))?q(){h.1k()}:\'\'}13{l(i<=((t/2)-1)){G=1L+(i*1L)}13 l(i>((t/2)-1)){G=(((t/2)-i)*1L)+(t*1v)}f Q=(i==(t/2))?q(){h.1k()}:\'\'}G=G/2.5;l(!D.H){n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\',C:\'T\'},F,L,Q)}13{F=F+(i*2);f L=\'1M\';n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\',H:\'T\'},F,L,Q)}}},5m:q(D){f h=c;f D=$.1P({},{H:S,F:1S,1b:1v},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=D.F/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/16));f v=E.M(c.g.B/t);f A=c.g.O;1h(i=0;i<t;i++){f 17=(v*(i));f Y=0;f n=c.1x();n.w({r:17,s:Y,C:v,H:A});n.j(\'P\').w({r:-(v*i),s:0});c.1d(n);f G=D.1b*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';l(!D.H){n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\',C:\'T\'},F,L,Q)}13{f L=\'1M\';n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\',H:\'T\'},F,L,Q)}}},3T:q(D){f h=c;f D=$.1P({},{2v:\'s\',4E:\'4F\',t:7},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'4G\':c.g.N;f F=92/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.1a\').1q();f t=D.t;1h(i=0;i<t;i++){2D(D.2v){3a:J\'s\':f v=E.M(c.g.B/t);f A=c.g.O;f 1Z=0;f 1C=(v*i);f 3v=-A;f 2U=1C;f 3w=A;f 3x=1C;f 3y=0;f 3z=1C;f 1r=0;f 1o=-1C;K;J\'3b\':f v=E.M(c.g.B/t);f A=c.g.O;f 1Z=0;f 1C=(v*i);f 3v=A;f 2U=1C;f 3w=-A;f 3x=1C;f 3y=0;f 3z=1C;f 1r=0;f 1o=-1C;K;J\'2d\':f v=c.g.B;f A=E.M(c.g.O/t);f 1Z=(A*i);f 1C=0;f 3v=1Z;f 2U=v;f 3w=1Z;f 3x=-2U;f 3y=1Z;f 3z=0;f 1r=-1Z;f 1o=0;K;J\'r\':f v=c.g.B;f A=E.M(c.g.O/t);f 1Z=(A*i);f 1C=0;f 3v=1Z;f 2U=-v;f 3w=1Z;f 3x=-2U;f 3y=1Z;f 3z=0;f 1r=-1Z;f 1o=0;K}2D(D.4E){J\'7q\':3a:f G=(i%2==0)?0:5q;K;J\'1n\':f G=30*(E.1n()*30);K;J\'4F\':f G=i*1v;K}f n=c.1U(1i);n.j(\'P\').w({r:1o,s:1r});n.w({s:1Z,r:1C,C:v,H:A});c.1d(n);n.T();n.1b(G).I({s:3v,r:2U},F,L);f 2f=c.1x();2f.j(\'P\').w({r:1o,s:1r});2f.w({s:3w,r:3x,C:v,H:A});c.1d(2f);2f.T();f Q=(i==(t-1))?q(){h.1k()}:\'\';2f.1b(G).I({s:3y,r:3z},F,L,Q)}},79:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=3U/c.g.1f;c.1l();f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.B/8));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 1e=0;f 1g=0;f X=0;f 14=0;f 4H=2K 4n;f 3A=2K 4n;1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));4H[i]=[1c,18];X++;l(X==1j){X=0;14++}}X=0;14=0;1h(i=0;i<t;i++){3A[i]=i};f 3A=h.7r(3A);1h(i=0;i<t;i++){1e=(i%2==0)?1e:-1e;1g=(i%2==0)?1g:-1g;f 1c=1e+(A*X);f 18=(1g+(v*14));f 1r=-(A*X);f 1o=-(v*14);f Y=1c;f 17=18;1c=4H[3A[i]][0];18=4H[3A[i]][1];f n=c.1x();n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);f G=30*(E.1n()*30);l(i==(t-1))G=30*30;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({V:\'T\',s:Y+\'11\',r:17+\'11\'},F,L,Q);X++;l(X==1j){X=0;14++}}},7b:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'3c\':c.g.N;f F=1S/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10))*2;f v=E.M(c.g.B/t)*2;f A=(c.g.O)/2;f 14=0;1h(i=0;i<t;i++){4I=(i%2)==0?S:R;f 1H=(v*(14));f 1I=(4I)?-h.g.O:h.g.O;f 2g=(v*(14));f 1G=(4I)?0:(A);f 17=-(v*14);f Y=(4I)?0:-(A);f G=93*14;f n=c.1x();n.w({r:1H,s:1I,C:v,H:A});n.j(\'P\').w({r:17+(v/1.5),s:Y}).1b(G).I({r:17,s:Y},(F*1.9),\'1M\');c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.T().1b(G).I({s:1G,r:2g},F,L,Q);l((i%2)!=0)14++}},7c:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'3c\':c.g.N;f F=3U/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f v=E.M(c.g.B/t);f A=(c.g.O);1h(i=0;i<t;i++){f 1H=(v*(i));f 1I=0;f 2g=(v*(i));f 1G=0;f 17=-(v*(i));f Y=0;f G=1v*i;f n=c.1x();n.w({r:1H,s:1I,C:v,H:A});n.j(\'P\').w({r:17+(v/1.5),s:Y}).1b(G).I({r:17,s:Y},(F*1.1),\'3d\');c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({s:1G,r:2g,V:\'T\'},F,L,Q)}},7d:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'4D\':c.g.N;f F=1S/c.g.1f;c.1l();f t=E.M(c.g.B/(c.g.B/10));f 1A=1v;f 1D=E.5s(E.3B((c.g.B),2)+E.3B((c.g.O),2));f 1D=E.M(1D);1h(i=0;i<t;i++){f 1H=(h.g.B/2)-(1A/2);f 1I=(h.g.O/2)-(1A/2);f 2g=1H;f 1G=1I;f n=1w;n=c.4J({1K:h.g.1s,r:1H,s:1I,C:1A,H:1A,2B:{s:-1I,r:-1H}}).3W({\'4K-1D\':1D+\'11\'});1A+=1v;c.1d(n);f G=70*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({s:1G,r:2g,V:\'T\'},F,L,Q)}},7e:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'4D\':c.g.N;f F=1S/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f t=E.M(c.g.B/(c.g.B/10));f 1D=E.5s(E.3B((c.g.B),2)+E.3B((c.g.O),2));f 1D=E.M(1D);f 1A=1D;1h(i=0;i<t;i++){f 1H=(h.g.B/2)-(1A/2);f 1I=(h.g.O/2)-(1A/2);f 2g=1H;f 1G=1I;f n=1w;n=c.4J({1K:1i,r:1H,s:1I,C:1A,H:1A,2B:{s:-1I,r:-1H}}).3W({\'4K-1D\':1D+\'11\'});1A-=1v;c.1d(n);n.T();f G=70*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({s:1G,r:2g,V:\'1q\'},F,L,Q)}},7f:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=1S/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f t=E.M(c.g.B/(c.g.B/10));f 1D=E.5s(E.3B((c.g.B),2)+E.3B((c.g.O),2));f 1D=E.M(1D);f 1A=1D;1h(i=0;i<t;i++){f 1H=(h.g.B/2)-(1A/2);f 1I=(h.g.O/2)-(1A/2);f 2g=1H;f 1G=1I;f n=1w;l($.94.95){n=c.1U(1i);n.w({r:1H,s:1I,C:1A,H:1A}).3W({\'4K-1D\':1D+\'11\'});n.j(\'P\').w({r:-1H,s:-1I})}13{n=c.4J({1K:1i,r:1H,s:1I,C:1A,H:1A,2B:{s:-1I,r:-1H}}).3W({\'4K-1D\':1D+\'11\'})}1A-=1v;c.1d(n);n.T();f G=1v*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';f 7s=(i%2==0)?\'7t\':\'-7t\';n.1b(G).I({s:1G,r:2g,V:\'1q\',2h:7s},F,L,Q)}},7g:q(D){f h=c;c.g.19=S;f L=(c.g.N==\'\')?\'1M\':c.g.N;f F=2u/c.g.1f;c.1l();f 1t=E.M(c.g.B/(c.g.B/8));f 1j=E.M(c.g.O/(c.g.O/4));f t=1t*1j;f v=E.M(c.g.B/1t);f A=E.M(c.g.O/1j);f 96=R;f Y=0;f 17=0;f 3X=0;f 14=0;1h(i=0;i<t;i++){Y=A*3X;17=v*14;f G=30*(i);f n=c.1x();n.w({r:17,s:Y,C:v,H:A}).1q();n.j(\'P\').w({r:-17,s:-Y});c.1d(n);f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({C:\'T\',H:\'T\'},F,L,Q);3X++;l(3X==1j){3X=0;14++}}},5n:q(D){f h=c;f D=$.1P({},{2v:\'s\'},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'3d\':c.g.N;f F=2u/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f t=12;f v=E.M(c.g.B/t);f A=c.g.O;f 1G=(D.2v==\'s\')?-A:A;1h(i=0;i<t;i++){f 1c=0;f 18=(v*i);f 1r=0;f 1o=-(v*i);f n=c.1U(1i);n.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});n.j(\'P\').w({r:1o,s:1r});c.1d(n);n.T();f G=70*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({s:1G},F,L,Q)}},7h:q(D){f h=c;f D=$.1P({},{1n:R},D||{});c.g.19=S;f L=(c.g.N==\'\')?\'5t\':c.g.N;f F=3U/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});f 1t=E.M(c.g.B/(c.g.B/10));f t=1t;f v=E.M(c.g.B/1t);f A=c.g.O;1h(i=0;i<t;i++){f 1c=0;f 18=v*i;f 1r=0;f 1o=-(v*i);f 2g=\'+=\'+v;f n=c.1U(1i);n.w({r:0,s:0,C:v,H:A});n.j(\'P\').w({r:1o,s:1r});f 3Y=c.1U(1i);3Y.w({r:18+\'11\',s:1c+\'11\',C:v,H:A});3Y.34(n);c.1d(3Y);n.T();3Y.T();f G=50*i;f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({r:2g},F,L,Q)}},5o:q(D){f h=c;f D=$.1P({},{2v:\'s\',4E:\'4F\',t:7,L:\'5t\'},D||{});c.g.19=S;f L=(c.g.N==\'\')?D.L:c.g.N;f F=1S/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.1a\').1q();f t=D.t;1h(i=0;i<t;i++){f v=E.M(c.g.B/t);f A=c.g.O;f 1Z=0;f 1C=(v*i);f 3v=-A;f 2U=1C+v;f 3w=A;f 3x=1C;f 3y=0;f 3z=1C;f 1r=0;f 1o=-1C;2D(D.4E){J\'7q\':3a:f G=(i%2==0)?0:5q;K;J\'1n\':f G=30*(E.1n()*30);K;J\'4F\':f G=i*1v;K}f n=c.1U(1i);n.j(\'P\').w({r:1o,s:0});n.w({s:0,r:0,C:v,H:A});f 2f=c.1x();2f.j(\'P\').w({r:1o,s:0});2f.w({s:0,r:-v,C:v,H:A});f 3Z=c.1x();3Z.34(\'\').1F(n).1F(2f);3Z.w({s:0,r:1C,C:v,H:A});c.1d(3Z);3Z.T();n.T();2f.T();f Q=(i==(t-1))?q(){h.1k()}:\'\';n.1b(G).I({r:v},F,L);2f.1b(G).I({r:0},F,L,Q)}},7i:q(D){f h=c;f D=$.1P({},{2H:\'3d\',2I:\'1M\'},D||{});c.g.19=S;f 2H=(c.g.N==\'\')?D.2H:c.g.N;f 2I=(c.g.N==\'\')?D.2I:c.g.N;f F=7o/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.1a\').1q();f t=2;f v=c.g.B;f A=E.M(c.g.O/t);f 21=c.1U(1i),22=c.1U(1i);21.j(\'P\').w({r:0,s:0});21.w({s:0,r:0,C:v,H:A});22.j(\'P\').w({r:0,s:-A});22.w({s:A,r:0,C:v,H:A});f 2i=c.1x(),2j=c.1x();2i.j(\'P\').w({r:0,s:A});2i.w({s:0,r:0,C:v,H:A});2j.j(\'P\').w({r:0,s:-(A*t)});2j.w({s:A,r:0,C:v,H:A});c.1d(2i);c.1d(2j);c.1d(21);c.1d(22);21.T();22.T();2i.T();2j.T();f Q=q(){h.1k()};21.j(\'P\').I({s:A},F,2H,q(){21.28()});22.j(\'P\').I({s:-(A*t)},F,2H,q(){22.28()});2i.j(\'P\').I({s:0},F,2I);2j.j(\'P\').I({s:-A},F,2I,Q)},7j:q(D){f h=c;f D=$.1P({},{2H:\'4G\',2I:\'4G\'},D||{});c.g.19=S;f 2H=(c.g.N==\'\')?D.2H:c.g.N;f 2I=(c.g.N==\'\')?D.2I:c.g.N;f F=97/c.g.1f;f 1i=c.k.j(\'.1a\').U(\'W\');c.1l();c.1Y();c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.1a\').1q();f t=2;f v=c.g.B;f A=E.M(c.g.O/t);f 21=c.1U(1i),22=c.1U(1i);21.j(\'P\').w({r:0,s:0});21.w({s:0,r:0,C:v,H:A});22.j(\'P\').w({r:0,s:-A});22.w({s:A,r:0,C:v,H:A});f 2i=c.1x(),2j=c.1x();2i.j(\'P\').w({r:0,s:0});2i.w({s:0,r:v,C:v,H:A});2j.j(\'P\').w({r:0,s:-A});2j.w({s:A,r:-v,C:v,H:A});c.1d(2i);c.1d(2j);c.1d(21);c.1d(22);21.T();22.T();2i.T();2j.T();f Q=q(){h.1k()};21.I({r:-v},F,2H,q(){21.28()});22.I({r:v},F,2H,q(){22.28()});2i.I({r:0},F,2I);2j.I({r:0},F,2I,Q)},1k:q(D){f h=c;c.k.j(\'.1a\').T();c.5f();c.g.19=R;c.k.j(\'.1a\').U({\'W\':c.g.1s});c.k.j(\'.1K a\').U({\'1O\':c.g.1N});l(!c.g.2X&&!c.g.2A&&!c.g.3k){c.31=3R(q(){h.41()},c.g.2L)}h.3P()},41:q(){c.2F(S);c.k.j(\'.n\').28();l(!c.g.2A&&!c.g.3k)c.4C()},1l:q(){l($.6l(c.g.4X))c.g.4X(c.g.1y,c);c.7u();c.7v();c.7w();c.7x()},7u:q(){f 7y=c.g.1m[c.g.1y][0];f 7z=c.g.1m[c.g.1y][1];f 7A=c.g.1m[c.g.1y][3];f 7B=c.g.1m[c.g.1y][4];c.g.1s=7y;c.g.1N=7z;c.g.3f=7A;c.g.3g=7B},7v:q(){f h=c;c.k.j(\'.33\').5c(\'33\');$(\'#57\'+(c.g.1y+1)+\'58\'+h.2P).3n(\'33\')},7x:q(){c.g.1y++;l(c.g.1y==c.g.1m.1z){c.g.1y=0}},1x:q(){l(c.g.1N!=\'#\'){f 1V=$(\'<a 1O="\'+c.g.1N+\'"><P W="\'+c.g.1s+\'" /></a>\');1V.U({\'26\':c.g.3g})}13{f 1V=$(\'<P W="\'+c.g.1s+\'" />\')}1V=c.4B(1V);f n=$(\'<1p 1u="n"></1p>\');n.1F(1V);Z n},1U:q(1i){l(c.g.1N!=\'#\'){f 1V=$(\'<a 1O="\'+c.g.1N+\'"><P W="\'+1i+\'" /></a>\');1V.U({\'26\':c.g.3g})}13{f 1V=$(\'<P W="\'+1i+\'" />\')}1V=c.4B(1V);f n=$(\'<1p 1u="n"></1p>\');n.1F(1V);Z n},4B:q(1V){l(c.g.4e){1V.j(\'P\').H(c.g.O)}Z 1V},1d:q(n){c.k.j(\'.4k\').1F(n)},5W:q(L){f 7C=[\'4D\',\'1M\',\'3d\',\'99\',\'9a\',\'9b\',\'9c\',\'9d\',\'9e\',\'9f\',\'9g\',\'9h\',\'9i\',\'6a\',\'9j\',\'9k\',\'3c\',\'4G\',\'9l\',\'5t\',\'9m\',\'9n\',\'7n\',\'9o\',\'7k\',\'5p\',\'9p\',\'9q\',\'9r\',\'9s\',];l(4L.9t(L,7C)>0){Z L}13{Z\'\'}},3V:q(i){Z E.6m(E.1n()*i)},3Q:q(){c.k.j(\'.2t\').34(c.g.3f)},5f:q(){f h=c;l(c.g.3f!=1W&&c.g.3f!=\'\'&&h.g.2z){2D(h.g.4i){J\'4j\':3a:h.k.j(\'.2t\').9u(2u);K;J\'r\':J\'2d\':h.k.j(\'.2t\').I({r:0},2u,\'3d\');K;J\'7D\':K}}},7w:q(){f h=c;2D(h.g.4i){J\'4j\':3a:c.k.j(\'.2t\').4j(1L,q(){h.3Q()});K;J\'r\':J\'2d\':f 2w=(h.g.4i==\'r\')?-(h.k.j(\'.2t\').C()):(h.k.j(\'.2t\').C());h.k.j(\'.2t\').I({r:2w},2u,\'3d\',q(){h.3Q()});K;J\'7D\':h.3Q();K}},6k:q(){f h=c;l(h.g.2Z){h.k.3s(q(){l(h.g.2Z)h.g.2X=S;l(!h.g.3l){h.4M()}h.42(\'3s\');h.2F(S)},q(){l(h.g.2Z)h.g.2X=R;l(h.g.2b==0&&!h.g.19&&!h.g.2A){h.3P()}13 l(!h.g.2A){h.44()}h.42(\'7E\');h.2F(S);l(!h.g.19&&h.g.1m.1z>1){h.31=3R(q(){h.41()},h.g.2L-h.g.2b);h.k.j(\'.1a\').U({\'W\':h.g.1s});h.k.j(\'.1K a\').U({\'1O\':h.g.1N})}})}13{h.k.3s(q(){h.42(\'3s\')},q(){h.42(\'7E\')})}},42:q(4q){f h=c;f 2q=h.g.2q;f 2a=h.g.2a;f 2r=h.g.2r;l(4q==\'3s\'){l(h.g.2p){l(h.g.48){h.k.j(\'.1B\').T().w({V:0}).I({V:2q},2a)}l(h.g.49){h.k.j(\'.2c, .23\').T().w({V:0}).I({V:2q},2a)}l(h.g.2M&&!h.g.2R){h.k.j(\'.29\').1R().T().w({V:0}).I({V:2q},2a)}l(h.g.2Y){h.k.j(\'.2x\').1R().T().w({V:0}).I({V:2q},2a)}}l(h.g.2M&&!h.g.2R&&!h.g.2p){h.k.j(\'.29\').1R().I({V:1},2a)}l(h.g.2Y&&!h.g.2p){h.k.j(\'.2x\').1R().I({V:1},2a)}}13{l(h.g.2p){l(h.g.48){h.k.j(\'.1B\').3N("2k",[]).T().w({V:2q}).I({V:0},2r)}l(h.g.49){h.k.j(\'.2c, .23\').3N("2k",[]).T().w({V:2q}).I({V:0},2r)}l(h.g.2M&&!h.g.2R){h.k.j(\'.29\').1R().w({V:2q}).I({V:0},2r)}l(h.g.2Y){h.k.j(\'.2x\').1R().w({V:2q}).I({V:0},2r)}}l(h.g.2M&&!h.g.2R&&!h.g.2p){h.k.j(\'.29\').1R().I({V:0.3},2r)}l(h.g.2Y&&!h.g.2p){h.k.j(\'.2x\').1R().I({V:0.3},2r)}}},2F:q(9v){f h=c;9w(h.31)},1Y:q(){l(c.g.1N!=\'#\'&&c.g.1N!=\'\'){c.k.j(\'.1K a\').U({\'1O\':c.g.1N,\'26\':c.g.3g})}13{c.k.j(\'.1K a\').9x(\'1O\')}},2p:q(){c.k.j(\'.1B\').1T(0,0);c.k.j(\'.2c\').1T(0,0);c.k.j(\'.23\').1T(0,0);c.k.j(\'.29\').1T(0,0);c.k.j(\'.2x\').1T(0,0)},6b:q(){f h=c;f 29=$(\'<a 1O="#" 1u="29">2M</a>\');h.k.1F(29);f 2w=(h.g.B-29.C())/2;f 3C=0;l(h.g.2Y)2w-=25;l(h.g.51==h.g.4Z)3C=29.C()+5;f 2l={r:2w};2D(h.g.4Z){J\'7F\':2l={r:5+3C,s:30};K;J\'7G\':2l={2d:5+3C,s:30};K;J\'7H\':2l={r:5+3C,3b:5,s:\'36\'};K;J\'7I\':2l={2d:5+3C,3b:5,s:\'36\'};K}29.w(2l).I({V:0.3},h.g.2a);$(5u).9y(q(e){f 7J=(e.3D?e.3D:e.9z);l(7J==27)$(\'#4N\').5v(\'2O\')});f 5w=$(\'.k\').3r().s;f 2w=$(\'.k\').3r().r;h.k.j(\'.29\').2O(q(){l(h.g.2R)Z R;h.g.2R=S;$(c).1R().I({V:0},h.g.2r);f 1p=$(\'<1p 4p="4N"></1p>\').H($(5u).H()).1q().1T(h.g.2a,0.98);f 7K=(($(32).H()-$(\'.k\').H())/2)+$(5u).9A();f 7L=($(32).C()-$(\'.k\').C())/2;h.k.7M(\'<1p 4p="4O"></1p>\');$(\'55\').7N(1p);$(\'55\').7N(h.k);h.k.w({\'s\':5w,\'r\':2w,\'2B\':\'54\',\'z-5S\':9B}).I({\'s\':7K,\'r\':7L},9C,\'3c\');$(\'#4O\').C($(\'.k\').C()).H($(\'.k\').H()).w({\'4z\':\'4P\'}).1T(2Q,0.3);Z R});$(\'#4N\').9D(\'2O\',q(){l($(c).9E(\'7O\'))Z R;h.g.2R=R;$(c).3n(\'7O\');l(!h.g.2p)h.k.j(\'.29\').I({V:0.3},1L);h.k.1R().I({\'s\':5w,\'r\':2w},1L,\'3c\',q(){$(\'#4O\').7M(h.k);$(c).w({\'2B\':\'9F\',\'s\':0,\'r\':0});$(\'#4O\').28()});$(\'#4N\').1T(h.g.2r,0,q(){$(c).28()});Z R})},6c:q(){f h=c;f 2x=$(\'<a 1O="#" 1u="2x">7P</a>\');h.k.1F(2x);f 2w=(h.g.B-2x.C())/2;l(h.g.2M)2w+=25;f 2l={r:2w};2D(h.g.51){J\'7F\':2l={r:5,s:30};K;J\'7G\':2l={2d:5,s:30};K;J\'7H\':2l={r:5,3b:5,s:\'36\'};K;J\'7I\':2l={2d:5,3b:5,s:\'36\'};K}2x.w(2l).I({V:0.3},h.g.2a);2x.2O(q(){l(!h.g.2A){$(c).34(\'9G\');$(c).1T(1v,0.5).1T(1v,1);$(c).3n(\'7Q\');h.4M();h.g.2A=S;h.2F(S)}13{l(!h.g.19&&!h.k.j(\'.1E\').5V(\':9H\')){h.g.2b=0}13{h.44()}l(!h.g.1E)h.44();h.g.2A=R;$(c).34(\'7P\');$(c).1T(1v,0.5).1T(1v,1);$(c).5c(\'7Q\');l(!h.g.2Z){h.2F(S);l(!h.g.19&&h.g.1m.1z>1){h.31=3R(q(){h.41()},h.g.2L-h.g.2b);h.k.j(\'.1a\').U({\'W\':h.g.1s});h.k.j(\'.1K a\').U({\'1O\':h.g.1N})}}}Z R})},5x:q(3L){f 4l=0,5y;1h(5y 7R 3L){l(3L.9I(5y))4l++}Z 4l},6d:q(){f h=c;f 1E=$(\'<1p 1u="1E"></1p>\');h.k.1F(1E);l(h.5x(h.g.2s)==0){l(3t(1E.w(\'C\'))>0){h.g.2s.C=3t(1E.w(\'C\'))}13{h.g.2s={C:h.g.B,H:5}}}l(h.5x(h.g.2s)>0&&h.g.2s.C==1W){h.g.2s.C=h.g.B}1E.w(h.g.2s).1q()},7S:q(){f h=c;l(h.g.2X||h.g.2A||h.g.3k||!h.g.1E)Z R;h.k.j(\'.1E\').1q().7T().C(h.g.2s.C).I({C:\'T\'},h.g.2L,\'7U\')},5h:q(){f h=c;l(!h.g.19){h.k.j(\'.1E\').1R()}},7V:q(){f h=c;l(h.g.2X||h.g.2A||!h.g.1E)Z R;h.k.j(\'.1E\').7T().I({C:h.g.2s.C},(h.g.2L-h.g.2b),\'7U\')},6W:q(){f h=c;l(!h.g.1E)Z R;h.k.j(\'.1E\').1R().9J(2Q,q(){$(c).C(h.g.2s.C)})},3P:q(){f h=c;h.g.3l=R;f 3E=2K 5z();h.g.2b=0;h.g.4g=3E.5A();h.7S()},4M:q(){f h=c;l(h.g.3l)Z R;h.g.3l=S;f 3E=2K 5z();h.g.2b+=3E.5A()-h.g.4g;h.5h()},44:q(){f h=c;h.g.3l=R;f 3E=2K 5z();h.g.4g=3E.5A();h.7V()},6e:q(){f h=c;$(32).9K(q(e){l(e.3D==39||e.3D==40){h.k.j(\'.23\').5v(\'2O\')}13 l(e.3D==37||e.3D==38){h.k.j(\'.2c\').5v(\'2O\')}})},4J:q(D){f n=$(\'<1p 1u="n"></1p>\');n.w({\'r\':D.r,\'s\':D.s,\'C\':D.C,\'H\':D.H,\'4z-1K\':\'5X(\'+D.1K+\')\',\'4z-2B\':D.2B.r+\'11 \'+D.2B.s+\'11\'});Z n},7r:q(45){f h=c;f 4Q=2K 4n();f 4R;5B(45.1z>0){4R=h.7W(0,45.1z-1);4Q[4Q.1z]=45[4R];45.9L(4R,1)}Z 4Q},7W:q(5C,7X){f 4S;9M 4S=E.1n();5B(4S==1);Z(4S*(7X-5C+1)+5C)|0},6j:q(){f h=c;$(32).4u(\'9N\',q(){h.g.3k=S;h.4M();h.2F(S)});$(32).4u(\'2M\',q(){l(h.g.1m.1z>1){h.g.3k=R;l(h.g.2b==0){h.3P()}13{h.44()}l(h.g.2b<=h.g.2L){h.2F(S);h.31=3R(q(){h.41()},h.g.2L-h.g.2b);h.k.j(\'.1a\').U({\'W\':h.g.1s});h.k.j(\'.1K a\').U({\'1O\':h.g.1N})}}})}});$.2o.3W=q(3F){f w={};f 5D=[\'9O\',\'9P\',\'o\',\'9Q\'];1h(f 2y 7R 3F){1h(f i=0;i<5D.1z;i++)w[\'-\'+5D[i]+\'-\'+2y]=3F[2y];w[2y]=3F[2y]}c.w(w);Z c};f 46=\'9R\';$.2o.2h=q(2V){f 2e=$(c).w(\'1J\')||\'4P\';l(2m 2V==\'1W\'){l(2e){f m=2e.4T(/2h\\(([^)]+)\\)/);l(m&&m[1]){Z m[1]}}Z 0}f m=2V.7Y().4T(/^(-?\\d+(\\.\\d+)?)(.+)?$/);l(m){l(m[3])46=m[3];$(c).w(\'1J\',2e.7Z(/4P|2h\\([^)]*\\)/,\'\')+\'2h(\'+m[1]+46+\')\')}Z c};$.2o.2W=q(2V,4x,D){f 2e=$(c).w(\'1J\');l(2m 2V==\'1W\'){l(2e){f m=2e.4T(/2W\\(([^)]+)\\)/);l(m&&m[1]){Z m[1]}}Z 1}$(c).w(\'1J\',2e.7Z(/4P|2W\\([^)]*\\)/,\'\')+\'2W(\'+2V+\')\');Z c};f 81=$.2k.53.82;$.2k.53.82=q(){l(c.2y==\'2h\'){Z 3m($(c.4U).2h())}13 l(c.2y==\'2W\'){Z 3m($(c.4U).2W())}Z 81.5E(c,5F)};$.2k.83.2h=q(2k){$(2k.4U).2h(2k.84+46)};$.2k.83.2W=q(2k){$(2k.4U).2W(2k.84)};f 85=$.2o.I;$.2o.I=q(2y){l(2m 2y[\'2h\']!=\'1W\'){f m=2y[\'2h\'].7Y().4T(/^(([+-]=)?(-?\\d+(\\.\\d+)?))(.+)?$/);l(m&&m[5]){46=m[5]}2y[\'2h\']=m[1]}Z 85.5E(c,5F)};q 86(87){f 88=[\'1J\',\'9S\',\'9T\',\'9U\',\'9V\'];f p;5B(p=88.9W()){l(2m 87.2e[p]!=\'1W\'){Z p}}Z\'1J\'};f 2J=1w;f 89=$.2o.w;$.2o.w=q(2n,2V){l(2J===1w){l(2m $.8a!=\'1W\'){2J=$.8a}13 l(2m $.3F!=\'1W\'){2J=$.3F}13{2J={}}}l(2m 2J[\'1J\']==\'1W\'&&(2n==\'1J\'||(2m 2n==\'8b\'&&2m 2n[\'1J\']!=\'1W\'))){2J[\'1J\']=86(c.8c(0))}l(2J[\'1J\']!=\'1J\'){l(2n==\'1J\'){2n=2J[\'1J\'];l(2m 2V==\'1W\'&&4L.2e){Z 4L.2e(c.8c(0),2n)}}13 l(2m 2n==\'8b\'&&2m 2n[\'1J\']!=\'1W\'){2n[2J[\'1J\']]=2n[\'1J\'];9X 2n[\'1J\']}}Z 89.5E(c,5F)}})(4L);', 62, 618, '||||||||||||this|||var|settings|self||find|box_skitter|if||box_clone|||function|left|top|total||width_box|css||||height_box|width_skitter|width|options|Math|time_animate|delay_time|height|animate|case|break|easing|ceil|easing_default|height_skitter|img|callback|false|true|show|attr|opacity|src|col_t|_btop|return||px||else|col|||_bleft|_vleft|is_animating|image_main|delay|_vtop|addBoxClone|init_top|velocity|init_left|for|image_old|division_h|finishAnimation|setActualLevel|images_links|random|_vleft_image|div|hide|_vtop_image|image_atual|division_w|class|100|null|getBoxClone|image_i|length|size_box|info_slide|_ileftc|radius|progressbar|append|_ftop|_ileft|_itop|transform|image|200|easeOutQuad|link_atual|href|extend|class_info|stop|500|fadeTo|getBoxCloneImgOld|img_clone|undefined|image_number|setLinkAtual|_itopc||box_clone1|box_clone2|next_button|animation_type||target||remove|focus_button|interval_in_elements|elapsedTime|prev_button|right|style|box_clone_next|_fleft|rotate|box_clone_next1|box_clone_next2|fx|cssPosition|typeof|arg|fn|hideTools|opacity_elements|interval_out_elements|progressbar_css|label_skitter|400|direction|_left|play_pause_button|prop|label|is_paused|position|ul|switch|loading|clearTimer|100px|easing_old|easing_new|_propsObj|new|interval|focus|info_slide_thumb|click|number_skitter|300|foucs_active|span|link|_fleftc|val|scale|is_hover_box_skitter|controls|stop_over||timer|window|image_number_select|html|new_x|auto||||default|bottom|easeOutExpo|easeInOutQuad|sk|label_atual|target_atual|animateNumberOut|xml|preview|is_blur|is_paused_time|parseFloat|addClass|rel|text|li|offset|hover|parseInt|_i_animation|_ftopc|_itopn|_ileftn|_ftopn|_fleftn|spread|pow|_space|keyCode|date|props|skitter|each|dots|width_label|auto_play|obj|w_info_slide_thumb|queue|fadeIn|startTime|setValueBoxText|setTimeout|animations_functions|animationDirection|700|getRandom|css3|line|box_clone_main|box_clone_container||completeMove|setHideTools||resumeTime|arrayOrigem|rotateUnits|animation|numbers|navigation|random_ia|thumbs|animateNumberOver|animateNumberActive|fullscreen|center|timeStart|with_animations|labelAnimation|slideUp|container_skitter|size|initial_select_class|Array|dimension_thumb|id|type|width_info_slide|width_value|jumpToImage|bind|imageNumber|preview_slide|duration|image_loading|background|img_link|resizeImage|nextImage|easeInQuad|delay_type|sequence|easeInOutExpo|order|mod|getBoxCloneBackground|border|jQuery|pauseTime|overlay_skitter|mark_position|none|arrayDestino|indice|numRandom|match|elem|_self|onLoad|imageSwitched|numbers_align|focus_position||controls_position|theme|prototype|absolute|body|addImageLink|image_n_|_|width_image|x_value|info_slide_dots|removeClass|mouseover|init_pause|showBoxText|mouseOverInit|pauseProgressBar|animationCube|animationCubeStop|animationShowBars|animationTube|animationBlindDimension|animationDirectionBars|animationSwapBars|easeOutBack|150|vleft|sqrt|easeOutCirc|document|trigger|_top|objectSize|key|Date|getTime|while|valorIni|prefixes|apply|arguments|skitters|data|skitter_number|push|defaults|show_randomly|enable_navigation_keys|mouseOverButton|mouseOutButton|structure|number|setup|index|1000|or|is|getEasing|url|container_thumbs|copy_info_slide|y_value|novo_width|15px|sort|mouseleave|width_preview_ul|_left_info|_left_image|_left_preview|_left_ul|easeOutSine|focusSkitter|setControls|addProgressBar|enableNavigationKeys|loadImages|self_il|start|images|windowFocusOut|stopOnMouseOver|isFunction|floor|cube|cubeRandom|block|cubeStop|cubeStopRandom|cubeHide|cubeSize|horizontal|showBars|showBarsRandom|tube|fade|fadeFour|paralell|blind|blindHeight|blindWidth|directionTop|directionBottom|directionRight|directionLeft|cubeSpread|glassCube|glassBlock|circles|circlesInside|circlesRotate|cubeShow|upBars|downBars|hideBars|swapBars|swapBarsBack|swapBlocks|cut|hideProgressBar|random_id|total_with_animations|animationBlock||animationCubeHide|animationCubeSize|animationHorizontal|animationFade||animationFadeFour|animationParalell|animationBlind|animationCubeSpread|animationCubeJelly|animationGlassCube|animationGlassBlock|animationCircles|animationCirclesInside|animationCirclesRotate|animationCubeShow|animationHideBars|animationSwapBlocks|animationCut|easeInBack|20px|600|easeOutElastic|800|1400|zebra|shuffleArray|_rotate|20deg|setImageLink|addClassNumber|hideBoxText|increasingImage|name_image|link_image|label_image|target_link|easing_accepts|fixed|out|leftTop|rightTop|leftBottom|rightBottom|code|_topFinal|_leftFinal|before|prepend|finish_overlay_skitter|pause|play_button|in|startProgressBar|dequeue|linear|resumeProgressBar|randomUnique|valorFim|toString|replace||curProxied|cur|step|now|animateProxied|getTransformProperty|element|properties|proxied|cssProps|object|get|2500|time_interval|max_number_height|prev|next|overflown|hidden|console|warn|Width|Skitter|Slideshow|ajax|GET|async|dataType|success|slide|json|label_text|clone|outerWidth|mousemove|pageX|pageY|scroll_thumbs|box_scroll_thumbs|5px|0px|eq|mouseenter|image_current_preview|preview_slide_current|Loading|9999em|Image|load|error|color|white|black|Error|One|more|were|not|found|1500|randomSmart||cubeJelly|1200|120|browser|mozilla|last|900||easeInCubic|easeOutCubic|easeInOutCubic|easeInQuart|easeOutQuart|easeInOutQuart|easeInQuint|easeOutQuint|easeInOutQuint|easeInSine|easeInOutSine|easeInExpo|easeInCirc|easeInOutCirc|easeInElastic|easeInOutElastic|easeInOutBack|easeInBounce|easeOutBounce|easeInOutBounce|inArray|slideDown|force|clearInterval|removeAttr|keypress|which|scrollTop|9999|2000|live|hasClass|relative|play|visible|hasOwnProperty|fadeOut|keydown|splice|do|blur|moz|ms|webkit|deg|WebkitTransform|msTransform|MozTransform|OTransform|shift|delete'.split('|'), 0, {}));

(function (g) {
    var q = {
            vertical: !1,
            rtl: !1,
            start: 1,
            offset: 1,
            size: null,
            scroll: 3,
            visible: null,
            animation: "normal",
            easing: "swing",
            auto: 0,
            wrap: null,
            initCallback: null,
            setupCallback: null,
            reloadCallback: null,
            itemLoadCallback: null,
            itemFirstInCallback: null,
            itemFirstOutCallback: null,
            itemLastInCallback: null,
            itemLastOutCallback: null,
            itemVisibleInCallback: null,
            itemVisibleOutCallback: null,
            animationStepCallback: null,
            buttonNextHTML: "<div></div>",
            buttonPrevHTML: "<div></div>",
            buttonNextEvent: "click",
            buttonPrevEvent: "click",
            buttonNextCallback: null,
            buttonPrevCallback: null,
            itemFallbackDimension: null
        },
        m = !1;
    g(window)
        .bind("load.jcarousel", function () {
            m = !0
        });
    g.jcarousel = function (a, c) {
        this.options = g.extend({}, q, c || {});
        this.autoStopped = this.locked = !1;
        this.buttonPrevState = this.buttonNextState = this.buttonPrev = this.buttonNext = this.list = this.clip = this.container = null;
        if (!c || c.rtl === void 0) this.options.rtl = (g(a)
                .attr("dir") || g("html")
                .attr("dir") || "")
            .toLowerCase() == "rtl";
        this.wh = !this.options.vertical ? "width" : "height";
        this.lt = !this.options.vertical ? this.options.rtl ? "right" : "left" : "top";
        for (var b = "", d = a.className.split(" "), f = 0; f < d.length; f++)
            if (d[f].indexOf("jcarousel-skin") != -1) {
                g(a)
                    .removeClass(d[f]);
                b = d[f];
                break
            }
        a.nodeName.toUpperCase() == "UL" || a.nodeName.toUpperCase() == "OL" ? (this.list = g(a), this.clip = this.list.parents(".jcarousel-clip"), this.container = this.list.parents(".jcarousel-container")) : (this.container = g(a), this.list = this.container.find("ul,ol")
            .eq(0), this.clip = this.container.find(".jcarousel-clip"));
        if (this.clip.size() === 0) this.clip = this.list.wrap("<div></div>")
            .parent();
        if (this.container.size() === 0) this.container = this.clip.wrap("<div></div>")
            .parent();
        b !== "" && this.container.parent()[0].className.indexOf("jcarousel-skin") == -1 && this.container.wrap('<div class=" ' + b + '"></div>');
        this.buttonPrev = g(".jcarousel-prev", this.container);
        if (this.buttonPrev.size() === 0 && this.options.buttonPrevHTML !== null) this.buttonPrev = g(this.options.buttonPrevHTML)
            .appendTo(this.container);
        this.buttonPrev.addClass(this.className("jcarousel-prev"));
        this.buttonNext = g(".jcarousel-next", this.container);
        if (this.buttonNext.size() === 0 && this.options.buttonNextHTML !== null) this.buttonNext = g(this.options.buttonNextHTML)
            .appendTo(this.container);
        this.buttonNext.addClass(this.className("jcarousel-next"));
        this.clip.addClass(this.className("jcarousel-clip"))
            .css({
                position: "relative"
            });
        this.list.addClass(this.className("jcarousel-list"))
            .css({
                overflow: "hidden",
                position: "relative",
                top: 0,
                margin: 0,
                padding: 0
            })
            .css(this.options.rtl ? "right" : "left", 0);
        this.container.addClass(this.className("jcarousel-container"))
            .css({
                position: "relative"
            });
        !this.options.vertical && this.options.rtl && this.container.addClass("jcarousel-direction-rtl")
            .attr("dir", "rtl");
        var j = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null,
            b = this.list.children("li"),
            e = this;
        if (b.size() > 0) {
            var h = 0,
                i = this.options.offset;
            b.each(function () {
                e.format(this, i++);
                h += e.dimension(this, j)
            });
            this.list.css(this.wh, h + 100 + "px");
            if (!c || c.size === void 0) this.options.size = b.size()
        }
        this.container.css("display", "block");
        this.buttonNext.css("display", "block");
        this.buttonPrev.css("display", "block");
        this.funcNext = function () {
            e.next()
        };
        this.funcPrev = function () {
            e.prev()
        };
        this.funcResize = function () {
            e.resizeTimer && clearTimeout(e.resizeTimer);
            e.resizeTimer = setTimeout(function () {
                e.reload()
            }, 100)
        };
        this.options.initCallback !== null && this.options.initCallback(this, "init");
        !m && g.browser.safari ? (this.buttons(!1, !1), g(window)
            .bind("load.jcarousel", function () {
                e.setup()
            })) : this.setup()
    };
    var f = g.jcarousel;
    f.fn = f.prototype = {
        jcarousel: "0.2.8"
    };
    f.fn.extend = f.extend = g.extend;
    f.fn.extend({
        setup: function () {
            this.prevLast = this.prevFirst = this.last = this.first = null;
            this.animating = !1;
            this.tail = this.resizeTimer = this.timer = null;
            this.inTail = !1;
            if (!this.locked) {
                this.list.css(this.lt, this.pos(this.options.offset) + "px");
                var a = this.pos(this.options.start, !0);
                this.prevFirst = this.prevLast = null;
                this.animate(a, !1);
                g(window)
                    .unbind("resize.jcarousel", this.funcResize)
                    .bind("resize.jcarousel", this.funcResize);
                this.options.setupCallback !== null && this.options.setupCallback(this)
            }
        },
        reset: function () {
            this.list.empty();
            this.list.css(this.lt, "0px");
            this.list.css(this.wh, "10px");
            this.options.initCallback !== null && this.options.initCallback(this, "reset");
            this.setup()
        },
        reload: function () {
            this.tail !== null && this.inTail && this.list.css(this.lt, f.intval(this.list.css(this.lt)) + this.tail);
            this.tail = null;
            this.inTail = !1;
            this.options.reloadCallback !== null && this.options.reloadCallback(this);
            if (this.options.visible !== null) {
                var a = this,
                    c = Math.ceil(this.clipping() / this.options.visible),
                    b = 0,
                    d = 0;
                this.list.children("li")
                    .each(function (f) {
                        b += a.dimension(this, c);
                        f + 1 < a.first && (d = b)
                    });
                this.list.css(this.wh, b + "px");
                this.list.css(this.lt, -d + "px")
            }
            this.scroll(this.first, !1)
        },
        lock: function () {
            this.locked = !0;
            this.buttons()
        },
        unlock: function () {
            this.locked = !1;
            this.buttons()
        },
        size: function (a) {
            if (a !== void 0) this.options.size = a, this.locked || this.buttons();
            return this.options.size
        },
        has: function (a, c) {
            if (c === void 0 || !c) c = a;
            if (this.options.size !== null && c > this.options.size) c = this.options.size;
            for (var b = a; b <= c; b++) {
                var d = this.get(b);
                if (!d.length || d.hasClass("jcarousel-item-placeholder")) return !1
            }
            return !0
        },
        get: function (a) {
            return g(">.jcarousel-item-" + a, this.list)
        },
        add: function (a, c) {
            var b = this.get(a),
                d = 0,
                p = g(c);
            if (b.length === 0)
                for (var j, e = f.intval(a), b = this.create(a);;) {
                    if (j = this.get(--e), e <= 0 || j.length) {
                        e <= 0 ? this.list.prepend(b) : j.after(b);
                        break
                    }
                } else d = this.dimension(b);
            p.get(0)
                .nodeName.toUpperCase() == "LI" ? (b.replaceWith(p), b = p) : b.empty()
                .append(c);
            this.format(b.removeClass(this.className("jcarousel-item-placeholder")), a);
            p = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
            d = this.dimension(b, p) - d;
            a > 0 && a < this.first && this.list.css(this.lt, f.intval(this.list.css(this.lt)) - d + "px");
            this.list.css(this.wh, f.intval(this.list.css(this.wh)) + d + "px");
            return b
        },
        remove: function (a) {
            var c = this.get(a);
            if (c.length && !(a >= this.first && a <= this.last)) {
                var b = this.dimension(c);
                a < this.first && this.list.css(this.lt, f.intval(this.list.css(this.lt)) + b + "px");
                c.remove();
                this.list.css(this.wh, f.intval(this.list.css(this.wh)) - b + "px")
            }
        },
        next: function () {
            this.tail !== null && !this.inTail ? this.scrollTail(!1) : this.scroll((this.options.wrap == "both" || this.options.wrap == "last") && this.options.size !== null && this.last == this.options.size ? 1 : this.first + this.options.scroll)
        },
        prev: function () {
            this.tail !== null && this.inTail ? this.scrollTail(!0) : this.scroll((this.options.wrap == "both" || this.options.wrap == "first") && this.options.size !== null && this.first == 1 ? this.options.size : this.first - this.options.scroll)
        },
        scrollTail: function (a) {
            if (!this.locked && !this.animating && this.tail) {
                this.pauseAuto();
                var c = f.intval(this.list.css(this.lt)),
                    c = !a ? c - this.tail : c + this.tail;
                this.inTail = !a;
                this.prevFirst = this.first;
                this.prevLast = this.last;
                this.animate(c)
            }
        },
        scroll: function (a, c) {
            !this.locked && !this.animating && (this.pauseAuto(), this.animate(this.pos(a), c))
        },
        pos: function (a, c) {
            var b = f.intval(this.list.css(this.lt));
            if (this.locked || this.animating) return b;
            this.options.wrap != "circular" && (a = a < 1 ? 1 : this.options.size && a > this.options.size ? this.options.size : a);
            for (var d = this.first > a, g = this.options.wrap != "circular" && this.first <= 1 ? 1 : this.first, j = d ? this.get(g) : this.get(this.last), e = d ? g : g - 1, h = null, i = 0, k = !1, l = 0; d ? --e >= a : ++e < a;) {
                h = this.get(e);
                k = !h.length;
                if (h.length === 0 && (h = this.create(e)
                        .addClass(this.className("jcarousel-item-placeholder")), j[d ? "before" : "after"](h), this.first !== null && this.options.wrap == "circular" && this.options.size !== null && (e <= 0 || e > this.options.size))) j = this.get(this.index(e)), j.length && (h = this.add(e, j.clone(!0)));
                j = h;
                l = this.dimension(h);
                k && (i += l);
                if (this.first !== null && (this.options.wrap == "circular" || e >= 1 && (this.options.size === null || e <= this.options.size))) b = d ? b + l : b - l
            }
            for (var g = this.clipping(), m = [], o = 0, n = 0, j = this.get(a - 1), e = a; ++o;) {
                h = this.get(e);
                k = !h.length;
                if (h.length === 0) {
                    h = this.create(e)
                        .addClass(this.className("jcarousel-item-placeholder"));
                    if (j.length === 0) this.list.prepend(h);
                    else j[d ? "before" : "after"](h);
                    if (this.first !== null && this.options.wrap == "circular" && this.options.size !== null && (e <= 0 || e > this.options.size)) j = this.get(this.index(e)), j.length && (h = this.add(e, j.clone(!0)))
                }
                j = h;
                l = this.dimension(h);
                if (l === 0) throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");
                this.options.wrap != "circular" && this.options.size !== null && e > this.options.size ? m.push(h) : k && (i += l);
                n += l;
                if (n >= g) break;
                e++
            }
            for (h = 0; h < m.length; h++) m[h].remove();
            i > 0 && (this.list.css(this.wh, this.dimension(this.list) + i + "px"), d && (b -= i, this.list.css(this.lt, f.intval(this.list.css(this.lt)) - i + "px")));
            i = a + o - 1;
            if (this.options.wrap != "circular" && this.options.size && i > this.options.size) i = this.options.size;
            if (e > i) {
                o = 0;
                e = i;
                for (n = 0; ++o;) {
                    h = this.get(e--);
                    if (!h.length) break;
                    n += this.dimension(h);
                    if (n >= g) break
                }
            }
            e = i - o + 1;
            this.options.wrap != "circular" && e < 1 && (e = 1);
            if (this.inTail && d) b += this.tail, this.inTail = !1;
            this.tail = null;
            if (this.options.wrap != "circular" && i == this.options.size && i - o + 1 >= 1 && (d = f.intval(this.get(i)
                    .css(!this.options.vertical ? "marginRight" : "marginBottom")), n - d > g)) this.tail = n - g - d;
            if (c && a === this.options.size && this.tail) b -= this.tail, this.inTail = !0;
            for (; a-- > e;) b += this.dimension(this.get(a));
            this.prevFirst = this.first;
            this.prevLast = this.last;
            this.first = e;
            this.last = i;
            return b
        },
        animate: function (a, c) {
            if (!this.locked && !this.animating) {
                this.animating = !0;
                var b = this,
                    d = function () {
                        b.animating = !1;
                        a === 0 && b.list.css(b.lt, 0);
                        !b.autoStopped && (b.options.wrap == "circular" || b.options.wrap == "both" || b.options.wrap == "last" || b.options.size === null || b.last < b.options.size || b.last == b.options.size && b.tail !== null && !b.inTail) && b.startAuto();
                        b.buttons();
                        b.notify("onAfterAnimation");
                        if (b.options.wrap == "circular" && b.options.size !== null)
                            for (var c = b.prevFirst; c <= b.prevLast; c++) c !== null && !(c >= b.first && c <= b.last) && (c < 1 || c > b.options.size) && b.remove(c)
                    };
                this.notify("onBeforeAnimation");
                if (!this.options.animation || c === !1) this.list.css(this.lt, a + "px"), d();
                else {
                    var f = !this.options.vertical ? this.options.rtl ? {
                            right: a
                        } : {
                            left: a
                        } : {
                            top: a
                        },
                        d = {
                            duration: this.options.animation,
                            easing: this.options.easing,
                            complete: d
                        };
                    if (g.isFunction(this.options.animationStepCallback)) d.step = this.options.animationStepCallback;
                    this.list.animate(f, d)
                }
            }
        },
        startAuto: function (a) {
            if (a !== void 0) this.options.auto = a;
            if (this.options.auto === 0) return this.stopAuto();
            if (this.timer === null) {
                this.autoStopped = !1;
                var c = this;
                this.timer = window.setTimeout(function () {
                    c.next()
                }, this.options.auto * 1E3)
            }
        },
        stopAuto: function () {
            this.pauseAuto();
            this.autoStopped = !0
        },
        pauseAuto: function () {
            if (this.timer !== null) window.clearTimeout(this.timer), this.timer = null
        },
        buttons: function (a, c) {
            if (a == null && (a = !this.locked && this.options.size !== 0 && (this.options.wrap && this.options.wrap != "first" || this.options.size === null || this.last < this.options.size), !this.locked && (!this.options.wrap || this.options.wrap == "first") && this.options.size !== null && this.last >= this.options.size)) a = this.tail !== null && !this.inTail;
            if (c == null && (c = !this.locked && this.options.size !== 0 && (this.options.wrap && this.options.wrap != "last" || this.first > 1), !this.locked && (!this.options.wrap || this.options.wrap == "last") && this.options.size !== null && this.first == 1)) c = this.tail !== null && this.inTail;
            var b = this;
            this.buttonNext.size() > 0 ? (this.buttonNext.unbind(this.options.buttonNextEvent + ".jcarousel", this.funcNext), a && this.buttonNext.bind(this.options.buttonNextEvent + ".jcarousel", this.funcNext), this.buttonNext[a ? "removeClass" : "addClass"](this.className("jcarousel-next-disabled"))
                .attr("disabled", a ? !1 : !0), this.options.buttonNextCallback !== null && this.buttonNext.data("jcarouselstate") != a && this.buttonNext.each(function () {
                    b.options.buttonNextCallback(b, this, a)
                })
                .data("jcarouselstate", a)) : this.options.buttonNextCallback !== null && this.buttonNextState != a && this.options.buttonNextCallback(b, null, a);
            this.buttonPrev.size() > 0 ? (this.buttonPrev.unbind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev), c && this.buttonPrev.bind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev), this.buttonPrev[c ? "removeClass" : "addClass"](this.className("jcarousel-prev-disabled"))
                .attr("disabled", c ? !1 : !0), this.options.buttonPrevCallback !== null && this.buttonPrev.data("jcarouselstate") != c && this.buttonPrev.each(function () {
                    b.options.buttonPrevCallback(b, this, c)
                })
                .data("jcarouselstate", c)) : this.options.buttonPrevCallback !== null && this.buttonPrevState != c && this.options.buttonPrevCallback(b, null, c);
            this.buttonNextState = a;
            this.buttonPrevState = c
        },
        notify: function (a) {
            var c = this.prevFirst === null ? "init" : this.prevFirst < this.first ? "next" : "prev";
            this.callback("itemLoadCallback", a, c);
            this.prevFirst !== this.first && (this.callback("itemFirstInCallback", a, c, this.first), this.callback("itemFirstOutCallback", a, c, this.prevFirst));
            this.prevLast !== this.last && (this.callback("itemLastInCallback", a, c, this.last), this.callback("itemLastOutCallback", a, c, this.prevLast));
            this.callback("itemVisibleInCallback", a, c, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback("itemVisibleOutCallback", a, c, this.prevFirst, this.prevLast, this.first, this.last)
        },
        callback: function (a, c, b, d, f, j, e) {
            if (!(this.options[a] == null || typeof this.options[a] != "object" && c != "onAfterAnimation")) {
                var h = typeof this.options[a] == "object" ? this.options[a][c] : this.options[a];
                if (g.isFunction(h)) {
                    var i = this;
                    if (d === void 0) h(i, b, c);
                    else if (f === void 0) this.get(d)
                        .each(function () {
                            h(i, this, d, b, c)
                        });
                    else
                        for (var a = function (a) {
                                i.get(a)
                                    .each(function () {
                                        h(i, this, a, b, c)
                                    })
                            }, k = d; k <= f; k++) k !== null && !(k >= j && k <= e) && a(k)
                }
            }
        },
        create: function (a) {
            return this.format("<li></li>", a)
        },
        format: function (a, c) {
            for (var a = g(a), b = a.get(0)
                    .className.split(" "), d = 0; d < b.length; d++) b[d].indexOf("jcarousel-") != -1 && a.removeClass(b[d]);
            a.addClass(this.className("jcarousel-item"))
                .addClass(this.className("jcarousel-item-" + c))
                .css({
                    "float": this.options.rtl ? "right" : "left",
                    "list-style": "none"
                })
                .attr("jcarouselindex", c);
            return a
        },
        className: function (a) {
            return a + " " + a + (!this.options.vertical ? "-horizontal" : "-vertical")
        },
        dimension: function (a, c) {
            var b = g(a);
            if (c == null) return !this.options.vertical ? b.outerWidth(!0) || f.intval(this.options.itemFallbackDimension) : b.outerHeight(!0) || f.intval(this.options.itemFallbackDimension);
            else {
                var d = !this.options.vertical ? c - f.intval(b.css("marginLeft")) - f.intval(b.css("marginRight")) : c - f.intval(b.css("marginTop")) - f.intval(b.css("marginBottom"));
                g(b)
                    .css(this.wh, d + "px");
                return this.dimension(b)
            }
        },
        clipping: function () {
            return !this.options.vertical ? this.clip[0].offsetWidth - f.intval(this.clip.css("borderLeftWidth")) - f.intval(this.clip.css("borderRightWidth")) : this.clip[0].offsetHeight - f.intval(this.clip.css("borderTopWidth")) - f.intval(this.clip.css("borderBottomWidth"))
        },
        index: function (a, c) {
            if (c == null) c = this.options.size;
            return Math.round(((a - 1) / c - Math.floor((a - 1) / c)) * c) + 1
        }
    });
    f.extend({
        defaults: function (a) {
            return g.extend(q, a || {})
        },
        intval: function (a) {
            a = parseInt(a, 10);
            return isNaN(a) ? 0 : a
        },
        windowLoaded: function () {
            m = !0
        }
    });
    g.fn.jcarousel = function (a) {
        if (typeof a == "string") {
            var c = g(this)
                .data("jcarousel"),
                b = Array.prototype.slice.call(arguments, 1);
            return c[a].apply(c, b)
        } else return this.each(function () {
            var b = g(this)
                .data("jcarousel");
            b ? (a && g.extend(b.options, a), b.reload()) : g(this)
                .data("jcarousel", new f(this, a))
        })
    }
})(jQuery);

(function (a) {
    a.fn.extend({
        stickyMojo: function (n) {
            var b = a.extend({
                footerID: "",
                contentID: "",
                orientation: a(this)
                    .css("float")
            }, n);
            var l = {
                el: a(this),
                stickyLeft: a(b.contentID)
                    .outerWidth() + a(b.contentID)
                    .offset.left,
                stickyTop2: a(this)
                    .offset()
                    .top,
                stickyHeight: a(this)
                    .outerHeight(true),
                contentHeight: a(b.contentID)
                    .outerHeight(true),
                win: a(window),
                breakPoint: a(this)
                    .outerWidth(true) + a(b.contentID)
                    .outerWidth(true),
                marg: parseInt(a(this)
                    .css("margin-top"), 10)
            };
            var k = d();
            o();
            return this.each(function () {
                m()
            });

            function m() {
                if (!k.length) {
                    l.el.css("left", l.stickyLeft);
                    l.win.bind({
                        load: e,
                        scroll: e,
                        resize: function () {
                            l.el.css("left", l.stickyLeft);
                            e()
                        }
                    })
                } else {
                    if (console && console.warn) {
                        console.warn(k)
                    } else {
                        alert(k)
                    }
                }
            }

            function o() {
                b.footerID = a(b.footerID);
                b.contentID = a(b.contentID)
            }

            function h() {
                return {
                    limit: b.footerID.offset()
                        .top - l.stickyHeight,
                    windowTop: l.win.scrollTop() + 40,
                    stickyTop: l.stickyTop2 - l.marg
                }
            }

            function f() {
                l.el.css({
                    position: "fixed",
                    top: 40
                })
            }

            function j() {
                if (b.orientation === "left") {
                    b.contentID.css("margin-left", l.el.outerWidth(true))
                } else {
                    l.el.css("margin-left", b.contentID.outerWidth(true))
                }
            }

            function g() {
                l.el.css({
                    position: "static",
                    "margin-left": "0px"
                });
                b.contentID.css("margin-left", "0px")
            }

            function i(p) {
                l.el.css({
                    top: p
                })
            }

            function e() {
                var r = h();
                var p = r.stickyTop < r.windowTop && (l.win.width() >= l.breakPoint);
                if (p) {
                    f();
                    j()
                } else {
                    g()
                }
                if (r.limit < r.windowTop) {
                    var q = r.limit - r.windowTop + 40;
                    i(q)
                }
            }

            function d() {
                var q = [];
                for (var p in b) {
                    if (!b[p]) {
                        q.push(b[p])
                    }
                }
                c() && q.push("NO IE 7");
                return q
            }

            function c() {
                if (document.querySelector) {
                    return false
                } else {
                    return true
                }
            }
        }
    })
})(jQuery);

(function (c) {
    var b = {
            init: function (e) {
                var f = {
                        set_width: false,
                        set_height: false,
                        horizontalScroll: false,
                        scrollInertia: 950,
                        mouseWheel: true,
                        mouseWheelPixels: "auto",
                        autoDraggerLength: true,
                        autoHideScrollbar: false,
                        snapAmount: null,
                        snapOffset: 0,
                        scrollButtons: {
                            enable: false,
                            scrollType: "continuous",
                            scrollSpeed: "auto",
                            scrollAmount: 40
                        },
                        advanced: {
                            updateOnBrowserResize: true,
                            updateOnContentResize: false,
                            autoExpandHorizontalScroll: false,
                            autoScrollOnFocus: true,
                            normalizeMouseWheelDelta: false
                        },
                        contentTouchScroll: true,
                        callbacks: {
                            onScrollStart: function () {},
                            onScroll: function () {},
                            onTotalScroll: function () {},
                            onTotalScrollBack: function () {},
                            onTotalScrollOffset: 0,
                            onTotalScrollBackOffset: 0,
                            whileScrolling: function () {}
                        },
                        theme: "light"
                    },
                    e = c.extend(true, f, e);
                return this.each(function () {
                    var m = c(this);
                    if (e.set_width) {
                        m.css("width", e.set_width)
                    }
                    if (e.set_height) {
                        m.css("height", e.set_height)
                    }
                    if (!c(document)
                        .data("mCustomScrollbar-index")) {
                        c(document)
                            .data("mCustomScrollbar-index", "1")
                    } else {
                        var t = parseInt(c(document)
                            .data("mCustomScrollbar-index"));
                        c(document)
                            .data("mCustomScrollbar-index", t + 1)
                    }
                    m.wrapInner("<div class='mCustomScrollBox mCS-" + e.theme + "' id='mCSB_" + c(document)
                            .data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />")
                        .addClass("mCustomScrollbar _mCS_" + c(document)
                            .data("mCustomScrollbar-index"));
                    var g = m.children(".mCustomScrollBox");
                    if (e.horizontalScroll) {
                        g.addClass("mCSB_horizontal")
                            .wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                        var k = g.children(".mCSB_h_wrapper");
                        k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />")
                            .children(".mCSB_container")
                            .css({
                                width: k.children()
                                    .outerWidth(),
                                position: "relative"
                            })
                            .unwrap()
                    } else {
                        g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
                    }
                    var o = g.children(".mCSB_container");
                    if (c.support.touch) {
                        o.addClass("mCS_touch")
                    }
                    o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                    var l = g.children(".mCSB_scrollTools"),
                        h = l.children(".mCSB_draggerContainer"),
                        q = h.children(".mCSB_dragger");
                    if (e.horizontalScroll) {
                        q.data("minDraggerWidth", q.width())
                    } else {
                        q.data("minDraggerHeight", q.height())
                    }
                    if (e.scrollButtons.enable) {
                        if (e.horizontalScroll) {
                            l.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>")
                                .append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>")
                        } else {
                            l.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>")
                                .append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>")
                        }
                    }
                    g.bind("scroll", function () {
                        if (!m.is(".mCS_disabled")) {
                            g.scrollTop(0)
                                .scrollLeft(0)
                        }
                    });
                    m.data({
                        mCS_Init: true,
                        mCustomScrollbarIndex: c(document)
                            .data("mCustomScrollbar-index"),
                        horizontalScroll: e.horizontalScroll,
                        scrollInertia: e.scrollInertia,
                        scrollEasing: "mcsEaseOut",
                        mouseWheel: e.mouseWheel,
                        mouseWheelPixels: e.mouseWheelPixels,
                        autoDraggerLength: e.autoDraggerLength,
                        autoHideScrollbar: e.autoHideScrollbar,
                        snapAmount: e.snapAmount,
                        snapOffset: e.snapOffset,
                        scrollButtons_enable: e.scrollButtons.enable,
                        scrollButtons_scrollType: e.scrollButtons.scrollType,
                        scrollButtons_scrollSpeed: e.scrollButtons.scrollSpeed,
                        scrollButtons_scrollAmount: e.scrollButtons.scrollAmount,
                        autoExpandHorizontalScroll: e.advanced.autoExpandHorizontalScroll,
                        autoScrollOnFocus: e.advanced.autoScrollOnFocus,
                        normalizeMouseWheelDelta: e.advanced.normalizeMouseWheelDelta,
                        contentTouchScroll: e.contentTouchScroll,
                        onScrollStart_Callback: e.callbacks.onScrollStart,
                        onScroll_Callback: e.callbacks.onScroll,
                        onTotalScroll_Callback: e.callbacks.onTotalScroll,
                        onTotalScrollBack_Callback: e.callbacks.onTotalScrollBack,
                        onTotalScroll_Offset: e.callbacks.onTotalScrollOffset,
                        onTotalScrollBack_Offset: e.callbacks.onTotalScrollBackOffset,
                        whileScrolling_Callback: e.callbacks.whileScrolling,
                        bindEvent_scrollbar_drag: false,
                        bindEvent_content_touch: false,
                        bindEvent_scrollbar_click: false,
                        bindEvent_mousewheel: false,
                        bindEvent_buttonsContinuous_y: false,
                        bindEvent_buttonsContinuous_x: false,
                        bindEvent_buttonsPixels_y: false,
                        bindEvent_buttonsPixels_x: false,
                        bindEvent_focusin: false,
                        bindEvent_autoHideScrollbar: false,
                        mCSB_buttonScrollRight: false,
                        mCSB_buttonScrollLeft: false,
                        mCSB_buttonScrollDown: false,
                        mCSB_buttonScrollUp: false
                    });
                    if (e.horizontalScroll) {
                        if (m.css("max-width") !== "none") {
                            if (!e.advanced.updateOnContentResize) {
                                e.advanced.updateOnContentResize = true
                            }
                        }
                    } else {
                        if (m.css("max-height") !== "none") {
                            var s = false,
                                r = parseInt(m.css("max-height"));
                            if (m.css("max-height")
                                .indexOf("%") >= 0) {
                                s = r, r = m.parent()
                                    .height() * s / 100
                            }
                            m.css("overflow", "hidden");
                            g.css("max-height", r)
                        }
                    }
                    m.mCustomScrollbar("update");
                    if (e.advanced.updateOnBrowserResize) {
                        var i, j = c(window)
                            .width(),
                            u = c(window)
                            .height();
                        c(window)
                            .bind("resize." + m.data("mCustomScrollbarIndex"), function () {
                                if (i) {
                                    clearTimeout(i)
                                }
                                i = setTimeout(function () {
                                    if (!m.is(".mCS_disabled") && !m.is(".mCS_destroyed")) {
                                        var w = c(window)
                                            .width(),
                                            v = c(window)
                                            .height();
                                        if (j !== w || u !== v) {
                                            if (m.css("max-height") !== "none" && s) {
                                                g.css("max-height", m.parent()
                                                    .height() * s / 100)
                                            }
                                            m.mCustomScrollbar("update");
                                            j = w;
                                            u = v
                                        }
                                    }
                                }, 150)
                            })
                    }
                    if (e.advanced.updateOnContentResize) {
                        var p;
                        if (e.horizontalScroll) {
                            var n = o.outerWidth()
                        } else {
                            var n = o.outerHeight()
                        }
                        p = setInterval(function () {
                            if (e.horizontalScroll) {
                                if (e.advanced.autoExpandHorizontalScroll) {
                                    o.css({
                                            position: "absolute",
                                            width: "auto"
                                        })
                                        .wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
                                        .css({
                                            width: o.outerWidth(),
                                            position: "relative"
                                        })
                                        .unwrap()
                                }
                                var v = o.outerWidth()
                            } else {
                                var v = o.outerHeight()
                            }
                            if (v != n) {
                                m.mCustomScrollbar("update");
                                n = v
                            }
                        }, 300)
                    }
                })
            },
            update: function () {
                var n = c(this),
                    k = n.children(".mCustomScrollBox"),
                    q = k.children(".mCSB_container");
                q.removeClass("mCS_no_scrollbar");
                n.removeClass("mCS_disabled mCS_destroyed");
                k.scrollTop(0)
                    .scrollLeft(0);
                var y = k.children(".mCSB_scrollTools"),
                    o = y.children(".mCSB_draggerContainer"),
                    m = o.children(".mCSB_dragger");
                if (n.data("horizontalScroll")) {
                    var A = y.children(".mCSB_buttonLeft"),
                        t = y.children(".mCSB_buttonRight"),
                        f = k.width();
                    if (n.data("autoExpandHorizontalScroll")) {
                        q.css({
                                position: "absolute",
                                width: "auto"
                            })
                            .wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
                            .css({
                                width: q.outerWidth(),
                                position: "relative"
                            })
                            .unwrap()
                    }
                    var z = q.outerWidth()
                } else {
                    var w = y.children(".mCSB_buttonUp"),
                        g = y.children(".mCSB_buttonDown"),
                        r = k.height(),
                        i = q.outerHeight()
                }
                if (i > r && !n.data("horizontalScroll")) {
                    y.css("display", "block");
                    var s = o.height();
                    if (n.data("autoDraggerLength")) {
                        var u = Math.round(r / i * s),
                            l = m.data("minDraggerHeight");
                        if (u <= l) {
                            m.css({
                                height: l
                            })
                        } else {
                            if (u >= s - 10) {
                                var p = s - 10;
                                m.css({
                                    height: p
                                })
                            } else {
                                m.css({
                                    height: u
                                })
                            }
                        }
                        m.children(".mCSB_dragger_bar")
                            .css({
                                "line-height": m.height() + "px"
                            })
                    }
                    var B = m.height(),
                        x = (i - r) / (s - B);
                    n.data("scrollAmount", x)
                        .mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                    var D = Math.abs(q.position()
                        .top);
                    n.mCustomScrollbar("scrollTo", D, {
                        scrollInertia: 0,
                        trigger: "internal"
                    })
                } else {
                    if (z > f && n.data("horizontalScroll")) {
                        y.css("display", "block");
                        var h = o.width();
                        if (n.data("autoDraggerLength")) {
                            var j = Math.round(f / z * h),
                                C = m.data("minDraggerWidth");
                            if (j <= C) {
                                m.css({
                                    width: C
                                })
                            } else {
                                if (j >= h - 10) {
                                    var e = h - 10;
                                    m.css({
                                        width: e
                                    })
                                } else {
                                    m.css({
                                        width: j
                                    })
                                }
                            }
                        }
                        var v = m.width(),
                            x = (z - f) / (h - v);
                        n.data("scrollAmount", x)
                            .mCustomScrollbar("scrolling", k, q, o, m, w, g, A, t);
                        var D = Math.abs(q.position()
                            .left);
                        n.mCustomScrollbar("scrollTo", D, {
                            scrollInertia: 0,
                            trigger: "internal"
                        })
                    } else {
                        k.unbind("mousewheel focusin");
                        if (n.data("horizontalScroll")) {
                            m.add(q)
                                .css("left", 0)
                        } else {
                            m.add(q)
                                .css("top", 0)
                        }
                        y.css("display", "none");
                        q.addClass("mCS_no_scrollbar");
                        n.data({
                            bindEvent_mousewheel: false,
                            bindEvent_focusin: false
                        })
                    }
                }
            },
            scrolling: function (h, p, m, j, w, e, A, v) {
                var k = c(this);
                if (!k.data("bindEvent_scrollbar_drag")) {
                    var n, o;
                    if (c.support.msPointer) {
                        j.bind("MSPointerDown", function (H) {
                            H.preventDefault();
                            k.data({
                                on_drag: true
                            });
                            j.addClass("mCSB_dragger_onDrag");
                            var G = c(this),
                                J = G.offset(),
                                F = H.originalEvent.pageX - J.left,
                                I = H.originalEvent.pageY - J.top;
                            if (F < G.width() && F > 0 && I < G.height() && I > 0) {
                                n = I;
                                o = F
                            }
                        });
                        c(document)
                            .bind("MSPointerMove." + k.data("mCustomScrollbarIndex"), function (H) {
                                H.preventDefault();
                                if (k.data("on_drag")) {
                                    var G = j,
                                        J = G.offset(),
                                        F = H.originalEvent.pageX - J.left,
                                        I = H.originalEvent.pageY - J.top;
                                    D(n, o, I, F)
                                }
                            })
                            .bind("MSPointerUp." + k.data("mCustomScrollbarIndex"), function (x) {
                                k.data({
                                    on_drag: false
                                });
                                j.removeClass("mCSB_dragger_onDrag")
                            })
                    } else {
                        j.bind("mousedown touchstart", function (H) {
                                H.preventDefault();
                                H.stopImmediatePropagation();
                                var G = c(this),
                                    K = G.offset(),
                                    F, J;
                                if (H.type === "touchstart") {
                                    var I = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0];
                                    F = I.pageX - K.left;
                                    J = I.pageY - K.top
                                } else {
                                    k.data({
                                        on_drag: true
                                    });
                                    j.addClass("mCSB_dragger_onDrag");
                                    F = H.pageX - K.left;
                                    J = H.pageY - K.top
                                }
                                if (F < G.width() && F > 0 && J < G.height() && J > 0) {
                                    n = J;
                                    o = F
                                }
                            })
                            .bind("touchmove", function (H) {
                                H.preventDefault();
                                H.stopImmediatePropagation();
                                var K = H.originalEvent.touches[0] || H.originalEvent.changedTouches[0],
                                    G = c(this),
                                    J = G.offset(),
                                    F = K.pageX - J.left,
                                    I = K.pageY - J.top;
                                D(n, o, I, F)
                            });
                        c(document)
                            .bind("mousemove." + k.data("mCustomScrollbarIndex"), function (H) {
                                if (k.data("on_drag")) {
                                    var G = j,
                                        J = G.offset(),
                                        F = H.pageX - J.left,
                                        I = H.pageY - J.top;
                                    D(n, o, I, F)
                                }
                            })
                            .bind("mouseup." + k.data("mCustomScrollbarIndex"), function (x) {
                                k.data({
                                    on_drag: false
                                });
                                j.removeClass("mCSB_dragger_onDrag")
                            })
                    }
                    k.data({
                        bindEvent_scrollbar_drag: true
                    })
                }

                function D(G, H, I, F) {
                    if (k.data("horizontalScroll")) {
                        k.mCustomScrollbar("scrollTo", (j.position()
                            .left - (H)) + F, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    } else {
                        k.mCustomScrollbar("scrollTo", (j.position()
                            .top - (G)) + I, {
                            moveDragger: true,
                            trigger: "internal"
                        })
                    }
                }
                if (c.support.touch && k.data("contentTouchScroll")) {
                    if (!k.data("bindEvent_content_touch")) {
                        var l, B, r, s, u, C, E;
                        p.bind("touchstart", function (x) {
                            x.stopImmediatePropagation();
                            l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            B = c(this);
                            r = B.offset();
                            u = l.pageX - r.left;
                            s = l.pageY - r.top;
                            C = s;
                            E = u
                        });
                        p.bind("touchmove", function (x) {
                            x.preventDefault();
                            x.stopImmediatePropagation();
                            l = x.originalEvent.touches[0] || x.originalEvent.changedTouches[0];
                            B = c(this)
                                .parent();
                            r = B.offset();
                            u = l.pageX - r.left;
                            s = l.pageY - r.top;
                            if (k.data("horizontalScroll")) {
                                k.mCustomScrollbar("scrollTo", E - u, {
                                    trigger: "internal"
                                })
                            } else {
                                k.mCustomScrollbar("scrollTo", C - s, {
                                    trigger: "internal"
                                })
                            }
                        })
                    }
                }
                if (!k.data("bindEvent_scrollbar_click")) {
                    m.bind("click", function (F) {
                        var x = (F.pageY - m.offset()
                                .top) * k.data("scrollAmount"),
                            y = c(F.target);
                        if (k.data("horizontalScroll")) {
                            x = (F.pageX - m.offset()
                                .left) * k.data("scrollAmount")
                        }
                        if (y.hasClass("mCSB_draggerContainer") || y.hasClass("mCSB_draggerRail")) {
                            k.mCustomScrollbar("scrollTo", x, {
                                trigger: "internal",
                                scrollEasing: "draggerRailEase"
                            })
                        }
                    });
                    k.data({
                        bindEvent_scrollbar_click: true
                    })
                }
                if (k.data("mouseWheel")) {
                    if (!k.data("bindEvent_mousewheel")) {
                        h.bind("mousewheel", function (H, J) {
                            var G, F = k.data("mouseWheelPixels"),
                                x = Math.abs(p.position()
                                    .top),
                                I = j.position()
                                .top,
                                y = m.height() - j.height();
                            if (k.data("normalizeMouseWheelDelta")) {
                                if (J < 0) {
                                    J = -1
                                } else {
                                    J = 1
                                }
                            }
                            if (F === "auto") {
                                F = 100 + Math.round(k.data("scrollAmount") / 2)
                            }
                            if (k.data("horizontalScroll")) {
                                I = j.position()
                                    .left;
                                y = m.width() - j.width();
                                x = Math.abs(p.position()
                                    .left)
                            }
                            if ((J > 0 && I !== 0) || (J < 0 && I !== y)) {
                                H.preventDefault();
                                H.stopImmediatePropagation()
                            }
                            G = x - (J * F);
                            k.mCustomScrollbar("scrollTo", G, {
                                trigger: "internal"
                            })
                        });
                        k.data({
                            bindEvent_mousewheel: true
                        })
                    }
                }
                if (k.data("scrollButtons_enable")) {
                    if (k.data("scrollButtons_scrollType") === "pixels") {
                        if (k.data("horizontalScroll")) {
                            v.add(A)
                                .unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);
                            k.data({
                                bindEvent_buttonsContinuous_x: false
                            });
                            if (!k.data("bindEvent_buttonsPixels_x")) {
                                v.bind("click", function (x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position()
                                        .left) + k.data("scrollButtons_scrollAmount"))
                                });
                                A.bind("click", function (x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position()
                                        .left) - k.data("scrollButtons_scrollAmount"))
                                });
                                k.data({
                                    bindEvent_buttonsPixels_x: true
                                })
                            }
                        } else {
                            e.add(w)
                                .unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend", i, g);
                            k.data({
                                bindEvent_buttonsContinuous_y: false
                            });
                            if (!k.data("bindEvent_buttonsPixels_y")) {
                                e.bind("click", function (x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position()
                                        .top) + k.data("scrollButtons_scrollAmount"))
                                });
                                w.bind("click", function (x) {
                                    x.preventDefault();
                                    q(Math.abs(p.position()
                                        .top) - k.data("scrollButtons_scrollAmount"))
                                });
                                k.data({
                                    bindEvent_buttonsPixels_y: true
                                })
                            }
                        }

                        function q(x) {
                            if (!j.data("preventAction")) {
                                j.data("preventAction", true);
                                k.mCustomScrollbar("scrollTo", x, {
                                    trigger: "internal"
                                })
                            }
                        }
                    } else {
                        if (k.data("horizontalScroll")) {
                            v.add(A)
                                .unbind("click");
                            k.data({
                                bindEvent_buttonsPixels_x: false
                            });
                            if (!k.data("bindEvent_buttonsContinuous_x")) {
                                v.bind("mousedown touchstart MSPointerDown", function (y) {
                                    y.preventDefault();
                                    var x = z();
                                    k.data({
                                        mCSB_buttonScrollRight: setInterval(function () {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position()
                                                .left) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var i = function (x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollRight"))
                                };
                                v.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", i);
                                A.bind("mousedown touchstart MSPointerDown", function (y) {
                                    y.preventDefault();
                                    var x = z();
                                    k.data({
                                        mCSB_buttonScrollLeft: setInterval(function () {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position()
                                                .left) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var g = function (x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollLeft"))
                                };
                                A.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", g);
                                k.data({
                                    bindEvent_buttonsContinuous_x: true
                                })
                            }
                        } else {
                            e.add(w)
                                .unbind("click");
                            k.data({
                                bindEvent_buttonsPixels_y: false
                            });
                            if (!k.data("bindEvent_buttonsContinuous_y")) {
                                e.bind("mousedown touchstart MSPointerDown", function (y) {
                                    y.preventDefault();
                                    var x = z();
                                    k.data({
                                        mCSB_buttonScrollDown: setInterval(function () {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position()
                                                .top) + x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var t = function (x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollDown"))
                                };
                                e.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", t);
                                w.bind("mousedown touchstart MSPointerDown", function (y) {
                                    y.preventDefault();
                                    var x = z();
                                    k.data({
                                        mCSB_buttonScrollUp: setInterval(function () {
                                            k.mCustomScrollbar("scrollTo", Math.abs(p.position()
                                                .top) - x, {
                                                trigger: "internal",
                                                scrollEasing: "easeOutCirc"
                                            })
                                        }, 17)
                                    })
                                });
                                var f = function (x) {
                                    x.preventDefault();
                                    clearInterval(k.data("mCSB_buttonScrollUp"))
                                };
                                w.bind("mouseup touchend MSPointerUp mouseout MSPointerOut", f);
                                k.data({
                                    bindEvent_buttonsContinuous_y: true
                                })
                            }
                        }

                        function z() {
                            var x = k.data("scrollButtons_scrollSpeed");
                            if (k.data("scrollButtons_scrollSpeed") === "auto") {
                                x = Math.round((k.data("scrollInertia") + 100) / 40)
                            }
                            return x
                        }
                    }
                }
                if (k.data("autoScrollOnFocus")) {
                    if (!k.data("bindEvent_focusin")) {
                        h.bind("focusin", function () {
                            h.scrollTop(0)
                                .scrollLeft(0);
                            var x = c(document.activeElement);
                            if (x.is("input,textarea,select,button,a[tabindex],area,object")) {
                                var G = p.position()
                                    .top,
                                    y = x.position()
                                    .top,
                                    F = h.height() - x.outerHeight();
                                if (k.data("horizontalScroll")) {
                                    G = p.position()
                                        .left;
                                    y = x.position()
                                        .left;
                                    F = h.width() - x.outerWidth()
                                }
                                if (G + y < 0 || G + y > F) {
                                    k.mCustomScrollbar("scrollTo", y, {
                                        trigger: "internal"
                                    })
                                }
                            }
                        });
                        k.data({
                            bindEvent_focusin: true
                        })
                    }
                }
                if (k.data("autoHideScrollbar")) {
                    if (!k.data("bindEvent_autoHideScrollbar")) {
                        h.bind("mouseenter", function (x) {
                                h.addClass("mCS-mouse-over");
                                d.showScrollbar.call(h.children(".mCSB_scrollTools"))
                            })
                            .bind("mouseleave touchend", function (x) {
                                h.removeClass("mCS-mouse-over");
                                if (x.type === "mouseleave") {
                                    d.hideScrollbar.call(h.children(".mCSB_scrollTools"))
                                }
                            });
                        k.data({
                            bindEvent_autoHideScrollbar: true
                        })
                    }
                }
            },
            scrollTo: function (e, f) {
                var i = c(this),
                    o = {
                        moveDragger: false,
                        trigger: "external",
                        callbacks: true,
                        scrollInertia: i.data("scrollInertia"),
                        scrollEasing: i.data("scrollEasing")
                    },
                    f = c.extend(o, f),
                    p, g = i.children(".mCustomScrollBox"),
                    k = g.children(".mCSB_container"),
                    r = g.children(".mCSB_scrollTools"),
                    j = r.children(".mCSB_draggerContainer"),
                    h = j.children(".mCSB_dragger"),
                    t = draggerSpeed = f.scrollInertia,
                    q, s, m, l;
                if (!k.hasClass("mCS_no_scrollbar")) {
                    i.data({
                        mCS_trigger: f.trigger
                    });
                    if (i.data("mCS_Init")) {
                        f.callbacks = false
                    }
                    if (e || e === 0) {
                        if (typeof (e) === "number") {
                            if (f.moveDragger) {
                                p = e;
                                if (i.data("horizontalScroll")) {
                                    e = h.position()
                                        .left * i.data("scrollAmount")
                                } else {
                                    e = h.position()
                                        .top * i.data("scrollAmount")
                                }
                                draggerSpeed = 0
                            } else {
                                p = e / i.data("scrollAmount")
                            }
                        } else {
                            if (typeof (e) === "string") {
                                var v;
                                if (e === "top") {
                                    v = 0
                                } else {
                                    if (e === "bottom" && !i.data("horizontalScroll")) {
                                        v = k.outerHeight() - g.height()
                                    } else {
                                        if (e === "left") {
                                            v = 0
                                        } else {
                                            if (e === "right" && i.data("horizontalScroll")) {
                                                v = k.outerWidth() - g.width()
                                            } else {
                                                if (e === "first") {
                                                    v = i.find(".mCSB_container")
                                                        .find(":first")
                                                } else {
                                                    if (e === "last") {
                                                        v = i.find(".mCSB_container")
                                                            .find(":last")
                                                    } else {
                                                        v = i.find(e)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                if (v.length === 1) {
                                    if (i.data("horizontalScroll")) {
                                        e = v.position()
                                            .left
                                    } else {
                                        e = v.position()
                                            .top
                                    }
                                    p = e / i.data("scrollAmount")
                                } else {
                                    p = e = v
                                }
                            }
                        }
                        if (i.data("horizontalScroll")) {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset")
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.width() - k.outerWidth() + i.data("onTotalScroll_Offset")
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollLeft"));
                                if (!s) {
                                    q = true
                                }
                            } else {
                                if (p >= j.width() - h.width()) {
                                    p = j.width() - h.width();
                                    e = g.width() - k.outerWidth();
                                    clearInterval(i.data("mCSB_buttonScrollRight"));
                                    if (!l) {
                                        m = true
                                    }
                                } else {
                                    e = -e
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset")
                            }
                            d.mTweenAxis.call(this, h[0], "left", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "left", Math.round(e), t, f.scrollEasing, {
                                onStart: function () {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart")
                                    }
                                    if (i.data("autoHideScrollbar")) {
                                        d.showScrollbar.call(r)
                                    }
                                },
                                onUpdate: function () {
                                    if (f.callbacks) {
                                        u("whileScrolling")
                                    }
                                },
                                onComplete: function () {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position()
                                                .left >= s)) {
                                            u("onTotalScrollBack")
                                        }
                                        if (m || (l && k.position()
                                                .left <= l)) {
                                            u("onTotalScroll")
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r)
                                        }
                                    }
                                }
                            })
                        } else {
                            if (i.data("onTotalScrollBack_Offset")) {
                                s = -i.data("onTotalScrollBack_Offset")
                            }
                            if (i.data("onTotalScroll_Offset")) {
                                l = g.height() - k.outerHeight() + i.data("onTotalScroll_Offset")
                            }
                            if (p < 0) {
                                p = e = 0;
                                clearInterval(i.data("mCSB_buttonScrollUp"));
                                if (!s) {
                                    q = true
                                }
                            } else {
                                if (p >= j.height() - h.height()) {
                                    p = j.height() - h.height();
                                    e = g.height() - k.outerHeight();
                                    clearInterval(i.data("mCSB_buttonScrollDown"));
                                    if (!l) {
                                        m = true
                                    }
                                } else {
                                    e = -e
                                }
                            }
                            var n = i.data("snapAmount");
                            if (n) {
                                e = Math.round(e / n) * n - i.data("snapOffset")
                            }
                            d.mTweenAxis.call(this, h[0], "top", Math.round(p), draggerSpeed, f.scrollEasing);
                            d.mTweenAxis.call(this, k[0], "top", Math.round(e), t, f.scrollEasing, {
                                onStart: function () {
                                    if (f.callbacks && !i.data("mCS_tweenRunning")) {
                                        u("onScrollStart")
                                    }
                                    if (i.data("autoHideScrollbar")) {
                                        d.showScrollbar.call(r)
                                    }
                                },
                                onUpdate: function () {
                                    if (f.callbacks) {
                                        u("whileScrolling")
                                    }
                                },
                                onComplete: function () {
                                    if (f.callbacks) {
                                        u("onScroll");
                                        if (q || (s && k.position()
                                                .top >= s)) {
                                            u("onTotalScrollBack")
                                        }
                                        if (m || (l && k.position()
                                                .top <= l)) {
                                            u("onTotalScroll")
                                        }
                                    }
                                    h.data("preventAction", false);
                                    i.data("mCS_tweenRunning", false);
                                    if (i.data("autoHideScrollbar")) {
                                        if (!g.hasClass("mCS-mouse-over")) {
                                            d.hideScrollbar.call(r)
                                        }
                                    }
                                }
                            })
                        }
                        if (i.data("mCS_Init")) {
                            i.data({
                                mCS_Init: false
                            })
                        }
                    }
                }

                function u(w) {
                    this.mcs = {
                        top: k.position()
                            .top,
                        left: k.position()
                            .left,
                        draggerTop: h.position()
                            .top,
                        draggerLeft: h.position()
                            .left,
                        topPct: Math.round((100 * Math.abs(k.position()
                            .top)) / Math.abs(k.outerHeight() - g.height())),
                        leftPct: Math.round((100 * Math.abs(k.position()
                            .left)) / Math.abs(k.outerWidth() - g.width()))
                    };
                    switch (w) {
                    case "onScrollStart":
                        i.data("mCS_tweenRunning", true)
                            .data("onScrollStart_Callback")
                            .call(i, this.mcs);
                        break;
                    case "whileScrolling":
                        i.data("whileScrolling_Callback")
                            .call(i, this.mcs);
                        break;
                    case "onScroll":
                        i.data("onScroll_Callback")
                            .call(i, this.mcs);
                        break;
                    case "onTotalScrollBack":
                        i.data("onTotalScrollBack_Callback")
                            .call(i, this.mcs);
                        break;
                    case "onTotalScroll":
                        i.data("onTotalScroll_Callback")
                            .call(i, this.mcs);
                        break
                    }
                }
            },
            stop: function () {
                var g = c(this),
                    e = g.children()
                    .children(".mCSB_container"),
                    f = g.children()
                    .children()
                    .children()
                    .children(".mCSB_dragger");
                d.mTweenAxisStop.call(this, e[0]);
                d.mTweenAxisStop.call(this, f[0])
            },
            disable: function (e) {
                var j = c(this),
                    f = j.children(".mCustomScrollBox"),
                    h = f.children(".mCSB_container"),
                    g = f.children(".mCSB_scrollTools"),
                    i = g.children()
                    .children(".mCSB_dragger");
                f.unbind("mousewheel focusin mouseenter mouseleave touchend");
                h.unbind("touchstart touchmove");
                if (e) {
                    if (j.data("horizontalScroll")) {
                        i.add(h)
                            .css("left", 0)
                    } else {
                        i.add(h)
                            .css("top", 0)
                    }
                }
                g.css("display", "none");
                h.addClass("mCS_no_scrollbar");
                j.data({
                        bindEvent_mousewheel: false,
                        bindEvent_focusin: false,
                        bindEvent_content_touch: false,
                        bindEvent_autoHideScrollbar: false
                    })
                    .addClass("mCS_disabled")
            },
            destroy: function () {
                var e = c(this);
                e.removeClass("mCustomScrollbar _mCS_" + e.data("mCustomScrollbarIndex"))
                    .addClass("mCS_destroyed")
                    .children()
                    .children(".mCSB_container")
                    .unwrap()
                    .children()
                    .unwrap()
                    .siblings(".mCSB_scrollTools")
                    .remove();
                c(document)
                    .unbind("mousemove." + e.data("mCustomScrollbarIndex") + " mouseup." + e.data("mCustomScrollbarIndex") + " MSPointerMove." + e.data("mCustomScrollbarIndex") + " MSPointerUp." + e.data("mCustomScrollbarIndex"));
                c(window)
                    .unbind("resize." + e.data("mCustomScrollbarIndex"))
            }
        },
        d = {
            showScrollbar: function () {
                this.stop()
                    .animate({
                        opacity: 1
                    }, "fast")
            },
            hideScrollbar: function () {
                this.stop()
                    .animate({
                        opacity: 0
                    }, "fast")
            },
            mTweenAxis: function (g, i, h, f, o, y) {
                var y = y || {},
                    v = y.onStart || function () {},
                    p = y.onUpdate || function () {},
                    w = y.onComplete || function () {};
                var n = t(),
                    l, j = 0,
                    r = g.offsetTop,
                    s = g.style;
                if (i === "left") {
                    r = g.offsetLeft
                }
                var m = h - r;
                q();
                e();

                function t() {
                    if (window.performance && window.performance.now) {
                        return window.performance.now()
                    } else {
                        if (window.performance && window.performance.webkitNow) {
                            return window.performance.webkitNow()
                        } else {
                            if (Date.now) {
                                return Date.now()
                            } else {
                                return new Date()
                                    .getTime()
                            }
                        }
                    }
                }

                function x() {
                    if (!j) {
                        v.call()
                    }
                    j = t() - n;
                    u();
                    if (j >= g._time) {
                        g._time = (j > g._time) ? j + l - (j - g._time) : j + l - 1;
                        if (g._time < j + 1) {
                            g._time = j + 1
                        }
                    }
                    if (g._time < f) {
                        g._id = _request(x)
                    } else {
                        w.call()
                    }
                }

                function u() {
                    if (f > 0) {
                        g.currVal = k(g._time, r, m, f, o);
                        s[i] = Math.round(g.currVal) + "px"
                    } else {
                        s[i] = h + "px"
                    }
                    p.call()
                }

                function e() {
                    l = 1000 / 60;
                    g._time = j + l;
                    _request = (!window.requestAnimationFrame) ? function (z) {
                        u();
                        return setTimeout(z, 0.01)
                    } : window.requestAnimationFrame;
                    g._id = _request(x)
                }

                function q() {
                    if (g._id == null) {
                        return
                    }
                    if (!window.requestAnimationFrame) {
                        clearTimeout(g._id)
                    } else {
                        window.cancelAnimationFrame(g._id)
                    }
                    g._id = null
                }

                function k(B, A, F, E, C) {
                    switch (C) {
                    case "linear":
                        return F * B / E + A;
                        break;
                    case "easeOutQuad":
                        B /= E;
                        return -F * B * (B - 2) + A;
                        break;
                    case "easeInOutQuad":
                        B /= E / 2;
                        if (B < 1) {
                            return F / 2 * B * B + A
                        }
                        B--;
                        return -F / 2 * (B * (B - 2) - 1) + A;
                        break;
                    case "easeOutCubic":
                        B /= E;
                        B--;
                        return F * (B * B * B + 1) + A;
                        break;
                    case "easeOutQuart":
                        B /= E;
                        B--;
                        return -F * (B * B * B * B - 1) + A;
                        break;
                    case "easeOutQuint":
                        B /= E;
                        B--;
                        return F * (B * B * B * B * B + 1) + A;
                        break;
                    case "easeOutCirc":
                        B /= E;
                        B--;
                        return F * Math.sqrt(1 - B * B) + A;
                        break;
                    case "easeOutSine":
                        return F * Math.sin(B / E * (Math.PI / 2)) + A;
                        break;
                    case "easeOutExpo":
                        return F * (-Math.pow(2, -10 * B / E) + 1) + A;
                        break;
                    case "mcsEaseOut":
                        var D = (B /= E) * B,
                            z = D * B;
                        return A + F * (0.499999999999997 * z * D + -2.5 * D * D + 5.5 * z + -6.5 * D + 4 * B);
                        break;
                    case "draggerRailEase":
                        B /= E / 2;
                        if (B < 1) {
                            return F / 2 * B * B * B + A
                        }
                        B -= 2;
                        return F / 2 * (B * B * B + 2) + A;
                        break
                    }
                }
            },
            mTweenAxisStop: function (e) {
                if (e._id == null) {
                    return
                }
                if (!window.requestAnimationFrame) {
                    clearTimeout(e._id)
                } else {
                    window.cancelAnimationFrame(e._id)
                }
                e._id = null
            },
            rafPolyfill: function () {
                var f = ["ms", "moz", "webkit", "o"],
                    e = f.length;
                while (--e > -1 && !window.requestAnimationFrame) {
                    window.requestAnimationFrame = window[f[e] + "RequestAnimationFrame"];
                    window.cancelAnimationFrame = window[f[e] + "CancelAnimationFrame"] || window[f[e] + "CancelRequestAnimationFrame"]
                }
            }
        };
    d.rafPolyfill.call();
    c.support.touch = !!("ontouchstart" in window);
    c.support.msPointer = window.navigator.msPointerEnabled;
    var a = ("https:" == document.location.protocol) ? "https:" : "http:";
    c.event.special.mousewheel || document.write('<script src="' + a + '//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
    c.fn.mCustomScrollbar = function (e) {
        if (b[e]) {
            return b[e].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof e === "object" || !e) {
                return b.init.apply(this, arguments)
            } else {
                c.error("Method " + e + " does not exist")
            }
        }
    }
})(jQuery);
//View Mode by MKR 
window.viewMode = (function () {
    var a = function (k) {
        var c = k || {},
            j = c.viewmodedefault || configSummary.defaultView,
            i = c.cookielist || "list",
            f = c.cookiegrid || "grid";
        var b = $(".blog-posts.hfeed")
            .find(".post-outer"),
            e = $("#view .grid"),
            d = $("#view .list");

        function h() {
            b.addClass("grid")
                .removeClass("list");
            e.addClass("active");
            d.removeClass("active");
            createCookie(f, null, 10000);
            eraseCookie(i);
            changeimage();
            return false
        }

        function g() {
            b.removeClass("grid")
                .addClass("list");
            e.removeClass("active");
            d.addClass("active");
            createCookie(i, null, 10000);
            eraseCookie(f);
            changeimage();
            return false
        }
        if (readCookie(i) && j != "grid") {
            g();
            eraseCookie(i)
        } else {
            if (readCookie(f) && j != "grid") {
                h();
                eraseCookie(f)
            } else {
                if (readCookie(i)) {
                    g();
                    eraseCookie(i)
                } else {
                    if (readCookie(f)) {
                        h();
                        eraseCookie(f)
                    } else {
                        if (j != "grid") {
                            g();
                            eraseCookie(i)
                        } else {
                            h();
                            eraseCookie(f)
                        }
                    }
                }
            }
        }
        e.click(h);
        d.click(g)
    };
    return function (b) {
        a(b)
    }
})();
//Date and Time by MKR
function datetime(f) {
    var k = function (n) {
        if (n < 10) {
            n = "0" + n
        }
        return n
    };
    var m = function () {
        var o = new Date();
        var q = o.getHours();
        var n = o.getMinutes();
        var p = o.getSeconds();
        q = k(q);
        n = k(n);
        p = k(p);
        f("#jamskrng")
            .text(q + ":" + n + ":" + p);
        setTimeout(m, 1000)
    };
    m();
    var a = document.getElementById("tglskrngx");

    function b() {
        for (i = 0; i < b.arguments.length; i++) {
            this[i + 1] = b.arguments[i]
        }
    }
    var c = new b("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var e = new Date();
    var l = e.getDate();
    var g = e.getMonth() + 1;
    var h = e.getYear();
    var j = (h < 1000) ? h + 1900 : h;
    var d = c[g] + " " + l + ", " + j;
    a.innerHTML = d
};
//Scroll Top by MKR
(function (a) {
    a(window)
        .scroll(function () {
            if (a(this)
                .scrollTop() > 280) {
                a("#top")
                    .removeAttr("href");
                a("#top")
                    .fadeIn()
            } else {
                a("#top")
                    .fadeOut()
            }
        });
    a(function () {
        a("#top")
            .click(function () {
                a("html, body")
                    .animate({
                        scrollTop: 0
                    }, "slow");
                return false
            })
    })
})(jQuery);
//Menu Call
function menunav(b) {
    function l() {
        var a = b(window)
            .width();
        999 < a ? (b("#menunav")
                .css("display", "block"), b("#menunav")
                .superfish({
                    animation: {
                        height: "show"
                    },
                    animationOut: {
                        height: "hide"
                    }
                }), b(".sf-menu i")
                .css("display", "none")) : 999 >= a && b("#mobilenav")
            .hasClass("active") ? (b("#menunav")
                .css("display", "block"), b("#menunav")
                .superfish("destroy"), b(".sf-menu i")
                .css("display", "block")) : 999 >= a && !b("#mobilenav")
            .hasClass("active") && (b("#menunav")
                .css("display", "none"), b("#menunav")
                .superfish("destroy"), b(".sf-menu i")
                .css("display", "block"))
    }

    function k() {
        var a = b(window)
            .width();
        999 < a ? (b("#topmenunav")
                .css("display", "block"), b("#topmenunav")
                .superfish({
                    animation: {
                        height: "show"
                    },
                    animationOut: {
                        height: "hide"
                    }
                }), b(".sf-menu i")
                .css("display", "none")) : 999 >= a && b("#topmobilenav")
            .hasClass("active") ? (b("#topmenunav")
                .css("display", "block"), b("#topmenunav")
                .superfish("destroy"), b(".sf-menu i")
                .css("display", "block")) : 999 >= a && !b("#topmobilenav")
            .hasClass("active") && (b("#topmenunav")
                .css("display", "none"), b("#topmenunav")
                .superfish("destroy"), b(".sf-menu i")
                .css("display", "block"))
    }

    function j() {
        1099 > b(window)
            .width() ? (b(".tombolsrc")
                .on("click", function () {
                    b("#searchnya")
                        .fadeIn();
                    return !1
                }), b(document)
                .on("click", function () {
                    b("#searchnya")
                        .fadeOut()
                }), b("#searchnya")
                .on("click", function (c) {
                    c.stopPropagation()
                })) : b("#searchnya")
            .show()
    }

    function i() {
        var a = b(window)
            .width();
        479 < a ? b("#icon-socialmn")
            .css("display", "block") : 479 >= a && b("#topmobilenav")
            .hasClass("active") ? b("#icon-socialmn")
            .css("display", "block") : 479 >= a && !b("#topmobilenav")
            .hasClass("active") && b("#icon-socialmn")
            .css("display", "none")
    }
    b("#mobilenav")
        .click(function () {
            b("#menunav")
                .slideToggle();
            b(this)
                .toggleClass("active");
            return !1
        });
    b("#topmobilenav")
        .click(function () {
            b("#topmenunav")
                .slideToggle();
            b(this)
                .toggleClass("active");
            return !1
        });
    b(".sf-menu ul")
        .each(function () {
            b(this)
                .parent("li")
                .append("<i></i>")
        });
    l();
    k();
    b(window)
        .resize(l);
    b(window)
        .resize(k);
    b(".sf-menu i")
        .click(function () {
            b(this)
                .parent("li")
                .children("ul")
                .slideToggle();
            b(this)
                .toggleClass("active");
            return !1
        });
    var h = window.location.href;
    b("#menunav a, #topmenunav a")
        .each(function () {
            this.href === h && b(this)
                .parents("li")
                .children("a")
                .addClass("current")
        });
    if (Alldefaultconfig.stickyMenu) {
        b(window)
            .scroll(function () {
                150 < b(this)
                    .scrollTop() ? b("#nav")
                    .addClass("scrollq")
                    .css("overflow", "visible") : b("#nav")
                    .removeClass("scrollq")
                    .css("overflow", "visible")
            })
    }
    j();
    b(window)
        .resize(j);
    b(".tombolsocial")
        .click(function () {
            b("#icon-socialmn")
                .slideToggle();
            b(this)
                .toggleClass("active");
            return !1
        });
    i();
    b(window)
        .resize(i)
};
//Ajax JSON Search by MKR
function searchxx(m) {
    (function (h) {
        var a = {
                blogURL: "",
                srcBlank: "http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s1600/grey.gif",
                findText: "Search results for keyword",
                NotfindText: "No result!",
                Showthumb: !0,
                LoadingText: "Searching...",
                viewMoreText: Alldefaultconfig.viewMoreText,
                scrthumbSize: 50,
                MaxPost: 10,
                summaryLength: 100
            },
            a = h.extend({}, a, m),
            e = h("#ajax-search-form"),
            s = e.find(":text");
        e.append('<div id="search-result"></div>');
        var k = h("#search-result");
        e.on("submit", function () {
            var g =
                s.val();
            k.show()
                .html('<div class="load">' + a.LoadingText + "</div>");
            h.get(("" === a.blogURL ? window.location.protocol + "//" + window.location.host : a.blogURL) + "/feeds/posts/default?alt=json-in-script&q=" + g + "&max-results=" + a.MaxPost, function (e) {
                var c = e.feed.entry,
                    b, l, n, p, q = [],
                    f = "";
                if (void 0 !== c) {
                    for (var f = "<h4>" + a.findText + " &quot;" + g + "&quot;</h4>", f = f + '<a class="close" href="/">&times;</a><ol>', d = 0, m = c.length; d < m; d++) {
                        var r = RegExp(g, "ig");
                        n = c[d].title.$t.replace(r, "<mark>" + g + "</mark>");
                        b = 0;
                        for (l = c[d].link.length; b <
                            l; b++) "alternate" == c[d].link[b].rel && (p = c[d].link[b].href);
                        b = "content" in c[d] ? c[d].content.$t : "summary" in c[d] ? c[d].summary.$t : "";
                        l = "media$thumbnail" in c[d] ? c[d].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s" + a.scrthumbSize + "-c") : null != (q = b.match(/https?:\/\/.+?\.(jpg|gif|png|bmp)/gi)) ? q[0] : a.srcBlank;
                        b = b.replace(/<\S[^>]*>/g, "");
                        b.length > a.summaryLength && (b = b.substring(0, a.summaryLength) + "...");
                        b = b.replace(r, "<mark>" + g + "</mark>");
                        f += '<li><a href="' + p + '" >' + (!0 === a.Showthumb ? '<img style="width:' +
                            a.scrthumbSize + "px;height:" + a.scrthumbSize + 'px" width="' + a.scrthumbSize + '" height="' + a.scrthumbSize + '" src="' + l + '"/>' : "") + "<strong>" + n + "</strong></a>" + (0 < a.summaryLength ? "<p>" + b + "</p>" : "") + "</li>"
                    }
                    f += "</ol>" + (e.feed.openSearch$totalResults.$t > e.feed.openSearch$itemsPerPage.$t ? '<div class="src-morepost"><a href="/search?q=' + g + '">' + a.viewMoreText + " &quot;" + g + "&quot;</a></div>" : "");
                    k.html(f);
                    h("#searchnya ol")
                        .mCustomScrollbar()
                } else k.html('<a class="close" href="/">&times;</a><strong>' + a.NotfindText +
                    "</strong>")
            }, "jsonp");
            return !1
        });
        e.on("click", ".close", function () {
            k.fadeOut();
            return !1
        })
    })(jQuery)
};
//Ajax Page Navigation by MKR
function pageNavi(a) {
    (function (f) {
        var k = configSummary;
        var i = {
            postperpage: k.postPerPage,
            numshowpage: k.numshowpage,
            previous: "&#171;",
            next: "&#187;",
            loadAjax: true,
            thumbnailSize: k.thumbnailSize,
            summaryLength: k.summaryLength,
            viewmodedefault: k.defaultView,
            cookielist: "list",
            cookiegrid: "grid"
        };
        i = f.extend({}, i, a);
        var g = "/";
        var d = location.href;
        var l;
        var m;
        var j;
        var e;
        var n = function (o) {
            var t = "";
            nomerkiri = parseInt(i.numshowpage / 2);
            if (nomerkiri == i.numshowpage - nomerkiri) {
                i.numshowpage = nomerkiri * 2 + 1
            }
            mulai = j - nomerkiri;
            if (mulai < 1) {
                mulai = 1
            }
            maksimal = parseInt(o / i.postperpage) + 1;
            if (maksimal - 1 == o / i.postperpage) {
                maksimal = maksimal - 1
            }
            akhir = mulai + i.numshowpage - 1;
            if (akhir > maksimal) {
                akhir = maksimal
            }
            var v = parseInt(j) - 1;
            if (j > 1) {
                if (j == 2) {
                    if (m == "page") {
                        t += '<span class="showpage"><a href="' + g + '">' + i.previous + "</a></span>"
                    } else {
                        t += '<span class="showpageNum"><a href="/search/label/' + e + "?&max-results=" + i.postperpage + '">' + i.previous + "</a></span>"
                    }
                } else {
                    if (m == "page") {
                        t += '<span class="showpageNum"><a class="xpagex" href="#page' + v + '" alt="' + v + '">' + i.previous + "</a></span>"
                    } else {
                        t += '<span class="showpageNum"><a class="xlabelx" href="#page' + v + '" alt="' + v + '">' + i.previous + "</a></span>"
                    }
                }
            }
            if (mulai > 1) {
                if (m == "page") {
                    t += '<span class="showpageNum"><a href="' + g + '">1</a></span>'
                } else {
                    t += '<span class="showpageNum"><a href="/search/label/' + e + "?&max-results=" + i.postperpage + '">1</a></span>'
                }
            }
            if (mulai > 2) {
                t += '<span class="dotxpage"> ... </span>'
            }
            for (var u = mulai; u <= akhir; u++) {
                if (j == u) {
                    t += '<span class="showpagePoint">' + u + "</span>"
                } else {
                    if (u == 1) {
                        if (m == "page") {
                            t += '<span class="showpageNum"><a href="' + g + '">1</a></span>'
                        } else {
                            t += '<span class="showpageNum"><a href="/search/label/' + e + "?&max-results=" + i.postperpage + '">1</a></span>'
                        }
                    } else {
                        if (m == "page") {
                            t += '<span class="showpageNum"><a href="#page' + u + '" class="xpagex" alt="' + u + '">' + u + "</a></span>"
                        } else {
                            t += '<span class="showpageNum"><a href="#page' + u + '" class="xlabelx" alt="' + u + '">' + u + "</a></span>"
                        }
                    }
                }
            }
            if (akhir < maksimal - 1) {
                t += '<span class="dotxpage"> ... </span>'
            }
            if (akhir < maksimal) {
                if (m == "page") {
                    t += '<span class="showpageNum"><a href="#page' + maksimal + '" class="xpagex" alt="' + maksimal + '">' + maksimal + "</a></span>"
                } else {
                    t += '<span class="showpageNum"><a href="#page' + maksimal + '" class="xlabelx" alt="' + maksimal + '">' + maksimal + "</a></span>"
                }
            }
            var r = parseInt(j) + 1;
            if (j < maksimal) {
                if (m == "page") {
                    t += '<span class="showpageNum"><a href="#page' + r + '" class="xpagex" alt="' + r + '">' + i.next + "</a></span>"
                } else {
                    t += '<span class="showpageNum"><a href="#page' + r + '" class="xlabelx" alt="' + r + '">' + i.next + "</a></span>"
                }
            }
            var s = document.getElementsByName("pageArea");
            var q = document.getElementById("blog-pager");
            for (var w = 0; w < s.length; w++) {
                s[w].innerHTML = t
            }
            if (s && s.length > 0) {
                t = ""
            }
            if (q) {
                q.innerHTML = t
            }
            f("#blog-pager")
                .css("display", "block");
            f("#blog-pager a.xpagex, #blog-pager a.xlabelx")
                .click(function () {
                    if (i.loadAjax) {
                        f(".loadingpost")
                            .show()
                    }
                    var p = f(this)
                        .attr("alt");
                    jsonstart = (p - 1) * i.postperpage;
                    l = p;
                    if (m == "page") {
                        f.get(g + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script", h, "jsonp")
                    } else {
                        f.get(g + "feeds/posts/summary/-/" + e + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script", h, "jsonp")
                    }
                    return false
                });
            f(".loadingpost")
                .hide()
        };
        var b = function (o) {
            var q = o.feed;
            var p = parseInt(q.openSearch$totalResults.$t, 10);
            n(p)
        };
        var c = function () {
            var o = d;
            if (o.indexOf("/search/label/") != -1) {
                if (o.indexOf("?updated-max") != -1) {
                    e = o.substring(o.indexOf("/search/label/") + 14, o.indexOf("?updated-max"))
                } else {
                    if (o.indexOf("?&max") != -1) {
                        e = o.substring(o.indexOf("/search/label/") + 14, o.indexOf("?&max"))
                    } else {
                        e = o.substr(o.lastIndexOf("/"))
                    }
                }
            }
            if (o.indexOf("?q=") == -1 && o.indexOf(".html") == -1) {
                if (o.indexOf("/search/label/") == -1) {
                    m = "page";
                    if (d.indexOf("#PageNo=") != -1) {
                        j = d.substring(d.indexOf("#PageNo=") + 8, d.length)
                    } else {
                        j = 1
                    }
                    f.get(g + "feeds/posts/summary?max-results=1&alt=json-in-script", b, "jsonp")
                } else {
                    m = "label";
                    if (o.indexOf("&max-results=") == -1) {
                        i.postperpage = 20
                    }
                    if (d.indexOf("#PageNo=") != -1) {
                        j = d.substring(d.indexOf("#PageNo=") + 8, d.length)
                    } else {
                        j = 1
                    }
                    f.get(g + "feeds/posts/summary/-/" + e + "?max-results=1&alt=json-in-script", b, "jsonp")
                }
            }
        };
        c();
        var h = function (p) {
            post = p.feed.entry[0];
            var o = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29);
            var t = encodeURIComponent(o);
            if (m == "page") {
                var q = "/search?updated-max=" + t + "&max-results=" + i.postperpage + "#PageNo=" + l
            } else {
                var q = "/search/label/" + e + "?updated-max=" + t + "&max-results=" + i.postperpage + "#PageNo=" + l
            }
            if (!i.loadAjax) {
                location.href = q
            } else {
                var s = function (u) {
                    f.getScript("http://" + u + ".disqus.com/blogger_index.js")
                };
                var r = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
                f.get(q, "html")
                    .done(function (v) {
                        var u = f("<div></div>")
                            .append(v.replace(r, ""));
                        var w = u.find("div.blog-posts")
                            .children(".date-outer");
                        w.find(".post-summary")
                            .each(function () {
                                var B, G, P, D, K, R, C, z, y, H, E, O, L, M, F, Q, x, I = "",
                                    A = "";
                                G = f(this)
                                    .parent(".post-body");
                                P = G.children("textarea")
                                    .val();
                                x = P.replace(/<(.*?)>/g, "")
                                    .replace(/[\n\r]+/g, " ");
                                D = f(this)
                                    .find("img");
                                parens = f(this)
                                    .parents(".post");
                                R = parens.find(".post-title.entry-title a")
                                    .attr("href");
                                titlex = parens.find(".post-title.entry-title a")
                                    .text();
                                Q = parens.find(".index-post-labels")
                                    .html();
                                H = f(this)
                                    .attr("id");
                                E = H.replace("summaryContainer-", "");
                                K = D.attr("src");
                                f.get(window.location.protocol + "//" + window.location.host + "/feeds/posts/default/" + E + "?alt=json-in-script", function (T) {
                                    z = T.entry;
                                    if (z !== undefined) {
                                        L = z.author[0].name.$t;
                                        M = z.author[0].gd$image.src.replace(/\/s[0-9]+(\-c|\/)/, "/s40$1");
                                        F = (z.author[0].uri) ? '<a title="' + L + '" href="' + z.author[0].uri.$t + '"><img title="' + L + '" src="' + M + '"/></a>' : '<img title="' + L + '" src="' + M + '"/>'
                                    } else {
                                        F = '<img title="Guest" src="http://1.bp.blogspot.com/-htG7vy9vIAA/Tp0KrMUdoWI/AAAAAAAABAU/e7XkFtErqsU/s180-c/grey.gif"/>'
                                    }
                                    var S = f("#" + H)
                                        .parents(".post");
                                    S.append('<span class="authoravatar">' + F + "</span>")
                                }, "jsonp");
                                C = encodeURIComponent(R);
                                O = encodeURIComponent(titlex);
                                var N = [{
                                    name: "Facebook",
                                    url: "http://www.facebook.com/share.php?u=" + C + "&t=" + O
                                }, {
                                    name: "Twitter",
                                    url: "https://twitter.com/intent/tweet?text=" + O + "&amp;url=" + C
                                }, {
                                    name: "Google Plus",
                                    url: "https://plus.google.com/share?url=" + C
                                }];
                                for (var J = 0; J < N.length; J++) {
                                    I += '<a target="_blank" title="Share to ' + N[J].name + '" class="' + N[J].name.replace(" ", "-")
                                        .toLowerCase() + '" href="' + N[J].url + '"><i class="icon-' + N[J].name.replace(" ", "-")
                                        .toLowerCase() + '"></i></a>'
                                }
                                y = '<div class="socialpostshare">' + I + "</div>";
                                B = '<div class="thumbimage imglatest"><a class="thumbimgx" title="' + titlex + '" href="' + R + '"><span class="mark"><i class="fa fa-link"></i></span><img onload="resizeimage(event);" class="post-thumbnail" src="' + K.replace(/\/s[0-9]+(\-c)?\//, "/" + i.thumbnailSize + "/") + '" alt="' + titlex + '"></a></div>';
                                if (K.indexOf("img.youtube.com") != -1) {
                                    B = '<div class="thumbimage imglatest"><a class="thumbimgx" title="' + titlex + '" href="' + R + '"><span class="mark"><i class="fa fa-link"></i></span><img onload="resizeimage(event);" class="post-thumbnail" src="' + K.replace("default", "0") + '" alt="' + titlex + '"><span class="youtubeplay"><i class="fa fa-youtube-play"></i></span></a></div>'
                                }
                                A = B + '<span class="index-post-labels">' + Q + '</span><strong><a class="titlex" href="' + R + '">' + titlex + "</a></strong><p>" + x.substring(0, i.summaryLength) + "&hellip;</p>" + y;
                                f(this)
                                    .html(A)
                            });
                        f("div.blog-posts")
                            .html(w);
                        viewMode({
                            viewmodedefault: i.viewmodedefault,
                            cookielist: i.cookielist,
                            cookiegrid: i.cookiegrid
                        });
                        d = q;
                        c();
                        changeimage();
                        if (window._gaq) {
                            window._gaq.push(["_trackPageview", i.olderPostsLink])
                        }
                        if (window.gapi && window.gapi.plusone && window.gapi.plusone.go) {
                            window.gapi.plusone.go()
                        }
                        if (window.disqus_shortname) {
                            s(window.disqus_shortname)
                        }
                        if (window.FB && window.FB.XFBML && window.FB.XFBML.parse) {
                            window.FB.XFBML.parse()
                        }
                    })
            }
        }
    })(jQuery)
};
//Ajax Newsticker by MKR
function NewsTicker(a) {
    (function (c) {
        var b = Alldefaultconfig;
        var d = {
            blogURL: "",
            MaxPost: 12,
            Speed: 0.07,
            titleText: b.NewsTickerText,
            Summarylength: b.summaryLength,
            Container: "#newsticker",
            MonthNames: b.monthName,
            pBlank: b.BackupImage,
            tagName: false
        };
        d = c.extend({}, d, a);
        c.get((d.blogURL === "" ? window.location.protocol + "//" + window.location.host : d.blogURL) + "/feeds/posts/default" + (d.tagName === false ? "" : "/-/" + d.tagName) + "?max-results=" + d.MaxPost + "&orderby=published&alt=json-in-script", function (y) {
            var B, h, o, t, D, v, m, A, E, q, C, g, x, e = [],
                z, p, k = "",
                f = y.feed.entry;
            if (f !== undefined) {
                var n = f.length;
                for (var w = 0; w < n; w++) {
                    var s = f[w].link.length;
                    for (var u = 0; u < s; u++) {
                        if (f[w].link[u].rel == "alternate") {
                            B = f[w].link[u].href;
                            break
                        }
                    }
                    for (var r = 0; r < s; r++) {
                        if (f[w].link[r].rel == "replies" && f[w].link[r].type == "text/html") {
                            E = f[w].link[r].title.split(" ")[0];
                            break
                        }
                    }
                    A = ("content" in f[w]) ? f[w].content.$t : ("summary" in f[w]) ? f[w].summary.$t : "";
                    if ("media$thumbnail" in f[w]) {
                        q = f[w].media$thumbnail.url
                    } else {
                        if ((e = A.match(/https?:\/\/.+?\.(jpg|gif|png|bmp)/gi)) != null) {
                            q = e[0]
                        } else {
                            q = d.pBlank
                        }
                    }
                    h = f[w].title.$t;
                    A = A.replace(/<\S[^>]*>/g, "")
                        .replace(/"/g, "&quot;");
                    if (A.length > d.Summarylength) {
                        A = A.substring(0, d.Summarylength) + "..."
                    }
                    z = f[w].published.$t.substring(0, 10);
                    o = z.substring(0, 4);
                    t = z.substring(5, 7);
                    D = z.substring(8, 10);
                    v = d.MonthNames[parseInt(t, 10) - 1];
                    m = f[w].published.$t.substring(11, 16);
                    g = m.substring(0, 2);
                    x = m.substring(2, 5);
                    if (g < 12) {
                        p = "AM"
                    } else {
                        p = "PM"
                    }
                    if (g === 0) {
                        g = 12
                    }
                    if (g > 12) {
                        g = g - 12
                    }
                    k += '<li data-comment="' + E + '" data-date="' + v + " " + D + ", " + o + " " + g + "" + x + " " + p + '" data-description="' + A + '" data-image="' + q + '" data-title="' + h + '" class="news-item"><div class="thumbimage newstickimg"><a class="newstickerimg" title="' + v + " " + D + ", " + o + " " + g + "" + x + " " + p + '" href="' + B + '"><img onload="resizeimage(event);" src="' + q + '"/></a></div><h4><a class="title" href="' + B + '">' + h + "</a></h4></li>"
                }
                c(d.Container)
                    .html('<div class="ticknews"><span class="newstitle"><span>' + d.titleText + '</span></span><ul id="newstick">' + k + "</ul></div>");
                c(d.Container)
                    .find(".thumbimage img")
                    .each(function () {
                        xlink = c(this)
                            .attr("src");
                        xparents = c(this)
                            .parent();
                        xadami = xparents.find(".youtubeplay");
                        if (xlink.indexOf("img.youtube.com") != -1 && !xadami.length) {
                            xparents.append('<span class="youtubeplay"><i class="fa fa-youtube-play"></i></span>')
                        }
                    });
                c(d.Container + " #newstick")
                    .liScroll({
                        travelocity: d.Speed
                    });
                c("#content-wrapper, #header-wrapper")
                    .mouseenter(function () {
                        c(".postinfo")
                            .filter(":not(:animated)")
                            .hide()
                            .removeClass("whitex")
                    })
                    .mousemove(function () {
                        c(".postinfo")
                            .filter(":not(:animated)")
                            .hide()
                            .removeClass("whitex")
                    });
                c(".ticknews li")
                    .mouseenter(function () {
                        var G = c(this)
                            .attr("data-title");
                        var F = c(this)
                            .attr("data-image");
                        var j = c(this)
                            .attr("data-description");
                        var i = c(this)
                            .attr("data-date");
                        var l = c(this)
                            .attr("data-comment");
                        c(".postinfo")
                            .html('<div class="inner"><img src="' + F + '"/><strong>' + G + '</strong><span><i class="fa fa-clock-o"></i> ' + i + ' <i class="fa fa-comments-o"></i> ' + l + "</span><p>" + j + "</p></div>");
                        c(".postinfo")
                            .filter(":not(:animated)")
                            .fadeIn(700)
                    })
                    .mousemove(function (I) {
                        var H = c(window)
                            .width(),
                            j = c(window)
                            .height(),
                            i = c(".postinfo")
                            .outerWidth(),
                            l = c(".postinfo")
                            .outerHeight(),
                            G = I.pageY + 20,
                            F = I.pageX + 10;
                        if (c("#outer-wrapper")
                            .hasClass("rtl")) {
                            F = I.pageX - (i + 10)
                        }
                        if (F + i > H) {
                            F = H - i - 10
                        } else {
                            if (F < 0) {
                                F = 10
                            }
                        }
                        c(".postinfo")
                            .css({
                                top: G,
                                left: F
                            })
                    })
                    .mouseleave(function () {
                        c(".postinfo")
                            .filter(":not(:animated)")
                            .hide()
                            .html("")
                    })
            } else {
                c(d.Container)
                    .html("<span>No result!</span>")
            }
        }, "jsonp")
    })(jQuery)
};
//Ajax RPBT by MKR
(function (c) {
    var a = Alldefaultconfig,
        b = configSummary;
    c.RecentPostbyTag = function (e, d) {
        var f = this;
        f.$el = c(e);
        f.init = function () {
            f.options = c.extend({}, c.RecentPostbyTag.defaultOptions, d);
            f.$el.html('<div class="rcbytag ' + f.options.postType + "" + (f.options.sliderType === "f" ? " box_skitter box_skitter_home ijonkz-theme" : "") + '"><ul class="rcentpost ' + f.options.sliderType + "" + (f.options.animated ? " animated" : !f.options.ShowImage ? " noimage" : "") + '"></ul></div>')
                .addClass(f.options.loadingClass);
            var h = c(e)
                .parents(".widget");
            var g = h.children("h2");
            if (!g.length && f.options.sliderType !== "f") {
                h.prepend('<h2 class="title">' + (f.options.tagName !== false ? f.options.tagName : f.options.Random ? "Random Post" : "Recent Post") + "</h2>")
            }
            var i = function (H) {
                var M, p, L, I, J, z, D, m = [],
                    O, y, w, C, N, F, K, r = "",
                    n = (f.options.Random === true ? shuffleArray(H.feed.entry) : H.feed.entry);
                if (n !== undefined) {
                    var v = f.$el.find(".recntmore");
                    var k = f.$el.find("ul li");
                    var u = n.length;
                    for (var G = 0; G < u; G++) {
                        var B = n[G].link.length;
                        for (var E = 0; E < B; E++) {
                            if (n[G].link[E].rel == "alternate") {
                                M = n[G].link[E].href;
                                break
                            }
                        }
                        for (var A = 0; A < B; A++) {
                            if (n[G].link[A].rel == "replies" && n[G].link[A].type == "text/html") {
                                O = n[G].link[A].title.split(" ")[0];
                                break
                            }
                        }
                        L = ("content" in n[G]) ? n[G].content.$t : ("summary" in n[G]) ? n[G].summary.$t : "";
                        if ("media$thumbnail" in n[G]) {
                            y = n[G].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/" + f.options.ImageSize);
                            if (n[G] === n[0] && f.options.postType !== "s" && !k.length) {
                                y = n[G].media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/" + f.options.FirstImageSize)
                            } else {
                                if (n[G].media$thumbnail.url.indexOf("img.youtube.com") != -1) {
                                    y = n[G].media$thumbnail.url.replace("default", "0")
                                }
                            }
                        } else {
                            if ((m = L.match(/https?:\/\/.+?\.(jpg|gif|png|bmp)/gi)) != null) {
                                y = m[0]
                            } else {
                                y = f.options.pBlank
                            }
                        }
                        L = L.replace(/<\S[^>]*>/g, "")
                            .replace(/"/g, "&quot;");
                        if (L.length > f.options.Summarylength) {
                            L = L.substring(0, f.options.Summarylength) + "..."
                        }
                        p = n[G].title.$t;
                        K = n[G].published.$t.substring(0, 10);
                        w = K.substring(0, 4);
                        C = K.substring(5, 7);
                        N = K.substring(8, 10);
                        F = f.options.MonthNames[parseInt(C, 10) - 1];
                        I = n[G].author[0].name.$t;
                        J = n[G].author[0].gd$image.src.replace(/\/s[0-9]+(\-c|\/)/, "/s40$1");
                        z = (n[G].author[0].uri ? '<a title="' + I + '" href="' + n[G].author[0].uri.$t + '"><img title="' + I + '" src="' + J + '"/></a>' : '<img title="' + I + '" src="' + J + '"/>');
                        D = '<a target="_blank" title="Share to Facebook" class="facebook" href="http://www.facebook.com/share.php?u=' + encodeURIComponent(M) + "&t=" + encodeURIComponent(p) + '"><i class="fa fa-facebook"></i></a><a target="_blank" title="Share to Twitter" class="twitter" href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(p) + "&amp;url=" + encodeURIComponent(M) + '"><i class="fa fa-twitter"></i></a><a target="_blank" title="Share to Google Plus" class="google-plus" href="https://plus.google.com/share?url=' + encodeURIComponent(M) + '"><i class="fa fa-google-plus"></i></a>';
                        if (f.options.sliderType === "f") {
                            r += '<li><a title="' + p + '" class="feathumb" href="' + M + '"><img class="random" src="' + y + '"/></a><div class="label_text"><div class="inner"><strong class="titlex"><a href="' + M + '">' + p + "</a></strong><p>" + L + "</p></div></div></li>"
                        } else {
                            r += '<li class="a' + G + '"><div ' + (f.options.postType === "g1" || f.options.postType === "g2" || !f.options.ShowImage ? 'data-comment="' + O + '" data-date="' + F + " " + N + ", " + w + '" data-description="' + L + '" data-image="' + y + '" data-title="' + p + '" class="inner infonya"' : 'title="' + p + '" class="inner"') + " >" + (f.options.ShowImage ? '<div class="thumbimage rcpbtag"><a class="thumbxtag" href="' + M + '"><img onload="resizeimage(event);" src="' + y + '"/></a></div>' : "") + '<strong><a href="' + M + '">' + p + '</a></strong><div class="info">' + (f.options.ShowDate === true ? '<span class="date"><i class="fa fa-clock-o"></i><span class="dm">' + F + '</span> <span class="dd">' + N + '</span>, <span class="dy">' + w + "</span></span>" : "") + (f.options.ShowComment === true ? '<span class="comnum"><i class="fa fa-comments-o"></i><a href="' + M + '#comment-form">' + O + "</a></span>" : "") + "</div><p " + (f.options.ShowDesc === false ? "" : 'style="display:block"') + ">" + L + '</p><span class="authoravatar">' + z + '</span><div class="socialpostshare">' + D + "</div></div></li>" + (n[G] === n[0] && f.options.postType !== "s" && !k.length ? '<div class="loadmorepost"></div><div class="recntright ' + (f.options.animated === true ? "animated" : "") + '"><ul>' : "") + (n[G] === n[u + 1] && f.options.postType !== "s" && !k.length ? "</ul>" + t + "</div>" : "")
                        }
                    }
                    if (v.length && !f.options.animated) {
                        f.$el.find(".mCSB_container")
                            .append(r);
                        f.$el.find(".recntright ul")
                            .mCustomScrollbar("update")
                    } else {
                        c("ul", f.$el)
                            .append(r)
                    }
                    f.$el.find(".thumbimage img")
                        .each(function () {
                            xlink = c(this)
                                .attr("src");
                            xparents = c(this)
                                .parent();
                            xadami = xparents.find(".youtubeplay");
                            if (xlink.indexOf("img.youtube.com") != -1 && !xadami.length) {
                                xparents.append('<span class="youtubeplay"><i class="fa fa-youtube-play"></i></span>')
                            }
                        });
                    if (f.options.postType === "s") {
                        if (f.options.sliderType === "c") {
                            if (f.options.tagName != false) {
                                g.wrapInner('<a href="/search/label/' + encodeURIComponent(f.options.tagName) + '"/>')
                            }
                            var o;
                            var s;
                            var q = f.$el.width();
                            if (q < 300) {
                                o = 1;
                                s = q / o
                            } else {
                                if (q < 450) {
                                    o = 2;
                                    s = q / o
                                } else {
                                    if (q < 700) {
                                        o = 3;
                                        s = q / o
                                    } else {
                                        o = 4;
                                        s = q / o
                                    }
                                }
                            }
                            f.$el.find("ul.rcentpost")
                                .jcarousel({
                                    easing: "easeInOutQuint",
                                    animation: 800,
                                    auto: 4,
                                    wrap: "last",
                                    rtl: c("#outer-wrapper")
                                        .hasClass("rtl"),
                                    scroll: o,
                                    setupCallback: function (l) {
                                        l.reload()
                                    },
                                    reloadCallback: function (P) {
                                        var l = Math.floor(P.clipping() / s);
                                        P.options.scroll = l;
                                        P.options.visible = l
                                    },
                                    initCallback: function (l) {
                                        f.$el.find("ul.rcentpost")
                                            .mousewheel(function (P, Q) {
                                                if (Q > 0) {
                                                    l.prev()
                                                } else {
                                                    if (Q < 0) {
                                                        l.next()
                                                    }
                                                }
                                            })
                                    }
                                })
                        } else {
                            f.$el.find(".box_skitter_home.ijonkz-theme")
                                .skitter({
                                    label: true,
                                    numbers: true,
                                    auto_play: true,
                                    numbers_align: "right",
                                    dots: true,
                                    preview: true,
                                    structure: '<a href="#" class="prev_button"><span>prev</span></a><a href="#" class="next_button"><span>next</span></a><span class="info_slide"></span><div class="container_skitter"><div class="image"><a href=""><img class="image_main" /></a><div class="label_skitter"></div></div></div>',
                                    width_label: "90%",
                                    opacity_elements: 1
                                });
                            var x = function () {
                                f.$el.find(".container_skitter")
                                    .removeAttr("style")
                            };
                            c(window)
                                .resize(x)
                        }
                    } else {
                        var t = (f.options.tagName !== false ? '<div class="morepostag"><a class="recntmore" title="' + f.options.MoreText + " " + f.options.tagName + '" href="/search/label/' + encodeURIComponent(f.options.tagName) + "?&max-results=" + f.options.MoreNumPost + '">' + f.options.MoreText + " " + f.options.tagName + "</a></div>" : '<div class="morepostag rect"><a class="recntmore" title="' + f.options.LoadMoreText + '" href="#">' + f.options.LoadMoreText + "</a></div>");
                        if (!v.length) {
                            f.$el.find(".recntright")
                                .append(t);
                            if (!f.options.animated && f.options.postType !== "g2") {
                                f.$el.find(".recntright ul")
                                    .mCustomScrollbar()
                            }
                        }
                        if (!f.options.AjaxLoad || f.options.animated || f.options.Random) {
                            f.$el.find(".morepostag.rect")
                                .hide()
                        }
                        if (f.options.animated) {
                            f.$el.find(".recntright.animated ul")
                                .jcarousel({
                                    easing: "easeInOutQuint",
                                    animation: 800,
                                    auto: 4,
                                    vertical: true,
                                    rtl: c("#outer-wrapper")
                                        .hasClass("rtl"),
                                    wrap: "last",
                                    scroll: 2,
                                    setupCallback: function (l) {
                                        l.reload()
                                    },
                                    reloadCallback: function (P) {
                                        var l = Math.floor(P.clipping() / 81);
                                        P.options.scroll = 2;
                                        P.options.visible = l
                                    },
                                    initCallback: function (l) {
                                        f.$el.find(".recntright.animated ul")
                                            .mousewheel(function (P, Q) {
                                                if (Q > 0) {
                                                    l.prev()
                                                } else {
                                                    if (Q < 0) {
                                                        l.next()
                                                    }
                                                }
                                            })
                                    }
                                });
                            f.$el.find(".morepostag")
                                .hide();
                            f.$el.find(".loadmorepost")
                                .hide()
                        }
                        if (k.length + f.options.MaxPost >= H.feed.openSearch$totalResults.$t || f.options.Random) {
                            f.$el.find(".morepostag")
                                .hide()
                        }
                        f.$el.find(".loadmorepost")
                            .fadeOut();
                        if (f.options.postType === "g1" || f.options.postType === "g2" || !f.options.ShowImage) {
                            f.$el.find(".rcbytag .infonya")
                                .mouseenter(function () {
                                    var S = c(this)
                                        .attr("data-title");
                                    var R = c(this)
                                        .attr("data-image");
                                    var P = c(this)
                                        .attr("data-description");
                                    var l = c(this)
                                        .attr("data-date");
                                    var Q = c(this)
                                        .attr("data-comment");
                                    c(".postinfo")
                                        .html('<div class="inner"><img src="' + R + '"/><strong>' + S + '</strong><span><i class="fa fa-clock-o"></i> ' + l + ' <i class="fa fa-comments-o"></i> ' + Q + "</span><p>" + P + "</p></div>");
                                    c(".postinfo")
                                        .filter(":not(:animated)")
                                        .fadeIn(700)
                                })
                                .mousemove(function (U) {
                                    var T = c(window)
                                        .width(),
                                        P = c(window)
                                        .height(),
                                        l = c(".postinfo")
                                        .outerWidth(),
                                        Q = c(".postinfo")
                                        .outerHeight(),
                                        S = U.pageY + 20,
                                        R = U.pageX + 10;
                                    if (c("#outer-wrapper")
                                        .hasClass("rtl")) {
                                        R = U.pageX - (l + 10)
                                    }
                                    if (R + l > T) {
                                        R = T - l - 10
                                    } else {
                                        if (R < 0) {
                                            R = 10
                                        }
                                    }
                                    c(".postinfo")
                                        .css({
                                            top: S,
                                            left: R
                                        })
                                })
                                .mouseleave(function () {
                                    c(".postinfo")
                                        .filter(":not(:animated)")
                                        .hide()
                                        .html("")
                                });
                            f.$el.find(".rcbytag")
                                .on("mousemove", function (l) {
                                    l.stopPropagation()
                                })
                        }
                    }
                    f.$el.removeClass(f.options.loadingClass)
                } else {
                    f.$el.html("<span>No result! Or Error Loading Feed</span>")
                }
            };
            if (f.options.Random) {
                c.get((f.options.blogURL === "" ? window.location.protocol + "//" + window.location.host : f.options.blogURL) + "/feeds/posts/summary" + (f.options.tagName === false ? "" : "/-/" + f.options.tagName) + "?max-results=0&orderby=published&alt=json-in-script", function (k) {
                    var l = (f.options.MaxPost > k.feed.openSearch$totalResults.$t) ? 1 : getRandomInt(1, (k.feed.openSearch$totalResults.$t - f.options.MaxPost));
                    c.get((f.options.blogURL === "" ? window.location.protocol + "//" + window.location.host : f.options.blogURL) + "/feeds/posts/default" + (f.options.tagName === false ? "" : "/-/" + f.options.tagName) + "?max-results=" + f.options.MaxPost + "&orderby=published&start-index=" + l + "&alt=json-in-script", i, "jsonp")
                }, "jsonp")
            } else {
                var j = c.get((f.options.blogURL === "" ? window.location.protocol + "//" + window.location.host : f.options.blogURL) + "/feeds/posts/default" + (f.options.tagName === false ? "" : "/-/" + f.options.tagName) + "?max-results=" + f.options.MaxPost + "&orderby=published&alt=json-in-script", i, "jsonp");
                c.when(j)
                    .done(function () {
                        if (f.options.AjaxLoad) {
                            f.$el.find(".morepostag a.recntmore")
                                .click(function () {
                                    f.$el.find(".loadmorepost")
                                        .fadeIn();
                                    var l = f.$el.find("ul li");
                                    var k = l.length + 1;
                                    c.get((f.options.blogURL === "" ? window.location.protocol + "//" + window.location.host : f.options.blogURL) + "/feeds/posts/default" + (f.options.tagName === false ? "" : "/-/" + f.options.tagName) + "?max-results=" + f.options.MaxPost + "&orderby=published&start-index=" + k + "&alt=json-in-script", i, "jsonp");
                                    return false
                                })
                        }
                    })
            }
        };
        f.init()
    };
    c.RecentPostbyTag.defaultOptions = {
        blogURL: "",
        MaxPost: a.MaxPost,
        FirstImageSize: a.FirstImageSize,
        ImageSize: a.ImageSize,
        ShowDesc: false,
        ShowDate: true,
        ShowComment: true,
        ShowImage: true,
        Random: false,
        Summarylength: a.summaryLength,
        MoreText: a.viewMoreText,
        LoadMoreText: a.MoreText,
        MoreNumPost: b.postPerPage,
        AjaxLoad: true,
        animated: false,
        postType: "v",
        sliderType: "c",
        loadingClass: "loadingxx",
        pBlank: a.BackupImage,
        MonthNames: a.monthName,
        tagName: false
    };
    c.fn.RecentPostbyTag = function (d) {
        return this.each(function () {
            (new c.RecentPostbyTag(this, d))
        })
    }
})(jQuery);
//Ajax Related Post by MKR
function relatedPostsWidget(a) {
    (function (e) {
        var h = Alldefaultconfig;
        var f = {
            blogURL: "",
            maxPosts: 8,
            maxTags: 4,
            maxPostsPerTag: 6,
            containerSelector: "#related_posts",
            tags: null,
            loadingText: "",
            loadingClass: "loadingxx",
            relevantTip: "",
            MonthNames: h.monthName,
            rlt_summary: 100,
            ShowDate: true,
            relatedTitle: h.RelatedTitle,
            readMoretext: "[...]",
            rlpBlank: h.BackupImage,
            rlt_thumb: 200,
            recentTitle: h.RecentTitle,
            postScoreClass: "",
            onLoad: false
        };
        f = e.extend({}, f, a);
        var l = 0,
            b = null,
            g = null;
        if (!f.containerSelector) {
            document.write('<div id="related_posts"></div>');
            f.containerSelector = "#related_posts"
        }
        var c = function (y, s) {
            l++;
            if (y.feed.entry) {
                for (var x = 0; x < y.feed.entry.length; x++) {
                    var n = y.feed.entry[x];
                    var p, q, D, r, C, o, u, B, w, z, m = [],
                        A = "";
                    for (var v = 0, t = n.link.length; v < t; v++) {
                        if (n.link[v].rel == "alternate") {
                            A = n.link[v].href;
                            break
                        }
                    }
                    p = ("content" in n) ? n.content.$t : ("summary" in n) ? n.summary.$t : "";
                    if ("media$thumbnail" in n) {
                        q = n.media$thumbnail.url.replace(/\/s[0-9]+\-c/g, "/s" + f.rlt_thumb + "-c");
                        if (n.media$thumbnail.url.indexOf("img.youtube.com") != -1) {
                            q = n.media$thumbnail.url.replace("default", "0")
                        }
                    } else {
                        if ((m = p.match(/https?:\/\/.+?\.(jpg|gif|png|bmp)/gi)) != null) {
                            q = m[0]
                        } else {
                            q = f.rlpBlank
                        }
                    }
                    p = p.replace(/<\S[^>]*>/g, "");
                    if (p.length > f.rlt_summary) {
                        p = p.substring(0, f.rlt_summary)
                    }
                    D = n.title.$t;
                    z = n.published.$t.substring(0, 10);
                    o = z.substring(0, 4);
                    u = z.substring(5, 7);
                    B = z.substring(8, 10);
                    w = f.MonthNames[parseInt(u, 10) - 1];
                    if (location.href.toLowerCase() != A.toLowerCase()) {
                        k(A, D, q, p, o, B, w)
                    }
                }
            }
            if (l >= f.tags.length) {
                g.attr("class", "");
                e("#related-posts-loadingtext", b)
                    .remove();
                if (f.maxPosts > 0) {
                    e("li:gt(" + (f.maxPosts - 1) + ")", g)
                        .remove()
                }
                e(f.containerSelector)
                    .find(".thumbimage img")
                    .each(function () {
                        xlink = e(this)
                            .attr("src");
                        xparents = e(this)
                            .parent();
                        xadami = xparents.find(".youtubeplay");
                        if (xlink.indexOf("img.youtube.com") != -1 && !xadami.length) {
                            xparents.append('<span class="youtubeplay"><i class="fa fa-youtube-play"></i></span>')
                        }
                    });
                setTimeout(function () {
                    var E;
                    var F;
                    var G = e(f.containerSelector);
                    if (e(window)
                        .width() < 479) {
                        E = 1;
                        F = G.width() / E
                    } else {
                        if (e(window)
                            .width() < 980) {
                            E = 2;
                            F = G.width() / E
                        } else {
                            if (e(window)
                                .width() < 1030) {
                                E = 3;
                                F = G.width() / E
                            } else {
                                E = 4;
                                F = G.width() / E
                            }
                        }
                    }
                    e("ul", G)
                        .jcarousel({
                            easing: "easeInOutQuint",
                            animation: 800,
                            auto: 4,
                            wrap: "last",
                            scroll: E,
                            setupCallback: function (H) {
                                H.reload()
                            },
                            reloadCallback: function (I) {
                                var H = Math.floor(I.clipping() / F);
                                I.options.scroll = H;
                                I.options.visible = H
                            }
                        })
                }, 2000)
            }
        };
        var k = function (r, v, x, n, z, w, y) {
            var s = e("li", g);
            for (var q = 0, m = s.length; q < m; q++) {
                var u = e("a", s.eq(q));
                var t = j(u);
                if (u.attr("href") == r) {
                    i(u, ++t);
                    for (var p = q - 1; p >= 0; p--) {
                        var o = e("a", s.eq(p));
                        if (j(o) > t) {
                            if (q - p > 1) {
                                s.eq(p)
                                    .after(s.eq(q))
                            }
                            return
                        }
                    }
                    if (q > 0) {
                        s.eq(0)
                            .before(s.eq(q))
                    }
                    return
                }
            }
            g.append('<li><div class="inner"><a class="jdlunya" href="' + r + '" title="' + (f.relevantTip ? f.relevantTip.replace("\d", 1) : "") + '"><div class="thumbimage rltdimg"><span class="gmbrrltd"><img onload="resizeimage(event);" alt="' + v + '" src="' + x + '"/></span></div><strong>' + v + "</strong></a><p>" + n + '<a title="' + v + '" href="' + r + '">' + f.readMoretext + "</a></p>" + (f.ShowDate === true ? '<span class="date"><i class="fa fa-clock-o"></i><span class="dm">' + y + '</span> <span class="dd">' + w + '</span>, <span class="dy">' + z + "</span></span>" : "") + "</div></li>")
        };
        var j = function (m) {
            var n = parseInt(m.attr("score"));
            return n > 0 ? n : 1
        };
        var i = function (m, n) {
            m.attr("score", n);
            if (f.relevantTip) {
                m.attr("title", f.relevantTip.replace("\d", n))
            }
            if (f.postScoreClass) {
                m.attr("class", f.postScoreClass + n)
            }
        };
        var d = function () {
            if (f.containerSelector != "#related_posts") {
                var m = e(f.containerSelector);
                if (m.length != 1) {
                    return
                }
                b = e('<div id="related_posts"></div>')
                    .appendTo(m)
            } else {
                b = e(f.containerSelector)
            }
            if (!f.tags) {
                f.tags = [];
                e('a[rel="tag"]:lt(' + f.maxTags + ")")
                    .each(function () {
                        var p = e.trim(e(this)
                            .text()
                            .replace(/\n/g, ""));
                        if (e.inArray(p, f.tags) == -1) {
                            f.tags[f.tags.length] = p
                        }
                    })
            }
            if (f.tags.length == 0 && !f.recentTitle) {
                return
            }
            if (f.tags.length == 0) {
                e("<h4><span>" + f.recentTitle + "</span></h4>")
                    .appendTo(b)
            } else {
                if (f.relatedTitle) {
                    e("<h4><span>" + f.relatedTitle + "</span></h4>")
                        .appendTo(b)
                }
            }
            if (f.loadingText) {
                e('<div id="related-posts-loadingtext">' + f.loadingText + "</div>")
                    .appendTo(b)
            }
            g = e("<ul " + (f.loadingClass ? 'class="' + f.loadingClass + '"' : "") + "></ul>")
                .appendTo(b);
            if (f.tags.length == 0) {
                e.get((f.blogURL === "" ? window.location.protocol + "//" + window.location.host : f.blogURL) + "/feeds/posts/default?max-results=" + f.maxPostsPerTag + "&orderby=published&alt=json-in-script", c, "jsonp")
            } else {
                for (var o = 0, n = f.tags.length; o < n; o++) {
                    e.get((f.blogURL === "" ? window.location.protocol + "//" + window.location.host : f.blogURL) + "/feeds/posts/default/-/" + f.tags[o] + "?max-results=" + f.maxPostsPerTag + "&orderby=published&alt=json-in-script", c, "jsonp")
                }
            }
        };
        d()
    })(jQuery)
};
//Manual Featured by MKR
function manualfeaturedPost(e) {
    (function (a) {
        var b = {
                Container: "#main-top-manualslide"
            },
            b = a.extend({}, b, e),
            c = a(b.Container)
            .children(".Image");
        0 < c.length && (a(b.Container)
            .append('<div class="featuredarea"><div class="featuredpost box_skitter box_skitter_home ijonkz-theme"><ul class="featpost"></ul></div></div>'), a(b.Container)
            .addClass("loadingxx"));
        c.each(function () {
            var d = a(this),
                c = d.find("h2")
                .text(),
                e = d.find(".widget-content img")
                .attr("src"),
                f = d.find(".widget-content a")
                .attr("href"),
                d = d.find(".caption")
                .text();
            a("<li/>")
                .append('<a title="' + c + '" class="feathumb" href="' + f + '"><img class="random" src="' + e + '"/></a><div class="label_text"><div class="inner"><strong class="titlex"><a href="' + f + '">' + c + "</a></strong><p>" + d + "</p></div></div>")
                .appendTo(b.Container + " ul.featpost");
            a(this)
                .remove()
        });
        c.length && (a(b.Container + " .box_skitter_home.ijonkz-theme")
            .skitter({
                label: !0,
                numbers: !0,
                auto_play: !0,
                numbers_align: "right",
                dots: !0,
                preview: !0,
                structure: '<a href="#" class="prev_button"><span>prev</span></a><a href="#" class="next_button"><span>next</span></a><span class="info_slide"></span><div class="container_skitter"><div class="image"><a href=""><img class="image_main" /></a><div class="label_skitter"></div></div></div>',
                width_label: "90%",
                opacity_elements: 1
            }), a(window)
            .resize(function () {
                a(b.Container)
                    .find(".container_skitter")
                    .removeAttr("style")
            }), a(b.Container)
            .removeClass("loadingxx"))
    })(jQuery)
};
// CommentMode by MKR
window.commentMode = function () {
    var h = function (c) {
        function d() {
            $(a)
                .slideDown();
            $(b)
                .slideUp();
            e.addClass("active");
            f.removeClass("active");
            createCookie(a, null, 1E4);
            eraseCookie(b);
            return !1
        }

        function g() {
            $(b)
                .slideDown();
            $(a)
                .slideUp();
            e.removeClass("active");
            f.addClass("active");
            createCookie(b, null, 1E4);
            eraseCookie(a);
            return !1
        }
        c = (c || {})
            .Commentmodedefault || Alldefaultconfig.CommentMode;
        var e = $("#comment-post-message a")
            .first(),
            f = $("#comment-post-message a")
            .last(),
            a = e.attr("href"),
            b = f.attr("href");
        readCookie(b) &&
            "blogger" != c ? (g(), eraseCookie(b)) : readCookie(a) && "blogger" != c ? (d(), eraseCookie(a)) : readCookie(b) ? (g(), eraseCookie(b)) : readCookie(a) ? (d(), eraseCookie(a)) : "blogger" != c ? (g(), eraseCookie(b)) : (d(), eraseCookie(a));
        e.click(d);
        f.click(g)
    };
    return function (c) {
        h(c)
    }
}();
// Blogger Comment Emoticon by MKR
window.emoticonx = (function () {
    var b = function (m) {
        var j = m || {},
            l = j.emoRange || ".comments p, div.emoWrap",
            k = j.putEmoAbove || "iframe#comment-editor",
            h = j.topText || "Click to see the code!",
            a = j.emoMessage || "To insert emoticon you must added at least one space before the code.";
        $(k)
            .before('<span class="emobutton"><i class="icon-smile"></i> <b>Emoticon</b></span><div style="text-align:center" class="emoWrap"> :) :)) ;(( :-) =)) ;( ;-( :d :-d @-) :p :o :&gt;) (o) [-( :-? (p) :-s (m) 8-) :-t :-b  b-( :-# =p~ $-) (b) (f) x-) (k) (h) (c) cheer <br/><b>' + h + "</b><br/>" + a + "</div>");
        var i = function (c, d, e) {
            $(l)
                .each(function () {
                    $(this)
                        .html($(this)
                            .html()
                            .replace(/<br>:/g, "<br> :")
                            .replace(/<br>;/g, "<br> ;")
                            .replace(/<br>=/g, "<br> =")
                            .replace(/<br>\^/g, "<br> ^")
                            .replace(c, " <img style='max-height:24px' src='" + d + "' class='emo delayLoad' alt='" + e + "' />"))
                })
        };
        i(/\s:\)\)+/g, "https://lh3.googleusercontent.com/-duNoMAb1RS4/T2WEWrOfR8I/AAAAAAAACZ0/ObgHf-PmTuE/s36/03.gif", ":))");
        i(/\s;\(\(+/g, "https://lh6.googleusercontent.com/-LIr-ZdDp2xI/T2WEYDacVnI/AAAAAAAACaY/W7MF5qKO2sE/s47/06.gif", ";((");
        i(/\s:\)+/g, "https://lh6.googleusercontent.com/-Q5lMkgcmVR4/T2WEWkNi3MI/AAAAAAAACZ4/7VBYeVbx7kA/s36/01.gif", ":)");
        i(/\s:-\)+/g, "https://lh3.googleusercontent.com/-mCsZPeixHvA/T2WEWivv9FI/AAAAAAAACZw/64ZGRgdlDeg/s36/02.gif", ":-)");
        i(/\s=\)\)+/g, "https://lh5.googleusercontent.com/-u__sc3DgZ2c/T2d0_lDLueI/AAAAAAAACkw/YbeuRNde61Q/s36/03a.gif", "=))");
        i(/\s;\(+/g, "https://lh5.googleusercontent.com/-EwonQGBTYwo/T2WEXeVq3oI/AAAAAAAACZ8/4ixt2ZVlqrI/s36/04.gif", ";(");
        i(/\s;-\(+/g, "https://lh3.googleusercontent.com/-fMtAZDakmBI/T2WEXswr5BI/AAAAAAAACaA/83R1X_PumTk/s36/05.gif", ";-(");
        i(/\s:d/ig, "https://lh3.googleusercontent.com/-Em3lvBgvYlI/T2WElbV0BaI/AAAAAAAACdI/ApynphQdka8/s36/7.gif", ":d");
        i(/\s:-d/ig, "https://lh4.googleusercontent.com/-0R7-2DC1klM/T2WEmMQajfI/AAAAAAAACdM/-4JFCeC6QD8/s36/8.gif", ":-d");
        i(/\s@-\)+/g, "https://lh5.googleusercontent.com/-PE2GWBseiGk/T2acYH_uNRI/AAAAAAAAChg/HloTeaRIdyQ/s36/09.gif", "@-)");
        i(/\s:p/ig, "https://lh5.googleusercontent.com/-nkyzLkHUPg8/T2WEYdFqFxI/AAAAAAAACaQ/Mu1yPq91yuc/s36/10.gif", ":p");
        i(/\s:o/ig, "https://lh6.googleusercontent.com/-0-zgLVgK2Cg/T2WEY10FXuI/AAAAAAAACag/dyKQ5pPUIGQ/s36/11.gif", ":o");
        i(/\s:&gt;\)+/g, "https://lh3.googleusercontent.com/-xbWqvOWJNE0/T2WEZM-VLTI/AAAAAAAACak/8dLATIlXRDk/s36/12.gif", ":&gt;)");
        i(/\s\(o\)+/ig, "https://lh4.googleusercontent.com/-cguZVxYzR3o/T2WEZSgFvUI/AAAAAAAACas/nDJgr6YcuaI/s36/13.gif", "(o)");
        i(/\s\[-\(+/g, "https://lh5.googleusercontent.com/-VKGWq-wPGUw/T2WEaEQLA9I/AAAAAAAACa4/ZDnLP29mlgk/s36/14.gif", "[-(");
        i(/\s:-\?/g, "https://lh6.googleusercontent.com/-hIVRIc7IAJw/T2WEaO5ASUI/AAAAAAAACaw/FLmCvzeMSbc/s36/15.gif", ":-?");
        i(/\s\(p\)+/ig, "https://lh4.googleusercontent.com/-hk3q3tP-0Pg/T2WEcRONc5I/AAAAAAAACbY/bJ00rge5Mq8/s36/16.gif", "(p)");
        i(/\s:-s/ig, "https://lh5.googleusercontent.com/-cysJNcXxT-Q/T2WEcxVM5dI/AAAAAAAACbU/Mvuc437f1ZI/s36/17.gif", ":-s");
        i(/\s\(m\)+/ig, "https://lh6.googleusercontent.com/-H20tIsy7Hvw/T2WEbDW0R7I/AAAAAAAACbE/DymXsZOmO3s/s36/18.gif", "(m)");
        i(/\s8-\)+/ig, "https://lh4.googleusercontent.com/-IvNFZtzJJYI/T2WEcDj-0NI/AAAAAAAACbM/kiqtHbdkarQ/s36/19.gif", "8-)");
        i(/\s:-t/ig, "https://lh5.googleusercontent.com/-XCXdaCYaOGE/T2WEcmd15EI/AAAAAAAACbQ/Z5UyZCuX4Xo/s36/20.gif", ":-t");
        i(/\s:-b/ig, "https://lh4.googleusercontent.com/-g6V0tBD1vwk/T2WEdRGJfWI/AAAAAAAACbo/P8P_SGEdhzI/s36/21.gif", ":-b");
        i(/\sb-\(+/ig, "https://lh6.googleusercontent.com/-ErUGB8ea0H4/T2WEdm5-ZSI/AAAAAAAACbs/245Hxnaa82g/s35/22.gif", "b-(");
        i(/\s:-#/ig, "https://lh6.googleusercontent.com/-p-5AT-amLik/T2WEi_MJDqI/AAAAAAAACco/5J-MqivSQw4/s36/23.gif", ":-#");
        i(/\s=p~/ig, "https://lh3.googleusercontent.com/-H8izCFTaHFE/T2b39mmu2NI/AAAAAAAACkM/k4bDdFe301U/s36/24.gif", "=p~");
        i(/\s\$-\)+/ig, "https://lh5.googleusercontent.com/-LZn6dX8GslQ/T2W30lpp_kI/AAAAAAAAChA/Rym2Ql5H-jU/s36/25.gif", "$-)");
        i(/\s\(b\)+/ig, "https://lh5.googleusercontent.com/-k6r8YBUhxVk/T2WEgBtjFtI/AAAAAAAACcE/U5U5uPCpxq8/s36/26.gif", "(b)");
        i(/\s\(f\)+/ig, "https://lh5.googleusercontent.com/-pj6fMvZXTyc/T2WEga9-gjI/AAAAAAAACcM/kVpUCa7uqpw/s36/27.gif'", "(f)");
        i(/\sx-\)+/ig, "https://lh3.googleusercontent.com/-zI2UJmwerDM/T2WEhSRkuTI/AAAAAAAACcc/Gr3xFDrZF3Y/s36/28.gif", "x-)");
        i(/\s\(k\)+/ig, "https://lh3.googleusercontent.com/-ilBYLLWFQJQ/T2WEiJXJ7LI/AAAAAAAACcY/bXpkIPuVUto/s36/29.gif", "(k)");
        i(/\s\(h\)+/ig, "https://lh5.googleusercontent.com/-_NHYkuf5bZg/T2WEjOhTIxI/AAAAAAAACcg/76qRE27R_ig/s36/30.gif", "(h)");
        i(/\s\(c\)+/ig, "https://lh6.googleusercontent.com/-O6m44_Z-8AA/T2WEjLRImnI/AAAAAAAACck/c_jh643HU6o/s36/31.gif", "(c)");
        i(/\scheer/ig, "https://lh5.googleusercontent.com/-9TYEg93ImUM/T2WEjvuhxTI/AAAAAAAACc0/KQRBXuuV_Yg/s36/32.gif", "cheer");
        $("div.emoWrap")
            .one("click", function () {
                if (a) {
                    alert(a)
                }
            });
        $(".emo")
            .css("cursor", "pointer")
            .on("click", function (c) {
                $(".emoKey")
                    .remove();
                $(this)
                    .after('<input class="emoKey" type="text" size="' + this.alt.length + '" value=" ' + this.alt + '" />');
                $(".emoKey")
                    .trigger("select");
                c.stopPropagation()
            });
        $(".emoKey")
            .on("click", function () {
                $(this)
                    .focus()
                    .select()
            });
        $(".emobutton")
            .toggle(function () {
                $(this)
                    .addClass("active");
                $("div.emoWrap")
                    .slideDown();
                return false
            }, function () {
                $(this)
                    .removeClass("active");
                $("div.emoWrap")
                    .slideUp();
                return false
            });
        $(document)
            .on("click", function () {
                $(".emoKey")
                    .remove()
            })
    };
    return function (a) {
        b(a)
    }
})();
// Ajax JSON Recent Comment by MKR
(function (e) {
    e.RecentComments = function (g, q) {
        var a = this;
        a.$el = e(g);
        a.init = function () {
            a.options = e.extend({}, e.RecentComments.defaultOptions, q);
            a.$el.addClass(a.options.loadingClass);
            e.get(("" === a.options.blogURL ? window.location.protocol + "//" + window.location.host : a.options.blogURL) + "/feeds/comments/default?alt=json-in-script&orderby=published", function (c) {
                var e = c.feed.entry;
                if (void 0 !== e) {
                    c = "<ul class='no rcomnetxx'>";
                    for (var p = ntotal = 0; p < a.options.maxfeeds; p++) {
                        var l, m, g, f, k, d, b, n;
                        if (p == e.length) break;
                        if (ntotal >= a.options.numComments) break;
                        b = e[p];
                        d = 0;
                        for (f = b.link.length; d < f; d++) "alternate" == b.link[d].rel && (l = b.link[d].href);
                        d = 0;
                        for (f = b.author.length; d < f; d++) m = b.author[d].name.$t, g = b.author[d].gd$image.src;
                        if (m != a.options.adminBlog && ntotal < a.options.numComments) {
                            ntotal++;
                            c += "<li>";
                            f = "http://img1.blogblog.com/img/blank.gif" == g ? a.options.defaultAvatar : g.replace(/\/s[0-9]+(\-c|\/)/, "/s" + a.options.avatarSize + "$1");
                            d = b.author[0].uri ? b.author[0].uri.$t : "#nope";
                            c += !0 === a.options.Showimage ? '<a class="kmtimg" href="' +
                                d + '"><img src="' + f + '"  title="' + m + '" alt="' + m + '" style="width:' + a.options.avatarSize + "px;height:" + a.options.avatarSize + 'px"/></a>' : "";
                            f = l.lastIndexOf("/") + 1;
                            var r = l.lastIndexOf(".");
                            f = l.split("-")
                                .join(" ")
                                .substring(f, r) + "...";
                            k = b.published.$t.substring(0, 10);
                            var r = k.substring(0, 4),
                                s = k.substring(5, 7);
                            k = k.substring(8, 10);
                            s = a.options.MonthNames[parseInt(s, 10) - 1];
                            n = b.published.$t.substring(11, 16);
                            var h = n.substring(0, 2),
                                q = n.substring(2, 5);
                            n = 12 > h ? "AM" : "PM";
                            0 === h && (h = 12);
                            12 < h && (h -= 12);
                            c += '<div class="ketkomt"><a target="_blank" rel="nofollow" href="' +
                                d + '"><strong>' + m + '</strong></a> on <a class="judulx" href="' + l + '">' + f + '</a><div class="date"><span class="dd">' + k + '</span><span class="dmdy"><span class="dm">' + s + '</span><span class="dy">' + r + '</span></span><span class="timex">' + h + q + " " + n + "</span></div></div>";
                            b = "content" in b ? b.content.$t : "summary" in b ? b.summary.$t : "";
                            b = b.replace(/(<([^>]+)>)/gi, "");
                            "" !== b && b.length > a.options.characters && (b = b.substring(0, a.options.characters), b += "...");
                            c += 0 < a.options.characters ? "<p>" + b + "</p>" : "";
                            c += "</li>"
                        }
                    }
                    a.$el.html(c +
                            "</ul>")
                        .removeClass(a.options.loadingClass)
                } else a.$el.html("<span>No result!</span>")
                    .removeClass(a.options.loadingClass)
            }, "jsonp")
        };
        a.init()
    };
    e.RecentComments.defaultOptions = {
        blogURL: "",
        numComments: 5,
        characters: 100,
        avatarSize: 50,
        loadingClass: "loadingxx",
        Showimage: !0,
        defaultAvatar: "http://4.bp.blogspot.com/-AEWksK942OE/UFiyLzXJhiI/AAAAAAAAFKE/jBegaGPClxI/s70/user-anonymous-icon.png",
        MonthNames: Alldefaultconfig.monthName,
        maxfeeds: 40,
        adminBlog: ""
    };
    e.fn.RecentComments = function (g) {
        return this.each(function () {
            new e.RecentComments(this,
                g)
        })
    }
})(jQuery);
/*!
 highlight v4
 Highlights arbitrary terms.
 <http://johannburkard.de/blog/programming/javascript/highlight-javascript-text-higlighting-jquery-plugin.html>
 MIT license.
 Johann Burkard
 <http://johannburkard.de>
 <mailto:jb@eaio.com>
*/
(function ($) {
    $.fn.highlight = function (pat) {
        function innerHighlight(node, pat) {
            var skip = 0;
            if (node.nodeType == 3) {
                var pos = node.data.toUpperCase()
                    .indexOf(pat);
                if (pos >= 0) {
                    var spannode = document.createElement("span");
                    spannode.className = "highlight";
                    var middlebit = node.splitText(pos);
                    var endbit = middlebit.splitText(pat.length);
                    var middleclone = middlebit.cloneNode(true);
                    spannode.appendChild(middleclone);
                    middlebit.parentNode.replaceChild(spannode, middlebit);
                    skip = 1
                }
            } else {
                if (node.nodeType == 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
                    for (var i = 0; i < node.childNodes.length; ++i) {
                        i += innerHighlight(node.childNodes[i], pat)
                    }
                }
            }
            return skip
        }
        return this.length && pat && pat.length ? this.each(function () {
            innerHighlight(this, pat.toUpperCase())
        }) : this
    };
    $.fn.removeHighlight = function () {
        return this.find("span.highlight")
            .each(function () {
                this.parentNode.firstChild.nodeName;
                with(this.parentNode) {
                    replaceChild(this.firstChild, this);
                    normalize()
                }
            })
            .end()
    }
})(jQuery);
(function (a) {
    a(document)
        .ready(function () {
            var e = a("#text-finder")
                .children()
                .first(),
                c = e.next(),
                d = a(".post-body"),
                f = a("html, body");
            e.on("keyup", function () {
                d.removeHighlight()
                    .highlight(this.value);
                f.scrollTop(0 < d.find("span.highlight")
                    .length ? d.find("span.highlight")
                    .first()
                    .offset()
                    .top - 50 : "")
            });
            c.on("click", function () {
                d.removeHighlight();
                e.val("")
                    .trigger("focus");
                f.scrollTop(0);
                return !1
            });
            c = readCookie("font_size");
            "" != c && null != c && a(".post-body")
                .css("font-size", c + "px");
            a(".zoom-text")
                .click(function () {
                    var b =
                        a(".post-body")
                        .css("font-size"),
                        b = b.replace("px", ""),
                        c = a(this)
                        .attr("class"),
                        b = Number(b); - 1 != c.indexOf("zoom-in-text") ? b++ : b -= 1;
                    createCookie("font_size", b);
                    a(".post-body")
                        .css("font-size", b + "px");
                    return !1
                });
            a(".meta .metabtn")
                .click(function () {
                    a(".topmeta")
                        .slideToggle();
                    a(this)
                        .toggleClass("active");
                    return !1
                })
        })
})(jQuery);

/*!
 * Simple Tab JQuery Plugin by Taufik Nurrohman
 * With some help: http://css-tricks.com/forums/discussion/18008/jquery-plugin-patterns-that-can-be-applied-for-multiple-elements
 * On: 9 June 2012
 * https://plus.google.com/108949996304093815163/about
 */
(function (a) {
    a.fn.simpleTab = function (b) {
        b = jQuery.extend({
            active: 1,
            fx: null,
            showSpeed: 400,
            hideSpeed: 400,
            showEasing: null,
            hideEasing: null,
            show: function () {},
            hide: function () {},
            change: function () {}
        }, b);
        return this.each(function () {
            var e = a(this),
                c = e.children("[data-tab]"),
                d = b.active - 1;
            e.addClass("simpleTab")
                .prepend('<ul class="tab-wrapper"></ul>');
            c.addClass("tab-content")
                .each(function () {
                    a(this)
                        .hide();
                    e.find(".tab-wrapper")
                        .append('<li><a href="#">' + a(this)
                            .data("tab") + "</a></li>")
                })
                .eq(d)
                .show();
            e.find(".tab-wrapper a")
                .on("click", function () {
                    var f = a(this)
                        .parent()
                        .index();
                    a(this)
                        .closest(".tab-wrapper")
                        .find(".activeTab")
                        .removeClass("activeTab");
                    a(this)
                        .addClass("activeTab");
                    if (b.fx == "slide") {
                        if (c.eq(f)
                            .is(":hidden")) {
                            c.slideUp(b.hideSpeed, b.hideEasing, function () {
                                    b.hide.call(e)
                                })
                                .eq(f)
                                .slideDown(b.showSpeed, b.showEasing, function () {
                                    b.show.call(e)
                                })
                        }
                    } else {
                        if (b.fx == "fade") {
                            if (c.eq(f)
                                .is(":hidden")) {
                                c.hide()
                                    .eq(f)
                                    .fadeIn(b.showSpeed, b.showEasing, function () {
                                        b.show.call(e)
                                    })
                            }
                        } else {
                            if (b.fx == "fancyslide") {
                                if (c.eq(f)
                                    .is(":hidden")) {
                                    c.slideUp(b.hideSpeed, b.hideEasing, function () {
                                            b.hide.call(e)
                                        })
                                        .eq(f)
                                        .delay(b.hideSpeed)
                                        .slideDown(b.showSpeed, b.showEasing, function () {
                                            b.show.call(e)
                                        })
                                }
                            } else {
                                if (c.eq(f)
                                    .is(":hidden")) {
                                    c.hide()
                                        .eq(f)
                                        .show()
                                }
                            }
                        }
                    }
                    b.change.call(e);
                    return false
                })
                .eq(d)
                .addClass("activeTab")
        })
    }
})(jQuery);
jQuery(document)
    .ready(function () {
        jQuery(window)
            .resize(function () {
                jQuery(".list-tabwrap")
                    .removeAttr("style")
            });
        if (Alldefaultconfig.stickySidebar) {
            var a = jQuery("#sidebar-wrapper")
                .stickyMojo({
                    footerID: "#mainpost-bawah1",
                    contentID: "#main-wrapper"
                });
            jQuery(window)
                .resize(function () {
                    a
                })
        }
    });

function callregex(b) {
    var a = configSummary;
    b("#outer-wrapper .Label")
        .each(function () {
            var i = b(this)
                .children("h2")
                .html(),
                g = [],
                j, k, h, d, e, c;
            g = i.match(/[^[\]]+(?=])/g);
            var f = b(this)
                .attr("id");
            if (/[^[\]]+(?=])/g.test(i)) {
                label = (b(this)
                    .find(".widget-content li")
                    .length > 1 && (g[5] !== null || g[5] !== "" || g[5] !== undefined) ? g[5] : b(this)
                    .find(".widget-content li")
                    .length > 1 ? false : b(this)
                    .find(".widget-content li a")
                    .html());
                b(this)
                    .children("h2")
                    .html("<span>" + g[0] + "</span>");
                i = b(this)
                    .children(".widget-content")
                    .html('<div class="shortrpt" id="' + f + 'rcb"></div>');
                j = (g[1] === "featuredpost" ? "s" : g[1] === "gallery1" ? "g1" : g[1] === "gallery2" ? "g2" : g[1] === "horizontal" ? "h" : g[1] === "combine" ? "c" : g[1] === "carouselslide" ? "s" : g[1] === "hot" ? "ht" : "v");
                h = (g[1] === "featuredpost" ? "f" : "c");
                e = (g[2] === "animated" ? true : false);
                d = (g[2] === "random" ? true : false);
                c = (g[1] === "noimage" ? false : true);
                b("#" + f + "rcb")
                    .RecentPostbyTag({
                        blogURL: (g[4] === null || g[4] === "" || g[4] === undefined ? "" : g[4]),
                        MaxPost: g[3],
                        tagName: label,
                        postType: j,
                        sliderType: h,
                        animated: e,
                        ShowImage: c,
                        Random: d,
                        MoreNumPost: a.postPerPage,
                        FirstImageSize: (g[1] === "gallery2" || g[1] === "simple" ? "s80-p" : "s220-p"),
                        AjaxLoad: false,
                        ImageSize: (g[1] === "carouselslide" ? "s220-p" : g[1] === "featuredpost" ? "s700" : g[1] === "hot" ? "s220-p" : "s80-p")
                    });
                b(this)
                    .removeClass("Label")
                    .addClass(g[1]);
                b(this)
                    .children(".widget-content")
                    .removeClass("list-label-widget-content")
            }
            b(this)
                .css("visibility", "visible")
        });
    b(".ijonkzrcomment")
        .each(function () {
            var c = b(this)
                .attr("data-number"),
                d = b(this)
                .attr("data-author");
            b(this)
                .RecentComments({
                    numComments: (c === null || c === "" || c === undefined ? 5 : c),
                    adminBlog: (d === null || d === "" || d === undefined ? "" : d)
                })
        });
    b(".sf-menu > li")
        .hover(function () {
            var c = b(this);
            var d = c.find(".ijonkzrecentag > div");
            if (d.length === 0) {
                c.find(".ijonkzrecentag")
                    .each(function () {
                        var f = b(this)
                            .attr("data-number"),
                            e = b(this)
                            .attr("data-tag"),
                            g = b(this)
                            .attr("data-type"),
                            h = b(this)
                            .attr("data-random");
                        if (g !== undefined) {
                            b(this)
                                .addClass(g)
                        }
                        b(this)
                            .RecentPostbyTag({
                                MaxPost: (f === null || f === "" || f === undefined ? 5 : f),
                                tagName: (e === null || e === "" || e === undefined ? false : e),
                                postType: (g === "carouselslide" ? "s" : g === "gallery1" ? "g1" : g === "gallery2" ? "g2" : g === "horizontal" ? "h" : g === "combine" ? "c" : g === "featuredpost" ? "s" : g === "hot" ? "ht" : "v"),
                                sliderType: (g === "featuredpost" ? "f" : "c"),
                                animated: (h === "animated" ? true : false),
                                ShowImage: (g === "noimage" ? false : true),
                                Random: (h === null || h === "0" || h === undefined ? false : true),
                                MoreNumPost: a.postPerPage,
                                FirstImageSize: (g === "gallery2" || g === "simple" ? "s80-p" : "s220-p"),
                                AjaxLoad: false,
                                ImageSize: (g === "carouselslide" ? "s220-p" : g === "featuredpost" ? "s700" : g === "hot" ? "s220-p" : "s80-p")
                            })
                    })
            }
        })
};
