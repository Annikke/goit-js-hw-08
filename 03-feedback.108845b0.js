!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o,a=n("1WSnx"),l="feedback-form-state",i={},c=document.querySelector(".feedback-form");(o=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error(e)}}(l))&&(c.email.value=o.email,c.message.value=o.message),c.addEventListener("input",(0,a.throttle)((function(e){i[e.target.name]=e.target.value,function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error(e)}}(l,i)}),500)),c.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(l),console.log(i)}))}();
//# sourceMappingURL=03-feedback.108845b0.js.map
