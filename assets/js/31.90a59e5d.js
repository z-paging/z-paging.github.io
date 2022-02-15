(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{413:function(e,s,t){"use strict";t.r(s);var v=t(45),a=Object(v.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"注意事项与常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项与常见问题"}},[e._v("#")]),e._v(" 注意事项与常见问题")]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("注意事项①")]),e._v(" "),t("p",[e._v("关于在微信小程序平台可能出现"),t("code",[e._v("Cannot read property 'selectAllComponents' of null")]),e._v("报错的原因与解决方案：\n在微信小程序中使用"),t("code",[e._v("slot-scope")]),e._v("有概率出现此问题，但是一般只在调试阶段有影响，发布后不会有此报错。\n若您需要解决此报错，请更新Hbuilder X至"),t("code",[e._v("3.3.5")]),e._v("或以上版本。")])]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("注意事项②")]),e._v(" "),t("p",[e._v("在nvue中，z-paging中插入的列表item(z-paging的直接子view)必须是cell，必须使用cell包住，因为在nvue中，z-paging使用的是nvue的list组件。"),t("br"),e._v("不能使用index作为key的唯一标识，"),t("code",[e._v(":key")]),e._v("必须添加并且必须是唯一的。"),t("br"),e._v("具体请查阅demo中的"),t("code",[e._v("common-demo-n.vue")]),e._v("示例")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意事项③")]),e._v(" "),t("p",[e._v("由V1.8.4起，支持使用v-model绑定list，之前的:list.sync依然有效。在新的项目中建议使用v-model，因为v-model是双向绑定的，修改页面中的list将同步修改z-paging中的list。")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意事项④")]),e._v(" "),t("p",[e._v("在使用fixed布局时，若要设置列表背景色，请设置page的背景色或使用:paging-style=\"{'background-color':'red'}\"方式，因为此时z-paging的父view是没有高度的，给它们设置背景色无效。")])]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("注意事项⑤")]),e._v(" "),t("p",[e._v("安卓App"),t("code",[e._v("(vue)")]),e._v("若要取消下拉刷新和滚动到底部灰色半弧形，请在"),t("code",[e._v("pages.json")]),e._v("中进行如下设置：")]),e._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//以下代码可以写在globalStyle中或特定页面的style中")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//在App中，取消安卓下拉刷新灰色半弧形效果")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"app-plus"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"bounce"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"none"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("安卓App"),t("code",[e._v("(nvue)")]),e._v("若要取消下拉刷新和滚动到底部灰色半弧形，请在"),t("code",[e._v("z-paging")]),e._v("标签上设置"),t("code",[e._v(':nvue-bounce="false"')]),e._v("。")])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("点击展开其他常见问题")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("【若无法下拉刷新】请确认要在@query所绑定的方法中调用"),t("code",[e._v("this.$refs.paging.complete()")]),e._v("，无论是否需要网络请求都要调用，只有告知z-paging刷新状态结束了，才可以开始下次的下拉刷新。")])]),e._v(" "),t("li",[t("p",[e._v("【使用内置scroll-view滚动时】z-paging必须有确定的高度！否则上拉加载更多将无法触发，建议设置"),t("code",[e._v(":fixed=true")]),e._v("即可不设置高度！！(不希望跟着滚动的view可以设置"),t("code",[e._v('slot="top"')]),e._v(")。")])]),e._v(" "),t("li",[t("p",[e._v("【使用页面滚动时】使用z-paging内置的scroll-view滚动性能不及使用页面的滚动。若您要使用页面的滚动，请勿固定z-paging的高度，并且必须设置"),t("code",[e._v("use-page-scroll")]),e._v("为true，否则将导致页面无法滚动(不希望跟着滚动的view可以设置"),t("code",[e._v('slot="top"')]),e._v(")。")])]),e._v(" "),t("li",[t("p",[e._v("【使用页面滚动时】必须引入mixin(可全局引入)(具体可参照demo中的"),t("code",[e._v("page-default-demo.vue")]),e._v("文件)")]),e._v(" "),t("p",[e._v("或在页面的"),t("code",[e._v("onReachBottom")]),e._v("事件中调用"),t("code",[e._v("this.$refs.paging.doLoadMore()")]),e._v("且在"),t("code",[e._v("onPageScroll(e)")]),e._v("事件中调用"),t("code",[e._v("this.$refs.paging.updatePageScrollTop(e.scrollTop)")]),e._v("。(具体可参照demo中的"),t("code",[e._v("page-default-demo.vue")]),e._v("文件)")])]),e._v(" "),t("li",[t("p",[e._v("【出现实际上有更多数据，而显示没有更多数据时】默认的pageSize(每页显示数量)为10，如果您服务端不需要传pageSize(例如有默认的pageSize：8)，则您需要将默认的pageSize改成您与后端约定好的（8），若没有修改，则z-paging会认为传给服务端的pageSize是10，而服务端只返回了8条，因此会直接判定为没有更多数据。")])]),e._v(" "),t("li",[t("p",[e._v("【若页面无法滚动】请检查z-paging是否有固定的高度；若您想使用页面滚动而非z-paging内置的scroll-view的滚动，请设置"),t("code",[e._v("use-page-scroll")]),e._v("为true。")])]),e._v(" "),t("li",[t("p",[e._v("【关于自定义导航栏】若设置了"),t("code",[e._v(":fixed=true")]),e._v('，则必须将自定义导航栏放在z-paging标签中且添加slot="top"，如：'),t("code",[e._v('<custom-nav slot="top"></custom-nav>')]),e._v("，如果有多个需要固定顶部的元素，则书写"),t("code",[e._v('<view slot="top">所有需要固定顶部的元素</view>')]),e._v("。")])])])])])}),[],!1,null,null,null);s.default=a.exports}}]);