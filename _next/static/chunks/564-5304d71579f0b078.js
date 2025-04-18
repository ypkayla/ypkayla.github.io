"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [564], {
        32: (e, t, n) => {
            n.d(t, {
                jH: () => u
            });
            var r = n(364);
            n(2432);
            var o = r.createContext(void 0);

            function u(e) {
                let t = r.useContext(o);
                return e || t || "ltr"
            }
        },
        936: (e, t, n) => {
            n.d(t, {
                N: () => o
            });
            var r = n(364),
                o = globalThis?.document ? r.useLayoutEffect : () => {}
        },
        1263: (e, t, n) => {
            n.d(t, {
                C: () => i
            });
            var r = n(364),
                o = n(7419),
                u = n(936),
                i = e => {
                    let {
                        present: t,
                        children: n
                    } = e, i = function(e) {
                        var t, n;
                        let [o, i] = r.useState(), a = r.useRef({}), s = r.useRef(e), c = r.useRef("none"), [f, d] = (t = e ? "mounted" : "unmounted", n = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, r.useReducer((e, t) => {
                            let r = n[e][t];
                            return null != r ? r : e
                        }, t));
                        return r.useEffect(() => {
                            let e = l(a.current);
                            c.current = "mounted" === f ? e : "none"
                        }, [f]), (0, u.N)(() => {
                            let t = a.current,
                                n = s.current;
                            if (n !== e) {
                                let r = c.current,
                                    o = l(t);
                                e ? d("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? d("UNMOUNT") : n && r !== o ? d("ANIMATION_OUT") : d("UNMOUNT"), s.current = e
                            }
                        }, [e, d]), (0, u.N)(() => {
                            if (o) {
                                var e;
                                let t;
                                let n = null !== (e = o.ownerDocument.defaultView) && void 0 !== e ? e : window,
                                    r = e => {
                                        let r = l(a.current).includes(e.animationName);
                                        if (e.target === o && r && (d("ANIMATION_END"), !s.current)) {
                                            let e = o.style.animationFillMode;
                                            o.style.animationFillMode = "forwards", t = n.setTimeout(() => {
                                                "forwards" === o.style.animationFillMode && (o.style.animationFillMode = e)
                                            })
                                        }
                                    },
                                    u = e => {
                                        e.target === o && (c.current = l(a.current))
                                    };
                                return o.addEventListener("animationstart", u), o.addEventListener("animationcancel", r), o.addEventListener("animationend", r), () => {
                                    n.clearTimeout(t), o.removeEventListener("animationstart", u), o.removeEventListener("animationcancel", r), o.removeEventListener("animationend", r)
                                }
                            }
                            d("ANIMATION_END")
                        }, [o, d]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(f),
                            ref: r.useCallback(e => {
                                e && (a.current = getComputedStyle(e)), i(e)
                            }, [])
                        }
                    }(t), a = "function" == typeof n ? n({
                        present: i.isPresent
                    }) : r.Children.only(n), s = (0, o.s)(i.ref, function(e) {
                        var t, n;
                        let r = null === (t = Object.getOwnPropertyDescriptor(e.props, "ref")) || void 0 === t ? void 0 : t.get,
                            o = r && "isReactWarning" in r && r.isReactWarning;
                        return o ? e.ref : (o = (r = null === (n = Object.getOwnPropertyDescriptor(e, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in r && r.isReactWarning) ? e.props.ref : e.props.ref || e.ref
                    }(a));
                    return "function" == typeof n || i.isPresent ? r.cloneElement(a, {
                        ref: s
                    }) : null
                };

            function l(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            i.displayName = "Presence"
        },
        3034: (e, t, n) => {
            n.d(t, {
                RG: () => b,
                bL: () => C,
                q7: () => O
            });
            var r = n(364),
                o = n(4017),
                u = n(6162),
                i = n(7419),
                l = n(4223),
                a = n(4518),
                s = n(6326),
                c = n(8926),
                f = n(7626),
                d = n(32),
                m = n(2432),
                p = "rovingFocusGroup.onEntryFocus",
                v = {
                    bubbles: !1,
                    cancelable: !0
                },
                w = "RovingFocusGroup",
                [N, y, g] = (0, u.N)(w),
                [R, b] = (0, l.A)(w, [g]),
                [h, M] = R(w),
                A = r.forwardRef((e, t) => (0, m.jsx)(N.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, m.jsx)(N.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, m.jsx)(E, {
                            ...e,
                            ref: t
                        })
                    })
                }));
            A.displayName = w;
            var E = r.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        orientation: u,
                        loop: l = !1,
                        dir: a,
                        currentTabStopId: w,
                        defaultCurrentTabStopId: N,
                        onCurrentTabStopIdChange: g,
                        onEntryFocus: R,
                        preventScrollOnEntryFocus: b = !1,
                        ...M
                    } = e, A = r.useRef(null), E = (0, i.s)(t, A), x = (0, d.jH)(a), [I = null, T] = (0, f.i)({
                        prop: w,
                        defaultProp: N,
                        onChange: g
                    }), [C, O] = r.useState(!1), D = (0, c.c)(R), F = y(n), _ = r.useRef(!1), [j, P] = r.useState(0);
                    return r.useEffect(() => {
                        let e = A.current;
                        if (e) return e.addEventListener(p, D), () => e.removeEventListener(p, D)
                    }, [D]), (0, m.jsx)(h, {
                        scope: n,
                        orientation: u,
                        dir: x,
                        loop: l,
                        currentTabStopId: I,
                        onItemFocus: r.useCallback(e => T(e), [T]),
                        onItemShiftTab: r.useCallback(() => O(!0), []),
                        onFocusableItemAdd: r.useCallback(() => P(e => e + 1), []),
                        onFocusableItemRemove: r.useCallback(() => P(e => e - 1), []),
                        children: (0, m.jsx)(s.sG.div, {
                            tabIndex: C || 0 === j ? -1 : 0,
                            "data-orientation": u,
                            ...M,
                            ref: E,
                            style: {
                                outline: "none",
                                ...e.style
                            },
                            onMouseDown: (0, o.m)(e.onMouseDown, () => {
                                _.current = !0
                            }),
                            onFocus: (0, o.m)(e.onFocus, e => {
                                let t = !_.current;
                                if (e.target === e.currentTarget && t && !C) {
                                    let t = new CustomEvent(p, v);
                                    if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                        let e = F().filter(e => e.focusable);
                                        S([e.find(e => e.active), e.find(e => e.id === I), ...e].filter(Boolean).map(e => e.ref.current), b)
                                    }
                                }
                                _.current = !1
                            }),
                            onBlur: (0, o.m)(e.onBlur, () => O(!1))
                        })
                    })
                }),
                x = "RovingFocusGroupItem",
                I = r.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: n,
                        focusable: u = !0,
                        active: i = !1,
                        tabStopId: l,
                        ...c
                    } = e, f = (0, a.B)(), d = l || f, p = M(x, n), v = p.currentTabStopId === d, w = y(n), {
                        onFocusableItemAdd: g,
                        onFocusableItemRemove: R
                    } = p;
                    return r.useEffect(() => {
                        if (u) return g(), () => R()
                    }, [u, g, R]), (0, m.jsx)(N.ItemSlot, {
                        scope: n,
                        id: d,
                        focusable: u,
                        active: i,
                        children: (0, m.jsx)(s.sG.span, {
                            tabIndex: v ? 0 : -1,
                            "data-orientation": p.orientation,
                            ...c,
                            ref: t,
                            onMouseDown: (0, o.m)(e.onMouseDown, e => {
                                u ? p.onItemFocus(d) : e.preventDefault()
                            }),
                            onFocus: (0, o.m)(e.onFocus, () => p.onItemFocus(d)),
                            onKeyDown: (0, o.m)(e.onKeyDown, e => {
                                if ("Tab" === e.key && e.shiftKey) {
                                    p.onItemShiftTab();
                                    return
                                }
                                if (e.target !== e.currentTarget) return;
                                let t = function(e, t, n) {
                                    var r;
                                    let o = (r = e.key, "rtl" !== n ? r : "ArrowLeft" === r ? "ArrowRight" : "ArrowRight" === r ? "ArrowLeft" : r);
                                    if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return T[o]
                                }(e, p.orientation, p.dir);
                                if (void 0 !== t) {
                                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                    e.preventDefault();
                                    let n = w().filter(e => e.focusable).map(e => e.ref.current);
                                    if ("last" === t) n.reverse();
                                    else if ("prev" === t || "next" === t) {
                                        "prev" === t && n.reverse();
                                        let r = n.indexOf(e.currentTarget);
                                        n = p.loop ? function(e, t) {
                                            return e.map((n, r) => e[(t + r) % e.length])
                                        }(n, r + 1) : n.slice(r + 1)
                                    }
                                    setTimeout(() => S(n))
                                }
                            })
                        })
                    })
                });
            I.displayName = x;
            var T = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function S(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = document.activeElement;
                for (let r of e)
                    if (r === n || (r.focus({
                            preventScroll: t
                        }), document.activeElement !== n)) return
            }
            var C = A,
                O = I
        },
        4017: (e, t, n) => {
            n.d(t, {
                m: () => r
            });

            function r(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(r) {
                    if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
                }
            }
        },
        4223: (e, t, n) => {
            n.d(t, {
                A: () => u
            });
            var r = n(364),
                o = n(2432);

            function u(e, t = []) {
                let n = [],
                    i = () => {
                        let t = n.map(e => r.createContext(e));
                        return function(n) {
                            let o = n?.[e] || t;
                            return r.useMemo(() => ({
                                [`__scope${e}`]: {
                                    ...n,
                                    [e]: o
                                }
                            }), [n, o])
                        }
                    };
                return i.scopeName = e, [function(t, u) {
                    let i = r.createContext(u),
                        l = n.length;
                    n = [...n, u];
                    let a = t => {
                        let {
                            scope: n,
                            children: u,
                            ...a
                        } = t, s = n?.[e]?.[l] || i, c = r.useMemo(() => a, Object.values(a));
                        return (0, o.jsx)(s.Provider, {
                            value: c,
                            children: u
                        })
                    };
                    return a.displayName = t + "Provider", [a, function(n, o) {
                        let a = o?.[e]?.[l] || i,
                            s = r.useContext(a);
                        if (s) return s;
                        if (void 0 !== u) return u;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }]
                }, function(...e) {
                    let t = e[0];
                    if (1 === e.length) return t;
                    let n = () => {
                        let n = e.map(e => ({
                            useScope: e(),
                            scopeName: e.scopeName
                        }));
                        return function(e) {
                            let o = n.reduce((t, {
                                useScope: n,
                                scopeName: r
                            }) => {
                                let o = n(e)[`__scope${r}`];
                                return {
                                    ...t,
                                    ...o
                                }
                            }, {});
                            return r.useMemo(() => ({
                                [`__scope${t.scopeName}`]: o
                            }), [o])
                        }
                    };
                    return n.scopeName = t.scopeName, n
                }(i, ...t)]
            }
        },
        4518: (e, t, n) => {
            n.d(t, {
                B: () => a
            });
            var r, o = n(364),
                u = n(936),
                i = (r || (r = n.t(o, 2)))["useId".toString()] || (() => void 0),
                l = 0;

            function a(e) {
                let [t, n] = o.useState(i());
                return (0, u.N)(() => {
                    e || n(e => e ?? String(l++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
        },
        6162: (e, t, n) => {
            n.d(t, {
                N: () => a
            });
            var r = n(364),
                o = n(4223),
                u = n(7419),
                i = n(4793),
                l = n(2432);

            function a(e) {
                let t = e + "CollectionProvider",
                    [n, a] = (0, o.A)(t),
                    [s, c] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    f = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = r.useRef(null), u = r.useRef(new Map).current;
                        return (0, l.jsx)(s, {
                            scope: t,
                            itemMap: u,
                            collectionRef: o,
                            children: n
                        })
                    };
                f.displayName = t;
                let d = e + "CollectionSlot",
                    m = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: r
                        } = e, o = c(d, n), a = (0, u.s)(t, o.collectionRef);
                        return (0, l.jsx)(i.DX, {
                            ref: a,
                            children: r
                        })
                    });
                m.displayName = d;
                let p = e + "CollectionItemSlot",
                    v = "data-radix-collection-item",
                    w = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...a
                        } = e, s = r.useRef(null), f = (0, u.s)(t, s), d = c(p, n);
                        return r.useEffect(() => (d.itemMap.set(s, {
                            ref: s,
                            ...a
                        }), () => void d.itemMap.delete(s))), (0, l.jsx)(i.DX, {
                            [v]: "",
                            ref: f,
                            children: o
                        })
                    });
                return w.displayName = p, [{
                    Provider: f,
                    Slot: m,
                    ItemSlot: w
                }, function(t) {
                    let n = c(e + "CollectionConsumer", t);
                    return r.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                    }, [n.collectionRef, n.itemMap])
                }, a]
            }
        },
        6326: (e, t, n) => {
            n.d(t, {
                hO: () => a,
                sG: () => l
            });
            var r = n(364),
                o = n(4349),
                u = n(4793),
                i = n(2432),
                l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let n = r.forwardRef((e, n) => {
                        let {
                            asChild: r,
                            ...o
                        } = e, l = r ? u.DX : t;
                        return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(l, {
                            ...o,
                            ref: n
                        })
                    });
                    return n.displayName = `Primitive.${t}`, {
                        ...e,
                        [t]: n
                    }
                }, {});

            function a(e, t) {
                e && o.flushSync(() => e.dispatchEvent(t))
            }
        },
        7626: (e, t, n) => {
            n.d(t, {
                i: () => u
            });
            var r = n(364),
                o = n(8926);

            function u({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [u, i] = function({
                    defaultProp: e,
                    onChange: t
                }) {
                    let n = r.useState(e),
                        [u] = n,
                        i = r.useRef(u),
                        l = (0, o.c)(t);
                    return r.useEffect(() => {
                        i.current !== u && (l(u), i.current = u)
                    }, [u, i, l]), n
                }({
                    defaultProp: t,
                    onChange: n
                }), l = void 0 !== e, a = l ? e : u, s = (0, o.c)(n);
                return [a, r.useCallback(t => {
                    if (l) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && s(n)
                    } else i(t)
                }, [l, e, i, s])]
            }
        },
        8926: (e, t, n) => {
            n.d(t, {
                c: () => o
            });
            var r = n(364);

            function o(e) {
                let t = r.useRef(e);
                return r.useEffect(() => {
                    t.current = e
                }), r.useMemo(() => (...e) => t.current?.(...e), [])
            }
        }
    }
]);
