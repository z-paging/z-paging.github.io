(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{396:function(t,e,l){"use strict";l.r(e);var a=l(45),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h3",{attrs:{id:"常规配置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#常规配置"}},[t._v("#")]),t._v(" 常规配置")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("v-model "),l("Badge",{attrs:{text:"1.8.4"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("绑定最终的列表渲染变量(页面data中声明的值)，当列表数据改变时，所绑定的变量会跟着改变")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("default-page-no")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义pageNo(第几页)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number|String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("default-page-size")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义pageSize(每页显示多少条)"),l("p",{staticStyle:{color:"red"}},[t._v("(必须和后端的pageSize一致，例如后端分页的pageSize为15，此属性必须改为15)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number|String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("fixed "),l("Badge",{attrs:{text:"1.5.6"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("z-paging是否使用fixed布局，若使用fixed布局，则z-paging的父view无需固定高度，z-paging高度默认铺满屏幕，页面中的view请放在z-paging标签内，需要固定在顶部的view使用"),l("code",[t._v('slot="top"')]),t._v("包住，需要固定在底部的view使用"),l("code",[t._v('slot="bottom"')]),t._v("包住。"),l("p",{staticStyle:{color:"red"}},[t._v("(若不需要z-paging铺满全屏，例如希望在弹窗内使用z-paging，请设置"),l("code",[t._v(':fixed="false"')]),t._v("，同时必须指定z-paging的高度，否则列表无法显示。"),l("br"),t._v("若希望z-paging随着内容自动撑高，需设置"),l("code",[t._v(':use-page-scroll="true"')]),t._v("，无需修改fixed的配置，也无需指定z-paging高度)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("safe-area-inset-bottom "),l("Badge",{attrs:{text:"1.6.1"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启底部安全区域适配")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("use-page-scroll")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用页面滚动，默认为否，当设置为是时则使用页面的滚动而非此组件内部的scroll-view的滚动，使用页面滚动时z-paging无需设置确定的高度且对于长列表展示性能更高，但配置会略繁琐"),l("p",{staticStyle:{color:"red"}},[t._v("("),l("span",{staticStyle:{"font-weight":"bold"}},[t._v("特别注意")]),t._v("：必须引入"),l("code",[t._v("mixins")]),t._v("，详情请"),l("RouterLink",{attrs:{to:"/start/use.html#使用页面滚动示例"}},[t._v("点击这里")]),t._v("，在组件中使用z-paging不建议开启页面滚动，因为需要页面将对应生命周期转发到组件内，步骤很繁琐！)")],1),l("p",{staticStyle:{color:"red"}},[t._v("(nvue中不建议使用页面滚动，nvue中默认使用list组件，性能远高于使用页面滚动。在nvue中使用页面滚动无法插入"),l("code",[t._v("cell")]),t._v("，且仅能使用页面的下拉刷新)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("auto-full-height "),l("Badge",{attrs:{text:"2.0.6"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("使用页面滚动时，是否在不满屏时自动填充满屏幕")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("default-theme-style")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("loading(下拉刷新、上拉加载更多)的主题样式，支持black，white")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("black")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("white")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("paging-style")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置z-paging的style，部分平台(如微信小程序)无法直接修改组件的style，可使用此属性代替"),l("p",{staticStyle:{color:"red"}},[t._v("(在使用fixed布局时，若要设置列表背景色，请设置page的背景色或使用:paging-style=\"{'background-color':'red'}\"方式，因为此时z-paging的父view是没有高度的，给它们设置背景色无效)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("height "),l("Badge",{attrs:{text:"2.0.6"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("z-paging的高度，优先级低于"),l("code",[t._v("paging-style")]),t._v("中设置的height，传字符串，如100px、100rpx、100%")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("width "),l("Badge",{attrs:{text:"2.0.6"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("z-paging的宽度，优先级低于"),l("code",[t._v("paging-style")]),t._v("中设置的width，传字符串，如100px、100rpx、100%")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("bg-color "),l("Badge",{attrs:{text:"2.0.6"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("z-paging的背景色，优先级低于"),l("code",[t._v("paging-style")]),t._v('中设置的background-color。传字符串，如"#ffffff"')]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("delay "),l("Badge",{attrs:{text:"1.9.6"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("调用"),l("code",[t._v("complete")]),t._v("后延迟处理的时间，单位为毫秒，优先级高于"),l("code",[t._v("min-delay")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number|String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("min-delay "),l("Badge",{attrs:{text:"2.0.9"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("触发"),l("code",[t._v("@query")]),t._v("后最小延迟处理的时间，单位为毫秒，优先级低于delay（假设设置为300毫秒，若分页请求时间小于300毫秒，则在调用"),l("code",[t._v("complete")]),t._v("后延迟[300毫秒-请求时长]；若请求时长大于300毫秒，则不延迟）")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number|String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0"),l("br"),t._v("(当"),l("code",[t._v("show-refresher-when-reload")]),t._v("为true或"),l("code",[t._v("reload(true)")]),t._v("时，其最小值为400)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("list.sync")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[l("p",{staticStyle:{color:"red"}},[t._v("(建议使用v-model代替)")]),t._v("绑定最终的列表渲染变量(页面data中声明的值)，当列表数据改变时，所绑定的变量会跟着改变")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Array")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-status.sync")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("绑定下拉刷新状态改变的变量(页面data中声明的值)，当下拉刷新状态改变时，此变量会跟着改变（0-默认状态 1.松手立即刷新 2.刷新中 3.刷新成功）")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("chat-index.sync")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("绑定聊天记录模式下当前聊天记录第一条index的变量(页面data中声明的值)，当聊天记录第一条index改变时，此变量会跟着改变")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);