(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{402:function(t,e,a){"use strict";a.r(e);var n=a(45),l=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"i18n配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i18n配置"}},[t._v("#")]),t._v(" i18n配置 "),a("Badge",{attrs:{text:"1.6.5"}})],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ul",[a("li",[t._v("由"),a("code",[t._v("2.4.1")]),t._v("起，"),a("code",[t._v("z-paging")]),t._v("的i18n配置与"),a("code",[t._v("uni-app")]),t._v("国际化方案对齐，具体参见"),a("a",{attrs:{href:"https://uniapp.dcloud.net.cn/tutorial/i18n.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("国际化开发指南"),a("OutboundLink")],1)])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("配置详情 "),a("Badge",{attrs:{text:"2.4.1"}})],1),t._v(" "),a("ul",[a("li",[t._v("通过"),a("code",[t._v("uni.getLocale()")]),t._v("获取当前设置的语言；通过"),a("code",[t._v("uni.setLocale(locale)")]),t._v("设置当前语言；通过"),a("code",[t._v("uni.onLocaleChange(callback)")]),t._v("监听应用语言切换。具体参见"),a("a",{attrs:{href:"https://uniapp.dcloud.net.cn/api/ui/locale.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("语言配置"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("span",{staticStyle:{"font-weight":"bold"}},[t._v("如何新增语言支持？")]),a("code",[t._v("z-paging")]),t._v("默认支持"),a("code",[t._v("英文(en)")]),t._v("、"),a("code",[t._v("中文简体(zh-Hans)")]),t._v("、"),a("code",[t._v("中文繁体(zh-Hant)")]),t._v("，以下以添加日文为例："),a("br"),t._v("\n在"),a("code",[t._v("/z-paging/components/z-paging/i18n")]),t._v("目录中添加"),a("code",[t._v("ja.json")]),t._v("文件(可复制"),a("code",[t._v("zh-Hans.json")]),t._v(")，在当前目录的"),a("code",[t._v("index.js")]),t._v("文件中import"),a("code",[t._v("ja.json")]),t._v("。可通过"),a("code",[t._v("uni.setLocale('ja')")]),t._v("切换至日文")]),t._v(" "),a("li",[t._v("语言地区代码必须遵循"),a("code",[t._v("BCP47")]),t._v("规范，所有"),a("code",[t._v("BCP47")]),t._v("代码详见："),a("a",{attrs:{href:"https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),a("OutboundLink")],1)])])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("配置详情(2.4.1之前) "),a("Badge",{attrs:{text:"2.4.1起废弃",type:"error"}})],1),t._v(" "),a("ul",[a("li",[t._v("① 导入"),a("code",[t._v("z-paging-i18n.js")]),t._v("：  "),a("code",[t._v("import zI18n from '@/uni_modules/z-paging/components/z-paging/js/z-paging-i18n'")])]),t._v(" "),a("li",[t._v("② 全局设置语言： "),a("code",[t._v("zI18n.setLanguage('你要设置的语言')")]),t._v("。支持简体中文(zh-cn)、繁体中文(zh-hant-cn)和英文(en)，传null表示语言跟随系统(默认)。")]),t._v(" "),a("li",[t._v("③ 获取当前语言(非必须)："),a("code",[t._v("const language = zI18n.getLanguageName();")]),t._v(" 注意："),a("code",[t._v("getLanguageName()")]),t._v("方法中可以传一个参数(Boolean)用以约束当前获取的语言是否是在不跟随系统语言下获取到的，默认为true。")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("follow-system-language "),a("Badge",{attrs:{text:"2.4.1起废弃",type:"error"}})],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("i18n国际化默认是否跟随系统语言")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("language "),a("Badge",{attrs:{text:"2.4.1起废弃",type:"error"}})],1),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("p",{staticStyle:{color:"red"}},[t._v("(不常用，一般使用全局语言配置)")]),t._v("i18n国际化单独设置当前页面的语言，若设置，则会覆盖全局的语言。支持简体中文(zh-cn)、繁体中文(zh-hant-cn)和英文(en)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);