(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{405:function(t,e,l){"use strict";l.r(e);var a=l(45),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h3",{attrs:{id:"下拉刷新配置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#下拉刷新配置"}},[t._v("#")]),t._v(" 下拉刷新配置")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-enabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启下拉刷新")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-threshold")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置自定义下拉刷新阈值，默认单位为px。"),l("p",{staticStyle:{color:"red"}},[t._v('(支持传100、"100px"或"100rpx")(nvue无效)')])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number|String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("80rpx")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-only "),l("Badge",{attrs:{text:"1.6.6"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否只使用下拉刷新，设置为true后将关闭mounted自动请求数据、关闭滚动到底部加载更多，强制隐藏空数据图。"),l("p",{staticStyle:{color:"red"}},[t._v("若只想关闭滚动到底部加载更多，请"),l("RouterLink",{attrs:{to:"/api/props/loading-more.html"}},[t._v("点击这里")])],1)]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("use-custom-refresher")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否使用自定义的下拉刷新，默认为是，即使用z-paging的下拉刷新。设置为false即代表使用uni scroll-view自带的下拉刷新，h5、App、微信小程序以外的平台不支持uni scroll-view自带的下拉刷新")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("h5、App、微信小程序以外的平台设置为false时，无法使用下拉刷新")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show-refresher-when-reload "),l("Badge",{attrs:{text:"1.7.2"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("列表刷新时自动显示下拉刷新view")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("reload-when-refresh "),l("Badge",{attrs:{text:"2.1.0"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用户下拉刷新时是否触发reload方法 "),l("p",{staticStyle:{color:"red"}},[t._v("若设置为false，则下拉刷新时将不进行任何处理，若您想终止下拉刷新状态，请使用"),l("code",[t._v("this.$refs.paging.endRefresh()")])])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-theme-style")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("下拉刷新的主题样式，支持black，white")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("black")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("white")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-img-style "),l("Badge",{attrs:{text:"2.0.2"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新中左侧图标的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("{}")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-title-style "),l("Badge",{attrs:{text:"2.0.2"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新中右侧状态描述文字的样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("{}")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-update-time-style "),l("Badge",{attrs:{text:"2.0.2"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新中右侧最后更新时间文字的样式"),l("p",{staticStyle:{color:"red"}},[t._v("(show-refresher-update-time为true时有效)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("{}")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("watch-refresher-touchmove "),l("Badge",{attrs:{text:"2.1.0"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("在微信小程序和QQ小程序中，是否实时监听下拉刷新中进度，并通过@refresherTouchmove传递给父组件，在其他平台会自动判断，无需设置此属性")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("show-refresher-update-time "),l("Badge",{attrs:{text:"1.6.7"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示最后更新时间")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-update-time-key "),l("Badge",{attrs:{text:"1.6.7"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的"),l("code",[t._v("refresher-update-time-key")]),t._v("设置不同的字符串")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("default")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-default-text")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新默认状态下的文字"),l("p",{staticStyle:{color:"red"}},[t._v("(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String|Object")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("继续下拉刷新")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-pulling-text")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新松手立即刷新状态下的文字"),l("p",{staticStyle:{color:"red"}},[t._v("(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String|Object")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("松开立即刷新")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-refreshing-text")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新刷新中状态下的文字"),l("p",{staticStyle:{color:"red"}},[t._v("(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String|Object")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("正在刷新...")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-complete-text "),l("Badge",{attrs:{text:"2.0.6"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新刷新结束状态下的文字"),l("p",{staticStyle:{color:"red"}},[t._v("(支持直接传字符串或形如：{'en':'英文配置':'zh-cn':'中文配置'}的i18n配置)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String|Object")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("刷新成功")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-end-bounce-enabled")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启自定义下拉刷新刷新结束回弹效果")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-default-style")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置系统下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("black")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("white、none")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-background")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置自定义下拉刷新区域背景颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#FFFFFF00(透明)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-fixed-background")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置固定的自定义下拉刷新区域背景颜色")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("#FFFFFF00(透明)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-fixed-bac-height")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置固定的自定义下拉刷新区域高度")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number|String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-complete-delay "),l("Badge",{attrs:{text:"2.0.6"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新结束以后延迟回弹的时间，单位为毫秒")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number|String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-complete-duration "),l("Badge",{attrs:{text:"2.0.6"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新结束回弹动画时间，单位为毫秒("),l("code",[t._v("refresher-end-bounce-enabled")]),t._v("为false时，"),l("code",[t._v("refresher-complete-duration")]),t._v("为设定值的1/3)"),l("p",{staticStyle:{color:"red"}},[t._v("(nvue无效)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number|String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("300")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-complete-scrollable "),l("Badge",{attrs:{text:"2.1.1"}})],1),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新结束状态下是否允许列表滚动")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-out-rate")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例，范围0-1，值越大代表衰减越多。"),l("p",{staticStyle:{color:"red"}},[t._v("(nvue无效)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0.7")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-fps")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新下拉帧率，默认为40，过高可能会出现抖动问题")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number|String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("40")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-max-angle")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新允许触发的最大下拉角度，默认为40度，当下拉角度小于设定值时，自定义下拉刷新动画不会被触发。"),l("p",{staticStyle:{color:"red"}},[t._v("(值小于0或大于90时，代表不受角度限制)")])]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Number|String")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("40")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-90")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("refresher-angle-enable-change-continued")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("自定义下拉刷新的角度由未达到最大角度变到达到最大角度时，是否继续下拉刷新手势")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);