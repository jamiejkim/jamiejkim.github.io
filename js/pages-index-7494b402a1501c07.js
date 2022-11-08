(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[405], {
		8312: function(e, n, t) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
				return t(441)
			}])
		},
		7466: function(e, n, t) {
			"use strict";
			var s = t(1799),
				i = t(9396),
				a = t(9534),
				r = t(5893),
				l = t(1664),
				c = t.n(l),
				o = t(7294),
				d = t(1612),
				u = o.forwardRef((function(e, n) {
					var t = e.children,
						l = e.href,
						o = e.openNewTab,
						u = e.className,
						f = e.nextLinkProps,
						h = (0, a.Z)(e, ["children", "href", "openNewTab", "className", "nextLinkProps"]);
					return (void 0 !== o ? o : l && !l.startsWith("/") && !l.startsWith("#")) ? (0, r.jsx)("a", (0, i.Z)((0, s.Z)({
						ref: n,
						target: "_blank",
						rel: "noopener noreferrer",
						href: l
					}, h), {
						className: (0, d.Z)("cursor-newtab", u),
						children: t
					})) : (0, r.jsx)(c(), (0, i.Z)((0, s.Z)({
						scroll: !1,
						href: l
					}, f), {
						children: (0, r.jsx)("a", (0, i.Z)((0, s.Z)({
							ref: n
						}, h), {
							className: u,
							children: t
						}))
					}))
				}));
			n.Z = u
		},
		6723: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return x
				}
			});
			var s = t(1799),
				i = t(9396),
				a = t(5893),
				r = t(3871),
				l = t(1163),
				c = t(7294),
				o = t(1612),
				d = t(7643),
				u = t(7537),
				f = t(7466),
				h = {
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

			function x(e) {
				var n = e.title,
					t = e.slug,
					x = e.thumbnail,
					p = (0, c.useState)(!1),
					v = p[0],
					m = p[1],
					j = (0, l.useRouter)().asPath;
				return (0, a.jsx)(f.Z, {
					onClick: function() {
						return m(!0)
					},
					href: "/Users/jme/Documents/GitHub/jamiejkim.github.io/Portfolio Webpage/js/post-%5Bslug%5D-635c44a032b83471.js".concat(t),
					children: (0, a.jsxs)(r.E.div, (0, i.Z)((0, s.Z)({}, d.J), {
						className: (0, o.Z)("aspect-w-9 aspect-h-12 relative mb-8 flex rounded-2xl", [v && "z-30"]),
						children: [(0, a.jsx)(r.E.div, {
							variants: h,
							initial: "in",
							className: "absolute top-1/2 left-1/2 z-10 h-0 w-[200vw] scale-0",
							exit: v ? "out" : void 0,
							children: (0, a.jsx)("div", {
								className: "absolute top-1/2 left-1/2 z-30 w-[200vw] -translate-x-1/2 -translate-y-1/2 rounded-[100%] bg-white pb-[100%]"
							})
						}, j), (0, a.jsx)("div", {
							className: "overflow-hidden",
							children: (0, a.jsxs)("div", {
								className: "relative flex h-full flex-col justify-end overflow-hidden rounded-2xl",
								children: [x && (0, a.jsx)("div", {
									className: "not-prose absolute left-0 top-0 h-full w-full",
									children: (0, a.jsx)("img", {
										alt: x.caption || " ",
										loading: "lazy",
										src: (0, u.u)(x.asset).height(640).width(455).auto("format").fit("crop").crop("center").url()
									})
								}), (0, a.jsx)("div", {
									className: "relative z-10 p-5",
									children: (0, a.jsx)("h3", {
										className: "text-white",
										children: n
									})
								}), (0, a.jsx)("div", {
									className: "absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-slate-800 opacity-60"
								})]
							})
						})]
					}))
				})
			}
		},
		7643: function(e, n, t) {
			"use strict";
			t.d(n, {
				J: function() {
					return s
				}
			});
			var s = {
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
		7537: function(e, n, t) {
			"use strict";
			t.d(n, {
				u: function() {
					return o
				}
			});
			var s = t(6803),
				i = t.n(s),
				a = t(9729),
				r = t.n(a),
				l = t(3454),
				c = r()({
					projectId: l.env.SANITY_STUDIO_API_PROJECT_ID || "wrtkpx8g",
					dataset: l.env.SANITY_STUDIO_API_DATASET || "production",
					useCdn: !0,
					apiVersion: "2021-08-31"
				});

			function o(e) {
				return i()(c).image(e)
			}
		},
		1612: function(e, n, t) {
			"use strict";
			t.d(n, {
				Z: function() {
					return r
				}
			});
			var s = t(9815),
				i = t(6010),
				a = t(8575);

			function r() {
				for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
				return (0, a.m)(i.Z.apply(void 0, (0, s.Z)(n)))
			}
		},
		441: function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, {
				__N_SSG: function() {
					return v
				}
			});
			var s = t(1799),
				i = t(9396),
				a = t(5893),
				r = t(3871),
				l = t(521),
				c = t(2064),
				o = t(1163),
				d = t(7294),
				u = t(6723),
				f = t(7643),
				h = {
					visible: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					hover: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					hidden: {
						opacity: 0,
						y: 8,
						scale: .9
					}
				},
				x = (0, d.forwardRef)((function(e, n) {
					var t = e.label,
						s = e.handleClick,
						i = e.activeSection;
					return (0, a.jsx)("div", {
						ref: n,
						className: "relative z-10 rounded-lg bg-white transition-all",
						children: (0, a.jsxs)(r.E.button, {
							whileHover: "hover",
							animate: i ? "hover" : "hidden",
							initial: "hidden",
							className: "relative z-10 w-full py-4 px-4 text-left",
							onClick: s,
							children: [t, (0, a.jsx)(r.E.div, {
								variants: h,
								transition: {
									type: "spring",
									damping: 15,
									stiffness: 250
								},
								className: "absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-slate-100"
							})]
						})
					})
				})),
				p = function(e) {
					var n = e.startDate,
						t = e.endDate,
						l = e.business,
						c = e.description,
						o = e.occupation,
						d = e.duration;
					return (0, a.jsxs)(r.E.div, (0, i.Z)((0, s.Z)({}, f.J), {
						className: "flex flex-col text-slate-500 sm:flex-row",
						children: [(0, a.jsxs)("div", {
							className: "mr-10 flex flex-1 gap-2 sm:block sm:max-w-[164px] sm:gap-0",
							children: [(0, a.jsxs)("div", {
								children: [n, " - ", t || "today"]
							}), (0, a.jsx)("div", {
								children: d
							})]
						}), (0, a.jsxs)("div", {
							className: "flex-1",
							children: [(0, a.jsx)("div", {
								className: "font-semibold text-slate-900",
								children: o
							}), (0, a.jsxs)("div", {
								className: "",
								children: ["@ ", l]
							}), (0, a.jsx)("div", {
								className: "mt-2 font-light",
								children: c
							})]
						})]
					}))
				},
				v = !0;
			n.default = function(e) {
				var n, t = e.posts;
				! function(e) {
					e[e.INTRO = 0] = "INTRO", e[e.ABOUT_ME = 1] = "ABOUT_ME", e[e.PROJECTS = 2] = "PROJECTS", e[e.WORK_HISTORY = 3] = "WORK_HISTORY", e[e.CONTACT = 4] = "CONTACT"
				}(n || (n = {}));
				var h = (0, o.useRouter)(),
					v = (0, d.useState)(n.INTRO),
					m = v[0],
					j = v[1],
					g = (0, l.v)(),
					b = g.scrollY,
					N = g.scrollYProgress,
					w = (0, d.useRef)(null),
					y = (0, d.useRef)(null),
					D = (0, d.useRef)(null),
					I = (0, d.useRef)(null),
					C = (0, d.useRef)(null),
					T = t.map((function(e, n) {
						var t = e._id,
							s = e.title,
							i = e.slug,
							r = e.thumbnail;
						return i && n % 2 == 0 && (0, a.jsx)("div", {
							children: (0, a.jsx)(u.Z, {
								title: s,
								thumbnail: r,
								slug: i.current
							})
						}, t)
					})),
					E = t.map((function(e, n) {
						var t = e._id,
							s = e.title,
							i = e.slug,
							r = e.thumbnail;
						return i && n % 2 !== 0 && (0, a.jsx)("div", {
							children: (0, a.jsx)(u.Z, {
								title: s,
								thumbnail: r,
								slug: i.current
							})
						}, t)
					})),
					Z = function(e) {
						if (e.current) {
							var n = window.pageYOffset + e.current.getBoundingClientRect().top - 64;
							(0, c.j)(b, n, {
								type: "tween",
								ease: "easeOut",
								duration: .3,
								onUpdate: function(e) {
									return window.scrollTo({
										top: e
									})
								}
							})
						}
					};
				return (0, d.useEffect)((function() {
					b.onChange((function(e) {
						if (!(e < 0)) {
							window.innerHeight;
							for (var n = [w, y, D, I, C], t = 0; t < n.length; t++) {
								var s = n[t].current;
								if (s) {
									var i = null === s || void 0 === s ? void 0 : s.getBoundingClientRect().top;
									0 == e ? j(0) : N.get() > .9 ? j(4) : i - 65 <= 0 && j(t)
								}
							}
						}
					}))
				}), [b]), h.isFallback || t ? (0, a.jsx)("div", {
					className: "prose-slate",
					children: (0, a.jsxs)("div", {
						className: "m-auto flex w-full max-w-5xl flex-col items-center gap-20 px-5 lg:flex-row lg:items-start",
						children: [(0, a.jsxs)("div", {
							className: "hidden w-full max-w-xs flex-initial self-stretch lg:block",
							children: [(0, a.jsx)("div", {
								className: "h-[20vh] w-full"
							}), (0, a.jsxs)("div", {
								className: "sticky top-0 space-y-2 pt-24",
								children: [(0, a.jsx)(x, {
									activeSection: m === n.INTRO,
									handleClick: function() {
										return Z(w)
									},
									label: "Intro"
								}), (0, a.jsx)(x, {
									activeSection: m === n.ABOUT_ME,
									handleClick: function() {
										return Z(y)
									},
									label: "About me"
								}), (0, a.jsx)(x, {
									activeSection: m === n.PROJECTS,
									handleClick: function() {
										return Z(D)
									},
									label: "Projects"
								}), (0, a.jsx)(x, {
									activeSection: m === n.WORK_HISTORY,
									handleClick: function() {
										return Z(I)
									},
									label: "Work history"
								}), (0, a.jsx)(x, {
									activeSection: m === n.CONTACT,
									handleClick: function() {
										return Z(C)
									},
									label: "Contact"
								})]
							})]
						}), (0, a.jsxs)("div", {
							className: "prose flex-1 space-y-10 sm:space-y-24",
							children: [(0, a.jsx)("div", {
								className: "w-full lg:h-[20vh]"
							}), (0, a.jsx)(r.E.div, {
								ref: w,
								children: (0, a.jsxs)(r.E.h1, (0, i.Z)((0, s.Z)({}, f.J), {
									className: "text-2xl sm:text-5xl",
									children: ["Hi, my name is Jamie and I design things that", " ", (0, a.jsx)("span", {
										className: "inline-block",
										children: "spark joy."
									})]
								}))
							}), (0, a.jsx)(r.E.div, {
								children: (0, a.jsxs)(r.E.div, (0, i.Z)((0, s.Z)({
									ref: y
								}, f.J), {
									children: [(0, a.jsx)("h2", {
										className: "text-base",
										children: "About me"
									}), (0, a.jsx)("p", {
										children: "Hi, my name is Jamie. I am a dual UX designer and front-end developer that aspires to make innovative technologies and programs to improve the quality of life for people in general. I wish to deliver better digital public services and empower communities using technology and design. In my spare time, if I’m not listening to true crime podcasts, watering my plants, gaming, or staring lovingly at my dog, I am usually working on a fun passion project on the side. I crave challenges and matcha tea lattes 🍵. View my UX Slide Deck: <https://www.slideshare.net/secret/rNRiN0G1UUoqLk>. View my UX Google Drive: <https://tinyurl.com/jamie-portfolio>."
										
									})]
								}))
							}), (0, a.jsxs)(r.E.div, {
								ref: D,
								children: [(0, a.jsx)(r.E.h2, (0, i.Z)((0, s.Z)({}, f.J), {
									className: "mb-5 text-base",
									children: "Projects"
								})), (0, a.jsx)("div", {
									className: "m-auto w-full items-start justify-center gap-8 sm:flex",
									children: t.length > 0 && (0, a.jsxs)(a.Fragment, {
										children: [(0, a.jsx)("div", {
											className: "flex-1",
											children: T
										}), (0, a.jsx)("div", {
											className: "mt-20 flex-1",
											children: E
										})]
									})
								})]
							}), (0, a.jsxs)(r.E.div, {
								ref: I,
								children: [(0, a.jsx)(r.E.h2, (0, i.Z)((0, s.Z)({}, f.J), {
									className: "text-base",
									children: "Work history"
								})), (0, a.jsxs)("div", {
									className: "space-y-8",
									children: [(0, a.jsx)(p, {
										startDate: "06/2019",
										endDate: "08/2021",
										location: "(Toronto, Canada)",
										occupation: "UX Designer & UX Engineer (Front-end Developer)",
										business: "TAGlab (University of Toronto)",
										description: "UI/UX research + design, conversational design, front-end development."
									}), (0, a.jsx)(p, {
										startDate: "10/2017",
										endDate: "09/2020",
										location: "(Toronto, Canada)",
										occupation: "Digital Designer",
										business: "UDesign Creative Agency",
										description: "UI/UX, graphic design, motion design."
									}), (0, a.jsx)(p, {
										startDate: "06/2018",
										endDate: "08/2018",
										location: "(Songdo, Incheon, South Korea)",
										occupation: "Global I.T.",
										business: "Samsung BioLogics",
										description: "full-stack development, computerized systems validation, innovations, UI/UX."
									})]
								})]
							}), (0, a.jsx)(r.E.div, {
								children: (0, a.jsxs)(r.E.div, (0, i.Z)((0, s.Z)({
									ref: C
								}, f.J), {
									children: [(0, a.jsx)("h2", {
										className: "text-base",
										children: "Contact"
									}), (0, a.jsx)("p", {
										children: "jamiekim96@gmail.com"
									})]
								}))
							}), (0, a.jsx)("div", {
								className: "h-[33vh] w-full"
							})]
						})]
					})
				}) : (0, a.jsx)("div", {
					children: "404 error"
				})
			}
		}
	},
	function(e) {
		e.O(0, [871, 68, 774, 888, 179], (function() {
			return n = 8312, e(e.s = n);
			var n
		}));
		var n = e.O();
		_N_E = n
	}
]);