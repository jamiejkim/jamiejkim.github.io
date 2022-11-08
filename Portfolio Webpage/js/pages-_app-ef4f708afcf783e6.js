(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[888], {
		4394: function(t, e, n) {
			"use strict";
			n.d(e, {
				K: function() {
					return o
				},
				k: function() {
					return i
				}
			});
			var o = function() {},
				i = function() {}
		},
		3454: function(t, e, n) {
			"use strict";
			var o, i;
			t.exports = (null == (o = n.g.process) ? void 0 : o.env) && "object" === typeof(null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(7663)
		},
		6840: function(t, e, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
				return n(6088)
			}])
		},
		6088: function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, {
				default: function() {
					return A
				}
			});
			var o = n(1799),
				i = n(5893),
				r = n(7294),
				s = n(9304),
				a = n(4735),
				u = n(8868);

			function l() {
				const t = (0, r.useRef)(!1);
				return (0, u.L)((() => (t.current = !0, () => {
					t.current = !1
				})), []), t
			}
			var c = n(240),
				d = n(6681);
			class h extends r.Component {
				getSnapshotBeforeUpdate(t) {
					const e = this.props.childRef.current;
					if (e && t.isPresent && !this.props.isPresent) {
						const t = this.props.sizeRef.current;
						t.height = e.offsetHeight || 0, t.width = e.offsetWidth || 0, t.top = e.offsetTop, t.left = e.offsetLeft
					}
					return null
				}
				componentDidUpdate() {}
				render() {
					return this.props.children
				}
			}

			function p({
				children: t,
				isPresent: e
			}) {
				const n = (0, r.useId)(),
					o = (0, r.useRef)(null),
					i = (0, r.useRef)({
						width: 0,
						height: 0,
						top: 0,
						left: 0
					});
				return (0, r.useInsertionEffect)((() => {
					const {
						width: t,
						height: r,
						top: s,
						left: a
					} = i.current;
					if (e || !o.current || !t || !r) return;
					o.current.dataset.motionPopId = n;
					const u = document.createElement("style");
					return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`\n          [data-motion-pop-id="${n}"] {\n            position: absolute !important;\n            width: ${t}px !important;\n            height: ${r}px !important;\n            top: ${s}px !important;\n            left: ${a}px !important;\n          }\n        `), () => {
						document.head.removeChild(u)
					}
				}), [e]), r.createElement(h, {
					isPresent: e,
					childRef: o,
					sizeRef: i
				}, r.cloneElement(t, {
					ref: o
				}))
			}
			const f = ({
				children: t,
				initial: e,
				isPresent: n,
				onExitComplete: o,
				custom: i,
				presenceAffectsLayout: s,
				mode: a
			}) => {
				const u = (0, d.h)(m),
					l = (0, r.useId)(),
					h = (0, r.useMemo)((() => ({
						id: l,
						initial: e,
						isPresent: n,
						custom: i,
						onExitComplete: t => {
							u.set(t, !0);
							for (const e of u.values())
								if (!e) return;
							o && o()
						},
						register: t => (u.set(t, !1), () => u.delete(t))
					})), s ? void 0 : [n]);
				return (0, r.useMemo)((() => {
					u.forEach(((t, e) => u.set(e, !1)))
				}), [n]), r.useEffect((() => {
					!n && !u.size && o && o()
				}), [n]), "popLayout" === a && (t = r.createElement(p, {
					isPresent: n
				}, t)), r.createElement(c.O.Provider, {
					value: h
				}, t)
			};

			function m() {
				return new Map
			}
			var v = n(5364),
				g = n(5411),
				y = n(6034);
			const x = t => t.key || "";
			const b = ({
				children: t,
				custom: e,
				initial: n = !0,
				onExitComplete: o,
				exitBeforeEnter: i,
				presenceAffectsLayout: c = !0,
				mode: d = "sync"
			}) => {
				i && (d = "wait", (0, y.O)(!1, "Replace exitBeforeEnter with mode='wait'"));
				let [h] = function() {
					const t = l(),
						[e, n] = (0, r.useState)(0),
						o = (0, r.useCallback)((() => {
							t.current && n(e + 1)
						}), [e]);
					return [(0, r.useCallback)((() => a.ZP.postRender(o)), [o]), e]
				}();
				const p = (0, r.useContext)(v.p).forceRender;
				p && (h = p);
				const m = l(),
					b = function(t) {
						const e = [];
						return r.Children.forEach(t, (t => {
							(0, r.isValidElement)(t) && e.push(t)
						})), e
					}(t);
				let w = b;
				const P = new Set,
					E = (0, r.useRef)(w),
					T = (0, r.useRef)(new Map).current,
					A = (0, r.useRef)(!0);
				if ((0, u.L)((() => {
						A.current = !1,
							function(t, e) {
								t.forEach((t => {
									const n = x(t);
									e.set(n, t)
								}))
							}(b, T), E.current = w
					})), (0, g.z)((() => {
						A.current = !0, T.clear(), P.clear()
					})), A.current) return r.createElement(r.Fragment, null, w.map((t => r.createElement(f, {
					key: x(t),
					isPresent: !0,
					initial: !!n && void 0,
					presenceAffectsLayout: c,
					mode: d
				}, t))));
				w = [...w];
				const C = E.current.map(x),
					S = b.map(x),
					V = C.length;
				for (let r = 0; r < V; r++) {
					const t = C[r]; - 1 === S.indexOf(t) && P.add(t)
				}
				return "wait" === d && P.size && (w = []), P.forEach((t => {
					if (-1 !== S.indexOf(t)) return;
					const n = T.get(t);
					if (!n) return;
					const i = C.indexOf(t);
					w.splice(i, 0, r.createElement(f, {
						key: x(n),
						isPresent: !1,
						onExitComplete: () => {
							T.delete(t), P.delete(t);
							const e = E.current.findIndex((e => e.key === t));
							if (E.current.splice(e, 1), !P.size) {
								if (E.current = b, !1 === m.current) return;
								h(), o && o()
							}
						},
						custom: e,
						presenceAffectsLayout: c,
						mode: d
					}, n))
				})), w = w.map((t => {
					const e = t.key;
					return P.has(e) ? t : r.createElement(f, {
						key: x(t),
						isPresent: !0,
						presenceAffectsLayout: c,
						mode: d
					}, t)
				})), "production" !== s.O && "wait" === d && w.length > 1 && console.warn('You\'re attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.'), r.createElement(r.Fragment, null, P.size ? w : w.map((t => (0, r.cloneElement)(t))))
			};
			var w = n(3871),
				P = n(1163),
				E = (n(472), {
					out: {
						opacity: 0,
						transition: {
							duration: .5,
							delay: 0
						}
					},
					in: {
						opacity: 1,
						transition: {
							duration: .5,
							delay: 0
						}
					}
				}),
				T = function(t) {
					var e = t.children,
						n = (0, P.useRouter)().asPath;
					return (0, i.jsx)("main", {
						className: "",
						children: (0, i.jsx)(b, {
							initial: !1,
							mode: "wait",
							onExitComplete: function() {
								return window.scrollTo(0, 0)
							},
							children: (0, i.jsx)(w.E.div, {
								variants: E,
								animate: "in",
								initial: "out",
								exit: "out",
								children: e
							}, n)
						})
					})
				};
			var A = function(t) {
				var e = t.Component,
					n = t.pageProps;
				return (0, i.jsx)(T, {
					children: (0, i.jsx)(e, (0, o.Z)({}, n))
				})
			}
		},
		472: function() {},
		7663: function(t) {
			! function() {
				var e = {
						308: function(t) {
							var e, n, o = t.exports = {};

							function i() {
								throw new Error("setTimeout has not been defined")
							}

							function r() {
								throw new Error("clearTimeout has not been defined")
							}

							function s(t) {
								if (e === setTimeout) return setTimeout(t, 0);
								if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
								try {
									return e(t, 0)
								} catch (o) {
									try {
										return e.call(null, t, 0)
									} catch (o) {
										return e.call(this, t, 0)
									}
								}
							}! function() {
								try {
									e = "function" === typeof setTimeout ? setTimeout : i
								} catch (t) {
									e = i
								}
								try {
									n = "function" === typeof clearTimeout ? clearTimeout : r
								} catch (t) {
									n = r
								}
							}();
							var a, u = [],
								l = !1,
								c = -1;

							function d() {
								l && a && (l = !1, a.length ? u = a.concat(u) : c = -1, u.length && h())
							}

							function h() {
								if (!l) {
									var t = s(d);
									l = !0;
									for (var e = u.length; e;) {
										for (a = u, u = []; ++c < e;) a && a[c].run();
										c = -1, e = u.length
									}
									a = null, l = !1,
										function(t) {
											if (n === clearTimeout) return clearTimeout(t);
											if ((n === r || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
											try {
												n(t)
											} catch (e) {
												try {
													return n.call(null, t)
												} catch (e) {
													return n.call(this, t)
												}
											}
										}(t)
								}
							}

							function p(t, e) {
								this.fun = t, this.array = e
							}

							function f() {}
							o.nextTick = function(t) {
								var e = new Array(arguments.length - 1);
								if (arguments.length > 1)
									for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
								u.push(new p(t, e)), 1 !== u.length || l || s(h)
							}, p.prototype.run = function() {
								this.fun.apply(null, this.array)
							}, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = f, o.addListener = f, o.once = f, o.off = f, o.removeListener = f, o.removeAllListeners = f, o.emit = f, o.prependListener = f, o.prependOnceListener = f, o.listeners = function(t) {
								return []
							}, o.binding = function(t) {
								throw new Error("process.binding is not supported")
							}, o.cwd = function() {
								return "/"
							}, o.chdir = function(t) {
								throw new Error("process.chdir is not supported")
							}, o.umask = function() {
								return 0
							}
						}
					},
					n = {};

				function o(t) {
					var i = n[t];
					if (void 0 !== i) return i.exports;
					var r = n[t] = {
							exports: {}
						},
						s = !0;
					try {
						e[t](r, r.exports, o), s = !1
					} finally {
						s && delete n[t]
					}
					return r.exports
				}
				o.ab = "//";
				var i = o(308);
				t.exports = i
			}()
		},
		1163: function(t, e, n) {
			t.exports = n(387)
		},
		655: function(t, e, n) {
			"use strict";
			n.d(e, {
				_T: function() {
					return o
				}
			});

			function o(t, e) {
				var n = {};
				for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.indexOf(o) < 0 && (n[o] = t[o]);
				if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (o = Object.getOwnPropertySymbols(t); i < o.length; i++) e.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[i]) && (n[o[i]] = t[o[i]])
				}
				return n
			}
			Object.create;
			Object.create
		},
		1799: function(t, e, n) {
			"use strict";

			function o(t, e, n) {
				return e in t ? Object.defineProperty(t, e, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : t[e] = n, t
			}

			function i(t) {
				for (var e = 1; e < arguments.length; e++) {
					var n = null != arguments[e] ? arguments[e] : {},
						i = Object.keys(n);
					"function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
						return Object.getOwnPropertyDescriptor(n, t).enumerable
					})))), i.forEach((function(e) {
						o(t, e, n[e])
					}))
				}
				return t
			}
			n.d(e, {
				Z: function() {
					return i
				}
			})
		},
		2064: function(t, e, n) {
			"use strict";
			n.d(e, {
				j: function() {
					return s
				}
			});
			var o = n(3234),
				i = n(406),
				r = n(1593);

			function s(t, e, n = {}) {
				const s = (0, i.i)(t) ? t : (0, o.B)(t);
				return (0, r.b8)("", s, e, n), {
					stop: () => s.stop(),
					isAnimating: () => s.isAnimating()
				}
			}
		},
		8488: function(t, e, n) {
			"use strict";
			n.d(e, {
				C: function() {
					return o
				}
			});
			const o = t => Array.isArray(t)
		},
		1593: function(t, e, n) {
			"use strict";
			n.d(e, {
				ev: function() {
					return bt
				},
				b8: function() {
					return wt
				}
			});
			var o = n(655),
				i = n(4394),
				r = n(6773);
			const s = .001;

			function a({
				duration: t = 800,
				bounce: e = .25,
				velocity: n = 0,
				mass: o = 1
			}) {
				let a, l;
				(0, i.K)(t <= 1e4, "Spring duration must be 10 seconds or less");
				let c = 1 - e;
				c = (0, r.u)(.05, 1, c), t = (0, r.u)(.01, 10, t / 1e3), c < 1 ? (a = e => {
					const o = e * c,
						i = o * t,
						r = o - n,
						a = u(e, c),
						l = Math.exp(-i);
					return s - r / a * l
				}, l = e => {
					const o = e * c * t,
						i = o * n + n,
						r = Math.pow(c, 2) * Math.pow(e, 2) * t,
						l = Math.exp(-o),
						d = u(Math.pow(e, 2), c);
					return (-a(e) + s > 0 ? -1 : 1) * ((i - r) * l) / d
				}) : (a = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001, l = e => Math.exp(-e * t) * (t * t * (n - e)));
				const d = function(t, e, n) {
					let o = n;
					for (let i = 1; i < 12; i++) o -= t(o) / e(o);
					return o
				}(a, l, 5 / t);
				if (t *= 1e3, isNaN(d)) return {
					stiffness: 100,
					damping: 10,
					duration: t
				}; {
					const e = Math.pow(d, 2) * o;
					return {
						stiffness: e,
						damping: 2 * c * Math.sqrt(o * e),
						duration: t
					}
				}
			}

			function u(t, e) {
				return t * Math.sqrt(1 - e * e)
			}
			const l = ["duration", "bounce"],
				c = ["stiffness", "damping", "mass"];

			function d(t, e) {
				return e.some((e => void 0 !== t[e]))
			}

			function h(t) {
				var {
					from: e = 0,
					to: n = 1,
					restSpeed: i = 2,
					restDelta: r
				} = t, s = (0, o._T)(t, ["from", "to", "restSpeed", "restDelta"]);
				const h = {
					done: !1,
					value: e
				};
				let {
					stiffness: f,
					damping: m,
					mass: v,
					velocity: g,
					duration: y,
					isResolvedFromDuration: x
				} = function(t) {
					let e = Object.assign({
						velocity: 0,
						stiffness: 100,
						damping: 10,
						mass: 1,
						isResolvedFromDuration: !1
					}, t);
					if (!d(t, c) && d(t, l)) {
						const n = a(t);
						e = Object.assign(Object.assign(Object.assign({}, e), n), {
							velocity: 0,
							mass: 1
						}), e.isResolvedFromDuration = !0
					}
					return e
				}(s), b = p, w = p;

				function P() {
					const t = g ? -g / 1e3 : 0,
						o = n - e,
						i = m / (2 * Math.sqrt(f * v)),
						s = Math.sqrt(f / v) / 1e3;
					if (void 0 === r && (r = Math.min(Math.abs(n - e) / 100, .4)), i < 1) {
						const e = u(s, i);
						b = r => {
							const a = Math.exp(-i * s * r);
							return n - a * ((t + i * s * o) / e * Math.sin(e * r) + o * Math.cos(e * r))
						}, w = n => {
							const r = Math.exp(-i * s * n);
							return i * s * r * (Math.sin(e * n) * (t + i * s * o) / e + o * Math.cos(e * n)) - r * (Math.cos(e * n) * (t + i * s * o) - e * o * Math.sin(e * n))
						}
					} else if (1 === i) b = e => n - Math.exp(-s * e) * (o + (t + s * o) * e);
					else {
						const e = s * Math.sqrt(i * i - 1);
						b = r => {
							const a = Math.exp(-i * s * r),
								u = Math.min(e * r, 300);
							return n - a * ((t + i * s * o) * Math.sinh(u) + e * o * Math.cosh(u)) / e
						}
					}
				}
				return P(), {
					next: t => {
						const e = b(t);
						if (x) h.done = t >= y;
						else {
							const o = 1e3 * w(t),
								s = Math.abs(o) <= i,
								a = Math.abs(n - e) <= r;
							h.done = s && a
						}
						return h.value = h.done ? n : e, h
					},
					flipTarget: () => {
						g = -g, [e, n] = [n, e], P()
					}
				}
			}
			h.needsInterpolation = (t, e) => "string" === typeof t || "string" === typeof e;
			const p = t => 0;
			var f = n(9326),
				m = n(2453),
				v = n(2960),
				g = n(8059),
				y = n(4582);

			function x(t, e, n) {
				return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
			}

			function b({
				hue: t,
				saturation: e,
				lightness: n,
				alpha: o
			}) {
				t /= 360, n /= 100;
				let i = 0,
					r = 0,
					s = 0;
				if (e /= 100) {
					const o = n < .5 ? n * (1 + e) : n + e - n * e,
						a = 2 * n - o;
					i = x(a, o, t + 1 / 3), r = x(a, o, t), s = x(a, o, t - 1 / 3)
				} else i = r = s = n;
				return {
					red: Math.round(255 * i),
					green: Math.round(255 * r),
					blue: Math.round(255 * s),
					alpha: o
				}
			}
			const w = (t, e, n) => {
					const o = t * t,
						i = e * e;
					return Math.sqrt(Math.max(0, n * (i - o) + o))
				},
				P = [v.$, g.m, y.J],
				E = t => P.find((e => e.test(t))),
				T = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
				A = (t, e) => {
					let n = E(t),
						o = E(e);
					(0, i.k)(!!n, T(t)), (0, i.k)(!!o, T(e));
					let r = n.parse(t),
						s = o.parse(e);
					n === y.J && (r = b(r), n = g.m), o === y.J && (s = b(s), o = g.m);
					const a = Object.assign({}, r);
					return t => {
						for (const e in a) "alpha" !== e && (a[e] = w(r[e], s[e], t));
						return a.alpha = (0, m.C)(r.alpha, s.alpha, t), n.transform(a)
					}
				};
			var C = n(7405),
				S = n(8407),
				V = n(734),
				R = n(9897);

			function L(t, e) {
				return (0, V.e)(t) ? n => (0, m.C)(t, e, n) : C.$.test(t) ? A(t, e) : j(t, e)
			}
			const M = (t, e) => {
					const n = [...t],
						o = n.length,
						i = t.map(((t, n) => L(t, e[n])));
					return t => {
						for (let e = 0; e < o; e++) n[e] = i[e](t);
						return n
					}
				},
				k = (t, e) => {
					const n = Object.assign(Object.assign({}, t), e),
						o = {};
					for (const i in n) void 0 !== t[i] && void 0 !== e[i] && (o[i] = L(t[i], e[i]));
					return t => {
						for (const e in o) n[e] = o[e](t);
						return n
					}
				};

			function O(t) {
				const e = S.P.parse(t),
					n = e.length;
				let o = 0,
					i = 0,
					r = 0;
				for (let s = 0; s < n; s++) o || "number" === typeof e[s] ? o++ : void 0 !== e[s].hue ? r++ : i++;
				return {
					parsed: e,
					numNumbers: o,
					numRGB: i,
					numHSL: r
				}
			}
			const j = (t, e) => {
					const n = S.P.createTransformer(e),
						o = O(t),
						r = O(e);
					return o.numHSL === r.numHSL && o.numRGB === r.numRGB && o.numNumbers >= r.numNumbers ? (0, R.z)(M(o.parsed, r.parsed), n) : ((0, i.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
				},
				D = (t, e) => n => (0, m.C)(t, e, n);

			function F(t, e, n) {
				const o = [],
					i = n || ("number" === typeof(r = t[0]) ? D : "string" === typeof r ? C.$.test(r) ? A : j : Array.isArray(r) ? M : "object" === typeof r ? k : void 0);
				var r;
				const s = t.length - 1;
				for (let a = 0; a < s; a++) {
					let n = i(t[a], t[a + 1]);
					if (e) {
						const t = Array.isArray(e) ? e[a] : e;
						n = (0, R.z)(t, n)
					}
					o.push(n)
				}
				return o
			}

			function B(t, e, {
				clamp: n = !0,
				ease: o,
				mixer: s
			} = {}) {
				const a = t.length;
				(0, i.k)(a === e.length, "Both input and output ranges must be the same length"), (0, i.k)(!o || !Array.isArray(o) || o.length === a - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[a - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
				const u = F(e, o, s),
					l = 2 === a ? function([t, e], [n]) {
						return o => n((0, f.Y)(t, e, o))
					}(t, u) : function(t, e) {
						const n = t.length,
							o = n - 1;
						return i => {
							let r = 0,
								s = !1;
							if (i <= t[0] ? s = !0 : i >= t[o] && (r = o - 1, s = !0), !s) {
								let e = 1;
								for (; e < n && !(t[e] > i || e === o); e++);
								r = e - 1
							}
							const a = (0, f.Y)(t[r], t[r + 1], i);
							return e[r](a)
						}
					}(t, u);
				return n ? e => l((0, r.u)(t[0], t[a - 1], e)) : l
			}
			var I = n(4710);

			function U(t, e) {
				return t.map((() => e || I.mZ)).splice(0, t.length - 1)
			}

			function $({
				from: t = 0,
				to: e = 1,
				ease: n,
				offset: o,
				duration: i = 300
			}) {
				const r = {
						done: !1,
						value: t
					},
					s = Array.isArray(e) ? e : [t, e],
					a = function(t, e) {
						return t.map((t => t * e))
					}(o && o.length === s.length ? o : function(t) {
						const e = t.length;
						return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
					}(s), i);

				function u() {
					return B(a, s, {
						ease: Array.isArray(n) ? n : U(s, n)
					})
				}
				let l = u();
				return {
					next: t => (r.value = l(t), r.done = t >= i, r),
					flipTarget: () => {
						s.reverse(), l = u()
					}
				}
			}
			const N = {
				keyframes: $,
				spring: h,
				decay: function({
					velocity: t = 0,
					from: e = 0,
					power: n = .8,
					timeConstant: o = 350,
					restDelta: i = .5,
					modifyTarget: r
				}) {
					const s = {
						done: !1,
						value: e
					};
					let a = n * t;
					const u = e + a,
						l = void 0 === r ? u : r(u);
					return l !== u && (a = l - e), {
						next: t => {
							const e = -a * Math.exp(-t / o);
							return s.done = !(e > i || e < -i), s.value = s.done ? l : l + e, s
						},
						flipTarget: () => {}
					}
				}
			};
			var z = n(4735);

			function Y(t, e, n = 0) {
				return t - e - n
			}
			const W = t => {
				const e = ({
					delta: e
				}) => t(e);
				return {
					start: () => z.ZP.update(e, !0),
					stop: () => z.qY.update(e)
				}
			};

			function H(t) {
				var e, n, {
						from: i,
						autoplay: r = !0,
						driver: s = W,
						elapsed: a = 0,
						repeat: u = 0,
						repeatType: l = "loop",
						repeatDelay: c = 0,
						onPlay: d,
						onStop: p,
						onComplete: f,
						onRepeat: m,
						onUpdate: v
					} = t,
					g = (0, o._T)(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
				let y, x, b, {
						to: w
					} = g,
					P = 0,
					E = g.duration,
					T = !1,
					A = !0;
				const C = function(t) {
					if (Array.isArray(t.to)) return $;
					if (N[t.type]) return N[t.type];
					const e = new Set(Object.keys(t));
					return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? $ : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? h : $
				}(g);
				(null === (n = (e = C).needsInterpolation) || void 0 === n ? void 0 : n.call(e, i, w)) && (b = B([0, 100], [i, w], {
					clamp: !1
				}), i = 0, w = 100);
				const S = C(Object.assign(Object.assign({}, g), {
					from: i,
					to: w
				}));

				function V() {
					P++, "reverse" === l ? (A = P % 2 === 0, a = function(t, e, n = 0, o = !0) {
						return o ? Y(e + -t, e, n) : e - (t - e) + n
					}(a, E, c, A)) : (a = Y(a, E, c), "mirror" === l && S.flipTarget()), T = !1, m && m()
				}

				function R(t) {
					if (A || (t = -t), a += t, !T) {
						const t = S.next(Math.max(0, a));
						x = t.value, b && (x = b(x)), T = A ? t.done : a <= 0
					}
					null === v || void 0 === v || v(x), T && (0 === P && (null !== E && void 0 !== E || (E = a)), P < u ? function(t, e, n, o) {
						return o ? t >= e + n : t <= -n
					}(a, E, c, A) && V() : (y.stop(), f && f()))
				}
				return r && (null === d || void 0 === d || d(), y = s(R), y.start()), {
					stop: () => {
						null === p || void 0 === p || p(), y.stop()
					}
				}
			}
			var Z = n(9296);
			var X = n(6917);
			const q = (t, e) => 1 - 3 * e + 3 * t,
				G = (t, e) => 3 * e - 6 * t,
				K = t => 3 * t,
				_ = (t, e, n) => ((q(e, n) * t + G(e, n)) * t + K(e)) * t,
				J = (t, e, n) => 3 * q(e, n) * t * t + 2 * G(e, n) * t + K(e);
			const Q = .1;

			function tt(t, e, n, o) {
				if (t === e && n === o) return I.GE;
				const i = new Float32Array(11);
				for (let s = 0; s < 11; ++s) i[s] = _(s * Q, t, n);

				function r(e) {
					let o = 0,
						r = 1;
					for (; 10 !== r && i[r] <= e; ++r) o += Q;
					--r;
					const s = o + (e - i[r]) / (i[r + 1] - i[r]) * Q,
						a = J(s, t, n);
					return a >= .001 ? function(t, e, n, o) {
						for (let i = 0; i < 8; ++i) {
							const i = J(e, n, o);
							if (0 === i) return e;
							e -= (_(e, n, o) - t) / i
						}
						return e
					}(e, s, t, n) : 0 === a ? s : function(t, e, n, o, i) {
						let r, s, a = 0;
						do {
							s = e + (n - e) / 2, r = _(s, o, i) - t, r > 0 ? n = s : e = s
						} while (Math.abs(r) > 1e-7 && ++a < 10);
						return s
					}(e, o, o + Q, t, n)
				}
				return t => 0 === t || 1 === t ? t : _(r(t), e, o)
			}
			const et = {
					linear: I.GE,
					easeIn: I.YQ,
					easeInOut: I.mZ,
					easeOut: I.Vv,
					circIn: I.Z7,
					circInOut: I.X7,
					circOut: I.Bn,
					backIn: I.G2,
					backInOut: I.XL,
					backOut: I.CG,
					anticipate: I.LU,
					bounceIn: I.h9,
					bounceInOut: I.yD,
					bounceOut: I.gJ
				},
				nt = t => {
					if (Array.isArray(t)) {
						(0, i.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
						const [e, n, o, r] = t;
						return tt(e, n, o, r)
					}
					return "string" === typeof t ? ((0, i.k)(void 0 !== et[t], `Invalid easing type '${t}'`), et[t]) : t
				},
				ot = (t, e) => "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !S.P.test(e) || e.startsWith("url(")));
			var it = n(8488);
			const rt = () => ({
					type: "spring",
					stiffness: 500,
					damping: 25,
					restSpeed: 10
				}),
				st = t => ({
					type: "spring",
					stiffness: 550,
					damping: 0 === t ? 2 * Math.sqrt(550) : 30,
					restSpeed: 10
				}),
				at = () => ({
					type: "keyframes",
					ease: "linear",
					duration: .3
				}),
				ut = t => ({
					type: "keyframes",
					duration: .8,
					values: t
				}),
				lt = {
					x: rt,
					y: rt,
					z: rt,
					rotate: rt,
					rotateX: rt,
					rotateY: rt,
					rotateZ: rt,
					scaleX: st,
					scaleY: st,
					scale: st,
					opacity: at,
					backgroundColor: at,
					color: at,
					default: st
				},
				ct = (t, e) => {
					let n;
					return n = (0, it.C)(e) ? ut : lt[t] || lt.default, {
						to: e,
						...n(e)
					}
				};
			var dt = n(9135);
			const ht = !1;
			var pt = n(8715);
			let ft = !1;

			function mt({
				ease: t,
				times: e,
				yoyo: n,
				flip: o,
				loop: r,
				...s
			}) {
				const a = {
					...s
				};
				return e && (a.offset = e), s.duration && (a.duration = (0, X.w)(s.duration)), s.repeatDelay && (a.repeatDelay = (0, X.w)(s.repeatDelay)), t && (a.ease = (t => Array.isArray(t) && "number" !== typeof t[0])(t) ? t.map(nt) : nt(t)), "tween" === s.type && (a.type = "keyframes"), (n || r || o) && ((0, i.K)(!ft, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), ft = !0, n ? a.repeatType = "reverse" : r ? a.repeatType = "loop" : o && (a.repeatType = "mirror"), a.repeat = r || n || o || s.repeat), "spring" !== s.type && (a.type = "keyframes"), a
			}

			function vt(t, e, n) {
				return Array.isArray(e.to) && void 0 === t.duration && (t.duration = .8),
					function(t) {
						Array.isArray(t.to) && null === t.to[0] && (t.to = [...t.to], t.to[0] = t.from)
					}(e),
					function({
						when: t,
						delay: e,
						delayChildren: n,
						staggerChildren: o,
						staggerDirection: i,
						repeat: r,
						repeatType: s,
						repeatDelay: a,
						from: u,
						...l
					}) {
						return !!Object.keys(l).length
					}(t) || (t = {
						...t,
						...ct(n, e.to)
					}), {
						...e,
						...mt(t)
					}
			}

			function gt(t, e, n, o, r) {
				const s = bt(o, t) || {};
				let a = void 0 !== s.from ? s.from : e.get();
				const u = ot(t, n);
				"none" === a && u && "string" === typeof n ? a = (0, dt.T)(t, n) : yt(a) && "string" === typeof n ? a = xt(n) : !Array.isArray(n) && yt(n) && "string" === typeof a && (n = xt(a));
				const l = ot(t, a);
				return (0, i.K)(l === u, `You are trying to animate ${t} from "${a}" to "${n}". ${a} is not an animatable value - to enable this animation set ${a} to a value animatable to ${n} via the \`style\` property.`), l && u && !1 !== s.type ? function() {
					const o = {
						from: a,
						to: n,
						velocity: e.getVelocity(),
						onComplete: r,
						onUpdate: t => e.set(t)
					};
					return "inertia" === s.type || "decay" === s.type ? function({
						from: t = 0,
						velocity: e = 0,
						min: n,
						max: o,
						power: i = .8,
						timeConstant: r = 750,
						bounceStiffness: s = 500,
						bounceDamping: a = 10,
						restDelta: u = 1,
						modifyTarget: l,
						driver: c,
						onUpdate: d,
						onComplete: h,
						onStop: p
					}) {
						let f;

						function m(t) {
							return void 0 !== n && t < n || void 0 !== o && t > o
						}

						function v(t) {
							return void 0 === n ? o : void 0 === o || Math.abs(n - t) < Math.abs(o - t) ? n : o
						}

						function g(t) {
							null === f || void 0 === f || f.stop(), f = H(Object.assign(Object.assign({}, t), {
								driver: c,
								onUpdate: e => {
									var n;
									null === d || void 0 === d || d(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
								},
								onComplete: h,
								onStop: p
							}))
						}

						function y(t) {
							g(Object.assign({
								type: "spring",
								stiffness: s,
								damping: a,
								restDelta: u
							}, t))
						}
						if (m(t)) y({
							from: t,
							velocity: e,
							to: v(t)
						});
						else {
							let o = i * e + t;
							"undefined" !== typeof l && (o = l(o));
							const s = v(o),
								a = s === n ? -1 : 1;
							let c, d;
							const h = t => {
								c = d, d = t, e = (0, Z.R)(t - c, (0, z.$B)().delta), (1 === a && t > s || -1 === a && t < s) && y({
									from: t,
									to: s,
									velocity: e
								})
							};
							g({
								type: "decay",
								from: t,
								velocity: e,
								timeConstant: r,
								power: i,
								restDelta: u,
								modifyTarget: l,
								onUpdate: m(o) ? h : void 0
							})
						}
						return {
							stop: () => null === f || void 0 === f ? void 0 : f.stop()
						}
					}({
						...o,
						...s
					}) : H({
						...vt(s, o, t),
						onUpdate: t => {
							o.onUpdate(t), s.onUpdate && s.onUpdate(t)
						},
						onComplete: () => {
							o.onComplete(), s.onComplete && s.onComplete()
						}
					})
				} : function() {
					const t = (0, pt.Y)(n);
					return e.set(t), r(), s.onUpdate && s.onUpdate(t), s.onComplete && s.onComplete(), {
						stop: () => {}
					}
				}
			}

			function yt(t) {
				return 0 === t || "string" === typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
			}

			function xt(t) {
				return "number" === typeof t ? 0 : (0, dt.T)("", t)
			}

			function bt(t, e) {
				return t[e] || t.default || t
			}

			function wt(t, e, n, o = {}) {
				return ht && (o = {
					type: !1
				}), e.start((i => {
					let r, s;
					const a = gt(t, e, n, o, i),
						u = function(t, e) {
							var n, o;
							return null !== (o = null !== (n = (bt(t, e) || {}).delay) && void 0 !== n ? n : t.delay) && void 0 !== o ? o : 0
						}(o, t),
						l = () => s = a();
					return u ? r = window.setTimeout(l, (0, X.w)(u)) : l(), () => {
						clearTimeout(r), s && s.stop()
					}
				}))
			}
		},
		5364: function(t, e, n) {
			"use strict";
			n.d(e, {
				p: function() {
					return o
				}
			});
			const o = (0, n(7294).createContext)({})
		},
		240: function(t, e, n) {
			"use strict";
			n.d(e, {
				O: function() {
					return o
				}
			});
			const o = (0, n(7294).createContext)(null)
		},
		3871: function(t, e, n) {
			"use strict";
			n.d(e, {
				E: function() {
					return ci
				}
			});
			var o = n(7294);
			const i = (0, o.createContext)({
					transformPagePoint: t => t,
					isStatic: !1,
					reducedMotion: "never"
				}),
				r = (0, o.createContext)({});
			var s = n(240),
				a = n(8868);
			const u = (0, o.createContext)({
				strict: !1
			});

			function l(t, e, n, l) {
				const c = (0, o.useContext)(r).visualElement,
					d = (0, o.useContext)(u),
					h = (0, o.useContext)(s.O),
					p = (0, o.useContext)(i).reducedMotion,
					f = (0, o.useRef)(void 0);
				l = l || d.renderer, !f.current && l && (f.current = l(t, {
					visualState: e,
					parent: c,
					props: n,
					presenceId: h ? h.id : void 0,
					blockInitialAnimation: !!h && !1 === h.initial,
					reducedMotionConfig: p
				}));
				const m = f.current;
				return (0, a.L)((() => {
					m && m.syncRender()
				})), (0, o.useEffect)((() => {
					m && m.animationState && m.animationState.animateChanges()
				})), (0, a.L)((() => () => m && m.notifyUnmount()), []), m
			}

			function c(t) {
				return "object" === typeof t && Object.prototype.hasOwnProperty.call(t, "current")
			}

			function d(t) {
				return "string" === typeof t || Array.isArray(t)
			}

			function h(t) {
				return "object" === typeof t && "function" === typeof t.start
			}
			const p = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

			function f(t) {
				return h(t.animate) || p.some((e => d(t[e])))
			}

			function m(t) {
				return Boolean(f(t) || t.variants)
			}

			function v(t) {
				const {
					initial: e,
					animate: n
				} = function(t, e) {
					if (f(t)) {
						const {
							initial: e,
							animate: n
						} = t;
						return {
							initial: !1 === e || d(e) ? e : void 0,
							animate: d(n) ? n : void 0
						}
					}
					return !1 !== t.inherit ? e : {}
				}(t, (0, o.useContext)(r));
				return (0, o.useMemo)((() => ({
					initial: e,
					animate: n
				})), [g(e), g(n)])
			}

			function g(t) {
				return Array.isArray(t) ? t.join(" ") : t
			}
			const y = t => ({
					isEnabled: e => t.some((t => !!e[t]))
				}),
				x = {
					measureLayout: y(["layout", "layoutId", "drag"]),
					animation: y(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
					exit: y(["exit"]),
					drag: y(["drag", "dragControls"]),
					focus: y(["whileFocus"]),
					hover: y(["whileHover", "onHoverStart", "onHoverEnd"]),
					tap: y(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
					pan: y(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
					inView: y(["whileInView", "onViewportEnter", "onViewportLeave"])
				};
			var b = n(1741),
				w = n(6681);
			const P = {
				hasAnimatedSinceResize: !0,
				hasEverUpdated: !1
			};
			let E = 1;
			var T = n(5364);
			class A extends o.Component {
				getSnapshotBeforeUpdate() {
					const {
						visualElement: t,
						props: e
					} = this.props;
					return t && t.setProps(e), null
				}
				componentDidUpdate() {}
				render() {
					return this.props.children
				}
			}
			const C = (0, o.createContext)({}),
				S = Symbol.for("motionComponentSymbol");

			function V({
				preloadedFeatures: t,
				createVisualElement: e,
				projectionNodeConstructor: n,
				useRender: s,
				useVisualState: a,
				Component: d
			}) {
				t && function(t) {
					for (const e in t) "projectionNodeConstructor" === e ? x.projectionNodeConstructor = t[e] : x[e].Component = t[e]
				}(t);
				const h = (0, o.forwardRef)((function(h, p) {
					const f = {
							...(0, o.useContext)(i),
							...h,
							layoutId: R(h)
						},
						{
							isStatic: m
						} = f;
					let g = null;
					const y = v(h),
						T = m ? void 0 : (0, w.h)((() => {
							if (P.hasEverUpdated) return E++
						})),
						S = a(h, m);
					if (!m && b.j) {
						y.visualElement = l(d, S, f, e);
						const i = (0, o.useContext)(u).strict,
							r = (0, o.useContext)(C);
						y.visualElement && (g = y.visualElement.loadFeatures(f, i, t, T, n || x.projectionNodeConstructor, r))
					}
					return o.createElement(A, {
						visualElement: y.visualElement,
						props: f
					}, g, o.createElement(r.Provider, {
						value: y
					}, s(d, h, T, function(t, e, n) {
						return (0, o.useCallback)((o => {
							o && t.mount && t.mount(o), e && (o ? e.mount(o) : e.unmount()), n && ("function" === typeof n ? n(o) : c(n) && (n.current = o))
						}), [e])
					}(S, y.visualElement, p), S, m, y.visualElement)))
				}));
				return h[S] = d, h
			}

			function R({
				layoutId: t
			}) {
				const e = (0, o.useContext)(T.p).id;
				return e && void 0 !== t ? e + "-" + t : t
			}

			function L(t) {
				function e(e, n = {}) {
					return V(t(e, n))
				}
				if ("undefined" === typeof Proxy) return e;
				const n = new Map;
				return new Proxy(e, {
					get: (t, o) => (n.has(o) || n.set(o, e(o)), n.get(o))
				})
			}
			const M = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

			function k(t) {
				return "string" === typeof t && !t.includes("-") && !!(M.indexOf(t) > -1 || /[A-Z]/.test(t))
			}
			const O = {};
			const j = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
				D = new Set(j);

			function F(t, {
				layout: e,
				layoutId: n
			}) {
				return D.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!O[t] || "opacity" === t)
			}
			var B = n(406);
			const I = {
					x: "translateX",
					y: "translateY",
					z: "translateZ",
					transformPerspective: "perspective"
				},
				U = (t, e) => j.indexOf(t) - j.indexOf(e);

			function $(t) {
				return t.startsWith("--")
			}
			const N = (t, e) => e && "number" === typeof t ? e.transform(t) : t;
			var z = n(6173);

			function Y(t, e, n, o) {
				const {
					style: i,
					vars: r,
					transform: s,
					transformKeys: a,
					transformOrigin: u
				} = t;
				a.length = 0;
				let l = !1,
					c = !1,
					d = !0;
				for (const h in e) {
					const t = e[h];
					if ($(h)) {
						r[h] = t;
						continue
					}
					const n = z.j[h],
						o = N(t, n);
					if (D.has(h)) {
						if (l = !0, s[h] = o, a.push(h), !d) continue;
						t !== (n.default || 0) && (d = !1)
					} else h.startsWith("origin") ? (c = !0, u[h] = o) : i[h] = o
				}
				if (e.transform || (l || o ? i.transform = function({
						transform: t,
						transformKeys: e
					}, {
						enableHardwareAcceleration: n = !0,
						allowTransformNone: o = !0
					}, i, r) {
						let s = "";
						e.sort(U);
						for (const a of e) s += `${I[a]||a}(${t[a]}) `;
						return n && !t.z && (s += "translateZ(0)"), s = s.trim(), r ? s = r(t, i ? "" : s) : o && i && (s = "none"), s
					}(t, n, d, o) : i.transform && (i.transform = "none")), c) {
					const {
						originX: t = "50%",
						originY: e = "50%",
						originZ: n = 0
					} = u;
					i.transformOrigin = `${t} ${e} ${n}`
				}
			}
			const W = () => ({
				style: {},
				transform: {},
				transformKeys: [],
				transformOrigin: {},
				vars: {}
			});

			function H(t, e, n) {
				for (const o in e)(0, B.i)(e[o]) || F(o, n) || (t[o] = e[o])
			}

			function Z(t, e, n) {
				const i = {};
				return H(i, t.style || {}, t), Object.assign(i, function({
					transformTemplate: t
				}, e, n) {
					return (0, o.useMemo)((() => {
						const o = {
							style: {},
							transform: {},
							transformKeys: [],
							transformOrigin: {},
							vars: {}
						};
						return Y(o, e, {
							enableHardwareAcceleration: !n
						}, t), Object.assign({}, o.vars, o.style)
					}), [e])
				}(t, e, n)), t.transformValues ? t.transformValues(i) : i
			}

			function X(t, e, n) {
				const o = {},
					i = Z(t, e, n);
				return t.drag && !1 !== t.dragListener && (o.draggable = !1, i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none", i.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), o.style = i, o
			}
			const q = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

			function G(t) {
				return q.has(t)
			}
			let K = t => !G(t);
			try {
				(_ = require("@emotion/is-prop-valid").default) && (K = t => t.startsWith("on") ? !G(t) : _(t))
			} catch (di) {}
			var _;
			var J = n(2969);

			function Q(t, e, n) {
				return "string" === typeof t ? t : J.px.transform(e + n * t)
			}
			const tt = {
					offset: "stroke-dashoffset",
					array: "stroke-dasharray"
				},
				et = {
					offset: "strokeDashoffset",
					array: "strokeDasharray"
				};

			function nt(t, {
				attrX: e,
				attrY: n,
				originX: o,
				originY: i,
				pathLength: r,
				pathSpacing: s = 1,
				pathOffset: a = 0,
				...u
			}, l, c) {
				Y(t, u, l, c), t.attrs = t.style, t.style = {};
				const {
					attrs: d,
					style: h,
					dimensions: p
				} = t;
				d.transform && (p && (h.transform = d.transform), delete d.transform), p && (void 0 !== o || void 0 !== i || h.transform) && (h.transformOrigin = function(t, e, n) {
					return `${Q(e,t.x,t.width)} ${Q(n,t.y,t.height)}`
				}(p, void 0 !== o ? o : .5, void 0 !== i ? i : .5)), void 0 !== e && (d.x = e), void 0 !== n && (d.y = n), void 0 !== r && function(t, e, n = 1, o = 0, i = !0) {
					t.pathLength = 1;
					const r = i ? tt : et;
					t[r.offset] = J.px.transform(-o);
					const s = J.px.transform(e),
						a = J.px.transform(n);
					t[r.array] = `${s} ${a}`
				}(d, r, s, a, !1)
			}
			const ot = () => ({
				style: {},
				transform: {},
				transformKeys: [],
				transformOrigin: {},
				vars: {},
				attrs: {}
			});

			function it(t, e) {
				const n = (0, o.useMemo)((() => {
					const n = {
						style: {},
						transform: {},
						transformKeys: [],
						transformOrigin: {},
						vars: {},
						attrs: {}
					};
					return nt(n, e, {
						enableHardwareAcceleration: !1
					}, t.transformTemplate), {
						...n.attrs,
						style: {
							...n.style
						}
					}
				}), [e]);
				if (t.style) {
					const e = {};
					H(e, t.style, t), n.style = {
						...e,
						...n.style
					}
				}
				return n
			}

			function rt(t = !1) {
				return (e, n, i, r, {
					latestValues: s
				}, a) => {
					const u = (k(e) ? it : X)(n, s, a),
						l = function(t, e, n) {
							const o = {};
							for (const i in t)(K(i) || !0 === n && G(i) || !e && !G(i) || t.draggable && i.startsWith("onDrag")) && (o[i] = t[i]);
							return o
						}(n, "string" === typeof e, t),
						c = {
							...l,
							...u,
							ref: r
						};
					return i && (c["data-projection-id"] = i), (0, o.createElement)(e, c)
				}
			}
			const st = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

			function at(t, {
				style: e,
				vars: n
			}, o, i) {
				Object.assign(t.style, e, i && i.getProjectionStyles(o));
				for (const r in n) t.style.setProperty(r, n[r])
			}
			const ut = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

			function lt(t, e, n, o) {
				at(t, e, void 0, o);
				for (const i in e.attrs) t.setAttribute(ut.has(i) ? i : st(i), e.attrs[i])
			}

			function ct(t) {
				const {
					style: e
				} = t, n = {};
				for (const o in e)((0, B.i)(e[o]) || F(o, t)) && (n[o] = e[o]);
				return n
			}

			function dt(t) {
				const e = ct(t);
				for (const n in t)
					if ((0, B.i)(t[n])) {
						e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]
					} return e
			}

			function ht(t, e, n, o = {}, i = {}) {
				return "function" === typeof e && (e = e(void 0 !== n ? n : t.custom, o, i)), "string" === typeof e && (e = t.variants && t.variants[e]), "function" === typeof e && (e = e(void 0 !== n ? n : t.custom, o, i)), e
			}
			var pt = n(8715);

			function ft(t) {
				const e = (0, B.i)(t) ? t.get() : t;
				return (0, pt.p)(e) ? e.toValue() : e
			}
			const mt = t => (e, n) => {
				const i = (0, o.useContext)(r),
					a = (0, o.useContext)(s.O),
					u = () => function({
						scrapeMotionValuesFromProps: t,
						createRenderState: e,
						onMount: n
					}, o, i, r) {
						const s = {
							latestValues: vt(o, i, r, t),
							renderState: e()
						};
						return n && (s.mount = t => n(o, t, s)), s
					}(t, e, i, a);
				return n ? u() : (0, w.h)(u)
			};

			function vt(t, e, n, o) {
				const i = {},
					r = o(t);
				for (const h in r) i[h] = ft(r[h]);
				let {
					initial: s,
					animate: a
				} = t;
				const u = f(t),
					l = m(t);
				e && l && !u && !1 !== t.inherit && (void 0 === s && (s = e.initial), void 0 === a && (a = e.animate));
				let c = !!n && !1 === n.initial;
				c = c || !1 === s;
				const d = c ? a : s;
				if (d && "boolean" !== typeof d && !h(d)) {
					(Array.isArray(d) ? d : [d]).forEach((e => {
						const n = ht(t, e);
						if (!n) return;
						const {
							transitionEnd: o,
							transition: r,
							...s
						} = n;
						for (const t in s) {
							let e = s[t];
							if (Array.isArray(e)) {
								e = e[c ? e.length - 1 : 0]
							}
							null !== e && (i[t] = e)
						}
						for (const t in o) i[t] = o[t]
					}))
				}
				return i
			}
			const gt = {
					useVisualState: mt({
						scrapeMotionValuesFromProps: dt,
						createRenderState: ot,
						onMount: (t, e, {
							renderState: n,
							latestValues: o
						}) => {
							try {
								n.dimensions = "function" === typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
							} catch (i) {
								n.dimensions = {
									x: 0,
									y: 0,
									width: 0,
									height: 0
								}
							}
							nt(n, o, {
								enableHardwareAcceleration: !1
							}, t.transformTemplate), lt(e, n)
						}
					})
				},
				yt = {
					useVisualState: mt({
						scrapeMotionValuesFromProps: ct,
						createRenderState: W
					})
				};
			var xt;

			function bt(t, e, n, o = {
				passive: !0
			}) {
				return t.addEventListener(e, n, o), () => t.removeEventListener(e, n)
			}

			function wt(t, e, n, i) {
				(0, o.useEffect)((() => {
					const o = t.current;
					if (n && o) return bt(o, e, n, i)
				}), [t, e, n, i])
			}

			function Pt(t) {
				return "undefined" !== typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
			}

			function Et(t) {
				return !!t.touches
			}! function(t) {
				t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
			}(xt || (xt = {}));
			const Tt = {
				pageX: 0,
				pageY: 0
			};

			function At(t, e = "page") {
				const n = t.touches[0] || t.changedTouches[0] || Tt;
				return {
					x: n[e + "X"],
					y: n[e + "Y"]
				}
			}

			function Ct(t, e = "page") {
				return {
					x: t[e + "X"],
					y: t[e + "Y"]
				}
			}

			function St(t, e = "page") {
				return {
					point: Et(t) ? At(t, e) : Ct(t, e)
				}
			}
			const Vt = (t, e = !1) => {
					const n = e => t(e, St(e));
					return e ? (o = n, t => {
						const e = t instanceof MouseEvent;
						(!e || e && 0 === t.button) && o(t)
					}) : n;
					var o
				},
				Rt = {
					pointerdown: "mousedown",
					pointermove: "mousemove",
					pointerup: "mouseup",
					pointercancel: "mousecancel",
					pointerover: "mouseover",
					pointerout: "mouseout",
					pointerenter: "mouseenter",
					pointerleave: "mouseleave"
				},
				Lt = {
					pointerdown: "touchstart",
					pointermove: "touchmove",
					pointerup: "touchend",
					pointercancel: "touchcancel"
				};

			function Mt(t) {
				return b.j && null === window.onpointerdown ? t : b.j && null === window.ontouchstart ? Lt[t] : b.j && null === window.onmousedown ? Rt[t] : t
			}

			function kt(t, e, n, o) {
				return bt(t, Mt(e), Vt(n, "pointerdown" === e), o)
			}

			function Ot(t, e, n, o) {
				return wt(t, Mt(e), n && Vt(n, "pointerdown" === e), o)
			}

			function jt(t) {
				let e = null;
				return () => {
					const n = () => {
						e = null
					};
					return null === e && (e = t, n)
				}
			}
			const Dt = jt("dragHorizontal"),
				Ft = jt("dragVertical");

			function Bt(t) {
				let e = !1;
				if ("y" === t) e = Ft();
				else if ("x" === t) e = Dt();
				else {
					const t = Dt(),
						n = Ft();
					t && n ? e = () => {
						t(), n()
					} : (t && t(), n && n())
				}
				return e
			}

			function It() {
				const t = Bt(!0);
				return !t || (t(), !1)
			}

			function Ut(t, e, n) {
				return (o, i) => {
					Pt(o) && !It() && (t.animationState && t.animationState.setActive(xt.Hover, e), n && n(o, i))
				}
			}
			const $t = (t, e) => !!e && (t === e || $t(t, e.parentElement));
			var Nt = n(5411),
				zt = n(9897);
			var Yt = n(9304),
				Wt = n(6034);
			const Ht = new WeakMap,
				Zt = new WeakMap,
				Xt = t => {
					const e = Ht.get(t.target);
					e && e(t)
				},
				qt = t => {
					t.forEach(Xt)
				};

			function Gt(t, e, n) {
				const o = function({
					root: t,
					...e
				}) {
					const n = t || document;
					Zt.has(n) || Zt.set(n, {});
					const o = Zt.get(n),
						i = JSON.stringify(e);
					return o[i] || (o[i] = new IntersectionObserver(qt, {
						root: t,
						...e
					})), o[i]
				}(e);
				return Ht.set(t, n), o.observe(t), () => {
					Ht.delete(t), o.unobserve(t)
				}
			}
			const Kt = {
				some: 0,
				all: 1
			};

			function _t(t, e, n, {
				root: i,
				margin: r,
				amount: s = "some",
				once: a
			}) {
				(0, o.useEffect)((() => {
					if (!t) return;
					const o = {
						root: null === i || void 0 === i ? void 0 : i.current,
						rootMargin: r,
						threshold: "number" === typeof s ? s : Kt[s]
					};
					return Gt(n.getInstance(), o, (t => {
						const {
							isIntersecting: o
						} = t;
						if (e.isInView === o) return;
						if (e.isInView = o, a && !o && e.hasEnteredView) return;
						o && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(xt.InView, o);
						const i = n.getProps(),
							r = o ? i.onViewportEnter : i.onViewportLeave;
						r && r(t)
					}))
				}), [t, i, r, s])
			}

			function Jt(t, e, n, {
				fallback: i = !0
			}) {
				(0, o.useEffect)((() => {
					t && i && ("production" !== Yt.O && (0, Wt.O)(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame((() => {
						e.hasEnteredView = !0;
						const {
							onViewportEnter: t
						} = n.getProps();
						t && t(null), n.animationState && n.animationState.setActive(xt.InView, !0)
					})))
				}), [t])
			}
			const Qt = t => e => (t(e), null),
				te = {
					inView: Qt((function({
						visualElement: t,
						whileInView: e,
						onViewportEnter: n,
						onViewportLeave: i,
						viewport: r = {}
					}) {
						const s = (0, o.useRef)({
							hasEnteredView: !1,
							isInView: !1
						});
						let a = Boolean(e || n || i);
						r.once && s.current.hasEnteredView && (a = !1), ("undefined" === typeof IntersectionObserver ? Jt : _t)(a, s.current, t, r)
					})),
					tap: Qt((function({
						onTap: t,
						onTapStart: e,
						onTapCancel: n,
						whileTap: i,
						visualElement: r
					}) {
						const s = t || e || n || i,
							a = (0, o.useRef)(!1),
							u = (0, o.useRef)(null),
							l = {
								passive: !(e || t || n || f)
							};

						function c() {
							u.current && u.current(), u.current = null
						}

						function d() {
							return c(), a.current = !1, r.animationState && r.animationState.setActive(xt.Tap, !1), !It()
						}

						function h(e, o) {
							d() && ($t(r.getInstance(), e.target) ? t && t(e, o) : n && n(e, o))
						}

						function p(t, e) {
							d() && n && n(t, e)
						}

						function f(t, n) {
							c(), a.current || (a.current = !0, u.current = (0, zt.z)(kt(window, "pointerup", h, l), kt(window, "pointercancel", p, l)), r.animationState && r.animationState.setActive(xt.Tap, !0), e && e(t, n))
						}
						Ot(r, "pointerdown", s ? f : void 0, l), (0, Nt.z)(c)
					})),
					focus: Qt((function({
						whileFocus: t,
						visualElement: e
					}) {
						const {
							animationState: n
						} = e;
						wt(e, "focus", t ? () => {
							n && n.setActive(xt.Focus, !0)
						} : void 0), wt(e, "blur", t ? () => {
							n && n.setActive(xt.Focus, !1)
						} : void 0)
					})),
					hover: Qt((function({
						onHoverStart: t,
						onHoverEnd: e,
						whileHover: n,
						visualElement: o
					}) {
						Ot(o, "pointerenter", t || n ? Ut(o, !0, t) : void 0, {
							passive: !t
						}), Ot(o, "pointerleave", e || n ? Ut(o, !1, e) : void 0, {
							passive: !e
						})
					}))
				};

			function ee() {
				const t = (0, o.useContext)(s.O);
				if (null === t) return [!0, null];
				const {
					isPresent: e,
					onExitComplete: n,
					register: i
				} = t, r = (0, o.useId)();
				(0, o.useEffect)((() => i(r)), []);
				return !e && n ? [!1, () => n && n(r)] : [!0]
			}
			var ne = n(8488);

			function oe(t, e) {
				if (!Array.isArray(e)) return !1;
				const n = e.length;
				if (n !== t.length) return !1;
				for (let o = 0; o < n; o++)
					if (e[o] !== t[o]) return !1;
				return !0
			}
			var ie = n(1593),
				re = n(8407);
			const se = t => /^0[^.\s]+$/.test(t);
			var ae = n(3234),
				ue = n(9135),
				le = n(7405),
				ce = n(1248);
			const de = t => e => e.test(t),
				he = [ce.Rx, J.px, J.aQ, J.RW, J.vw, J.vh, {
					test: t => "auto" === t,
					parse: t => t
				}],
				pe = t => he.find(de(t)),
				fe = [...he, le.$, re.P],
				me = t => fe.find(de(t));

			function ve(t, e, n) {
				const o = t.getProps();
				return ht(o, e, void 0 !== n ? n : o.custom, function(t) {
					const e = {};
					return t.forEachValue(((t, n) => e[n] = t.get())), e
				}(t), function(t) {
					const e = {};
					return t.forEachValue(((t, n) => e[n] = t.getVelocity())), e
				}(t))
			}

			function ge(t, e, n) {
				t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, ae.B)(n))
			}

			function ye(t, e) {
				const n = ve(t, e);
				let {
					transitionEnd: o = {},
					transition: i = {},
					...r
				} = n ? t.makeTargetAnimatable(n, !1) : {};
				r = {
					...r,
					...o
				};
				for (const s in r) {
					ge(t, s, (0, pt.Y)(r[s]))
				}
			}

			function xe(t, e) {
				if (!e) return;
				return (e[t] || e.default || e).from
			}

			function be(t) {
				return Boolean((0, B.i)(t) && t.add)
			}

			function we(t, e, n = {}) {
				var o;
				const i = ve(t, e, n.custom);
				let {
					transition: r = t.getDefaultTransition() || {}
				} = i || {};
				n.transitionOverride && (r = n.transitionOverride);
				const s = i ? () => Pe(t, i, n) : () => Promise.resolve(),
					a = (null === (o = t.variantChildren) || void 0 === o ? void 0 : o.size) ? (o = 0) => {
						const {
							delayChildren: i = 0,
							staggerChildren: s,
							staggerDirection: a
						} = r;
						return function(t, e, n = 0, o = 0, i = 1, r) {
							const s = [],
								a = (t.variantChildren.size - 1) * o,
								u = 1 === i ? (t = 0) => t * o : (t = 0) => a - t * o;
							return Array.from(t.variantChildren).sort(Ee).forEach(((t, o) => {
								s.push(we(t, e, {
									...r,
									delay: n + u(o)
								}).then((() => t.notifyAnimationComplete(e))))
							})), Promise.all(s)
						}(t, e, i + o, s, a, n)
					} : () => Promise.resolve(),
					{
						when: u
					} = r;
				if (u) {
					const [t, e] = "beforeChildren" === u ? [s, a] : [a, s];
					return t().then(e)
				}
				return Promise.all([s(), a(n.delay)])
			}

			function Pe(t, e, {
				delay: n = 0,
				transitionOverride: o,
				type: i
			} = {}) {
				var r;
				let {
					transition: s = t.getDefaultTransition(),
					transitionEnd: a,
					...u
				} = t.makeTargetAnimatable(e);
				const l = t.getValue("willChange");
				o && (s = o);
				const c = [],
					d = i && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getState()[i]);
				for (const h in u) {
					const e = t.getValue(h),
						o = u[h];
					if (!e || void 0 === o || d && Te(d, h)) continue;
					let i = {
						delay: n,
						...s
					};
					t.shouldReduceMotion && D.has(h) && (i = {
						...i,
						type: !1,
						delay: 0
					});
					let r = (0, ie.b8)(h, e, o, i);
					be(l) && (l.add(h), r = r.then((() => l.remove(h)))), c.push(r)
				}
				return Promise.all(c).then((() => {
					a && ye(t, a)
				}))
			}

			function Ee(t, e) {
				return t.sortNodePosition(e)
			}

			function Te({
				protectedKeys: t,
				needsAnimating: e
			}, n) {
				const o = t.hasOwnProperty(n) && !0 !== e[n];
				return e[n] = !1, o
			}
			const Ae = [xt.Animate, xt.InView, xt.Focus, xt.Hover, xt.Tap, xt.Drag, xt.Exit],
				Ce = [...Ae].reverse(),
				Se = Ae.length;

			function Ve(t) {
				return e => Promise.all(e.map((({
					animation: e,
					options: n
				}) => function(t, e, n = {}) {
					let o;
					if (t.notifyAnimationStart(e), Array.isArray(e)) {
						const i = e.map((e => we(t, e, n)));
						o = Promise.all(i)
					} else if ("string" === typeof e) o = we(t, e, n);
					else {
						const i = "function" === typeof e ? ve(t, e, n.custom) : e;
						o = Pe(t, i, n)
					}
					return o.then((() => t.notifyAnimationComplete(e)))
				}(t, e, n))))
			}

			function Re(t) {
				let e = Ve(t);
				const n = {
					[xt.Animate]: Me(!0),
					[xt.InView]: Me(),
					[xt.Hover]: Me(),
					[xt.Tap]: Me(),
					[xt.Drag]: Me(),
					[xt.Focus]: Me(),
					[xt.Exit]: Me()
				};
				let o = !0;
				const i = (e, n) => {
					const o = ve(t, n);
					if (o) {
						const {
							transition: t,
							transitionEnd: n,
							...i
						} = o;
						e = {
							...e,
							...i,
							...n
						}
					}
					return e
				};

				function r(r, s) {
					var a;
					const u = t.getProps(),
						l = t.getVariantContext(!0) || {},
						c = [],
						p = new Set;
					let f = {},
						m = 1 / 0;
					for (let e = 0; e < Se; e++) {
						const v = Ce[e],
							g = n[v],
							y = null !== (a = u[v]) && void 0 !== a ? a : l[v],
							x = d(y),
							b = v === s ? g.isActive : null;
						!1 === b && (m = e);
						let w = y === l[v] && y !== u[v] && x;
						if (w && o && t.manuallyAnimateOnMount && (w = !1), g.protectedKeys = {
								...f
							}, !g.isActive && null === b || !y && !g.prevProp || h(y) || "boolean" === typeof y) continue;
						const P = Le(g.prevProp, y);
						let E = P || v === s && g.isActive && !w && x || e > m && x;
						const T = Array.isArray(y) ? y : [y];
						let A = T.reduce(i, {});
						!1 === b && (A = {});
						const {
							prevResolvedValues: C = {}
						} = g, S = {
							...C,
							...A
						}, V = t => {
							E = !0, p.delete(t), g.needsAnimating[t] = !0
						};
						for (const t in S) {
							const e = A[t],
								n = C[t];
							f.hasOwnProperty(t) || (e !== n ? (0, ne.C)(e) && (0, ne.C)(n) ? !oe(e, n) || P ? V(t) : g.protectedKeys[t] = !0 : void 0 !== e ? V(t) : p.add(t) : void 0 !== e && p.has(t) ? V(t) : g.protectedKeys[t] = !0)
						}
						g.prevProp = y, g.prevResolvedValues = A, g.isActive && (f = {
							...f,
							...A
						}), o && t.blockInitialAnimation && (E = !1), E && !w && c.push(...T.map((t => ({
							animation: t,
							options: {
								type: v,
								...r
							}
						}))))
					}
					if (p.size) {
						const e = {};
						p.forEach((n => {
							const o = t.getBaseTarget(n);
							void 0 !== o && (e[n] = o)
						})), c.push({
							animation: e
						})
					}
					let v = Boolean(c.length);
					return o && !1 === u.initial && !t.manuallyAnimateOnMount && (v = !1), o = !1, v ? e(c) : Promise.resolve()
				}
				return {
					animateChanges: r,
					setActive: function(e, o, i) {
						var s;
						if (n[e].isActive === o) return Promise.resolve();
						null === (s = t.variantChildren) || void 0 === s || s.forEach((t => {
							var n;
							return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, o)
						})), n[e].isActive = o;
						const a = r(i, e);
						for (const t in n) n[t].protectedKeys = {};
						return a
					},
					setAnimateFunction: function(n) {
						e = n(t)
					},
					getState: () => n
				}
			}

			function Le(t, e) {
				return "string" === typeof e ? e !== t : !!Array.isArray(e) && !oe(e, t)
			}

			function Me(t = !1) {
				return {
					isActive: t,
					protectedKeys: {},
					needsAnimating: {},
					prevResolvedValues: {}
				}
			}
			const ke = {
				animation: Qt((({
					visualElement: t,
					animate: e
				}) => {
					t.animationState || (t.animationState = Re(t)), h(e) && (0, o.useEffect)((() => e.subscribe(t)), [e])
				})),
				exit: Qt((t => {
					const {
						custom: e,
						visualElement: n
					} = t, [i, r] = ee(), a = (0, o.useContext)(s.O);
					(0, o.useEffect)((() => {
						n.isPresent = i;
						const t = n.animationState && n.animationState.setActive(xt.Exit, !i, {
							custom: a && a.custom || e
						});
						t && !i && t.then(r)
					}), [i])
				}))
			};
			var Oe = n(4394),
				je = n(4735),
				De = n(6917);
			const Fe = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
				Be = t => Fe(t) && t.hasOwnProperty("z");
			var Ie = n(734);
			const Ue = (t, e) => Math.abs(t - e);

			function $e(t, e) {
				if ((0, Ie.e)(t) && (0, Ie.e)(e)) return Ue(t, e);
				if (Fe(t) && Fe(e)) {
					const n = Ue(t.x, e.x),
						o = Ue(t.y, e.y),
						i = Be(t) && Be(e) ? Ue(t.z, e.z) : 0;
					return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2) + Math.pow(i, 2))
				}
			}
			class Ne {
				constructor(t, e, {
					transformPagePoint: n
				} = {}) {
					if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
							if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
							const t = We(this.lastMoveEventInfo, this.history),
								e = null !== this.startEvent,
								n = $e(t.offset, {
									x: 0,
									y: 0
								}) >= 3;
							if (!e && !n) return;
							const {
								point: o
							} = t, {
								timestamp: i
							} = (0, je.$B)();
							this.history.push({
								...o,
								timestamp: i
							});
							const {
								onStart: r,
								onMove: s
							} = this.handlers;
							e || (r && r(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, t)
						}, this.handlePointerMove = (t, e) => {
							this.lastMoveEvent = t, this.lastMoveEventInfo = ze(e, this.transformPagePoint), Pt(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : je.ZP.update(this.updatePoint, !0)
						}, this.handlePointerUp = (t, e) => {
							this.end();
							const {
								onEnd: n,
								onSessionEnd: o
							} = this.handlers, i = We(ze(e, this.transformPagePoint), this.history);
							this.startEvent && n && n(t, i), o && o(t, i)
						}, Et(t) && t.touches.length > 1) return;
					this.handlers = e, this.transformPagePoint = n;
					const o = ze(St(t), this.transformPagePoint),
						{
							point: i
						} = o,
						{
							timestamp: r
						} = (0, je.$B)();
					this.history = [{
						...i,
						timestamp: r
					}];
					const {
						onSessionStart: s
					} = e;
					s && s(t, We(o, this.history)), this.removeListeners = (0, zt.z)(kt(window, "pointermove", this.handlePointerMove), kt(window, "pointerup", this.handlePointerUp), kt(window, "pointercancel", this.handlePointerUp))
				}
				updateHandlers(t) {
					this.handlers = t
				}
				end() {
					this.removeListeners && this.removeListeners(), je.qY.update(this.updatePoint)
				}
			}

			function ze(t, e) {
				return e ? {
					point: e(t.point)
				} : t
			}

			function Ye(t, e) {
				return {
					x: t.x - e.x,
					y: t.y - e.y
				}
			}

			function We({
				point: t
			}, e) {
				return {
					point: t,
					delta: Ye(t, Ze(e)),
					offset: Ye(t, He(e)),
					velocity: Xe(e, .1)
				}
			}

			function He(t) {
				return t[0]
			}

			function Ze(t) {
				return t[t.length - 1]
			}

			function Xe(t, e) {
				if (t.length < 2) return {
					x: 0,
					y: 0
				};
				let n = t.length - 1,
					o = null;
				const i = Ze(t);
				for (; n >= 0 && (o = t[n], !(i.timestamp - o.timestamp > (0, De.w)(e)));) n--;
				if (!o) return {
					x: 0,
					y: 0
				};
				const r = (i.timestamp - o.timestamp) / 1e3;
				if (0 === r) return {
					x: 0,
					y: 0
				};
				const s = {
					x: (i.x - o.x) / r,
					y: (i.y - o.y) / r
				};
				return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s
			}
			var qe = n(2453),
				Ge = n(9326),
				Ke = n(6773);

			function _e(t) {
				return t.max - t.min
			}

			function Je(t, e = 0, n = .01) {
				return $e(t, e) < n
			}

			function Qe(t, e, n, o = .5) {
				t.origin = o, t.originPoint = (0, qe.C)(e.min, e.max, t.origin), t.scale = _e(n) / _e(e), (Je(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, qe.C)(n.min, n.max, t.origin) - t.originPoint, (Je(t.translate) || isNaN(t.translate)) && (t.translate = 0)
			}

			function tn(t, e, n, o) {
				Qe(t.x, e.x, n.x, null === o || void 0 === o ? void 0 : o.originX), Qe(t.y, e.y, n.y, null === o || void 0 === o ? void 0 : o.originY)
			}

			function en(t, e, n) {
				t.min = n.min + e.min, t.max = t.min + _e(e)
			}

			function nn(t, e, n) {
				t.min = e.min - n.min, t.max = t.min + _e(e)
			}

			function on(t, e, n) {
				nn(t.x, e.x, n.x), nn(t.y, e.y, n.y)
			}

			function rn(t, e, n) {
				return {
					min: void 0 !== e ? t.min + e : void 0,
					max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
				}
			}

			function sn(t, e) {
				let n = e.min - t.min,
					o = e.max - t.max;
				return e.max - e.min < t.max - t.min && ([n, o] = [o, n]), {
					min: n,
					max: o
				}
			}
			const an = .35;

			function un(t, e, n) {
				return {
					min: ln(t, e),
					max: ln(t, n)
				}
			}

			function ln(t, e) {
				var n;
				return "number" === typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
			}

			function cn(t) {
				return [t("x"), t("y")]
			}

			function dn({
				top: t,
				left: e,
				right: n,
				bottom: o
			}) {
				return {
					x: {
						min: e,
						max: n
					},
					y: {
						min: t,
						max: o
					}
				}
			}

			function hn(t) {
				return void 0 === t || 1 === t
			}

			function pn({
				scale: t,
				scaleX: e,
				scaleY: n
			}) {
				return !hn(t) || !hn(e) || !hn(n)
			}

			function fn(t) {
				return pn(t) || mn(t.x) || mn(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
			}

			function mn(t) {
				return t && "0%" !== t
			}

			function vn(t, e, n) {
				return n + e * (t - n)
			}

			function gn(t, e, n, o, i) {
				return void 0 !== i && (t = vn(t, i, o)), vn(t, n, o) + e
			}

			function yn(t, e = 0, n = 1, o, i) {
				t.min = gn(t.min, e, n, o, i), t.max = gn(t.max, e, n, o, i)
			}

			function xn(t, {
				x: e,
				y: n
			}) {
				yn(t.x, e.translate, e.scale, e.originPoint), yn(t.y, n.translate, n.scale, n.originPoint)
			}

			function bn(t, e) {
				t.min = t.min + e, t.max = t.max + e
			}

			function wn(t, e, [n, o, i]) {
				const r = void 0 !== e[i] ? e[i] : .5,
					s = (0, qe.C)(t.min, t.max, r);
				yn(t, e[n], e[o], s, e.scale)
			}
			const Pn = ["x", "scaleX", "originX"],
				En = ["y", "scaleY", "originY"];

			function Tn(t, e) {
				wn(t.x, e, Pn), wn(t.y, e, En)
			}

			function An(t, e) {
				return dn(function(t, e) {
					if (!e) return t;
					const n = e({
							x: t.left,
							y: t.top
						}),
						o = e({
							x: t.right,
							y: t.bottom
						});
					return {
						top: n.y,
						left: n.x,
						bottom: o.y,
						right: o.x
					}
				}(t.getBoundingClientRect(), e))
			}
			const Cn = new WeakMap;
			class Sn {
				constructor(t) {
					this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
						x: 0,
						y: 0
					}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
						x: {
							min: 0,
							max: 0
						},
						y: {
							min: 0,
							max: 0
						}
					}, this.visualElement = t
				}
				start(t, {
					snapToCursor: e = !1
				} = {}) {
					if (!1 === this.visualElement.isPresent) return;
					this.panSession = new Ne(t, {
						onSessionStart: t => {
							this.stopAnimation(), e && this.snapToCursor(St(t, "page").point)
						},
						onStart: (t, e) => {
							var n;
							const {
								drag: o,
								dragPropagation: i,
								onDragStart: r
							} = this.getProps();
							(!o || i || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Bt(o), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), cn((t => {
								var e, n;
								let o = this.getAxisMotionValue(t).get() || 0;
								if (J.aQ.test(o)) {
									const i = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.actual[t];
									if (i) {
										o = _e(i) * (parseFloat(o) / 100)
									}
								}
								this.originPoint[t] = o
							})), null === r || void 0 === r || r(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(xt.Drag, !0))
						},
						onMove: (t, e) => {
							const {
								dragPropagation: n,
								dragDirectionLock: o,
								onDirectionLock: i,
								onDrag: r
							} = this.getProps();
							if (!n && !this.openGlobalLock) return;
							const {
								offset: s
							} = e;
							if (o && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
								let n = null;
								Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x");
								return n
							}(s), void(null !== this.currentDirection && (null === i || void 0 === i || i(this.currentDirection)));
							this.updateAxis("x", e.point, s), this.updateAxis("y", e.point, s), this.visualElement.syncRender(), null === r || void 0 === r || r(t, e)
						},
						onSessionEnd: (t, e) => this.stop(t, e)
					}, {
						transformPagePoint: this.visualElement.getTransformPagePoint()
					})
				}
				stop(t, e) {
					const n = this.isDragging;
					if (this.cancel(), !n) return;
					const {
						velocity: o
					} = e;
					this.startAnimation(o);
					const {
						onDragEnd: i
					} = this.getProps();
					null === i || void 0 === i || i(t, e)
				}
				cancel() {
					var t, e;
					this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
					const {
						dragPropagation: n
					} = this.getProps();
					!n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(xt.Drag, !1)
				}
				updateAxis(t, e, n) {
					const {
						drag: o
					} = this.getProps();
					if (!n || !Vn(t, o, this.currentDirection)) return;
					const i = this.getAxisMotionValue(t);
					let r = this.originPoint[t] + n[t];
					this.constraints && this.constraints[t] && (r = function(t, {
						min: e,
						max: n
					}, o) {
						return void 0 !== e && t < e ? t = o ? (0, qe.C)(e, t, o.min) : Math.max(t, e) : void 0 !== n && t > n && (t = o ? (0, qe.C)(n, t, o.max) : Math.min(t, n)), t
					}(r, this.constraints[t], this.elastic[t])), i.set(r)
				}
				resolveConstraints() {
					const {
						dragConstraints: t,
						dragElastic: e
					} = this.getProps(), {
						layout: n
					} = this.visualElement.projection || {}, o = this.constraints;
					t && c(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
						top: e,
						left: n,
						bottom: o,
						right: i
					}) {
						return {
							x: rn(t.x, n, i),
							y: rn(t.y, e, o)
						}
					}(n.actual, t), this.elastic = function(t = an) {
						return !1 === t ? t = 0 : !0 === t && (t = an), {
							x: un(t, "left", "right"),
							y: un(t, "top", "bottom")
						}
					}(e), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && cn((t => {
						this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
							const n = {};
							return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
						}(n.actual[t], this.constraints[t]))
					}))
				}
				resolveRefConstraints() {
					const {
						dragConstraints: t,
						onMeasureDragConstraints: e
					} = this.getProps();
					if (!t || !c(t)) return !1;
					const n = t.current;
					(0, Oe.k)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
					const {
						projection: o
					} = this.visualElement;
					if (!o || !o.layout) return !1;
					const i = function(t, e, n) {
						const o = An(t, n),
							{
								scroll: i
							} = e;
						return i && (bn(o.x, i.x), bn(o.y, i.y)), o
					}(n, o.root, this.visualElement.getTransformPagePoint());
					let r = function(t, e) {
						return {
							x: sn(t.x, e.x),
							y: sn(t.y, e.y)
						}
					}(o.layout.actual, i);
					if (e) {
						const t = e(function({
							x: t,
							y: e
						}) {
							return {
								top: e.min,
								right: t.max,
								bottom: e.max,
								left: t.min
							}
						}(r));
						this.hasMutatedConstraints = !!t, t && (r = dn(t))
					}
					return r
				}
				startAnimation(t) {
					const {
						drag: e,
						dragMomentum: n,
						dragElastic: o,
						dragTransition: i,
						dragSnapToOrigin: r,
						onDragTransitionEnd: s
					} = this.getProps(), a = this.constraints || {}, u = cn((s => {
						var u;
						if (!Vn(s, e, this.currentDirection)) return;
						let l = null !== (u = null === a || void 0 === a ? void 0 : a[s]) && void 0 !== u ? u : {};
						r && (l = {
							min: 0,
							max: 0
						});
						const c = o ? 200 : 1e6,
							d = o ? 40 : 1e7,
							h = {
								type: "inertia",
								velocity: n ? t[s] : 0,
								bounceStiffness: c,
								bounceDamping: d,
								timeConstant: 750,
								restDelta: 1,
								restSpeed: 10,
								...i,
								...l
							};
						return this.startAxisValueAnimation(s, h)
					}));
					return Promise.all(u).then(s)
				}
				startAxisValueAnimation(t, e) {
					const n = this.getAxisMotionValue(t);
					return (0, ie.b8)(t, n, 0, e)
				}
				stopAnimation() {
					cn((t => this.getAxisMotionValue(t).stop()))
				}
				getAxisMotionValue(t) {
					var e, n;
					const o = "_drag" + t.toUpperCase(),
						i = this.visualElement.getProps()[o];
					return i || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
				}
				snapToCursor(t) {
					cn((e => {
						const {
							drag: n
						} = this.getProps();
						if (!Vn(e, n, this.currentDirection)) return;
						const {
							projection: o
						} = this.visualElement, i = this.getAxisMotionValue(e);
						if (o && o.layout) {
							const {
								min: n,
								max: r
							} = o.layout.actual[e];
							i.set(t[e] - (0, qe.C)(n, r, .5))
						}
					}))
				}
				scalePositionWithinConstraints() {
					var t;
					const {
						drag: e,
						dragConstraints: n
					} = this.getProps(), {
						projection: o
					} = this.visualElement;
					if (!c(n) || !o || !this.constraints) return;
					this.stopAnimation();
					const i = {
						x: 0,
						y: 0
					};
					cn((t => {
						const e = this.getAxisMotionValue(t);
						if (e) {
							const n = e.get();
							i[t] = function(t, e) {
								let n = .5;
								const o = _e(t),
									i = _e(e);
								return i > o ? n = (0, Ge.Y)(e.min, e.max - o, t.min) : o > i && (n = (0, Ge.Y)(t.min, t.max - i, e.min)), (0, Ke.u)(0, 1, n)
							}({
								min: n,
								max: n
							}, this.constraints[t])
						}
					}));
					const {
						transformTemplate: r
					} = this.visualElement.getProps();
					this.visualElement.getInstance().style.transform = r ? r({}, "") : "none", null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout(), this.resolveConstraints(), cn((t => {
						if (!Vn(t, e, null)) return;
						const n = this.getAxisMotionValue(t),
							{
								min: o,
								max: r
							} = this.constraints[t];
						n.set((0, qe.C)(o, r, i[t]))
					}))
				}
				addListeners() {
					var t;
					Cn.set(this.visualElement, this);
					const e = kt(this.visualElement.getInstance(), "pointerdown", (t => {
							const {
								drag: e,
								dragListener: n = !0
							} = this.getProps();
							e && n && this.start(t)
						})),
						n = () => {
							const {
								dragConstraints: t
							} = this.getProps();
							c(t) && (this.constraints = this.resolveRefConstraints())
						},
						{
							projection: o
						} = this.visualElement,
						i = o.addEventListener("measure", n);
					o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), n();
					const r = bt(window, "resize", (() => this.scalePositionWithinConstraints())),
						s = o.addEventListener("didUpdate", (({
							delta: t,
							hasLayoutChanged: e
						}) => {
							this.isDragging && e && (cn((e => {
								const n = this.getAxisMotionValue(e);
								n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
							})), this.visualElement.syncRender())
						}));
					return () => {
						r(), e(), i(), null === s || void 0 === s || s()
					}
				}
				getProps() {
					const t = this.visualElement.getProps(),
						{
							drag: e = !1,
							dragDirectionLock: n = !1,
							dragPropagation: o = !1,
							dragConstraints: i = !1,
							dragElastic: r = an,
							dragMomentum: s = !0
						} = t;
					return {
						...t,
						drag: e,
						dragDirectionLock: n,
						dragPropagation: o,
						dragConstraints: i,
						dragElastic: r,
						dragMomentum: s
					}
				}
			}

			function Vn(t, e, n) {
				return (!0 === e || e === t) && (null === n || n === t)
			}
			const Rn = {
					pan: Qt((function({
						onPan: t,
						onPanStart: e,
						onPanEnd: n,
						onPanSessionStart: r,
						visualElement: s
					}) {
						const a = t || e || n || r,
							u = (0, o.useRef)(null),
							{
								transformPagePoint: l
							} = (0, o.useContext)(i),
							c = {
								onSessionStart: r,
								onStart: e,
								onMove: t,
								onEnd: (t, e) => {
									u.current = null, n && n(t, e)
								}
							};
						(0, o.useEffect)((() => {
							null !== u.current && u.current.updateHandlers(c)
						})), Ot(s, "pointerdown", a && function(t) {
							u.current = new Ne(t, c, {
								transformPagePoint: l
							})
						}), (0, Nt.z)((() => u.current && u.current.end()))
					})),
					drag: Qt((function(t) {
						const {
							dragControls: e,
							visualElement: n
						} = t, i = (0, w.h)((() => new Sn(n)));
						(0, o.useEffect)((() => e && e.subscribe(i)), [i, e]), (0, o.useEffect)((() => i.addListeners()), [i])
					}))
				},
				Ln = {
					current: null
				},
				Mn = {
					current: !1
				};
			var kn = n(1560);
			const On = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"];
			const jn = Object.keys(x),
				Dn = jn.length,
				Fn = ({
					treeType: t = "",
					build: e,
					getBaseTarget: n,
					makeTargetAnimatable: i,
					measureViewportBox: r,
					render: s,
					readValueFromInstance: a,
					removeValueFromRenderState: u,
					sortNodePosition: l,
					scrapeMotionValuesFromProps: h
				}) => ({
					parent: p,
					props: v,
					presenceId: g,
					blockInitialAnimation: y,
					visualState: w,
					reducedMotionConfig: P
				}, E = {}) => {
					let T = !1;
					const {
						latestValues: A,
						renderState: C
					} = w;
					let S;
					const V = function() {
							const t = On.map((() => new kn.L)),
								e = {},
								n = {
									clearAllListeners: () => t.forEach((t => t.clear())),
									updatePropListeners: t => {
										On.forEach((o => {
											var i;
											const r = "on" + o,
												s = t[r];
											null === (i = e[o]) || void 0 === i || i.call(e), s && (e[o] = n[r](s))
										}))
									}
								};
							return t.forEach(((t, e) => {
								n["on" + On[e]] = e => t.add(e), n["notify" + On[e]] = (...e) => t.notify(...e)
							})), n
						}(),
						R = new Map,
						L = new Map;
					let M = {};
					const k = {
						...A
					};
					let O;

					function j() {
						S && T && (D(), s(S, C, v.style, Y.projection))
					}

					function D() {
						e(Y, C, A, E, v)
					}

					function F() {
						V.notifyUpdate(A)
					}

					function I(t, e) {
						const n = e.onChange((e => {
								A[t] = e, v.onUpdate && je.ZP.update(F, !1, !0)
							})),
							o = e.onRenderRequest(Y.scheduleRender);
						L.set(t, (() => {
							n(), o()
						}))
					}
					const {
						willChange: U,
						...$
					} = h(v);
					for (const t in $) {
						const e = $[t];
						void 0 !== A[t] && (0, B.i)(e) && (e.set(A[t], !1), be(U) && U.add(t))
					}
					if (v.values)
						for (const t in v.values) void 0 !== A[t] && v.values[t].set(A[t]);
					const N = f(v),
						z = m(v),
						Y = {
							treeType: t,
							current: null,
							depth: p ? p.depth + 1 : 0,
							parent: p,
							children: new Set,
							presenceId: g,
							shouldReduceMotion: null,
							variantChildren: z ? new Set : void 0,
							isVisible: void 0,
							manuallyAnimateOnMount: Boolean(null === p || void 0 === p ? void 0 : p.isMounted()),
							blockInitialAnimation: y,
							isMounted: () => Boolean(S),
							mount(t) {
								T = !0, S = Y.current = t, Y.projection && Y.projection.mount(t), z && p && !N && (O = null === p || void 0 === p ? void 0 : p.addVariantChild(Y)), R.forEach(((t, e) => I(e, t))), Mn.current || function() {
									if (Mn.current = !0, b.j)
										if (window.matchMedia) {
											const t = window.matchMedia("(prefers-reduced-motion)"),
												e = () => Ln.current = t.matches;
											t.addListener(e), e()
										} else Ln.current = !1
								}(), Y.shouldReduceMotion = "never" !== P && ("always" === P || Ln.current), null === p || void 0 === p || p.children.add(Y), Y.setProps(v)
							},
							unmount() {
								var t;
								null === (t = Y.projection) || void 0 === t || t.unmount(), je.qY.update(F), je.qY.render(j), L.forEach((t => t())), null === O || void 0 === O || O(), null === p || void 0 === p || p.children.delete(Y), V.clearAllListeners(), S = void 0, T = !1
							},
							loadFeatures(t, e, n, i, r, s) {
								const a = [];
								"production" !== Yt.O && n && e && (0, Oe.k)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
								for (let u = 0; u < Dn; u++) {
									const e = jn[u],
										{
											isEnabled: n,
											Component: i
										} = x[e];
									n(t) && i && a.push((0, o.createElement)(i, {
										key: e,
										...t,
										visualElement: Y
									}))
								}
								if (!Y.projection && r) {
									Y.projection = new r(i, Y.getLatestValues(), p && p.projection);
									const {
										layoutId: e,
										layout: n,
										drag: o,
										dragConstraints: a,
										layoutScroll: u
									} = t;
									Y.projection.setOptions({
										layoutId: e,
										layout: n,
										alwaysMeasureLayout: Boolean(o) || a && c(a),
										visualElement: Y,
										scheduleRender: () => Y.scheduleRender(),
										animationType: "string" === typeof n ? n : "both",
										initialPromotionConfig: s,
										layoutScroll: u
									})
								}
								return a
							},
							addVariantChild(t) {
								var e;
								const n = Y.getClosestVariantNode();
								if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t), () => n.variantChildren.delete(t)
							},
							sortNodePosition: e => l && t === e.treeType ? l(Y.getInstance(), e.getInstance()) : 0,
							getClosestVariantNode: () => z ? Y : null === p || void 0 === p ? void 0 : p.getClosestVariantNode(),
							getLayoutId: () => v.layoutId,
							getInstance: () => S,
							getStaticValue: t => A[t],
							setStaticValue: (t, e) => A[t] = e,
							getLatestValues: () => A,
							setVisibility(t) {
								Y.isVisible !== t && (Y.isVisible = t, Y.scheduleRender())
							},
							makeTargetAnimatable: (t, e = !0) => i(Y, t, v, e),
							measureViewportBox: () => r(S, v),
							addValue(t, e) {
								Y.hasValue(t) && Y.removeValue(t), R.set(t, e), A[t] = e.get(), I(t, e)
							},
							removeValue(t) {
								var e;
								R.delete(t), null === (e = L.get(t)) || void 0 === e || e(), L.delete(t), delete A[t], u(t, C)
							},
							hasValue: t => R.has(t),
							getValue(t, e) {
								if (v.values && v.values[t]) return v.values[t];
								let n = R.get(t);
								return void 0 === n && void 0 !== e && (n = (0, ae.B)(e), Y.addValue(t, n)), n
							},
							forEachValue: t => R.forEach(t),
							readValue: t => void 0 !== A[t] ? A[t] : a(S, t, E),
							setBaseTarget(t, e) {
								k[t] = e
							},
							getBaseTarget(t) {
								if (n) {
									const e = n(v, t);
									if (void 0 !== e && !(0, B.i)(e)) return e
								}
								return k[t]
							},
							...V,
							build: () => (D(), C),
							scheduleRender() {
								je.ZP.render(j, !1, !0)
							},
							syncRender: j,
							setProps(t) {
								(t.transformTemplate || v.transformTemplate) && Y.scheduleRender(), v = t, V.updatePropListeners(t), M = function(t, e, n) {
									const {
										willChange: o
									} = e;
									for (const i in e) {
										const r = e[i],
											s = n[i];
										if ((0, B.i)(r)) t.addValue(i, r), be(o) && o.add(i);
										else if ((0, B.i)(s)) t.addValue(i, (0, ae.B)(r)), be(o) && o.remove(i);
										else if (s !== r)
											if (t.hasValue(i)) {
												const e = t.getValue(i);
												!e.hasAnimated && e.set(r)
											} else {
												const e = t.getStaticValue(i);
												t.addValue(i, (0, ae.B)(void 0 !== e ? e : r))
											}
									}
									for (const i in n) void 0 === e[i] && t.removeValue(i);
									return e
								}(Y, h(v), M)
							},
							getProps: () => v,
							getVariant: t => {
								var e;
								return null === (e = v.variants) || void 0 === e ? void 0 : e[t]
							},
							getDefaultTransition: () => v.transition,
							getTransformPagePoint: () => v.transformPagePoint,
							getVariantContext(t = !1) {
								if (t) return null === p || void 0 === p ? void 0 : p.getVariantContext();
								if (!N) {
									const t = (null === p || void 0 === p ? void 0 : p.getVariantContext()) || {};
									return void 0 !== v.initial && (t.initial = v.initial), t
								}
								const e = {};
								for (let n = 0; n < In; n++) {
									const t = Bn[n],
										o = v[t];
									(d(o) || !1 === o) && (e[t] = o)
								}
								return e
							}
						};
					return Y
				},
				Bn = ["initial", ...Ae],
				In = Bn.length;

			function Un(t) {
				return "string" === typeof t && t.startsWith("var(--")
			}
			const $n = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

			function Nn(t, e, n = 1) {
				(0, Oe.k)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
				const [o, i] = function(t) {
					const e = $n.exec(t);
					if (!e) return [, ];
					const [, n, o] = e;
					return [n, o]
				}(t);
				if (!o) return;
				const r = window.getComputedStyle(e).getPropertyValue(o);
				return r ? r.trim() : Un(i) ? Nn(i, e, n + 1) : i
			}
			const zn = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
				Yn = t => zn.has(t),
				Wn = (t, e) => {
					t.set(e, !1), t.set(e)
				},
				Hn = t => t === ce.Rx || t === J.px;
			var Zn;
			! function(t) {
				t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
			}(Zn || (Zn = {}));
			const Xn = (t, e) => parseFloat(t.split(", ")[e]),
				qn = (t, e) => (n, {
					transform: o
				}) => {
					if ("none" === o || !o) return 0;
					const i = o.match(/^matrix3d\((.+)\)$/);
					if (i) return Xn(i[1], e); {
						const e = o.match(/^matrix\((.+)\)$/);
						return e ? Xn(e[1], t) : 0
					}
				},
				Gn = new Set(["x", "y", "z"]),
				Kn = j.filter((t => !Gn.has(t)));
			const _n = {
					width: ({
						x: t
					}, {
						paddingLeft: e = "0",
						paddingRight: n = "0"
					}) => t.max - t.min - parseFloat(e) - parseFloat(n),
					height: ({
						y: t
					}, {
						paddingTop: e = "0",
						paddingBottom: n = "0"
					}) => t.max - t.min - parseFloat(e) - parseFloat(n),
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
					x: qn(4, 13),
					y: qn(5, 14)
				},
				Jn = (t, e, n = {}, o = {}) => {
					e = {
						...e
					}, o = {
						...o
					};
					const i = Object.keys(e).filter(Yn);
					let r = [],
						s = !1;
					const a = [];
					if (i.forEach((i => {
							const u = t.getValue(i);
							if (!t.hasValue(i)) return;
							let l = n[i],
								c = pe(l);
							const d = e[i];
							let h;
							if ((0, ne.C)(d)) {
								const t = d.length,
									e = null === d[0] ? 1 : 0;
								l = d[e], c = pe(l);
								for (let n = e; n < t; n++) h ? (0, Oe.k)(pe(d[n]) === h, "All keyframes must be of the same type") : (h = pe(d[n]), (0, Oe.k)(h === c || Hn(c) && Hn(h), "Keyframes must be of the same dimension as the current value"))
							} else h = pe(d);
							if (c !== h)
								if (Hn(c) && Hn(h)) {
									const t = u.get();
									"string" === typeof t && u.set(parseFloat(t)), "string" === typeof d ? e[i] = parseFloat(d) : Array.isArray(d) && h === J.px && (e[i] = d.map(parseFloat))
								} else(null === c || void 0 === c ? void 0 : c.transform) && (null === h || void 0 === h ? void 0 : h.transform) && (0 === l || 0 === d) ? 0 === l ? u.set(h.transform(l)) : e[i] = c.transform(d) : (s || (r = function(t) {
									const e = [];
									return Kn.forEach((n => {
										const o = t.getValue(n);
										void 0 !== o && (e.push([n, o.get()]), o.set(n.startsWith("scale") ? 1 : 0))
									})), e.length && t.syncRender(), e
								}(t), s = !0), a.push(i), o[i] = void 0 !== o[i] ? o[i] : e[i], Wn(u, d))
						})), a.length) {
						const n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
							i = ((t, e, n) => {
								const o = e.measureViewportBox(),
									i = e.getInstance(),
									r = getComputedStyle(i),
									{
										display: s
									} = r,
									a = {};
								"none" === s && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
									a[t] = _n[t](o, r)
								})), e.syncRender();
								const u = e.measureViewportBox();
								return n.forEach((n => {
									const o = e.getValue(n);
									Wn(o, a[n]), t[n] = _n[n](u, r)
								})), t
							})(e, t, a);
						return r.length && r.forEach((([e, n]) => {
							t.getValue(e).set(n)
						})), t.syncRender(), b.j && null !== n && window.scrollTo({
							top: n
						}), {
							target: i,
							transitionEnd: o
						}
					}
					return {
						target: e,
						transitionEnd: o
					}
				};

			function Qn(t, e, n, o) {
				return (t => Object.keys(t).some(Yn))(e) ? Jn(t, e, n, o) : {
					target: e,
					transitionEnd: o
				}
			}
			const to = (t, e, n, o) => {
				const i = function(t, {
					...e
				}, n) {
					const o = t.getInstance();
					if (!(o instanceof Element)) return {
						target: e,
						transitionEnd: n
					};
					n && (n = {
						...n
					}), t.forEachValue((t => {
						const e = t.get();
						if (!Un(e)) return;
						const n = Nn(e, o);
						n && t.set(n)
					}));
					for (const i in e) {
						const t = e[i];
						if (!Un(t)) continue;
						const r = Nn(t, o);
						r && (e[i] = r, n && void 0 === n[i] && (n[i] = t))
					}
					return {
						target: e,
						transitionEnd: n
					}
				}(t, e, o);
				return Qn(t, e = i.target, n, o = i.transitionEnd)
			};
			var eo = n(2728);
			const no = {
					treeType: "dom",
					readValueFromInstance(t, e) {
						if (D.has(e)) {
							const t = (0, eo.A)(e);
							return t && t.default || 0
						} {
							const o = (n = t, window.getComputedStyle(n)),
								i = ($(e) ? o.getPropertyValue(e) : o[e]) || 0;
							return "string" === typeof i ? i.trim() : i
						}
						var n
					},
					sortNodePosition: (t, e) => 2 & t.compareDocumentPosition(e) ? 1 : -1,
					getBaseTarget(t, e) {
						var n;
						return null === (n = t.style) || void 0 === n ? void 0 : n[e]
					},
					measureViewportBox: (t, {
						transformPagePoint: e
					}) => An(t, e),
					resetTransform(t, e, n) {
						const {
							transformTemplate: o
						} = n;
						e.style.transform = o ? o({}, "") : "none", t.scheduleRender()
					},
					restoreTransform(t, e) {
						t.style.transform = e.style.transform
					},
					removeValueFromRenderState(t, {
						vars: e,
						style: n
					}) {
						delete e[t], delete n[t]
					},
					makeTargetAnimatable(t, {
						transition: e,
						transitionEnd: n,
						...o
					}, {
						transformValues: i
					}, r = !0) {
						let s = function(t, e, n) {
							var o;
							const i = {};
							for (const r in t) {
								const t = xe(r, e);
								i[r] = void 0 !== t ? t : null === (o = n.getValue(r)) || void 0 === o ? void 0 : o.get()
							}
							return i
						}(o, e || {}, t);
						if (i && (n && (n = i(n)), o && (o = i(o)), s && (s = i(s))), r) {
							! function(t, e, n) {
								var o, i;
								const r = Object.keys(e).filter((e => !t.hasValue(e))),
									s = r.length;
								if (s)
									for (let a = 0; a < s; a++) {
										const s = r[a],
											u = e[s];
										let l = null;
										Array.isArray(u) && (l = u[0]), null === l && (l = null !== (i = null !== (o = n[s]) && void 0 !== o ? o : t.readValue(s)) && void 0 !== i ? i : e[s]), void 0 !== l && null !== l && ("string" === typeof l && (/^\-?\d*\.?\d+$/.test(l) || se(l)) ? l = parseFloat(l) : !me(l) && re.P.test(u) && (l = (0, ue.T)(s, u)), t.addValue(s, (0, ae.B)(l)), void 0 === n[s] && (n[s] = l), t.setBaseTarget(s, l))
									}
							}(t, o, s);
							const e = to(t, o, s, n);
							n = e.transitionEnd, o = e.target
						}
						return {
							transition: e,
							transitionEnd: n,
							...o
						}
					},
					scrapeMotionValuesFromProps: ct,
					build(t, e, n, o, i) {
						void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), Y(e, n, o, i.transformTemplate)
					},
					render: at
				},
				oo = Fn(no),
				io = Fn({
					...no,
					getBaseTarget: (t, e) => t[e],
					readValueFromInstance(t, e) {
						var n;
						return D.has(e) ? (null === (n = (0, eo.A)(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = ut.has(e) ? e : st(e), t.getAttribute(e))
					},
					scrapeMotionValuesFromProps: dt,
					build(t, e, n, o, i) {
						nt(e, n, o, i.transformTemplate)
					},
					render: lt
				}),
				ro = (t, e) => k(t) ? io(e, {
					enableHardwareAcceleration: !1
				}) : oo(e, {
					enableHardwareAcceleration: !0
				});

			function so(t, e) {
				return e.max === e.min ? 0 : t / (e.max - e.min) * 100
			}
			const ao = {
					correct: (t, e) => {
						if (!e.target) return t;
						if ("string" === typeof t) {
							if (!J.px.test(t)) return t;
							t = parseFloat(t)
						}
						return `${so(t,e.target.x)}% ${so(t,e.target.y)}%`
					}
				},
				uo = "_$css",
				lo = {
					correct: (t, {
						treeScale: e,
						projectionDelta: n
					}) => {
						const o = t,
							i = t.includes("var("),
							r = [];
						i && (t = t.replace($n, (t => (r.push(t), uo))));
						const s = re.P.parse(t);
						if (s.length > 5) return o;
						const a = re.P.createTransformer(t),
							u = "number" !== typeof s[0] ? 1 : 0,
							l = n.x.scale * e.x,
							c = n.y.scale * e.y;
						s[0 + u] /= l, s[1 + u] /= c;
						const d = (0, qe.C)(l, c, .5);
						"number" === typeof s[2 + u] && (s[2 + u] /= d), "number" === typeof s[3 + u] && (s[3 + u] /= d);
						let h = a(s);
						if (i) {
							let t = 0;
							h = h.replace(uo, (() => {
								const e = r[t];
								return t++, e
							}))
						}
						return h
					}
				};
			class co extends o.Component {
				componentDidMount() {
					const {
						visualElement: t,
						layoutGroup: e,
						switchLayoutGroup: n,
						layoutId: o
					} = this.props, {
						projection: i
					} = t;
					var r;
					r = ho, Object.assign(O, r), i && (e.group && e.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
						this.safeToRemove()
					})), i.setOptions({
						...i.options,
						onExitComplete: () => this.safeToRemove()
					})), P.hasEverUpdated = !0
				}
				getSnapshotBeforeUpdate(t) {
					const {
						layoutDependency: e,
						visualElement: n,
						drag: o,
						isPresent: i
					} = this.props, r = n.projection;
					return r ? (r.isPresent = i, o || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? r.promote() : r.relegate() || je.ZP.postRender((() => {
						var t;
						(null === (t = r.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
					}))), null) : null
				}
				componentDidUpdate() {
					const {
						projection: t
					} = this.props.visualElement;
					t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
				}
				componentWillUnmount() {
					const {
						visualElement: t,
						layoutGroup: e,
						switchLayoutGroup: n
					} = this.props, {
						projection: o
					} = t;
					o && (o.scheduleCheckAfterUnmount(), (null === e || void 0 === e ? void 0 : e.group) && e.group.remove(o), (null === n || void 0 === n ? void 0 : n.deregister) && n.deregister(o))
				}
				safeToRemove() {
					const {
						safeToRemove: t
					} = this.props;
					null === t || void 0 === t || t()
				}
				render() {
					return null
				}
			}
			const ho = {
					borderRadius: {
						...ao,
						applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
					},
					borderTopLeftRadius: ao,
					borderTopRightRadius: ao,
					borderBottomLeftRadius: ao,
					borderBottomRightRadius: ao,
					boxShadow: lo
				},
				po = {
					measureLayout: function(t) {
						const [e, n] = ee(), i = (0, o.useContext)(T.p);
						return o.createElement(co, {
							...t,
							layoutGroup: i,
							switchLayoutGroup: (0, o.useContext)(C),
							isPresent: e,
							safeToRemove: n
						})
					}
				};
			var fo = n(2064),
				mo = n(4710);
			const vo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
				go = vo.length,
				yo = t => "string" === typeof t ? parseFloat(t) : t,
				xo = t => "number" === typeof t || J.px.test(t);

			function bo(t, e) {
				var n;
				return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
			}
			const wo = Eo(0, .5, mo.Bn),
				Po = Eo(.5, .95, mo.GE);

			function Eo(t, e, n) {
				return o => o < t ? 0 : o > e ? 1 : n((0, Ge.Y)(t, e, o))
			}

			function To(t, e) {
				t.min = e.min, t.max = e.max
			}

			function Ao(t, e) {
				To(t.x, e.x), To(t.y, e.y)
			}

			function Co(t, e, n, o, i) {
				return t = vn(t -= e, 1 / n, o), void 0 !== i && (t = vn(t, 1 / i, o)), t
			}

			function So(t, e, [n, o, i], r, s) {
				! function(t, e = 0, n = 1, o = .5, i, r = t, s = t) {
					J.aQ.test(e) && (e = parseFloat(e), e = (0, qe.C)(s.min, s.max, e / 100) - s.min);
					if ("number" !== typeof e) return;
					let a = (0, qe.C)(r.min, r.max, o);
					t === r && (a -= e), t.min = Co(t.min, e, n, a, i), t.max = Co(t.max, e, n, a, i)
				}(t, e[n], e[o], e[i], e.scale, r, s)
			}
			const Vo = ["x", "scaleX", "originX"],
				Ro = ["y", "scaleY", "originY"];

			function Lo(t, e, n, o) {
				So(t.x, e, Vo, null === n || void 0 === n ? void 0 : n.x, null === o || void 0 === o ? void 0 : o.x), So(t.y, e, Ro, null === n || void 0 === n ? void 0 : n.y, null === o || void 0 === o ? void 0 : o.y)
			}

			function Mo(t) {
				return 0 === t.translate && 1 === t.scale
			}

			function ko(t) {
				return Mo(t.x) && Mo(t.y)
			}

			function Oo(t, e) {
				return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
			}

			function jo(t) {
				return _e(t.x) / _e(t.y)
			}
			var Do = n(10);
			class Fo {
				constructor() {
					this.members = []
				}
				add(t) {
					(0, Do.y4)(this.members, t), t.scheduleRender()
				}
				remove(t) {
					if ((0, Do.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
						const t = this.members[this.members.length - 1];
						t && this.promote(t)
					}
				}
				relegate(t) {
					const e = this.members.findIndex((e => t === e));
					if (0 === e) return !1;
					let n;
					for (let o = e; o >= 0; o--) {
						const t = this.members[o];
						if (!1 !== t.isPresent) {
							n = t;
							break
						}
					}
					return !!n && (this.promote(n), !0)
				}
				promote(t, e) {
					var n;
					const o = this.lead;
					if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
						o.instance && o.scheduleRender(), t.scheduleRender(), t.resumeFrom = o, e && (t.resumeFrom.preserveOpacity = !0), o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues, t.snapshot.isShared = !0), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
						const {
							crossfade: i
						} = t.options;
						!1 === i && o.hide()
					}
				}
				exitAnimationComplete() {
					this.members.forEach((t => {
						var e, n, o, i, r;
						null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (r = null === (o = t.resumingFrom) || void 0 === o ? void 0 : (i = o.options).onExitComplete) || void 0 === r || r.call(i)
					}))
				}
				scheduleRender() {
					this.members.forEach((t => {
						t.instance && t.scheduleRender(!1)
					}))
				}
				removeLeadSnapshot() {
					this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
				}
			}

			function Bo(t, e, n) {
				let o = `translate3d(${t.x.translate/e.x}px, ${t.y.translate/e.y}px, 0) `;
				if (o += `scale(${1/e.x}, ${1/e.y}) `, n) {
					const {
						rotate: t,
						rotateX: e,
						rotateY: i
					} = n;
					t && (o += `rotate(${t}deg) `), e && (o += `rotateX(${e}deg) `), i && (o += `rotateY(${i}deg) `)
				}
				return o += `scale(${t.x.scale*e.x}, ${t.y.scale*e.y})`, "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)" === o ? "none" : o
			}
			const Io = (t, e) => t.depth - e.depth;
			class Uo {
				constructor() {
					this.children = [], this.isDirty = !1
				}
				add(t) {
					(0, Do.y4)(this.children, t), this.isDirty = !0
				}
				remove(t) {
					(0, Do.cl)(this.children, t), this.isDirty = !0
				}
				forEach(t) {
					this.isDirty && this.children.sort(Io), this.isDirty = !1, this.children.forEach(t)
				}
			}
			const $o = ["", "X", "Y", "Z"];

			function No({
				attachResizeListener: t,
				defaultParent: e,
				measureScroll: n,
				checkIsScrollRoot: o,
				resetTransform: i
			}) {
				return class {
					constructor(t, n = {}, o = (null === e || void 0 === e ? void 0 : e())) {
						this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
							x: 1,
							y: 1
						}, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
							this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
						}, this.updateProjection = () => {
							this.nodes.forEach(qo), this.nodes.forEach(Go)
						}, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = n, this.root = o ? o.root || o : this, this.path = o ? [...o.path, o] : [], this.parent = o, this.depth = o ? o.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
						for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
						this.root === this && (this.nodes = new Uo)
					}
					addEventListener(t, e) {
						return this.eventHandlers.has(t) || this.eventHandlers.set(t, new kn.L), this.eventHandlers.get(t).add(e)
					}
					notifyListeners(t, ...e) {
						const n = this.eventHandlers.get(t);
						null === n || void 0 === n || n.notify(...e)
					}
					hasListeners(t) {
						return this.eventHandlers.has(t)
					}
					registerPotentialNode(t, e) {
						this.potentialNodes.set(t, e)
					}
					mount(e, n = !1) {
						var o;
						if (this.instance) return;
						this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
						const {
							layoutId: i,
							layout: r,
							visualElement: s
						} = this.options;
						if (s && !s.getInstance() && s.mount(e), this.root.nodes.add(this), null === (o = this.parent) || void 0 === o || o.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (r || i) && (this.isLayoutDirty = !0), t) {
							let n;
							const o = () => this.root.updateBlockedByResize = !1;
							t(e, (() => {
								this.root.updateBlockedByResize = !0, clearTimeout(n), n = window.setTimeout(o, 250), P.hasAnimatedSinceResize && (P.hasAnimatedSinceResize = !1, this.nodes.forEach(Xo))
							}))
						}
						i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && s && (i || r) && this.addEventListener("didUpdate", (({
							delta: t,
							hasLayoutChanged: e,
							hasRelativeTargetChanged: n,
							layout: o
						}) => {
							var i, r, a, u, l;
							if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
							const c = null !== (r = null !== (i = this.options.transition) && void 0 !== i ? i : s.getDefaultTransition()) && void 0 !== r ? r : ei,
								{
									onLayoutAnimationStart: d,
									onLayoutAnimationComplete: h
								} = s.getProps(),
								p = !this.targetLayout || !Oo(this.targetLayout, o) || n,
								f = !e && n;
							if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || f || e && (p || !this.currentAnimation)) {
								this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, f);
								const e = {
									...(0, ie.ev)(c, "layout"),
									onPlay: d,
									onComplete: h
								};
								s.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
							} else e || 0 !== this.animationProgress || this.finishAnimation(), this.isLead() && (null === (l = (u = this.options).onExitComplete) || void 0 === l || l.call(u));
							this.targetLayout = o
						}))
					}
					unmount() {
						var t, e;
						this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, je.qY.preRender(this.updateProjection)
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
						var t;
						return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
					}
					startUpdate() {
						var t;
						this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(Ko))
					}
					willUpdate(t = !0) {
						var e, n, o;
						if (this.root.isUpdateBlocked()) return void(null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e));
						if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
						this.isLayoutDirty = !0;
						for (let a = 0; a < this.path.length; a++) {
							const t = this.path[a];
							t.shouldResetTransform = !0, t.updateScroll()
						}
						const {
							layoutId: i,
							layout: r
						} = this.options;
						if (void 0 === i && !r) return;
						const s = null === (o = this.options.visualElement) || void 0 === o ? void 0 : o.getProps().transformTemplate;
						this.prevTransformTemplateValue = null === s || void 0 === s ? void 0 : s(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
					}
					didUpdate() {
						if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Ho);
						this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ni), this.potentialNodes.clear()), this.nodes.forEach(Zo), this.nodes.forEach(zo), this.nodes.forEach(Yo), this.clearAllSnapshots(), je.iW.update(), je.iW.preRender(), je.iW.render())
					}
					clearAllSnapshots() {
						this.nodes.forEach(Wo), this.sharedNodes.forEach(_o)
					}
					scheduleUpdateProjection() {
						je.ZP.preRender(this.updateProjection, !1, !0)
					}
					scheduleCheckAfterUnmount() {
						je.ZP.postRender((() => {
							this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
						}))
					}
					updateSnapshot() {
						if (this.snapshot || !this.instance) return;
						const t = this.measure(),
							e = this.removeTransform(this.removeElementScroll(t));
						ii(e), this.snapshot = {
							measured: t,
							layout: e,
							latestValues: {}
						}
					}
					updateLayout() {
						var t;
						if (!this.instance) return;
						if (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty) return;
						if (this.resumeFrom && !this.resumeFrom.instance)
							for (let o = 0; o < this.path.length; o++) {
								this.path[o].updateScroll()
							}
						const e = this.measure();
						ii(e);
						const n = this.layout;
						this.layout = {
							measured: e,
							actual: this.removeElementScroll(e)
						}, this.layoutCorrected = {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						}, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null === n || void 0 === n ? void 0 : n.actual)
					}
					updateScroll() {
						this.options.layoutScroll && this.instance && (this.isScrollRoot = o(this.instance), this.scroll = n(this.instance))
					}
					resetTransform() {
						var t;
						if (!i) return;
						const e = this.isLayoutDirty || this.shouldResetTransform,
							n = this.projectionDelta && !ko(this.projectionDelta),
							o = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
							r = null === o || void 0 === o ? void 0 : o(this.latestValues, ""),
							s = r !== this.prevTransformTemplateValue;
						e && (n || fn(this.latestValues) || s) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
					}
					measure() {
						const {
							visualElement: t
						} = this.options;
						if (!t) return {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						};
						const e = t.measureViewportBox(),
							{
								scroll: n
							} = this.root;
						return n && (bn(e.x, n.x), bn(e.y, n.y)), e
					}
					removeElementScroll(t) {
						const e = {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						};
						Ao(e, t);
						for (let n = 0; n < this.path.length; n++) {
							const o = this.path[n],
								{
									scroll: i,
									options: r,
									isScrollRoot: s
								} = o;
							if (o !== this.root && i && r.layoutScroll) {
								if (s) {
									Ao(e, t);
									const {
										scroll: n
									} = this.root;
									n && (bn(e.x, -n.x), bn(e.y, -n.y))
								}
								bn(e.x, i.x), bn(e.y, i.y)
							}
						}
						return e
					}
					applyTransform(t, e = !1) {
						const n = {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						};
						Ao(n, t);
						for (let o = 0; o < this.path.length; o++) {
							const t = this.path[o];
							!e && t.options.layoutScroll && t.scroll && t !== t.root && Tn(n, {
								x: -t.scroll.x,
								y: -t.scroll.y
							}), fn(t.latestValues) && Tn(n, t.latestValues)
						}
						return fn(this.latestValues) && Tn(n, this.latestValues), n
					}
					removeTransform(t) {
						var e;
						const n = {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						};
						Ao(n, t);
						for (let o = 0; o < this.path.length; o++) {
							const t = this.path[o];
							if (!t.instance) continue;
							if (!fn(t.latestValues)) continue;
							pn(t.latestValues) && t.updateSnapshot();
							const i = {
								x: {
									min: 0,
									max: 0
								},
								y: {
									min: 0,
									max: 0
								}
							};
							Ao(i, t.measure()), Lo(n, t.latestValues, null === (e = t.snapshot) || void 0 === e ? void 0 : e.layout, i)
						}
						return fn(this.latestValues) && Lo(n, this.latestValues), n
					}
					setTargetDelta(t) {
						this.targetDelta = t, this.root.scheduleUpdateProjection()
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
					resolveTargetDelta() {
						var t;
						const {
							layout: e,
							layoutId: n
						} = this.options;
						var o, i, r;
						this.layout && (e || n) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						}, this.relativeTargetOrigin = {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						}, on(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), Ao(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						}, this.targetWithTransforms = {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						}), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (o = this.target, i = this.relativeTarget, r = this.relativeParent.target, en(o.x, i.x, r.x), en(o.y, i.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : Ao(this.target, this.layout.actual), xn(this.target, this.targetDelta)) : Ao(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						}, this.relativeTargetOrigin = {
							x: {
								min: 0,
								max: 0
							},
							y: {
								min: 0,
								max: 0
							}
						}, on(this.relativeTargetOrigin, this.target, this.relativeParent.target), Ao(this.relativeTarget, this.relativeTargetOrigin)))))
					}
					getClosestProjectingParent() {
						if (this.parent && !fn(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
					}
					calcProjection() {
						var t;
						const {
							layout: e,
							layoutId: n
						} = this.options;
						if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !e && !n) return;
						const o = this.getLead();
						Ao(this.layoutCorrected, this.layout.actual),
							function(t, e, n, o = !1) {
								var i, r;
								const s = n.length;
								if (!s) return;
								let a, u;
								e.x = e.y = 1;
								for (let l = 0; l < s; l++) a = n[l], u = a.projectionDelta, "contents" !== (null === (r = null === (i = a.instance) || void 0 === i ? void 0 : i.style) || void 0 === r ? void 0 : r.display) && (o && a.options.layoutScroll && a.scroll && a !== a.root && Tn(t, {
									x: -a.scroll.x,
									y: -a.scroll.y
								}), u && (e.x *= u.x.scale, e.y *= u.y.scale, xn(t, u)), o && fn(a.latestValues) && Tn(t, a.latestValues))
							}(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
						const {
							target: i
						} = o;
						if (!i) return;
						this.projectionDelta || (this.projectionDelta = {
							x: {
								translate: 0,
								scale: 1,
								origin: 0,
								originPoint: 0
							},
							y: {
								translate: 0,
								scale: 1,
								origin: 0,
								originPoint: 0
							}
						}, this.projectionDeltaWithTransform = {
							x: {
								translate: 0,
								scale: 1,
								origin: 0,
								originPoint: 0
							},
							y: {
								translate: 0,
								scale: 1,
								origin: 0,
								originPoint: 0
							}
						});
						const r = this.treeScale.x,
							s = this.treeScale.y,
							a = this.projectionTransform;
						tn(this.projectionDelta, this.layoutCorrected, i, this.latestValues), this.projectionTransform = Bo(this.projectionDelta, this.treeScale), this.projectionTransform === a && this.treeScale.x === r && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", i))
					}
					hide() {
						this.isVisible = !1
					}
					show() {
						this.isVisible = !0
					}
					scheduleRender(t = !0) {
						var e, n, o;
						null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (o = this.getStack()) || void 0 === o || o.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
					}
					setAnimationOrigin(t, e = !1) {
						var n;
						const o = this.snapshot,
							i = (null === o || void 0 === o ? void 0 : o.latestValues) || {},
							r = {
								...this.latestValues
							},
							s = {
								x: {
									translate: 0,
									scale: 1,
									origin: 0,
									originPoint: 0
								},
								y: {
									translate: 0,
									scale: 1,
									origin: 0,
									originPoint: 0
								}
							};
						this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
						const a = {
								x: {
									min: 0,
									max: 0
								},
								y: {
									min: 0,
									max: 0
								}
							},
							u = null === o || void 0 === o ? void 0 : o.isShared,
							l = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
							c = Boolean(u && !l && !0 === this.options.crossfade && !this.path.some(ti));
						this.animationProgress = 0, this.mixTargetDelta = e => {
							var n;
							const o = e / 1e3;
							var d, h, p, f;
							Jo(s.x, t.x, o), Jo(s.y, t.y, o), this.setTargetDelta(s), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (on(a, this.layout.actual, this.relativeParent.layout.actual), d = this.relativeTarget, h = this.relativeTargetOrigin, p = a, f = o, Qo(d.x, h.x, p.x, f), Qo(d.y, h.y, p.y, f)), u && (this.animationValues = r, function(t, e, n, o, i, r) {
								var s, a, u, l;
								i ? (t.opacity = (0, qe.C)(0, null !== (s = n.opacity) && void 0 !== s ? s : 1, wo(o)), t.opacityExit = (0, qe.C)(null !== (a = e.opacity) && void 0 !== a ? a : 1, 0, Po(o))) : r && (t.opacity = (0, qe.C)(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (l = n.opacity) && void 0 !== l ? l : 1, o));
								for (let c = 0; c < go; c++) {
									const i = `border${vo[c]}Radius`;
									let r = bo(e, i),
										s = bo(n, i);
									void 0 === r && void 0 === s || (r || (r = 0), s || (s = 0), 0 === r || 0 === s || xo(r) === xo(s) ? (t[i] = Math.max((0, qe.C)(yo(r), yo(s), o), 0), (J.aQ.test(s) || J.aQ.test(r)) && (t[i] += "%")) : t[i] = s)
								}(e.rotate || n.rotate) && (t.rotate = (0, qe.C)(e.rotate || 0, n.rotate || 0, o))
							}(r, i, this.latestValues, o, c, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = o
						}, this.mixTargetDelta(0)
					}
					startAnimation(t) {
						var e, n;
						this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (je.qY.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = je.ZP.update((() => {
							P.hasAnimatedSinceResize = !0, this.currentAnimation = (0, fo.j)(0, 1e3, {
								...t,
								onUpdate: e => {
									var n;
									this.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
								},
								onComplete: () => {
									var e;
									null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
								}
							}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
						}))
					}
					completeAnimation() {
						var t;
						this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
					}
					finishAnimation() {
						var t;
						this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
					}
					applyTransformsToTarget() {
						const t = this.getLead();
						let {
							targetWithTransforms: e,
							target: n,
							layout: o,
							latestValues: i
						} = t;
						if (e && n && o) {
							if (this !== t && this.layout && o && ri(this.options.animationType, this.layout.actual, o.actual)) {
								n = this.target || {
									x: {
										min: 0,
										max: 0
									},
									y: {
										min: 0,
										max: 0
									}
								};
								const e = _e(this.layout.actual.x);
								n.x.min = t.target.x.min, n.x.max = n.x.min + e;
								const o = _e(this.layout.actual.y);
								n.y.min = t.target.y.min, n.y.max = n.y.min + o
							}
							Ao(e, n), Tn(e, i), tn(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
						}
					}
					registerSharedNode(t, e) {
						var n, o, i;
						this.sharedNodes.has(t) || this.sharedNodes.set(t, new Fo);
						this.sharedNodes.get(t).add(e), e.promote({
							transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
							preserveFollowOpacity: null === (i = null === (o = e.options.initialPromotionConfig) || void 0 === o ? void 0 : o.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(o, e)
						})
					}
					isLead() {
						const t = this.getStack();
						return !t || t.lead === this
					}
					getLead() {
						var t;
						const {
							layoutId: e
						} = this.options;
						return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
					}
					getPrevLead() {
						var t;
						const {
							layoutId: e
						} = this.options;
						return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
					}
					getStack() {
						const {
							layoutId: t
						} = this.options;
						if (t) return this.root.sharedNodes.get(t)
					}
					promote({
						needsReset: t,
						transition: e,
						preserveFollowOpacity: n
					} = {}) {
						const o = this.getStack();
						o && o.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
							transition: e
						})
					}
					relegate() {
						const t = this.getStack();
						return !!t && t.relegate(this)
					}
					resetRotation() {
						const {
							visualElement: t
						} = this.options;
						if (!t) return;
						let e = !1;
						const n = {};
						for (let o = 0; o < $o.length; o++) {
							const i = "rotate" + $o[o];
							t.getStaticValue(i) && (e = !0, n[i] = t.getStaticValue(i), t.setStaticValue(i, 0))
						}
						if (e) {
							null === t || void 0 === t || t.syncRender();
							for (const e in n) t.setStaticValue(e, n[e]);
							t.scheduleRender()
						}
					}
					getProjectionStyles(t = {}) {
						var e, n, o;
						const i = {};
						if (!this.instance || this.isSVG) return i;
						if (!this.isVisible) return {
							visibility: "hidden"
						};
						i.visibility = "";
						const r = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
						if (this.needsReset) return this.needsReset = !1, i.opacity = "", i.pointerEvents = ft(t.pointerEvents) || "", i.transform = r ? r(this.latestValues, "") : "none", i;
						const s = this.getLead();
						if (!this.projectionDelta || !this.layout || !s.target) {
							const e = {};
							return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = ft(t.pointerEvents) || ""), this.hasProjected && !fn(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
						}
						const a = s.animationValues || s.latestValues;
						this.applyTransformsToTarget(), i.transform = Bo(this.projectionDeltaWithTransform, this.treeScale, a), r && (i.transform = r(a, i.transform));
						const {
							x: u,
							y: l
						} = this.projectionDelta;
						i.transformOrigin = `${100*u.origin}% ${100*l.origin}% 0`, s.animationValues ? i.opacity = s === this ? null !== (o = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : i.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
						for (const c in O) {
							if (void 0 === a[c]) continue;
							const {
								correct: t,
								applyTo: e
							} = O[c], n = t(a[c], s);
							if (e) {
								const t = e.length;
								for (let o = 0; o < t; o++) i[e[o]] = n
							} else i[c] = n
						}
						return this.options.layoutId && (i.pointerEvents = s === this ? ft(t.pointerEvents) || "" : "none"), i
					}
					clearSnapshot() {
						this.resumeFrom = this.snapshot = void 0
					}
					resetTree() {
						this.root.nodes.forEach((t => {
							var e;
							return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
						})), this.root.nodes.forEach(Ho), this.root.sharedNodes.clear()
					}
				}
			}

			function zo(t) {
				t.updateLayout()
			}

			function Yo(t) {
				var e, n, o;
				const i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
				if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
					const {
						actual: e,
						measured: n
					} = t.layout, {
						animationType: o
					} = t.options;
					"size" === o ? cn((t => {
						const n = i.isShared ? i.measured[t] : i.layout[t],
							o = _e(n);
						n.min = e[t].min, n.max = n.min + o
					})) : ri(o, i.layout, e) && cn((t => {
						const n = i.isShared ? i.measured[t] : i.layout[t],
							o = _e(e[t]);
						n.max = n.min + o
					}));
					const r = {
						x: {
							translate: 0,
							scale: 1,
							origin: 0,
							originPoint: 0
						},
						y: {
							translate: 0,
							scale: 1,
							origin: 0,
							originPoint: 0
						}
					};
					tn(r, e, i.layout);
					const s = {
						x: {
							translate: 0,
							scale: 1,
							origin: 0,
							originPoint: 0
						},
						y: {
							translate: 0,
							scale: 1,
							origin: 0,
							originPoint: 0
						}
					};
					i.isShared ? tn(s, t.applyTransform(n, !0), i.measured) : tn(s, e, i.layout);
					const a = !ko(r);
					let u = !1;
					if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
						const {
							snapshot: n,
							layout: o
						} = t.relativeParent;
						if (n && o) {
							const t = {
								x: {
									min: 0,
									max: 0
								},
								y: {
									min: 0,
									max: 0
								}
							};
							on(t, i.layout, n.layout);
							const r = {
								x: {
									min: 0,
									max: 0
								},
								y: {
									min: 0,
									max: 0
								}
							};
							on(r, e, o.actual), Oo(t, r) || (u = !0)
						}
					}
					t.notifyListeners("didUpdate", {
						layout: e,
						snapshot: i,
						delta: s,
						layoutDelta: r,
						hasLayoutChanged: a,
						hasRelativeTargetChanged: u
					})
				} else t.isLead() && (null === (o = (n = t.options).onExitComplete) || void 0 === o || o.call(n));
				t.options.transition = void 0
			}

			function Wo(t) {
				t.clearSnapshot()
			}

			function Ho(t) {
				t.clearMeasurements()
			}

			function Zo(t) {
				const {
					visualElement: e
				} = t.options;
				(null === e || void 0 === e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
			}

			function Xo(t) {
				t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
			}

			function qo(t) {
				t.resolveTargetDelta()
			}

			function Go(t) {
				t.calcProjection()
			}

			function Ko(t) {
				t.resetRotation()
			}

			function _o(t) {
				t.removeLeadSnapshot()
			}

			function Jo(t, e, n) {
				t.translate = (0, qe.C)(e.translate, 0, n), t.scale = (0, qe.C)(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
			}

			function Qo(t, e, n, o) {
				t.min = (0, qe.C)(e.min, n.min, o), t.max = (0, qe.C)(e.max, n.max, o)
			}

			function ti(t) {
				return t.animationValues && void 0 !== t.animationValues.opacityExit
			}
			const ei = {
				duration: .45,
				ease: [.4, 0, .1, 1]
			};

			function ni(t, e) {
				let n = t.root;
				for (let i = t.path.length - 1; i >= 0; i--)
					if (Boolean(t.path[i].instance)) {
						n = t.path[i];
						break
					} const o = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
				o && t.mount(o, !0)
			}

			function oi(t) {
				t.min = Math.round(t.min), t.max = Math.round(t.max)
			}

			function ii(t) {
				oi(t.x), oi(t.y)
			}

			function ri(t, e, n) {
				return "position" === t || "preserve-aspect" === t && ! function(t, e, n = .1) {
					return $e(t, e) <= n
				}(jo(e), jo(n), .2)
			}
			const si = No({
					attachResizeListener: (t, e) => bt(t, "resize", e),
					measureScroll: () => ({
						x: document.documentElement.scrollLeft || document.body.scrollLeft,
						y: document.documentElement.scrollTop || document.body.scrollTop
					}),
					checkIsScrollRoot: () => !0
				}),
				ai = {
					current: void 0
				},
				ui = No({
					measureScroll: t => ({
						x: t.scrollLeft,
						y: t.scrollTop
					}),
					defaultParent: () => {
						if (!ai.current) {
							const t = new si(0, {});
							t.mount(window), t.setOptions({
								layoutScroll: !0
							}), ai.current = t
						}
						return ai.current
					},
					resetTransform: (t, e) => {
						t.style.transform = void 0 !== e ? e : "none"
					},
					checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
				}),
				li = {
					...ke,
					...te,
					...Rn,
					...po
				},
				ci = L(((t, e) => function(t, {
					forwardMotionProps: e = !1
				}, n, o, i) {
					return {
						...k(t) ? gt : yt,
						preloadedFeatures: n,
						useRender: rt(e),
						createVisualElement: o,
						projectionNodeConstructor: i,
						Component: t
					}
				}(t, e, li, ro, ui)))
		},
		9135: function(t, e, n) {
			"use strict";
			n.d(e, {
				T: function() {
					return s
				}
			});
			var o = n(5738),
				i = n(8407),
				r = n(2728);

			function s(t, e) {
				var n;
				let s = (0, r.A)(t);
				return s !== o.h && (s = i.P), null === (n = s.getAnimatableNone) || void 0 === n ? void 0 : n.call(s, e)
			}
		},
		2728: function(t, e, n) {
			"use strict";
			n.d(e, {
				A: function() {
					return s
				}
			});
			var o = n(7405),
				i = n(5738);
			const r = {
					...n(6173).j,
					color: o.$,
					backgroundColor: o.$,
					outlineColor: o.$,
					fill: o.$,
					stroke: o.$,
					borderColor: o.$,
					borderTopColor: o.$,
					borderRightColor: o.$,
					borderBottomColor: o.$,
					borderLeftColor: o.$,
					filter: i.h,
					WebkitFilter: i.h
				},
				s = t => r[t]
		},
		6173: function(t, e, n) {
			"use strict";
			n.d(e, {
				j: function() {
					return s
				}
			});
			var o = n(2969),
				i = n(1248);
			const r = {
					...i.Rx,
					transform: Math.round
				},
				s = {
					borderWidth: o.px,
					borderTopWidth: o.px,
					borderRightWidth: o.px,
					borderBottomWidth: o.px,
					borderLeftWidth: o.px,
					borderRadius: o.px,
					radius: o.px,
					borderTopLeftRadius: o.px,
					borderTopRightRadius: o.px,
					borderBottomRightRadius: o.px,
					borderBottomLeftRadius: o.px,
					width: o.px,
					maxWidth: o.px,
					height: o.px,
					maxHeight: o.px,
					size: o.px,
					top: o.px,
					right: o.px,
					bottom: o.px,
					left: o.px,
					padding: o.px,
					paddingTop: o.px,
					paddingRight: o.px,
					paddingBottom: o.px,
					paddingLeft: o.px,
					margin: o.px,
					marginTop: o.px,
					marginRight: o.px,
					marginBottom: o.px,
					marginLeft: o.px,
					rotate: o.RW,
					rotateX: o.RW,
					rotateY: o.RW,
					rotateZ: o.RW,
					scale: i.bA,
					scaleX: i.bA,
					scaleY: i.bA,
					scaleZ: i.bA,
					skew: o.RW,
					skewX: o.RW,
					skewY: o.RW,
					distance: o.px,
					translateX: o.px,
					translateY: o.px,
					translateZ: o.px,
					x: o.px,
					y: o.px,
					z: o.px,
					perspective: o.px,
					transformPerspective: o.px,
					opacity: i.Fq,
					originX: o.$C,
					originY: o.$C,
					originZ: o.px,
					zIndex: r,
					fillOpacity: i.Fq,
					strokeOpacity: i.Fq,
					numOctaves: r
				}
		},
		10: function(t, e, n) {
			"use strict";

			function o(t, e) {
				-1 === t.indexOf(e) && t.push(e)
			}

			function i(t, e) {
				const n = t.indexOf(e);
				n > -1 && t.splice(n, 1)
			}
			n.d(e, {
				cl: function() {
					return i
				},
				y4: function() {
					return o
				}
			})
		},
		1741: function(t, e, n) {
			"use strict";
			n.d(e, {
				j: function() {
					return o
				}
			});
			const o = "undefined" !== typeof document
		},
		9304: function(t, e, n) {
			"use strict";
			n.d(e, {
				O: function() {
					return i
				}
			});
			var o = n(3454);
			const i = ("undefined" === typeof o || o.env, "production")
		},
		8715: function(t, e, n) {
			"use strict";
			n.d(e, {
				Y: function() {
					return r
				},
				p: function() {
					return i
				}
			});
			var o = n(8488);
			const i = t => Boolean(t && "object" === typeof t && t.mix && t.toValue),
				r = t => (0, o.C)(t) ? t[t.length - 1] || 0 : t
		},
		1560: function(t, e, n) {
			"use strict";
			n.d(e, {
				L: function() {
					return i
				}
			});
			var o = n(10);
			class i {
				constructor() {
					this.subscriptions = []
				}
				add(t) {
					return (0, o.y4)(this.subscriptions, t), () => (0, o.cl)(this.subscriptions, t)
				}
				notify(t, e, n) {
					const o = this.subscriptions.length;
					if (o)
						if (1 === o) this.subscriptions[0](t, e, n);
						else
							for (let i = 0; i < o; i++) {
								const o = this.subscriptions[i];
								o && o(t, e, n)
							}
				}
				getSize() {
					return this.subscriptions.length
				}
				clear() {
					this.subscriptions.length = 0
				}
			}
		},
		6917: function(t, e, n) {
			"use strict";
			n.d(e, {
				w: function() {
					return o
				}
			});
			const o = t => 1e3 * t
		},
		6681: function(t, e, n) {
			"use strict";
			n.d(e, {
				h: function() {
					return i
				}
			});
			var o = n(7294);

			function i(t) {
				const e = (0, o.useRef)(null);
				return null === e.current && (e.current = t()), e.current
			}
		},
		8868: function(t, e, n) {
			"use strict";
			n.d(e, {
				L: function() {
					return i
				}
			});
			var o = n(7294);
			const i = n(1741).j ? o.useLayoutEffect : o.useEffect
		},
		5411: function(t, e, n) {
			"use strict";
			n.d(e, {
				z: function() {
					return i
				}
			});
			var o = n(7294);

			function i(t) {
				return (0, o.useEffect)((() => () => t()), [])
			}
		},
		6034: function(t, e, n) {
			"use strict";
			n.d(e, {
				O: function() {
					return i
				}
			});
			const o = new Set;

			function i(t, e, n) {
				t || o.has(e) || (console.warn(e), n && console.warn(n), o.add(e))
			}
		},
		3234: function(t, e, n) {
			"use strict";
			n.d(e, {
				B: function() {
					return a
				}
			});
			var o = n(4735),
				i = n(9296),
				r = n(1560);
			class s {
				constructor(t) {
					var e;
					this.version = "7.4.0", this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new r.L, this.velocityUpdateSubscribers = new r.L, this.renderSubscribers = new r.L, this.canTrackVelocity = !1, this.updateAndNotify = (t, e = !0) => {
						this.prev = this.current, this.current = t;
						const {
							delta: n,
							timestamp: i
						} = (0, o.$B)();
						this.lastUpdated !== i && (this.timeDelta = n, this.lastUpdated = i, o.ZP.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.updateSubscribers.notify(this.current), this.velocityUpdateSubscribers.getSize() && this.velocityUpdateSubscribers.notify(this.getVelocity()), e && this.renderSubscribers.notify(this.current)
					}, this.scheduleVelocityCheck = () => o.ZP.postRender(this.velocityCheck), this.velocityCheck = ({
						timestamp: t
					}) => {
						t !== this.lastUpdated && (this.prev = this.current, this.velocityUpdateSubscribers.notify(this.getVelocity()))
					}, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e)))
				}
				onChange(t) {
					return this.updateSubscribers.add(t)
				}
				clearListeners() {
					this.updateSubscribers.clear()
				}
				onRenderRequest(t) {
					return t(this.get()), this.renderSubscribers.add(t)
				}
				attach(t) {
					this.passiveEffect = t
				}
				set(t, e = !0) {
					e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
				}
				get() {
					return this.current
				}
				getPrevious() {
					return this.prev
				}
				getVelocity() {
					return this.canTrackVelocity ? (0, i.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
				}
				start(t) {
					return this.stop(), new Promise((e => {
						this.hasAnimated = !0, this.stopAnimation = t(e)
					})).then((() => this.clearAnimation()))
				}
				stop() {
					this.stopAnimation && this.stopAnimation(), this.clearAnimation()
				}
				isAnimating() {
					return !!this.stopAnimation
				}
				clearAnimation() {
					this.stopAnimation = null
				}
				destroy() {
					this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
				}
			}

			function a(t) {
				return new s(t)
			}
		},
		406: function(t, e, n) {
			"use strict";
			n.d(e, {
				i: function() {
					return o
				}
			});
			const o = t => !!(null === t || void 0 === t ? void 0 : t.getVelocity)
		},
		4735: function(t, e, n) {
			"use strict";
			n.d(e, {
				qY: function() {
					return p
				},
				ZP: function() {
					return x
				},
				iW: function() {
					return f
				},
				$B: function() {
					return y
				}
			});
			const o = 1 / 60 * 1e3,
				i = "undefined" !== typeof performance ? () => performance.now() : () => Date.now(),
				r = "undefined" !== typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(i())), o);
			let s = !0,
				a = !1,
				u = !1;
			const l = {
					delta: 0,
					timestamp: 0
				},
				c = ["read", "update", "preRender", "render", "postRender"],
				d = c.reduce(((t, e) => (t[e] = function(t) {
					let e = [],
						n = [],
						o = 0,
						i = !1,
						r = !1;
					const s = new WeakSet,
						a = {
							schedule: (t, r = !1, a = !1) => {
								const u = a && i,
									l = u ? e : n;
								return r && s.add(t), -1 === l.indexOf(t) && (l.push(t), u && i && (o = e.length)), t
							},
							cancel: t => {
								const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), s.delete(t)
							},
							process: u => {
								if (i) r = !0;
								else {
									if (i = !0, [e, n] = [n, e], n.length = 0, o = e.length, o)
										for (let n = 0; n < o; n++) {
											const o = e[n];
											o(u), s.has(o) && (a.schedule(o), t())
										}
									i = !1, r && (r = !1, a.process(u))
								}
							}
						};
					return a
				}((() => a = !0)), t)), {}),
				h = c.reduce(((t, e) => {
					const n = d[e];
					return t[e] = (t, e = !1, o = !1) => (a || g(), n.schedule(t, e, o)), t
				}), {}),
				p = c.reduce(((t, e) => (t[e] = d[e].cancel, t)), {}),
				f = c.reduce(((t, e) => (t[e] = () => d[e].process(l), t)), {}),
				m = t => d[t].process(l),
				v = t => {
					a = !1, l.delta = s ? o : Math.max(Math.min(t - l.timestamp, 40), 1), l.timestamp = t, u = !0, c.forEach(m), u = !1, a && (s = !1, r(v))
				},
				g = () => {
					a = !0, s = !0, u || r(v)
				},
				y = () => l;
			var x = h
		},
		4710: function(t, e, n) {
			"use strict";
			n.d(e, {
				LU: function() {
					return g
				},
				G2: function() {
					return f
				},
				XL: function() {
					return v
				},
				CG: function() {
					return m
				},
				h9: function() {
					return x
				},
				yD: function() {
					return b
				},
				gJ: function() {
					return y
				},
				Z7: function() {
					return d
				},
				X7: function() {
					return p
				},
				Bn: function() {
					return h
				},
				YQ: function() {
					return a
				},
				mZ: function() {
					return c
				},
				Vv: function() {
					return l
				},
				GE: function() {
					return s
				}
			});
			const o = t => e => 1 - t(1 - e),
				i = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
				r = t => e => e * e * ((t + 1) * e - t),
				s = t => t,
				a = (u = 2, t => Math.pow(t, u));
			var u;
			const l = o(a),
				c = i(a),
				d = t => 1 - Math.sin(Math.acos(t)),
				h = o(d),
				p = i(h),
				f = r(1.525),
				m = o(f),
				v = i(f),
				g = (t => {
					const e = r(t);
					return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
				})(1.525),
				y = t => {
					if (1 === t || 0 === t) return t;
					const e = t * t;
					return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
				},
				x = o(y),
				b = t => t < .5 ? .5 * (1 - y(1 - 2 * t)) : .5 * y(2 * t - 1) + .5
		},
		6773: function(t, e, n) {
			"use strict";
			n.d(e, {
				u: function() {
					return o
				}
			});
			const o = (t, e, n) => Math.min(Math.max(n, t), e)
		},
		734: function(t, e, n) {
			"use strict";
			n.d(e, {
				e: function() {
					return o
				}
			});
			const o = t => "number" === typeof t
		},
		2453: function(t, e, n) {
			"use strict";
			n.d(e, {
				C: function() {
					return o
				}
			});
			const o = (t, e, n) => -n * t + n * e + t
		},
		9897: function(t, e, n) {
			"use strict";
			n.d(e, {
				z: function() {
					return i
				}
			});
			const o = (t, e) => n => e(t(n)),
				i = (...t) => t.reduce(o)
		},
		9326: function(t, e, n) {
			"use strict";
			n.d(e, {
				Y: function() {
					return o
				}
			});
			const o = (t, e, n) => {
				const o = e - t;
				return 0 === o ? 1 : (n - t) / o
			}
		},
		9296: function(t, e, n) {
			"use strict";

			function o(t, e) {
				return e ? t * (1e3 / e) : 0
			}
			n.d(e, {
				R: function() {
					return o
				}
			})
		},
		2960: function(t, e, n) {
			"use strict";
			n.d(e, {
				$: function() {
					return i
				}
			});
			var o = n(8059);
			const i = {
				test: (0, n(3953).i)("#"),
				parse: function(t) {
					let e = "",
						n = "",
						o = "",
						i = "";
					return t.length > 5 ? (e = t.substr(1, 2), n = t.substr(3, 2), o = t.substr(5, 2), i = t.substr(7, 2)) : (e = t.substr(1, 1), n = t.substr(2, 1), o = t.substr(3, 1), i = t.substr(4, 1), e += e, n += n, o += o, i += i), {
						red: parseInt(e, 16),
						green: parseInt(n, 16),
						blue: parseInt(o, 16),
						alpha: i ? parseInt(i, 16) / 255 : 1
					}
				},
				transform: o.m.transform
			}
		},
		4582: function(t, e, n) {
			"use strict";
			n.d(e, {
				J: function() {
					return a
				}
			});
			var o = n(1248),
				i = n(2969),
				r = n(6777),
				s = n(3953);
			const a = {
				test: (0, s.i)("hsl", "hue"),
				parse: (0, s.d)("hue", "saturation", "lightness"),
				transform: ({
					hue: t,
					saturation: e,
					lightness: n,
					alpha: s = 1
				}) => "hsla(" + Math.round(t) + ", " + i.aQ.transform((0, r.Nw)(e)) + ", " + i.aQ.transform((0, r.Nw)(n)) + ", " + (0, r.Nw)(o.Fq.transform(s)) + ")"
			}
		},
		7405: function(t, e, n) {
			"use strict";
			n.d(e, {
				$: function() {
					return a
				}
			});
			var o = n(6777),
				i = n(2960),
				r = n(4582),
				s = n(8059);
			const a = {
				test: t => s.m.test(t) || i.$.test(t) || r.J.test(t),
				parse: t => s.m.test(t) ? s.m.parse(t) : r.J.test(t) ? r.J.parse(t) : i.$.parse(t),
				transform: t => (0, o.HD)(t) ? t : t.hasOwnProperty("red") ? s.m.transform(t) : r.J.transform(t)
			}
		},
		8059: function(t, e, n) {
			"use strict";
			n.d(e, {
				m: function() {
					return u
				}
			});
			var o = n(1248),
				i = n(6777),
				r = n(3953);
			const s = (0, i.uZ)(0, 255),
				a = Object.assign(Object.assign({}, o.Rx), {
					transform: t => Math.round(s(t))
				}),
				u = {
					test: (0, r.i)("rgb", "red"),
					parse: (0, r.d)("red", "green", "blue"),
					transform: ({
						red: t,
						green: e,
						blue: n,
						alpha: r = 1
					}) => "rgba(" + a.transform(t) + ", " + a.transform(e) + ", " + a.transform(n) + ", " + (0, i.Nw)(o.Fq.transform(r)) + ")"
				}
		},
		3953: function(t, e, n) {
			"use strict";
			n.d(e, {
				d: function() {
					return r
				},
				i: function() {
					return i
				}
			});
			var o = n(6777);
			const i = (t, e) => n => Boolean((0, o.HD)(n) && o.mj.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
				r = (t, e, n) => i => {
					if (!(0, o.HD)(i)) return i;
					const [r, s, a, u] = i.match(o.KP);
					return {
						[t]: parseFloat(r),
						[e]: parseFloat(s),
						[n]: parseFloat(a),
						alpha: void 0 !== u ? parseFloat(u) : 1
					}
				}
		},
		5738: function(t, e, n) {
			"use strict";
			n.d(e, {
				h: function() {
					return u
				}
			});
			var o = n(8407),
				i = n(6777);
			const r = new Set(["brightness", "contrast", "saturate", "opacity"]);

			function s(t) {
				let [e, n] = t.slice(0, -1).split("(");
				if ("drop-shadow" === e) return t;
				const [o] = n.match(i.KP) || [];
				if (!o) return t;
				const s = n.replace(o, "");
				let a = r.has(e) ? 1 : 0;
				return o !== n && (a *= 100), e + "(" + a + s + ")"
			}
			const a = /([a-z-]*)\(.*?\)/g,
				u = Object.assign(Object.assign({}, o.P), {
					getAnimatableNone: t => {
						const e = t.match(a);
						return e ? e.map(s).join(" ") : t
					}
				})
		},
		8407: function(t, e, n) {
			"use strict";
			n.d(e, {
				P: function() {
					return h
				}
			});
			var o = n(7405),
				i = n(1248),
				r = n(6777);
			const s = "${c}",
				a = "${n}";

			function u(t) {
				"number" === typeof t && (t = `${t}`);
				const e = [];
				let n = 0;
				const u = t.match(r.dA);
				u && (n = u.length, t = t.replace(r.dA, s), e.push(...u.map(o.$.parse)));
				const l = t.match(r.KP);
				return l && (t = t.replace(r.KP, a), e.push(...l.map(i.Rx.parse))), {
					values: e,
					numColors: n,
					tokenised: t
				}
			}

			function l(t) {
				return u(t).values
			}

			function c(t) {
				const {
					values: e,
					numColors: n,
					tokenised: i
				} = u(t), l = e.length;
				return t => {
					let e = i;
					for (let i = 0; i < l; i++) e = e.replace(i < n ? s : a, i < n ? o.$.transform(t[i]) : (0, r.Nw)(t[i]));
					return e
				}
			}
			const d = t => "number" === typeof t ? 0 : t;
			const h = {
				test: function(t) {
					var e, n, o, i;
					return isNaN(t) && (0, r.HD)(t) && (null !== (n = null === (e = t.match(r.KP)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (i = null === (o = t.match(r.dA)) || void 0 === o ? void 0 : o.length) && void 0 !== i ? i : 0) > 0
				},
				parse: l,
				createTransformer: c,
				getAnimatableNone: function(t) {
					const e = l(t);
					return c(t)(e.map(d))
				}
			}
		},
		1248: function(t, e, n) {
			"use strict";
			n.d(e, {
				Fq: function() {
					return r
				},
				Rx: function() {
					return i
				},
				bA: function() {
					return s
				}
			});
			var o = n(6777);
			const i = {
					test: t => "number" === typeof t,
					parse: parseFloat,
					transform: t => t
				},
				r = Object.assign(Object.assign({}, i), {
					transform: (0, o.uZ)(0, 1)
				}),
				s = Object.assign(Object.assign({}, i), {
					default: 1
				})
		},
		2969: function(t, e, n) {
			"use strict";
			n.d(e, {
				$C: function() {
					return c
				},
				RW: function() {
					return r
				},
				aQ: function() {
					return s
				},
				px: function() {
					return a
				},
				vh: function() {
					return u
				},
				vw: function() {
					return l
				}
			});
			var o = n(6777);
			const i = t => ({
					test: e => (0, o.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
					parse: parseFloat,
					transform: e => `${e}${t}`
				}),
				r = i("deg"),
				s = i("%"),
				a = i("px"),
				u = i("vh"),
				l = i("vw"),
				c = Object.assign(Object.assign({}, s), {
					parse: t => s.parse(t) / 100,
					transform: t => s.transform(100 * t)
				})
		},
		6777: function(t, e, n) {
			"use strict";
			n.d(e, {
				HD: function() {
					return u
				},
				KP: function() {
					return r
				},
				Nw: function() {
					return i
				},
				dA: function() {
					return s
				},
				mj: function() {
					return a
				},
				uZ: function() {
					return o
				}
			});
			const o = (t, e) => n => Math.max(Math.min(n, e), t),
				i = t => t % 1 ? Number(t.toFixed(5)) : t,
				r = /(-)?([\d]*\.?[\d])+/g,
				s = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
				a = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

			function u(t) {
				return "string" === typeof t
			}
		}
	},
	function(t) {
		var e = function(e) {
			return t(t.s = e)
		};
		t.O(0, [774, 179], (function() {
			return e(6840), e(387)
		}));
		var n = t.O();
		_N_E = n
	}
]);