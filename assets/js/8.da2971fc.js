(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{392:function(t,e,v){"use strict";v.r(e);var _=v(45),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"events"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("事件名")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("回调参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("@query")]),t._v(" "),v("td",[t._v("组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用。pageNo和pageSize会自动计算好，直接传给服务器即可。")]),t._v(" "),v("td",[t._v("参数1:pageNo(当前第几页)；"),v("br"),t._v("参数2:pageSize(每页多少条)")])]),t._v(" "),v("tr",[v("td",[t._v("@loadingStatusChange")]),t._v(" "),v("td",[t._v("上拉加载更多状态改变")]),t._v(" "),v("td",[t._v("0-默认状态 1.加载中 2.没有更多数据 3.加载失败")])]),t._v(" "),v("tr",[v("td",[t._v("@refresherStatusChange")]),t._v(" "),v("td",[t._v("自定义下拉刷新状态改变"),v("p",{staticStyle:{color:"red"}},[t._v("(use-custom-refresher为true时生效)")]),t._v("【注：通过"),v("code",[t._v(":refresher-status.sync")]),t._v("绑定当前data中的指定变量亦可】")]),t._v(" "),v("td",[t._v("0-默认状态 1.松手立即刷新 2.刷新中")])]),t._v(" "),v("tr",[v("td",[t._v("@refresherTouchstart")]),t._v(" "),v("td",[t._v("自定义下拉刷新下拉开始"),v("p",{staticStyle:{color:"red"}},[t._v("(use-custom-refresher为true时生效)")]),t._v("【注：当需要更细致定制自定义下拉刷新时使用，如果只需监听下拉刷新各个状态改变，使用"),v("code",[t._v("refresherStatusChange")]),t._v("即可】")]),t._v(" "),v("td",[t._v("当前触摸开始的屏幕点的y值(单位px)")])]),t._v(" "),v("tr",[v("td",[t._v("@refresherTouchmove")]),t._v(" "),v("td",[t._v("自定义下拉刷新下拉中开始"),v("p",{staticStyle:{color:"red"}},[t._v("(use-custom-refresher为true时生效)")]),t._v("【注：当需要更细致定制自定义下拉刷新时使用，如果只需监听下拉刷新各个状态改变，使用"),v("code",[t._v("refresherStatusChange")]),t._v("即可】")]),t._v(" "),v("td",[t._v("当前需要下拉的距离(单位px)")])]),t._v(" "),v("tr",[v("td",[t._v("@refresherTouchend")]),t._v(" "),v("td",[t._v("自定义下拉刷新下拉结束"),v("p",{staticStyle:{color:"red"}},[t._v("(use-custom-refresher为true时生效)")]),t._v("【注：当需要更细致定制自定义下拉刷新时使用，如果只需监听下拉刷新各个状态改变，使用"),v("code",[t._v("refresherStatusChange")]),t._v("即可】")]),t._v(" "),v("td",[t._v("当前触摸结束分页内容下移的y值(单位px)")])]),t._v(" "),v("tr",[v("td",[t._v("@onRefresh")]),t._v(" "),v("td",[t._v("自定义下拉刷新被触发")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("@onRestore")]),t._v(" "),v("td",[t._v("自定义下拉刷新被复位")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("@scroll")]),t._v(" "),v("td",[v("code",[t._v("z-paging")]),t._v("内置的scroll-view滚动时触发")]),t._v(" "),v("td",[t._v("event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}")])]),t._v(" "),v("tr",[v("td",[t._v("@scrollTopChange")]),t._v(" "),v("td",[t._v("scrollTop改变时触发，使用点击返回顶部时需要获取scrollTop时可使用此事件【注：通过"),v("code",[t._v(":scroll-top.sync")]),t._v("绑定当前data中的指定变量亦可】"),v("p",{staticStyle:{color:"red"}},[t._v("(@scrolltoupper触发时，也会自动触发此方法，且scrollTop=0)")])]),t._v(" "),v("td",[t._v("scrollTop")])]),t._v(" "),v("tr",[v("td",[t._v("@scrolltolower")]),t._v(" "),v("td",[v("code",[t._v("z-paging")]),t._v("内置的scroll-view滚动底部时触发")]),t._v(" "),v("td",[t._v("来源("),v("code",[t._v("toBottom")]),t._v("滚动到底部；"),v("code",[t._v("click")]),t._v("点击了加载更多view)")])]),t._v(" "),v("tr",[v("td",[t._v("@scrolltoupper")]),t._v(" "),v("td",[v("code",[t._v("z-paging")]),t._v("内置的scroll-view滚动顶部时触发")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("@listChange")]),t._v(" "),v("td",[t._v("分页渲染的数组改变时触发")]),t._v(" "),v("td",[t._v("最终的分页数据数组")])]),t._v(" "),v("tr",[v("td",[t._v("@emptyViewReload")]),t._v(" "),v("td",[t._v("点击了空数据图中的重新加载按钮")]),t._v(" "),v("td",[t._v("点击重新加载后是否进行reload操作，默认为是。"),v("br"),t._v("如果需要禁止reload事件，则在page的methods中书写："),v("p",{staticStyle:{"font-weight":"bold"}},[t._v("emptyViewReload(e){"),v("br"),t._v(" e(false);"),v("br"),t._v("  //处理自己的业务逻辑"),v("br"),t._v("}")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);