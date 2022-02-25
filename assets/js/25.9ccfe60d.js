(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{416:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"slot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slot"}},[t._v("#")]),t._v(" Slot")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[s("code",[t._v("slot")]),t._v("的写法在"),s("code",[t._v("vue2")]),t._v("和"),s("code",[t._v("vue3")]),t._v("中写法不同，以下示例为"),s("code",[t._v("vue2")]),t._v("写法，若需要查看"),s("code",[t._v("vue3")]),t._v("中的写法，请"),s("a",{attrs:{href:"../../start/migration-to-vue3"}},[t._v("点击这里")])])]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("① 使用slot插入的view必须是"),s("code",[t._v("z-paging")]),t._v("的子view(此view的上一级必须是"),s("code",[t._v("z-paging")]),t._v(")，如：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-paging")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("paging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@query")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("queryList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是固定在顶部的view"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-paging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("② slot节点不支持通过v-if或v-show动态显示/隐藏，若需要动态控制，可将v-if添加在其子节点上，如：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-paging")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("paging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@query")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("queryList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showBottom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- bottom的内容 --\x3e")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-paging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("empty")]),t._v(" "),s("td",[t._v("自定义空数据占位view")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("loading")]),t._v(" "),s("td",[t._v("自定义页面reload时的加载view，注意：这个slot默认仅会在第一次加载时显示，若需要每次reload时都显示，需要将"),s("code",[t._v("auto-hide-loading-after-first-loaded")]),t._v("设置为false")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("refresher")]),t._v(" "),s("td",[t._v("自定义下拉刷新view，设置后则不使用uni自带的下拉刷新view和z-paging自定义的下拉刷新view。此view的style必须设置为"),s("code",[t._v("height:100%")]),s("p",{staticStyle:{color:"red"}},[t._v("(在非nvue中，自定义下拉刷新view的高度受"),s("code",[t._v("refresher-threshold")]),t._v("控制，因此如果它的高度不为默认的80rpx，则需要设置"),s("code",[t._v('refresher-threshold="自定义下拉刷新view的高度"')]),t._v(")")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("refresherComplete "),s("Badge",{attrs:{text:"2.1.1"}})],1),t._v(" "),s("td",[t._v("自定义"),s("code",[t._v("结束状态下")]),t._v("的下拉刷新view，若设置，当下拉刷新结束时，会替换当前状态下的下拉刷新view。"),s("p",{staticStyle:{color:"red"}},[t._v("(注意：默认情况下您无法看到结束状态的下拉刷新view，除非您设置了"),s("code",[t._v("refresher-complete-duration")]),t._v("并且值足够大，例如：500)")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("top "),s("Badge",{attrs:{text:"1.5.5"}})],1),t._v(" "),s("td",[t._v("可以将自定义导航栏、tab-view等需要固定的"),s("code",[t._v("(不需要跟着滚动的)")]),t._v("元素放入"),s("code",[t._v('slot="top"')]),t._v("的view中。"),s("br"),t._v("注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置"),s("code",[t._v('slot="top"')]),t._v("。需要固定在顶部的view请勿设置"),s("code",[t._v("position: fixed;")]),t._v("。"),s("p",{staticStyle:{color:"red"}},[t._v("在nvue中或使用页面滚动时，若top中的内容动态变化(即高度动态变化)，请在高度更新后调用"),s("a",{attrs:{href:"../methods/main"}},[t._v("this.$refs.paging.updatePageScrollTopHeight()")])])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("bottom "),s("Badge",{attrs:{text:"1.6.2"}})],1),t._v(" "),s("td",[t._v("可以将需要固定在底部的"),s("code",[t._v("(不需要跟着滚动的)")]),t._v("元素放入"),s("code",[t._v('slot="bottom"')]),t._v("的view中。"),s("br"),t._v("注意，当有多个需要固定的view时，请用一个view包住它们，并且在这个view上设置"),s("code",[t._v('slot="bottom"')]),t._v("。需要固定在底部的view请勿设置"),s("code",[t._v("position: fixed;")]),t._v("。"),s("p",{staticStyle:{color:"red"}},[t._v("在nvue中或使用页面滚动时，若bottom中的内容动态变化(即高度动态变化)，请在高度更新后调用"),s("a",{attrs:{href:"../methods/main"}},[t._v("this.$refs.paging.updatePageScrollBottomHeight()")])])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("chatLoading")]),t._v(" "),s("td",[t._v("使用聊天记录模式时自定义顶部加载更多view，"),s("code",[t._v("use-chat-record-mode")]),t._v("为true时有效")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("loadingMoreDefault")]),t._v(" "),s("td",[t._v('自定义滑动到底部"默认"状态的view')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("loadingMoreLoading")]),t._v(" "),s("td",[t._v('自定义滑动到底部"加载中"状态的view')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("loadingMoreNoMore")]),t._v(" "),s("td",[t._v('自定义滑动到底部"没有更多数据"状态的view')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("loadingMoreFail")]),t._v(" "),s("td",[t._v('自定义滑动到底部"加载失败"状态的view')])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("backToTop "),s("Badge",{attrs:{text:"1.9.4"}})],1),t._v(" "),s("td",[t._v("自定义点击返回顶部view"),s("p",{staticStyle:{color:"red"}},[t._v("(此view受“【返回顶部按钮】配置”控制，且其父view默认宽高为76rpx)")]),s("br")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);