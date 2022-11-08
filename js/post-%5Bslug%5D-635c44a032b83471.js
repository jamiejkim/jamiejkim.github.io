(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[515], {
		1705: function(e, t, a) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/post/[slug]", function() {
				return a(4397)
			}])
		},
		7466: function(e, t, a) {
			"use strict";
			var i = a(1799),
				n = a(9396),
				l = a(9534),
				s = a(5893),
				r = a(1664),
				o = a.n(r),
				c = a(7294),
				d = a(1612),
				u = c.forwardRef((function(e, t) {
					var a = e.children,
						r = e.href,
						c = e.openNewTab,
						u = e.className,
						m = e.nextLinkProps,
						x = (0, l.Z)(e, ["children", "href", "openNewTab", "className", "nextLinkProps"]);
					return (void 0 !== c ? c : r && !r.startsWith("/") && !r.startsWith("#")) ? (0, s.jsx)("a", (0, n.Z)((0, i.Z)({
						ref: t,
						target: "_blank",
						rel: "noopener noreferrer",
						href: r
					}, x), {
						className: (0, d.Z)("cursor-newtab", u),
						children: a
					})) : (0, s.jsx)(o(), (0, n.Z)((0, i.Z)({
						scroll: !1,
						href: r
					}, m), {
						children: (0, s.jsx)("a", (0, n.Z)((0, i.Z)({
							ref: t
						}, x), {
							className: u,
							children: a
						}))
					}))
				}));
			t.Z = u
		},
		6723: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return g
				}
			});
			var i = a(1799),
				n = a(9396),
				l = a(5893),
				s = a(3871),
				r = a(1163),
				o = a(7294),
				c = a(1612),
				d = a(7643),
				u = a(7537),
				m = a(7466),
				x = {
					out: {
						scale: 1.5,
						display: "block",
						transition: {
							duration: .5
						}
					},
					in: {
						scale: 0,
						display: "block",
						x: "-50%",
						y: "-50%",
						transition: {
							duration: .5
						}
					}
				};

			function g(e) {
				var t = e.title,
					a = e.slug,
					g = e.thumbnail,
					h = (0, o.useState)(!1),
					p = h[0],
					f = h[1],
					v = (0, r.useRouter)().asPath;
				return (0, l.jsx)(m.Z, {
					onClick: function() {
						return f(!0)
					},
					href: "/post/".concat(a),
					children: (0, l.jsxs)(s.E.div, (0, n.Z)((0, i.Z)({}, d.J), {
						className: (0, c.Z)("aspect-w-9 aspect-h-12 relative mb-8 flex rounded-2xl", [p && "z-30"]),
						children: [(0, l.jsx)(s.E.div, {
							variants: x,
							initial: "in",
							className: "absolute top-1/2 left-1/2 z-10 h-0 w-[200vw] scale-0",
							exit: p ? "out" : void 0,
							children: (0, l.jsx)("div", {
								className: "absolute top-1/2 left-1/2 z-30 w-[200vw] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white pb-[100%]"
							})
						}, v), (0, l.jsx)("div", {
							className: "overflow-hidden",
							children: (0, l.jsxs)("div", {
								className: "relative flex h-full flex-col justify-end overflow-hidden rounded-2xl",
								children: [g && (0, l.jsx)("div", {
									className: "not-prose absolute left-0 top-0 h-full w-full",
									children: (0, l.jsx)("img", {
										alt: g.caption || " ",
										loading: "lazy",
										src: (0, u.u)(g.asset).height(640).width(455).auto("format").fit("crop").crop("center").url()
									})
								}), (0, l.jsx)("div", {
									className: "relative z-10 p-5",
									children: (0, l.jsx)("h3", {
										className: "text-white",
										children: t
									})
								}), (0, l.jsx)("div", {
									className: "absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-slate-800 opacity-60"
								})]
							})
						})]
					}))
				})
			}
		},
		7643: function(e, t, a) {
			"use strict";
			a.d(t, {
				J: function() {
					return i
				}
			});
			var i = {
				whileInView: {
					opacity: 1,
					y: "0%"
				},
				initial: {
					opacity: 0,
					y: 120
				},
				animate: {
					opacity: 0,
					y: 120
				},
				transition: {
					duration: .5,
					type: "tween",
					ease: "easeOut"
				},
				viewport: {
					once: !0,
					margin: "-40px"
				}
			}
		},
		7537: function(e, t, a) {
			"use strict";
			a.d(t, {
				u: function() {
					return c
				}
			});
			var i = a(6803),
				n = a.n(i),
				l = a(9729),
				s = a.n(l),
				r = a(3454),
				o = s()({
					projectId: r.env.SANITY_STUDIO_API_PROJECT_ID || "wrtkpx8g",
					dataset: r.env.SANITY_STUDIO_API_DATASET || "production",
					useCdn: !0,
					apiVersion: "2021-08-31"
				});

			function c(e) {
				return n()(o).image(e)
			}
		},
		1612: function(e, t, a) {
			"use strict";
			a.d(t, {
				Z: function() {
					return s
				}
			});
			var i = a(9815),
				n = a(6010),
				l = a(8575);

			function s() {
				for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
				return (0, l.m)(n.Z.apply(void 0, (0, i.Z)(t)))
			}
		},
		4397: function(e, t, a) {
			"use strict";
			a.r(t), a.d(t, {
				__N_SSG: function() {
					return L
				},
				default: function() {
					return B
				}
			});
			var i = a(1799),
				n = a(9396),
				l = a(5893),
				s = a(521),
				r = a(3871),
				o = a(1163),
				c = a(7294),
				d = a(1612),
				u = a(7466);

			function m() {
				return (0, l.jsx)(u.Z, {
					href: "/",
					children: (0, l.jsxs)(r.E.div, {
						className: "relative flex gap-4",
						whileHover: "hover",
						animate: "default",
						children: [(0, l.jsx)(r.E.svg, {
							variants: {
								default: {
									opacity: 1
								},
								hover: {
									opacity: 0
								}
							},
							xmlns: "http://www.w3.org/2000/svg",
							fill: "none",
							viewBox: "0 0 24 24",
							strokeWidth: "1.5",
							stroke: "currentColor",
							className: "h-6 w-6",
							children: (0, l.jsx)(r.E.path, {
								strokeLinecap: "round",
								strokeLinejoin: "round",
								d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
							})
						}), (0, l.jsxs)(r.E.svg, {
							className: "absolute left-0",
							variants: {
								default: {
									opacity: 0
								},
								hover: {
									opacity: 1,
									transition: {
										delay: .1
									}
								}
							},
							width: "24",
							height: "24",
							viewBox: "0 0 24 24",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							children: [(0, l.jsx)(r.E.path, {
								variants: {
									default: {
										pathLength: 0
									},
									hover: {
										pathLength: 1,
										transition: {
											delay: 0,
											duration: .3
										}
									}
								},
								d: "M11.25 18.75L4.5 12L11.25 5.25",
								stroke: "black",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							}), (0, l.jsx)(r.E.path, {
								variants: {
									default: {
										pathLength: 0
									},
									hover: {
										pathLength: 1,
										transition: {
											delay: .1,
											duration: .3
										}
									}
								},
								d: "M5 12L20 12",
								stroke: "black",
								strokeWidth: "1.5",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})]
						}), "Back home"]
					})
				})
			}
			var x = a(9534),
				g = (0, c.forwardRef)((function(e, t) {
					var a = e.className,
						s = e.children,
						r = (0, x.Z)(e, ["className", "children"]);
					return (0, l.jsx)("div", (0, n.Z)((0, i.Z)({
						ref: t,
						className: (0, d.Z)("m-auto max-w-4xl px-10 pb-10 sm:px-20 sm:pb-32", a)
					}, r), {
						children: s
					}))
				})),
				h = (0, r.E)(g),
				p = a(6723),
				f = a(7643),
				v = a(7537);

			function j(e) {
				var t = e.transitionColor;
				return (0, l.jsx)("div", {
					className: (0, d.Z)("absolute bottom-0 left-0 h-[320px] w-full", ["white" === t && "bg-white"], ["gray" === t && "bg-slate-100"], ["dark" === t && "bg-slate-800"])
				})
			}

			function w(e) {
				var t = e.imageAsset,
					a = e.alt,
					s = e.horizontalPadding,
					r = e.backgroundColor,
					o = e.verticalPadding,
					c = e.transition,
					u = e.transitionColor;
				return (0, l.jsxs)("div", {
					className: (0, d.Z)("relative", ["white" === r && "bg-white"], ["gray" === r && "bg-slate-100"], ["dark" === r && "bg-slate-800"]),
					children: [c && u && (0, l.jsx)(j, {
						transitionColor: u
					}), (0, l.jsx)(h, (0, n.Z)((0, i.Z)({}, f.J), {
						className: (0, d.Z)("not-prose relative flex max-w-screen-2xl justify-center overflow-hidden", [s ? "px-10 pb-16 sm:px-20 sm:pb-20" : "w-full max-w-none px-0 py-0"], [o && "py-10 sm:py-20"]),
						children: (0, l.jsx)("img", {
							alt: a || " ",
							loading: "lazy",
							src: (0, v.u)(t).width(1536).auto("format").url(),
							className: (0, d.Z)([!s && "w-full"])
						})
					}))]
				})
			}
			var y = a(1548),
				b = {
					projectId: "wrtkpx8g",
					dataset: "production"
				};

			function k(e) {
				return (0, y.by)(e, b)
			}

			function Z(e) {
				var t = e.webmUrl,
					a = e.mp4Url,
					s = e.backgroundColor,
					r = e.transition,
					o = e.transitionColor,
					c = e.horizontalPadding,
					u = e.verticalPadding,
					m = (0, x.Z)(e, ["webmUrl", "mp4Url", "backgroundColor", "transition", "transitionColor", "horizontalPadding", "verticalPadding"]),
					g = k(t),
					p = k(a);
				return (0, l.jsxs)("div", {
					className: (0, d.Z)("relative", ["white" === s && "bg-white"], ["gray" === s && "bg-slate-100"], ["dark" === s && "bg-slate-800"]),
					children: [r && o && (0, l.jsx)(j, {
						transitionColor: o
					}), (0, l.jsx)(h, (0, n.Z)((0, i.Z)({}, f.J), {
						className: (0, d.Z)("not-prose relative flex max-w-screen-2xl justify-center overflow-hidden", [c ? "px-20 pb-20" : "w-full max-w-none px-0 py-0"], [u && "py-20"]),
						children: (0, l.jsxs)("video", (0, n.Z)((0, i.Z)({
							className: "w-full",
							autoPlay: !0,
							loop: !0,
							muted: !0,
							playsInline: !0
						}, m), {
							children: [(0, l.jsx)("source", {
								src: g.url,
								type: "video/webm"
							}), (0, l.jsx)("source", {
								src: p.url,
								type: "video/mp4"
							})]
						}))
					}))]
				})
			}

			function N(e) {
				var t = e.images,
					a = e.backgroundColor,
					s = e.verticalPadding,
					o = e.transition,
					c = e.transitionColor;
				return (0, l.jsxs)("div", {
					className: (0, d.Z)("relative", ["white" === a && "bg-white"], ["gray" === a && "bg-slate-100"]),
					children: [o && c && (0, l.jsx)(j, {
						transitionColor: c
					}), (0, l.jsx)(g, {
						className: (0, d.Z)("max-w-screen-2xl", [2 === t.length && "grid grid-cols-1 gap-10 sm:grid-cols-2 sm:grid-rows-1"], [4 === t.length && "grid gap-10 sm:grid-cols-2 sm:grid-rows-3"], [s && "py-20"]),
						children: t.map((function(e, a) {
							var s = 1376,
								o = 774,
								c = 668,
								u = 774,
								m = function() {
									if (4 === t.length) {
										if (0 === a || 3 === a) return {
											imageWidth: s,
											imageHeight: o
										};
										if (1 === a || 2 === a) return {
											imageWidth: c,
											imageHeight: u
										}
									} else if (2 === t.length) return {
										imageWidth: 668,
										imageHeight: 752
									};
									return {
										imageWidth: s,
										imageHeight: o
									}
								}(),
								x = m.imageWidth,
								g = m.imageHeight;
							return (0, l.jsx)("div", {
								className: (0, d.Z)("not-prose", [4 === t.length && [
									[(0 === a || 3 === a) && "aspect-w-16 aspect-h-9 col-span-2"],
									[(1 === a || 2 === a) && "aspect-y-8 aspect-w-8 col-span-1"]
								], 2 === t.length && ["aspect-w-8 aspect-h-9 col-span-1"]]),
								children: (0, l.jsx)(r.E.img, (0, n.Z)((0, i.Z)({}, f.J), {
									alt: e.alt || " ",
									loading: "lazy",
									src: (0, v.u)(e.asset).width(x).height(g).auto("format").fit("crop").crop("center").url()
								}))
							}, a)
						}))
					})]
				})
			}

			function C(e) {
				var t = e.client,
					a = e.myContributions;
				return (0, l.jsxs)(g, {
					className: "m-auto grid grid-cols-1 gap-4 sm:grid-cols-4",
					children: [(0, l.jsxs)(r.E.div, (0, n.Z)((0, i.Z)({}, f.J), {
						children: [(0, l.jsx)("p", {
							children: (0, l.jsx)("strong", {
								className: "font-bold",
								children: "Client"
							})
						}), (0, l.jsx)("p", {
							children: t
						})]
					})), (0, l.jsxs)(r.E.div, (0, n.Z)((0, i.Z)({}, f.J), {
						className: "col-span-2",
						children: [(0, l.jsx)("p", {
							children: (0, l.jsx)("strong", {
								className: "font-bold",
								children: "Role"
							})
						}), (0, l.jsx)("p", {
							className: "font-extralight",
							children: a
						})]
					}))]
				})
			}
			var _ = function(e) {
					var t = e.text,
						a = e.backgroundColor;
					return (0, l.jsx)(r.E.div, (0, n.Z)((0, i.Z)({}, f.J), {
						className: (0, d.Z)("top-0 max-w-lg pt-10 text-xl font-extralight leading-relaxed tracking-tight sm:sticky sm:pt-20 sm:text-2xl sm:leading-relaxed", ["dark" === a && "text-slate-300"]),
						children: t
					}))
				},
				P = function(e) {
					var t = e.displayType,
						a = e.textPosition,
						s = e.singleImage,
						o = e.multipleImages,
						u = e.backgroundColor;
					return (0, l.jsx)("div", {
						className: (0, d.Z)("not-prose max-w-2xl flex-1", ["left" === a && "lg:ml-auto"], ["right" === a && "lg:mr-auto"], [o && "space-y-10"]),
						children: "single" === t ? s && (0, l.jsx)(r.E.img, (0, n.Z)((0, i.Z)({}, f.J), {
							alt: s.alt || " ",
							loading: "lazy",
							src: (0, v.u)(s.asset).width(1024).auto("format").url()
						}), s.alt) : o && o.map((function(e, t) {
							return (0, c.createElement)(r.E.div, (0, n.Z)((0, i.Z)({}, f.J), {
								key: e.alt,
								children: [(0, l.jsx)("img", {
									alt: e.alt || " ",
									loading: "lazy",
									src: (0, v.u)(e.asset).width(1024).auto("format").url()
								}), (0, l.jsx)("p", {
									className: (0, d.Z)("mt-3", ["dark" === u && "text-slate-300"]),
									children: e.caption
								})]
							}))
						}))
					})
				};

			function E(e) {
				var t = e.text,
					a = e.displayType,
					s = e.textPosition,
					o = e.singleImage,
					u = e.multipleImages,
					m = e.backgroundColor,
					x = e.verticalPadding,
					h = e.stackedImages;
				return (0, l.jsx)("div", {
					className: (0, d.Z)(["white" === m && "bg-white"], ["gray" === m && "bg-slate-100"], ["dark" === m && "bg-slate-800"]),
					children: (0, l.jsx)(g, {
						className: (0, d.Z)("flex max-w-screen-2xl items-start gap-10", "flex-col items-center", "lg:flex-row lg:items-start", [x && "py-10 sm:py-20"]),
						children: "left" === s ? (0, l.jsxs)(l.Fragment, {
							children: [(0, l.jsxs)("div", {
								className: (0, d.Z)("flex h-auto max-w-2xl flex-1 flex-col", [!h && "self-stretch"]),
								children: [(0, l.jsx)("div", {
									className: (0, d.Z)("relative pb-10 sm:pb-20", ["m-auto", h && "lg:min-h-[75vh]", [!h && "flex-1"]]),
									children: (0, l.jsx)(_, {
										backgroundColor: m,
										text: t
									})
								}), (0, l.jsx)("div", {
									className: "not-prose flex-1 space-y-10",
									children: null === h || void 0 === h ? void 0 : h.map((function(e, t) {
										return (0, c.createElement)(r.E.div, (0, n.Z)((0, i.Z)({}, f.J), {
											key: e.alt,
											children: [(0, l.jsx)("img", {
												alt: e.alt || " ",
												loading: "lazy",
												src: (0, v.u)(e.asset).width(1024).auto("format").url()
											}), (0, l.jsx)("p", {
												className: (0, d.Z)("mt-3", ["dark" === m && "text-slate-300"]),
												children: e.caption
											})]
										}))
									}))
								})]
							}), (0, l.jsx)(P, {
								displayType: a,
								textPosition: s,
								singleImage: o,
								multipleImages: u,
								backgroundColor: m
							})]
						}) : "right" === s && (0, l.jsxs)(l.Fragment, {
							children: [(0, l.jsx)(P, {
								displayType: a,
								textPosition: s,
								singleImage: o,
								multipleImages: u,
								backgroundColor: m
							}), (0, l.jsxs)("div", {
								className: (0, d.Z)("flex h-auto max-w-2xl flex-1 flex-col", [!h && "self-stretch"]),
								children: [(0, l.jsx)("div", {
									className: (0, d.Z)("relative pb-10 sm:pb-20", [h && "lg:min-h-[75vh]"], [!h && "flex-1"]),
									children: (0, l.jsx)(_, {
										backgroundColor: m,
										text: t
									})
								}), h && (0, l.jsx)("div", {
									className: "not-prose flex-1 space-y-10",
									children: null === h || void 0 === h ? void 0 : h.map((function(e, t) {
										return (0, c.createElement)(r.E.div, (0, n.Z)((0, i.Z)({}, f.J), {
											key: e.alt,
											children: [(0, l.jsx)("img", {
												alt: e.alt || " ",
												loading: "lazy",
												src: (0, v.u)(e.asset).width(1024).auto("format").url()
											}), (0, l.jsx)("p", {
												className: (0, d.Z)("mt-3", ["dark" === m && "text-slate-300"]),
												children: e.caption
											})]
										}))
									}))
								})]
							})]
						})
					})
				})
			}
			var I = a(4279),
				T = {
					block: {
						large: function(e) {
							var t = e.children;
							return (0, l.jsx)("p", {
								className: "text-xl font-extralight leading-relaxed tracking-tight last:mb-0 sm:text-2xl sm:leading-relaxed",
								children: t
							})
						}
					}
				};

			function z(e) {
				var t = e.heading,
					a = e.subtitle,
					s = e.body,
					o = e.backgroundColor,
					c = e.verticalPadding;
				return (0, l.jsx)(r.E.div, (0, n.Z)((0, i.Z)({}, f.J), {
					className: (0, d.Z)(["white" === o && "bg-white"], ["gray" === o && "bg-slate-100"]),
					children: (0, l.jsxs)(g, {
						className: (0, d.Z)("sm:pb-20", [c && "py-10 sm:py-20"]),
						children: [(0, l.jsxs)("h1", {
							className: "text-2xl font-medium tracking-tight sm:text-4xl",
							children: [t, (0, l.jsx)("span", {
								className: "block font-extralight text-slate-500",
								children: a
							})]
						}), s && (0, l.jsx)(I.YI, {
							value: s,
							components: T
						})]
					})
				}))
			}

			function J(e) {
				var t = e.url,
					a = (0, x.Z)(e, ["url"]);
				return (0, l.jsx)(g, {
					className: "max-w-7xl",
					children: (0, l.jsx)(r.E.div, (0, n.Z)((0, i.Z)({}, f.J), {
						className: "aspect-w-16 aspect-h-9",
						children: (0, l.jsx)("iframe", (0, i.Z)({
							width: "560",
							height: "315",
							src: t,
							title: "YouTube video player",
							frameBorder: "0",
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							allowFullScreen: !0
						}, a))
					}))
				})
			}
			var L = !0,
				B = function(e) {
					var t = (0, s.v)().scrollY,
						a = (0, c.useState)(!1),
						u = a[0],
						x = a[1],
						h = (0, c.useState)(!1),
						v = h[0],
						j = h[1],
						y = (0, c.useRef)(null),
						b = (0, o.useRouter)(),
						k = e.post,
						_ = k.projectContent,
						P = k.otherProjects,
						I = k.slug,
						T = P.map((function(e, t) {
							e._id;
							var a = e.title,
								i = e.slug,
								n = e.thumbnail;
							return i && t % 2 == 0 && (0, l.jsx)("div", {
								children: (0, l.jsx)(p.Z, {
									title: a,
									thumbnail: n,
									slug: i.current
								}, i.current)
							}, i.current)
						})),
						L = P.map((function(e, t) {
							e._id;
							var a = e.title,
								i = e.slug,
								n = e.thumbnail;
							return i && t % 2 !== 0 && (0, l.jsx)("div", {
								children: (0, l.jsx)(p.Z, {
									title: a,
									thumbnail: n,
									slug: i.current
								}, i.current)
							}, i.current)
						}));
					return (0, c.useEffect)((function() {
						t.onChange((function(e) {
							var a;
							if (!(e < 0)) {
								var i = t.getPrevious() - e < 0;
								y.current && (null === (a = y.current) || void 0 === a ? void 0 : a.getBoundingClientRect().top) >= 0 ? (x(!1), j(!0)) : (j(!1), x(!i))
							}
						}))
					}), [t]), b.isFallback || e.post ? (0, l.jsx)(r.E.main, {
						initial: "initial",
						animate: "animate",
						variants: {
							initial: {
								opacity: 0
							},
							animate: {
								opacity: 1
							}
						},
						children: (0, l.jsxs)("article", {
							className: "m-auto w-full",
							children: [(0, l.jsx)(g, {
								className: (0, d.Z)("flex max-w-screen-2xl items-center md:h-[33vh]", "mb-10 py-4 md:mb-0"),
								children: (0, l.jsx)(r.E.div, {
									ref: y,
									children: (0, l.jsx)(m, {})
								})
							}), (0, l.jsx)(r.E.div, {
								variants: {
									instantHide: {
										opacity: 0,
										display: "none",
										transition: {
											duration: 0
										}
									},
									hidden: {
										opacity: 0,
										transitionEnd: {
											display: "none"
										}
									},
									visible: {
										display: "block",
										opacity: 1
									}
								},
								animate: u ? "visible" : v ? "instantHide" : "hidden",
								className: "fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white",
								children: (0, l.jsx)(g, {
									className: "flex max-w-screen-2xl items-center sm:py-4",
									children: (0, l.jsx)(m, {})
								})
							}), (0, l.jsx)("div", {
								children: (0, l.jsx)("div", {
									className: "m-auto flex w-full justify-center",
									children: (0, l.jsxs)("div", {
										className: "prose prose-slate w-full max-w-none",
										children: [_ && _.map((function(e, t) {
											var a, i, n, s;
											return "textBlock" === e._type ? (0, l.jsx)(z, {
												heading: e.heading,
												subtitle: e.subtitle,
												verticalPadding: e.config.verticalPadding,
												body: e.text,
												backgroundColor: e.config.backgroundColor
											}, "".concat(e._type, "_").concat(t)) : "projectDetails" === e._type ? (0, l.jsx)(C, {
												client: e.client,
												myContributions: e.myContributions
											}, "".concat(e._type, "_").concat(t)) : "fullWidthVideo" === e._type ? (0, l.jsx)(Z, {
												verticalPadding: e.config.verticalPadding,
												horizontalPadding: e.config.horizontalPadding,
												backgroundColor: e.config.backgroundColor,
												transition: null === (a = e.config.transitionBlock) || void 0 === a ? void 0 : a.transition,
												transitionColor: null === (i = e.config.transitionBlock) || void 0 === i ? void 0 : i.transitionColor,
												webmUrl: e.videoFiles[0].asset,
												mp4Url: e.videoFiles[1].asset
											}, "".concat(e._type, "_").concat(t)) : "fullWidthImage" === e._type ? (0, l.jsx)(w, {
												imageAsset: e.image.asset,
												alt: e.image.alt,
												verticalPadding: e.config.verticalPadding,
												horizontalPadding: e.image.horizontalPadding,
												backgroundColor: e.config.backgroundColor,
												transition: null === (n = e.config.transitionBlock) || void 0 === n ? void 0 : n.transition,
												transitionColor: null === (s = e.config.transitionBlock) || void 0 === s ? void 0 : s.transitionColor
											}, "".concat(e._type, "_").concat(t)) : "tallBlock" === e._type ? (0, l.jsx)(E, {
												text: e.text,
												displayType: e.displayType,
												textPosition: e.textPosition,
												singleImage: "single" === e.displayType && e.image,
												multipleImages: "multiple" === e.displayType && e.multipleImages,
												backgroundColor: e.config.backgroundColor,
												verticalPadding: e.config.verticalPadding,
												stackedImages: e.stackedImages
											}, "".concat(e._type, "_").concat(t)) : "masonryBlock" === e._type ? (0, l.jsx)(N, {
												transition: e.config.transitionBlock.transition,
												transitionColor: e.config.transitionBlock.transitionColor,
												images: e.images,
												verticalPadding: e.config.verticalPadding,
												backgroundColor: e.config.backgroundColor
											}, "".concat(e._type, "_").concat(t)) : "video" === e._type ? (0, l.jsx)(J, {
												url: e.videoUrl
											}, "".concat(e._type, "_").concat(t)) : null
										})), (0, l.jsx)("div", {
											className: "bg-slate-800",
											children: (0, l.jsxs)(g, {
												className: (0, d.Z)("flex max-w-screen-2xl flex-col items-start gap-10", "xl:flex-row"),
												children: [(0, l.jsx)("div", {
													className: (0, d.Z)("top-0 m-auto  w-full max-w-sm flex-1 pt-20 text-2xl font-extralight tracking-tight", "sm:ml-auto sm:mr-auto sm:max-w-2xl xl:sticky xl:mt-0 xl:max-w-lg xl:text-3xl"),
													children: (0, l.jsx)(r.E.h1, (0, n.Z)((0, i.Z)({}, f.J), {
														className: "max-w-sm font-semibold leading-none tracking-tight text-slate-50",
														children: "Check out some other projects."
													}))
												}), P.length > 0 && (0, l.jsxs)("div", {
													className: (0, d.Z)("not-prose m-auto w-full max-w-sm  flex-1 items-start justify-center gap-10 py-20", "sm:flex sm:max-w-2xl", "sm:ml-auto sm:flex sm:max-w-2xl"),
													children: [(0, l.jsx)("div", {
														className: (0, d.Z)("", "sm:flex-1"),
														children: T
													}), (0, l.jsx)("div", {
														className: (0, d.Z)("mt-20", "sm:flex-1"),
														children: L
													})]
												})]
											})
										}, "other-projects")]
									})
								})
							})]
						})
					}, I.current) : (0, l.jsx)("div", {
						children: "404 error"
					})
				}
		}
	},
	function(e) {
		e.O(0, [871, 68, 247, 774, 888, 179], (function() {
			return t = 1705, e(e.s = t);
			var t
		}));
		var t = e.O();
		_N_E = t
	}
]);