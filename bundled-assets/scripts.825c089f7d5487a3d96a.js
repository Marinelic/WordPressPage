!function(e){function t(t){for(var n,l,i=t[0],a=t[1],c=t[2],h=0,d=[];h<i.length;h++)l=i[h],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(u&&u(t);d.length;)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var a=r[i];0!==o[a]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={0:0},s=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/wp-content/themes/fictional-university-theme/bundled-assets/";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=a;s.push([3,1]),r()}([,,function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(2);var n=class{constructor(){this.menu=document.querySelector(".site-header__menu"),this.openButton=document.querySelector(".site-header__menu-trigger"),this.events()}events(){this.openButton.addEventListener("click",()=>this.openMenu())}openMenu(){this.openButton.classList.toggle("fa-bars"),this.openButton.classList.toggle("fa-window-close"),this.menu.classList.toggle("site-header__menu--active")}},o=r(1);var s=class{constructor(){if(document.querySelector(".hero-slider")){const e=document.querySelectorAll(".hero-slider__slide").length;let t="";for(let r=0;r<e;r++)t+=`<button class="slider__bullet glide__bullet" data-glide-dir="=${r}"></button>`;document.querySelector(".glide__bullets").insertAdjacentHTML("beforeend",t),new o.a(".hero-slider",{type:"carousel",perView:1,autoplay:3e3}).mount()}}},l=r(0),i=r.n(l);var a=class{constructor(){this.openButton=i()(".js-search-trigger"),this.closeButton=i()(".search-overlay__close"),this.searchOverlay=i()(".search-overlay"),this.events(),this.isOverlayOpen=!1}events(){this.openButton.on("click",this.openOverlay.bind(this)),this.closeButton.on("click",this.closeOverlay.bind(this)),i()(document).on("keyup",this.keyPressDispatcher.bind(this))}keyPressDispatcher(e){83!=e.keyCode||this.isOverlayOpen||this.openOverlay(),27==e.keyCode&&this.isOverlayOpen&&this.closeOverlay()}openOverlay(){this.searchOverlay.addClass("search-overlay--active"),i()("body").addClass("body-no-scroll"),console.log("Our opet method just ran!"),this.isOverlayOpen=!0}closeOverlay(){this.searchOverlay.removeClass("search-overlay--active"),i()("body").removeClass("body-no-scroll"),console.log("Out close method just ran!"),this.isOverlayOpen=!1}};new n,new s,new a}]);