(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{320:function(t,e,i){"use strict";i.r(e),i.d(e,"ks_img",(function(){return n}));var r=i(5),n=function(){function t(t){Object(r.i)(this,t),this.threshold=300}return t.prototype.componentDidLoad=function(){this.addIntersectionObserver()},t.prototype.componentWillUpdate=function(){this.src!==this.oldSrc&&this.addIntersectionObserver(),this.oldSrc=this.src},t.prototype.setImgSrc=function(){var t=this;this.$image.setAttribute("src",this.$image.getAttribute("data-src")),this.$image.onload=function(){return t.$image.removeAttribute("data-src")}},t.prototype.addIntersectionObserver=function(){this.src&&(this.lazy?"IntersectionObserver"in window?this.initializeObserver():this.executeFallback():this.setImgSrc())},t.prototype.initializeObserver=function(){var t=this;this.io=new IntersectionObserver((function(e){e[0].isIntersecting&&(t.setImgSrc(),t.removeIntersectionObserver())}),{rootMargin:this.threshold+"px 0px"}),this.io.observe(this.$image)},t.prototype.executeFallback=function(){var t=this;setTimeout((function(){return t.setImgSrc()}),300)},t.prototype.removeIntersectionObserver=function(){this.io&&(this.io.disconnect(),this.io=null)},t.prototype.render=function(){var t=this;return Object(r.g)("img",{"data-src":this.src,alt:this.alt,ref:function(e){return t.$image=e}})},Object.defineProperty(t.prototype,"$el",{get:function(){return Object(r.f)(this)},enumerable:!1,configurable:!0}),t}()}}]);