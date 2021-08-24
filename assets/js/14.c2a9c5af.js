(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{398:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"支持全局配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持全局配置"}},[s._v("#")]),s._v(" 支持全局配置 "),a("Badge",{attrs:{text:"1.5.8"}})],1),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("说明")]),s._v(" "),a("p",[s._v("支持统一配置z-paging的所有属性，非必须！！！")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("这里的全局配置不是全局引入组件，全局配置是指统一配置z-paging默认的属性值，z-paging遵循easycom组件规范，无需注册即可使用。")])]),s._v(" "),a("p",{staticStyle:{color:"red","font-weight":"bold"}}),s._v(" "),a("p",[a("a",{attrs:{href:"https://uniapp.dcloud.io/component/README?id=easycom%E7%BB%84%E4%BB%B6%E8%A7%84%E8%8C%83",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击查看easycom组件规范"),a("OutboundLink")],1)]),s._v(" "),a("ul",[a("li",[s._v("(推荐)【方案1】在路径"),a("code",[s._v("@/uni_modules/z-paging")]),s._v("下创建"),a("code",[s._v("z-paging-config.js")]),s._v("(与z-paging目录下的readme.md同级)，"),a("code",[s._v("z-paging-config.js")]),s._v("中的内容如下所示。")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("module.exports = "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//配置分页默认pageSize为15")]),s._v("\n\t'default-page-size'"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v("'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//配置空数据图默认描述文字为：空空如也~~")]),s._v("\n\t'empty-view-text'"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" '空空如也~~'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("【方案二】在"),a("code",[s._v("main.js")]),s._v("中"),a("code",[s._v("import zConfig from '@/uni_modules/z-paging/components/z-paging/js/z-paging-config'")]),s._v("(此路径为使用uni_modules情况下使用，可依照具体情况进行修改)，然后进行"),a("code",[s._v("z-paging")]),s._v("的全局配置：")])]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("如果调用过setConfig进行配置，后期又需要取消配置，则必须设置zConfig.setConfig(null)将配置置空，因为setConfig是将配置设置在缓存中，直接删除配置代码将导致原先缓存的配置无法清空。")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("zConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("setConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//配置分页默认pageSize为15")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default-page-size'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'15'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//配置空数据图默认描述文字为：空空如也~~")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'empty-view-text'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'空空如也~~'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("hr"),s._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])])}),[],!1,null,null,null);t.default=e.exports}}]);