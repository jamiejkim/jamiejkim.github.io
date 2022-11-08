(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[871], {
		6010: function(e, r, t) {
			"use strict";

			function o(e) {
				var r, t, n = "";
				if ("string" == typeof e || "number" == typeof e) n += e;
				else if ("object" == typeof e)
					if (Array.isArray(e))
						for (r = 0; r < e.length; r++) e[r] && (t = o(e[r])) && (n && (n += " "), n += t);
					else
						for (r in e) e[r] && (n && (n += " "), n += r);
				return n
			}
			r.Z = function() {
				for (var e, r, t = 0, n = ""; t < arguments.length;)(e = arguments[t++]) && (r = o(e)) && (n && (n += " "), n += r);
				return n
			}
		},
		1210: function(e, r) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.getDomainLocale = function(e, r, t, o) {
				return !1
			};
			("function" === typeof r.default || "object" === typeof r.default && null !== r.default) && "undefined" === typeof r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
				value: !0
			}), Object.assign(r.default, r), e.exports = r.default)
		},
		8418: function(e, r, t) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			});
			var o = t(4941).Z;
			t(5753).default;
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.default = void 0;
			var n = t(2648).Z,
				a = t(7273).Z,
				l = n(t(7294)),
				i = t(6273),
				s = t(2725),
				c = t(3462),
				u = t(1018),
				d = t(7190),
				f = t(1210),
				p = t(8684),
				b = "undefined" !== typeof l.default.useTransition,
				g = {};

			function v(e, r, t, o) {
				if (e && i.isLocalURL(r)) {
					e.prefetch(r, t, o).catch((function(e) {
						0
					}));
					var n = o && "undefined" !== typeof o.locale ? o.locale : e && e.locale;
					g[r + "%" + t + (n ? "%" + n : "")] = !0
				}
			}
			var m = l.default.forwardRef((function(e, r) {
				var t, n = e.href,
					m = e.as,
					y = e.children,
					h = e.prefetch,
					x = e.passHref,
					w = e.replace,
					k = e.soft,
					j = e.shallow,
					O = e.scroll,
					C = e.locale,
					z = e.onClick,
					M = e.onMouseEnter,
					P = e.onTouchStart,
					_ = e.legacyBehavior,
					I = void 0 === _ ? !0 !== Boolean(!1) : _,
					E = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "soft", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
				t = y, !I || "string" !== typeof t && "number" !== typeof t || (t = l.default.createElement("a", null, t));
				var R = !1 !== h,
					S = o(b ? l.default.useTransition() : [], 2)[1],
					N = l.default.useContext(c.RouterContext),
					L = l.default.useContext(u.AppRouterContext);
				L && (N = L);
				var G, Z = l.default.useMemo((function() {
						var e = o(i.resolveHref(N, n, !0), 2),
							r = e[0],
							t = e[1];
						return {
							href: r,
							as: m ? i.resolveHref(N, m) : t || r
						}
					}), [N, n, m]),
					T = Z.href,
					A = Z.as,
					W = l.default.useRef(T),
					D = l.default.useRef(A);
				I && (G = l.default.Children.only(t));
				var U = I ? G && "object" === typeof G && G.ref : r,
					$ = o(d.useIntersection({
						rootMargin: "200px"
					}), 3),
					B = $[0],
					H = $[1],
					K = $[2],
					q = l.default.useCallback((function(e) {
						D.current === A && W.current === T || (K(), D.current = A, W.current = T), B(e), U && ("function" === typeof U ? U(e) : "object" === typeof U && (U.current = e))
					}), [A, U, T, K, B]);
				l.default.useEffect((function() {
					var e = H && R && i.isLocalURL(T),
						r = "undefined" !== typeof C ? C : N && N.locale,
						t = g[T + "%" + A + (r ? "%" + r : "")];
					e && !t && v(N, T, A, {
						locale: r
					})
				}), [A, T, H, C, R, N]);
				var F = {
					ref: q,
					onClick: function(e) {
						I || "function" !== typeof z || z(e), I && G.props && "function" === typeof G.props.onClick && G.props.onClick(e), e.defaultPrevented || function(e, r, t, o, n, a, l, s, c, u) {
							if ("A" !== e.currentTarget.nodeName.toUpperCase() || ! function(e) {
									var r = e.currentTarget.target;
									return r && "_self" !== r || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
								}(e) && i.isLocalURL(t)) {
								e.preventDefault();
								var d = function() {
									"softPush" in r && "softReplace" in r ? r[a ? n ? "softReplace" : "softPush" : n ? "replace" : "push"](t) : r[n ? "replace" : "push"](t, o, {
										shallow: l,
										locale: c,
										scroll: s
									})
								};
								u ? u(d) : d()
							}
						}(e, N, T, A, w, k, j, O, C, L ? S : void 0)
					},
					onMouseEnter: function(e) {
						I || "function" !== typeof M || M(e), I && G.props && "function" === typeof G.props.onMouseEnter && G.props.onMouseEnter(e), i.isLocalURL(T) && v(N, T, A, {
							priority: !0
						})
					},
					onTouchStart: function(e) {
						I || "function" !== typeof P || P(e), I && G.props && "function" === typeof G.props.onTouchStart && G.props.onTouchStart(e), i.isLocalURL(T) && v(N, T, A, {
							priority: !0
						})
					}
				};
				if (!I || x || "a" === G.type && !("href" in G.props)) {
					var J = "undefined" !== typeof C ? C : N && N.locale,
						Q = N && N.isLocaleDomain && f.getDomainLocale(A, J, N.locales, N.domainLocales);
					F.href = Q || p.addBasePath(s.addLocale(A, J, N && N.defaultLocale))
				}
				return I ? l.default.cloneElement(G, F) : l.default.createElement("a", Object.assign({}, E, F), t)
			}));
			r.default = m, ("function" === typeof r.default || "object" === typeof r.default && null !== r.default) && "undefined" === typeof r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
				value: !0
			}), Object.assign(r.default, r), e.exports = r.default)
		},
		7190: function(e, r, t) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			});
			var o = t(4941).Z;
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.useIntersection = function(e) {
				var r = e.rootRef,
					t = e.rootMargin,
					c = e.disabled || !l,
					u = n.useRef(),
					d = o(n.useState(!1), 2),
					f = d[0],
					p = d[1],
					b = o(n.useState(null), 2),
					g = b[0],
					v = b[1];
				n.useEffect((function() {
					if (l) {
						if (u.current && (u.current(), u.current = void 0), c || f) return;
						return g && g.tagName && (u.current = function(e, r, t) {
								var o = function(e) {
										var r, t = {
												root: e.root || null,
												margin: e.rootMargin || ""
											},
											o = s.find((function(e) {
												return e.root === t.root && e.margin === t.margin
											}));
										if (o && (r = i.get(o))) return r;
										var n = new Map,
											a = new IntersectionObserver((function(e) {
												e.forEach((function(e) {
													var r = n.get(e.target),
														t = e.isIntersecting || e.intersectionRatio > 0;
													r && t && r(t)
												}))
											}), e);
										return r = {
											id: t,
											observer: a,
											elements: n
										}, s.push(t), i.set(t, r), r
									}(t),
									n = o.id,
									a = o.observer,
									l = o.elements;
								return l.set(e, r), a.observe(e),
									function() {
										if (l.delete(e), a.unobserve(e), 0 === l.size) {
											a.disconnect(), i.delete(n);
											var r = s.findIndex((function(e) {
												return e.root === n.root && e.margin === n.margin
											}));
											r > -1 && s.splice(r, 1)
										}
									}
							}(g, (function(e) {
								return e && p(e)
							}), {
								root: null == r ? void 0 : r.current,
								rootMargin: t
							})),
							function() {
								null == u.current || u.current(), u.current = void 0
							}
					}
					if (!f) {
						var e = a.requestIdleCallback((function() {
							return p(!0)
						}));
						return function() {
							return a.cancelIdleCallback(e)
						}
					}
				}), [g, c, t, r, f]);
				var m = n.useCallback((function() {
					p(!1)
				}), []);
				return [v, f, m]
			};
			var n = t(7294),
				a = t(9311),
				l = "function" === typeof IntersectionObserver;
			var i = new Map,
				s = [];
			("function" === typeof r.default || "object" === typeof r.default && null !== r.default) && "undefined" === typeof r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
				value: !0
			}), Object.assign(r.default, r), e.exports = r.default)
		},
		1018: function(e, r, t) {
			"use strict";
			Object.defineProperty(r, "__esModule", {
				value: !0
			}), r.GlobalLayoutRouterContext = r.LayoutRouterContext = r.AppRouterContext = void 0;
			var o = (0, t(2648).Z)(t(7294)),
				n = o.default.createContext(null);
			r.AppRouterContext = n;
			var a = o.default.createContext(null);
			r.LayoutRouterContext = a;
			var l = o.default.createContext(null);
			r.GlobalLayoutRouterContext = l
		},
		1664: function(e, r, t) {
			e.exports = t(8418)
		},
		943: function(e, r, t) {
			"use strict";

			function o(e, r) {
				(null == r || r > e.length) && (r = e.length);
				for (var t = 0, o = new Array(r); t < r; t++) o[t] = e[t];
				return o
			}
			t.d(r, {
				Z: function() {
					return o
				}
			})
		},
		3375: function(e, r, t) {
			"use strict";

			function o(e) {
				if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
			}
			t.d(r, {
				Z: function() {
					return o
				}
			})
		},
		9396: function(e, r, t) {
			"use strict";

			function o(e, r) {
				return r = null != r ? r : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : function(e, r) {
					var t = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var o = Object.getOwnPropertySymbols(e);
						r && (o = o.filter((function(r) {
							return Object.getOwnPropertyDescriptor(e, r).enumerable
						}))), t.push.apply(t, o)
					}
					return t
				}(Object(r)).forEach((function(t) {
					Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
				})), e
			}
			t.d(r, {
				Z: function() {
					return o
				}
			})
		},
		9534: function(e, r, t) {
			"use strict";

			function o(e, r) {
				if (null == e) return {};
				var t, o, n = function(e, r) {
					if (null == e) return {};
					var t, o, n = {},
						a = Object.keys(e);
					for (o = 0; o < a.length; o++) t = a[o], r.indexOf(t) >= 0 || (n[t] = e[t]);
					return n
				}(e, r);
				if (Object.getOwnPropertySymbols) {
					var a = Object.getOwnPropertySymbols(e);
					for (o = 0; o < a.length; o++) t = a[o], r.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t])
				}
				return n
			}
			t.d(r, {
				Z: function() {
					return o
				}
			})
		},
		9815: function(e, r, t) {
			"use strict";
			t.d(r, {
				Z: function() {
					return l
				}
			});
			var o = t(943);
			var n = t(3375);
			var a = t(1566);

			function l(e) {
				return function(e) {
					if (Array.isArray(e)) return (0, o.Z)(e)
				}(e) || (0, n.Z)(e) || (0, a.Z)(e) || function() {
					throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
				}()
			}
		},
		1566: function(e, r, t) {
			"use strict";
			t.d(r, {
				Z: function() {
					return n
				}
			});
			var o = t(943);

			function n(e, r) {
				if (e) {
					if ("string" === typeof e) return (0, o.Z)(e, r);
					var t = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, o.Z)(e, r) : void 0
				}
			}
		},
		8575: function(e, r, t) {
			"use strict";

			function o() {
				return o = Object.assign ? Object.assign.bind() : function(e) {
					for (var r = 1; r < arguments.length; r++) {
						var t = arguments[r];
						for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
					}
					return e
				}, o.apply(this, arguments)
			}

			function n(e) {
				if (e < 1) return {
					get: function() {},
					set: function() {}
				};
				var r = 0,
					t = new Map,
					o = new Map;

				function n(n, a) {
					t.set(n, a), ++r > e && (r = 0, o = t, t = new Map)
				}
				return {
					get: function(e) {
						var r = t.get(e);
						return void 0 !== r ? r : void 0 !== (r = o.get(e)) ? (n(e, r), r) : void 0
					},
					set: function(e, r) {
						t.has(e) ? t.set(e, r) : n(e, r)
					}
				}
			}
			t.d(r, {
				m: function() {
					return Z
				}
			});

			function a(e) {
				var r = function(e) {
					var r = e.theme,
						t = e.prefix,
						o = {
							nextPart: new Map,
							validators: []
						};
					return u(Object.entries(e.classGroups), t).forEach((function(e) {
						var t = e[0];
						s(e[1], o, t, r)
					})), o
				}(e);
				return {
					getClassGroupId: function(e) {
						var t = e.split("-");
						return "" === t[0] && 1 !== t.length && t.shift(), l(t, r) || function(e) {
							if (i.test(e)) {
								var r = i.exec(e)[1],
									t = null == r ? void 0 : r.substring(0, r.indexOf(":"));
								if (t) return "arbitrary.." + t
							}
						}(e)
					},
					getConflictingClassGroupIds: function(r) {
						return e.conflictingClassGroups[r] || []
					}
				}
			}

			function l(e, r) {
				var t;
				if (0 === e.length) return r.classGroupId;
				var o = e[0],
					n = r.nextPart.get(o),
					a = n ? l(e.slice(1), n) : void 0;
				if (a) return a;
				if (0 !== r.validators.length) {
					var i = e.join("-");
					return null == (t = r.validators.find((function(e) {
						return (0, e.validator)(i)
					}))) ? void 0 : t.classGroupId
				}
			}
			var i = /^\[(.+)\]$/;

			function s(e, r, t, o) {
				e.forEach((function(e) {
					if ("string" !== typeof e) {
						if ("function" === typeof e) return e.isThemeGetter ? void s(e(o), r, t, o) : void r.validators.push({
							validator: e,
							classGroupId: t
						});
						Object.entries(e).forEach((function(e) {
							var n = e[0];
							s(e[1], c(r, n), t, o)
						}))
					} else {
						("" === e ? r : c(r, e)).classGroupId = t
					}
				}))
			}

			function c(e, r) {
				var t = e;
				return r.split("-").forEach((function(e) {
					t.nextPart.has(e) || t.nextPart.set(e, {
						nextPart: new Map,
						validators: []
					}), t = t.nextPart.get(e)
				})), t
			}

			function u(e, r) {
				return r ? e.map((function(e) {
					return [e[0], e[1].map((function(e) {
						return "string" === typeof e ? r + e : "object" === typeof e ? Object.fromEntries(Object.entries(e).map((function(e) {
							var t = e[0],
								o = e[1];
							return [r + t, o]
						}))) : e
					}))]
				})) : e
			}

			function d(e) {
				return o({
					cache: n(e.cacheSize)
				}, a(e))
			}
			var f = /\s+/;

			function p(e, r) {
				var t = r.getClassGroupId,
					o = r.getConflictingClassGroupIds,
					n = new Set;
				return e.trim().split(f).map((function(e) {
					var r = function(e) {
							var r, t = [],
								o = 0,
								n = 0;
							for (; r = b.exec(e);)
								if (":" === r[0]) {
									if (0 === o) {
										var a = r.index + 1;
										t.push(e.substring(n, a)), n = a
									}
								} else "[" === r[0] ? o++ : "]" === r[0] && o--;
							var l = 0 === t.length ? e : e.substring(n),
								i = l.startsWith("!"),
								s = i ? l.substring(1) : l;
							return {
								modifiers: t,
								hasImportantModifier: i,
								baseClassName: s
							}
						}(e),
						o = r.modifiers,
						n = r.hasImportantModifier,
						a = r.baseClassName,
						l = t(a);
					if (!l) return {
						isTailwindClass: !1,
						originalClassName: e
					};
					var i = function(e) {
						if (e.length <= 1) return e;
						var r = [],
							t = [];
						return e.forEach((function(e) {
							"[" === e[0] ? (r.push.apply(r, t.sort().concat([e])), t = []) : t.push(e)
						})), r.push.apply(r, t.sort()), r
					}(o).join("");
					return {
						isTailwindClass: !0,
						modifierId: n ? i + "!" : i,
						classGroupId: l,
						originalClassName: e
					}
				})).reverse().filter((function(e) {
					if (!e.isTailwindClass) return !0;
					var r = e.modifierId,
						t = e.classGroupId,
						a = r + t;
					return !n.has(a) && (n.add(a), o(t).forEach((function(e) {
						return n.add(r + e)
					})), !0)
				})).reverse().map((function(e) {
					return e.originalClassName
				})).join(" ")
			}
			var b = /[:[\]]/g;

			function g() {
				for (var e, r, t = 0, o = ""; t < arguments.length;)(e = arguments[t++]) && (r = v(e)) && (o && (o += " "), o += r);
				return o
			}

			function v(e) {
				if ("string" === typeof e) return e;
				for (var r, t = "", o = 0; o < e.length; o++) e[o] && (r = v(e[o])) && (t && (t += " "), t += r);
				return t
			}

			function m() {
				for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
				var o, n, a, l = i;

				function i(e) {
					var t = r[0],
						i = r.slice(1).reduce((function(e, r) {
							return r(e)
						}), t());
					return o = d(i), n = o.cache.get, a = o.cache.set, l = s, s(e)
				}

				function s(e) {
					var r = n(e);
					if (r) return r;
					var t = p(e, o);
					return a(e, t), t
				}
				return function() {
					return l(g.apply(null, arguments))
				}
			}

			function y(e) {
				var r = function(r) {
					return r[e] || []
				};
				return r.isThemeGetter = !0, r
			}
			var h = /^\[(.+)\]$/,
				x = /^\d+\/\d+$/,
				w = new Set(["px", "full", "screen"]),
				k = /^(\d+)?(xs|sm|md|lg|xl)$/,
				j = /\d+(%|px|em|rem|vh|vw|pt|pc|in|cm|mm|cap|ch|ex|lh|rlh|vi|vb|vmin|vmax)/,
				O = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

			function C(e) {
				return !Number.isNaN(Number(e)) || w.has(e) || x.test(e) || z(e)
			}

			function z(e) {
				var r, t = null == (r = h.exec(e)) ? void 0 : r[1];
				return !!t && (t.startsWith("length:") || j.test(t))
			}

			function M(e) {
				var r, t = null == (r = h.exec(e)) ? void 0 : r[1];
				return !!t && t.startsWith("size:")
			}

			function P(e) {
				var r, t = null == (r = h.exec(e)) ? void 0 : r[1];
				return !!t && t.startsWith("position:")
			}

			function _(e) {
				var r, t = null == (r = h.exec(e)) ? void 0 : r[1];
				return !!t && (t.startsWith("url(") || t.startsWith("url:"))
			}

			function I(e) {
				var r, t = null == (r = h.exec(e)) ? void 0 : r[1];
				return !!t && (!Number.isNaN(Number(t)) || t.startsWith("number:"))
			}

			function E(e) {
				var r, t = null == (r = h.exec(e)) ? void 0 : r[1];
				return t ? Number.isInteger(Number(t)) : Number.isInteger(Number(e))
			}

			function R(e) {
				return h.test(e)
			}

			function S() {
				return !0
			}

			function N(e) {
				return k.test(e)
			}

			function L(e) {
				var r, t = null == (r = h.exec(e)) ? void 0 : r[1];
				return !!t && O.test(t)
			}

			function G() {
				var e = y("colors"),
					r = y("spacing"),
					t = y("blur"),
					o = y("brightness"),
					n = y("borderColor"),
					a = y("borderRadius"),
					l = y("borderSpacing"),
					i = y("borderWidth"),
					s = y("contrast"),
					c = y("grayscale"),
					u = y("hueRotate"),
					d = y("invert"),
					f = y("gap"),
					p = y("gradientColorStops"),
					b = y("inset"),
					g = y("margin"),
					v = y("opacity"),
					m = y("padding"),
					h = y("saturate"),
					x = y("scale"),
					w = y("sepia"),
					k = y("skew"),
					j = y("space"),
					O = y("translate"),
					G = function() {
						return ["auto", r]
					},
					Z = function() {
						return ["", C]
					},
					T = function() {
						return ["auto", E]
					},
					A = function() {
						return ["", "0", R]
					};
				return {
					cacheSize: 500,
					theme: {
						colors: [S],
						spacing: [C],
						blur: ["none", "", N, z],
						brightness: [E],
						borderColor: [e],
						borderRadius: ["none", "", "full", N, z],
						borderSpacing: [r],
						borderWidth: Z(),
						contrast: [E],
						grayscale: A(),
						hueRotate: [E],
						invert: A(),
						gap: [r],
						gradientColorStops: [e],
						inset: G(),
						margin: G(),
						opacity: [E],
						padding: [r],
						saturate: [E],
						scale: [E],
						sepia: A(),
						skew: [E, R],
						space: [r],
						translate: [r]
					},
					classGroups: {
						aspect: [{
							aspect: ["auto", "square", "video", R]
						}],
						container: ["container"],
						columns: [{
							columns: [N]
						}],
						"break-after": [{
							"break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
						}],
						"break-before": [{
							"break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
						}],
						"break-inside": [{
							"break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
						}],
						"box-decoration": [{
							"box-decoration": ["slice", "clone"]
						}],
						box: [{
							box: ["border", "content"]
						}],
						display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
						float: [{
							float: ["right", "left", "none"]
						}],
						clear: [{
							clear: ["left", "right", "both", "none"]
						}],
						isolation: ["isolate", "isolation-auto"],
						"object-fit": [{
							object: ["contain", "cover", "fill", "none", "scale-down"]
						}],
						"object-position": [{
							object: [].concat(["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], [R])
						}],
						overflow: [{
							overflow: ["auto", "hidden", "clip", "visible", "scroll"]
						}],
						"overflow-x": [{
							"overflow-x": ["auto", "hidden", "clip", "visible", "scroll"]
						}],
						"overflow-y": [{
							"overflow-y": ["auto", "hidden", "clip", "visible", "scroll"]
						}],
						overscroll: [{
							overscroll: ["auto", "contain", "none"]
						}],
						"overscroll-x": [{
							"overscroll-x": ["auto", "contain", "none"]
						}],
						"overscroll-y": [{
							"overscroll-y": ["auto", "contain", "none"]
						}],
						position: ["static", "fixed", "absolute", "relative", "sticky"],
						inset: [{
							inset: [b]
						}],
						"inset-x": [{
							"inset-x": [b]
						}],
						"inset-y": [{
							"inset-y": [b]
						}],
						top: [{
							top: [b]
						}],
						right: [{
							right: [b]
						}],
						bottom: [{
							bottom: [b]
						}],
						left: [{
							left: [b]
						}],
						visibility: ["visible", "invisible"],
						z: [{
							z: [E]
						}],
						basis: [{
							basis: [r]
						}],
						"flex-direction": [{
							flex: ["row", "row-reverse", "col", "col-reverse"]
						}],
						"flex-wrap": [{
							flex: ["wrap", "wrap-reverse", "nowrap"]
						}],
						flex: [{
							flex: ["1", "auto", "initial", "none", R]
						}],
						grow: [{
							grow: A()
						}],
						shrink: [{
							shrink: A()
						}],
						order: [{
							order: ["first", "last", "none", E]
						}],
						"grid-cols": [{
							"grid-cols": [S]
						}],
						"col-start-end": [{
							col: ["auto", {
								span: [E]
							}]
						}],
						"col-start": [{
							"col-start": T()
						}],
						"col-end": [{
							"col-end": T()
						}],
						"grid-rows": [{
							"grid-rows": [S]
						}],
						"row-start-end": [{
							row: ["auto", {
								span: [E]
							}]
						}],
						"row-start": [{
							"row-start": T()
						}],
						"row-end": [{
							"row-end": T()
						}],
						"grid-flow": [{
							"grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
						}],
						"auto-cols": [{
							"auto-cols": ["auto", "min", "max", "fr", R]
						}],
						"auto-rows": [{
							"auto-rows": ["auto", "min", "max", "fr", R]
						}],
						gap: [{
							gap: [f]
						}],
						"gap-x": [{
							"gap-x": [f]
						}],
						"gap-y": [{
							"gap-y": [f]
						}],
						"justify-content": [{
							justify: ["start", "end", "center", "between", "around", "evenly"]
						}],
						"justify-items": [{
							"justify-items": ["start", "end", "center", "stretch"]
						}],
						"justify-self": [{
							"justify-self": ["auto", "start", "end", "center", "stretch"]
						}],
						"align-content": [{
							content: ["start", "end", "center", "between", "around", "evenly"]
						}],
						"align-items": [{
							items: ["start", "end", "center", "baseline", "stretch"]
						}],
						"align-self": [{
							self: ["auto", "start", "end", "center", "stretch", "baseline"]
						}],
						"place-content": [{
							"place-content": [].concat(["start", "end", "center", "between", "around", "evenly"], ["stretch"])
						}],
						"place-items": [{
							"place-items": ["start", "end", "center", "stretch"]
						}],
						"place-self": [{
							"place-self": ["auto", "start", "end", "center", "stretch"]
						}],
						p: [{
							p: [m]
						}],
						px: [{
							px: [m]
						}],
						py: [{
							py: [m]
						}],
						pt: [{
							pt: [m]
						}],
						pr: [{
							pr: [m]
						}],
						pb: [{
							pb: [m]
						}],
						pl: [{
							pl: [m]
						}],
						m: [{
							m: [g]
						}],
						mx: [{
							mx: [g]
						}],
						my: [{
							my: [g]
						}],
						mt: [{
							mt: [g]
						}],
						mr: [{
							mr: [g]
						}],
						mb: [{
							mb: [g]
						}],
						ml: [{
							ml: [g]
						}],
						"space-x": [{
							"space-x": [j]
						}],
						"space-x-reverse": ["space-x-reverse"],
						"space-y": [{
							"space-y": [j]
						}],
						"space-y-reverse": ["space-y-reverse"],
						w: [{
							w: ["auto", "min", "max", "fit", r]
						}],
						"min-w": [{
							"min-w": ["min", "max", "fit", C]
						}],
						"max-w": [{
							"max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
								screen: [N]
							}, N, z]
						}],
						h: [{
							h: G()
						}],
						"min-h": [{
							"min-h": ["min", "max", "fit", C]
						}],
						"max-h": [{
							"max-h": [r, "min", "max", "fit"]
						}],
						"font-size": [{
							text: ["base", N, z]
						}],
						"font-smoothing": ["antialiased", "subpixel-antialiased"],
						"font-style": ["italic", "not-italic"],
						"font-weight": [{
							font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", I]
						}],
						"font-family": [{
							font: [S]
						}],
						"fvn-normal": ["normal-nums"],
						"fvn-ordinal": ["ordinal"],
						"fvn-slashed-zero": ["slashed-zero"],
						"fvn-figure": ["lining-nums", "oldstyle-nums"],
						"fvn-spacing": ["proportional-nums", "tabular-nums"],
						"fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
						tracking: [{
							tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", z]
						}],
						leading: [{
							leading: ["none", "tight", "snug", "normal", "relaxed", "loose", C]
						}],
						"list-style-type": [{
							list: ["none", "disc", "decimal", R]
						}],
						"list-style-position": [{
							list: ["inside", "outside"]
						}],
						"placeholder-color": [{
							placeholder: [e]
						}],
						"placeholder-opacity": [{
							"placeholder-opacity": [v]
						}],
						"text-alignment": [{
							text: ["left", "center", "right", "justify", "start", "end"]
						}],
						"text-color": [{
							text: [e]
						}],
						"text-opacity": [{
							"text-opacity": [v]
						}],
						"text-decoration": ["underline", "overline", "line-through", "no-underline"],
						"text-decoration-style": [{
							decoration: [].concat(["solid", "dashed", "dotted", "double", "none"], ["wavy"])
						}],
						"text-decoration-thickness": [{
							decoration: ["auto", "from-font", C]
						}],
						"underline-offset": [{
							"underline-offset": ["auto", C]
						}],
						"text-decoration-color": [{
							decoration: [e]
						}],
						"text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
						"text-overflow": ["truncate", "text-ellipsis", "text-clip"],
						indent: [{
							indent: [r]
						}],
						"vertical-align": [{
							align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", z]
						}],
						whitespace: [{
							whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap"]
						}],
						break: [{
							break: ["normal", "words", "all"]
						}],
						content: [{
							content: ["none", R]
						}],
						"bg-attachment": [{
							bg: ["fixed", "local", "scroll"]
						}],
						"bg-clip": [{
							"bg-clip": ["border", "padding", "content", "text"]
						}],
						"bg-opacity": [{
							"bg-opacity": [v]
						}],
						"bg-origin": [{
							"bg-origin": ["border", "padding", "content"]
						}],
						"bg-position": [{
							bg: [].concat(["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], [P])
						}],
						"bg-repeat": [{
							bg: ["no-repeat", {
								repeat: ["", "x", "y", "round", "space"]
							}]
						}],
						"bg-size": [{
							bg: ["auto", "cover", "contain", M]
						}],
						"bg-image": [{
							bg: ["none", {
								"gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
							}, _]
						}],
						"bg-color": [{
							bg: [e]
						}],
						"gradient-from": [{
							from: [p]
						}],
						"gradient-via": [{
							via: [p]
						}],
						"gradient-to": [{
							to: [p]
						}],
						rounded: [{
							rounded: [a]
						}],
						"rounded-t": [{
							"rounded-t": [a]
						}],
						"rounded-r": [{
							"rounded-r": [a]
						}],
						"rounded-b": [{
							"rounded-b": [a]
						}],
						"rounded-l": [{
							"rounded-l": [a]
						}],
						"rounded-tl": [{
							"rounded-tl": [a]
						}],
						"rounded-tr": [{
							"rounded-tr": [a]
						}],
						"rounded-br": [{
							"rounded-br": [a]
						}],
						"rounded-bl": [{
							"rounded-bl": [a]
						}],
						"border-w": [{
							border: [i]
						}],
						"border-w-x": [{
							"border-x": [i]
						}],
						"border-w-y": [{
							"border-y": [i]
						}],
						"border-w-t": [{
							"border-t": [i]
						}],
						"border-w-r": [{
							"border-r": [i]
						}],
						"border-w-b": [{
							"border-b": [i]
						}],
						"border-w-l": [{
							"border-l": [i]
						}],
						"border-opacity": [{
							"border-opacity": [v]
						}],
						"border-style": [{
							border: [].concat(["solid", "dashed", "dotted", "double", "none"], ["hidden"])
						}],
						"divide-x": [{
							"divide-x": [i]
						}],
						"divide-x-reverse": ["divide-x-reverse"],
						"divide-y": [{
							"divide-y": [i]
						}],
						"divide-y-reverse": ["divide-y-reverse"],
						"divide-opacity": [{
							"divide-opacity": [v]
						}],
						"divide-style": [{
							divide: ["solid", "dashed", "dotted", "double", "none"]
						}],
						"border-color": [{
							border: [n]
						}],
						"border-color-x": [{
							"border-x": [n]
						}],
						"border-color-y": [{
							"border-y": [n]
						}],
						"border-color-t": [{
							"border-t": [n]
						}],
						"border-color-r": [{
							"border-r": [n]
						}],
						"border-color-b": [{
							"border-b": [n]
						}],
						"border-color-l": [{
							"border-l": [n]
						}],
						"divide-color": [{
							divide: [n]
						}],
						"outline-style": [{
							outline: [""].concat(["solid", "dashed", "dotted", "double", "none"], ["hidden"])
						}],
						"outline-offset": [{
							"outline-offset": [C]
						}],
						"outline-w": [{
							outline: [C]
						}],
						"outline-color": [{
							outline: [e]
						}],
						"ring-w": [{
							ring: Z()
						}],
						"ring-w-inset": ["ring-inset"],
						"ring-color": [{
							ring: [e]
						}],
						"ring-opacity": [{
							"ring-opacity": [v]
						}],
						"ring-offset-w": [{
							"ring-offset": [C]
						}],
						"ring-offset-color": [{
							"ring-offset": [e]
						}],
						shadow: [{
							shadow: ["", "inner", "none", N, L]
						}],
						"shadow-color": [{
							shadow: [S]
						}],
						opacity: [{
							opacity: [v]
						}],
						"mix-blend": [{
							"mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
						}],
						"bg-blend": [{
							"bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
						}],
						filter: [{
							filter: ["", "none"]
						}],
						blur: [{
							blur: [t]
						}],
						brightness: [{
							brightness: [o]
						}],
						contrast: [{
							contrast: [s]
						}],
						"drop-shadow": [{
							"drop-shadow": ["", "none", N, R]
						}],
						grayscale: [{
							grayscale: [c]
						}],
						"hue-rotate": [{
							"hue-rotate": [u]
						}],
						invert: [{
							invert: [d]
						}],
						saturate: [{
							saturate: [h]
						}],
						sepia: [{
							sepia: [w]
						}],
						"backdrop-filter": [{
							"backdrop-filter": ["", "none"]
						}],
						"backdrop-blur": [{
							"backdrop-blur": [t]
						}],
						"backdrop-brightness": [{
							"backdrop-brightness": [o]
						}],
						"backdrop-contrast": [{
							"backdrop-contrast": [s]
						}],
						"backdrop-grayscale": [{
							"backdrop-grayscale": [c]
						}],
						"backdrop-hue-rotate": [{
							"backdrop-hue-rotate": [u]
						}],
						"backdrop-invert": [{
							"backdrop-invert": [d]
						}],
						"backdrop-opacity": [{
							"backdrop-opacity": [v]
						}],
						"backdrop-saturate": [{
							"backdrop-saturate": [h]
						}],
						"backdrop-sepia": [{
							"backdrop-sepia": [w]
						}],
						"border-collapse": [{
							border: ["collapse", "separate"]
						}],
						"border-spacing": [{
							"border-spacing": [l]
						}],
						"border-spacing-x": [{
							"border-spacing-x": [l]
						}],
						"border-spacing-y": [{
							"border-spacing-y": [l]
						}],
						"table-layout": [{
							table: ["auto", "fixed"]
						}],
						transition: [{
							transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", R]
						}],
						duration: [{
							duration: [E]
						}],
						ease: [{
							ease: ["linear", "in", "out", "in-out", R]
						}],
						delay: [{
							delay: [E]
						}],
						animate: [{
							animate: ["none", "spin", "ping", "pulse", "bounce", R]
						}],
						transform: [{
							transform: ["", "gpu", "none"]
						}],
						scale: [{
							scale: [x]
						}],
						"scale-x": [{
							"scale-x": [x]
						}],
						"scale-y": [{
							"scale-y": [x]
						}],
						rotate: [{
							rotate: [E, R]
						}],
						"translate-x": [{
							"translate-x": [O]
						}],
						"translate-y": [{
							"translate-y": [O]
						}],
						"skew-x": [{
							"skew-x": [k]
						}],
						"skew-y": [{
							"skew-y": [k]
						}],
						"transform-origin": [{
							origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", R]
						}],
						accent: [{
							accent: ["auto", e]
						}],
						appearance: ["appearance-none"],
						cursor: [{
							cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", R]
						}],
						"caret-color": [{
							caret: [e]
						}],
						"pointer-events": [{
							"pointer-events": ["none", "auto"]
						}],
						resize: [{
							resize: ["none", "y", "x", ""]
						}],
						"scroll-behavior": [{
							scroll: ["auto", "smooth"]
						}],
						"scroll-m": [{
							"scroll-m": [r]
						}],
						"scroll-mx": [{
							"scroll-mx": [r]
						}],
						"scroll-my": [{
							"scroll-my": [r]
						}],
						"scroll-mt": [{
							"scroll-mt": [r]
						}],
						"scroll-mr": [{
							"scroll-mr": [r]
						}],
						"scroll-mb": [{
							"scroll-mb": [r]
						}],
						"scroll-ml": [{
							"scroll-ml": [r]
						}],
						"scroll-p": [{
							"scroll-p": [r]
						}],
						"scroll-px": [{
							"scroll-px": [r]
						}],
						"scroll-py": [{
							"scroll-py": [r]
						}],
						"scroll-pt": [{
							"scroll-pt": [r]
						}],
						"scroll-pr": [{
							"scroll-pr": [r]
						}],
						"scroll-pb": [{
							"scroll-pb": [r]
						}],
						"scroll-pl": [{
							"scroll-pl": [r]
						}],
						"snap-align": [{
							snap: ["start", "end", "center", "align-none"]
						}],
						"snap-stop": [{
							snap: ["normal", "always"]
						}],
						"snap-type": [{
							snap: ["none", "x", "y", "both"]
						}],
						"snap-strictness": [{
							snap: ["mandatory", "proximity"]
						}],
						touch: [{
							touch: ["auto", "none", "pinch-zoom", "manipulation", {
								pan: ["x", "left", "right", "y", "up", "down"]
							}]
						}],
						select: [{
							select: ["none", "text", "all", "auto"]
						}],
						"will-change": [{
							"will-change": ["auto", "scroll", "contents", "transform", R]
						}],
						fill: [{
							fill: [e]
						}],
						"stroke-w": [{
							stroke: [C]
						}],
						stroke: [{
							stroke: [e]
						}],
						sr: ["sr-only", "not-sr-only"]
					},
					conflictingClassGroups: {
						overflow: ["overflow-x", "overflow-y"],
						overscroll: ["overscroll-x", "overscroll-y"],
						inset: ["inset-x", "inset-y", "top", "right", "bottom", "left"],
						"inset-x": ["right", "left"],
						"inset-y": ["top", "bottom"],
						flex: ["basis", "grow", "shrink"],
						"col-start-end": ["col-start", "col-end"],
						"row-start-end": ["row-start", "row-end"],
						gap: ["gap-x", "gap-y"],
						p: ["px", "py", "pt", "pr", "pb", "pl"],
						px: ["pr", "pl"],
						py: ["pt", "pb"],
						m: ["mx", "my", "mt", "mr", "mb", "ml"],
						mx: ["mr", "ml"],
						my: ["mt", "mb"],
						"font-size": ["leading"],
						"fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
						"fvn-ordinal": ["fvn-normal"],
						"fvn-slashed-zero": ["fvn-normal"],
						"fvn-figure": ["fvn-normal"],
						"fvn-spacing": ["fvn-normal"],
						"fvn-fraction": ["fvn-normal"],
						rounded: ["rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
						"rounded-t": ["rounded-tl", "rounded-tr"],
						"rounded-r": ["rounded-tr", "rounded-br"],
						"rounded-b": ["rounded-br", "rounded-bl"],
						"rounded-l": ["rounded-tl", "rounded-bl"],
						"border-spacing": ["border-spacing-x", "border-spacing-y"],
						"border-w": ["border-w-t", "border-w-r", "border-w-b", "border-w-l"],
						"border-w-x": ["border-w-r", "border-w-l"],
						"border-w-y": ["border-w-t", "border-w-b"],
						"border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
						"border-color-x": ["border-color-r", "border-color-l"],
						"border-color-y": ["border-color-t", "border-color-b"],
						"scroll-m": ["scroll-mx", "scroll-my", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
						"scroll-mx": ["scroll-mr", "scroll-ml"],
						"scroll-my": ["scroll-mt", "scroll-mb"],
						"scroll-p": ["scroll-px", "scroll-py", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
						"scroll-px": ["scroll-pr", "scroll-pl"],
						"scroll-py": ["scroll-pt", "scroll-pb"]
					}
				}
			}
			var Z = m(G)
		}
	}
]);