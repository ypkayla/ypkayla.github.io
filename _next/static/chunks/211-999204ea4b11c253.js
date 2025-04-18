"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [211], {
        1961: (t, e, i) => {
            i.d(e, {
                Q: () => s
            });
            let s = (0, i(364).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        2543: (t, e, i) => {
            i.d(e, {
                B: () => s
            });
            let s = "undefined" != typeof window
        },
        4168: (t, e, i) => {
            i.d(e, {
                A: () => l
            });
            var s = i(364);
            let n = t => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                r = function() {
                    for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return e.filter((t, e, i) => !!t && "" !== t.trim() && i.indexOf(t) === e).join(" ").trim()
                };
            var o = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2,
                strokeLinecap: "round",
                strokeLinejoin: "round"
            };
            let a = (0, s.forwardRef)((t, e) => {
                    let {
                        color: i = "currentColor",
                        size: n = 24,
                        strokeWidth: a = 2,
                        absoluteStrokeWidth: l,
                        className: h = "",
                        children: u,
                        iconNode: d,
                        ...c
                    } = t;
                    return (0, s.createElement)("svg", {
                        ref: e,
                        ...o,
                        width: n,
                        height: n,
                        stroke: i,
                        strokeWidth: l ? 24 * Number(a) / Number(n) : a,
                        className: r("lucide", h),
                        ...c
                    }, [...d.map(t => {
                        let [e, i] = t;
                        return (0, s.createElement)(e, i)
                    }), ...Array.isArray(u) ? u : [u]])
                }),
                l = (t, e) => {
                    let i = (0, s.forwardRef)((i, o) => {
                        let {
                            className: l,
                            ...h
                        } = i;
                        return (0, s.createElement)(a, {
                            ref: o,
                            iconNode: e,
                            className: r("lucide-".concat(n(t)), l),
                            ...h
                        })
                    });
                    return i.displayName = "".concat(t), i
                }
        },
        6135: (t, e, i) => {
            i.d(e, {
                xQ: () => r
            });
            var s = i(364),
                n = i(9840);

            function r(t = !0) {
                let e = (0, s.useContext)(n.t);
                if (null === e) return [!0, null];
                let {
                    isPresent: i,
                    onExitComplete: o,
                    register: a
                } = e, l = (0, s.useId)();
                (0, s.useEffect)(() => {
                    if (t) return a(l)
                }, [t]);
                let h = (0, s.useCallback)(() => t && o && o(l), [l, o, t]);
                return !i && o ? [!1, h] : [!0]
            }
        },
        6322: (t, e, i) => {
            i.d(e, {
                Wx: () => u
            });
            var s = i(364),
                n = Object.defineProperty,
                r = (t, e, i) => e in t ? n(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: i
                }) : t[e] = i,
                o = new Map,
                a = new WeakMap,
                l = 0,
                h = void 0;

            function u() {
                var t;
                let {
                    threshold: e,
                    delay: i,
                    trackVisibility: n,
                    rootMargin: r,
                    root: u,
                    triggerOnce: d,
                    skip: c,
                    initialInView: p,
                    fallbackInView: m,
                    onChange: f
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [g, v] = s.useState(null), y = s.useRef(f), [x, w] = s.useState({
                    inView: !!p,
                    entry: void 0
                });
                y.current = f, s.useEffect(() => {
                    let t;
                    if (!c && g) return t = function(t, e) {
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : h;
                        if (void 0 === window.IntersectionObserver && void 0 !== s) {
                            let n = t.getBoundingClientRect();
                            return e(s, {
                                isIntersecting: s,
                                target: t,
                                intersectionRatio: "number" == typeof i.threshold ? i.threshold : 0,
                                time: 0,
                                boundingClientRect: n,
                                intersectionRect: n,
                                rootBounds: n
                            }), () => {}
                        }
                        let {
                            id: n,
                            observer: r,
                            elements: u
                        } = function(t) {
                            let e = Object.keys(t).sort().filter(e => void 0 !== t[e]).map(e => {
                                    var i;
                                    return "".concat(e, "_").concat("root" === e ? (i = t.root) ? (a.has(i) || (l += 1, a.set(i, l.toString())), a.get(i)) : "0" : t[e])
                                }).toString(),
                                i = o.get(e);
                            if (!i) {
                                let s;
                                let n = new Map,
                                    r = new IntersectionObserver(e => {
                                        e.forEach(e => {
                                            var i;
                                            let r = e.isIntersecting && s.some(t => e.intersectionRatio >= t);
                                            t.trackVisibility && void 0 === e.isVisible && (e.isVisible = r), null == (i = n.get(e.target)) || i.forEach(t => {
                                                t(r, e)
                                            })
                                        })
                                    }, t);
                                s = r.thresholds || (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0]), i = {
                                    id: e,
                                    observer: r,
                                    elements: n
                                }, o.set(e, i)
                            }
                            return i
                        }(i), d = u.get(t) || [];
                        return u.has(t) || u.set(t, d), d.push(e), r.observe(t),
                            function() {
                                d.splice(d.indexOf(e), 1), 0 === d.length && (u.delete(t), r.unobserve(t)), 0 === u.size && (r.disconnect(), o.delete(n))
                            }
                    }(g, (e, i) => {
                        w({
                            inView: e,
                            entry: i
                        }), y.current && y.current(e, i), i.isIntersecting && d && t && (t(), t = void 0)
                    }, {
                        root: u,
                        rootMargin: r,
                        threshold: e,
                        trackVisibility: n,
                        delay: i
                    }, m), () => {
                        t && t()
                    }
                }, [Array.isArray(e) ? e.toString() : e, g, u, r, d, c, n, m, i]);
                let P = null == (t = x.entry) ? void 0 : t.target,
                    T = s.useRef(void 0);
                g || !P || d || c || T.current === P || (T.current = P, w({
                    inView: !!p,
                    entry: void 0
                }));
                let b = [v, x.inView, x.entry];
                return b.ref = b[0], b.inView = b[1], b.entry = b[2], b
            }
            s.Component
        },
        6992: (t, e, i) => {
            i.d(e, {
                F: () => o
            });
            var s = i(2126);
            let n = t => "boolean" == typeof t ? `${t}` : 0 === t ? "0" : t,
                r = s.$,
                o = (t, e) => i => {
                    var s;
                    if ((null == e ? void 0 : e.variants) == null) return r(t, null == i ? void 0 : i.class, null == i ? void 0 : i.className);
                    let {
                        variants: o,
                        defaultVariants: a
                    } = e, l = Object.keys(o).map(t => {
                        let e = null == i ? void 0 : i[t],
                            s = null == a ? void 0 : a[t];
                        if (null === e) return null;
                        let r = n(e) || n(s);
                        return o[t][r]
                    }), h = i && Object.entries(i).reduce((t, e) => {
                        let [i, s] = e;
                        return void 0 === s || (t[i] = s), t
                    }, {});
                    return r(t, l, null == e ? void 0 : null === (s = e.compoundVariants) || void 0 === s ? void 0 : s.reduce((t, e) => {
                        let {
                            class: i,
                            className: s,
                            ...n
                        } = e;
                        return Object.entries(n).every(t => {
                            let [e, i] = t;
                            return Array.isArray(i) ? i.includes({
                                ...a,
                                ...h
                            } [e]) : ({
                                ...a,
                                ...h
                            })[e] === i
                        }) ? [...t, i, s] : t
                    }, []), null == i ? void 0 : i.class, null == i ? void 0 : i.className)
                }
        },
        7027: (t, e, i) => {
            i.d(e, {
                E: () => n
            });
            var s = i(364);
            let n = i(2543).B ? s.useLayoutEffect : s.useEffect
        },
        8446: (t, e, i) => {
            i.d(e, {
                L: () => s
            });
            let s = (0, i(364).createContext)({})
        },
        8602: (t, e, i) => {
            let s;

            function n(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }

            function r(t) {
                let e = [{}, {}];
                return t?.values.forEach((t, i) => {
                    e[0][i] = t.get(), e[1][i] = t.getVelocity()
                }), e
            }

            function o(t, e, i, s) {
                if ("function" == typeof e) {
                    let [n, o] = r(s);
                    e = e(void 0 !== i ? i : t.custom, n, o)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [n, o] = r(s);
                    e = e(void 0 !== i ? i : t.custom, n, o)
                }
                return e
            }

            function a(t, e, i) {
                let s = t.getProps();
                return o(s, e, void 0 !== i ? i : s.custom, t)
            }

            function l(t, e) {
                return t?.[e] ?? t?.default ?? t
            }
            i.d(e, {
                P: () => rV
            });
            let h = t => t,
                u = {
                    skipAnimations: !1,
                    useManualTiming: !1
                },
                d = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
                c = {
                    value: null,
                    addProjectionMetrics: null
                };

            function p(t, e) {
                let i = !1,
                    s = !0,
                    n = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    r = () => i = !0,
                    o = d.reduce((t, i) => (t[i] = function(t, e) {
                        let i = new Set,
                            s = new Set,
                            n = !1,
                            r = !1,
                            o = new WeakSet,
                            a = {
                                delta: 0,
                                timestamp: 0,
                                isProcessing: !1
                            },
                            l = 0;

                        function h(e) {
                            o.has(e) && (u.schedule(e), t()), l++, e(a)
                        }
                        let u = {
                            schedule: (t, e = !1, r = !1) => {
                                let a = r && n ? i : s;
                                return e && o.add(t), a.has(t) || a.add(t), t
                            },
                            cancel: t => {
                                s.delete(t), o.delete(t)
                            },
                            process: t => {
                                if (a = t, n) {
                                    r = !0;
                                    return
                                }
                                n = !0, [i, s] = [s, i], i.forEach(h), e && c.value && c.value.frameloop[e].push(l), l = 0, i.clear(), n = !1, r && (r = !1, u.process(t))
                            }
                        };
                        return u
                    }(r, e ? i : void 0), t), {}),
                    {
                        read: a,
                        resolveKeyframes: l,
                        update: h,
                        preRender: p,
                        render: m,
                        postRender: f
                    } = o,
                    g = () => {
                        let r = u.useManualTiming ? n.timestamp : performance.now();
                        i = !1, u.useManualTiming || (n.delta = s ? 1e3 / 60 : Math.max(Math.min(r - n.timestamp, 40), 1)), n.timestamp = r, n.isProcessing = !0, a.process(n), l.process(n), h.process(n), p.process(n), m.process(n), f.process(n), n.isProcessing = !1, i && e && (s = !1, t(g))
                    },
                    v = () => {
                        i = !0, s = !0, n.isProcessing || t(g)
                    };
                return {
                    schedule: d.reduce((t, e) => {
                        let s = o[e];
                        return t[e] = (t, e = !1, n = !1) => (i || v(), s.schedule(t, e, n)), t
                    }, {}),
                    cancel: t => {
                        for (let e = 0; e < d.length; e++) o[d[e]].cancel(t)
                    },
                    state: n,
                    steps: o
                }
            }
            let {
                schedule: m,
                cancel: f,
                state: g,
                steps: v
            } = p("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : h, !0), y = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], x = new Set(y), w = new Set(["width", "height", "top", "left", "right", "bottom", ...y]);

            function P(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function T(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }
            class b {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return P(this.subscriptions, t), () => T(this.subscriptions, t)
                }
                notify(t, e, i) {
                    let s = this.subscriptions.length;
                    if (s) {
                        if (1 === s) this.subscriptions[0](t, e, i);
                        else
                            for (let n = 0; n < s; n++) {
                                let s = this.subscriptions[n];
                                s && s(t, e, i)
                            }
                    }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }

            function S() {
                s = void 0
            }
            let A = {
                    now: () => (void 0 === s && A.set(g.isProcessing || u.useManualTiming ? g.timestamp : performance.now()), s),
                    set: t => {
                        s = t, queueMicrotask(S)
                    }
                },
                M = t => !isNaN(parseFloat(t)),
                V = {
                    current: void 0
                };
            class E {
                constructor(t, e = {}) {
                    this.version = "12.7.4", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        let i = A.now();
                        this.updatedAt !== i && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
                }
                setCurrent(t) {
                    this.current = t, this.updatedAt = A.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = M(this.current))
                }
                setPrevFrameValue(t = this.current) {
                    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new b);
                    let i = this.events[t].add(e);
                    return "change" === t ? () => {
                        i(), m.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : i
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
                }
                jump(t, e = !0) {
                    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return V.current && V.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    var t;
                    let e = A.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                    let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return t = parseFloat(this.current) - parseFloat(this.prevFrameValue), i ? 1e3 / i * t : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function C(t, e) {
                return new E(t, e)
            }
            let D = t => Array.isArray(t),
                k = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                R = t => D(t) ? t[t.length - 1] || 0 : t,
                j = t => !!(t && t.getVelocity);

            function L(t, e) {
                let i = t.getValue("willChange");
                if (j(i) && i.add) return i.add(e);
                if (!i && u.WillChange) {
                    let i = new u.WillChange("auto");
                    t.addValue("willChange", i), i.add(e)
                }
            }
            let F = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
                B = "data-" + F("framerAppearId");

            function O(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
            let I = O(() => void 0 !== window.ScrollTimeline);
            class U {
                constructor(t) {
                    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean)
                }
                get finished() {
                    return Promise.all(this.animations.map(t => t.finished))
                }
                getAll(t) {
                    return this.animations[0][t]
                }
                setAll(t, e) {
                    for (let i = 0; i < this.animations.length; i++) this.animations[i][t] = e
                }
                attachTimeline(t, e) {
                    let i = this.animations.map(i => I() && i.attachTimeline ? i.attachTimeline(t) : "function" == typeof e ? e(i) : void 0);
                    return () => {
                        i.forEach((t, e) => {
                            t && t(), this.animations[e].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(t) {
                    this.setAll("time", t)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(t) {
                    this.setAll("speed", t)
                }
                get startTime() {
                    return this.getAll("startTime")
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t
                }
                runAll(t) {
                    this.animations.forEach(e => e[t]())
                }
                flatten() {
                    this.runAll("flatten")
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            class N extends U {
                then(t, e) {
                    return this.finished.finally(t).then(() => {})
                }
            }
            let $ = t => 1e3 * t,
                W = t => t / 1e3,
                z = {
                    current: !1
                };

            function Y(t) {
                return "function" == typeof t && "applyToOptions" in t
            }
            let X = t => Array.isArray(t) && "number" == typeof t[0],
                H = {},
                K = function(t, e) {
                    let i = O(t);
                    return () => H[e] ?? i()
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing"),
                q = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
                G = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: q([0, .65, .55, 1]),
                    circOut: q([.55, 0, 1, .45]),
                    backIn: q([.31, .01, .66, -.59]),
                    backOut: q([.33, 1.53, .69, .99])
                },
                _ = {
                    layout: 0,
                    mainThread: 0,
                    waapi: 0
                },
                Z = (t, e, i = 10) => {
                    let s = "",
                        n = Math.max(Math.round(e / i), 2);
                    for (let e = 0; e < n; e++) s += t(e / (n - 1)) + ", ";
                    return `linear(${s.substring(0,s.length-2)})`
                };

            function Q(t, e) {
                t.timeline = e, t.onfinish = null
            }
            let J = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function tt(t, e, i, s) {
                if (t === e && i === s) return h;
                let n = e => (function(t, e, i, s, n) {
                    let r, o;
                    let a = 0;
                    do(r = J(o = e + (i - e) / 2, s, n) - t) > 0 ? i = o : e = o; while (Math.abs(r) > 1e-7 && ++a < 12);
                    return o
                })(e, 0, 1, t, i);
                return t => 0 === t || 1 === t ? t : J(n(t), e, s)
            }
            let te = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                ti = t => e => 1 - t(1 - e),
                ts = tt(.33, 1.53, .69, .99),
                tn = ti(ts),
                tr = te(tn),
                to = t => (t *= 2) < 1 ? .5 * tn(t) : .5 * (2 - Math.pow(2, -10 * (t - 1))),
                ta = t => 1 - Math.sin(Math.acos(t)),
                tl = ti(ta),
                th = te(ta),
                tu = t => /^0[^.\s]+$/u.test(t),
                td = (t, e, i) => i > e ? e : i < t ? t : i,
                tc = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                tp = {
                    ...tc,
                    transform: t => td(0, 1, t)
                },
                tm = {
                    ...tc,
                    default: 1
                },
                tf = t => Math.round(1e5 * t) / 1e5,
                tg = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
                tv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                ty = (t, e) => i => !!("string" == typeof i && tv.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
                tx = (t, e, i) => s => {
                    if ("string" != typeof s) return s;
                    let [n, r, o, a] = s.match(tg);
                    return {
                        [t]: parseFloat(n),
                        [e]: parseFloat(r),
                        [i]: parseFloat(o),
                        alpha: void 0 !== a ? parseFloat(a) : 1
                    }
                },
                tw = t => td(0, 255, t),
                tP = {
                    ...tc,
                    transform: t => Math.round(tw(t))
                },
                tT = {
                    test: ty("rgb", "red"),
                    parse: tx("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: s = 1
                    }) => "rgba(" + tP.transform(t) + ", " + tP.transform(e) + ", " + tP.transform(i) + ", " + tf(tp.transform(s)) + ")"
                },
                tb = {
                    test: ty("#"),
                    parse: function(t) {
                        let e = "",
                            i = "",
                            s = "",
                            n = "";
                        return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), s = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), s = t.substring(3, 4), n = t.substring(4, 5), e += e, i += i, s += s, n += n), {
                            red: parseInt(e, 16),
                            green: parseInt(i, 16),
                            blue: parseInt(s, 16),
                            alpha: n ? parseInt(n, 16) / 255 : 1
                        }
                    },
                    transform: tT.transform
                },
                tS = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                tA = tS("deg"),
                tM = tS("%"),
                tV = tS("px"),
                tE = tS("vh"),
                tC = tS("vw"),
                tD = {
                    ...tM,
                    parse: t => tM.parse(t) / 100,
                    transform: t => tM.transform(100 * t)
                },
                tk = {
                    test: ty("hsl", "hue"),
                    parse: tx("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: i,
                        alpha: s = 1
                    }) => "hsla(" + Math.round(t) + ", " + tM.transform(tf(e)) + ", " + tM.transform(tf(i)) + ", " + tf(tp.transform(s)) + ")"
                },
                tR = {
                    test: t => tT.test(t) || tb.test(t) || tk.test(t),
                    parse: t => tT.test(t) ? tT.parse(t) : tk.test(t) ? tk.parse(t) : tb.parse(t),
                    transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? tT.transform(t) : tk.transform(t)
                },
                tj = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
                tL = "number",
                tF = "color",
                tB = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

            function tO(t) {
                let e = t.toString(),
                    i = [],
                    s = {
                        color: [],
                        number: [],
                        var: []
                    },
                    n = [],
                    r = 0,
                    o = e.replace(tB, t => (tR.test(t) ? (s.color.push(r), n.push(tF), i.push(tR.parse(t))) : t.startsWith("var(") ? (s.var.push(r), n.push("var"), i.push(t)) : (s.number.push(r), n.push(tL), i.push(parseFloat(t))), ++r, "${}")).split("${}");
                return {
                    values: i,
                    split: o,
                    indexes: s,
                    types: n
                }
            }

            function tI(t) {
                return tO(t).values
            }

            function tU(t) {
                let {
                    split: e,
                    types: i
                } = tO(t), s = e.length;
                return t => {
                    let n = "";
                    for (let r = 0; r < s; r++)
                        if (n += e[r], void 0 !== t[r]) {
                            let e = i[r];
                            e === tL ? n += tf(t[r]) : e === tF ? n += tR.transform(t[r]) : n += t[r]
                        } return n
                }
            }
            let tN = t => "number" == typeof t ? 0 : t,
                t$ = {
                    test: function(t) {
                        return isNaN(t) && "string" == typeof t && (t.match(tg)?.length || 0) + (t.match(tj)?.length || 0) > 0
                    },
                    parse: tI,
                    createTransformer: tU,
                    getAnimatableNone: function(t) {
                        let e = tI(t);
                        return tU(t)(e.map(tN))
                    }
                },
                tW = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function tz(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [s] = i.match(tg) || [];
                if (!s) return t;
                let n = i.replace(s, ""),
                    r = +!!tW.has(e);
                return s !== i && (r *= 100), e + "(" + r + n + ")"
            }
            let tY = /\b([a-z-]*)\(.*?\)/gu,
                tX = {
                    ...t$,
                    getAnimatableNone: t => {
                        let e = t.match(tY);
                        return e ? e.map(tz).join(" ") : t
                    }
                },
                tH = {
                    ...tc,
                    transform: Math.round
                },
                tK = {
                    borderWidth: tV,
                    borderTopWidth: tV,
                    borderRightWidth: tV,
                    borderBottomWidth: tV,
                    borderLeftWidth: tV,
                    borderRadius: tV,
                    radius: tV,
                    borderTopLeftRadius: tV,
                    borderTopRightRadius: tV,
                    borderBottomRightRadius: tV,
                    borderBottomLeftRadius: tV,
                    width: tV,
                    maxWidth: tV,
                    height: tV,
                    maxHeight: tV,
                    top: tV,
                    right: tV,
                    bottom: tV,
                    left: tV,
                    padding: tV,
                    paddingTop: tV,
                    paddingRight: tV,
                    paddingBottom: tV,
                    paddingLeft: tV,
                    margin: tV,
                    marginTop: tV,
                    marginRight: tV,
                    marginBottom: tV,
                    marginLeft: tV,
                    backgroundPositionX: tV,
                    backgroundPositionY: tV,
                    rotate: tA,
                    rotateX: tA,
                    rotateY: tA,
                    rotateZ: tA,
                    scale: tm,
                    scaleX: tm,
                    scaleY: tm,
                    scaleZ: tm,
                    skew: tA,
                    skewX: tA,
                    skewY: tA,
                    distance: tV,
                    translateX: tV,
                    translateY: tV,
                    translateZ: tV,
                    x: tV,
                    y: tV,
                    z: tV,
                    perspective: tV,
                    transformPerspective: tV,
                    opacity: tp,
                    originX: tD,
                    originY: tD,
                    originZ: tV,
                    zIndex: tH,
                    size: tV,
                    fillOpacity: tp,
                    strokeOpacity: tp,
                    numOctaves: tH
                },
                tq = {
                    ...tK,
                    color: tR,
                    backgroundColor: tR,
                    outlineColor: tR,
                    fill: tR,
                    stroke: tR,
                    borderColor: tR,
                    borderTopColor: tR,
                    borderRightColor: tR,
                    borderBottomColor: tR,
                    borderLeftColor: tR,
                    filter: tX,
                    WebkitFilter: tX
                },
                tG = t => tq[t];

            function t_(t, e) {
                let i = tG(t);
                return i !== tX && (i = t$), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
            let tZ = new Set(["auto", "none", "0"]),
                tQ = t => 180 * t / Math.PI,
                tJ = t => t1(tQ(Math.atan2(t[1], t[0]))),
                t0 = {
                    x: 4,
                    y: 5,
                    translateX: 4,
                    translateY: 5,
                    scaleX: 0,
                    scaleY: 3,
                    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
                    rotate: tJ,
                    rotateZ: tJ,
                    skewX: t => tQ(Math.atan(t[1])),
                    skewY: t => tQ(Math.atan(t[2])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
                },
                t1 = t => ((t %= 360) < 0 && (t += 360), t),
                t2 = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
                t5 = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
                t3 = {
                    x: 12,
                    y: 13,
                    z: 14,
                    translateX: 12,
                    translateY: 13,
                    translateZ: 14,
                    scaleX: t2,
                    scaleY: t5,
                    scale: t => (t2(t) + t5(t)) / 2,
                    rotateX: t => t1(tQ(Math.atan2(t[6], t[5]))),
                    rotateY: t => t1(tQ(Math.atan2(-t[2], t[0]))),
                    rotateZ: tJ,
                    rotate: tJ,
                    skewX: t => tQ(Math.atan(t[4])),
                    skewY: t => tQ(Math.atan(t[1])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
                };

            function t4(t) {
                return +!!t.includes("scale")
            }

            function t9(t, e) {
                let i, s;
                if (!t || "none" === t) return t4(e);
                let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
                if (n) i = t3, s = n;
                else {
                    let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
                    i = t0, s = e
                }
                if (!s) return t4(e);
                let r = i[e],
                    o = s[1].split(",").map(t8);
                return "function" == typeof r ? r(o) : o[r]
            }
            let t6 = (t, e) => {
                let {
                    transform: i = "none"
                } = getComputedStyle(t);
                return t9(i, e)
            };

            function t8(t) {
                return parseFloat(t.trim())
            }
            let t7 = t => t === tc || t === tV,
                et = new Set(["x", "y", "z"]),
                ee = y.filter(t => !et.has(t)),
                ei = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: i = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: (t, {
                        transform: e
                    }) => t9(e, "x"),
                    y: (t, {
                        transform: e
                    }) => t9(e, "y")
                };
            ei.translateX = ei.x, ei.translateY = ei.y;
            let es = new Set,
                en = !1,
                er = !1;

            function eo() {
                if (er) {
                    let t = Array.from(es).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        i = new Map;
                    e.forEach(t => {
                        let e = function(t) {
                            let e = [];
                            return ee.forEach(i => {
                                let s = t.getValue(i);
                                void 0 !== s && (e.push([i, s.get()]), s.set(+!!i.startsWith("scale")))
                            }), e
                        }(t);
                        e.length && (i.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(([e, i]) => {
                            t.getValue(e)?.set(i)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                er = !1, en = !1, es.forEach(t => t.complete()), es.clear()
            }

            function ea() {
                es.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (er = !0)
                })
            }
            class el {
                constructor(t, e, i, s, n, r = !1) {
                    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = s, this.element = n, this.isAsync = r
                }
                scheduleResolve() {
                    this.isScheduled = !0, this.isAsync ? (es.add(this), en || (en = !0, m.read(ea), m.resolveKeyframes(eo))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: i,
                        motionValue: s
                    } = this;
                    for (let n = 0; n < t.length; n++)
                        if (null === t[n]) {
                            if (0 === n) {
                                let n = s?.get(),
                                    r = t[t.length - 1];
                                if (void 0 !== n) t[0] = n;
                                else if (i && e) {
                                    let s = i.readValue(e, r);
                                    null != s && (t[0] = s)
                                }
                                void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0])
                            } else t[n] = t[n - 1]
                        }
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), es.delete(this)
                }
                cancel() {
                    this.isComplete || (this.isScheduled = !1, es.delete(this))
                }
                resume() {
                    this.isComplete || this.scheduleResolve()
                }
            }
            let eh = () => {},
                eu = () => {},
                ed = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
                ec = t => e => "string" == typeof e && e.startsWith(t),
                ep = ec("--"),
                em = ec("var(--"),
                ef = t => !!em(t) && eg.test(t.split("/*")[0].trim()),
                eg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
                ev = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
                ey = t => e => e.test(t),
                ex = [tc, tV, tM, tA, tC, tE, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                ew = t => ex.find(ey(t));
            class eP extends el {
                constructor(t, e, i, s, n) {
                    super(t, e, i, s, n, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: i
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        if ("string" == typeof s && ef(s = s.trim())) {
                            let n = function t(e, i, s = 1) {
                                eu(s <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
                                let [n, r] = function(t) {
                                    let e = ev.exec(t);
                                    if (!e) return [, ];
                                    let [, i, s, n] = e;
                                    return [`--${i??s}`, n]
                                }(e);
                                if (!n) return;
                                let o = window.getComputedStyle(i).getPropertyValue(n);
                                if (o) {
                                    let t = o.trim();
                                    return ed(t) ? parseFloat(t) : t
                                }
                                return ef(r) ? t(r, i, s + 1) : r
                            }(s, e.current);
                            void 0 !== n && (t[i] = n), i === t.length - 1 && (this.finalKeyframe = s)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !w.has(i) || 2 !== t.length) return;
                    let [s, n] = t, r = ew(s), o = ew(n);
                    if (r !== o) {
                        if (t7(r) && t7(o))
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                "string" == typeof i && (t[e] = parseFloat(i))
                            } else this.needsMeasurement = !0
                    }
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, i = [];
                    for (let e = 0; e < t.length; e++) {
                        var s;
                        ("number" == typeof(s = t[e]) ? 0 === s : null === s || "none" === s || "0" === s || tu(s)) && i.push(e)
                    }
                    i.length && function(t, e, i) {
                        let s, n = 0;
                        for (; n < t.length && !s;) {
                            let e = t[n];
                            "string" == typeof e && !tZ.has(e) && tO(e).values.length && (s = t[n]), n++
                        }
                        if (s && i)
                            for (let n of e) t[n] = t_(i, s)
                    }(t, i, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: i
                    } = this;
                    if (!t || !t.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = ei[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let s = e[e.length - 1];
                    void 0 !== s && t.getValue(i, s).jump(s, !1)
                }
                measureEndState() {
                    let {
                        element: t,
                        name: e,
                        unresolvedKeyframes: i
                    } = this;
                    if (!t || !t.current) return;
                    let s = t.getValue(e);
                    s && s.jump(this.measuredOrigin, !1);
                    let n = i.length - 1,
                        r = i[n];
                    i[n] = ei[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([e, i]) => {
                        t.getValue(e).set(i)
                    }), this.resolveNoneKeyframes()
                }
            }
            let eT = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (t$.test(t) || "0" === t) && !t.startsWith("url(")),
                eb = t => null !== t;

            function eS(t, {
                repeat: e,
                repeatType: i = "loop"
            }, s) {
                let n = t.filter(eb),
                    r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
                return r && void 0 !== s ? s : n[r]
            }
            class eA {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: i = "keyframes",
                    repeat: s = 0,
                    repeatDelay: n = 0,
                    repeatType: r = "loop",
                    ...o
                }) {
                    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = A.now(), this.options = {
                        autoplay: t,
                        delay: e,
                        type: i,
                        repeat: s,
                        repeatDelay: n,
                        repeatType: r,
                        ...o
                    }, this.updateFinishedPromise()
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (ea(), eo()), this._resolved
                }
                onKeyframesResolved(t, e) {
                    this.resolvedAt = A.now(), this.hasAttemptedResolve = !0;
                    let {
                        name: i,
                        type: s,
                        velocity: n,
                        delay: r,
                        onComplete: o,
                        onUpdate: a,
                        isGenerator: l
                    } = this.options;
                    if (!l && ! function(t, e, i, s) {
                            let n = t[0];
                            if (null === n) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            let r = t[t.length - 1],
                                o = eT(n, e),
                                a = eT(r, e);
                            return eh(o === a, `You are trying to animate ${e} from "${n}" to "${r}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${r} via the \`style\` property.`), !!o && !!a && (function(t) {
                                let e = t[0];
                                if (1 === t.length) return !0;
                                for (let i = 0; i < t.length; i++)
                                    if (t[i] !== e) return !0
                            }(t) || ("spring" === i || Y(i)) && s)
                        }(t, i, s, n)) {
                        if (z.current || !r) {
                            a && a(eS(t, this.options, e)), o && o(), this.resolveFinishedPromise();
                            return
                        }
                        this.options.duration = 0
                    }
                    let h = this.initPlayback(t, e);
                    !1 !== h && (this._resolved = {
                        keyframes: t,
                        finalKeyframe: e,
                        ...h
                    }, this.onPostResolved())
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e)
                }
                flatten() {
                    this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear")
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise(t => {
                        this.resolveFinishedPromise = t
                    })
                }
            }

            function eM(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
                return e >= 2e4 ? 1 / 0 : e
            }
            let eV = (t, e, i) => t + (e - t) * i;

            function eE(t, e, i) {
                return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }

            function eC(t, e) {
                return i => i > 0 ? e : t
            }
            let eD = (t, e, i) => {
                    let s = t * t,
                        n = i * (e * e - s) + s;
                    return n < 0 ? 0 : Math.sqrt(n)
                },
                ek = [tb, tT, tk],
                eR = t => ek.find(e => e.test(t));

            function ej(t) {
                let e = eR(t);
                if (eh(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`), !e) return !1;
                let i = e.parse(t);
                return e === tk && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: i,
                    alpha: s
                }) {
                    t /= 360, i /= 100;
                    let n = 0,
                        r = 0,
                        o = 0;
                    if (e /= 100) {
                        let s = i < .5 ? i * (1 + e) : i + e - i * e,
                            a = 2 * i - s;
                        n = eE(a, s, t + 1 / 3), r = eE(a, s, t), o = eE(a, s, t - 1 / 3)
                    } else n = r = o = i;
                    return {
                        red: Math.round(255 * n),
                        green: Math.round(255 * r),
                        blue: Math.round(255 * o),
                        alpha: s
                    }
                }(i)), i
            }
            let eL = (t, e) => {
                    let i = ej(t),
                        s = ej(e);
                    if (!i || !s) return eC(t, e);
                    let n = {
                        ...i
                    };
                    return t => (n.red = eD(i.red, s.red, t), n.green = eD(i.green, s.green, t), n.blue = eD(i.blue, s.blue, t), n.alpha = eV(i.alpha, s.alpha, t), tT.transform(n))
                },
                eF = (t, e) => i => e(t(i)),
                eB = (...t) => t.reduce(eF),
                eO = new Set(["none", "hidden"]);

            function eI(t, e) {
                return i => eV(t, e, i)
            }

            function eU(t) {
                return "number" == typeof t ? eI : "string" == typeof t ? ef(t) ? eC : tR.test(t) ? eL : eW : Array.isArray(t) ? eN : "object" == typeof t ? tR.test(t) ? eL : e$ : eC
            }

            function eN(t, e) {
                let i = [...t],
                    s = i.length,
                    n = t.map((t, i) => eU(t)(t, e[i]));
                return t => {
                    for (let e = 0; e < s; e++) i[e] = n[e](t);
                    return i
                }
            }

            function e$(t, e) {
                let i = {
                        ...t,
                        ...e
                    },
                    s = {};
                for (let n in i) void 0 !== t[n] && void 0 !== e[n] && (s[n] = eU(t[n])(t[n], e[n]));
                return t => {
                    for (let e in s) i[e] = s[e](t);
                    return i
                }
            }
            let eW = (t, e) => {
                let i = t$.createTransformer(e),
                    s = tO(t),
                    n = tO(e);
                return s.indexes.var.length === n.indexes.var.length && s.indexes.color.length === n.indexes.color.length && s.indexes.number.length >= n.indexes.number.length ? eO.has(t) && !n.values.length || eO.has(e) && !s.values.length ? function(t, e) {
                    return eO.has(t) ? i => i <= 0 ? t : e : i => i >= 1 ? e : t
                }(t, e) : eB(eN(function(t, e) {
                    let i = [],
                        s = {
                            color: 0,
                            var: 0,
                            number: 0
                        };
                    for (let n = 0; n < e.values.length; n++) {
                        let r = e.types[n],
                            o = t.indexes[r][s[r]],
                            a = t.values[o] ?? 0;
                        i[n] = a, s[r]++
                    }
                    return i
                }(s, n), n.values), i) : (eh(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), eC(t, e))
            };

            function ez(t, e, i) {
                return "number" == typeof t && "number" == typeof e && "number" == typeof i ? eV(t, e, i) : eU(t)(t, e)
            }

            function eY(t, e, i) {
                var s, n;
                let r = Math.max(e - 5, 0);
                return s = i - t(r), (n = e - r) ? 1e3 / n * s : 0
            }
            let eX = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };

            function eH(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let eK = ["duration", "bounce"],
                eq = ["stiffness", "damping", "mass"];

            function eG(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function e_(t = eX.visualDuration, e = eX.bounce) {
                let i;
                let s = "object" != typeof t ? {
                        visualDuration: t,
                        keyframes: [0, 1],
                        bounce: e
                    } : t,
                    {
                        restSpeed: n,
                        restDelta: r
                    } = s,
                    o = s.keyframes[0],
                    a = s.keyframes[s.keyframes.length - 1],
                    l = {
                        done: !1,
                        value: o
                    },
                    {
                        stiffness: h,
                        damping: u,
                        mass: d,
                        duration: c,
                        velocity: p,
                        isResolvedFromDuration: m
                    } = function(t) {
                        let e = {
                            velocity: eX.velocity,
                            stiffness: eX.stiffness,
                            damping: eX.damping,
                            mass: eX.mass,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!eG(t, eq) && eG(t, eK)) {
                            if (t.visualDuration) {
                                let i = 2 * Math.PI / (1.2 * t.visualDuration),
                                    s = i * i,
                                    n = 2 * td(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                                e = {
                                    ...e,
                                    mass: eX.mass,
                                    stiffness: s,
                                    damping: n
                                }
                            } else {
                                let i = function({
                                    duration: t = eX.duration,
                                    bounce: e = eX.bounce,
                                    velocity: i = eX.velocity,
                                    mass: s = eX.mass
                                }) {
                                    let n, r;
                                    eh(t <= $(eX.maxDuration), "Spring duration must be 10 seconds or less");
                                    let o = 1 - e;
                                    o = td(eX.minDamping, eX.maxDamping, o), t = td(eX.minDuration, eX.maxDuration, W(t)), o < 1 ? (n = e => {
                                        let s = e * o,
                                            n = s * t;
                                        return .001 - (s - i) / eH(e, o) * Math.exp(-n)
                                    }, r = e => {
                                        let s = e * o * t,
                                            r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                                            a = Math.exp(-s),
                                            l = eH(Math.pow(e, 2), o);
                                        return (s * i + i - r) * a * (-n(e) + .001 > 0 ? -1 : 1) / l
                                    }) : (n = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), r = e => t * t * (i - e) * Math.exp(-e * t));
                                    let a = function(t, e, i) {
                                        let s = i;
                                        for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                                        return s
                                    }(n, r, 5 / t);
                                    if (t = $(t), isNaN(a)) return {
                                        stiffness: eX.stiffness,
                                        damping: eX.damping,
                                        duration: t
                                    };
                                    {
                                        let e = Math.pow(a, 2) * s;
                                        return {
                                            stiffness: e,
                                            damping: 2 * o * Math.sqrt(s * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = {
                                    ...e,
                                    ...i,
                                    mass: eX.mass
                                }).isResolvedFromDuration = !0
                            }
                        }
                        return e
                    }({
                        ...s,
                        velocity: -W(s.velocity || 0)
                    }),
                    f = p || 0,
                    g = u / (2 * Math.sqrt(h * d)),
                    v = a - o,
                    y = W(Math.sqrt(h / d)),
                    x = 5 > Math.abs(v);
                if (n || (n = x ? eX.restSpeed.granular : eX.restSpeed.default), r || (r = x ? eX.restDelta.granular : eX.restDelta.default), g < 1) {
                    let t = eH(y, g);
                    i = e => a - Math.exp(-g * y * e) * ((f + g * y * v) / t * Math.sin(t * e) + v * Math.cos(t * e))
                } else if (1 === g) i = t => a - Math.exp(-y * t) * (v + (f + y * v) * t);
                else {
                    let t = y * Math.sqrt(g * g - 1);
                    i = e => {
                        let i = Math.exp(-g * y * e),
                            s = Math.min(t * e, 300);
                        return a - i * ((f + g * y * v) * Math.sinh(s) + t * v * Math.cosh(s)) / t
                    }
                }
                let w = {
                    calculatedDuration: m && c || null,
                    next: t => {
                        let e = i(t);
                        if (m) l.done = t >= c;
                        else {
                            let s = 0;
                            g < 1 && (s = 0 === t ? $(f) : eY(i, t, e));
                            let o = Math.abs(a - e) <= r;
                            l.done = Math.abs(s) <= n && o
                        }
                        return l.value = l.done ? a : e, l
                    },
                    toString: () => {
                        let t = Math.min(eM(w), 2e4),
                            e = Z(e => w.next(t * e).value, t, 30);
                        return t + "ms " + e
                    },
                    toTransition: () => {}
                };
                return w
            }

            function eZ({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: s = 325,
                bounceDamping: n = 10,
                bounceStiffness: r = 500,
                modifyTarget: o,
                min: a,
                max: l,
                restDelta: h = .5,
                restSpeed: u
            }) {
                let d, c;
                let p = t[0],
                    m = {
                        done: !1,
                        value: p
                    },
                    f = t => void 0 !== a && t < a || void 0 !== l && t > l,
                    g = t => void 0 === a ? l : void 0 === l ? a : Math.abs(a - t) < Math.abs(l - t) ? a : l,
                    v = i * e,
                    y = p + v,
                    x = void 0 === o ? y : o(y);
                x !== y && (v = x - p);
                let w = t => -v * Math.exp(-t / s),
                    P = t => x + w(t),
                    T = t => {
                        let e = w(t),
                            i = P(t);
                        m.done = Math.abs(e) <= h, m.value = m.done ? x : i
                    },
                    b = t => {
                        f(m.value) && (d = t, c = e_({
                            keyframes: [m.value, g(m.value)],
                            velocity: eY(P, t, m.value),
                            damping: n,
                            stiffness: r,
                            restDelta: h,
                            restSpeed: u
                        }))
                    };
                return b(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (c || void 0 !== d || (e = !0, T(t), b(t)), void 0 !== d && t >= d) ? c.next(t - d) : (e || T(t), m)
                    }
                }
            }
            e_.applyToOptions = t => {
                let e = function(t, e = 100, i) {
                    let s = i({
                            ...t,
                            keyframes: [0, e]
                        }),
                        n = Math.min(eM(s), 2e4);
                    return {
                        type: "keyframes",
                        ease: t => s.next(n * t).value / e,
                        duration: W(n)
                    }
                }(t, 100, e_);
                return t.ease = K() ? e.ease : "easeOut", t.duration = $(e.duration), t.type = "keyframes", t
            };
            let eQ = tt(.42, 0, 1, 1),
                eJ = tt(0, 0, .58, 1),
                e0 = tt(.42, 0, .58, 1),
                e1 = t => Array.isArray(t) && "number" != typeof t[0],
                e2 = {
                    linear: h,
                    easeIn: eQ,
                    easeInOut: e0,
                    easeOut: eJ,
                    circIn: ta,
                    circInOut: th,
                    circOut: tl,
                    backIn: tn,
                    backInOut: tr,
                    backOut: ts,
                    anticipate: to
                },
                e5 = t => {
                    if (X(t)) {
                        eu(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, i, s, n] = t;
                        return tt(e, i, s, n)
                    }
                    return "string" == typeof t ? (eu(void 0 !== e2[t], `Invalid easing type '${t}'`), e2[t]) : t
                },
                e3 = (t, e, i) => {
                    let s = e - t;
                    return 0 === s ? 1 : (i - t) / s
                };

            function e4({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: s = "easeInOut"
            }) {
                let n = e1(s) ? s.map(e5) : e5(s),
                    r = {
                        done: !1,
                        value: e[0]
                    },
                    o = function(t, e, {
                        clamp: i = !0,
                        ease: s,
                        mixer: n
                    } = {}) {
                        let r = t.length;
                        if (eu(r === e.length, "Both input and output ranges must be the same length"), 1 === r) return () => e[0];
                        if (2 === r && e[0] === e[1]) return () => e[1];
                        let o = t[0] === t[1];
                        t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
                        let a = function(t, e, i) {
                                let s = [],
                                    n = i || ez,
                                    r = t.length - 1;
                                for (let i = 0; i < r; i++) {
                                    let r = n(t[i], t[i + 1]);
                                    e && (r = eB(Array.isArray(e) ? e[i] || h : e, r)), s.push(r)
                                }
                                return s
                            }(e, s, n),
                            l = a.length,
                            u = i => {
                                if (o && i < t[0]) return e[0];
                                let s = 0;
                                if (l > 1)
                                    for (; s < t.length - 2 && !(i < t[s + 1]); s++);
                                let n = e3(t[s], t[s + 1], i);
                                return a[s](n)
                            };
                        return i ? e => u(td(t[0], t[r - 1], e)) : u
                    }((i && i.length === e.length ? i : function(t) {
                        let e = [0];
                        return function(t, e) {
                            let i = t[t.length - 1];
                            for (let s = 1; s <= e; s++) {
                                let n = e3(0, e, s);
                                t.push(eV(i, 1, n))
                            }
                        }(e, t.length - 1), e
                    }(e)).map(e => e * t), e, {
                        ease: Array.isArray(n) ? n : e.map(() => n || e0).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (r.value = o(e), r.done = e >= t, r)
                }
            }
            let e9 = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => m.update(e, !0),
                        stop: () => f(e),
                        now: () => g.isProcessing ? g.timestamp : A.now()
                    }
                },
                e6 = {
                    decay: eZ,
                    inertia: eZ,
                    tween: e4,
                    keyframes: e4,
                    spring: e_
                },
                e8 = t => t / 100;
            class e7 extends eA {
                constructor(t) {
                    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.teardown();
                        let {
                            onStop: t
                        } = this.options;
                        t && t()
                    };
                    let {
                        name: e,
                        motionValue: i,
                        element: s,
                        keyframes: n
                    } = this.options, r = s?.KeyframeResolver || el;
                    this.resolver = new r(n, (t, e) => this.onKeyframesResolved(t, e), e, i, s), this.resolver.scheduleResolve()
                }
                flatten() {
                    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
                }
                initPlayback(t) {
                    let e, i;
                    let {
                        type: s = "keyframes",
                        repeat: n = 0,
                        repeatDelay: r = 0,
                        repeatType: o,
                        velocity: a = 0
                    } = this.options, l = Y(s) ? s : e6[s] || e4;
                    l !== e4 && "number" != typeof t[0] && (e = eB(e8, ez(t[0], t[1])), t = [0, 100]);
                    let h = l({
                        ...this.options,
                        keyframes: t
                    });
                    "mirror" === o && (i = l({
                        ...this.options,
                        keyframes: [...t].reverse(),
                        velocity: -a
                    })), null === h.calculatedDuration && (h.calculatedDuration = eM(h));
                    let {
                        calculatedDuration: u
                    } = h, d = u + r;
                    return {
                        generator: h,
                        mirroredGenerator: i,
                        mapPercentToKeyframes: e,
                        calculatedDuration: u,
                        resolvedDuration: d,
                        totalDuration: d * (n + 1) - r
                    }
                }
                onPostResolved() {
                    let {
                        autoplay: t = !0
                    } = this.options;
                    _.mainThread++, this.play(), "paused" !== this.pendingPlayState && t ? this.state = this.pendingPlayState : this.pause()
                }
                tick(t, e = !1) {
                    let {
                        resolved: i
                    } = this;
                    if (!i) {
                        let {
                            keyframes: t
                        } = this.options;
                        return {
                            done: !0,
                            value: t[t.length - 1]
                        }
                    }
                    let {
                        finalKeyframe: s,
                        generator: n,
                        mirroredGenerator: r,
                        mapPercentToKeyframes: o,
                        keyframes: a,
                        calculatedDuration: l,
                        totalDuration: h,
                        resolvedDuration: u
                    } = i;
                    if (null === this.startTime) return n.next(0);
                    let {
                        delay: d,
                        repeat: c,
                        repeatType: p,
                        repeatDelay: m,
                        onUpdate: f
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - h / this.speed, this.startTime)), e ? this.currentTime = t : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
                    let g = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
                        v = this.speed >= 0 ? g < 0 : g > h;
                    this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = h);
                    let y = this.currentTime,
                        x = n;
                    if (c) {
                        let t = Math.min(this.currentTime, h) / u,
                            e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, c + 1)) % 2 && ("reverse" === p ? (i = 1 - i, m && (i -= m / u)) : "mirror" === p && (x = r)), y = td(0, 1, i) * u
                    }
                    let w = v ? {
                        done: !1,
                        value: a[0]
                    } : x.next(y);
                    o && (w.value = o(w.value));
                    let {
                        done: P
                    } = w;
                    v || null === l || (P = this.speed >= 0 ? this.currentTime >= h : this.currentTime <= 0);
                    let T = null === this.holdTime && ("finished" === this.state || "running" === this.state && P);
                    return T && void 0 !== s && (w.value = eS(a, this.options, s)), f && f(w.value), T && this.finish(), w
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    return t ? W(t.calculatedDuration) : 0
                }
                get time() {
                    return W(this.currentTime)
                }
                set time(t) {
                    t = $(t), this.currentTime = t, null !== this.holdTime || 0 === this.speed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = W(this.currentTime))
                }
                play() {
                    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
                        this.pendingPlayState = "running";
                        return
                    }
                    if (this.isStopped) return;
                    let {
                        driver: t = e9,
                        onPlay: e,
                        startTime: i
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), e && e();
                    let s = this.driver.now();
                    null !== this.holdTime ? this.startTime = s - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = s) : this.startTime = i ?? this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    if (!this._resolved) {
                        this.pendingPlayState = "paused";
                        return
                    }
                    this.state = "paused", this.holdTime = this.currentTime ?? 0
                }
                complete() {
                    "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.teardown(), this.state = "finished";
                    let {
                        onComplete: t
                    } = this.options;
                    t && t()
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel(), _.mainThread--
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
                get finished() {
                    return this.currentFinishedPromise
                }
            }
            let it = new Set(["opacity", "clipPath", "filter", "transform"]),
                ie = O(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                ii = {
                    anticipate: to,
                    backInOut: tr,
                    circInOut: th
                };
            class is extends eA {
                constructor(t) {
                    super(t);
                    let {
                        name: e,
                        motionValue: i,
                        element: s,
                        keyframes: n
                    } = this.options;
                    this.resolver = new eP(n, (t, e) => this.onKeyframesResolved(t, e), e, i, s), this.resolver.scheduleResolve()
                }
                initPlayback(t, e) {
                    var i;
                    let {
                        duration: s = 300,
                        times: n,
                        ease: r,
                        type: o,
                        motionValue: a,
                        name: l,
                        startTime: h
                    } = this.options;
                    if (!a.owner || !a.owner.current) return !1;
                    if ("string" == typeof r && K() && r in ii && (r = ii[r]), Y((i = this.options).type) || "spring" === i.type || ! function t(e) {
                            return !!("function" == typeof e && K() || !e || "string" == typeof e && (e in G || K()) || X(e) || Array.isArray(e) && e.every(t))
                        }(i.ease)) {
                        let {
                            onComplete: e,
                            onUpdate: i,
                            motionValue: a,
                            element: l,
                            ...h
                        } = this.options, u = function(t, e) {
                            let i = new e7({
                                    ...e,
                                    keyframes: t,
                                    repeat: 0,
                                    delay: 0,
                                    isGenerator: !0
                                }),
                                s = {
                                    done: !1,
                                    value: t[0]
                                },
                                n = [],
                                r = 0;
                            for (; !s.done && r < 2e4;) n.push((s = i.sample(r)).value), r += 10;
                            return {
                                times: void 0,
                                keyframes: n,
                                duration: r - 10,
                                ease: "linear"
                            }
                        }(t, h);
                        1 === (t = u.keyframes).length && (t[1] = t[0]), s = u.duration, n = u.times, r = u.ease, o = "keyframes"
                    }
                    let u = function(t, e, i, {
                        delay: s = 0,
                        duration: n = 300,
                        repeat: r = 0,
                        repeatType: o = "loop",
                        ease: a = "easeInOut",
                        times: l
                    } = {}, h) {
                        let u = {
                            [e]: i
                        };
                        l && (u.offset = l);
                        let d = function t(e, i) {
                            if (e) return "function" == typeof e && K() ? Z(e, i) : X(e) ? q(e) : Array.isArray(e) ? e.map(e => t(e, i) || G.easeOut) : G[e]
                        }(a, n);
                        Array.isArray(d) && (u.easing = d), c.value && _.waapi++;
                        let p = t.animate(u, {
                            delay: s,
                            duration: n,
                            easing: Array.isArray(d) ? "linear" : d,
                            fill: "both",
                            iterations: r + 1,
                            direction: "reverse" === o ? "alternate" : "normal",
                            pseudoElement: void 0
                        });
                        return c.value && p.finished.finally(() => {
                            _.waapi--
                        }), p
                    }(a.owner.current, l, t, {
                        ...this.options,
                        duration: s,
                        times: n,
                        ease: r
                    });
                    return u.startTime = h ?? this.calcStartTime(), this.pendingTimeline ? (Q(u, this.pendingTimeline), this.pendingTimeline = void 0) : u.onfinish = () => {
                        let {
                            onComplete: i
                        } = this.options;
                        a.set(eS(t, this.options, e)), i && i(), this.cancel(), this.resolveFinishedPromise()
                    }, {
                        animation: u,
                        duration: s,
                        times: n,
                        type: o,
                        ease: r,
                        keyframes: t
                    }
                }
                get duration() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        duration: e
                    } = t;
                    return W(e)
                }
                get time() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 0;
                    let {
                        animation: e
                    } = t;
                    return W(e.currentTime || 0)
                }
                set time(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.currentTime = $(t)
                }
                get speed() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return 1;
                    let {
                        animation: e
                    } = t;
                    return e.playbackRate
                }
                get finished() {
                    return this.resolved.animation.finished
                }
                set speed(t) {
                    let {
                        resolved: e
                    } = this;
                    if (!e) return;
                    let {
                        animation: i
                    } = e;
                    i.playbackRate = t
                }
                get state() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return "idle";
                    let {
                        animation: e
                    } = t;
                    return e.playState
                }
                get startTime() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return null;
                    let {
                        animation: e
                    } = t;
                    return e.startTime
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        let {
                            resolved: e
                        } = this;
                        if (!e) return h;
                        let {
                            animation: i
                        } = e;
                        Q(i, t)
                    } else this.pendingTimeline = t;
                    return h
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play()
                }
                pause() {
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e
                    } = t;
                    e.pause()
                }
                stop() {
                    if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    let {
                        resolved: t
                    } = this;
                    if (!t) return;
                    let {
                        animation: e,
                        keyframes: i,
                        duration: s,
                        type: n,
                        ease: r,
                        times: o
                    } = t;
                    if ("idle" === e.playState || "finished" === e.playState) return;
                    if (this.time) {
                        let {
                            motionValue: t,
                            onUpdate: e,
                            onComplete: a,
                            element: l,
                            ...h
                        } = this.options, u = new e7({
                            ...h,
                            keyframes: i,
                            duration: s,
                            type: n,
                            ease: r,
                            times: o,
                            isGenerator: !0
                        }), d = $(this.time);
                        t.setWithVelocity(u.sample(d - 10).value, u.sample(d).value, 10)
                    }
                    let {
                        onStop: a
                    } = this.options;
                    a && a(), this.cancel()
                }
                complete() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.finish()
                }
                cancel() {
                    let {
                        resolved: t
                    } = this;
                    t && t.animation.cancel()
                }
                static supports(t) {
                    let {
                        motionValue: e,
                        name: i,
                        repeatDelay: s,
                        repeatType: n,
                        damping: r,
                        type: o
                    } = t;
                    if (!e || !e.owner || !(e.owner.current instanceof HTMLElement)) return !1;
                    let {
                        onUpdate: a,
                        transformTemplate: l
                    } = e.owner.getProps();
                    return ie() && i && it.has(i) && ("transform" !== i || !l) && !a && !s && "mirror" !== n && 0 !== r && "inertia" !== o
                }
            }
            let ir = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                io = t => ({
                    type: "spring",
                    stiffness: 550,
                    damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                    restSpeed: 10
                }),
                ia = {
                    type: "keyframes",
                    duration: .8
                },
                il = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                ih = (t, {
                    keyframes: e
                }) => e.length > 2 ? ia : x.has(t) ? t.startsWith("scale") ? io(e[1]) : ir : il,
                iu = (t, e, i, s = {}, n, r) => o => {
                    let a = l(s, t) || {},
                        h = a.delay || s.delay || 0,
                        {
                            elapsed: d = 0
                        } = s;
                    d -= $(h);
                    let c = {
                        keyframes: Array.isArray(i) ? i : [null, i],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...a,
                        delay: -d,
                        onUpdate: t => {
                            e.set(t), a.onUpdate && a.onUpdate(t)
                        },
                        onComplete: () => {
                            o(), a.onComplete && a.onComplete()
                        },
                        name: t,
                        motionValue: e,
                        element: r ? void 0 : n
                    };
                    ! function({
                        when: t,
                        delay: e,
                        delayChildren: i,
                        staggerChildren: s,
                        staggerDirection: n,
                        repeat: r,
                        repeatType: o,
                        repeatDelay: a,
                        from: l,
                        elapsed: h,
                        ...u
                    }) {
                        return !!Object.keys(u).length
                    }(a) && (c = {
                        ...c,
                        ...ih(t, c)
                    }), c.duration && (c.duration = $(c.duration)), c.repeatDelay && (c.repeatDelay = $(c.repeatDelay)), void 0 !== c.from && (c.keyframes[0] = c.from);
                    let p = !1;
                    if (!1 !== c.type && (0 !== c.duration || c.repeatDelay) || (c.duration = 0, 0 !== c.delay || (p = !0)), (z.current || u.skipAnimations) && (p = !0, c.duration = 0, c.delay = 0), c.allowFlatten = !a.type && !a.ease, p && !r && void 0 !== e.get()) {
                        let t = eS(c.keyframes, a);
                        if (void 0 !== t) return m.update(() => {
                            c.onUpdate(t), c.onComplete()
                        }), new N([])
                    }
                    return !r && is.supports(c) ? new is(c) : new e7(c)
                };

            function id(t, e, {
                delay: i = 0,
                transitionOverride: s,
                type: n
            } = {}) {
                let {
                    transition: r = t.getDefaultTransition(),
                    transitionEnd: o,
                    ...h
                } = e;
                s && (r = s);
                let u = [],
                    d = n && t.animationState && t.animationState.getState()[n];
                for (let e in h) {
                    let s = t.getValue(e, t.latestValues[e] ?? null),
                        n = h[e];
                    if (void 0 === n || d && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let s = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, s
                        }(d, e)) continue;
                    let o = {
                            delay: i,
                            ...l(r || {}, e)
                        },
                        a = !1;
                    if (window.MotionHandoffAnimation) {
                        let i = t.props[B];
                        if (i) {
                            let t = window.MotionHandoffAnimation(i, e, m);
                            null !== t && (o.startTime = t, a = !0)
                        }
                    }
                    L(t, e), s.start(iu(e, s, n, t.shouldReduceMotion && w.has(e) ? {
                        type: !1
                    } : o, t, a));
                    let c = s.animation;
                    c && u.push(c)
                }
                return o && Promise.all(u).then(() => {
                    m.update(() => {
                        o && function(t, e) {
                            let {
                                transitionEnd: i = {},
                                transition: s = {},
                                ...n
                            } = a(t, e) || {};
                            for (let e in n = {
                                    ...n,
                                    ...i
                                }) {
                                let i = R(n[e]);
                                t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, C(i))
                            }
                        }(t, o)
                    })
                }), u
            }

            function ic(t, e, i = {}) {
                let s = a(t, e, "exit" === i.type ? t.presenceContext?.custom : void 0),
                    {
                        transition: n = t.getDefaultTransition() || {}
                    } = s || {};
                i.transitionOverride && (n = i.transitionOverride);
                let r = s ? () => Promise.all(id(t, s, i)) : () => Promise.resolve(),
                    o = t.variantChildren && t.variantChildren.size ? (s = 0) => {
                        let {
                            delayChildren: r = 0,
                            staggerChildren: o,
                            staggerDirection: a
                        } = n;
                        return function(t, e, i = 0, s = 0, n = 1, r) {
                            let o = [],
                                a = (t.variantChildren.size - 1) * s,
                                l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                            return Array.from(t.variantChildren).sort(ip).forEach((t, s) => {
                                t.notify("AnimationStart", e), o.push(ic(t, e, {
                                    ...r,
                                    delay: i + l(s)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(o)
                        }(t, e, r + s, o, a, i)
                    } : () => Promise.resolve(),
                    {
                        when: l
                    } = n;
                if (!l) return Promise.all([r(), o(i.delay)]);
                {
                    let [t, e] = "beforeChildren" === l ? [r, o] : [o, r];
                    return t().then(() => e())
                }
            }

            function ip(t, e) {
                return t.sortNodePosition(e)
            }

            function im(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let s = 0; s < i; s++)
                    if (e[s] !== t[s]) return !1;
                return !0
            }

            function ig(t) {
                return "string" == typeof t || Array.isArray(t)
            }
            let iv = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                iy = ["initial", ...iv],
                ix = iy.length,
                iw = [...iv].reverse(),
                iP = iv.length;

            function iT(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function ib() {
                return {
                    animate: iT(!0),
                    whileInView: iT(),
                    whileHover: iT(),
                    whileTap: iT(),
                    whileDrag: iT(),
                    whileFocus: iT(),
                    exit: iT()
                }
            }
            class iS {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
            class iA extends iS {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (function(t, e, i = {}) {
                                let s;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) s = Promise.all(e.map(e => ic(t, e, i)));
                                else if ("string" == typeof e) s = ic(t, e, i);
                                else {
                                    let n = "function" == typeof e ? a(t, e, i.custom) : e;
                                    s = Promise.all(id(t, n, i))
                                }
                                return s.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, i))),
                            i = ib(),
                            s = !0,
                            r = e => (i, s) => {
                                let n = a(t, s, "exit" === e ? t.presenceContext?.custom : void 0);
                                if (n) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...s
                                    } = n;
                                    i = {
                                        ...i,
                                        ...s,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function o(o) {
                            let {
                                props: l
                            } = t, h = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < ix; t++) {
                                    let s = iy[t],
                                        n = e.props[s];
                                    (ig(n) || !1 === n) && (i[s] = n)
                                }
                                return i
                            }(t.parent) || {}, u = [], d = new Set, c = {}, p = 1 / 0;
                            for (let e = 0; e < iP; e++) {
                                var m, f;
                                let a = iw[e],
                                    g = i[a],
                                    v = void 0 !== l[a] ? l[a] : h[a],
                                    y = ig(v),
                                    x = a === o ? g.isActive : null;
                                !1 === x && (p = e);
                                let w = v === h[a] && v !== l[a] && y;
                                if (w && s && t.manuallyAnimateOnMount && (w = !1), g.protectedKeys = {
                                        ...c
                                    }, !g.isActive && null === x || !v && !g.prevProp || n(v) || "boolean" == typeof v) continue;
                                let P = (m = g.prevProp, "string" == typeof(f = v) ? f !== m : !!Array.isArray(f) && !im(f, m)),
                                    T = P || a === o && g.isActive && !w && y || e > p && y,
                                    b = !1,
                                    S = Array.isArray(v) ? v : [v],
                                    A = S.reduce(r(a), {});
                                !1 === x && (A = {});
                                let {
                                    prevResolvedValues: M = {}
                                } = g, V = {
                                    ...M,
                                    ...A
                                }, E = e => {
                                    T = !0, d.has(e) && (b = !0, d.delete(e)), g.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in V) {
                                    let e = A[t],
                                        i = M[t];
                                    if (c.hasOwnProperty(t)) continue;
                                    let s = !1;
                                    (D(e) && D(i) ? im(e, i) : e === i) ? void 0 !== e && d.has(t) ? E(t) : g.protectedKeys[t] = !0: null != e ? E(t) : d.add(t)
                                }
                                g.prevProp = v, g.prevResolvedValues = A, g.isActive && (c = {
                                    ...c,
                                    ...A
                                }), s && t.blockInitialAnimation && (T = !1);
                                let C = !(w && P) || b;
                                T && C && u.push(...S.map(t => ({
                                    animation: t,
                                    options: {
                                        type: a
                                    }
                                })))
                            }
                            if (d.size) {
                                let e = {};
                                if ("boolean" != typeof l.initial) {
                                    let i = a(t, Array.isArray(l.initial) ? l.initial[0] : l.initial);
                                    i && i.transition && (e.transition = i.transition)
                                }
                                d.forEach(i => {
                                    let s = t.getBaseTarget(i),
                                        n = t.getValue(i);
                                    n && (n.liveStyle = !0), e[i] = s ?? null
                                }), u.push({
                                    animation: e
                                })
                            }
                            let g = !!u.length;
                            return s && (!1 === l.initial || l.initial === l.animate) && !t.manuallyAnimateOnMount && (g = !1), s = !1, g ? e(u) : Promise.resolve()
                        }
                        return {
                            animateChanges: o,
                            setActive: function(e, s) {
                                if (i[e].isActive === s) return Promise.resolve();
                                t.variantChildren?.forEach(t => t.animationState?.setActive(e, s)), i[e].isActive = s;
                                let n = o(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return n
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = ib(), s = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    n(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    this.node.animationState.reset(), this.unmountControls?.()
                }
            }
            let iM = 0;
            class iV extends iS {
                constructor() {
                    super(...arguments), this.id = iM++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let s = this.node.animationState.setActive("exit", !t);
                    e && !t && s.then(() => {
                        e(this.id)
                    })
                }
                mount() {
                    let {
                        register: t,
                        onExitComplete: e
                    } = this.node.presenceContext || {};
                    e && e(this.id), t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            let iE = {
                x: !1,
                y: !1
            };

            function iC(t, e, i, s = {
                passive: !0
            }) {
                return t.addEventListener(e, i, s), () => t.removeEventListener(e, i)
            }
            let iD = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

            function ik(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let iR = t => e => iD(e) && t(e, ik(e));

            function ij(t, e, i, s) {
                return iC(t, e, iR(i), s)
            }

            function iL({
                top: t,
                left: e,
                right: i,
                bottom: s
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: s
                    }
                }
            }

            function iF(t) {
                return t.max - t.min
            }

            function iB(t, e, i, s = .5) {
                t.origin = s, t.originPoint = eV(e.min, e.max, t.origin), t.scale = iF(i) / iF(e), t.translate = eV(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
            }

            function iO(t, e, i, s) {
                iB(t.x, e.x, i.x, s ? s.originX : void 0), iB(t.y, e.y, i.y, s ? s.originY : void 0)
            }

            function iI(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + iF(e)
            }

            function iU(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + iF(e)
            }

            function iN(t, e, i) {
                iU(t.x, e.x, i.x), iU(t.y, e.y, i.y)
            }
            let i$ = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                iW = () => ({
                    x: i$(),
                    y: i$()
                }),
                iz = () => ({
                    min: 0,
                    max: 0
                }),
                iY = () => ({
                    x: iz(),
                    y: iz()
                });

            function iX(t) {
                return [t("x"), t("y")]
            }

            function iH(t) {
                return void 0 === t || 1 === t
            }

            function iK({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !iH(t) || !iH(e) || !iH(i)
            }

            function iq(t) {
                return iK(t) || iG(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function iG(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }

            function i_(t, e, i, s, n) {
                return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e
            }

            function iZ(t, e = 0, i = 1, s, n) {
                t.min = i_(t.min, e, i, s, n), t.max = i_(t.max, e, i, s, n)
            }

            function iQ(t, {
                x: e,
                y: i
            }) {
                iZ(t.x, e.translate, e.scale, e.originPoint), iZ(t.y, i.translate, i.scale, i.originPoint)
            }

            function iJ(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function i0(t, e, i, s, n = .5) {
                let r = eV(t.min, t.max, n);
                iZ(t, e, i, r, s)
            }

            function i1(t, e) {
                i0(t.x, e.x, e.scaleX, e.scale, e.originX), i0(t.y, e.y, e.scaleY, e.scale, e.originY)
            }

            function i2(t, e) {
                return iL(function(t, e) {
                    if (!e) return t;
                    let i = e({
                            x: t.left,
                            y: t.top
                        }),
                        s = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: i.y,
                        left: i.x,
                        bottom: s.y,
                        right: s.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            let i5 = ({
                current: t
            }) => t ? t.ownerDocument.defaultView : null;

            function i3(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
            let i4 = (t, e) => Math.abs(t - e);
            class i9 {
                constructor(t, e, {
                    transformPagePoint: i,
                    contextWindow: s,
                    dragSnapToOrigin: n = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = i7(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                i = function(t, e) {
                                    return Math.sqrt(i4(t.x, e.x) ** 2 + i4(t.y, e.y) ** 2)
                                }(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !i) return;
                            let {
                                point: s
                            } = t, {
                                timestamp: n
                            } = g;
                            this.history.push({
                                ...s,
                                timestamp: n
                            });
                            let {
                                onStart: r,
                                onMove: o
                            } = this.handlers;
                            e || (r && r(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = i6(e, this.transformPagePoint), m.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: s,
                                resumeAnimation: n
                            } = this.handlers;
                            if (this.dragSnapToOrigin && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let r = i7("pointercancel" === t.type ? this.lastMoveEventInfo : i6(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, r), s && s(t, r)
                        }, !iD(t)) return;
                    this.dragSnapToOrigin = n, this.handlers = e, this.transformPagePoint = i, this.contextWindow = s || window;
                    let r = i6(ik(t), this.transformPagePoint),
                        {
                            point: o
                        } = r,
                        {
                            timestamp: a
                        } = g;
                    this.history = [{
                        ...o,
                        timestamp: a
                    }];
                    let {
                        onSessionStart: l
                    } = e;
                    l && l(t, i7(r, this.history)), this.removeListeners = eB(ij(this.contextWindow, "pointermove", this.handlePointerMove), ij(this.contextWindow, "pointerup", this.handlePointerUp), ij(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), f(this.updatePoint)
                }
            }

            function i6(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function i8(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function i7({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: i8(t, st(e)),
                    offset: i8(t, e[0]),
                    velocity: function(t, e) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let i = t.length - 1,
                            s = null,
                            n = st(t);
                        for (; i >= 0 && (s = t[i], !(n.timestamp - s.timestamp > $(.1)));) i--;
                        if (!s) return {
                            x: 0,
                            y: 0
                        };
                        let r = W(n.timestamp - s.timestamp);
                        if (0 === r) return {
                            x: 0,
                            y: 0
                        };
                        let o = {
                            x: (n.x - s.x) / r,
                            y: (n.y - s.y) / r
                        };
                        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o
                    }(e, .1)
                }
            }

            function st(t) {
                return t[t.length - 1]
            }

            function se(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function si(t, e) {
                let i = e.min - t.min,
                    s = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
                    min: i,
                    max: s
                }
            }

            function ss(t, e, i) {
                return {
                    min: sn(t, e),
                    max: sn(t, i)
                }
            }

            function sn(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let sr = new WeakMap;
            class so {
                constructor(t) {
                    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = iY(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: i
                    } = this.visualElement;
                    if (i && !1 === i.isPresent) return;
                    let {
                        dragSnapToOrigin: s
                    } = this.getProps();
                    this.panSession = new i9(t, {
                        onSessionStart: t => {
                            let {
                                dragSnapToOrigin: i
                            } = this.getProps();
                            i ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor(ik(t).point)
                        },
                        onStart: (t, e) => {
                            var i;
                            let {
                                drag: s,
                                dragPropagation: n,
                                onDragStart: r
                            } = this.getProps();
                            if (s && !n && (this.openDragLock && this.openDragLock(), this.openDragLock = "x" === (i = s) || "y" === i ? iE[i] ? null : (iE[i] = !0, () => {
                                    iE[i] = !1
                                }) : iE.x || iE.y ? null : (iE.x = iE.y = !0, () => {
                                    iE.x = iE.y = !1
                                }), !this.openDragLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), iX(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (tM.test(e)) {
                                    let {
                                        projection: i
                                    } = this.visualElement;
                                    if (i && i.layout) {
                                        let s = i.layout.layoutBox[t];
                                        s && (e = iF(s) * (parseFloat(e) / 100))
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && m.postRender(() => r(t, e)), L(this.visualElement, "transform");
                            let {
                                animationState: o
                            } = this.visualElement;
                            o && o.setActive("whileDrag", !0)
                        },
                        onMove: (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: s,
                                onDirectionLock: n,
                                onDrag: r
                            } = this.getProps();
                            if (!i && !this.openDragLock) return;
                            let {
                                offset: o
                            } = e;
                            if (s && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(o), null !== this.currentDirection && n && n(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), r && r(t, e)
                        },
                        onSessionEnd: (t, e) => this.stop(t, e),
                        resumeAnimation: () => iX(t => "paused" === this.getAnimationState(t) && this.getAxisMotionValue(t).animation?.play())
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: s,
                        contextWindow: i5(this.visualElement)
                    })
                }
                stop(t, e) {
                    let i = this.isDragging;
                    if (this.cancel(), !i) return;
                    let {
                        velocity: s
                    } = e;
                    this.startAnimation(s);
                    let {
                        onDragEnd: n
                    } = this.getProps();
                    n && m.postRender(() => n(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, i) {
                    let {
                        drag: s
                    } = this.getProps();
                    if (!i || !sa(t, s, this.currentDirection)) return;
                    let n = this.getAxisMotionValue(t),
                        r = this.originPoint[t] + i[t];
                    this.constraints && this.constraints[t] && (r = function(t, {
                        min: e,
                        max: i
                    }, s) {
                        return void 0 !== e && t < e ? t = s ? eV(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? eV(i, t, s.max) : Math.min(t, i)), t
                    }(r, this.constraints[t], this.elastic[t])), n.set(r)
                }
                resolveConstraints() {
                    let {
                        dragConstraints: t,
                        dragElastic: e
                    } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, s = this.constraints;
                    t && i3(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: s,
                        right: n
                    }) {
                        return {
                            x: se(t.x, i, n),
                            y: se(t.y, e, s)
                        }
                    }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: ss(t, "left", "right"),
                            y: ss(t, "top", "bottom")
                        }
                    }(e), s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && iX(t => {
                        !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                            let i = {};
                            return void 0 !== e.min && (i.min = e.min - t.min), void 0 !== e.max && (i.max = e.max - t.min), i
                        }(i.layoutBox[t], this.constraints[t]))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: i
                    } = this.getProps();
                    if (!e || !i3(e)) return !1;
                    let s = e.current;
                    eu(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: n
                    } = this.visualElement;
                    if (!n || !n.layout) return !1;
                    let r = function(t, e, i) {
                            let s = i2(t, i),
                                {
                                    scroll: n
                                } = e;
                            return n && (iJ(s.x, n.offset.x), iJ(s.y, n.offset.y)), s
                        }(s, n.root, this.visualElement.getTransformPagePoint()),
                        o = {
                            x: si((t = n.layout.layoutBox).x, r.x),
                            y: si(t.y, r.y)
                        };
                    if (i) {
                        let t = i(function({
                            x: t,
                            y: e
                        }) {
                            return {
                                top: e.min,
                                right: t.max,
                                bottom: e.max,
                                left: t.min
                            }
                        }(o));
                        this.hasMutatedConstraints = !!t, t && (o = iL(t))
                    }
                    return o
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: i,
                        dragElastic: s,
                        dragTransition: n,
                        dragSnapToOrigin: r,
                        onDragTransitionEnd: o
                    } = this.getProps(), a = this.constraints || {};
                    return Promise.all(iX(o => {
                        if (!sa(o, e, this.currentDirection)) return;
                        let l = a && a[o] || {};
                        r && (l = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: i ? t[o] : 0,
                            bounceStiffness: s ? 200 : 1e6,
                            bounceDamping: s ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...n,
                            ...l
                        };
                        return this.startAxisValueAnimation(o, h)
                    })).then(o)
                }
                startAxisValueAnimation(t, e) {
                    let i = this.getAxisMotionValue(t);
                    return L(this.visualElement, t), i.start(iu(t, i, 0, e, this.visualElement, !1))
                }
                stopAnimation() {
                    iX(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    iX(t => this.getAxisMotionValue(t).animation?.pause())
                }
                getAnimationState(t) {
                    return this.getAxisMotionValue(t).animation?.state
                }
                getAxisMotionValue(t) {
                    let e = `_drag${t.toUpperCase()}`,
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    iX(e => {
                        let {
                            drag: i
                        } = this.getProps();
                        if (!sa(e, i, this.currentDirection)) return;
                        let {
                            projection: s
                        } = this.visualElement, n = this.getAxisMotionValue(e);
                        if (s && s.layout) {
                            let {
                                min: i,
                                max: r
                            } = s.layout.layoutBox[e];
                            n.set(t[e] - eV(i, r, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: i
                    } = this.visualElement;
                    if (!i3(e) || !i || !this.constraints) return;
                    this.stopAnimation();
                    let s = {
                        x: 0,
                        y: 0
                    };
                    iX(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e && !1 !== this.constraints) {
                            let i = e.get();
                            s[t] = function(t, e) {
                                let i = .5,
                                    s = iF(t),
                                    n = iF(e);
                                return n > s ? i = e3(e.min, e.max - s, t.min) : s > n && (i = e3(t.min, t.max - n, e.min)), td(0, 1, i)
                            }({
                                min: i,
                                max: i
                            }, this.constraints[t])
                        }
                    });
                    let {
                        transformTemplate: n
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = n ? n({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.resolveConstraints(), iX(e => {
                        if (!sa(e, t, null)) return;
                        let i = this.getAxisMotionValue(e),
                            {
                                min: n,
                                max: r
                            } = this.constraints[e];
                        i.set(eV(n, r, s[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    sr.set(this.visualElement, this);
                    let t = ij(this.visualElement.current, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        e = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            i3(t) && t.current && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: i
                        } = this.visualElement,
                        s = i.addEventListener("measure", e);
                    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), m.read(e);
                    let n = iC(window, "resize", () => this.scalePositionWithinConstraints()),
                        r = i.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && (iX(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        n(), t(), s(), r && r()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: s = !1,
                            dragConstraints: n = !1,
                            dragElastic: r = .35,
                            dragMomentum: o = !0
                        } = t;
                    return {
                        ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: s,
                        dragConstraints: n,
                        dragElastic: r,
                        dragMomentum: o
                    }
                }
            }

            function sa(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class sl extends iS {
                constructor(t) {
                    super(t), this.removeGroupControls = h, this.removeListeners = h, this.controls = new so(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || h
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let sh = t => (e, i) => {
                t && m.postRender(() => t(e, i))
            };
            class su extends iS {
                constructor() {
                    super(...arguments), this.removePointerDownListener = h
                }
                onPointerDown(t) {
                    this.session = new i9(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: i5(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: i,
                        onPanEnd: s
                    } = this.node.getProps();
                    return {
                        onSessionStart: sh(t),
                        onStart: sh(e),
                        onMove: i,
                        onEnd: (t, e) => {
                            delete this.session, s && m.postRender(() => s(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = ij(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            var sd, sc, sp = i(2432);
            let {
                schedule: sm
            } = p(queueMicrotask, !1);
            var sf = i(364),
                sg = i(6135),
                sv = i(8446);
            let sy = (0, sf.createContext)({}),
                sx = {
                    hasAnimatedSinceResize: !0,
                    hasEverUpdated: !1
                };

            function sw(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let sP = {
                    correct: (t, e) => {
                        if (!e.target) return t;
                        if ("string" == typeof t) {
                            if (!tV.test(t)) return t;
                            t = parseFloat(t)
                        }
                        let i = sw(t, e.target.x),
                            s = sw(t, e.target.y);
                        return `${i}% ${s}%`
                    }
                },
                sT = {};
            class sb extends sf.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i,
                        layoutId: s
                    } = this.props, {
                        projection: n
                    } = t;
                    ! function(t) {
                        for (let e in t) sT[e] = t[e], ep(e) && (sT[e].isCSSVariable = !0)
                    }(sA), n && (e.group && e.group.add(n), i && i.register && s && i.register(n), n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), n.setOptions({
                        ...n.options,
                        onExitComplete: () => this.safeToRemove()
                    })), sx.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: i,
                        drag: s,
                        isPresent: n
                    } = this.props, r = i.projection;
                    return r && (r.isPresent = n, s || t.layoutDependency !== e || void 0 === e || t.isPresent !== n ? r.willUpdate() : this.safeToRemove(), t.isPresent === n || (n ? r.promote() : r.relegate() || m.postRender(() => {
                        let t = r.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), sm.postRender(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: s
                    } = t;
                    s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function sS(t) {
                let [e, i] = (0, sg.xQ)(), s = (0, sf.useContext)(sv.L);
                return (0, sp.jsx)(sb, {
                    ...t,
                    layoutGroup: s,
                    switchLayoutGroup: (0, sf.useContext)(sy),
                    isPresent: e,
                    safeToRemove: i
                })
            }
            let sA = {
                    borderRadius: {
                        ...sP,
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    },
                    borderTopLeftRadius: sP,
                    borderTopRightRadius: sP,
                    borderBottomLeftRadius: sP,
                    borderBottomRightRadius: sP,
                    boxShadow: {
                        correct: (t, {
                            treeScale: e,
                            projectionDelta: i
                        }) => {
                            let s = t$.parse(t);
                            if (s.length > 5) return t;
                            let n = t$.createTransformer(t),
                                r = +("number" != typeof s[0]),
                                o = i.x.scale * e.x,
                                a = i.y.scale * e.y;
                            s[0 + r] /= o, s[1 + r] /= a;
                            let l = eV(o, a, .5);
                            return "number" == typeof s[2 + r] && (s[2 + r] /= l), "number" == typeof s[3 + r] && (s[3 + r] /= l), n(s)
                        }
                    }
                },
                sM = (t, e) => t.depth - e.depth;
            class sV {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    P(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    T(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(sM), this.isDirty = !1, this.children.forEach(t)
                }
            }

            function sE(t) {
                let e = j(t) ? t.get() : t;
                return k(e) ? e.toValue() : e
            }
            let sC = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                sD = sC.length,
                sk = t => "string" == typeof t ? parseFloat(t) : t,
                sR = t => "number" == typeof t || tV.test(t);

            function sj(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let sL = sB(0, .5, tl),
                sF = sB(.5, .95, h);

            function sB(t, e, i) {
                return s => s < t ? 0 : s > e ? 1 : i(e3(t, e, s))
            }

            function sO(t, e) {
                t.min = e.min, t.max = e.max
            }

            function sI(t, e) {
                sO(t.x, e.x), sO(t.y, e.y)
            }

            function sU(t, e) {
                t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
            }

            function sN(t, e, i, s, n) {
                return t -= e, t = s + 1 / i * (t - s), void 0 !== n && (t = s + 1 / n * (t - s)), t
            }

            function s$(t, e, [i, s, n], r, o) {
                ! function(t, e = 0, i = 1, s = .5, n, r = t, o = t) {
                    if (tM.test(e) && (e = parseFloat(e), e = eV(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
                    let a = eV(r.min, r.max, s);
                    t === r && (a -= e), t.min = sN(t.min, e, i, a, n), t.max = sN(t.max, e, i, a, n)
                }(t, e[i], e[s], e[n], e.scale, r, o)
            }
            let sW = ["x", "scaleX", "originX"],
                sz = ["y", "scaleY", "originY"];

            function sY(t, e, i, s) {
                s$(t.x, e, sW, i ? i.x : void 0, s ? s.x : void 0), s$(t.y, e, sz, i ? i.y : void 0, s ? s.y : void 0)
            }

            function sX(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function sH(t) {
                return sX(t.x) && sX(t.y)
            }

            function sK(t, e) {
                return t.min === e.min && t.max === e.max
            }

            function sq(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
            }

            function sG(t, e) {
                return sq(t.x, e.x) && sq(t.y, e.y)
            }

            function s_(t) {
                return iF(t.x) / iF(t.y)
            }

            function sZ(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
            }
            class sQ {
                constructor() {
                    this.members = []
                }
                add(t) {
                    P(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if (T(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e;
                    let i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: s
                        } = t.options;
                        !1 === s && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            let sJ = {
                    nodes: 0,
                    calculatedTargetDeltas: 0,
                    calculatedProjections: 0
                },
                s0 = ["", "X", "Y", "Z"],
                s1 = {
                    visibility: "hidden"
                },
                s2 = 0;

            function s5(t, e, i, s) {
                let {
                    latestValues: n
                } = e;
                n[t] && (i[t] = n[t], e.setStaticValue(t, 0), s && (s[t] = 0))
            }

            function s3({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: i,
                checkIsScrollRoot: s,
                resetTransform: n
            }) {
                return class {
                    constructor(t = {}, i = e?.()) {
                        this.id = s2++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, c.value && (sJ.nodes = sJ.calculatedTargetDeltas = sJ.calculatedProjections = 0), this.nodes.forEach(s6), this.nodes.forEach(nn), this.nodes.forEach(nr), this.nodes.forEach(s8), c.addProjectionMetrics && c.addProjectionMetrics(sJ)
                        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new sV)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new b), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
                        let {
                            layoutId: s,
                            layout: n,
                            visualElement: r
                        } = this.options;
                        if (r && !r.current && r.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (n || s) && (this.isLayoutDirty = !0), t) {
                            let i;
                            let s = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, i && i(), i = function(t, e) {
                                    let i = A.now(),
                                        s = ({
                                            timestamp: n
                                        }) => {
                                            let r = n - i;
                                            r >= 250 && (f(s), t(r - e))
                                        };
                                    return m.read(s, !0), () => f(s)
                                }(s, 250), sx.hasAnimatedSinceResize && (sx.hasAnimatedSinceResize = !1, this.nodes.forEach(ns))
                            })
                        }
                        s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && r && (s || n) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeLayoutChanged: i,
                            layout: s
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let n = this.options.transition || r.getDefaultTransition() || nd,
                                {
                                    onLayoutAnimationStart: o,
                                    onLayoutAnimationComplete: a
                                } = r.getProps(),
                                h = !this.targetLayout || !sG(this.targetLayout, s),
                                u = !e && i;
                            if (this.options.layoutRoot || this.resumeFrom || u || e && (h || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = {
                                    ...l(n, "layout"),
                                    onPlay: o,
                                    onComplete: a
                                };
                                (r.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || ns(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = s
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, f(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(no), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                                if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                                let {
                                    visualElement: i
                                } = e.options;
                                if (!i) return;
                                let s = i.props[B];
                                if (window.MotionHasOptimisedAnimation(s, "transform")) {
                                    let {
                                        layout: t,
                                        layoutId: i
                                    } = e.options;
                                    window.MotionCancelOptimisedAnimation(s, "transform", m, !(t || i))
                                }
                                let {
                                    parent: n
                                } = e;
                                n && !n.hasCheckedOptimisedAppear && t(n)
                            }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let s = this.getTransformTemplate();
                        this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nt);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(ne), this.isUpdating = !1, this.nodes.forEach(ni), this.nodes.forEach(s4), this.nodes.forEach(s9), this.clearAllSnapshots();
                        let t = A.now();
                        g.delta = td(0, 1e3 / 60, t - g.timestamp), g.timestamp = t, g.isProcessing = !0, v.update.process(g), v.preRender.process(g), v.render.process(g), g.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, sm.read(this.scheduleUpdate))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(s7), this.sharedNodes.forEach(na)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, m.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        m.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        this.snapshot || !this.instance || (this.snapshot = this.measure(), !this.snapshot || iF(this.snapshot.measuredBox.x) || iF(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = iY(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e) {
                            let e = s(this.instance);
                            this.scroll = {
                                animationId: this.root.animationId,
                                phase: t,
                                isRoot: e,
                                offset: i(this.instance),
                                wasRoot: this.scroll ? this.scroll.isRoot : e
                            }
                        }
                    }
                    resetTransform() {
                        if (!n) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !sH(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            s = i ? i(this.latestValues, "") : void 0,
                            r = s !== this.prevTransformTemplateValue;
                        t && (e || iq(this.latestValues) || r) && (n(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            s = this.removeElementScroll(i);
                        return t && (s = this.removeTransform(s)), nm((e = s).x), nm(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: s,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return iY();
                        let e = t.measureViewportBox();
                        if (!(this.scroll?.wasRoot || this.path.some(ng))) {
                            let {
                                scroll: t
                            } = this.root;
                            t && (iJ(e.x, t.offset.x), iJ(e.y, t.offset.y))
                        }
                        return e
                    }
                    removeElementScroll(t) {
                        let e = iY();
                        if (sI(e, t), this.scroll?.wasRoot) return e;
                        for (let i = 0; i < this.path.length; i++) {
                            let s = this.path[i],
                                {
                                    scroll: n,
                                    options: r
                                } = s;
                            s !== this.root && n && r.layoutScroll && (n.wasRoot && sI(e, t), iJ(e.x, n.offset.x), iJ(e.y, n.offset.y))
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = iY();
                        sI(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let s = this.path[t];
                            !e && s.options.layoutScroll && s.scroll && s !== s.root && i1(i, {
                                x: -s.scroll.offset.x,
                                y: -s.scroll.offset.y
                            }), iq(s.latestValues) && i1(i, s.latestValues)
                        }
                        return iq(this.latestValues) && i1(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = iY();
                        sI(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !iq(i.latestValues)) continue;
                            iK(i.latestValues) && i.updateSnapshot();
                            let s = iY();
                            sI(s, i.measurePageBox()), sY(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                        }
                        return iq(this.latestValues) && sY(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = {
                            ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== g.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        let e = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                        let i = !!this.resumingFrom || this !== e;
                        if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        let {
                            layout: s,
                            layoutId: n
                        } = this.options;
                        if (this.layout && (s || n)) {
                            if (this.resolvedRelativeTargetAt = g.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = iY(), this.relativeTargetOrigin = iY(), iN(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), sI(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if (this.target || (this.target = iY(), this.targetWithTransforms = iY()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
                                    var r, o, a;
                                    this.forceRelativeParentToResolveTarget(), r = this.target, o = this.relativeTarget, a = this.relativeParent.target, iI(r.x, o.x, a.x), iI(r.y, o.y, a.y)
                                } else this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : sI(this.target, this.layout.layoutBox), iQ(this.target, this.targetDelta)) : sI(this.target, this.layout.layoutBox);
                                if (this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = iY(), this.relativeTargetOrigin = iY(), iN(this.relativeTargetOrigin, this.target, t.target), sI(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                c.value && sJ.calculatedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        return !this.parent || iK(this.parent.latestValues) || iG(this.parent.latestValues) ? void 0 : this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        let t = this.getLead(),
                            e = !!this.resumingFrom || this !== t,
                            i = !0;
                        if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (i = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === g.timestamp && (i = !1), i) return;
                        let {
                            layout: s,
                            layoutId: n
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(s || n)) return;
                        sI(this.layoutCorrected, this.layout.layoutBox);
                        let r = this.treeScale.x,
                            o = this.treeScale.y;
                        ! function(t, e, i, s = !1) {
                            let n, r;
                            let o = i.length;
                            if (o) {
                                e.x = e.y = 1;
                                for (let a = 0; a < o; a++) {
                                    r = (n = i[a]).projectionDelta;
                                    let {
                                        visualElement: o
                                    } = n.options;
                                    (!o || !o.props.style || "contents" !== o.props.style.display) && (s && n.options.layoutScroll && n.scroll && n !== n.root && i1(t, {
                                        x: -n.scroll.offset.x,
                                        y: -n.scroll.offset.y
                                    }), r && (e.x *= r.x.scale, e.y *= r.y.scale, iQ(t, r)), s && iq(n.latestValues) && i1(t, n.latestValues))
                                }
                                e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                            }
                        }(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = iY());
                        let {
                            target: a
                        } = t;
                        if (!a) {
                            this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                            return
                        }
                        this.projectionDelta && this.prevProjectionDelta ? (sU(this.prevProjectionDelta.x, this.projectionDelta.x), sU(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), iO(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === r && this.treeScale.y === o && sZ(this.projectionDelta.x, this.prevProjectionDelta.x) && sZ(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a)), c.value && sJ.calculatedProjections++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.visualElement?.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    createProjectionDeltas() {
                        this.prevProjectionDelta = iW(), this.projectionDelta = iW(), this.projectionDeltaWithTransform = iW()
                    }
                    setAnimationOrigin(t, e = !1) {
                        let i;
                        let s = this.snapshot,
                            n = s ? s.latestValues : {},
                            r = {
                                ...this.latestValues
                            },
                            o = iW();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let a = iY(),
                            l = (s ? s.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            h = this.getStack(),
                            u = !h || h.members.length <= 1,
                            d = !!(l && !u && !0 === this.options.crossfade && !this.path.some(nu));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let s = e / 1e3;
                            if (nl(o.x, t.x, s), nl(o.y, t.y, s), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var h, c, p, m, f, g;
                                if (iN(a, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p = this.relativeTarget, m = this.relativeTargetOrigin, f = a, g = s, nh(p.x, m.x, f.x, g), nh(p.y, m.y, f.y, g), i && (h = this.relativeTarget, c = i, sK(h.x, c.x) && sK(h.y, c.y))) this.isProjectionDirty = !1;
                                i || (i = iY()), sI(i, this.relativeTarget)
                            }
                            l && (this.animationValues = r, function(t, e, i, s, n, r) {
                                n ? (t.opacity = eV(0, i.opacity ?? 1, sL(s)), t.opacityExit = eV(e.opacity ?? 1, 0, sF(s))) : r && (t.opacity = eV(e.opacity ?? 1, i.opacity ?? 1, s));
                                for (let n = 0; n < sD; n++) {
                                    let r = `border${sC[n]}Radius`,
                                        o = sj(e, r),
                                        a = sj(i, r);
                                    (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || sR(o) === sR(a) ? (t[r] = Math.max(eV(sk(o), sk(a), s), 0), (tM.test(a) || tM.test(o)) && (t[r] += "%")) : t[r] = a)
                                }(e.rotate || i.rotate) && (t.rotate = eV(e.rotate || 0, i.rotate || 0, s))
                            }(r, n, this.latestValues, s, d, u)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = s
                        }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (f(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = m.update(() => {
                            sx.hasAnimatedSinceResize = !0, _.layout++, this.currentAnimation = function(t, e, i) {
                                let s = j(0) ? 0 : C(t);
                                return s.start(iu("", s, 1e3, i)), s.animation
                            }(0, 0, {
                                ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onStop: () => {
                                    _.layout--
                                },
                                onComplete: () => {
                                    _.layout--, t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: i,
                                layout: s,
                                latestValues: n
                            } = t;
                        if (e && i && s) {
                            if (this !== t && this.layout && s && nf(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                                i = this.target || iY();
                                let e = iF(this.layout.layoutBox.x);
                                i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                                let s = iF(this.layout.layoutBox.y);
                                i.y.min = t.target.y.min, i.y.max = i.y.min + s
                            }
                            sI(e, i), i1(e, n), iO(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new sQ), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        let {
                            layoutId: t
                        } = this.options;
                        return t && this.getStack()?.lead || this
                    }
                    getPrevLead() {
                        let {
                            layoutId: t
                        } = this.options;
                        return t ? this.getStack()?.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let s = this.getStack();
                        s && s.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetSkewAndRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                        let s = {};
                        i.z && s5("z", t, s, this.animationValues);
                        for (let e = 0; e < s0.length; e++) s5(`rotate${s0[e]}`, t, s, this.animationValues), s5(`skew${s0[e]}`, t, s, this.animationValues);
                        for (let e in t.render(), s) t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return s1;
                        let e = {
                                visibility: ""
                            },
                            i = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, e.opacity = "", e.pointerEvents = sE(t?.pointerEvents) || "", e.transform = i ? i(this.latestValues, "") : "none", e;
                        let s = this.getLead();
                        if (!this.projectionDelta || !this.layout || !s.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = sE(t?.pointerEvents) || ""), this.hasProjected && !iq(this.latestValues) && (e.transform = i ? i({}, "") : "none", this.hasProjected = !1), e
                        }
                        let n = s.animationValues || s.latestValues;
                        this.applyTransformsToTarget(), e.transform = function(t, e, i) {
                            let s = "",
                                n = t.x.translate / e.x,
                                r = t.y.translate / e.y,
                                o = i?.z || 0;
                            if ((n || r || o) && (s = `translate3d(${n}px, ${r}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1/e.x}, ${1/e.y}) `), i) {
                                let {
                                    transformPerspective: t,
                                    rotate: e,
                                    rotateX: n,
                                    rotateY: r,
                                    skewX: o,
                                    skewY: a
                                } = i;
                                t && (s = `perspective(${t}px) ${s}`), e && (s += `rotate(${e}deg) `), n && (s += `rotateX(${n}deg) `), r && (s += `rotateY(${r}deg) `), o && (s += `skewX(${o}deg) `), a && (s += `skewY(${a}deg) `)
                            }
                            let a = t.x.scale * e.x,
                                l = t.y.scale * e.y;
                            return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none"
                        }(this.projectionDeltaWithTransform, this.treeScale, n), i && (e.transform = i(n, e.transform));
                        let {
                            x: r,
                            y: o
                        } = this.projectionDelta;
                        for (let t in e.transformOrigin = `${100*r.origin}% ${100*o.origin}% 0`, s.animationValues ? e.opacity = s === this ? n.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : e.opacity = s === this ? void 0 !== n.opacity ? n.opacity : "" : void 0 !== n.opacityExit ? n.opacityExit : 0, sT) {
                            if (void 0 === n[t]) continue;
                            let {
                                correct: i,
                                applyTo: r,
                                isCSSVariable: o
                            } = sT[t], a = "none" === e.transform ? n[t] : i(n[t], s);
                            if (r) {
                                let t = r.length;
                                for (let i = 0; i < t; i++) e[r[i]] = a
                            } else o ? this.options.visualElement.renderState.vars[t] = a : e[t] = a
                        }
                        return this.options.layoutId && (e.pointerEvents = s === this ? sE(t?.pointerEvents) || "" : "none"), e
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => t.currentAnimation?.stop()), this.root.nodes.forEach(nt), this.root.sharedNodes.clear()
                    }
                }
            }

            function s4(t) {
                t.updateLayout()
            }

            function s9(t) {
                let e = t.resumeFrom?.snapshot || t.snapshot;
                if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: i,
                        measuredBox: s
                    } = t.layout, {
                        animationType: n
                    } = t.options, r = e.source !== t.layout.source;
                    "size" === n ? iX(t => {
                        let s = r ? e.measuredBox[t] : e.layoutBox[t],
                            n = iF(s);
                        s.min = i[t].min, s.max = s.min + n
                    }) : nf(n, e.layoutBox, i) && iX(s => {
                        let n = r ? e.measuredBox[s] : e.layoutBox[s],
                            o = iF(i[s]);
                        n.max = n.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + o)
                    });
                    let o = iW();
                    iO(o, i, e.layoutBox);
                    let a = iW();
                    r ? iO(a, t.applyTransform(s, !0), e.measuredBox) : iO(a, i, e.layoutBox);
                    let l = !sH(o),
                        h = !1;
                    if (!t.resumeFrom) {
                        let s = t.getClosestProjectingParent();
                        if (s && !s.resumeFrom) {
                            let {
                                snapshot: n,
                                layout: r
                            } = s;
                            if (n && r) {
                                let o = iY();
                                iN(o, e.layoutBox, n.layoutBox);
                                let a = iY();
                                iN(a, i, r.layoutBox), sG(o, a) || (h = !0), s.options.layoutRoot && (t.relativeTarget = a, t.relativeTargetOrigin = o, t.relativeParent = s)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: i,
                        snapshot: e,
                        delta: a,
                        layoutDelta: o,
                        hasLayoutChanged: l,
                        hasRelativeLayoutChanged: h
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function s6(t) {
                c.value && sJ.nodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function s8(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function s7(t) {
                t.clearSnapshot()
            }

            function nt(t) {
                t.clearMeasurements()
            }

            function ne(t) {
                t.isLayoutDirty = !1
            }

            function ni(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function ns(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function nn(t) {
                t.resolveTargetDelta()
            }

            function nr(t) {
                t.calcProjection()
            }

            function no(t) {
                t.resetSkewAndRotation()
            }

            function na(t) {
                t.removeLeadSnapshot()
            }

            function nl(t, e, i) {
                t.translate = eV(e.translate, 0, i), t.scale = eV(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function nh(t, e, i, s) {
                t.min = eV(e.min, i.min, s), t.max = eV(e.max, i.max, s)
            }

            function nu(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let nd = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                nc = t => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                np = nc("applewebkit/") && !nc("chrome/") ? Math.round : h;

            function nm(t) {
                t.min = np(t.min), t.max = np(t.max)
            }

            function nf(t, e, i) {
                return "position" === t || "preserve-aspect" === t && !(.2 >= Math.abs(s_(e) - s_(i)))
            }

            function ng(t) {
                return t !== t.root && t.scroll?.wasRoot
            }
            let nv = s3({
                    attachResizeListener: (t, e) => iC(t, "resize", e),
                    measureScroll: () => ({
                        x: document.documentElement.scrollLeft || document.body.scrollLeft,
                        y: document.documentElement.scrollTop || document.body.scrollTop
                    }),
                    checkIsScrollRoot: () => !0
                }),
                ny = {
                    current: void 0
                },
                nx = s3({
                    measureScroll: t => ({
                        x: t.scrollLeft,
                        y: t.scrollTop
                    }),
                    defaultParent: () => {
                        if (!ny.current) {
                            let t = new nv({});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), ny.current = t
                        }
                        return ny.current
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none"
                    },
                    checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
                });

            function nw(t, e) {
                let i = function(t, e, i) {
                        if (t instanceof EventTarget) return [t];
                        if ("string" == typeof t) {
                            let e = document,
                                i = (void 0) ?? e.querySelectorAll(t);
                            return i ? Array.from(i) : []
                        }
                        return Array.from(t)
                    }(t),
                    s = new AbortController;
                return [i, {
                    passive: !0,
                    ...e,
                    signal: s.signal
                }, () => s.abort()]
            }

            function nP(t) {
                return !("touch" === t.pointerType || iE.x || iE.y)
            }

            function nT(t, e, i) {
                let {
                    props: s
                } = t;
                t.animationState && s.whileHover && t.animationState.setActive("whileHover", "Start" === i);
                let n = s["onHover" + i];
                n && m.postRender(() => n(e, ik(e)))
            }
            class nb extends iS {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, i = {}) {
                        let [s, n, r] = nw(t, i), o = t => {
                            if (!nP(t)) return;
                            let {
                                target: i
                            } = t, s = e(i, t);
                            if ("function" != typeof s || !i) return;
                            let r = t => {
                                nP(t) && (s(t), i.removeEventListener("pointerleave", r))
                            };
                            i.addEventListener("pointerleave", r, n)
                        };
                        return s.forEach(t => {
                            t.addEventListener("pointerenter", o, n)
                        }), r
                    }(t, (t, e) => (nT(this.node, e, "Start"), t => nT(this.node, t, "End"))))
                }
                unmount() {}
            }
            class nS extends iS {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = eB(iC(this.node.current, "focus", () => this.onFocus()), iC(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let nA = (t, e) => !!e && (t === e || nA(t, e.parentElement)),
                nM = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                nV = new WeakSet;

            function nE(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function nC(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }
            let nD = (t, e) => {
                let i = t.currentTarget;
                if (!i) return;
                let s = nE(() => {
                    if (nV.has(i)) return;
                    nC(i, "down");
                    let t = nE(() => {
                        nC(i, "up")
                    });
                    i.addEventListener("keyup", t, e), i.addEventListener("blur", () => nC(i, "cancel"), e)
                });
                i.addEventListener("keydown", s, e), i.addEventListener("blur", () => i.removeEventListener("keydown", s), e)
            };

            function nk(t) {
                return iD(t) && !(iE.x || iE.y)
            }

            function nR(t, e, i) {
                let {
                    props: s
                } = t;
                if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
                t.animationState && s.whileTap && t.animationState.setActive("whileTap", "Start" === i);
                let n = s["onTap" + ("End" === i ? "" : i)];
                n && m.postRender(() => n(e, ik(e)))
            }
            class nj extends iS {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, i = {}) {
                        let [s, n, r] = nw(t, i), o = t => {
                            let s = t.currentTarget;
                            if (!nk(t) || nV.has(s)) return;
                            nV.add(s);
                            let r = e(s, t),
                                o = (t, e) => {
                                    window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", l), nk(t) && nV.has(s) && (nV.delete(s), "function" == typeof r && r(t, {
                                        success: e
                                    }))
                                },
                                a = t => {
                                    o(t, s === window || s === document || i.useGlobalTarget || nA(s, t.target))
                                },
                                l = t => {
                                    o(t, !1)
                                };
                            window.addEventListener("pointerup", a, n), window.addEventListener("pointercancel", l, n)
                        };
                        return s.forEach(t => {
                            if ((i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, n), t instanceof HTMLElement) t.addEventListener("focus", t => nD(t, n)), !nM.has(t.tagName) && -1 === t.tabIndex && !t.hasAttribute("tabindex") && (t.tabIndex = 0)
                        }), r
                    }(t, (t, e) => (nR(this.node, e, "Start"), (t, {
                        success: e
                    }) => nR(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let nL = new WeakMap,
                nF = new WeakMap,
                nB = t => {
                    let e = nL.get(t.target);
                    e && e(t)
                },
                nO = t => {
                    t.forEach(nB)
                },
                nI = {
                    some: 0,
                    all: 1
                };
            class nU extends iS {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: s = "some",
                        once: n
                    } = t, r = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof s ? s : nI[s]
                    };
                    return function(t, e, i) {
                        let s = function({
                            root: t,
                            ...e
                        }) {
                            let i = t || document;
                            nF.has(i) || nF.set(i, {});
                            let s = nF.get(i),
                                n = JSON.stringify(e);
                            return s[n] || (s[n] = new IntersectionObserver(nO, {
                                root: t,
                                ...e
                            })), s[n]
                        }(e);
                        return nL.set(t, i), s.observe(t), () => {
                            nL.delete(t), s.unobserve(t)
                        }
                    }(this.node.current, r, t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, n && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: s
                        } = this.node.getProps(), r = e ? i : s;
                        r && r(t)
                    })
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            let nN = (0, sf.createContext)({
                strict: !1
            });
            var n$ = i(1961);
            let nW = (0, sf.createContext)({});

            function nz(t) {
                return n(t.animate) || iy.some(e => ig(t[e]))
            }

            function nY(t) {
                return !!(nz(t) || t.variants)
            }

            function nX(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var nH = i(2543);
            let nK = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                nq = {};
            for (let t in nK) nq[t] = {
                isEnabled: e => nK[t].some(t => !!e[t])
            };
            let nG = Symbol.for("motionComponentSymbol");
            var n_ = i(9840),
                nZ = i(7027);

            function nQ(t, {
                layout: e,
                layoutId: i
            }) {
                return x.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!sT[t] || "opacity" === t)
            }
            let nJ = (t, e) => e && "number" == typeof t ? e.transform(t) : t,
                n0 = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                n1 = y.length;

            function n2(t, e, i) {
                let {
                    style: s,
                    vars: n,
                    transformOrigin: r
                } = t, o = !1, a = !1;
                for (let t in e) {
                    let i = e[t];
                    if (x.has(t)) {
                        o = !0;
                        continue
                    }
                    if (ep(t)) {
                        n[t] = i;
                        continue
                    } {
                        let e = nJ(i, tK[t]);
                        t.startsWith("origin") ? (a = !0, r[t] = e) : s[t] = e
                    }
                }
                if (!e.transform && (o || i ? s.transform = function(t, e, i) {
                        let s = "",
                            n = !0;
                        for (let r = 0; r < n1; r++) {
                            let o = y[r],
                                a = t[o];
                            if (void 0 === a) continue;
                            let l = !0;
                            if (!(l = "number" == typeof a ? a === +!!o.startsWith("scale") : 0 === parseFloat(a)) || i) {
                                let t = nJ(a, tK[o]);
                                if (!l) {
                                    n = !1;
                                    let e = n0[o] || o;
                                    s += `${e}(${t}) `
                                }
                                i && (e[o] = t)
                            }
                        }
                        return s = s.trim(), i ? s = i(e, n ? "" : s) : n && (s = "none"), s
                    }(e, t.transform, i) : s.transform && (s.transform = "none")), a) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: i = 0
                    } = r;
                    s.transformOrigin = `${t} ${e} ${i}`
                }
            }
            let n5 = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function n3(t, e, i) {
                for (let s in e) j(e[s]) || nQ(s, i) || (t[s] = e[s])
            }
            let n4 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function n9(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || n4.has(t)
            }
            let n6 = t => !n9(t);
            try {
                ! function(t) {
                    t && (n6 = e => e.startsWith("on") ? !n9(e) : t(e))
                }(require("@emotion/is-prop-valid").default)
            } catch {}
            let n8 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function n7(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (n8.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
            let rt = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                re = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function ri(t, e, i) {
                return "string" == typeof t ? t : tV.transform(e + i * t)
            }

            function rs(t, {
                attrX: e,
                attrY: i,
                attrScale: s,
                originX: n,
                originY: r,
                pathLength: o,
                pathSpacing: a = 1,
                pathOffset: l = 0,
                ...h
            }, u, d) {
                if (n2(t, h, d), u) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: c,
                    style: p,
                    dimensions: m
                } = t;
                c.transform && (m && (p.transform = c.transform), delete c.transform), m && (void 0 !== n || void 0 !== r || p.transform) && (p.transformOrigin = function(t, e, i) {
                    let s = ri(e, t.x, t.width),
                        n = ri(i, t.y, t.height);
                    return `${s} ${n}`
                }(m, void 0 !== n ? n : .5, void 0 !== r ? r : .5)), void 0 !== e && (c.x = e), void 0 !== i && (c.y = i), void 0 !== s && (c.scale = s), void 0 !== o && function(t, e, i = 1, s = 0, n = !0) {
                    t.pathLength = 1;
                    let r = n ? rt : re;
                    t[r.offset] = tV.transform(-s);
                    let o = tV.transform(e),
                        a = tV.transform(i);
                    t[r.array] = `${o} ${a}`
                }(c, o, a, l, !1)
            }
            let rn = () => ({
                    ...n5(),
                    attrs: {}
                }),
                rr = t => "string" == typeof t && "svg" === t.toLowerCase();
            var ro = i(9690);
            let ra = t => (e, i) => {
                let s = (0, sf.useContext)(nW),
                    r = (0, sf.useContext)(n_.t),
                    a = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onUpdate: i
                    }, s, r, a) {
                        let l = {
                            latestValues: function(t, e, i, s) {
                                let r = {},
                                    a = s(t, {});
                                for (let t in a) r[t] = sE(a[t]);
                                let {
                                    initial: l,
                                    animate: h
                                } = t, u = nz(t), d = nY(t);
                                e && d && !u && !1 !== t.inherit && (void 0 === l && (l = e.initial), void 0 === h && (h = e.animate));
                                let c = !!i && !1 === i.initial,
                                    p = (c = c || !1 === l) ? h : l;
                                if (p && "boolean" != typeof p && !n(p)) {
                                    let e = Array.isArray(p) ? p : [p];
                                    for (let i = 0; i < e.length; i++) {
                                        let s = o(t, e[i]);
                                        if (s) {
                                            let {
                                                transitionEnd: t,
                                                transition: e,
                                                ...i
                                            } = s;
                                            for (let t in i) {
                                                let e = i[t];
                                                if (Array.isArray(e)) {
                                                    let t = c ? e.length - 1 : 0;
                                                    e = e[t]
                                                }
                                                null !== e && (r[t] = e)
                                            }
                                            for (let e in t) r[e] = t[e]
                                        }
                                    }
                                }
                                return r
                            }(s, r, a, t),
                            renderState: e()
                        };
                        return i && (l.onMount = t => i({
                            props: s,
                            current: t,
                            ...l
                        }), l.onUpdate = t => i(t)), l
                    })(t, e, s, r);
                return i ? a() : (0, ro.M)(a)
            };

            function rl(t, e, i) {
                let {
                    style: s
                } = t, n = {};
                for (let r in s)(j(s[r]) || e.style && j(e.style[r]) || nQ(r, t) || i?.getValue(r)?.liveStyle !== void 0) && (n[r] = s[r]);
                return n
            }
            let rh = {
                useVisualState: ra({
                    scrapeMotionValuesFromProps: rl,
                    createRenderState: n5
                })
            };

            function ru(t, e) {
                try {
                    e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect()
                } catch (t) {
                    e.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }

            function rd(t, {
                style: e,
                vars: i
            }, s, n) {
                for (let r in Object.assign(t.style, e, n && n.getProjectionStyles(s)), i) t.style.setProperty(r, i[r])
            }
            let rc = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

            function rp(t, e, i, s) {
                for (let i in rd(t, e, void 0, s), e.attrs) t.setAttribute(rc.has(i) ? i : F(i), e.attrs[i])
            }

            function rm(t, e, i) {
                let s = rl(t, e, i);
                for (let i in t)(j(t[i]) || j(e[i])) && (s[-1 !== y.indexOf(i) ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i] = t[i]);
                return s
            }
            let rf = ["x", "y", "width", "height", "cx", "cy", "r"],
                rg = {
                    useVisualState: ra({
                        scrapeMotionValuesFromProps: rm,
                        createRenderState: rn,
                        onUpdate: ({
                            props: t,
                            prevProps: e,
                            current: i,
                            renderState: s,
                            latestValues: n
                        }) => {
                            if (!i) return;
                            let r = !!t.drag;
                            if (!r) {
                                for (let t in n)
                                    if (x.has(t)) {
                                        r = !0;
                                        break
                                    }
                            }
                            if (!r) return;
                            let o = !e;
                            if (e)
                                for (let i = 0; i < rf.length; i++) {
                                    let s = rf[i];
                                    t[s] !== e[s] && (o = !0)
                                }
                            o && m.read(() => {
                                ru(i, s), m.render(() => {
                                    rs(s, n, rr(i.tagName), t.transformTemplate), rp(i, s)
                                })
                            })
                        }
                    })
                },
                rv = {
                    current: null
                },
                ry = {
                    current: !1
                },
                rx = [...ex, tR, t$],
                rw = t => rx.find(ey(t)),
                rP = new WeakMap,
                rT = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class rb {
                scrapeMotionValuesFromProps(t, e, i) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: s,
                    blockInitialAnimation: n,
                    visualState: r
                }, o = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = el, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = A.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, m.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: a,
                        renderState: l,
                        onUpdate: h
                    } = r;
                    this.onUpdate = h, this.latestValues = a, this.baseTarget = {
                        ...a
                    }, this.initialValues = e.initial ? {
                        ...a
                    } : {}, this.renderState = l, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = o, this.blockInitialAnimation = !!n, this.isControllingVariants = nz(e), this.isVariantNode = nY(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: u,
                        ...d
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in d) {
                        let e = d[t];
                        void 0 !== a[t] && j(e) && e.set(a[t], !1)
                    }
                }
                mount(t) {
                    this.current = t, rP.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), ry.current || function() {
                        if (ry.current = !0, nH.B) {
                            if (window.matchMedia) {
                                let t = window.matchMedia("(prefers-reduced-motion)"),
                                    e = () => rv.current = t.matches;
                                t.addListener(e), e()
                            } else rv.current = !1
                        }
                    }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || rv.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in this.projection && this.projection.unmount(), f(this.notifyUpdate), f(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let i;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let s = x.has(t);
                    s && this.onBindTransform && this.onBindTransform();
                    let n = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && m.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        r = e.on("renderRequest", this.scheduleRender);
                    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        n(), r(), i && i(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in nq) {
                        let e = nq[t];
                        if (!e) continue;
                        let {
                            isEnabled: i,
                            Feature: s
                        } = e;
                        if (!this.features[t] && s && i(this.props) && (this.features[t] = new s(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : iY()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < rT.length; e++) {
                        let i = rT[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let s = t["on" + i];
                        s && (this.propEventSubscriptions[i] = this.on(i, s))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        for (let s in e) {
                            let n = e[s],
                                r = i[s];
                            if (j(n)) t.addValue(s, n);
                            else if (j(r)) t.addValue(s, C(n, {
                                owner: t
                            }));
                            else if (r !== n) {
                                if (t.hasValue(s)) {
                                    let e = t.getValue(s);
                                    !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n)
                                } else {
                                    let e = t.getStaticValue(s);
                                    t.addValue(s, C(void 0 !== e ? e : n, {
                                        owner: t
                                    }))
                                }
                            }
                        }
                        for (let s in i) void 0 === e[s] && t.removeValue(s);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let i = this.values.get(t);
                    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = C(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t, e) {
                    let i = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    return null != i && ("string" == typeof i && (ed(i) || tu(i)) ? i = parseFloat(i) : !rw(i) && t$.test(e) && (i = t_(t, e)), this.setBaseTarget(t, j(i) ? i.get() : i)), j(i) ? i.get() : i
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    let e;
                    let {
                        initial: i
                    } = this.props;
                    if ("string" == typeof i || "object" == typeof i) {
                        let s = o(this.props, i, this.presenceContext?.custom);
                        s && (e = s[t])
                    }
                    if (i && void 0 !== e) return e;
                    let s = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === s || j(s) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : s
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new b), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
            class rS extends rb {
                constructor() {
                    super(...arguments), this.KeyframeResolver = eP
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    j(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
            class rA extends rS {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = rd
                }
                readValueFromInstance(t, e) {
                    if (x.has(e)) return t6(t, e);
                    {
                        let i = window.getComputedStyle(t),
                            s = (ep(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof s ? s.trim() : s
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return i2(t, e)
                }
                build(t, e, i) {
                    n2(t, e, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return rl(t, e, i)
                }
            }
            class rM extends rS {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = iY, this.updateDimensions = () => {
                        this.current && !this.renderState.dimensions && ru(this.current, this.renderState)
                    }
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (x.has(e)) {
                        let t = tG(e);
                        return t && t.default || 0
                    }
                    return e = rc.has(e) ? e : F(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return rm(t, e, i)
                }
                onBindTransform() {
                    this.current && !this.renderState.dimensions && m.postRender(this.updateDimensions)
                }
                build(t, e, i) {
                    rs(t, e, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, i, s) {
                    rp(t, e, i, s)
                }
                mount(t) {
                    this.isSVGTag = rr(t.tagName), super.mount(t)
                }
            }
            let rV = function(t) {
                if ("undefined" == typeof Proxy) return t;
                let e = new Map;
                return new Proxy((...e) => t(...e), {
                    get: (i, s) => "create" === s ? t : (e.has(s) || e.set(s, t(s)), e.get(s))
                })
            }((sd = {
                animation: {
                    Feature: iA
                },
                exit: {
                    Feature: iV
                },
                inView: {
                    Feature: nU
                },
                tap: {
                    Feature: nj
                },
                focus: {
                    Feature: nS
                },
                hover: {
                    Feature: nb
                },
                pan: {
                    Feature: su
                },
                drag: {
                    Feature: sl,
                    ProjectionNode: nx,
                    MeasureLayout: sS
                },
                layout: {
                    ProjectionNode: nx,
                    MeasureLayout: sS
                }
            }, sc = (t, e) => n7(t) ? new rM(e) : new rA(e, {
                allowProjection: t !== sf.Fragment
            }), function(t, {
                forwardMotionProps: e
            } = {
                forwardMotionProps: !1
            }) {
                return function(t) {
                    var e, i;
                    let {
                        preloadedFeatures: s,
                        createVisualElement: n,
                        useRender: r,
                        useVisualState: o,
                        Component: a
                    } = t;

                    function l(t, e) {
                        var i, s, l;
                        let h;
                        let u = {
                                ...(0, sf.useContext)(n$.Q),
                                ...t,
                                layoutId: function(t) {
                                    let {
                                        layoutId: e
                                    } = t, i = (0, sf.useContext)(sv.L).id;
                                    return i && void 0 !== e ? i + "-" + e : e
                                }(t)
                            },
                            {
                                isStatic: d
                            } = u,
                            c = function(t) {
                                let {
                                    initial: e,
                                    animate: i
                                } = function(t, e) {
                                    if (nz(t)) {
                                        let {
                                            initial: e,
                                            animate: i
                                        } = t;
                                        return {
                                            initial: !1 === e || ig(e) ? e : void 0,
                                            animate: ig(i) ? i : void 0
                                        }
                                    }
                                    return !1 !== t.inherit ? e : {}
                                }(t, (0, sf.useContext)(nW));
                                return (0, sf.useMemo)(() => ({
                                    initial: e,
                                    animate: i
                                }), [nX(e), nX(i)])
                            }(t),
                            p = o(t, d);
                        if (!d && nH.B) {
                            s = 0, l = 0, (0, sf.useContext)(nN).strict;
                            let t = function(t) {
                                let {
                                    drag: e,
                                    layout: i
                                } = nq;
                                if (!e && !i) return {};
                                let s = {
                                    ...e,
                                    ...i
                                };
                                return {
                                    MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == i ? void 0 : i.isEnabled(t)) ? s.MeasureLayout : void 0,
                                    ProjectionNode: s.ProjectionNode
                                }
                            }(u);
                            h = t.MeasureLayout, c.visualElement = function(t, e, i, s, n) {
                                let {
                                    visualElement: r
                                } = (0, sf.useContext)(nW), o = (0, sf.useContext)(nN), a = (0, sf.useContext)(n_.t), l = (0, sf.useContext)(n$.Q).reducedMotion, h = (0, sf.useRef)(null);
                                s = s || o.renderer, !h.current && s && (h.current = s(t, {
                                    visualState: e,
                                    parent: r,
                                    props: i,
                                    presenceContext: a,
                                    blockInitialAnimation: !!a && !1 === a.initial,
                                    reducedMotionConfig: l
                                }));
                                let u = h.current,
                                    d = (0, sf.useContext)(sy);
                                u && !u.projection && n && ("html" === u.type || "svg" === u.type) && function(t, e, i, s) {
                                    let {
                                        layoutId: n,
                                        layout: r,
                                        drag: o,
                                        dragConstraints: a,
                                        layoutScroll: l,
                                        layoutRoot: h,
                                        layoutCrossfade: u
                                    } = e;
                                    t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                        if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                    }(t.parent)), t.projection.setOptions({
                                        layoutId: n,
                                        layout: r,
                                        alwaysMeasureLayout: !!o || a && i3(a),
                                        visualElement: t,
                                        animationType: "string" == typeof r ? r : "both",
                                        initialPromotionConfig: s,
                                        crossfade: u,
                                        layoutScroll: l,
                                        layoutRoot: h
                                    })
                                }(h.current, i, n, d);
                                let c = (0, sf.useRef)(!1);
                                (0, sf.useInsertionEffect)(() => {
                                    u && c.current && u.update(i, a)
                                });
                                let p = i[B],
                                    m = (0, sf.useRef)(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
                                return (0, nZ.E)(() => {
                                    u && (c.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), sm.render(u.render), m.current && u.animationState && u.animationState.animateChanges())
                                }), (0, sf.useEffect)(() => {
                                    u && (!m.current && u.animationState && u.animationState.animateChanges(), m.current && (queueMicrotask(() => {
                                        window.MotionHandoffMarkAsComplete?.(p)
                                    }), m.current = !1))
                                }), u
                            }(a, p, u, n, t.ProjectionNode)
                        }
                        return (0, sp.jsxs)(nW.Provider, {
                            value: c,
                            children: [h && c.visualElement ? (0, sp.jsx)(h, {
                                visualElement: c.visualElement,
                                ...u
                            }) : null, r(a, t, (i = c.visualElement, (0, sf.useCallback)(t => {
                                t && p.onMount && p.onMount(t), i && (t ? i.mount(t) : i.unmount()), e && ("function" == typeof e ? e(t) : i3(e) && (e.current = t))
                            }, [i])), p, d, c.visualElement)]
                        })
                    }
                    s && function(t) {
                        for (let e in t) nq[e] = {
                            ...nq[e],
                            ...t[e]
                        }
                    }(s), l.displayName = "motion.".concat("string" == typeof a ? a : "create(".concat(null !== (i = null !== (e = a.displayName) && void 0 !== e ? e : a.name) && void 0 !== i ? i : "", ")"));
                    let h = (0, sf.forwardRef)(l);
                    return h[nG] = a, h
                }({
                    ...n7(t) ? rg : rh,
                    preloadedFeatures: sd,
                    useRender: function(t = !1) {
                        return (e, i, s, {
                            latestValues: n
                        }, r) => {
                            let o = (n7(e) ? function(t, e, i, s) {
                                    let n = (0, sf.useMemo)(() => {
                                        let i = rn();
                                        return rs(i, e, rr(s), t.transformTemplate), {
                                            ...i.attrs,
                                            style: {
                                                ...i.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        n3(e, t.style, t), n.style = {
                                            ...e,
                                            ...n.style
                                        }
                                    }
                                    return n
                                } : function(t, e) {
                                    let i = {},
                                        s = function(t, e) {
                                            let i = t.style || {},
                                                s = {};
                                            return n3(s, i, t), Object.assign(s, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, sf.useMemo)(() => {
                                                    let i = n5();
                                                    return n2(i, e, t), Object.assign({}, i.vars, i.style)
                                                }, [e])
                                            }(t, e)), s
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (i.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (i.tabIndex = 0), i.style = s, i
                                })(i, n, r, e),
                                a = function(t, e, i) {
                                    let s = {};
                                    for (let n in t)("values" !== n || "object" != typeof t.values) && (n6(n) || !0 === i && n9(n) || !e && !n9(n) || t.draggable && n.startsWith("onDrag")) && (s[n] = t[n]);
                                    return s
                                }(i, "string" == typeof e, t),
                                l = e !== sf.Fragment ? {
                                    ...a,
                                    ...o,
                                    ref: s
                                } : {},
                                {
                                    children: h
                                } = i,
                                u = (0, sf.useMemo)(() => j(h) ? h.get() : h, [h]);
                            return (0, sf.createElement)(e, {
                                ...l,
                                children: u
                            })
                        }
                    }(e),
                    createVisualElement: sc,
                    Component: t
                })
            }))
        },
        9690: (t, e, i) => {
            i.d(e, {
                M: () => n
            });
            var s = i(364);

            function n(t) {
                let e = (0, s.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        9840: (t, e, i) => {
            i.d(e, {
                t: () => s
            });
            let s = (0, i(364).createContext)(null)
        }
    }
]);
