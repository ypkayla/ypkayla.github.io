(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [357], {
        570: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4168).A)("Github", [
                ["path", {
                    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
                    key: "tonef"
                }],
                ["path", {
                    d: "M9 18c-4.51 2-5-2-7-2",
                    key: "9comsn"
                }]
            ])
        },
        855: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4168).A)("ChevronRight", [
                ["path", {
                    d: "m9 18 6-6-6-6",
                    key: "mthhwq"
                }]
            ])
        },
        1245: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => g
            });
            var r = n(2432),
                o = n(364),
                i = n(8446),
                a = n(9690),
                l = n(7027),
                u = n(9840),
                c = n(1961);
            class s extends o.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = t.offsetParent,
                            n = e instanceof HTMLElement && e.offsetWidth || 0,
                            r = this.props.sizeRef.current;
                        r.height = t.offsetHeight || 0, r.width = t.offsetWidth || 0, r.top = t.offsetTop, r.left = t.offsetLeft, r.right = n - r.width - r.left
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function d(e) {
                let {
                    children: t,
                    isPresent: n,
                    anchorX: i
                } = e, a = (0, o.useId)(), l = (0, o.useRef)(null), u = (0, o.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    right: 0
                }), {
                    nonce: d
                } = (0, o.useContext)(c.Q);
                return (0, o.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: t,
                        top: r,
                        left: o,
                        right: c
                    } = u.current;
                    if (n || !l.current || !e || !t) return;
                    l.current.dataset.motionPopId = a;
                    let s = document.createElement("style");
                    return d && (s.nonce = d), document.head.appendChild(s), s.sheet && s.sheet.insertRule('\n          [data-motion-pop-id="'.concat(a, '"] {\n            position: absolute !important;\n            width: ').concat(e, "px !important;\n            height: ").concat(t, "px !important;\n            ").concat("left" === i ? "left: ".concat(o) : "right: ".concat(c), "px !important;\n            top: ").concat(r, "px !important;\n          }\n        ")), () => {
                        document.head.removeChild(s)
                    }
                }, [n]), (0, r.jsx)(s, {
                    isPresent: n,
                    childRef: l,
                    sizeRef: u,
                    children: o.cloneElement(t, {
                        ref: l
                    })
                })
            }
            let f = e => {
                let {
                    children: t,
                    initial: n,
                    isPresent: i,
                    onExitComplete: l,
                    custom: c,
                    presenceAffectsLayout: s,
                    mode: f,
                    anchorX: h
                } = e, m = (0, a.M)(p), v = (0, o.useId)(), g = !0, y = (0, o.useMemo)(() => (g = !1, {
                    id: v,
                    initial: n,
                    isPresent: i,
                    custom: c,
                    onExitComplete: e => {
                        for (let t of (m.set(e, !0), m.values()))
                            if (!t) return;
                        l && l()
                    },
                    register: e => (m.set(e, !1), () => m.delete(e))
                }), [i, m, l]);
                return s && g && (y = {
                    ...y
                }), (0, o.useMemo)(() => {
                    m.forEach((e, t) => m.set(t, !1))
                }, [i]), o.useEffect(() => {
                    i || m.size || !l || l()
                }, [i]), "popLayout" === f && (t = (0, r.jsx)(d, {
                    isPresent: i,
                    anchorX: h,
                    children: t
                })), (0, r.jsx)(u.t.Provider, {
                    value: y,
                    children: t
                })
            };

            function p() {
                return new Map
            }
            var h = n(6135);
            let m = e => e.key || "";

            function v(e) {
                let t = [];
                return o.Children.forEach(e, e => {
                    (0, o.isValidElement)(e) && t.push(e)
                }), t
            }
            let g = e => {
                let {
                    children: t,
                    custom: n,
                    initial: u = !0,
                    onExitComplete: c,
                    presenceAffectsLayout: s = !0,
                    mode: d = "sync",
                    propagate: p = !1,
                    anchorX: g = "left"
                } = e, [y, w] = (0, h.xQ)(p), b = (0, o.useMemo)(() => v(t), [t]), x = p && !y ? [] : b.map(m), E = (0, o.useRef)(!0), C = (0, o.useRef)(b), R = (0, a.M)(() => new Map), [k, A] = (0, o.useState)(b), [M, S] = (0, o.useState)(b);
                (0, l.E)(() => {
                    E.current = !1, C.current = b;
                    for (let e = 0; e < M.length; e++) {
                        let t = m(M[e]);
                        x.includes(t) ? R.delete(t) : !0 !== R.get(t) && R.set(t, !1)
                    }
                }, [M, x.length, x.join("-")]);
                let P = [];
                if (b !== k) {
                    let e = [...b];
                    for (let t = 0; t < M.length; t++) {
                        let n = M[t],
                            r = m(n);
                        x.includes(r) || (e.splice(t, 0, n), P.push(n))
                    }
                    return "wait" === d && P.length && (e = P), S(v(e)), A(b), null
                }
                let {
                    forceRender: L
                } = (0, o.useContext)(i.L);
                return (0, r.jsx)(r.Fragment, {
                    children: M.map(e => {
                        let t = m(e),
                            o = (!p || !!y) && (b === M || x.includes(t));
                        return (0, r.jsx)(f, {
                            isPresent: o,
                            initial: (!E.current || !!u) && void 0,
                            custom: n,
                            presenceAffectsLayout: s,
                            mode: d,
                            onExitComplete: o ? void 0 : () => {
                                if (!R.has(t)) return;
                                R.set(t, !0);
                                let e = !0;
                                R.forEach(t => {
                                    t || (e = !1)
                                }), e && (null == L || L(), S(C.current), p && (null == w || w()), c && c())
                            },
                            anchorX: g,
                            children: e
                        }, t)
                    })
                })
            }
        },
        1332: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4168).A)("Twitter", [
                ["path", {
                    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                    key: "pff0z6"
                }]
            ])
        },
        1823: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4168).A)("X", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        1927: e => {
            e.exports = {
                style: {
                    fontFamily: "'Inter', 'Inter Fallback'",
                    fontStyle: "normal"
                },
                className: "__className_d65c78"
            }
        },
        2669: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4168).A)("Circle", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }]
            ])
        },
        3491: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4168).A)("Check", [
                ["path", {
                    d: "M20 6 9 17l-5-5",
                    key: "1gmf2c"
                }]
            ])
        },
        4425: (e, t, n) => {
            "use strict";
            n.d(t, {
                H_: () => rx,
                UC: () => rg,
                YJ: () => ry,
                q7: () => rb,
                VF: () => rR,
                JU: () => rw,
                ZL: () => rv,
                z6: () => rE,
                hN: () => rC,
                bL: () => rh,
                wv: () => rk,
                Pb: () => rA,
                G5: () => rS,
                ZP: () => rM,
                l9: () => rm
            });
            var r, o, i = n(364),
                a = n(4017),
                l = n(7419),
                u = n(4223),
                c = n(7626),
                s = n(6326),
                d = n(6162),
                f = n(32),
                p = n(8926),
                h = n(2432),
                m = "dismissableLayer.update",
                v = i.createContext({
                    layers: new Set,
                    layersWithOutsidePointerEventsDisabled: new Set,
                    branches: new Set
                }),
                g = i.forwardRef((e, t) => {
                    var n, o;
                    let {
                        disableOutsidePointerEvents: u = !1,
                        onEscapeKeyDown: c,
                        onPointerDownOutside: d,
                        onFocusOutside: f,
                        onInteractOutside: g,
                        onDismiss: b,
                        ...x
                    } = e, E = i.useContext(v), [C, R] = i.useState(null), k = null !== (o = null == C ? void 0 : C.ownerDocument) && void 0 !== o ? o : null === (n = globalThis) || void 0 === n ? void 0 : n.document, [, A] = i.useState({}), M = (0, l.s)(t, e => R(e)), S = Array.from(E.layers), [P] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1), L = S.indexOf(P), T = C ? S.indexOf(C) : -1, j = E.layersWithOutsidePointerEventsDisabled.size > 0, D = T >= L, O = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, p.c)(e),
                            o = i.useRef(!1),
                            a = i.useRef(() => {});
                        return i.useEffect(() => {
                            let e = e => {
                                    if (e.target && !o.current) {
                                        let t = function() {
                                                w("dismissableLayer.pointerDownOutside", r, o, {
                                                    discrete: !0
                                                })
                                            },
                                            o = {
                                                originalEvent: e
                                            };
                                        "touch" === e.pointerType ? (n.removeEventListener("click", a.current), a.current = t, n.addEventListener("click", a.current, {
                                            once: !0
                                        })) : t()
                                    } else n.removeEventListener("click", a.current);
                                    o.current = !1
                                },
                                t = window.setTimeout(() => {
                                    n.addEventListener("pointerdown", e)
                                }, 0);
                            return () => {
                                window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", a.current)
                            }
                        }, [n, r]), {
                            onPointerDownCapture: () => o.current = !0
                        }
                    }(e => {
                        let t = e.target,
                            n = [...E.branches].some(e => e.contains(t));
                        !D || n || (null == d || d(e), null == g || g(e), e.defaultPrevented || null == b || b())
                    }, k), N = function(e) {
                        var t;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === (t = globalThis) || void 0 === t ? void 0 : t.document,
                            r = (0, p.c)(e),
                            o = i.useRef(!1);
                        return i.useEffect(() => {
                            let e = e => {
                                e.target && !o.current && w("dismissableLayer.focusOutside", r, {
                                    originalEvent: e
                                }, {
                                    discrete: !1
                                })
                            };
                            return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e)
                        }, [n, r]), {
                            onFocusCapture: () => o.current = !0,
                            onBlurCapture: () => o.current = !1
                        }
                    }(e => {
                        let t = e.target;
                        [...E.branches].some(e => e.contains(t)) || (null == f || f(e), null == g || g(e), e.defaultPrevented || null == b || b())
                    }, k);
                    return ! function(e, t = globalThis?.document) {
                        let n = (0, p.c)(e);
                        i.useEffect(() => {
                            let e = e => {
                                "Escape" === e.key && n(e)
                            };
                            return t.addEventListener("keydown", e, {
                                capture: !0
                            }), () => t.removeEventListener("keydown", e, {
                                capture: !0
                            })
                        }, [n, t])
                    }(e => {
                        T === E.layers.size - 1 && (null == c || c(e), !e.defaultPrevented && b && (e.preventDefault(), b()))
                    }, k), i.useEffect(() => {
                        if (C) return u && (0 === E.layersWithOutsidePointerEventsDisabled.size && (r = k.body.style.pointerEvents, k.body.style.pointerEvents = "none"), E.layersWithOutsidePointerEventsDisabled.add(C)), E.layers.add(C), y(), () => {
                            u && 1 === E.layersWithOutsidePointerEventsDisabled.size && (k.body.style.pointerEvents = r)
                        }
                    }, [C, k, u, E]), i.useEffect(() => () => {
                        C && (E.layers.delete(C), E.layersWithOutsidePointerEventsDisabled.delete(C), y())
                    }, [C, E]), i.useEffect(() => {
                        let e = () => A({});
                        return document.addEventListener(m, e), () => document.removeEventListener(m, e)
                    }, []), (0, h.jsx)(s.sG.div, {
                        ...x,
                        ref: M,
                        style: {
                            pointerEvents: j ? D ? "auto" : "none" : void 0,
                            ...e.style
                        },
                        onFocusCapture: (0, a.m)(e.onFocusCapture, N.onFocusCapture),
                        onBlurCapture: (0, a.m)(e.onBlurCapture, N.onBlurCapture),
                        onPointerDownCapture: (0, a.m)(e.onPointerDownCapture, O.onPointerDownCapture)
                    })
                });

            function y() {
                let e = new CustomEvent(m);
                document.dispatchEvent(e)
            }

            function w(e, t, n, r) {
                let {
                    discrete: o
                } = r, i = n.originalEvent.target, a = new CustomEvent(e, {
                    bubbles: !1,
                    cancelable: !0,
                    detail: n
                });
                t && i.addEventListener(e, t, {
                    once: !0
                }), o ? (0, s.hO)(i, a) : i.dispatchEvent(a)
            }
            g.displayName = "DismissableLayer", i.forwardRef((e, t) => {
                let n = i.useContext(v),
                    r = i.useRef(null),
                    o = (0, l.s)(t, r);
                return i.useEffect(() => {
                    let e = r.current;
                    if (e) return n.branches.add(e), () => {
                        n.branches.delete(e)
                    }
                }, [n.branches]), (0, h.jsx)(s.sG.div, {
                    ...e,
                    ref: o
                })
            }).displayName = "DismissableLayerBranch";
            var b = 0;

            function x() {
                let e = document.createElement("span");
                return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
            }
            var E = "focusScope.autoFocusOnMount",
                C = "focusScope.autoFocusOnUnmount",
                R = {
                    bubbles: !1,
                    cancelable: !0
                },
                k = i.forwardRef((e, t) => {
                    let {
                        loop: n = !1,
                        trapped: r = !1,
                        onMountAutoFocus: o,
                        onUnmountAutoFocus: a,
                        ...u
                    } = e, [c, d] = i.useState(null), f = (0, p.c)(o), m = (0, p.c)(a), v = i.useRef(null), g = (0, l.s)(t, e => d(e)), y = i.useRef({
                        paused: !1,
                        pause() {
                            this.paused = !0
                        },
                        resume() {
                            this.paused = !1
                        }
                    }).current;
                    i.useEffect(() => {
                        if (r) {
                            let e = function(e) {
                                    if (y.paused || !c) return;
                                    let t = e.target;
                                    c.contains(t) ? v.current = t : S(v.current, {
                                        select: !0
                                    })
                                },
                                t = function(e) {
                                    if (y.paused || !c) return;
                                    let t = e.relatedTarget;
                                    null === t || c.contains(t) || S(v.current, {
                                        select: !0
                                    })
                                };
                            document.addEventListener("focusin", e), document.addEventListener("focusout", t);
                            let n = new MutationObserver(function(e) {
                                if (document.activeElement === document.body)
                                    for (let t of e) t.removedNodes.length > 0 && S(c)
                            });
                            return c && n.observe(c, {
                                childList: !0,
                                subtree: !0
                            }), () => {
                                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), n.disconnect()
                            }
                        }
                    }, [r, c, y.paused]), i.useEffect(() => {
                        if (c) {
                            P.add(y);
                            let e = document.activeElement;
                            if (!c.contains(e)) {
                                let t = new CustomEvent(E, R);
                                c.addEventListener(E, f), c.dispatchEvent(t), t.defaultPrevented || (function(e) {
                                    let {
                                        select: t = !1
                                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.activeElement;
                                    for (let r of e)
                                        if (S(r, {
                                                select: t
                                            }), document.activeElement !== n) return
                                }(A(c).filter(e => "A" !== e.tagName), {
                                    select: !0
                                }), document.activeElement === e && S(c))
                            }
                            return () => {
                                c.removeEventListener(E, f), setTimeout(() => {
                                    let t = new CustomEvent(C, R);
                                    c.addEventListener(C, m), c.dispatchEvent(t), t.defaultPrevented || S(null != e ? e : document.body, {
                                        select: !0
                                    }), c.removeEventListener(C, m), P.remove(y)
                                }, 0)
                            }
                        }
                    }, [c, f, m, y]);
                    let w = i.useCallback(e => {
                        if (!n && !r || y.paused) return;
                        let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                            o = document.activeElement;
                        if (t && o) {
                            let t = e.currentTarget,
                                [r, i] = function(e) {
                                    let t = A(e);
                                    return [M(t, e), M(t.reverse(), e)]
                                }(t);
                            r && i ? e.shiftKey || o !== i ? e.shiftKey && o === r && (e.preventDefault(), n && S(i, {
                                select: !0
                            })) : (e.preventDefault(), n && S(r, {
                                select: !0
                            })) : o === t && e.preventDefault()
                        }
                    }, [n, r, y.paused]);
                    return (0, h.jsx)(s.sG.div, {
                        tabIndex: -1,
                        ...u,
                        ref: g,
                        onKeyDown: w
                    })
                });

            function A(e) {
                let t = [],
                    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: e => {
                            let t = "INPUT" === e.tagName && "hidden" === e.type;
                            return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }
                    });
                for (; n.nextNode();) t.push(n.currentNode);
                return t
            }

            function M(e, t) {
                for (let n of e)
                    if (! function(e, t) {
                            let {
                                upTo: n
                            } = t;
                            if ("hidden" === getComputedStyle(e).visibility) return !0;
                            for (; e && (void 0 === n || e !== n);) {
                                if ("none" === getComputedStyle(e).display) return !0;
                                e = e.parentElement
                            }
                            return !1
                        }(n, {
                            upTo: t
                        })) return n
            }

            function S(e) {
                let {
                    select: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (e && e.focus) {
                    var n;
                    let r = document.activeElement;
                    e.focus({
                        preventScroll: !0
                    }), e !== r && (n = e) instanceof HTMLInputElement && "select" in n && t && e.select()
                }
            }
            k.displayName = "FocusScope";
            var P = function() {
                let e = [];
                return {
                    add(t) {
                        let n = e[0];
                        t !== n && (null == n || n.pause()), (e = L(e, t)).unshift(t)
                    },
                    remove(t) {
                        var n;
                        null === (n = (e = L(e, t))[0]) || void 0 === n || n.resume()
                    }
                }
            }();

            function L(e, t) {
                let n = [...e],
                    r = n.indexOf(t);
                return -1 !== r && n.splice(r, 1), n
            }
            var T = n(4518);
            let j = ["top", "right", "bottom", "left"],
                D = Math.min,
                O = Math.max,
                N = Math.round,
                I = Math.floor,
                _ = e => ({
                    x: e,
                    y: e
                }),
                F = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                W = {
                    start: "end",
                    end: "start"
                };

            function B(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function H(e) {
                return e.split("-")[0]
            }

            function K(e) {
                return e.split("-")[1]
            }

            function z(e) {
                return "x" === e ? "y" : "x"
            }

            function G(e) {
                return "y" === e ? "height" : "width"
            }

            function V(e) {
                return ["top", "bottom"].includes(H(e)) ? "y" : "x"
            }

            function X(e) {
                return e.replace(/start|end/g, e => W[e])
            }

            function Y(e) {
                return e.replace(/left|right|bottom|top/g, e => F[e])
            }

            function U(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function q(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: o
                } = e;
                return {
                    width: r,
                    height: o,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + o,
                    x: t,
                    y: n
                }
            }

            function Z(e, t, n) {
                let r, {
                        reference: o,
                        floating: i
                    } = e,
                    a = V(t),
                    l = z(V(t)),
                    u = G(l),
                    c = H(t),
                    s = "y" === a,
                    d = o.x + o.width / 2 - i.width / 2,
                    f = o.y + o.height / 2 - i.height / 2,
                    p = o[u] / 2 - i[u] / 2;
                switch (c) {
                    case "top":
                        r = {
                            x: d,
                            y: o.y - i.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: d,
                            y: o.y + o.height
                        };
                        break;
                    case "right":
                        r = {
                            x: o.x + o.width,
                            y: f
                        };
                        break;
                    case "left":
                        r = {
                            x: o.x - i.width,
                            y: f
                        };
                        break;
                    default:
                        r = {
                            x: o.x,
                            y: o.y
                        }
                }
                switch (K(t)) {
                    case "start":
                        r[l] -= p * (n && s ? -1 : 1);
                        break;
                    case "end":
                        r[l] += p * (n && s ? -1 : 1)
                }
                return r
            }
            let J = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: a
                } = n, l = i.filter(Boolean), u = await (null == a.isRTL ? void 0 : a.isRTL(t)), c = await a.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: s,
                    y: d
                } = Z(c, r, u), f = r, p = {}, h = 0;
                for (let n = 0; n < l.length; n++) {
                    let {
                        name: i,
                        fn: m
                    } = l[n], {
                        x: v,
                        y: g,
                        data: y,
                        reset: w
                    } = await m({
                        x: s,
                        y: d,
                        initialPlacement: r,
                        placement: f,
                        strategy: o,
                        middlewareData: p,
                        rects: c,
                        platform: a,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    s = null != v ? v : s, d = null != g ? g : d, p = {
                        ...p,
                        [i]: {
                            ...p[i],
                            ...y
                        }
                    }, w && h <= 50 && (h++, "object" == typeof w && (w.placement && (f = w.placement), w.rects && (c = !0 === w.rects ? await a.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : w.rects), {
                        x: s,
                        y: d
                    } = Z(c, f, u)), n = -1)
                }
                return {
                    x: s,
                    y: d,
                    placement: f,
                    strategy: o,
                    middlewareData: p
                }
            };
            async function $(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: a,
                    elements: l,
                    strategy: u
                } = e, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: s = "viewport",
                    elementContext: d = "floating",
                    altBoundary: f = !1,
                    padding: p = 0
                } = B(t, e), h = U(p), m = l[f ? "floating" === d ? "reference" : "floating" : d], v = q(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
                    boundary: c,
                    rootBoundary: s,
                    strategy: u
                })), g = "floating" === d ? {
                    x: r,
                    y: o,
                    width: a.floating.width,
                    height: a.floating.height
                } : a.reference, y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)), w = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
                    x: 1,
                    y: 1
                }, b = q(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: l,
                    rect: g,
                    offsetParent: y,
                    strategy: u
                }) : g);
                return {
                    top: (v.top - b.top + h.top) / w.y,
                    bottom: (b.bottom - v.bottom + h.bottom) / w.y,
                    left: (v.left - b.left + h.left) / w.x,
                    right: (b.right - v.right + h.right) / w.x
                }
            }

            function Q(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function ee(e) {
                return j.some(t => e[t] >= 0)
            }
            async function et(e, t) {
                let {
                    placement: n,
                    platform: r,
                    elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = H(n), l = K(n), u = "y" === V(n), c = ["left", "top"].includes(a) ? -1 : 1, s = i && u ? -1 : 1, d = B(t, e), {
                    mainAxis: f,
                    crossAxis: p,
                    alignmentAxis: h
                } = "number" == typeof d ? {
                    mainAxis: d,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: d.mainAxis || 0,
                    crossAxis: d.crossAxis || 0,
                    alignmentAxis: d.alignmentAxis
                };
                return l && "number" == typeof h && (p = "end" === l ? -1 * h : h), u ? {
                    x: p * s,
                    y: f * c
                } : {
                    x: f * c,
                    y: p * s
                }
            }

            function en() {
                return "undefined" != typeof window
            }

            function er(e) {
                return ea(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function eo(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function ei(e) {
                var t;
                return null == (t = (ea(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function ea(e) {
                return !!en() && (e instanceof Node || e instanceof eo(e).Node)
            }

            function el(e) {
                return !!en() && (e instanceof Element || e instanceof eo(e).Element)
            }

            function eu(e) {
                return !!en() && (e instanceof HTMLElement || e instanceof eo(e).HTMLElement)
            }

            function ec(e) {
                return !!en() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof eo(e).ShadowRoot)
            }

            function es(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = em(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function ed(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function ef(e) {
                let t = ep(),
                    n = el(e) ? em(e) : e;
                return ["transform", "translate", "scale", "rotate", "perspective"].some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function ep() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function eh(e) {
                return ["html", "body", "#document"].includes(er(e))
            }

            function em(e) {
                return eo(e).getComputedStyle(e)
            }

            function ev(e) {
                return el(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function eg(e) {
                if ("html" === er(e)) return e;
                let t = e.assignedSlot || e.parentNode || ec(e) && e.host || ei(e);
                return ec(t) ? t.host : t
            }

            function ey(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let o = function e(t) {
                        let n = eg(t);
                        return eh(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : eu(n) && es(n) ? n : e(n)
                    }(e),
                    i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    a = eo(o);
                if (i) {
                    let e = ew(a);
                    return t.concat(a, a.visualViewport || [], es(o) ? o : [], e && n ? ey(e) : [])
                }
                return t.concat(o, ey(o, [], n))
            }

            function ew(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function eb(e) {
                let t = em(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    o = eu(e),
                    i = o ? e.offsetWidth : n,
                    a = o ? e.offsetHeight : r,
                    l = N(n) !== i || N(r) !== a;
                return l && (n = i, r = a), {
                    width: n,
                    height: r,
                    $: l
                }
            }

            function ex(e) {
                return el(e) ? e : e.contextElement
            }

            function eE(e) {
                let t = ex(e);
                if (!eu(t)) return _(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        $: i
                    } = eb(t),
                    a = (i ? N(n.width) : n.width) / r,
                    l = (i ? N(n.height) : n.height) / o;
                return a && Number.isFinite(a) || (a = 1), l && Number.isFinite(l) || (l = 1), {
                    x: a,
                    y: l
                }
            }
            let eC = _(0);

            function eR(e) {
                let t = eo(e);
                return ep() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : eC
            }

            function ek(e, t, n, r) {
                var o;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let i = e.getBoundingClientRect(),
                    a = ex(e),
                    l = _(1);
                t && (r ? el(r) && (l = eE(r)) : l = eE(e));
                let u = (void 0 === (o = n) && (o = !1), r && (!o || r === eo(a)) && o) ? eR(a) : _(0),
                    c = (i.left + u.x) / l.x,
                    s = (i.top + u.y) / l.y,
                    d = i.width / l.x,
                    f = i.height / l.y;
                if (a) {
                    let e = eo(a),
                        t = r && el(r) ? eo(r) : r,
                        n = e,
                        o = ew(n);
                    for (; o && r && t !== n;) {
                        let e = eE(o),
                            t = o.getBoundingClientRect(),
                            r = em(o),
                            i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
                        c *= e.x, s *= e.y, d *= e.x, f *= e.y, c += i, s += a, o = ew(n = eo(o))
                    }
                }
                return q({
                    width: d,
                    height: f,
                    x: c,
                    y: s
                })
            }

            function eA(e, t) {
                let n = ev(e).scrollLeft;
                return t ? t.left + n : ek(ei(e)).left + n
            }

            function eM(e, t, n) {
                void 0 === n && (n = !1);
                let r = e.getBoundingClientRect();
                return {
                    x: r.left + t.scrollLeft - (n ? 0 : eA(e, r)),
                    y: r.top + t.scrollTop
                }
            }

            function eS(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = eo(e),
                        r = ei(e),
                        o = n.visualViewport,
                        i = r.clientWidth,
                        a = r.clientHeight,
                        l = 0,
                        u = 0;
                    if (o) {
                        i = o.width, a = o.height;
                        let e = ep();
                        (!e || e && "fixed" === t) && (l = o.offsetLeft, u = o.offsetTop)
                    }
                    return {
                        width: i,
                        height: a,
                        x: l,
                        y: u
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = ei(e),
                        n = ev(e),
                        r = e.ownerDocument.body,
                        o = O(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = O(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        a = -n.scrollLeft + eA(e),
                        l = -n.scrollTop;
                    return "rtl" === em(r).direction && (a += O(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: a,
                        y: l
                    }
                }(ei(e));
                else if (el(t)) r = function(e, t) {
                    let n = ek(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = eu(e) ? eE(e) : _(1),
                        a = e.clientWidth * i.x,
                        l = e.clientHeight * i.y;
                    return {
                        width: a,
                        height: l,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = eR(e);
                    r = {
                        x: t.x - n.x,
                        y: t.y - n.y,
                        width: t.width,
                        height: t.height
                    }
                }
                return q(r)
            }

            function eP(e) {
                return "static" === em(e).position
            }

            function eL(e, t) {
                if (!eu(e) || "fixed" === em(e).position) return null;
                if (t) return t(e);
                let n = e.offsetParent;
                return ei(e) === n && (n = n.ownerDocument.body), n
            }

            function eT(e, t) {
                let n = eo(e);
                if (ed(e)) return n;
                if (!eu(e)) {
                    let t = eg(e);
                    for (; t && !eh(t);) {
                        if (el(t) && !eP(t)) return t;
                        t = eg(t)
                    }
                    return n
                }
                let r = eL(e, t);
                for (; r && ["table", "td", "th"].includes(er(r)) && eP(r);) r = eL(r, t);
                return r && eh(r) && eP(r) && !ef(r) ? n : r || function(e) {
                    let t = eg(e);
                    for (; eu(t) && !eh(t);) {
                        if (ef(t)) return t;
                        if (ed(t)) break;
                        t = eg(t)
                    }
                    return null
                }(e) || n
            }
            let ej = async function(e) {
                let t = this.getOffsetParent || eT,
                    n = this.getDimensions,
                    r = await n(e.floating);
                return {
                    reference: function(e, t, n) {
                        let r = eu(t),
                            o = ei(t),
                            i = "fixed" === n,
                            a = ek(e, !0, i, t),
                            l = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            u = _(0);
                        if (r || !r && !i) {
                            if (("body" !== er(t) || es(o)) && (l = ev(t)), r) {
                                let e = ek(t, !0, i, t);
                                u.x = e.x + t.clientLeft, u.y = e.y + t.clientTop
                            } else o && (u.x = eA(o))
                        }
                        let c = !o || r || i ? _(0) : eM(o, l);
                        return {
                            x: a.left + l.scrollLeft - u.x - c.x,
                            y: a.top + l.scrollTop - u.y - c.y,
                            width: a.width,
                            height: a.height
                        }
                    }(e.reference, await t(e.floating), e.strategy),
                    floating: {
                        x: 0,
                        y: 0,
                        width: r.width,
                        height: r.height
                    }
                }
            }, eD = {
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        elements: t,
                        rect: n,
                        offsetParent: r,
                        strategy: o
                    } = e, i = "fixed" === o, a = ei(r), l = !!t && ed(t.floating);
                    if (r === a || l && i) return n;
                    let u = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        c = _(1),
                        s = _(0),
                        d = eu(r);
                    if ((d || !d && !i) && (("body" !== er(r) || es(a)) && (u = ev(r)), eu(r))) {
                        let e = ek(r);
                        c = eE(r), s.x = e.x + r.clientLeft, s.y = e.y + r.clientTop
                    }
                    let f = !a || d || i ? _(0) : eM(a, u, !0);
                    return {
                        width: n.width * c.x,
                        height: n.height * c.y,
                        x: n.x * c.x - u.scrollLeft * c.x + s.x + f.x,
                        y: n.y * c.y - u.scrollTop * c.y + s.y + f.y
                    }
                },
                getDocumentElement: ei,
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: n,
                        rootBoundary: r,
                        strategy: o
                    } = e, i = [..."clippingAncestors" === n ? ed(t) ? [] : function(e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = ey(e, [], !1).filter(e => el(e) && "body" !== er(e)),
                            o = null,
                            i = "fixed" === em(e).position,
                            a = i ? eg(e) : e;
                        for (; el(a) && !eh(a);) {
                            let t = em(a),
                                n = ef(a);
                            n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && !!o && ["absolute", "fixed"].includes(o.position) || es(a) && !n && function e(t, n) {
                                let r = eg(t);
                                return !(r === n || !el(r) || eh(r)) && ("fixed" === em(r).position || e(r, n))
                            }(e, a)) ? r = r.filter(e => e !== a) : o = t, a = eg(a)
                        }
                        return t.set(e, r), r
                    }(t, this._c) : [].concat(n), r], a = i[0], l = i.reduce((e, n) => {
                        let r = eS(t, n, o);
                        return e.top = O(r.top, e.top), e.right = D(r.right, e.right), e.bottom = D(r.bottom, e.bottom), e.left = O(r.left, e.left), e
                    }, eS(t, a, o));
                    return {
                        width: l.right - l.left,
                        height: l.bottom - l.top,
                        x: l.left,
                        y: l.top
                    }
                },
                getOffsetParent: eT,
                getElementRects: ej,
                getClientRects: function(e) {
                    return Array.from(e.getClientRects())
                },
                getDimensions: function(e) {
                    let {
                        width: t,
                        height: n
                    } = eb(e);
                    return {
                        width: t,
                        height: n
                    }
                },
                getScale: eE,
                isElement: el,
                isRTL: function(e) {
                    return "rtl" === em(e).direction
                }
            };

            function eO(e, t) {
                return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
            }
            let eN = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: n,
                            y: r,
                            placement: o,
                            rects: i,
                            platform: a,
                            elements: l,
                            middlewareData: u
                        } = t, {
                            element: c,
                            padding: s = 0
                        } = B(e, t) || {};
                        if (null == c) return {};
                        let d = U(s),
                            f = {
                                x: n,
                                y: r
                            },
                            p = z(V(o)),
                            h = G(p),
                            m = await a.getDimensions(c),
                            v = "y" === p,
                            g = v ? "clientHeight" : "clientWidth",
                            y = i.reference[h] + i.reference[p] - f[p] - i.floating[h],
                            w = f[p] - i.reference[p],
                            b = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(c)),
                            x = b ? b[g] : 0;
                        x && await (null == a.isElement ? void 0 : a.isElement(b)) || (x = l.floating[g] || i.floating[h]);
                        let E = x / 2 - m[h] / 2 - 1,
                            C = D(d[v ? "top" : "left"], E),
                            R = D(d[v ? "bottom" : "right"], E),
                            k = x - m[h] - R,
                            A = x / 2 - m[h] / 2 + (y / 2 - w / 2),
                            M = O(C, D(A, k)),
                            S = !u.arrow && null != K(o) && A !== M && i.reference[h] / 2 - (A < C ? C : R) - m[h] / 2 < 0,
                            P = S ? A < C ? A - C : A - k : 0;
                        return {
                            [p]: f[p] + P,
                            data: {
                                [p]: M,
                                centerOffset: A - M - P,
                                ...S && {
                                    alignmentOffset: P
                                }
                            },
                            reset: S
                        }
                    }
                }),
                eI = (e, t, n) => {
                    let r = new Map,
                        o = {
                            platform: eD,
                            ...n
                        },
                        i = {
                            ...o.platform,
                            _c: r
                        };
                    return J(e, t, {
                        ...o,
                        platform: i
                    })
                };
            var e_ = n(4349),
                eF = "undefined" != typeof document ? i.useLayoutEffect : i.useEffect;

            function eW(e, t) {
                let n, r, o;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!eW(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, o[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = o[r];
                        if (("_owner" !== n || !e.$$typeof) && !eW(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function eB(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function eH(e, t) {
                let n = eB(e);
                return Math.round(t * n) / n
            }

            function eK(e) {
                let t = i.useRef(e);
                return eF(() => {
                    t.current = e
                }), t
            }
            let ez = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: n,
                            padding: r
                        } = "function" == typeof e ? e(t) : e;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? eN({
                            element: n.current,
                            padding: r
                        }).fn(t) : {} : n ? eN({
                            element: n,
                            padding: r
                        }).fn(t) : {}
                    }
                }),
                eG = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = 0), {
                            name: "offset",
                            options: e,
                            async fn(t) {
                                var n, r;
                                let {
                                    x: o,
                                    y: i,
                                    placement: a,
                                    middlewareData: l
                                } = t, u = await et(t, e);
                                return a === (null == (n = l.offset) ? void 0 : n.placement) && null != (r = l.arrow) && r.alignmentOffset ? {} : {
                                    x: o + u.x,
                                    y: i + u.y,
                                    data: {
                                        ...u,
                                        placement: a
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eV = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "shift",
                            options: e,
                            async fn(t) {
                                let {
                                    x: n,
                                    y: r,
                                    placement: o
                                } = t, {
                                    mainAxis: i = !0,
                                    crossAxis: a = !1,
                                    limiter: l = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...u
                                } = B(e, t), c = {
                                    x: n,
                                    y: r
                                }, s = await $(t, u), d = V(H(o)), f = z(d), p = c[f], h = c[d];
                                if (i) {
                                    let e = "y" === f ? "top" : "left",
                                        t = "y" === f ? "bottom" : "right",
                                        n = p + s[e],
                                        r = p - s[t];
                                    p = O(n, D(p, r))
                                }
                                if (a) {
                                    let e = "y" === d ? "top" : "left",
                                        t = "y" === d ? "bottom" : "right",
                                        n = h + s[e],
                                        r = h - s[t];
                                    h = O(n, D(h, r))
                                }
                                let m = l.fn({
                                    ...t,
                                    [f]: p,
                                    [d]: h
                                });
                                return {
                                    ...m,
                                    data: {
                                        x: m.x - n,
                                        y: m.y - r,
                                        enabled: {
                                            [f]: i,
                                            [d]: a
                                        }
                                    }
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eX = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = {}), {
                            options: e,
                            fn(t) {
                                let {
                                    x: n,
                                    y: r,
                                    placement: o,
                                    rects: i,
                                    middlewareData: a
                                } = t, {
                                    offset: l = 0,
                                    mainAxis: u = !0,
                                    crossAxis: c = !0
                                } = B(e, t), s = {
                                    x: n,
                                    y: r
                                }, d = V(o), f = z(d), p = s[f], h = s[d], m = B(l, t), v = "number" == typeof m ? {
                                    mainAxis: m,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...m
                                };
                                if (u) {
                                    let e = "y" === f ? "height" : "width",
                                        t = i.reference[f] - i.floating[e] + v.mainAxis,
                                        n = i.reference[f] + i.reference[e] - v.mainAxis;
                                    p < t ? p = t : p > n && (p = n)
                                }
                                if (c) {
                                    var g, y;
                                    let e = "y" === f ? "width" : "height",
                                        t = ["top", "left"].includes(H(o)),
                                        n = i.reference[d] - i.floating[e] + (t && (null == (g = a.offset) ? void 0 : g[d]) || 0) + (t ? 0 : v.crossAxis),
                                        r = i.reference[d] + i.reference[e] + (t ? 0 : (null == (y = a.offset) ? void 0 : y[d]) || 0) - (t ? v.crossAxis : 0);
                                    h < n ? h = n : h > r && (h = r)
                                }
                                return {
                                    [f]: p,
                                    [d]: h
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eY = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "flip",
                            options: e,
                            async fn(t) {
                                var n, r, o, i, a;
                                let {
                                    placement: l,
                                    middlewareData: u,
                                    rects: c,
                                    initialPlacement: s,
                                    platform: d,
                                    elements: f
                                } = t, {
                                    mainAxis: p = !0,
                                    crossAxis: h = !0,
                                    fallbackPlacements: m,
                                    fallbackStrategy: v = "bestFit",
                                    fallbackAxisSideDirection: g = "none",
                                    flipAlignment: y = !0,
                                    ...w
                                } = B(e, t);
                                if (null != (n = u.arrow) && n.alignmentOffset) return {};
                                let b = H(l),
                                    x = V(s),
                                    E = H(s) === s,
                                    C = await (null == d.isRTL ? void 0 : d.isRTL(f.floating)),
                                    R = m || (E || !y ? [Y(s)] : function(e) {
                                        let t = Y(e);
                                        return [X(e), t, X(t)]
                                    }(s)),
                                    k = "none" !== g;
                                !m && k && R.push(... function(e, t, n, r) {
                                    let o = K(e),
                                        i = function(e, t, n) {
                                            let r = ["left", "right"],
                                                o = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (n) return t ? o : r;
                                                    return t ? r : o;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(H(e), "start" === n, r);
                                    return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(X)))), i
                                }(s, y, g, C));
                                let A = [s, ...R],
                                    M = await $(t, w),
                                    S = [],
                                    P = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                                if (p && S.push(M[b]), h) {
                                    let e = function(e, t, n) {
                                        void 0 === n && (n = !1);
                                        let r = K(e),
                                            o = z(V(e)),
                                            i = G(o),
                                            a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                        return t.reference[i] > t.floating[i] && (a = Y(a)), [a, Y(a)]
                                    }(l, c, C);
                                    S.push(M[e[0]], M[e[1]])
                                }
                                if (P = [...P, {
                                        placement: l,
                                        overflows: S
                                    }], !S.every(e => e <= 0)) {
                                    let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                                        t = A[e];
                                    if (t) return {
                                        data: {
                                            index: e,
                                            overflows: P
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let n = null == (i = P.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : i.placement;
                                    if (!n) switch (v) {
                                        case "bestFit": {
                                            let e = null == (a = P.filter(e => {
                                                if (k) {
                                                    let t = V(e.placement);
                                                    return t === x || "y" === t
                                                }
                                                return !0
                                            }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : a[0];
                                            e && (n = e);
                                            break
                                        }
                                        case "initialPlacement":
                                            n = s
                                    }
                                    if (l !== n) return {
                                        reset: {
                                            placement: n
                                        }
                                    }
                                }
                                return {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eU = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "size",
                            options: e,
                            async fn(t) {
                                var n, r;
                                let o, i;
                                let {
                                    placement: a,
                                    rects: l,
                                    platform: u,
                                    elements: c
                                } = t, {
                                    apply: s = () => {},
                                    ...d
                                } = B(e, t), f = await $(t, d), p = H(a), h = K(a), m = "y" === V(a), {
                                    width: v,
                                    height: g
                                } = l.floating;
                                "top" === p || "bottom" === p ? (o = p, i = h === (await (null == u.isRTL ? void 0 : u.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (i = p, o = "end" === h ? "top" : "bottom");
                                let y = g - f.top - f.bottom,
                                    w = v - f.left - f.right,
                                    b = D(g - f[o], y),
                                    x = D(v - f[i], w),
                                    E = !t.middlewareData.shift,
                                    C = b,
                                    R = x;
                                if (null != (n = t.middlewareData.shift) && n.enabled.x && (R = w), null != (r = t.middlewareData.shift) && r.enabled.y && (C = y), E && !h) {
                                    let e = O(f.left, 0),
                                        t = O(f.right, 0),
                                        n = O(f.top, 0),
                                        r = O(f.bottom, 0);
                                    m ? R = v - 2 * (0 !== e || 0 !== t ? e + t : O(f.left, f.right)) : C = g - 2 * (0 !== n || 0 !== r ? n + r : O(f.top, f.bottom))
                                }
                                await s({
                                    ...t,
                                    availableWidth: R,
                                    availableHeight: C
                                });
                                let k = await u.getDimensions(c.floating);
                                return v !== k.width || g !== k.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eq = (e, t) => ({
                    ... function(e) {
                        return void 0 === e && (e = {}), {
                            name: "hide",
                            options: e,
                            async fn(t) {
                                let {
                                    rects: n
                                } = t, {
                                    strategy: r = "referenceHidden",
                                    ...o
                                } = B(e, t);
                                switch (r) {
                                    case "referenceHidden": {
                                        let e = Q(await $(t, {
                                            ...o,
                                            elementContext: "reference"
                                        }), n.reference);
                                        return {
                                            data: {
                                                referenceHiddenOffsets: e,
                                                referenceHidden: ee(e)
                                            }
                                        }
                                    }
                                    case "escaped": {
                                        let e = Q(await $(t, {
                                            ...o,
                                            altBoundary: !0
                                        }), n.floating);
                                        return {
                                            data: {
                                                escapedOffsets: e,
                                                escaped: ee(e)
                                            }
                                        }
                                    }
                                    default:
                                        return {}
                                }
                            }
                        }
                    }(e),
                    options: [e, t]
                }),
                eZ = (e, t) => ({
                    ...ez(e),
                    options: [e, t]
                });
            var eJ = i.forwardRef((e, t) => {
                let {
                    children: n,
                    width: r = 10,
                    height: o = 5,
                    ...i
                } = e;
                return (0, h.jsx)(s.sG.svg, {
                    ...i,
                    ref: t,
                    width: r,
                    height: o,
                    viewBox: "0 0 30 10",
                    preserveAspectRatio: "none",
                    children: e.asChild ? n : (0, h.jsx)("polygon", {
                        points: "0,0 30,0 15,10"
                    })
                })
            });
            eJ.displayName = "Arrow";
            var e$ = n(936),
                eQ = "Popper",
                [e0, e1] = (0, u.A)(eQ),
                [e2, e6] = e0(eQ),
                e4 = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [r, o] = i.useState(null);
                    return (0, h.jsx)(e2, {
                        scope: t,
                        anchor: r,
                        onAnchorChange: o,
                        children: n
                    })
                };
            e4.displayName = eQ;
            var e5 = "PopperAnchor",
                e3 = i.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: r,
                        ...o
                    } = e, a = e6(e5, n), u = i.useRef(null), c = (0, l.s)(t, u);
                    return i.useEffect(() => {
                        a.onAnchorChange((null == r ? void 0 : r.current) || u.current)
                    }), r ? null : (0, h.jsx)(s.sG.div, {
                        ...o,
                        ref: c
                    })
                });
            e3.displayName = e5;
            var e8 = "PopperContent",
                [e9, e7] = e0(e8),
                te = i.forwardRef((e, t) => {
                    var n, r, o, a, u, c, d, f;
                    let {
                        __scopePopper: m,
                        side: v = "bottom",
                        sideOffset: g = 0,
                        align: y = "center",
                        alignOffset: w = 0,
                        arrowPadding: b = 0,
                        avoidCollisions: x = !0,
                        collisionBoundary: E = [],
                        collisionPadding: C = 0,
                        sticky: R = "partial",
                        hideWhenDetached: k = !1,
                        updatePositionStrategy: A = "optimized",
                        onPlaced: M,
                        ...S
                    } = e, P = e6(e8, m), [L, T] = i.useState(null), j = (0, l.s)(t, e => T(e)), [N, _] = i.useState(null), F = function(e) {
                        let [t, n] = i.useState(void 0);
                        return (0, e$.N)(() => {
                            if (e) {
                                n({
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                });
                                let t = new ResizeObserver(t => {
                                    let r, o;
                                    if (!Array.isArray(t) || !t.length) return;
                                    let i = t[0];
                                    if ("borderBoxSize" in i) {
                                        let e = i.borderBoxSize,
                                            t = Array.isArray(e) ? e[0] : e;
                                        r = t.inlineSize, o = t.blockSize
                                    } else r = e.offsetWidth, o = e.offsetHeight;
                                    n({
                                        width: r,
                                        height: o
                                    })
                                });
                                return t.observe(e, {
                                    box: "border-box"
                                }), () => t.unobserve(e)
                            }
                            n(void 0)
                        }, [e]), t
                    }(N), W = null !== (d = null == F ? void 0 : F.width) && void 0 !== d ? d : 0, B = null !== (f = null == F ? void 0 : F.height) && void 0 !== f ? f : 0, H = "number" == typeof C ? C : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...C
                    }, K = Array.isArray(E) ? E : [E], z = K.length > 0, G = {
                        padding: H,
                        boundary: K.filter(to),
                        altBoundary: z
                    }, {
                        refs: V,
                        floatingStyles: X,
                        placement: Y,
                        isPositioned: U,
                        middlewareData: q
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: r = [],
                            platform: o,
                            elements: {
                                reference: a,
                                floating: l
                            } = {},
                            transform: u = !0,
                            whileElementsMounted: c,
                            open: s
                        } = e, [d, f] = i.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, h] = i.useState(r);
                        eW(p, r) || h(r);
                        let [m, v] = i.useState(null), [g, y] = i.useState(null), w = i.useCallback(e => {
                            e !== C.current && (C.current = e, v(e))
                        }, []), b = i.useCallback(e => {
                            e !== R.current && (R.current = e, y(e))
                        }, []), x = a || m, E = l || g, C = i.useRef(null), R = i.useRef(null), k = i.useRef(d), A = null != c, M = eK(c), S = eK(o), P = eK(s), L = i.useCallback(() => {
                            if (!C.current || !R.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: p
                            };
                            S.current && (e.platform = S.current), eI(C.current, R.current, e).then(e => {
                                let t = {
                                    ...e,
                                    isPositioned: !1 !== P.current
                                };
                                T.current && !eW(k.current, t) && (k.current = t, e_.flushSync(() => {
                                    f(t)
                                }))
                            })
                        }, [p, t, n, S, P]);
                        eF(() => {
                            !1 === s && k.current.isPositioned && (k.current.isPositioned = !1, f(e => ({
                                ...e,
                                isPositioned: !1
                            })))
                        }, [s]);
                        let T = i.useRef(!1);
                        eF(() => (T.current = !0, () => {
                            T.current = !1
                        }), []), eF(() => {
                            if (x && (C.current = x), E && (R.current = E), x && E) {
                                if (M.current) return M.current(x, E, L);
                                L()
                            }
                        }, [x, E, L, M, A]);
                        let j = i.useMemo(() => ({
                                reference: C,
                                floating: R,
                                setReference: w,
                                setFloating: b
                            }), [w, b]),
                            D = i.useMemo(() => ({
                                reference: x,
                                floating: E
                            }), [x, E]),
                            O = i.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!D.floating) return e;
                                let t = eH(D.floating, d.x),
                                    r = eH(D.floating, d.y);
                                return u ? {
                                    ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...eB(D.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, u, D.floating, d.x, d.y]);
                        return i.useMemo(() => ({
                            ...d,
                            update: L,
                            refs: j,
                            elements: D,
                            floatingStyles: O
                        }), [d, L, j, D, O])
                    }({
                        strategy: "fixed",
                        placement: v + ("center" !== y ? "-" + y : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return function(e, t, n, r) {
                                let o;
                                void 0 === r && (r = {});
                                let {
                                    ancestorScroll: i = !0,
                                    ancestorResize: a = !0,
                                    elementResize: l = "function" == typeof ResizeObserver,
                                    layoutShift: u = "function" == typeof IntersectionObserver,
                                    animationFrame: c = !1
                                } = r, s = ex(e), d = i || a ? [...s ? ey(s) : [], ...ey(t)] : [];
                                d.forEach(e => {
                                    i && e.addEventListener("scroll", n, {
                                        passive: !0
                                    }), a && e.addEventListener("resize", n)
                                });
                                let f = s && u ? function(e, t) {
                                        let n, r = null,
                                            o = ei(e);

                                        function i() {
                                            var e;
                                            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                                        }
                                        return ! function a(l, u) {
                                            void 0 === l && (l = !1), void 0 === u && (u = 1), i();
                                            let c = e.getBoundingClientRect(),
                                                {
                                                    left: s,
                                                    top: d,
                                                    width: f,
                                                    height: p
                                                } = c;
                                            if (l || t(), !f || !p) return;
                                            let h = I(d),
                                                m = I(o.clientWidth - (s + f)),
                                                v = {
                                                    rootMargin: -h + "px " + -m + "px " + -I(o.clientHeight - (d + p)) + "px " + -I(s) + "px",
                                                    threshold: O(0, D(1, u)) || 1
                                                },
                                                g = !0;

                                            function y(t) {
                                                let r = t[0].intersectionRatio;
                                                if (r !== u) {
                                                    if (!g) return a();
                                                    r ? a(!1, r) : n = setTimeout(() => {
                                                        a(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                1 !== r || eO(c, e.getBoundingClientRect()) || a(), g = !1
                                            }
                                            try {
                                                r = new IntersectionObserver(y, {
                                                    ...v,
                                                    root: o.ownerDocument
                                                })
                                            } catch (e) {
                                                r = new IntersectionObserver(y, v)
                                            }
                                            r.observe(e)
                                        }(!0), i
                                    }(s, n) : null,
                                    p = -1,
                                    h = null;
                                l && (h = new ResizeObserver(e => {
                                    let [r] = e;
                                    r && r.target === s && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = h) || e.observe(t)
                                    })), n()
                                }), s && !c && h.observe(s), h.observe(t));
                                let m = c ? ek(e) : null;
                                return c && function t() {
                                    let r = ek(e);
                                    m && !eO(m, r) && n(), m = r, o = requestAnimationFrame(t)
                                }(), n(), () => {
                                    var e;
                                    d.forEach(e => {
                                        i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n)
                                    }), null == f || f(), null == (e = h) || e.disconnect(), h = null, c && cancelAnimationFrame(o)
                                }
                            }(...t, {
                                animationFrame: "always" === A
                            })
                        },
                        elements: {
                            reference: P.anchor
                        },
                        middleware: [eG({
                            mainAxis: g + B,
                            alignmentAxis: w
                        }), x && eV({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === R ? eX() : void 0,
                            ...G
                        }), x && eY({
                            ...G
                        }), eU({
                            ...G,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: o
                                } = e, {
                                    width: i,
                                    height: a
                                } = n.reference, l = t.floating.style;
                                l.setProperty("--radix-popper-available-width", "".concat(r, "px")), l.setProperty("--radix-popper-available-height", "".concat(o, "px")), l.setProperty("--radix-popper-anchor-width", "".concat(i, "px")), l.setProperty("--radix-popper-anchor-height", "".concat(a, "px"))
                            }
                        }), N && eZ({
                            element: N,
                            padding: b
                        }), ti({
                            arrowWidth: W,
                            arrowHeight: B
                        }), k && eq({
                            strategy: "referenceHidden",
                            ...G
                        })]
                    }), [Z, J] = ta(Y), $ = (0, p.c)(M);
                    (0, e$.N)(() => {
                        U && (null == $ || $())
                    }, [U, $]);
                    let Q = null === (n = q.arrow) || void 0 === n ? void 0 : n.x,
                        ee = null === (r = q.arrow) || void 0 === r ? void 0 : r.y,
                        et = (null === (o = q.arrow) || void 0 === o ? void 0 : o.centerOffset) !== 0,
                        [en, er] = i.useState();
                    return (0, e$.N)(() => {
                        L && er(window.getComputedStyle(L).zIndex)
                    }, [L]), (0, h.jsx)("div", {
                        ref: V.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: {
                            ...X,
                            transform: U ? X.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: en,
                            "--radix-popper-transform-origin": [null === (a = q.transformOrigin) || void 0 === a ? void 0 : a.x, null === (u = q.transformOrigin) || void 0 === u ? void 0 : u.y].join(" "),
                            ...(null === (c = q.hide) || void 0 === c ? void 0 : c.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, h.jsx)(e9, {
                            scope: m,
                            placedSide: Z,
                            onArrowChange: _,
                            arrowX: Q,
                            arrowY: ee,
                            shouldHideArrow: et,
                            children: (0, h.jsx)(s.sG.div, {
                                "data-side": Z,
                                "data-align": J,
                                ...S,
                                ref: j,
                                style: {
                                    ...S.style,
                                    animation: U ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            te.displayName = e8;
            var tt = "PopperArrow",
                tn = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                tr = i.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, o = e7(tt, n), i = tn[o.placedSide];
                    return (0, h.jsx)("span", {
                        ref: o.onArrowChange,
                        style: {
                            position: "absolute",
                            left: o.arrowX,
                            top: o.arrowY,
                            [i]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            } [o.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            } [o.placedSide],
                            visibility: o.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, h.jsx)(eJ, {
                            ...r,
                            ref: t,
                            style: {
                                ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function to(e) {
                return null !== e
            }
            tr.displayName = tt;
            var ti = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, o, i, a;
                    let {
                        placement: l,
                        rects: u,
                        middlewareData: c
                    } = t, s = (null === (n = c.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, d = s ? 0 : e.arrowWidth, f = s ? 0 : e.arrowHeight, [p, h] = ta(l), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    } [h], v = (null !== (i = null === (r = c.arrow) || void 0 === r ? void 0 : r.x) && void 0 !== i ? i : 0) + d / 2, g = (null !== (a = null === (o = c.arrow) || void 0 === o ? void 0 : o.y) && void 0 !== a ? a : 0) + f / 2, y = "", w = "";
                    return "bottom" === p ? (y = s ? m : "".concat(v, "px"), w = "".concat(-f, "px")) : "top" === p ? (y = s ? m : "".concat(v, "px"), w = "".concat(u.floating.height + f, "px")) : "right" === p ? (y = "".concat(-f, "px"), w = s ? m : "".concat(g, "px")) : "left" === p && (y = "".concat(u.floating.width + f, "px"), w = s ? m : "".concat(g, "px")), {
                        data: {
                            x: y,
                            y: w
                        }
                    }
                }
            });

            function ta(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var tl = i.forwardRef((e, t) => {
                var n, r;
                let {
                    container: o,
                    ...a
                } = e, [l, u] = i.useState(!1);
                (0, e$.N)(() => u(!0), []);
                let c = o || l && (null === (r = globalThis) || void 0 === r ? void 0 : null === (n = r.document) || void 0 === n ? void 0 : n.body);
                return c ? e_.createPortal((0, h.jsx)(s.sG.div, {
                    ...a,
                    ref: t
                }), c) : null
            });
            tl.displayName = "Portal";
            var tu = n(1263),
                tc = n(3034),
                ts = n(4793),
                td = function(e) {
                    return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
                },
                tf = new WeakMap,
                tp = new WeakMap,
                th = {},
                tm = 0,
                tv = function(e) {
                    return e && (e.host || tv(e.parentNode))
                },
                tg = function(e, t, n, r) {
                    var o = (Array.isArray(e) ? e : [e]).map(function(e) {
                        if (t.contains(e)) return e;
                        var n = tv(e);
                        return n && t.contains(n) ? n : (console.error("aria-hidden", e, "in not contained inside", t, ". Doing nothing"), null)
                    }).filter(function(e) {
                        return !!e
                    });
                    th[n] || (th[n] = new WeakMap);
                    var i = th[n],
                        a = [],
                        l = new Set,
                        u = new Set(o),
                        c = function(e) {
                            !(!e || l.has(e)) && (l.add(e), c(e.parentNode))
                        };
                    o.forEach(c);
                    var s = function(e) {
                        !(!e || u.has(e)) && Array.prototype.forEach.call(e.children, function(e) {
                            if (l.has(e)) s(e);
                            else try {
                                var t = e.getAttribute(r),
                                    o = null !== t && "false" !== t,
                                    u = (tf.get(e) || 0) + 1,
                                    c = (i.get(e) || 0) + 1;
                                tf.set(e, u), i.set(e, c), a.push(e), 1 === u && o && tp.set(e, !0), 1 === c && e.setAttribute(n, "true"), o || e.setAttribute(r, "true")
                            } catch (t) {
                                console.error("aria-hidden: cannot operate on ", e, t)
                            }
                        })
                    };
                    return s(t), l.clear(), tm++,
                        function() {
                            a.forEach(function(e) {
                                var t = tf.get(e) - 1,
                                    o = i.get(e) - 1;
                                tf.set(e, t), i.set(e, o), t || (tp.has(e) || e.removeAttribute(r), tp.delete(e)), o || e.removeAttribute(n)
                            }), --tm || (tf = new WeakMap, tf = new WeakMap, tp = new WeakMap, th = {})
                        }
                },
                ty = function(e, t, n) {
                    void 0 === n && (n = "data-aria-hidden");
                    var r = Array.from(Array.isArray(e) ? e : [e]),
                        o = t || td(e);
                    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), tg(r, o, n, "aria-hidden")) : function() {
                        return null
                    }
                },
                tw = function() {
                    return (tw = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                };

            function tb(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                return n
            }
            Object.create;
            Object.create;
            var tx = ("function" == typeof SuppressedError && SuppressedError, "right-scroll-bar-position"),
                tE = "width-before-scroll-bar";

            function tC(e, t) {
                return "function" == typeof e ? e(t) : e && (e.current = t), e
            }
            var tR = "undefined" != typeof window ? i.useLayoutEffect : i.useEffect,
                tk = new WeakMap;

            function tA(e) {
                return e
            }
            var tM = function(e) {
                    void 0 === e && (e = {});
                    var t, n, r, o, i = (t = null, void 0 === n && (n = tA), r = [], o = !1, {
                        read: function() {
                            if (o) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                            return r.length ? r[r.length - 1] : null
                        },
                        useMedium: function(e) {
                            var t = n(e, o);
                            return r.push(t),
                                function() {
                                    r = r.filter(function(e) {
                                        return e !== t
                                    })
                                }
                        },
                        assignSyncMedium: function(e) {
                            for (o = !0; r.length;) {
                                var t = r;
                                r = [], t.forEach(e)
                            }
                            r = {
                                push: function(t) {
                                    return e(t)
                                },
                                filter: function() {
                                    return r
                                }
                            }
                        },
                        assignMedium: function(e) {
                            o = !0;
                            var t = [];
                            if (r.length) {
                                var n = r;
                                r = [], n.forEach(e), t = r
                            }
                            var i = function() {
                                    var n = t;
                                    t = [], n.forEach(e)
                                },
                                a = function() {
                                    return Promise.resolve().then(i)
                                };
                            a(), r = {
                                push: function(e) {
                                    t.push(e), a()
                                },
                                filter: function(e) {
                                    return t = t.filter(e), r
                                }
                            }
                        }
                    });
                    return i.options = tw({
                        async: !0,
                        ssr: !1
                    }, e), i
                }(),
                tS = function() {},
                tP = i.forwardRef(function(e, t) {
                    var n, r, o, a, l = i.useRef(null),
                        u = i.useState({
                            onScrollCapture: tS,
                            onWheelCapture: tS,
                            onTouchMoveCapture: tS
                        }),
                        c = u[0],
                        s = u[1],
                        d = e.forwardProps,
                        f = e.children,
                        p = e.className,
                        h = e.removeScrollBar,
                        m = e.enabled,
                        v = e.shards,
                        g = e.sideCar,
                        y = e.noIsolation,
                        w = e.inert,
                        b = e.allowPinchZoom,
                        x = e.as,
                        E = e.gapMode,
                        C = tb(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
                        R = (n = [l, t], r = function(e) {
                            return n.forEach(function(t) {
                                return tC(t, e)
                            })
                        }, (o = (0, i.useState)(function() {
                            return {
                                value: null,
                                callback: r,
                                facade: {
                                    get current() {
                                        return o.value
                                    },
                                    set current(value) {
                                        var e = o.value;
                                        e !== value && (o.value = value, o.callback(value, e))
                                    }
                                }
                            }
                        })[0]).callback = r, a = o.facade, tR(function() {
                            var e = tk.get(a);
                            if (e) {
                                var t = new Set(e),
                                    r = new Set(n),
                                    o = a.current;
                                t.forEach(function(e) {
                                    r.has(e) || tC(e, null)
                                }), r.forEach(function(e) {
                                    t.has(e) || tC(e, o)
                                })
                            }
                            tk.set(a, n)
                        }, [n]), a),
                        k = tw(tw({}, C), c);
                    return i.createElement(i.Fragment, null, m && i.createElement(g, {
                        sideCar: tM,
                        removeScrollBar: h,
                        shards: v,
                        noIsolation: y,
                        inert: w,
                        setCallbacks: s,
                        allowPinchZoom: !!b,
                        lockRef: l,
                        gapMode: E
                    }), d ? i.cloneElement(i.Children.only(f), tw(tw({}, k), {
                        ref: R
                    })) : i.createElement(void 0 === x ? "div" : x, tw({}, k, {
                        className: p,
                        ref: R
                    }), f))
                });
            tP.defaultProps = {
                enabled: !0,
                removeScrollBar: !0,
                inert: !1
            }, tP.classNames = {
                fullWidth: tE,
                zeroRight: tx
            };
            var tL = function(e) {
                var t = e.sideCar,
                    n = tb(e, ["sideCar"]);
                if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var r = t.read();
                if (!r) throw Error("Sidecar medium not found");
                return i.createElement(r, tw({}, n))
            };
            tL.isSideCarExport = !0;
            var tT = function() {
                    var e = 0,
                        t = null;
                    return {
                        add: function(r) {
                            if (0 == e && (t = function() {
                                    if (!document) return null;
                                    var e = document.createElement("style");
                                    e.type = "text/css";
                                    var t = o || n.nc;
                                    return t && e.setAttribute("nonce", t), e
                                }())) {
                                var i, a;
                                (i = t).styleSheet ? i.styleSheet.cssText = r : i.appendChild(document.createTextNode(r)), a = t, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                            }
                            e++
                        },
                        remove: function() {
                            --e || !t || (t.parentNode && t.parentNode.removeChild(t), t = null)
                        }
                    }
                },
                tj = function() {
                    var e = tT();
                    return function(t, n) {
                        i.useEffect(function() {
                            return e.add(t),
                                function() {
                                    e.remove()
                                }
                        }, [t && n])
                    }
                },
                tD = function() {
                    var e = tj();
                    return function(t) {
                        return e(t.styles, t.dynamic), null
                    }
                },
                tO = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                tN = function(e) {
                    return parseInt(e || "", 10) || 0
                },
                tI = function(e) {
                    var t = window.getComputedStyle(document.body),
                        n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                        r = t["padding" === e ? "paddingTop" : "marginTop"],
                        o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [tN(n), tN(r), tN(o)]
                },
                t_ = function(e) {
                    if (void 0 === e && (e = "margin"), "undefined" == typeof window) return tO;
                    var t = tI(e),
                        n = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: t[0],
                        top: t[1],
                        right: t[2],
                        gap: Math.max(0, r - n + t[2] - t[0])
                    }
                },
                tF = tD(),
                tW = "data-scroll-locked",
                tB = function(e, t, n, r) {
                    var o = e.left,
                        i = e.top,
                        a = e.right,
                        l = e.gap;
                    return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(tW, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(tx, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(tE, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(tx, " .").concat(tx, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(tE, " .").concat(tE, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(tW, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
                },
                tH = function() {
                    var e = parseInt(document.body.getAttribute(tW) || "0", 10);
                    return isFinite(e) ? e : 0
                },
                tK = function() {
                    i.useEffect(function() {
                        return document.body.setAttribute(tW, (tH() + 1).toString()),
                            function() {
                                var e = tH() - 1;
                                e <= 0 ? document.body.removeAttribute(tW) : document.body.setAttribute(tW, e.toString())
                            }
                    }, [])
                },
                tz = function(e) {
                    var t = e.noRelative,
                        n = e.noImportant,
                        r = e.gapMode,
                        o = void 0 === r ? "margin" : r;
                    tK();
                    var a = i.useMemo(function() {
                        return t_(o)
                    }, [o]);
                    return i.createElement(tF, {
                        styles: tB(a, !t, o, n ? "" : "!important")
                    })
                },
                tG = !1;
            if ("undefined" != typeof window) try {
                var tV = Object.defineProperty({}, "passive", {
                    get: function() {
                        return tG = !0, !0
                    }
                });
                window.addEventListener("test", tV, tV), window.removeEventListener("test", tV, tV)
            } catch (e) {
                tG = !1
            }
            var tX = !!tG && {
                    passive: !1
                },
                tY = function(e, t) {
                    if (!(e instanceof Element)) return !1;
                    var n = window.getComputedStyle(e);
                    return "hidden" !== n[t] && (n.overflowY !== n.overflowX || "TEXTAREA" === e.tagName || "visible" !== n[t])
                },
                tU = function(e, t) {
                    var n = t.ownerDocument,
                        r = t;
                    do {
                        if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), tq(e, r)) {
                            var o = tZ(e, r);
                            if (o[1] > o[2]) return !0
                        }
                        r = r.parentNode
                    } while (r && r !== n.body);
                    return !1
                },
                tq = function(e, t) {
                    return "v" === e ? tY(t, "overflowY") : tY(t, "overflowX")
                },
                tZ = function(e, t) {
                    return "v" === e ? [t.scrollTop, t.scrollHeight, t.clientHeight] : [t.scrollLeft, t.scrollWidth, t.clientWidth]
                },
                tJ = function(e, t, n, r, o) {
                    var i, a = (i = window.getComputedStyle(t).direction, "h" === e && "rtl" === i ? -1 : 1),
                        l = a * r,
                        u = n.target,
                        c = t.contains(u),
                        s = !1,
                        d = l > 0,
                        f = 0,
                        p = 0;
                    do {
                        var h = tZ(e, u),
                            m = h[0],
                            v = h[1] - h[2] - a * m;
                        (m || v) && tq(e, u) && (f += v, p += m), u = u instanceof ShadowRoot ? u.host : u.parentNode
                    } while (!c && u !== document.body || c && (t.contains(u) || t === u));
                    return d && (o && 1 > Math.abs(f) || !o && l > f) ? s = !0 : !d && (o && 1 > Math.abs(p) || !o && -l > p) && (s = !0), s
                },
                t$ = function(e) {
                    return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
                },
                tQ = function(e) {
                    return [e.deltaX, e.deltaY]
                },
                t0 = function(e) {
                    return e && "current" in e ? e.current : e
                },
                t1 = 0,
                t2 = [];
            let t6 = (tM.useMedium(function(e) {
                var t = i.useRef([]),
                    n = i.useRef([0, 0]),
                    r = i.useRef(),
                    o = i.useState(t1++)[0],
                    a = i.useState(tD)[0],
                    l = i.useRef(e);
                i.useEffect(function() {
                    l.current = e
                }, [e]), i.useEffect(function() {
                    if (e.inert) {
                        document.body.classList.add("block-interactivity-".concat(o));
                        var t = (function(e, t, n) {
                            if (n || 2 == arguments.length)
                                for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
                            return e.concat(r || Array.prototype.slice.call(t))
                        })([e.lockRef.current], (e.shards || []).map(t0), !0).filter(Boolean);
                        return t.forEach(function(e) {
                                return e.classList.add("allow-interactivity-".concat(o))
                            }),
                            function() {
                                document.body.classList.remove("block-interactivity-".concat(o)), t.forEach(function(e) {
                                    return e.classList.remove("allow-interactivity-".concat(o))
                                })
                            }
                    }
                }, [e.inert, e.lockRef.current, e.shards]);
                var u = i.useCallback(function(e, t) {
                        if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !l.current.allowPinchZoom;
                        var o, i = t$(e),
                            a = n.current,
                            u = "deltaX" in e ? e.deltaX : a[0] - i[0],
                            c = "deltaY" in e ? e.deltaY : a[1] - i[1],
                            s = e.target,
                            d = Math.abs(u) > Math.abs(c) ? "h" : "v";
                        if ("touches" in e && "h" === d && "range" === s.type) return !1;
                        var f = tU(d, s);
                        if (!f) return !0;
                        if (f ? o = d : (o = "v" === d ? "h" : "v", f = tU(d, s)), !f) return !1;
                        if (!r.current && "changedTouches" in e && (u || c) && (r.current = o), !o) return !0;
                        var p = r.current || o;
                        return tJ(p, t, e, "h" === p ? u : c, !0)
                    }, []),
                    c = i.useCallback(function(e) {
                        if (t2.length && t2[t2.length - 1] === a) {
                            var n = "deltaY" in e ? tQ(e) : t$(e),
                                r = t.current.filter(function(t) {
                                    var r;
                                    return t.name === e.type && (t.target === e.target || e.target === t.shadowParent) && (r = t.delta)[0] === n[0] && r[1] === n[1]
                                })[0];
                            if (r && r.should) {
                                e.cancelable && e.preventDefault();
                                return
                            }
                            if (!r) {
                                var o = (l.current.shards || []).map(t0).filter(Boolean).filter(function(t) {
                                    return t.contains(e.target)
                                });
                                (o.length > 0 ? u(e, o[0]) : !l.current.noIsolation) && e.cancelable && e.preventDefault()
                            }
                        }
                    }, []),
                    s = i.useCallback(function(e, n, r, o) {
                        var i = {
                            name: e,
                            delta: n,
                            target: r,
                            should: o,
                            shadowParent: function(e) {
                                for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
                                return t
                            }(r)
                        };
                        t.current.push(i), setTimeout(function() {
                            t.current = t.current.filter(function(e) {
                                return e !== i
                            })
                        }, 1)
                    }, []),
                    d = i.useCallback(function(e) {
                        n.current = t$(e), r.current = void 0
                    }, []),
                    f = i.useCallback(function(t) {
                        s(t.type, tQ(t), t.target, u(t, e.lockRef.current))
                    }, []),
                    p = i.useCallback(function(t) {
                        s(t.type, t$(t), t.target, u(t, e.lockRef.current))
                    }, []);
                i.useEffect(function() {
                    return t2.push(a), e.setCallbacks({
                            onScrollCapture: f,
                            onWheelCapture: f,
                            onTouchMoveCapture: p
                        }), document.addEventListener("wheel", c, tX), document.addEventListener("touchmove", c, tX), document.addEventListener("touchstart", d, tX),
                        function() {
                            t2 = t2.filter(function(e) {
                                return e !== a
                            }), document.removeEventListener("wheel", c, tX), document.removeEventListener("touchmove", c, tX), document.removeEventListener("touchstart", d, tX)
                        }
                }, []);
                var h = e.removeScrollBar,
                    m = e.inert;
                return i.createElement(i.Fragment, null, m ? i.createElement(a, {
                    styles: "\n  .block-interactivity-".concat(o, " {pointer-events: none;}\n  .allow-interactivity-").concat(o, " {pointer-events: all;}\n")
                }) : null, h ? i.createElement(tz, {
                    gapMode: e.gapMode
                }) : null)
            }), tL);
            var t4 = i.forwardRef(function(e, t) {
                return i.createElement(tP, tw({}, e, {
                    ref: t,
                    sideCar: t6
                }))
            });
            t4.classNames = tP.classNames;
            var t5 = ["Enter", " "],
                t3 = ["ArrowUp", "PageDown", "End"],
                t8 = ["ArrowDown", "PageUp", "Home", ...t3],
                t9 = {
                    ltr: [...t5, "ArrowRight"],
                    rtl: [...t5, "ArrowLeft"]
                },
                t7 = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                ne = "Menu",
                [nt, nn, nr] = (0, d.N)(ne),
                [no, ni] = (0, u.A)(ne, [nr, e1, tc.RG]),
                na = e1(),
                nl = (0, tc.RG)(),
                [nu, nc] = no(ne),
                [ns, nd] = no(ne),
                nf = e => {
                    let {
                        __scopeMenu: t,
                        open: n = !1,
                        children: r,
                        dir: o,
                        onOpenChange: a,
                        modal: l = !0
                    } = e, u = na(t), [c, s] = i.useState(null), d = i.useRef(!1), m = (0, p.c)(a), v = (0, f.jH)(o);
                    return i.useEffect(() => {
                        let e = () => {
                                d.current = !0, document.addEventListener("pointerdown", t, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", t, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            t = () => d.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", t, {
                                capture: !0
                            }), document.removeEventListener("pointermove", t, {
                                capture: !0
                            })
                        }
                    }, []), (0, h.jsx)(e4, {
                        ...u,
                        children: (0, h.jsx)(nu, {
                            scope: t,
                            open: n,
                            onOpenChange: m,
                            content: c,
                            onContentChange: s,
                            children: (0, h.jsx)(ns, {
                                scope: t,
                                onClose: i.useCallback(() => m(!1), [m]),
                                isUsingKeyboardRef: d,
                                dir: v,
                                modal: l,
                                children: r
                            })
                        })
                    })
                };
            nf.displayName = ne;
            var np = i.forwardRef((e, t) => {
                let {
                    __scopeMenu: n,
                    ...r
                } = e, o = na(n);
                return (0, h.jsx)(e3, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            np.displayName = "MenuAnchor";
            var nh = "MenuPortal",
                [nm, nv] = no(nh, {
                    forceMount: void 0
                }),
                ng = e => {
                    let {
                        __scopeMenu: t,
                        forceMount: n,
                        children: r,
                        container: o
                    } = e, i = nc(nh, t);
                    return (0, h.jsx)(nm, {
                        scope: t,
                        forceMount: n,
                        children: (0, h.jsx)(tu.C, {
                            present: n || i.open,
                            children: (0, h.jsx)(tl, {
                                asChild: !0,
                                container: o,
                                children: r
                            })
                        })
                    })
                };
            ng.displayName = nh;
            var ny = "MenuContent",
                [nw, nb] = no(ny),
                nx = i.forwardRef((e, t) => {
                    let n = nv(ny, e.__scopeMenu),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = nc(ny, e.__scopeMenu),
                        a = nd(ny, e.__scopeMenu);
                    return (0, h.jsx)(nt.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, h.jsx)(tu.C, {
                            present: r || i.open,
                            children: (0, h.jsx)(nt.Slot, {
                                scope: e.__scopeMenu,
                                children: a.modal ? (0, h.jsx)(nE, {
                                    ...o,
                                    ref: t
                                }) : (0, h.jsx)(nC, {
                                    ...o,
                                    ref: t
                                })
                            })
                        })
                    })
                }),
                nE = i.forwardRef((e, t) => {
                    let n = nc(ny, e.__scopeMenu),
                        r = i.useRef(null),
                        o = (0, l.s)(t, r);
                    return i.useEffect(() => {
                        let e = r.current;
                        if (e) return ty(e)
                    }, []), (0, h.jsx)(nR, {
                        ...e,
                        ref: o,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: n.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, a.m)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => n.onOpenChange(!1)
                    })
                }),
                nC = i.forwardRef((e, t) => {
                    let n = nc(ny, e.__scopeMenu);
                    return (0, h.jsx)(nR, {
                        ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => n.onOpenChange(!1)
                    })
                }),
                nR = i.forwardRef((e, t) => {
                    let {
                        __scopeMenu: n,
                        loop: r = !1,
                        trapFocus: o,
                        onOpenAutoFocus: u,
                        onCloseAutoFocus: c,
                        disableOutsidePointerEvents: s,
                        onEntryFocus: d,
                        onEscapeKeyDown: f,
                        onPointerDownOutside: p,
                        onFocusOutside: m,
                        onInteractOutside: v,
                        onDismiss: y,
                        disableOutsideScroll: w,
                        ...E
                    } = e, C = nc(ny, n), R = nd(ny, n), A = na(n), M = nl(n), S = nn(n), [P, L] = i.useState(null), T = i.useRef(null), j = (0, l.s)(t, T, C.onContentChange), D = i.useRef(0), O = i.useRef(""), N = i.useRef(0), I = i.useRef(null), _ = i.useRef("right"), F = i.useRef(0), W = w ? t4 : i.Fragment, B = w ? {
                        as: ts.DX,
                        allowPinchZoom: !0
                    } : void 0, H = e => {
                        var t, n;
                        let r = O.current + e,
                            o = S().filter(e => !e.disabled),
                            i = document.activeElement,
                            a = null === (t = o.find(e => e.ref.current === i)) || void 0 === t ? void 0 : t.textValue,
                            l = function(e, t, n) {
                                var r;
                                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                                    i = (r = Math.max(n ? e.indexOf(n) : -1, 0), e.map((t, n) => e[(r + n) % e.length]));
                                1 === o.length && (i = i.filter(e => e !== n));
                                let a = i.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                                return a !== n ? a : void 0
                            }(o.map(e => e.textValue), r, a),
                            u = null === (n = o.find(e => e.textValue === l)) || void 0 === n ? void 0 : n.ref.current;
                        ! function e(t) {
                            O.current = t, window.clearTimeout(D.current), "" !== t && (D.current = window.setTimeout(() => e(""), 1e3))
                        }(r), u && setTimeout(() => u.focus())
                    };
                    i.useEffect(() => () => window.clearTimeout(D.current), []), i.useEffect(() => {
                        var e, t;
                        let n = document.querySelectorAll("[data-radix-focus-guard]");
                        return document.body.insertAdjacentElement("afterbegin", null !== (e = n[0]) && void 0 !== e ? e : x()), document.body.insertAdjacentElement("beforeend", null !== (t = n[1]) && void 0 !== t ? t : x()), b++, () => {
                            1 === b && document.querySelectorAll("[data-radix-focus-guard]").forEach(e => e.remove()), b--
                        }
                    }, []);
                    let K = i.useCallback(e => {
                        var t, n;
                        return _.current === (null === (t = I.current) || void 0 === t ? void 0 : t.side) && function(e, t) {
                            return !!t && function(e, t) {
                                let {
                                    x: n,
                                    y: r
                                } = e, o = !1;
                                for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                                    let a = t[e].x,
                                        l = t[e].y,
                                        u = t[i].x,
                                        c = t[i].y;
                                    l > r != c > r && n < (u - a) * (r - l) / (c - l) + a && (o = !o)
                                }
                                return o
                            }({
                                x: e.clientX,
                                y: e.clientY
                            }, t)
                        }(e, null === (n = I.current) || void 0 === n ? void 0 : n.area)
                    }, []);
                    return (0, h.jsx)(nw, {
                        scope: n,
                        searchRef: O,
                        onItemEnter: i.useCallback(e => {
                            K(e) && e.preventDefault()
                        }, [K]),
                        onItemLeave: i.useCallback(e => {
                            var t;
                            K(e) || (null === (t = T.current) || void 0 === t || t.focus(), L(null))
                        }, [K]),
                        onTriggerLeave: i.useCallback(e => {
                            K(e) && e.preventDefault()
                        }, [K]),
                        pointerGraceTimerRef: N,
                        onPointerGraceIntentChange: i.useCallback(e => {
                            I.current = e
                        }, []),
                        children: (0, h.jsx)(W, {
                            ...B,
                            children: (0, h.jsx)(k, {
                                asChild: !0,
                                trapped: o,
                                onMountAutoFocus: (0, a.m)(u, e => {
                                    var t;
                                    e.preventDefault(), null === (t = T.current) || void 0 === t || t.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onUnmountAutoFocus: c,
                                children: (0, h.jsx)(g, {
                                    asChild: !0,
                                    disableOutsidePointerEvents: s,
                                    onEscapeKeyDown: f,
                                    onPointerDownOutside: p,
                                    onFocusOutside: m,
                                    onInteractOutside: v,
                                    onDismiss: y,
                                    children: (0, h.jsx)(tc.bL, {
                                        asChild: !0,
                                        ...M,
                                        dir: R.dir,
                                        orientation: "vertical",
                                        loop: r,
                                        currentTabStopId: P,
                                        onCurrentTabStopIdChange: L,
                                        onEntryFocus: (0, a.m)(d, e => {
                                            R.isUsingKeyboardRef.current || e.preventDefault()
                                        }),
                                        preventScrollOnEntryFocus: !0,
                                        children: (0, h.jsx)(te, {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "data-state": n$(C.open),
                                            "data-radix-menu-content": "",
                                            dir: R.dir,
                                            ...A,
                                            ...E,
                                            ref: j,
                                            style: {
                                                outline: "none",
                                                ...E.style
                                            },
                                            onKeyDown: (0, a.m)(E.onKeyDown, e => {
                                                let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                                    n = e.ctrlKey || e.altKey || e.metaKey,
                                                    r = 1 === e.key.length;
                                                t && ("Tab" === e.key && e.preventDefault(), !n && r && H(e.key));
                                                let o = T.current;
                                                if (e.target !== o || !t8.includes(e.key)) return;
                                                e.preventDefault();
                                                let i = S().filter(e => !e.disabled).map(e => e.ref.current);
                                                t3.includes(e.key) && i.reverse(),
                                                    function(e) {
                                                        let t = document.activeElement;
                                                        for (let n of e)
                                                            if (n === t || (n.focus(), document.activeElement !== t)) return
                                                    }(i)
                                            }),
                                            onBlur: (0, a.m)(e.onBlur, e => {
                                                e.currentTarget.contains(e.target) || (window.clearTimeout(D.current), O.current = "")
                                            }),
                                            onPointerMove: (0, a.m)(e.onPointerMove, n1(e => {
                                                let t = e.target,
                                                    n = F.current !== e.clientX;
                                                e.currentTarget.contains(t) && n && (_.current = e.clientX > F.current ? "right" : "left", F.current = e.clientX)
                                            }))
                                        })
                                    })
                                })
                            })
                        })
                    })
                });
            nx.displayName = ny;
            var nk = i.forwardRef((e, t) => {
                let {
                    __scopeMenu: n,
                    ...r
                } = e;
                return (0, h.jsx)(s.sG.div, {
                    role: "group",
                    ...r,
                    ref: t
                })
            });
            nk.displayName = "MenuGroup";
            var nA = i.forwardRef((e, t) => {
                let {
                    __scopeMenu: n,
                    ...r
                } = e;
                return (0, h.jsx)(s.sG.div, {
                    ...r,
                    ref: t
                })
            });
            nA.displayName = "MenuLabel";
            var nM = "MenuItem",
                nS = "menu.itemSelect",
                nP = i.forwardRef((e, t) => {
                    let {
                        disabled: n = !1,
                        onSelect: r,
                        ...o
                    } = e, u = i.useRef(null), c = nd(nM, e.__scopeMenu), d = nb(nM, e.__scopeMenu), f = (0, l.s)(t, u), p = i.useRef(!1);
                    return (0, h.jsx)(nL, {
                        ...o,
                        ref: f,
                        disabled: n,
                        onClick: (0, a.m)(e.onClick, () => {
                            let e = u.current;
                            if (!n && e) {
                                let t = new CustomEvent(nS, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                e.addEventListener(nS, e => null == r ? void 0 : r(e), {
                                    once: !0
                                }), (0, s.hO)(e, t), t.defaultPrevented ? p.current = !1 : c.onClose()
                            }
                        }),
                        onPointerDown: t => {
                            var n;
                            null === (n = e.onPointerDown) || void 0 === n || n.call(e, t), p.current = !0
                        },
                        onPointerUp: (0, a.m)(e.onPointerUp, e => {
                            var t;
                            p.current || null === (t = e.currentTarget) || void 0 === t || t.click()
                        }),
                        onKeyDown: (0, a.m)(e.onKeyDown, e => {
                            let t = "" !== d.searchRef.current;
                            !n && (!t || " " !== e.key) && t5.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        })
                    })
                });
            nP.displayName = nM;
            var nL = i.forwardRef((e, t) => {
                    let {
                        __scopeMenu: n,
                        disabled: r = !1,
                        textValue: o,
                        ...u
                    } = e, c = nb(nM, n), d = nl(n), f = i.useRef(null), p = (0, l.s)(t, f), [m, v] = i.useState(!1), [g, y] = i.useState("");
                    return i.useEffect(() => {
                        let e = f.current;
                        if (e) {
                            var t;
                            y((null !== (t = e.textContent) && void 0 !== t ? t : "").trim())
                        }
                    }, [u.children]), (0, h.jsx)(nt.ItemSlot, {
                        scope: n,
                        disabled: r,
                        textValue: null != o ? o : g,
                        children: (0, h.jsx)(tc.q7, {
                            asChild: !0,
                            ...d,
                            focusable: !r,
                            children: (0, h.jsx)(s.sG.div, {
                                role: "menuitem",
                                "data-highlighted": m ? "" : void 0,
                                "aria-disabled": r || void 0,
                                "data-disabled": r ? "" : void 0,
                                ...u,
                                ref: p,
                                onPointerMove: (0, a.m)(e.onPointerMove, n1(e => {
                                    r ? c.onItemLeave(e) : (c.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({
                                        preventScroll: !0
                                    }))
                                })),
                                onPointerLeave: (0, a.m)(e.onPointerLeave, n1(e => c.onItemLeave(e))),
                                onFocus: (0, a.m)(e.onFocus, () => v(!0)),
                                onBlur: (0, a.m)(e.onBlur, () => v(!1))
                            })
                        })
                    })
                }),
                nT = i.forwardRef((e, t) => {
                    let {
                        checked: n = !1,
                        onCheckedChange: r,
                        ...o
                    } = e;
                    return (0, h.jsx)(nW, {
                        scope: e.__scopeMenu,
                        checked: n,
                        children: (0, h.jsx)(nP, {
                            role: "menuitemcheckbox",
                            "aria-checked": nQ(n) ? "mixed" : n,
                            ...o,
                            ref: t,
                            "data-state": n0(n),
                            onSelect: (0, a.m)(o.onSelect, () => null == r ? void 0 : r(!!nQ(n) || !n), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            nT.displayName = "MenuCheckboxItem";
            var nj = "MenuRadioGroup",
                [nD, nO] = no(nj, {
                    value: void 0,
                    onValueChange: () => {}
                }),
                nN = i.forwardRef((e, t) => {
                    let {
                        value: n,
                        onValueChange: r,
                        ...o
                    } = e, i = (0, p.c)(r);
                    return (0, h.jsx)(nD, {
                        scope: e.__scopeMenu,
                        value: n,
                        onValueChange: i,
                        children: (0, h.jsx)(nk, {
                            ...o,
                            ref: t
                        })
                    })
                });
            nN.displayName = nj;
            var nI = "MenuRadioItem",
                n_ = i.forwardRef((e, t) => {
                    let {
                        value: n,
                        ...r
                    } = e, o = nO(nI, e.__scopeMenu), i = n === o.value;
                    return (0, h.jsx)(nW, {
                        scope: e.__scopeMenu,
                        checked: i,
                        children: (0, h.jsx)(nP, {
                            role: "menuitemradio",
                            "aria-checked": i,
                            ...r,
                            ref: t,
                            "data-state": n0(i),
                            onSelect: (0, a.m)(r.onSelect, () => {
                                var e;
                                return null === (e = o.onValueChange) || void 0 === e ? void 0 : e.call(o, n)
                            }, {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            n_.displayName = nI;
            var nF = "MenuItemIndicator",
                [nW, nB] = no(nF, {
                    checked: !1
                }),
                nH = i.forwardRef((e, t) => {
                    let {
                        __scopeMenu: n,
                        forceMount: r,
                        ...o
                    } = e, i = nB(nF, n);
                    return (0, h.jsx)(tu.C, {
                        present: r || nQ(i.checked) || !0 === i.checked,
                        children: (0, h.jsx)(s.sG.span, {
                            ...o,
                            ref: t,
                            "data-state": n0(i.checked)
                        })
                    })
                });
            nH.displayName = nF;
            var nK = i.forwardRef((e, t) => {
                let {
                    __scopeMenu: n,
                    ...r
                } = e;
                return (0, h.jsx)(s.sG.div, {
                    role: "separator",
                    "aria-orientation": "horizontal",
                    ...r,
                    ref: t
                })
            });
            nK.displayName = "MenuSeparator";
            var nz = i.forwardRef((e, t) => {
                let {
                    __scopeMenu: n,
                    ...r
                } = e, o = na(n);
                return (0, h.jsx)(tr, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            nz.displayName = "MenuArrow";
            var nG = "MenuSub",
                [nV, nX] = no(nG),
                nY = e => {
                    let {
                        __scopeMenu: t,
                        children: n,
                        open: r = !1,
                        onOpenChange: o
                    } = e, a = nc(nG, t), l = na(t), [u, c] = i.useState(null), [s, d] = i.useState(null), f = (0, p.c)(o);
                    return i.useEffect(() => (!1 === a.open && f(!1), () => f(!1)), [a.open, f]), (0, h.jsx)(e4, {
                        ...l,
                        children: (0, h.jsx)(nu, {
                            scope: t,
                            open: r,
                            onOpenChange: f,
                            content: s,
                            onContentChange: d,
                            children: (0, h.jsx)(nV, {
                                scope: t,
                                contentId: (0, T.B)(),
                                triggerId: (0, T.B)(),
                                trigger: u,
                                onTriggerChange: c,
                                children: n
                            })
                        })
                    })
                };
            nY.displayName = nG;
            var nU = "MenuSubTrigger",
                nq = i.forwardRef((e, t) => {
                    let n = nc(nU, e.__scopeMenu),
                        r = nd(nU, e.__scopeMenu),
                        o = nX(nU, e.__scopeMenu),
                        u = nb(nU, e.__scopeMenu),
                        c = i.useRef(null),
                        {
                            pointerGraceTimerRef: s,
                            onPointerGraceIntentChange: d
                        } = u,
                        f = {
                            __scopeMenu: e.__scopeMenu
                        },
                        p = i.useCallback(() => {
                            c.current && window.clearTimeout(c.current), c.current = null
                        }, []);
                    return i.useEffect(() => p, [p]), i.useEffect(() => {
                        let e = s.current;
                        return () => {
                            window.clearTimeout(e), d(null)
                        }
                    }, [s, d]), (0, h.jsx)(np, {
                        asChild: !0,
                        ...f,
                        children: (0, h.jsx)(nL, {
                            id: o.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": n.open,
                            "aria-controls": o.contentId,
                            "data-state": n$(n.open),
                            ...e,
                            ref: (0, l.t)(t, o.onTriggerChange),
                            onClick: t => {
                                var r;
                                null === (r = e.onClick) || void 0 === r || r.call(e, t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), n.open || n.onOpenChange(!0))
                            },
                            onPointerMove: (0, a.m)(e.onPointerMove, n1(t => {
                                u.onItemEnter(t), t.defaultPrevented || e.disabled || n.open || c.current || (u.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
                                    n.onOpenChange(!0), p()
                                }, 100))
                            })),
                            onPointerLeave: (0, a.m)(e.onPointerLeave, n1(e => {
                                var t, r;
                                p();
                                let o = null === (t = n.content) || void 0 === t ? void 0 : t.getBoundingClientRect();
                                if (o) {
                                    let t = null === (r = n.content) || void 0 === r ? void 0 : r.dataset.side,
                                        i = "right" === t,
                                        a = o[i ? "left" : "right"],
                                        l = o[i ? "right" : "left"];
                                    u.onPointerGraceIntentChange({
                                        area: [{
                                            x: e.clientX + (i ? -5 : 5),
                                            y: e.clientY
                                        }, {
                                            x: a,
                                            y: o.top
                                        }, {
                                            x: l,
                                            y: o.top
                                        }, {
                                            x: l,
                                            y: o.bottom
                                        }, {
                                            x: a,
                                            y: o.bottom
                                        }],
                                        side: t
                                    }), window.clearTimeout(s.current), s.current = window.setTimeout(() => u.onPointerGraceIntentChange(null), 300)
                                } else {
                                    if (u.onTriggerLeave(e), e.defaultPrevented) return;
                                    u.onPointerGraceIntentChange(null)
                                }
                            })),
                            onKeyDown: (0, a.m)(e.onKeyDown, t => {
                                let o = "" !== u.searchRef.current;
                                if (!e.disabled && (!o || " " !== t.key) && t9[r.dir].includes(t.key)) {
                                    var i;
                                    n.onOpenChange(!0), null === (i = n.content) || void 0 === i || i.focus(), t.preventDefault()
                                }
                            })
                        })
                    })
                });
            nq.displayName = nU;
            var nZ = "MenuSubContent",
                nJ = i.forwardRef((e, t) => {
                    let n = nv(ny, e.__scopeMenu),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        u = nc(ny, e.__scopeMenu),
                        c = nd(ny, e.__scopeMenu),
                        s = nX(nZ, e.__scopeMenu),
                        d = i.useRef(null),
                        f = (0, l.s)(t, d);
                    return (0, h.jsx)(nt.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, h.jsx)(tu.C, {
                            present: r || u.open,
                            children: (0, h.jsx)(nt.Slot, {
                                scope: e.__scopeMenu,
                                children: (0, h.jsx)(nR, {
                                    id: s.contentId,
                                    "aria-labelledby": s.triggerId,
                                    ...o,
                                    ref: f,
                                    align: "start",
                                    side: "rtl" === c.dir ? "left" : "right",
                                    disableOutsidePointerEvents: !1,
                                    disableOutsideScroll: !1,
                                    trapFocus: !1,
                                    onOpenAutoFocus: e => {
                                        var t;
                                        c.isUsingKeyboardRef.current && (null === (t = d.current) || void 0 === t || t.focus()), e.preventDefault()
                                    },
                                    onCloseAutoFocus: e => e.preventDefault(),
                                    onFocusOutside: (0, a.m)(e.onFocusOutside, e => {
                                        e.target !== s.trigger && u.onOpenChange(!1)
                                    }),
                                    onEscapeKeyDown: (0, a.m)(e.onEscapeKeyDown, e => {
                                        c.onClose(), e.preventDefault()
                                    }),
                                    onKeyDown: (0, a.m)(e.onKeyDown, e => {
                                        let t = e.currentTarget.contains(e.target),
                                            n = t7[c.dir].includes(e.key);
                                        if (t && n) {
                                            var r;
                                            u.onOpenChange(!1), null === (r = s.trigger) || void 0 === r || r.focus(), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                });

            function n$(e) {
                return e ? "open" : "closed"
            }

            function nQ(e) {
                return "indeterminate" === e
            }

            function n0(e) {
                return nQ(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }

            function n1(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }
            nJ.displayName = nZ;
            var n2 = "DropdownMenu",
                [n6, n4] = (0, u.A)(n2, [ni]),
                n5 = ni(),
                [n3, n8] = n6(n2),
                n9 = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: n,
                        dir: r,
                        open: o,
                        defaultOpen: a,
                        onOpenChange: l,
                        modal: u = !0
                    } = e, s = n5(t), d = i.useRef(null), [f = !1, p] = (0, c.i)({
                        prop: o,
                        defaultProp: a,
                        onChange: l
                    });
                    return (0, h.jsx)(n3, {
                        scope: t,
                        triggerId: (0, T.B)(),
                        triggerRef: d,
                        contentId: (0, T.B)(),
                        open: f,
                        onOpenChange: p,
                        onOpenToggle: i.useCallback(() => p(e => !e), [p]),
                        modal: u,
                        children: (0, h.jsx)(nf, {
                            ...s,
                            open: f,
                            onOpenChange: p,
                            dir: r,
                            modal: u,
                            children: n
                        })
                    })
                };
            n9.displayName = n2;
            var n7 = "DropdownMenuTrigger",
                re = i.forwardRef((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        disabled: r = !1,
                        ...o
                    } = e, i = n8(n7, n), u = n5(n);
                    return (0, h.jsx)(np, {
                        asChild: !0,
                        ...u,
                        children: (0, h.jsx)(s.sG.button, {
                            type: "button",
                            id: i.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": i.open,
                            "aria-controls": i.open ? i.contentId : void 0,
                            "data-state": i.open ? "open" : "closed",
                            "data-disabled": r ? "" : void 0,
                            disabled: r,
                            ...o,
                            ref: (0, l.t)(t, i.triggerRef),
                            onPointerDown: (0, a.m)(e.onPointerDown, e => {
                                r || 0 !== e.button || !1 !== e.ctrlKey || (i.onOpenToggle(), i.open || e.preventDefault())
                            }),
                            onKeyDown: (0, a.m)(e.onKeyDown, e => {
                                !r && (["Enter", " "].includes(e.key) && i.onOpenToggle(), "ArrowDown" === e.key && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                            })
                        })
                    })
                });
            re.displayName = n7;
            var rt = e => {
                let {
                    __scopeDropdownMenu: t,
                    ...n
                } = e, r = n5(t);
                return (0, h.jsx)(ng, {
                    ...r,
                    ...n
                })
            };
            rt.displayName = "DropdownMenuPortal";
            var rn = "DropdownMenuContent",
                rr = i.forwardRef((e, t) => {
                    let {
                        __scopeDropdownMenu: n,
                        ...r
                    } = e, o = n8(rn, n), l = n5(n), u = i.useRef(!1);
                    return (0, h.jsx)(nx, {
                        id: o.contentId,
                        "aria-labelledby": o.triggerId,
                        ...l,
                        ...r,
                        ref: t,
                        onCloseAutoFocus: (0, a.m)(e.onCloseAutoFocus, e => {
                            var t;
                            u.current || null === (t = o.triggerRef.current) || void 0 === t || t.focus(), u.current = !1, e.preventDefault()
                        }),
                        onInteractOutside: (0, a.m)(e.onInteractOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey,
                                r = 2 === t.button || n;
                            (!o.modal || r) && (u.current = !0)
                        }),
                        style: {
                            ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    })
                });
            rr.displayName = rn;
            var ro = i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(nk, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            ro.displayName = "DropdownMenuGroup";
            var ri = i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(nA, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            ri.displayName = "DropdownMenuLabel";
            var ra = i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(nP, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            ra.displayName = "DropdownMenuItem";
            var rl = i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(nT, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            rl.displayName = "DropdownMenuCheckboxItem";
            var ru = i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(nN, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            ru.displayName = "DropdownMenuRadioGroup";
            var rc = i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(n_, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            rc.displayName = "DropdownMenuRadioItem";
            var rs = i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(nH, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            rs.displayName = "DropdownMenuItemIndicator";
            var rd = i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(nK, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            rd.displayName = "DropdownMenuSeparator", i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(nz, {
                    ...o,
                    ...r,
                    ref: t
                })
            }).displayName = "DropdownMenuArrow";
            var rf = i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(nq, {
                    ...o,
                    ...r,
                    ref: t
                })
            });
            rf.displayName = "DropdownMenuSubTrigger";
            var rp = i.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: n,
                    ...r
                } = e, o = n5(n);
                return (0, h.jsx)(nJ, {
                    ...o,
                    ...r,
                    ref: t,
                    style: {
                        ...e.style,
                        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            rp.displayName = "DropdownMenuSubContent";
            var rh = n9,
                rm = re,
                rv = rt,
                rg = rr,
                ry = ro,
                rw = ri,
                rb = ra,
                rx = rl,
                rE = ru,
                rC = rc,
                rR = rs,
                rk = rd,
                rA = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: n,
                        open: r,
                        onOpenChange: o,
                        defaultOpen: i
                    } = e, a = n5(t), [l = !1, u] = (0, c.i)({
                        prop: r,
                        defaultProp: i,
                        onChange: o
                    });
                    return (0, h.jsx)(nY, {
                        ...a,
                        open: l,
                        onOpenChange: u,
                        children: n
                    })
                },
                rM = rf,
                rS = rp
        },
        4504: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4168).A)("Moon", [
                ["path", {
                    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
                    key: "a7tn18"
                }]
            ])
        },
        5825: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4168).A)("Laptop", [
                ["path", {
                    d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",
                    key: "tarvll"
                }]
            ])
        },
        6589: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4168).A)("Sun", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "4",
                    key: "4exip2"
                }],
                ["path", {
                    d: "M12 2v2",
                    key: "tus03m"
                }],
                ["path", {
                    d: "M12 20v2",
                    key: "1lh1kg"
                }],
                ["path", {
                    d: "m4.93 4.93 1.41 1.41",
                    key: "149t6j"
                }],
                ["path", {
                    d: "m17.66 17.66 1.41 1.41",
                    key: "ptbguv"
                }],
                ["path", {
                    d: "M2 12h2",
                    key: "1t8f8n"
                }],
                ["path", {
                    d: "M20 12h2",
                    key: "1q8mjw"
                }],
                ["path", {
                    d: "m6.34 17.66-1.41 1.41",
                    key: "1m8zz5"
                }],
                ["path", {
                    d: "m19.07 4.93-1.41 1.41",
                    key: "1shlcs"
                }]
            ])
        },
        7328: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => s,
                N: () => d
            });
            var r = n(364),
                o = (e, t, n, r, o, i, a, l) => {
                    let u = document.documentElement,
                        c = ["light", "dark"];

                    function s(t) {
                        var n;
                        (Array.isArray(e) ? e : [e]).forEach(e => {
                            let n = "class" === e,
                                r = n && i ? o.map(e => i[e] || e) : o;
                            n ? (u.classList.remove(...r), u.classList.add(i && i[t] ? i[t] : t)) : u.setAttribute(e, t)
                        }), n = t, l && c.includes(n) && (u.style.colorScheme = n)
                    }
                    if (r) s(r);
                    else try {
                        let e = localStorage.getItem(t) || n,
                            r = a && "system" === e ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : e;
                        s(r)
                    } catch (e) {}
                },
                i = ["light", "dark"],
                a = "(prefers-color-scheme: dark)",
                l = "undefined" == typeof window,
                u = r.createContext(void 0),
                c = {
                    setTheme: e => {},
                    themes: []
                },
                s = () => {
                    var e;
                    return null != (e = r.useContext(u)) ? e : c
                },
                d = e => r.useContext(u) ? r.createElement(r.Fragment, null, e.children) : r.createElement(p, {
                    ...e
                }),
                f = ["light", "dark"],
                p = e => {
                    let {
                        forcedTheme: t,
                        disableTransitionOnChange: n = !1,
                        enableSystem: o = !0,
                        enableColorScheme: l = !0,
                        storageKey: c = "theme",
                        themes: s = f,
                        defaultTheme: d = o ? "system" : "light",
                        attribute: p = "data-theme",
                        value: y,
                        children: w,
                        nonce: b,
                        scriptProps: x
                    } = e, [E, C] = r.useState(() => m(c, d)), [R, k] = r.useState(() => "system" === E ? g() : E), A = y ? Object.values(y) : s, M = r.useCallback(e => {
                        let t = e;
                        if (!t) return;
                        "system" === e && o && (t = g());
                        let r = y ? y[t] : t,
                            a = n ? v(b) : null,
                            u = document.documentElement,
                            c = e => {
                                "class" === e ? (u.classList.remove(...A), r && u.classList.add(r)) : e.startsWith("data-") && (r ? u.setAttribute(e, r) : u.removeAttribute(e))
                            };
                        if (Array.isArray(p) ? p.forEach(c) : c(p), l) {
                            let e = i.includes(d) ? d : null,
                                n = i.includes(t) ? t : e;
                            u.style.colorScheme = n
                        }
                        null == a || a()
                    }, [b]), S = r.useCallback(e => {
                        let t = "function" == typeof e ? e(E) : e;
                        C(t);
                        try {
                            localStorage.setItem(c, t)
                        } catch (e) {}
                    }, [E]), P = r.useCallback(e => {
                        k(g(e)), "system" === E && o && !t && M("system")
                    }, [E, t]);
                    r.useEffect(() => {
                        let e = window.matchMedia(a);
                        return e.addListener(P), P(e), () => e.removeListener(P)
                    }, [P]), r.useEffect(() => {
                        let e = e => {
                            e.key === c && (e.newValue ? C(e.newValue) : S(d))
                        };
                        return window.addEventListener("storage", e), () => window.removeEventListener("storage", e)
                    }, [S]), r.useEffect(() => {
                        M(null != t ? t : E)
                    }, [t, E]);
                    let L = r.useMemo(() => ({
                        theme: E,
                        setTheme: S,
                        forcedTheme: t,
                        resolvedTheme: "system" === E ? R : E,
                        themes: o ? [...s, "system"] : s,
                        systemTheme: o ? R : void 0
                    }), [E, S, t, R, o, s]);
                    return r.createElement(u.Provider, {
                        value: L
                    }, r.createElement(h, {
                        forcedTheme: t,
                        storageKey: c,
                        attribute: p,
                        enableSystem: o,
                        enableColorScheme: l,
                        defaultTheme: d,
                        value: y,
                        themes: s,
                        nonce: b,
                        scriptProps: x
                    }), w)
                },
                h = r.memo(e => {
                    let {
                        forcedTheme: t,
                        storageKey: n,
                        attribute: i,
                        enableSystem: a,
                        enableColorScheme: l,
                        defaultTheme: u,
                        value: c,
                        themes: s,
                        nonce: d,
                        scriptProps: f
                    } = e, p = JSON.stringify([i, n, u, t, s, c, a, l]).slice(1, -1);
                    return r.createElement("script", {
                        ...f,
                        suppressHydrationWarning: !0,
                        nonce: "undefined" == typeof window ? d : "",
                        dangerouslySetInnerHTML: {
                            __html: "(".concat(o.toString(), ")(").concat(p, ")")
                        }
                    })
                }),
                m = (e, t) => {
                    let n;
                    if (!l) {
                        try {
                            n = localStorage.getItem(e) || void 0
                        } catch (e) {}
                        return n || t
                    }
                },
                v = e => {
                    let t = document.createElement("style");
                    return e && t.setAttribute("nonce", e), t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t), () => {
                        window.getComputedStyle(document.body), setTimeout(() => {
                            document.head.removeChild(t)
                        }, 1)
                    }
                },
                g = e => (e || (e = window.matchMedia(a)), e.matches ? "dark" : "light")
        },
        9262: (e, t, n) => {
            "use strict";
            var r = n(6834);
            n.o(r, "usePathname") && n.d(t, {
                usePathname: function() {
                    return r.usePathname
                }
            })
        },
        9894: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            let r = (0, n(4168).A)("Menu", [
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "12",
                    y2: "12",
                    key: "1e0a9i"
                }],
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "6",
                    y2: "6",
                    key: "1owob3"
                }],
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "18",
                    y2: "18",
                    key: "yk5zj1"
                }]
            ])
        }
    }
]);
