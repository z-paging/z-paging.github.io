(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{420:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),s("h2",{attrs:{id:"为什么z-paging盖住了我页面上的其他view或下拉刷新被其他view盖住"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么z-paging盖住了我页面上的其他view或下拉刷新被其他view盖住"}},[t._v("#")]),t._v(" 为什么z-paging盖住了我页面上的其他view或下拉刷新被其他view盖住？")]),t._v(" "),s("p",[t._v("在默认情况下，z-paging是铺满全屏的，它会盖住z-paging标签外的其他view。因此您可以将页面中的所有view放在z-paging标签内，需要固定在页面顶部不跟着列表滚动的view(包括自定义导航栏)放在"),s("code",[t._v('slot="top"')]),t._v("内，固定底部的放在"),s("code",[t._v('slot="bottom"')]),t._v("内，注意放在"),s("code",[t._v('slot="top"')]),t._v("和"),s("code",[t._v('slot="bottom"')]),t._v("内的view不要设置style："),s("code",[t._v("position: fixed")]),t._v("；"),s("br"),t._v("\n如果您希望z-paging不铺满屏幕，高度跟随内容高度，可以设置页面滚动"),s("code",[t._v("use-page-scroll")]),t._v("，注意页面滚动时要引入mixins，详情请"),s("RouterLink",{attrs:{to:"/start/use.html#使用页面滚动示例"}},[t._v("点击这里")]),t._v("；"),s("br"),t._v("\n您也可以设置"),s("code",[t._v(':fixed="false"')]),t._v("来取消z-paging铺满全屏，但是这时候z-paging依然是局部滚动，和"),s("code",[t._v("scroll-view")]),t._v("一样，您必须为z-paging或z-paging的父容器指定确定的高度，设置z-paging高度时可以通过"),s("code",[t._v('height="100px"')]),t._v("或"),s("code",[t._v(":paging-style=\"{height: '100px'}\"")]),t._v("，不要直接通过class或style设置高度，因为在微信小程序中，这样给组件设置样式是无效的。")],1),t._v(" "),s("h2",{attrs:{id:"为什么我无法进行下拉刷新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么我无法进行下拉刷新"}},[t._v("#")]),t._v(" 为什么我无法进行下拉刷新？")]),t._v(" "),s("p",[t._v("在默认情况下，z-paging组件加载时会自动触发"),s("code",[t._v("queryList")]),t._v("，请确保您在"),s("code",[t._v("queryList")]),t._v("中调用了z-paging的"),s("code",[t._v("complete")]),t._v("方法，因为为了避免数据错乱，每次触发"),s("code",[t._v("queryList")]),t._v("后都必须调用"),s("code",[t._v("complete")]),t._v("才允许下次的分页（下拉刷新、滚动到底部加载更多）操作。")]),t._v(" "),s("h2",{attrs:{id:"为什么页面滚动-use-page-scroll-的时候-滚动到底部不会加载更多-并且在任何位置下拉都触发了下拉刷新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么页面滚动-use-page-scroll-的时候-滚动到底部不会加载更多-并且在任何位置下拉都触发了下拉刷新"}},[t._v("#")]),t._v(" 为什么页面滚动(use-page-scroll)的时候，滚动到底部不会加载更多，并且在任何位置下拉都触发了下拉刷新？")]),t._v(" "),s("p",[t._v("必须引入"),s("code",[t._v("mixins")]),t._v("，详情请"),s("RouterLink",{attrs:{to:"/start/use.html#使用页面滚动示例"}},[t._v("点击这里")])],1),t._v(" "),s("h2",{attrs:{id:"为什么我复制demo中的代码在我的项目中提示typeerror-cannot-read-properties-of-undefined-reading-querylist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么我复制demo中的代码在我的项目中提示typeerror-cannot-read-properties-of-undefined-reading-querylist"}},[t._v("#")]),t._v(" 为什么我复制demo中的代码在我的项目中提示TypeError: Cannot read properties of undefined (reading 'queryList')？")]),t._v(" "),s("p",[t._v("因为demo中的"),s("code",[t._v("this.$request.queryList")]),t._v("中的"),s("code",[t._v("this.$request")]),t._v("，这个是demo中测试用的请求，您的项目中不存在它，请更换为您项目中的请求。")]),t._v(" "),s("h2",{attrs:{id:"为什么slot-top-内的picker、popup、dropdown会被z-paging列表的cell盖住"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么slot-top-内的picker、popup、dropdown会被z-paging列表的cell盖住"}},[t._v("#")]),t._v(' 为什么slot="top"内的picker、popup、dropdown会被z-paging列表的cell盖住？')]),t._v(" "),s("p",[t._v("因为z-paging中的内容z-index默认为10，如果其他弹窗遮罩的z-index小于这个值则会被盖住，可以通过"),s("code",[t._v(':content-z-index="1"')]),t._v("来降低列表内容的z-index以解决此问题。")]),t._v(" "),s("h2",{attrs:{id:"为什么z-paging在我的项目中无法下拉刷新"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么z-paging在我的项目中无法下拉刷新"}},[t._v("#")]),t._v(" 为什么z-paging在我的项目中无法下拉刷新？")]),t._v(" "),s("p",[t._v("因为z-paging的"),s("code",[t._v("complete")]),t._v("方法没有调用，z-paging组件加载时会自动触发刷新，"),s("code",[t._v("complete")]),t._v("方法代表刷新结束，因此必须在"),s("code",[t._v("@query")]),t._v("的函数中调用"),s("code",[t._v("complete")]),t._v("，才允许进行下次的下拉刷新。")]),t._v(" "),s("h2",{attrs:{id:"为什么在nvue中-v-model绑定的数据源有数据-但是列表却空白-没有渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么在nvue中-v-model绑定的数据源有数据-但是列表却空白-没有渲染"}},[t._v("#")]),t._v(" 为什么在nvue中，"),s("code",[t._v("v-model")]),t._v("绑定的数据源有数据，但是列表却空白，没有渲染？")]),t._v(" "),s("p",[t._v("因为在nvue中，z-paging内置默认使用的是"),s("code",[t._v("list")]),t._v("组件，因此z-paging的子组件必须是"),s("code",[t._v("<cell />")]),t._v("或"),s("code",[t._v("<z-paging-cell />")])]),t._v(" "),s("h2",{attrs:{id:"为什么在nvue中-第一页可以正常滚动到底部加载更多-第二页滚动到底部的时候显示-点击加载更多"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么在nvue中-第一页可以正常滚动到底部加载更多-第二页滚动到底部的时候显示-点击加载更多"}},[t._v("#")]),t._v(' 为什么在nvue中，第一页可以正常滚动到底部加载更多，第二页滚动到底部的时候显示"点击加载更多"？')]),t._v(" "),s("p",[t._v("在nvue中，z-paging默认会被渲染为"),s("code",[t._v("<list />")]),t._v("标签("),s("span",{staticStyle:{fontWeight:"bold"}},[t._v("使用list组件的性能高于使用view或scroll-view的滚动。原因在于list在不可见部分的渲染资源回收有特殊的优化处理")]),t._v(")，因此此时z-paging中的view必须是"),s("code",[t._v("<cell />")]),t._v("、"),s("code",[t._v("<header />")]),t._v("等"),s("code",[t._v("<list />")]),t._v("独有的子组件，"),s("span",{staticStyle:{fontWeight:"bold",color:"red"}},[t._v("且v-for必须写在cell标签上")]),t._v("。"),s("br"),s("span",{staticStyle:{fontWeight:"bold"}},[t._v("ps："),s("code",[t._v("<cell />")]),t._v("仅可用于nvue，"),s("code",[t._v(".nvue")]),t._v("结尾的文件在非app平台将被编译为"),s("code",[t._v(".vue")]),t._v("；若需要在nvue中渲染为"),s("code",[t._v("<cell />")]),t._v("，在vue中渲染为"),s("code",[t._v("<view />")]),t._v("，则可以使用"),s("code",[t._v("<z-paging-cell />")]),t._v("标签")]),s("br"),t._v("\n写法示例👇🏻")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("z-paging")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("paging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dataList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@query")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("queryList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("cell")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-for")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("(item,index) in dataList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":key")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("itemClick(item)"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("item-title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{item.title}}"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("cell")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("z-paging")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"为什么z-paging列表在h5和app平台中可以显示-但是在微信小程序中一片空白"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么z-paging列表在h5和app平台中可以显示-但是在微信小程序中一片空白"}},[t._v("#")]),t._v(" 为什么z-paging列表在h5和app平台中可以显示，但是在微信小程序中一片空白？")]),t._v(" "),s("p",[t._v("可能是因为给z-paging设置了"),s("code",[t._v(':fixed="false"')]),t._v("，此时z-paging不是铺满全屏的，这时候它需要有确定的高度。您可能是通过style或者class设置了高度，这在微信小程序中是无效的，请通过"),s("code",[t._v('height="100px"')]),t._v("或"),s("code",[t._v(":paging-style=\"{height: '100px'}\"")]),t._v("进行设置，或给z-paging的父容器设置确定的高度。")]),t._v(" "),s("h2",{attrs:{id:"为什么z-paging看不到底部的正在加载和没有更多了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么z-paging看不到底部的正在加载和没有更多了"}},[t._v("#")]),t._v(" 为什么z-paging看不到底部的正在加载和没有更多了？")]),t._v(" "),s("p",[t._v("可能是因为自定义了tabbar，如果是自定义tabbar则需要将自定义的tabbar放在z-paging标签内并且设置"),s("code",[t._v('slot="bottom"')]),t._v("，如果不想放进去，也可以在"),s("code",[t._v('slot="bottom"')]),t._v("放一个和tabbar等高的占位view。")]),t._v(" "),s("h2",{attrs:{id:"在支付宝或钉钉小程序中-为什么有时候无法进行下拉刷新-在其他平台正常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在支付宝或钉钉小程序中-为什么有时候无法进行下拉刷新-在其他平台正常"}},[t._v("#")]),t._v(" 在支付宝或钉钉小程序中，为什么有时候无法进行下拉刷新，在其他平台正常？")]),t._v(" "),s("p",[t._v("在支付宝和钉钉小程序中，必须在"),s("code",[t._v("pages.json")]),t._v("中进行如下设置：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以下代码可以写在globalStyle中或特定页面的style中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//支付宝和钉钉小程序需要取消回弹效果")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mp-alipay"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"allowsBounceVertical"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NO"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"为什么在ios中有时候若列表滚动到最底部后继续往上拉-列表会被锁住3-5秒无法滚动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么在ios中有时候若列表滚动到最底部后继续往上拉-列表会被锁住3-5秒无法滚动"}},[t._v("#")]),t._v(" 为什么在iOS中有时候若列表滚动到最底部后继续往上拉，列表会被锁住3-5秒无法滚动？")]),t._v(" "),s("p",[t._v("这是因为系统内置的bounce导致的，请在"),s("code",[t._v("pages.json")]),t._v("中进行如下设置：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//以下代码可以写在globalStyle中或特定页面的style中")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"app-plus"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//禁用bounce")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bounce"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"为什么监听页面事件-onpagescroll、onreachbottom等无效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么监听页面事件-onpagescroll、onreachbottom等无效"}},[t._v("#")]),t._v(" 为什么监听页面事件：onPageScroll、onReachBottom等无效？")]),t._v(" "),s("p",[t._v("默认情况下，z-paging铺满全屏并局部滚动的，因此不会触发相关页面事件，可以通过"),s("code",[t._v("@scroll")]),t._v("监听滚动事件，通过"),s("code",[t._v("@scrolltolower")]),t._v("监听滚动到底部事件。")]),t._v(" "),s("h2",{attrs:{id:"为什么滚动到底部加载更多时-数据没有拼接在一起-而是覆盖了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么滚动到底部加载更多时-数据没有拼接在一起-而是覆盖了"}},[t._v("#")]),t._v(" 为什么滚动到底部加载更多时，数据没有拼接在一起，而是覆盖了？")]),t._v(" "),s("p",[t._v("在queryList中，请求结束后请勿给z-paging中"),s("code",[t._v("v-model")]),t._v("绑定的list赋值，直接"),s("code",[t._v("this.$refs.paging.complete(求结果数组)")]),t._v("即可，"),s("code",[t._v("v-model")]),t._v("绑定的list请不要在"),s("code",[t._v("queryList")]),t._v("中自己赋值。")]),t._v(" "),s("h2",{attrs:{id:"为什么当列表总数据长度是10的倍数-比如10、20、30时-最后会请求一次返回了空数组才显示没有更多数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么当列表总数据长度是10的倍数-比如10、20、30时-最后会请求一次返回了空数组才显示没有更多数据"}},[t._v("#")]),t._v(" 为什么当列表总数据长度是10的倍数，比如10、20、30时，最后会请求一次返回了空数组才显示没有更多数据？")]),t._v(" "),s("p",[t._v("z-paging中"),s("code",[t._v("complete")]),t._v("方法中默认判断有无更多数据的规则是：当"),s("code",[t._v("complete")]),t._v("中参数的数组长度小于"),s("code",[t._v("pageSize")]),t._v("即判断为没有更多数据，当列表总数为10是，因为第一页请求返回的数组长度为10，不小于"),s("code",[t._v("pageSize")]),t._v("，则允许加载更多，第二页请求返回0条数据，才展示没有更多。"),s("br"),t._v("\n您可以通过"),s("code",[t._v("completeByTotal(请求结果数组，列表总长度)")]),t._v("来代替"),s("code",[t._v("complete")]),t._v("，则可以通过total来判断有无更多数据。")]),t._v(" "),s("h2",{attrs:{id:"为什么滚动到底部加载更多可以不断触发-后面每页数据都是重复的-或明明有下一页数据-但是底部显示-没有更多了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么滚动到底部加载更多可以不断触发-后面每页数据都是重复的-或明明有下一页数据-但是底部显示-没有更多了"}},[t._v("#")]),t._v(' 为什么滚动到底部加载更多可以不断触发，后面每页数据都是重复的？或明明有下一页数据，但是底部显示"没有更多了"?')]),t._v(" "),s("p",[t._v("z-paging中"),s("code",[t._v("complete")]),t._v("方法中默认判断有无更多数据的规则是：当"),s("code",[t._v("complete")]),t._v("中参数的数组长度小于"),s("code",[t._v("pageSize")]),t._v("即判断为没有更多数据，当列表总数为10是，因为第一页请求返回的数组长度为10，不小于"),s("code",[t._v("pageSize")]),t._v("，则允许加载更多，第二页请求返回0条数据，才展示没有更多。"),s("br"),t._v("\n有些后端返回分页数据规则是没有对应页面的数据时返回第一页数据，因此无法自动判断是否已经没有更多数据了。"),s("br"),t._v("\n您可以通过"),s("code",[t._v("completeByTotal(请求结果数组，列表总长度)")]),t._v("来代替"),s("code",[t._v("complete")]),t._v("，则可以通过total来判断有无更多数据。")]),t._v(" "),s("h2",{attrs:{id:"为什么我给z-paging的父容器设置背景色无效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么我给z-paging的父容器设置背景色无效"}},[t._v("#")]),t._v(" 为什么我给z-paging的父容器设置背景色无效？")]),t._v(" "),s("p",[t._v("默认情况下，z-paging使用的是"),s("code",[t._v("position: fixed")]),t._v("，脱离了文档流，因此它的父容器高度为0，不会被z-paging撑开，此时给它设置背景色是无效的。"),s("br"),t._v("\n请设置page的背景色或使用"),s("code",[t._v(":paging-style=\"{'background-color':'red'}\"")]),t._v("或"),s("code",[t._v('bg-color="red"')])]),t._v(" "),s("h2",{attrs:{id:"为什么我使用uview1-x的u-waterfall-下拉刷新时候之前滚动底部加载更多的数据没有被重置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么我使用uview1-x的u-waterfall-下拉刷新时候之前滚动底部加载更多的数据没有被重置"}},[t._v("#")]),t._v(" 为什么我使用uview1.x的u-waterfall，下拉刷新时候之前滚动底部加载更多的数据没有被重置？")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("u-waterfall")]),t._v("中，如果是下拉刷新等重置列表的行为，需要调用"),s("code",[t._v("u-waterfall")]),t._v("的"),s("code",[t._v("clear")]),t._v("方法对其内部旧数据进行重置")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pageNo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pageSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pageNo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果是第一页，则调用u-waterfall的clear方法，注意这里不一定是pageNo === 1，需要根据具体起始pageNo进行修改")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//u-waterfall组件需要添加ref="uWaterfall"')]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uWaterfall"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h2",{attrs:{id:"为什么z-paging的querylist会触发两次"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么z-paging的querylist会触发两次"}},[t._v("#")]),t._v(" 为什么z-paging的queryList会触发两次？")]),t._v(" "),s("p",[t._v("您可能在"),s("code",[t._v("onLoad")]),t._v("或"),s("code",[t._v("onShow")]),t._v("中调用了"),s("code",[t._v("this.$refs.paging.reload()")]),t._v("，因为z-paging默认会在组件加载时触发"),s("code",[t._v("queryList")]),t._v("，同时在"),s("code",[t._v("reload()")]),t._v("方法被调用时也会触发"),s("code",[t._v("queryList")]),t._v("，此时您需要通过"),s("code",[t._v(':auto="false"')]),t._v("关闭默认的"),s("code",[t._v("queryList")]),t._v("触发即可。")]),t._v(" "),s("h2",{attrs:{id:"为什么在微信小程序中我将datalist赋值内子组件-子组件内的列表无法渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么在微信小程序中我将datalist赋值内子组件-子组件内的列表无法渲染"}},[t._v("#")]),t._v(" 为什么在微信小程序中我将dataList赋值内子组件，子组件内的列表无法渲染？")]),t._v(" "),s("p",[t._v("可能是传给子组件的props为使用驼峰命名，例如"),s("code",[t._v('<list :data-list="dataList" />')]),t._v("，请修改为"),s("code",[t._v('<list :dataList="dataList" />')]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"为什么在vue3中使用uview-plus时-滚动到顶部按钮点击无效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么在vue3中使用uview-plus时-滚动到顶部按钮点击无效"}},[t._v("#")]),t._v(" 为什么在vue3中使用uview-plus时，滚动到顶部按钮点击无效？")]),t._v(" "),s("p",[t._v("此为"),s("code",[t._v("uview-plus")]),t._v("的问题，您可以尝试在引入"),s("code",[t._v("uview-plus")]),t._v("的项目中写一个普通的scroll-view，并尝试通过js将其滚动到顶部，代码可参照uniapp官方："),s("a",{attrs:{href:"https://uniapp.dcloud.net.cn/component/scroll-view.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://uniapp.dcloud.net.cn/component/scroll-view.html"),s("OutboundLink")],1),t._v("，滚动到顶部同样失效，请与"),s("code",[t._v("uview-plus")]),t._v("开发者反馈。")]),t._v(" "),s("h2",{attrs:{id:"为什么在iphone-tabbar页面中-跳转到非tabbar页面后返回-底部有一段空白间距"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么在iphone-tabbar页面中-跳转到非tabbar页面后返回-底部有一段空白间距"}},[t._v("#")]),t._v(" 为什么在iPhone + tabbar页面中，跳转到非tabbar页面后返回，底部有一段空白间距")]),t._v(" "),s("p",[t._v("请在tabbar页面的"),s("code",[t._v("onShow")]),t._v("方法中手动更新一下布局(需要v2.6.5或以上版本)")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onShow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paging "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("paging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateFixedLayout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);