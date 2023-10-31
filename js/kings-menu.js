var customMenu = {
      menuOpts: {
         menuButton: $(".open-menu-js"),
         arrowTemplate: "<div class='arrow'><i class='g-icon g-right-angle-icon'></i></div>",
         hasSlideDown: !1,
         backArrowTemplate: function (e, t) {
            return "<li class='cm__item-ref'><div class='cm__title-ref level-close-js'><i class='g-longArrow isLeftOriented'></i><span>Back</span></div></li>"
         },
         innerMenuTemplate: function (e, t) {
            return "<form action='javascript:void(0)' class='searchForm'><fieldset><i class='g-icon g-search-icon'></i><input type='text' placeholder='Search' aria-label='Search input'><button class='searchForm__submit' type='submit' title='Submit search' aria-label='Submit search'><i class='g-longArrow isRightOriented'></i></button></fieldset></form><div class='kings-menu__inner'><div class='menu-mobile-helper'><div class='menu-container'>{LEVELS}</div></div><div class='right-side'></div></div><div class='menuBottomlinks'><ul>{keylinks}</ul></div>".replace(/{LEVELS}/g, t.fl + t.sl + t.tl).replace(/{keylinks}/g, function (e) {
               if (0 === e.length) return "";
               for (var t = "", n = 0; n < e.length; n++) t += "<li><a href='{link}' target='{target}' title='{name}'>{name}</a></li>".replace(/{link}/g, e[n].href).replace(/{target}/g, e[n].target).replace(/{name}/g, e[n].text);
               return t
            }(menuBottomLinks))
         }
      },
      initMenu: function () {
         var e = this,
            t = e.menuOpts,
            n = $(".kings-menu");
         n.on("cm.after.render", (function (t, n, a) {
            setTimeout((function () {
               $(".first-level .cm-item").on("click", (function () {
                  var e = $(this);
                  e.addClass("activeState").removeClass("hoverState"), e.siblings().addClass("hoverState").removeClass("activeState"), setTimeout((function () {
                     $(".second-level").hasClass("level-active") || (e.removeClass("activeState hoverState"), e.siblings().removeClass("activeState hoverState"))
                  }), 1)
               })), $(".first-level .cm-item.has-level").on("click", (function () {
                  $(this).find(".cm-link-open-level.cm-link span").html()
               })), $(".level-close-js").on("click", (function () {
                  $(".first-level .cm-item").removeClass("activeState hoverState")
               })), $(".level-close-outside-js, .first-level").on("click", (function (e) {
                  ($(".kings-menu").hasClass("second-level-active") || $(".kings-menu").hasClass("third-level-active")) && (e.preventDefault(), $(".level-close-js").trigger("click"))
               })), e.handleMenuFirstLvlLinks(), e.searchLogic(), menuEvent.init(), menuKeyLinks.init(), awards.init()
            }), 1)
         })), n.on("cm.before.open", (function (e, t, n) {
            $(".desktopNav, .burger, .hero__buttons, .hero__scrollDown, .hero__strapline").css("margin-right", ''), $(".kings-menu__inner").css("right", ''), $(".burger em").html("Close"), $(".header, body").addClass("menu-active"), $(".custom-logo").addClass("menu-active"), $(".custom-popup.popup-notices").addClass("menu-active"), $(".popup-notices").removeClass("opened"), $(".open-notices").removeClass("hidden"), $("html").addClass("no-touch"), $(".header .close-button").removeClass("active"), setTimeout((function () {
               $(".second-level").hasClass("level-active") && $(".header").addClass("tempHidden")
            }), 200)
         })), n.on("cm.after.close", (function (e, t, n) {
            $(".desktopNav, .burger, .hero__buttons, .hero__scrollDown, .hero__strapline").css("margin-right", ""), $(".kings-menu__inner").css("right", ""), $(".burger em").html("Menu"), $(".header, body").removeClass("menu-active"), $(".custom-logo").removeClass("menu-active"), $("html").removeClass("no-touch"), $(".custom-popup.popup-notices").removeClass("menu-active"), $(".popup-notices").removeClass("opened"), $(".open-notices").removeClass("hidden"), $(".header .close-button").removeClass("active")
         })), n.customMenu(t), this.stickyMenu()
      },
      handleMenuFirstLvlLinks: function () {
         $(".cm-link-open-level").each((function () {
            var e = $(this);
            e.on("click tap", (function () {
               $(".kings-menu__inner").animate({
                  scrollTop: 0
               }, "slow"), e.parent().hasClass("has-level-js") && e.parents(".first-level").length && setTimeout((function () {
                  $(".second-level").hasClass("level-active") ? $(".header").addClass("tempHidden") : $(".header").removeClass("tempHidden")
               }), 100)
            }))
         })), $(".level-close-js").on("click tap", (function () {
            $(".header").hasClass("tempHidden") && $(".header").removeClass("tempHidden")
         }))
      },
      searchLogic: function () {
         $("body").on("keydown", ".searchForm input", (function (e) {
            13 == e.which && (e.preventDefault(), $(this).val().length && (window.location.href = "/search/" + encodeURIComponent($(this).val())))
         })), $(".searchForm__submit").on("click", (function () {
            var e = $(this).parent().find("input").val();
            e.length && (window.location.href = "/search/" + encodeURIComponent(e))
         }))
      },
      init: function () {
         this.initMenu()
      },
      stickyMenu: function () {
         var e = !1,
            t = !1;

         function stickyLogic() {
            t = !0, !e && !$("body").hasClass("sharedTemplates") && $(window).scrollTop() > 100 && (e = !0, $(" .desktopNav").addClass("stickyOn")), e && !$("body").hasClass("sharedTemplates") && $(window).scrollTop() < 101 && (e = !1, $(".desktopNav").removeClass("stickyOn"))
         }
         $(window).innerWidth() > 767 && (stickyLogic(), $(window).on("scroll", (function () {
            stickyLogic()
         })))
      }
   }
   
   
  ! function (e) {
   "use strict";
   var l = function () {
      function customMenu(l, s) {
         this.selector = l, this.options = e.extend({
            verbose: !1,
            menuButton: e(".open-menu-js"),
            closeLevel: ".level-close-js",
            resizeTarget: ".menu-container",
            currentClass: ".current",
            itemClasses: "cm-item",
            linkClasses: "cm-link",
            linkWithLevelClasses: "cm-link-open-level",
            hasLevelClasses: "has-level",
            excludeClass: ".cm-exclude",
            arrowTemplate: "<div class='arrow'><span class='global-icon global-bold-arrow-icon'></span></div>",
            levelContainer: ".cm-level",
            allPanelsSelector: ".cm-levels",
            hasSlideDown: !1,
            backArrowTemplate: function (e, l) {
               return "<li class='cm__item-ref'><div class='cm__link-ref level-close-js'><span class='global-icon global-bold-arrow-icon'></span>Back</div></li>".replace(/{LEVEL_TITLE}/g, l)
            },
            innerMenuTemplate: function (e, l) {
               return "<div class='open-menu open-menu-js'></div><div class='kings-menu__inner'><div class='menu-mobile-helper'><div class='menu-container'>{LEVELS}</div></div><div class='menu-promos'><div class='menu-promos-inner'></div></div></div>".replace(/{LEVELS}/g, l.fl + l.sl + l.tl)
            },
            firstLevel: {
               panelTemplate: function (e, l) {
                  return "<div class='first-level cm-levels'><div class='cm-absolute'><div class='cml-scroll'><div class='cml-table'><div class='cml-tc'><ul class='cm-level cm-first-level'>{ITEMS}</ul></div></div></div><button class='scroll-down-wrapper' title='Scroll Down' aria-hidden='true'><i class='scroll-level-down g-longArrow isDownOriented' ></i></button></div></div>".replace(/{ITEMS}/g, l)
               }
            },
            secondLevel: {
               panelTemplate: function (e, l) {
                  return "<div class='second-level cm-levels'><div class='cm-absolute'><div class='cml-scroll'><div class='cml-table'><div class='cml-tc'>{ITEMS}</div></div></div><button class='scroll-down-wrapper' title='Scroll Down' aria-hidden='true'><i class='scroll-level-down g-longArrow isDownOriented' ></i></button></div></div>".replace(/{ITEMS}/g, l)
               }
            },
            thirdLevel: {
               panelTemplate: function (e, l) {
                  return "<div class='third-level cm-levels'><div class='cm-absolute'><div class='cml-scroll'><div class='cml-table'><div class='cml-tc'>{ITEMS}</div></div></div><button class='scroll-down-wrapper' title='Scroll Down' aria-hidden='true'><i class='scroll-level-down g-longArrow isDownOriented' ></i></button></div></div>".replace(/{ITEMS}/g, l)
               }
            },
            menuPromos: function () {},
            swipe: !1
         }, s)
      }
      var l = customMenu.prototype;
      return l.log = function (e, l) {
         if (this.options.verbose);
      }, l.addIdAttr = function (e, l) {
         e.attr("data-open", "cm-open-" + l)
      }, l.extractLevels = function (l, s, t) {
         var i = this.options,
            n = l.clone(),
            o = e("<div />");
         if (i.hasSlideDown && t || n.find("ul").remove(), s) {
            for (var a = 0; a < n.length; a++) o.append(n[a].outerHTML);
            return o.html()
         }
         return n.html()
      }, l.addHelpers = function (e, l, s) {
         var t = this,
            i = t.options,
            n = i.linkWithLevelClasses,
            o = "",
            a = i.hasLevelClasses,
            c = "has-level-js";
         if (e.find(" > ul").length) {
            var r = e.find(" > a"),
               d = e.find(" > ul"),
               v = r.html();
            void 0 !== n && "" !== n && (o += " " + n), void 0 !== a && "" !== a && (c += " " + a), e.addClass(c), r.addClass(o), r.append(i.arrowTemplate), d.prepend(i.backArrowTemplate.call(t, t, v)), t.addIdAttr(e, l), t.addIdAttr(d, l), d.addClass("cm-level " + s)
         }
      }, l.createTemplate = function () {
         var l = this,
            s = l.selector,
            t = s.find("> ul"),
            i = e("<div />"),
            n = l.selector,
            o = l.customEvents,
            a = l.options,
            c = a.firstLevel,
            r = a.secondLevel,
            d = a.thirdLevel,
            v = c.panelTemplate,
            m = r.panelTemplate,
            f = d.panelTemplate,
            u = a.innerMenuTemplate,
            h = a.excludeClass,
            p = a.levelContainer,
            C = a.itemClasses,
            g = a.linkClasses;
         i.append(t.html());
         var b = i.find("> li"),
            w = b.find("> ul > li");
         b.each((function (s) {
            var t = e(this);
            l.addHelpers(t, "2-" + s, "cm-level-second")
         })), w.each((function (s) {
            var t = e(this);
            l.addHelpers(t, "3-" + s, "cm-level-third")
         }));
         var T = l.extractLevels(i),
            S = l.extractLevels(i.find(".cm-level-second"), !0, !0),
            k = l.extractLevels(i.find(".cm-level-third"), !0);
         s.html("");
         var L = v.call(l, l, T),
            j = m.call(l, l, S),
            O = a.hasSlideDown ? "" : f.call(l, l, k),
            x = u.call(l, l, {
               fl: L,
               sl: j,
               tl: O
            });
         n.trigger(o.render.before, [l, l.selector]), s.append(x), n.trigger(o.render.after, [l, l.selector]);
         var E = "cm-item-js",
            y = "";
         void 0 !== C && "" !== C && (E += " " + C), void 0 !== g && "" !== g && (y += " " + g), void 0 !== p && "" !== p && (s.find(p).addClass("cm-level-js"), s.find(p + " > li").addClass(E), s.find(p + " > li > a").not(h).addClass(y))
      }, l.resetMenu = function () {
         var e = this,
            l = e.options.allPanelsSelector,
            s = e.customEvents,
            t = e.selector,
            i = t.find(l),
            n = t.find(".cm-level-js"),
            o = i.find(".cm-item-js");
         t.trigger(s.reset.before, [e]), i.removeClass("level-active").css({
            width: "",
            opacity: ""
         }), t.removeClass("second-level-active third-level-active"), o.removeClass("active"), n.hide(), t.trigger(s.reset.after, [e])
      }, l.bodyFix = function (l) {
         var s = this,
            t = e("html.no-touch"),
            i = e("html.touch"),
            n = s.selector,
            o = s.customEvents;
         "open" === l ? (n.trigger(o.onBodyFix.onOpen.before, [s]), t.css({
            overflow: "hidden"
         }), i.css({
            overflow: "hidden"
         }), n.trigger(o.onBodyFix.onOpen.after, [s])) : "close" === l && (n.trigger(o.onBodyFix.onClose.before, [s]), t.css({
            overflow: ""
         }), i.css({
            overflow: "",
            position: ""
         }), n.trigger(o.onBodyFix.onClose.after, [s]))
      }, l.checkSize = function (l) {
         var s = this.options,
            t = this.selector,
            i = t.find(s.resizeTarget),
            n = l.outerHeight();
         t.css("overflow", "auto"), i.css({
            height: n + 30,
            "min-height": 0,
            "margin-bottom": 0
         })
      }, l.handleGeneralClasses = function (e, l) {
         var s = this.selector;
         void 0 !== l && l ? e.hasClass("second-level") ? s.removeClass("second-level-active") : e.hasClass("third-level") && s.removeClass("third-level-active") : e.hasClass("second-level") ? s.addClass("second-level-active") : e.hasClass("third-level") && s.addClass("third-level-active")
      }, l.closeTarget = function (e, l) {
         l.removeClass("level-active"), this.handleGeneralClasses(l, "remove"), l.find(".cm-level-js").hide(), e.find(".cm-item-js").removeClass("active"), this.checkSize(e.find(".cm-level-js"))
      }, l.openTarget = function (e, l, s) {
         var t = this,
            i = t.selector,
            n = l.find(".cm-level-js[data-open=" + e + "]"),
            o = l.find(".cm-level-js[data-open!=" + e + "]"),
            a = s.find(".cm-item-js[data-open=" + e + "]"),
            c = s.find(".cm-item-js[data-open!=" + e + "]");
         a.hasClass("active") ? (a.removeClass("active"), l.removeClass("level-active"), l.hasClass("second-level") ? i.removeClass("second-level-active") : l.hasClass("third-level") && i.addClass("third-level-active"), t.handleGeneralClasses(l, "remove"), n.hide()) : (l.hasClass("level-active") || (l.addClass("level-active"), t.handleGeneralClasses(l)), c.removeClass("active"), a.addClass("active"), o.hide(), n.fadeIn()), t.checkSize(n)
      }, l.openTargetWithSlide = function (e, l, s) {
         var t = this,
            i = s.find(".cm-item-js[data-open=" + e + "]");
         i.hasClass("active") ? (i.removeClass("active"), i.find(".cm-level").slideUp((function () {
            t.initScroller()
         }))) : (i.addClass("active"), i.find(".cm-level").slideDown((function () {
            t.initScroller()
         })))
      }, l.openLevel = function (e, l) {
         var s = this,
            t = s.selector,
            i = s.options,
            n = e.split("-")[2];
         void 0 !== l && t.addClass("no-animation"), "2" === n ? (s.closeTarget(t.find(".second-level"), t.find(".third-level")), s.openTarget(e, t.find(".second-level"), t.find(".first-level")), s.initScroller()) : i.hasSlideDown ? s.openTargetWithSlide(e, t.find(".second-level"), t.find(".second-level")) : (s.openTarget(e, t.find(".third-level"), t.find(".second-level")), s.initScroller()), s.noAnimationTimeout && clearTimeout(s.noAnimationTimeout), void 0 !== l && (s.noAnimationTimeout = setTimeout((function () {
            t.removeClass("no-animation")
         }), 100))
      }, l.closeLevel = function (l) {
         var s = this,
            t = s.selector,
            i = l.parents(".cm-levels");
         i.find(".cm-level:visible").stop(!0, !0).fadeOut(100, (function () {
            i.removeClass("level-active")
         })), i.hasClass("third-level") ? (s.checkSize(e(".second-level .cm-level:visible")), t.removeClass("third-level-active"), t.find(".second-level .cm-item-js").removeClass("active")) : (s.checkSize(e(".first-level .cm-level")), t.removeClass("second-level-active"), t.find(".first-level .cm-item-js").removeClass("active"), e(".third-level .cm-level:visible").stop(!0, !0).fadeOut(100, (function () {
            e(".third-level").removeClass("level-active"), t.find(".third-level .cm-item-js").removeClass("active")
         })))
      }, l.openCurrentLevel = function () {
         var l = this,
            s = l.options.currentClass;
         l.selector.find(s).each((function () {
            if (!e(this).parents(".cm-levels").hasClass("first-level")) {
               var s = e(this).parents(".cm-level-js").attr("data-open");
               l.openLevel(s, !0)
            }
         }))
      }, l.openMenu = function () {
         var l = this,
            s = l.options,
            t = l.selector,
            i = l.customEvents,
            n = s.menuButton;
         t.hasClass("generated") || (l.createTemplate(), t.addClass("generated")), n.hasClass("active") ? (t.trigger(i.menuActions.beforeClose, [l, l.selector]), l.bodyFix("close"), l.resetMenu(), n.removeClass("active"), t.removeClass("animated"), e(".custom-fader").removeClass("animated"), e("main").removeClass("animated"), setTimeout((function () {
            t.fadeOut(0, (function () {
               t.removeClass("loaded")
            }))
         }), 602), t.trigger(i.menuActions.afterClose, [l, l.selector])) : (t.trigger(i.menuActions.beforeOpen, [l, l.selector]), l.bodyFix("open"), n.addClass("active"), t.fadeIn(0, (function () {
            t.addClass("loaded"), l.checkSize(e(".first-level .cm-level")), l.openCurrentLevel(), t.trigger(i.menuActions.afterOpen, [l, l.selector])
         })), t.addClass("animated"), e("main").addClass("animated"), e(".custom-fader").addClass("animated"), l.initScroller())
      }, l.clickEvents = function () {
         var l = this,
            s = l.options.menuButton,
            t = l.selector;
         e("body").on("click", s.selector, (function () {
            l.openMenu()
         })), t.on("click", ".cm-link-open-level", (function (s) {
            var t = e(this).parent().attr("data-open");
            return l.openLevel(t), s.preventDefault(), !1
         })), t.on("click", ".level-close-js", (function () {
            var s = e(this);
            return l.closeLevel(s), l.initScroller(), !1
         }))
      }, l.checkScroll = function (e, l, s, t) {
         s.outerHeight(!0) - l.height() - 10 <= e ? t.removeClass("enabled") : t.addClass("enabled")
      }, l.checkOnResize = function (l, s, t) {
         var i = this;
         i.checkScroll(l.scrollTop(), l, s, t)
      }, l.checkOnScroll = function (l, s, t) {
         var i = this;
         i.sel, t.find(".scroll-action");
         l.scroll((function () {
            var n = e(this);
            i.checkScroll(n.scrollTop(), l, s, t)
         }))
      }, l.scrollOnClick = function (e, l, s) {
         this.sel;
         s.on("click", (function () {
            e.animate({
               scrollTop: 300
            }, 500)
         }))
      }, l.initScroller = function () {
         var l = this;
         l.selector.find(".scroll-down-wrapper").each((function () {
            var s = e(this).parents(".cm-absolute").find(".cml-table"),
               t = e(this).parents(".cm-absolute").find(".cml-scroll");
            l.checkOnResize(t, s, e(this)), l.checkOnScroll(t, s, e(this)), l.scrollOnClick(t, s, e(this))
         }))
      }, l.settings = function () {
         this.currentId = 0, this.customEvents = {
            reset: {
               after: "cm.afterReset",
               before: "cm.beforeReset"
            },
            render: {
               before: "cm.before.render",
               after: "cm.after.render"
            },
            menuActions: {
               beforeOpen: "cm.before.open",
               afterOpen: "cm.after.open",
               beforeClose: "cm.before.close",
               afterClose: "cm.after.close"
            },
            onBodyFix: {
               onOpen: {
                  before: "cm.before.fixBodyOpened",
                  after: "cm.after.fixBodyOpened"
               },
               onClose: {
                  before: "cm.before.fixBodyClosed",
                  after: "cm.after.fixBodyClosed"
               }
            }
         }
      }, l.init = function () {
         this.settings(), this.clickEvents()
      }, customMenu
   }();
   e.fn.customMenu = function (s) {
      return this.each((function () {
         if ("object" == typeof s || void 0 === s) return new l(e(this), s).init(), !1
      })), this
   }
}(jQuery);


$(document).ready(function () {
	customMenu.init();
});
