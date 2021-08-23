"use strict";(self.webpackChunkz_paging_doc=self.webpackChunkz_paging_doc||[]).push([[29],{3523:(t,e,r)=>{r.r(e),r.d(e,{data:()=>l});const l={key:"v-2c94f85e",path:"/api/props/refresher.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"下拉刷新配置",slug:"下拉刷新配置",children:[]}],filePathRelative:"api/props/refresher.md",git:{updatedTime:1629561936e3}}},9789:(t,e,r)=>{r.r(e),r.d(e,{default:()=>n});const l=(0,r(6252).uE)('<h3 id="下拉刷新配置" tabindex="-1"><a class="header-anchor" href="#下拉刷新配置" aria-hidden="true">#</a> 下拉刷新配置</h3><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">可选值</th></tr></thead><tbody><tr><td style="text-align:center;">refresher-enabled</td><td style="text-align:center;">是否开启下拉刷新</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">refresher-threshold</td><td style="text-align:center;">设置自定义下拉刷新阈值，默认单位为px。<p style="color:red;">(支持传100、&quot;100px&quot;或&quot;100rpx&quot;)(nvue无效)</p></td><td style="text-align:center;">Number|String</td><td style="text-align:center;">80rpx</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-only</td><td style="text-align:center;">是否只使用下拉刷新，设置为true后将关闭mounted自动请求数据、关闭滚动到底部加载更多，强制隐藏空数据图</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">use-custom-refresher</td><td style="text-align:center;">是否使用自定义的下拉刷新，默认为是，即使用z-paging的下拉刷新。设置为false即代表使用uni scroll-view自带的下拉刷新，h5、App、微信小程序以外的平台不支持uni scroll-view自带的下拉刷新</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">h5、App、微信小程序以外的平台设置为false时，无法使用下拉刷新</td></tr><tr><td style="text-align:center;">refresher-theme-style</td><td style="text-align:center;">下拉刷新的主题样式，支持black，white</td><td style="text-align:center;">String</td><td style="text-align:center;">black</td><td style="text-align:center;">white</td></tr><tr><td style="text-align:center;">refresher-img-style</td><td style="text-align:center;">自定义下拉刷新左侧图标的样式</td><td style="text-align:center;">Object</td><td style="text-align:center;">{}</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-title-style</td><td style="text-align:center;">自定义下拉刷新右侧状态描述文字的样式</td><td style="text-align:center;">Object</td><td style="text-align:center;">{}</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-update-time-style</td><td style="text-align:center;">自定义下拉刷新右侧最后更新时间文字的样式<p style="color:red;">(show-refresher-update-time为true时有效)</p></td><td style="text-align:center;">Object</td><td style="text-align:center;">{}</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">show-refresher-update-time</td><td style="text-align:center;">是否显示最后更新时间</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">refresher-update-time-key</td><td style="text-align:center;">如果需要区别不同页面的最后更新时间，请为不同页面的z-paging的<code>refresher-update-time-key</code>设置不同的字符串</td><td style="text-align:center;">String</td><td style="text-align:center;">default</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-default-text</td><td style="text-align:center;">自定义下拉刷新默认状态下的文字(use-custom-refresher为true时生效)<p style="color:red;">(支持直接传字符串或形如：{&#39;en&#39;:&#39;英文配置&#39;:&#39;zh-cn&#39;:&#39;中文配置&#39;}的i18n配置)</p></td><td style="text-align:center;">String|Object</td><td style="text-align:center;">继续下拉刷新</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-pulling-text</td><td style="text-align:center;">自定义下拉刷新松手立即刷新状态下的文字(use-custom-refresher为true时生效)<p style="color:red;">(支持直接传字符串或形如：{&#39;en&#39;:&#39;英文配置&#39;:&#39;zh-cn&#39;:&#39;中文配置&#39;}的i18n配置)</p></td><td style="text-align:center;">String|Object</td><td style="text-align:center;">松开立即刷新</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-refreshing-text</td><td style="text-align:center;">自定义下拉刷新刷新中状态下的文字(use-custom-refresher为true时生效)<p style="color:red;">(支持直接传字符串或形如：{&#39;en&#39;:&#39;英文配置&#39;:&#39;zh-cn&#39;:&#39;中文配置&#39;}的i18n配置)</p></td><td style="text-align:center;">String|Object</td><td style="text-align:center;">正在刷新...</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-end-bounce-enabled</td><td style="text-align:center;">是否开启自定义下拉刷新刷新结束回弹效果<p style="color:red;">(use-custom-refresher为true时生效)</p></td><td style="text-align:center;">Boolean</td><td style="text-align:center;">true</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">refresher-default-style</td><td style="text-align:center;">设置系统下拉刷新默认样式，支持设置 black，white，none，none 表示不使用默认样式</td><td style="text-align:center;">String</td><td style="text-align:center;">black</td><td style="text-align:center;">white、none</td></tr><tr><td style="text-align:center;">refresher-background</td><td style="text-align:center;">设置自定义下拉刷新区域背景颜色</td><td style="text-align:center;">String</td><td style="text-align:center;">#FFFFFF00(透明)</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-fixed-background</td><td style="text-align:center;">设置固定的自定义下拉刷新区域背景颜色</td><td style="text-align:center;">String</td><td style="text-align:center;">#FFFFFF00(透明)</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-fixed-bac-height</td><td style="text-align:center;">设置固定的自定义下拉刷新区域高度</td><td style="text-align:center;">Number|String</td><td style="text-align:center;">0</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-out-rate</td><td style="text-align:center;">设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例，范围0-1，值越大代表衰减越多。<p style="color:red;">(nvue无效)</p></td><td style="text-align:center;">Number</td><td style="text-align:center;">0.7</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-fps</td><td style="text-align:center;">自定义下拉刷新下拉帧率，默认为40，过高可能会出现抖动问题<p style="color:red;">(use-custom-refresher为true时生效)</p></td><td style="text-align:center;">Number|String</td><td style="text-align:center;">40</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">refresher-max-angle</td><td style="text-align:center;">自定义下拉刷新允许触发的最大下拉角度，默认为40度，当下拉角度小于设定值时，自定义下拉刷新动画不会被触发。<p style="color:red;">(值小于0或大于90时，代表不受角度限制)</p></td><td style="text-align:center;">Number|String</td><td style="text-align:center;">40</td><td style="text-align:center;">0-90</td></tr><tr><td style="text-align:center;">refresher-angle-enable-change-continued</td><td style="text-align:center;">自定义下拉刷新的角度由未达到最大角度变到达到最大角度时，是否继续下拉刷新手势</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">true</td></tr></tbody></table>',2),n={render:function(t,e){return l}}}}]);