(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{204:function(t,n,e){var content=e(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("55600f6a",content,!0,{sourceMap:!1})},205:function(t,n,e){var content=e(211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("9982133c",content,!0,{sourceMap:!1})},206:function(t,n,e){"use strict";e(204)},207:function(t,n,e){var o=e(44)((function(i){return i[1]}));o.push([t.i,".fa-size[data-v-44cdb286]{\n  font-size:2rem;\n  color:#526488\n}",""]),t.exports=o},208:function(t,n,e){"use strict";e.r(n);e(206);var o=e(34),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"fa-size"},[e("a",{attrs:{href:"https://linkedin.com/in/m-housni"}},[e("fa",{attrs:{icon:["fab","linkedin"]}})],1),t._v(" "),e("a",{attrs:{href:"https://github.com/m-housni"}},[e("fa",{attrs:{icon:["fab","github"]}})],1),t._v(" "),e("a",{attrs:{href:"https://twitter.com/m-housni"}},[e("fa",{attrs:{icon:["fab","twitter"]}})],1)])}),[],!1,null,"44cdb286",null);n.default=component.exports},209:function(t,n,e){t.exports=e.p+"img/mypic.4dfa412.png"},210:function(t,n,e){"use strict";e(205)},211:function(t,n,e){var o=e(44)((function(i){return i[1]}));o.push([t.i,".logo{\n  -webkit-animation:appear 3s;\n          animation:appear 3s;\n  margin:auto;\n  border-radius:50%;\n  height:128px\n}\n@-webkit-keyframes appear{\n0%{\n    opacity:0\n}\n}\n@keyframes appear{\n0%{\n    opacity:0\n}\n}",""]),t.exports=o},220:function(t,n,e){var content=e(241);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(45).default)("1b30ee58",content,!0,{sourceMap:!1})},221:function(t,n,e){"use strict";e.r(n);e(210);var o=e(34),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("img",{staticClass:"logo",attrs:{src:e(209),alt:""}}),t._v(" "),o("MySocialMedia")],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{MySocialMedia:e(208).default})},240:function(t,n,e){"use strict";e(220)},241:function(t,n,e){var o=e(44)((function(i){return i[1]}));o.push([t.i,'.container{\n  margin:0 auto;\n  min-height:100vh;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  text-align:center\n}\n.title{\n  font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  display:block;\n  font-weight:300;\n  font-size:60PX;\n  color:#35495e;\n  letter-spacing:1px\n}\n.subtitle{\n  font-weight:300;\n  font-size:42px;\n  color:#526488;\n  word-spacing:5px;\n  padding-bottom:15px\n}\n.links{\n  padding-top:15px\n}',""]),t.exports=o},242:function(t,n,e){"use strict";e.r(n);var o=e(222),r=e.n(o),l={data:function(){return{phrase:"default random fact",btnClass:"bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"}},methods:{nextFact:function(){var t=this;r.a.get("https://uselessfacts.jsph.pl/random.json?language=en").then((function(n){console.log(n),t.phrase=n.data.text}))}},mounted:function(){this.nextFact()}},c=(e(240),e(34)),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("Logo"),t._v(" "),t._m(0),t._v(" "),e("h2",{staticClass:"title"},[t._v("\n      "+t._s(t.phrase)+"\n    ")]),t._v(" "),e("div",{staticClass:"links"},[e("button",{class:t.btnClass,on:{click:t.nextFact}},[t._v("Next fact "),e("fa",{attrs:{icon:["fas","laugh-wink"]}})],1)])],1)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("h2",{staticClass:"subtitle"},[t._v("\n      I didn't say that, it came from "),e("a",{staticClass:"underline",attrs:{href:"https://uselessfacts.jsph.pl/"}},[t._v("RandomfactsApi")]),t._v(" :-) \n    ")])}],!1,null,null,null);n.default=component.exports;installComponents(component,{Logo:e(221).default})}}]);