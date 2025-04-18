"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [714], {
        1245: (e, t, n) => {
            n.d(t, {
                N: () => m
            });
            var a = n(2432),
                l = n(364),
                r = n(8446),
                h = n(9690),
                d = n(7027),
                i = n(9840),
                o = n(1961);
            class s extends l.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = t.offsetParent,
                            n = e instanceof HTMLElement && e.offsetWidth || 0,
                            a = this.props.sizeRef.current;
                        a.height = t.offsetHeight || 0, a.width = t.offsetWidth || 0, a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function p(e) {
                let {
                    children: t,
                    isPresent: n,
                    anchorX: r
                } = e, h = (0, l.useId)(), d = (0, l.useRef)(null), i = (0, l.useRef)({
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    right: 0
                }), {
                    nonce: p
                } = (0, l.useContext)(o.Q);
                return (0, l.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: t,
                        top: a,
                        left: l,
                        right: o
                    } = i.current;
                    if (n || !d.current || !e || !t) return;
                    d.current.dataset.motionPopId = h;
                    let s = document.createElement("style");
                    return p && (s.nonce = p), document.head.appendChild(s), s.sheet && s.sheet.insertRule('\n          [data-motion-pop-id="'.concat(h, '"] {\n            position: absolute !important;\n            width: ').concat(e, "px !important;\n            height: ").concat(t, "px !important;\n            ").concat("left" === r ? "left: ".concat(l) : "right: ".concat(o), "px !important;\n            top: ").concat(a, "px !important;\n          }\n        ")), () => {
                        document.head.removeChild(s)
                    }
                }, [n]), (0, a.jsx)(s, {
                    isPresent: n,
                    childRef: d,
                    sizeRef: i,
                    children: l.cloneElement(t, {
                        ref: d
                    })
                })
            }
            let c = e => {
                let {
                    children: t,
                    initial: n,
                    isPresent: r,
                    onExitComplete: d,
                    custom: o,
                    presenceAffectsLayout: s,
                    mode: c,
                    anchorX: y
                } = e, f = (0, h.M)(u), k = (0, l.useId)(), m = !0, x = (0, l.useMemo)(() => (m = !1, {
                    id: k,
                    initial: n,
                    isPresent: r,
                    custom: o,
                    onExitComplete: e => {
                        for (let t of (f.set(e, !0), f.values()))
                            if (!t) return;
                        d && d()
                    },
                    register: e => (f.set(e, !1), () => f.delete(e))
                }), [r, f, d]);
                return s && m && (x = {
                    ...x
                }), (0, l.useMemo)(() => {
                    f.forEach((e, t) => f.set(t, !1))
                }, [r]), l.useEffect(() => {
                    r || f.size || !d || d()
                }, [r]), "popLayout" === c && (t = (0, a.jsx)(p, {
                    isPresent: r,
                    anchorX: y,
                    children: t
                })), (0, a.jsx)(i.t.Provider, {
                    value: x,
                    children: t
                })
            };

            function u() {
                return new Map
            }
            var y = n(6135);
            let f = e => e.key || "";

            function k(e) {
                let t = [];
                return l.Children.forEach(e, e => {
                    (0, l.isValidElement)(e) && t.push(e)
                }), t
            }
            let m = e => {
                let {
                    children: t,
                    custom: n,
                    initial: i = !0,
                    onExitComplete: o,
                    presenceAffectsLayout: s = !0,
                    mode: p = "sync",
                    propagate: u = !1,
                    anchorX: m = "left"
                } = e, [x, M] = (0, y.xQ)(u), v = (0, l.useMemo)(() => k(t), [t]), A = u && !x ? [] : v.map(f), g = (0, l.useRef)(!0), w = (0, l.useRef)(v), C = (0, h.M)(() => new Map), [z, E] = (0, l.useState)(v), [L, R] = (0, l.useState)(v);
                (0, d.E)(() => {
                    g.current = !1, w.current = v;
                    for (let e = 0; e < L.length; e++) {
                        let t = f(L[e]);
                        A.includes(t) ? C.delete(t) : !0 !== C.get(t) && C.set(t, !1)
                    }
                }, [L, A.length, A.join("-")]);
                let q = [];
                if (v !== z) {
                    let e = [...v];
                    for (let t = 0; t < L.length; t++) {
                        let n = L[t],
                            a = f(n);
                        A.includes(a) || (e.splice(t, 0, n), q.push(n))
                    }
                    return "wait" === p && q.length && (e = q), R(k(e)), E(v), null
                }
                let {
                    forceRender: b
                } = (0, l.useContext)(r.L);
                return (0, a.jsx)(a.Fragment, {
                    children: L.map(e => {
                        let t = f(e),
                            l = (!u || !!x) && (v === L || A.includes(t));
                        return (0, a.jsx)(c, {
                            isPresent: l,
                            initial: (!g.current || !!i) && void 0,
                            custom: n,
                            presenceAffectsLayout: s,
                            mode: p,
                            onExitComplete: l ? void 0 : () => {
                                if (!C.has(t)) return;
                                C.set(t, !0);
                                let e = !0;
                                C.forEach(t => {
                                    t || (e = !1)
                                }), e && (null == b || b(), R(w.current), u && (null == M || M()), o && o())
                            },
                            anchorX: m,
                            children: e
                        }, t)
                    })
                })
            }
        },
        2384: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("Shield", [
                ["path", {
                    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
                    key: "oel41y"
                }]
            ])
        },
        2533: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("Rocket", [
                ["path", {
                    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
                    key: "m3kijz"
                }],
                ["path", {
                    d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
                    key: "1fmvmk"
                }],
                ["path", {
                    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
                    key: "1f8sc4"
                }],
                ["path", {
                    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
                    key: "qeys4"
                }]
            ])
        },
        5117: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("ArrowRight", [
                ["path", {
                    d: "M5 12h14",
                    key: "1ays0h"
                }],
                ["path", {
                    d: "m12 5 7 7-7 7",
                    key: "xquz4c"
                }]
            ])
        },
        5779: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("FileCode", [
                ["path", {
                    d: "M10 12.5 8 15l2 2.5",
                    key: "1tg20x"
                }],
                ["path", {
                    d: "m14 12.5 2 2.5-2 2.5",
                    key: "yinavb"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4",
                    key: "tnqrlb"
                }],
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
                    key: "1mlx9k"
                }]
            ])
        },
        6713: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("Cpu", [
                ["rect", {
                    width: "16",
                    height: "16",
                    x: "4",
                    y: "4",
                    rx: "2",
                    key: "14l7u7"
                }],
                ["rect", {
                    width: "6",
                    height: "6",
                    x: "9",
                    y: "9",
                    rx: "1",
                    key: "5aljv4"
                }],
                ["path", {
                    d: "M15 2v2",
                    key: "13l42r"
                }],
                ["path", {
                    d: "M15 20v2",
                    key: "15mkzm"
                }],
                ["path", {
                    d: "M2 15h2",
                    key: "1gxd5l"
                }],
                ["path", {
                    d: "M2 9h2",
                    key: "1bbxkp"
                }],
                ["path", {
                    d: "M20 15h2",
                    key: "19e6y8"
                }],
                ["path", {
                    d: "M20 9h2",
                    key: "19tzq7"
                }],
                ["path", {
                    d: "M9 2v2",
                    key: "165o2o"
                }],
                ["path", {
                    d: "M9 20v2",
                    key: "i2bqo8"
                }]
            ])
        },
        7227: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("Layers", [
                ["path", {
                    d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
                    key: "8b97xw"
                }],
                ["path", {
                    d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",
                    key: "dd6zsq"
                }],
                ["path", {
                    d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",
                    key: "ep9fru"
                }]
            ])
        },
        7262: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("Lock", [
                ["rect", {
                    width: "18",
                    height: "11",
                    x: "3",
                    y: "11",
                    rx: "2",
                    ry: "2",
                    key: "1w4ew1"
                }],
                ["path", {
                    d: "M7 11V7a5 5 0 0 1 10 0v4",
                    key: "fwvmzm"
                }]
            ])
        },
        7997: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("RefreshCw", [
                ["path", {
                    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
                    key: "v9h5vc"
                }],
                ["path", {
                    d: "M21 3v5h-5",
                    key: "1q7to0"
                }],
                ["path", {
                    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
                    key: "3uifl3"
                }],
                ["path", {
                    d: "M8 16H3v5",
                    key: "1cv678"
                }]
            ])
        },
        8057: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("Download", [
                ["path", {
                    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
                    key: "ih7n3h"
                }],
                ["polyline", {
                    points: "7 10 12 15 17 10",
                    key: "2ggqvy"
                }],
                ["line", {
                    x1: "12",
                    x2: "12",
                    y1: "15",
                    y2: "3",
                    key: "1vk2je"
                }]
            ])
        },
        8175: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("Gamepad2", [
                ["line", {
                    x1: "6",
                    x2: "10",
                    y1: "11",
                    y2: "11",
                    key: "1gktln"
                }],
                ["line", {
                    x1: "8",
                    x2: "8",
                    y1: "9",
                    y2: "13",
                    key: "qnk9ow"
                }],
                ["line", {
                    x1: "15",
                    x2: "15.01",
                    y1: "12",
                    y2: "12",
                    key: "krot7o"
                }],
                ["line", {
                    x1: "18",
                    x2: "18.01",
                    y1: "10",
                    y2: "10",
                    key: "1lcuu1"
                }],
                ["path", {
                    d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
                    key: "mfqc10"
                }]
            ])
        },
        8915: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            let a = (0, n(4168).A)("Zap", [
                ["path", {
                    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
                    key: "1xq2db"
                }]
            ])
        }
    }
]);
