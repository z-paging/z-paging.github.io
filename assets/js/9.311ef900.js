(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{375:function(t,e,v){"use strict";v.r(e);var _=v(45),o=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"methods"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("调用方式")]),t._v(" "),v("p",[t._v('假设给z-paging设置ref="paging"，则通过'),v("code",[t._v("this.$refs.paging.xxx()")]),t._v("方式调用")])]),t._v(" "),v("div",{staticClass:"custom-block danger"},[v("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),v("p",[t._v("在Page的onLoad()方法中无法同步获取this.$refs，请加一个setTimeOut延时1毫秒或nextTick再调用(默认会在页面加载时自动调用reload()无须手动调用)")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("方法名")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("参数")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("reload")]),t._v(" "),v("td",[t._v("重新加载分页数据，pageNo恢复为默认值，相当于下拉刷新的效果")]),t._v(" "),v("td",[v("code",[t._v("参数1(非必填)")]),t._v(":(传true或false，默认为false)reload时是否展示下拉刷新动画，默认为否")])]),t._v(" "),v("tr",[v("td",[t._v("refresh "),v("Badge",{attrs:{text:"2.0.4"}})],1),t._v(" "),v("td",[t._v("刷新列表数据，pageNo和pageSize不会重置，列表数据会重新从服务端获取。"),v("p",{staticStyle:{color:"red"}},[t._v("(必须保证@query绑定的方法中的pageNo和pageSize和传给服务端的一致)")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("complete"),v("code",[t._v("或")]),v("br"),t._v("end "),v("Badge",{attrs:{text:"2.0.2"}})],1),t._v(" "),v("td",[t._v("请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理，会自动判断是否有更多数据。"),v("p",{staticStyle:{color:"red"}},[t._v("(全局错误处理：当请求失败时，也必须调用complete，可在封装的全局网络请求错误的地方书写："),v("code",[t._v("uni.$emit('z-paging-error-emit');")]),t._v("  即可将当前加载中状态的z-paging设置为请求失败状态，无需在每个页面中写"),v("code",[t._v("this.$refs.paging.complete(false)")]),t._v(")")])]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":请求结果数组；"),v("br"),v("code",[t._v("参数2(非必填)")]),t._v(":是否请求成功，不填默认为true。"),v("br"),v("p",{staticStyle:{color:"red"}},[t._v("请求失败时直接调用："),v("code",[t._v("this.$refs.paging.complete(false)")]),t._v("; 即可；如果只是想表达请求结束，则调用："),v("code",[t._v("this.$refs.paging.complete()")]),t._v("; 即可")])])]),t._v(" "),v("tr",[v("td",[t._v("completeByTotalCount "),v("Badge",{attrs:{text:"1.9.7"}}),t._v(" "),v("code",[t._v("或")]),v("br"),t._v("endByTotalCount "),v("Badge",{attrs:{text:"2.0.2"}})],1),t._v(" "),v("td",[t._v("【通过totalCount判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理")]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":请求结果数组；"),v("br"),v("code",[t._v("参数2(必填)")]),t._v(":totalCount(列表总数)"),v("br"),v("code",[t._v("参数3(非必填)")]),t._v(":是否请求成功，不填默认为true")])]),t._v(" "),v("tr",[v("td",[t._v("completeByNoMore "),v("Badge",{attrs:{text:"1.9.2"}}),t._v(" "),v("code",[t._v("或")]),v("br"),t._v("endByNoMore "),v("Badge",{attrs:{text:"2.0.2"}})],1),t._v(" "),v("td",[t._v("【自行判断是否有更多数据】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理")]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":请求结果数组；"),v("br"),v("code",[t._v("参数2(必填)")]),t._v(":是否有更多数据，若为true则可以继续滚动到底部加载更多，但如果在某个时刻参数1传入了空数组，也代表着没有更多数据了；"),v("br"),v("code",[t._v("参数3(非必填)")]),t._v(":是否请求成功，不填默认为true")])]),t._v(" "),v("tr",[v("td",[t._v("completeByKey "),v("Badge",{attrs:{text:"1.6.4"}}),t._v(" "),v("code",[t._v("或")]),v("br"),t._v("endByKey "),v("Badge",{attrs:{text:"2.0.2"}})],1),t._v(" "),v("td",[t._v("【保证数据一致】请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging处理"),v("p",{staticStyle:{color:"red"}},[t._v("(关于数据一致性，请查看demo中"),v("code",[t._v("consistency-demo.vue")]),t._v("文件)")])]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":请求结果数组；"),v("br"),v("code",[t._v("参数2(必填)")]),t._v(":dataKey，需与:data-key绑定的一致；"),v("br"),v("code",[t._v("参数3(非必填)")]),t._v(":是否请求成功，不填默认为true")])]),t._v(" "),v("tr",[v("td",[t._v("clean "),v("Badge",{attrs:{text:"1.6.7"}})],1),t._v(" "),v("td",[t._v("清空分页数据，pageNo恢复为默认值。")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("setLocalPaging")]),t._v(" "),v("td",[t._v("设置本地分页，请求结束(成功或者失败)调用此方法，将请求的结果传递给z-paging作分页处理"),v("p",{staticStyle:{color:"red"}},[t._v("（若调用了此方法，则上拉加载更多时内部会自动分页，不会触发@query所绑定的事件）")])]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":请求结果数组；"),v("br"),v("code",[t._v("参数2(非必填)")]),t._v(":是否请求成功，不填默认为true")])]),t._v(" "),v("tr",[v("td",[t._v("doLoadMore")]),t._v(" "),v("td",[t._v("手动触发上拉加载更多(非必须，可依据具体需求使用，例如当z-paging未确定高度时，内部的scroll-view会无限增高，此时z-paging无法得知是否滚动到底部，您可以在页面的"),v("code",[t._v("onReachBottom")]),t._v("中手动调用此方法触发上拉加载更多) "),v("p",{staticStyle:{color:"red"}},[t._v("ps:"),v("code",[t._v("use-page-scroll")]),t._v("需要设置为true")])]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("doChatRecordLoadMore")]),t._v(" "),v("td",[t._v("手动触发滚动到顶部加载更多，聊天记录模式时有效")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("scrollToTop")]),t._v(" "),v("td",[t._v("滚动到顶部")]),t._v(" "),v("td",[v("code",[t._v("参数1(非必填)")]),t._v(":是否有动画效果，默认为是")])]),t._v(" "),v("tr",[v("td",[t._v("scrollToBottom")]),t._v(" "),v("td",[t._v("滚动到底部")]),t._v(" "),v("td",[v("code",[t._v("参数1(非必填)")]),t._v(":是否有动画效果，默认为是")])]),t._v(" "),v("tr",[v("td",[t._v("scrollIntoViewById")]),t._v(" "),v("td",[t._v("滚动到指定view"),v("p",{staticStyle:{color:"red"}},[t._v("(vue中有效，若此方法无效，请使用"),v("code",[t._v("scrollIntoViewByNodeTop")]),t._v(")")])]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v('需要滚动的view的id值，不包含"#"；'),v("br"),v("code",[t._v("参数2(非必填)")]),t._v(":偏移量，单位为px，默认为0；"),v("br"),v("code",[t._v("参数3(非必填)")]),t._v(":是否有动画效果，默认为否")])]),t._v(" "),v("tr",[v("td",[t._v("scrollIntoViewByNodeTop "),v("Badge",{attrs:{text:"1.7.4"}})],1),t._v(" "),v("td",[t._v("滚动到指定view"),v("p",{staticStyle:{color:"red"}},[t._v("(vue中有效)")])]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":需要滚动的view的top值(通过uni.createSelectorQuery()获取)；"),v("br"),v("code",[t._v("参数2(非必填)")]),t._v(":偏移量，单位为px，默认为0；"),v("br"),v("code",[t._v("参数3(非必填)")]),t._v(":是否有动画效果，默认为否")])]),t._v(" "),v("tr",[v("td",[t._v("scrollIntoViewByIndex")]),t._v(" "),v("td",[t._v("滚动到指定view"),v("p",{staticStyle:{color:"red"}},[t._v('(nvue中有效)(在nvue中的cell必须设置 :ref="'),v("code",[t._v("z-paging-${index}")]),t._v('")')])]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":需要滚动的view的index(第几个)；"),v("br"),v("code",[t._v("参数2(非必填)")]),t._v(":偏移量，单位为px，默认为0；"),v("br"),v("code",[t._v("参数3(非必填)")]),t._v(":是否有动画效果，默认为否")])]),t._v(" "),v("tr",[v("td",[t._v("scrollIntoViewByView")]),t._v(" "),v("td",[t._v("滚动到指定view"),v("p",{staticStyle:{color:"red"}},[t._v("(nvue中有效)")])]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":需要滚动的view(通过"),v("code",[t._v("this.$refs.xxx")]),t._v("获取)；"),v("br"),v("code",[t._v("参数2(非必填)")]),t._v(":偏移量，单位为px，默认为0；"),v("br"),v("code",[t._v("参数3(非必填)")]),t._v(":是否有动画效果，默认为否")])]),t._v(" "),v("tr",[v("td",[t._v("updatePageScrollTop")]),t._v(" "),v("td",[t._v("当使用页面滚动(z-paging不固定高度)并且自定义下拉刷新时，请在页面的onPageScroll中调用此方法，告知z-paging当前的pageScrollTop，否则会导致在任意位置都可以下拉刷新")]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":从page的onPageScroll中获取的scrollTop")])]),t._v(" "),v("tr",[v("td",[t._v("updatePageScrollTopHeight")]),t._v(" "),v("td",[t._v('在nvue中或使用页面滚动并且设置了slot="top"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="top"的view高度动态改变时，在其高度需要更新时调用此方法')]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("updatePageScrollBottomHeight")]),t._v(" "),v("td",[t._v('在nvue中或使用页面滚动并且设置了slot="bottom"时，默认初次加载会自动获取其高度，并使内部容器下移，当slot="bottom"的view高度动态改变时，在其高度需要更新时调用此方法')]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("addChatRecordData")]),t._v(" "),v("td",[t._v("添加聊天记录，"),v("code",[t._v("use-chat-record-mode")]),t._v("为true时有效")]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":需要添加的聊天数据，可以是一条数据或一组数据；"),v("br"),v("code",[t._v("参数2(非必填)")]),t._v(":是否滚动到底部，不填默认为true；"),v("br"),v("code",[t._v("参数3(非必填)")]),t._v(":是否使用动画滚动到底部，不填默认为true")])]),t._v(" "),v("tr",[v("td",[t._v("addDataFromTop")]),t._v(" "),v("td",[t._v("从顶部添加数据，不会影响分页的pageNo和pageSize")]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":需要添加的数据，可以是一条数据或一组数据；"),v("br"),v("code",[t._v("参数2(非必填)")]),t._v(":是否滚动到顶部，不填默认为true；"),v("br"),v("code",[t._v("参数3(非必填)")]),t._v(":是否使用动画滚动到顶部，不填默认为true")])]),t._v(" "),v("tr",[v("td",[t._v("resetTotalData "),v("Badge",{attrs:{text:"不推荐",type:"error"}})],1),t._v(" "),v("td",[v("p",{staticStyle:{color:"red"}},[t._v("(建议使用v-model代替:list.sync，则无需调用此方法)")]),t._v("重新设置列表数据，调用此方法不会影响pageNo和pageSize，也不会触发请求。适用场景：当需要删除列表中某一项时，将删除对应项后的数组通过此方法传递给z-paging。")]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":修改后的列表数组")])]),t._v(" "),v("tr",[v("td",[t._v("getVersion")]),t._v(" "),v("td",[t._v("获取当前版本号")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("setListSpecialEffects"),v("code",[t._v("或")]),v("br"),t._v("setSpecialEffects "),v("Badge",{attrs:{text:"2.0.4"}})],1),t._v(" "),v("td",[t._v("设置nvue List的specialEffects")]),t._v(" "),v("td",[v("code",[t._v("参数1(必填)")]),t._v(":参见"),v("a",{attrs:{href:"https://uniapp.dcloud.io/component/list?id=listsetspecialeffects",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://uniapp.dcloud.io/component/list?id=listsetspecialeffects"),v("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);