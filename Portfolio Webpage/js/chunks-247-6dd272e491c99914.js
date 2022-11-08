"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[247], {
		1548: function(e, t, n) {
			function r() {
				return r = Object.assign ? Object.assign.bind() : function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}, r.apply(this, arguments)
			}

			function i(e) {
				return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
					return e.__proto__ || Object.getPrototypeOf(e)
				}, i(e)
			}

			function l(e, t) {
				return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
					return e.__proto__ = t, e
				}, l(e, t)
			}

			function o() {
				if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" === typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}

			function c(e, t, n) {
				return c = o() ? Reflect.construct.bind() : function(e, t, n) {
					var r = [null];
					r.push.apply(r, t);
					var i = new(Function.bind.apply(e, r));
					return n && l(i, n.prototype), i
				}, c.apply(null, arguments)
			}

			function s(e) {
				var t = "function" === typeof Map ? new Map : void 0;
				return s = function(e) {
					if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
					var n;
					if ("function" !== typeof e) throw new TypeError("Super expression must either be null or a function");
					if ("undefined" !== typeof t) {
						if (t.has(e)) return t.get(e);
						t.set(e, r)
					}

					function r() {
						return c(e, arguments, i(this).constructor)
					}
					return r.prototype = Object.create(e.prototype, {
						constructor: {
							value: r,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), l(r, e)
				}, s(e)
			}
			n.d(t, {
				by: function() {
					return N
				}
			});
			var a = function(e) {
				var t, n;

				function r(t, n) {
					var r;
					return void 0 === n && (n = "Failed to resolve asset ID from source"), (r = e.call(this, n) || this).unresolvable = !0, r.input = t, r
				}
				return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, l(t, n), r
			}(s(Error));

			function u(e) {
				var t = e;
				return Boolean(t.unresolvable && "input" in t)
			}

			function f(e) {
				return function() {
					try {
						return e.apply(void 0, arguments)
					} catch (t) {
						if (u(t)) return;
						throw t
					}
				}
			}
			var d = "https://cdn.sanity.io",
				p = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+\.[a-z0-9]+$/,
				y = /^file-([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+$/,
				m = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})-\d+x\d+\.[a-z0-9]+$/,
				h = /^(images|files)\/([a-z0-9]+)\/([a-z0-9][-\w]*)\//,
				k = /^(?:image-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-\d+x\d+-[a-z0-9]+|file-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+)$/;

			function v(e) {
				return g(e) && "string" === typeof e._ref
			}

			function b(e) {
				return g(e) && "string" === typeof e.path
			}

			function I(e) {
				return g(e) && "string" === typeof e.url
			}

			function _(e) {
				var t = e;
				return g(t) && t.asset && "object" === typeof t.asset
			}

			function g(e) {
				return null !== e && !Array.isArray(e) && "object" === typeof e
			}

			function w(e, t) {
				var n = (null == t ? void 0 : t.projectId) || e.projectId,
					r = (null == t ? void 0 : t.dataset) || e.dataset;
				if (!n || !r) throw new Error("Project details (projectId and dataset) required to resolve path for file");
				var i = "originalFilename" in e ? e.originalFilename : void 0;
				return "files/" + n + "/" + r + "/" + e.assetId + "." + e.extension + j(i, e.vanityFilename, t)
			}

			function x(e) {
				return _(e) ? x(e.asset) : v(e) ? void 0 : "string" === typeof e ? (t = e, h.test(E(t) || "") ? O(e) : void 0) : b(e) ? e.path : I(e) ? O(e.url) : void 0;
				var t
			}

			function O(e) {
				if (h.test(e)) return e;
				if (!e.startsWith(d + "/")) throw new a('Failed to resolve path from URL "' + e + '"');
				var t = e.indexOf("?"),
					n = -1 === t ? void 0 : t;
				return e.slice(d.length + 1, n)
			}
			var E = f(O);

			function j(e, t, n) {
				var r = t || e;
				return !1 !== (null == n ? void 0 : n.useVanityName) && r ? "/" + r : ""
			}

			function A(e) {
				if (!y.test(e)) throw new Error("Malformed file asset ID '" + e + '\'. Expected an id like "file-027401f31c3ac1e6d78c5d539ccd1beff72b9b11-pdf"');
				var t = e.split("-");
				return {
					type: "file",
					assetId: t[1],
					extension: t[2]
				}
			}

			function N(e, t) {
				var n, i, l = r({}, t || T(e), {
						useVanityName: !1
					}),
					o = P(e),
					c = e.asset || e,
					s = A(o),
					a = s.assetId,
					u = s.extension,
					f = r({}, function(e) {
						return g(e) && "sanity.fileAsset" === e._type
					}(e) ? e : {}, {
						_id: o,
						_type: "sanity.fileAsset",
						assetId: a,
						extension: u,
						metadata: c.metadata || {},
						url: "",
						path: ""
					});
				return r({}, f, {
					path: w(f, l),
					url: (n = f, i = l, d + "/" + w(n, i))
				})
			}

			function P(e) {
				var t, n = _(e) ? e.asset : e,
					r = "";
				if ("string" === typeof n ? r = $(n) : v(n) ? r = n._ref : g(t = n) && "string" === typeof t._id ? r = n._id : b(n) ? r = D(d + "/" + n.path) : I(n) && (r = D(n.url)), !(r && k.test(r))) throw new a(e);
				return r
			}

			function $(e) {
				if (k.test(e)) return e;
				if (0 === e.indexOf(d + "/images") || 0 === e.indexOf(d + "/files")) return D(e);
				if (h.test(e)) return D(d + "/" + e);
				if (F(e)) return D(d + "/files/a/b/" + e);
				if (z(e)) return D(d + "/images/a/b/" + e);
				throw new a(e)
			}

			function D(e) {
				var t = O(e).split("/"),
					n = t[0],
					r = t[3];
				return n.replace(/s$/, "") + "-" + r.replace(/\./g, "-")
			}

			function T(e) {
				var t = x(e);
				if (!t) throw new a(e, "Failed to resolve project ID and dataset from source");
				var n = t.match(h) || [],
					r = n[2],
					i = n[3];
				if (!r || !i) throw new a(e, "Failed to resolve project ID and dataset from source");
				return {
					projectId: r,
					dataset: i
				}
			}

			function z(e) {
				return m.test(e)
			}

			function F(e) {
				return p.test(e)
			}
		},
		4279: function(e, t, n) {
			n.d(t, {
				YI: function() {
					return K
				}
			});
			var r = Object.defineProperty,
				i = Object.defineProperties,
				l = Object.getOwnPropertyDescriptors,
				o = Object.getOwnPropertySymbols,
				c = Object.prototype.hasOwnProperty,
				s = Object.prototype.propertyIsEnumerable,
				a = (e, t, n) => t in e ? r(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				u = (e, t) => {
					for (var n in t || (t = {})) c.call(t, n) && a(e, n, t[n]);
					if (o)
						for (var n of o(t)) s.call(t, n) && a(e, n, t[n]);
					return e
				};

			function f(e) {
				return "span" === e._type && "text" in e && "string" === typeof e.text && ("undefined" === typeof e.marks || Array.isArray(e.marks) && e.marks.every((e => "string" === typeof e)))
			}

			function d(e) {
				return "string" === typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || Array.isArray(e.markDefs) && e.markDefs.every((e => "string" === typeof e._key))) && "children" in e && Array.isArray(e.children) && e.children.every((e => "object" === typeof e && "_type" in e))
			}

			function p(e) {
				return d(e) && "listItem" in e && "string" === typeof e.listItem && ("undefined" === typeof e.level || "number" === typeof e.level)
			}

			function y(e) {
				return "@list" === e._type
			}

			function m(e) {
				return "@span" === e._type
			}

			function h(e) {
				return "@text" === e._type
			}
			const k = ["strong", "em", "code", "underline", "strike-through"];

			function v(e, t, n) {
				if (!f(e) || !e.marks) return [];
				if (!e.marks.length) return [];
				const r = e.marks.slice(),
					i = {};
				return r.forEach((e => {
					i[e] = 1;
					for (let r = t + 1; r < n.length; r++) {
						const t = n[r];
						if (!(t && f(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e))) break;
						i[e]++
					}
				})), r.sort(((e, t) => function(e, t, n) {
					const r = e[t],
						i = e[n];
					if (r !== i) return i - r;
					const l = k.indexOf(t),
						o = k.indexOf(n);
					if (l !== o) return l - o;
					return t.localeCompare(n)
				}(i, e, t)))
			}

			function b(e, t) {
				return (e.level || 1) === t.level && e.listItem === t.listItem
			}

			function I(e, t, n) {
				return {
					_type: "@list",
					_key: `${e._key||`${t}`}-parent`,
					mode: n,
					level: e.level || 1,
					listItem: e.listItem,
					children: [e]
				}
			}

			function _(e, t) {
				const n = t.level || 1,
					r = t.listItem || "normal",
					i = "string" === typeof t.listItem;
				if (y(e) && (e.level || 1) === n && i && (e.listItem || "normal") === r) return e;
				if (!("children" in e)) return;
				const l = e.children[e.children.length - 1];
				return l && !f(l) ? _(l, t) : void 0
			}

			function g(e) {
				let t = "";
				return e.children.forEach((e => {
					h(e) ? t += e.text : m(e) && (t += g(e))
				})), t
			}
			var w = n(7294),
				x = Object.defineProperty,
				O = Object.defineProperties,
				E = Object.getOwnPropertyDescriptors,
				j = Object.getOwnPropertySymbols,
				A = Object.prototype.hasOwnProperty,
				N = Object.prototype.propertyIsEnumerable,
				P = (e, t, n) => t in e ? x(e, t, {
					enumerable: !0,
					configurable: !0,
					writable: !0,
					value: n
				}) : e[t] = n,
				$ = (e, t) => {
					for (var n in t || (t = {})) A.call(t, n) && P(e, n, t[n]);
					if (j)
						for (var n of j(t)) N.call(t, n) && P(e, n, t[n]);
					return e
				},
				D = (e, t) => O(e, E(t)),
				T = (e, t) => {
					var n = {};
					for (var r in e) A.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && j)
						for (var r of j(e)) t.indexOf(r) < 0 && N.call(e, r) && (n[r] = e[r]);
					return n
				};

			function z(e, t) {
				const n = t,
					{
						block: r,
						list: i,
						listItem: l,
						marks: o,
						types: c
					} = n,
					s = T(n, ["block", "list", "listItem", "marks", "types"]);
				return $(D($({}, e), {
					block: F(e, t, "block"),
					list: F(e, t, "list"),
					listItem: F(e, t, "listItem"),
					marks: F(e, t, "marks"),
					types: F(e, t, "types")
				}), s)
			}

			function F(e, t, n) {
				const r = t[n],
					i = e[n];
				return "function" === typeof r || r && "function" === typeof i ? r : r ? $($({}, i), r) : i
			}
			const M = {
					textDecoration: "underline"
				},
				S = (e, t) => `Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
				B = e => S(`block type "${e}"`, "types");

			function L(e) {
				console.warn(e)
			}
			const C = {
					display: "none"
				},
				R = {
					types: {},
					block: {
						normal: ({
							children: e
						}) => w.createElement("p", null, e),
						blockquote: ({
							children: e
						}) => w.createElement("blockquote", null, e),
						h1: ({
							children: e
						}) => w.createElement("h1", null, e),
						h2: ({
							children: e
						}) => w.createElement("h2", null, e),
						h3: ({
							children: e
						}) => w.createElement("h3", null, e),
						h4: ({
							children: e
						}) => w.createElement("h4", null, e),
						h5: ({
							children: e
						}) => w.createElement("h5", null, e),
						h6: ({
							children: e
						}) => w.createElement("h6", null, e)
					},
					marks: {
						em: ({
							children: e
						}) => w.createElement("em", null, e),
						strong: ({
							children: e
						}) => w.createElement("strong", null, e),
						code: ({
							children: e
						}) => w.createElement("code", null, e),
						underline: ({
							children: e
						}) => w.createElement("span", {
							style: M
						}, e),
						"strike-through": ({
							children: e
						}) => w.createElement("del", null, e),
						link: ({
							children: e,
							value: t
						}) => w.createElement("a", {
							href: null == t ? void 0 : t.href
						}, e)
					},
					list: {
						number: ({
							children: e
						}) => w.createElement("ol", null, e),
						bullet: ({
							children: e
						}) => w.createElement("ul", null, e)
					},
					listItem: ({
						children: e
					}) => w.createElement("li", null, e),
					hardBreak: () => w.createElement("br", null),
					unknownType: ({
						value: e,
						isInline: t
					}) => {
						const n = B(e._type);
						return t ? w.createElement("span", {
							style: C
						}, n) : w.createElement("div", {
							style: C
						}, n)
					},
					unknownMark: ({
						markType: e,
						children: t
					}) => w.createElement("span", {
						className: `unknown__pt__mark__${e}`
					}, t),
					unknownList: ({
						children: e
					}) => w.createElement("ul", null, e),
					unknownListItem: ({
						children: e
					}) => w.createElement("li", null, e),
					unknownBlockStyle: ({
						children: e
					}) => w.createElement("p", null, e)
				},
				Z = (0, w.createContext)(R);

			function K({
				value: e,
				components: t,
				listNestingMode: n,
				onMissingComponent: r = L
			}) {
				const o = r || V,
					c = function(e, t) {
						const n = [];
						let r;
						for (let s = 0; s < e.length; s++) {
							const a = e[s];
							if (a)
								if (p(a))
									if (r)
										if (b(a, r)) r.children.push(a);
										else if ((a.level || 1) > r.level) {
								const e = I(a, s, t);
								if ("html" === t) {
									const t = r.children[r.children.length - 1],
										n = (o = u({}, t), c = {
											children: [...t.children, e]
										}, i(o, l(c)));
									r.children[r.children.length - 1] = n
								} else r.children.push(e);
								r = e
							} else if ((a.level || 1) < r.level) {
								const e = n[n.length - 1],
									i = e && _(e, a);
								if (i) {
									r = i, r.children.push(a);
									continue
								}
								r = I(a, s, t), n.push(r)
							} else if (a.listItem === r.listItem) console.warn("Unknown state encountered for block", a), n.push(a);
							else {
								const e = n[n.length - 1],
									i = e && _(e, {
										level: a.level || 1
									});
								if (i && i.listItem === a.listItem) {
									r = i, r.children.push(a);
									continue
								}
								r = I(a, s, t), n.push(r)
							} else r = I(a, s, t), n.push(r);
							else n.push(a), r = void 0
						}
						var o, c;
						return n
					}(Array.isArray(e) ? e : [e], n || "html"),
					s = (0, w.useContext)(Z),
					a = (0, w.useMemo)((() => t ? z(s, t) : s), [s, t]),
					f = (0, w.useMemo)((() => q(a, o)), [a, o]),
					d = c.map(((e, t) => f({
						node: e,
						index: t,
						isInline: !1,
						renderNode: f
					})));
				return t ? w.createElement(Z.Provider, {
					value: a
				}, d) : w.createElement(w.Fragment, null, d)
			}
			const q = (e, t) => {
				function n(r) {
					const {
						node: i,
						index: l,
						isInline: o
					} = r, c = i._key || `node-${l}`;
					return y(i) ? function(r, i, l) {
						const o = r.children.map(((e, t) => n({
								node: e._key ? e : D($({}, e), {
									_key: `li-${i}-${t}`
								}),
								index: i,
								isInline: !1,
								renderNode: n
							}))),
							c = e.list,
							s = ("function" === typeof c ? c : c[r.listItem]) || e.unknownList;
						if (s === e.unknownList) {
							const e = r.listItem || "bullet";
							t(S(`list style "${e}"`, "list"), {
								nodeType: "listStyle",
								type: e
							})
						}
						return w.createElement(s, {
							key: l,
							value: r,
							index: i,
							isInline: !1,
							renderNode: n
						}, o)
					}(i, l, c) : p(i) ? function(r, i, l) {
						const o = U({
								node: r,
								index: i,
								isInline: !1,
								renderNode: n
							}),
							c = e.listItem,
							s = ("function" === typeof c ? c : c[r.listItem]) || e.unknownListItem;
						if (s === e.unknownListItem) {
							const e = r.listItem || "bullet";
							t(S(`list item style "${e}"`, "listItem"), {
								type: e,
								nodeType: "listItemStyle"
							})
						}
						let a = o.children;
						if (r.style && "normal" !== r.style) {
							const e = r,
								{
									listItem: t
								} = e;
							a = n({
								node: T(e, ["listItem"]),
								index: i,
								isInline: !1,
								renderNode: n
							})
						}
						return w.createElement(s, {
							key: l,
							value: r,
							index: i,
							isInline: !1,
							renderNode: n
						}, a)
					}(i, l, c) : m(i) ? function(r, i, l) {
						const {
							markDef: o,
							markType: c,
							markKey: s
						} = r, a = e.marks[c] || e.unknownMark, u = r.children.map(((e, t) => n({
							node: e,
							index: t,
							isInline: !0,
							renderNode: n
						})));
						a === e.unknownMark && t((e => S(`mark type "${e}"`, "marks"))(c), {
							nodeType: "mark",
							type: c
						});
						return w.createElement(a, {
							key: l,
							text: g(r),
							value: o,
							markType: c,
							markKey: s,
							renderNode: n
						}, u)
					}(i, 0, c) : d(i) ? function(r, i, l, o) {
						const c = U({
								node: r,
								index: i,
								isInline: o,
								renderNode: n
							}),
							{
								_key: s
							} = c,
							a = T(c, ["_key"]),
							u = a.node.style || "normal",
							f = ("function" === typeof e.block ? e.block : e.block[u]) || e.unknownBlockStyle;
						f === e.unknownBlockStyle && t(S(`block style "${u}"`, "block"), {
							nodeType: "blockStyle",
							type: u
						});
						return w.createElement(f, D($({
							key: l
						}, a), {
							value: a.node,
							renderNode: n
						}))
					}(i, l, c, o) : h(i) ? function(t, n) {
						if ("\n" === t.text) {
							const t = e.hardBreak;
							return t ? w.createElement(t, {
								key: n
							}) : "\n"
						}
						return t.text
					}(i, c) : function(r, i, l, o) {
						const c = e.types[r._type],
							s = {
								value: r,
								isInline: o,
								index: i,
								renderNode: n
							};
						if (c) return w.createElement(c, $({
							key: l
						}, s));
						t(B(r._type), {
							nodeType: "block",
							type: r._type
						});
						const a = e.unknownType;
						return w.createElement(a, $({
							key: l
						}, s))
					}(i, l, c, o)
				}
				return n
			};

			function U(e) {
				const {
					node: t,
					index: n,
					isInline: r,
					renderNode: i
				} = e, l = function(e) {
					var t;
					const {
						children: n,
						markDefs: r = []
					} = e;
					if (!n || !n.length) return [];
					const i = n.map(v),
						l = {
							_type: "@span",
							children: [],
							markType: "<unknown>"
						};
					let o = [l];
					for (let c = 0; c < n.length; c++) {
						const e = n[c];
						if (!e) continue;
						const l = i[c] || [];
						let s = 1;
						if (o.length > 1)
							for (; s < o.length; s++) {
								const e = (null == (t = o[s]) ? void 0 : t.markKey) || "",
									n = l.indexOf(e);
								if (-1 === n) break;
								l.splice(n, 1)
							}
						o = o.slice(0, s);
						let a = o[o.length - 1];
						if (a) {
							for (const t of l) {
								const n = r.find((e => e._key === t)),
									i = n ? n._type : t,
									l = {
										_type: "@span",
										_key: e._key,
										children: [],
										markDef: n,
										markType: i,
										markKey: t
									};
								a.children.push(l), o.push(l), a = l
							}
							if (f(e)) {
								const t = e.text.split("\n");
								for (let e = t.length; e-- > 1;) t.splice(e, 0, "\n");
								a.children = a.children.concat(t.map((e => ({
									_type: "@text",
									text: e
								}))))
							} else a.children = a.children.concat(e)
						}
					}
					return l.children
				}(t), o = l.map(((e, t) => i({
					node: e,
					isInline: !0,
					index: t,
					renderNode: i
				})));
				return {
					_key: t._key || `block-${n}`,
					children: o,
					index: n,
					isInline: r,
					node: t
				}
			}

			function V() {}
		}
	}
]);