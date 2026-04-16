//#region dist/combined/free.esm.js
var e = function(e, t) {
	var n = this;
	Object.defineProperty(this, "element", {
		get() {
			return e ? e.querySelector("[data-boc-content]") : null;
		},
		set(e) {
			n.mainElement = e;
		}
	}), Object.defineProperty(this, "mainElement", {
		get() {
			return e;
		},
		set(t) {
			e = t, e && (e.innerHTML = "\n                    <style>                    \n                    .boc-dark, .boc-light{ display: flex; }\n                    [data-boc-left]{ display: none; }\n                    [data-boc-right]{ height: 100%; position: relative; overflow:hidden; flex-grow: 1; }\n                    [data-boc-content]{ height: 100%; width: 100%; }\n                    @media screen and (max-width: 500px) {\n                        .boc-dark, .boc-light{ flex-direction: column; }\n                        [data-boc-left]{ order: 2; height: 50vh; }\n                        [data-boc-right]{ order: 1; }\n                    }\n                    </style>\n                    <div data-boc-left></div>\n                    <div data-boc-right>\n                        <div data-boc-content></div>\n                    </div>");
		}
	}), Object.defineProperty(this, "leftElement", { get() {
		return e.querySelector("[data-boc-left]");
	} }), n.init(e, t);
};
e.prototype.init = function(t, n) {
	if (t && !this._initCalled) {
		this._initCalled = !0, (typeof t == "string" || t instanceof String) && (t = document.querySelector(t)), this.element = t;
		var r = this;
		if (this.config = e.mergeDeep(e._defaultConfig(n), n), this._layoutConfigs = { base: {
			orientation: this.config.orientation,
			levelSeparation: this.config.levelSeparation,
			mixedHierarchyNodesSeparation: this.config.mixedHierarchyNodesSeparation,
			assistantSeparation: this.config.assistantSeparation,
			subtreeSeparation: this.config.subtreeSeparation,
			siblingSeparation: this.config.siblingSeparation,
			layout: this.config.layout,
			columns: this.config.columns,
			collapse: this.config.collapse,
			partnerNodeSeparation: this.config.partnerNodeSeparation
		} }, this.config.tags) for (var i in this.config.tags) {
			var a = this.config.tags[i];
			a.subTreeConfig != null && (this._layoutConfigs[i] = {
				orientation: a.subTreeConfig.orientation == null ? this.config.orientation : a.subTreeConfig.orientation,
				levelSeparation: a.subTreeConfig.levelSeparation == null ? this.config.levelSeparation : a.subTreeConfig.levelSeparation,
				mixedHierarchyNodesSeparation: a.subTreeConfig.mixedHierarchyNodesSeparation == null ? this.config.mixedHierarchyNodesSeparation : a.subTreeConfig.mixedHierarchyNodesSeparation,
				assistantSeparation: a.subTreeConfig.assistantSeparation == null ? this.config.assistantSeparation : a.subTreeConfig.assistantSeparation,
				subtreeSeparation: a.subTreeConfig.subtreeSeparation == null ? this.config.subtreeSeparation : a.subTreeConfig.subtreeSeparation,
				siblingSeparation: a.subTreeConfig.siblingSeparation == null ? this.config.siblingSeparation : a.subTreeConfig.siblingSeparation,
				layout: a.subTreeConfig.layout == null ? this.config.layout : a.subTreeConfig.layout,
				columns: a.subTreeConfig.columns == null ? this.config.columns : a.subTreeConfig.columns,
				collapse: a.subTreeConfig.collapse == null ? this.config.collapse : a.subTreeConfig.collapse,
				partnerNodeSeparation: a.subTreeConfig.partnerNodeSeparation == null ? this.config.partnerNodeSeparation : a.subTreeConfig.partnerNodeSeparation,
				template: a.subTreeConfig.template
			});
		}
		this._event_id = e._guid(), e._validateConfig(this.config) && (this._vScroll = {}, this.config.ui || (this.ui = e.ui), this.config.editUI ? this.editUI = this.config.editUI : this.editUI = new e.editUI(), this.editUI.init(this), this.config.filterUI ? this.filterUI = this.config.filterUI : this.filterUI = new e.filterUI(), this.filterUI.init(this), this.manager = new e.manager(this), this._ai = new e._ai(this), this.config.searchUI ? this.searchUI = this.config.searchUI : this.searchUI = new e.searchUI(), this.config.aiUI ? this.aiUI = this.config.aiUI : this.aiUI = new e.aiUI(), this.config.orgScribeUI ? this.orgScribeUI = this.config.orgScribeUI : this.orgScribeUI = new e.orgScribeUI(), this.config.powerPointPreviewUI ? this.powerPointPreviewUI = this.config.powerPointPreviewUI : this.powerPointPreviewUI = new e.exportUI("pptx"), this.config.pdfPreviewUI ? this.pdfPreviewUI = this.config.pdfPreviewUI : this.pdfPreviewUI = new e.exportUI("pdf"), this.config.svgPreviewUI ? this.svgPreviewUI = this.config.svgPreviewUI : this.svgPreviewUI = new e.exportUI("svg"), this.config.pngPreviewUI ? this.pngPreviewUI = this.config.pngPreviewUI : this.pngPreviewUI = new e.exportUI("png"), this.config.nodeMenuUI ? this.nodeMenuUI = this.config.nodeMenuUI : this.nodeMenuUI = new e.menuUI(), this.nodeMenuUI.init(this, this.config.nodeMenu), this.config.nodeCircleMenuUI ? this.nodeCircleMenuUI = this.config.nodeCircleMenuUI : this.nodeCircleMenuUI = new e.circleMenuUI(), this.nodeCircleMenuUI.init(this, this.config.nodeCircleMenu), this.config.nodeContextMenuUI ? this.nodeContextMenuUI = this.config.nodeContextMenuUI : this.nodeContextMenuUI = new e.menuUI(), this.nodeContextMenuUI.init(this, this.config.nodeContextMenu), this.config.controlsUI ? this.controlsUI = this.config.controlsUI : this.controlsUI = new e.controlsUI(), this.config.toolbarUI ? this.toolbarUI = this.config.toolbarUI : this.toolbarUI = new e.toolbarUI(), this.config.notifierUI ? this.notifierUI = this.config.notifierUI : this.notifierUI = new e.notifierUI(), this.notifierUI.init(this), this.config.menuUI ? this.menuUI = this.config.menuUI : this.menuUI = new e.menuUI(), this.menuUI.init(this, this.config.menu), this.config.xScrollUI || (this.xScrollUI = new e.xScrollUI(this.element, this.config, function() {
			return {
				boundary: r.response.boundary,
				scale: r.getScale(),
				viewBox: r.getViewBox(),
				padding: r.config.padding
			};
		}, function(e) {
			r.setViewBox(e);
		}, function() {
			r._draw(!0, e.action.xScroll);
		})), this.config.yScrollUI || (this.yScrollUI = new e.yScrollUI(this.element, this.config, function() {
			return {
				boundary: r.response.boundary,
				scale: r.getScale(),
				viewBox: r.getViewBox(),
				padding: r.config.padding
			};
		}, function(e) {
			r.setViewBox(e);
		}, function() {
			r._draw(!0, e.action.xScroll);
		})), this.config.undoRedoUI ? this.undoRedoUI = this.config.undoRedoUI : this.undoRedoUI = new e.undoRedoUI(), this.mainElement.classList.add("boc-" + this.config.mode), this._gragStartedId = null, this._timeout = null, this._touch = null, this._initialized = !1, this._loaded = !1, this._moveInterval = null, this._movePosition = null, this.response = null, this.nodes = null, this.isVisible = null, this._connectorLines = {
			x: {},
			y: {}
		}, e._intersectionObserver(this.element, function(t) {
			r.isVisible = t, e.events.publish("visibility-change", [r]) !== !1 && e.LAZY_LOADING && r.isVisible && (r._loaded ? r._draw(!1, e.action.update) : (r._setInitialSizeIfNotSet(), r._draw(!1, e.action.init)));
		}), this._resizeObserver = new ResizeObserver((e) => {
			for (let t of e) {
				let { width: e, height: n } = t.contentRect;
				r._resizeHandler(e, n);
			}
		}), this._resizeObserver.observe(this.element));
	}
}, e.prototype.load = function(t, n) {
	var r = this;
	return this.config.nodes = t, this._draw(!1, e.action.init, void 0, function() {
		r.filterUI.update(), n && n();
	}), this;
}, e.prototype.loadXML = function(t, n) {
	var r = e._xml2json(t);
	return this.load(r, n);
}, e.prototype.getXML = function() {
	return e._json2xml(this.config.nodes);
}, e.prototype.on = function(t, n) {
	return e.events.on(t, n, this._event_id), this;
}, e.prototype.removeListener = function(t, n) {
	return e.events.remove(t, n, this._event_id);
}, e.prototype.draw = function(t, n, r) {
	t ??= e.action.update, this._draw(!1, t, n, r);
}, e.prototype._draw = function(t, n, r, i) {
	var a = this;
	if (!(e.LAZY_LOADING && !this.isVisible)) {
		if (!e.LAZY_LOADING && !this._initialized && (this._setInitialSizeIfNotSet(), this.width() == 0 || this.height() == 0)) {
			console.error("Cannot load the chart with size 0! If you are using the OrgChart within tabs set OrgChart.LAZY_LOADING to true! ");
			return;
		}
		this._hideBeforeAnimationCompleted = !1;
		var o = n == e.action.init ? null : this.getViewBox();
		this.manager.read(t, this.width(), this.height(), o, n, r, function(t) {
			if (!a.notifierUI.show(t.notif)) {
				n != e.action.exporting && (a.nodes = t.nodes, a.visibleNodeIds = t.visibleNodeIds, a.roots = t.roots), a._connectorLines = {
					x: {},
					y: {}
				}, a.editUI.fields = t.allFields;
				var o = { defs: "" };
				e.events.publish("renderdefs", [a, o]);
				var s = a.ui.defs(o.defs), c = a.getScale(t.viewBox);
				s += a.ui.pointer(a.config, n, c);
				var l = a.getViewBox(), u = t.viewBox, o = {
					content: s,
					res: t
				};
				e.events.publish("prerender", [a, o]), s = o.content;
				var d = [];
				if (e.RENDER_LINKS_BEFORE_NODES) for (var f = 0; f < t.visibleNodeIds.length; f++) {
					var p = t.nodes[t.visibleNodeIds[f]];
					e.getRootOf(p).stParent ? d.push(p.id) : s += a.ui.link(p, a, c, t.bordersByRootIdAndLevel, t.nodes, n);
				}
				for (var f = 0; f < t.visibleNodeIds.length; f++) {
					var p = t.nodes[t.visibleNodeIds[f]], m = a._get(p.id);
					if (e.RENDER_LINKS_BEFORE_NODES && d.includes(p.id) && (s += a.ui.link(p, a, c, t.bordersByRootIdAndLevel, t.nodes, n)), p.isTreeListItem || (s += a.ui.node(p, m, t.animations, a.config, void 0, void 0, void 0, n, c, a)), !p.min && p.treeList) {
						var h = function(e) {
							if (!p.treeList.pinnedIds.includes(e.id)) {
								var r = a._get(e.id);
								s += a.ui.node(e, r, t.animations, a.config, void 0, void 0, void 0, n, c, a), s += a.ui.expandCollapseBtn(a, e, r, a.config, a._layoutConfigs, n, c);
							}
							for (var i of e.children) h(i);
						}, g = e.randomId();
						s += `<clipPath id="treelist_${g}">
                    <rect rx="10" ry="10" x="${p.x + p.padding[3]}" y="${p.y + p.padding[0]}" width="${p.w - p.padding[1] - p.padding[3]}" height="${p.h - p.padding[2] - p.padding[0]}">
                    </clipPath><g clip-path="url(#treelist_${g})"><g data-treelist-content="${p.id}" transform="matrix(1,0,0,1,0,-${p.treeList.scrollTop})">`;
						for (var _ of p.stChildren) h(_);
						for (var v of p.treeList.pinnedIds) {
							var y = a.getNode(v), b = a._get(v);
							s += a.ui.node(y, b, t.animations, a.config, void 0, void 0, void 0, n, c, a, !0), s += a.ui.expandCollapseBtn(a, y, b, a.config, a._layoutConfigs, n, c);
						}
						var { thumbHeight: x, thumbPosition: S, scrollBarDisplay: C } = e._treeListGetTumbPositionFromScrollTop(p);
						s += `</g>

                
                <rect style="display: ${C}" data-treelist-scroll="${p.id}"  class="boc-scroll" x="${p.x + p.w - p.padding[1] - e.TREELIST_SCROLLBAR_WIDTH}" y="${p.y + p.padding[0]}" width="${e.TREELIST_SCROLLBAR_WIDTH}" height="${p.h - p.padding[2] - p.padding[0]}"></rect>
                <rect style="display: ${C}" data-treelist-thumb="${p.id}" class="boc-scroll-thumb" x="${p.x + p.w - p.padding[1] - e.TREELIST_SCROLLBAR_WIDTH}" y="${S}" width="${e.TREELIST_SCROLLBAR_WIDTH}" height="${x}"></rect>

                </g>`;
					}
				}
				for (var f = 0; f < t.visibleNodeIds.length; f++) {
					var p = t.nodes[t.visibleNodeIds[f]], m = a._get(p.id);
					p.isTreeListItem || (e.RENDER_LINKS_BEFORE_NODES || (s += a.ui.link(p, a, c, t.bordersByRootIdAndLevel, t.nodes, n)), s += a.ui.expandCollapseBtn(a, p, m, a.config, a._layoutConfigs, n, c));
				}
				var o = {
					content: s,
					res: t
				};
				if (e.events.publish("render", [a, o]), s = o.content, t = o.res, s += a.ui.lonely(a.config), n === e.action.exporting) {
					var w = t.boundary, T = w.maxX - w.minX, E = w.maxY - w.minY, D = a.ui.svg(T, E, [
						w.minX,
						w.minY,
						T,
						E
					], a.config, s, c);
					i.call(a, D, t);
					return;
				}
				(n === e.action.centernode || n === e.action.insert || n === e.action.expand || n === e.action.collapse || n === e.action.update) && (u = l), n === e.action.init && l != null && (u = l), n === e.action.centerNode && l != null && (u = l), a.response = t, a._lastSize = {
					width: a.width(),
					height: a.height()
				};
				var D = a.ui.svg("100%", "100%", u, a.config, s);
				if (!a._initialized) a.element.innerHTML = a.ui.css() + D + a.ui.menuButton(a.config) + a.ui.aiButton(a.config), a._attachEventHandlers(), a.xScrollUI.create(a.width(), a.config.padding), a.xScrollUI.setPosition(), a.xScrollUI.addListener(a.getSvg()), a.yScrollUI.create(a.height(), a.config.padding), a.yScrollUI.setPosition(), a.yScrollUI.addListener(a.getSvg()), a.config.enableSearch && a.searchUI.init(a), a.aiUI.init(a), a.orgScribeUI.init(a), a.powerPointPreviewUI.init(a), a.pdfPreviewUI.init(a), a.svgPreviewUI.init(a), a.pngPreviewUI.init(a), a.toolbarUI.init(a, a.config.toolbar), a.undoRedoUI.init(a), a.controlsUI.init(a);
				else {
					var O = a.getSvg(), k = O.parentNode;
					k.removeChild(O), k.insertAdjacentHTML("afterbegin", D), a._attachEventHandlers(), a.xScrollUI.addListener(a.getSvg()), a.yScrollUI.addListener(a.getSvg()), a.xScrollUI.setPosition(), a.yScrollUI.setPosition();
				}
				var A = !1, j = a.response.animations;
				if (j[0].length > 0) {
					a._hideBeforeAnimation(j[0].length);
					for (var f = 0; f < j[0].length; f++) j[0][f] = a.getNodeElement(j[0][f]);
					e.animate(j[0], j[1], j[2], a.config.anim.duration, a.config.anim.func, function() {
						A ||= (i && i.call(a), e.events.publish("redraw", [a]), a._showAfterAnimation(), !0);
					});
				}
				n === e.action.centerNode ? e.animate(a.getSvg(), { viewbox: l }, { viewbox: a.response.viewBox }, a.config.anim.duration, a.config.anim.func, function() {
					a.ripple(r.options.rippleId), A ||= (i && i.call(a), e.events.publish("redraw", [a]), a._showAfterAnimation(), !0);
				}, function() {
					a.xScrollUI.setPosition(), a.yScrollUI.setPosition();
				}) : l && a.response && (l[0] != a.response.viewBox[0] || l[1] != a.response.viewBox[1] || l[2] != a.response.viewBox[2] || l[3] != a.response.viewBox[3]) && (n === e.action.insert || n === e.action.expand || n === e.action.collapse || n === e.action.update || n === e.action.init) ? e.animate(a.getSvg(), { viewbox: l }, { viewbox: a.response.viewBox }, a.config.anim.duration * 2, a.config.anim.func, function() {
					a.xScrollUI.setPosition(), a.yScrollUI.setPosition(), A ||= (i && i.call(a), e.events.publish("redraw", [a]), !0);
				}) : j[0].length == 0 && (A ||= (i && i.call(a), e.events.publish("redraw", [a]), !0)), a._initialized || (a._initialized = !0, a.filterUI.update(), a._ai.setContext(), e.events.publish("init", [a])), !a._loaded && t && t.nodes && Object.keys(t.nodes).length && (a._loaded = !0);
			}
		}, function(t) {
			e.events.publish("ready", [a, t]);
		});
	}
}, e.prototype._setInitialSizeIfNotSet = function() {
	this.mainElement.style.overflow = "hidden", this.mainElement.style.position = "relative", this.mainElement.offsetHeight == 0 && (this.mainElement.style.height = "100%", this.mainElement.offsetHeight == 0 && (this.mainElement.style.height = "700px")), this.mainElement.offsetWidth == 0 && (this.mainElement.style.width = "100%", this.mainElement.offsetWidth == 0 && (this.mainElement.style.width = "700px"));
}, e.prototype.width = function() {
	return this.element.offsetWidth;
}, e.prototype.height = function() {
	return this.element.offsetHeight;
}, e.prototype.getViewBox = function() {
	var t = this.getSvg();
	return e._getViewBox(t);
}, e.prototype.setViewBox = function(e) {
	this.getSvg().setAttribute("viewBox", e.toString());
}, e.prototype.getScale = function(t) {
	return t ||= this.getViewBox(), e.getScale(t, this.width(), this.height(), this.config.scaleInitial, this.config.scaleMax, this.config.scaleMin);
}, e.prototype.setScale = function(t) {
	t > this.config.scaleMax && (t = this.config.scaleMax), t < this.config.scaleMin && (t = this.config.scaleMin);
	var n = this.getViewBox().slice(0), r = this.width(), i = this.height(), a = r / n[2], o = i / n[3], s = a > o ? o : a, c = n, l = n[2], u = n[3];
	return n[2] /= t / s, n[3] /= t / s, n[0] = c[0] - (n[2] - l) / 2, n[1] = c[1] - (n[3] - u) / 2, this.setViewBox(n), e.events.publish("redraw", [this]), t;
}, e.prototype.ripple = function(t, n, r) {
	var i = this.getNode(t);
	if (i != null) {
		var a = this.getNodeElement(t);
		if (a != null) {
			var o = this.getScale(), s = i.w / 2, c = i.h / 2;
			if (n !== void 0 && r !== void 0) {
				var l = a.getBoundingClientRect();
				s = n / o - l.left / o, c = r / o - l.top / o;
			}
			var u = i.w, d = i.h, f = u - s > s ? u - s : s, p = d - c > c ? d - c : c;
			f = f, p = p;
			var m = f > p ? f : p, h = document.createElementNS("http://www.w3.org/2000/svg", "g"), g = document.createElementNS("http://www.w3.org/2000/svg", "clipPath"), _ = document.createElementNS("http://www.w3.org/2000/svg", "rect"), v = document.createElementNS("http://www.w3.org/2000/svg", "circle"), y = e.randomId();
			g.setAttribute("id", y);
			var b = {
				ripple: e.t(i.templateName, i.min, this.getScale()).ripple,
				node: i
			};
			e.events.publish("ripple", [this, b]), _.setAttribute("x", b.ripple.rect ? b.ripple.rect.x : 0), _.setAttribute("y", b.ripple.rect ? b.ripple.rect.y : 0), _.setAttribute("width", b.ripple.rect ? b.ripple.rect.width : i.w), _.setAttribute("height", b.ripple.rect ? b.ripple.rect.height : i.h), _.setAttribute("rx", b.ripple.radius), _.setAttribute("ry", b.ripple.radius), v.setAttribute("clip-path", "url(#" + y + ")"), v.setAttribute("cx", s), v.setAttribute("cy", c), v.setAttribute("r", 0), v.setAttribute("fill", b.ripple.color), v.setAttribute("class", "boc-ripple"), g.appendChild(_), h.appendChild(g), h.appendChild(v), a.appendChild(h), e.animate(v, {
				r: 0,
				opacity: 1
			}, {
				r: m,
				opacity: 0
			}, 500, e.anim.outPow, function() {
				a.removeChild(h);
			});
		}
	}
}, e.prototype.centerOutNodes = function(t) {
	if (this._centerInNodes) {
		var n = JSON.parse(this._centerInNodes);
		this._centerInNodes = null;
		var r = this;
		this._centerInNodesTimeout = e.animate(this.getSvg(), { viewBox: this.getViewBox() }, { viewBox: n }, 300, this.config.anim.func, function() {
			r.draw(e.action.update, null, function() {
				t && t.call(r);
			});
		});
	}
}, e.prototype.centerInNodes = function(t, n) {
	var r = this.getViewBox();
	this._centerInNodes ||= JSON.stringify(r);
	var i = 2 ** 53 - 1, a = -(2 ** 53 - 1), o = 2 ** 53 - 1, s = -(2 ** 53 - 1);
	for (var c of t) c.y < i && (i = c.y), c.y + c.h > a && (a = c.y + c.h), c.x < o && (o = c.x), c.x + c.w > s && (s = c.x + c.w);
	var l = s - o, u = a - i, d = l / (l + this.config.padding * 2), f = u / (u + this.config.padding * 2), p = d > f ? f : d;
	p > this.config.scaleMax && (p = this.config.scaleMax), p < this.config.scaleMin && (p = this.config.scaleMin);
	var m = [50, 50], h = this.width(), g = this.height(), d = h / r[2], f = g / r[3], _ = d > f ? f : d, v = r, y = r[2], b = r[3];
	r[2] /= p / _, r[3] /= p / _, r[0] = v[0] - (r[2] - y) / (100 / m[0]), r[1] = v[1] - (r[3] - b) / (100 / m[1]), r[0] = o - (h / p - l) / 2, r[1] = i - (g / p - u) / 2;
	var x = this;
	this._centerInNodesTimeout &&= (clearTimeout(this._centerInNodesTimeout), null), this._centerInNodesTimeout = e.animate(this.getSvg(), { viewBox: this.getViewBox() }, { viewBox: r }, 300, this.config.anim.func, function() {
		x.draw(e.action.update, null, function() {
			n && n.call(x);
		});
	});
}, e.prototype.center = function(t, n, r) {
	var i, a, o = t, s = !0, c = !0;
	n && n.parentState != null && (i = n.parentState), n && n.childrenState != null && (a = n.childrenState), n && n.rippleId != null && (o = n.rippleId), n && n.vertical != null && (s = n.vertical), n && n.horizontal != null && (c = n.horizontal);
	var l = {
		parentState: i,
		childrenState: a,
		rippleId: o,
		vertical: s,
		horizontal: c
	};
	this._draw(!1, e.action.centerNode, {
		id: t,
		options: l
	}, r);
}, e.prototype.fit = function(t) {
	this.config.scaleInitial = e.match.boundary, this._draw(!0, e.action.init, { method: "fit" }, t);
}, e.prototype.fitIfOutside = function(t) {
	this.config.scaleInitial = e.match.boundaryIfOutside, this._draw(!0, e.action.init, { method: "fit" }, t);
}, e.prototype.toggleFullScreen = function() {
	var t = document.querySelector("[" + e.attr.tlbr + "r='fullScreen']");
	document.fullscreenElement == this.element || document.webkitFullscreenElement == this.element || document.mozFullScreenElement == this.element || document.msFullscreenElement == this.element ? (document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen(), t && (t.innerHTML = e.toolbarUI.openFullScreenIcon)) : (this.element.requestFullscreen ? this.element.requestFullscreen() : this.element.mozRequestFullScreen ? this.element.mozRequestFullScreen() : this.element.webkitRequestFullscreen ? this.element.webkitRequestFullscreen() : this.element.msRequestFullscreen && this.element.msRequestFullscreen(), t && (t.innerHTML = e.toolbarUI.closeFullScreenIcon));
}, e.prototype.getNode = function(e) {
	return this.nodes[e];
}, e.prototype.setLayout = function(t, n) {
	n ||= "base", this._layoutConfigs[n].layout = t, n == "base" && (this.config.layout = t), this._draw(!1, e.action.update);
}, e.prototype.setOrientation = function(t, n, r) {
	var i = this;
	n ||= "base", this._layoutConfigs[n].orientation = t, n == "base" && (this.config.orientation = t), this._draw(!1, e.action.update, void 0, function() {
		i.getScale(), e._moveToBoundaryArea(i.getSvg(), i.getViewBox(), i.response.boundary, function() {
			i._draw(!0, e.action.pan), r && r();
		});
	});
}, e.prototype.search = function(t, n, r) {
	return e.isNEU(n) && (n = this.searchUI._searchFields), e.isNEU(r) && (r = n), e._search.search(this.config.nodes, t, n, r, this.config.searchDisplayField, this.config.searchFieldsWeight, this.searchUI._searchFieldsAbbreviation);
}, e.prototype._hideBeforeAnimation = function(t) {
	if (this._hideBeforeAnimationCompleted != 1 && !(t && t < e.ANIM_THRESHOLD)) {
		var n = this.element.getElementsByTagName("text");
		if (n.length > e.TEXT_THRESHOLD) for (var r = 0; r < n.length; r++) n[r].style.display = "none";
		var i = this.element.getElementsByTagName("image");
		if (i.length > e.IMAGES_THRESHOLD) for (var r = 0; r < i.length; r++) i[r].style.display = "none";
		var a = this.element.querySelectorAll("[" + e.attr.link_id + "]");
		if (a.length > e.LINKS_THRESHOLD) for (var r = 0; r < a.length; r++) a[r].style.display = "none";
		var o = this.element.querySelectorAll("[" + e.attr.control_expcoll_id + "]");
		if (o.length > e.BUTTONS_THRESHOLD) for (var r = 0; r < o.length; r++) o[r].style.display = "none";
		var s = this.element.querySelectorAll("[" + e.attr.control_up_id + "]");
		if (s.length > e.BUTTONS_THRESHOLD) for (var r = 0; r < s.length; r++) s[r].style.display = "none";
		this._hideBeforeAnimationCompleted = !0;
	}
}, e.prototype._showAfterAnimation = function() {
	for (var t = this.element.getElementsByTagName("text"), n = 0; n < t.length; n++) t[n].style.display = "";
	for (var r = this.element.getElementsByTagName("image"), n = 0; n < r.length; n++) r[n].style.display = "";
	for (var i = this.element.querySelectorAll("[" + e.attr.link_id + "]"), n = 0; n < i.length; n++) i[n].style.display = "";
	for (var a = this.element.querySelectorAll("[" + e.attr.control_expcoll_id + "]"), n = 0; n < a.length; n++) a[n].style.display = "";
	for (var o = this.element.querySelectorAll("[" + e.attr.control_up_id + "]"), n = 0; n < o.length; n++) o[n].style.display = "";
	this._hideBeforeAnimationCompleted = !1;
}, e.prototype.isChild = function(e, t) {
	for (var n = this.getNode(t); n;) {
		if (n.id == e) return !0;
		n = n.parent ? n.parent : n.stParent;
	}
	return !1;
}, e.prototype.getCollapsedIds = function(e) {
	for (var t = [], n = 0; n < e.childrenIds.length; n++) {
		var r = this.getNode(e.childrenIds[n]);
		r.collapsed == 1 && t.push(r.id);
	}
	return t;
}, e.prototype.stateToUrl = function() {
	if (this.manager.state) {
		var e = {};
		return e.exp = this.manager.state.exp.join("*"), e.min = this.manager.state.min.join("*"), e.adjustify = this.manager.state.adjustify.x + "*" + this.manager.state.adjustify.y, e.scale = this.manager.state.scale, e.y = this.manager.state.x, e.x = this.manager.state.y, new URLSearchParams(e).toString();
	}
	return "";
}, e.prototype.generateId = function() {
	for (;;) {
		var e = "_" + ("0000" + (Math.random() * 36 ** 4 | 0).toString(36)).slice(-4);
		if (this.nodes == null || !this.nodes.hasOwnProperty(e)) return e;
	}
}, e.prototype.moveNodesToVisibleArea = function(t, n) {
	for (var r = this, i = this.roots[0], a = this.getSvg(), o = this.getViewBox(), s = null, c = null, l = null, u = null, d = 0; d < t.length; d++) {
		var f = this.nodes[t[d]];
		f.x != null && f.y != null && ((s === null || s < f.x + f.w) && (s = f.x + f.w), (c === null || c < f.y + f.h) && (c = f.y + f.h), (l === null || l > f.x) && (l = f.x), (u === null || u > f.y) && (u = f.y));
	}
	if (!(s == null || c == null || l == null || u == null)) {
		var p = this.width(), m = this.height(), h = s - l + this.config.padding * 2, g = c - u + this.config.padding * 2, _ = p / h, v = m / g, y = _ > v ? v : _, b = Math.ceil(p / y), x = Math.ceil(m / y), h = 0, g = 0;
		if (b - this.config.padding * 2 >= s - l) h = (s + l) / 2 - b / 2;
		else switch (h = i.x - b / 2 + e.manager._getNodeWidth(i, this.config) / 2, this.config.orientation) {
			case e.orientation.right:
			case e.orientation.right_top:
				h = -(b / 2 - (l - s) / 2), h < this.config.padding - b && (h = this.config.padding - b);
				break;
			case e.orientation.left:
			case e.orientation.bottom_left:
			case e.orientation.top_left:
			case e.orientation.left_top:
				h = -(b / 2 - (s - l) / 2), h > -this.config.padding && (h = -this.config.padding);
				break;
		}
		if (x - this.config.padding * 2 >= c - u) g = (c + u) / 2 - x / 2;
		else switch (g = -(x / 2 - (c - u) / 2), g > -this.config.padding && (g = -this.config.padding), this.config.orientation) {
			case e.orientation.bottom:
			case e.orientation.bottom_left:
				g = -(x / 2 - (u - c) / 2), g < this.config.padding - x && (g = this.config.padding - x);
				break;
			case e.orientation.left:
			case e.orientation.right:
				g = i.y - x / 2 + e.manager._getNodeWidth(i, this.config) / 2;
				break;
		}
		var S = [
			h,
			g,
			b,
			x
		];
		o[0] !== S[0] || o[1] !== S[1] ? e.animate(a, { viewBox: o }, { viewBox: S }, this.config.anim.duration, this.config.anim.func, function() {
			r.draw(e.action.update, void 0, n);
		}) : n && n();
	}
}, e.prototype._nodeHasHiddenParent = function(t) {
	return !t.parent && !e.isNEU(t.pid) && this.getNode(t.pid);
}, e.prototype.destroy = function() {
	this._initCalled = !1, this._resizeObserver.unobserve(this.element), e.events.removeForEventId(this._event_id), this.element.innerHTML = null;
}, e._defaultConfig = function(t) {
	return {
		interactive: !0,
		mode: "light",
		lazyLoading: "auto",
		enableDragDrop: !1,
		enableSearch: !0,
		enableAI: !1,
		enablePan: !0,
		keyNavigation: !1,
		miniMap: !1,
		controls: null,
		nodeMenu: null,
		nodeCircleMenu: null,
		nodeContextMenu: null,
		menu: null,
		toolbar: !1,
		nodeMouseClick: e.action.details,
		nodeMouseDbClick: e.none,
		mouseScrool: e.action.ctrlZoom,
		showXScroll: !1,
		showYScroll: !1,
		template: "ana",
		tags: {},
		min: !1,
		nodeBinding: {},
		linkBinding: {},
		searchFields: null,
		searchDisplayField: null,
		searchFieldsWeight: null,
		searchFieldsAbbreviation: null,
		nodes: [],
		clinks: [],
		slinks: [],
		backdrops: [],
		groupDottedLines: [],
		dottedLines: [],
		undoRedoStorageName: null,
		levelSeparation: 60,
		siblingSeparation: 20,
		subtreeSeparation: 40,
		backdropSeparation: 15,
		mixedHierarchyNodesSeparation: 15,
		assistantSeparation: 100,
		minPartnerSeparation: 50,
		partnerChildrenSplitSeparation: 20,
		partnerNodeSeparation: 15,
		columns: 10,
		padding: 30,
		orientation: e.orientation.top,
		layout: e.layout.normal,
		layoutGridColumns: "dynamic",
		scaleInitial: e.match.boundaryIfOutside,
		movable: null,
		scaleMin: .1,
		scaleMax: 5,
		orderBy: null,
		editUI: null,
		aiUI: null,
		orgScribeUI: null,
		powerPointPreviewUI: null,
		pdfPreviewUI: null,
		svgPreviewUI: null,
		pngPreviewUI: null,
		filterUI: null,
		searchUI: null,
		xScrollUI: null,
		yScrollUI: null,
		nodeMenuUI: null,
		controlsUI: null,
		nodeCircleMenuUI: null,
		nodeContextMenuUI: null,
		toolbarUI: null,
		notifierUI: null,
		menuUI: null,
		undoRedoUI: null,
		exportUrl: "https://balkan.app/export",
		serverUrl: "https://serverjs.balkan.app",
		aiChatTools: [],
		collapse: {},
		expand: {},
		align: e.CENTER,
		UI: null,
		anim: {
			func: e.anim.outPow,
			duration: 200
		},
		zoom: {
			speed: 120,
			smooth: 12
		},
		roots: null,
		state: null,
		editForm: {
			readOnly: !1,
			titleBinding: "name",
			photoBinding: "img",
			addMore: "Add more fields",
			addMoreBtn: "Add",
			addMoreFieldName: "Field name",
			saveAndCloseBtn: "Save and close",
			generateElementsFromFields: !0,
			focusBinding: null,
			buttons: {
				edit: {
					icon: e.icon.edit(24, 24, "#fff"),
					text: "Edit",
					hideIfEditMode: !0,
					hideIfDetailsMode: !1
				},
				share: {
					icon: e.icon.share(24, 24, "#fff"),
					text: "Share"
				},
				pdf: {
					icon: e.icon.pdf(24, 24, "#fff"),
					text: "Save as PDF"
				},
				remove: {
					icon: e.icon.remove(24, 24, "#fff"),
					text: "Remove",
					hideIfDetailsMode: !0
				}
			},
			elements: []
		}
	};
}, e.localStorage = {}, e.localStorage.getItem = function(e) {
	var t = localStorage.getItem("to_date");
	if (!t) t = /* @__PURE__ */ new Date(), t.setDate(t.getDate() + 5), t = t.toISOString(), localStorage.setItem("to_date", t);
	else if (t = new Date(t), t < /* @__PURE__ */ new Date()) {
		for (var n = 0, r = localStorage.length; n < r; ++n) {
			var i = localStorage.key(n);
			i && i.startsWith && i.startsWith("{\"n\"") && localStorage.removeItem(i);
		}
		localStorage.removeItem("to_date");
	}
	return localStorage.getItem(e);
}, e.localStorage.setItem = function(e, t) {
	try {
		localStorage.setItem(e, t);
	} catch (e) {
		e.code == e.QUOTA_EXCEEDED_ERR ? (console.warn("Local storage quota exceeded"), localStorage.clear()) : (console.error("Local storage error code:" + e.code), console.error(e));
	}
}, e.prototype.canUpdateLink = function(e, t) {
	if (t == null || t == null || e == null || e == null || e == t) return !1;
	var n = this.getNode(t), r = this.getNode(e);
	return n && r && (n.isPartner || n.hasPartners && r.isAssistant || n.hasAssistants && r.isPartner) ? !1 : !this.isChild(e, t);
}, e.prototype._canUpdateLink = e.prototype.canUpdateLink, e.prototype.updateNode = function(t, n, r, i) {
	if (t) {
		var a = this, o = this.get(t.id);
		if (r === !0 && e.events.publish("update", [
			this,
			o,
			t
		]) === !1) return !1;
		this.update(t), this._ai.setContext(), e.events.publish("updated", [this]), this.filterUI.update();
		var s = this.getNode(t.id), c = s.pid;
		c ??= s.stpid, this._draw(!1, e.action.update, { id: c }, function() {
			i || a.ripple(t.id), n && n();
		});
	}
}, e.prototype.update = function(e) {
	for (var t = 0; t < this.config.nodes.length; t++) if (this.config.nodes[t].id == e.id) {
		this._putInUndoStack(), this.clearRedo(), this.config.nodes[t] = e;
		break;
	}
	return this;
}, e.prototype.removeNode = function(t, n, r) {
	if (!this.canRemove(t)) return !1;
	var i = this._getNewPidsAndStpidsForIds(t);
	return r === !0 && e.events.publish("remove", [
		this,
		t,
		i
	]) === !1 ? !1 : (this.remove(t), this._ai.setContext(), e.events.publish("updated", [this]), this.filterUI.update(), this._draw(!1, e.action.update, null, function() {
		n && n();
	}), !0);
}, e.prototype.remove = function(e) {
	var t = this.get(e);
	if (t) {
		this._putInUndoStack(), this.clearRedo();
		for (var n = this.config.nodes.length - 1; n >= 0; n--) (this.config.nodes[n].pid == e || this.config.nodes[n].stpid == e) && (this.config.nodes[n].pid = t.pid, this.config.nodes[n].stpid = t.stpid), this.config.nodes[n].id == e && this.config.nodes.splice(n, 1);
	}
	return this;
}, e.prototype._getNewPidsAndStpidsForIds = function(e) {
	var t = this.get(e), n = {}, r = {};
	if (t) for (var i = this.config.nodes.length - 1; i >= 0; i--) this.config.nodes[i].pid == e ? n[this.config.nodes[i].id] = t.pid : this.config.nodes[i].stpid == e && (r[this.config.nodes[i].id] = t.stpid);
	return {
		newPidsForIds: n,
		newStpidsForIds: r
	};
}, e.prototype.addNode = function(t, n, r) {
	var i = this;
	if (r === !0 && e.events.publish("add", [this, t]) === !1) return !1;
	this.add(t), this._ai.setContext(), e.events.publish("updated", [this]), this.filterUI.update(), i._draw(!1, e.action.insert, {
		id: t.pid,
		insertedNodeId: t.id
	}, function() {
		i.ripple(t.id), n && n();
	});
}, e.prototype.add = function(t) {
	if (t.id ?? console.error("Call addNode without id"), this._putInUndoStack(), this.clearRedo(), this.config.movable && !e.isNEU(t.pid)) {
		var n = this._get(t.pid);
		n && (n.movex != null && (t.movex = n.movex), n.movey != null && (t.movey = n.movey));
	}
	return this.config.nodes.push(t), this;
}, e.prototype.replaceIds = function(t, n) {
	this._replaceIds(t), this._draw(!1, e.action.update, void 0, n);
}, e.prototype._replaceIds = function(t) {
	for (var n = function(e) {
		for (var n = 0; n < e.length; n++) {
			var r = e[n];
			for (var i in t) {
				var a = t[i];
				r.from == i && (r.from = a), r.to == i && (r.to = a);
			}
		}
	}, r = 0; r < this.config.nodes.length; r++) {
		var i = this.config.nodes[r];
		for (var a in t) {
			var o = t[a];
			i.id == a && (i.id = o), i.pid == a && (i.pid = o), i.stpid == a && (i.stpid = o), i.ppid == a && (i.ppid = o);
		}
	}
	if (Array.isArray(this.config.roots)) for (var r = 0; r < this.config.roots.length; r++) e.isNEU(t[this.config.roots[r]]) || (this.config.roots[r] = t[this.config.roots[r]]);
	if (this.nodes) {
		for (var s in this.nodes) if (!e.isNEU(t[s])) {
			var o = t[s], c = this.nodes[s];
			c.id = o, this.nodes[o] = c;
		}
	}
	if (this.manager.oldNodes) {
		for (var s in this.manager.oldNodes) if (!e.isNEU(t[s])) {
			var o = t[s], c = this.manager.oldNodes[s];
			c.id = o, this.manager.oldNodes[o] = c;
		}
	}
	if (this.roots) {
		for (var s in this.roots) if (!e.isNEU(t[s])) {
			var o = t[s], c = this.roots[s];
			c.id = o, this.roots[o] = c;
		}
	}
	n(this.config.clinks), n(this.config.slinks), n(this.config.groupDottedLines), n(this.config.dottedLines);
}, e.prototype._get = function(t) {
	var n = this.__get(t);
	if (n) return n;
	if ((this.config.groupDottedLines.length || this.config.dottedLines.length) && !e.isNEU(t) && typeof t == "string" && (t.indexOf("balkan_group_dotted_") != -1 || t.indexOf("balkan_dotted_") != -1)) {
		t = t.replace("balkan_group_dotted_", ""), t = t.replace("balkan_dotted_", "");
		var r = t.indexOf("_balkan_id_");
		if (t = t.substring(r + 11), n = this.__get(t), n) return n;
	}
	return null;
}, e.prototype.__get = function(e) {
	for (var t = 0; t < this.config.nodes.length; t++) if (this.config.nodes[t].id == e) return this.config.nodes[t];
	return null;
}, e.prototype.get = function(e) {
	var t = this._get(e);
	return t == null ? null : JSON.parse(JSON.stringify(t));
}, e.prototype.canRemove = function(e) {
	var t = this.getNode(e);
	return !(!t || t.hasPartners || t.hasAssistants);
}, e === void 0 && (e = {}), e._ajax = function(t, n, r, i, a) {
	i ??= "arraybuffer";
	var o = new XMLHttpRequest();
	for (var s in o.onload = function(e) {
		o.readyState == 4 && this.status === 200 && (e.target == null ? a(this.response) : a(e.target.response));
	}, o.onerror = function(e) {
		a({ error: e });
	}, o.open(n, t), o.responseType = i, o.setRequestHeader("Content-Type", "application/json"), e.REQUEST_CUSTOM_HEADERS) o.setRequestHeader(s, e.REQUEST_CUSTOM_HEADERS[s]);
	r == null ? o.send() : o.send(r);
}, e === void 0 && (e = {}), e.animate = function(t, n, r, i, a, o, s) {
	var c = 10, l = 1, u = 1, d = i / c + 1, f;
	document.getElementsByTagName("g"), Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
	function p() {
		for (var p = 0; p < t.length; p++) for (var m in r[p]) {
			var h = e._arrayContains([
				"top",
				"left",
				"right",
				"bottom",
				"width",
				"height"
			], m.toLowerCase()) ? "px" : "";
			switch (m.toLowerCase()) {
				case "d":
					var g = a((u * c - c) / i) * (r[p][m][0] - n[p][m][0]) + n[p][m][0], _ = a((u * c - c) / i) * (r[p][m][1] - n[p][m][1]) + n[p][m][1];
					t[p].setAttribute("d", t[p].getAttribute("d") + " L" + g + " " + _);
					break;
				case "r":
					var v = a((u * c - c) / i) * (r[p][m] - n[p][m]) + n[p][m];
					t[p].setAttribute("r", v);
					break;
				case "x1":
					var v = a((u * c - c) / i) * (r[p][m] - n[p][m]) + n[p][m];
					t[p].setAttribute("x1", v);
					break;
				case "x2":
					var v = a((u * c - c) / i) * (r[p][m] - n[p][m]) + n[p][m];
					t[p].setAttribute("x2", v);
					break;
				case "y1":
					var v = a((u * c - c) / i) * (r[p][m] - n[p][m]) + n[p][m];
					t[p].setAttribute("y1", v);
					break;
				case "y2":
					var v = a((u * c - c) / i) * (r[p][m] - n[p][m]) + n[p][m];
					t[p].setAttribute("y2", v);
					break;
				case "scrolltop":
					var v = a((u * c - c) / i) * (r[p][m] - n[p][m]) + n[p][m];
					t[p].scrollTop = v;
					break;
				case "rotate3d":
					if (r[p][m]) {
						var y = n[p][m], b = r[p][m], x = [
							0,
							0,
							0,
							0
						];
						for (var S in y) x[S] = a((u * c - c) / i) * (b[S] - y[S]) + y[S];
						t[p].style.transform = "rotate3d(" + x.toString() + "deg)";
					}
					break;
				case "transform":
					if (r[p][m]) {
						var y = n[p][m], b = r[p][m], x = [
							0,
							0,
							0,
							0,
							0,
							0
						];
						for (var S in y) x[S] = a((u * c - c) / i) * (b[S] - y[S]) + y[S];
						t[p].hasAttribute("transform") ? t[p].setAttribute("transform", "matrix(" + x.toString() + ")") : t[p].style.transform = "matrix(" + x.toString() + ")";
					}
					break;
				case "viewbox":
					if (r[p][m]) {
						var y = n[p][m], b = r[p][m], x = [
							0,
							0,
							0,
							0
						];
						for (var S in y) x[S] = a((u * c - c) / i) * (b[S] - y[S]) + y[S];
						t[p].setAttribute("viewBox", x.toString());
					}
					break;
				case "margin":
					if (r[p][m]) {
						var y = n[p][m], b = r[p][m], x = [
							0,
							0,
							0,
							0
						];
						for (var S in y) x[S] = a((u * c - c) / i) * (b[S] - y[S]) + y[S];
						for (var C = "", S = 0; S < x.length; S++) C += parseInt(x[S]) + "px ";
						t[p] && t[p].style && (t[p].style[m] = C);
					}
					break;
				case "scrolly":
					var v = a((u * c - c) / i) * (r[p][m] - n[p][m]) + n[p][m];
					t[p].scrollTo(0, v);
					break;
				default:
					var v = a((u * c - c) / i) * (r[p][m] - n[p][m]) + n[p][m];
					t[p] && t[p].style && (t[p].style[m] = v + h);
					break;
			}
		}
		if (s) {
			var v = a((u * c - c) / i);
			s(v);
		}
		u += l, u > d + 1 && (clearInterval(f), o && o(t));
	}
	return f = setInterval(p, c), f;
}, e.anim = {}, e.anim.inPow = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : e ** 2;
}, e.anim.outPow = function(e) {
	var t = 2;
	if (e < 0) return 0;
	if (e > 1) return 1;
	var n = t % 2 == 0 ? -1 : 1;
	return n * ((e - 1) ** t + n);
}, e.anim.inOutPow = function(t) {
	var n = 2;
	if (t < 0) return 0;
	if (t > 1) return 1;
	if (t *= 2, t < 1) return e.anim.inPow(t, n) / 2;
	var r = n % 2 == 0 ? -1 : 1;
	return r / 2 * ((t - 2) ** n + r * 2);
}, e.anim.inSin = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : -Math.cos(Math.PI / 2 * e) + 1;
}, e.anim.outSin = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : Math.sin(Math.PI / 2 * e);
}, e.anim.inOutSin = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : -.5 * (Math.cos(Math.PI * e) - 1);
}, e.anim.inExp = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : 2 ** (10 * (e - 1));
}, e.anim.outExp = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : -(2 ** (-10 * e)) + 1;
}, e.anim.inOutExp = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : e < .5 ? .5 * 2 ** (10 * (2 * e - 1)) : .5 * (-(2 ** (10 * (-2 * e + 1))) + 2);
}, e.anim.inCirc = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : -(Math.sqrt(1 - e * e) - 1);
}, e.anim.outCirc = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : Math.sqrt(1 - (e - 1) * (e - 1));
}, e.anim.inOutCirc = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : e < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (2 * e - 2) * (2 * e - 2)) + 1);
}, e.anim.rebound = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : e < 1 / 2.75 ? 1 - 7.5625 * e * e : e < 2 / 2.75 ? 1 - (7.5625 * (e - 1.5 / 2.75) * (e - 1.5 / 2.75) + .75) : e < 2.5 / 2.75 ? 1 - (7.5625 * (e - 2.25 / 2.75) * (e - 2.25 / 2.75) + .9375) : 1 - (7.5625 * (e - 2.625 / 2.75) * (e - 2.625 / 2.75) + .984375);
}, e.anim.inBack = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : e * e * (2.70158 * e - 1.70158);
}, e.anim.outBack = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : (e - 1) * (e - 1) * (2.70158 * (e - 1) + 1.70158) + 1;
}, e.anim.inOutBack = function(e) {
	return e < 0 ? 0 : e > 1 ? 1 : e < .5 ? .5 * (4 * e * e * (3.5949 * 2 * e - 2.5949)) : .5 * ((2 * e - 2) * (2 * e - 2) * (3.5949 * (2 * e - 2) + 2.5949) + 2);
}, e.anim.impulse = function(e) {
	var t = 2 * e;
	return t * Math.exp(1 - t);
}, e.anim.expPulse = function(e) {
	return Math.exp(-2 * e ** 2);
}, e === void 0 && (e = {}), e.prototype._attachEventHandlers = function(t) {
	if (this.config.interactive) {
		var t = this.getSvg(), n = this;
		t.addEventListener("touchstart", function(e) {
			e.preventDefault(), n._globalMouseDownHandler.apply(n, [this, e]);
		}, { passive: !1 }), t.addEventListener("mousedown", function(e) {
			n._globalMouseDownHandler.apply(n, [this, e]);
		}, { passive: !0 }), t.addEventListener("contextmenu", function(e) {
			n._globalContextHandler.apply(n, [this, e]);
		}, { passive: !1 }), t.addEventListener("dblclick", function(e) {
			n._globalDbClickHandler.apply(n, [this, e]);
		}, { passive: !0 }), this.config.mouseScrool != e.action.none && t.addEventListener("wheel", function(e) {
			n._mouseScrollHandler.apply(n, [this, e]);
		}, { passive: !1 });
		var r = this.getMenuButton();
		r && r.addEventListener("click", function(e) {
			n._menuClickHandler.apply(n, [this, e]);
		});
	}
}, e === void 0 && (e = {}), e.VERSION = "9.1.86", e.orientation = {}, e.orientation.top = 0, e.orientation.bottom = 1, e.orientation.right = 2, e.orientation.left = 3, e.orientation.top_left = 4, e.orientation.bottom_left = 5, e.orientation.right_top = 6, e.orientation.left_top = 7, e.anchor = {
	top_right: "top_right",
	right_top: "right_top",
	bottom_right: "bottom_right",
	right_bottom: "right_bottom",
	top_left: "top_left",
	left_top: "left_top",
	bottom_left: "bottom_left",
	left_bottom: "left_bottom",
	top: "top",
	bottom: "bottom",
	left: "left",
	right: "right"
}, e.align = {}, e.align.center = e.CENTER = 8, e.align.orientation = e.ORIENTATION = 9, e.attr = {}, e.attr.l = "data-l", e.attr.id = "data-id", e.attr.sl = "data-sl", e.attr.lbl = "data-lbl", e.attr.val = "data-val", e.attr.tlbr = "data-tlbr", e.attr.item = "data-item", e.attr.layout = "data-layout", e.attr.node_id = "data-n-id", e.attr.link_id = "data-l-id", e.attr.field_name = "data-f-name", e.attr.c_link_to = "data-c-l-to", e.attr.c_link_from = "data-c-l-from", e.attr.s_link_to = "data-s-l-to", e.attr.s_link_from = "data-s-l-from", e.attr.control_add = "data-ctrl-add", e.attr.control_expcoll_id = "data-ctrl-ec-id", e.attr.control_up_id = "data-ctrl-up-id", e.attr.control_export_menu = "data-ctrl-menu", e.attr.control_node_menu_id = "data-ctrl-n-menu-id", e.attr.control_node_circle_menu_id = "data-ctrl-n-c-menu-id", e.attr.control_node_circle_menu_name = "data-ctrl-n-c-menu-name", e.attr.control_node_circle_menu_wrraper_id = "data-ctrl-n-c-menu-wrapper-id", e.attr.width = "data-width", e.attr.text_overflow = "data-text-overflow", e.ID = "id", e.PID = "pid", e.STPID = "stpid", e.TAGS = "tags", e.NODES = "nodes", e.ELASTIC = "elastic", e.ASSISTANT = "Assistant", e.action = {}, e.action.expand = 0, e.action.collapse = 1, e.action.maximize = 101, e.action.minimize = 102, e.action.expandCollapse = 501, e.action.edit = 1, e.action.zoom = 2, e.action.ctrlZoom = 22, e.action.scroll = 41, e.action.xScroll = 3, e.action.yScroll = 4, e.action.none = 5, e.action.init = 6, e.action.update = 7, e.action.move = 70, e.action.pan = 8, e.action.centerNode = 9, e.action.resize = 10, e.action.insert = 11, e.action.insertfirst = 12, e.action.details = 13, e.action.exporting = 14, e.none = 400001, e.scroll = {}, e.scroll.visible = !0, e.scroll.smooth = 12, e.scroll.speed = 120, e.scroll.safari = {
	smooth: 12,
	speed: 250
}, e.match = {}, e.match.height = 100001, e.match.width = 100002, e.match.boundary = 100003, e.match.boundaryIfOutside = 100004, e.match.none = 1, e.movable = {}, e.movable.node = "node", e.movable.tree = "tree", e.movable.detachTree = "detachTree", e.layout = {}, e.layout.normal = e.normal = 0, e.layout.mixed = e.mixed = 1, e.layout.tree = e.tree = 2, e.layout.treeLeftOffset = e.treeLeftOffset = 3, e.layout.treeRightOffset = e.treeRightOffset = 4, e.layout.treeLeft = 5, e.layout.treeRight = 6, e.layout.grid = -1, e.layout.treeList = -2, e.nodeOpenTag = "<g " + e.attr.node_id + "=\"{id}\" style=\"opacity: {opacity}\" transform=\"matrix(1,0,0,1,{x},{y})\" class=\"{class}\" " + e.attr.sl + "=\"{sl}\" " + e.attr.l + "=\"{level}\" {lcn}>", e.linkOpenTag = "<g " + e.attr.link_id + "=\"[{id}][{child-id}]\" class=\"{class}\">", e.expcollOpenTag = "<g " + e.attr.control_expcoll_id + "=\"{id}\" transform=\"matrix(1,0,0,1,{x},{y})\"  style=\"cursor:pointer;\">", e.upOpenTag = "<g " + e.attr.control_up_id + "=\"{id}\" transform=\"matrix(1,0,0,1,{x},{y})\" style=\"cursor:pointer;\">", e.linkFieldsOpenTag = "<g transform=\"matrix(1,0,0,1,{x},{y}) rotate({rotate})\">", e.grCloseTag = "</g>", e.A5 = {
	width: 420,
	height: 595
}, e.A4 = {
	width: 595,
	height: 842
}, e.A3 = {
	width: 842,
	height: 1191
}, e.A2 = {
	width: 1191,
	height: 1684
}, e.A1 = {
	width: 1684,
	height: 2384
}, e.Letter = {
	width: 612,
	height: 791
}, e.Legal = {
	width: 612,
	height: 1009
}, e.Legal = {
	width: 612,
	height: 1009
}, e.Widescreen = {
	width: 720,
	height: 1280
}, e.Standard = {
	width: 720,
	height: 960
}, e.COLLAPSE_PARENT_NEIGHBORS = 1, e.COLLAPSE_SUB_CHILDRENS = 2, e.COLLAPSE_PARENT_SUB_CHILDREN_EXCEPT_CLICKED = 3, e.TEXT_THRESHOLD = 4e3, e.IMAGES_THRESHOLD = 1e3, e.LINKS_THRESHOLD = 2e3, e.BUTTONS_THRESHOLD = 700, e.ANIM_THRESHOLD = 500, e.IT_IS_LONELY_HERE = "<g transform=\"translate(-100, 0)\" style=\"cursor:pointer;\"  " + e.attr.control_add + "=\"control-add\"><text fill=\"#039be5\">{link}</text></g>", e.RES = {}, e.IT_IS_LONELY_HERE_LINK = e.RES.IT_IS_LONELY_HERE_LINK = "It's lonely here, add your first node", e.FIRE_DRAG_NOT_CLICK_IF_MOVE = 3, e.STRING_TAGS = !1, e.MAX_NODES_MESS = "The trial has expired or 200 nodes limit was reached! <br /><a style='color: #039BE5;' target='_blank' href='https://balkan.app/OrgChartJS/Docs/Evaluation'>See more</a>", e.OFFLINE_MESS = "The evaluation version requires internet connection! <br /><a style='color: #039BE5;' target='_blank' href='https://balkan.app/OrgChartJS/Docs/Evaluation'>See more</a>", e.SEARCH_PLACEHOLDER = "Search... type ? to get help.", e.SEARCH_HELP_SYMBOL = "?", e.SEARCH_CLOSE_RESULT_ON_ESCAPE_OR_CLICKOUTSIDE = !1, e.SEARCH_RESULT_LIMIT = 10, e.IMPORT_MESSAGE = "Choose the columns (fields) in your data file that contain the required information.", e.FIXED_POSITION_ON_CLICK = !1, e.RENDER_LINKS_BEFORE_NODES = !1, e.RENDER_CLINKS_BEFORE_NODES = !1, e.MIXED_LAYOUT_ALL_NODES = !1, e.MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN = !1, e.MIXED_LAYOUT_IF_NUMBER_OF_CHILDREN_IS_MORE_THEN = 1, e.LINK_ROUNDED_CORNERS = 5, e.MOVE_STEP = 5, e.CLINK_CURVE = 1, e.MAX_DEPTH = 200, e.SCALE_FACTOR = 1.44, e.LAZY_LOADING_FACTOR = "auto", e.LAZY_LOADING = !0, e.ARRAY_FIELDS = ["tags"], e.CSV_DELIMITER = ",", e.EDITFORM_CLOSE_BTN = "<svg data-edit-from-close class=\"boc-edit-form-close\"><path style=\"fill:#ffffff;\" d=\"M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111 C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587 c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z\"></path></svg>", e.ESCAPE_HTML = !1, e.VERTICAL_CHILDREN_ASSISTANT = !1, e.EXPORT_PAGES_CUT_NODES = !1, e.RESET_MOVABLE_ONEXPANDCOLLAPSE = !1, e.FILTER_ALPHABETICALLY = !0, e.SERVER_PREFIX = ".azurewebsites.net/api/you-see-this-request-because-it-is-trial-version-of-orgchartjs", e.FUNC_URL_NAME = "func-url-orgchartjs", e.MINIMUM_SYMBOLS_IN_SEARCH_INPUT = 1, e.AI_SYSTEM_MESSAGES = [], e.ORGSCRIBE_OFFSET = " ", e.TREELIST_WHEEL_STEP = "auto", e.TREELIST_SCROLLBAR_WIDTH = 10, e.CONVERT_IMAGES_TO_BASE64_BEFORE_EXPORT = !1, e.REQUEST_CUSTOM_HEADERS = {}, e.SLINK_GAP = 7, e._intersects = function(t, n, r) {
	var i = t.x - r.siblingSeparation / 4, a = t.y, o = t.x + t.w + r.siblingSeparation / 4, s = t.y;
	switch (r.orientation) {
		case e.orientation.right:
		case e.orientation.right_top:
		case e.orientation.left:
		case e.orientation.left_top:
			i = t.x, a = t.y - r.siblingSeparation / 4, o = t.x, s = t.y + t.h + r.siblingSeparation / 4;
			break;
	}
	var c = n.p, l = n.q, u = n.r, d = n.s, f = (o - i) * (d - l) - (u - c) * (s - a), p, m;
	return f === 0 ? !1 : (m = ((d - l) * (u - i) + (c - u) * (d - a)) / f, p = ((a - s) * (u - i) + (o - i) * (d - a)) / f, 0 < m && m < 1 && 0 < p && p < 1);
}, e._addPoint = function(t, n, r, i, a) {
	switch (r.orientation) {
		case e.orientation.top:
		case e.orientation.top_left: return e._addPointTop(t, n, r, i, a);
		case e.orientation.bottom:
		case e.orientation.bottom_left: return e._addPointBottom(t, n, r, i, a);
		case e.orientation.left:
		case e.orientation.left_top: return e._addPointLeft(t, n, r, i, a);
		case e.orientation.right:
		case e.orientation.right_top: return e._addPointRight(t, n, r, i, a);
	}
}, e._addPointTop = function(e, t, n, r, i) {
	var a, o, s;
	return i == "left" ? a = e.leftNeighbor ? e.x + (e.leftNeighbor.x + e.leftNeighbor.w - e.x) / 2 : e.x - n.siblingSeparation / 2 : i == "right" && (a = e.rightNeighbor ? e.x + e.w + (e.rightNeighbor.x - (e.x + e.w)) / 2 : e.x + e.w + n.siblingSeparation / 2), t.push([a, t[t.length - 1][1]]), t.push([a, e.y - n.levelSeparation / 3]), o = t[t.length - 1][1], s = a, r.p = a, r.q = o, r.r = s, r;
}, e._addPointBottom = function(e, t, n, r, i) {
	var a, o, s;
	return i == "left" ? a = e.leftNeighbor ? e.x + (e.leftNeighbor.x + e.leftNeighbor.w - e.x) / 2 : e.x - n.siblingSeparation / 2 : i == "right" && (a = e.rightNeighbor ? e.x + e.w + (e.rightNeighbor.x - (e.x + e.w)) / 2 : e.x + e.w + n.siblingSeparation / 2), t.push([a, t[t.length - 1][1]]), t.push([a, e.y + e.h + n.levelSeparation / 3]), o = t[t.length - 1][1], s = a, r.p = a, r.q = o, r.r = s, r;
}, e._addPointLeft = function(e, t, n, r, i) {
	var a = t[t.length - 1][0], o;
	i == "bottom" ? o = e.rightNeighbor ? e.y + e.h + (e.rightNeighbor.y - (e.y + e.h)) / 2 : e.y + e.h + n.siblingSeparation / 2 : i == "top" && (o = e.leftNeighbor ? e.y + (e.leftNeighbor.y + e.leftNeighbor.h - e.y) / 2 : e.y - n.siblingSeparation / 2), t.push([t[t.length - 1][0], o]), t.push([e.x - n.levelSeparation / 3, o]), a = t[t.length - 1][0];
	var s = o;
	return r.p = a, r.q = o, r.s = s, r;
}, e._addPointRight = function(e, t, n, r, i) {
	var a = t[t.length - 1][0], o;
	i == "bottom" ? o = e.rightNeighbor ? e.y + e.h + (e.rightNeighbor.y - (e.y + e.h)) / 2 : e.y + e.h + n.siblingSeparation / 2 : i == "top" && (o = e.leftNeighbor ? e.y + (e.leftNeighbor.y + e.leftNeighbor.h - e.y) / 2 : e.y - n.siblingSeparation / 2), t.push([t[t.length - 1][0], o]), t.push([e.x + e.w + n.levelSeparation / 3, o]), a = t[t.length - 1][0];
	var s = o;
	return r.p = a, r.q = o, r.s = s, r;
}, e._addConnectorLines = function(t, n) {
	e._addConnectorLine(t, {
		x1: n.xa,
		y1: n.ya,
		x2: n.xb,
		y2: n.yb
	}), e._addConnectorLine(t, {
		x1: n.xb,
		y1: n.yb,
		x2: n.xc,
		y2: n.yc
	}), e._addConnectorLine(t, {
		x1: n.xc,
		y1: n.yc,
		x2: n.xd,
		y2: n.yd
	});
}, e._addConnectorLine = function(e, t) {
	if (t.x1 == t.x2) {
		if (e.x[t.x1] || (e.x[t.x1] = []), t.y1 > t.y2) {
			var n = t.y1;
			t.y1 = t.y2, t.y2 = n;
		}
		e.x[t.x1].push({
			y1: t.y1,
			y2: t.y2
		});
	}
	if (t.y1 == t.y2) {
		if (e.y[t.y1] || (e.y[t.y1] = []), t.x1 > t.x2) {
			var r = t.x1;
			t.x1 = t.x2, t.x2 = r;
		}
		e.y[t.y1].push({
			x1: t.x1,
			x2: t.x2
		});
	}
}, e._addLineToPath = function(t, n, r) {
	return e._avoidOverlapping(n, r), t.push([r.x1, r.y1]), t.push([r.x2, r.y2]), e._addConnectorLine(n, r), r;
}, e._slinkRemoveUnusedPoints = function(e) {
	for (var t = e.length - 2; t >= 1; t--) {
		var n = e[t - 1], r = e[t], i = e[t + 1];
		(r[0] == n[0] && r[0] == i[0] || r[1] == n[1] && r[1] == i[1]) && e.splice(t, 1);
	}
}, e._slinkAvoidOverlaping = function(t, n, r, i) {
	for (var a = 1; a < n.length; a++) {
		var o = n[a - 1], s = n[a];
		if (o[0] == s[0]) {
			for (var c = t.x[s[0]]; c;) {
				var l = !0;
				for (var u of c) if (u.y1 <= o[1] && u.y2 >= o[1] || u.y1 <= s[1] && u.y2 >= s[1]) {
					i == e.orientation.top || i == e.orientation.top_left ? r == "left" ? s[0] -= e.SLINK_GAP : r == "right" && (s[0] += e.SLINK_GAP) : (i == e.orientation.bottom || i == e.orientation.bottom_left) && (r == "right" ? s[0] += e.SLINK_GAP : r == "left" && (s[0] -= e.SLINK_GAP)), l = !1;
					break;
				}
				if (l) break;
				c = t.x[s[0]];
			}
			o[0] = s[0];
		}
		var d = !0;
		if (o[1] == s[1] && o[0] >= s[0] && (d = !1), d && o[1] == s[1]) {
			for (var c = t.y[s[1]]; c;) {
				var l = !0;
				for (var u of c) if (u.x1 <= o[0] && u.x2 >= o[0] || u.x1 <= s[0] && u.x2 >= s[0]) {
					o[0] >= s[0] || (i == e.orientation.top || i == e.orientation.top_left ? s[1] -= e.SLINK_GAP : (i == e.orientation.bottom || i == e.orientation.bottom_left) && (s[1] += e.SLINK_GAP), l = !1);
					break;
				}
				if (l) break;
				c = t.y[s[1]];
			}
			o[1] = s[1];
		}
		d && e._addConnectorLine(t, {
			x1: o[0],
			y1: o[1],
			x2: s[0],
			y2: s[1]
		});
	}
}, e._slinkAvoidOverlapingSecond = function(t, n, r) {
	for (var i = 1; i < n.length; i++) {
		var a = n[i - 1], o = n[i], s = !1;
		if (a[1] == o[1]) {
			for (var c = t.y[o[1]]; c;) {
				var l = !0;
				for (var u of c) if (u.x1 <= a[0] && u.x2 >= a[0] || u.x1 <= o[0] && u.x2 >= o[0]) {
					a[0] >= o[0] ? (r == e.orientation.top || r == e.orientation.top_left ? o[1] -= e.SLINK_GAP : (r == e.orientation.bottom || r == e.orientation.bottom_left) && (o[1] += e.SLINK_GAP), l = !1) : s = !0;
					break;
				}
				if (l) break;
				c = t.y[o[1]];
			}
			a[1] = o[1];
		}
		s || e._addConnectorLine(t, {
			x1: a[0],
			y1: a[1],
			x2: o[0],
			y2: o[1]
		});
	}
}, e._slinkAvoidOverlaping2 = function(t, n, r, i) {
	for (var a = 1; a < n.length; a++) {
		var o = n[a - 1], s = n[a];
		if (o[1] == s[1]) {
			for (var c = t.y[s[1]]; c;) {
				var l = !0;
				for (var u of c) if (u.x1 <= o[0] && u.x2 >= o[0] || u.x1 <= s[0] && u.x2 >= s[0]) {
					i == e.orientation.left || i == e.orientation.left_top ? r == "top" ? s[1] -= e.SLINK_GAP : r == "bottom" && (s[1] += e.SLINK_GAP) : (i == e.orientation.right || i == e.orientation.right_top) && (r == "bottom" ? s[1] += e.SLINK_GAP : r == "top" && (s[1] -= e.SLINK_GAP)), l = !1;
					break;
				}
				if (l) break;
				c = t.y[s[1]];
			}
			o[1] = s[1];
		}
		var d = !0;
		if (o[0] == s[0] && o[1] >= s[1] && (d = !1), d && o[0] == s[0]) {
			for (var c = t.x[s[0]]; c;) {
				var l = !0;
				for (var u of c) if (u.y1 <= o[1] && u.y2 >= o[1] || u.y1 <= s[1] && u.y2 >= s[1]) {
					o[1] >= s[1] || (i == e.orientation.left || i == e.orientation.left_top ? s[0] -= e.SLINK_GAP : (i == e.orientation.right || i == e.orientation.right_top) && (s[0] += e.SLINK_GAP), l = !1);
					break;
				}
				if (l) break;
				c = t.x[s[0]];
			}
			o[0] = s[0];
		}
		d && e._addConnectorLine(t, {
			x1: o[0],
			y1: o[1],
			x2: s[0],
			y2: s[1]
		});
	}
}, e._slinkAvoidOverlapingSecond2 = function(t, n, r) {
	for (var i = 1; i < n.length; i++) {
		var a = n[i - 1], o = n[i], s = !1;
		if (a[0] == o[0]) {
			for (var c = t.x[o[0]]; c;) {
				var l = !0;
				for (var u of c) if (u.y1 <= a[1] && u.y2 >= a[1] || u.y1 <= o[1] && u.y2 >= o[1]) {
					a[1] >= o[1] ? (r == e.orientation.left || r == e.orientation.left_top ? o[0] -= e.SLINK_GAP : (r == e.orientation.right || r == e.orientation.right_top) && (o[0] += e.SLINK_GAP), l = !1) : s = !0;
					break;
				}
				if (l) break;
				c = t.x[o[0]];
			}
			a[0] = o[0];
		}
		s || e._addConnectorLine(t, {
			x1: a[0],
			y1: a[1],
			x2: o[0],
			y2: o[1]
		});
	}
}, e.editUI = function() {}, e.editUI.prototype.init = function(t) {
	this.obj = t, this.fields = null, this.nodeId = null, this.detailsMode = null, this._event_id = e._guid();
}, e.editUI.prototype.on = function(t, n) {
	return e.events.on(t, n, this._event_id), this;
}, e.editUI.prototype.show = function(t, n, r) {
	if (this.hide(!0)) {
		if (this.nodeId = t, this.detailsMode = n, e.events.publish("show", [this, t]) === !1) return !1;
		var i = this, a = this.content(t, n, r);
		this.obj.element.appendChild(a.element), e.input.init(this.obj.element), e.events.publish("shown", [this, { nodeId: t }]), r ? n || this._focusElement(a.focusId) : this.interval = e.animate(a.element, {
			right: -20,
			opacity: 0
		}, {
			right: 0,
			opacity: 1
		}, 300, e.anim.outSin, function() {
			n || i._focusElement(a.focusId);
		}), this.obj.element.querySelector("[data-edit-from-close]").addEventListener("click", function(n) {
			n.preventDefault(), e.events.publish("cancel", [i, { id: t }]) !== !1 && i.hide();
		}), this.obj.element.querySelector("[data-edit-from-save]").addEventListener("click", function(e) {
			e.preventDefault(), i.hide();
		});
		for (var o = this.obj.element.querySelectorAll("[data-input-btn]"), s = 0; s < o.length; s++) o[s].addEventListener("click", function(n) {
			n.preventDefault(), e.events.publish("element-btn-click", [i, {
				input: this.parentNode.querySelector("input"),
				nodeId: t,
				event: n
			}]);
		});
		this.obj.element.querySelector("[data-add-more-fields-btn]").addEventListener("click", function(t) {
			t.stopPropagation(), t.preventDefault();
			var n = this, r = e.elements.textbox({}, {
				type: "textbox",
				label: i.obj.config.editForm.addMoreFieldName,
				btn: i.obj.config.editForm.addMoreBtn
			}, "280px");
			n.parentNode.insertAdjacentHTML("beforebegin", r.html), n.style.display = "none", e.input.init(n.parentNode.previousSibling);
			var a = document.getElementById(r.id);
			a.focus(), a.nextElementSibling.addEventListener("click", function(t) {
				t.stopPropagation(), t.preventDefault();
				var r = a.value, o = i.obj.element.querySelector("[data-binding=\"" + e._escapeDoubleQuotes(a.value) + "\"]");
				if (!e.isNEU(r) && !o) {
					var s = e.elements.textbox({}, {
						type: "textbox",
						label: r,
						binding: r
					}, "280px");
					a.parentNode.parentNode.parentNode.removeChild(a.parentNode.parentNode), n.parentNode.insertAdjacentHTML("beforebegin", s.html), n.style.display = "", e.input.init(n.parentNode.previousSibling);
					var c = document.getElementById(s.id);
					c.focus(), c.addEventListener("input", function() {
						i._drawCurrentNodeElement();
					});
				} else a.focus();
			});
		}), this.obj.element.querySelector("[data-boc-edit-from-btns]").addEventListener("click", function(n) {
			for (var r = n.target; r && r.hasAttribute && !r.hasAttribute("data-edit-from-btn");) r = r.parentNode;
			if (r && r.hasAttribute) {
				var a = r.getAttribute("data-edit-from-btn"), o = {
					button: i.obj.config.editForm.buttons[a],
					name: a,
					nodeId: t,
					event: n
				};
				if (e.events.publish("button-click", [i, o]) === !1) return !1;
				switch (a) {
					case "edit":
						i.obj.editUI.show(t, !1, !0);
						break;
					case "pdf":
						i.obj.exportToPDFProfile(t), i.hide();
						break;
					case "share":
						i.obj.shareProfile(t);
						break;
					case "remove":
						i.obj.removeNode(t, null, !0), i.hide();
						break;
				}
			}
		});
		for (var c = this.obj.element.querySelectorAll("[data-boc-edit-form] [data-binding]"), s = 0; s < c.length; s++) {
			var l = c[s];
			l.getAttribute("data-binding") && l.addEventListener("input", function() {
				i._drawCurrentNodeElement();
			});
		}
	}
}, e.editUI.prototype._drawCurrentNodeElement = function() {
	var t = this.obj.element.querySelector("[data-boc-edit-form]"), n = e.input.getData(t), r = this.obj.get(this.nodeId), i = this.obj.getNode(this.nodeId), a = e.mergeDeep(r, n), o = this.obj.ui.node(i, a, [], this.obj.config, void 0, void 0, void 0, void 0, this.obj.getScale(), this.obj);
	this._replaceNodeWith(o);
}, e.editUI.prototype._replaceNodeWith = function(e) {
	var t = document.createElementNS("http://www.w3.org/2000/svg", "g");
	t.innerHTML = e;
	var n = t.firstElementChild;
	this.obj.getNodeElement(this.nodeId).replaceWith(n);
}, e.editUI.prototype.setAvatar = function(e) {
	var t = this.obj.element.querySelector("[id=\"boc-avatar\"]"), n = this.obj.element.querySelector("[id=\"boc-avatar\"] img"), r = this.obj.element.querySelector("[id=\"boc-avatar\"] svg");
	if (t) n ? n.setAttribute("src", e) : r && (t.innerHTML = `<img style="width: 100%;height:100%;border-radius: 50%;object-fit:cover;" src="${e}">`);
	else return;
	this._drawCurrentNodeElement();
}, e.editUI.prototype.save = function(t) {
	var n = this.obj.element.querySelector("[data-boc-edit-form]"), r = e.input.validateAndGetData(n);
	if (r !== !1) {
		var i = this.obj.get(this.nodeId), a = { data: e.mergeDeep(i, r) };
		return e.events.publish("save", [this, a]) === !1 ? void 0 : (this.obj.updateNode(a.data, null, !0, t), !0);
	}
	return !1;
}, e.editUI.prototype._focusElement = function(t) {
	var n = null;
	e.isNEU(this.obj.config.editForm.focusBinding) ? e.isNEU(t) || (n = document.getElementById(t)) : n = this.obj.element.querySelector("[data-binding=\"" + this.obj.config.editForm.focusBinding + "\"]"), n && (n.value && n.value.length && n.setSelectionRange(n.value.length, n.value.length), n.focus());
}, e.editUI.prototype.content = function(t, n, r, i, a) {
	var o = this.obj.config.editForm.readOnly, s = JSON.parse(JSON.stringify(this.obj.config.editForm.elements)), c = this.obj.config.editForm.addMore, l = this.obj.config.editForm.saveAndCloseBtn, u = this.obj.config.editForm.buttons, d = this.obj.config.editForm.titleBinding, f = this.obj.config.editForm.photoBinding, p = this.obj.getNode(t), m = this.obj._get(t), h = e.t(p.templateName, p.min, this.obj.getScale()), g = m[d], _ = m[f];
	if (this.obj.config.editForm.generateElementsFromFields) for (var v = 0; v < this.fields.length; v++) {
		var y = this.fields[v];
		if (y != "tags") {
			for (var b = !1, x = 0; x < s.length; x++) {
				if (Array.isArray(s[x])) {
					for (var S = 0; S < s[x].length; S++) if (y == s[x][S].binding) {
						b = !0;
						break;
					}
				} else if (y == s[x].binding) {
					b = !0;
					break;
				}
				if (b) break;
			}
			b || s.push({
				type: "textbox",
				label: y,
				binding: y
			});
		}
	}
	e.isNEU(g) && (g = ""), _ = e.isNEU(_) ? e.icon.user(150, 150, "#8C8C8C", 0, 0) : `<img style="width: 100%;height:100%;border-radius: 50%;object-fit:cover;" src="${_}"></img>`;
	var C, w = !n, T = n ? "display:none;" : "", E = n || !c ? "display:none;" : "", D = h.editFormHeaderColor ? `style="background-color:${h.editFormHeaderColor};"` : "", O = document.createElement("form");
	if (O.setAttribute("data-boc-edit-form", ""), O.classList.add("boc-edit-form"), O.classList.add(this.obj.config.mode), O.classList.add(p.templateName.replaceAll(" ", "")), O.classList.add(e.ui._defsIds[p.templateName]), Array.isArray(p.tags) && p.tags.length) for (var v = 0; v < p.tags.length; v++) O.classList.add(p.tags[v].replaceAll(" ", ""));
	O.style.display = "flex", O.style.opacity = r ? 1 : 0, O.style.right = r ? 0 : "-20px", i && (O.style.width = i);
	var k = [];
	return O.innerHTML = `<div>
                        <div class="boc-edit-form-header" ${D}>
                            ${a ? "" : e.EDITFORM_CLOSE_BTN}
                            ${e.editUI.renderHeaderContent(g, _, p, m)}
                        </div>
                        <div data-boc-edit-from-btns class="boc-edit-form-instruments">
                        ${(function() {
		if (a) return "";
		var t = "";
		for (var r in u) {
			var i = u[r];
			e.isNEU(i) || w && i.hideIfEditMode || n && i.hideIfDetailsMode || o && i.text == "Edit" || (t += `<div data-edit-from-btn='${r}' class="boc-img-button" ${D} title="${i.text}">${i.icon}</div>`);
		}
		return t;
	})()}    
                        </div>
                    </div>
                    <div class="boc-edit-form-fields">
                        <div class="boc-edit-form-fields-inner">
                            <div class="boc-form-fieldset">
                                ${(function() {
		for (var t = "", r = 0; r < s.length; r++) {
			var i = s[r];
			if (Array.isArray(i)) {
				t += "<div class=\"boc-form-field-100 boc-form-fieldset\">";
				for (var a = 0; a < i.length; a++) {
					var o = i[a], c = e.elements[o.type](m, o, "unset", n);
					!e.isNEU(c.id) && e.isNEU(C) && e.isNEU(c.value) && (C = c.id), e.isNEU(c.value) || k.push(`${o.label}: ${c.value}`), t += c.html;
				}
				t += "</div>";
			} else {
				var c = e.elements[i.type](m, i, "280px", n);
				!e.isNEU(c.id) && e.isNEU(C) && e.isNEU(c.value) && (C = c.id), e.isNEU(c.value) || k.push(`${i.label}: ${c.value}`), t += c.html;
			}
		}
		return t;
	})()}

                                <div class="boc-form-field" style="min-width: 280px; text-align:center; ${E}">
                                    <a data-add-more-fields-btn href="#" class="boc-link">${c}</a>
                                </div>
                            </div>        
                        </div>
                    </div>
                    <div class="boc-form-fieldset" style="padding: 14px 10px; ${T}">
                        <div class="boc-form-field" style="min-width: initial;">
                            <button type="submit" data-edit-from-save type="button" class="boc-button">${l}</button>
                        </div>
                    </div>`, {
		element: O,
		focusId: C,
		title: g,
		shareText: k.join("\n")
	};
}, e.editUI.prototype.hide = function(t) {
	var n = this.obj.element.querySelector("[data-boc-edit-form]");
	if (n) {
		if (!this.detailsMode && !this.save(t)) return;
		if (e.events.publish("hide", [this]) === !1) return !1;
		e.isNEU(this.interval) && (clearInterval(this.interval), this.interval = null), n.parentNode.removeChild(n), this.nodeId = null, this.detailsMode = null;
	}
	return !0;
}, e.editUI.renderHeaderContent = function(t, n, r, i) {
	return `<h1 class="boc-edit-form-title">${e._escapeGreaterLessSign(t)}</h1>
                <div id="boc-avatar" class="boc-edit-form-avatar">${n}</div>`;
}, e.prototype.getSvg = function() {
	return this.element.querySelector("svg");
}, e.prototype.getPointerElement = function() {
	return this.element.querySelector("g[data-pointer]");
}, e.prototype.getNodeElement = function(t) {
	return this.element.querySelector("[" + e.attr.node_id + "='" + t + "']");
}, e.prototype.getMenuButton = function() {
	return this.element.querySelector("[" + e.attr.control_export_menu + "]");
}, e.menuUI = function() {}, e.menuUI.prototype.init = function(t, n) {
	this.obj = t, this.wrapper = null, this.menu = n, this._event_id = e._guid();
}, e.menuUI.prototype.showStickIn = function(e, t, n, r) {
	this._show(e, null, t, n, r);
}, e.menuUI.prototype.show = function(e, t, n, r, i) {
	this._show(e, t, n, r, i);
}, e.menuUI.prototype._show = function(t, n, r, i, a) {
	var o = this;
	this.hide();
	var s = "";
	a ||= this.menu;
	var c = {
		firstNodeId: r,
		secondNodeId: i,
		menu: a
	};
	if (e.events.publish("show", [this, c]) === !1) return !1;
	for (var l in a = c.menu, a) {
		var u = a[l].icon, d = a[l].text;
		u === void 0 && (u = e.icon[l] ? e.icon[l](24, 24, "#7A7A7A") : ""), typeof d == "function" && (d = d()), typeof u == "function" && (u = u()), s += "<div " + e.attr.item + "=\"" + l + "\">" + u + "<span>&nbsp;&nbsp;" + d + "</span></div>";
	}
	if (s != "") {
		if (this.wrapper = document.createElement("div"), this.wrapper.className = "boc-chart-menu", this.wrapper.style.left = "-99999px", this.wrapper.style.top = "-99999px", this.wrapper.innerHTML = s, this.obj.element.appendChild(this.wrapper), n == null) {
			var f = e._menuPosition(t, this.wrapper, this.obj.getSvg());
			t = f.x, n = f.y;
		}
		var p = t + 45;
		this.wrapper.style.left = p + "px", this.wrapper.style.top = n + "px", this.wrapper.style.left = p - this.wrapper.offsetWidth + "px";
		var m = t - this.wrapper.offsetWidth;
		e.animate(this.wrapper, {
			opacity: 0,
			left: p - this.wrapper.offsetWidth
		}, {
			opacity: 1,
			left: m
		}, 300, e.anim.inOutPow);
		for (var h = this.wrapper.getElementsByTagName("div"), g = 0; g < h.length; g++) {
			var l = h[g];
			l.addEventListener("click", function(t) {
				var n = this.getAttribute(e.attr.item), s = a[n].onClick;
				e._onClickHandler(o.obj, n, s, r, i) != 0 && o.hide();
			});
		}
	}
}, e.menuUI.prototype.isVisible = function() {
	return this.wrapper != null;
}, e.menuUI.prototype.hide = function() {
	this.wrapper != null && (this.obj.element.removeChild(this.wrapper), this.wrapper = null);
}, e.menuUI.prototype.on = function(t, n) {
	return e.events.on(t, n, this._event_id), this;
}, e.controlsUI = function() {}, e.controlsUI.prototype.init = function(e) {
	this.instance = e, this.elements = {
		top_right: null,
		right_top: null,
		bottom_right: null,
		right_bottom: null,
		top_left: null,
		left_top: null,
		bottom_left: null,
		left_bottom: null,
		top: null,
		bottom: null,
		left: null,
		right: null
	}, this.show();
}, e.controlsUI.prototype.show = function() {
	var t = this, n = function(n) {
		for (var r = n.target; r && r.hasAttribute && !r.hasAttribute("data-control-id");) r = r.parentNode;
		if (r.hasAttribute && r.hasAttribute("data-control-id")) {
			var i = r.getAttribute("data-control-id"), a = t.instance.config.controls[i];
			e.isNEU(a.isOn) || (r.classList.contains("boc-control-selected") ? r.classList.remove("boc-control-selected") : r.classList.add("boc-control-selected"));
			var o = a.onClick;
			e._onClickHandler(t.instance, i, o, void 0, void 0);
		}
	}, r = this.instance.config.controls;
	if (r) {
		this.hide();
		var i = {
			top_right: "",
			right_top: "",
			bottom_right: "",
			right_bottom: "",
			top_left: "",
			left_top: "",
			bottom_left: "",
			left_bottom: "",
			top: "",
			bottom: "",
			left: "",
			right: ""
		};
		for (var a in r) {
			var o = r[a], s = o.icon;
			s === void 0 && (s = e.icon[a] ? e.icon[a](32, 32, "#7A7A7A") : e.icon.cursor(32, 32, "#7A7A7A"));
			var c = o.title;
			c ||= a;
			var l = "";
			o.isOn === !0 && (l = "class=\"boc-control-selected\"");
			var u = `<div ${l} data-control-id="${a}" title="${c}">${s}</div>`;
			o.anchor ||= e.anchor.bottom_right, i[o.anchor] += u;
		}
		for (var a in i) i[a] && (this.elements[a] = document.createElement("div"), this.elements[a].className = "boc-controls boc-controls-" + a, this.elements[a].innerHTML = i[a], this.elements[a].addEventListener("click", n), this.instance.element.appendChild(this.elements[a]));
	}
}, e.controlsUI.prototype.hide = function() {
	for (var e in this.elements) if (this.elements[e]) {
		var t = this.elements[e];
		t.parentNode.removeChild(t);
	}
}, e.circleMenuUI = function() {}, e.circleMenuUI.prototype.init = function(t, n) {
	this.obj = t, this.menu = n, this._menu = null, this._buttonsInterval = [], this._linesInterval = [], this._event_id = e._guid();
}, e.circleMenuUI.prototype.show = function(e, t) {
	this._show(e, t);
}, e.circleMenuUI.prototype.isVisible = function() {
	return this.obj.element.querySelector("[" + e.attr.control_node_circle_menu_wrraper_id + "]") !== null;
}, e.circleMenuUI.prototype._show = function(t, n) {
	var r = this, i = this.obj.getNode(t), a = e.t(i.templateName, i.min, this.obj.getScale());
	if (!e.isNEU(a.nodeCircleMenuButton)) {
		var o = this.obj.getSvg(), s = this.obj.element.querySelector("[" + e.attr.control_node_circle_menu_id + "=\"" + t + "\"]"), c = this.obj.getNodeElement(t), l = e._getTransform(s), u = e._getTransform(c), d = l[4] + u[4], f = l[5] + u[5], p = s.querySelectorAll("line"), m = this.obj.element.querySelector("[" + e.attr.control_node_circle_menu_wrraper_id + "]");
		if (!e.isNEU(m) && m.getAttribute(e.attr.control_node_circle_menu_wrraper_id) == t) {
			this.hide();
			return;
		} else this.hide();
		n ||= this.menu;
		var h = {
			nodeId: t,
			menu: n
		}, g = e.events.publish("show", [this, h]);
		if (this._menu = n, g === !1) return !1;
		for (var _ = 0, v = Object.keys(h.menu).length, y = a.nodeCircleMenuButton.radius * 2 + 4, b = 2 * Math.PI * y, x = b / v - (a.nodeCircleMenuButton.radius * 2 + 2); x < 0;) y += 8, b = 2 * Math.PI * y, x = b / v - (a.nodeCircleMenuButton.radius * 2 + 2);
		for (var S in m = document.createElementNS("http://www.w3.org/2000/svg", "g"), m.setAttribute(e.attr.control_node_circle_menu_wrraper_id, t), m.setAttribute("transform", "matrix(1,0,0,1," + d + "," + f + ")"), o.appendChild(m), h.menu) {
			var C = h.menu[S].icon, w = h.menu[S].color, T = h.menu[S].text;
			typeof C == "function" && (C = C()), typeof w == "function" && (w = w()), typeof T == "function" && (T = T());
			var E = document.createElementNS("http://www.w3.org/2000/svg", "g");
			E.setAttribute("transform", "matrix(1,0,0,1,0,0)"), E.setAttribute(e.attr.control_node_circle_menu_name, S), E.style.cursor = "pointer";
			var D = document.createElementNS("http://www.w3.org/2000/svg", "title");
			e.isNEU(T) || (D.innerHTML = T);
			var O = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			O.setAttribute("cx", 0), O.setAttribute("cy", 0), O.setAttribute("r", a.nodeCircleMenuButton.radius), O.setAttribute("fill", w), O.setAttribute("stroke-width", "1"), O.setAttribute("stroke", a.nodeCircleMenuButton.stroke), E.appendChild(O), E.appendChild(D), E.innerHTML += C, m.appendChild(E);
			var k = E.getElementsByTagName("svg")[0];
			if (k.setAttribute("pointer-events", "none"), k) {
				var A = parseInt(k.getAttribute("width")), j = parseInt(k.getAttribute("height"));
				k.setAttribute("x", -(A / 2)), k.setAttribute("y", -(j / 2));
			}
			var M = _ * Math.PI / (v / 2);
			_++;
			var N = Math.cos(M) * y, P = Math.sin(M) * y;
			this._buttonsInterval.push(e.animate(E, { transform: [
				1,
				0,
				0,
				1,
				0,
				0
			] }, { transform: [
				1,
				0,
				0,
				1,
				N,
				P
			] }, 250, e.anim.outBack, function(t) {
				var n = t[0].getAttribute(e.attr.control_node_circle_menu_name), i = t[0].parentNode.getAttribute(e.attr.control_node_circle_menu_wrraper_id);
				t[0].addEventListener("mouseenter", function(t) {
					e.events.publish("mouseenter", [r, {
						from: i,
						menuItem: h.menu[n],
						menuItemName: n,
						event: t
					}]);
				}), t[0].addEventListener("mouseout", function(t) {
					e.events.publish("mouseout", [r, {
						from: i,
						menuItem: h.menu[n],
						menuItemName: n,
						event: t
					}]);
				});
			}));
		}
		this._linesInterval.push(e.animate(p[0], {
			x1: -(a.nodeCircleMenuButton.radius / 2),
			y1: -6,
			x2: a.nodeCircleMenuButton.radius / 2,
			y2: -6
		}, {
			x1: -7,
			y1: -7,
			x2: 7,
			y2: 7
		}, 500, e.anim.inOutSin)), this._linesInterval.push(e.animate(p[1], {
			x1: -(a.nodeCircleMenuButton.radius / 2),
			y1: 0,
			x2: a.nodeCircleMenuButton.radius / 2,
			y2: 0
		}, {
			x1: 0,
			y1: 0,
			x2: 0,
			y2: 0
		}, 500, e.anim.inOutSin)), this._linesInterval.push(e.animate(p[2], {
			x1: -(a.nodeCircleMenuButton.radius / 2),
			y1: 6,
			x2: a.nodeCircleMenuButton.radius / 2,
			y2: 6
		}, {
			x1: -7,
			y1: 7,
			x2: 7,
			y2: -7
		}, 500, e.anim.inOutSin));
	}
}, e.circleMenuUI.prototype.hide = function() {
	for (var t = this._buttonsInterval.length - 1; t >= 0; t--) clearInterval(this._buttonsInterval[t]), this._buttonsInterval.splice(t, 1);
	this._buttonsInterval = [];
	for (var t = this._linesInterval.length - 1; t >= 0; t--) clearInterval(this._linesInterval[t]), this._linesInterval.splice(t, 1);
	this._linesInterval = [];
	var n = this.obj.element.querySelector("[" + e.attr.control_node_circle_menu_wrraper_id + "]");
	if (n != null) {
		var r = n.getAttribute(e.attr.control_node_circle_menu_wrraper_id), i = this.obj.getNode(r), a = e.t(i.templateName, i.min, this.obj.getScale()), o = this.obj.element.querySelector("[" + e.attr.control_node_circle_menu_id + "=\"" + r + "\"]").querySelectorAll("line");
		o[0].setAttribute("x1", -(a.nodeCircleMenuButton.radius / 2)), o[0].setAttribute("x2", a.nodeCircleMenuButton.radius / 2), o[0].setAttribute("y1", -6), o[0].setAttribute("y2", -6), o[1].setAttribute("x1", -(a.nodeCircleMenuButton.radius / 2)), o[1].setAttribute("x2", a.nodeCircleMenuButton.radius / 2), o[1].setAttribute("y1", 0), o[1].setAttribute("y2", 0), o[2].setAttribute("x1", -(a.nodeCircleMenuButton.radius / 2)), o[2].setAttribute("x2", a.nodeCircleMenuButton.radius / 2), o[2].setAttribute("y1", 6), o[2].setAttribute("y2", 6), n.parentElement.removeChild(n), n = null;
	}
}, e.circleMenuUI.prototype.on = function(t, n) {
	return e.events.on(t, n, this._event_id), this;
}, e === void 0 && (e = {}), e.idb = {
	version: 1,
	dbName: "BALKAN",
	tableName: "orgchart-js",
	keyPath: "id"
}, e.idb.db = null, e.idb._open = function(t) {
	if (e._browser().msie) {
		t && t(!1);
		return;
	}
	if ((navigator.userAgent.toLowerCase().indexOf("safari") > 0 || navigator.userAgent.toLowerCase().indexOf("firefox") > 0) && window.location !== window.parent.location) {
		t && t(!1);
		return;
	}
	if (!window.indexedDB) {
		console.error("Your browser doesn't support a stable version of IndexedDB."), t && t(!1);
		return;
	}
	if (e.idb.db != null) {
		t && t(!0);
		return;
	}
	var n = indexedDB.open(e.idb.dbName, e.idb.version);
	n.onerror = function(e) {
		console.error("Cannot open database!"), t && t(!1);
	}, n.onsuccess = function(n) {
		e.idb.db = n.target.result, t && t(!0);
	}, n.onupgradeneeded = function(t) {
		var n = t.target.result;
		n.objectStoreNames.contains(e.idb.tableName) && n.deleteObjectStore(e.idb.tableName), n.createObjectStore(e.idb.tableName, { keyPath: e.idb.keyPath });
	};
}, e.idb.read = function(t, n) {
	e.idb._open(function(r) {
		if (r) {
			var i = e.idb.db.transaction([e.idb.tableName]).objectStore(e.idb.tableName).get(t);
			i.onerror = function(e) {
				console.error("Unable to retrieve data from database!"), n && n(!1);
			}, i.onsuccess = function(e) {
				i.result ? n && n(!0, i.result) : n && n(null);
			};
		} else n && n(!1);
	});
}, e.idb.write = function(t, n) {
	e.idb.read(t.id, function(r) {
		if (r == null) {
			var i = e.idb.db.transaction([e.idb.tableName], "readwrite").objectStore(e.idb.tableName).add(t);
			i.onerror = function(e) {
				console.error("Unable to add data to database!"), n && n(!1);
			}, i.onsuccess = function(e) {
				n && n(!0);
			};
		} else n && n(r);
	});
}, e.idb.put = function(t, n) {
	e.idb._open(function(r) {
		if (r) {
			var i = e.idb.db.transaction([e.idb.tableName], "readwrite").objectStore(e.idb.tableName).put(t);
			i.onerror = function(e) {
				console.error("Unable to put data to database!"), n && n(!1);
			}, i.onsuccess = function(e) {
				n && n(!0);
			};
		} else n && n(!1);
	});
}, e.idb.delete = function(t, n) {
	e.idb._open(function(r) {
		if (r) {
			var i = e.idb.db.transaction([e.idb.tableName], "readwrite").objectStore(e.idb.tableName).delete(t);
			i.onerror = function(e) {
				console.error("Unable to retrieve data from database!"), n && n(!1);
			}, i.onsuccess = function(e) {
				i.error ? n && n(!1) : n && n(!0);
			};
		} else n && n(!1);
	});
}, e.toolbarUI = function() {}, e.toolbarUI.expandAllIcon = "<svg style=\"margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;\" width=\"32px\" height=\"32px\"><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto-start-reverse\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#757575\" /></marker><line x1=\"11\" y1=\"11\" x2=\"6\" y2=\"6\" stroke=\"#757575\" stroke-width=\"2\" marker-end=\"url(#arrow)\" /><line x1=\"21\" y1=\"11\" x2=\"26\" y2=\"6\" stroke=\"#757575\" stroke-width=\"2\" marker-end=\"url(#arrow)\" /><line x1=\"21\" y1=\"21\" x2=\"26\" y2=\"26\" stroke=\"#757575\" stroke-width=\"2\" marker-end=\"url(#arrow)\" /><line x1=\"11\" y1=\"21\" x2=\"6\" y2=\"26\" stroke=\"#757575\" stroke-width=\"2\" marker-end=\"url(#arrow)\" /><rect x=\"12\" y=\"12\" width=\"8\" height=\"8\" fill=\"#757575\"></rect></svg>", e.toolbarUI.fitIcon = "<svg  style=\"margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;\" width=\"32px\" height=\"32px\"><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M4,11 L4,4 L11,4\"></path><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M28,11 L28,4 L21,4\"></path><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M28,21 L28,28 L21,28\"></path><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M4,21 L4,28 L11,28\"></path><circle cx=\"16\" cy=\"16\" r=\"5\" fill=\"#757575\"></circle></svg>", e.toolbarUI.openFullScreenIcon = "<svg  style=\"margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;\" width=\"32px\" height=\"32px\"><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M4,11 L4,4 L11,4\"></path><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M28,11 L28,4 L21,4\"></path><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M28,21 L28,28 L21,28\"></path><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M4,21 L4,28 L11,28\"></path><line x1=\"5\" y1=\"5\" x2=\"27\" y2=\"27\" stroke-width=\"3\" stroke=\"#757575\"></line><line x1=\"5\" y1=\"27\" x2=\"27\" y2=\"5\" stroke-width=\"3\" stroke=\"#757575\"></line></svg>", e.toolbarUI.closeFullScreenIcon = "<svg  style=\"margin-bottom:7px;box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;\" width=\"32px\" height=\"32px\"><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M4,11 L4,4 L11,4\"></path><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M28,11 L28,4 L21,4\"></path><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M28,21 L28,28 L21,28\"></path><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M4,21 L4,28 L11,28\"></path><rect x=\"11\" y=\"11\" width=\"10\" height=\"10\" stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" ></rect></svg>", e.toolbarUI.zoomInIcon = "<svg style=\"box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border-left: 1px solid #cacaca; border-right: 1px solid #cacaca; border-top: 1px solid #cacaca; background-color: #f9f9f9;display: block; cursor: pointer;\" width=\"32px\" height=\"32px\" ><g><rect fill=\"#f9f9f9\" x=\"0\" y=\"0\" width=\"32\" height=\"32\" ></rect><line x1=\"8\" y1=\"16\" x2=\"24\" y2=\"16\" stroke-width=\"3\" stroke=\"#757575\"></line><line x1=\"16\" y1=\"8\" x2=\"16\" y2=\"24\" stroke-width=\"3\" stroke=\"#757575\"></line></g><line x1=\"4\" y1=\"32\" x2=\"28\" y2=\"32\" stroke-width=\"1\" stroke=\"#cacaca\"></line></svg>", e.toolbarUI.zoomOutIcon = "<svg style=\"box-shadow: 0px 1px 4px rgba(0,0,0,0.3); margin-bottom:7px; border-left: 1px solid #cacaca; border-right: 1px solid #cacaca; border-bottom: 1px solid #cacaca; background-color: #f9f9f9;display: block; cursor: pointer;\" width=\"32px\" height=\"32px\" ><g><rect fill=\"#f9f9f9\" x=\"0\" y=\"0\" width=\"32\" height=\"32\" ></rect><line x1=\"8\" y1=\"16\" x2=\"24\" y2=\"16\" stroke-width=\"3\" stroke=\"#757575\"></line></g></svg>", e.toolbarUI.layoutIcon = "<svg " + e.attr.tlbr + "=\"layout\" style=\"box-shadow: 0px 1px 4px rgba(0,0,0,0.3); border: 1px solid #cacaca;background-color: #f9f9f9;display: block;cursor: pointer;\" width=\"32px\" height=\"32px\"><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M8,24 L16,14 L24,24\"></path><path stroke-width=\"3\" fill=\"none\" stroke=\"#757575\" d=\"M8,16 L16,8 L24,16\"></path></svg>", e.toolbarUI.prototype.init = function(t, n) {
	if (n) {
		this.obj = t, this.toolbar = n, this._visible = !1, this.div = document.createElement("div"), this.div.classList.add("boc-toolbar-container"), Object.assign(this.div.style, {
			position: "absolute",
			padding: "3px",
			right: this.obj.config.padding - 10 + "px",
			bottom: this.obj.config.padding - 10 + "px"
		}), n.expandAll && (this.div.innerHTML += "<div " + e.attr.tlbr + "=\"expand\">" + e.toolbarUI.expandAllIcon + "</div>"), n.fit && (this.div.innerHTML += "<div " + e.attr.tlbr + "=\"fit\">" + e.toolbarUI.fitIcon + "</div>"), n.zoom && (this.div.innerHTML += "<div " + e.attr.tlbr + "=\"plus\">" + e.toolbarUI.zoomInIcon + "</div>", this.div.innerHTML += "<div " + e.attr.tlbr + "=\"minus\">" + e.toolbarUI.zoomOutIcon + "</div>"), n.layout && (this.div.innerHTML += "<div " + e.attr.tlbr + "=\"layout\">" + e.toolbarUI.layoutIcon + "</div>", this.layouts = document.createElement("div"), this.layouts.classList.add("boc-toolbar-layout"), this.layouts.innerHTML = "<svg data-layout=\"normal\" style=\"cursor: pointer;\" width=\"110\" height=\"100\"><rect fill=\"#039BE5\" x=\"35\" y=\"0\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"7\" y=\"41\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"63\" y=\"41\" width=\"50\" height=\"27\"></rect><line stroke=\"#000000\" x1=\"60\" x2=\"60\" y1=\"27\" y2=\"35\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"32\" x2=\"88\" y1=\"35\" y2=\"35\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"32\" x2=\"32\" y1=\"35\" y2=\"41\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"88\" x2=\"88\" y1=\"35\" y2=\"41\" stroke-width=\"1\"></line></svg>\n            <svg data-layout=\"treeRightOffset\" style=\"cursor: pointer;\" width=\"110\" height=\"100\"><rect fill=\"#039BE5\" x=\"35\" y=\"0\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"40\" y=\"41\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"40\" y=\"73\" width=\"50\" height=\"27\"></rect><line stroke=\"#000000\" x1=\"60\" x2=\"60\" y1=\"27\" y2=\"35\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"60\" x2=\"35\" y1=\"35\" y2=\"35\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"35\" x2=\"35\" y1=\"35\" y2=\"86\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"35\" x2=\"40\" y1=\"86\" y2=\"86\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"35\" x2=\"40\" y1=\"54\" y2=\"54\" stroke-width=\"1\"></line></svg>\n            <svg data-layout=\"treeLeftOffset\" style=\"cursor: pointer;\" width=\"110\" height=\"100\"><rect fill=\"#039BE5\" x=\"35\" y=\"0\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"30\" y=\"41\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"30\" y=\"73\" width=\"50\" height=\"27\"></rect><line stroke=\"#000000\" x1=\"60\" x2=\"60\" y1=\"27\" y2=\"35\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"60\" x2=\"85\" y1=\"35\" y2=\"35\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"85\" x2=\"85\" y1=\"35\" y2=\"86\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"80\" x2=\"85\" y1=\"86\" y2=\"86\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"80\" x2=\"85\" y1=\"54\" y2=\"54\" stroke-width=\"1\"></line></svg>\n            <svg data-layout=\"mixed\" style=\"cursor: pointer;\" width=\"110\" height=\"100\"><rect fill=\"#039BE5\" x=\"35\" y=\"0\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"35\" y=\"41\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"35\" y=\"73\" width=\"50\" height=\"27\"></rect><line stroke=\"#000000\" x1=\"60\" x2=\"60\" y1=\"27\" y2=\"41\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"60\" x2=\"60\" y1=\"68\" y2=\"73\" stroke-width=\"1\"></line></svg>\n            <svg data-layout=\"tree\" style=\"cursor: pointer;\" width=\"110\" height=\"100\"><rect fill=\"#039BE5\" x=\"35\" y=\"0\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"7\" y=\"41\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"35\" y=\"73\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"63\" y=\"41\" width=\"50\" height=\"27\"></rect><line stroke=\"#000000\" x1=\"60\" x2=\"60\" y1=\"27\" y2=\"73\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"57\" x2=\"63\" y1=\"54\" y2=\"54\" stroke-width=\"1\"></line></svg>\n            <svg data-layout=\"grid\" style=\"cursor: pointer;\" width=\"110\" height=\"100\"><rect fill=\"#039BE5\" x=\"35\" y=\"0\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"7\" y=\"41\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"7\" y=\"73\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"63\" y=\"41\" width=\"50\" height=\"27\"></rect><rect fill=\"#F57C00\" x=\"63\" y=\"73\" width=\"50\" height=\"27\"></rect><line stroke=\"#000000\" x1=\"60\" x2=\"60\" y1=\"27\" y2=\"71\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"32\" x2=\"88\" y1=\"39\" y2=\"39\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"32\" x2=\"88\" y1=\"71\" y2=\"71\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"32\" x2=\"32\" y1=\"71\" y2=\"73\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"88\" x2=\"88\" y1=\"71\" y2=\"73\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"32\" x2=\"32\" y1=\"39\" y2=\"41\" stroke-width=\"1\"></line><line stroke=\"#000000\" x1=\"88\" x2=\"88\" y1=\"39\" y2=\"41\" stroke-width=\"1\"></line></svg>", this.obj.element.appendChild(this.layouts)), n.fullScreen && (this.div.innerHTML += "<div " + e.attr.tlbr + "=\"fullScreen\">" + e.toolbarUI.openFullScreenIcon + "</div>"), this.obj.element.appendChild(this.div), this.layoutBtn = this.div.querySelector("[" + e.attr.tlbr + "=\"layout\"]");
		var r = this.div.querySelector("[" + e.attr.tlbr + "=\"plus\"]"), i = this.div.querySelector("[" + e.attr.tlbr + "=\"minus\"]"), a = this.div.querySelector("[" + e.attr.tlbr + "=\"fit\"]"), o = this.div.querySelector("[" + e.attr.tlbr + "=\"fullScreen\"]"), s = this.div.querySelector("[" + e.attr.tlbr + "=\"expand\"]"), c = this;
		r && r.addEventListener("click", function() {
			c.obj.zoom(!0, null, !0);
		}), i && i.addEventListener("click", function() {
			c.obj.zoom(!1, null, !0);
		}), a && a.addEventListener("click", function() {
			c.obj.fit();
		}), o && o.addEventListener("click", function() {
			c.obj.toggleFullScreen();
		}), s && s.addEventListener("click", function() {
			c.obj.expand(null, "all");
		}), this.layoutBtn && this.layoutBtn.addEventListener("click", function() {
			c._visible ? c.hideLayout() : c.showLayout();
		}), this.layouts && this.layouts.addEventListener("click", function(t) {
			for (var n = t.target; n;) {
				if (n.hasAttribute && n.hasAttribute(e.attr.layout)) {
					n = n.getAttribute(e.attr.layout), c.obj.setLayout(e.layout[n]);
					break;
				}
				n = n.parentNode;
			}
		});
	}
}, e.toolbarUI.prototype.showLayout = function() {
	this._visible = !0, this.layoutBtn.style.transform = "rotate(180deg) translateX(0px) translateY(0px)", e.animate(this.div, { bottom: this.obj.config.padding - 10 }, { bottom: this.obj.config.padding + 135 }, this.obj.config.anim.duration, this.obj.config.anim.func), e.animate(this.layouts, { bottom: -145 }, { bottom: 0 }, this.obj.config.anim.duration, this.obj.config.anim.func);
}, e.toolbarUI.prototype.hideLayout = function() {
	this._visible = !1, this.layoutBtn.style.transform = "rotate(0deg) translateX(0px) translateY(0px)", e.animate(this.div, { bottom: this.obj.config.padding + 135 }, { bottom: this.obj.config.padding - 10 }, this.obj.config.anim.duration, this.obj.config.anim.func), e.animate(this.layouts, { bottom: 0 }, { bottom: -145 }, this.obj.config.anim.duration, this.obj.config.anim.func);
}, e.notifierUI = function() {}, e.notifierUI.prototype.init = function(e) {
	this.obj = e;
}, e.notifierUI.prototype.show = function(t, n) {
	if (t == null) return !1;
	t == 1 && (t = e.MAX_NODES_MESS, n = "#FFCA28"), t == 2 && (t = e.OFFLINE_MESS, n = "#FFCA28");
	var r = document.createElement("div");
	r.innerHTML = t, Object.assign(r.style, {
		position: "absolute",
		"background-color": n,
		color: "#ffffff",
		padding: "15px",
		"border-radius": "40px",
		opacity: 0,
		overflow: "hidden",
		"white-space": "nowrap",
		"text-align": "center"
	}), this.obj.element.appendChild(r);
	var i = this.obj.width() / 2 - r.offsetWidth / 2, a = this.obj.height() / 2 - r.offsetHeight / 2;
	r.style.left = i + "px", r.style.top = a + "px";
	var o = r.offsetWidth;
	return r.style.width = "20px", e.animate(r, {
		opacity: 0,
		width: 10
	}, {
		opacity: 1,
		width: o
	}, this.obj.config.anim.duration, this.obj.config.anim.func), !0;
}, e === void 0 && (e = {}), e.icon = {}, e.icon.png_export = e.icon.png_preview = e.icon.pngpreview = e.icon.png = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 550.801 550.801" x="${r}" y="${i}">
                <path fill="${n}" d="M146.747,276.708c0-13.998-9.711-22.352-26.887-22.352c-6.99,0-11.726,0.675-14.204,1.355v44.927 c2.932,0.676,6.539,0.896,11.52,0.896C135.449,301.546,146.747,292.28,146.747,276.708z"/>
                <path fill="${n}" d="M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694 c-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419 c-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545 c0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M234.344,335.86v45.831h-31.601V229.524h40.184 l31.611,55.759c9.025,16.031,18.064,34.983,24.825,52.154h0.675c-2.257-20.103-2.933-40.643-2.933-63.44v-44.473h31.614v152.167 h-36.117l-32.516-58.703c-9.049-16.253-18.971-35.892-26.438-53.727l-0.665,0.222C233.906,289.58,234.344,311.027,234.344,335.86z M71.556,381.691V231.56c10.613-1.804,25.516-3.159,46.506-3.159c21.215,0,36.353,4.061,46.509,12.192 c9.698,7.673,16.255,20.313,16.255,35.219c0,14.897-4.959,27.549-13.999,36.123c-11.738,11.063-29.123,16.031-49.441,16.031 c-4.522,0-8.593-0.231-11.736-0.675v54.411H71.556V381.691z M453.601,523.353H97.2V419.302h356.4V523.353z M485.652,374.688 c-10.61,3.607-30.713,8.585-50.805,8.585c-27.759,0-47.872-7.003-61.857-20.545c-13.995-13.1-21.684-32.97-21.452-55.318 c0.222-50.569,37.03-79.463,86.917-79.463c19.644,0,34.783,3.829,42.219,7.446l-7.214,27.543c-8.369-3.617-18.752-6.55-35.458-6.55 c-28.656,0-50.341,16.256-50.341,49.22c0,31.382,19.649,49.892,47.872,49.892c7.895,0,14.218-0.901,16.934-2.257v-31.835h-23.493 v-26.869h56.679V374.688z"/>
            </svg>`;
}, e.icon.pdf_export = e.icon.pdf_preview = e.icon.pdfpreview = e.icon.pdf = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 550.801 550.801" x="${r}" y="${i}">
                <path fill="${n}" d="M160.381,282.225c0-14.832-10.299-23.684-28.474-23.684c-7.414,0-12.437,0.715-15.071,1.432V307.6 c3.114,0.707,6.942,0.949,12.192,0.949C148.419,308.549,160.381,298.74,160.381,282.225z"/>
                <path fill="${n}" d="M272.875,259.019c-8.145,0-13.397,0.717-16.519,1.435v105.523c3.116,0.729,8.142,0.729,12.69,0.729 c33.017,0.231,54.554-17.946,54.554-56.474C323.842,276.719,304.215,259.019,272.875,259.019z"/>
                <path fill="${n}" d="M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694 c-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419 c-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545 c0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M362.359,309.023c0,30.876-11.243,52.165-26.82,65.333 c-16.971,14.117-42.82,20.814-74.396,20.814c-18.9,0-32.297-1.197-41.401-2.389V234.365c13.399-2.149,30.878-3.346,49.304-3.346 c30.612,0,50.478,5.508,66.039,17.226C351.828,260.69,362.359,280.547,362.359,309.023z M80.7,393.499V234.365 c11.241-1.904,27.042-3.346,49.296-3.346c22.491,0,38.527,4.308,49.291,12.928c10.292,8.131,17.215,21.534,17.215,37.328 c0,15.799-5.25,29.198-14.829,38.285c-12.442,11.728-30.865,16.996-52.407,16.996c-4.778,0-9.1-0.243-12.435-0.723v57.67H80.7 V393.499z M453.601,523.353H97.2V419.302h356.4V523.353z M484.898,262.127h-61.989v36.851h57.913v29.674h-57.913v64.848h-36.593 V232.216h98.582V262.127z"/>
            </svg>`;
}, e.icon.svg_export = e.icon.svg_preview = e.icon.svg = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 550.801 550.801" x="${r}" y="${i}">
                <path fill="${n}" d="M488.426,197.019H475.2v-63.816c0-0.398-0.063-0.799-0.116-1.202c-0.021-2.534-0.827-5.023-2.562-6.995L366.325,3.694 c-0.032-0.031-0.063-0.042-0.085-0.076c-0.633-0.707-1.371-1.295-2.151-1.804c-0.231-0.155-0.464-0.285-0.706-0.419 c-0.676-0.369-1.393-0.675-2.131-0.896c-0.2-0.056-0.38-0.138-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.873v160.545 c0,17.043,13.824,30.87,30.873,30.87h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87v-160.54C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.513c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M338.871,225.672L284.545,386.96h-42.591 l-51.69-161.288h39.967l19.617,68.196c5.508,19.143,10.531,37.567,14.36,57.67h0.717c4.061-19.385,9.089-38.527,14.592-56.953 l20.585-68.918h38.77V225.672z M68.458,379.54l7.415-30.153c9.811,5.021,24.888,10.051,40.439,10.051 c16.751,0,25.607-6.935,25.607-17.465c0-10.052-7.662-15.795-27.05-22.734c-26.8-9.328-44.263-24.168-44.263-47.611 c0-27.524,22.971-48.579,61.014-48.579c18.188,0,31.591,3.823,41.159,8.131l-8.126,29.437c-6.465-3.116-17.945-7.657-33.745-7.657 c-15.791,0-23.454,7.183-23.454,15.552c0,10.296,9.089,14.842,29.917,22.731c28.468,10.536,41.871,25.365,41.871,48.094 c0,27.042-20.812,50.013-65.09,50.013C95.731,389.349,77.538,384.571,68.458,379.54z M453.601,523.353H97.2V419.302h356.4V523.353z M488.911,379.54c-11.243,3.823-32.537,9.103-53.831,9.103c-29.437,0-50.73-7.426-65.57-21.779 c-14.839-13.875-22.971-34.942-22.738-58.625c0.253-53.604,39.255-84.235,92.137-84.235c20.81,0,36.852,4.073,44.74,7.896 l-7.657,29.202c-8.859-3.829-19.849-6.95-37.567-6.95c-30.396,0-53.357,17.233-53.357,52.173c0,33.265,20.81,52.882,50.73,52.882 c8.375,0,15.072-0.96,17.94-2.395v-33.745h-24.875v-28.471h60.049V379.54L488.911,379.54z" />
            </svg>`;
}, e.icon.csv_export = e.icon.csv = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 548.29 548.291" x="${r}" y="${i}">'
                <path fill="${n}" d="M486.2,196.121h-13.164V132.59c0-0.399-0.064-0.795-0.116-1.2c-0.021-2.52-0.824-5-2.551-6.96L364.656,3.677 c-0.031-0.034-0.064-0.044-0.085-0.075c-0.629-0.707-1.364-1.292-2.141-1.796c-0.231-0.157-0.462-0.286-0.704-0.419 c-0.672-0.365-1.386-0.672-2.121-0.893c-0.199-0.052-0.377-0.134-0.576-0.188C358.229,0.118,357.4,0,356.562,0H96.757 C84.893,0,75.256,9.649,75.256,21.502v174.613H62.093c-16.972,0-30.733,13.756-30.733,30.73v159.81 c0,16.966,13.761,30.736,30.733,30.736h13.163V526.79c0,11.854,9.637,21.501,21.501,21.501h354.777 c11.853,0,21.502-9.647,21.502-21.501V417.392H486.2c16.966,0,30.729-13.764,30.729-30.731v-159.81 C516.93,209.872,503.166,196.121,486.2,196.121z M96.757,21.502h249.053v110.006c0,5.94,4.818,10.751,10.751,10.751h94.973v53.861 H96.757V21.502z M258.618,313.18c-26.68-9.291-44.063-24.053-44.063-47.389c0-27.404,22.861-48.368,60.733-48.368 c18.107,0,31.447,3.811,40.968,8.107l-8.09,29.3c-6.43-3.107-17.862-7.632-33.59-7.632c-15.717,0-23.339,7.149-23.339,15.485 c0,10.247,9.047,14.769,29.78,22.632c28.341,10.479,41.681,25.239,41.681,47.874c0,26.909-20.721,49.786-64.792,49.786 c-18.338,0-36.449-4.776-45.497-9.77l7.38-30.016c9.772,5.014,24.775,10.006,40.264,10.006c16.671,0,25.488-6.908,25.488-17.396 C285.536,325.789,277.909,320.078,258.618,313.18z M69.474,302.692c0-54.781,39.074-85.269,87.654-85.269 c18.822,0,33.113,3.811,39.549,7.149l-7.392,28.816c-7.38-3.084-17.632-5.939-30.491-5.939c-28.822,0-51.206,17.375-51.206,53.099 c0,32.158,19.051,52.4,51.456,52.4c10.947,0,23.097-2.378,30.241-5.238l5.483,28.346c-6.672,3.34-21.674,6.919-41.208,6.919 C98.06,382.976,69.474,348.424,69.474,302.692z M451.534,520.962H96.757v-103.57h354.777V520.962z M427.518,380.583h-42.399 l-51.45-160.536h39.787l19.526,67.894c5.479,19.046,10.479,37.386,14.299,57.397h0.709c4.048-19.298,9.045-38.352,14.526-56.693 l20.487-68.598h38.599L427.518,380.583z" />'
            </svg>`;
}, e.icon.json_export = e.icon.json = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 32 32" x="${r}" y="${i}">
                <polygon fill="${n}"  points="31 11 31 21 29 21 27 15 27 21 25 21 25 11 27 11 29 17 29 11 31 11"/>
                <path fill="${n}"  d="M21.3335,21h-2.667A1.6684,1.6684,0,0,1,17,19.3335v-6.667A1.6684,1.6684,0,0,1,18.6665,11h2.667A1.6684,1.6684,0,0,1,23,12.6665v6.667A1.6684,1.6684,0,0,1,21.3335,21ZM19,19h2V13H19Z"/>
                <path fill="${n}"  d="M13.3335,21H9V19h4V17H11a2.002,2.002,0,0,1-2-2V12.6665A1.6684,1.6684,0,0,1,10.6665,11H15v2H11v2h2a2.002,2.002,0,0,1,2,2v2.3335A1.6684,1.6684,0,0,1,13.3335,21Z"/>
                <path fill="${n}"  d="M5.3335,21H2.6665A1.6684,1.6684,0,0,1,1,19.3335V17H3v2H5V11H7v8.3335A1.6684,1.6684,0,0,1,5.3335,21Z"/>
                <rect fill="${n}"  id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" style="fill: none;" width="32" height="32"/>'
            </svg>`;
}, e.icon.excel = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 24 24" x="${r}" y="${i}">
                <path fill="${n}" d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V9C21 9.55228 20.5523 10 20 10C19.4477 10 19 9.55228 19 9V4C19 3.44772 18.5523 3 18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H7C7.55228 21 8 21.4477 8 22C8 22.5523 7.55228 23 7 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM6.41421 7H9V4.41421L6.41421 7ZM19 12C19.5523 12 20 12.4477 20 13V19H23C23.5523 19 24 19.4477 24 20C24 20.5523 23.5523 21 23 21H19C18.4477 21 18 20.5523 18 20V13C18 12.4477 18.4477 12 19 12ZM11.8137 12.4188C11.4927 11.9693 10.8682 11.8653 10.4188 12.1863C9.96935 12.5073 9.86526 13.1318 10.1863 13.5812L12.2711 16.5L10.1863 19.4188C9.86526 19.8682 9.96935 20.4927 10.4188 20.8137C10.8682 21.1347 11.4927 21.0307 11.8137 20.5812L13.5 18.2205L15.1863 20.5812C15.5073 21.0307 16.1318 21.1347 16.5812 20.8137C17.0307 20.4927 17.1347 19.8682 16.8137 19.4188L14.7289 16.5L16.8137 13.5812C17.1347 13.1318 17.0307 12.5073 16.5812 12.1863C16.1318 11.8653 15.5073 11.9693 15.1863 12.4188L13.5 14.7795L11.8137 12.4188Z" fill="#000000"/>
            </svg>`;
}, e.icon.pp_export = e.icon.pp_preview = e.icon.pppreview = e.icon.powerpoint = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}"  viewBox="0 0 24 24" x="${r}" y="${i}">
                <path fill="${n}" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H11C11.5523 23 12 22.5523 12 22C12 21.4477 11.5523 21 11 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM15 12C14.4477 12 14 12.4477 14 13V17V20C14 20.5523 14.4477 21 15 21C15.5523 21 16 20.5523 16 20V18H19C20.6569 18 22 16.6569 22 15C22 13.3431 20.6569 12 19 12H15ZM19 16H16V14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16Z" fill="#000000"/>
            </svg>`;
}, e.icon.edit = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 528.899 528.899" x="${r}" y="${i}">
                <path fill="${n}" d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981 c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611 C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069 L27.473,390.597L0.3,512.69z" />'
            </svg>`;
}, e.icon.details = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 512 512" x="${r}" y="${i}">
                <path fill="${n}" d="M447.933,103.629c-0.034-3.076-1.224-6.09-3.485-8.352L352.683,3.511c-0.004-0.004-0.007-0.005-0.011-0.008 C350.505,1.338,347.511,0,344.206,0H89.278C75.361,0,64.04,11.32,64.04,25.237v461.525c0,13.916,11.32,25.237,25.237,25.237 h333.444c13.916,0,25.237-11.32,25.237-25.237V103.753C447.96,103.709,447.937,103.672,447.933,103.629z M356.194,40.931 l50.834,50.834h-49.572c-0.695,0-1.262-0.567-1.262-1.262V40.931z M423.983,486.763c0,0.695-0.566,1.261-1.261,1.261H89.278 c-0.695,0-1.261-0.566-1.261-1.261V25.237c0-0.695,0.566-1.261,1.261-1.261h242.94v66.527c0,13.916,11.322,25.239,25.239,25.239 h66.527V486.763z"/>
                <path fill="${n}" d="M362.088,164.014H149.912c-6.62,0-11.988,5.367-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175 c6.62,0,11.988-5.368,11.988-11.988C374.076,169.381,368.707,164.014,362.088,164.014z"/>
                <path fill="${n}" d="M362.088,236.353H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.62,5.368,11.988,11.988,11.988h212.175 c6.62,0,11.988-5.368,11.988-11.988C374.076,241.721,368.707,236.353,362.088,236.353z"/>
                <path fill="${n}" d="M362.088,308.691H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988h212.175 c6.62,0,11.988-5.367,11.988-11.988C374.076,314.06,368.707,308.691,362.088,308.691z"/>
                <path fill="${n}" d="M256,381.031H149.912c-6.62,0-11.988,5.368-11.988,11.988c0,6.621,5.368,11.988,11.988,11.988H256 c6.62,0,11.988-5.367,11.988-11.988C267.988,386.398,262.62,381.031,256,381.031z"/>
            </svg>`;
}, e.icon.remove = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 900.5 900.5" x="${r}" y="${i}">
                <path fill="${n}" d="M176.415,880.5c0,11.046,8.954,20,20,20h507.67c11.046,0,20-8.954,20-20V232.487h-547.67V880.5L176.415,880.5z M562.75,342.766h75v436.029h-75V342.766z M412.75,342.766h75v436.029h-75V342.766z M262.75,342.766h75v436.029h-75V342.766z"/>
                <path fill="${n}" d="M618.825,91.911V20c0-11.046-8.954-20-20-20h-297.15c-11.046,0-20,8.954-20,20v71.911v12.5v12.5H141.874 c-11.046,0-20,8.954-20,20v50.576c0,11.045,8.954,20,20,20h34.541h547.67h34.541c11.046,0,20-8.955,20-20v-50.576 c0-11.046-8.954-20-20-20H618.825v-12.5V91.911z M543.825,112.799h-187.15v-8.389v-12.5V75h187.15v16.911v12.5V112.799z"/>
            </svg>`;
}, e.icon.add = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 922 922" x="${r}" y="${i}">
                <path fill="${n}" d="M922,453V81c0-11.046-8.954-20-20-20H410c-11.045,0-20,8.954-20,20v149h318c24.812,0,45,20.187,45,45v198h149 C913.046,473.001,922,464.046,922,453z" />
                <path fill="${n}" d="M557,667.001h151c11.046,0,20-8.954,20-20v-174v-198c0-11.046-8.954-20-20-20H390H216c-11.045,0-20,8.954-20,20v149h194 h122c24.812,0,45,20.187,45,45v4V667.001z" />
                <path fill="${n}" d="M0,469v372c0,11.046,8.955,20,20,20h492c11.046,0,20-8.954,20-20V692v-12.501V667V473v-4c0-11.046-8.954-20-20-20H390H196 h-12.5H171H20C8.955,449,0,457.955,0,469z" />
            </svg>`;
}, e.icon.search = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 485.213 485.213" x="${r}" y="${i}">
                <path fill="${n}" d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324 c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z" />
                <path fill="${n}" d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951 C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46 c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465 C318.424,257.208,257.206,318.416,181.956,318.416z" />
                <path fill="${n}" d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z" />
            </svg>`;
}, e.icon.xml_export = e.icon.xml = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 550.801 550.801" x="${r}" y="${i}">
                <path fill="${n}"  d="M488.426,197.019H475.2v-63.816c0-0.401-0.063-0.799-0.116-1.205c-0.021-2.534-0.827-5.023-2.562-6.992L366.325,3.691 c-0.032-0.031-0.063-0.042-0.085-0.073c-0.633-0.707-1.371-1.298-2.151-1.804c-0.231-0.158-0.464-0.287-0.706-0.422 c-0.676-0.366-1.393-0.675-2.131-0.896c-0.2-0.053-0.38-0.135-0.58-0.19C359.87,0.119,359.037,0,358.193,0H97.2 c-11.918,0-21.6,9.693-21.6,21.601v175.413H62.377c-17.049,0-30.873,13.818-30.873,30.87v160.542 c0,17.044,13.824,30.876,30.873,30.876h13.224V529.2c0,11.907,9.682,21.601,21.6,21.601h356.4c11.907,0,21.6-9.693,21.6-21.601 V419.302h13.226c17.044,0,30.871-13.827,30.871-30.87V227.89C519.297,210.838,505.47,197.019,488.426,197.019z M97.2,21.605 h250.193v110.51c0,5.967,4.841,10.8,10.8,10.8h95.407v54.108H97.2V21.605z M369.531,374.53h-32.058l-2.156-55.519 c-0.644-17.434-1.298-38.518-1.298-59.611h-0.633c-4.514,18.516-10.547,39.166-16.137,56.162l-17.645,56.601h-25.618 l-15.494-56.157c-4.725-16.996-9.671-37.658-13.123-56.6h-0.43c-0.854,19.585-1.508,41.961-2.586,60.038l-2.576,55.086h-30.343 l9.26-145.035h43.677l14.207,48.421c4.517,16.774,9.041,34.847,12.258,51.843h0.654c4.081-16.77,9.038-35.923,13.774-52.064 l15.493-48.199h42.82L369.531,374.53z M69.992,374.53l41.955-73.385l-40.444-71.65h37.655l12.688,26.465 c4.316,8.828,7.533,15.928,10.99,24.092h0.422c3.438-9.242,6.23-15.694,9.893-24.092l12.274-26.465h37.434l-40.89,70.796 l43.044,74.239h-37.866l-13.134-26.257c-5.376-10.108-8.817-17.639-12.909-26.04h-0.433c-3.009,8.401-6.674,15.932-11.19,26.04 l-12.042,26.257H69.992z M453.601,523.353H97.2V419.302h356.4V523.353z M485.325,374.53h-90.608V229.495h32.933v117.497h57.682 v27.538H485.325z"/>
            </svg>`;
}, e.icon.visio_export = e.icon.visio = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 24 24" x="${r}" y="${i}">
        <path fill="${n}" d="M24 7.609v9.556q0 .424-.302.726-.303.303-.726.303h-5.19q-.072 1.149-.556 2.135-.484.986-1.264 1.717-.78.732-1.803 1.15-1.022.417-2.159.417-1.016 0-1.96-.35-.943-.352-1.705-.969-.762-.617-1.295-1.47-.532-.852-.713-1.856H1.028q-.423 0-.726-.303Q0 18.363 0 17.94V7.609q0-.424.302-.726.303-.302.726-.302h5.238q-.072-.182-.072-.387 0-.424.302-.726L11.274.69q.303-.303.726-.303t.726.303l4.778 4.778q.302.302.302.726 0 .205-.072.387h5.238q.423 0 .726.302.302.302.302.726zM12 2.153l-4.04 4.04.387.388h3.012q.423 0 .726.302.302.302.302.726v2.238l3.653-3.653zM7.161 16.84l3.085-8.13H8.238q-.508 1.489-1.028 2.952-.52 1.464-1.004 2.964-.496-1.488-.992-2.958-.496-1.47-1.004-2.957H2.153l3.037 8.129zM12 22.065q.883 0 1.657-.333t1.355-.913q.58-.581.913-1.355.333-.774.333-1.658 0-.81-.302-1.548-.303-.738-.823-1.318-.52-.581-1.228-.944-.707-.363-1.518-.423v4.367q0 .423-.302.725-.303.303-.726.303H7.923q.206.677.593 1.246.387.568.92.98.532.41 1.185.64.653.23 1.379.23zm10.452-5.42V8.13h-6.158q-.133.133-.441.454-.309.32-.714.725-.405.406-.847.853-.441.448-.828.823-.387.375-.684.641-.296.266-.393.302v.097q.968.036 1.845.411t1.578.998q.702.623 1.186 1.446t.677 1.766Z"/>
    </svg>`;
}, e.icon.link = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 512.092 512.092" x="${r}" y="${i}">
                <path fill="${n}" d="M312.453,199.601c-6.066-6.102-12.792-11.511-20.053-16.128c-19.232-12.315-41.59-18.859-64.427-18.859 c-31.697-0.059-62.106,12.535-84.48,34.987L34.949,308.23c-22.336,22.379-34.89,52.7-34.91,84.318 c-0.042,65.98,53.41,119.501,119.39,119.543c31.648,0.11,62.029-12.424,84.395-34.816l89.6-89.6 c1.628-1.614,2.537-3.816,2.524-6.108c-0.027-4.713-3.87-8.511-8.583-8.484h-3.413c-18.72,0.066-37.273-3.529-54.613-10.581 c-3.195-1.315-6.867-0.573-9.301,1.877l-64.427,64.512c-20.006,20.006-52.442,20.006-72.448,0 c-20.006-20.006-20.006-52.442,0-72.448l108.971-108.885c19.99-19.965,52.373-19.965,72.363,0 c13.472,12.679,34.486,12.679,47.957,0c5.796-5.801,9.31-13.495,9.899-21.675C322.976,216.108,319.371,206.535,312.453,199.601z" />
                <path fill="${n}" d="M477.061,34.993c-46.657-46.657-122.303-46.657-168.96,0l-89.515,89.429c-2.458,2.47-3.167,6.185-1.792,9.387 c1.359,3.211,4.535,5.272,8.021,5.205h3.157c18.698-0.034,37.221,3.589,54.528,10.667c3.195,1.315,6.867,0.573,9.301-1.877 l64.256-64.171c20.006-20.006,52.442-20.006,72.448,0c20.006,20.006,20.006,52.442,0,72.448l-80.043,79.957l-0.683,0.768 l-27.989,27.819c-19.99,19.965-52.373,19.965-72.363,0c-13.472-12.679-34.486-12.679-47.957,0 c-5.833,5.845-9.35,13.606-9.899,21.845c-0.624,9.775,2.981,19.348,9.899,26.283c9.877,9.919,21.433,18.008,34.133,23.893 c1.792,0.853,3.584,1.536,5.376,2.304c1.792,0.768,3.669,1.365,5.461,2.048c1.792,0.683,3.669,1.28,5.461,1.792l5.035,1.365 c3.413,0.853,6.827,1.536,10.325,2.133c4.214,0.626,8.458,1.025,12.715,1.195h5.973h0.512l5.12-0.597 c1.877-0.085,3.84-0.512,6.059-0.512h2.901l5.888-0.853l2.731-0.512l4.949-1.024h0.939c20.961-5.265,40.101-16.118,55.381-31.403 l108.629-108.629C523.718,157.296,523.718,81.65,477.061,34.993z" />
            </svg>`;
}, e.icon.happy = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 512 512" x="${r}" y="${i}">
                <path fill="${n}" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480 C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/>
                <path fill="${n}" d="M176,176c17.673,0,32,14.327,32,32h32c0-35.346-28.654-64-64-64c-35.346,0-64,28.654-64,64h32 C144,190.327,158.327,176,176,176z"/>
                <path fill="${n}" d="M336,144c-35.346,0-64,28.654-64,64h32c0-17.673,14.327-32,32-32c17.673,0,32,14.327,32,32h32 C400,172.654,371.346,144,336,144z"/>
                <path fill="${n}" d="M256,368c-53.019,0-96-42.981-96-96h-32c0,70.692,57.308,128,128,128s128-57.308,128-128h-32 C352,325.019,309.019,368,256,368z"/>
            </svg>`;
}, e.icon.sad = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" viewBox="0 0 512 512" x="${r}" y="${i}">
                <path fill="${n}" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,480 C132.288,480,32,379.712,32,256S132.288,32,256,32s224,100.288,224,224S379.712,480,256,480z"/>
                <path fill="${n}" d="M336,192c-17.673,0-32-14.327-32-32h-32c0,35.346,28.654,64,64,64c35.346,0,64-28.654,64-64h-32 C368,177.673,353.673,192,336,192z"/>
                <path fill="${n}" d="M176,224c35.346,0,64-28.654,64-64h-32c0,17.673-14.327,32-32,32s-32-14.327-32-32h-32C112,195.346,140.654,224,176,224z "/>
                <path fill="${n}" d="M256,256c-70.692,0-128,57.308-128,128h32c0-53.019,42.981-96,96-96s96,42.981,96,96h32C384,313.308,326.692,256,256,256 z"/>
            </svg>`;
}, e.icon.share = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 512 512">
                <path fill="${n}" d="M406,332c-29.641,0-55.761,14.581-72.167,36.755L191.99,296.124c2.355-8.027,4.01-16.346,4.01-25.124
                    c0-11.906-2.441-23.225-6.658-33.636l148.445-89.328C354.307,167.424,378.589,180,406,180c49.629,0,90-40.371,90-90
                    c0-49.629-40.371-90-90-90c-49.629,0-90,40.371-90,90c0,11.437,2.355,22.286,6.262,32.358l-148.887,89.59
                    C156.869,193.136,132.937,181,106,181c-49.629,0-90,40.371-90,90c0,49.629,40.371,90,90,90c30.13,0,56.691-15.009,73.035-37.806
                    l141.376,72.395C317.807,403.995,316,412.75,316,422c0,49.629,40.371,90,90,90c49.629,0,90-40.371,90-90
                    C496,372.371,455.629,332,406,332z"/>
                </svg>`;
}, e.icon.user = function(t, n, r, i, a) {
	return e.isNEU(i) && (i = 0), e.isNEU(a) && (a = 0), `<svg width="${t}" height="${n}" x="${i}" y="${a}" viewBox="0 0 24 24">
                <path fill="${r}" d="M12 11.796C14.7189 11.796 16.9231 9.60308 16.9231 6.89801C16.9231 4.19294 14.7189 2.00005 12 2.00005C9.28106 2.00005 7.07692 4.19294 7.07692 6.89801C7.07692 9.60308 9.28106 11.796 12 11.796Z" fill="#030D45"/>
                <path fill="${r}" d="M14.5641 13.8369H9.4359C6.46154 13.8369 4 16.2859 4 19.245C4 19.9593 4.30769 20.5716 4.92308 20.8777C5.84615 21.3879 7.89744 22.0001 12 22.0001C16.1026 22.0001 18.1538 21.3879 19.0769 20.8777C19.5897 20.5716 20 19.9593 20 19.245C20 16.1838 17.5385 13.8369 14.5641 13.8369Z" fill="#030D45"/>
            </svg>`;
}, e.icon.close = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 512 512">
    <path fill="${n}" d="m256 0c-141.49 0-256 114.5-256 256 0 141.49 114.5 256 256 256 141.49 0 256-114.5 256-256 0-141.49-114.5-256-256-256zm-12.284 317.397-58.121 58.132c-6.565 6.553-15.283 10.166-24.557 10.166-19.196 0-34.734-15.526-34.734-34.734 0-9.274 3.612-17.992 10.166-24.557l58.132-58.121c6.785-6.784 6.785-17.783 0-24.568l-58.132-58.121c-6.553-6.565-10.166-15.283-10.166-24.557 0-19.196 15.526-34.734 34.734-34.734 9.274 0 17.992 3.613 24.557 10.166l58.121 58.132c6.785 6.773 17.784 6.773 24.568 0l58.121-58.132c6.565-6.553 15.283-10.166 24.557-10.166 19.196 0 34.734 15.526 34.734 34.734 0 9.274-3.612 17.992-10.166 24.557l-58.132 58.121c-6.785 6.784-6.785 17.783 0 24.568l58.132 58.121c6.553 6.565 10.166 15.283 10.166 24.557 0 19.196-15.526 34.734-34.734 34.734-9.274 0-17.992-3.613-24.557-10.166l-58.121-58.132c-6.784-6.784-17.784-6.773-24.568 0z"/>
    </svg>`;
}, e.icon.undo = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 24 24">
    <path fill-rule="evenodd" clip-rule="evenodd" fill="${n}" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.7141 22 12C22 7.28598 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM9.25871 7.97395C9.56308 7.693 9.58205 7.21851 9.3011 6.91414C9.02015 6.60978 8.54565 6.5908 8.24129 6.87175L5.99129 8.94867C5.83748 9.09065 5.75 9.29045 5.75 9.49977C5.75 9.7091 5.83748 9.9089 5.99129 10.0509L8.24129 12.1278C8.54565 12.4088 9.02015 12.3898 9.3011 12.0854C9.58205 11.781 9.56308 11.3065 9.25871 11.0256L8.41824 10.2498H14.0385C14.7376 10.2498 15.2069 10.2506 15.5652 10.2862C15.9116 10.3205 16.0724 10.3813 16.1787 10.4501C16.3272 10.5461 16.4537 10.6726 16.5497 10.8211C16.6184 10.9274 16.6793 11.0882 16.7136 11.4345C16.7491 11.7929 16.75 12.2622 16.75 12.9613C16.75 13.6604 16.7491 14.1298 16.7136 14.4881C16.6793 14.8344 16.6185 14.9952 16.5497 15.1015C16.4537 15.2501 16.3272 15.3765 16.1787 15.4726C16.0724 15.5413 15.9116 15.6021 15.5652 15.6365C15.2069 15.672 14.7376 15.6729 14.0385 15.6729H9.5C9.08579 15.6729 8.75 16.0086 8.75 16.4229C8.75 16.8371 9.08579 17.1729 9.5 17.1729H14.0758C14.7279 17.1729 15.2721 17.1729 15.7133 17.1291C16.1748 17.0834 16.6038 16.9839 16.9931 16.7322C17.3199 16.5209 17.5981 16.2427 17.8094 15.916C18.0611 15.5266 18.1605 15.0976 18.2063 14.6361C18.25 14.195 18.25 13.6508 18.25 12.9987V12.924C18.25 12.2718 18.25 11.7276 18.2063 11.2865C18.1605 10.825 18.0611 10.396 17.8093 10.0067C17.5981 9.6799 17.3199 9.40169 16.9931 9.19042C16.6038 8.9387 16.1748 8.83927 15.7133 8.7935C15.2721 8.74975 14.7279 8.74976 14.0758 8.74977L8.41824 8.74977L9.25871 7.97395Z" />
    <rect style="opacity: 0" x="2" y="2" width="20" height="20"></rect>
    </svg>`;
}, e.icon.redo = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 24 24" >
    <path fill="#f9f9f9" fill-rule="evenodd" clip-rule="evenodd" fill="${n}" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.7141 22 12C22 7.28598 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM15.7587 6.87273C15.4543 6.59177 14.9799 6.61075 14.6989 6.91512C14.4179 7.21948 14.4369 7.69398 14.7413 7.97493L15.5818 8.75075H9.96155C7.63558 8.75075 5.75 10.6363 5.75 12.9623C5.75 15.2883 7.63557 17.1738 9.96154 17.1738H14.5C14.9142 17.1738 15.25 16.838 15.25 16.4238C15.25 16.0096 14.9142 15.6738 14.5 15.6738H9.96154C8.464 15.6738 7.25 14.4598 7.25 12.9623C7.25 11.4647 8.464 10.2508 9.96155 10.2508H15.5818L14.7413 11.0266C14.4369 11.3075 14.4179 11.782 14.6989 12.0864C14.9799 12.3908 15.4543 12.4097 15.7587 12.1288L18.0087 10.0519C18.1625 9.90987 18.25 9.71007 18.25 9.50075C18.25 9.29143 18.1625 9.09163 18.0087 8.94965L15.7587 6.87273Z"/>
    <rect style="opacity: 0" x="2" y="2" width="20" height="20"></rect>    
    </svg>`;
}, e.icon.send = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}"  viewBox="0 0 24 24" >
                <path fill="none" stroke="${n}" stroke-width="2"  d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" />
            </svg>`;
}, e.icon.x = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 24 24">
        <line x1="0" y1="0" x2="24" y2="24" stroke-width="3" stroke="${n}"></line>
        <line x1="24" y1="0" x2="0" y2="24" stroke-width="3" stroke="${n}"></line>
    </svg>`;
}, e.icon.x = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 24 24">
        <line x1="0" y1="0" x2="24" y2="24" stroke-width="3" stroke="${n}"></line>
        <line x1="24" y1="0" x2="0" y2="24" stroke-width="3" stroke="${n}"></line>
    </svg>`;
}, e.icon.fit = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 128 128">
        <path fill="${n}" d="M 58.1875 4.90625 C 29.957889 4.90625 6.9375 27.957888 6.9375 56.1875 C 6.9375 84.417111 29.957889 107.4375 58.1875 107.4375 C 69.752492 107.4375 80.436703 103.56785 89.03125 97.0625 L 108.59375 120.4375 A 7.0007 7.0007 0 1 0 119.3125 111.4375 L 98.96875 87.15625 C 105.53731 78.538312 109.4375 67.814416 109.4375 56.1875 C 109.4375 27.957888 86.417111 4.90625 58.1875 4.90625 z M 58.1875 18.875 C 78.850949 18.875 95.4375 35.52405 95.4375 56.1875 C 95.4375 76.850949 78.850949 93.4375 58.1875 93.4375 C 37.524051 93.4375 20.9375 76.850949 20.9375 56.1875 C 20.9375 35.52405 37.524051 18.875 58.1875 18.875 z M 33.125 31.09375 L 33.125 36.40625 L 33.125 75.90625 L 33.125 81.21875 L 38.4375 81.21875 L 77.9375 81.21875 L 83.25 81.21875 L 83.25 75.90625 L 83.25 36.40625 L 83.25 31.09375 L 77.9375 31.09375 L 38.4375 31.09375 L 33.125 31.09375 z M 43.78125 41.75 L 72.59375 41.75 L 72.59375 70.5625 L 43.78125 70.5625 L 43.78125 41.75 z "/>
</svg>`;
}, e.icon.expand_all = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 32 32">
        <path fill="${n}" d="M13.816 5.989l-7.785 0.046 0.003 7.735 2.59-2.591 3.454 3.454 2.665-2.665-3.453-3.454 2.526-2.525zM12.079 17.35l-3.454 3.455-2.59-2.592-0.003 7.799 7.785-0.018-2.526-2.525 3.454-3.453-2.666-2.666zM19.922 14.633l3.453-3.454 2.59 2.591 0.004-7.735-7.785-0.046 2.526 2.525-3.454 3.454 2.666 2.665zM23.375 20.805l-3.453-3.455-2.666 2.666 3.454 3.453-2.526 2.525 7.785 0.018-0.004-7.799-2.59 2.592z"></path>
</svg>`;
}, e.icon.full_screen = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}"  viewBox="0 0 48 48">
<rect width="48" height="48" fill="${n}" fill-opacity="0.01"/>
<path fill="none" d="M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16" stroke="${n}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="24" y="24" width="20" height="16" rx="2" fill="none" stroke="${n}" stroke-width="4" stroke-linejoin="round"/>
</svg>`;
}, e.icon.zoom_in = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 32 32" >
                <g sketch:type="MSLayerGroup" transform="translate(-362.000000, -1037.000000)" fill="${n}">
                    <path d="M390,1049 L382,1049 L382,1041 C382,1038.79 380.209,1037 378,1037 C375.791,1037 374,1038.79 374,1041 L374,1049 L366,1049 C363.791,1049 362,1050.79 362,1053 C362,1055.21 363.791,1057 366,1057 L374,1057 L374,1065 C374,1067.21 375.791,1069 378,1069 C380.209,1069 382,1067.21 382,1065 L382,1057 L390,1057 C392.209,1057 394,1055.21 394,1053 C394,1050.79 392.209,1049 390,1049" id="plus" sketch:type="MSShapeGroup"></path>
                </g>
            </svg>`;
}, e.icon.zoom_out = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 -12 32 32" >
            <g id="Icon-Set-Filled" sketch:type="MSLayerGroup" transform="translate(-414.000000, -1049.000000)" fill="${n}">
                <path d="M442,1049 L418,1049 C415.791,1049 414,1050.79 414,1053 C414,1055.21 415.791,1057 418,1057 L442,1057 C444.209,1057 446,1055.21 446,1053 C446,1050.79 444.209,1049 442,1049" id="minus" sketch:type="MSShapeGroup"></path>
            </g>
        </svg>`;
}, e.icon.layout_normal = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg  width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 110 100">
            <rect fill="${n}" x="35" y="0" width="50" height="27"></rect>
            <rect fill="${n}" x="7" y="41" width="50" height="27"></rect>
            <rect fill="${n}" x="63" y="41" width="50" height="27"></rect>
            <line stroke="${n}" x1="60" x2="60" y1="27" y2="35" stroke-width="1"></line>
            <line stroke="${n}" x1="32" x2="88" y1="35" y2="35" stroke-width="1"></line>
            <line stroke="${n}" x1="32" x2="32" y1="35" y2="41" stroke-width="1"></line>
            <line stroke="${n}" x1="88" x2="88" y1="35" y2="41" stroke-width="1"></line>
        </svg>`;
}, e.icon.layout_right_offset = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg  width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 110 100">
            <rect fill="${n}" x="35" y="0" width="50" height="27"></rect>
            <rect fill="${n}" x="40" y="41" width="50" height="27"></rect>
            <rect fill="${n}" x="40" y="73" width="50" height="27"></rect>
            <line stroke="${n}" x1="60" x2="60" y1="27" y2="35" stroke-width="1"></line>
            <line stroke="${n}" x1="60" x2="35" y1="35" y2="35" stroke-width="1"></line>
            <line stroke="${n}" x1="35" x2="35" y1="35" y2="86" stroke-width="1"></line>
            <line stroke="${n}" x1="35" x2="40" y1="86" y2="86" stroke-width="1"></line>
            <line stroke="${n}" x1="35" x2="40" y1="54" y2="54" stroke-width="1"></line>
        </svg>`;
}, e.icon.layout_left_offset = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 110 100">
            <rect fill="${n}" x="35" y="0" width="50" height="27"></rect>
            <rect fill="${n}" x="30" y="41" width="50" height="27"></rect>
            <rect fill="${n}" x="30" y="73" width="50" height="27"></rect>
            <line stroke="${n}" x1="60" x2="60" y1="27" y2="35" stroke-width="1"></line>
            <line stroke="${n}" x1="60" x2="85" y1="35" y2="35" stroke-width="1"></line>
            <line stroke="${n}" x1="85" x2="85" y1="35" y2="86" stroke-width="1"></line>
            <line stroke="${n}" x1="80" x2="85" y1="86" y2="86" stroke-width="1"></line>
            <line stroke="${n}" x1="80" x2="85" y1="54" y2="54" stroke-width="1"></line>
            </svg>`;
}, e.icon.layout_mixed = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 110 100">
        <rect fill="${n}" x="35" y="0" width="50" height="27"></rect>
        <rect fill="${n}" x="35" y="41" width="50" height="27"></rect>
        <rect fill="${n}" x="35" y="73" width="50" height="27"></rect>
        <line stroke="${n}" x1="60" x2="60" y1="27" y2="41" stroke-width="1"></line>
        <line stroke="${n}" x1="60" x2="60" y1="68" y2="73" stroke-width="1"></line>
    </svg>`;
}, e.icon.layout_tree = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 110 100">
                <rect fill="${n}" x="35" y="0" width="50" height="27"></rect>
                <rect fill="${n}" x="7" y="41" width="50" height="27"></rect>
                <rect fill="${n}" x="35" y="73" width="50" height="27"></rect>
                <rect fill="${n}" x="63" y="41" width="50" height="27"></rect>
                <line stroke="${n}" x1="60" x2="60" y1="27" y2="73" stroke-width="1"></line>
                <line stroke="${n}" x1="57" x2="63" y1="54" y2="54" stroke-width="1"></line>
        </svg>`;
}, e.icon.layout_grid = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 110 100">
                <rect fill="${n}" x="35" y="0" width="50" height="27"></rect>
                <rect fill="${n}" x="7" y="41" width="50" height="27"></rect>
                <rect fill="${n}" x="7" y="73" width="50" height="27"></rect>
                <rect fill="${n}" x="63" y="41" width="50" height="27"></rect>
                <rect fill="${n}" x="63" y="73" width="50" height="27"></rect>
                <line stroke="${n}" x1="60" x2="60" y1="27" y2="71" stroke-width="1"></line>
                <line stroke="${n}" x1="32" x2="88" y1="39" y2="39" stroke-width="1"></line>
                <line stroke="${n}" x1="32" x2="88" y1="71" y2="71" stroke-width="1"></line>
                <line stroke="${n}" x1="32" x2="32" y1="71" y2="73" stroke-width="1"></line>
                <line stroke="${n}" x1="88" x2="88" y1="71" y2="73" stroke-width="1"></line>
                <line stroke="${n}" x1="32" x2="32" y1="39" y2="41" stroke-width="1"></line>
                <line stroke="${n}" x1="88" x2="88" y1="39" y2="41" stroke-width="1"></line>
        </svg>`;
}, e.icon.layout_grid = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 110 100">
                <rect fill="${n}" x="35" y="0" width="50" height="27"></rect>
                <rect fill="${n}" x="7" y="41" width="50" height="27"></rect>
                <rect fill="${n}" x="7" y="73" width="50" height="27"></rect>
                <rect fill="${n}" x="63" y="41" width="50" height="27"></rect>
                <rect fill="${n}" x="63" y="73" width="50" height="27"></rect>
                <line stroke="${n}" x1="60" x2="60" y1="27" y2="71" stroke-width="1"></line>
                <line stroke="${n}" x1="32" x2="88" y1="39" y2="39" stroke-width="1"></line>
                <line stroke="${n}" x1="32" x2="88" y1="71" y2="71" stroke-width="1"></line>
                <line stroke="${n}" x1="32" x2="32" y1="71" y2="73" stroke-width="1"></line>
                <line stroke="${n}" x1="88" x2="88" y1="71" y2="73" stroke-width="1"></line>
                <line stroke="${n}" x1="32" x2="32" y1="39" y2="41" stroke-width="1"></line>
                <line stroke="${n}" x1="88" x2="88" y1="39" y2="41" stroke-width="1"></line>
        </svg>`;
}, e.icon.cursor = function(e, t, n, r, i) {
	return r ??= 0, i ??= 0, `<svg width="${e}" height="${t}" x="${r}" y="${i}" viewBox="0 0 16 16" >
                <path d="M8 3V0H6V3H8Z" fill="${n}"/>
                <path d="M0.792893 2.20711L3.29289 4.70711L4.70711 3.29289L2.20711 0.792893L0.792893 2.20711Z" fill="${n}"/>
                <path d="M6 5L5 6.00001L8 15H10L10.7172 12.1314L14.2929 15.7071L15.7071 14.2929L12.1314 10.7172L15 10V8L6 5Z" fill="${n}"/>
                <path d="M0 6H3V8H0V6Z" fill="${n}"/>
        </svg>`;
}, e.prototype.exportPDFProfile = function(e, t) {
	console.warn("exportPDFProfile is obsolete; use exportToPDFProfile instead.");
}, e.prototype.exportPDFPreview = function(e, t) {
	console.warn("exportPDFPreview is obsolete; use exportToPDFProfile instead.");
}, e.prototype.exportPNGProfile = function(e, t) {
	console.warn("exportPNGProfile is obsolete; use exportToPDFProfile instead.");
}, e.prototype.exportPDF = function(e, t) {
	console.warn("exportPDF is obsolete; use exportToPDF instead.");
}, e.prototype.exportPNG = function(e, t) {
	console.warn("exportPNG is obsolete; use exportToPNG instead.");
}, e.prototype.exportSVG = function(e, t) {
	console.warn("exportSVG is obsolete; use exportToSVG instead.");
}, e.prototype.exportVisio = function(e, t) {
	console.warn("exportVisio is obsolete; use exportToVisio instead.");
}, e.exportPDFFromCharts = function(e, t, n, r) {
	console.warn("The \"exportPDFFromCharts\" is depricated. Use \"chart1.exportToPDF\" with pages instead.");
}, e.prototype.shareProfile = function(e) {
	var t;
	typeof e == "object" ? (t = e, e = t.focusId) : t = this.editUI.content(e, !0, !0, "100%", !0);
	var n = new URL(window.location.href);
	n.searchParams.append("nodeId", e);
	var r = {
		title: t.title,
		text: t.shareText,
		url: n.href
	};
	try {
		navigator.share(r);
	} catch (e) {
		console.error("error: " + e);
	}
}, e.prototype.exportToCSV = e.prototype.exportCSV = function(t) {
	var n = e._defaultExportProfileOptionsForCSV_SVG_JSON(t, "csv"), r = this.getNode(n.nodeId), i = null;
	r ? (i = [], e._exportIterateForJSON_XML_CSV(this, r, n, i)) : n.min === !1 || n.expandChildren === !1 ? e._exportIterateForJSON_XML_CSV(this, this.roots, n, i) : i = JSON.parse(JSON.stringify(this.config.nodes));
	var a = {
		ext: "csv",
		filename: t,
		options: n,
		nodes: i
	}, o = e.events.publish("exportstart", [this, a]);
	if (o === !1) return !1;
	var s = e._json2csv(a.nodes), c = {
		ext: a.ext,
		filename: a.filename,
		options: n,
		nodes: a.nodes,
		content: s
	}, o = e.events.publish("exportend", [this, c]);
	if (o === !1) return !1;
	e._downloadFile("text/csv;charset=utf-8;", "﻿" + c.content, c.options.filename, c.options.openInNewTab, c.ext);
}, e.prototype.exportToXML = e.prototype.exportXML = function(t) {
	var n = e._defaultExportProfileOptionsForCSV_SVG_JSON(t, "xml"), r = this.getNode(n.nodeId), i = null;
	r ? (i = [], e._exportIterateForJSON_XML_CSV(this, r, n, i)) : n.min === !1 || n.expandChildren === !1 ? e._exportIterateForJSON_XML_CSV(this, this.roots, n, i) : i = JSON.parse(JSON.stringify(this.config.nodes));
	var a = {
		ext: "xml",
		filename: t,
		options: n,
		nodes: i
	}, o = e.events.publish("exportstart", [this, a]);
	if (o === !1) return !1;
	var s = e._json2xml(a.nodes), c = {
		ext: a.ext,
		filename: a.filename,
		options: n,
		nodes: a.nodes,
		content: s
	}, o = e.events.publish("exportend", [this, c]);
	if (o === !1) return !1;
	e._downloadFile("application/xml", c.content, c.options.filename, c.options.openInNewTab, c.ext);
}, e.prototype.exportToJSON = e.prototype.exportJSON = function(t) {
	var n = e._defaultExportProfileOptionsForCSV_SVG_JSON(t, "json"), r = this.getNode(n.nodeId), i = null;
	r ? (i = [], e._exportIterateForJSON_XML_CSV(this, r, n, i)) : n.min === !1 || n.expandChildren === !1 ? e._exportIterateForJSON_XML_CSV(this, this.roots, n, i) : i = JSON.parse(JSON.stringify(this.config.nodes));
	var a = {
		ext: "json",
		filename: n.filename,
		options: n,
		nodes: i
	}, o = e.events.publish("exportstart", [this, a]);
	if (o === !1) return !1;
	var s = {
		ext: a.ext,
		filename: a.filename,
		options: n,
		nodes: a.nodes,
		content: JSON.stringify(a.nodes)
	}, o = e.events.publish("exportend", [this, s]);
	if (o === !1) return !1;
	e._downloadFile("application/json", s.content, s.options.filename, s.options.openInNewTab, s.ext);
}, e._exportIterateForJSON_XML_CSV = function(t, n, r, i) {
	if (Array.isArray(n)) {
		for (var a = 0; a < n.length; a++) e._exportIterateForJSON_XML_CSV(t, n[a], r, i);
		return;
	}
	var o = t.get(n.id);
	if (i.push(o), r.min) for (var a = 0; a < n.stChildrenIds.length; a++) e._exportIterateForJSON_XML_CSV(t, t.getNode(n.stChildrenIds[a]), r, i);
	else for (var a = 0; a < n.stChildren.length; a++) e._exportIterateForJSON_XML_CSV(t, n.stChildren[a], r, i);
	if (r.expandChildren) for (var a = 0; a < n.childrenIds.length; a++) e._exportIterateForJSON_XML_CSV(t, t.getNode(n.childrenIds[a]), r, i);
	else for (var a = 0; a < n.children.length; a++) e._exportIterateForJSON_XML_CSV(t, n.children[a], r, i);
}, e._defaultExportProfileOptionsForCSV_SVG_JSON = function(t, n) {
	return e.isNEU(t) && (t = {}), typeof t == "string" && (t = { filename: t }), e.isNEU(t.filename) && (t.filename = `OrgChart.${n}`), e.isNEU(t.expandChildren) && (t.expandChildren = !0), e.isNEU(t.min) && (t.min = !0), e.isNEU(t.openInNewTab) && (t.openInNewTab = !1), t;
}, e.prototype.exportToPDFProfile = function(e, t) {
	chart.exportToPDF({
		format: "A4",
		pages: [{
			nodeId: e,
			isProfile: !0
		}]
	}, t);
}, e.prototype.exportToVisio = function(t, n) {
	var r = this;
	t = e._setDefaultOptions(t, "vstx"), this._createExportPages("vstx", t, function(i) {
		for (var a = 0; a < t.pages.length; a++) e.loading.show(t.pages[a].chartInstance);
		r._requestToExportVisio(i, t, function(i) {
			var a = !0;
			if (n && (a = n(i)), a !== !1) {
				var a = e.events.publish("exportend", [r, i]);
				if (a === !1) return e._exportHideAnimation(t), !1;
				e._downloadFile("application/vnd.visio", i, t.fileName, t.openInNewTab, "vsdx");
			}
			e._exportHideAnimation(t);
		});
	});
}, e.prototype.exportToPDF = function(t, n) {
	var r = this;
	t = e._setDefaultOptions(t, "pdf"), this._createExportPages("pdf", t, function(i) {
		for (var a = 0; a < t.pages.length; a++) e.loading.show(t.pages[a].chartInstance);
		r._requestToExportPDF(i, t, function(i) {
			var a = !0;
			if (n && (a = n(i)), a !== !1) {
				var a = e.events.publish("exportend", [r, i]);
				if (a === !1) return e._exportHideAnimation(t), !1;
				e._downloadFile("application/pdf", i, t.fileName, t.openInNewTab, "pdf");
			}
			e._exportHideAnimation(t);
		});
	});
}, e.prototype.exportToPNG = function(t, n) {
	var r = this;
	t = e._setDefaultOptions(t, "png"), this._createExportPages("png", t, function(i) {
		for (var a = 0; a < t.pages.length; a++) e.loading.show(t.pages[a].chartInstance);
		r._requestToExportPNG(i, t, function(i) {
			var a = !0;
			if (n && (a = n(i)), a !== !1) {
				var a = e.events.publish("exportend", [r, i]);
				if (a === !1) return e._exportHideAnimation(t), !1;
				t.pages.length == 1 ? e._downloadFile("image/png", i, t.fileName, t.openInNewTab, "png") : e._downloadFile("application/zip", i, t.fileName.replaceAll(".png", ".zip"), !1, "zip");
			}
			e._exportHideAnimation(t);
		});
	});
}, e.prototype.exportToSVG = function(t, n) {
	var r = this;
	t = e._setDefaultOptions(t, "svg"), this._createExportPages("svg", t, function(i) {
		for (var a = 0; a < t.pages.length; a++) e.loading.show(t.pages[a].chartInstance);
		r._requestToExportSVG(i, t, function(i) {
			var a = !0;
			if (n && (a = n(i)), a !== !1) {
				var a = e.events.publish("exportend", [r, i]);
				if (a === !1) return e._exportHideAnimation(t), !1;
				t.pages.length == 1 ? e._downloadFile("image/svg+xml", i, t.fileName, t.openInNewTab, "svg") : e._downloadFile("application/zip", i, t.fileName.replaceAll(".svg", ".zip"), !1, "zip");
			}
			e._exportHideAnimation(t);
		});
	});
}, e.prototype.exportToPowerPoint = function(t, n) {
	var r = this;
	t = e._setDefaultOptions(t, "pptx"), this._createExportPages("pptx", t, function(i) {
		for (var a = 0; a < t.pages.length; a++) e.loading.show(t.pages[a].chartInstance);
		r._requestToExportPowerPoint(i, t, function(i) {
			var a = !0;
			if (n && (a = n(i)), a !== !1) {
				var a = e.events.publish("exportend", [r, i]);
				if (a === !1) return e._exportHideAnimation(t), !1;
				e._downloadFile("application/msword", i, t.fileName, t.openInNewTab, "pptx");
			}
			e._exportHideAnimation(t);
		});
	});
}, e._exportHideAnimation = function(t) {
	for (var n = 0; n < t.pages.length; n++) e.loading.hide(t.pages[n].chartInstance);
}, e._setDefaultOptions = function(t, n, r) {
	return t ||= {}, t.type = n, t.landscape ?? (n == "pdf" ? t.landscape = !1 : n == "pptx" && (t.landscape = !0)), t.header ??= "", t.expandChildren ??= !1, t.childLevels ??= null, t.parentLevels ??= null, t.min ??= !0, t.format ?? (n == "pdf" && !r ? t.format = "auto" : n == "pdf" && r ? t.format = "A4" : n == "pptx" && (t.format = "Widescreen")), t.footer ?? (n == "pdf" ? t.format == "auto" ? t.footer = "" : t.footer = "<text style=\"fill: #aeaeae\" x=\"0\" y=\"15\">Page {current-page} of {total-pages}</text>" : n == "png" || n == "svg" ? t.footer = "" : n == "pptx" ? t.footer = "<text style=\"fill: #aeaeae\" x=\"0\" y=\"15\">Slide {current-page} of {total-pages}</text>" : n == "vstx" && (t.footer = "")), t.fileName ??= "OrgChart." + n, t.openInNewTab ??= !1, t.width == null && t.height == null && (n == "png" || n == "svg" || n == "vstx" || n == "pdf" && t.format == "auto" ? (t.width = "auto", t.height = "auto") : (e.Screen = {
		width: screen.height / 2,
		height: screen.width / 2
	}, t.landscape ? (t.width = e[t.format].height, t.height = e[t.format].width) : (t.width = e[t.format].width, t.height = e[t.format].height))), t.margin ??= [
		30,
		20,
		30,
		20
	], t.padding ??= 0, t.pages ||= [{}], t;
}, e.prototype._requestToExportPDF = function(t, n, r) {
	e.__requestExport(this.config.serverUrl + "/Export/PDF", n.fileName, t, r);
}, e.prototype._requestToExportPNG = function(t, n, r) {
	e.__requestExport(this.config.serverUrl + "/Export/PNG", n.fileName, t, r);
}, e.prototype._requestToExportVisio = function(t, n, r) {
	e.__requestExport(this.config.serverUrl + "/Export/VSTX", n.fileName, t, r);
}, e.prototype._requestToExportSVG = function(t, n, r) {
	e.__requestExport(this.config.serverUrl + "/Export/SVG", n.fileName, t, r);
}, e.prototype._requestToExportPowerPoint = function(t, n, r) {
	e.__requestExport(this.config.serverUrl + "/Export/PowerPoint", n.fileName, t, r);
}, e.__requestExport = function(t, n, r, i) {
	var a = {
		filename: n,
		pages: r
	};
	e._ajax(t, "POST", JSON.stringify(a), "arraybuffer", function(e) {
		i(e);
	});
}, e.prototype._createExportPages = function(e, t, n) {
	var r = [];
	if (t.pages.length) for (var i = 0; i < t.pages.length; i++) this.__createExportPages(e, i, r, t, n);
	else n(r);
}, e.prototype.__createExportPages = function(t, n, r, i, a) {
	var o = this, s = i.pages[n];
	if (s.chartInstance ||= this, s.expandChildren === void 0 && (s.expandChildren = i.expandChildren), s.childLevels === void 0 && (s.childLevels = i.childLevels), s.parentLevels === void 0 && (s.parentLevels = i.parentLevels), s.min === void 0 && (s.min = i.min), s.header === void 0 && (s.header = i.header), s.footer === void 0 && (s.footer = i.footer), s.childLevels != null && (s.expandChildren = !1), s.padding === void 0 && (s.padding = i.padding), s.margin === void 0 && (s.margin = i.margin), s.content != null || s.isProfile === !0) {
		s.isProfile && (s.content = this._createProfileSvg(i, s));
		var c = o._createMasterSvg(t, s.content, n, i, s.content != null);
		if (r.push(c), o.___createExportPages(t, n, r, i, a)) return;
	} else {
		var l = {
			id: s.nodeId,
			expandChildren: s.expandChildren,
			parentLevels: s.parentLevels,
			childLevels: s.childLevels,
			min: s.min
		};
		i.pages[n].chartInstance._draw(!1, e.action.exporting, l, function(e, s) {
			var c = o._createMasterSvg(t, e, n, i, !1);
			r.push(c), o.___createExportPages(t, n, r, i, a);
		});
	}
}, e.prototype._createMasterSvg = function(t, n, r, i, a) {
	var o = !1;
	n == "" && (o = !0, n = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"  style=\"display:block;\" width=\"100\" height=\"100\" viewBox=\"0,0,0,0\"><svg>");
	var s = i.pages[r], c = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	c.setAttribute("xmlns", "http://www.w3.org/2000/svg"), c.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), document.body.appendChild(c);
	var l = e._getSvgAttributes(n);
	o ? i.width == "auto" ? s.width = 1e3 : s.width = i.width : i.width == "auto" ? s.width = l.width + s.margin[3] + s.margin[1] : s.width = i.width;
	var u = document.createElementNS("http://www.w3.org/2000/svg", "g");
	u.innerHTML = `${s.header.replaceAll("{current-page}", r + 1).replaceAll("{total-pages}", i.pages.length)}`, c.appendChild(u), e._setYAttrToTextElements(s, i, u);
	var d = u.getBoundingClientRect();
	d.height && (d.height += 10), u.setAttribute("transform", `matrix(1,0,0,1,${s.margin[3]},${s.margin[0]})`);
	var f = document.createElementNS("http://www.w3.org/2000/svg", "g");
	f.innerHTML = `${s.footer.replaceAll("{current-page}", r + 1).replaceAll("{total-pages}", i.pages.length)}`, c.appendChild(f), e._setYAttrToTextElements(s, i, f);
	var p = f.getBoundingClientRect();
	if (o ? i.height == "auto" ? s.height = 1e3 : s.height = i.height : i.height == "auto" ? s.height = l.height + s.margin[0] + s.margin[2] + d.height + p.height : s.height = i.height, f.setAttribute("transform", `matrix(1,0,0,1,${s.margin[3]},${s.height - s.margin[2] - p.height})`), c.classList.add("boc-" + this.config.mode), document.body.removeChild(c), !s.isProfile) {
		var m = (s.width - s.margin[3] - s.margin[1]) / l.width, h = (s.height - s.margin[0] - s.margin[2] - d.height - p.height) / l.height, g = Math.min(m, h, 1);
		l.width *= g, l.height *= g, l.viewBox[0] -= s.padding, l.viewBox[1] -= s.padding, l.viewBox[2] += s.padding * 2, l.viewBox[3] += s.padding * 2, l.x = (s.width - l.width) / 2, l.y = s.margin[0] + d.height + (s.height - s.margin[0] - d.height - s.margin[2] - p.height - l.height) / 2;
	}
	var _ = a ? e._isSVG(n) ? n : `<foreignObject x="0" y="0" width="100%" height="100%">${n}</foreignObject>` : e._setSvgAttributes(n, l), v = s.width, y = s.height;
	return t == "pdf" && !s.isProfile && (v += 2, y += 2), c.setAttribute("width", v), c.setAttribute("height", y), c.innerHTML = _ + c.innerHTML, c;
}, e.prototype._createProfileSvg = function(t, n) {
	var r = this.editUI.content(n.nodeId, !0, !0, "100%", !0).element;
	return e.input.init(r), `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:block;" width="${t.width}" height="${t.height}" viewBox="0,0,${t.width},${t.height}">        
        <style>
            form.boc-edit-form, div.boc-edit-form-header {
                border-radius: 0;
            }
            
        </style>
        <foreignobject class="node" x="0" y="0" width="${t.width}" height="${t.height}">${r.outerHTML}</foreignobject>
    </svg>`;
}, e.prototype.___createExportPages = function(t, n, r, i, a) {
	if (n >= i.pages.length - 1) {
		var o = {
			pages: r,
			options: i,
			styles: ""
		};
		if (e.events.publish("exportstart", [this, o]) === !1) return !1;
		var s = this.mainElement.querySelector("[data-boc-styles]");
		if (s && (o.styles += s.outerHTML), o.styles) for (var c = 0; c < o.pages.length; c++) {
			var l = o.pages[c];
			l.insertAdjacentHTML("afterbegin", o.styles), o.pages[c] = l.outerHTML;
		}
		return e.CONVERT_IMAGES_TO_BASE64_BEFORE_EXPORT ? e._convertImagesToBase64(o.pages).then(function(e) {
			o.pages = e, a(o.pages);
		}) : a(o.pages), !0;
	}
	return !1;
}, e._setYAttrToTextElements = function(e, t, n) {
	for (var r = n.querySelectorAll("text"), i = 0; i < r.length; i++) {
		var a = r[i];
		if (!a.hasAttribute("y")) {
			var o = a.getBoundingClientRect();
			a.setAttribute("y", o.height);
		}
		if (a.hasAttribute("text-anchor") && !a.hasAttribute("x")) {
			var s = a.getAttribute("text-anchor").toLowerCase(), c = e.width - e.margin[1] - e.margin[3];
			s == "end" ? a.setAttribute("x", c) : s == "middle" && a.setAttribute("x", c / 2);
		}
	}
}, e.exportUI = function(e) {
	this.instance = null, this.interval = null, this.element = null, this.options = null, this.selectedIndex = 0, this.type = e, this.locExport = "Export", this.locLandscape = "Landscape", this.locPortrait = "Portrait", this.locCancel = "Close", this.locParentLevels = "parent levels", this.locChildLevels = "child levels", this.locClickToAdd = "Click on a node to display it here", this.locPrintTree = "Print tree", this.locPrintProfile = "Print profile", e == "pdf" ? (this.locAddNew = "Add new page", this.locRemove = "Remove page") : e == "png" ? (this.locAddNew = "Add new PNG", this.locRemove = "Remove PNG") : e == "svg" ? (this.locAddNew = "Add new SVG", this.locRemove = "Remove SVG") : e == "pptx" && (this.locAddNew = "Add new slide", this.locRemove = "Remove slide"), this.buttons = {
		parentLevels: !1,
		childLevels: !0,
		printProfileOrTree: !0,
		removePage: !0,
		addNewPage: !0,
		landscapePortrait: !0
	}, Object.defineProperty(this, "width", { get() {
		return this.isVisible() ? this.element.offsetWidth : 0;
	} }), Object.defineProperty(this, "selectedPage", { get() {
		var e = this.instance.leftElement.querySelector(".boc-export-selected");
		if (e) {
			var t = e.getAttribute("data-boc-export-page");
			return t = parseInt(t), this.options.pages[t];
		}
		return null;
	} });
}, e.exportUI.prototype.init = function(e) {
	this.instance = e;
}, e.exportUI.prototype.show = function(t) {
	this.selectedIndex = 0, this.instance.pdfPreviewUI.hide(), this.instance.svgPreviewUI.hide(), this.instance.pngPreviewUI.hide(), this.instance.powerPointPreviewUI.hide(), this.instance.aiUI.hide(), this.instance.orgScribeUI.hide(), this.options = e._setDefaultOptions(t, this.type, !0);
	var n = this;
	this.instance._createExportPages(this.type, this.options, function(e) {
		n._init(e);
	});
}, e.exportUI.prototype.isVisible = function() {
	return this.element != null;
}, e.exportUI.prototype.hide = function() {
	this.instance.leftElement.style.display = "none", this.element &&= (this.element.parentNode.removeChild(this.element), null);
}, e.exportUI.prototype.refresh = function() {
	var e = this;
	this.instance._createExportPages(this.type, this.options, function(t) {
		e._draw(t);
	});
}, e.exportUI.prototype._init = function(t) {
	var n = this;
	this.element = document.createElement("div"), this.element.setAttribute("data-boc-export-form", ""), this.element.style.opacity = 0, this.element.classList.add("boc-export-form"), this.element.classList.add(this.instance.config.mode), this.element.style.display = "";
	var r = "";
	this.type == "pdf" && this.options.format != "auto" && (r = `<button ${this.buttons.landscapePortrait ? "" : "style=\"display: none;\""} data-boc-export-landcapeportrait>${this.options.landscape ? this.locPortrait : this.locLandscape}</button> `), this.element.innerHTML = `<div class="boc-export-container">                                
                                <div class="boc-export-btns">       
                                
                                    <div class="boc-export-btns-inner">   
                                        <div class="boc-export-left">                               
                                            <button data-boc-export-cancel>${this.locCancel}</button>   
                                            ${r}                                                                    
                                            <button ${this.buttons.addNewPage ? "" : "style=\"display: none;\""} data-boc-export-btnnewpage>${this.locAddNew}</button>     
                                        </div>                                    
                                        <div class="boc-export-right">             
                                            <button class="boc-export-btn" data-boc-export-export>${this.locExport}</button>                          
                                        </div>                                    
                                        </div>                                    
                                </div>
                                <div class="boc-export-middle">
                                    <div class="boc-export-middle-inner" data-boc-export-pages>
                                    </div>
                                </div>
                            </div>`, this.instance.leftElement.appendChild(this.element), this.instance.leftElement.style.display = "block", this.instance.leftElement.querySelector("[data-boc-export-btnnewpage]").addEventListener("click", function(e) {
		n.addPage({ content: "" });
	});
	var i = this.instance.leftElement.querySelector("[data-boc-export-landcapeportrait]");
	i && i.addEventListener("click", function(e) {
		n.toggleLanscape();
	}), this.instance.leftElement.querySelector("[data-boc-export-pages]").addEventListener("click", function(e) {
		for (var t = e.target; t && t.hasAttribute && !t.hasAttribute("data-boc-export-page");) t = t.parentNode;
		var r;
		t && t.hasAttribute && t.hasAttribute("data-boc-export-page") && (r = t.getAttribute("data-boc-export-page")), e.target.hasAttribute && (e.target.hasAttribute("data-export-remove") ? n.removePage(r) : e.target.hasAttribute("data-export-child-plus") ? n._incrementDecrementChildLevel(r, !0) : e.target.hasAttribute("data-export-child-minus") ? n._incrementDecrementChildLevel(r, !1) : e.target.hasAttribute("data-export-parent-plus") ? n._incrementDecrementParentLevel(r, !0) : e.target.hasAttribute("data-export-parent-minus") ? n._incrementDecrementParentLevel(r, !1) : e.target.hasAttribute("data-export-profiletree") ? n.toggelePrintTreeOrProfile(r, !1) : n.selectPage(r));
	});
	var a = this.instance.leftElement.querySelector("[data-boc-export-cancel]");
	a && a.addEventListener("click", function(e) {
		n.hide();
	});
	var o = this.instance.leftElement.querySelector("[data-boc-export-export]");
	o && o.addEventListener("click", function(e) {
		n.instance.powerPointPreviewUI.isVisible() ? n.instance.exportToPowerPoint(n.options) : n.instance.pdfPreviewUI.isVisible() ? n.instance.exportToPDF(n.options) : n.instance.pngPreviewUI.isVisible() ? n.instance.exportToPNG(n.options) : n.instance.svgPreviewUI.isVisible() && n.instance.exportToSVG(n.options);
	}), this.interval &&= (clearTimeout(this.interval), null), this.interval = e.animate(this.element, { opacity: 0 }, { opacity: 1 }, 300, e.anim.outSin, function() {
		n._draw(t);
	});
}, e.exportUI.prototype._draw = function(t) {
	var n = this.instance.leftElement.querySelector("[data-boc-export-pages]");
	n.innerHTML = "";
	for (var r = 0; r < t.length; r++) {
		var i = t[r], a = this.options.pages[r].width / this.options.pages[r].height, o = e._getSvgAttributes(i);
		o.viewBox[0] = 0, o.viewBox[1] = 0, o.viewBox[2] = o.width, o.viewBox[3] = o.height, o.width = "100%", o.height = "100%";
		var s = e._setSvgAttributes(i, o), c = e._getSvgAttributes;
		this.options.pages[r].content == "" && (c = " boc-export-empty");
		var l = `<div ${this.buttons.removePage ? "" : "style=\"display: none;\""} class="boc-export-remove-buttons">                    
                        <button data-export-remove="${r}">${this.locRemove}</button>                    
                    </div>`;
		this.type == "pdf" && this.options.format != "auto" && !e.isNEU(this.options.pages[r].nodeId) && (!this.options.pages[r].content || this.options.pages[r].isProfile && this.options.pages[r].content) && (l += `<div ${this.buttons.printProfileOrTree ? "" : "style=\"display: none;\""} class="boc-export-profiletree-buttons">                    
                        <button data-export-profiletree="${r}">${this.options.pages[r].isProfile ? this.locPrintTree : this.locPrintProfile}</button>                    
                    </div>`), !this.options.pages[r].isProfile && !e.isNEU(this.options.pages[r].nodeId) && (l = `<div ${this.buttons.parentLevels ? "" : "style=\"display: none;\""} class="boc-export-parent-buttons">                    
                                                <button data-export-parent-minus="${r}">-</button> 
                                                <button data-export-parent-plus="${r}">+</button> ${this.options.pages[r].parentLevels == null ? "all" : this.options.pages[r].parentLevels} ${this.locParentLevels}
                                            </div>                                                    
                                            <div ${this.buttons.childLevels ? "" : "style=\"display: none;\""} class="boc-export-child-buttons">                    
                                                <button data-export-child-minus="${r}">-</button>                                                                                              
                                                <button data-export-child-plus="${r}">+</button> ${this.options.pages[r].childLevels == null ? "all" : this.options.pages[r].childLevels} ${this.locChildLevels}
                                            </div>` + l), n.innerHTML += `<div data-boc-export-page="${r}" style="aspect-ratio: ${a};" class="boc-export-page ${c}">
                                            ${s}
                                            ${l}                                                                                                                     
                                        </div>`;
	}
	this.selectPage(this.selectedIndex);
}, e.exportUI.prototype.toggleLanscape = function() {
	var t = this;
	this.options.landscape = !this.options.landscape, this.options.width = void 0, this.options.height = void 0, this.options = e._setDefaultOptions(this.options, this.type, !0);
	var n = this.instance.leftElement.querySelector("[data-boc-export-landcapeportrait]");
	n.innerHTML = this.options.landscape ? this.locPortrait : this.locLandscape, this.instance._createExportPages(this.type, this.options, function(e) {
		t._draw(e), t.selectPage(t.options.pages.length - 1);
	});
}, e.exportUI.prototype.addPage = function(t) {
	var n = this;
	this.options.pages.push(t), this.instance._createExportPages(this.type, this.options, function(t) {
		n._draw(t), n.selectPage(n.options.pages.length - 1);
		var r = n.element.querySelector(".boc-export-middle");
		e.animate(r, { scrollTop: r.scrollTop }, { scrollTop: r.scrollHeight }, 600, e.anim.outSin);
	});
}, e.exportUI.prototype.removePage = function(e) {
	e = parseInt(e);
	var t = this;
	e <= t.selectedIndex && (t.selectedIndex--, t.selectedIndex < 0 && (t.selectedIndex = 0)), this.options.pages.splice(e, 1), this.instance._createExportPages(this.type, this.options, function(e) {
		t._draw(e), t.selectPage(t.selectedIndex);
	});
}, e.exportUI.prototype._incrementDecrementChildLevel = function(e, t) {
	var n = this;
	e < n.selectedIndex && n.selectedIndex--;
	var r = this.options.pages[e];
	r.childLevels ?? (t ? r.childLevels = 0 : r.childLevels = 2), t ? r.childLevels++ : r.childLevels--, r.childLevels == -1 && (r.childLevels = 0), r.expandChildren = !1, this.instance._createExportPages(this.type, this.options, function(e) {
		n._draw(e), n.selectPage(n.selectedIndex);
	});
}, e.exportUI.prototype.toggelePrintTreeOrProfile = function(e) {
	var t = this, n = this.options.pages[e];
	n.isProfile = !n.isProfile, this.options.pages[e].content = void 0, this.instance._createExportPages(this.type, this.options, function(e) {
		t._draw(e), t.selectPage(t.selectedIndex);
	});
}, e.exportUI.prototype._incrementDecrementParentLevel = function(e, t) {
	var n = this;
	e < n.selectedIndex && n.selectedIndex--;
	var r = this.options.pages[e];
	r.parentLevels == null ? r.parentLevels = 1 : t ? r.parentLevels++ : r.parentLevels--, r.parentLevels == -1 && (r.parentLevels = 0), this.instance._createExportPages(this.type, this.options, function(e) {
		n._draw(e), n.selectPage(n.selectedIndex);
	});
}, e.exportUI.prototype.selectPage = function(e) {
	for (var t = this.instance.leftElement.querySelectorAll("[data-boc-export-page]"), n = 0; n < t.length; n++) t[n].classList.remove("boc-export-selected");
	for (var t = this.instance.leftElement.querySelectorAll(".boc-export-select"), n = 0; n < t.length; n++) t[n].parentNode.removeChild(t[n]);
	var r = this.instance.leftElement.querySelectorAll("[data-boc-export-pages] .boc-export-page");
	if (r.length) {
		var i = r[e];
		i.classList.contains("boc-export-empty") && (i.innerHTML += `<div class="boc-export-select">${this.locClickToAdd}</div>`), i.classList.add("boc-export-selected"), this.selectedIndex = e;
	}
}, e === void 0 && (e = {}), e.events = (function() {
	var t = {};
	return {
		on: function(e, n, r) {
			Array.isArray(t[e]) || (t[e] = []), t[e].push({
				listener: n,
				event_id: r
			});
		},
		removeAll: function(e) {
			Array.isArray(t[e]) || (t[e] = []), t[e] = [];
		},
		remove: function(n, r, i) {
			var a = !1;
			if (t[n] && Array.isArray(t[n]) && t[n].length > 0) for (var o = t[n].length - 1; o >= 0; o--) (!e.isNEU(i) && !e.isNEU(r) && t[n][o].event_id == i && t[n][o].listener == r || !e.isNEU(i) && e.isNEU(r) && t[n][o].event_id == i || e.isNEU(i) && !e.isNEU(r) && t[n][o].listener == r || e.isNEU(i) && e.isNEU(r)) && (t[n].splice(o, 1), a = !0);
			return a;
		},
		has: function(n, r) {
			if (t[n] && Array.isArray(t[n]) && t[n].length > 0) {
				if (e.isNEU(r)) return !0;
				for (var i = 0; i < t[n].length; i++) if (t[n][i].event_id == r) return !0;
			}
			return !1;
		},
		removeForEventId: function(e) {
			for (var n in t) if (Array.isArray(t[n])) for (var r = t[n].length - 1; r >= 0; r--) t[n][r].event_id == e && t[n].splice(r, 1);
		},
		publish: function(e, n) {
			if (t[e]) {
				for (var r = [], i = 0; i < t[e].length; i++) {
					var a = t[e][i];
					(a.event_id == null || a.event_id == n[0]._event_id) && r.push(a.listener);
				}
				if (r.length > 0) {
					for (var o = !0, i = 0; i < r.length && (n.length == 1 ? o = r[i](n[0]) && o : n.length == 2 ? o = r[i](n[0], n[1]) && o : n.length == 3 ? o = r[i](n[0], n[1], n[2]) && o : n.length == 4 ? o = r[i](n[0], n[1], n[2], n[3]) && o : n.length == 5 && (o = r[i](n[0], n[1], n[2], n[3], n[4]) && o), o !== !1); i++);
					return o;
				}
			}
		}
	};
})(), e.prototype.importCSV = function() {
	var t = this, n = document.createElement("INPUT");
	n.setAttribute("type", "file"), n.setAttribute("accept", ".csv"), n.style.display = "none", n.onchange = function(n) {
		var r = n.target, i = new FileReader();
		i.onload = function() {
			var n = i.result, r = e._csvToArray(n), a = [], o = r[0];
			e._importSetColumnNames(o, function(n) {
				for (var i = 1; i < r.length; i++) {
					for (var o = {}, s = 0; s < r[i].length; s++) {
						var c = n[s], l = r[i][s];
						o[c] = e._convertStringToArray(c, l);
					}
					o.id.trim() != "" && a.push(o);
				}
				var u = {
					nodes: a,
					columnNames: r[0]
				};
				e.events.publish("import", [t, u]) != 0 && (t._putInUndoStack(), t.clearRedo(), t.config.nodes = u.nodes, t._ai.setContext(), e.events.publish("updated", [t]), t.filterUI.update(), t.draw());
			});
		}, i.readAsText(r.files[0]);
	}, n.click();
}, e._importSetColumnNames = function(t, n) {
	if (t.indexOf("id") != -1 && t.indexOf("pid") != -1) {
		n(t);
		return;
	}
	var r = document.createElement("DIV"), i = document.createElement("P");
	i.style.padding = "5px", i.style.color = "rgb(122, 122, 122)", i.innerHTML = e.IMPORT_MESSAGE, r.appendChild(i);
	var a = document.createElement("div"), o = document.createElement("div"), s = document.createElement("div"), c = document.createElement("span");
	a.setAttribute("id", "boc-sampleDialog"), a.style.height = "260px", a.style.width = "400px", a.style.background = "white", a.style.border = "0.5px solid grey", a.style.position = "fixed", a.style.overflow = "hidden", a.style.zIndex = "99", o.setAttribute("id", "title"), o.style.backgroundColor = "#e5e5e5", o.style.fontWeight = "bold", o.style.color = "rgb(122, 122, 122)", o.style.height = "20px", o.style.padding = "3px 0 0 7px", c.setAttribute("id", "close"), c.style.cursor = "pointer", c.style.position = "absolute", c.style.color = "rgb(122, 122, 122)", c.style.fontWeight = "bold", c.style.top = "2px", c.style.zIndex = 100, s.setAttribute("id", "content"), s.style.padding = "2px", o.innerHTML = "Import Organizational Chart Data", c.innerHTML = "&times;";
	var l = document.createElement("HR");
	l.style.height = "0.1px", l.style.backgroundColor = "#aeaeae", l.style.border = "none", l.style.margin = "0", a.appendChild(o), a.appendChild(l), s.appendChild(r), a.appendChild(s), a.appendChild(c), document.body.appendChild(a), e._importCenter(a), c.style.left = a.offsetWidth - 20 + "px";
	var u = document.createElement("div");
	u.setAttribute("id", "overlay"), u.style.width = "100%", u.style.height = "100%", u.style.left = 0, u.style.top = 0, u.style.position = "fixed", u.style.background = "grey", u.style.opacity = "0.5", u.style.zIndex = 98, document.body.appendChild(u), a._overlay = u;
	var d = document.createElement("LABEL"), f = document.createTextNode("Name:");
	d.setAttribute("for", "boc-id-select"), d.appendChild(f), d.style.fontSize = "16px", d.style.color = "rgb(122, 122, 122)", d.style.padding = "5px", d.style.margin = "5px", d.style.width = "30%", d.style.textAlign = "right", d.style.display = "inline-block", r.appendChild(d);
	var p = document.createElement("SELECT");
	p.id = "boc-id-select", p.style.fontSize = "16px", p.style.color = "rgb(122, 122, 122)", p.style.padding = "5px", p.style.margin = "5px", p.style.width = "60%", p.style.border = "1px solid #aeaeae", r.appendChild(p);
	var m = document.createElement("BR");
	r.appendChild(m);
	for (var h = 0; h < t.length; h++) {
		var g = document.createElement("option");
		g.setAttribute("value", t[h]);
		var _ = document.createTextNode(t[h]);
		g.appendChild(_), p.appendChild(g);
	}
	var v = document.createElement("LABEL"), y = document.createTextNode("Reports to:");
	v.setAttribute("for", "pid-select"), v.appendChild(y), v.style.fontSize = "16px", v.style.color = "rgb(122, 122, 122)", v.style.padding = "5px", v.style.margin = "5px", v.style.width = "30%", v.style.textAlign = "right", v.style.display = "inline-block", r.appendChild(v);
	var b = document.createElement("SELECT");
	b.id = "pid-select", b.style.fontSize = "16px", b.style.color = "rgb(122, 122, 122)", b.style.padding = "5px", b.style.margin = "5px", b.style.width = "60%", b.style.border = "1px solid #aeaeae", r.appendChild(b);
	for (var h = 0; h < t.length; h++) {
		var g = document.createElement("option");
		g.setAttribute("value", t[h]);
		var _ = document.createTextNode(t[h]);
		g.appendChild(_), b.appendChild(g);
	}
	var x = document.createElement("BUTTON");
	x.innerHTML = "Import", x.style.fontSize = "16px", x.style.color = "rgb(122, 122, 122)", x.style.padding = "5px 20px", x.style.margin = "20px auto", x.style.display = "block", x.onclick = function() {
		a.style.display = "none", a._overlay && a._overlay.parentNode.removeChild(a._overlay);
		var e = p.options[p.selectedIndex].value, r = t.indexOf(e);
		t[r] = "id";
		var i = b.options[b.selectedIndex].value, o = t.indexOf(i);
		t[o] = "pid", n(t);
	};
	var S = document.createElement("DIV");
	return S.appendChild(x), r.appendChild(S), c.onclick = function(e) {
		a._overlay && a._overlay.parentNode.removeChild(a._overlay), a.parentNode.removeChild(a), e.stopPropagation();
	}, o.onmousedown = function(e) {
		e ||= window.event, a._dragging = !0, a._originalLeft = a.offsetLeft, a._originalTop = a.offsetTop, a._mouseLeft = e.clientX, a._mouseTop = e.clientY;
	}, document.onmousemove = function(e) {
		e ||= window.event, a._dragging && (a.style.left = a._originalLeft + e.clientX - a._mouseLeft + "px", a.style.top = a._originalTop + e.clientY - a._mouseTop + "px");
	}, document.onmouseup = function(e) {
		e ||= window.event, a._dragging &&= (a.style.left = a._originalLeft + e.clientX - a._mouseLeft + "px", a.style.top = a._originalTop + e.clientY - a._mouseTop + "px", !1);
	}, a;
}, e._importCenter = function(e) {
	e && (e.style.left = (window.innerWidth - e.offsetWidth) / 2 + "px", e.style.top = (window.innerHeight - e.offsetHeight) / 2 + "px");
}, e.prototype.importXML = function() {
	var t = this, n = document.createElement("INPUT");
	n.setAttribute("type", "file"), n.setAttribute("accept", ".xml"), n.style.display = "none", n.onchange = function(n) {
		var r = n.target, i = new FileReader();
		i.onload = function() {
			var n = i.result, r = e._xml2json(n);
			e.events.publish("import", [t, r]) != 0 && (t._putInUndoStack(), t.clearRedo(), t.config.nodes = r, t._ai.setContext(), e.events.publish("updated", [t]), t.filterUI.update(), t.draw());
		}, i.readAsText(r.files[0]);
	}, n.click();
}, e.prototype.importJSON = function() {
	var t = this, n = document.createElement("INPUT");
	n.setAttribute("type", "file"), n.setAttribute("accept", ".json"), n.style.display = "none", n.onchange = function(n) {
		var r = n.target, i = new FileReader();
		i.onload = function() {
			var n = i.result, r = JSON.parse(n);
			e.events.publish("import", [t, r]) != 0 && (t._putInUndoStack(), t.clearRedo(), t.config.nodes = r, t._ai.setContext(), e.events.publish("updated", [t]), t.filterUI.update(), t.draw());
		}, i.readAsText(r.files[0]);
	}, n.click();
}, e.prototype.expand = function(t, n, r) {
	this._treeListExpandCollapseHandler(t), this._resetMovableNodes();
	var i = {
		id: t,
		ids: n
	};
	this._draw(!1, e.action.expand, i, r);
}, e.prototype.collapse = function(t, n, r) {
	this._treeListExpandCollapseHandler(t), this._resetMovableNodes();
	var i = {
		id: t,
		ids: n
	};
	this._draw(!1, e.action.collapse, i, r);
}, e.prototype.expandCollapse = function(t, n, r, i) {
	this._treeListExpandCollapseHandler(t), this._resetMovableNodes(), Array.isArray(n) || (n = []), Array.isArray(r) || (r = []);
	var a = {
		id: t,
		expandIds: n,
		collapseIds: r,
		ids: n.concat(r)
	};
	this._draw(!1, e.action.collapse, a, i);
}, e.prototype.changeRoots = function(t, n, r) {
	this.config.roots = n;
	var i = {
		id: t,
		changeRoots: n
	};
	this._draw(!1, e.action.update, i, r);
}, e.prototype._resetMovableNodes = function() {
	if (e.RESET_MOVABLE_ONEXPANDCOLLAPSE && this.config.movable != null) {
		for (var t = !1, n = 0; n < this.config.nodes.length; n++) {
			var r = this.config.nodes[n];
			r.movex != null && (r.movex = 0, t = !0), r.movey != null && (r.movey = 0, t = !0);
		}
		t && (this._ai.setContext(), e.events.publish("updated", [this]));
	}
}, e.prototype.maximize = function(t, n, r, i) {
	var a = this, o = {
		id: t,
		options: {}
	};
	e.isNEU(o.id) && (o.id = this.roots[0].id, o.all = !0), o.options.horizontal = !1, o.options.vertical = !1, n && (o.options.horizontal = n), r && (o.options.vertical = r), this._draw(!1, e.action.maximize, o, function() {
		a.ripple(t), i && i();
	});
}, e.prototype.minimize = function(t, n) {
	var r = this, i = { id: t };
	e.isNEU(i.id) && (i.id = this.roots[0].id, i.all = !0), this._draw(!1, e.action.minimize, i, function() {
		r.ripple(t), n && n();
	});
}, e.prototype._expCollHandler = function(t) {
	this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide();
	var n = this.getNode(t), r = this.getCollapsedIds(n);
	if (r.length) {
		var i = e.events.publish("expcollclick", [
			this,
			!1,
			t,
			r
		]);
		if (i === !1) return !1;
		this.expand(t, r, !1);
	} else {
		var i = e.events.publish("expcollclick", [
			this,
			!0,
			t,
			n.childrenIds
		]);
		if (i === !1) return !1;
		this.collapse(t, n.childrenIds, !1);
	}
}, e.prototype._upHandler = function(t) {
	this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide();
	var n = this._upHandlerCreateArgs(t);
	if (e.events.publish("up-click", [this, n]) === !1) return !1;
	this.changeRoots(n.id, n.roots, !1);
}, e.prototype._upHandlerCreateArgs = function(e) {
	var t = this.getNode(e), n = Object.assign([], this.config.roots), r = this.getNode(t.pid), i;
	if (r && (i = r), i) {
		if (Array.isArray(n)) {
			var a = n.indexOf(t.id);
			a != -1 && n.splice(a, 1);
		} else n = [];
		n.push(i.id);
	}
	return {
		id: t.id,
		roots: n
	};
}, String.prototype.replaceAll || (String.prototype.replaceAll = function(e, t) {
	return this.replace(new RegExp(e, "g"), t);
}), String.prototype.endsWith || (String.prototype.endsWith = function(e) {
	return this.indexOf(e, this.length - e.length) !== -1;
}), String.prototype.splice || (String.prototype.splice = function(e, t, n) {
	return this.slice(0, e) + n + this.slice(e + Math.abs(t));
}), String.prototype.insert || (String.prototype.insert = function(e, t) {
	return e > 0 ? this.substring(0, e) + t + this.substr(e) : t + this;
}), Array.prototype.unique || Object.defineProperty(Array.prototype, "unique", {
	value: function() {
		for (var e = this.concat(), t = 0; t < e.length; ++t) for (var n = t + 1; n < e.length; ++n) e[t] === e[n] && e.splice(n--, 1);
		return e;
	},
	writable: !0,
	configurable: !0,
	enumerable: !1
}), Array.prototype.has || Object.defineProperty(Array.prototype, "has", {
	value: function(e) {
		for (var t = 0; t < this.length; t++) if (this[t] == e) return !0;
		return !1;
	},
	writable: !0,
	configurable: !0,
	enumerable: !1
}), Array.prototype.compare || Object.defineProperty(Array.prototype, "compare", {
	value: function(e) {
		if (this.length != e.length) return !1;
		for (var t = 0; t < this.length; t++) if (!e.has(this[t])) return !1;
		return !0;
	},
	writable: !0,
	configurable: !0,
	enumerable: !1
}), Object.assign || Object.defineProperty(Object, "assign", {
	value: function(e, t) {
		if (e == null) throw TypeError("Cannot convert undefined or null to object");
		for (var n = Object(e), r = 1; r < arguments.length; r++) {
			var i = arguments[r];
			if (i != null) for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
		}
		return n;
	},
	writable: !0,
	configurable: !0
}), e.prototype._clickHandler = function(t, n) {
	if (!(n.button > 0)) {
		for (var r = n.target; r != t;) {
			if (r.hasAttribute(e.attr.control_expcoll_id)) {
				var i = r.getAttribute(e.attr.control_expcoll_id), a = this.getNode(i);
				this._expCollHandler(a.id);
				return;
			}
			if (r.hasAttribute(e.attr.node_id)) {
				var i = r.getAttribute(e.attr.node_id), a = this.getNode(i);
				this._nodeClickHandler(a.id, n);
				return;
			}
			if (r.hasAttribute(e.attr.control_node_menu_id)) {
				n.stopPropagation(), n.preventDefault();
				var i = r.getAttribute(e.attr.control_node_menu_id), a = this.getNode(i);
				this._nodeMenuClickHandler(a.id, r, n);
				return;
			}
			if (r.hasAttribute(e.attr.control_node_circle_menu_id)) {
				n.stopPropagation(), n.preventDefault();
				var i = r.getAttribute(e.attr.control_node_circle_menu_id);
				this._nodeCircleMenuClickHandler(i);
				return;
			}
			if (r.hasAttribute(e.attr.control_node_circle_menu_name)) {
				n.stopPropagation(), this._nodeCircleMenuItemClickHandler(r, n);
				return;
			}
			if (r.hasAttribute(e.attr.control_add)) {
				this._lonelyButtonHandler();
				return;
			}
			if (r.hasAttribute(e.attr.control_up_id)) {
				var i = r.getAttribute(e.attr.control_up_id);
				n.stopPropagation(), n.preventDefault(), this._upHandler(i);
				return;
			}
			if (r.hasAttribute(e.attr.c_link_from)) {
				e.events.publish("clink-click", [this, {
					from: r.getAttribute(e.attr.c_link_from),
					to: r.getAttribute(e.attr.c_link_to),
					event: n
				}]);
				return;
			}
			if (r.hasAttribute(e.attr.s_link_from)) {
				e.events.publish("slink-click", [this, {
					from: r.getAttribute(e.attr.s_link_from),
					to: r.getAttribute(e.attr.s_link_to),
					event: n
				}]);
				return;
			}
			if (r.hasAttribute("data-ctrl-n-dotted-close")) {
				var i = r.getAttribute("data-ctrl-n-dotted-close");
				this.minimize(i);
				return;
			}
			if (r.hasAttribute("data-ctrl-n-dotted-open")) {
				var i = r.getAttribute("data-ctrl-n-dotted-open");
				this.maximize(i);
				return;
			}
			r = r.parentNode;
		}
		e.events.publish("canvas-click", [this, { event: n }]);
	}
}, e.prototype._mouseDownHandler = function(t, n, r, i) {
	var a = this;
	e.SEARCH_CLOSE_RESULT_ON_ESCAPE_OR_CLICKOUTSIDE && this.searchUI.hide(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide();
	var o = this.getViewBox(), s = this.getScale(), c = e._getClientTouchesXY(n, 0), l = e._getClientTouchesXY(n, 1), u = {
		diffX: 0,
		diffY: 0,
		x0: c.x,
		y0: c.y,
		type: this.config.enablePan ? "pan" : "pan-not-enabled",
		viewBoxLeft: o[0],
		viewBoxTop: o[1],
		time: Date.now()
	};
	n.touches && n.touches.length > 1 && (u.type = "pinch", u.dist = Math.sqrt((c.x - l.x) * (c.x - l.x) + (c.y - l.y) * (c.y - l.y)));
	var d = null;
	if (i) {
		var f = i.stChildren[0].lcn ? i.stChildren[0].lcn : "base";
		d = a.manager.layoutConfigs[f], u.scrollTop = i.treeList.scrollTop;
	}
	var p = 0, m = function(t) {
		var n = e._getClientTouchesXY(t, 0);
		if (u && u.type == "pan") {
			clearTimeout(a._timeout), u.diffX = n.x - u.x0, u.diffY = n.y - u.y0, p = Math.max(Math.abs(u.diffY), Math.abs(u.diffX));
			var r = -(u.diffY / s) + u.viewBoxTop, c = -(u.diffX / s) + u.viewBoxLeft;
			p > 3 && (i ? (i.treeList.scrollTop = u.scrollTop - u.diffY / s, a._treeListUpdateInterval &&= (clearInterval(a._treeListUpdateInterval), null), a._treeListUpdate(i, d)) : (a._hideBeforeAnimation(), a._changeCursorOnPanStart(o, s, t), a._move(r, c, o)));
		} else if (u && u.type == "pinch") {
			var l = e._getClientTouchesXY(t, 1), f = Math.sqrt((n.x - l.x) * (n.x - l.x) + (n.y - l.y) * (n.y - l.y)), m = 1 + (f - u.dist) / (u.dist / 100) / 100;
			u.dist = f;
			var h = e._pinchMiddlePointInPercent(a.element, a.width(), a.height(), t);
			a.zoom(m, h);
		}
	}, h = function(n) {
		if (p < 3 && u.type != "pinch" && (n.touches == null || n.touches.length <= 1)) a._clickHandler(t, n);
		else if (u.type == "pan" && i) {
			var o = Date.now() - u.time, s = Math.abs(p / o);
			if (s > .5) {
				var c = i.treeList.scrollTop, l = c + s * 400 * (u.diffY > 0 ? -1 : 1), f = i.stChildren[0].h;
				l = Math.round(l / f) * f, l != c && (a._treeListUpdateInterval &&= (clearInterval(a._treeListUpdateInterval), null), a._treeListUpdateInterval = e.animate(null, {}, {}, 1500, e.anim.outExp, function() {}, function(e) {
					i.treeList.scrollTop = e * (l - c) + c, a._treeListUpdate(i, d.orientation);
				}));
			} else {
				var c = i.treeList.scrollTop, f = i.stChildren[0].h, l = Math.round(i.treeList.scrollTop / f) * f;
				l != c && (a._treeListUpdateInterval &&= (clearInterval(a._treeListUpdateInterval), null), a._treeListUpdateInterval = e.animate(null, {}, {}, 200, e.anim.outSin, function() {}, function(e) {
					i.treeList.scrollTop = e * (l - c) + c, a._treeListUpdate(i, d.orientation);
				}));
			}
		} else u.type == "pan" && !i && p > 10 && a._draw(!0, e.action.pan);
		u.type == "pan" && !i && a._changeCursorOnPanEnd(), u = null, t.removeEventListener(r.move, m), t.removeEventListener(r.up, h), r.leave && t.removeEventListener(r.leave, h), r.touchstart && t.removeEventListener(r.touchstart, h);
	};
	t.addEventListener(r.move, m, { passive: !0 }), t.addEventListener(r.up, h), r.leave && t.addEventListener(r.leave, h), r.touchstart && t.addEventListener(r.touchstart, h, { passive: !0 });
}, e.prototype._changeCursorOnPanStart = function(t, n, r) {
	var i = this.getPointerElement();
	if (i) {
		var a = e._getOffsetXY(this.element, r), o = a.x / n + t[0] - 16 / n, s = a.y / n + t[1] - 16 / n;
		i.style.display = "inherit", i.setAttribute("transform", "matrix(0,0,0,0," + o + "," + s + ")"), e.animate(i, {
			transform: [
				0,
				0,
				0,
				0,
				o,
				s
			],
			opacity: 0
		}, {
			transform: [
				1 / n,
				0,
				0,
				1 / n,
				o,
				s
			],
			opacity: 1
		}, 300, e.anim.outBack);
	} else this.element.style.cursor = "move";
}, e.prototype._changeCursorOnPanEnd = function() {
	var e = this.getPointerElement();
	e ? e.style.display = "none" : this.element.style.cursor = "initial";
}, e.prototype._globalMouseDownHandler = function(t, n) {
	var r = {
		move: "mousemove",
		up: "mouseup",
		leave: "mouseleave"
	};
	n.type.indexOf("touch") != -1 && (n.touches.length == 1 ? this._touch = {
		x: n.touches[0].clientX,
		y: n.touches[0].clientY
	} : this._touch = null, r = {
		move: "touchmove",
		up: "touchend",
		touchstart: "touchstart"
	}), this._treeListUpdateInterval &&= (clearInterval(this._treeListUpdateInterval), null);
	for (var i = null, a = n.target; a != t && !a.hasAttribute(e.attr.control_node_menu_id) && !a.hasAttribute(e.attr.control_node_circle_menu_id);) {
		if (a.hasAttribute) {
			var o = null;
			a.hasAttribute(e.attr.node_id) ? o = this.getNode(a.getAttribute(e.attr.node_id)) : a.hasAttribute(e.attr.control_expcoll_id) ? o = this.getNode(a.getAttribute(e.attr.control_expcoll_id)) : (a.hasAttribute(e.attr.control_node_menu_id) || a.hasAttribute(e.attr.control_node_menu_id)) && (o = this.getNode(a.getAttribute(e.attr.control_node_menu_id))), i ||= e._getScrollableTreeListNodeInTouchEnabledDevice(o);
		}
		if (a.hasAttribute(e.attr.node_id) && !i && (this.config.enableDragDrop || this.config.movable)) {
			if (n.touches == null || n.touches.length <= 1) {
				this._nodeMouseDownHandler(a, n, r);
				return;
			}
		} else if (a.hasAttribute(e.attr.control_node_circle_menu_name)) {
			if (n.stopPropagation(), n.touches == null || n.touches.length <= 1) {
				this._nodeCircleNodeMenuItemMouseDownHandler(t, a, n, r);
				return;
			}
		} else if (a.hasAttribute("data-treelist-thumb") && (n.stopPropagation(), n.touches == null || n.touches.length <= 1)) {
			this._treeListThumbMouseDownHandler(a, n, r);
			return;
		}
		a = a.parentNode;
	}
	n.stopPropagation(), this._mouseDownHandler(t, n, r, i);
}, e.prototype._globalContextHandler = function(t, n) {
	for (var r = n.target; r != t;) {
		if (r.hasAttribute(e.attr.node_id)) {
			var i = r.getAttribute(e.attr.node_id), a = this.getNode(i);
			this._nodeContextHandler(a.id, n);
			return;
		}
		r = r.parentNode;
	}
}, e.prototype._nodeContextHandler = function(t, n) {
	n.preventDefault(), e.SEARCH_CLOSE_RESULT_ON_ESCAPE_OR_CLICKOUTSIDE && this.searchUI.hide(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide();
	var r = this.get(t), i = null;
	if (r != null && Array.isArray(r.tags)) for (var a = 0; a < r.tags.length; a++) {
		var o = r.tags[a];
		this.config.tags[o] && this.config.tags[o].nodeContextMenu && (i = this.config.tags[o].nodeContextMenu);
	}
	var s = this.element.getBoundingClientRect(), c = n.clientX - s.left, l = n.clientY - s.top;
	this.nodeContextMenuUI.show(c, l, t, null, i);
}, e.prototype._globalDbClickHandler = function(t, n) {
	for (var r = n.target; r != t;) {
		if (r.hasAttribute(e.attr.node_id)) {
			var i = r.getAttribute(e.attr.node_id), a = this.getNode(i);
			this._nodeDbClickHandler(a.id, n);
			return;
		}
		r = r.parentNode;
	}
}, e.prototype._mouseScrollHandler = function(e, t) {
	for (var n = !1, r = t.target, i = null; r && r.hasAttribute && !r.hasAttribute("data-n-id") && !r.hasAttribute("data-ctrl-ec-id");) r = r.parentNode;
	if (r.hasAttribute && r.hasAttribute("data-n-id")) {
		var a = r.getAttribute("data-n-id");
		i = this.getNode(a), i.isTreeListItem && (n = !0);
	}
	if (r.hasAttribute && r.hasAttribute("data-ctrl-ec-id")) {
		var a = r.getAttribute("data-ctrl-ec-id");
		i = this.getNode(a), i.isTreeListItem && (n = !0);
	}
	t.ctrlKey && (n = !1), n ? this.__mouseScrollHandlerTreeList(i, t) : this.__mouseScrollHandler(this.getSvg(), t);
}, e.prototype.__mouseScrollHandler = function(t, n) {
	if (n.ctrlKey) {
		if (this.config.mouseScrool == e.action.zoom) return;
	} else if (this.config.mouseScrool == e.action.ctrlZoom || this.config.mouseScrool != e.action.zoom) return;
	if (n.preventDefault(), !navigator.hardwareConcurrency || navigator.hardwareConcurrency < 9) {
		let i = n.deltaY / 1e3;
		i = Math.abs(i) < .1 ? .1 * n.deltaY / Math.abs(n.deltaY) : i;
		var r = e._centerPointInPercent(t, n.clientX, n.clientY);
		this.zoom(1 - i, r);
	} else {
		var i = this, a = !1, o = this.config.zoom.speed, s = this.config.zoom.smooth, c = 0, l = this.getScale(), r = e._centerPointInPercent(t, n.clientX, n.clientY);
		function f() {
			a = !0;
			var e = (c - l) / s;
			e > 0 ? e++ : e--, l += e, i.zoom(1 - e / 12 / 50, r), parseInt(l) == parseInt(c) ? a = !1 : u(f);
		}
		var u = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
				setTimeout(e, 20);
			};
		}();
		n.preventDefault();
		var d = n.delta || n.wheelDelta;
		d === void 0 && (d = -n.detail), d = Math.max(-1, Math.min(1, d)), c += -d * o, a || f();
	}
}, e.prototype._nodeCircleNodeMenuItemMouseDownHandler = function(t, n, r, i) {
	var a = n.parentNode.getAttribute(e.attr.control_node_circle_menu_wrraper_id), o = n.getAttribute(e.attr.control_node_circle_menu_name), s = this.nodeCircleMenuUI._menu[o];
	if (!s.draggable) {
		this._clickHandler(t, r);
		return;
	}
	var c = this, l = e._getClientXY(r), u = this.getNode(a);
	n._dragEventFired = !1;
	var d = c.getScale(), f = null, p = null;
	document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = "none";
	var m = this.getSvg(), h = {
		x: l.x,
		y: l.y
	}, g = function(t) {
		for (; t && !t.hasAttribute(e.attr.control_node_circle_menu_wrraper_id);) t = t.parentNode;
		if (!t) {
			console.error("cannot find parent" + e.attr.control_node_circle_menu_wrraper_id);
			return;
		}
		var n = e._getTransform(t);
		return {
			x: n[4],
			y: n[5]
		};
	}, _ = n.cloneNode(!0);
	m.insertBefore(_, m.firstChild);
	var v = e._getTransform(_), y = v[4], b = v[5], x = g(n);
	_.setAttribute("transform", "matrix(1,0,0,1," + (y + x.x) + "," + (b + x.y) + ")"), _.style.opacity = .7;
	var S = function(t, n) {
		if (t != null) {
			n.classList.remove("boc-drag-over");
			for (var r = e.getStParentNodes(c.getNode(f)), i = 0; i < r.length; i++) {
				var a = c.getNodeElement(r[i].id);
				a && (a.style.opacity = 1);
			}
		}
	}, C = function(t) {
		if (h) {
			var r = e._getClientXY(t), i = t.target;
			e.isMobile() && (i = document.elementFromPoint(r.x, r.y)), r.x += x.x * d, r.y += x.y * d;
			var a = e._getOffsetXY(c.element, t), l = {
				left: c.width() - (a.x + c.config.padding) < 0,
				right: a.x - c.config.padding < 0,
				up: c.height() - (a.y + c.config.padding) < 0,
				down: a.y - c.config.padding < 0
			};
			if (l.left || l.right || l.up || l.down) {
				m.classList && (m.classList.remove("boc-cursor-grab"), m.classList.add("boc-cursor-move"), m.classList.remove("boc-cursor-nodrop"), m.classList.remove("boc-cursor-copy"));
				var u = v[4], g = v[5], C = h.x, T = h.y, E = r.x, D = r.y;
				c.moveStart(l, function(e) {
					v[4] = u + e.x, v[5] = g + e.y, h.x = C - e.xWithoutScale, h.y = T - e.yWithoutScale, r.x = E - e.xWithoutScale, r.y = D - e.yWithoutScale, _.setAttribute("transform", "matrix(" + v.toString() + ")");
				});
			} else {
				for (c.moveEnd(), m.classList && (m.classList.add("boc-cursor-grab"), m.classList.remove("boc-cursor-move"), m.classList.remove("boc-cursor-nodrop"), m.classList.remove("boc-cursor-copy")), S(f, p), f = null, p = null; i != null && i != m;) {
					if (i.hasAttribute && i.hasAttribute(e.attr.node_id)) {
						var O = i.getAttribute(e.attr.node_id);
						f = O, p = i;
						break;
					}
					i = i.parentNode;
				}
				if (f != null) {
					p.classList.add("boc-drag-over");
					for (var k = c.getNode(f), A = e.getStParentNodes(k), j = 0; j < A.length; j++) {
						var M = c.getNodeElement(A[j].id);
						M && (M.style.opacity = .1);
					}
					m.classList.remove("boc-cursor-grab"), m.classList.remove("boc-cursor-move"), m.classList.add("boc-cursor-copy"), m.classList.remove("boc-cursor-nodrop");
				}
				var N = (r.x - h.x) / d, P = (r.y - h.y) / d;
				v[4] = y + N, v[5] = b + P, !n._dragEventFired && (Math.abs(r.x - h.x) > e.FIRE_DRAG_NOT_CLICK_IF_MOVE || Math.abs(r.y - h.y) > e.FIRE_DRAG_NOT_CLICK_IF_MOVE) && (c._gragStartedId = n.parentNode.getAttribute(e.attr.control_node_circle_menu_wrraper_id), e.events.publish("drag", [c.nodeCircleMenuUI, {
					from: O,
					menuItem: s,
					menuItemName: o
				}]) === !1 && w(), n._dragEventFired = !0), _.setAttribute("transform", "matrix(" + v.toString() + ")");
			}
		}
	}, w = function(t) {
		if (c.moveEnd(), m.classList && (m.classList.remove("boc-cursor-grab"), m.classList.remove("boc-cursor-move"), m.classList.remove("boc-cursor-nodrop"), m.classList.remove("boc-cursor-copy")), m.removeEventListener(i.move, C), m.removeEventListener(i.up, w), i.leave && m.removeEventListener(i.leave, w), u.id == f || f == null) {
			m.removeChild(_), c._gragStartedId = null, n._dragEventFired && e.events.publish("drop", [c.nodeCircleMenuUI, {
				from: u.id,
				menuItemName: o,
				menuItem: s,
				event: t
			}]);
			return;
		}
		var r = c.getNode(f);
		e.events.publish("drop", [c.nodeCircleMenuUI, {
			from: u.id,
			to: r.id,
			menuItem: s,
			menuItemName: o,
			event: t
		}]), S(f, p), m.removeChild(_), c._gragStartedId = null;
	};
	m.addEventListener(i.move, C), m.addEventListener(i.up, w), i.leave && m.addEventListener(i.leave, w);
}, e.prototype._nodeMouseDownHandler = function(t, n, r) {
	var i = t.getAttribute(e.attr.node_id), a = this.getNode(i);
	this.config.movable && !e.getRootOf(a).stParent ? this._movableHandler(t, n, r) : this.config.enableDragDrop && this._dragDropHandler(t, n, r);
}, e.prototype._resizeHandler = function(t, n) {
	if (this.isVisible && !(t == 0 || n == 0)) {
		var r = this.getViewBox();
		if (r) {
			r = r.slice(0);
			var i = t / r[2], a = n / r[3];
			Math.abs(this._lastSize.width - t) > Math.abs(this._lastSize.height - n) ? r[3] = n / i : r[2] = t / a, this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide(), this.setViewBox(r), this.xScrollUI.create(t), this.yScrollUI.create(n), this._draw(!0, e.action.resize);
		}
	}
}, e.prototype._nodeDbClickHandler = function(t, n) {
	if (e.events.publish("dbclick", [this, this.get(t)]) === !1) return !1;
	this._commonClickHandler(t, n, this.config.nodeMouseDbClick);
}, e.prototype._nodeClickHandler = function(t, n) {
	if (e.events.publish("click", [this, {
		node: this.getNode(t),
		event: n
	}]) === !1) return !1;
	if (this.powerPointPreviewUI.isVisible() && this.powerPointPreviewUI.selectedPage != null) {
		this.powerPointPreviewUI.selectedPage.content = void 0, this.powerPointPreviewUI.selectedPage.nodeId = t, this.powerPointPreviewUI.refresh(t), this.ripple(t, n.clientX, n.clientY);
		return;
	}
	if (this.pdfPreviewUI.isVisible() && this.pdfPreviewUI.selectedPage != null) {
		this.pdfPreviewUI.selectedPage.content = void 0, this.pdfPreviewUI.selectedPage.nodeId = t, this.pdfPreviewUI.refresh(t), this.ripple(t, n.clientX, n.clientY);
		return;
	}
	if (this.svgPreviewUI.isVisible() && this.svgPreviewUI.selectedPage != null) {
		this.svgPreviewUI.selectedPage.content = void 0, this.svgPreviewUI.selectedPage.nodeId = t, this.svgPreviewUI.refresh(t), this.ripple(t, n.clientX, n.clientY);
		return;
	}
	if (this.pngPreviewUI.isVisible() && this.pngPreviewUI.selectedPage != null) {
		this.pngPreviewUI.selectedPage.content = void 0, this.pngPreviewUI.selectedPage.nodeId = t, this.pngPreviewUI.refresh(t), this.ripple(t, n.clientX, n.clientY);
		return;
	}
	var r = this.getNodeElement(t);
	if (r && r._dragEventFired) {
		r._dragEventFired = !1;
		return;
	}
	this._commonClickHandler(t, n, this.config.nodeMouseClick);
}, e.prototype._nodeCircleMenuItemClickHandler = function(t, n) {
	var r = t.parentNode.getAttribute(e.attr.control_node_circle_menu_wrraper_id), i = t.getAttribute(e.attr.control_node_circle_menu_name), a = this.nodeCircleMenuUI._menu[i];
	e.events.publish("click", [this.nodeCircleMenuUI, {
		nodeId: r,
		menuItemName: i,
		menuItem: a,
		event: n
	}]);
}, e.prototype._nodeCircleMenuClickHandler = function(t) {
	if (e.SEARCH_CLOSE_RESULT_ON_ESCAPE_OR_CLICKOUTSIDE && this.searchUI.hide(), this.nodeMenuUI.hide(), this.menuUI.hide(), this.nodeContextMenuUI.isVisible()) this.nodeContextMenuUI.hide();
	else {
		var n = this.getNode(t), r = null;
		if (Array.isArray(n.tags)) for (var i = 0; i < n.tags.length; i++) {
			var a = n.tags[i];
			this.config.tags[a] && this.config.tags[a].nodeCircleMenu && (r = this.config.tags[a].nodeCircleMenu);
		}
		this.nodeCircleMenuUI.show(t, r);
	}
}, e.prototype._commonClickHandler = function(t, n, r) {
	if (e.SEARCH_CLOSE_RESULT_ON_ESCAPE_OR_CLICKOUTSIDE && this.searchUI.hide(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide(), r == e.action.expandCollapse && this.toggleExpandCollapse(t, n), r == e.action.edit) {
		var i = this.getNode(t);
		i && (this.editUI.show(i.id), this.ripple(i.id, n.clientX, n.clientY));
	}
	if (r == e.action.details) {
		var i = this.getNode(t);
		i && (this.editUI.show(i.id, !0), this.ripple(i.id, n.clientX, n.clientY));
	}
}, e.prototype._menuHandlerMouseDownHandler = function(e, t) {
	t.stopPropagation(), t.preventDefault();
}, e.prototype._nodeMenuClickHandler = function(t, n, r) {
	e.SEARCH_CLOSE_RESULT_ON_ESCAPE_OR_CLICKOUTSIDE && this.searchUI.hide(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.hide(), this.nodeCircleMenuUI.hide();
	var i = this.getNode(t), a = null;
	if (Array.isArray(i.tags)) for (var o = 0; o < i.tags.length; o++) {
		var s = i.tags[o];
		this.config.tags[s] && this.config.tags[s].nodeMenu && (a = this.config.tags[s].nodeMenu);
	}
	this.nodeMenuUI.showStickIn(n, t, null, a);
}, e.prototype._menuClickHandler = function(e, t) {
	t.stopPropagation(), t.preventDefault(), this.nodeMenuUI.hide(), this.nodeContextMenuUI.hide(), this.menuUI.show(e.offsetLeft, e.offsetTop);
}, e.prototype._lonelyButtonHandler = function() {
	var e = { id: this.generateId() };
	this.addNode(e, null, !0) !== !1 && this.center(e.id);
}, e.prototype.toggleExpandCollapse = function(t, n) {
	var r = this.getNode(t), i = this.getCollapsedIds(r);
	if (i.length) {
		var a = e.events.publish("expcollclick", [
			this,
			!1,
			t,
			i
		]);
		if (a === !1) return !1;
		this.expand(t, i, !1);
	} else {
		var a = e.events.publish("expcollclick", [
			this,
			!0,
			t,
			r.childrenIds
		]);
		if (a === !1) return !1;
		this.collapse(t, r.childrenIds, !1);
	}
	n && this.ripple(r.id, n.clientX, n.clientY);
}, e.prototype._dragDropHandler = function(t, n, r) {
	var i = e._getClientXY(n), a = t.getAttribute(e.attr.node_id), o = this.getNode(a);
	t._dragEventFired = !1;
	var s = null, c = null;
	this.element.style.mozUserSelect = this.element.style.webkitUserSelect = this.element.style.userSelect = "none";
	var l = this, u = this.getSvg(), d = {
		x: i.x,
		y: i.y
	}, f = e._getTransform(t), p = f[4], m = f[5], h = l.getScale(), g = t.cloneNode(!0);
	g.setAttribute("data-n-id", "draging"), u.insertBefore(g, u.firstChild), g.style.opacity = .7;
	var _ = function(t, n) {
		if (t != null) {
			n.classList.remove("boc-drag-over");
			for (var r = l.getNode(s), i = e.getStParentNodes(r), a = 0; a < i.length; a++) {
				var o = l.getNodeElement(i[a].id);
				o && (o.style.opacity = 1);
			}
		}
	}, v = function(n) {
		if (n.touches != null && n.touches.length > 1) {
			y(n);
			return;
		}
		if (d) {
			var r = e._getClientXY(n), i = n.target;
			e.isMobile() && (i = document.elementFromPoint(r.x, r.y));
			var a = e._getOffsetXY(l.element, n), v = {
				left: l.width() - (a.x + l.config.padding) < 0,
				right: a.x - l.config.padding < 0,
				up: l.height() - (a.y + l.config.padding) < 0,
				down: a.y - l.config.padding < 0
			};
			if (v.left || v.right || v.up || v.down) {
				u.classList && (u.classList.remove("boc-cursor-grab"), u.classList.add("boc-cursor-move"), u.classList.remove("boc-cursor-nodrop"), u.classList.remove("boc-cursor-copy"));
				var b = f[4], x = f[5], S = d.x, C = d.y, w = r.x, T = r.y;
				l.moveStart(v, function(e) {
					f[4] = b + e.x, f[5] = x + e.y, d.x = S - e.xWithoutScale, d.y = C - e.yWithoutScale, r.x = w - e.xWithoutScale, r.y = T - e.yWithoutScale, g.setAttribute("transform", "matrix(" + f.toString() + ")");
				});
			} else {
				if (l.moveEnd(), u.classList && (u.classList.add("boc-cursor-grab"), u.classList.remove("boc-cursor-move"), u.classList.remove("boc-cursor-nodrop"), u.classList.remove("boc-cursor-copy")), _(s, c), s = null, c = null, l.config.enableDragDrop) for (; i != null && i != u;) {
					if (i.hasAttribute && i.hasAttribute(e.attr.node_id)) {
						var E = i.getAttribute(e.attr.node_id);
						if (l._gragStartedId && E != l._gragStartedId) {
							s = E, c = i;
							break;
						}
					}
					i = i.parentNode;
				}
				if (s == "draging" && (s = null, c = null), s != null) {
					c.classList.add("boc-drag-over");
					for (var D = l.getNode(s), O = e.getStParentNodes(D), k = 0; k < O.length; k++) {
						var A = l.getNodeElement(O[k].id);
						A && (A.style.opacity = .1);
					}
					!l.canUpdateLink(o.id, s) && u.classList ? (u.classList.remove("boc-cursor-grab"), u.classList.remove("boc-cursor-move"), u.classList.remove("boc-cursor-copy"), u.classList.add("boc-cursor-nodrop")) : u.classList && (u.classList.remove("boc-cursor-grab"), u.classList.remove("boc-cursor-move"), u.classList.add("boc-cursor-copy"), u.classList.remove("boc-cursor-nodrop"));
				}
				var j = (r.x - d.x) / h, M = (r.y - d.y) / h;
				f[4] = p + j, f[5] = m + M, !t._dragEventFired && (Math.abs(r.x - d.x) > e.FIRE_DRAG_NOT_CLICK_IF_MOVE || Math.abs(r.y - d.y) > e.FIRE_DRAG_NOT_CLICK_IF_MOVE) && (l._gragStartedId = E, e.events.publish("drag", [
					l,
					E,
					n
				]) === !1 && y(), t._dragEventFired = !0), g.setAttribute("transform", "matrix(" + f.toString() + ")");
			}
		}
	}, y = function(n) {
		if (!t._dragEventFired && (n.touches == null || n.touches.length <= 1) && l._clickHandler(l.getSvg(), n), l.moveEnd(), u.classList && (u.classList.remove("boc-cursor-grab"), u.classList.remove("boc-cursor-move"), u.classList.remove("boc-cursor-nodrop"), u.classList.remove("boc-cursor-copy")), u.removeEventListener(r.move, v), u.removeEventListener(r.up, y), r.leave && u.removeEventListener(r.leave, y), o.id == s || s == null) {
			t._dragEventFired && e.events.publish("drop", [
				l,
				o.id,
				void 0,
				g,
				n
			]), u.removeChild(g), l._gragStartedId = null;
			return;
		}
		var i = l.getNode(s);
		if (e.events.publish("drop", [
			l,
			o.id,
			i.id,
			g,
			n
		]) === !1) {
			_(s, c), u.removeChild(g), l._gragStartedId = null;
			return;
		}
		if (l.canUpdateLink(o.id, s)) {
			var a = l.get(o.id);
			a.pid = s, a.stpid = null, a.movex != null && (a.movex = void 0), a.movey != null && (a.movey = void 0), l.updateNode(a, null, !0);
		} else u.removeChild(g), _(s, c);
		l._gragStartedId = null;
	};
	u.addEventListener(r.move, v), u.addEventListener(r.up, y), r.leave && u.addEventListener(r.leave, y);
}, e.prototype._movableHandler = function(t, n, r) {
	var i = this, a = t.getAttribute(e.attr.node_id), o = [], s = function(e, t) {
		if (Array.isArray(e)) {
			for (var n = 0; n < e.length; n++) s(e[n], t);
			return;
		}
		t.push(e.id);
		for (var n = 0; n < e.stChildren.length; n++) s(e.stChildren[n], t);
		for (var n = 0; n < e.children.length; n++) s(e.children[n], t);
	}, c = function(e, t) {
		if (Array.isArray(e)) {
			for (var n = 0; n < e.length; n++) s(e[n], t);
			return;
		}
		t.push(e.id);
		for (var n = 0; n < e.stChildrenIds.length; n++) c(i.getNode(e.stChildrenIds[n]), t);
		for (var n = 0; n < e.childrenIds.length; n++) c(i.getNode(e.childrenIds[n]), t);
	}, l = this.getNode(a);
	s(l, o);
	for (var u = this.getSvg(), d = e._getClientXY(n), f = [], p = [], m = [], h = [], g = [], _ = [], v = [], y = [], b = 0; b < o.length; b++) {
		var x = this.getNode(o[b]);
		f.push(x), m.push({
			x: x.x,
			y: x.y
		});
		var S = this.getNodeElement(o[b]);
		if (S) {
			g.push(S);
			var C = e._getTransform(S);
			h.push({
				x: C[4],
				y: C[5]
			}), p.push(C);
			var w = this.element.querySelector(`[data-ctrl-ec-id="${o[b]}"]`);
			if (w) {
				_.push(w);
				var T = e._getTransform(w);
				v.push(T), y.push({
					x: T[4],
					y: T[5]
				});
			} else _.push(null), v.push(null), y.push(null);
			if (this.config.movable == e.movable.node) break;
		}
	}
	t._dragEventFired = !1;
	var E = null, D = null;
	document.body.style.mozUserSelect = document.body.style.webkitUserSelect = document.body.style.userSelect = "none";
	var O = {
		x: d.x,
		y: d.y
	}, k = i.getScale(), A = function(t, n) {
		if (t != null) {
			n.classList.remove("boc-drag-over");
			for (var r = i.getNode(E), a = e.getStParentNodes(r), o = 0; o < a.length; o++) {
				var s = i.getNodeElement(a[o].id);
				s && (s.style.opacity = 1);
			}
		}
	}, j = function(n) {
		if (n.touches != null && n.touches.length > 1) {
			M(n);
			return;
		}
		if (O) {
			var r = e._getClientXY(n), s = n.target;
			e.isMobile() && (s = document.elementFromPoint(r.x, r.y));
			var c = e._getOffsetXY(i.element, n), d = {
				left: i.width() - (c.x + i.config.padding) < 0,
				right: c.x - i.config.padding < 0,
				up: i.height() - (c.y + i.config.padding) < 0,
				down: c.y - i.config.padding < 0
			};
			if (d.left || d.right || d.up || d.down) {
				u.classList && (u.classList.remove("boc-cursor-grab"), u.classList.add("boc-cursor-move"), u.classList.remove("boc-cursor-nodrop"), u.classList.remove("boc-cursor-copy"));
				for (var b = [], x = [], S = [], C = [], w = 0; w < p.length; w++) b.push(p[w][4]), x.push(p[w][5]), v[w] ? (S.push(v[w][4]), C.push(v[w][5])) : (S.push(null), C.push(null));
				var T = O.x, j = O.y, N = r.x, P = r.y;
				i.moveStart(d, function(t) {
					for (var n = 0; n < p.length; n++) {
						var a = b[n], o = x[n], s = S[n], c = C[n];
						p[n][4] = a + t.x, p[n][5] = o + t.y, O.x = T - t.xWithoutScale, O.y = j - t.yWithoutScale, r.x = N - t.xWithoutScale, r.y = P - t.yWithoutScale, f[n].x = a + t.x, f[n].y = o + t.y, f[n].movex = t.x, f[n].movey = t.y, v[n] && (v[n][4] = s + t.x, v[n][5] = c + t.y);
						for (var l = e.ui.link(f[n], i, k, i.response.bordersByRootIdAndLevel, i.nodes, e.action.update, !0), u = 0; u < l.length; u++) {
							var d = l[u], m = i.element.querySelector(`[data-l-id="[${d.id}][${d.childId}]"]`);
							m && (m.innerHTML = d.html);
						}
						if (f[n].parent) for (var l = e.ui.link(f[n].parent, i, k, i.response.bordersByRootIdAndLevel, i.nodes, e.action.update, !0), u = 0; u < l.length; u++) {
							var d = l[u], m = i.element.querySelector(`[data-l-id="[${d.id}][${d.childId}]"]`);
							m && (m.innerHTML = d.html);
						}
						g[n].setAttribute("transform", "matrix(" + p[n].toString() + ")"), _[n] && _[n].setAttribute("transform", "matrix(" + v[n].toString() + ")");
					}
				});
			} else {
				if (i.moveEnd(), u.classList && (u.classList.add("boc-cursor-grab"), u.classList.remove("boc-cursor-move"), u.classList.remove("boc-cursor-nodrop"), u.classList.remove("boc-cursor-copy")), A(E, D), E = null, D = null, i.config.enableDragDrop) for (; s != null && s != u;) {
					if (s.hasAttribute && s.hasAttribute(e.attr.node_id)) {
						var F = s.getAttribute(e.attr.node_id);
						if (i._gragStartedId && F != i._gragStartedId) {
							E = F, D = s;
							break;
						}
					}
					s = s.parentNode;
				}
				if (E != null) {
					D.classList.add("boc-drag-over");
					for (var I = i.getNode(E), ee = e.getStParentNodes(I), L = 0; L < ee.length; L++) {
						var te = i.getNodeElement(ee[L].id);
						te && (te.style.opacity = .1);
					}
					!i.canUpdateLink(f[0].id, E) && u.classList ? (u.classList.remove("boc-cursor-grab"), u.classList.remove("boc-cursor-move"), u.classList.remove("boc-cursor-copy"), u.classList.add("boc-cursor-nodrop")) : u.classList && (u.classList.remove("boc-cursor-grab"), u.classList.remove("boc-cursor-move"), u.classList.add("boc-cursor-copy"), u.classList.remove("boc-cursor-nodrop"));
				}
				for (var ne = (r.x - O.x) / k, re = (r.y - O.y) / k, w = 0; w < p.length; w++) {
					p[w][4] = h[w].x + ne, p[w][5] = h[w].y + re, v[w] && (v[w][4] = y[w].x + ne, v[w][5] = y[w].y + re), f[w].x = m[w].x + ne, f[w].y = m[w].y + re;
					for (var ie = e.ui.link(f[w], i, k, i.response.bordersByRootIdAndLevel, i.nodes, e.action.update, !0), L = 0; L < ie.length; L++) {
						var R = ie[L], z = i.element.querySelector(`[data-l-id="[${R.id}][${R.childId}]"]`);
						z && (z.innerHTML = R.html);
					}
				}
				if (l.parent) if (i.config.movable == e.movable.detachTree) {
					var z = i.element.querySelector(`[data-l-id="[${l.parent.id}][${l.id}]"]`);
					z && z.parentElement.removeChild(z);
				} else for (var ie = e.ui.link(l.parent, i, k, i.response.bordersByRootIdAndLevel, i.nodes, e.action.update, !0), L = 0; L < ie.length; L++) {
					var R = ie[L], z = i.element.querySelector(`[data-l-id="[${R.id}][${R.childId}]"]`);
					z && (z.innerHTML = R.html);
				}
				if (!t._dragEventFired && (Math.abs(r.x - O.x) > e.FIRE_DRAG_NOT_CLICK_IF_MOVE || Math.abs(r.y - O.y) > e.FIRE_DRAG_NOT_CLICK_IF_MOVE)) {
					if (i._gragStartedId = o[0], e.events.publish("drag", [
						i,
						a,
						n,
						o
					]) === !1 && M(), i.config.enableDragDrop) for (var w = 0; w < g.length; w++) u.insertBefore(g[w], u.firstChild);
					t._dragEventFired = !0;
				}
				for (var w = 0; w < p.length; w++) g[w].setAttribute("transform", "matrix(" + p[w].toString() + ")"), _[w] && _[w].setAttribute("transform", "matrix(" + v[w].toString() + ")");
			}
		}
	}, M = function(a) {
		!t._dragEventFired && (a.touches == null || a.touches.length <= 1) && i._clickHandler(i.getSvg(), n);
		for (var o = 0; o < f.length; o++) f[o].x = m[o].x, f[o].y = m[o].y;
		if (i.moveEnd(), u.classList && (u.classList.remove("boc-cursor-grab"), u.classList.remove("boc-cursor-move"), u.classList.remove("boc-cursor-nodrop"), u.classList.remove("boc-cursor-copy")), u.removeEventListener(r.move, j), u.removeEventListener(r.up, M), r.leave && u.removeEventListener(r.leave, M), f[0].id == E || E == null) {
			if (t._dragEventFired) {
				var s = e.events.publish("drop", [
					i,
					f[0].id,
					void 0,
					g[0],
					a
				]);
				if (i.config.movable && s !== !1) if (i.config.movable == e.movable.detachTree) {
					var d = e._getTransform(i.getNodeElement(l.id)), p = i.get(l.id);
					p.pid = null, p.stpid = null, i.updateNode(p, null, !0);
				} else {
					var h = [];
					i.config.movable == e.movable.node ? h.push(l.id) : c(l, h);
					for (var d = e._getTransform(i.getNodeElement(l.id)), _ = d[4] - l.x, v = d[5] - l.y, o = 0; o < h.length; o++) {
						var p = i.get(h[o]);
						p && (p.movex == null ? p.movex = _ : p.movex += _, p.movey == null ? p.movey = v : p.movey += v, i.update(p));
					}
					i._ai.setContext(), e.events.publish("updated", [i]), i.draw(e.action.update, { dragNodeIdList: h });
				}
			}
			i._gragStartedId = null;
			return;
		}
		var y = i.getNode(E), s = e.events.publish("drop", [
			i,
			f[0].id,
			y.id,
			g[0],
			a
		]);
		if (s === !1) {
			A(E, D), i._gragStartedId = null;
			return;
		}
		if (i.canUpdateLink(f[0].id, E)) {
			var p = i.get(f[0].id);
			p.pid = E, p.stpid = null, i.updateNode(p, null, !0);
		} else A(E, D);
		i._gragStartedId = null;
	};
	u.addEventListener(r.move, j), u.addEventListener(r.up, M), r.leave && u.addEventListener(r.leave, M);
}, e.prototype._move = function(e, t, n) {
	n[0] = t, n[1] = e, this.setViewBox(n), this.xScrollUI.setPosition(), this.yScrollUI.setPosition();
}, e.prototype.moveStart = function(t, n, r, i) {
	if (!t) {
		console.error("movePosition parameter not defined");
		return;
	}
	if (this._moveInterval) return;
	var a = this, o = this.getViewBox().slice(0), s = this.getScale(), c = 0, l = 0, u = 10, d = 1, f = 1;
	e.isNEU(r) && (r = e.anim.inSin), e.isNEU(i) && (i = 3e3);
	function p() {
		var p = {
			x: 0,
			y: 0,
			xWithoutScale: 0,
			yWithoutScale: 0
		};
		t.left ? (c++, p.x = c * e.MOVE_STEP / s, p.xWithoutScale = c * e.MOVE_STEP) : t.right && (c++, p.x = -(c * e.MOVE_STEP) / s, p.xWithoutScale = -(c * e.MOVE_STEP)), t.up ? (l++, p.y = l * e.MOVE_STEP / s, p.yWithoutScale = l * e.MOVE_STEP) : t.down && (l++, p.y = -(l * e.MOVE_STEP) / s, p.yWithoutScale = -(l * e.MOVE_STEP));
		var m = r((f * u - u) / i);
		p.x *= m, p.xWithoutScale *= m, p.y *= m, p.yWithoutScale *= m, a.setViewBox([
			o[0] + p.x,
			o[1] + p.y,
			o[2],
			o[3]
		]), n && n(p), f += d;
	}
	this._moveInterval = setInterval(p, u);
}, e.prototype.moveEnd = function() {
	this._moveInterval &&= (clearInterval(this._moveInterval), null);
}, e === void 0 && (e = {}), e.node = function(e, t, n, r) {
	this.templateName = r, this.id = e, this.pid = t, this.children = [], this.childrenIds = [], this.parent = null, this.stpid = null, this.stParent = null, this.stChildren = [], this.stChildrenIds = [], this.tags = n, this.childCount = 0, this.collapsedChildCount = 0, this.deepCollapsedChildCount = 0, this.deepChildCount = 0, this.tags ||= [];
}, e.searchUI = function() {
	this.lastSearch = [], this._searchAfterEnterPress = !1, this._event_id = e._guid(), this.instance = null;
}, e.searchUI.prototype.init = function(t) {
	this.instance = t, this.obj = this.instance, this._initSearchFields();
	var n = this, r = this.instance.config.padding - 10, i = this.instance.config.padding - 10, a = this.instance.getMenuButton();
	if (a) {
		var o = a.getBoundingClientRect(), s = this.instance.getSvg().getBoundingClientRect();
		r = s.right - o.left + 10, i = o.top - s.top - 10;
	}
	var c = document.createElement("div");
	c.classList.add("boc-search"), c.style.right = r + "px", c.style.top = i + "px";
	var l = e.elements.textbox({}, {
		label: e.SEARCH_PLACEHOLDER,
		btn: "X"
	}, "320px");
	c.innerHTML += l.html, this.xBtn = c.querySelector("[data-input-btn]"), this.xBtn.style.display = "none", this.searchTableWrapper = document.createElement("div"), c.appendChild(this.searchTableWrapper);
	var u = this.instance.getSvg().nextSibling;
	this.instance.element.insertBefore(c, u), e.input.init(c), this.input = document.getElementById(l.id), this.xBtn.addEventListener("click", function(e) {
		e.preventDefault(), n.hide();
	}), this.input.addEventListener("keypress", function(e) {
		e.key == "Enter" && e.preventDefault();
	}), this.input.addEventListener("focus", function(e) {
		n.xBtn.style.display = "", n._search();
	}), this.input.addEventListener("blur", function(t) {
		e.isNEU(n.input.value) && e.SEARCH_HELP_SYMBOL != n.input.value && (n.xBtn.style.display = "none");
	}), this.input.addEventListener("keydown", function(e) {
		(e.key == "ArrowDown" || e.key == "ArrowUp") && e.preventDefault();
	}), this.input.addEventListener("keyup", function(t) {
		t.key == "ArrowDown" ? d() : t.key == "ArrowUp" ? f() : t.key == "Enter" ? n._enterHandler() : t.key == "Escape" ? n.hide() : this.value.length >= e.MINIMUM_SYMBOLS_IN_SEARCH_INPUT && n._search();
	});
	var d = function() {
		var e = n.instance.element.querySelectorAll("[data-search-item-id]"), t = n.instance.element.querySelector("[data-selected=\"yes\"]");
		t == null && e.length > 0 ? e[0].setAttribute("data-selected", "yes") : e.length > 0 && t.nextSibling && t.nextSibling.setAttribute && (t.removeAttribute("data-selected"), t.nextSibling.setAttribute("data-selected", "yes"));
	}, f = function() {
		var e = n.instance.element.querySelectorAll("[data-search-item-id]"), t = n.instance.element.querySelector("[data-selected=\"yes\"]");
		t == null && e.length > 0 ? e[e.length - 1].setAttribute("data-selected", "yes") : e.length > 0 && t.previousSibling && t.previousSibling.setAttribute && (t.removeAttribute("data-selected"), t.previousSibling.setAttribute("data-selected", "yes"));
	};
}, e.searchUI.prototype._enterHandler = function() {
	var t = this.instance.element.querySelector("[data-selected=\"yes\"]");
	if (!t) this._searchAfterEnterPress = !0, this.__search(), this.searchTableWrapper.innerHTML = "", this.instance.draw();
	else if (t.hasAttribute("data-search-item-id")) {
		var n = t.getAttribute("data-search-item-id");
		this.input.value == e.SEARCH_HELP_SYMBOL ? (this.input.value = n + " ", this.searchTableWrapper.innerHTML = "") : e.events.publish("searchclick", [this, { nodeId: n }]) != 0 && (this.instance.center(n), e.isMobile() && this.hide());
	}
}, e.searchUI.prototype._initSearchFields = function() {
	if (this.instance.config.searchFields == null) {
		this._searchFields = [];
		for (var t = 0; t < this.instance.response.allFields.length; t++) {
			var n = this.instance.response.allFields[t];
			n != "tags" && !e._fieldIsImg(this.instance.config, n) && this._searchFields.indexOf(n) == -1 && this._searchFields.push(n);
		}
	} else this._searchFields = this.instance.config.searchFields;
	if (this.instance.config.searchFieldsAbbreviation == null) {
		this.searchFieldsAbbreviation = {};
		for (var t = 0; t < this._searchFields.length; t++) {
			for (var r = this._searchFields[t], i = 0, a = r.slice(0, i + 1).toLowerCase(); this.searchFieldsAbbreviation[a];) i++, a = r.slice(0, i + 1).toLowerCase();
			this.searchFieldsAbbreviation[a] = r;
		}
	} else this.searchFieldsAbbreviation = this.instance.config.searchFieldsAbbreviation;
	this._searchFieldsAbbreviation = this.searchFieldsAbbreviation;
}, e.searchUI.prototype.find = function(e) {
	this.input && (this.input.value = e, document.activeElement == this.input ? this._search(e) : this.input.focus());
}, e.searchUI.prototype.addMatchTag = function(e) {
	if (this._searchAfterEnterPress) {
		for (var t = 0; t < this.lastSearch.length; t++) if (this.lastSearch[t].id == e) return !0;
		return !1;
	}
	return null;
}, e.searchUI.prototype.__search = function() {
	this.lastSearch = e._search.search(this.instance.config.nodes, this.input.value, this._searchFields, this._searchFields, this.instance.config.searchDisplayField, this.instance.config.searchFieldsWeight, this.searchFieldsAbbreviation);
}, e.searchUI.prototype._search = function() {
	var t = this;
	this._searchAfterEnterPress = !1;
	var n;
	if (this.input.value == e.SEARCH_HELP_SYMBOL) n = this.helpView();
	else {
		this.__search();
		var r = e._getFistImgField(this.instance.config);
		n = `<table border="0" cellspacing="0" cellpadding="0">
                        <tbody>
                            ${(function() {
			for (var n = "", i = 0; i < t.lastSearch.length && !(i >= e.SEARCH_RESULT_LIMIT); i++) {
				var a = t.lastSearch[i], o = "";
				if (r) {
					var s = t.instance._get(a.id);
					typeof r == "function" ? o = r(t.instance, t.instance.getNode(a.id), s) : s[r] && (o = s[r]);
				}
				var c = "", l = "";
				t.instance.config.searchDisplayField == a.__searchField ? c = a.__searchMarks : t.instance.config.searchDisplayField ? (c = a[t.instance.config.searchDisplayField], e.isNEU(c) && (c = ""), l = a.__searchMarks) : c = a.__searchMarks;
				var u = {
					img: o,
					nodeId: a.id,
					first: c,
					second: l,
					searchItem: a,
					html: e.searchUI.createItem(o, a.id, c, l)
				};
				e.events.publish("add-item", [t, u]), n += u.html;
			}
			return n;
		})()}  
                        </tbody>
                    </table>`;
	}
	this.searchTableWrapper.innerHTML = n;
	for (var i = this.instance.element.querySelectorAll("[data-search-item-id]"), a = 0; a < i.length; a++) i[a].addEventListener("click", function() {
		if (this.hasAttribute("data-search-item-id")) {
			var n = this.getAttribute("data-search-item-id");
			if (t.input.value != e.SEARCH_HELP_SYMBOL) {
				var r = e.events.publish("searchclick", [t.instance, n]), i = e.events.publish("searchclick", [t, { nodeId: n }]);
				if (r === !1 && (i = !1), i !== !1) {
					t.instance.center(this.getAttribute("data-search-item-id"));
					var a = t.instance.element.querySelector("[data-selected=\"yes\"]");
					a && a.removeAttribute("data-selected"), this.setAttribute("data-selected", "yes"), t.input.focus(), e.isMobile() && t.hide();
				}
			} else t.input.value = n + " ", t.searchTableWrapper.innerHTML = "", t.input.focus();
		}
	});
	e.events.publish("show-items", [this, {}]);
}, e.searchUI.prototype.helpView = function() {
	var e = "<table border=\"0\" cellspacing=\"0\" cellpadding=\"0\">";
	for (var t in this.searchFieldsAbbreviation) e += `<tr data-search-item-id="${t}" style="height: 50px;"><td class="boc-search-image-td" style="text-align: center;">${t}</td><td class="boc-search-text-td">${this.searchFieldsAbbreviation[t]}</td></tr>`;
	return e += "</table>", e;
}, e.searchUI.createItem = function(t, n, r, i) {
	return r &&= "<b>" + r + "</b>", t = t ? `<div class="boc-search-photo" style="background-image: url(${t})"></div>` : `<div class="boc-search-photo">${e.icon.user(32, 32, "#aeaeae")}</div>`, `<tr data-search-item-id="${n}">
                <td class="boc-search-image-td">
                    ${t}
                </td>
                <td class="boc-search-text-td">${r} <br/>${i}</td>
            </tr>`;
}, e.searchUI.prototype.hide = function() {
	if (e.events.publish("hide", [this]) === !1) return !1;
	this._searchAfterEnterPress && (this._searchAfterEnterPress = !1, this.instance.draw()), this.lastSearch = [], this.xBtn && (this.xBtn.style.display = "none"), this.searchTableWrapper && (this.searchTableWrapper.innerHTML = ""), this.input && (e.isMobile() || (this.input.value = ""), document.activeElement == this.input && this.input.blur(), document.activeElement == this.xBtn && e.input.blurHandler(this.input));
}, e.searchUI.prototype.on = function(t, n) {
	return e.events.on(t, n, this._event_id), this;
}, e === void 0 && (e = {}), e.manager = function(e) {
	this.config = e.config, this.layoutConfigs = e._layoutConfigs, this.visibleNodeIds = [], this.viewBox = null, this.action = null, this.actionParams = null, this.nodes = {}, this.oldNodes = {}, this.maxX = null, this.maxY = null, this.minX = null, this.minY = null, this.bordersByRootIdAndLevel = null, this.roots = null, this.state = null, this.vbIsInitializedFromState = !1, this.rootList = [], this.instance = e, this._fixAdjustForExport = {
		x: 0,
		y: 0
	};
}, e.manager.prototype.read = function(t, n, r, i, a, o, s, c) {
	var l = this;
	e.state._get(this.config.state, n, r, function(u) {
		l.state = u, l.action = a, l.actionParams = o, a != e.action.init || !l.state || o && o.method && o.method == "fit" ? (l.viewBox = i, l.vbIsInitializedFromState = !1) : (l.viewBox = l.state.vb, l.vbIsInitializedFromState = !0, Array.isArray(l.state.roots) && (l.config.roots = l.state.roots));
		var d = l.maxX, f = l.maxY, p = l.minX, m = l.minY, h = l.bordersByRootIdAndLevel, g = l.roots, _ = l.nodes;
		if (!t) _ ? l.oldNodes = _ : l.oldNodes = null, l._read(function(t) {
			d = t.maxX, f = t.maxY, p = t.minX, m = t.minY, h = t.bordersByRootIdAndLevel, g = t.roots, _ = t.nodes;
			var i = e.manager._getResponse(n, r, l.visibleNodeIds, l.config, d, f, p, m, l.viewBox, g, l.action, l.actionParams, _, l.oldNodes, l.vbIsInitializedFromState);
			i.notif = t.limit, i.roots = g, i.bordersByRootIdAndLevel = h, i.adjustify = t.adjustify, a != e.action.exporting && (l.maxX = d, l.maxY = f, l.minX = p, l.minY = m, l.roots = g, l.nodes = _, l.visibleNodeIds = i.visibleNodeIds, l.bordersByRootIdAndLevel = h, l.rootList = t.rootList), s(i);
		}, c);
		else {
			var v = e.manager._getResponse(n, r, l.visibleNodeIds, l.config, d, f, p, m, l.viewBox, g, l.action, l.actionParams, _, l.oldNodes, l.vbIsInitializedFromState);
			a != e.action.exporting && (l.maxX = d, l.maxY = f, l.minX = p, l.minY = m, l.roots = g, l.nodes = _, l.visibleNodeIds = v.visibleNodeIds), v.bordersByRootIdAndLevel = h, v.roots = g, v.adjustify = {
				x: 0,
				y: 0
			}, l.state && (v.adjustify = l.state.adjustify), s(v);
		}
	});
}, e.manager.prototype._read = function(t, n) {
	var r = this, i = e.manager._createNodes(this.instance);
	n(i);
	var a = i.nodes, o = i.roots, s = e.remote;
	s ??= e.local, s._setPositions(o, r.layoutConfigs, function(n) {
		var s = e.manager._doNotChangePositionOfClickedNodeIfAny(o, a, r.action, r.actionParams, r.oldNodes, r.config.orientation);
		r.state && r.action == e.action.init && (s = r.state.adjustify), r.action == e.action.exporting ? s = r._fixAdjustForExport : r._fixAdjustForExport = s;
		for (var c = {
			minX: null,
			minY: null,
			maxX: null,
			maxY: null
		}, l = {}, u = [], d = 0; d < o.length; d++) e.manager._setMinMaxXYAdjustifyIterate(o[d], o[d], c, 0, l, s, r.config.orientation, u);
		for (var d = 0; d < o.length; d++) e.manager._setChildCountPropsIterate(o[d], a);
		for (var f in u) for (var p in u[f]) {
			var m = l[f][p], h = u[f][p];
			m.minX == null && m.minY == null && m.maxX == null && m.maxY == null && e._setMinMaxXY(h, m, !0);
		}
		t({
			minX: c.minX,
			minY: c.minY,
			maxX: c.maxX,
			maxY: c.maxY,
			bordersByRootIdAndLevel: l,
			nodes: a,
			roots: o,
			rootList: i.rootList,
			limit: n,
			adjustify: s
		});
	}, a);
}, e === void 0 && (e = {}), e.manager._initDinamicNode = function(t, n, r) {
	n && (t.lcn = n), r && (t.isAssistant = !0);
	var i = e.t(t.templateName);
	t.w = i && i.size ? i.size[0] : 0, t.h = i && i.size ? i.size[1] : 0, t.isSplit = t.templateName == "split", t.isMirror = t.templateName == "mirror", t.isSubLevel = t.templateName == "subLevel";
}, e.manager._setCollpasedProperty = function(t, n, r, i, a, o, s, c) {
	if (t.collapsed == null && n.collapse && n.collapse.allChildren ? t.collapsed = !0 : t.collapsed ??= !1, a == e.action.expand && r.ids.indexOf(t.id) != -1 && (t.collapsed = !1), a == e.action.collapse && (r.expandIds || r.collapseIds) ? r.expandIds && r.expandIds.indexOf(t.id) != -1 ? t.collapsed = !1 : r.collapseIds && r.collapseIds.indexOf(t.id) != -1 && (t.collapsed = !0) : a == e.action.collapse && r.ids.indexOf(t.id) != -1 && (t.collapsed = !0), a == e.action.expand && r.ids == "all" && (t.collapsed = !1), a == e.action.exporting && (!e.isNEU(r.parentLevels) || !e.isNEU(r.childLevels)) && r.id != null) {
		if (r.id != null && (!e.isNEU(r.parentLevels) || !e.isNEU(r.childLevels))) {
			var l = c[r.id];
			if (l == t) t.collapsed = !1;
			else {
				for (var u = !1, d = -1, f = !1, p = -1; l;) {
					if (d++, l == t) {
						u = !0;
						break;
					}
					l = c[l.pid];
				}
				l = c[r.id];
				for (var m = c[t.id]; m;) {
					if (p++, m == l) {
						f = !0;
						break;
					}
					m = c[m.pid];
				}
				r.parentLevels != null && u && d <= r.parentLevels || r.childLevels != null && f && p <= r.childLevels || f && r.expandChildren ? t.collapsed = !1 : t.collapsed = !0;
			}
		}
	} else a == e.action.exporting && r.expandChildren && (t.collapsed = !1);
	a == e.action.init && s != null ? t.collapsed = !s.exp.has(t.id) : a == e.action.init ? t.tags.indexOf("left-partner") != -1 || t.tags.indexOf("right-partner") != -1 || t.tags.indexOf("partner") != -1 || t.parentPartner ? t.collapsed = n.collapse && o >= n.collapse.level && i.indexOf(t.id) == -1 : t.collapsed = n.collapse && o >= n.collapse.level - 1 && i.indexOf(t.id) == -1 : a == e.action.centerNode || a == e.action.insert || a == e.action.expand || a == e.action.collapse ? i.has(t.id) && (t.collapsed = !1) : a == e.action.update && r && r.changeRoots && r.changeRoots.has(t.id) && (t.collapsed = !1);
}, e.manager._initNode = function(t, n, r, i, a, o, s) {
	var c = s.manager.config, l = s.manager.layoutConfigs, u = s.manager.action, d = s.manager.actionParams, f = s.manager.state, p = l[r || "base"];
	t.parent ?? e.manager._setCollpasedProperty(t, p, d, a, u, i - 1, f, n);
	for (var m = 0; m < t.childrenIds.length; m++) {
		var h = n[t.childrenIds[m]];
		if (e.manager._setCollpasedProperty(h, p, d, a, u, i, f, n), h.collapsed) t.collapsedChildCount++;
		else {
			if (h.parent = t, h.ppid != null) {
				var g = n[h.ppid];
				g && (h.parentPartner = g);
			}
			(h.tags.indexOf("left-partner") != -1 || h.tags.indexOf("right-partner") != -1 || h.tags.indexOf("partner") != -1 || h.parentPartner) && o.indexOf(t.id) == -1 && o.push(t.id), t.children.push(h);
		}
	}
	if (u == e.action.minimize && !t.min ? (d.all || d.id == t.id) && (t.min = !0) : u == e.action.maximize && t.min === !0 ? (d.all || d.id == t.id) && (t.min = !1) : u == e.action.exporting && d.min === !1 ? t.min = !1 : u == e.action.init && f != null && (t.min = f.min.has(t.id)), !t.min && (!t.tags || !t.tags.has("filter"))) for (var m = 0; m < t.stChildrenIds.length; m++) {
		var h = n[t.stChildrenIds[m]];
		h.stParent = t, t.stChildren.push(h);
	}
	i != null && (t.level = i), r && (t.lcn = r);
	var _ = e._getSubLevels(t.tags, c.tags);
	_ > 0 && (t.subLevels = _), t.tags.indexOf("assistant") != -1 && t.parent != null && (t.isAssistant = !0), p.layout == e.layout.treeList && (t.isTreeListItem = !0), p.template && c.template == t.templateName && (t.templateName = p.template);
	var v = e.t(t.templateName, t.min);
	if (t.w = v && v.size ? v.size[0] : 0, t.h = v && v.size ? v.size[1] : 0, t.padding = v && v.padding ? v.padding : [
		0,
		0,
		0,
		0
	], t.isTreeListItem && t.stParent && t.stParent.treeList == null) {
		var y = e.t(t.stParent.templateName, t.stParent.min);
		t.stParent.treeList = {
			pinnedIds: [],
			scrollTop: 0,
			scrollTopMax: 0,
			maxHeight: y.treeListMaxHeight
		};
	}
	var b = { node: t };
	e.events.publish("node-initialized", [s, b]);
}, e.manager._iterate = function(t, n, r, i, a, o, s, c, l, u, d, f) {
	var p = f.manager.layoutConfigs;
	if (e.manager._initNode(n, r, l, i, u, d, f), n.isAssistant && (o[n.pid] || (o[n.pid] = []), o[n.pid].push(n.id)), n.subLevels > 0 && s.push(n.id), e.MIXED_LAYOUT_FOR_NODES_WITH_COLLAPSED_CHILDREN && !n.isAssistant && n.parent) {
		if (n.parent && n.parent.children.length && n.parent.children[n.parent.children.length - 1] == n) {
			for (var m = [], h = 0, g = 0, _ = 0; _ < n.parent.children.length; _++) {
				var v = n.parent.children[_];
				v.tags.indexOf("partner") == -1 && v.tags.indexOf("left-partner") == -1 && v.tags.indexOf("right-partner") == -1 && v.tags.indexOf("assistant") == -1 && v.children.length == 0 ? m.push(v.id) : v.tags.indexOf("assistant") == -1 ? (v.tags.indexOf("partner") != -1 || v.tags.indexOf("left-partner") != -1 || v.tags.indexOf("right-partner") != -1) && g++ : h++;
			}
			(e.MIXED_LAYOUT_ALL_NODES && m.length > 1 && m.length == n.parent.children.length - h - g || !e.MIXED_LAYOUT_ALL_NODES && m.length > 1) && (c[n.pid] = m);
		}
	} else if (!n.isAssistant && n.childrenIds.length == 0 && n.parent && !c[n.pid]) {
		for (var m = [], h = 0, g = 0, _ = 0; _ < n.parent.children.length; _++) {
			var v = n.parent.children[_];
			v.tags.indexOf("partner") == -1 && v.tags.indexOf("left-partner") == -1 && v.tags.indexOf("right-partner") == -1 && v.tags.indexOf("assistant") == -1 && v.childrenIds.length == 0 ? m.push(v.id) : v.tags.indexOf("assistant") == -1 ? (v.tags.indexOf("partner") != -1 || v.tags.indexOf("left-partner") != -1 || v.tags.indexOf("right-partner") != -1) && g++ : h++;
		}
		(e.MIXED_LAYOUT_ALL_NODES && m.length > e.MIXED_LAYOUT_IF_NUMBER_OF_CHILDREN_IS_MORE_THEN && m.length == n.parent.childrenIds.length - h - g || !e.MIXED_LAYOUT_ALL_NODES && m.length > e.MIXED_LAYOUT_IF_NUMBER_OF_CHILDREN_IS_MORE_THEN) && (c[n.pid] = m);
	}
	n.stChildren.length && (t.stContainerNodes ||= [], t.stContainerNodes.push(n));
	for (var y = 0; y < n.stChildren.length; y++) {
		for (var b = "", _ = 0; _ < n.tags.length; _++) if (p[n.tags[_]]) {
			b = n.tags[_];
			break;
		}
		a.push(n.stChildren[y].id), e.manager._iterate(t, n.stChildren[y], r, 0, a, o, s, c, b, u, d, f);
	}
	i++;
	for (var y = 0; y < n.children.length; y++) n.isTreeListItem && (n.children[y].isTreeListItem = n.isTreeListItem), e.manager._iterate(t, n.children[y], r, i, a, o, s, c, l, u, d, f);
}, e.manager.__createNodes = function(t, n, r, i, a, o, s, c) {
	for (var l = [], u = e._addDottedLines(r), d = 0; d < u.length; d++) {
		var f = u[d], p = e.STRING_TAGS ? f.tags ? f.tags.split(",") : [] : Array.isArray(f.tags) ? f.tags.slice(0) : [];
		c.filterUI.addFilterTag(f) && p.unshift("filter");
		var m = c.searchUI.addMatchTag(f.id);
		m === !0 ? p.unshift("match") : m === !1 && p.unshift("no-match");
		var h = e._getTemplate(p, r.tags, r.template), g = new e.node(f.id, f.pid, p, h);
		e.isNEU(f.ppid) || (g.ppid = f.ppid), e.isNEU(f.stpid) || (g.stpid = f.stpid), f.movex != null && (g.movex = f.movex), f.movey != null && (g.movey = f.movey), t[f.id] = g, l.push(f.id);
	}
	if (r.orderBy != null) {
		var _ = e.manager._getOrderSortArray(r.orderBy);
		l.sort(function(e, t) {
			var n, r;
			for (var i of u) if (i.id == e && (n = i), i.id == t && (r = i), n && r) break;
			for (var a = 0; a < _.length; a++) {
				var o = n[_[a].field], s = r[_[a].field], c = o, l = s;
				if (c ??= "", l ??= "", typeof c == "string" && typeof l == "string") {
					var d = c.localeCompare(l);
					if (_[a].desc && (d *= -1), d !== 0) return d;
				} else {
					var d = o < s ? -1 : o > s ? 1 : 0;
					if (_[a].desc && (d *= -1), d !== 0) return d;
				}
			}
		});
	}
	for (var d = 0; d < l.length; d++) {
		var v = l[d], g = t[v], y = o ? o[v] : null, b = t[g.stpid], x = t[g.pid];
		if (b || (g.stpid = null), x || (g.pid = null), b) {
			var S = o ? o[b.id] : null;
			S && (b.min = S.min), b.stChildrenIds.push(g.id);
		} else x ? (y && (g.collapsed = y.collapsed, g.min = y.min, g.treeList = y.treeList), x.childrenIds.push(g.id)) : (y && (g.collapsed = y.collapsed, g.min = y.min, g.treeList = y.treeList), n.push(g), s.push(g.id));
		i == e.action.init && (g.min = e._getMin(g, r));
	}
}, e.manager._createNodes = function(t) {
	var n = t.manager.config, r = t.manager.layoutConfigs, i = t.manager.action, a = t.manager.actionParams, o = t.manager.oldNodes, s = t.manager.state, c = {}, l = [], u = [];
	if (e.manager.__createNodes(c, l, n, i, a, o, u, t), n.roots != null) {
		l = [];
		for (var d = 0; d < n.roots.length; d++) {
			var f = c[n.roots[d]];
			if (f && i == e.action.centerNode) {
				for (var p = f; p.pid != null || p.stpid != null;) p = p.pid == null && p.stpid != null ? c[p.stpid] : c[p.pid];
				for (var m = c[a.id]; (m.pid != null || m.stpid != null) && m != f;) m = m.pid == null && m.stpid != null ? c[m.stpid] : c[m.pid];
				p == m && (f = p);
			}
			if (f) {
				for (var h = !1, g = 0; g < l.length; g++) if (l[g].id == f.id) {
					h = !0;
					break;
				}
				if (!h) {
					if (!e.isNEU(f.pid)) {
						var _ = c[f.pid], v = _.childrenIds.indexOf(f.id);
						v > -1 && _.childrenIds.splice(v, 1);
					}
					l.push(f);
				}
			}
		}
		n.roots = [];
		for (var d = 0; d < l.length; d++) n.roots.push(l[d].id);
	}
	if (i == e.action.exporting && a.id != null) if (a.parentLevels) {
		for (var _ = c[a.id], y = 0; y < a.parentLevels && c[_.pid];) y++, _ = c[_.pid];
		_.pid = null, l = [_];
	} else {
		var b = c[a.id];
		b && (b.pid = null, l = [b]);
	}
	var x = [];
	if (i == e.action.init && n.expand && n.expand.nodes && s == null) for (var d = 0; d < n.expand.nodes.length; d++) {
		var b = c[n.expand.nodes[d]];
		for (n.expand.allChildren === !0 && e.manager._addExpandedNodeIdsIterate(b, c, x); b;) x.push(b.id), b.pid == null && b.stpid != null ? (b = c[b.stpid], b.min = !1) : b = c[b.pid];
	}
	else if (i == e.action.expand && a.ids && a.ids != "all" || i == e.action.collapse && a && a.expandIds) for (var S = i == e.action.expand ? a.ids : a.expandIds, d = 0; d < S.length; d++) for (var b = c[S[d]], _ = c[b.pid]; _;) x.push(_.id), _.pid == null && _.stpid != null ? (_ = c[_.stpid], _.min = !1) : _ = c[_.pid];
	else if (i == e.action.centerNode) {
		for (var C = e._getCenterNodeFromParams(c, a); C;) {
			if (x.push(C.id), a.options.parentState === e.COLLAPSE_PARENT_NEIGHBORS && C) for (var d = 0; d < C.childrenIds.length; d++) {
				var w = c[C.childrenIds[d]];
				w.collapsed = !0;
			}
			if (C.pid == null && C.stpid != null) {
				if (C = c[C.stpid], C.min = !1, C.tags) {
					var v = C.tags.indexOf("filter");
					v != -1 && (C.tags.splice(v, 1), t.filterUI._removeFilter(C.id));
				}
			} else C = c[C.pid];
		}
		if (C = e._getCenterNodeFromParams(c, a), a.options.childrenState === e.COLLAPSE_SUB_CHILDRENS) for (var d = 0; d < C.childrenIds.length; d++) {
			var T = c[C.childrenIds[d]];
			T.collapsed = !1;
			for (var E = 0; E < T.childrenIds.length; E++) {
				var D = c[T.childrenIds[E]];
				D.collapsed = !0;
			}
		}
		if (a.options.parentState === e.COLLAPSE_PARENT_SUB_CHILDREN_EXCEPT_CLICKED) {
			var _ = c[C.pid];
			if (_) for (var d = 0; d < _.childrenIds.length; d++) {
				var T = c[_.childrenIds[d]];
				if (T != C) {
					T.collapsed = !1;
					for (var E = 0; E < T.childrenIds.length; E++) {
						var D = c[T.childrenIds[E]];
						D.collapsed = !0;
					}
				}
			}
		}
	} else if (i == e.action.insert) for (var b = c[a.insertedNodeId]; b;) x.push(b.id), b.pid == null && b.stpid != null ? (b = c[b.stpid], b.min = !1) : b = c[b.pid];
	for (var O = [], k = {}, A = [], j = {}, M = [], d = 0; d < l.length; d++) e.manager._iterate(l[d], l[d], c, 0, O, k, A, j, "", x, M, t);
	if (i == e.action.collapse && a && Array.isArray(a.expandIds) && Array.isArray(a.collapseIds)) for (var d = 0; d < a.ids.length; d++) if (a.expandIds.has(a.collapseIds[d])) console.error(`id ${a.collapseIds[d]} exist in both collapseIds and expandIds`);
	else {
		var b = c[a.collapseIds[d]];
		b && (b.collapsed = !0);
	}
	for (var d = l.length - 1; d >= 0; d--) l[d].collapsed && l.splice(d, 1);
	for (var d = 0; d < M.length; d++) {
		for (var b = c[M[d]], N = [], P = [], F = [], I = {}, ee = 0, L = 0, te = 0, ne = [], re = [], E = 0; E < b.children.length; E++) {
			var w = b.children[E];
			w.isAssistant ? N.push(w.id) : w.tags.indexOf("right-partner") == -1 ? w.tags.indexOf("left-partner") == -1 ? w.tags.indexOf("partner") != -1 && !(ee % 2) ? (w.isPartner = 1, w.children = [], P.push(w.id), ee++) : w.tags.indexOf("partner") != -1 && ee % 2 ? (w.isPartner = 2, w.children = [], F.push(w.id), ee++) : w.parentPartner ? (I[w.parentPartner.id] || (I[w.parentPartner.id] = []), I[w.parentPartner.id].push(w.id)) : N.push(w.id) : (w.isPartner = 2, w.children = [], F.push(w.id)) : (w.isPartner = 1, w.children = [], P.push(w.id));
		}
		b.children = [];
		for (var ie = [], E = 0; E < P.length; E++) {
			var w = c[P[E]];
			I[w.id] ? b.children.push(w) : b.children.splice(0, 0, w);
			for (var R = 0; R < w.childrenIds.length; R++) ie.push(w.childrenIds[R]);
		}
		for (var z = [], E = 0; E < F.length; E++) {
			var w = c[F[E]];
			I[w.id] ? b.children.push(w) : b.children.splice(0, 0, w);
			for (var R = 0; R < w.childrenIds.length; R++) z.push(w.childrenIds[R]);
		}
		for (var E = 0; E < z.length; E++) {
			var w = c[z[E]];
			w.collapsed || (w.parentPartner = w.parent, w.parent = b, w.isChildOfPartner = !0, b.children.push(w));
		}
		for (var E = F.length - 1; E >= 0; E--) if (I[F[E]]) for (var g = 0; g < I[F[E]].length; g++) b.children.push(c[I[F[E]][g]]), L++, re.indexOf(F[E]) == -1 && re.push(F[E]);
		for (var E = 0; E < N.length; E++) {
			var w = c[N[E]];
			b.children.push(w);
		}
		for (var E = 0; E < P.length; E++) if (I[P[E]]) for (var g = 0; g < I[P[E]].length; g++) b.children.push(c[I[P[E]][g]]), te++, ne.indexOf(P[E]) == -1 && ne.push(P[E]);
		for (var E = 0; E < ie.length; E++) {
			var w = c[ie[E]];
			w.collapsed || (w.parentPartner = w.parent, w.parent = b, w.isChildOfPartner = !0, b.children.push(w));
		}
		b.partnerSeparation = Math.max(re.length, ne.length) * n.partnerChildrenSplitSeparation + n.minPartnerSeparation, !N.length && L && !te ? b.hasPartners = 2 : !N.length && !L && te ? b.hasPartners = 3 : !N.length && L == 1 && te == 1 ? b.hasPartners = 4 : !N.length && !L && !te ? b.hasPartners = 5 : N.length && !L && !te ? b.hasPartners = 6 : N.length && (L || te) ? b.hasPartners = 7 : b.hasPartners = 1;
	}
	for (var d = 0; d < A.length; d++) for (var b = c[A[d]], ae = b.lcn ? b.lcn : "base", oe = r[ae], E = 0; E < b.subLevels; E++) {
		var B = new e.node(b.id + "_sub_level_index_" + E, b.pid, [], "subLevel");
		e.manager._initDinamicNode(B, b.lcn);
		var _ = b.parent;
		if (_) {
			b.movex != null && (B.movex = b.movex), b.movey != null && (B.movey = b.movey);
			var v = _.children.indexOf(b);
			v > -1 && (_.children.splice(v, 1), _.children.splice(v, 0, B)), B.children.push(b), B.parent = _, b.parent = B, c[B.id] = B;
		}
	}
	for (var V in k) {
		var _ = c[V];
		_.hasAssistants = !0;
		var B = new e.node(_.id + "_split_assitant_0", _.id, ["assistant"], "split");
		_.movex != null && (B.movex = _.movex), _.movey != null && (B.movey = _.movey), e.manager._initDinamicNode(B, _.lcn, !0), c[B.id] = B;
		for (var H = [], E = _.children.length - 1; E >= 0; E--) {
			var w = _.children[E];
			w.isAssistant ? (w.parent = null, _.children.splice(E, 1), H.splice(0, 0, w.id)) : w.isPartner || (w.parent && j[w.parent.id] && B && w.parent.id != B.id && (Object.defineProperty(j, B.id, Object.getOwnPropertyDescriptor(j, w.parent.id)), delete j[w.parent.id]), w.parent = B, B.children.unshift(w), _.children.splice(E, 1));
		}
		if (H.length % 2) {
			var U = c[H[H.length - 1]], se = new e.node(U.id + "_mirror", _.pid, [], "mirror");
			e.manager._initDinamicNode(se, U.lcn, !0), se.isAssistant = !0, se.w = U.w, se.h = U.h, c[se.id] = se, H.splice(H.length - 1, 0, se.id);
		}
		for (var ce = 1, E = H.length - 1; E >= 0; E--) if (E % 2 && E != H.length - 1) {
			var W = new e.node(_.id + "_split_assitant_" + ce, _.pid, [], "split");
			e.manager._initDinamicNode(W, _.lcn, !0), _.movex != null && (W.movex = _.movex), _.movey != null && (W.movey = _.movey), c[W.id] = W, H.splice(E, 0, W.id), ce++;
		} else E % 2 && H.splice(E, 0, B.id);
		for (var E = 0; E < H.length; E += 3) {
			var G = null;
			G = E == 0 ? _ : c[H[E - 2]];
			var le = c[H[E]], K = c[H[E + 1]], q = c[H[E + 2]];
			le.parent = G, K.parent = G, q.parent = G, G.children.push(le), G.children.push(K), G.children.push(q);
		}
	}
	var ue = !1;
	for (var J in r) {
		var oe = r[J];
		if (oe.layout != 0) {
			ue = !0;
			break;
		}
	}
	var de = e.events.has("node-layout", t._event_id);
	if (ue || de) {
		var Y = {
			nodes: c,
			config: n,
			action: i,
			actionParams: a
		};
		if (A.length) {
			var fe = !1;
			for (var V in j) {
				for (var S = j[V], d = 0; d < S.length; d++) {
					var b = c[S[d]];
					if (b.subLevels) {
						fe = !0;
						break;
					}
				}
				if (fe) break;
			}
			if (fe) {
				var X = {}, pe = {}, me = {};
				for (var V in j) for (var S = j[V], he = !1, ge = null, d = 0; d < S.length; d++) {
					var _e = S[d];
					(ge === null || A.has(_e)) && (ge = c[_e].parent.id, !he && !e.isNEU(c[_e].subLevels) && (he = c[_e].subLevels > 0)), X[ge] || (X[ge] = []), X[ge].push(_e), he && (me[ge] = V, pe[ge] || (pe[ge] = []), pe[ge].push(_e));
				}
				for (var V in j = {}, pe) if (pe[V].length > e.MIXED_LAYOUT_IF_NUMBER_OF_CHILDREN_IS_MORE_THEN) for (var ve = me[V], d = c[ve].children.length - 1; d >= 0; d--) {
					var w = c[ve].children[d];
					pe[V].has(w.id) && c[ve].children.splice(d, 1);
				}
				for (var V in X) X[V].length > e.MIXED_LAYOUT_IF_NUMBER_OF_CHILDREN_IS_MORE_THEN && (j[V] = X[V]);
			}
		}
		for (var V in j) {
			for (var _ = c[V], Z = _; Z.isSplit;) Z = c[Z.pid];
			for (; Z.isSubLevel;) Z = c[Z.pid];
			var ae = _.lcn ? _.lcn : "base", oe = r[ae];
			if (oe.layout != 0 || de) {
				Y.pnode = _, Y.layout = oe.layout, Y.layoutGridColumns = n.layoutGridColumns, Y.childrenIds = j[V], Y.lastChildrenPidIds = j, Y.subLevels = 0, Y.layouts = [], e.events.publish("node-layout", [t, Y]), e.events.publish("layout", [Y]), Y.layouts.length || Y.layouts.push({
					layout: Y.layout,
					childrenIds: Y.childrenIds,
					subLevels: Y.subLevels,
					layoutGridColumns: Y.layoutGridColumns
				});
				for (var ye = 0; ye < Y.layouts.length; ye++) {
					var Q = Y.layouts[ye];
					for (e.isNEU(Q.subLevels) && (Q.subLevels = 0), e.isNEU(Q.layout) && (Q.layout = oe.layout), _ = c[V], Z = _; Z.isSplit;) Z = c[Z.pid];
					for (; Z.isSubLevel;) Z = c[Z.pid];
					for (var be = _, E = 0; E < Q.subLevels; E++) {
						var B = new e.node(ye + "_sublevel_layout_" + E, be.id, [], "subLevel");
						e.manager._initDinamicNode(B, be.lcn), B.parent = be, be.children.push(B), c[B.id] = B, be = B;
					}
					if (Q.subLevels) {
						for (var E = 0; E < Q.childrenIds.length; E++) {
							var w = c[Q.childrenIds[E]], v = _.children.indexOf(w);
							v != -1 && _.children.splice(v, 1), w.parent = be, be.children.push(w);
						}
						_ = be;
					}
					if (Q.layout == e.layout.grid && Q.childrenIds.length > 2) {
						Q.layoutGridColumns == "dynamic" && (Q.layoutGridColumns = e._getDynamicGridCoulumns(Q.childrenIds.length));
						for (var xe = _.id, d = _.children.length - 1; d >= 0; d--) for (var E = 0; E < Q.childrenIds.length; E++) {
							var _e = Q.childrenIds[E];
							if (_.children[d].id == _e) {
								_.children.splice(d, 1);
								break;
							}
						}
						var Se = Q.layoutGridColumns;
						Se % 2 != 0 && Se > 2 && Se--;
						for (var d = 0; d < Q.childrenIds.length; d += Se) for (var Ce = null, E = 0; E < Se; E++) {
							var we = d + Se >= Q.childrenIds.length;
							if (Q.childrenIds.length - 1 < d + E) break;
							var _e = Q.childrenIds[d + E], w = c[_e];
							w.parent = c[xe], c[xe].children.push(w), we || (Se / 2 - 1 == E && (Ce = new e.node(Q.childrenIds[d + E - 1] + "_grid_pseudo_node_" + Q.childrenIds[d + E + 1], xe, [], "subLevel"), e.manager._initDinamicNode(Ce, _.lcn), Ce.parent = c[xe], c[xe].children.push(Ce), c[Ce.id] = Ce), Se - 1 == E && (xe = Ce.id));
						}
					}
					if (Q.layout == e.layout.mixed) for (var Te = Q.childrenIds, d = Te.length - 1; d >= 0; d--) {
						var w = c[Te[d]];
						_ = w.parent, w.layout = e.layout.mixed;
						for (var E = _.children.length - 1; E >= 0; E--) if (w.id == _.children[E].id) {
							_.children.splice(E, 1);
							break;
						}
						if (d > 0) {
							var Ee = c[Te[d - 1]];
							w.parent = Ee, w.layout = e.layout.mixed, Ee.children.push(w);
						} else _.children.push(w);
					}
					else if (Q.layout > 1) {
						var B = new e.node(ye + "_" + _.id + "_split_0", Z.id, [], "split");
						_.movex != null && (B.movex = _.movex), _.movey != null && (B.movey = _.movey), e.manager._initDinamicNode(B, _.lcn), c[B.id] = B, B.layout = Q.layout;
						for (var $ = [], d = Q.childrenIds.length - 1; d >= 0; d--) {
							for (var w = c[Q.childrenIds[d]], E = 0; E < _.children.length; E++) _.children[E].id == w.id && _.children.splice(E, 1);
							if (w.parent = null, w.layout = Q.layout, (Q.layout == e.layout.treeRightOffset || Q.layout == e.layout.treeRight) && $.splice(0, 0, w.id), Q.layout > 2) {
								var De = new e.node(ye + "_" + w.id + "_mirror", Z.id, [], "mirror");
								e.manager._initDinamicNode(De, w.lcn), De.layout = Q.layout, c[De.id] = De, $.splice(0, 0, De.id);
							}
							Q.layout != e.layout.treeRightOffset && Q.layout != e.layout.treeRight && $.splice(0, 0, w.id);
						}
						for (var ce = 1, E = $.length - 1; E >= 0; E--) if (E % 2 && E != $.length - 1) {
							var W = new e.node(ye + "_" + _.id + "_split_" + ce, Z.id, [], "split");
							e.manager._initDinamicNode(W, _.lcn), _.movex != null && (W.movex = _.movex), _.movey != null && (W.movey = _.movey), W.layout = Q.layout, c[W.id] = W, $.splice(E, 0, W.id), ce++;
						} else E % 2 && $.splice(E, 0, B.id);
						for (var E = 0; E < $.length; E += 3) {
							var G = null;
							E == 0 && (G = _);
							var le = c[$[E]], K = c[$[E + 1]], q = c[$[E + 2]];
							E != 0 && (G = c[$[E - 3]]), E != 0 && !K && (G = c[$[E - 2]]), le.parent = G, G.children.push(le), K && (E != 0 && (G = c[$[E - 2]]), K.parent = G, G.children.push(K)), q && (E != 0 && (G = c[$[E - 1]]), q.parent = G, G.children.push(q));
						}
					}
				}
			}
		}
	}
	if (e.VERTICAL_CHILDREN_ASSISTANT) for (var d = 0; d < l.length; d++) e.manager._verticalAssistantIterate(l[d], c);
	var Y = {
		nodes: c,
		roots: l
	};
	return e.events.publish("nodes-initialized", [t, Y]), {
		nodes: Y.nodes,
		roots: Y.roots,
		rootList: u
	};
}, e.manager._getOrderSortArray = function(e) {
	if (typeof e == "string") return [{
		field: e,
		desc: !1
	}];
	if (Array.isArray(e)) {
		var t = [];
		for (var n of e) typeof n == "string" ? t.push({
			field: n,
			desc: !1
		}) : e instanceof Object ? t.push(n) : console.error("Unseported orderBy value!");
		return t;
	} else if (e instanceof Object) return [e];
	else console.error("Unseported orderBy value!");
}, e.manager._getNodeWidth = function(t, n) {
	switch (n.orientation) {
		case e.orientation.top:
		case e.orientation.top_left:
		case e.orientation.bottom:
		case e.orientation.bottom_left: return t.w;
		case e.orientation.right:
		case e.orientation.right_top:
		case e.orientation.left:
		case e.orientation.left_top: return t.h;
	}
	return 0;
}, e.manager._isVisible = function(t, n, r, i, a, o, s) {
	var c = 0;
	if (e.LAZY_LOADING_FACTOR == "auto") {
		var l = o / a * 2, u = s / a * 2;
		c = Math.ceil(l > u ? l : u);
	} else c = e.LAZY_LOADING_FACTOR / a;
	if (!(t.x == null || t.y == null)) {
		if (e._getLazyLoading(n) && i !== e.action.exporting) {
			function e(e, t) {
				var n = e.x, r = e.y, i = e.w, a = e.h, o = t[0] - c, s = t[2] + c + t[0], l = t[1] - c, u = t[3] + c + t[1], d = n + i > o && s > n;
				return d &&= r + a > l && u > r, d;
			}
			if (e(t, r)) return !0;
			for (var d = 0; d < t.children.length; d++) if (e(t.children[d], r)) return !0;
			return !1;
		}
		return !0;
	}
}, e.manager.getAllFields = function(t) {
	var n = [e.TAGS];
	for (var r in t.nodeBinding) n.push(t.nodeBinding[r]);
	for (var r = 0; r < t.nodes.length; r++) for (var i in t.nodes[r]) i !== e.ID && i !== e.TAGS && i !== e.NODES && i !== e.PID && i !== e.STPID && i !== "movex" && i !== "movey" && (t.nodeBinding[i] || n.has(i) || n.push(i));
	return n;
}, e.manager._getMostDeepChild = function(e) {
	if (!e) return;
	var t = e;
	function n(e) {
		e.sl > t.sl && (t = e);
		for (var r = 0; r < e.children.length; r++) n(e.children[r]);
	}
	return n(e), t;
}, e.manager._getResponse = function(t, n, r, i, a, o, s, c, l, u, d, f, p, m, h) {
	var g = u[0], _ = [], v = {
		top: null,
		left: null,
		bottom: null,
		right: null,
		minX: null,
		maxX: null,
		minY: null,
		maxY: null
	}, y = [
		[],
		[],
		[]
	], b = a - s + i.padding * 2, x = o - c + i.padding * 2, S = e.getScale(l, t, n, i.scaleInitial, i.scaleMax, i.scaleMin, b, x);
	if (v.top = c - i.padding, v.left = s - i.padding, v.bottom = o + i.padding - n / S, v.right = a + i.padding - t / S, v.maxX = a, v.minX = s, v.maxY = o, v.minY = c, u.length == 0 || l == null && !h && i.align == e.CENTER) {
		var C = Math.ceil(t / S), w = Math.ceil(n / S), T = 0, E = 0;
		if (C - i.padding * 2 >= a - s) switch (T = (a + s) / 2 - C / 2, i.orientation) {
			case e.orientation.right:
			case e.orientation.right_top:
				T = (s - a) / 2 - C / 2;
				break;
		}
		else switch (T = g.x - C / 2 + e.manager._getNodeWidth(g, i) / 2, i.orientation) {
			case e.orientation.right:
			case e.orientation.right_top:
				T = -(C / 2 - (s - a) / 2), T < i.padding - C && (T = i.padding - C);
				break;
			case e.orientation.left:
			case e.orientation.bottom_left:
			case e.orientation.top_left:
			case e.orientation.left_top:
				T = -(C / 2 - (a - s) / 2), T > -i.padding && (T = -i.padding);
				break;
		}
		if (w - i.padding * 2 >= o - c) switch (E = (o + c) / 2 - w / 2, i.orientation) {
			case e.orientation.bottom:
			case e.orientation.bottom_left:
				E = (c - o) / 2 - w / 2;
				break;
		}
		else switch (E = -(w / 2 - (o - c) / 2), E > -i.padding && (E = -i.padding), i.orientation) {
			case e.orientation.bottom:
			case e.orientation.bottom_left:
				E = -(w / 2 - (c - o) / 2), E < i.padding - w && (E = i.padding - w);
				break;
			case e.orientation.left:
			case e.orientation.right:
				E = g.y - w / 2 + e.manager._getNodeWidth(g, i) / 2;
				break;
		}
		l = [
			T,
			E,
			C,
			w
		];
	} else if (l == null && !h && i.align == e.ORIENTATION) {
		var C = Math.ceil(t / S), w = Math.ceil(n / S), T = 0, E = 0;
		switch (i.orientation) {
			case e.orientation.top:
				T = g.x - C / 2 + e.manager._getNodeWidth(g, i) / 2, E = -i.padding;
				break;
			case e.orientation.bottom:
				T = g.x - C / 2 + e.manager._getNodeWidth(g, i) / 2, E = i.padding - w;
				break;
			case e.orientation.left:
				T = -i.padding, E = g.y - w / 2 + e.manager._getNodeWidth(g, i) / 2;
				break;
			case e.orientation.right:
				T = i.padding - C, E = g.y - w / 2 + e.manager._getNodeWidth(g, i) / 2;
				break;
			case e.orientation.top_left:
				T = -i.padding, E = -i.padding;
				break;
			case e.orientation.right_top:
				T = i.padding - C, E = -i.padding;
				break;
			case e.orientation.left_top:
				T = -i.padding, E = -i.padding;
				break;
			case e.orientation.bottom_left:
				T = -i.padding, E = i.padding - w;
				break;
		}
		l = [
			T,
			E,
			C,
			w
		];
	}
	if (d == e.action.centerNode || d == e.action.maximize) {
		var D = e._getCenterNodeFromParams(p, f);
		f.options.horizontal == 1 && (l[0] = D.x + D.w / 2 - l[2] / 2), f.options.vertical == 1 && (l[1] = D.y + D.h / 2 - l[3] / 2);
	}
	if (d == e.action.insert || d == e.action.expand || d == e.action.collapse || d == e.action.update || d == e.action.centerNode) {
		var O = null;
		if (d == e.action.insert && f && f.insertedNodeId != null && f.insertedNodeId != null) O = p[f.insertedNodeId];
		else if (d == e.action.update && f && f.visId != null && f.visId != null) O = p[f.visId];
		else if ((d == e.action.expand || d == e.action.collapse) && f && f.id != null && f.id != null) O = p[f.id], O = e.manager._getMostDeepChild(O);
		else if (d == e.action.centerNode) {
			switch (i.orientation) {
				case e.orientation.top:
				case e.orientation.top_left:
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					f.options.vertical || (O = p[f.id]);
					break;
				case e.orientation.right:
				case e.orientation.right_top:
				case e.orientation.left:
				case e.orientation.left_top:
					f.options.horizontal || (O = p[f.id]);
					break;
			}
			O &&= e.manager._getMostDeepChild(O);
		}
		if (!e.FIXED_POSITION_ON_CLICK && O) {
			if (O.isTreeListItem) {
				for (; !O.stParent;) O = O.parent;
				O = O.stParent;
			}
			switch (i.orientation) {
				case e.orientation.top:
				case e.orientation.top_left:
					var k = O.y + O.h - l[3] + i.padding;
					l[1] < k && (l[1] = k);
					break;
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					var k = O.y - i.padding;
					l[1] > k && (l[1] = k);
					break;
				case e.orientation.right:
				case e.orientation.right_top:
					var k = O.x - i.padding;
					l[0] > k && (l[0] = k);
					break;
				case e.orientation.left:
				case e.orientation.left_top:
					var k = O.x + O.w - l[2] + i.padding;
					l[0] < k && (l[0] = k);
					break;
			}
		}
	}
	for (var A = 0; A < u.length; A++) e.manager._iterate2(u[A], p, i, l, d, f, _, m, r, y, S, t, n);
	return {
		animations: y,
		boundary: v,
		viewBox: l,
		visibleNodeIds: _,
		nodes: p,
		allFields: e.manager.getAllFields(i)
	};
}, e.manager._iterate2 = function(t, n, r, i, a, o, s, c, l, u, d, f, p) {
	if (e.manager._isVisible(t, r, i, a, d, f, p)) {
		s.push(t.id);
		var m = null;
		if ((a == e.action.expand || a == e.action.collapse || a == e.action.maximize) && c && c[t.id] && o.method == "expandCollapseToLevel") {
			var h = c[t.id];
			if (m = {
				x: h.x,
				y: h.y
			}, h) {
				m = {
					x: h.x,
					y: h.y
				};
				for (var g = t, _ = null; g != null;) c[g.id] && c[g.id].collapsed && (_ = g), g = g.parent;
				_ && _.parent && (m = {
					x: _.parent.x,
					y: _.parent.y
				});
			}
			var v = n[o.id];
			if (v) {
				for (var g = t.parent; g != null;) g = g.parent;
				g && (m = {
					x: v.x + v.w / 2 - t.w / 2,
					y: v.y + v.h / 2 - t.h / 2
				});
			}
		} else if ((a == e.action.expand || a == e.action.collapse) && c && c[t.id]) {
			var h = c[t.id];
			if (m = {
				x: h.x,
				y: h.y
			}, o.ids == "all" && h) {
				m = {
					x: h.x,
					y: h.y
				};
				for (var g = t, _ = null; g != null;) c[g.id] && c[g.id].collapsed && (_ = g), g = g.parent;
				_ && _.parent && (m = {
					x: _.parent.x,
					y: _.parent.y
				});
			}
			var v = n[o.id];
			if (v) {
				for (var g = t.parent; g != null && o.ids.indexOf(t.id) == -1 && o.ids.indexOf(g.id) == -1;) g = g.parent;
				g && (m = {
					x: v.x + v.w / 2 - t.w / 2,
					y: v.y + v.h / 2 - t.h / 2
				});
			}
		} else if (a == e.action.centerNode && c && c[t.id]) {
			var h = c[t.id];
			h.x != null && h.y != null && (m = {
				x: h.x,
				y: h.y
			});
			var y = e._getCenterNodeFromParams(n, o);
			if (y && y == t) {
				var g = t.parent;
				g && g.id == o.id && (m = {
					x: y.x + y.w / 2 - t.w / 2,
					y: y.y + y.h / 2 - t.h / 2
				});
			}
		} else if (a == e.action.maximize && c && c[t.id]) {
			var h = c[t.id];
			h.x != null && h.y != null && (m = {
				x: h.x,
				y: h.y
			});
			var y = e._getCenterNodeFromParams(n, o);
			if (y && y == t) {
				var g = t.parent;
				g && g.id == o.id && (m = {
					x: y.x + y.w / 2 - t.w / 2,
					y: y.y + y.h / 2 - t.h / 2
				});
			}
		} else if (a == e.action.minimize && c && c[t.id]) {
			var h = c[t.id];
			m = {
				x: h.x,
				y: h.y
			};
		} else if (a == e.action.insert && o && o.insertedNodeId == t.id && t.parent) m = {
			x: t.parent.x,
			y: t.parent.y
		};
		else if ((a == e.action.update || a == e.action.insert) && c) {
			var h = c[t.id];
			if ((!h || e.isNEU(h.x) && e.isNEU(h.y)) && o) {
				var v = n[o.id];
				if (v) {
					for (var g = v; g && g.id == t.id;) g = g.parent;
					g && (m = {
						x: v.x,
						y: v.y
					});
				}
			} else h && (m = {
				x: h.x,
				y: h.y
			});
		} else a !== e.action.exporting && a !== e.action.init && l.indexOf(t.id) == -1 && (u[0].push(t.id), u[1].push({ opacity: 0 }), u[2].push({ opacity: 1 }));
		m != null && m.x != null && m.y != null && (m.x != t.x || m.y != t.y) && !(o && o.dragNodeIdList && o.dragNodeIdList.indexOf(t.id) != -1) && !t.isSplit && (u[0].push(t.id), u[1].push({ transform: [
			1,
			0,
			0,
			1,
			m.x,
			m.y
		] }), u[2].push({ transform: [
			1,
			0,
			0,
			1,
			t.x,
			t.y
		] }));
	}
	for (var b = 0; b < t.stChildren.length; b++) e.manager._iterate2(t.stChildren[b], n, r, i, a, o, s, c, l, u, d, f, p);
	for (var b = 0; b < t.children.length; b++) e.manager._iterate2(t.children[b], n, r, i, a, o, s, c, l, u, d, f, p);
}, e.manager._addExpandedNodeIdsIterate = function(t, n, r) {
	for (var i = 0; i < t.childrenIds.length; i++) r.push(t.childrenIds[i]), e.manager._addExpandedNodeIdsIterate(n[t.childrenIds[i]], n, r);
}, e.manager._setChildCountPropsIterate = function(t, n) {
	t.w === void 0 && (t.collapsedChildCount = t.childrenIds.length), t.deepChildCount = t.childCount = t.childrenIds.length, t.deepCollapsedChildCount = t.collapsedChildCount;
	for (var r = n[t.pid]; r;) r.deepCollapsedChildCount += t.collapsedChildCount, r.deepChildCount += t.childCount, r = n[r.pid];
	for (var i of t.stChildrenIds) e.manager._setChildCountPropsIterate(n[i], n);
	for (var i of t.childrenIds) e.manager._setChildCountPropsIterate(n[i], n);
}, e.manager._setMinMaxXYAdjustifyIterate = function(t, n, r, i, a, o, s, c) {
	t.x += o.x, t.y += o.y;
	for (var l of t.stChildren) e.manager._setMinMaxXYAdjustifyIterate(l, l, r, 0, a, o, s, c);
	t.isPartner ? t.sl = i - 1 : t.sl = i, a[n.id] ?? (a[n.id] = {}), a[n.id][t.sl] ?? (a[n.id][t.sl] = {
		minX: null,
		minY: null,
		maxX: null,
		maxY: null
	}), t.layout ? (c[n.id] ?? (c[n.id] = {}), c[n.id][t.sl] ?? (c[n.id][t.sl] = t)) : e._setMinMaxXY(t, a[n.id][t.sl], !0), t.movex != null && (t.x += t.movex), t.movey != null && (t.y += t.movey), e._setMinMaxXY(t, r, !0), i++;
	for (var l of t.children) e.manager._setMinMaxXYAdjustifyIterate(l, n, r, i, a, o, s, c);
}, e.manager._doNotChangePositionOfClickedNodeIfAny = function(t, n, r, i, a, o) {
	if (r != e.action.expand && r != e.action.collapse && r != e.action.minimize && r != e.action.maximize && r != e.action.centerNode && r != e.action.update && r != e.action.insert) return {
		x: 0,
		y: 0
	};
	if (r == e.action.update && (!i || i.id == null)) {
		if (!t || !t.length) return {
			x: 0,
			y: 0
		};
		i = { id: t[0].id };
	}
	if (i.id == null) return {
		x: 0,
		y: 0
	};
	var s = i.id;
	(r == e.action.minimize && n[s].parent || r == e.action.maximize && n[s].parent) && (s = n[s].pid);
	var c = n[s], l = a[s];
	if (!l) return {
		x: 0,
		y: 0
	};
	var u = l.movex == null ? 0 : l.movex, d = l.movey == null ? 0 : l.movey, f = {
		x: (l.x ? l.x - u : 0) - c.x,
		y: (l.y ? l.y - d : 0) - c.y
	};
	return c && c.isTreeListItem ? {
		x: 0,
		y: 0
	} : f;
}, e.manager._verticalAssistantIterate = function(t, n) {
	for (var r = 0; r < t.stChildren.length; r++) e.manager._verticalAssistantIterate(t.stChildren[r], n);
	if (t.children.length == 3) e.manager._verticalAssistantIterate(t.children[0], n), e.manager._verticalAssistantIterate(t.children[2], n), e.manager._verticalAssistantIterate(t.children[1], n);
	else for (var r = 0; r < t.children.length; r++) e.manager._verticalAssistantIterate(t.children[r], n);
	if (t.isAssistant && t.isSplit && t.children.length) {
		for (var i = t.parent.children[0], a = t.parent.children[2], o = t.parent; !o.hasAssistants;) o = o.parent;
		var s = { max: 0 }, c = { max: 0 };
		e.manager._verticalAssistantLevelCountIterate(i, 0, s), e.manager._verticalAssistantLevelCountIterate(a, 0, c);
		for (var l = Math.max(s.max, c.max), u = [], r = 0; r < l; r++) {
			var d = new e.node(t.parent.id + "_split_assitant_level_" + r, t.pid, [], "subLevel");
			e.manager._initDinamicNode(d, t.lcn, !0), o.movex != null && (d.movex = o.movex), o.movey != null && (d.movey = o.movey), r > 0 && (u[r - 1].children.push(d), d.parent = u[r - 1]), n[d.id] = d, u.push(d);
		}
		if (u.length) {
			for (var f = u[u.length - 1], p = u[0], m = t.children.length - 1; m >= 0; m--) {
				var h = t.children[m];
				f.children.unshift(h), h.parent = f, t.children.splice(m, 1);
			}
			t.children.push(p), p.parent = t;
		}
	}
}, e.manager._verticalAssistantLevelCountIterate = function(t, n, r) {
	r.max < n && (r.max = n), n++;
	for (var i = 0; i < t.children.length; i++) e.manager._verticalAssistantLevelCountIterate(t.children[i], n, r);
}, e._addDottedLines = function(e) {
	var t = e.nodes;
	if ((e.groupDottedLines.length || e.dottedLines.length) && (t = JSON.parse(JSON.stringify(t))), e.groupDottedLines.length) for (var n = [], r = 0; r < e.groupDottedLines.length; r++) {
		var i = e.groupDottedLines[r];
		i.rootId ??= i.to;
		var a = `balkan_group_dotted_${i.rootId}`;
		if (!n.has(a)) {
			for (var o = 0; o < t.length; o++) if (t[o].id == i.rootId) {
				var s = JSON.parse(JSON.stringify(t[o]));
				s.id = `balkan_group_dotted_${i.rootId}_balkan_id_${t[o].id}`, s.pid = void 0, s.stpid = t[o].id, t.push(s), n.push(a), t[o].tags || (t[o].tags = []), t[o].tags.push("group-dotted-lines"), t[o].tags.push("group-dotted-lines-" + a);
				break;
			}
		}
		for (var o = 0; o < t.length; o++) if (t[o].id == i.from) {
			var s = JSON.parse(JSON.stringify(t[o]));
			if (s.id = `balkan_group_dotted_${i.rootId}_balkan_id_${t[o].id}`, s.pid = `balkan_group_dotted_${i.rootId}_balkan_id_${i.to}`, s.tags) {
				var c = s.tags.indexOf("group-dotted-lines");
				c != -1 && s.tags.splice(c, 1);
			}
			if (s.tags ||= [], s.tags.push("boc-dotted-connector"), i.tags) for (var l = 0; l < i.tags.length; l++) s.tags.push(i.tags[l]);
			t.push(s);
			break;
		}
	}
	if (e.dottedLines.length) for (var r = 0; r < e.dottedLines.length; r++) {
		var u = e.dottedLines[r];
		u.rootId ??= u.to;
		for (var o = 0; o < t.length; o++) if (t[o].id == u.from) {
			var s = JSON.parse(JSON.stringify(t[o]));
			if (s.id = `balkan_dotted_${u.rootId}_balkan_id_${t[o].id}`, u.rootId == u.to ? s.pid = u.to : s.pid = `balkan_dotted_${u.rootId}_balkan_id_${u.to}`, s.tags ||= [], s.tags.push("boc-dotted-connector"), u.tags) for (var l = 0; l < u.tags.length; l++) s.tags.push(u.tags[l]);
			t.push(s);
			break;
		}
	}
	return t;
}, e === void 0 && (e = {}), e.templates = {}, e.templates.base = {
	defs: "",
	size: [250, 120],
	expandCollapseSize: 30,
	linkAdjuster: {
		fromX: 0,
		fromY: 0,
		toX: 0,
		toY: 0
	},
	ripple: {
		radius: 0,
		color: "#e6e6e6",
		rect: null
	},
	assistanseLink: "<path stroke-linejoin=\"round\" stroke=\"#aeaeae\" stroke-width=\"2px\" fill=\"none\" d=\"M{xa},{ya} {xb},{yb} {xc},{yc} {xd},{yd} L{xe},{ye}\"/>",
	svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"display:block;\" width=\"{w}\" height=\"{h}\" viewBox=\"{viewBox}\">{content}</svg>",
	link: "<path stroke-linejoin=\"round\" stroke=\"#aeaeae\" stroke-width=\"1px\" fill=\"none\" d=\"M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}\"/>",
	node: "<rect x=\"0\" y=\"0\" height=\"120\" width=\"250\" fill=\"none\" stroke-width=\"1\" stroke=\"#aeaeae\" rx=\"7\" ry=\"7\"></rect>",
	plus: function(e, t, n, r, i) {
		var a = r.mode == "dark" ? "#1E1E1E" : "#ffffff";
		return `<g transform="matrix(1,0,0,1,${i.x - 15},${i.y - 15})"><circle cx="15" cy="15" r="15" fill="${a}" stroke="#aeaeae" stroke-width="1"></circle>
        <text text-anchor="middle" style="font-size: 14px;cursor:pointer;" fill="#aeaeae" x="15" y="21">${e.deepCollapsedChildCount}</text></g>`;
	},
	minus: function(e, t, n, r, i) {
		var a = r.mode == "dark" ? "#1E1E1E" : "#ffffff";
		return `<g transform="matrix(1,0,0,1,${i.x - 15},${i.y - 15})"><circle cx="15" cy="15" r="15" fill="${a}" stroke="#aeaeae" stroke-width="1"></circle>
            <line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line></g>`;
	},
	nodeMenuButton: "<g style=\"cursor:pointer;\" transform=\"matrix(1,0,0,1,225,105)\"><rect x=\"-4\" y=\"-10\" fill=\"#000000\" fill-opacity=\"0\" width=\"22\" height=\"22\"></rect><circle cx=\"0\" cy=\"0\" r=\"2\" fill=\"#ffffff\"></circle><circle cx=\"7\" cy=\"0\" r=\"2\" fill=\"#ffffff\"></circle><circle cx=\"14\" cy=\"0\" r=\"2\" fill=\"#ffffff\"></circle></g>",
	menuButton: "<div style=\"user-select:none;position:absolute;right:{p}px;top:{p}px; width:30px;height:50px;cursor:pointer;\" " + e.attr.control_export_menu + "=\"\"><hr style=\"background-color: #7A7A7A; height: 3px; border: none;\"><hr style=\"background-color: #7A7A7A; height: 3px; border: none;\"><hr style=\"background-color: #7A7A7A; height: 3px; border: none;\"></div>",
	img_0: "<clipPath id=\"{randId}\"><circle cx=\"60\" cy=\"60\" r=\"40\"></circle></clipPath><image preserveAspectRatio=\"xMidYMid slice\" clip-path=\"url(#{randId})\" xlink:href=\"{val}\" x=\"20\" y=\"20\"  width=\"80\" height=\"80\"></image>",
	link_field_0: "<text text-anchor=\"middle\" fill=\"#aeaeae\" " + e.attr.width + "=\"290\" x=\"0\" y=\"0\" style=\"font-size:10px;\">{val}</text>",
	editFormHeaderColor: "#039BE5",
	treeListMaxHeight: 500
}, e.templates.ana = {
	defs: "",
	size: [250, 120],
	linkAdjuster: {
		fromX: 0,
		fromY: 0,
		toX: 0,
		toY: 0
	},
	ripple: {
		radius: 0,
		color: "#e6e6e6",
		rect: null
	},
	expandCollapseSize: 30,
	svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"  style=\"display:block;\" width=\"{w}\" height=\"{h}\" viewBox=\"{viewBox}\">{content}</svg>",
	link: "<path stroke-linejoin=\"round\" stroke=\"#aeaeae\" stroke-width=\"1px\" fill=\"none\" d=\"{rounded}\" />",
	assistanseLink: "<path stroke-linejoin=\"round\" stroke=\"#aeaeae\" stroke-width=\"2px\" fill=\"none\" d=\"M{xa},{ya} {xb},{yb} {xc},{yc} {xd},{yd} L{xe},{ye}\"/>",
	node: function(e, t, n, r) {
		return `<rect x="0" y="0" height="${e.h}" width="${e.w}" fill="#039BE5" stroke-width="1" stroke="#aeaeae" rx="10" ry="10"></rect>`;
	},
	plus: function(e, t, n, r, i) {
		var a = r.mode == "dark" ? "#1E1E1E" : "#ffffff";
		return `<g transform="matrix(1,0,0,1,${i.x - 15},${i.y - 15})"><circle cx="15" cy="15" r="15" fill="${a}" stroke="#aeaeae" stroke-width="1"></circle>
        <text text-anchor="middle" style="font-size: 14px;cursor:pointer;" fill="#aeaeae" x="15" y="21">${e.deepCollapsedChildCount}</text></g>`;
	},
	minus: function(e, t, n, r, i) {
		var a = r.mode == "dark" ? "#1E1E1E" : "#ffffff";
		return `<g transform="matrix(1,0,0,1,${i.x - 15},${i.y - 15})"><circle cx="15" cy="15" r="15" fill="${a}" stroke="#aeaeae" stroke-width="1"></circle>
            <line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line></g>`;
	},
	up: "<rect x=\"20\" y=\"-25\" width=\"30\" height=\"17\" fill=\"#aeaeae\" rx=\"3\" ry=\"3\"></rect><line x1=\"35\" x2=\"35\" y1=\"0\" y2=\"-8\" stroke=\"#aeaeae\" stroke-width=\"1\"></line>",
	nodeMenuButton: function(e, t, n, r) {
		return `<g transform="matrix(1,0,0,1,${e.w - 25},${e.h - 15})"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>`;
	},
	menuButton: e.templates.base.menuButton,
	img_0: function(t, n, r, i, a) {
		var o = 50, s = 30, c = 40, l = e.randomId();
		return `<clipPath id="${l}"><circle cx="${o}" cy="${s}" r="${c}"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${l})" xlink:href="${a}" x="${o - c}" y="${s - c}" width="${c * 2}" height="${c * 2}" ></image>`;
	},
	link_field_0: "<text text-anchor=\"middle\" fill=\"#aeaeae\" " + e.attr.width + "=\"290\" x=\"0\" y=\"0\" style=\"font-size:10px;\">{val}</text>",
	field_0: function(t, n, r, i, a) {
		return e.wrapText(a, `<text style="font-size: 18px;" fill="#ffffff" x="${t.w / 2}" y="${t.h - 25}" text-anchor="middle"></text>`, t.w - 20, 1);
	},
	field_1: function(t, n, r, i, a) {
		return e.wrapText(a, `<text style="font-size: 14px;" fill="#ffffff" x="${t.w - 20}" y="30" text-anchor="end"></text>`, t.w - 120, 3);
	},
	padding: [
		75,
		5,
		50,
		5
	],
	editFormHeaderColor: "#039BE5",
	treeListMaxHeight: 500
}, e.templates.split = Object.assign({}, e.templates.ana), e.templates.split.size = [10, 10], e.templates.split.node = "<circle cx=\"5\" cy=\"5\" r=\"5\" fill=\"none\" stroke-width=\"1\" stroke=\"#aeaeae\"></circle>", e.templates.split.field_0 = "", e.templates.split.field_1 = "", e.templates.split.img_0 = "", e.templates.dot = Object.assign({}, e.templates.split), e.templates.group = Object.assign({}, e.templates.ana), e.templates.group.size = [250, 120], e.templates.group.padding = [
	50,
	20,
	35,
	20
], e.templates.group.node = "<rect rx=\"50\" ry=\"50\" x=\"0\" y=\"0\" height=\"{h}\" width=\"{w}\" fill=\"#f2f2f2\" stroke-width=\"0\"></rect>", e.templates.group.link = "<path stroke=\"#aeaeae\" stroke-width=\"1px\" fill=\"none\" d=\"M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}\"/>", e.templates.group.nodeMenuButton = "<g style=\"cursor:pointer;\" transform=\"matrix(1,0,0,1,{ew},25)\"><g transform=\"matrix(1,0,0,1,-22,-8)\"><rect x=\"0\" y=\"0\" fill=\"red\" fill-opacity=\"0\" width=\"18\" height=\"22\"></rect><line x1=\"0\" y1=\"2\" x2=\"9\" y2=\"2\" stroke=\"#aeaeae\" stroke-width=\"1\"></line><line x1=\"0\" y1=\"9\" x2=\"18\" y2=\"9\" stroke=\"#aeaeae\" stroke-width=\"1\"></line><line x1=\"0\" y1=\"16\" x2=\"22\" y2=\"16\" stroke=\"#aeaeae\" stroke-width=\"1\"></line></g></g>", e.templates.group.field_0 = "<text " + e.attr.width + "=\"230\" style=\"font-size: 18px;\" fill=\"#aeaeae\" x=\"{cw}\" y=\"30\" text-anchor=\"middle\">{val}</text>", e.templates.group.field_1 = "", e.templates.group.ripple = {
	radius: 50,
	color: "#aeaeae"
}, e.templates.invisibleGroup = Object.assign({}, e.templates.group), e.templates.invisibleGroup.node = "", e.templates.invisibleGroup.padding = [
	0,
	0,
	0,
	0
], e.templates.invisibleGroup.field_0 = "", e.templates.invisibleGroup.nodeMenuButton = "", e.templates.mirror = {
	linkAdjuster: {},
	link: "",
	node: "",
	nodeMenuButton: "",
	size: [0, 0]
}, e.templates.ula = Object.assign({}, e.templates.ana), e.templates.ula.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, "<text style=\"font-size: 18px;\" fill=\"#039BE5\" x=\"100\" y=\"55\"></text>", t.w - 105, 1);
}, e.templates.ula.field_1 = function(t, n, r, i, a) {
	return e.wrapText(a, "<text data-text-overflow=\"multiline\" style=\"font-size: 14px;\" fill=\"#afafaf\" x=\"100\" y=\"76\"></text>", t.w - 105, 3);
}, e.templates.ula.node = function(e, t, n, r) {
	return `<rect x="0" y="0" height="${e.h}" width="${e.w}" fill="#ffffff" stroke-width="1" stroke="#aeaeae"></rect><line x1="0" y1="0" x2="${e.w}" y2="0" stroke-width="2" stroke="#039BE5"></line>`;
}, e.templates.ula.img_0 = function(t, n, r, i, a) {
	var o = 50, s = 60, c = 40, l = e.randomId();
	return `<clipPath id="${l}"><circle cx="${o}" cy="${s}" r="${c}"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${l})" xlink:href="${a}" x="${o - c}" y="${s - c}" width="${c * 2}" height="${c * 2}" ></image>`;
}, e.templates.ula.menu = "<g style=\"cursor:pointer;\" transform=\"matrix(1,0,0,1,225,12)\" " + e.attr.control_node_menu_id + "=\"{id}\"><rect x=\"-4\" y=\"-10\" fill=\"#ffffff\" width=\"22\" height=\"22\"></rect><circle cx=\"0\" cy=\"0\" r=\"2\" fill=\"#039BE5\"></circle><circle cx=\"7\" cy=\"0\" r=\"2\" fill=\"#039BE5\"></circle><circle cx=\"14\" cy=\"0\" r=\"2\" fill=\"#039BE5\"></circle></g>", e.templates.ula.nodeMenuButton = function(e, t, n, r) {
	return `<g transform="matrix(1,0,0,1,${e.w - 25}, ${e.h - 15})"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="7" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="14" cy="0" r="2" fill="#AEAEAE"></circle></g>`;
}, e.templates.ula.padding = [
	110,
	1,
	1,
	1
], e.templates.olivia = Object.assign({}, e.templates.ana), e.templates.olivia.defs = "<style>\n                                    #olivia_gradient {\n                                        --color-stop-1: #ffffff;\n                                        --color-stop-2: #eeeeee;\n                                        --opacity-stop: 1;\n                                    }\n                                    .olivia-f0{\n                                        font-size: 18px;\n                                        fill: #757575;\n                                    }\n                                    .olivia-f1{\n                                        font-size: 14px;\n                                        fill: #757575;\n                                    }\n                                    .boc-dark .olivia-f0,.boc-dark .olivia-f1{\n                                        fill: #aeaeae;\n                                    }\n                                    .boc-dark #olivia_gradient {\n                                        --color-stop-1: #646464;\n                                        --color-stop-2: #363636;\n                                        --opacity-stop: 1;\n                                    }\n                                </style>\n                                <linearGradient id=\"olivia_gradient\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"var(--color-stop-1)\" stop-opacity=\"var(--opacity-stop)\"/><stop offset=\"100%\" stop-color=\"var(--color-stop-2)\" stop-opacity=\"var(--opacity-stop)\" /></linearGradient>", e.templates.olivia.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, "<text class=\"olivia-f0\" x=\"100\" y=\"55\"></text>", t.w - 105, 1);
}, e.templates.olivia.field_1 = function(t, n, r, i, a) {
	return e.wrapText(a, "<text class=\"olivia-f1\" x=\"100\" y=\"76\"></text>", t.w - 105, 3);
}, e.templates.olivia.node = function(e, t, n, r) {
	return `<rect fill="url(#olivia_gradient)" x="0" y="0" height="${e.h}" width="${e.w}" stroke-width="1" stroke="#aeaeae" rx="10" ry="10"></rect>`;
}, e.templates.olivia.img_0 = "<clipPath id=\"{randId}\"><circle cx=\"50\" cy=\"60\" r=\"40\"></circle></clipPath><image preserveAspectRatio=\"xMidYMid slice\" clip-path=\"url(#{randId})\" xlink:href=\"{val}\" x=\"10\" y=\"20\" width=\"80\" height=\"80\" ></image>", e.templates.olivia.nodeMenuButton = function(e, t, n, r) {
	return `<g style="cursor:pointer;" transform="matrix(1,0,0,1,${e.w - 25},${e.h - 15})"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="7" cy="0" r="2" fill="#AEAEAE"></circle><circle cx="14" cy="0" r="2" fill="#AEAEAE"></circle></g>`;
}, e.templates.olivia.padding = [
	110,
	15,
	30,
	15
], e.templates.belinda = Object.assign({}, e.templates.ana), e.templates.belinda.size = [180, 180], e.templates.belinda.ripple = {
	radius: 90,
	color: "#e6e6e6",
	rect: null
}, e.templates.belinda.node = function(e, t, n, r) {
	return `<circle cx="${e.w / 2}" cy="${e.h / 2}" r="${e.w / 2}" fill="#039BE5" stroke-width="1" stroke="#aeaeae"></circle>`;
}, e.templates.belinda.img_0 = function(t, n, r, i, a) {
	var o = t.w / 2, s = 45, c = 40, l = e.randomId();
	return `<clipPath id="${l}"><circle cx="${o}" cy="${s}" r="${c}"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${l})" xlink:href="${a}" x="${o - c}" y="${s - c}" width="${c * 2}" height="${c * 2}" ></image>`;
}, e.templates.belinda.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 18px;" text-anchor="middle" fill="#ffffff"  x="${t.w / 2}" y="${t.h / 2 + 15}"></text>`, t.w - 10, 1);
}, e.templates.belinda.field_1 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 14px;" text-anchor="middle" fill="#ffffff"  x="${t.w / 2}" y="${t.h / 2 + 35}"></text>`, t.w - 20, 2);
}, e.templates.belinda.link = "<path stroke=\"#aeaeae\" stroke-width=\"1px\" fill=\"none\" d=\"M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}\"/>", e.templates.belinda.nodeMenuButton = function(e, t, n, r) {
	return `<g style="cursor:pointer;" transform="matrix(1,0,0,1,${e.w / 2 - 11},5)"><rect x="0" y="0" fill="#000000" fill-opacity="0" width="22" height="22"></rect><line stroke-width="2" stroke="#000" x1="0" y1="3" x2="22" y2="3"></line><line stroke-width="2" stroke="#000" x1="0" y1="9" x2="22" y2="9"></line><line stroke-width="2" stroke="#000" x1="0" y1="15" x2="22" y2="15"></line></g>`;
}, e.templates.rony = Object.assign({}, e.templates.ana), e.templates.rony.svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"background-color:#E8E8E8;display:block;\" width=\"{w}\" height=\"{h}\" viewBox=\"{viewBox}\">{content}</svg>", e.templates.rony.defs = "<filter id=\"{randId}\" x=\"0\" y=\"0\" width=\"200%\" height=\"200%\"><feOffset result=\"offOut\" in=\"SourceAlpha\" dx=\"5\" dy=\"5\"></feOffset><feGaussianBlur result=\"blurOut\" in=\"offOut\" stdDeviation=\"5\"></feGaussianBlur><feBlend in=\"SourceGraphic\" in2=\"blurOut\" mode=\"normal\"></feBlend></filter>", e.templates.rony.size = [180, 250], e.templates.rony.ripple = {
	color: "#F57C00",
	radius: 5,
	rect: null
}, e.templates.rony.padding = [
	250,
	0,
	30,
	0
], e.templates.rony.img_0 = function(t, n, r, i, a) {
	var o = t.w / 2, s = 160, c = 60, l = e.randomId();
	return `<clipPath id="${l}"><circle cx="${o}" cy="${s}" r="${c}"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${l})" xlink:href="${a}" x="${o - c}" y="${s - c}" width="${c * 2}" height="${c * 2}" ></image>`;
}, e.templates.rony.node = function(e, t, n, r) {
	return `<rect filter="url(#{randId})" x="0" y="0" height="${e.h}" width="${e.w}" fill="#ffffff" stroke-width="0" rx="10" ry="10"></rect>'`;
}, e.templates.rony.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 18px;" fill="#039BE5" x="${t.w / 2}" y="40" text-anchor="middle"></text>`, t.w - 15, 1);
}, e.templates.rony.field_1 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 14px;" fill="#F57C00" x="${t.w / 2}" y="60" text-anchor="middle"></text>`, t.w - 15, 3);
}, e.templates.rony.field_2 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 14px;" fill="#FFCA28" x="${t.w / 2}" y="80" text-anchor="middle"></text>`, t.w - 15, 1);
}, e.templates.rony.link = "<path stroke=\"#039BE5\" stroke-width=\"1px\" fill=\"none\" d=\"M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}\"/>", e.templates.rony.plus = function(e, t, n, r, i) {
	return `<g transform="matrix(1,0,0,1,${i.x - 15},${i.y - 15})"><circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#039BE5" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#039BE5"></line><line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#039BE5"></line></g>`;
}, e.templates.rony.minus = function(e, t, n, r, i) {
	return `<g transform="matrix(1,0,0,1,${i.x - 15},${i.y - 15})"><circle cx="15" cy="15" r="15" fill="#ffffff" stroke="#039BE5" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#039BE5"></line></g>`;
}, e.templates.rony.nodeMenuButton = function(e, t, n, r) {
	return `<g transform="matrix(1,0,0,1,${e.w - 25},${e.h - 15})"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#F57C00"></circle><circle cx="7" cy="0" r="2" fill="#F57C00"></circle><circle cx="14" cy="0" r="2" fill="#F57C00"></circle></g>`;
}, e.templates.mery = Object.assign({}, e.templates.ana), e.templates.mery.ripple = {
	color: "#e6e6e6",
	radius: 50,
	rect: null
}, e.templates.mery.node = function(e, t, n, r) {
	return `<rect x="0" y="0" height="${e.h}" width="${e.w}" fill="#ffffff" stroke-width="1" stroke="#686868" rx="50" ry="50"></rect><rect x="0" y="${e.h / 2 - 15}" height="30" width="${e.w}" fill="#039BE5" stroke-width="1"></rect>`;
}, e.templates.mery.link = "<path stroke=\"#aeaeae\" stroke-width=\"1px\" fill=\"none\" d=\"M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}\" />", e.templates.mery.img_0 = function(t, n, r, i, a) {
	var o = t.w / 2, s = t.h / 2, c = 24, l = e.randomId();
	return `<clipPath id="${l}"><circle cx="${o}" cy="${s}" r="${c}"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${l})" xlink:href="${a}" x="${o - c}" y="${s - c}" width="${c * 2}" height="${c * 2}" ></image>`;
}, e.templates.mery.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 18px;" fill="#039BE5" x="${t.w / 2}" y="${t.h / 2 - 30}" text-anchor="middle"></text>`, t.w - 30, 1);
}, e.templates.mery.field_1 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 14px;" fill="#039BE5" x="${t.w / 2}" y="${t.h / 2 + 40}" text-anchor="middle"></text>`, t.w - 30, 1);
}, e.templates.mery.nodeMenuButton = function(e, t, n, r) {
	return `<g transform="matrix(1,0,0,1,${e.w - 25}, ${e.h / 2})"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>`;
}, e.templates.polina = Object.assign({}, e.templates.ana), e.templates.polina.size = [300, 80], e.templates.polina.padding = [
	80,
	15,
	30,
	15
], e.templates.polina.ripple = {
	color: "#e6e6e6",
	radius: 40,
	rect: null
}, e.templates.polina.node = function(e, t, n, r) {
	return `<rect x="0" y="0" height="${e.h}" width="${e.w}" fill="#039BE5" stroke-width="1" stroke="#686868" rx="40" ry="40"></rect>`;
}, e.templates.polina.img_0 = "<clipPath id=\"{randId}\"><circle  cx=\"40\" cy=\"40\" r=\"35\"></circle></clipPath><image preserveAspectRatio=\"xMidYMid slice\" clip-path=\"url(#{randId})\" xlink:href=\"{val}\" x=\"0\" y=\"0\"  width=\"80\" height=\"80\"></image>", e.templates.polina.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, "<text style=\"font-size: 18px;\" fill=\"#ffffff\" x=\"80\" y=\"30\" text-anchor=\"start\"></text>", t.w - 90, 1);
}, e.templates.polina.field_1 = function(t, n, r, i, a) {
	return e.wrapText(a, "<text  style=\"font-size: 14px;\" fill=\"#ffffff\" x=\"80\" y=\"55\" text-anchor=\"start\"></text>", t.w - 90, 1);
}, e.templates.polina.link = "<path stroke=\"#686868\" stroke-width=\"1px\" fill=\"none\" d=\"M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}\" />", e.templates.polina.nodeMenuButton = function(e, t, n, r) {
	return `<g transform="matrix(1,0,0,1,${e.w - 15},33)"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="0" cy="7" r="2" fill="#ffffff"></circle><circle cx="0" cy="14" r="2" fill="#ffffff"></circle></g>`;
}, e.templates.mila = Object.assign({}, e.templates.ana), e.templates.mila.padding = [
	60,
	15,
	120,
	15
], e.templates.mila.node = function(e, t, n, r) {
	return `<rect x="0" y="0" height="${e.h}" width="${e.w}" fill="#039BE5" stroke-width="1" stroke="#aeaeae"></rect><rect x="-5" y="${e.h - 50}" height="30" width="${e.w + 10}" fill="#ffffff" stroke-width="1" stroke="#039BE5"></rect><line x1="-5" x2="0" y1="${e.h - 20}" y2="${e.h - 15}" stroke-width="1" stroke="#039BE5"/><line x1="${e.w + 5}" x2="${e.w}" y1="${e.h - 20}" y2="${e.h - 15}" stroke-width="1" stroke="#039BE5"/>`;
}, e.templates.mila.img_0 = function(e, t, n, r, i) {
	return `<image preserveAspectRatio="xMidYMid slice" xlink:href="${i}" x="20" y="${e.h - 115}"  width="64" height="64"></image>`;
}, e.templates.mila.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 18px;" fill="#039BE5" x="${t.w / 2}" y="${t.h - 28}" text-anchor="middle"></text>`, t.w - 10, 1);
}, e.templates.mila.nodeMenuButton = function(e, t, n, r) {
	return `<g transform="matrix(1,0,0,1,${e.w - 25},${e.h - 10})"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>`;
}, e.templates.diva = Object.assign({}, e.templates.ana), e.templates.diva.size = [200, 170], e.templates.diva.padding = [
	160,
	10,
	30,
	10
], e.templates.diva.node = function(e, t, n, r) {
	return `<rect x="0" y="80" height="${e.h - 80}" width="${e.w}" fill="#039BE5"></rect><circle cx="${e.w / 2}" cy="50" fill="#ffffff" r="50" stroke="#039BE5" stroke-width="2"></circle>`;
}, e.templates.diva.img_0 = function(t, n, r, i, a) {
	var o = t.w / 2, s = 50, c = 45, l = e.randomId();
	return `<clipPath id="${l}"><circle cx="${o}" cy="${s}" r="${c}"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${l})" xlink:href="${a}" x="${o - c}" y="${s - c}" width="${c * 2}" height="${c * 2}" ></image>`;
}, e.templates.diva.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 18px;" fill="#ffffff" x="${t.w / 2}" y="125" text-anchor="middle"></text>`, t.w - 15, 1);
}, e.templates.diva.field_1 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text  style="font-size: 14px;" fill="#ffffff" x="${t.w / 2}" y="145" text-anchor="middle"></text>`, t.w - 15, 1);
}, e.templates.diva.pointer = "<g data-pointer=\"pointer\" transform=\"matrix(0,0,0,0,100,100)\"><radialGradient id=\"pointerGradient\"><stop stop-color=\"#ffffff\" offset=\"0\" /><stop stop-color=\"#039BE5\" offset=\"1\" /></radialGradient><circle cx=\"16\" cy=\"16\" r=\"16\" stroke-width=\"1\" stroke=\"#acacac\" fill=\"url(#pointerGradient)\"></circle></g>", e.templates.diva.nodeMenuButton = function(e, t, n, r) {
	return `<g transform="matrix(1,0,0,1,${e.w - 30}, ${e.h - 15})"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>`;
}, e.templates.luba = Object.assign({}, e.templates.ana), e.templates.luba.svg = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"display:block;background-color: #2E2E2E;\" width=\"{w}\" height=\"{h}\" viewBox=\"{viewBox}\">{content}</svg>", e.templates.luba.defs = "<linearGradient id=\"{randId}\" x1=\"0%\" y1=\"0%\" x2=\"0%\" y2=\"100%\"><stop offset=\"0%\" style=\"stop-color:#646464;stop-opacity:1\" /><stop offset=\"100%\" style=\"stop-color:#363636;stop-opacity:1\" /></linearGradient>", e.templates.luba.node = function(e, t, n, r) {
	return `<rect fill="url(#{randId})" x="0" y="0" height="${e.h}" width="${e.w}" stroke-width="1" stroke="#aeaeae" rx="10" ry="10"></rect>`;
}, e.templates.luba.padding = [
	70,
	10,
	60,
	10
], e.templates.luba.img_0 = function(t, n, r, i, a) {
	var o = 50, s = 25, c = 40, l = e.randomId();
	return `<clipPath id="${l}"><circle cx="${o}" cy="${s}" r="${c}"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${l})" xlink:href="${a}" x="${o - c}" y="${s - c}" width="${c * 2}" height="${c * 2}" ></image>`;
}, e.templates.luba.nodeMenuButton = function(e, t, n, r) {
	return `<g transform="matrix(1,0,0,1,${e.w - 25},${e.h - 15})"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#aeaeae"></circle><circle cx="7" cy="0" r="2" fill="#aeaeae"></circle><circle cx="14" cy="0" r="2" fill="#aeaeae"></circle></g>`;
}, e.templates.luba.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 18px;" fill="#aeaeae" x="${t.w / 2}" y="${t.h - 30}" text-anchor="middle"></text>`, t.w - 15, 1);
}, e.templates.luba.field_1 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text  style="font-size: 14px;" fill="#aeaeae" x="${t.w - 10}" y="30" text-anchor="end"></text>`, t.w - 110, 1);
}, e.templates.luba.plus = "<rect x=\"0\" y=\"0\" width=\"36\" height=\"36\" rx=\"12\" ry=\"12\" fill=\"#2E2E2E\" stroke=\"#aeaeae\" stroke-width=\"1\"></rect><line x1=\"4\" y1=\"18\" x2=\"32\" y2=\"18\" stroke-width=\"1\" stroke=\"#aeaeae\"></line><line x1=\"18\" y1=\"4\" x2=\"18\" y2=\"32\" stroke-width=\"1\" stroke=\"#aeaeae\"></line>", e.templates.luba.minus = "<rect x=\"0\" y=\"0\" width=\"36\" height=\"36\" rx=\"12\" ry=\"12\" fill=\"#2E2E2E\" stroke=\"#aeaeae\" stroke-width=\"1\"></rect><line x1=\"4\" y1=\"18\" x2=\"32\" y2=\"18\" stroke-width=\"1\" stroke=\"#aeaeae\"></line>", e.templates.luba.expandCollapseSize = 36, e.templates.isla = Object.assign({}, e.templates.ana), e.templates.isla.defs = "<filter x=\"-50%\" y=\"-50%\" width=\"200%\" height=\"200%\" filterUnits=\"objectBoundingBox\" id=\"isla-shadow\"><feOffset dx=\"0\" dy=\"4\" in=\"SourceAlpha\" result=\"shadowOffsetOuter1\" /><feGaussianBlur stdDeviation=\"10\" in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\" /><feColorMatrix values=\"0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0\" in=\"shadowBlurOuter1\" type=\"matrix\" result=\"shadowMatrixOuter1\" /><feMerge><feMergeNode in=\"shadowMatrixOuter1\" /><feMergeNode in=\"SourceGraphic\" /></feMerge></filter>", e.templates.isla.size = [180, 120], e.templates.isla.padding = [
	70,
	1,
	60,
	1
], e.templates.isla.node = function(e, t, n, r) {
	return `<rect filter="url(#isla-shadow)" x="0" y="20" rx="10" ry="10" height="${e.h - 20}" width="${e.w}" fill="#FFF" stroke-width="1" stroke="#039BE5" ></rect><rect x="25" y="${e.h - 45}" rx="10" ry="10" height="20" width="${e.w - 50}" fill="#039BE5" stroke-width="3" stroke="#039BE5"></rect><rect fill="#ffffff" stroke="#039BE5" stroke-width="1" x="${e.w / 2 - 20}" y="0" rx="13" ry="13" width="40" height="40"></rect><circle stroke="#FFCA28" stroke-width="3" fill="none" cx="${e.w / 2}" cy="12" r="8"></circle><path d="M${e.w / 2 - 15},34 C${e.w / 2 - 15},17 ${e.w / 2 + 15},17 ${e.w / 2 + 15},34" stroke="#FFCA28" stroke-width="3" fill="none"></path>`;
}, e.templates.isla.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 12px;" fill="#fff" x="${t.w / 2}" y="${t.h - 30}" text-anchor="middle"></text>`, t.w - 60, 1);
}, e.templates.isla.field_1 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text  style="font-size: 13px;" fill="#039BE5" x="${t.w / 2}" y="64" text-anchor="middle"></text>`, t.w - 20, 1);
}, e.templates.isla.img_0 = "", e.templates.isla.img_0 = function(t, n, r, i, a) {
	var o = e.randomId();
	return `<clipPath id="${o}"><rect filter="url(#isla-shadow)" fill="#ffffff" stroke="#039BE5" stroke-width="1" x="${t.w / 2 - 20}" y="0" rx="13" ry="13" width="40" height="40"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${o})" xlink:href="${a}" x="${t.w / 2 - 20}" y="0"  width="40" height="40"></image>`;
}, e.templates.isla.minus = "<circle cx=\"15\" cy=\"15\" r=\"15\" fill=\"#F57C00\" stroke=\"#F57C00\" stroke-width=\"1\"></circle><line x1=\"8\" y1=\"15\" x2=\"22\" y2=\"15\" stroke-width=\"1\" stroke=\"#ffffff\"></line>", e.templates.isla.plus = "<circle cx=\"15\" cy=\"15\" r=\"15\" fill=\"#ffffff\" stroke=\"#039BE5\" stroke-width=\"1\"></circle><line x1=\"4\" y1=\"15\" x2=\"26\" y2=\"15\" stroke-width=\"1\" stroke=\"#039BE5\"></line><line x1=\"15\" y1=\"4\" x2=\"15\" y2=\"26\" stroke-width=\"1\" stroke=\"#039BE5\"></line>", e.templates.isla.nodeMenuButton = function(e, t, n, r) {
	return `<g transform="matrix(1,0,0,1,${e.w / 2 - 7},45)"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#F57C00"></circle><circle cx="7" cy="0" r="2" fill="#F57C00"></circle><circle cx="14" cy="0" r="2" fill="#F57C00"></circle></g>`;
}, e.templates.isla.ripple = {
	radius: 0,
	color: "#F57C00",
	rect: {
		x: 0,
		y: 20,
		width: 180,
		height: 100
	}
}, e.templates.deborah = Object.assign({}, e.templates.polina), e.templates.deborah.size = [150, 150], e.templates.deborah.node = function(e, t, n, r) {
	return `<rect x="0" y="0" height="${e.h}" width="${e.w}" fill="#039BE5" stroke-width="1" stroke="#686868" rx="15" ry="15"></rect>`;
}, e.templates.deborah.img_0 = function(t, n, r, i, a) {
	var o = e.randomId();
	return `<clipPath id="${o}"><rect fill="#ffffff" stroke="#039BE5" stroke-width="1" x="5" y="5" rx="15" ry="15" width="${t.w - 10}" height="${t.h - 10}"></rect></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${o})" xlink:href="${a}" x="5" y="5"  width="${t.w - 10}" height="${t.h - 10}"></image><rect x="3" y="5" height="30" width="${t.w - 6}" fill="#039BE5" opacity="0.5" rx="3" ry="3"></rect><rect x="3" y="${t.h - 35}" height="30" width="${t.w - 6}" fill="#039BE5" opacity="0.5" rx="3" ry="3"></rect>`;
}, e.templates.deborah.field_0 = function(t, n, r, i, a) {
	return e.wrapText(a, "<text style=\"font-size: 18px;\" fill=\"#ffffff\" x=\"15\" y=\"25\" text-anchor=\"start\"></text>", t.w - 25, 1);
}, e.templates.deborah.field_1 = function(t, n, r, i, a) {
	return e.wrapText(a, `<text style="font-size: 11px;" fill="#ffffff" x="15" y="${t.h - 15}" text-anchor="start"></text>`, t.w - 45, 1);
}, e.templates.deborah.nodeMenuButton = function(e, t, n, r) {
	return `<g style="cursor:pointer;" transform="matrix(1,0,0,1,${e.w - 25},${e.h - 20})"><rect x="-4" y="-10" fill="#000000" fill-opacity="0" width="22" height="22"></rect><circle cx="0" cy="0" r="2" fill="#ffffff"></circle><circle cx="7" cy="0" r="2" fill="#ffffff"></circle><circle cx="14" cy="0" r="2" fill="#ffffff"></circle></g>`;
}, e.templates.subLevel = Object.assign({}, e.templates.base), e.templates.subLevel.size = [0, 0], e.templates.subLevel.node = "", e.templates.subLevel.plus = "", e.templates.subLevel.minus = "", e.templates.subLevel.nodeMenuButton = "", e.templates.group_dotted_lines = Object.assign({}, e.templates.group), e.templates.group_dotted_lines.size = [250, 120], e.templates.group_dotted_lines.padding = [
	50,
	20,
	35,
	20
], e.templates.group_dotted_lines.link = "<path stroke-linejoin=\"round\" stroke=\"#aeaeae\" stroke-width=\"1px\" fill=\"none\" d=\"{rounded}\" />", e.templates.group_dotted_lines.node = "<rect rx=\"5\" ry=\"5\" x=\"0\" y=\"0\" height=\"{h}\" width=\"{w}\" fill=\"#e5e5e5\" stroke-width=\"0\"></rect>", e.templates.group_dotted_lines.nodeGroupDottedCloseButton = "<g transform=\"matrix(1,0,0,1,{ew},0)\"><circle cx=\"0.5\" cy=\"21.5\" r=\"12\" fill=\"#F57C00\"></circle>" + e.icon.close(25, 25, "#fff", -13, 8) + "</g>", e.templates.group_dotted_lines.field_0 = "<text data-width=\"230\" style=\"font-size: 18px;\" fill=\"#F57C00\" x=\"20\" y=\"30\" text-anchor=\"start\">Dotted Lines</text>", e.templates.group_dotted_lines.field_1 = "", e.templates.group_dotted_lines.img_0 = "", e.templates.group_dotted_lines.ripple.radius = 5, e.templates.group_dotted_lines.min = Object.assign({}, e.templates.olivia), e.templates.group_dotted_lines.min.nodeGroupDottedOpenButton = "<g transform=\"matrix(1,0,0,1,220,10)\"><rect x=\"0\" y=\"0\" width=\"22\" height=\"22\" stroke=\"#aeaeae\" stroke-width=\"1\" fill=\"#ffffff\" rx=\"5\" ry=\"5\"></rect><text x=\"11\" y=\"16\" text-anchor=\"middle\" style=\"font-size: 14px;\" fill=\"#2A292E\">{children-total-count}</text><rect x=\"0\" y=\"0\" width=\"22\" height=\"22\" style=\"opacity: 0\" stroke=\"#aeaeae\" stroke-width=\"1\" fill=\"red\" rx=\"5\" ry=\"5\"></rect></g>", e.templates.clara = Object.assign({}, e.templates.ana), e.templates.clara.size = [180, 210], e.templates.clara.padding = [
	80,
	7,
	7,
	7
], e.templates.clara.img_0 = function(t, n, r, i, a) {
	var o = 50, s = 30, c = 40;
	t.stChildren.length || (c = 60, o = t.w / 2, s = 70);
	var l = e.randomId();
	return `<clipPath id="${l}"><circle cx="${o}" cy="${s}" r="${c}"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${l})" xlink:href="${a}" x="${o - c}" y="${s - c}" width="${c * 2}" height="${c * 2}" ></image>`;
}, e.templates.clara.treeListMaxHeight = 387, e.templates.clara.field_0 = function(t, n, r, i, a) {
	var o = 65, s = t.w / 2, c = "middle", l = t.w - 100;
	return t.stChildren.length || (c = "middle", s = t.w / 2, o = 160, l = t.w - 20), e.wrapText(a, `<text style="font-size: 20px;" fill="#ffffff" x="${s}" y="${o}" text-anchor="${c}"></text>`, l, 1);
}, e.templates.clara.field_1 = function(t, n, r, i, a) {
	var o = 35, s = t.w - 15, c = "end", l = t.w - 100;
	return t.stChildren.length || (c = "middle", s = t.w / 2, o = 180, l = t.w - 20), e.wrapText(a, `<text style="font-size: 14px;" fill="#ffffff" x="${s}" y="${o}" text-anchor="${c}"></text>`, l, 1);
}, e.templates.clara.nodeMenuButton = function(e, t, n, r) {
	return `<g style="cursor:pointer;" transform="matrix(1,0,0,1, ${e.w - 35}, 2)">
                <rect x="0" y="0" fill="red" style="opacity: 0;"  width="26" height="26"></rect>
                <circle cy="13" cx="6" r="2" fill="#fff"></circle>
                <circle cy="13" cx="13" r="2" fill="#fff"></circle>
                <circle cy="13" cx="20" r="2" fill="#fff"></circle>
        </g>`;
}, e.templates.clara.node = function(e, t, n, r) {
	return `<rect   x="0" y="0" height="${e.h}" width="${e.w}" fill="#039BE5" stroke-width="1" stroke="#aeaeae" rx="10" ry="10"></rect>`;
}, e.templates.treeListItem = Object.assign({}, e.templates.ana), e.templates.treeListItem.size = [350, 60], e.templates.treeListItem.field_0 = function(t, n, r, i, a) {
	var o = t.level * r.expandCollapseSize + 45, s = i.mode == "dark" ? "#ccc" : "#757575";
	return e.wrapText(a, `<text fill="${s}"  x="${o}" y="27" style="font-size:16px;"></text>`, t.w - o - 70, 1);
}, e.templates.treeListItem.field_1 = function(t, n, r, i, a) {
	var o = t.level * r.expandCollapseSize + 45, s = i.mode == "dark" ? "#ccc" : "#757575";
	return e.wrapText(a, `<text fill="${s}" x="${o}" y="47" style="font-size:12px;"></text>`, t.w - o - 70, 1);
}, e.templates.treeListItem.img_0 = function(t, n, r, i, a) {
	var o = t.w - 55, s = t.h / 2, c = t.h / 2 - 4, l = e.randomId();
	return `<clipPath id="${l}"><circle cx="${o}" cy="${s}" r="${c}"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#${l})" xlink:href="${a}" x="${o - c}" y="${s - c}" width="${c * 2}" height="${c * 2}" ></image>`;
}, e.templates.treeListItem.expandCollapseSize = 24, e.templates.treeListItem.plus = function(e, t, n, r) {
	var i = n.expandCollapseSize / 2 + e.level * n.expandCollapseSize, a = e.h / 2;
	a -= n.expandCollapseSize / 2;
	var o = r.mode == "dark" ? "#ccc" : "#757575";
	return `<g transform="matrix(1,0,0,1,${i},${a})"><text x="6" style="font-size: 10px;" fill="${o}" y="15.5" text-anchor="end">${e.deepCollapsedChildCount}</text><path fill="${o}" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /><rect style="opacity: 0" x="-3" y="-3" width="30" height="30"></rect></g>`;
}, e.templates.treeListItem.minus = function(e, t, n, r) {
	var i = n.expandCollapseSize / 2 + e.level * n.expandCollapseSize, a = e.h / 2;
	a -= n.expandCollapseSize / 2;
	var o = r.mode == "dark" ? "#ccc" : "#757575";
	return `<g transform="matrix(1,0,0,1,${i},${a})"><path fill="${o}" d="M7.42,8.59L12,13.17L16.59,8.59L18,10L12,16L6,10L7.42,8.59Z" /><rect style="opacity: 0" x="-3" y="-3" width="30" height="30"></rect></g>`;
}, e.templates.treeListItem.nodeMenuButton = function(e, t, n, r) {
	var i = r.mode == "dark" ? "#ccc" : "#757575";
	return `<g style="cursor:pointer;" transform="matrix(1,0,0,1, ${e.w - 36}, ${e.h / 2 - 13})">
                <rect x="0" y="0" fill="red" style="opacity: 0;"  width="26" height="26"></rect>
                <circle cx="13" cy="6" r="2" fill="${i}"></circle>
                <circle cx="13" cy="13" r="2" fill="${i}"></circle>
                <circle cx="13" cy="20" r="2" fill="${i}"></circle>
        </g>`;
}, e.templates.treeListItem.node = function(e, t, n, r) {
	var i = "", a = "#FFFFFF";
	if (e.isTreeListItem && !e.stParent || e.isTreeListItem && e.stParent && e.stParent.stChildren[0] != e) {
		var o = "#E0E0E0";
		r.mode == "dark" && (o = "#444444"), i = `<line stroke="${o}" stroke-width="1" x1="0" x2="${e.w}" y1="0" y2="0"></line>`;
	}
	return r.mode == "dark" && (a = "#252526"), `<rect fill="${a}" x="0" y="0" height="${e.h}" width="${e.w}"  rx="0" ry="0" ></rect>${i}`;
}, e.ui = {
	_defsIds: {},
	defs: function(t) {
		var n = "";
		for (var r in e.templates) {
			var i = e.templates[r];
			i.defs && (e.ui._defsIds[r] = e.randomId(), n += i.defs.replaceAll("{randId}", e.ui._defsIds[r]));
		}
		return "<defs>" + n + t + "</defs>";
	},
	lonely: function(t) {
		return !t.nodes || !t.nodes.length ? e.IT_IS_LONELY_HERE.replace("{link}", e.RES.IT_IS_LONELY_HERE_LINK) : "";
	},
	pointer: function(t, n, r) {
		if (n === e.action.exporting) return "";
		var i = e.t(t.template, !1, r).pointer;
		return i ||= "", i;
	},
	aiButton: function(e) {
		return e.enableAI ? "<div data-boc-ai-button class=\"boc-ai-button\">AI</div>" : "";
	},
	node: function(t, n, r, i, a, o, s, c, l, u, d) {
		var f = e.t(t.templateName, t.min, l), p = "";
		typeof f.node == "function" ? p = f.node(t, n, f, i) : e.isNEU(f.node) || (p = f.node, p &&= p.replaceAll("{w}", t.w).replaceAll("{h}", t.h)), f.defs && (p = p.replaceAll("{randId}", e.ui._defsIds[t.templateName])), s ??= i.nodeBinding;
		var m = {
			node: t,
			data: n
		};
		for (var h in s) {
			var g = s[h], _;
			n && (_ = n[g]), _ ??= t[g], m.element = f[h], m.value = _;
			var v = !1;
			typeof m.element == "function" && (v = !0, m.element = m.element(t, n, f, i, m.value));
			var y = e._lblIsImg(i, h);
			if (m.name = g, m.field = h, e.events.publish("field", [u, m]) !== !1 && m.value != null && m.value != null && m.element != null) {
				if (v) p += m.element;
				else if (!y || y && !e.isNEU(m.value)) {
					if (!y && typeof m.value == "string") {
						var b = m.element;
						b &&= b.replaceAll("{ew}", t.w - (t.padding ? t.padding[1] : 0)).replaceAll("{cw}", t.w / 2), m.value = e.wrapText(m.value, b);
					}
					var x = m.element.replace("{val}", m.value);
					x = x.replaceAll("{ew}", t.w - (t.padding ? t.padding[1] : 0)).replaceAll("{cw}", t.w / 2).replaceAll("{randId}", e.randomId()).replaceAll("{randId2}", e.randomId()), p += x;
				}
			}
		}
		var S = e._getPosition(r, t, a, o), C = "node";
		Array.isArray(t.tags) && t.tags.length && (C += " " + t.tags.join(" ")), t.layout && (C += " tree-layout"), d && (C += " treelist-pinned");
		var w = "";
		t.lcn && (w = "lcn=\"" + t.lcn + "\"");
		var T = e.nodeOpenTag.replace("{lcn}", w).replace("{id}", t.id).replace("{class}", C).replace("{sl}", t.sl).replace("{level}", t.level).replace("{x}", S.x).replace("{y}", S.y), E = e._getOpacity(r, t);
		return T = T.replace("{opacity}", E), p += e.ui.nodeBtns(i, t, n, c, f, u), p = T + p + e.grCloseTag, p;
	},
	nodeBtns: function(t, n, r, i, a, o) {
		var s = "";
		return t.nodeMenu != null && !n.isSplit && i !== e.action.exporting && (typeof a.nodeMenuButton == "function" ? s += a.nodeMenuButton(n, r, a, t) : e.isNEU(a.nodeMenuButton) || (s += a.nodeMenuButton.replace("{id}", n.id).replace("{cw}", n.w / 2).replace("{ch}", n.h / 2).replace("{ew}", n.w - (n.padding ? n.padding[1] : 0)).replace("{eh}", n.h - (n.padding ? n.padding[2] : 0)))), s &&= `<g style="cursor:pointer;" ${e.attr.control_node_menu_id}="${n.id}">${s}</g>`, t.nodeCircleMenu != null && !n.isSplit && i !== e.action.exporting && (e.isNEU(a.nodeCircleMenuButton) || (s += "<g style=\"cursor:pointer;\" transform=\"matrix(1,0,0,1," + a.nodeCircleMenuButton.x + "," + a.nodeCircleMenuButton.y + ")\" " + e.attr.control_node_circle_menu_id + "=\"" + n.id + "\"><circle cx=\"0\" cy=\"0\" fill=\"" + a.nodeCircleMenuButton.color + "\" r=\"" + a.nodeCircleMenuButton.radius + "\" stroke-width=\"1\" stroke=\"" + a.nodeCircleMenuButton.stroke + "\"></circle><line x1=\"-" + a.nodeCircleMenuButton.radius / 2 + "\" y1=\"-6\" x2=\"" + a.nodeCircleMenuButton.radius / 2 + "\" y2=\"-6\" stroke-width=\"2\" stroke=\"" + a.nodeCircleMenuButton.stroke + "\"></line><line x1=\"-" + a.nodeCircleMenuButton.radius / 2 + "\" y1=\"0\" x2=\"" + a.nodeCircleMenuButton.radius / 2 + "\" y2=\"0\" stroke-width=\"2\" stroke=\"" + a.nodeCircleMenuButton.stroke + "\"></line><line x1=\"-" + a.nodeCircleMenuButton.radius / 2 + "\" y1=\"6\" x2=\"" + a.nodeCircleMenuButton.radius / 2 + "\" y2=\"6\" stroke-width=\"2\" stroke=\"" + a.nodeCircleMenuButton.stroke + "\"></line></g>")), s;
	},
	expandCollapseBtn: function(t, n, r, i, a, o, s) {
		var c = "";
		if (o !== e.action.exporting && !n.isSplit) {
			var l = a[n.lcn ? n.lcn : "base"], u = e.t(n.templateName, n.min, s);
			if (n.childrenIds.length > 0) {
				if (n.hasPartners) {
					for (var d = !1, f = 0; f < n.childrenIds.length; f++) {
						var p = t.getNode(n.childrenIds[f]);
						p && !p.parentPartner && !p.isPartner && (d = !0);
					}
					if (!d) return "";
				}
				var m = e._getDefailtPositionForExpandCollpase(l, n), h = {
					x: m.x + n.x - u.expandCollapseSize / 2,
					y: m.y + n.y - u.expandCollapseSize / 2
				}, g = t.getCollapsedIds(n);
				g.length ? (typeof u.plus == "function" ? (c += e.expcollOpenTag.replace("{id}", n.id).replace("{x}", n.x).replace("{y}", n.y), c += u.plus(n, r, u, i, m)) : (c += e.expcollOpenTag.replace("{id}", n.id).replace("{x}", h.x).replace("{y}", h.y), c += u.plus), c += e.grCloseTag) : (typeof u.minus == "function" ? (c += e.expcollOpenTag.replace("{id}", n.id).replace("{x}", n.x).replace("{y}", n.y), c += u.minus(n, r, u, i, m)) : (c += e.expcollOpenTag.replace("{id}", n.id).replace("{x}", h.x).replace("{y}", h.y), c += u.minus), c += e.grCloseTag), (g.length && typeof u.plus != "function" || !g.length && typeof u.minus != "function") && (c.indexOf("{collapsed-children-count}") != -1 && (c = c.replace("{collapsed-children-count}", n.collapsedChildCount)), c.indexOf("{collapsed-children-total-count}") != -1 && (c = c.replace("{collapsed-children-total-count}", n.deepCollapsedChildCount)), c.indexOf("{children-count}") != -1 && (c = c.replace("{children-count}", n.childCount)), c.indexOf("{children-total-count}") != -1 && (c = c.replace("{children-total-count}", n.deepChildCount)));
			}
			t._nodeHasHiddenParent(n) && (c += e.upOpenTag.replace("{id}", n.id).replace("{x}", n.x).replace("{y}", n.y), c += u.up, c += e.grCloseTag);
		}
		var _ = {
			html: c,
			node: n
		};
		return e.events.publish("renderbuttons", [t, _]), _.html;
	},
	link: function(t, n, r, i, a, o, s) {
		var c = t.lcn ? t.lcn : "base", l = n._layoutConfigs[c], u = e.t(t.templateName, t.min, r), d = [], f = [], p = 0, m = l.levelSeparation / 2;
		t.layout > 0 && (m = l.mixedHierarchyNodesSeparation / 2);
		var h = 0, g = e.getRootOf(t).id, _ = i[g][t.sl], v = void 0;
		if (t.hasPartners) {
			v = {
				ids: [],
				indexes: {},
				ppnodes: {},
				lastLeft: null,
				firstRight: null,
				maxSidePartnersWithChildren: 0,
				rightIds: [],
				leftIds: [],
				partnerChildrenSplitSeparation: n.config.partnerChildrenSplitSeparation
			};
			for (var y = 0; y < t.children.length; y++) {
				var b = t.children[y];
				b.parentPartner ? (v.ppnodes[b.id] = b.parentPartner, v.ids.push(b.id), b.parentPartner.isPartner == 1 ? (v.rightIds.indexOf(b.parentPartner.id) == -1 && v.rightIds.push(b.parentPartner.id), v.indexes[b.id] = v.rightIds.indexOf(b.parentPartner.id), v.firstRight ||= b) : b.parentPartner.isPartner == 2 && (v.leftIds.indexOf(b.parentPartner.id) == -1 && v.leftIds.push(b.parentPartner.id), v.indexes[b.id] = v.leftIds.indexOf(b.parentPartner.id), v.lastLeft = b)) : b.isPartner || (v.lastLeft = b, v.firstRight ||= b);
			}
			v.maxSidePartnersWithChildren = Math.max(v.leftIds.length, v.rightIds.length), h = v.maxSidePartnersWithChildren == 0 ? n.config.minPartnerSeparation / 2 : n.config.minPartnerSeparation / 2 + v.partnerChildrenSplitSeparation * v.maxSidePartnersWithChildren + v.partnerChildrenSplitSeparation / 2;
		}
		for (var y = 0; y < t.children.length; y++) {
			var b = t.children[y], x = i[g][b.sl], S = {
				xa: 0,
				ya: 0,
				xb: 0,
				yb: 0,
				xc: 0,
				yc: 0,
				xd: 0,
				yd: 0,
				x: 0,
				y: 0,
				rotate: 0
			};
			u = e.t(b.templateName, b.min, r);
			var C = u.link;
			if (b.isChildOfPartner) switch (l.orientation) {
				case e.orientation.top:
				case e.orientation.top_left:
					var w = b.layout == 1 ? void 0 : x.minY - (x.minY - _.maxY) / 2;
					S = e.ui._linkTopToBottom(b.parentPartner, b, u, m, w, n);
					break;
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					var w = b.layout == 1 ? void 0 : x.maxY - (x.maxY - _.minY) / 2;
					S = e.ui._linkBottomToTop(b.parentPartner, b, u, m, w, n);
					break;
				case e.orientation.right:
				case e.orientation.right_top:
					var w = b.layout == 1 ? void 0 : x.maxX - (x.maxX - _.minX) / 2;
					S = e.ui._linkRightToLeft(b.parentPartner, b, u, m, w, n);
					break;
				case e.orientation.left:
				case e.orientation.left_top:
					var w = b.layout == 1 ? void 0 : x.minX - (x.minX - _.maxX) / 2;
					S = e.ui._linkLeftToRight(b.parentPartner, b, u, m, w, n);
					break;
			}
			else if (v && v.ids.indexOf(b.id) != -1) switch (l.orientation) {
				case e.orientation.top:
				case e.orientation.top_left:
					S = e.ui._linkPpTop(v, t, b, x, _, u);
					break;
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					S = e.ui._linkPpBottom(v, t, b, x, _, u);
					break;
				case e.orientation.right:
				case e.orientation.right_top:
					S = e.ui._linkPpRight(v, t, b, x, _, u);
					break;
				case e.orientation.left:
				case e.orientation.left_top:
					S = e.ui._linkPpLeft(v, t, b, x, _, u);
					break;
			}
			else {
				var T = b.isAssistant && b.rightNeighbor && b.rightNeighbor.isAssistant && b.parent == b.rightNeighbor.parent, E = b.isAssistant && b.leftNeighbor && b.leftNeighbor.isAssistant && b.parent == b.leftNeighbor.parent;
				if ((T || b.layout > 1) && b.rightNeighbor && b.rightNeighbor.isSplit) switch (l.orientation) {
					case e.orientation.top:
					case e.orientation.top_left:
						S = e.ui._linkRightToLeft(b.rightNeighbor, b, u, m);
						break;
					case e.orientation.bottom:
					case e.orientation.bottom_left:
						S = e.ui._linkRightToLeft(b.rightNeighbor, b, u, m);
						break;
					case e.orientation.right:
					case e.orientation.right_top:
						S = e.ui._linkBottomToTop(b.rightNeighbor, b, u, m);
						break;
					case e.orientation.left:
					case e.orientation.left_top:
						S = e.ui._linkBottomToTop(b.rightNeighbor, b, u, m);
						break;
				}
				else if ((E || b.layout > 1) && b.leftNeighbor && b.leftNeighbor.isSplit) switch (l.orientation) {
					case e.orientation.top:
					case e.orientation.top_left:
						S = e.ui._linkLeftToRight(b.leftNeighbor, b, u, m, n);
						break;
					case e.orientation.bottom:
					case e.orientation.bottom_left:
						S = e.ui._linkLeftToRight(b.leftNeighbor, b, u, m, n);
						break;
					case e.orientation.right:
					case e.orientation.right_top:
						S = e.ui._linkTopToBottom(b.leftNeighbor, b, u, m, n);
						break;
					case e.orientation.left:
					case e.orientation.left_top:
						S = e.ui._linkTopToBottom(b.leftNeighbor, b, u, m, n);
						break;
				}
				else switch (l.orientation) {
					case e.orientation.top:
					case e.orientation.top_left:
						if (b.isPartner == 1) S = e.ui._linkLeftToRight(t, b, u, h);
						else if (b.isPartner == 2) S = e.ui._linkRightToLeft(t, b, u, h);
						else {
							var w = b.layout == 1 ? void 0 : x.minY - (x.minY - _.maxY) / 2;
							S = e.ui._linkTopToBottom(t, b, u, m, w, n);
						}
						break;
					case e.orientation.bottom:
					case e.orientation.bottom_left:
						if (b.isPartner == 1) S = e.ui._linkLeftToRight(t, b, u, h);
						else if (b.isPartner == 2) S = e.ui._linkRightToLeft(t, b, u, h);
						else {
							var w = b.layout == 1 ? void 0 : x.maxY - (x.maxY - _.minY) / 2;
							S = e.ui._linkBottomToTop(t, b, u, m, w, n);
						}
						break;
					case e.orientation.right:
					case e.orientation.right_top:
						if (b.isPartner == 1) S = e.ui._linkTopToBottom(t, b, u, h);
						else if (b.isPartner == 2) S = e.ui._linkBottomToTop(t, b, u, h);
						else {
							var w = b.layout == 1 ? void 0 : x.maxX - (x.maxX - _.minX) / 2;
							S = e.ui._linkRightToLeft(t, b, u, m, w, n);
						}
						break;
					case e.orientation.left:
					case e.orientation.left_top:
						if (b.isPartner == 1) S = e.ui._linkTopToBottom(t, b, u, h);
						else if (b.isPartner == 2) S = e.ui._linkBottomToTop(t, b, u, h);
						else {
							var w = b.layout == 1 ? void 0 : x.minX - (x.minX - _.maxX) / 2;
							S = e.ui._linkLeftToRight(t, b, u, m, w, n);
						}
						break;
				}
			}
			var D, O = e.ui._draggableLinkPath(n, t, b, S, m, l.orientation);
			if (O) D = O, C = C.replaceAll("{rounded}", O).replaceAll("{edge}", O).replaceAll("{curve}", D);
			else if (C.indexOf("{rounded}") != -1) if (S.xa == S.xb && S.xa == S.xc && S.xa == S.xd || S.ya == S.yb && S.ya == S.yc && S.ya == S.yd) D = "M" + S.xa + "," + S.ya + " L" + S.xd + "," + S.yd, C = C.replaceAll("{rounded}", D);
			else if (Math.abs(S.xa - S.xd) <= e.LINK_ROUNDED_CORNERS && Math.abs(S.xa - S.xc) <= e.LINK_ROUNDED_CORNERS && Math.abs(S.xa - S.xb) <= e.LINK_ROUNDED_CORNERS) D = "M" + S.xa + "," + S.ya + " L" + S.xa + "," + S.yd, C = C.replaceAll("{rounded}", D);
			else if (Math.abs(S.ya - S.yd) <= e.LINK_ROUNDED_CORNERS && Math.abs(S.ya - S.yc) <= e.LINK_ROUNDED_CORNERS && Math.abs(S.ya - S.yb) <= e.LINK_ROUNDED_CORNERS) D = "M" + S.xa + "," + S.ya + " L" + S.xd + "," + S.ya, C = C.replaceAll("{rounded}", D);
			else {
				var k = e.ui._roundedEdge(S.xa, S.ya, S.xb, S.yb, S.xc, S.yc), A = e.ui._roundedEdge(S.xb, S.yb, S.xc, S.yc, S.xd, S.yd);
				D = "M" + k.x1 + "," + k.y1 + " " + k.x2 + "," + k.y2 + " Q" + k.qx1 + "," + k.qy1 + " " + k.qx2 + "," + k.qy2 + " L" + A.x2 + "," + A.y2 + " Q" + A.qx1 + "," + A.qy1 + " " + A.qx2 + "," + A.qy2 + " L" + A.x3 + "," + A.y3, C = C.replaceAll("{rounded}", D);
			}
			else C.indexOf("{edge}") == -1 ? C.indexOf("{curve}") == -1 ? (D = C.replaceAll("{xa}", S.xa).replaceAll("{ya}", S.ya).replaceAll("{xb}", S.xb).replaceAll("{yb}", S.yb).replaceAll("{xc}", S.xc).replaceAll("{yc}", S.yc).replaceAll("{xd}", S.xd).replaceAll("{yd}", S.yd), C = D) : (D = "M" + S.xa + "," + S.ya + " C" + S.xb + "," + S.yb + " " + S.xc + "," + S.yc + " " + S.xd + "," + S.yd, C = C.replaceAll("{curve}", D)) : (D = "M" + S.xa + "," + S.ya + " " + S.xb + "," + S.yb + " " + S.xc + "," + S.yc + " L" + S.xd + "," + S.yd, C = C.replaceAll("{edge}", D));
			d.push(e.linkOpenTag.replaceAll("{id}", t.id).replaceAll("{class}", "link " + b.tags.join(" ")).replaceAll("{child-id}", b.id));
			var j = {
				node: t,
				cnode: b,
				p: S,
				html: C,
				action: o
			};
			e.events.publish("render-link", [n, j]), d.push(j.html), s && f.push({
				id: t.id,
				childId: b.id,
				html: j.html
			});
			var M = "";
			for (var N in n.config.linkBinding) {
				var P = n.config.linkBinding[N], F = n._get(b.id);
				F && (j.value = F[P], j.element = u[N], j.name = P, e.events.publish("label", [n, j]) !== !1 && !e.isNEU(j.value) && !e.isNEU(j.element) && (M += j.element.replace("{val}", j.value)));
			}
			if (M != "") {
				var I = S.x, ee = S.y;
				b.movey != null && (ee += b.movey), M = e.linkFieldsOpenTag.replace("{x}", I).replace("{y}", ee).replace("{rotate}", p) + M + e.grCloseTag, d.push(M);
			}
			d.push(e.grCloseTag);
		}
		return s ? f : d.join("");
	},
	svg: function(t, n, r, i, a, o) {
		return e.t(i.template, !1, o).svg.replace("{w}", t).replace("{h}", n).replace("{viewBox}", r).replace("{randId}", e.ui._defsIds[i.template]).replace("{mode}", i.mode).replace("{template}", i.template).replace("{content}", function() {
			return a;
		});
	},
	menuButton: function(t) {
		return t.menu == null ? "" : e.t(t.template, !1).menuButton.replaceAll("{p}", t.padding);
	},
	_roundedEdge: function(t, n, r, i, a, o) {
		var s = e.LINK_ROUNDED_CORNERS, c, l, u, d = 0;
		return t == r && t == a || n == i && n == o ? (c = u = r, l = d = i) : (t != a && r == a && (c = u = r, l = i, n < o ? d = i + s : n > o && (d = i - s)), t < a && r == a ? r -= s : t > a && r == a && (r += s), n != o && i == o && (c = r, l = d = i, t < a ? u = r + s : t > a && (u = r - s)), n < o && i == o ? i -= s : n > o && i == o && (i += s)), {
			x1: t,
			y1: n,
			x2: r,
			y2: i,
			x3: a,
			y3: o,
			qx1: c,
			qy1: l,
			qx2: u,
			qy2: d
		};
	},
	_linkTopToBottom: function(t, n, r, i, a, o) {
		var s = 0, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0;
		s = t.x + t.w / 2 + r.linkAdjuster.toX, c = t.y + t.h + r.linkAdjuster.toY, p = d = n.x + n.w / 2 + r.linkAdjuster.fromX, m = n.y + r.linkAdjuster.fromY, l = s, u = f = t.rightNeighbor && t.rightNeighbor.isAssistant && n.templateName == "split" ? t.rightNeighbor.y + t.rightNeighbor.h + i : t.templateName == "split" && (n.isAssistant || n.layout > 1) ? m : n.templateName == "split" ? c + i : a ?? m - i, h = d, g = e.isNEU(n.parentPartner) ? f + 16 : f;
		var v = {
			xa: s,
			ya: c,
			xb: l,
			yb: u,
			xc: d,
			yc: f,
			xd: p,
			yd: m,
			x: h,
			y: g,
			rotate: _
		};
		return o && e._addConnectorLines(o._connectorLines, v), v;
	},
	_linkBottomToTop: function(t, n, r, i, a, o) {
		var s = 0, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0;
		s = t.x + t.w / 2 + r.linkAdjuster.toX, c = t.y + r.linkAdjuster.toY, p = d = n.x + n.w / 2 + r.linkAdjuster.fromX, m = n.y + n.h + r.linkAdjuster.fromY, l = s, u = f = t.rightNeighbor && t.rightNeighbor.isAssistant && n.templateName == "split" ? t.rightNeighbor.y - i : t.templateName == "split" && (n.isAssistant || n.layout > 1) ? m : n.templateName == "split" ? c - i : a ?? m + i, h = d, g = f - 14;
		var v = {
			xa: s,
			ya: c,
			xb: l,
			yb: u,
			xc: d,
			yc: f,
			xd: p,
			yd: m,
			x: h,
			y: g,
			rotate: _
		};
		return o && e._addConnectorLines(o._connectorLines, v), v;
	},
	_linkRightToLeft: function(t, n, r, i, a, o) {
		var s = 0, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0;
		s = t.x + r.linkAdjuster.toX, c = t.y + t.h / 2 + r.linkAdjuster.toY, p = n.x + n.w + r.linkAdjuster.fromX, m = f = n.y + n.h / 2 + r.linkAdjuster.fromY, u = c, l = d = t.rightNeighbor && t.rightNeighbor.isAssistant && n.templateName == "split" ? t.rightNeighbor.x - i : t.templateName == "split" && (n.isAssistant || n.layout > 1) ? p : n.templateName == "split" ? s - i : a ?? p + i, h = d - 16, g = f, _ = 90;
		var v = {
			xa: s,
			ya: c,
			xb: l,
			yb: u,
			xc: d,
			yc: f,
			xd: p,
			yd: m,
			x: h,
			y: g,
			rotate: _
		};
		return o && e._addConnectorLines(o._connectorLines, v), v;
	},
	_linkLeftToRight: function(t, n, r, i, a, o) {
		var s = 0, c = 0, l = 0, u = 0, d = 0, f = 0, p = 0, m = 0, h = 0, g = 0, _ = 0;
		s = t.x + t.w + r.linkAdjuster.toX, c = t.y + t.h / 2 + r.linkAdjuster.toY, p = n.x + r.linkAdjuster.fromX, m = f = n.y + n.h / 2 + r.linkAdjuster.fromY, u = c, l = d = t.rightNeighbor && t.rightNeighbor.isAssistant && n.templateName == "split" ? t.rightNeighbor.x + t.rightNeighbor.w + i : t.templateName == "split" && (n.isAssistant || n.layout > 1) ? p : n.templateName == "split" ? s + i : a ?? p - i, h = d + 14, g = f, _ = 270;
		var v = {
			xa: s,
			ya: c,
			xb: l,
			yb: u,
			xc: d,
			yc: f,
			xd: p,
			yd: m,
			x: h,
			y: g,
			rotate: _
		};
		return o && e._addConnectorLines(o._connectorLines, v), v;
	},
	_linkPpTop: function(t, n, r, i, a, o) {
		var s = t.ppnodes[r.id], c = s.y + s.h / 2, l = i.minY - (i.minY - a.maxY) / 2, u = (i.minY - a.maxY) / t.maxSidePartnersWithChildren / 4, d = e.ui.__linkPpBottomTop(t, n, r, l, u, s), f = d.x;
		return l = d.mid, e.ui._linkTopToBottom({
			x: f,
			y: c,
			w: 0,
			h: 0
		}, r, o, 0, l);
	},
	_linkPpBottom: function(t, n, r, i, a, o) {
		var s = t.ppnodes[r.id], c = s.y + s.h / 2, l = i.maxY - (i.maxY - a.minY) / 2, u = (i.maxY - a.minY) / t.maxSidePartnersWithChildren / 4, d = e.ui.__linkPpBottomTop(t, n, r, l, u, s), f = d.x;
		return l = d.mid, e.ui._linkBottomToTop({
			x: f,
			y: c,
			w: 0,
			h: 0
		}, r, o, 0, l);
	},
	_linkPpLeft: function(t, n, r, i, a, o) {
		var s = t.ppnodes[r.id], c = i.minX - (i.minX - a.maxX) / 2, l = (i.minX - a.maxX) / t.maxSidePartnersWithChildren / 4, u = s.x + s.w / 2, d = e.ui.__linkPpLeftRight(t, n, r, c, l, s), f = d.y;
		return c = d.mid, e.ui._linkLeftToRight({
			x: u,
			y: f,
			w: 0,
			h: 0
		}, r, o, 0, c);
	},
	_linkPpRight: function(t, n, r, i, a, o) {
		var s = t.ppnodes[r.id], c = i.maxX - (i.maxX - a.minX) / 2, l = (i.maxX - a.minX) / t.maxSidePartnersWithChildren / 4, u = s.x + s.w / 2, d = e.ui.__linkPpLeftRight(t, n, r, c, l, s), f = d.y;
		return c = d.mid, e.ui._linkRightToLeft({
			x: u,
			y: f,
			w: 0,
			h: 0
		}, r, o, 0, c);
	},
	__linkPpBottomTop: function(e, t, n, r, i, a) {
		var o = 0;
		return a.isPartner == 1 ? (o = a.x - t.partnerSeparation / 2 + e.indexes[n.id] * e.partnerChildrenSplitSeparation - (e.rightIds.length - 1) * e.partnerChildrenSplitSeparation / 2, e.lastLeft && o < e.lastLeft.x + e.lastLeft.w / 2 ? o < n.x + n.w / 2 ? r -= (e.indexes[n.id] + 1) * i : r -= (e.rightIds.length - e.indexes[n.id]) * i : o < n.x + n.w / 2 ? r += (e.rightIds.length - e.indexes[n.id]) * i : r += (e.indexes[n.id] + 1) * i) : a.isPartner == 2 && (o = a.x + a.w + t.partnerSeparation / 2 + e.indexes[n.id] * e.partnerChildrenSplitSeparation - (e.leftIds.length - 1) * e.partnerChildrenSplitSeparation / 2, e.firstRight && o > e.firstRight.x + e.firstRight.w / 2 ? o < n.x + n.w / 2 ? r -= (e.indexes[n.id] + 1) * i : r -= (e.leftIds.length - e.indexes[n.id]) * i : o < n.x + n.w / 2 ? r += (e.leftIds.length - e.indexes[n.id]) * i : r += (e.indexes[n.id] + 1) * i), {
			x: o,
			mid: r
		};
	},
	__linkPpLeftRight: function(e, t, n, r, i, a) {
		var o = 0;
		return a.isPartner == 1 ? (o = a.y - t.partnerSeparation / 2 + e.indexes[n.id] * e.partnerChildrenSplitSeparation - (e.rightIds.length - 1) * e.partnerChildrenSplitSeparation / 2, e.lastLeft && o < e.lastLeft.y + e.lastLeft.h / 2 ? o < n.y + n.h / 2 ? r -= (e.indexes[n.id] + 1) * i : r -= (e.rightIds.length - e.indexes[n.id]) * i : o < n.y + n.h / 2 ? r += (e.rightIds.length - e.indexes[n.id]) * i : r += (e.indexes[n.id] + 1) * i) : a.isPartner == 2 && (o = a.y + a.h + t.partnerSeparation / 2 + e.indexes[n.id] * e.partnerChildrenSplitSeparation - (e.leftIds.length - 1) * e.partnerChildrenSplitSeparation / 2, e.firstRight && o > e.firstRight.y + e.firstRight.h / 2 ? o < n.y + n.h / 2 ? r -= (e.indexes[n.id] + 1) * i : r -= (e.leftIds.length - e.indexes[n.id]) * i : o < n.y + n.h / 2 ? r += (e.leftIds.length - e.indexes[n.id]) * i : r += (e.indexes[n.id] + 1) * i), {
			y: o,
			mid: r
		};
	},
	_draggableLinkPath: function(t, n, r, i, a, o) {
		if (r.isSubLevel || n.isSubLevel || r.leftNeighbor && r.leftNeighbor.isSplit || r.rightNeighbor && r.rightNeighbor.isSplit || r.isPartner || r.isAssistant) return null;
		if (e._isMoved(r) && !e._isMoved(n)) {
			var s, c, l = [];
			switch (o) {
				case e.orientation.top:
				case e.orientation.top_left:
					if (i.yb + a / 2 < i.yd) return null;
					s = i.xa < i.xd ? r.x - a / 2 : r.x + r.w + a / 2, c = r.y - a / 2;
					break;
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					if (i.yb - a / 2 > i.yd) return null;
					s = i.xa < i.xd ? r.x - a / 2 : r.x + r.w + a / 2, c = r.y + r.h + a / 2;
					break;
				case e.orientation.right:
				case e.orientation.right_top:
					if (i.xb - a / 2 > i.xd) return null;
					c = i.ya < i.yd ? r.y - a / 2 : r.y + r.h + a / 2, s = r.x + r.w + a / 2;
					break;
				case e.orientation.left:
				case e.orientation.left_top:
					if (i.xb + a / 2 < i.xd) return null;
					c = i.ya < i.yd ? r.y - a / 2 : r.y + r.h + a / 2, s = r.x - a / 2;
					break;
			}
			switch (o) {
				case e.orientation.top:
				case e.orientation.top_left:
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					l.push([
						"M",
						i.xa,
						i.ya
					]), l.push([
						"L",
						i.xb,
						i.yb
					]), l.push([
						"L",
						s,
						i.yb
					]), l.push([
						"L",
						s,
						c
					]), l.push([
						"L",
						i.xd,
						c
					]), l.push([
						"L",
						i.xd,
						i.yd
					]);
					break;
				case e.orientation.right:
				case e.orientation.right_top:
				case e.orientation.left:
				case e.orientation.left_top:
					var l = [];
					l.push([
						"M",
						i.xa,
						i.ya
					]), l.push([
						"L",
						i.xb,
						i.yb
					]), l.push([
						"L",
						i.xb,
						c
					]), l.push([
						"L",
						s,
						c
					]), l.push([
						"L",
						s,
						i.yd
					]), l.push([
						"L",
						i.xd,
						i.yd
					]);
					break;
			}
			return e.roundPathCorners(l, e.LINK_ROUNDED_CORNERS, !1);
		} else if (!e._isMoved(r) && e._isMoved(n)) {
			var s, c, u = !1, l = [];
			switch (o) {
				case e.orientation.top:
				case e.orientation.top_left:
					if (i.ya + a / 2 > i.yb) u = !0, s = i.xa < i.xd ? n.x + n.w + a / 2 : n.x - a / 2, c = n.y + n.h + a;
					else if (i.yb + a / 2 < i.yd) return null;
					else s = i.xa < i.xd ? r.x - a / 2 : r.x + r.w + a / 2, c = r.y - a / 2;
					break;
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					if (i.ya - a / 2 < i.yb) u = !0, s = i.xa < i.xd ? n.x + n.w + a / 2 : n.x - a / 2, c = n.y - a;
					else if (i.yb - a / 2 > i.yd) return null;
					else s = i.xa < i.xd ? r.x - a / 2 : r.x + r.w + a / 2, c = r.y + r.h + a / 2;
					break;
				case e.orientation.right:
				case e.orientation.right_top:
					if (i.xa - a / 2 < i.xb) u = !0, c = i.ya < i.yd ? n.y + n.h + a / 2 : n.y - a / 2, s = n.x - a;
					else if (i.xb - a / 2 > i.xd) return null;
					else c = i.ya < i.yd ? r.y - a / 2 : r.y + r.h + a / 2, s = r.x + r.w + a / 2;
					break;
				case e.orientation.left:
				case e.orientation.left_top:
					if (i.xa + a / 2 > i.xb) u = !0, c = i.ya < i.yd ? n.y + n.h + a / 2 : n.y - a / 2, s = n.x + n.w + a;
					else if (i.xb + a / 2 < i.xd) return null;
					else c = i.ya < i.yd ? r.y - a / 2 : r.y + r.h + a / 2, s = r.x - a / 2;
					break;
			}
			if (u) switch (o) {
				case e.orientation.top:
				case e.orientation.top_left:
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					l.push([
						"M",
						i.xa,
						i.ya
					]), l.push([
						"L",
						i.xa,
						c
					]), l.push([
						"L",
						s,
						c
					]), l.push([
						"L",
						s,
						i.yc
					]), l.push([
						"L",
						i.xc,
						i.yc
					]), l.push([
						"L",
						i.xd,
						i.yd
					]);
					break;
				case e.orientation.right:
				case e.orientation.right_top:
				case e.orientation.left:
				case e.orientation.left_top:
					l.push([
						"M",
						i.xa,
						i.ya
					]), l.push([
						"L",
						s,
						i.ya
					]), l.push([
						"L",
						s,
						c
					]), l.push([
						"L",
						i.xc,
						c
					]), l.push([
						"L",
						i.xc,
						i.yc
					]), l.push([
						"L",
						i.xd,
						i.yd
					]);
					break;
			}
			else switch (o) {
				case e.orientation.top:
				case e.orientation.top_left:
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					l.push([
						"M",
						i.xa,
						i.ya
					]), l.push([
						"L",
						i.xb,
						i.yb
					]), l.push([
						"L",
						s,
						i.yb
					]), l.push([
						"L",
						s,
						c
					]), l.push([
						"L",
						i.xd,
						c
					]), l.push([
						"L",
						i.xd,
						i.yd
					]);
					break;
				case e.orientation.right:
				case e.orientation.right_top:
				case e.orientation.left:
				case e.orientation.left_top:
					l.push([
						"M",
						i.xa,
						i.ya
					]), l.push([
						"L",
						i.xb,
						i.yb
					]), l.push([
						"L",
						i.xb,
						c
					]), l.push([
						"L",
						s,
						c
					]), l.push([
						"L",
						s,
						i.yd
					]), l.push([
						"L",
						i.xd,
						i.yd
					]);
					break;
			}
			return e.roundPathCorners(l, e.LINK_ROUNDED_CORNERS, !1);
		} else if (e._isMoved(r) && e._isMoved(n)) {
			var l = [];
			switch (o) {
				case e.orientation.top:
				case e.orientation.top_left:
					if (i.ya + a > i.yd) {
						var s = i.xa < i.xd ? n.x + n.w + a / 2 : n.x - a / 2, c = n.y + n.h + a, d = r.y - a;
						l.push([
							"M",
							i.xa,
							i.ya
						]), l.push([
							"L",
							i.xa,
							c
						]), l.push([
							"L",
							s,
							c
						]), l.push([
							"L",
							s,
							d
						]), l.push([
							"L",
							i.xc,
							d
						]), l.push([
							"L",
							i.xd,
							i.yd
						]);
					} else l.push([
						"M",
						i.xa,
						i.ya
					]), l.push([
						"L",
						i.xa,
						n.y + n.h + a
					]), l.push([
						"L",
						i.xc,
						n.y + n.h + a
					]), l.push([
						"L",
						i.xd,
						i.yd
					]);
					break;
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					if (i.ya - a < i.yd) {
						var s = i.xa < i.xd ? n.x + n.w + a / 2 : n.x - a / 2, c = n.y - a, d = r.y + r.h + a;
						l.push([
							"M",
							i.xa,
							i.ya
						]), l.push([
							"L",
							i.xa,
							c
						]), l.push([
							"L",
							s,
							c
						]), l.push([
							"L",
							s,
							d
						]), l.push([
							"L",
							i.xc,
							d
						]), l.push([
							"L",
							i.xd,
							i.yd
						]);
					} else l.push([
						"M",
						i.xa,
						i.ya
					]), l.push([
						"L",
						i.xa,
						n.y - a
					]), l.push([
						"L",
						i.xc,
						n.y - a
					]), l.push([
						"L",
						i.xd,
						i.yd
					]);
					break;
				case e.orientation.right:
				case e.orientation.right_top:
					if (i.xa - a < i.xd) {
						var c = i.ya < i.yd ? n.y + n.h + a / 2 : n.y - a / 2, s = n.x - a, f = r.x + r.w + a;
						l.push([
							"M",
							i.xa,
							i.ya
						]), l.push([
							"L",
							s,
							i.ya
						]), l.push([
							"L",
							s,
							c
						]), l.push([
							"L",
							f,
							c
						]), l.push([
							"L",
							f,
							i.yc
						]), l.push([
							"L",
							i.xd,
							i.yd
						]);
					} else l.push([
						"M",
						i.xa,
						i.ya
					]), l.push([
						"L",
						n.x - a,
						i.ya
					]), l.push([
						"L",
						n.x - a,
						i.yc
					]), l.push([
						"L",
						i.xd,
						i.yd
					]);
					break;
				case e.orientation.left:
				case e.orientation.left_top:
					if (i.xa + a > i.xd) {
						var c = i.ya < i.yd ? n.y + n.h + a / 2 : n.y - a / 2, s = n.x + n.w + a, f = r.x - a;
						l.push([
							"M",
							i.xa,
							i.ya
						]), l.push([
							"L",
							s,
							i.ya
						]), l.push([
							"L",
							s,
							c
						]), l.push([
							"L",
							f,
							c
						]), l.push([
							"L",
							f,
							i.yc
						]), l.push([
							"L",
							i.xd,
							i.yd
						]);
					} else l.push([
						"M",
						i.xa,
						i.ya
					]), l.push([
						"L",
						n.x + n.w + a,
						i.ya
					]), l.push([
						"L",
						n.x + n.w + a,
						i.yc
					]), l.push([
						"L",
						i.xd,
						i.yd
					]);
					break;
			}
			return e.roundPathCorners(l, e.LINK_ROUNDED_CORNERS, !1);
		}
		return null;
	}
}, e === void 0 && (e = {}), e._validateConfig = function(e) {
	if (!e) console.error("config is not defined");
	else return !0;
	return !1;
}, e._arrayContains = function(e, t) {
	if (e && Array.isArray(e)) {
		for (var n = e.length; n--;) if (e[n] === t) return !0;
	}
	return !1;
}, e._interceptions = function(e, t) {
	if (!e || !t) return [];
	var n = [];
	if (Array.isArray(e) && Array.isArray(t)) for (var r in e) for (var i in t) e[r] == t[i] && n.push(e[r]);
	else if (Array.isArray(e) && !Array.isArray(t)) for (var r in e) for (var i in t) e[r] == i && n.push(e[r]);
	else if (!Array.isArray(e) && Array.isArray(t)) for (var r in e) for (var i in t) r == t[i] && n.push(t[i]);
	return n;
}, e._getTags = function(e) {
	return e.tags && !Array.isArray(e.tags) ? e.tags.split(",") : e.tags && Array.isArray(e.tags) ? e.tags : [];
}, e._centerPointInPercent = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = t - r.left, a = n - r.top;
	return [i / (r.width / 100), a / (r.height / 100)];
}, e._trim = function(e) {
	return e.replace(/^\s+|\s+$/g, "");
}, e._getTransform = function(t) {
	var n = t.getAttribute("transform");
	return n = n.replace("matrix", "").replace("(", "").replace(")", ""), e._browser().msie && (n = n.replace(/ /g, ",")), n = e._trim(n), n = "[" + n + "]", n = JSON.parse(n), n;
}, e.getScale = function(t, n, r, i, a, o, s, c) {
	var l = 1;
	if (!t && (i === e.match.boundary || i === e.match.boundaryIfOutside)) {
		var u = n / s, d = r / c;
		l = u > d ? d : u, i === e.match.boundaryIfOutside && l > 1 && (l = 1);
	} else if (!t && i === e.match.width) l = n / s;
	else if (!t && i === e.match.height) l = r / c;
	else if (!t) l = i;
	else {
		var u = n / t[2], d = r / t[3];
		l = u > d ? d : u;
	}
	return l && l > a && (l = a), l && l < o && (l = o), l;
}, e.isObject = function(e) {
	return e && typeof e == "object" && !Array.isArray(e) && e !== null && e.constructor && e.constructor.name.toLowerCase() == "object";
}, e.fileUploadDialog = function(e) {
	var t = document.createElement("INPUT");
	t.setAttribute("type", "file"), t.style.display = "none", t.onchange = function() {
		var t = this.files[0];
		e(t);
	}, document.body.appendChild(t), t.click();
}, e.mergeDeep = function(t, n) {
	if (e.isObject(t) && e.isObject(n)) for (var r in n) e.isObject(n[r]) ? (t[r] || Object.assign(t, { [r]: {} }), e.mergeDeep(t[r], n[r])) : Object.assign(t, { [r]: n[r] });
	return t;
}, e._lblIsImg = function(e, t) {
	return !!(e.nodeBinding && typeof t == "string" && t.indexOf("img") != -1 && e.nodeBinding[t]);
}, e._getFistImgField = function(e) {
	if (e.nodeBinding) {
		for (var t in e.nodeBinding) if (t.indexOf("img") != -1) return e.nodeBinding[t];
	}
	return !1;
}, e._fieldIsImg = function(t, n) {
	if (t.nodeBinding) {
		for (var r in t.nodeBinding) if (t.nodeBinding[r] == n) return e._lblIsImg(t, r);
	}
	return !1;
}, e._guid = function() {
	function e() {
		return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
	}
	return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
}, e.htmlRipple = function(e) {
	var t = document.createElement("style");
	t.type = "text/css", t.innerHTML = " .boc-ripple-container {position: absolute; top: 0; right: 0; bottom: 0; left: 0; } .boc-ripple-container span {transform: scale(0);border-radius:100%;position:absolute;opacity:0.75;background-color:#fff;animation: boc-ripple 1000ms; }@-moz-keyframes boc-ripple {to {opacity: 0;transform: scale(2);}}@-webkit-keyframes boc-ripple {to {opacity: 0;transform: scale(2);}}@-o-keyframes boc-ripple {to {opacity: 0;transform: scale(2);}}@keyframes boc-ripple {to {opacity: 0;transform: scale(2);}}", document.head.appendChild(t);
	var n = function(e, t) {
		var n = void 0;
		return function() {
			var r, i = this;
			return r = arguments, clearTimeout(n), n = setTimeout(function() {
				return e.apply(i, r);
			}, t);
		};
	}, r = function(t) {
		var n, r = this, i = document.createElement("span"), a = r.offsetWidth, o, s, c;
		return n = r.getBoundingClientRect(), s = t.pageX - n.left - a / 2, c = t.pageY - n.top - a / 2, o = "top:" + c + "px; left: " + s + "px; height: " + a + "px; width: " + a + "px;", e.rippleContainer.appendChild(i), i.setAttribute("style", o);
	}, i = function() {
		for (; this.rippleContainer.firstChild;) this.rippleContainer.removeChild(this.rippleContainer.firstChild);
	}, a = document.createElement("div");
	a.className = "boc-ripple-container", e.addEventListener("mousedown", r), e.addEventListener("mouseup", n(i, 2e3)), e.rippleContainer = a, e.appendChild(a);
}, e._moveToBoundaryArea = function(t, n, r, i) {
	var a = n.slice(0);
	n[0] < r.left && n[0] < r.right && (a[0] = r.left > r.right ? r.right : r.left), n[0] > r.right && n[0] > r.left && (a[0] = r.left > r.right ? r.left : r.right), n[1] < r.top && n[1] < r.bottom && (a[1] = r.top > r.bottom ? r.bottom : r.top), n[1] > r.bottom && n[1] > r.top && (a[1] = r.top > r.bottom ? r.top : r.bottom), n[0] !== a[0] || n[1] !== a[1] ? e.animate(t, { viewBox: n }, { viewBox: a }, 300, e.anim.outPow, function() {
		i && i();
	}) : i && i();
}, e.randomId = function() {
	return "_" + ("0000" + (Math.random() * 36 ** 4 | 0).toString(36)).slice(-4);
}, e._getClientXY = function(e) {
	if (e.type.indexOf("touch") != -1) {
		if (e.changedTouches.length) return {
			x: e.changedTouches[0].clientX,
			y: e.changedTouches[0].clientY
		};
	} else return {
		x: e.clientX,
		y: e.clientY
	};
}, e._getClientTouchesXY = function(e, t) {
	return e.type.indexOf("touch") == -1 ? {
		x: e.clientX,
		y: e.clientY
	} : e.touches.length < t + 1 ? {
		x: null,
		y: null
	} : {
		x: e.touches[t].clientX,
		y: e.touches[t].clientY
	};
}, e._getOffset = function(t, n) {
	t && (n.x += t.offsetLeft, n.y += t.offsetTop, e._getOffset(t.offsetParent, n));
}, e._getTopLeft = function(t) {
	var n = {
		x: 0,
		y: 0
	};
	return e._getOffset(t, n), n;
}, e._getOffsetXY = function(t, n) {
	if (n.type.indexOf("touch") != -1) {
		if (n.touches.length) {
			var r = e._getTopLeft(t);
			return {
				x: n.touches[0].pageX - r.x,
				y: n.touches[0].pageY - r.y
			};
		} else if (n.changedTouches.length) {
			var r = e._getTopLeft(t);
			return isNaN(r.x) || isNaN(r.y) ? {
				x: n.changedTouches[0].pageX,
				y: n.changedTouches[0].pageY
			} : {
				x: n.changedTouches[0].pageX - r.x,
				y: n.changedTouches[0].pageY - r.y
			};
		}
	} else return {
		x: n.offsetX,
		y: n.offsetY
	};
}, e._pinchMiddlePointInPercent = function(t, n, r, i) {
	var a = e._getTopLeft(t), o = i.touches[0].pageX - a.x, s = i.touches[0].pageY - a.y, c = i.touches[1].pageX - a.x, l = i.touches[1].pageY - a.y;
	return [((o - c) / 2 + c) / (n / 100), ((s - l) / 2 + l) / (r / 100)];
}, e._browser = function() {
	var e = !!window.opr && !!window.opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0, t = typeof InstallTrigger < "u", n = /constructor/i.test(window.HTMLElement) || (function(e) {
		return e.toString() === "[object SafariRemoteNotification]";
	})(!window.safari || window.safari !== void 0 && safari.pushNotification), r = !!document.documentMode, i = !r && !!window.StyleMedia, a = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
	return {
		opera: e,
		firefox: t,
		safari: n,
		msie: r,
		edge: i,
		chrome: a,
		blink: (a || e) && !!window.CSS
	};
}, e._menuPosition = function(e, t, n) {
	var r = e.getBoundingClientRect(), i = n.getBoundingClientRect(), a = t.getBoundingClientRect(), o = r.left - i.left, s = r.top - i.top;
	return r.top + a.height > i.top + i.height && (s -= a.height), r.left - a.width < i.left && (o += a.width), {
		x: o,
		y: s
	};
}, e._getTemplate = function(e, t, n) {
	if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
		var i = t[e[r]];
		if (i && i.template) return i.template;
	}
	return n;
}, e._getMin = function(e, t) {
	if (e.tags && e.tags.length && t.tags) for (var n = 0; n < e.tags.length; n++) {
		var r = t.tags[e.tags[n]];
		if (r && r.min === !0) return !0;
	}
	return t.min;
}, e._getSubLevels = function(e, t) {
	if (e && e.length) for (var n = 0; n < e.length; n++) {
		var r = t[e[n]];
		if (r && r.subLevels) return r.subLevels;
	}
	return 0;
}, e._isHTML = function(e) {
	var t = new DOMParser().parseFromString(e, "text/html");
	return Array.from(t.body.childNodes).some((e) => e.nodeType === 1);
}, e._getTestDiv = function() {
	var e = document.getElementById("orgchart_js_test_div");
	return e || (e = document.createElement("div"), e.id = "orgchart_js_test_div", e.style.position = "fixed", e.style.top = "-10000px", e.style.left = "-10000px", document.body.appendChild(e)), e;
}, e._getLabelSize = function(t) {
	var n = e._getTestDiv();
	return n.innerHTML = "<svg>" + t + "</svg>", n.querySelector("text").getBoundingClientRect();
}, e.wrapText = function(t, n, r, i) {
	if (r != null && i != null) return e._lineClamp(n, t, r, i);
	var a = n, o = a.toLowerCase();
	if (o.indexOf("<text") == -1 || o.indexOf(e.attr.width) == -1 || o.indexOf("foreignobject") != -1 || a.indexOf(e.attr.width) == -1 || e.ESCAPE_HTML && typeof str == "string" && e._isHTML(t)) return e._escapeHtml(t);
	if (!e.ESCAPE_HTML && e._isHTML(t)) return t;
	var s = e._getTestDiv();
	a = a.replaceAll("{cw}", 0), s.innerHTML = "<svg>" + a + "</svg>";
	var c = new DOMParser().parseFromString(a, "text/xml").getElementsByTagName("text")[0], l = parseFloat(c.getAttribute("x")), u = parseFloat(c.getAttribute("y")), d = c.getAttribute("text-anchor"), r = c.getAttribute(e.attr.width), f = c.getAttribute(e.attr.text_overflow), p = "http://www.w3.org/2000/svg", m = s.getElementsByTagName("svg")[0].getElementsByTagName("text")[0], i, h;
	f ||= "ellipsis";
	var g = f.split("-");
	if (g.length > 1 && (i = parseInt(f.split("-")[1]), g.length > 2 && g[2] == "ellipsis" && (h = !0)), !r) return e._escapeHtml(t);
	if (r = parseFloat(r), l ||= 0, u ||= 0, l || (d = "start"), f == "ellipsis") {
		m.removeChild(m.firstChild), m.textContent = t;
		for (var _ = m.getComputedTextLength(), v = 2; _ > r;) m.textContent = t.substring(0, t.length - v), m.textContent += "...", _ = m.getComputedTextLength(), v++;
		return v > 2 ? `<title>${e._escapeHtml(t)}</title>${m.textContent}` : e._escapeHtml(t);
	} else if (f.indexOf("multiline") != -1) {
		var y = t.split(" "), b = m.getBBox().height;
		m.textContent = "";
		var x = document.createElementNS(p, "tspan"), S = document.createTextNode(y[0]);
		x.setAttributeNS(null, "x", l), x.setAttributeNS(null, "y", u), x.setAttributeNS(null, "text-anchor", d), x.appendChild(S), m.appendChild(x);
		for (var v = 1, C = 1, w = !1, T = 1; T < y.length; T++) {
			var E = x.firstChild.data.length;
			if (x.firstChild.data += " " + y[T], x.getComputedTextLength() > r) {
				if (x.firstChild.data = x.firstChild.data.slice(0, E), C++, i && C > i) {
					if (h && m.children.length == i) {
						var D = m.children[i - 1].textContent;
						m.children[i - 1].textContent = D.substring(0, D.length - 3) + "...", w = !0;
					}
					break;
				}
				var x = document.createElementNS(p, "tspan");
				x.setAttributeNS(null, "x", l), x.setAttributeNS(null, "y", u + b * v), x.setAttributeNS(null, "text-anchor", d), S = document.createTextNode(y[T]), x.appendChild(S), m.appendChild(x), v++;
			}
		}
		var O = "";
		if (m.innerHTML != null) O = m.innerHTML, m.innerHTML = "";
		else {
			for (var k = "", T = m.childNodes.length - 1; T >= 0; T--) k = XMLSerializer().serializeToString(m.childNodes[T]) + k, m.removeChild(m.childNodes[T]);
			O = k;
		}
		return w ? `<title>${e._escapeHtml(t)}</title>${O}` : O;
	}
}, e._downloadFile = function(e, t, n, r, i) {
	var a = new Blob([t], { type: e });
	if (r == 1) {
		var o = URL.createObjectURL(a);
		window.open(o, "_blank").focus();
	} else if (navigator.msSaveBlob) navigator.msSaveBlob(a, n);
	else {
		var s = document.createElement("a");
		if (s.download !== void 0) {
			var o = URL.createObjectURL(a);
			s.setAttribute("href", o);
			var c = n;
			c.toLowerCase().endsWith(i.toLowerCase()) || (c = c + "." + i), s.setAttribute("download", c), s.style.visibility = "hidden", document.body.appendChild(s), s.click(), document.body.removeChild(s);
		}
	}
}, e._getPosition = function(e, t, n, r) {
	var i = {
		x: t.x,
		y: t.y
	};
	if (n != null && (i.x = n), r != null && (i.y = n), e && e.length == 3) {
		var a = e[0].indexOf(t.id);
		a != -1 && e[1][a].transform != null && (n ?? (i.x = e[1][a].transform[4]), r ?? (i.y = e[1][a].transform[5]));
	}
	return i;
}, e._getOpacity = function(e, t) {
	var n = 1;
	if (e && e.length == 3) {
		var r = e[0].indexOf(t.id);
		r != -1 && e[1][r].opacity != null && (n = e[1][r].opacity);
	}
	return n;
}, e.t = function(t, n, r) {
	var i = e.templates[t];
	i ?? console.error(`Template "${t}" does not exist!`);
	var a = null;
	if (r != null && i.scaleLessThen) {
		var o = [];
		for (var s in i.scaleLessThen) {
			var c = parseFloat(s);
			r < c && o.push(c);
		}
		if (o.length > 0) {
			o.sort(function(e, t) {
				return e - t;
			});
			var l = i.scaleLessThen[o[0]];
			for (var u in l) a ??= Object.assign({}, i), a[u] = l[u];
		}
	}
	return n ? a == null ? i.min ? i.min : i : a.min ? a.min : a : a ?? i;
}, e.setNodeSize = function(t) {
	var n = e.t(t.templateName, t.min);
	t.w = n && n.size ? n.size[0] : 0, t.h = n && n.size ? n.size[1] : 0;
}, e._imgs2base64 = function(t, n, r, i) {
	var a = t.getElementsByTagName(n), o = a.length;
	o == 0 && i();
	for (var s = 0; s < o; s++) (function() {
		var t = s, n = a[t];
		e._getDataUri(n.getAttribute(r), function(e) {
			e.success && n.setAttribute(r, e.result), t == o - 1 && i();
		});
	})();
}, e._getDataUri = function(e, t) {
	if (e.indexOf("base64") != -1) t({ success: !1 });
	else {
		var n = new XMLHttpRequest();
		n.open("GET", e), n.responseType = "blob", n.onload = function() {
			n.status === 200 ? r.readAsDataURL(n.response) : n.status === 404 && t({
				success: !1,
				result: n.status
			});
		};
		var r = new FileReader();
		r.onloadend = function() {
			t({
				success: !0,
				result: r.result
			});
		}, n.send();
	}
}, e._convertStringToArray = function(t, n) {
	return e.ARRAY_FIELDS.indexOf(t) == -1 ? n : e.isNEU(n) ? [] : n.split(",");
}, e._convertArrayToString = function(t) {
	return !e.isNEU(t) && Array.isArray(t) ? t.join() : t;
}, e._csvToArray = function(t, n) {
	n ||= e.CSV_DELIMITER;
	for (var r = RegExp("(\\" + n + "|\\r?\\n|\\r|^)(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|([^\"\\" + n + "\\r\\n]*))", "gi"), i = [[]], a = null; a = r.exec(t);) {
		var o = a[1];
		o.length && o !== n && i.push([]);
		var s = a[2] ? a[2].replace(/* @__PURE__ */ RegExp("\"\"", "g"), "\"") : a[3];
		i[i.length - 1].push(s);
	}
	return i;
}, e._json2xml = function(t) {
	for (var n = document.implementation.createDocument("", "", null), r = n.createElement("nodes"), i = 0; i < t.length; i++) {
		var a = n.createElement("node"), o = t[i];
		for (var s in o) {
			var c = o[s];
			a.setAttribute(s, e._convertArrayToString(c));
		}
		r.appendChild(a);
	}
	return n.appendChild(r), "<?xml version=\"1.0\" encoding=\"utf-8\" ?>" + new XMLSerializer().serializeToString(n.documentElement);
}, e._xml2json = function(t) {
	for (var n = new DOMParser().parseFromString(t, "text/xml").getElementsByTagName("node"), r = [], i = 0; i < n.length; i++) {
		for (var a = n[i], o = {}, s = 0; s < a.attributes.length; s++) {
			var c = a.attributes[s];
			o[c.name] = e._convertStringToArray(c.name, c.value);
		}
		r.push(o);
	}
	return r;
}, e.convertNodesToCsv = function(t) {
	return e._json2csv(t);
}, e._json2csv = function(t) {
	for (var n = [], r = function(t) {
		for (var r = "", i = 0; i < n.length; i++) {
			var a = n[i] == "reportsTo" ? null : t[n[i]] == null ? "" : t[n[i]];
			a instanceof Date && (a = a.toLocaleString()), a = a === null ? "" : a.toString();
			var o = a.replace(/"/g, "\"\""), s = /* @__PURE__ */ RegExp("(\"|;|\n)", "g");
			o.search(s) >= 0 && (o = "\"" + o + "\""), i > 0 && (r += e.CSV_DELIMITER), r += o;
		}
		return r + "\n";
	}, i = "", a = 0; a < t.length; a++) for (var o in t[a]) e._arrayContains(n, o) || (n.push(o), i += o + e.CSV_DELIMITER);
	i = i.substring(0, i.length - 1), i += "\n";
	for (var a = 0; a < t.length; a++) i += r(t[a]);
	return i = i.substring(0, i.length - 1), i;
}, e.accentFold = function(e) {
	return e = e.toString().toLowerCase(), e.replace(/([àáâãäå])|([ç])|([èéêë])|([ìíîï])|([ñ])|([òóôõöø])|([ß])|([ùúûü])|([ÿ])|([æ])/g, function(e, t, n, r, i, a, o, s, c, l, u) {
		if (t) return "a";
		if (n) return "c";
		if (r) return "e";
		if (i) return "i";
		if (a) return "n";
		if (o) return "o";
		if (s) return "s";
		if (c) return "u";
		if (l) return "y";
		if (u) return "ae";
	});
}, e.copy = function(t) {
	if (typeof t != "object" || !t || "isActiveClone" in t) return t;
	if (t instanceof Date) var n = new t.constructor();
	else var n = t.constructor();
	for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (t.isActiveClone = null, n[r] = e.copy(t[r]), delete t.isActiveClone);
	return n;
}, e._getScrollSensitivity = function() {
	var t = e._browser();
	return t.msie && e.scroll.ie ? e.scroll.ie : t.edge && e.scroll.edge ? e.scroll.edge : t.safari && e.scroll.safari ? e.scroll.safari : t.chrome && e.scroll.chrome ? e.scroll.chrome : t.firefox && e.scroll.firefox ? e.scroll.firefox : t.opera && e.scroll.opera ? e.scroll.opera : {
		smooth: e.scroll.smooth,
		speed: e.scroll.speed
	};
}, e.isMobile = function() {
	let e = navigator.userAgent, t = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e), n = navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
	return t || n;
}, e._isTouchDevice = function() {
	return navigator.maxTouchPoints > 0;
}, e.isTrial = function() {
	return e.remote !== void 0;
}, e.childrenCount = function(e, t) {
	for (var n = 0, r = 0; r < t.childrenIds.length; r++) e.nodes[t.childrenIds[r]] && n++;
	return n;
}, e.childrenTotalCount = function(t, n) {
	for (var r = 0, i = 0; i < n.childrenIds.length; i++) {
		var a = t.nodes[n.childrenIds[i]];
		a && (r++, r += e.childrenTotalCount(t, a));
	}
	return r;
}, e.collapsedChildrenCount = function(e, t) {
	for (var n = 0, r = 0; r < t.childrenIds.length; r++) {
		var i = e.nodes[t.childrenIds[r]];
		i && i.collapsed === !0 && n++;
	}
	return n;
}, e.collapsedChildrenTotalCount = function(t, n, r) {
	for (var i = 0, a = 0; a < n.childrenIds.length; a++) {
		var o = t.nodes[n.childrenIds[a]];
		o && ((r || o.collapsed === !0) && i++, i += e.collapsedChildrenTotalCount(t, o, !0));
	}
	return i;
}, e._setMinMaxXY = function(e, t, n) {
	n && e.isTreeListItem || ((t.minX == null || e.x != null && e.x < t.minX) && (t.minX = e.x), (t.minY == null || e.y != null && e.y < t.minY) && (t.minY = e.y), (t.maxX == null || e.x != null && e.x + e.w > t.maxX) && (t.maxX = e.x + e.w), (t.maxY == null || e.y != null && e.y + e.h > t.maxY) && (t.maxY = e.y + e.h));
}, e.getStParentNodes = function(t, n) {
	for (n ||= []; t.parent;) t = t.parent;
	return t.stParent && (n.push(t.stParent), e.getStParentNodes(t.stParent, n)), n;
}, e.getRootOf = function(e) {
	for (; e && e.parent;) e = e.parent;
	return e;
}, e._getViewBox = function(e) {
	var t = null;
	return e ? (t = e.getAttribute("viewBox"), t = "[" + t + "]", t = t.replace(/\ /g, ","), t = JSON.parse(t), t) : null;
}, e.isNEU = function(e) {
	return e == null || e === "";
}, e.gradientCircleForDefs = function(e, t, n, r) {
	Array.isArray(t) || (t = [
		t,
		t,
		t,
		t,
		t,
		t
	]);
	function i(e, t, n, r) {
		var i = (r - 90) * Math.PI / 180;
		return {
			x: e + n * Math.cos(i),
			y: t + n * Math.sin(i)
		};
	}
	function a(e, t, n, r, a) {
		var o = i(e, t, n, a), s = i(e, t, n, r), c = a - r <= 180 ? "0" : "1";
		return [
			"M",
			o.x,
			o.y,
			"A",
			n,
			n,
			0,
			c,
			0,
			s.x,
			s.y
		].join(" ");
	}
	return `<linearGradient id="${e}_linearColors1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${t[0]}"></stop>
            <stop offset="100%" stop-color="${t[1]}"></stop>
        </linearGradient>
        <linearGradient id="${e}_linearColors2" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stop-color="${t[1]}"></stop>
            <stop offset="100%" stop-color="${t[2]}"></stop>
        </linearGradient>
        <linearGradient id="${e}_linearColors3" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${t[2]}"></stop>
            <stop offset="100%" stop-color="${t[3]}"></stop>
        </linearGradient>
        <linearGradient id="${e}_linearColors4" x1="1" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="${t[3]}"></stop>
            <stop offset="100%" stop-color="${t[4]}"></stop>
        </linearGradient>
        <linearGradient id="${e}_linearColors5" x1="0.5" y1="1" x2="0.5" y2="0">
            <stop offset="0%" stop-color="${t[4]}"></stop>
            <stop offset="100%" stop-color="${t[5]}"></stop>
        </linearGradient>
        <linearGradient id="${e}_linearColors6" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stop-color="${t[5]}"></stop>
            <stop offset="100%" stop-color="${t[0]}"></stop>
        </linearGradient>        
        <g id="${e}">
            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors1)" d="${a(n, n, n, 1, 60)}"  />
            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors2)" d="${a(n, n, n, 60, 120)}"/>
            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors3)" d="${a(n, n, n, 120, 180)}" />
            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors4)" d="${a(n, n, n, 180, 240)}" />
            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors5)" d="${a(n, n, n, 240, 300)}" />
            <path stroke-width="${r}" fill="none" stroke="url(#${e}_linearColors6)" d="${a(n, n, n, 300, 1)}"/>
        </g>`;
}, e._intersectionObserver = function(e, t) {
	typeof IntersectionObserver == "function" ? new IntersectionObserver(function(e, n) {
		e.forEach(function(e) {
			var n = e.intersectionRatio > 0;
			e.intersectionRatio == 0 && (n = e.isIntersecting), t(n);
		});
	}).observe(e) : t(!0);
}, e.convertCsvToNodes = function(t) {
	for (var n = e._csvToArray(t), r = n[0], i = [], a = 1; a < n.length; a++) {
		for (var o = {}, s = 0; s < n[a].length; s++) {
			var c = r[s], l = n[a][s];
			o[r[s]] = e._convertStringToArray(c, l);
		}
		o.id.trim() != "" && i.push(o);
	}
	return i;
}, e._escapeHtml = function(t) {
	return e.ESCAPE_HTML && typeof t == "string" ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : t;
}, e._escapeDoubleQuotes = function(e) {
	return typeof e == "string" ? e.replace(/"/g, "&quot;") : e;
}, e._escapeGreaterLessSign = function(e) {
	return typeof e == "string" ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;") : e;
}, e.roundPathCorners = function(e, t, n) {
	function r(e, t, n) {
		var r = t.x - e.x, a = t.y - e.y, o = Math.sqrt(r * r + a * a);
		return i(e, t, Math.min(1, n / o));
	}
	function i(e, t, n) {
		return {
			x: e.x + (t.x - e.x) * n,
			y: e.y + (t.y - e.y) * n
		};
	}
	function a(e, t) {
		e.length > 2 && (e[e.length - 2] = t.x, e[e.length - 1] = t.y);
	}
	function o(e) {
		return {
			x: parseFloat(e[e.length - 2]),
			y: parseFloat(e[e.length - 1])
		};
	}
	Array.isArray(e) || (e = e.split(/[,\s]/).reduce(function(e, t) {
		var n = t.match("([a-zA-Z])(.+)");
		return n ? (e.push(n[1]), e.push(n[2])) : e.push(t), e;
	}, []), e = e.reduce(function(e, t) {
		return parseFloat(t) == t && e.length ? e[e.length - 1].push(t) : e.push([t]), e;
	}, []));
	var s = [];
	if (e.length > 1) {
		var c = o(e[0]), l = null;
		e[e.length - 1][0] == "Z" && e[0].length > 2 && (l = [
			"L",
			c.x,
			c.y
		], e[e.length - 1] = l), s.push(e[0]);
		for (var u = 1; u < e.length; u++) {
			var d = s[s.length - 1], f = e[u], p = f == l ? e[1] : e[u + 1];
			if (p && d && d.length > 2 && f[0] == "L" && p.length > 2 && p[0] == "L") {
				var m = o(d), h = o(f), g = o(p), _, v;
				n ? (_ = i(h, d.origPoint || m, t), v = i(h, p.origPoint || g, t)) : (_ = r(h, m, t), v = r(h, g, t)), a(f, _), f.origPoint = h, s.push(f);
				var y = i(_, h, .5), b = i(h, v, .5), x = [
					"C",
					y.x,
					y.y,
					b.x,
					b.y,
					v.x,
					v.y
				];
				x.origPoint = h, s.push(x);
			} else s.push(f);
		}
		if (l) {
			var S = o(s[s.length - 1]);
			s.push(["Z"]), a(s[0], S);
		}
	} else s = e;
	return s.reduce(function(e, t) {
		return e + t.join(" ") + " ";
	}, "");
}, e._isMoved = function(e) {
	return e.movex != null || e.movey != null;
}, e._getDynamicGridCoulumns = function(e) {
	for (var t = 1; t < e && (e / t, !(e / t - t <= 0)); t++);
	return t % 2 != 0 && t > 2 && t--, t;
}, e._getLazyLoading = function(e) {
	var t = e.lazyLoading;
	return t == "auto" && (t = !!(e && e.nodes && e.nodes.length > 700)), t;
}, e._getSvgAttributes = function(e) {
	let t = /width="([\d.]+)"/, n = /height="([\d.]+)"/, r = /x="([\d.]+)"/, i = /y="([\d.]+)"/, a = /viewBox="([^"]+)"/, o = e.match(t), s = e.match(n), c = e.match(r), l = e.match(i), u = e.match(a), d = o ? parseFloat(o[1]) : 0, f = s ? parseFloat(s[1]) : 0, p = c ? parseFloat(c[1]) : 0, m = l ? parseFloat(l[1]) : 0, h = [
		0,
		0,
		0,
		0
	];
	return u && (h = u[1], h = JSON.parse(`[${h}]`)), {
		width: d,
		height: f,
		viewBox: h,
		x: p,
		y: m
	};
}, e._setSvgAttributes = function(e, t) {
	var n = t.x, r = t.y, i = t.width, a = t.height, o = t.viewBox.join(",");
	let s = e.match(/<svg\s+([^>]*?)>/);
	if (!s) return e;
	let c = s[0], l = s[1], u = (e, t, n) => {
		if (n == null) return e;
		let r = RegExp(`\\s*${t}="[^"]*"`, "i"), i = ` ${t}="${n}"`;
		return e.match(r) ? e.replace(r, i) : e + i;
	};
	l = u(l, "x", n), l = u(l, "y", r), l = u(l, "width", i), l = u(l, "height", a), l = u(l, "viewBox", o);
	let d = `<svg ${l}>`;
	return e.replace(c, d);
}, e._convertTextToNodes = function(e, t) {
	let n = e.split(/\r?\n/).filter((e) => e.trim() !== ""), r = [], i = 1, a = [];
	for (let e of n) {
		let n = 0;
		for (; e.startsWith(t);) e = e.slice(t.length), n++;
		if (e = e.trim(), !e) continue;
		let o = e.match(/^\[([^\]]+)](.*)$/);
		if (o) {
			let e = o[1].trim(), t = o[2].trim();
			a.length > 0 && (a[a.length - 1][e] = t);
			continue;
		}
		let s = e.match(/^([^\(]+)\(([^)]+)\)$/), c, l = [];
		s ? (c = s[1].trim(), l = s[2].split(",").map((e) => e.trim())) : c = e;
		let u = n === 0 ? null : a[n - 1].id, d = {
			id: i++,
			pid: u,
			name: c,
			tags: l
		};
		a[n] = d, a.length = n + 1, r.push(d);
	}
	return r;
}, e._convertFromNodesToText = function(e, t) {
	let n = {}, r = [];
	e.forEach((e) => {
		n[e.id] = {
			...e,
			children: []
		};
	}), e.forEach((e) => {
		e.pid && n[e.pid] ? n[e.pid].children.push(n[e.id]) : r.push(n[e.id]);
	});
	function i(e, n) {
		let r = t.repeat(n), a = r + e.name;
		Array.isArray(e.tags) && e.tags.length > 0 && (a += "(" + e.tags.join(",") + ")"), a += "\n";
		for (let t of Object.keys(e)) [
			"id",
			"pid",
			"name",
			"children",
			"tags"
		].includes(t) || (a += r + "[" + t + "]" + e[t] + "\n");
		for (let t of e.children) a += i(t, n + 1);
		return a;
	}
	return r.map((e) => i(e, 0)).join("").trim();
}, e._onClickHandler = function(t, n, r, i, a) {
	var o;
	if (r === void 0) if (n === "add") {
		var s = {
			id: t.generateId(),
			pid: i
		};
		t.addNode(s, null, !0);
	} else if (n === "edit") {
		var c = t.getNode(i);
		t.editUI.show(c.id);
	} else if (n === "details") {
		var c = t.getNode(i);
		t.editUI.show(c.id, !0);
	} else if (n === "remove") t.removeNode(i, null, !0);
	else if (n === "svg_export" || n === "svg") {
		var l = {};
		e.isNEU(i) || (l.pages = [{ nodeId: i }]), t.exportToSVG(l);
	} else if (n === "pdf_export" || n === "pdf") {
		var l = {};
		e.isNEU(i) || (l.pages = [{ nodeId: i }]), t.exportToPDF(l);
	} else if (n === "png_export" || n === "png") {
		var l = {};
		e.isNEU(i) || (l.pages = [{ nodeId: i }]), t.exportToPNG(l);
	} else if (n === "visio_export" || n === "visio") t.exportToVisio({ nodeId: i });
	else if (n === "pp_export" || n === "powerpoint") t.exportToPowerPoint();
	else if (n === "pp_preview" || n === "pppreview") {
		var l = {
			parentLevels: 0,
			childLevels: 1,
			expandChildren: !1,
			pages: [{
				parentLevels: null,
				childLevels: null,
				expandChildren: !0,
				nodeId: t.roots[0].id
			}]
		};
		i != null && (l.expandChildren = !1, l.pages[0].nodeId = i), t.powerPointPreviewUI.show(l);
	} else if (n === "pdf_preview" || n === "pdfpreview") {
		var l = {
			parentLevels: 0,
			childLevels: 1,
			expandChildren: !1,
			pages: [{
				parentLevels: null,
				childLevels: null,
				expandChildren: !0,
				nodeId: t.roots[0].id
			}]
		};
		i != null && (l.expandChildren = !1, l.pages[0].nodeId = i), t.pdfPreviewUI.show(l);
	} else if (n === "svg_preview" || n === "svgpreview") {
		var l = {
			parentLevels: 0,
			childLevels: 1,
			expandChildren: !1,
			pages: [{
				parentLevels: null,
				childLevels: null,
				expandChildren: !0,
				nodeId: t.roots[0].id
			}]
		};
		i != null && (l.expandChildren = !1, l.pages[0].nodeId = i), t.svgPreviewUI.show(l);
	} else if (n === "png_preview" || n === "pngpreview") {
		var l = {
			parentLevels: 0,
			childLevels: 1,
			expandChildren: !1,
			pages: [{
				parentLevels: null,
				childLevels: null,
				expandChildren: !0,
				nodeId: t.roots[0].id
			}]
		};
		i != null && (l.expandChildren = !1, l.pages[0].nodeId = i), t.pngPreviewUI.show(l);
	} else n === "csv_export" || n === "csv" ? t.exportToCSV({ nodeId: i }) : n === "xml_export" || n === "xml" ? t.exportToXML({ nodeId: i }) : n === "json_export" || n === "json" ? t.exportToJSON({ nodeId: i }) : n === "fit" ? t.fit() : n === "expand_all" ? t.expand(null, "all") : n === "full_screen" ? t.toggleFullScreen() : n === "zoom_in" ? t.zoom(!0, null, !0) : n === "zoom_out" || n === "zoom_out" ? t.zoom(!1, null, !0) : n === "layout_mixed" ? t.setLayout(e.layout.mixed) : n === "layout_normal" ? t.setLayout(e.layout.normal) : n === "layout_right_offset" ? t.setLayout(e.layout.treeRightOffset) : n === "layout_left_offset" ? t.setLayout(e.layout.treeLeftOffset) : n === "layout_tree" ? t.setLayout(e.layout.tree) : n === "layout_grid" && t.setLayout(e.layout.grid);
	else o = r.call(t, i, a);
	return o;
}, e._isSVG = function(e) {
	if (typeof e != "string") return !1;
	let t = e.trim();
	if (!t.startsWith("<svg") || !t.endsWith("</svg>")) return !1;
	try {
		let e = new DOMParser().parseFromString(t, "image/svg+xml");
		return e.querySelector("parsererror") ? !1 : e.documentElement.nodeName.toLowerCase() === "svg";
	} catch {
		return !1;
	}
}, e._treeListAdjustToSTNodePostition = function(t, n) {
	for (var r of t) r.y += n.y + n.padding[0], r.x += n.x + n.padding[3], e._treeListAdjustToSTNodePostition(r.children, n);
}, e._treeListSetProps = function(t, n) {
	var r = -t.treeList.scrollTop, i = {
		nodesByLevels: [],
		lastNode: null,
		y: 0
	};
	t.treeList.pinnedIds = [], e._treeListIterate(t.stChildren, i, -1);
	var a = i.lastNode.y + i.lastNode.h - 0 - (t.treeList.maxHeight - t.padding[0] - t.padding[2]);
	r > 0 || a < 0 ? r = 0 : r != 0 && r * -1 > a && (r = -a);
	for (var o = i.nodesByLevels.length - 1; o >= 0; o--) for (var s = i.nodesByLevels[o], c = s.length - 1; c >= 0; c--) {
		for (var l = s[c], u = l.y, d = 0, f = l.parent; f && (d += f.h, f.parent);) f = f.parent;
		if (l.children.length && l.y + r <= d) {
			u = -r + d;
			var p = s[c + 1];
			if (p && p.y < u + l.h && (u = p.y - l.h), f) {
				var m = t.stChildren.indexOf(f);
				if (t.stChildren.length > m + 1) {
					var h = t.stChildren[m + 1];
					h.y < u + l.h && (u = h.y - l.h);
				}
			}
		}
		l.y != u && t.treeList.pinnedIds.push(l.id), l.y = u, l.x = 0;
	}
	if (n == e.orientation.bottom) {
		var g = i.lastNode.y + i.lastNode.h;
		for (var o of i.nodesByLevels) for (var l of o) l.y = g - l.y - l.h;
	}
	t.treeList.scrollTop = -r, t.treeList.scrollTopMax = a;
}, e._treeListIterate = function(t, n, r) {
	r++;
	for (var i of t) i.y = n.y, n.y += i.h, n.nodesByLevels[r] || (n.nodesByLevels[r] = []), n.nodesByLevels[r].push(i), n.lastNode = i, e._treeListIterate(i.children, n, r);
}, e._treeListGetTumbPositionFromScrollTop = function(e) {
	var t = e.h - e.padding[0] - e.padding[2], n = t / ((e.treeList.scrollTopMax + t) / 100), r = t / 100 * n, i = t - r, a = -e.treeList.scrollTop / (e.treeList.scrollTopMax / 100), o = e.y + e.padding[0] + i / -100 * a, s = "initial";
	return (isNaN(r) || isNaN(o) || r < 0 || n > 100) && (s = "none", r = 0, o = 0), {
		thumbHeight: r,
		thumbPosition: o,
		scrollBarDisplay: s
	};
}, e._treeListGetScrollTopFromTumbPosition = function(e, t, n) {
	var r = e.h - e.padding[0] - e.padding[2] - t, i = (n - (e.y + e.padding[0])) / r * 100 / 100 * e.treeList.scrollTopMax;
	return (isNaN(i) || i < 0) && (i = 0), i > e.treeList.scrollTopMax && (i = e.treeList.scrollTopMax), i;
}, e._getCenterNodeFromParams = function(e, t) {
	var n = e[t.id];
	if (n) {
		if (n.isTreeListItem) {
			for (; !n.stParent;) n = n.parent;
			n = n.stParent;
		}
		return n;
	}
	return null;
}, e._getScrollTopForNode = function(t, n) {
	var r = {
		nodesByLevels: [],
		lastNode: null,
		y: 0
	};
	e._treeListIterate(t.stChildren, r, -1);
	var i = null;
	for (var a of r.nodesByLevels) {
		for (var o of a) if (o.id == n) {
			i = o;
			break;
		}
		if (i) break;
	}
	if (!i) return t.treeList.scrollTop;
	for (var s = 0, c = i.parent; c && (s += c.h, c.parent);) c = c.parent;
	var l = t.padding[0], u = t.padding[2], d = t.treeList.maxHeight - l - u, f = r.lastNode.y + r.lastNode.h - d;
	f < 0 && (f = 0);
	var p = t.treeList.scrollTop, m = i.y - s, h = i.y + i.h - d, g = p;
	return i.y < p + s ? g = m : i.y + i.h > p + d && (g = i.h > d - s ? m : h), g < 0 ? g = 0 : g > f && (g = f), g;
}, e._getDefailtPositionForExpandCollpase = function(t, n) {
	var r = {
		x: 0,
		y: 0
	};
	switch (t.orientation) {
		case e.orientation.top:
		case e.orientation.top_left:
			r.x = n.w / 2, r.y = n.h;
			break;
		case e.orientation.bottom:
		case e.orientation.bottom_left:
			r.x = n.w / 2, r.y = 0;
			break;
		case e.orientation.right:
		case e.orientation.right_top:
			r.x = 0, r.y = n.h / 2;
			break;
		case e.orientation.left:
		case e.orientation.left_top:
			r.x = n.w, r.y = n.h / 2;
			break;
	}
	return r;
}, e._measureCache = {
	svg: null,
	text: null
}, e._getMeasureElement = function() {
	if (e._measureCache.svg) return e._measureCache.text;
	let t = "http://www.w3.org/2000/svg";
	return e._measureCache.svg = document.createElementNS(t, "svg"), e._measureCache.svg.id = "orgchart_js_test__measure", e._measureCache.svg.style.cssText = "position:absolute;top:-9999px;visibility:hidden;white-space:pre;", e._measureCache.text = document.createElementNS(t, "text"), e._measureCache.svg.appendChild(e._measureCache.text), document.body.appendChild(e._measureCache.svg), e._measureCache.text;
}, e._lineClamp = function(t, n, r, i) {
	if (n === void 0 || n == null) return "";
	typeof n != "string" && (n = n.toString()), n = e._escapeHtml(n);
	let a = /(\w+(?:-\w+)?)="([^"]*)"/g, o = {}, s;
	for (; (s = a.exec(t)) !== null;) o[s[1]] = s[2];
	let c = e._getMeasureElement();
	c.textContent = "";
	for (let [e, t] of Object.entries(o)) e !== "x" && e !== "y" && c.setAttribute(e, t);
	let l = (e) => (c.textContent = e, c.getComputedTextLength()), u = n.split(" "), d = [], f = "", p = 0;
	for (; p < u.length && d.length < i;) {
		let e = u[p], t = f ? f + " " + e : e;
		if (l(t) <= r) f = t, p++;
		else if (f === "") {
			let t = 0, n = e.length, i = 1;
			for (; t <= n;) {
				let a = t + n >> 1;
				l(e.slice(0, a)) <= r ? (i = a, t = a + 1) : n = a - 1;
			}
			d.push(e.slice(0, i)), u[p] = e.slice(i);
		} else d.push(f), f = "";
	}
	f && d.length < i && d.push(f);
	let m = p < u.length || p === u.length && u[p - 1] === "" && n.endsWith(" ");
	if (m && d.length > 0) {
		let e = d[d.length - 1], t = 0, n = e.length, i = "";
		for (; t <= n;) {
			let a = Math.floor((t + n) / 2), o = e.substring(0, a) + "...";
			l(o) <= r ? (i = o, t = a + 1) : n = a - 1;
		}
		d[d.length - 1] = i;
	}
	let h = ` x="${o.x || "0"}"`, g = d.length === 1 ? d[0] : d.map((e, t) => `<tspan${h} dy="${t === 0 ? 0 : "1.2em"}">${e}</tspan>`).join("");
	return `<text${Object.entries(o).map(([e, t]) => ` ${e}="${t}"`).join("")}>${m ? `<title>${n}</title>` : ""}${g}</text>`;
}, e._getScrollableTreeListNodeInTouchEnabledDevice = function(t) {
	if (!t || !t.isTreeListItem || !e._isTouchDevice()) return null;
	var n = e.getRootOf(t).stParent, { thumbHeight: r, thumbPosition: i, scrollBarDisplay: a } = e._treeListGetTumbPositionFromScrollTop(n);
	return a == "none" ? null : n;
}, e._convertImagesToBase64 = async function(t) {
	let n = new DOMParser();
	return await Promise.all(t.map(async (t) => {
		let r = n.parseFromString(t, "image/svg+xml"), i = r.querySelectorAll("image");
		for (let t of i) {
			let n = t.getAttribute("href") || t.getAttribute("xlink:href");
			if (n && !n.startsWith("data:")) try {
				let r = parseFloat(t.getAttribute("width")) || 0, i = parseFloat(t.getAttribute("height")) || 0;
				if (r > 0 && i > 0) {
					let a = await e._resizeAndConvert(n, r, i);
					t.setAttribute("href", a), t.removeAttributeNS("http://www.w3.org/1999/xlink", "href");
				}
			} catch (e) {
				console.error("Failed to process image:", n, e);
			}
		}
		return new XMLSerializer().serializeToString(r);
	}));
}, e._resizeAndConvert = function(e, t, n) {
	return new Promise((r, i) => {
		let a = new Image();
		a.crossOrigin = "anonymous", a.onload = () => {
			let e = document.createElement("canvas"), i = e.getContext("2d"), o = Math.min(t / a.width, n / a.height), s = a.width * o, c = a.height * o;
			e.width = s, e.height = c, i.drawImage(a, 0, 0, s, c), r(e.toDataURL("image/png"));
		}, a.onerror = i, a.src = e;
	});
}, e.xScrollUI = function(t, n, r, i, a) {
	this.element = t, this.requestParams = r, this.config = n, this.onSetViewBoxCallback = i, this.onDrawCallback = a, this.position = 0, this.bar = null, this._event_id = e._guid();
}, e.xScrollUI.prototype.addListener = function(t) {
	var n = this;
	if (this.config.mouseScrool != e.action.xScroll && this.config.mouseScrool != e.action.scroll || !this.bar) return;
	var r = navigator.userAgent.indexOf("Mac OS") !== -1;
	function i(t, i, a) {
		var o = !1;
		t.addEventListener("wheel", s, { passive: !1 });
		function s(t) {
			if (t.preventDefault(), !t.ctrlKey) {
				var a = 0;
				if (n.config.mouseScrool == e.action.xScroll) a = t.deltaX || t.wheelDeltaX, a ||= t.deltaY || t.wheelDeltaY;
				else if (n.config.mouseScrool == e.action.scroll && (a = r || !t.shiftKey ? t.deltaX || t.wheelDeltaX : t.deltaY || t.wheelDeltaY, !a)) return;
				a = -a, a = Math.max(-1, Math.min(1, a)), n.position += -a * i;
				var s = parseFloat(n.innerBar.clientWidth) - parseFloat(n.bar.clientWidth);
				n.position < 0 && (n.position = 0), n.position > s && (n.position = s), o || c();
			}
		}
		function c() {
			o = !0;
			var e = (n.position - n.bar.scrollLeft) / a;
			if (e > 0) e++;
			else if (e == 0) {
				o = !1;
				return;
			} else e--;
			Math.ceil(n.bar.scrollLeft) == Math.ceil(n.position) ? o = !1 : (n.bar.scrollLeft += e, l(c));
		}
		var l = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
				setTimeout(e, 20);
			};
		}();
	}
	var a = e._getScrollSensitivity();
	i(t, a.speed, a.smooth);
}, e.xScrollUI.prototype.create = function(t) {
	if (!(this.config.showXScroll !== !0 && this.config.mouseScrool !== e.action.scroll && this.config.mouseScrool !== e.action.xScroll)) {
		var n = this;
		this.bar && this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), this.bar = document.createElement("div"), this.innerBar = document.createElement("div"), this.requestParams(), this.innerBar.innerHTML = "&nbsp", Object.assign(this.bar.style, {
			position: "absolute",
			left: 0,
			bottom: 0,
			width: t + "px",
			"overflow-x": "scroll",
			height: "20px"
		}), this.element.appendChild(this.bar), this.bar.appendChild(this.innerBar), this.bar.addEventListener("scroll", function() {
			if (this.ignore) {
				this.ignore = !1;
				return;
			}
			var e = n.requestParams(), t = (parseFloat(n.innerBar.clientWidth) - parseFloat(n.bar.clientWidth)) / 100, r = this.scrollLeft / t, i = (e.boundary.right - e.boundary.left) / 100;
			e.viewBox[0] = r * i + e.boundary.left, n.onSetViewBoxCallback(e.viewBox), clearTimeout(this._timeout), this._timeout = setTimeout(function() {
				n.onDrawCallback();
			}, 500);
		});
	}
}, e.xScrollUI.prototype.setPosition = function() {
	if (this.bar) {
		var t = this.requestParams(), n = (Math.abs(t.boundary.maxX - t.boundary.minX) + this.config.padding * 2) * t.scale;
		switch (this.config.orientation) {
			case e.orientation.right:
			case e.orientation.right_top:
				n = Math.abs(t.boundary.minX * t.scale);
				break;
		}
		this.innerBar.style.width = n + "px";
		var r = (t.boundary.right - t.boundary.left) / 100, i = (t.viewBox[0] - t.boundary.left) / r;
		i < 0 ? i = 0 : i > 100 && (i = 100);
		var a = (parseFloat(this.innerBar.clientWidth) - parseFloat(this.bar.clientWidth)) / 100, o = i * a;
		this.bar.ignore = !0, this.bar.scrollLeft = o, this.position = this.bar.scrollLeft, a <= 0 ? this.bar.style.visibility = "hidden" : this.bar.style.visibility = "", this.config.showXScroll !== !0 && (this.bar.style.visibility = "hidden"), e.events.publish("change", [this, { isScrollBarVisible: this.bar.style.visibility != "hidden" }]);
	}
}, e.xScrollUI.prototype.on = function(t, n) {
	return e.events.on(t, n, this._event_id), this;
}, e.yScrollUI = function(t, n, r, i, a) {
	this.element = t, this.requestParams = r, this.config = n, this.onSetViewBoxCallback = i, this.onDrawCallback = a, this.position = 0, this.bar = null, this._event_id = e._guid();
}, e.yScrollUI.prototype.addListener = function(t) {
	var n = this;
	if (this.config.mouseScrool != e.action.yScroll && this.config.mouseScrool != e.action.scroll || !this.bar) return;
	var r = navigator.userAgent.indexOf("Mac OS") !== -1;
	function i(t, i, a) {
		var o = !1;
		t.addEventListener("wheel", s, { passive: !1 });
		function s(t) {
			if (t.preventDefault(), !t.ctrlKey) {
				var a = 0;
				if (n.config.mouseScrool == e.action.yScroll) a = t.deltaY || t.wheelDeltaY, a ||= t.deltaX || t.wheelDeltaX;
				else if (n.config.mouseScrool == e.action.scroll && (a = r || !t.shiftKey ? t.deltaY || t.wheelDeltaY : t.deltaX || t.wheelDeltaX, !a)) return;
				a = -a, a = Math.max(-1, Math.min(1, a)), n.position += -a * i;
				var s = parseFloat(n.innerBar.clientHeight) - parseFloat(n.bar.clientHeight);
				n.position < 0 && (n.position = 0), n.position > s && (n.position = s), o || c();
			}
		}
		function c() {
			o = !0;
			var e = (n.position - n.bar.scrollTop) / a;
			if (e > 0) e++;
			else if (e == 0) {
				o = !1;
				return;
			} else e--;
			Math.ceil(n.bar.scrollTop) == Math.ceil(n.position) ? o = !1 : (n.bar.scrollTop += e, l(c));
		}
		var l = function() {
			return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
				setTimeout(e, 20);
			};
		}();
	}
	var a = e._getScrollSensitivity();
	i(t, a.speed, a.smooth);
}, e.yScrollUI.prototype.create = function(t) {
	if (!(this.config.showYScroll !== !0 && this.config.mouseScrool !== e.action.scroll && this.config.mouseScrool !== e.action.yScroll)) {
		var n = this;
		this.bar && this.bar.parentNode && this.bar.parentNode.removeChild(this.bar), this.bar = document.createElement("div"), this.innerBar = document.createElement("div"), this.innerBar.innerHTML = "&nbsp", Object.assign(this.bar.style, {
			position: "absolute",
			right: 0,
			bottom: 0,
			height: t + "px",
			"overflow-y": "scroll",
			width: "20px"
		}), this.element.appendChild(this.bar), this.bar.appendChild(this.innerBar), this.bar.addEventListener("scroll", function() {
			if (this.ignore) {
				this.ignore = !1;
				return;
			}
			var e = n.requestParams(), t = (parseFloat(n.innerBar.clientHeight) - parseFloat(n.bar.clientHeight)) / 100, r = this.scrollTop / t, i = (e.boundary.bottom - e.boundary.top) / 100;
			e.viewBox[1] = r * i + e.boundary.top, n.onSetViewBoxCallback(e.viewBox), clearTimeout(this._timeout), this._timeout = setTimeout(function() {
				n.onDrawCallback();
			}, 500);
		});
	}
}, e.yScrollUI.prototype.setPosition = function() {
	if (this.bar) {
		var t = this.requestParams(), n = (Math.abs(t.boundary.maxY - t.boundary.minY) + this.config.padding * 2) * t.scale;
		switch (this.config.orientation) {
			case e.orientation.bottom:
			case e.orientation.bottom_left:
				n = Math.abs(t.boundary.minY * t.scale);
				break;
		}
		this.innerBar.style.height = n + "px";
		var r = (t.boundary.bottom - t.boundary.top) / 100, i = (t.viewBox[1] - t.boundary.top) / Math.abs(r);
		i < 0 ? i = 0 : i > 100 && (i = 100);
		var a = (parseFloat(this.innerBar.clientHeight) - parseFloat(this.bar.clientHeight)) / 100, o = i * a;
		this.bar.ignore = !0, this.bar.scrollTop = o, this.position = this.bar.scrollTop, a <= 0 ? this.bar.style.visibility = "hidden" : this.bar.style.visibility = "", this.config.showYScroll !== !0 && (this.bar.style.visibility = "hidden"), e.events.publish("change", [this, { isScrollBarVisible: this.bar.style.visibility != "hidden" }]);
	}
}, e.yScrollUI.prototype.on = function(t, n) {
	return e.events.on(t, n, this._event_id), this;
}, e.prototype.zoom = function(t, n, r, i) {
	var a = this.getViewBox().slice(0), o = a, s = a[2], c = a[3];
	t === !0 ? (a[2] /= e.SCALE_FACTOR, a[3] /= e.SCALE_FACTOR) : t === !1 ? (a[2] *= e.SCALE_FACTOR, a[3] *= e.SCALE_FACTOR) : (a[2] /= t, a[3] /= t), n ||= [50, 50], a[0] = o[0] - (a[2] - s) / (100 / n[0]), a[1] = o[1] - (a[3] - c) / (100 / n[1]);
	var l = this.getScale(a);
	if (a[2] = this.width() / l, a[3] = this.height() / l, t === !0 && l < this.config.scaleMax || t === !1 && l > this.config.scaleMin || t != 0 && t != 1 && l < this.config.scaleMax && l > this.config.scaleMin) {
		this._hideBeforeAnimation();
		var u = this;
		r ? (clearTimeout(u._timeout), e.animate(this.getSvg(), { viewbox: this.getViewBox() }, { viewbox: a }, this.config.anim.duration, this.config.anim.func, function() {
			clearTimeout(u._timeout), u._timeout = setTimeout(function() {
				u._draw(!0, e.action.zoom, null, i);
			}, 500);
		})) : (this.setViewBox(a), clearTimeout(u._timeout), u._timeout = setTimeout(function() {
			u._draw(!0, e.action.zoom, null, i);
		}, 500));
	}
}, e.loading = {}, e.loading.show = function(e) {
	var t = "<style>@-webkit-keyframes dot-keyframes {0% { opacity: .4; -webkit-transform: scale(1, 1);transform: scale(1, 1);}50% {opacity: 1;-webkit-transform: scale(1.2, 1.2);transform: scale(1.2, 1.2);}100% {opacity: .4;-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@keyframes dot-keyframes {0% {opacity: .4;-webkit-transform: scale(1, 1);transform: scale(1, 1);}50% {opacity: 1;-webkit-transform: scale(1.2, 1.2);transform: scale(1.2, 1.2);}100% {opacity: .4;-webkit-transform: scale(1, 1);transform: scale(1, 1);}}.boc-loading-dots div {margin: 10px;}      .boc-dot-1 {background-color: #039BE5;}.boc-dot-2 {background-color: #F57C00;}.boc-dot-3 {background-color: #FFCA28;}      .boc-loading-dots {text-align: center;width: 100%; position: absolute; top: 0;}.boc-loading-dots--dot {-webkit-animation: dot-keyframes 1.5s infinite ease-in-out;animation: dot-keyframes 1.5s infinite ease-in-out;        border-radius: 10px;display: inline-block;height: 10px;width: 10px;}.boc-loading-dots--dot:nth-child(2) {-webkit-animation-delay: .5s;animation-delay: .5s;}.boc-loading-dots--dot:nth-child(3) {-webkit-animation-delay: 1s;animation-delay: 1s;}</style><div class=\"boc-loading-dots\"><div class=\"boc-loading-dots--dot boc-dot-1\"></div><div class=\"boc-loading-dots--dot boc-dot-2\"></div><div class=\"boc-loading-dots--dot boc-dot-3\"></div></div>", n = document.createElement("div");
	n.id = "boc-loading", n.innerHTML = t, e.element.appendChild(n);
}, e.loading.hide = function(e) {
	var t = e.element.querySelector("#boc-loading");
	t && t.parentNode.removeChild(t);
}, e.pdfPrevUI = {}, e.pdfPrevUI.show = function(e, t) {
	console.warn("OrgChart.pdfPrevUI.show is obsolete; use chart.pdfPreviewUI.show instead.");
}, e.pdfPrevUI.hide = function() {
	console.warn("OrgChart.pdfPrevUI.hide is obsolete; use chart.pdfPreviewUI.hide instead.");
}, e === void 0 && (e = {}), e.events.on("renderdefs", function(t, n) {
	for (var r = 0; r < t.config.clinks.length; r++) {
		var i = t.config.clinks[r].template;
		i ||= "orange";
		var a = e.clinkTemplates[i];
		n.defs += a.defs;
	}
}), e.events.on("prerender", function(t, n) {
	e.RENDER_CLINKS_BEFORE_NODES && t._clink(t, n);
}), e.events.on("render", function(t, n) {
	e.RENDER_CLINKS_BEFORE_NODES || t._clink(t, n);
}), e.events.on("drag", function(t, n, r, i) {
	if (t instanceof e && t.config.movable && i) for (var a = 0; a < i.length; a++) {
		for (var o = i[a], s = t.element.querySelectorAll(`[data-c-l-from="${o}"]`), c = t.element.querySelectorAll(`[data-c-l-to="${o}"]`), l = 0; l < s.length; l++) s[l].parentNode.removeChild(s[l]);
		for (var l = 0; l < c.length; l++) c[l].parentNode.removeChild(c[l]);
	}
}), e.prototype._clink = function(t, n) {
	for (var r = "", i = 0; i < this.config.clinks.length; i++) {
		var a = this.config.clinks[i], o = t.getNode(a.from), s = t.getNode(a.to);
		if (!o || n.res.visibleNodeIds.indexOf(o.id) == -1 || !s || n.res.visibleNodeIds.indexOf(s.id) == -1) continue;
		var c = o.x, l = o.y, u = s.x, d = s.y, f = {}, p = {}, m = c + o.w / 2, h = u + s.w / 2, g = l + o.h / 2, _ = d + s.h / 2, v = 1;
		switch (this.config.orientation) {
			case e.orientation.top:
			case e.orientation.top_left:
				m <= h ? (v = 1, f.x = m + o.w / 10, p.x = h - s.w / 10) : (v = -1, f.x = m - o.w / 10, p.x = h + s.w / 10), l == d ? (v = 1, f.y = l, p.y = d) : l > d ? (f.y = l, p.y = d + s.h) : (f.y = l + o.h, p.y = d);
				break;
			case e.orientation.bottom:
			case e.orientation.bottom_left:
				m <= h ? (v = -1, f.x = m + o.w / 10, p.x = h + s.w / 10) : (v = 1, f.x = m - o.w / 10, p.x = h + s.w / 10), l == d ? (v = -1, f.y = l + o.h, p.y = d + s.h) : l > d ? (f.y = l, p.y = d + s.h) : (f.y = l + o.h, p.y = d);
				break;
			case e.orientation.left:
			case e.orientation.left_top:
				g <= _ ? (v = -1, f.y = g + o.h / 5, p.y = _ + s.h / 5) : (v = 1, f.y = g - o.h / 5, p.y = _ + s.h / 5), c == u ? (v = -1, f.x = c, p.x = u) : c > u ? (f.x = c, p.x = u + s.w) : (f.x = c + o.w, p.x = u);
				break;
			case e.orientation.right:
			case e.orientation.right_top:
				g <= _ ? (v = 1, f.y = g + o.h / 5, p.y = _ + s.h / 5) : (v = -1, f.y = g - o.h / 5, p.y = _ + s.h / 5), c == u ? (v = 1, f.x = c + o.w, p.x = u + s.w) : c > u ? (f.x = c, p.x = u + s.w) : (f.x = c + o.w, p.x = u);
				break;
		}
		function w(t, n, r) {
			r ??= 1;
			var i = n.x - t.x, o = n.y - t.y, s = Math.sqrt((n.x - t.x) ** 2 + (n.y - t.y) ** 2) / 3;
			return s = s / (Math.sqrt(i * i + o * o) * r) * e.clinkCurve(a), {
				x: t.x + i / 2 - o * s,
				y: t.y + o / 2 + i * s
			};
		}
		var y = w(f, p, v), b = a.template;
		b ||= "orange";
		var x = e.clinkTemplates[b];
		if (a.label) {
			var S = e.clinkLabelPosition(a, f, p, y);
			r += x.label.replace("{x}", S.x).replace("{y}", S.y).replace("{val}", a.label);
		}
		var C = "M" + f.x + "," + f.y + "C" + f.x + "," + f.y + " " + y.x + "," + y.y + " " + p.x + "," + p.y;
		r += ("<g " + e.attr.c_link_from + "=\"{from}\" " + e.attr.c_link_to + "=\"{to}\">").replace("{from}", o.id).replace("{to}", s.id) + x.link.replaceAll("{d}", C) + "<path stroke=\"transparent\" stroke-width=\"15\" fill=\"none\" d=\"" + C + "\" />", r += e.grCloseTag;
	}
	n.content += r;
}, e.clinkLabelPosition = function(e, t, n, r) {
	var i = (n.x - t.x) / 2 + t.x, a = (n.y - t.y) / 2 + t.y;
	return {
		x: (i - r.x) / 2 + r.x,
		y: (a - r.y) / 2 + r.y
	};
}, e.clinkCurve = function(t) {
	return e.CLINK_CURVE;
}, e.prototype.addClink = function(t, n, r, i) {
	this._putInUndoStack(), this.clearRedo();
	for (var a = this.config.clinks.length - 1; a >= 0; a--) {
		var o = this.config.clinks[a];
		o.from == t && o.to == n && this.config.clinks.splice(a, 1);
	}
	return this.config.clinks.push({
		from: t,
		to: n,
		label: r,
		template: i
	}), this._ai.setContext(), e.events.publish("updated", [this]), this;
}, e.prototype.removeClink = function(t, n) {
	this._putInUndoStack(), this.clearRedo();
	for (var r = this.config.clinks.length - 1; r >= 0; r--) {
		var i = this.config.clinks[r];
		i.from == t && i.to == n && this.config.clinks.splice(r, 1);
	}
	return this._ai.setContext(), e.events.publish("updated", [this]), this;
}, e.clinkTemplates = {}, e.clinkTemplates.orange = {
	defs: "<marker id=\"arrowOrange\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path fill=\"#F57C00\" d=\"M 0 0 L 10 5 L 0 10 z\" /></marker><marker id=\"dotOrange\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\"> <circle cx=\"5\" cy=\"5\" r=\"5\" fill=\"#F57C00\" /></marker>",
	link: "<path marker-start=\"url(#dotOrange)\" marker-end=\"url(#arrowOrange)\" stroke=\"#F57C00\" stroke-width=\"2\" fill=\"none\" d=\"{d}\" />",
	label: "<text fill=\"#F57C00\" text-anchor=\"middle\" x=\"{x}\" y=\"{y}\">{val}</text>"
}, e.clinkTemplates.blue = {
	defs: "<marker id=\"arrowBlue\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path fill=\"#039BE5\" d=\"M 0 0 L 10 5 L 0 10 z\" /></marker><marker id=\"dotBlue\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\"> <circle cx=\"5\" cy=\"5\" r=\"5\" fill=\"#039BE5\" /></marker>",
	link: "<path marker-start=\"url(#dotBlue)\" marker-end=\"url(#arrowBlue)\" stroke=\"#039BE5\" stroke-width=\"2\" fill=\"none\" d=\"{d}\" />",
	label: "<text fill=\"#039BE5\"  text-anchor=\"middle\" x=\"{x}\" y=\"{y}\">{val}</text>"
}, e.clinkTemplates.yellow = {
	defs: "<marker id=\"arrowYellow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path fill=\"#FFCA28\" d=\"M 0 0 L 10 5 L 0 10 z\" /></marker><marker id=\"dotYellow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\"> <circle cx=\"5\" cy=\"5\" r=\"5\" fill=\"#FFCA28\" /></marker>",
	link: "<path marker-start=\"url(#dotYellow)\" marker-end=\"url(#arrowYellow)\" stroke=\"#FFCA28\" stroke-width=\"2\" fill=\"none\" d=\"{d}\" />",
	label: "<text fill=\"#FFCA28\"  text-anchor=\"middle\" x=\"{x}\" y=\"{y}\">{val}</text>"
}, e === void 0 && (e = {}), e.events.on("renderdefs", function(t, n) {
	for (var r = 0; r < t.config.slinks.length; r++) {
		var i = t.config.slinks[r].template;
		i ||= "orange";
		var a = e.slinkTemplates[i];
		n.defs += a.defs;
	}
}), e.events.on("render", function(e, t) {
	e._slinks(e, t);
}), e.events.on("drag", function(t, n, r, i) {
	if (t instanceof e && t.config.movable && i) for (var a = 0; a < i.length; a++) {
		for (var o = i[a], s = t.element.querySelectorAll(`[data-s-l-from="${o}"]`), c = t.element.querySelectorAll(`[data-s-l-to="${o}"]`), l = 0; l < s.length; l++) s[l].parentNode.removeChild(s[l]);
		for (var l = 0; l < c.length; l++) c[l].parentNode.removeChild(c[l]);
	}
}), e.prototype._slinks = function(t, n) {
	var r = "", i = this.getScale(), a = n.res.boundary;
	function o(e, t) {
		return {
			x: (e[0] + t[0]) / 2,
			y: (e[1] + t[1]) / 2
		};
	}
	function s(n, r, o, s, c) {
		var l = [], u = null, d = e.t(n.templateName, n.min, i), f = s.levelSeparation;
		n.parent && n.parent.layout && (f = s.mixedHierarchyNodesSeparation);
		var p;
		switch (s.orientation) {
			case e.orientation.top:
			case e.orientation.top_left:
				p = {
					p: n.x + n.w / 2,
					q: n.y,
					r: n.x + n.w / 2,
					s: a.minY + f
				};
				break;
			case e.orientation.bottom:
			case e.orientation.bottom_left:
				p = {
					p: n.x + n.w / 2,
					q: n.y + n.h,
					r: n.x + n.w / 2,
					s: a.maxY
				};
				break;
			case e.orientation.left:
			case e.orientation.left_top:
				p = {
					p: n.x,
					q: n.y + n.h / 2,
					r: a.minX + f,
					s: n.y + n.h / 2
				};
				break;
			case e.orientation.right:
			case e.orientation.right_top:
				p = {
					p: n.x + n.w,
					q: n.y + n.h / 2,
					r: a.maxX,
					s: n.y + n.h / 2
				};
				break;
		}
		if (n.sl == r.sl) switch (u = r, s.orientation) {
			case e.orientation.top:
			case e.orientation.top_left:
				l.push([p.p, p.q]), l.push([p.p, p.q - e.SLINK_GAP * 2]), d = e.t(u.templateName, u.min, i), l.push([u.x + u.w / 2, l[l.length - 1][1]]), l.push([l[l.length - 1][0], u.y]);
				break;
			case e.orientation.bottom:
			case e.orientation.bottom_left:
				l.push([p.p, p.q]), l.push([p.p, p.q + e.SLINK_GAP * 2]), d = e.t(u.templateName, u.min, i), l.push([u.x + u.w / 2, l[l.length - 1][1]]), l.push([l[l.length - 1][0], u.y + u.h]);
				break;
			case e.orientation.left:
			case e.orientation.left_top:
				l.push([p.p, p.q]), l.push([p.p - e.SLINK_GAP * 2, p.q]), d = e.t(u.templateName, u.min, i), l.push([l[l.length - 1][0], u.y + u.h / 2]), l.push([u.x, l[l.length - 1][1]]);
				break;
			case e.orientation.right:
			case e.orientation.right_top:
				l.push([p.p, p.q]), l.push([p.p + e.SLINK_GAP * 2, p.q]), d = e.t(u.templateName, u.min, i), l.push([l[l.length - 1][0], u.y + u.h / 2]), l.push([u.x + u.w, l[l.length - 1][1]]);
				break;
		}
		else {
			switch (s.orientation) {
				case e.orientation.top:
				case e.orientation.top_left:
					l.push([p.p, p.q]), l.push([p.r, n.y - e.SLINK_GAP * 2]);
					break;
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					l.push([p.p, p.q]), l.push([p.r, n.y + n.h + e.SLINK_GAP * 2]);
					break;
				case e.orientation.left:
				case e.orientation.left_top:
					l.push([p.p, p.q]), l.push([n.x - e.SLINK_GAP * 2, p.s]);
					break;
				case e.orientation.right:
				case e.orientation.right_top:
					l.push([p.p, p.q]), l.push([n.x + n.w + e.SLINK_GAP * 2, p.s]);
					break;
			}
			for (var m = n, h = n; h.parent;) h = h.parent;
			for (; u == null;) {
				var g = !1, _ = m.parent, v = _.leftNeighbor, y = _.rightNeighbor;
				if (_.id == r.id ? u = _ : e._intersects(_, p, s) && (p = e._addPoint(_, l, s, p, c), g = !0), _.id != r.id) {
					for (; v;) {
						if (v.id == r.id) {
							u = v;
							break;
						}
						e._intersects(v, p, s) && (p = e._addPoint(v, l, s, p, c), g = !0), v = v.leftNeighbor;
					}
					for (; y;) {
						if (y.id == r.id) {
							u = y;
							break;
						}
						e._intersects(y, p, s) && (p = e._addPoint(y, l, s, p, c), g = !0), y = y.rightNeighbor;
					}
				}
				if (!g) {
					var b = 0, x = 0;
					if (_.parent) {
						f = s.levelSeparation, _.parent.layout && (f = s.mixedHierarchyNodesSeparation);
						var S = t.manager.bordersByRootIdAndLevel[h.id][_.parent.sl];
						switch (s.orientation) {
							case e.orientation.top:
							case e.orientation.top_left:
								b = l[l.length - 1][0], x = S.maxY + f - e.SLINK_GAP;
								break;
							case e.orientation.bottom:
							case e.orientation.bottom_left:
								b = l[l.length - 1][0], x = S.minY - f + e.SLINK_GAP;
								break;
							case e.orientation.left:
							case e.orientation.left_top:
								b = S.maxX + f - e.SLINK_GAP, x = l[l.length - 1][1];
								break;
							case e.orientation.right:
							case e.orientation.right_top:
								b = S.minX - f + e.SLINK_GAP, x = l[l.length - 1][1];
								break;
						}
					}
					l.push([b, x]);
				}
				m = _;
			}
			switch (d = e.t(u.templateName, u.min, i), l.splice(l.length - 1, 1), s.orientation) {
				case e.orientation.top:
				case e.orientation.top_left:
					var C = d.expandCollapseSize;
					c == "left" && (C *= -1), l.push([u.x + u.w / 2 + C, l[l.length - 1][1]]), l.push([l[l.length - 1][0], u.y + u.h]);
					break;
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					var C = d.expandCollapseSize;
					c == "left" && (C *= -1), l.push([u.x + u.w / 2 + C, l[l.length - 1][1]]), l.push([l[l.length - 1][0], u.y]);
					break;
				case e.orientation.left:
				case e.orientation.left_top:
					var C = d.expandCollapseSize;
					c == "top" && (C *= -1), l.push([l[l.length - 1][0], u.y + u.h / 2 + C]), l.push([u.x + u.w, l[l.length - 1][1]]);
					break;
				case e.orientation.right:
				case e.orientation.right_top:
					var C = d.expandCollapseSize;
					c == "top" && (C *= -1), l.push([l[l.length - 1][0], u.y + u.h / 2 + C]), l.push([u.x, l[l.length - 1][1]]);
					break;
			}
		}
		return o && (l = l.reverse()), l;
	}
	for (var c = [], l = [], u = [], d = [], f = [], p = 0; p < this.config.slinks.length; p++) {
		var m = this.config.slinks[p], h = t.getNode(m.from), g = t.getNode(m.to);
		if (h && g && n.res.visibleNodeIds.indexOf(g.id) != -1 && n.res.visibleNodeIds.indexOf(h.id) != -1) {
			var _ = h.lcn ? h.lcn : "base", v = t._layoutConfigs[_], y = h.sl < g.sl, b = "left";
			switch (v.orientation) {
				case e.orientation.top:
				case e.orientation.top_left:
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					g.x >= h.x && (b = "right");
					break;
				case e.orientation.left:
				case e.orientation.left_top:
				case e.orientation.right:
				case e.orientation.right_top:
					b = "top", g.y > h.y && (b = "bottom");
					break;
			}
			var x = y ? s(g, h, y, v, b) : s(h, g, y, v, b);
			c.push(x), l.push(m), d.push(b), u.push(v), f.push({
				from: h,
				to: g
			});
		}
	}
	for (var p = 0; p < c.length; p++) {
		var x = c[p], m = l[p], b = d[p];
		switch (e._slinkRemoveUnusedPoints(x), v.orientation) {
			case e.orientation.top:
			case e.orientation.top_left:
			case e.orientation.bottom:
			case e.orientation.bottom_left:
				e._slinkAvoidOverlaping(t._connectorLines, x, b, v.orientation);
				break;
			case e.orientation.left:
			case e.orientation.left_top:
			case e.orientation.right:
			case e.orientation.right_top:
				e._slinkAvoidOverlaping2(t._connectorLines, x, b, v.orientation);
				break;
		}
	}
	for (var p = c.length - 1; p >= 0; p--) {
		var x = c[p], m = l[p];
		switch (v.orientation) {
			case e.orientation.top:
			case e.orientation.top_left:
			case e.orientation.bottom:
			case e.orientation.bottom_left:
				e._slinkAvoidOverlapingSecond(t._connectorLines, x, v.orientation);
				break;
			case e.orientation.left:
			case e.orientation.left_top:
			case e.orientation.right:
			case e.orientation.right_top:
				e._slinkAvoidOverlapingSecond2(t._connectorLines, x, v.orientation);
				break;
		}
	}
	for (var p = 0; p < c.length; p++) {
		var x = c[p], m = l[p], v = u[p], h = f[p].from, g = f[p].to, S = m.template;
		S ||= "orange";
		var C = e.slinkTemplates[S], w = null;
		switch (C.labelPosition) {
			case "start":
				w = {
					x: x[1][0],
					y: x[1][1]
				};
				break;
			case "middle":
				var T = Math.ceil(x.length / 2);
				w = o(x[T], x[T - 1]);
				break;
			case "end":
				w = {
					x: x[x.length - 2][0],
					y: x[x.length - 2][1]
				};
				break;
		}
		var E = structuredClone(x);
		E[0].unshift("M");
		for (var D = 1; D < x.length; D++) E[D].unshift("L");
		var O = e.roundPathCorners(E, e.LINK_ROUNDED_CORNERS, !1);
		if (m.label) {
			var k = C.label.replace("{x}", w.x).replace("{y}", w.y).replace("{val}", m.label), A = e._getLabelSize(k), j = -(A.height / 2);
			switch (v.orientation) {
				case e.orientation.bottom:
				case e.orientation.bottom_left:
					j = A.height;
					break;
			}
			r += C.label.replace("{x}", w.x).replace("{y}", w.y + j).replace("{val}", m.label);
		}
		var M = h.id, N = g.id;
		y && (M = g.id, N = h.id), r += ("<g " + e.attr.s_link_from + "=\"{from}\" " + e.attr.s_link_to + "=\"{to}\">").replace("{from}", M).replace("{to}", N) + C.link.replaceAll("{d}", O) + "<path stroke=\"transparent\" stroke-width=\"15\" fill=\"none\" d=\"" + O + "\" />", r += e.grCloseTag;
	}
	n.content += r;
}, e.prototype.addSlink = function(t, n, r, i) {
	this._putInUndoStack(), this.clearRedo();
	for (var a = this.config.slinks.length - 1; a >= 0; a--) {
		var o = this.config.slinks[a];
		o.from == t && o.to == n && this.config.slinks.splice(a, 1);
	}
	return this.config.slinks.push({
		from: t,
		to: n,
		label: r,
		template: i
	}), this._ai.setContext(), e.events.publish("updated", [this]), this;
}, e.prototype.removeSlink = function(t, n) {
	this._putInUndoStack(), this.clearRedo();
	for (var r = this.config.slinks.length - 1; r >= 0; r--) {
		var i = this.config.slinks[r];
		i.from == t && i.to == n && this.config.slinks.splice(r, 1);
	}
	return this._ai.setContext(), e.events.publish("updated", [this]), this;
}, e.slinkTemplates = {}, e.slinkTemplates.orange = {
	defs: "<marker id=\"arrowSlinkOrange\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path fill=\"#F57C00\" d=\"M 0 0 L 10 5 L 0 10 z\" /></marker><marker id=\"dotSlinkOrange\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\"> <circle cx=\"5\" cy=\"5\" r=\"5\" fill=\"#F57C00\" /></marker>",
	link: "<path stroke-dasharray=\"4, 2\" marker-start=\"url(#dotSlinkOrange)\" marker-end=\"url(#arrowSlinkOrange)\" stroke-linejoin=\"round\" stroke=\"#F57C00\" stroke-width=\"2\" fill=\"none\" d=\"{d}\" />",
	label: "<text dominant-baseline=\"middle\" fill=\"#F57C00\" alignment-baseline=\"middle\" text-anchor=\"middle\" x=\"{x}\" y=\"{y}\">{val}</text>",
	labelPosition: "middle"
}, e.slinkTemplates.blue = {
	defs: "<marker id=\"arrowSlinkBlue\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path fill=\"#039BE5\" d=\"M 0 0 L 10 5 L 0 10 z\" /></marker><marker id=\"dotSlinkBlue\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\"> <circle cx=\"5\" cy=\"5\" r=\"5\" fill=\"#039BE5\" /></marker>",
	link: "<path stroke-dasharray=\"4, 2\" marker-start=\"url(#dotSlinkBlue)\" marker-end=\"url(#arrowSlinkBlue)\" stroke-linejoin=\"round\" stroke=\"#039BE5\" stroke-width=\"2\" fill=\"none\" d=\"{d}\" />",
	label: "<text fill=\"#039BE5\" text-anchor=\"middle\" x=\"{x}\" y=\"{y}\">{val}</text>",
	labelPosition: "middle"
}, e.slinkTemplates.yellow = {
	defs: "<marker id=\"arrowSlinkYellow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path fill=\"#FFCA28\" d=\"M 0 0 L 10 5 L 0 10 z\" /></marker><marker id=\"dotSlinkYellow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\"> <circle cx=\"5\" cy=\"5\" r=\"5\" fill=\"#FFCA28\" /></marker>",
	link: "<path stroke-dasharray=\"4, 2\" marker-start=\"url(#dotSlinkYellow)\" marker-end=\"url(#arrowSlinkYellow)\" stroke-linejoin=\"round\" stroke=\"#FFCA28\" stroke-width=\"2\" fill=\"none\" d=\"{d}\" />",
	label: "<text  fill=\"#FFCA28\" text-anchor=\"middle\" x=\"{x}\" y=\"{y}\">{val}</text>",
	labelPosition: "middle"
}, e._ai = function(e) {
	this.instance = e, this.sessionId = null;
}, e._ai.prototype.prompt = function(e, t) {
	var n = this;
	e = e.trim(), e && (this.sessionId ? n._prompt([{
		Role: "user",
		Text: e
	}], t) : this.setContext(function() {
		n._prompt([{
			Role: "user",
			Text: e
		}], t);
	}));
}, e._ai.prototype._prompt = function(t, n) {
	var r = this, i = [];
	for (var a of e.AI_SYSTEM_MESSAGES) i.push({
		Role: "system",
		Text: a
	});
	var o = this.instance.config.serverUrl + `/OrgChartJSAI/Prompt?client_messages=${encodeURIComponent(JSON.stringify(t))}&system_messages=${encodeURIComponent(JSON.stringify(i))}&sessionId=${this.sessionId}`;
	let s = new EventSource(o);
	s.onmessage = function(e) {
		var t = JSON.parse(e.data), i = "";
		t.kind == "end" && s.close(), t.kind == "text" && (i += t.text, n && n(t.text)), t.kind == "assistant-message-with-tools" ? r.toolCalls(t.message, n) : t.kind == "error" && console.error(t.text);
	}, s.onerror = function(e) {
		console.error(e), s.close();
	};
}, e._ai.prototype.setContext = function(e) {
	if (this.instance && this.instance.config.enableAI && this.instance.aiUI.canSetContext) {
		this.sessionId = this.instance._event_id;
		var t = this.instance.config.serverUrl + "/OrgChartJSAI/SetContext", n = this.instance.config.aiChatTools.slice();
		for (var r of n) r.functionParameters ??= null, r.functionParameters = JSON.stringify(r.functionParameters);
		fetch(t, {
			method: "post",
			headers: {
				"Content-Type": "application/json",
				"x-request-type": "ajax"
			},
			body: JSON.stringify({
				context: this.instance.config.nodes,
				sessionId: this.sessionId,
				chatTools: n
			})
		}).then(function() {
			e && e();
		}).catch(function(e) {
			console.error(e);
		});
	}
}, e._ai.prototype.toolCalls = function(t, n) {
	var r = this, i = { toolCalls: t.ToolCalls };
	e.events.publish("ai-tool-calls", [this.instance, i]);
	var a = [], o = [], s = [], c = [], l = [], u = null, d = null, f = null, p = null, m = null;
	for (var h of i.toolCalls) h.FunctionResult ?? (h.FunctionName == "removeNode" ? a.push(h) : h.FunctionName == "addNode" ? o.push(h) : h.FunctionName == "updateNode" ? s.push(h) : h.FunctionName == "select" ? c.push(h) : h.FunctionName == "deselect" ? l.push(h) : h.FunctionName == "exportToPDF" ? u = h : h.FunctionName == "changeTemplate" ? d = h : h.FunctionName == "addSlink" ? f = h : h.FunctionName == "removeSlink" ? p = h : h.FunctionName == "fit" && (m = h));
	var g = !1;
	if (d && (g = !0, h.FunctionResult = "ok", this.instance.config.template = h.FunctionArguments.templateName), f) {
		var _ = this.instance.getNode(h.FunctionArguments.employeeId1), v = this.instance.getNode(h.FunctionArguments.employeeId2);
		!_ || !v || _ == v ? h.FunctionResult = `Cannot add link between ${h.FunctionArguments.employeeId1} and ${h.FunctionArguments.employeeId2}` : (g = !0, this.instance.addSlink(_.id, v.id), h.FunctionResult = "ok");
	}
	if (p) {
		var _ = this.instance.getNode(h.FunctionArguments.employeeId1), v = this.instance.getNode(h.FunctionArguments.employeeId2);
		!_ || !v || _ == v ? h.FunctionResult = `Cannot remove link between ${h.FunctionArguments.employeeId1} and ${h.FunctionArguments.employeeId2}` : (g = !0, this.instance.removeSlink(_.id, v.id), h.FunctionResult = "ok");
	}
	m && (this.instance.fit(), g = !1);
	for (var h of a) g = !0, h.FunctionResult = "ok", this.instance.remove(h.FunctionArguments.id);
	for (var h of o) {
		g = !0, h.FunctionResult = "ok";
		var y = JSON.parse(JSON.stringify(h.FunctionArguments));
		y.isAssistant && (y.tags = ["assistant"]), delete y.isAssistant, e.isNEU(y.id) && (y.id = this.instance.generateId()), this.instance.add(y);
	}
	for (var h of s) {
		g = !0, h.FunctionResult = "ok";
		var y = this.instance.get(h.FunctionArguments.id);
		for (var b in h.FunctionArguments) b != "id" && h.FunctionArguments[b] != null && (y[b] = h.FunctionArguments[b]);
		this.instance.update(y);
	}
	for (var h of c) {
		h.FunctionResult = "ok";
		for (var x of h.FunctionArguments.ids) {
			var S = h.FunctionArguments.color;
			S ||= "#FFCA28";
			var C = this.instance.getNodeElement(x).firstChild;
			C && (C.style.stroke = h.FunctionArguments.color, C.style.strokeWidth = 5);
		}
	}
	var w = function() {
		for (var e of l) if (e.FunctionResult = "ok", e.FunctionArguments.ids) for (var t of e.FunctionArguments.ids) {
			var n = r.instance.getNodeElement(t).firstChild;
			n && (n.style.stroke = "#aeaeae", n.style.strokeWidth = 1);
		}
		else g = !0;
	};
	g ? (this.setContext(), this.instance.draw(e.action.update, void 0, w)) : w();
	var T = function() {
		var e = [];
		for (var t of i.toolCalls) e.push({
			Role: "tool",
			Text: t.FunctionResult,
			Id: t.Id
		});
		r._prompt(e, n);
	};
	u ? this.chartInstance.exportToPDF({}, function() {
		h.FunctionResult = "ok", e._downloadFile("application/pdf", response, "OrgChart.pdf", !1, "pdf"), T();
	}) : T();
}, e.aiUI = function() {
	this.instance = null, this.interval = null, this.canSetContext = !1, this.element = null, this.inputElement = null, this.btnSendElement = null, this.messagesElement = null, Object.defineProperty(this, "width", { get() {
		return this.isVisible() ? this.element.offsetWidth : 0;
	} });
}, e.aiUI.title = "AI for OrgChart JS", e.aiUI.prototype.init = function(e) {
	this.instance = e;
	var t = this, n = this.instance.element.querySelector("[data-boc-ai-button]");
	n && n.addEventListener("click", function(e) {
		t.show();
	});
}, e.aiUI.prototype.isVisible = function() {
	return !(!this.element || this.element.style.display == "none");
}, e.aiUI.prototype.show = function(t, n) {
	this.instance.pdfPreviewUI.hide(), this.instance.svgPreviewUI.hide(), this.instance.pngPreviewUI.hide(), this.instance.powerPointPreviewUI.hide(), this.instance.aiUI.hide(), this.instance.orgScribeUI.hide(), this._create(), this.element.style.display = "", this.canSetContext || (this.canSetContext = !0, this.instance._ai.setContext());
	var r = this;
	n || (this.timeout && clearInterval(this.interval), this.interval = e.animate(this.element, { opacity: 0 }, { opacity: 1 }, 300, e.anim.outSin, function() {
		t || r.inputElement.focus();
	}));
}, e.aiUI.prototype._create = function() {
	if (!this.element) {
		var t = this, n = "inp_" + this.instance.generateId();
		this.element = document.createElement("div"), this.element.setAttribute("data-boc-ai-form", ""), this.element.style.opacity = 0, this.element.classList.add("boc-ai-form"), this.element.classList.add(this.instance.config.mode), this.element.innerHTML = `<div class="boc-ai-container">
                                <div data-boc-ai-close class="boc-ai-close">${e.icon.x(20, 20, "#aeaeae")}</div>
                                <div class="boc-ai-middle boc-ai-start">
                                    <div data-boc-ai-messages class="boc-ai-messages">
                                        <img src="https://orgchartjs.balkan.app/logo.svg">&nbsp;
                                        <span>
                                            ${e.aiUI.title}
                                        </span>
                                    </div>                                
                                </div>
                                <div>
                                    <div class="boc-input" data-boc-input="">
                                        <label for="${n}">Message OrgChart</label>
                                        <input maxlength="256" id="${n}" name="${n}" type="text" value="" autocomplete="off">     
                                        <div data-boc-ai-send class="boc-ai-send">
                                            ${e.icon.send(20, 20, "#aeaeae")}
                                        </div>                                              
                                    </div>
                                                
                                </div>
                            </div>`, this.instance.leftElement.appendChild(this.element), this.instance.leftElement.style.display = "block", e.input.init(this.element);
		var r = this.instance.leftElement.querySelector("[data-boc-ai-close] svg");
		r && r.addEventListener("click", function(e) {
			t.hide();
		}), this.inputElement = this.element.querySelector("#" + n), this.btnSendElement = this.inputElement.parentNode.querySelector("[data-boc-ai-send]"), this.messagesElement = this.element.querySelector("[data-boc-ai-messages]"), this.inputElement.addEventListener("input", function(e) {
			this.value ? this.parentNode.querySelector(".boc-ai-send").classList.add("boc-ai-send-cansend") : this.parentNode.querySelector(".boc-ai-send").classList.remove("boc-ai-send-cansend");
		}), this.element.querySelector("[data-boc-ai-send]").addEventListener("click", function(e) {
			t.sendUserInput();
		}), this.inputElement.addEventListener("keyup", function(n) {
			var r = window.event ? window.event : n;
			switch (t.canSetContext || (t.canSetContext = !0, t.instance._ai.setContext()), r.key) {
				case "Enter":
					t.sendUserInput();
					break;
				case "ArrowUp":
					var i = e.aiUI._getSuggestions();
					if (i.length) {
						var a = i.indexOf(t.inputElement.value);
						a == -1 ? a = i.length - 1 : a--, a == -1 && (a = i.length - 1), t.inputElement.value = i[a];
					}
					break;
				case "ArrowDown":
					var i = e.aiUI._getSuggestions();
					if (i.length) {
						var a = i.indexOf(t.inputElement.value);
						a == -1 ? a = 0 : a++, a == i.length && (a = 0), t.inputElement.value = i[a];
					}
					break;
				default:
			}
		});
	}
}, e.aiUI.prototype.addUserMessage = function(e) {
	this.btnSendElement.classList.remove("boc-ai-send-cansend");
	var t = this.element.querySelector(".boc-ai-start");
	t && (t.classList.remove("boc-ai-start"), this.messagesElement.innerHTML = "");
	var n = document.createElement("div");
	n.classList.add("boc-ai-user-message"), n.innerHTML = `<span class="boc-inner-user-message">${e}</span>`, this.messagesElement.appendChild(n);
}, e.aiUI.prototype.hide = function() {
	this.instance.leftElement.style.display = "none", this.element &&= (this.element.parentNode.removeChild(this.element), null);
}, e.aiUI.prototype.sendUserInput = function() {
	var t = this;
	e.aiUI._addSuggestion(this.inputElement.value), this.addUserMessage(this.inputElement.value);
	var n = document.createElement("div");
	n.classList.add("boc-ai-assistant-message");
	var r = document.createElement("span");
	r.classList.add("boc-inner-assistant-message"), n.appendChild(r), this.messagesElement.appendChild(n);
	var i = "";
	this.instance._ai.prompt(this.inputElement.value, function(e) {
		i += e, r.innerHTML = marked.parse(i);
		var n = t.element.querySelector(".boc-ai-middle");
		n.scrollTo(0, n.scrollHeight);
	}), this.inputElement.value = "";
}, e.aiUI._addSuggestion = function(t) {
	t = t.trim();
	var n = e.aiUI._getSuggestions(), r = n.indexOf(t);
	r != -1 && n.splice(r, 1), n.push(t), localStorage.setItem("suggestions", JSON.stringify(n));
}, e.aiUI._getSuggestions = function() {
	var e = localStorage.getItem("suggestions");
	return e = e ? JSON.parse(e) : [], e;
}, e.orgScribeUI = function() {
	this.instance = null, this.element = null, this.textAreaElement = null, this._timeout = null, Object.defineProperty(this, "width", { get() {
		return this.isVisible() ? this.element.offsetWidth : 0;
	} });
}, e.orgScribeUI.prototype.init = function(e) {
	this.instance = e;
}, e.events.on("updated", function(t, n) {
	if (t.orgScribeUI.isVisible()) {
		var r = e._convertFromNodesToText(t.config.nodes, e.ORGSCRIBE_OFFSET);
		t.orgScribeUI.textAreaElement.value = r;
	}
}), e.orgScribeUI.prototype.isVisible = function() {
	return !(!this.element || this.element.style.display == "none");
}, e.orgScribeUI.prototype.show = function(t, n) {
	this.instance.pdfPreviewUI.hide(), this.instance.svgPreviewUI.hide(), this.instance.pngPreviewUI.hide(), this.instance.powerPointPreviewUI.hide(), this.instance.aiUI.hide(), this.instance.orgScribeUI.hide(), this._create(), this.element.style.display = "";
	var r = this;
	n || (this.timeout && clearInterval(this.interval), this.interval = e.animate(this.element, { opacity: 0 }, { opacity: 1 }, 300, e.anim.outSin, function() {
		if (!t) {
			var e = r.textAreaElement.value.length;
			r.textAreaElement.focus(), r.textAreaElement.setSelectionRange(e, e);
		}
	}));
}, e.orgScribeUI.prototype._create = function() {
	if (!this.element) {
		var t = this;
		this.element = document.createElement("div"), this.element.setAttribute("data-boc-orgscribe-form", ""), this.element.style.opacity = 0, this.element.classList.add("boc-orgscribe-form"), this.element.classList.add(this.instance.config.mode);
		var n = e._convertFromNodesToText(this.instance.config.nodes, e.ORGSCRIBE_OFFSET);
		this.element.innerHTML = `<div class="boc-orgscribe-container">
                                <div data-boc-orgscribe-close class="boc-orgscribe-close">${e.icon.x(20, 20, "#aeaeae")}</div>                    
                                <div>
                                    <textarea wrap="off" class="boc-orgscribe-txt" data-id="boc_orgscribe_txt">${n}</textarea>
                                </div>
                            </div>`, this.instance.leftElement.appendChild(this.element), this.instance.leftElement.style.display = "block";
		var r = this.instance.leftElement.querySelector("[data-boc-orgscribe-close] svg");
		r && r.addEventListener("click", function(e) {
			t.hide();
		}), this.textAreaElement = this.element.querySelector("[data-id=\"boc_orgscribe_txt\"]"), this.textAreaElement.addEventListener("input", function() {
			t._timeout &&= (clearTimeout(t._timeout), null);
			var n = this.value;
			t._timeout = setTimeout(function() {
				var r = e._convertTextToNodes(n, e.ORGSCRIBE_OFFSET);
				t.instance.load(r);
			}, 500);
		});
	}
}, e.orgScribeUI.prototype.hide = function() {
	this.element &&= (this.element.parentNode.removeChild(this.element), null);
}, (function(e, t) {
	typeof exports == "object" && typeof module < "u" ? t(exports) : typeof define == "function" && define.amd ? define(["exports"], t) : t((e = typeof globalThis < "u" ? globalThis : e || self).marked = {});
})(void 0, (function(e) {
	function t() {
		return {
			async: !1,
			breaks: !1,
			extensions: null,
			gfm: !0,
			hooks: null,
			pedantic: !1,
			renderer: null,
			silent: !1,
			tokenizer: null,
			walkTokens: null
		};
	}
	function n(t) {
		e.defaults = t;
	}
	e.defaults = {
		async: !1,
		breaks: !1,
		extensions: null,
		gfm: !0,
		hooks: null,
		pedantic: !1,
		renderer: null,
		silent: !1,
		tokenizer: null,
		walkTokens: null
	};
	let r = { exec: () => null };
	function i(e, t = "") {
		let n = typeof e == "string" ? e : e.source, r = {
			replace: (e, t) => {
				let i = typeof t == "string" ? t : t.source;
				return i = i.replace(a.caret, "$1"), n = n.replace(e, i), r;
			},
			getRegex: () => new RegExp(n, t)
		};
		return r;
	}
	let a = {
		codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
		outputLinkReplace: /\\([\[\]])/g,
		indentCodeCompensation: /^(\s+)(?:```)/,
		beginningSpace: /^\s+/,
		endingHash: /#$/,
		startingSpaceChar: /^ /,
		endingSpaceChar: / $/,
		nonSpaceChar: /[^ ]/,
		newLineCharGlobal: /\n/g,
		tabCharGlobal: /\t/g,
		multipleSpaceGlobal: /\s+/g,
		blankLine: /^[ \t]*$/,
		doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
		blockquoteStart: /^ {0,3}>/,
		blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
		blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
		listReplaceTabs: /^\t+/,
		listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
		listIsTask: /^\[[ xX]\] /,
		listReplaceTask: /^\[[ xX]\] +/,
		anyLine: /\n.*\n/,
		hrefBrackets: /^<(.*)>$/,
		tableDelimiter: /[:|]/,
		tableAlignChars: /^\||\| *$/g,
		tableRowBlankLine: /\n[ \t]*$/,
		tableAlignRight: /^ *-+: *$/,
		tableAlignCenter: /^ *:-+: *$/,
		tableAlignLeft: /^ *:-+ *$/,
		startATag: /^<a /i,
		endATag: /^<\/a>/i,
		startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
		endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
		startAngleBracket: /^</,
		endAngleBracket: />$/,
		pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
		unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
		escapeTest: /[&<>"']/,
		escapeReplace: /[&<>"']/g,
		escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
		escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
		unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
		caret: /(^|[^\[])\^/g,
		percentDecode: /%25/g,
		findPipe: /\|/g,
		splitPipe: / \|/,
		slashPipe: /\\\|/g,
		carriageReturn: /\r\n|\r/g,
		spaceLine: /^ +$/gm,
		notSpaceStart: /^\S*/,
		endingNewline: /\n$/,
		listItemRegex: (e) => RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),
		nextBulletRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),
		hrRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
		fencesBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}(?:\`\`\`|~~~)`),
		headingBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}#`),
		htmlBeginRegex: (e) => RegExp(`^ {0,${Math.min(3, e - 1)}}<(?:[a-z].*>|!--)`, "i")
	}, o = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, s = /(?:[*+-]|\d{1,9}[.)])/, c = i(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g, s).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).getRegex(), l = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, u = /(?!\s*\])(?:\\.|[^\[\]\\])+/, d = i(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", u).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), f = i(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, s).getRegex(), p = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", m = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, h = i("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", m).replace("tag", p).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), g = i(l).replace("hr", o).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", p).getRegex(), _ = {
		blockquote: i(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", g).getRegex(),
		code: /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
		def: d,
		fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
		heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
		hr: o,
		html: h,
		lheading: c,
		list: f,
		newline: /^(?:[ \t]*(?:\n|$))+/,
		paragraph: g,
		table: r,
		text: /^[^\n]+/
	}, v = i("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", o).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", p).getRegex(), y = {
		..._,
		table: v,
		paragraph: i(l).replace("hr", o).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", v).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", p).getRegex()
	}, b = {
		..._,
		html: i("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", m).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
		def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
		heading: /^(#{1,6})(.*)(?:\n+|$)/,
		fences: r,
		lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
		paragraph: i(l).replace("hr", o).replace("heading", " *#{1,6} *[^\n]").replace("lheading", c).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex()
	}, x = /^( {2,}|\\)\n(?!\s*$)/, S = /[\p{P}\p{S}]/u, C = /[\s\p{P}\p{S}]/u, w = /[^\s\p{P}\p{S}]/u, T = i(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, C).getRegex(), E = /(?!~)[\p{P}\p{S}]/u, D = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/, O = i(D, "u").replace(/punct/g, S).getRegex(), k = i(D, "u").replace(/punct/g, E).getRegex(), A = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", j = i(A, "gu").replace(/notPunctSpace/g, w).replace(/punctSpace/g, C).replace(/punct/g, S).getRegex(), M = i(A, "gu").replace(/notPunctSpace/g, /(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g, /(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g, E).getRegex(), N = i("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, w).replace(/punctSpace/g, C).replace(/punct/g, S).getRegex(), P = i(/\\(punct)/, "gu").replace(/punct/g, S).getRegex(), F = i(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), I = i(m).replace("(?:-->|$)", "-->").getRegex(), ee = i("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", I).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), L = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, te = i(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label", L).replace("href", /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ne = i(/^!?\[(label)\]\[(ref)\]/).replace("label", L).replace("ref", u).getRegex(), re = i(/^!?\[(ref)\](?:\[\])?/).replace("ref", u).getRegex(), ie = {
		_backpedal: r,
		anyPunctuation: P,
		autolink: F,
		blockSkip: /\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,
		br: x,
		code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
		del: r,
		emStrongLDelim: O,
		emStrongRDelimAst: j,
		emStrongRDelimUnd: N,
		escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
		link: te,
		nolink: re,
		punctuation: T,
		reflink: ne,
		reflinkSearch: i("reflink|nolink(?!\\()", "g").replace("reflink", ne).replace("nolink", re).getRegex(),
		tag: ee,
		text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
		url: r
	}, R = {
		...ie,
		link: i(/^!?\[(label)\]\((.*?)\)/).replace("label", L).getRegex(),
		reflink: i(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", L).getRegex()
	}, z = {
		...ie,
		emStrongRDelimAst: M,
		emStrongLDelim: k,
		url: i(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, "i").replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),
		_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
		del: /^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,
		text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
	}, ae = {
		...z,
		br: i(x).replace("{2,}", "*").getRegex(),
		text: i(z.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
	}, oe = {
		normal: _,
		gfm: y,
		pedantic: b
	}, B = {
		normal: ie,
		gfm: z,
		breaks: ae,
		pedantic: R
	}, V = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	}, H = (e) => V[e];
	function U(e, t) {
		if (t) {
			if (a.escapeTest.test(e)) return e.replace(a.escapeReplace, H);
		} else if (a.escapeTestNoEncode.test(e)) return e.replace(a.escapeReplaceNoEncode, H);
		return e;
	}
	function se(e) {
		try {
			e = encodeURI(e).replace(a.percentDecode, "%");
		} catch {
			return null;
		}
		return e;
	}
	function ce(e, t) {
		let n = e.replace(a.findPipe, ((e, t, n) => {
			let r = !1, i = t;
			for (; --i >= 0 && n[i] === "\\";) r = !r;
			return r ? "|" : " |";
		})).split(a.splitPipe), r = 0;
		if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), t) if (n.length > t) n.splice(t);
		else for (; n.length < t;) n.push("");
		for (; r < n.length; r++) n[r] = n[r].trim().replace(a.slashPipe, "|");
		return n;
	}
	function W(e, t, n) {
		let r = e.length;
		if (r === 0) return "";
		let i = 0;
		for (; i < r && e.charAt(r - i - 1) === t;) i++;
		return e.slice(0, r - i);
	}
	function G(e, t, n, r, i) {
		let a = t.href, o = t.title || null, s = e[1].replace(i.other.outputLinkReplace, "$1");
		if (e[0].charAt(0) !== "!") {
			r.state.inLink = !0;
			let e = {
				type: "link",
				raw: n,
				href: a,
				title: o,
				text: s,
				tokens: r.inlineTokens(s)
			};
			return r.state.inLink = !1, e;
		}
		return {
			type: "image",
			raw: n,
			href: a,
			title: o,
			text: s
		};
	}
	class le {
		options;
		rules;
		lexer;
		constructor(t) {
			this.options = t || e.defaults;
		}
		space(e) {
			let t = this.rules.block.newline.exec(e);
			if (t && t[0].length > 0) return {
				type: "space",
				raw: t[0]
			};
		}
		code(e) {
			let t = this.rules.block.code.exec(e);
			if (t) {
				let e = t[0].replace(this.rules.other.codeRemoveIndent, "");
				return {
					type: "code",
					raw: t[0],
					codeBlockStyle: "indented",
					text: this.options.pedantic ? e : W(e, "\n")
				};
			}
		}
		fences(e) {
			let t = this.rules.block.fences.exec(e);
			if (t) {
				let e = t[0], n = function(e, t, n) {
					let r = e.match(n.other.indentCodeCompensation);
					if (r === null) return t;
					let i = r[1];
					return t.split("\n").map(((e) => {
						let t = e.match(n.other.beginningSpace);
						if (t === null) return e;
						let [r] = t;
						return r.length >= i.length ? e.slice(i.length) : e;
					})).join("\n");
				}(e, t[3] || "", this.rules);
				return {
					type: "code",
					raw: e,
					lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2],
					text: n
				};
			}
		}
		heading(e) {
			let t = this.rules.block.heading.exec(e);
			if (t) {
				let e = t[2].trim();
				if (this.rules.other.endingHash.test(e)) {
					let t = W(e, "#");
					this.options.pedantic ? e = t.trim() : t && !this.rules.other.endingSpaceChar.test(t) || (e = t.trim());
				}
				return {
					type: "heading",
					raw: t[0],
					depth: t[1].length,
					text: e,
					tokens: this.lexer.inline(e)
				};
			}
		}
		hr(e) {
			let t = this.rules.block.hr.exec(e);
			if (t) return {
				type: "hr",
				raw: W(t[0], "\n")
			};
		}
		blockquote(e) {
			let t = this.rules.block.blockquote.exec(e);
			if (t) {
				let e = W(t[0], "\n").split("\n"), n = "", r = "", i = [];
				for (; e.length > 0;) {
					let t = !1, a = [], o;
					for (o = 0; o < e.length; o++) if (this.rules.other.blockquoteStart.test(e[o])) a.push(e[o]), t = !0;
					else {
						if (t) break;
						a.push(e[o]);
					}
					e = e.slice(o);
					let s = a.join("\n"), c = s.replace(this.rules.other.blockquoteSetextReplace, "\n    $1").replace(this.rules.other.blockquoteSetextReplace2, "");
					n = n ? `${n}\n${s}` : s, r = r ? `${r}\n${c}` : c;
					let l = this.lexer.state.top;
					if (this.lexer.state.top = !0, this.lexer.blockTokens(c, i, !0), this.lexer.state.top = l, e.length === 0) break;
					let u = i.at(-1);
					if (u?.type === "code") break;
					if (u?.type === "blockquote") {
						let t = u, a = t.raw + "\n" + e.join("\n"), o = this.blockquote(a);
						i[i.length - 1] = o, n = n.substring(0, n.length - t.raw.length) + o.raw, r = r.substring(0, r.length - t.text.length) + o.text;
						break;
					}
					if (u?.type === "list") {
						let t = u, a = t.raw + "\n" + e.join("\n"), o = this.list(a);
						i[i.length - 1] = o, n = n.substring(0, n.length - u.raw.length) + o.raw, r = r.substring(0, r.length - t.raw.length) + o.raw, e = a.substring(i.at(-1).raw.length).split("\n");
					}
				}
				return {
					type: "blockquote",
					raw: n,
					tokens: i,
					text: r
				};
			}
		}
		list(e) {
			let t = this.rules.block.list.exec(e);
			if (t) {
				let n = t[1].trim(), r = n.length > 1, i = {
					type: "list",
					raw: "",
					ordered: r,
					start: r ? +n.slice(0, -1) : "",
					loose: !1,
					items: []
				};
				n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
				let a = this.rules.other.listItemRegex(n), o = !1;
				for (; e;) {
					let n = !1, r = "", s = "";
					if (!(t = a.exec(e)) || this.rules.block.hr.test(e)) break;
					r = t[0], e = e.substring(r.length);
					let c = t[2].split("\n", 1)[0].replace(this.rules.other.listReplaceTabs, ((e) => " ".repeat(3 * e.length))), l = e.split("\n", 1)[0], u = !c.trim(), d = 0;
					if (this.options.pedantic ? (d = 2, s = c.trimStart()) : u ? d = t[1].length + 1 : (d = t[2].search(this.rules.other.nonSpaceChar), d = d > 4 ? 1 : d, s = c.slice(d), d += t[1].length), u && this.rules.other.blankLine.test(l) && (r += l + "\n", e = e.substring(l.length + 1), n = !0), !n) {
						let t = this.rules.other.nextBulletRegex(d), n = this.rules.other.hrRegex(d), i = this.rules.other.fencesBeginRegex(d), a = this.rules.other.headingBeginRegex(d), o = this.rules.other.htmlBeginRegex(d);
						for (; e;) {
							let f = e.split("\n", 1)[0], p;
							if (l = f, this.options.pedantic ? (l = l.replace(this.rules.other.listReplaceNesting, "  "), p = l) : p = l.replace(this.rules.other.tabCharGlobal, "    "), i.test(l) || a.test(l) || o.test(l) || t.test(l) || n.test(l)) break;
							if (p.search(this.rules.other.nonSpaceChar) >= d || !l.trim()) s += "\n" + p.slice(d);
							else {
								if (u || c.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || i.test(c) || a.test(c) || n.test(c)) break;
								s += "\n" + l;
							}
							u || l.trim() || (u = !0), r += f + "\n", e = e.substring(f.length + 1), c = p.slice(d);
						}
					}
					i.loose || (o ? i.loose = !0 : this.rules.other.doubleBlankLine.test(r) && (o = !0));
					let f, p = null;
					this.options.gfm && (p = this.rules.other.listIsTask.exec(s), p && (f = p[0] !== "[ ] ", s = s.replace(this.rules.other.listReplaceTask, ""))), i.items.push({
						type: "list_item",
						raw: r,
						task: !!p,
						checked: f,
						loose: !1,
						text: s,
						tokens: []
					}), i.raw += r;
				}
				let s = i.items.at(-1);
				if (!s) return;
				s.raw = s.raw.trimEnd(), s.text = s.text.trimEnd(), i.raw = i.raw.trimEnd();
				for (let e = 0; e < i.items.length; e++) if (this.lexer.state.top = !1, i.items[e].tokens = this.lexer.blockTokens(i.items[e].text, []), !i.loose) {
					let t = i.items[e].tokens.filter(((e) => e.type === "space"));
					i.loose = t.length > 0 && t.some(((e) => this.rules.other.anyLine.test(e.raw)));
				}
				if (i.loose) for (let e = 0; e < i.items.length; e++) i.items[e].loose = !0;
				return i;
			}
		}
		html(e) {
			let t = this.rules.block.html.exec(e);
			if (t) return {
				type: "html",
				block: !0,
				raw: t[0],
				pre: t[1] === "pre" || t[1] === "script" || t[1] === "style",
				text: t[0]
			};
		}
		def(e) {
			let t = this.rules.block.def.exec(e);
			if (t) {
				let e = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", r = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
				return {
					type: "def",
					tag: e,
					raw: t[0],
					href: n,
					title: r
				};
			}
		}
		table(e) {
			let t = this.rules.block.table.exec(e);
			if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
			let n = ce(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split("\n") : [], a = {
				type: "table",
				raw: t[0],
				header: [],
				align: [],
				rows: []
			};
			if (n.length === r.length) {
				for (let e of r) this.rules.other.tableAlignRight.test(e) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(e) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(e) ? a.align.push("left") : a.align.push(null);
				for (let e = 0; e < n.length; e++) a.header.push({
					text: n[e],
					tokens: this.lexer.inline(n[e]),
					header: !0,
					align: a.align[e]
				});
				for (let e of i) a.rows.push(ce(e, a.header.length).map(((e, t) => ({
					text: e,
					tokens: this.lexer.inline(e),
					header: !1,
					align: a.align[t]
				}))));
				return a;
			}
		}
		lheading(e) {
			let t = this.rules.block.lheading.exec(e);
			if (t) return {
				type: "heading",
				raw: t[0],
				depth: t[2].charAt(0) === "=" ? 1 : 2,
				text: t[1],
				tokens: this.lexer.inline(t[1])
			};
		}
		paragraph(e) {
			let t = this.rules.block.paragraph.exec(e);
			if (t) {
				let e = t[1].charAt(t[1].length - 1) === "\n" ? t[1].slice(0, -1) : t[1];
				return {
					type: "paragraph",
					raw: t[0],
					text: e,
					tokens: this.lexer.inline(e)
				};
			}
		}
		text(e) {
			let t = this.rules.block.text.exec(e);
			if (t) return {
				type: "text",
				raw: t[0],
				text: t[0],
				tokens: this.lexer.inline(t[0])
			};
		}
		escape(e) {
			let t = this.rules.inline.escape.exec(e);
			if (t) return {
				type: "escape",
				raw: t[0],
				text: t[1]
			};
		}
		tag(e) {
			let t = this.rules.inline.tag.exec(e);
			if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = !1), {
				type: "html",
				raw: t[0],
				inLink: this.lexer.state.inLink,
				inRawBlock: this.lexer.state.inRawBlock,
				block: !1,
				text: t[0]
			};
		}
		link(e) {
			let t = this.rules.inline.link.exec(e);
			if (t) {
				let e = t[2].trim();
				if (!this.options.pedantic && this.rules.other.startAngleBracket.test(e)) {
					if (!this.rules.other.endAngleBracket.test(e)) return;
					let t = W(e.slice(0, -1), "\\");
					if ((e.length - t.length) % 2 == 0) return;
				} else {
					let e = function(e, t) {
						if (e.indexOf(t[1]) === -1) return -1;
						let n = 0;
						for (let r = 0; r < e.length; r++) if (e[r] === "\\") r++;
						else if (e[r] === t[0]) n++;
						else if (e[r] === t[1] && (n--, n < 0)) return r;
						return -1;
					}(t[2], "()");
					if (e > -1) {
						let n = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + e;
						t[2] = t[2].substring(0, e), t[0] = t[0].substring(0, n).trim(), t[3] = "";
					}
				}
				let n = t[2], r = "";
				if (this.options.pedantic) {
					let e = this.rules.other.pedanticHrefTitle.exec(n);
					e && (n = e[1], r = e[3]);
				} else r = t[3] ? t[3].slice(1, -1) : "";
				return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (n = this.options.pedantic && !this.rules.other.endAngleBracket.test(e) ? n.slice(1) : n.slice(1, -1)), G(t, {
					href: n && n.replace(this.rules.inline.anyPunctuation, "$1"),
					title: r && r.replace(this.rules.inline.anyPunctuation, "$1")
				}, t[0], this.lexer, this.rules);
			}
		}
		reflink(e, t) {
			let n;
			if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
				let e = t[(n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " ").toLowerCase()];
				if (!e) {
					let e = n[0].charAt(0);
					return {
						type: "text",
						raw: e,
						text: e
					};
				}
				return G(n, e, n[0], this.lexer, this.rules);
			}
		}
		emStrong(e, t, n = "") {
			let r = this.rules.inline.emStrongLDelim.exec(e);
			if (r && !(r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) && (!(r[1] || r[2]) || !n || this.rules.inline.punctuation.exec(n))) {
				let n = [...r[0]].length - 1, i, a, o = n, s = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
				for (c.lastIndex = 0, t = t.slice(-1 * e.length + n); (r = c.exec(t)) != null;) {
					if (i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !i) continue;
					if (a = [...i].length, r[3] || r[4]) {
						o += a;
						continue;
					}
					if ((r[5] || r[6]) && n % 3 && !((n + a) % 3)) {
						s += a;
						continue;
					}
					if (o -= a, o > 0) continue;
					a = Math.min(a, a + o + s);
					let t = [...r[0]][0].length, c = e.slice(0, n + r.index + t + a);
					if (Math.min(n, a) % 2) {
						let e = c.slice(1, -1);
						return {
							type: "em",
							raw: c,
							text: e,
							tokens: this.lexer.inlineTokens(e)
						};
					}
					let l = c.slice(2, -2);
					return {
						type: "strong",
						raw: c,
						text: l,
						tokens: this.lexer.inlineTokens(l)
					};
				}
			}
		}
		codespan(e) {
			let t = this.rules.inline.code.exec(e);
			if (t) {
				let e = t[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(e), r = this.rules.other.startingSpaceChar.test(e) && this.rules.other.endingSpaceChar.test(e);
				return n && r && (e = e.substring(1, e.length - 1)), {
					type: "codespan",
					raw: t[0],
					text: e
				};
			}
		}
		br(e) {
			let t = this.rules.inline.br.exec(e);
			if (t) return {
				type: "br",
				raw: t[0]
			};
		}
		del(e) {
			let t = this.rules.inline.del.exec(e);
			if (t) return {
				type: "del",
				raw: t[0],
				text: t[2],
				tokens: this.lexer.inlineTokens(t[2])
			};
		}
		autolink(e) {
			let t = this.rules.inline.autolink.exec(e);
			if (t) {
				let e, n;
				return t[2] === "@" ? (e = t[1], n = "mailto:" + e) : (e = t[1], n = e), {
					type: "link",
					raw: t[0],
					text: e,
					href: n,
					tokens: [{
						type: "text",
						raw: e,
						text: e
					}]
				};
			}
		}
		url(e) {
			let t;
			if (t = this.rules.inline.url.exec(e)) {
				let e, n;
				if (t[2] === "@") e = t[0], n = "mailto:" + e;
				else {
					let r;
					do
						r = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
					while (r !== t[0]);
					e = t[0], n = t[1] === "www." ? "http://" + t[0] : t[0];
				}
				return {
					type: "link",
					raw: t[0],
					text: e,
					href: n,
					tokens: [{
						type: "text",
						raw: e,
						text: e
					}]
				};
			}
		}
		inlineText(e) {
			let t = this.rules.inline.text.exec(e);
			if (t) {
				let e = this.lexer.state.inRawBlock;
				return {
					type: "text",
					raw: t[0],
					text: t[0],
					escaped: e
				};
			}
		}
	}
	class K {
		tokens;
		options;
		state;
		tokenizer;
		inlineQueue;
		constructor(t) {
			this.tokens = [], this.tokens.links = Object.create(null), this.options = t || e.defaults, this.options.tokenizer = this.options.tokenizer || new le(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
				inLink: !1,
				inRawBlock: !1,
				top: !0
			};
			let n = {
				other: a,
				block: oe.normal,
				inline: B.normal
			};
			this.options.pedantic ? (n.block = oe.pedantic, n.inline = B.pedantic) : this.options.gfm && (n.block = oe.gfm, this.options.breaks ? n.inline = B.breaks : n.inline = B.gfm), this.tokenizer.rules = n;
		}
		static get rules() {
			return {
				block: oe,
				inline: B
			};
		}
		static lex(e, t) {
			return new K(t).lex(e);
		}
		static lexInline(e, t) {
			return new K(t).inlineTokens(e);
		}
		lex(e) {
			e = e.replace(a.carriageReturn, "\n"), this.blockTokens(e, this.tokens);
			for (let e = 0; e < this.inlineQueue.length; e++) {
				let t = this.inlineQueue[e];
				this.inlineTokens(t.src, t.tokens);
			}
			return this.inlineQueue = [], this.tokens;
		}
		blockTokens(e, t = [], n = !1) {
			for (this.options.pedantic && (e = e.replace(a.tabCharGlobal, "    ").replace(a.spaceLine, "")); e;) {
				let r;
				if (this.options.extensions?.block?.some(((n) => !!(r = n.call({ lexer: this }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) continue;
				if (r = this.tokenizer.space(e)) {
					e = e.substring(r.raw.length);
					let n = t.at(-1);
					r.raw.length === 1 && n !== void 0 ? n.raw += "\n" : t.push(r);
					continue;
				}
				if (r = this.tokenizer.code(e)) {
					e = e.substring(r.raw.length);
					let n = t.at(-1);
					n?.type === "paragraph" || n?.type === "text" ? (n.raw += "\n" + r.raw, n.text += "\n" + r.text, this.inlineQueue.at(-1).src = n.text) : t.push(r);
					continue;
				}
				if (r = this.tokenizer.fences(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.heading(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.hr(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.blockquote(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.list(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.html(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.def(e)) {
					e = e.substring(r.raw.length);
					let n = t.at(-1);
					n?.type === "paragraph" || n?.type === "text" ? (n.raw += "\n" + r.raw, n.text += "\n" + r.raw, this.inlineQueue.at(-1).src = n.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = {
						href: r.href,
						title: r.title
					});
					continue;
				}
				if (r = this.tokenizer.table(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.lheading(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				let i = e;
				if (this.options.extensions?.startBlock) {
					let t = Infinity, n = e.slice(1), r;
					this.options.extensions.startBlock.forEach(((e) => {
						r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
					})), t < Infinity && t >= 0 && (i = e.substring(0, t + 1));
				}
				if (this.state.top && (r = this.tokenizer.paragraph(i))) {
					let a = t.at(-1);
					n && a?.type === "paragraph" ? (a.raw += "\n" + r.raw, a.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = a.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
				} else if (r = this.tokenizer.text(e)) {
					e = e.substring(r.raw.length);
					let n = t.at(-1);
					n?.type === "text" ? (n.raw += "\n" + r.raw, n.text += "\n" + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = n.text) : t.push(r);
				} else if (e) {
					let t = "Infinite loop on byte: " + e.charCodeAt(0);
					if (this.options.silent) {
						console.error(t);
						break;
					}
					throw Error(t);
				}
			}
			return this.state.top = !0, t;
		}
		inline(e, t = []) {
			return this.inlineQueue.push({
				src: e,
				tokens: t
			}), t;
		}
		inlineTokens(e, t = []) {
			let n = e, r = null;
			if (this.tokens.links) {
				let e = Object.keys(this.tokens.links);
				if (e.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null;) e.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
			}
			for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null;) n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
			for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null;) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
			let i = !1, a = "";
			for (; e;) {
				let r;
				if (i || (a = ""), i = !1, this.options.extensions?.inline?.some(((n) => !!(r = n.call({ lexer: this }, e, t)) && (e = e.substring(r.raw.length), t.push(r), !0)))) continue;
				if (r = this.tokenizer.escape(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.tag(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.link(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.reflink(e, this.tokens.links)) {
					e = e.substring(r.raw.length);
					let n = t.at(-1);
					r.type === "text" && n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
					continue;
				}
				if (r = this.tokenizer.emStrong(e, n, a)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.codespan(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.br(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.del(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (r = this.tokenizer.autolink(e)) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				if (!this.state.inLink && (r = this.tokenizer.url(e))) {
					e = e.substring(r.raw.length), t.push(r);
					continue;
				}
				let o = e;
				if (this.options.extensions?.startInline) {
					let t = Infinity, n = e.slice(1), r;
					this.options.extensions.startInline.forEach(((e) => {
						r = e.call({ lexer: this }, n), typeof r == "number" && r >= 0 && (t = Math.min(t, r));
					})), t < Infinity && t >= 0 && (o = e.substring(0, t + 1));
				}
				if (r = this.tokenizer.inlineText(o)) {
					e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (a = r.raw.slice(-1)), i = !0;
					let n = t.at(-1);
					n?.type === "text" ? (n.raw += r.raw, n.text += r.text) : t.push(r);
				} else if (e) {
					let t = "Infinite loop on byte: " + e.charCodeAt(0);
					if (this.options.silent) {
						console.error(t);
						break;
					}
					throw Error(t);
				}
			}
			return t;
		}
	}
	class q {
		options;
		parser;
		constructor(t) {
			this.options = t || e.defaults;
		}
		space(e) {
			return "";
		}
		code({ text: e, lang: t, escaped: n }) {
			let r = (t || "").match(a.notSpaceStart)?.[0], i = e.replace(a.endingNewline, "") + "\n";
			return r ? "<pre><code class=\"language-" + U(r) + "\">" + (n ? i : U(i, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? i : U(i, !0)) + "</code></pre>\n";
		}
		blockquote({ tokens: e }) {
			return `<blockquote>\n${this.parser.parse(e)}</blockquote>\n`;
		}
		html({ text: e }) {
			return e;
		}
		heading({ tokens: e, depth: t }) {
			return `<h${t}>${this.parser.parseInline(e)}</h${t}>\n`;
		}
		hr(e) {
			return "<hr>\n";
		}
		list(e) {
			let t = e.ordered, n = e.start, r = "";
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				r += this.listitem(n);
			}
			let i = t ? "ol" : "ul";
			return "<" + i + (t && n !== 1 ? " start=\"" + n + "\"" : "") + ">\n" + r + "</" + i + ">\n";
		}
		listitem(e) {
			let t = "";
			if (e.task) {
				let n = this.checkbox({ checked: !!e.checked });
				e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + U(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = !0)) : e.tokens.unshift({
					type: "text",
					raw: n + " ",
					text: n + " ",
					escaped: !0
				}) : t += n + " ";
			}
			return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>\n`;
		}
		checkbox({ checked: e }) {
			return "<input " + (e ? "checked=\"\" " : "") + "disabled=\"\" type=\"checkbox\">";
		}
		paragraph({ tokens: e }) {
			return `<p>${this.parser.parseInline(e)}</p>\n`;
		}
		table(e) {
			let t = "", n = "";
			for (let t = 0; t < e.header.length; t++) n += this.tablecell(e.header[t]);
			t += this.tablerow({ text: n });
			let r = "";
			for (let t = 0; t < e.rows.length; t++) {
				let i = e.rows[t];
				n = "";
				for (let e = 0; e < i.length; e++) n += this.tablecell(i[e]);
				r += this.tablerow({ text: n });
			}
			return r &&= `<tbody>${r}</tbody>`, "<table>\n<thead>\n" + t + "</thead>\n" + r + "</table>\n";
		}
		tablerow({ text: e }) {
			return `<tr>\n${e}</tr>\n`;
		}
		tablecell(e) {
			let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
			return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>\n`;
		}
		strong({ tokens: e }) {
			return `<strong>${this.parser.parseInline(e)}</strong>`;
		}
		em({ tokens: e }) {
			return `<em>${this.parser.parseInline(e)}</em>`;
		}
		codespan({ text: e }) {
			return `<code>${U(e, !0)}</code>`;
		}
		br(e) {
			return "<br>";
		}
		del({ tokens: e }) {
			return `<del>${this.parser.parseInline(e)}</del>`;
		}
		link({ href: e, title: t, tokens: n }) {
			let r = this.parser.parseInline(n), i = se(e);
			if (i === null) return r;
			let a = "<a href=\"" + (e = i) + "\"";
			return t && (a += " title=\"" + U(t) + "\""), a += ">" + r + "</a>", a;
		}
		image({ href: e, title: t, text: n }) {
			let r = se(e);
			if (r === null) return U(n);
			let i = `<img src="${e = r}" alt="${n}"`;
			return t && (i += ` title="${U(t)}"`), i += ">", i;
		}
		text(e) {
			return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : U(e.text);
		}
	}
	class ue {
		strong({ text: e }) {
			return e;
		}
		em({ text: e }) {
			return e;
		}
		codespan({ text: e }) {
			return e;
		}
		del({ text: e }) {
			return e;
		}
		html({ text: e }) {
			return e;
		}
		text({ text: e }) {
			return e;
		}
		link({ text: e }) {
			return "" + e;
		}
		image({ text: e }) {
			return "" + e;
		}
		br() {
			return "";
		}
	}
	class J {
		options;
		renderer;
		textRenderer;
		constructor(t) {
			this.options = t || e.defaults, this.options.renderer = this.options.renderer || new q(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new ue();
		}
		static parse(e, t) {
			return new J(t).parse(e);
		}
		static parseInline(e, t) {
			return new J(t).parseInline(e);
		}
		parse(e, t = !0) {
			let n = "";
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (this.options.extensions?.renderers?.[i.type]) {
					let e = i, t = this.options.extensions.renderers[e.type].call({ parser: this }, e);
					if (!1 !== t || ![
						"space",
						"hr",
						"heading",
						"code",
						"table",
						"blockquote",
						"list",
						"html",
						"paragraph",
						"text"
					].includes(e.type)) {
						n += t || "";
						continue;
					}
				}
				let a = i;
				switch (a.type) {
					case "space":
						n += this.renderer.space(a);
						continue;
					case "hr":
						n += this.renderer.hr(a);
						continue;
					case "heading":
						n += this.renderer.heading(a);
						continue;
					case "code":
						n += this.renderer.code(a);
						continue;
					case "table":
						n += this.renderer.table(a);
						continue;
					case "blockquote":
						n += this.renderer.blockquote(a);
						continue;
					case "list":
						n += this.renderer.list(a);
						continue;
					case "html":
						n += this.renderer.html(a);
						continue;
					case "paragraph":
						n += this.renderer.paragraph(a);
						continue;
					case "text": {
						let i = a, o = this.renderer.text(i);
						for (; r + 1 < e.length && e[r + 1].type === "text";) i = e[++r], o += "\n" + this.renderer.text(i);
						n += t ? this.renderer.paragraph({
							type: "paragraph",
							raw: o,
							text: o,
							tokens: [{
								type: "text",
								raw: o,
								text: o,
								escaped: !0
							}]
						}) : o;
						continue;
					}
					default: {
						let e = "Token with \"" + a.type + "\" type was not found.";
						if (this.options.silent) return console.error(e), "";
						throw Error(e);
					}
				}
			}
			return n;
		}
		parseInline(e, t = this.renderer) {
			let n = "";
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (this.options.extensions?.renderers?.[i.type]) {
					let e = this.options.extensions.renderers[i.type].call({ parser: this }, i);
					if (!1 !== e || ![
						"escape",
						"html",
						"link",
						"image",
						"strong",
						"em",
						"codespan",
						"br",
						"del",
						"text"
					].includes(i.type)) {
						n += e || "";
						continue;
					}
				}
				let a = i;
				switch (a.type) {
					case "escape":
					case "text":
						n += t.text(a);
						break;
					case "html":
						n += t.html(a);
						break;
					case "link":
						n += t.link(a);
						break;
					case "image":
						n += t.image(a);
						break;
					case "strong":
						n += t.strong(a);
						break;
					case "em":
						n += t.em(a);
						break;
					case "codespan":
						n += t.codespan(a);
						break;
					case "br":
						n += t.br(a);
						break;
					case "del":
						n += t.del(a);
						break;
					default: {
						let e = "Token with \"" + a.type + "\" type was not found.";
						if (this.options.silent) return console.error(e), "";
						throw Error(e);
					}
				}
			}
			return n;
		}
	}
	class de {
		options;
		block;
		constructor(t) {
			this.options = t || e.defaults;
		}
		static passThroughHooks = new Set([
			"preprocess",
			"postprocess",
			"processAllTokens"
		]);
		preprocess(e) {
			return e;
		}
		postprocess(e) {
			return e;
		}
		processAllTokens(e) {
			return e;
		}
		provideLexer() {
			return this.block ? K.lex : K.lexInline;
		}
		provideParser() {
			return this.block ? J.parse : J.parseInline;
		}
	}
	class Y {
		defaults = {
			async: !1,
			breaks: !1,
			extensions: null,
			gfm: !0,
			hooks: null,
			pedantic: !1,
			renderer: null,
			silent: !1,
			tokenizer: null,
			walkTokens: null
		};
		options = this.setOptions;
		parse = this.parseMarkdown(!0);
		parseInline = this.parseMarkdown(!1);
		Parser = J;
		Renderer = q;
		TextRenderer = ue;
		Lexer = K;
		Tokenizer = le;
		Hooks = de;
		constructor(...e) {
			this.use(...e);
		}
		walkTokens(e, t) {
			let n = [];
			for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
				case "table": {
					let e = r;
					for (let r of e.header) n = n.concat(this.walkTokens(r.tokens, t));
					for (let r of e.rows) for (let e of r) n = n.concat(this.walkTokens(e.tokens, t));
					break;
				}
				case "list": {
					let e = r;
					n = n.concat(this.walkTokens(e.items, t));
					break;
				}
				default: {
					let e = r;
					this.defaults.extensions?.childTokens?.[e.type] ? this.defaults.extensions.childTokens[e.type].forEach(((r) => {
						let i = e[r].flat(Infinity);
						n = n.concat(this.walkTokens(i, t));
					})) : e.tokens && (n = n.concat(this.walkTokens(e.tokens, t)));
				}
			}
			return n;
		}
		use(...e) {
			let t = this.defaults.extensions || {
				renderers: {},
				childTokens: {}
			};
			return e.forEach(((e) => {
				let n = { ...e };
				if (n.async = this.defaults.async || n.async || !1, e.extensions && (e.extensions.forEach(((e) => {
					if (!e.name) throw Error("extension name required");
					if ("renderer" in e) {
						let n = t.renderers[e.name];
						t.renderers[e.name] = n ? function(...t) {
							let r = e.renderer.apply(this, t);
							return !1 === r && (r = n.apply(this, t)), r;
						} : e.renderer;
					}
					if ("tokenizer" in e) {
						if (!e.level || e.level !== "block" && e.level !== "inline") throw Error("extension level must be 'block' or 'inline'");
						let n = t[e.level];
						n ? n.unshift(e.tokenizer) : t[e.level] = [e.tokenizer], e.start && (e.level === "block" ? t.startBlock ? t.startBlock.push(e.start) : t.startBlock = [e.start] : e.level === "inline" && (t.startInline ? t.startInline.push(e.start) : t.startInline = [e.start]));
					}
					"childTokens" in e && e.childTokens && (t.childTokens[e.name] = e.childTokens);
				})), n.extensions = t), e.renderer) {
					let t = this.defaults.renderer || new q(this.defaults);
					for (let n in e.renderer) {
						if (!(n in t)) throw Error(`renderer '${n}' does not exist`);
						if (["options", "parser"].includes(n)) continue;
						let r = n, i = e.renderer[r], a = t[r];
						t[r] = (...e) => {
							let n = i.apply(t, e);
							return !1 === n && (n = a.apply(t, e)), n || "";
						};
					}
					n.renderer = t;
				}
				if (e.tokenizer) {
					let t = this.defaults.tokenizer || new le(this.defaults);
					for (let n in e.tokenizer) {
						if (!(n in t)) throw Error(`tokenizer '${n}' does not exist`);
						if ([
							"options",
							"rules",
							"lexer"
						].includes(n)) continue;
						let r = n, i = e.tokenizer[r], a = t[r];
						t[r] = (...e) => {
							let n = i.apply(t, e);
							return !1 === n && (n = a.apply(t, e)), n;
						};
					}
					n.tokenizer = t;
				}
				if (e.hooks) {
					let t = this.defaults.hooks || new de();
					for (let n in e.hooks) {
						if (!(n in t)) throw Error(`hook '${n}' does not exist`);
						if (["options", "block"].includes(n)) continue;
						let r = n, i = e.hooks[r], a = t[r];
						de.passThroughHooks.has(n) ? t[r] = (e) => {
							if (this.defaults.async) return Promise.resolve(i.call(t, e)).then(((e) => a.call(t, e)));
							let n = i.call(t, e);
							return a.call(t, n);
						} : t[r] = (...e) => {
							let n = i.apply(t, e);
							return !1 === n && (n = a.apply(t, e)), n;
						};
					}
					n.hooks = t;
				}
				if (e.walkTokens) {
					let t = this.defaults.walkTokens, r = e.walkTokens;
					n.walkTokens = function(e) {
						let n = [];
						return n.push(r.call(this, e)), t && (n = n.concat(t.call(this, e))), n;
					};
				}
				this.defaults = {
					...this.defaults,
					...n
				};
			})), this;
		}
		setOptions(e) {
			return this.defaults = {
				...this.defaults,
				...e
			}, this;
		}
		lexer(e, t) {
			return K.lex(e, t ?? this.defaults);
		}
		parser(e, t) {
			return J.parse(e, t ?? this.defaults);
		}
		parseMarkdown(e) {
			return (t, n) => {
				let r = { ...n }, i = {
					...this.defaults,
					...r
				}, a = this.onError(!!i.silent, !!i.async);
				if (!0 === this.defaults.async && !1 === r.async) return a(/* @__PURE__ */ Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
				if (t == null) return a(/* @__PURE__ */ Error("marked(): input parameter is undefined or null"));
				if (typeof t != "string") return a(/* @__PURE__ */ Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected"));
				i.hooks && (i.hooks.options = i, i.hooks.block = e);
				let o = i.hooks ? i.hooks.provideLexer() : e ? K.lex : K.lexInline, s = i.hooks ? i.hooks.provideParser() : e ? J.parse : J.parseInline;
				if (i.async) return Promise.resolve(i.hooks ? i.hooks.preprocess(t) : t).then(((e) => o(e, i))).then(((e) => i.hooks ? i.hooks.processAllTokens(e) : e)).then(((e) => i.walkTokens ? Promise.all(this.walkTokens(e, i.walkTokens)).then((() => e)) : e)).then(((e) => s(e, i))).then(((e) => i.hooks ? i.hooks.postprocess(e) : e)).catch(a);
				try {
					i.hooks && (t = i.hooks.preprocess(t));
					let e = o(t, i);
					i.hooks && (e = i.hooks.processAllTokens(e)), i.walkTokens && this.walkTokens(e, i.walkTokens);
					let n = s(e, i);
					return i.hooks && (n = i.hooks.postprocess(n)), n;
				} catch (e) {
					return a(e);
				}
			};
		}
		onError(e, t) {
			return (n) => {
				if (n.message += "\nPlease report this to https://github.com/markedjs/marked.", e) {
					let e = "<p>An error occurred:</p><pre>" + U(n.message + "", !0) + "</pre>";
					return t ? Promise.resolve(e) : e;
				}
				if (t) return Promise.reject(n);
				throw n;
			};
		}
	}
	let fe = new Y();
	function X(e, t) {
		return fe.parse(e, t);
	}
	X.options = X.setOptions = function(e) {
		return fe.setOptions(e), X.defaults = fe.defaults, n(X.defaults), X;
	}, X.getDefaults = t, X.defaults = e.defaults, X.use = function(...e) {
		return fe.use(...e), X.defaults = fe.defaults, n(X.defaults), X;
	}, X.walkTokens = function(e, t) {
		return fe.walkTokens(e, t);
	}, X.parseInline = fe.parseInline, X.Parser = J, X.parser = J.parse, X.Renderer = q, X.TextRenderer = ue, X.Lexer = K, X.lexer = K.lex, X.Tokenizer = le, X.Hooks = de, X.parse = X;
	let pe = X.options, me = X.setOptions, he = X.use, ge = X.walkTokens, _e = X.parseInline, ve = X, Z = J.parse, ye = K.lex;
	e.Hooks = de, e.Lexer = K, e.Marked = Y, e.Parser = J, e.Renderer = q, e.TextRenderer = ue, e.Tokenizer = le, e.getDefaults = t, e.lexer = ye, e.marked = X, e.options = pe, e.parse = ve, e.parseInline = _e, e.parser = Z, e.setOptions = me, e.use = he, e.walkTokens = ge;
})), e.events.on("renderbuttons", function(t, n) {
	if (n.node && n.node.tags && n.node.tags.has("group-dotted-lines")) {
		var r = t.getScale(), i = e.t(n.node.templateName, n.node.min, r), a = "";
		n.node.min ? (i.nodeGroupDottedOpenButton || console.error(`[${n.node.templateName}].nodeGroupDottedOpenButton is not defined`), a += `<g style="cursor:pointer;"  data-ctrl-n-dotted-open="${n.node.id}" transform="matrix(1,0,0,1,${n.node.x},${n.node.y})">`, a += i.nodeGroupDottedOpenButton) : (i.nodeGroupDottedCloseButton || console.error(`[${n.node.templateName}].nodeGroupDottedCloseButton is not defined`), a += `<g style="cursor:pointer;" transform="matrix(1,0,0,1,${n.node.x},${n.node.y})" data-ctrl-n-dotted-close="${n.node.id}">`, a += i.nodeGroupDottedCloseButton), a += "</g>", a = a.replaceAll("{cw}", n.node.w / 2).replaceAll("{ch}", n.node.h / 2).replaceAll("{ew}", n.node.w - (n.node.padding ? n.node.padding[1] : 0)).replaceAll("{eh}", n.node.h - (n.node.padding ? n.node.padding[2] : 0));
		var o = t.getNode(n.node.stChildrenIds[0]);
		a.indexOf("{collapsed-children-count}") != -1 && (a = a.replace("{collapsed-children-count}", o.collapsedChildCount)), a.indexOf("{collapsed-children-total-count}") != -1 && (a = a.replace("{collapsed-children-total-count}", o.deepCollapsedChildCount)), a.indexOf("{children-count}") != -1 && (a = a.replace("{children-count}", o.childCount)), a.indexOf("{children-total-count}") != -1 && (a = a.replace("{children-total-count}", o.deepChildCount)), n.html += a;
	}
}), e.events.on("redraw", function(t, n) {
	var r = null;
	if (t.manager.action == e.action.centerNode && (r = t.manager.actionParams.id), r != null) {
		var i = t.getNode(r);
		if (i.isTreeListItem) {
			var a = e._getCenterNodeFromParams(t.manager.nodes, t.manager.actionParams), o = a.stChildren[0].lcn ? a.stChildren[0].lcn : "base", s = t.manager.layoutConfigs[o], c = e._getScrollTopForNode(a, i.id), l = a.treeList.scrollTop;
			c != l && (t._treeListUpdateInterval = e.animate(null, {}, {}, 400, e.anim.inOutPow, function() {}, function(e) {
				a.treeList.scrollTop = e * (c - l) + l, t._treeListUpdate(a, s.orientation);
			}));
		}
	}
}), e.prototype.__mouseScrollHandlerTreeList = function(t, n) {
	var r = n.delta || n.wheelDelta;
	for (r === void 0 && (r = -n.detail), r = Math.max(-1, Math.min(1, r)); t && !t.stParent;) t = t.parent;
	t = t.stParent;
	var i = e.TREELIST_WHEEL_STEP;
	i == "auto" && (i = t.stChildren[0].h / 2), t.treeList.scrollTop += -r * i;
	var a = t.stChildren[0].lcn ? t.stChildren[0].lcn : "base", o = this.manager.layoutConfigs[a];
	this._treeListUpdateInterval &&= (clearInterval(this._treeListUpdateInterval), null), e._treeListGetTumbPositionFromScrollTop(t).scrollBarDisplay == "none" || (n.preventDefault(), this._treeListUpdate(t, o.orientation));
}, e.prototype._treeListUpdate = function(t, n) {
	e._treeListSetProps(t, n), e._treeListAdjustToSTNodePostition(t.stChildren, t);
	var r = this.getScale(), i = this.element.querySelector(`[data-treelist-content="${t.id}"]`), a = i.transform.baseVal.consolidate().matrix;
	a.f = -t.treeList.scrollTop, this._treeListIterate2(t.stChildren, t, r, i);
	for (var o of t.treeList.pinnedIds) {
		var s = this.getNode(o);
		this._treeListSetPositions(s, r, i, !0);
	}
	var c = this.element.querySelector(`[data-treelist-thumb="${t.id}"]`), l = this.element.querySelector(`[data-treelist-scroll="${t.id}"]`), { thumbHeight: u, thumbPosition: d, scrollBarDisplay: f } = e._treeListGetTumbPositionFromScrollTop(t);
	c.style.display = f, l.style.display = f, c.setAttributeNS(null, "height", u), c.setAttributeNS(null, "y", +d);
}, e.prototype._treeListIterate2 = function(e, t, n, r) {
	for (var i of e) t.treeList.pinnedIds.includes(i.id) || this._treeListSetPositions(i, n, r, !1), this._treeListIterate2(i.children, t, n, r);
}, e.prototype._treeListSetPositions = function(e, t, n, r) {
	var i = this.getNodeElement(e.id);
	if (i) {
		var a = i.transform.baseVal.consolidate().matrix;
		i.classList.remove("treelist-pinned"), r && (i.classList.add("treelist-pinned"), n.appendChild(i)), a.f = e.y, a.e = e.x;
		var o = this.element.querySelector(`[data-ctrl-ec-id="${e.id}"]`);
		if (o) {
			var s = o.transform.baseVal.consolidate().matrix;
			s.f = e.y, n.appendChild(o);
		}
	}
}, e.prototype._treeListThumbMouseDownHandler = function(t, n, r) {
	var i = t.getAttribute("data-treelist-thumb"), a = this.getNode(i), o = this.getSvg(), s = this, c = !0, l = e._getClientXY(n), u = this.getScale(), d = parseFloat(t.getAttribute("y")), f = parseFloat(t.getAttribute("height")), p = function(t) {
		if (c) {
			thumbPosition = d + (e._getClientXY(t).y - l.y) / u;
			var n = e._treeListGetScrollTopFromTumbPosition(a, f, thumbPosition);
			a.treeList.scrollTop = n, s._treeListUpdateInterval &&= (clearInterval(s._treeListUpdateInterval), null), s._treeListUpdate(a);
		}
	}, m = function(e) {
		c = !1, o.removeEventListener(r.move, p), o.removeEventListener(r.up, m);
	};
	o.addEventListener(r.move, p), o.addEventListener(r.up, m);
}, e.prototype._treeListExpandCollapseHandler = function(t) {
	var n = this.getNode(t);
	if (n && n.isTreeListItem) {
		var r = e.getRootOf(n).stParent;
		if (r.treeList.pinnedIds.includes(t)) {
			var i = e._getScrollTopForNode(r, n.id);
			r.treeList.scrollTop = i, this._treeListUpdate(r);
		}
	}
}, e === void 0 && (e = {}), e.prototype.undo = function(t) {
	if (this.config.undoRedoStorageName) {
		var n = this.undoStepsCount();
		if (n != 0) {
			this._putInRedoStack();
			var r = `${this.config.undoRedoStorageName}_undo_` + (n - 1), i = sessionStorage.getItem(r);
			sessionStorage.removeItem(r);
			var a = JSON.parse(i);
			this.config.nodes = a.nodes, this.config.clinks = a.clinks, this.config.slinks = a.slinks, this.config.groupDottedLines = a.groupDottedLines, this.config.dottedLines = a.dottedLines, this._ai.setContext(), e.events.publish("updated", [this]), this.filterUI.update(), this.draw(e.action.update, void 0, t), this.undoRedoUI.refresh();
		}
	}
}, e.prototype.redo = function(t) {
	if (this.config.undoRedoStorageName) {
		var n = this.redoStepsCount();
		if (n != 0) {
			this._putInUndoStack();
			var r = `${this.config.undoRedoStorageName}_redo_` + (n - 1), i = sessionStorage.getItem(r);
			sessionStorage.removeItem(r);
			var a = JSON.parse(i);
			this.config.nodes = a.nodes, this.config.clinks = a.clinks, this.config.slinks = a.slinks, this.config.groupDottedLines = a.groupDottedLines, this.config.dottedLines = a.dottedLines, this._ai.setContext(), e.events.publish("updated", [this]), this.filterUI.update(), this.draw(e.action.update, void 0, t), this.undoRedoUI.refresh();
		}
	}
}, e.prototype.clearRedo = function() {
	if (this.config.undoRedoStorageName) {
		for (var e = `${this.config.undoRedoStorageName}_redo_`, t = Object.keys(sessionStorage), n = 0; t.indexOf(e + n) != -1;) sessionStorage.removeItem(e + n), n++;
		this.undoRedoUI.refresh();
	}
}, e.prototype.clearUndo = function() {
	if (this.config.undoRedoStorageName) {
		for (var e = `${this.config.undoRedoStorageName}_undo_`, t = Object.keys(sessionStorage), n = 0; t.indexOf(e + n) != -1;) sessionStorage.removeItem(e + n), n++;
		this.undoRedoUI.refresh();
	}
}, e.prototype.undoStepsCount = function() {
	for (var e = `${this.config.undoRedoStorageName}_undo_`, t = Object.keys(sessionStorage), n = 0; t.indexOf(e + n) != -1;) n++;
	return n;
}, e.prototype.redoStepsCount = function() {
	for (var e = `${this.config.undoRedoStorageName}_redo_`, t = Object.keys(sessionStorage), n = 0; t.indexOf(e + n) != -1;) n++;
	return n;
}, e.prototype._putInUndoStack = function() {
	if (this.config.undoRedoStorageName) {
		var e = `${this.config.undoRedoStorageName}_undo_` + this.undoStepsCount();
		sessionStorage.setItem(e, JSON.stringify({
			nodes: this.config.nodes,
			clinks: this.config.clinks,
			slinks: this.config.slinks,
			groupDottedLines: this.config.groupDottedLines,
			dottedLines: this.config.dottedLines
		}));
	}
}, e.prototype._putInRedoStack = function() {
	if (this.config.undoRedoStorageName) {
		var e = `${this.config.undoRedoStorageName}_redo_` + this.redoStepsCount();
		sessionStorage.setItem(e, JSON.stringify({
			nodes: this.config.nodes,
			clinks: this.config.clinks,
			slinks: this.config.slinks,
			groupDottedLines: this.config.groupDottedLines,
			dottedLines: this.config.dottedLines
		}));
	}
}, e === void 0 && (e = {}), e.undoRedoUI = function() {
	this.instance = null, this._event_id = e._guid();
}, e.undoRedoUI.prototype.init = function(e) {
	e.config.undoRedoStorageName && (this.instance = e, this.refresh());
}, e.undoRedoUI.prototype.refresh = function() {
	var t = this;
	if (this.instance.config.undoRedoStorageName) {
		var n = {
			undoStepsCount: this.instance.undoStepsCount(),
			redoStepsCount: this.instance.redoStepsCount()
		};
		if (e.events.publish("change", [this, n]) !== !1) {
			var r = this.instance.element.querySelector("[data-undo]"), i = this.instance.element.querySelector("[data-redo]");
			if (!r || !i) {
				var a = document.createElement("div");
				a.classList.add("boc-undo-redo"), a.innerHTML = `<span data-undo>${e.icon.undo(50, 50, "")}<span class="boc-undo-i"></span></span>
                            <span data-redo>${e.icon.redo(50, 50, "")}<span class="boc-redo-i"></span></span>`, this.instance.element.appendChild(a), r = this.instance.element.querySelector("[data-undo]"), i = this.instance.element.querySelector("[data-redo]"), r.addEventListener("click", function() {
					t.instance.undo();
				}), i.addEventListener("click", function() {
					t.instance.redo();
				});
			}
			n.undoStepsCount > 0 ? (r.classList.add("boc-ur-clickable"), r.querySelector(".boc-undo-i").innerHTML = n.undoStepsCount, r.querySelector(".boc-undo-i").style.display = "inline-block") : (r.classList.remove("boc-ur-clickable"), r.querySelector(".boc-undo-i").style.display = "none"), n.redoStepsCount > 0 ? (i.classList.add("boc-ur-clickable"), i.querySelector(".boc-redo-i").innerHTML = n.redoStepsCount, i.querySelector(".boc-redo-i").style.display = "inline-block") : (i.classList.remove("boc-ur-clickable"), i.querySelector(".boc-redo-i").style.display = "none");
		}
	}
}, e.undoRedoUI.prototype.on = function(t, n) {
	return e.events.on(t, n, this._event_id), this;
}, e.undoRedoUI.prototype.onChange = function(e) {
	return this.on("change", function(t, n) {
		return e.call(t, n);
	});
}, e.events.on("redraw", function(t, n) {
	if (!t.config.miniMap) {
		var r = t.element.querySelector("[data-id=\"mini-map\"]");
		r && r.parentNode.removeChild(r);
		return;
	}
	if (t.manager.action == e.action.move) return;
	e.miniMap._settings._scale = Math.min(e.miniMap.width / (t.response.boundary.maxX - t.response.boundary.minX), e.miniMap.height / (t.response.boundary.maxY - t.response.boundary.minY)), e.miniMap._settings._translateX = -t.response.boundary.minX * e.miniMap._settings._scale + (e.miniMap.width - (t.response.boundary.maxX - t.response.boundary.minX) * e.miniMap._settings._scale) / 2, e.miniMap._settings._translateY = -t.response.boundary.minY * e.miniMap._settings._scale + (e.miniMap.height - (t.response.boundary.maxY - t.response.boundary.minY) * e.miniMap._settings._scale) / 2;
	var i = t.getViewBox();
	e.miniMap._init(t), e.miniMap._drawMainCanvas(t), e.miniMap._drawRectSelectorCanvas(t, i);
	var a = t.element.querySelector("[data-id=\"mini-map-focus\"]"), o = !1, s, c, l, u, d = null;
	function f(t, n) {
		var r = (t - e.miniMap._settings._translateX) / e.miniMap._settings._scale, a = (n - e.miniMap._settings._translateY) / e.miniMap._settings._scale;
		return r > i[0] && r < i[0] + i[2] && a > i[1] && a < i[1] + i[3];
	}
	function p(e) {
		var t = a.getBoundingClientRect(), n = t.left, r = t.top;
		if (s = parseInt(e.clientX - n), c = parseInt(e.clientY - r), f(s, c)) {
			e.preventDefault(), e.stopPropagation(), o = !0;
			return;
		}
	}
	function m(n) {
		if (o) {
			n.preventDefault(), n.stopPropagation(), e.miniMap._mouseMove = !0;
			var r = a.getBoundingClientRect(), f = r.left, p = r.top;
			l = parseInt(n.clientX - f), u = parseInt(n.clientY - p);
			var m = (l - s) / e.miniMap._settings._scale, h = (u - c) / e.miniMap._settings._scale;
			i[0] = m + i[0], i[1] = h + i[1], t.setViewBox(i), d &&= (clearTimeout(d), null), d = setTimeout(function() {
				t._draw(!0, e.action.move);
			}, 300), e.miniMap._drawRectSelectorCanvas(t, i), s = l, c = u;
		}
	}
	function h(e) {
		o &&= (e.preventDefault(), e.stopPropagation(), !1);
	}
	function g(t) {
		o && (t.preventDefault(), t.stopPropagation(), o = !1, e.miniMap._mouseMove = !1);
	}
	function _(n) {
		if (n.preventDefault(), n.stopPropagation(), e.miniMap._mouseMove) e.miniMap._mouseMove = !1;
		else {
			var r = a.getBoundingClientRect(), o = r.left, s = r.top;
			l = parseInt(n.clientX - o), u = parseInt(n.clientY - s);
			var c = l / e.miniMap._settings._scale, f = u / e.miniMap._settings._scale;
			i[0] = c - (i[0] + i[2] - i[0]) / 2 - e.miniMap._settings._translateX / e.miniMap._settings._scale, i[1] = f - (i[1] + i[3] - i[1]) / 2 - e.miniMap._settings._translateY / e.miniMap._settings._scale, t.setViewBox(i), d &&= (clearTimeout(d), null), d = setTimeout(function() {
				t._draw(!0, e.action.move);
			}, 300), e.miniMap._drawRectSelectorCanvas(t, i);
		}
	}
	a.onmousedown = p, a.onmousemove = m, a.onmouseup = h, a.onmouseout = g, a.onclick = _;
}), e.miniMap = {}, e.miniMap._settings = {
	_translateX: 0,
	_translateY: 0,
	_scale: 1
}, e.miniMap._drawMainCanvas = function(t) {
	var n = t.element.querySelector("[data-id=\"mini-map-main\"]"), r = n.getContext("2d");
	e.miniMap._initCtx(t, n, 1);
	var i = 0, a = [];
	function o(t, n) {
		if (Array.isArray(n)) {
			for (var s = 0; s < n.length; s++) o(t, n[s]);
			return;
		}
		r.fillStyle = e.miniMap.colors[3], r.beginPath(), r.lineWidth = "0.5", r.fillRect(n.x, n.y, n.w, n.h), r.strokeRect(n.x, n.y, n.w, n.h);
		for (var s = 0; s < n.stChildrenIds.length; s++) i++, a.includes(n.id) || (i == 1 ? r.fillStyle = e.miniMap.colors[0] : i == 2 ? r.fillStyle = e.miniMap.colors[1] : i == 3 && (r.fillStyle = e.miniMap.colors[2]), r.beginPath(), r.fillRect(n.x, n.y, n.w, n.h), r.strokeRect(n.x, n.y, n.w, n.h), a.push(n.id)), o(t, t.getNode(n.stChildrenIds[s])), i--;
		for (var s = 0; s < n.childrenIds.length; s++) o(t, t.getNode(n.childrenIds[s]));
	}
	o(t, t.roots);
}, e.miniMap._drawRectSelectorCanvas = function(t, n) {
	var r = t.element.querySelector("[data-id=\"mini-map-focus\"]"), i = r.getContext("2d");
	e.miniMap._initCtx(t, r, e.miniMap.opacity);
	var a = n[0], o = n[1], s = n[2], c = n[3];
	i.lineWidth = .5 / e.miniMap._settings._scale, i.strokeStyle = e.miniMap.focusStroke, i.globalAlpha = 1, i.clearRect(a, o, s, c), i.strokeRect(a, o, s, c);
}, e.miniMap._initCtx = function(t, n, r) {
	var i = n.getContext("2d");
	n.width = n.width, n.height = n.height, i.clearRect(0, 0, e.miniMap.width, e.miniMap.height), i.globalAlpha = r, r != 1 && (i.fillStyle = e.miniMap.selectorBackgroundColor, i.fillRect(0, 0, e.miniMap.width, e.miniMap.height)), i.translate(e.miniMap._settings._translateX, e.miniMap._settings._translateY), i.scale(e.miniMap._settings._scale, e.miniMap._settings._scale);
}, e.miniMap._init = function(t) {
	if (!t.element.querySelector("[data-id=\"mini-map\"]")) {
		var n = document.createElement("canvas");
		n.width = e.miniMap.width, n.height = e.miniMap.height, n.setAttribute("data-id", "mini-map-main"), n.style.display = "inline-block", n.style.backgroundColor = e.miniMap.backgroundColor, n.style.position = "absolute", n.style.top = 0, n.style.left = 0;
		var r = document.createElement("canvas");
		r.width = e.miniMap.width, r.height = e.miniMap.height, r.setAttribute("data-id", "mini-map-focus"), r.style.display = "inline-block", r.style.position = "absolute", r.style.top = 0, r.style.left = 0;
		var i = document.createElement("div");
		i.setAttribute("data-id", "mini-map"), i.style.position = "absolute";
		for (var a = [
			"top",
			"right",
			"left",
			"bottom"
		], o = 0; o < a.length; o++) {
			var s = a[o];
			e.isNEU(e.miniMap.position[s]) || (e.miniMap.position[s] == "padding" ? i.style[s] = t.config.padding + "px" : i.style[s] = e.miniMap.position[s] + "px");
		}
		i.style.border = e.miniMap.border, i.style.padding = e.miniMap.padding + "px", i.style.backgroundColor = e.miniMap.backgroundColor;
		var c = document.createElement("div");
		c.style.position = "relative", c.style.width = e.miniMap.width + "px", c.style.height = e.miniMap.height + "px", c.appendChild(n), c.appendChild(r), i.appendChild(c), t.element.appendChild(i), i.addEventListener("DOMMouseScroll", function(e) {
			t.__mouseScrollHandler(i, e);
		}), i.addEventListener("mousewheel", function(e) {
			t.__mouseScrollHandler(i, e);
		});
		var l = 0, u = 0, d = function(e) {
			l = e.clientX, u = e.clientY, document.addEventListener("mousemove", f), document.addEventListener("mouseup", p);
		}, f = function(t) {
			e.miniMap._mouseMove = !0;
			var n = t.clientX - l, r = t.clientY - u;
			if (!e.isNEU(i.style.left)) {
				var a = parseFloat(i.style.left) + n;
				i.style.left = `${a}px`;
			}
			if (!e.isNEU(i.style.right)) {
				var o = parseFloat(i.style.right) - n;
				i.style.right = `${o}px`;
			}
			if (!e.isNEU(i.style.bottom)) {
				var s = parseFloat(i.style.bottom) - r;
				i.style.bottom = `${s}px`;
			}
			if (!e.isNEU(i.style.top)) {
				var c = parseFloat(i.style.top) + r;
				i.style.top = `${c}px`;
			}
			l = t.clientX, u = t.clientY;
		}, p = function() {
			document.removeEventListener("mousemove", f), document.removeEventListener("mouseup", p);
		};
		e.miniMap.draggable && i.addEventListener("mousedown", d);
	}
}, e.miniMap.colors = [
	"#E0E0E0",
	"#BDBDBD",
	"#9E9E9E",
	"#757575"
], e.miniMap.selectorBackgroundColor = "white", e.miniMap.backgroundColor = "white", e.miniMap.focusStroke = "#f57c00", e.miniMap.opacity = .4, e.miniMap.border = "1px solid #aeaeae", e.miniMap.width = 250, e.miniMap.height = 140, e.miniMap.padding = 5, e.miniMap.position = {
	top: void 0,
	left: "padding",
	right: void 0,
	bottom: "padding"
}, e.miniMap.draggable = !0, e._search = {}, e._search.search = function(t, n, r, i, a, o, s) {
	var c = [], l = n.toLowerCase();
	document.documentElement.lang && (l = n.toLocaleLowerCase(document.documentElement.lang));
	var u = l.split(" ");
	if (s && u.length > 1) {
		var d = u[0];
		s[d] && (r = [s[d]], l = l.replace(d, "").trim(), u = l.split(" "));
	}
	u = u.filter(function(e, t, n) {
		return n.indexOf(e) === t;
	});
	for (var f = {}, p = 0; p < t.length; p++) for (var m = t[p], h = 0; h < r.length; h++) {
		var g = r[h];
		if (!e.isNEU(m[g])) {
			var _ = m[g], n = e._search.searchAndComputeScore(u, _, g, o);
			if (n != null) {
				var v = m.id;
				if (!f[v]) f[v] = n.__score, e._search.addNodeToResult(c, i, m, n, g, a);
				else if (f[v] && f[v] < n.__score) {
					f[v] = n.__score;
					for (var y = c.length - 1; y >= 0; y--) c[y].id == v && c.splice(y, 1);
					e._search.addNodeToResult(c, i, m, n, g, a);
				}
			}
		}
	}
	return c.sort(function(e, t) {
		return e.__score < t.__score ? 1 : e.__score > t.__score ? -1 : 0;
	}), c;
}, e._search.addNodeToResult = function(t, n, r, i, a, o) {
	var s = {};
	s.id = r.id, e.isNEU(r[o]) || (s[o] = r[o]);
	for (var c = 0; c < n.length; c++) {
		var l = n[c];
		e.isNEU(r[l]) || e.isNEU(s[l]) && (s[l] = r[l]);
	}
	i != null && (e.isNEU(s.__score) && (s.__score = i.__score), e.isNEU(s.__searchField) && (s.__searchField = a), e.isNEU(s.__searchMarks) && (s.__searchMarks = i.__searchMarks)), t.push(s);
}, e._search.searchAndComputeScore = function(t, n, r, i) {
	if (e.isNEU(n) || e.isNEU(t) || !t.length) return null;
	typeof n != "string" && (n = n.toString());
	var a = n.toLowerCase();
	document.documentElement.lang && (a = n.toLocaleLowerCase(document.documentElement.lang));
	var o = e._search.searchIndexesOf(a, t);
	if (!o.length) return null;
	for (var s = a.length / 100, c = 0, l = 0, u = c > 0 ? 100 : 0, d = 0, f = 0; f < t.length; f++) for (var p = t[f], m = 0; m < o.length; m++) if (p.indexOf(o[m].searchPhrase) != -1) {
		d++;
		break;
	}
	var h = 100 / (t.length / d);
	if (o.length) {
		l = o[0].start;
		for (var m = 0; m < o.length; m++) if (c += o[m].length, o[m].start < l && (l = o[m].start), m >= 1 && o[m - 1].start > o[m].start) {
			u = 0;
			break;
		}
	}
	var g = 0;
	c != 0 && (g = c / s);
	var _ = c > 0 ? 100 : 0;
	l != 0 && (_ = 100 - l / s);
	var v = 0;
	i && i[r] && (v = i[r]), h &&= h / 100 * 50, g > 0 && (g = g / 100 * 10), _ > 0 && (_ = _ / 100 * 10), u > 0 && (u = u / 100 * 10), v > 0 && (v = v / 100 * 20);
	var y = Math.round((h + g + _ + u + v) * 1e4);
	o.sort(function(e, t) {
		return e.start < t.start ? -1 : e.start > t.start ? 1 : 0;
	});
	for (var m = o.length - 1; m >= 0; m--) for (var f = 0; f < o.length; f++) f < m && o[f].start + o[f].length > o[m].start && o.splice(m, 1);
	for (var b = n, m = o.length - 1; m >= 0; m--) b = b.insert(o[m].start + o[m].length, "</mark>"), b = b.insert(o[m].start, "<mark>");
	return {
		__searchMarks: b,
		__score: y
	};
}, e._search.searchIndexesOf = function(t, n) {
	var r = [];
	if (!e.isNEU(t)) for (var i = 0; i < n.length; i++) {
		var a = n[i];
		if (!e.isNEU(a)) for (var o = 0; o = t.indexOf(a, o), o > -1;) r.push({
			length: a.length,
			start: o,
			searchPhrase: a
		}), o += a.length;
	}
	return r.sort(function(e, t) {
		return e.length < t.length ? 1 : e.length > t.length || e.start < t.start ? -1 : e.start > t.start ? 1 : 0;
	}), r = r.filter(function(e) {
		for (var t = !1, n = 0; n < r.length; n++) {
			var i = r[n].start, a = r[n].start + r[n].length - 1, o = e.start, s = e.start + e.length - 1;
			if (i == o && a == s) {
				t = !1;
				break;
			}
			if (i >= o && a <= s) {
				t = !0;
				break;
			} else if (i <= o && a >= s) {
				t = !0;
				break;
			}
		}
		return !t;
	}), r;
}, e.events.on("redraw", function(t, n) {
	if (!t.config.state) return;
	var r = [], i = [];
	function a(e) {
		if (Array.isArray(e)) {
			for (var t = 0; t < e.length; t++) a(e[t]);
			return;
		}
		(typeof e.id != "string" || typeof e.id == "string" && e.id.indexOf("split") == -1 && e.id.indexOf("mirror") == -1) && (r.push(e.id), e.min == 1 && i.push(e.id));
		for (var t = 0; t < e.stChildren.length; t++) a(e.stChildren[t]);
		for (var t = 0; t < e.children.length; t++) a(e.children[t]);
	}
	a(t.roots), e.state._put(t.config.roots, t.width(), t.height(), t.response.viewBox, r, i, t.response.adjustify, t.config.state);
}), e.state = {}, e.state._buildStateNames = function(e) {
	return {
		paramScale: e + "-scale",
		paramX: e + "-x",
		paramY: e + "-y",
		paramExp: e + "-exp",
		paramMin: e + "-min",
		paramRoots: e + "-roots",
		paramAdjustify: e + "-adjustify"
	};
}, e.state._put = function(t, n, r, i, a, o, s, c) {
	if (c && !(e.isNEU(a) || a.length == 0)) {
		var l = e.state._buildStateNames(c.name), u = {
			roots: t,
			scale: Math.min(n / i[2], r / i[3]),
			x: i[0],
			y: i[1],
			exp: a,
			min: o,
			adjustify: s
		};
		if (c.writeToUrlParams) {
			var d = new URLSearchParams(window.location.search);
			d.has(l.paramScale) ? d.set(l.paramScale, u.scale) : d.append(l.paramScale, u.scale), d.has(l.paramX) ? d.set(l.paramX, u.x) : d.append(l.paramX, u.x), d.has(l.paramY) ? d.set(l.paramY, u.y) : d.append(l.paramY, u.y), d.has(l.paramExp) ? d.set(l.paramExp, u.exp.join("*")) : d.append(l.paramExp, u.exp.join("*")), d.has(l.paramRoots) && Array.isArray(u.roots) ? d.set(l.paramRoots, u.roots.join("*")) : Array.isArray(u.roots) && d.append(l.paramRoots, u.roots.join("*")), d.has(l.paramMin) ? d.set(l.paramMin, u.min.join("*")) : d.append(l.paramMin, u.min.join("*")), d.has(l.paramAdjustify) ? d.set(l.paramAdjustify, u.adjustify.x + "*" + u.adjustify.y) : d.append(l.paramAdjustify, u.adjustify.x + "*" + u.adjustify.y), window.history.replaceState(null, null, "?" + d);
		}
		c.writeToIndexedDB && (u.id = c.name, e.idb.put(u, function(e) {
			e == 0 && console.error("Cannot write row - " + c.name);
		})), c.writeToLocalStorage && e.localStorage.setItem(c.name, JSON.stringify(u));
	}
}, e.state._get = function(t, n, r, i) {
	if (!t) {
		i(null);
		return;
	}
	var a = e.state._buildStateNames(t.name);
	if (t.readFromUrlParams) {
		var o = new URLSearchParams(window.location.search);
		if (o.has(a.paramScale) && o.has(a.paramX) && o.has(a.paramY) && o.has(a.paramExp) && o.has(a.paramMin) && o.has(a.paramAdjustify)) {
			var s = {}, c = parseFloat(o.get(a.paramScale)), l = parseFloat(o.get(a.paramX)), u = parseFloat(o.get(a.paramY)), d = [];
			d[0] = l, d[1] = u, d[2] = n / c, d[3] = r / c, s.vb = d, s.scale = c, s.x = l, s.y = u, s.roots = null, o.has(a.paramRoots) && (s.roots = o.get(a.paramRoots).split("*")), s.exp = o.get(a.paramExp).split("*"), s.min = o.get(a.paramMin).split("*");
			var f = o.get(a.paramAdjustify).split("*");
			s.adjustify = {
				x: parseFloat(f[0]),
				y: parseFloat(f[1])
			}, i(s);
			return;
		} else if (!t.readFromIndexedDB && !t.readFromLocalStorage) {
			i(null);
			return;
		}
	}
	if (t.readFromLocalStorage) {
		var s = e.localStorage.getItem(t.name);
		if (s != null) {
			s = JSON.parse(s);
			var d = [];
			d[0] = s.x, d[1] = s.y, d[2] = n / s.scale, d[3] = r / s.scale, s.vb = d, i(s);
			return;
		} else if (!t.readFromIndexedDB) {
			i(null);
			return;
		}
	}
	t.readFromIndexedDB && e.idb.read(t.name, function(e, a) {
		if (e == 0) console.error("Cannot read from - " + t.name), i(null);
		else if (e == null) i(null);
		else {
			var o = [];
			o[0] = a.x, o[1] = a.y, o[2] = n / a.scale, o[3] = r / a.scale, a.vb = o, i(a);
		}
	});
}, e.state.clear = function(t) {
	if (!t) return !1;
	try {
		localStorage.removeItem(t);
		var n = e.state._buildStateNames(t), r = new URLSearchParams(window.location.search);
		r.has(n.paramScale) && r.delete(n.paramScale), r.has(n.paramX) && r.delete(n.paramX), r.has(n.paramY) && r.delete(n.paramY), r.has(n.paramExp) && r.delete(n.paramExp), r.has(n.paramRoots) && r.delete(n.paramRoots), r.has(n.paramMin) && r.delete(n.paramMin), r.has(n.paramAdjustify) && r.delete(n.paramAdjustify), window.history.replaceState(null, null, "?" + r), e.idb.delete(t, function(e) {
			e == 0 && console.error("Cannot delete row - " + t);
		});
	} catch {}
}, e._magnify = {}, e.prototype.magnify = function(t, n, r, i, a) {
	i ||= this.config.anim;
	var o = this.getNode(t), s = this.getNodeElement(t);
	if (!(!o && !s)) {
		var c = e._magnify[t];
		c && (c.timer != null && clearInterval(c.timer), c.timerBack != null && clearInterval(c.timerBack), s.setAttribute("transform", "matrix(" + c.transformStart.toString() + ")"), e._magnify[t] = null), r && (s = s.cloneNode(!0), this.getSvg().appendChild(s));
		var l = e._getTransform(s), u = JSON.parse(JSON.stringify(l));
		u[0] = n, u[3] = n;
		var d = o.w + o.w * (n - 1), f = o.h + o.h * (n - 1);
		u[4] += (o.w - d) / 2, u[5] += (o.h - f) / 2;
		var p = e.animate(s, { transform: l }, { transform: u }, i.duration, i.func);
		e._magnify[t] = {
			timer: p,
			transformStart: l,
			nodeElement: s,
			front: r
		}, a && a(s);
	}
}, e.prototype.magnifyBack = function(t, n, r) {
	n ||= this.config.anim;
	var i = e._magnify[t];
	if (i) {
		i.timer != null && clearInterval(i.timer), i.timerBack != null && clearInterval(i.timerBack);
		var a = e._getTransform(i.nodeElement);
		i.timerBack = e.animate(i.nodeElement, { transform: a }, { transform: i.transformStart }, n.duration, n.func, function(t) {
			var n = t[0].getAttribute(e.attr.node_id);
			e._magnify[n] && e._magnify[n].front && (t[0].parentNode.removeChild(t[0]), e._magnify[n] = null), r && r(t[0]);
		});
	}
}, e === void 0 && (e = {}), e.events.on("init", function(t, n) {
	if (t.config.keyNavigation && (window.addEventListener("keydown", function() {
		t._windowKeyDownHandler.apply(t, [this, arguments[0]]);
	}), e.isNEU(t._keyNavigationActiveNodeId) && t.roots && t.roots.length)) {
		var r = t.roots[0].id;
		e.isNEU(t.config.keyNavigation.focusId) || (r = t.config.keyNavigation.focusId), t._keyNavigationActiveNodeId = r, t.center(t._keyNavigationActiveNodeId);
	}
}), e.prototype._windowKeyDownHandler = function(t, n) {
	for (var r = n.target, i = null; r && r != this.element;) {
		if (r.hasAttribute && r.hasAttribute(e.attr.node_id)) {
			i = r.getAttribute(e.attr.node_id);
			break;
		}
		r = r.parentNode;
	}
	if (r) {
		var a = i ? this.getNode(i) : null, o = {
			node: a,
			data: i ? this.get(i) : null,
			event: n
		};
		if (e.events.publish("key-down", [this, o]) !== !1 && a) {
			if (n.code == "KeyF") this.searchUI.find("");
			else if (n.code == "ArrowRight" || a.isAssistant && n.code == "ArrowDown" || a.isPartner && n.code == "ArrowDown") {
				var s = this.getNode(a.pid);
				if (s) {
					var c = s.childrenIds.indexOf(a.id);
					if (c++, c < s.childrenIds.length) {
						var l = s.childrenIds[c];
						this._keyNavigationActiveNodeId = l, this.center(l);
					}
				}
			} else if (n.code == "ArrowLeft") {
				var s = this.getNode(a.pid);
				if (s) {
					var c = s.childrenIds.indexOf(a.id);
					if (c--, c >= 0) {
						var l = s.childrenIds[c];
						this._keyNavigationActiveNodeId = l, this.center(l);
					}
				}
			} else if (n.code == "ArrowUp") {
				var s = this.getNode(a.pid);
				if (s) {
					var l = s.id;
					if (a.isAssistant || s.hasAssistants || a.isPartner || s.hasPartners) {
						var c = s.childrenIds.indexOf(a.id);
						c--, c >= 0 && (l = s.childrenIds[c]);
					}
					this._keyNavigationActiveNodeId = l, this.center(l);
				}
			} else if (n.code == "ArrowDown") a.childrenIds.length && (this._keyNavigationActiveNodeId = a.childrenIds[0], this.center(a.childrenIds[0]));
			else if (n.code == "Space") {
				var u = r.getAttribute(e.attr.node_id);
				this.toggleExpandCollapse(u, n);
				return;
			}
		}
	}
}, e.events.on("redraw", function(t, n) {
	t.config.keyNavigation && e._keyNavigation(t);
}), e.events.on("click", function(e, t) {
	e.config && e.config.keyNavigation && (e._keyNavigationActiveNodeId = t.node.id, e.center(t.node.id));
}), e._keyNavigation = function(t) {
	var n = t.element.querySelector(":focus");
	if (n && n.parentElement && n.parentElement.hasAttribute(e.attr.node_id)) {
		var r = n.parentElement, i = n, a = i.querySelector("title");
		a && a.parentNode.removeChild(a), i.removeAttribute("tabindex");
	}
	if (!e.isNEU(t._keyNavigationActiveNodeId)) {
		var r = t.getNodeElement(t._keyNavigationActiveNodeId);
		if (!(!r || !r.children.length)) {
			var i = r.children[0];
			i.setAttribute("tabindex", 2);
			var o = {
				text: "",
				id: t._keyNavigationActiveNodeId
			};
			if (e.events.publish("screen-reader-text", [t, o]), !e.isNEU(o.text)) {
				var a = document.createElementNS("http://www.w3.org/2000/svg", "title");
				a.innerHTML = o.text, i.appendChild(a);
			}
			e.SEARCH_CLOSE_RESULT_ON_ESCAPE_OR_CLICKOUTSIDE && t.searchUI.hide(), i.focus();
		}
	}
}, e.elements = {}, e.elements.textbox = function(t, n, r, i) {
	var a = e.elements._vidrf(t, n, i);
	if (a.doNotRender) return { html: "" };
	var o = "";
	return n.btn && (o = `<a href="#" data-input-btn="" class="boc-link boc-link-boc-button">${n.btn}</a>`), {
		html: `<div class="boc-form-field" style="min-width: ${r};">
                    <div class="boc-input" data-boc-input="" ${a.disabledAttribute} ${a.vlidators}>
                        <label for="${a.id}">${e._escapeGreaterLessSign(a.label)}</label>
                        <input ${a.readOnlyAttribute} data-binding="${e._escapeDoubleQuotes(a.binding)}" maxlength="256" id="${a.id}" name="${a.id}" type="text" value="${e._escapeDoubleQuotes(a.value)}" autocomplete="off">
                        ${o}
                    </div>
                </div>`,
		id: a.id,
		value: a.value
	};
}, e.elements.checkbox = function(t, n, r, i) {
	var a = e.elements._vidrf(t, n, i);
	if (a.doNotRender) return { html: "" };
	var o = a.value ? "checked" : "", s = i ? "onclick=\"return false;\"" : "";
	return {
		html: `<div class="boc-form-field"  style="min-width: ${r};" >
                        <label class="boc-checkbox" data-boc-input="" ${a.disabledAttribute}>
                            <input ${o} ${s} data-binding="${e._escapeDoubleQuotes(a.binding)}" type="checkbox"><span class="boc-checkbox-checkmark" type="checkbox"></span>${e._escapeGreaterLessSign(a.label)}
                        </label>
                    </div>`,
		id: a.id,
		value: o
	};
}, e.elements.select = function(t, n, r, i) {
	if (i) return e.elements.textbox(t, n, r, i);
	var a = e.elements._vidrf(t, n, i);
	return a.doNotRender ? { html: "" } : {
		html: `<div class="boc-form-field" style="min-width: ${r};">
                    <div class="boc-input" data-boc-input="" ${a.disabledAttribute} ${a.vlidators}>
                        <label for="${a.id}">${e._escapeGreaterLessSign(a.label)}</label>
                        <select data-binding="${e._escapeDoubleQuotes(a.binding)}" ${a.readOnlyAttribute} id="${a.id}" name="${a.id}">
                            ${(function() {
			for (var t = "", n = 0; n < a.options.length; n++) {
				var r = a.options[n], i = r.value == a.value ? "selected" : "";
				t += `<option ${i} value="${e._escapeDoubleQuotes(r.value)}">${e._escapeGreaterLessSign(r.text)}</option>`;
			}
			return t;
		})()}                           
                        </select>
                    </div>
                </div>`,
		id: a.id,
		value: a.value
	};
}, e.elements.multiSelect = function(t, n, r, i) {
	if (i) return e.elements.textbox(t, n, r, i);
	var a = e.elements._vidrf(t, n, i);
	return a.doNotRender ? { html: "" } : {
		html: `<div class="boc-form-field" style="min-width: ${r};">
                    <div class="boc-input" data-boc-input="" ${a.disabledAttribute} ${a.vlidators}>
                        <label for="${a.id}">${e._escapeGreaterLessSign(a.label)}</label>
                        <select class="multiple" data-binding="${e._escapeDoubleQuotes(a.binding)}" ${a.readOnlyAttribute} id="${a.id}" name="${a.id}" multiple>
                            ${(function() {
			for (var t = "", n = 0; n < a.options.length; n++) {
				var r = a.options[n], i = a.value.includes(r.value) ? "selected" : "";
				t += `<option ${i} value="${e._escapeDoubleQuotes(r.value)}">${e._escapeGreaterLessSign(r.text)}</option>`;
			}
			return t;
		})()}                           
                        </select>
                    </div>
                </div>`,
		id: a.id,
		value: a.value
	};
}, e.elements.date = function(t, n, r, i) {
	var a = e.elements._vidrf(t, n, i);
	return a.doNotRender ? { html: "" } : {
		html: `<div class="boc-form-field" style="min-width: ${r};">
                    <div class="boc-input" data-boc-input="" ${a.disabledAttribute} ${a.vlidators}>
                        <label for="${a.id}" class="hasval">${e._escapeGreaterLessSign(a.label)}</label>
                        <input data-binding="${e._escapeDoubleQuotes(a.binding)}" ${a.readOnlyAttribute} maxlength="256" id="${a.id}" name="${a.id}" type="date" value="${e._escapeDoubleQuotes(a.value)}" autocomplete="off">
                    </div>
                </div>`,
		id: a.id,
		value: a.value
	};
}, e.elements._vidrf = function(t, n, r) {
	var i = {};
	if (n.binding ||= "", n.label ||= "", n.type == "select" && !Array.isArray(n.options) ? i.options = [] : i.options = n.options, i.value = t && !e.isNEU(t[n.binding]) ? t[n.binding] : "", r && i.options) {
		for (var a = 0; a < i.options.length; a++) if (i.options[a].value == i.value) {
			i.value = i.options[a].text;
			break;
		}
	}
	if (i.id = e.elements.generateId(), i.disabledAttribute = r ? "data-boc-input-disabled" : "", i.readOnlyAttribute = r ? "readonly" : "", i.id = i.id, r && e.isNEU(i.value) && (i.doNotRender = !0), r && n.binding == "photo" && (i.id = null, i.doNotRender = !0), i.binding = n.binding, i.label = n.label, i.vlidators = "", n.vlidators) for (var o in n.vlidators) i.vlidators += `data-v-${o}="${n.vlidators[o]}" `;
	return i;
}, e.elements.ids = [], e.elements.generateId = function() {
	for (;;) {
		var t = "_" + ("0000" + (Math.random() * 36 ** 4 | 0).toString(36)).slice(-4);
		if (!e.elements.ids.has(t)) return e.elements.ids.push(t), t;
	}
}, e.input = {}, e.input._timeout = null, e.input.initWithTimeout = function() {
	e.input._timeout && (clearTimeout(e.input._timeout), e.input._timeout = null), e.input._timeout = setTimeout(e.input.init, 200);
}, e.input.init = function(t) {
	for (var n = t ? t.querySelectorAll("[data-boc-input]") : document.querySelectorAll("[data-boc-input]"), r = 0; r < n.length; r++) {
		var i = n[r], a = null;
		i.type && i.type.toLowerCase() == "hidden" && (a = i), a ||= i.querySelector("input"), a ||= i.querySelector("select");
		var o = i.querySelector("label");
		o && (a.value || a.type == "select-one" && a.selectedOptions && a.selectedOptions.length && a.selectedOptions[0].value == "" && a.selectedOptions[0].innerHTML) && o.classList.add("hasval"), a.type.toLowerCase() != "checkbox" && a.addEventListener("focus", function() {
			this.classList.remove("boc-validation-error");
			var e = this.parentNode.querySelector("label");
			e.classList.add("focused");
			var t = e.querySelector(".boc-validation-error-message");
			t && t.parentNode.removeChild(t);
		}), a.type.toLowerCase() != "checkbox" && a.addEventListener("blur", function() {
			e.input.blurHandler(this);
		});
	}
}, e.input.blurHandler = function(e) {
	var t = e.parentNode.querySelector("label");
	t.classList.remove("focused"), e.value || e.type == "date" ? t.classList.add("hasval") : t.classList.remove("hasval");
}, e.input.validate = function(t) {
	var n = null;
	t.type && t.type.toLowerCase() == "hidden" && (n = t), n ||= t.querySelector("input"), n ||= t.querySelector("select");
	var r = t.querySelector("label");
	if (n.classList.remove("boc-validation-error"), r) {
		var i = r.querySelector(".boc-validation-error-message");
		i && i.parentNode.removeChild(i);
	}
	!n.selectedOptions && n.value && (n.value = n.value.trim());
	var a = t.getAttribute("data-v-required"), o = t.getAttribute("data-v-password"), s = t.getAttribute("data-v-email"), c = t.getAttribute("data-v-emails");
	return a && n.value == "" ? (r.innerHTML += "<span class=\"boc-validation-error-message\">&nbsp;" + a + "</span>", n.classList.add("boc-validation-error"), !1) : o && !e.input.validatePassword(n.value) ? (r.innerHTML += "<span class=\"boc-validation-error-message\">&nbsp;" + o + "</span>", n.classList.add("boc-validation-error"), !1) : s && !e.input.isValidEmail(n.value) ? (r.innerHTML += "<span class=\"boc-validation-error-message\">&nbsp;" + s + "</span>", n.classList.add("boc-validation-error"), !1) : c && !e.input.isValidEmails(n.value) ? (r.innerHTML += "<span class=\"boc-validation-error-message\">&nbsp;" + c + "</span>", n.classList.add("boc-validation-error"), !1) : !0;
}, e.input.validateAndGetData = function(t) {
	for (var n = t.querySelectorAll("[data-boc-input]"), r = !0, i = 0; i < n.length; i++) {
		var a = n[i];
		e.input.validate(a) || (r = !1);
	}
	return r ? e.input.getData(t) : !1;
}, e.input.getData = function(e) {
	for (var t = e.querySelectorAll("[data-binding]"), n = {}, r = 0; r < t.length; r++) {
		var i = t[r], a = i.getAttribute("data-binding");
		if (i.type.toLowerCase() == "checkbox") n[a] = i.checked;
		else if (i.selectedOptions && i.hasAttribute("multiple")) {
			var o = i.selectedOptions;
			n[a] = Array.from(o).map(({ value: e }) => e);
		} else n[a] = i.value;
	}
	return n;
}, e.input.validatePassword = function(e) {
	return e &&= e.trim(), e.length < 5 || e.length > 18 ? !1 : e.indexOf(" ") == -1;
}, e.input.isValidEmails = function(t) {
	if (t) for (var n = t.split(","), r = 0; r < n.length; r++) {
		var i = n[r].trim();
		if (!e.input.isValidEmail(i)) return !1;
	}
	return !0;
}, e.input.isValidEmail = function(e) {
	return e &&= e.trim(), /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase());
}, e.ui.css = function() {
	return "<style data-boc-styles>.boc-ai-form{height:100%;width:100%;box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0;display:flex;flex-direction:column;height:100%;width:400px}.boc-dark .boc-ai-form{color:#aeaeae}.boc-light .boc-ai-form{color:#757575}.boc-ai-messages{font-size:16px}@media screen and (max-width:500px){.boc-ai-form{width:100%}}.boc-dark .boc-ai-form{background-color:#252526}.boc-light .boc-ai-form{background-color:#fff}.boc-ai-button{font-size:32px;position:absolute;top:20px;left:20px;cursor:pointer;padding:12px;border-radius:50%;user-select:none}.boc-dark .boc-ai-button{color:#aeaeae}.boc-light .boc-ai-button{color:#757575}.boc-ai-button:hover{color:#fff;background-color:#039be5}.boc-ai-container{padding:0 14px;display:grid;grid-template-rows:40px auto 80px;gap:10px;height:100%}.boc-ai-container .boc-input input{padding-right:50px}.boc-ai-close{text-align:end;margin-top:20px}.boc-ai-close svg{cursor:pointer}.boc-ai-start{text-align:center;display:flex;justify-content:center;align-items:center;user-select:none}.boc-ai-start span{font-weight:700;font-size:32px;font:\"Segoe UI\",Arial,sans-serif;background:linear-gradient(90deg,#039be5 28%,#f57c00,#ffca28);color:transparent!important;background-clip:text;display:inline-block;padding:10px 0}.boc-ai-send.boc-ai-send-cansend{cursor:pointer;background-color:#039be5}.boc-ai-send.boc-ai-send-cansend:hover{background-color:#f57c00}.boc-ai-send.boc-ai-send-cansend:active{background-color:#ffca28}.boc-ai-send{background-color:transparent;position:absolute;right:7px;top:7px;width:38px;height:38px;border-radius:50%;text-align:center;background-repeat:no-repeat;background-position:center;background-size:20px 20px}.boc-ai-send svg{display:block;margin:auto;height:100%}.boc-ai-user-message{text-align:end;margin:14px 0}.boc-inner-user-message{padding:7px;border-radius:7px;display:inline-block}.boc-ai-middle{overflow-y:auto}.boc-ai-middle::-webkit-scrollbar{display:none}.boc-button{background-color:#039be5;cursor:pointer;width:calc(100%);height:50px;color:#fff;padding-top:5px;padding-left:7px;padding-right:7px;text-align:center;text-transform:uppercase;border:1px solid #3fc0ff;display:inline-block;border-radius:5px}.boc-button.orange{background-color:#f57c00;border:1px solid #ffa03e}.boc-button.yellow{background-color:#ffca28;border:1px solid #ffdf7c}.boc-button.lower{text-transform:unset}.boc-button.transparent{background-color:transparent}.boc-button:hover{background-color:#35afea}.boc-button.orange:hover{background-color:#f79632}.boc-button.yellow:hover{background-color:#ffd452}.boc-button:active{transform:matrix(.98,0,0,.98,0,0)}.boc-button-icon{text-align:initial;cursor:pointer;margin-bottom:15px;color:#039be5}.boc-dark .boc-button-icon:hover{background-color:#2d2d2d}.boc-light .boc-button-icon:hover{background-color:#ececec}.boc-button-icon>img{height:24px;width:24px;vertical-align:middle;padding:7px}.boc-button:focus{outline:0}.boc-button-icon>img{filter:invert(46%) sepia(66%) saturate(2530%) hue-rotate(171deg) brightness(95%) contrast(98%)}.boc-light .boc-button.transparent{color:#039be5}.boc-light .boc-button.transparent:hover{color:#fff}.boc-button-loading{background-color:transparent;cursor:pointer;width:calc(100% - 2px);height:50px;color:#fff;text-align:center;text-transform:uppercase;border:1px solid #027cb7;display:inline-block;display:flex;justify-content:center;align-items:center;display:none}.boc-button-loading .boc-loading-dots div{margin:0 10px}.boc-link-boc-button{position:absolute;right:10px;top:-1px}@media screen and (max-width:1000px){.boc-link-boc-button{right:50px}}[data-boc-input-disabled] .boc-link-boc-button{display:none}[dir=rtl] .boc-link-boc-button{left:10px;right:unset}.boc-img-button{width:48px;height:48px;cursor:pointer;border-radius:50%;background-color:#039be5;background-repeat:no-repeat;background-size:24px 24px;background-position:center center;margin:3px;display:inline-block}.boc-img-button:hover{background-color:#f57c00}.boc-checkbox{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.boc-checkbox input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.boc-checkbox-checkmark{position:absolute;top:0;left:0;height:25px;width:25px;border-radius:5px}.boc-dark [data-boc-input-disabled] .boc-checkbox-checkmark,.boc-dark [data-boc-input-disabled].boc-checkbox input:checked~.boc-checkbox-checkmark,.boc-light [data-boc-input-disabled] .boc-checkbox-checkmark,.boc-light [data-boc-input-disabled].boc-checkbox input:checked~.boc-checkbox-checkmark{background-color:#aeaeae!important}[data-boc-input-disabled].boc-checkbox{cursor:default}[dir=rtl] .boc-checkbox-checkmark{right:0}[dir=rtl] .boc-checkbox{padding-left:unset;padding-right:35px}.boc-dark .boc-checkbox-checkmark{background-color:#333;border:1px solid #5b5b5b}.boc-light .boc-checkbox-checkmark{background-color:#fff;border:1px solid #c7c7c7}.boc-dark .boc-checkbox:hover input~.boc-checkbox-checkmark{background-color:#3c3c3c}.boc-light .boc-checkbox:hover input~.boc-checkbox-checkmark{background-color:#f8f9f9}.boc-dark .boc-checkbox input:checked~.boc-checkbox-checkmark{background-color:#039be5}.boc-light .boc-checkbox input:checked~.boc-checkbox-checkmark{background-color:#039be5}.boc-checkbox-checkmark:after{content:\"\";position:absolute;display:none}.boc-checkbox input:checked~.boc-checkbox-checkmark:after{display:block}.boc-checkbox .boc-checkbox-checkmark:after{left:9px;top:5px;width:5px;height:10px;border:solid #fff;border-width:0 3px 3px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.boc-controls{display:flex;gap:7px;position:absolute}.boc-controls-top{left:unset;top:15px;right:50%;bottom:unset;transform:translateX(50%);flex-direction:row}.boc-controls-bottom{left:unset;top:unset;right:50%;bottom:15px;transform:translateX(50%);flex-direction:row}.boc-controls-left{left:15px;top:50%;right:unset;bottom:unset;transform:translateY(-50%);flex-direction:column}.boc-controls-right{left:unset;top:50%;right:15px;bottom:unset;transform:translateY(-50%);flex-direction:column}.boc-controls-bottom_right,.boc-controls-right_bottom{left:unset;top:unset;right:15px;bottom:15px;flex-direction:row}.boc-controls-right_bottom{flex-direction:column}.boc-controls-right_top,.boc-controls-top_right{left:unset;top:15px;right:15px;bottom:unset;flex-direction:row}.boc-controls-right_top{flex-direction:column}.boc-controls-bottom_left,.boc-controls-left_bottom{left:15px;top:unset;right:unset;bottom:15px;flex-direction:row}.boc-controls-left_bottom{flex-direction:column}.boc-controls-left_top,.boc-controls-top_left{left:15px;top:15px;right:unset;bottom:unset;flex-direction:row}.boc-controls-left_top{flex-direction:column}.boc-controls [data-control-id] svg{display:block;margin:0 auto}.boc-controls [data-control-id]{display:flex;align-items:center;cursor:pointer;width:60px;height:60px;border-radius:30px;box-shadow:0 4px 30px rgba(0,0,0,.1);backdrop-filter:blur(5px);-webkit-backdrop-filter:blur(5px)}.boc-light .boc-controls [data-control-id]{background:rgba(255,255,255,.2);border:1px solid #c7c7c7}.boc-dark .boc-controls [data-control-id]{background:rgba(30,30,30,.2);border:1px solid #5b5b5b}.boc-controls [data-control-id]:hover{background-color:#0074e8}.boc-controls [data-control-id]:hover svg{filter:brightness(0) invert(1)}.boc-controls [data-control-id].boc-control-selected{background-color:#0074e8}.boc-controls [data-control-id].boc-control-selected svg{filter:brightness(0) invert(1)}.boc-filter{user-select:none}.boc-light .boc-filter{color:#757575}.boc-dark .boc-filter{color:#ccc}.boc-filter>div>div{display:inline-block;padding:3px 10px;cursor:pointer}.boc-filter-menu fieldset,.boc-filter>div,.filter-field-selected{border-radius:5px}.boc-filter-menu fieldset{overflow-y:auto;max-height:300px}.boc-filter>div.boc-filter-menu{padding:10px}.boc-light .boc-filter>div.boc-filter-menu,.boc-light .filter-field-selected{background-color:#f8f9f9}.boc-dark .boc-filter>div.boc-filter-menu,.boc-dark .filter-field-selected{background-color:#3c3c3c}.boc-light .boc-filter>div{background-color:#eee}.boc-dark .boc-filter>div{background-color:#333}.boc-form-perspective{transform-style:preserve-3d;perspective:500px;position:absolute;top:32px}.boc-form{box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0;padding:14px;transform-origin:top center;user-select:none;display:none;position:relative;max-height:calc(100vh - 100px);overflow-y:auto;border-bottom-left-radius:5px;border-bottom-right-radius:5px}.boc-form-bottom{border-bottom-left-radius:unset;border-bottom-right-radius:unset;border-top-left-radius:5px;border-top-right-radius:5px}.boc-form .separator{margin:0 10px}@media screen and (max-width:1000px){.boc-form-perspective{min-width:100%;max-height:calc(100% - 32px);left:unset!important;right:unset!important;transform:none!important}.boc-form .set{max-height:calc(100vh - 74px)}.boc-form-fieldset{max-width:unset!important}}.boc-light .boc-form .separator{border-bottom:1px solid #c7c7c7}.boc-dark .boc-form .separator{border-bottom:1px solid #5b5b5b}.boc-light .boc-form{background-color:#fff}.boc-dark .boc-form{background-color:#252526}.boc-item{padding:6px 12px 6px 12px;display:flex;flex-direction:row}.boc-light .boc-form .boc-item.selected,.boc-light .boc-form .boc-item:hover{background-color:#0074e8;color:#fff}.boc-dark .boc-form .boc-item.selected,.boc-dark .boc-form .boc-item:hover{background-color:#094771;color:#fff}.boc-item.selected img,.boc-item:hover img{filter:invert(100%)}.boc-item.selected img{visibility:visible!important}.boc-form-fieldset{display:flex;flex-wrap:wrap;margin:0!important}.boc-form-field{flex:1 0 21%;margin:3px;min-width:200px}.boc-form-field-100{flex:1 0 96%;margin:3px;min-width:200px}.boc-input{position:relative}.boc-input>input,.boc-input>select{height:50px;padding:18px 10px 2px 9px;width:100%;box-sizing:border-box;border-style:solid;border-width:1px}.boc-input select{height:50px;padding:20px 5px 4px 5px}[data-boc-input-disabled].boc-input>input,[data-boc-input-disabled].boc-input>select{border-color:transparent!important}.boc-light [data-boc-input-disabled]>input,.boc-light [data-boc-input-disabled]>select{background-color:#fff!important}.boc-dark [data-boc-input-disabled]>input,.boc-dark [data-boc-input-disabled]>select{background-color:#252526!important}[data-boc-input-disabled]>select{appearance:none;padding-left:8px}.boc-input>label{display:inline-block;position:absolute;padding-left:10px;padding-right:10px;color:#acacac;cursor:text;-webkit-transition:all .1s ease-out;-moz-transition:all .1s ease-out;-ms-transition:all .1s ease-out;-o-transition:all .1s ease-out;transition:all .1 ease-out;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:initial;text-align:initial;white-space:nowrap}.boc-input>label{top:12px;overflow:hidden;text-overflow:ellipsis;max-width:calc(100% - 14px)}.boc-input>label.focused,.boc-input>label.hasval{top:-1px}.boc-input>input,.boc-input>select{outline:0;border-radius:5px}.boc-dark .boc-input>label.focused,.boc-light .boc-input>label.focused{color:#039be5}.boc-dark .boc-input>input,.boc-dark .boc-input>select{color:#ccc;background-color:#333;border-color:#5b5b5b}.boc-light .boc-input>input,.boc-light .boc-input>select{color:#757575;background-color:#fff;border-color:#c7c7c7}.boc-light .boc-input>input:focus,.boc-light .boc-input>select:focus{border-color:#039be5;background-color:#f8f9f9}.boc-dark .boc-input>input:focus,.boc-dark .boc-input>select:focus{border-color:#039be5;background-color:#3c3c3c}.boc-dark .boc-input>input.boc-validation-error,.boc-dark .boc-input>select.boc-validation-error,.boc-light .boc-input>input.boc-validation-error,.boc-light .boc-input>select.boc-validation-error{border-color:#ca2a2a}.boc-dark .boc-validation-error-message,.boc-light .boc-validation-error-message{color:#ca2a2a}.boc-input select.multiple{height:initial}.boc-link{color:#039be5;cursor:pointer;text-decoration:underline}.boc-link:hover{color:#f57c00}.boc-dark ::-webkit-scrollbar,.boc-light ::-webkit-scrollbar{width:15px;height:15px}.boc-dark ::-webkit-scrollbar-corner{background:#1e1e1e}.boc-dark ::-webkit-scrollbar-track{background:#1e1e1e;border-left:1px solid #333;border-top:1px solid #333}.boc-dark ::-webkit-scrollbar-thumb{background:#424242}.boc-dark ::-webkit-scrollbar-thumb:hover{background:#4f4f4f}.boc-dark ::-webkit-scrollbar-thumb:active{background:#5e5e5e}.boc-light ::-webkit-scrollbar-corner{background:#fff}.boc-light ::-webkit-scrollbar-track{background:#fff;border-left:1px solid #ddd;border-top:1px solid #ddd}.boc-light ::-webkit-scrollbar-thumb{background:#c1c1c1}.boc-light ::-webkit-scrollbar-thumb:hover{background:#929292}.boc-light ::-webkit-scrollbar-thumb:active{background:#666}.boc-edit-form{position:fixed;top:0;right:0;height:100%;width:100%;box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0;display:flex;flex-direction:column;height:100%;width:400px}@media screen and (max-width:1000px){.boc-edit-form{width:100%}}.boc-dark .boc-edit-form{background-color:#252526}.boc-light .boc-edit-form{background-color:#fff}.boc-edit-form-header{height:200px;text-align:center;border-radius:10px}.export-service .boc-edit-form-header{border-radius:unset}.boc-edit-form-title{color:#fff;margin:0;padding:14px 17px 7px 17px}.boc-edit-form-avatar{border-radius:50%;width:150px;height:150px;position:absolute;top:75px;border:5px solid #fff;left:50%;transform:translateX(-50%);background-color:#cacaca;box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0}.boc-edit-form-close{position:absolute;right:14px;top:14px;width:34px;height:34px;cursor:pointer}.boc-edit-form-fields{flex-grow:1;overflow-y:auto;overflow-x:hidden}.boc-edit-form-fields-inner{margin:0 7px 20px 7px}.boc-ai-user-message{text-align:end;margin:14px 0}.boc-inner-user-message{padding:7px;border-radius:7px;display:inline-block}.dark .boc-inner-user-message{background-color:#333}.light .boc-inner-user-message{background-color:#f9f9f9}.boc-export-form{box-shadow:rgba(0,0,0,.2) 0 -6px 6px 0,rgba(0,0,0,.19) 0 -13px 20px 0;display:flex;flex-direction:column;height:100%;width:400px}.boc-dark .boc-export-form{color:#aeaeae;background-color:#252526}.boc-light .boc-export-form{color:#757575;background-color:#eee}@media screen and (max-width:500px){.boc-export-form{width:100%}}.boc-export-container{display:grid;grid-template-rows:40px auto;gap:10px;height:100%}.boc-export-page{width:100%;border:1px solid #aeaeae;display:flex;justify-content:center;align-items:center;user-select:none;position:relative}.boc-export-selected{border:1px solid #ffca28}.boc-export-middle{overflow-y:auto;overflow-x:hidden;padding:0 3px 0 0;margin-bottom:10px}.boc-export-btns-inner{padding-top:14px;display:flex;justify-content:space-between}.boc-export-left{justify-content:flex-start}.boc-export-right{justify-content:flex-end}.boc-export-left,.boc-export-right{user-select:none}.boc-export-select{position:absolute;top:0;left:0;text-align:center;width:100%}.boc-export-child-buttons{position:absolute;bottom:7px;left:7px;display:none}.boc-export-page:hover .boc-export-child-buttons{display:initial}.boc-export-parent-buttons{position:absolute;top:7px;left:7px;display:none}.boc-export-page:hover .boc-export-parent-buttons{display:initial}.boc-export-remove-buttons{position:absolute;bottom:7px;right:7px;display:none}.boc-export-page:hover .boc-export-remove-buttons{display:initial}.boc-export-child-buttons button,.boc-export-parent-buttons button{width:23px}.boc-export-profiletree-buttons{position:absolute;top:7px;right:7px;display:none}.boc-export-page:hover .boc-export-profiletree-buttons{display:initial}.boc-export-middle-inner{display:grid;gap:10px;margin:0 10px}.boc-export-btns-inner{margin:0 10px}.boc-chart-menu{opacity:0;display:inline-block;position:absolute;text-align:left;user-select:none;min-width:270px;box-shadow:rgba(0,0,0,.2) 0 4px 8px 0,rgba(0,0,0,.19) 0 6px 20px 0;font:13px/28px Helvetica,\"Segoe UI\",Arial,sans-serif;border-radius:10px}.boc-chart-menu>div:hover img{filter:invert(100%)}.boc-chart-menu [data-item]{text-align:start;padding:7px 10px}.boc-dark .boc-chart-menu [data-item]{background-color:#252526;color:#acacac;border-bottom:1px solid #333}.boc-dark .boc-chart-menu [data-item]:hover{background-color:#094771!important;color:#fff!important}.boc-dark .boc-chart-menu [data-item]:hover svg{filter:brightness(0) invert(1)}.boc-light .boc-chart-menu [data-item]{background-color:#fff;color:#333;border-bottom:1px solid #c7c7c7}.boc-light .boc-chart-menu [data-item]:hover{background-color:#0074e8!important;color:#fff!important}.boc-light .boc-chart-menu [data-item]:hover svg{filter:brightness(0) invert(1)}.boc-chart-menu [data-item] svg{vertical-align:middle}.boc-chart-menu [data-item]:first-child{border-top-left-radius:7px;border-top-right-radius:7px}.boc-chart-menu [data-item]:last-child{border-bottom-width:0;border-bottom-style:none;border-bottom-left-radius:7px;border-bottom-right-radius:7px}.boc-orgscribe-form{height:100%;width:100%;box-shadow:rgba(0,0,0,.2) 0 6px 6px 0,rgba(0,0,0,.19) 0 13px 20px 0;display:flex;flex-direction:column;height:100%;width:400px}@media screen and (max-width:500px){.boc-orgscribe-form{width:100%}}.boc-dark .boc-orgscribe-form{background-color:#252526}.boc-light .boc-orgscribe-form{background-color:#fff}.boc-orgscribe-container{padding:0 14px;display:grid;grid-template-rows:40px auto 10px;gap:10px;height:100%}.boc-orgscribe-container .boc-input input{padding-right:50px}.boc-orgscribe-close{text-align:end;margin-top:20px}.boc-orgscribe-close svg{cursor:pointer}.boc-orgscribe-txt{width:100%;height:100%;box-sizing:border-box;border-style:solid;border-width:1px;outline:0;border-radius:5px;font-size:24px}.boc-dark .boc-orgscribe-txt{color:#ccc;background-color:#333;border-color:#5b5b5b}.boc-light .boc-orgscribe-txt{color:#757575;background-color:#fff;border-color:#c7c7c7}.boc-search{position:absolute}@media screen and (max-width:500px){.boc-search{width:calc(100% - 30px);left:15px}}.boc-search .boc-input{margin-bottom:0}.boc-search-input{color:#7a7a7a;width:100%;border:none;outline:0;padding-top:10px;padding-right:47px}.boc-search-image-td{width:43px}.boc-search-text-td{padding-inline-end:7px;line-height:15px;text-align:start}.boc-search table{box-shadow:rgba(0,0,0,.2) 0 4px 8px 0,rgba(0,0,0,.19) 0 6px 20px 0;margin:0 3.5px 0 3.5px;width:calc(100% - 7px);border-radius:7px}.boc-search table tr:first-child td:first-child{border-top-left-radius:7px}.boc-search table tr:first-child td:last-child{border-top-right-radius:7px}[dir=rtl] .boc-search table tr:first-child td:first-child{border-top-left-radius:unset;border-top-right-radius:7px}[dir=rtl] .boc-search table tr:first-child td:last-child{border-top-right-radius:unset;border-top-left-radius:7px}.boc-search table tr:last-child td:first-child{border-bottom-left-radius:7px}.boc-search table tr:last-child td:last-child{border-bottom-right-radius:7px}[dir=rtl] .boc-search table tr:last-child td:first-child{border-bottom-left-radius:unset;border-bottom-right-radius:7px}[dir=rtl] .boc-search table tr:last-child td:last-child{border-bottom-right-radius:unset;border-bottom-left-radius:7px}.boc-dark .boc-search table{background-color:#252526;color:#acacac}.boc-search [data-search-item-id]{cursor:pointer}.boc-search-photo{margin:7px 7px 0 7px;width:32px;height:32px;background-size:cover;background-position:top center;border-radius:50%;display:inline-block;border:1px solid #8c8c8c}.boc-search [data-search-item-id]:hover .boc-link{color:#ffca28}.boc-search [data-search-item-id]:hover .boc-link:hover{color:#f57c00}.boc-dark .boc-search [data-search-item-id] td{border-top:1px solid #333}.boc-dark .boc-search [data-search-item-id]:hover,.boc-dark .boc-search [data-selected=yes]{background-color:#094771;color:#fff}.boc-light .boc-search table{background-color:#fff;color:#333}.boc-light .boc-search [data-search-item-id] td{border-top:1px solid #c7c7c7}.boc-light .boc-search [data-search-item-id]:hover,.boc-light .boc-search [data-selected=yes]{background-color:#0074e8;color:#fff}.boc-search [data-search-item-id]:first-child td{border-top:unset}.boc-ripple-container{position:absolute;top:0;right:0;bottom:0;left:0}.boc-drag-over rect{opacity:.5}.boc-ripple-container span{transform:scale(0);border-radius:100%;position:absolute;opacity:.75;background-color:#fff;animation:boc-ripple 1s}@-moz-keyframes boc-ripple{to{opacity:0;transform:scale(2)}}@-webkit-keyframes boc-ripple{to{opacity:0;transform:scale(2)}}@-o-keyframes boc-ripple{to{opacity:0;transform:scale(2)}}@keyframes boc-ripple{to{opacity:0;transform:scale(2)}}.boc-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.boc-slider:before{position:absolute;content:\"\";height:16px;width:16px;left:4px;bottom:4px;background-color:#fff;-webkit-transition:.4s;transition:.4s}.boc-slider.round{border-radius:24px}.boc-slider.round:before{border-radius:50%}svg text:hover{cursor:default}svg.boc-cursor-grab,svg.boc-cursor-grab text:hover{cursor:grab}svg.boc-cursor-nodrop,svg.boc-cursor-nodrop text:hover{cursor:no-drop}svg.boc-cursor-copy,svg.boc-cursor-copy text:hover{cursor:copy}svg.boc-cursor-move,svg.boc-cursor-move text:hover{cursor:move}#boc-close-btn:focus,#boc-close-btn:hover{color:#000;text-decoration:none;cursor:pointer}#boc-id-select:focus{outline:.5px solid #aeaeae}#boc-sampleDialog #title:hover{cursor:default;background:gray}.boc-light{background-color:#fff;font:13px/28px Helvetica,\"Segoe UI\",Arial,sans-serif}.boc-dark{background-color:#1e1e1e;font:13px/28px Helvetica,\"Segoe UI\",Arial,sans-serif}.boc-dark input,.boc-dark select,.boc-light input,.boc-light select{font:16px Helvetica,\"Segoe UI\",Arial,sans-serif}.boc-dark h1,.boc-light h1{font-size:30px;line-height:1}.boc-light [data-boc-content]::backdrop{background-color:#fff}.boc-dark [data-boc-content]::backdrop{background-color:#1e1e1e}.boc-dark text,.boc-light text{user-select:none}.boc-edit-form{position:absolute;border-radius:10px}.export-service .boc-edit-form{border-radius:unset}.boc-dark .boc-edit-form{color:#acacac}.boc-light .boc-edit-form{color:#333}.boc-dark ::-webkit-calendar-picker-indicator{filter:invert(70%)}.boc-light ::-webkit-calendar-picker-indicator{filter:invert(50%)}.boc-edit-form-instruments{margin:42px 10px 0 10px;text-align:center;min-height:70px}.boc-img-button svg{position:relative;top:12px}.boc-light .boc-toolbar-container svg circle,.boc-light .boc-toolbar-container svg line,.boc-light .boc-toolbar-container svg path{stroke:#8c8c8c!important}.boc-dark .boc-toolbar-container svg circle,.boc-dark .boc-toolbar-container svg line,.boc-dark .boc-toolbar-container svg path{stroke:#8c8c8c!important}.boc-dark .boc-toolbar-container svg rect{fill:#252526!important}.boc-dark .boc-toolbar-container [data-tlbr=minus] svg{border-left:1px solid #5b5b5b!important;border-right:1px solid #5b5b5b!important;border-bottom:1px solid #5b5b5b!important}.boc-dark .boc-toolbar-container [data-tlbr=plus] svg{border-left:1px solid #5b5b5b!important;border-right:1px solid #5b5b5b!important;border-top:1px solid #5b5b5b!important}.boc-dark .boc-toolbar-container [data-tlbr]>svg{border:1px solid #5b5b5b!important;background-color:#252526!important}.boc-toolbar-layout{height:123px;padding-top:20px;position:absolute;width:100%;left:\"0\";bottom:\"-145px\"}.boc-light .boc-toolbar-layout{border-top:1px solid #c7c7c7;background-color:#f9f9f9}.boc-dark .boc-toolbar-layout{border-top:1px solid #5b5b5b;background-color:#2b2b2b}.boc-dotted-connector path{stroke-dasharray:7}.boc-undo-redo{position:absolute;top:23px;left:23px}@media screen and (max-width:500px){.boc-undo-redo{position:absolute;top:83px;left:23px}}.boc-light .boc-undo-redo path{fill:#cacaca}.boc-dark .boc-undo-redo path{fill:#5b5b5b}.boc-light .boc-undo-redo .boc-ur-clickable path{fill:#9c9c9c}.boc-dark .boc-undo-redo .boc-ur-clickable path{fill:#8c8c8c}.boc-undo-redo .boc-ur-clickable rect{cursor:pointer}.boc-undo-redo>span{position:relative;display:inline-block;user-select:none}.boc-undo-redo .boc-undo-i{left:-6px;top:-6px}.boc-undo-redo .boc-redo-i{right:-6px;bottom:6px}.boc-undo-redo>span>span{color:#fff;position:absolute;display:inline-block;min-width:20px;min-height:20px;border-radius:50%;line-height:20px;text-align:center;padding:1px;user-select:none;cursor:pointer}.boc-light .boc-undo-redo>span>span{background-color:#9c9c9c}.boc-dark .boc-undo-redo>span>span{background-color:#8c8c8c}.boc-dark .treelist-pinned{filter:brightness(1.2)}.boc-light .treelist-pinned{filter:brightness(.9)}.boc-light .boc-scroll{fill:#fff}.boc-light .boc-scroll-thumb{fill:#c1c1c1}.boc-light .boc-scroll-thumb:hover{fill:#929292}.boc-dark .boc-scroll{fill:#1e1e1e}.boc-dark .boc-scroll-thumb{fill:#424242}.boc-dark .boc-scroll-thumb:hover{fill:#4f4f4f}</style>";
}, e === void 0 && (e = {}), e.prototype.onField = function(e) {
	return this.on("field", function(t, n) {
		return e.call(t, n);
	});
}, e.prototype.onInit = function(e) {
	return this.on("init", function(t) {
		return e.call(t);
	});
}, e.prototype.onRedraw = function(e) {
	return this.on("redraw", function(t) {
		return e.call(t);
	});
}, e.prototype.onUpdateNode = function(e) {
	return this.on("update", function(t, n, r) {
		var i = {
			oldData: n,
			newData: r
		};
		return e.call(t, i);
	});
}, e.prototype.onUpdated = function(e) {
	return this.on("updated", function(t) {
		return e.call(t);
	});
}, e.prototype.onRemoveNode = function(e) {
	return this.on("remove", function(t, n, r) {
		var i = {
			id: n,
			newPidsAndStpidsForIds: r
		};
		return e.call(t, i);
	});
}, e.prototype.onAddNode = function(e) {
	return this.on("add", function(t, n) {
		var r = { data: n };
		return e.call(t, r);
	});
}, e.prototype.onDrop = function(e) {
	return this.on("drop", function(t, n, r, i, a) {
		var o = {
			dragId: n,
			dropId: r,
			dragNodeElement: i,
			event: a
		};
		return e.call(t, o);
	});
}, e.prototype.onDrag = function(e) {
	return this.on("drag", function(t, n, r, i) {
		var a = {
			dragId: n,
			event: r,
			nodeIds: i
		};
		return e.call(t, a);
	});
}, e.prototype.onExpandCollapseButtonClick = e.prototype.onExpandCollpaseButtonClick = function(e) {
	return this.on("expcollclick", function(t, n, r, i) {
		var a = {
			collapsing: n,
			id: r,
			ids: i
		};
		return e.call(t, a);
	});
}, e.prototype.onExportStart = function(e) {
	return this.on("exportstart", function(t, n) {
		return e.call(t, n);
	});
}, e.prototype.onExportEnd = function(e) {
	return this.on("exportend", function(t, n) {
		return e.call(t, n);
	});
}, e.prototype.onNodeClick = function(e) {
	return this.on("click", function(t, n) {
		return e.call(t, n);
	});
}, e.prototype.onCanvasClick = function(e) {
	return this.on("canvas-click", function(t, n) {
		return e.call(t, n);
	});
}, e.prototype.onNodeDoubleClick = function(e) {
	return this.on("dbclick", function(t, n) {
		var r = { data: n };
		return e.call(t, r);
	});
}, e.prototype.onAIToolCalls = function(e) {
	return this.on("ai-tool-calls", function(t, n) {
		return e.call(t, n);
	});
}, e.filterUI = function() {}, e.filterUI.prototype.init = function(t) {
	this.instance = t, this.element = null, this.filterBy = null, this._event_id = e._guid();
}, e.filterUI.prototype.addFilterTag = function(t) {
	if (!this.instance.config.filterBy || e.isNEU(t)) return !1;
	if (this.filterBy === null && typeof this.instance.config.filterBy == "object" && !Array.isArray(this.instance.config.filterBy) && (this.filterBy = JSON.parse(JSON.stringify(this.instance.config.filterBy))), this.filterBy != null) for (var n in this.filterBy) {
		var r = t[n];
		if (r != null) {
			var i = this.filterBy[n];
			if (i != null) {
				var a = i[r];
				if (a != null && a.checked === !1) return !0;
			}
		}
	}
	return !1;
}, e.filterUI.prototype.show = function(e) {
	var t = this.element.querySelector("[data-filter-field=\"" + e + "\"]");
	t && t.click();
}, e.filterUI.prototype.hide = function() {
	var e = this.instance.element.querySelector("[data-filter-close]");
	e && e.click();
}, e.filterUI.prototype._removeFilter = function(e) {
	var t = this.instance.get(e);
	for (var n in this.filterBy) {
		var r = this.filterBy[n];
		for (var i in t) {
			var a = t[i];
			r[a] && (r[a].checked = !0);
		}
	}
	this.update();
}, e.filterUI.prototype.update = function() {
	if (this.instance.config.filterBy) {
		var t = {};
		if (this.instance.config.filterBy == "all") for (var n = e.manager.getAllFields(this.instance.config), r = 0; r < n.length; r++) {
			var i = n[r];
			i != "tags" && i != "id" && i != "pid" && i != "ppid" && i != "stpid" && (t[i] = {});
		}
		else if (Array.isArray(this.instance.config.filterBy)) for (var r = 0; r < this.instance.config.filterBy.length; r++) t[this.instance.config.filterBy[r]] = {};
		else if (typeof this.instance.config.filterBy == "object") for (var a in this.instance.config.filterBy) t[a] = {};
		for (var o in t) for (var s = t[o], r = 0; r < this.instance.config.nodes.length; r++) {
			var c = this.instance.config.nodes[r][o];
			c != null && (s[c] || (s[c] = {
				checked: !0,
				text: c
			}));
		}
		if (this.filterBy != null) {
			for (var l in t) if (this.filterBy[l]) for (var u in t[l]) this.filterBy[l][u] && (t[l][u] = this.filterBy[l][u]);
		}
		if (e.FILTER_ALPHABETICALLY) {
			var d = Object.keys(t).sort(), f = t;
			t = {};
			for (var r = 0; r < d.length; r++) {
				var p = d[r];
				t[p] = f[p];
			}
			for (var o in t) {
				var s = t[o];
				t[o] = {};
				for (var d = Object.keys(s).sort(), r = 0; r < d.length; r++) {
					var p = d[r];
					t[o][p] = s[p];
				}
			}
		}
		this.filterBy = t;
		var m = this;
		this.element = this.instance.element.querySelector("[data-filter]"), this.element && this.element.parentNode.removeChild(this.element), this.element = document.createElement("div"), this.element.setAttribute("data-filter", ""), this.element.style.position = "absolute", this.element.setAttribute("class", "boc-filter"), this.instance.config.undoRedoStorageName ? (this.element.style.top = 0, this.element.style.left = "50%", this.element.style.transform = "translate(-50%)") : (this.element.style.top = this.instance.config.padding + "px", this.element.style.left = this.instance.config.padding + "px");
		var h = "";
		for (var l in this.filterBy) {
			var g = {
				name: l,
				html: `<div data-filter-field="${l}">${l}</div>`
			};
			e.events.publish("add-filter", [m, g]), h += g.html;
		}
		this.element.innerHTML = `<div>${h}</div>`, this.element.addEventListener("click", function(t) {
			if (t.target.hasAttribute("data-filter-close") || t.target.hasAttribute("data-filter-field")) {
				for (var n = t.target.getAttribute("data-filter-field"), r = m.instance.element.querySelectorAll("[data-filter-menu]"), i = 0; i < r.length; i++) r[i].style.display = "none";
				for (var a = m.instance.element.querySelectorAll(".filter-field-selected"), i = 0; i < a.length; i++) a[i].classList.remove("filter-field-selected");
				var o = m.instance.element.querySelector("[data-filter-close]");
				if (o && o.parentNode.removeChild(o), t.target.hasAttribute("data-filter-close") || !t.target.hasAttribute("data-filter-field")) return;
				var s = m.instance.element.querySelector(`[data-filter-menu="${n}"]`);
				if (!s) {
					var c = "checked";
					for (var l in m.filterBy[n]) m.filterBy[n][l].checked || (c = "");
					var u = {
						name: n,
						text: e.filterUI.all,
						value: n,
						checked: !0,
						html: `<div>
                        <input data-all type="checkbox" id="${n}" name="${n}" ${c}>
                        <label for="${n}">${e.filterUI.all}</label>
                    </div>`
					};
					e.events.publish("add-item", [m, u]);
					var d = u.html;
					for (var f in m.filterBy[n]) {
						var p = m.filterBy[n][f], h = p.text;
						h ??= f, u = {
							name: n,
							text: h,
							value: f,
							checked: p.checked,
							html: `<div>
                            <input  type="checkbox" id="${n}_${f}" name="${f}" ${p.checked ? "checked" : ""}>
                            <label for="${n}_${f}">${h}</label>
                        </div>`
						}, e.events.publish("add-item", [m, u]), d += u.html;
					}
					s = document.createElement("div");
					var g = e.filterUI.textFilterBy;
					s.innerHTML = `<fieldset>
                                                    <legend>${g} ${n}:</legend>
                                                    ${d}
                                                </fieldset>`, s.setAttribute("data-filter-menu", n), s.classList.add("boc-filter-menu"), t.target.parentNode.parentNode.appendChild(s);
					for (var _ = s.querySelectorAll("input"), i = 0; i < _.length; i++) _[i].addEventListener("change", function(t) {
						for (var n = t.target; n && !n.hasAttribute("data-filter-menu");) n = n.parentNode;
						if (n) {
							var r = n.getAttribute("data-filter-menu");
							if (t.target.hasAttribute("data-all")) {
								for (var i = t.target.parentNode.parentNode.querySelectorAll("input"), a = 0; a < i.length; a++) if (i[a] != t.target) for (var o in i[a].checked = t.target.checked, m.filterBy[r]) m.filterBy[r][o].checked = t.target.checked;
							} else if (m.filterBy[r][this.name] != null && (m.filterBy[r][this.name].checked = this.checked), this.checked) {
								for (var s = m.instance.config.nodes, c = 0; c < s.length; c++) if (s[c][r] == this.name) {
									for (var l = s[c]; l;) if (e.isNEU(l.stpid)) l = e.isNEU(l.pid) ? null : m.instance._get(l.pid);
									else if (l = m.instance._get(l.stpid), l[r]) {
										var u = t.target.parentNode.parentNode.querySelector("[name=\"" + l[r] + "\"]");
										u ? (u.checked = this.checked, m.filterBy[r][l[r]].checked = this.checked) : console.error("Cannot find element with selector: [name=\"" + l[r] + "\"]");
									}
								}
							}
							var d = !0;
							for (var f in m.filterBy[r]) m.filterBy[r][f].checked || (d = !1);
							var p = n.querySelector("[data-all]");
							p.checked = d, m.instance.draw();
						}
					});
				}
				s.style.display = "block", t.target.classList.add("filter-field-selected"), o = document.createElement("div"), o.classList.add("close"), o.innerHTML = "x", o.setAttribute("data-filter-close", ""), t.target.parentNode.appendChild(o), e.events.publish("show-items", [m, { name: n }]);
			}
		}), this.instance.element.appendChild(this.element), e.events.publish("update", [this, {}]);
	}
}, e.filterUI.prototype.on = function(t, n) {
	return e.events.on(t, n, this._event_id), this;
}, e.filterUI.textFilterBy = "Filter by", e.filterUI.all = "[All]", e === void 0 && (e = {}), e.remote === void 0 && (e.remote = {}), e.LIMIT_NODES = !0, e.remote._fromResDTO = function(t, n, r, i, a) {
	var o = n[t.id];
	t.x = o.p[0], t.y = o.p[1], t.w = o.p[2], t.h = o.p[3], o.ln != null && (t.leftNeighbor = a[o.ln]), o.rn != null && (t.rightNeighbor = a[o.rn]), o.tl && (t.treeList = {}, t.treeList.pinnedIds = o.tl[0], t.treeList.scrollTop = o.tl[1], t.treeList.scrollTopMax = o.tl[2], t.treeList.maxHeight = o.tl[3]);
	for (var s = 0; s < t.stChildren.length; s++) e.remote._fromResDTO(t.stChildren[s], n, r, i, a);
	for (var s = 0; s < t.children.length; s++) e.remote._fromResDTO(t.children[s], n, r, i, a);
}, e.remote._toReqDTO = function(t, n) {
	var r = { p: [
		t.id,
		t.parent == null ? null : t.parent.id,
		t.stParent == null ? null : t.stParent.id,
		t.w,
		t.h
	] };
	t.children.length > 0 && (r.c = e.remote._convertToIdArray(t.children)), t.stChildren.length > 0 && (r.v = e.remote._convertToIdArray(t.stChildren)), t.layout != null && t.layout != 0 && (r.l = t.layout), t.isAssistant && (r.a = 1), t.isSplit && (r.s = t.isSplit), t.isMirror && (r.im = t.isMirror), t.padding && (r.q = t.padding), t.lcn && (r.k = t.lcn), t.stContainerNodes && (r.b = e.remote._convertToIdArray(t.stContainerNodes)), t.isPartner && (r.i = t.isPartner), t.hasPartners && (r.g = t.hasPartners), t.partnerSeparation && (r.e = t.partnerSeparation), t.treeList && (r.z = [t.treeList.scrollTop, t.treeList.maxHeight]), n.push(r);
	for (var i = 0; i < t.stChildren.length; i++) e.remote._toReqDTO(t.stChildren[i], n);
	for (var i = 0; i < t.children.length; i++) e.remote._toReqDTO(t.children[i], n);
}, e.remote._toReqLayoutConfigsDTO = function(e) {
	var t = {};
	for (var n in e) {
		var r = e[n];
		t[n] || (t[n] = []), t[n][0] = r.orientation, t[n][1] = r.levelSeparation, t[n][2] = r.mixedHierarchyNodesSeparation, t[n][3] = r.subtreeSeparation, t[n][4] = r.siblingSeparation, t[n][5] = r.layout, t[n][6] = r.columns, t[n][7] = r.collapse, t[n][8] = r.assistantSeparation, t[n][9] = r.partnerNodeSeparation;
	}
	return t;
}, e.remote._convertToIdArray = function(e) {
	for (var t = [], n = 0; n < e.length; n++) t.push(e[n].id);
	return t;
}, e.remote._setPositions = function(t, n, r, i) {
	for (var a = [], o = [], s = e.remote._toReqLayoutConfigsDTO(n), c = 0; c < t.length; c++) o.push(t[c].id), e.remote._toReqDTO(t[c], a);
	var l = {
		n: a,
		c: s,
		r: o,
		v: "9.00.19"
	};
	if (e.LIMIT_NODES || (l.l = !0), e.remote._fromReqDTO != null) e.remote._fromReqDTO(l.n, l.r, l.c, function(n) {
		for (var a = 0; a < t.length; a++) e.remote._fromResDTO(t[a], n, 0, t, i);
		r();
	});
	else {
		l = JSON.stringify(l);
		var u = e.localStorage.getItem(l);
		u &&= JSON.parse(u), u && !u.limit ? e.remote._proceed(t, u, i, r) : e.remote._findRegion(function(n) {
			e._ajax(n, "post", l, "json", function(n) {
				n.error ? r(2) : (e.remote._proceed(t, n, i, r), e.localStorage.setItem(l, JSON.stringify(n)));
			});
		});
	}
}, e.remote._proceed = function(t, n, r, i) {
	if (typeof n == "string" && (n = JSON.parse(n)), n.limit && n.limit == 1) i(n.limit);
	else {
		for (var a = 0; a < t.length; a++) e.remote._fromResDTO(t[a], n, 0, t, r);
		i();
	}
}, e.remote._findRegion = function(t) {
	var n = e.localStorage.getItem(e.FUNC_URL_NAME);
	if (n) t(n);
	else {
		for (var r = [
			"defunc2",
			"cusfunc2",
			"bsfunc2",
			"acfunc2",
			"kcfunc2",
			"safunc2",
			"wifunc2"
		], i = [], a = 0; a < r.length; a++) i.push(new XMLHttpRequest());
		for (var a = 0; a < r.length; a++) (function() {
			var n = "https://" + r[a] + e.SERVER_PREFIX, o = i[a];
			o.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					e.localStorage.setItem(e.FUNC_URL_NAME, n), t(n);
					for (var r = 0; r < i.length; r++) i[r].abort();
				}
			}, o.open("GET", n, !0), o.send();
		})();
	}
};
var t = e;
//#endregion
export { t as default };
