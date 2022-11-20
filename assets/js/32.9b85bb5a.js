(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{415:function(s,t,a){"use strict";a.r(t);var n=a(45),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"通过插件市场安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过插件市场安装"}},[s._v("#")]),s._v(" 通过插件市场安装")]),s._v(" "),a("h3",{attrs:{id:"_1-在插件市场中访问z-paging。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在插件市场中访问z-paging。"}},[s._v("#")]),s._v(" ① 在"),a("a",{attrs:{href:"https://ext.dcloud.net.cn/plugin?id=3935",target:"_blank",rel:"noopener noreferrer"}},[s._v("插件市场"),a("OutboundLink")],1),s._v("中访问z-paging。")]),s._v(" "),a("h3",{attrs:{id:"_2-点击【使用hbuilderx导入插件】。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-点击【使用hbuilderx导入插件】。"}},[s._v("#")]),s._v(" ② 点击【使用HbuilderX导入插件】。")]),s._v(" "),a("h3",{attrs:{id:"_3-选择目标项目并导入。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-选择目标项目并导入。"}},[s._v("#")]),s._v(" ③ 选择目标项目并导入。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("z-paging 使用"),a("code",[s._v("uni_modules")]),s._v("管理，导入的项目会在"),a("code",[s._v("uni_modules")]),s._v("目录下，在"),a("code",[s._v("uni_modules")]),s._v("下右键z-paging可以快速地从插件市场更新"),a("br"),s._v(" "),a("img",{staticStyle:{width:"450px"},attrs:{src:"https://z-paging.zxlee.cn/public/img/z-paging-upgrade.jpg"}})])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("若不想使用"),a("code",[s._v("uni_modules")]),s._v("，可以在插件市场中点击【下载插件ZIP】，解压后将"),a("code",[s._v("z-paging")]),s._v("(必须)、"),a("code",[s._v("z-paging-empty-view")]),s._v("(必须)、"),a("code",[s._v("z-paging-swiper")]),s._v("(可选)和"),a("code",[s._v("z-paging-swiper-item")]),s._v("(可选)放到项目的"),a("code",[s._v("components")]),s._v("目录下。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("z-paging遵循"),a("a",{attrs:{href:"https://uniapp.dcloud.io/component/README?id=easycom%E7%BB%84%E4%BB%B6%E8%A7%84%E8%8C%83",target:"_blank",rel:"noopener noreferrer"}},[s._v("easycom规范"),a("OutboundLink")],1),s._v("，无需注册即可使用。")])]),s._v(" "),a("h2",{attrs:{id:"通过npm安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过npm安装"}},[s._v("#")]),s._v(" 通过npm安装")]),s._v(" "),a("blockquote",[a("p",[s._v("为多端兼容考虑，建议优先从"),a("a",{attrs:{href:"https://ext.dcloud.net.cn/plugin?id=3935",target:"_blank",rel:"noopener noreferrer"}},[s._v("插件市场"),a("OutboundLink")],1),s._v("获取插件")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("//若项目之前未使用npm管理依赖（项目根目录下无package.json文件），先在项目根目录执行命令初始化npm工程\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" init -y\n\n//安装\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" z-paging --save\n//更新\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" update z-paging\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("下方配置只有在通过npm安装的时候才要配置！！！！！！！！")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("使用npm方式安装编译会提示"),a("code",[s._v("WARNING: Module not found: Error: Can't resolve' @/uni_modules/z-paging'")]),a("br"),s._v("\n此警告不影响正常使用，若需要消除此警告，请至源码的"),a("code",[s._v("z-paging-utils.js")]),s._v("文件中，按照注释提示注释相关代码。")])]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("pages.json")]),s._v("中配置"),a("code",[s._v("easycom")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"easycom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"custom"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"^(?!z-paging-refresh|z-paging-load-more)z-paging(.*)"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"z-paging/components/z-paging$1/z-paging$1.vue"')]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("在"),a("code",[s._v("vue.config.js")]),s._v("(没有这个文件则忽略)中添加配置")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    transpileDependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'z-paging'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);