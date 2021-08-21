"use strict";(self.webpackChunkz_paging_doc=self.webpackChunkz_paging_doc||[]).push([[220],{289:(t,e,n)=>{n.r(e),n.d(e,{data:()=>d});const d={key:"v-95cc75f2",path:"/api/props/z-index.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"z-index配置",slug:"z-index配置",children:[]}],filePathRelative:"api/props/z-index.md",git:{}}},763:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});const d=(0,n(6252).uE)('<h3 id="z-index配置" tabindex="-1"><a class="header-anchor" href="#z-index配置" aria-hidden="true">#</a> z-index配置</h3><div class="custom-container tip"><p class="custom-container-title">说明</p><ul><li><p>z-index仅同级view才会相互影响，以下参数对应的view的层级结构如下：</p><blockquote><p>z-paging</p><blockquote><p>top-z-index super-content-z-index</p><blockquote><p>content-z-index empty-view-z-index</p></blockquote></blockquote></blockquote></li><li><p>这意味着<code>top-z-index</code>和<code>super-content-z-index</code>会相互影响；<code>content-z-index</code>和<code>empty-view-z-index</code>会相互影响。</p></li></ul></div><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">可选值</th></tr></thead><tbody><tr><td style="text-align:center;">top-z-index</td><td style="text-align:center;">slot=&quot;top&quot;的view的z-index，仅使用页面滚动时有效</td><td style="text-align:center;">Number</td><td style="text-align:center;">99</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">super-content-z-index</td><td style="text-align:center;">z-paging内容容器父view的z-index</td><td style="text-align:center;">Number</td><td style="text-align:center;">1</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">content-z-index</td><td style="text-align:center;">z-paging内容容器部分的z-index</td><td style="text-align:center;">Number</td><td style="text-align:center;">10</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">empty-view-z-index</td><td style="text-align:center;">空数据view的z-index</td><td style="text-align:center;">Number</td><td style="text-align:center;">9</td><td style="text-align:center;">-</td></tr></tbody></table>',3),i={render:function(t,e){return d}}}}]);