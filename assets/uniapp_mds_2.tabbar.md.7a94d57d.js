import{_ as a,y as n,x as s,W as t}from"./plugin-vue_export-helper.abe1cdd2.js";var e="/wechat_uniapp/assets/2-1.c4b93bc3.png";const q='{"title":"2. tabBar","description":"","frontmatter":{},"headers":[{"level":2,"title":"2.0 \u521B\u5EFA tabBar \u5206\u652F","slug":"_2-0-\u521B\u5EFA-tabbar-\u5206\u652F"},{"level":2,"title":"2.1 \u521B\u5EFA tabBar \u9875\u9762","slug":"_2-1-\u521B\u5EFA-tabbar-\u9875\u9762"},{"level":2,"title":"2.2 \u914D\u7F6E tabBar \u6548\u679C","slug":"_2-2-\u914D\u7F6E-tabbar-\u6548\u679C"},{"level":2,"title":"2.3 \u5220\u9664\u9ED8\u8BA4\u7684 index \u9996\u9875","slug":"_2-3-\u5220\u9664\u9ED8\u8BA4\u7684-index-\u9996\u9875"},{"level":2,"title":"2.4 \u4FEE\u6539\u5BFC\u822A\u6761\u7684\u6837\u5F0F\u6548\u679C","slug":"_2-4-\u4FEE\u6539\u5BFC\u822A\u6761\u7684\u6837\u5F0F\u6548\u679C"},{"level":2,"title":"2.5 \u5206\u652F\u7684\u63D0\u4EA4\u4E0E\u5408\u5E76","slug":"_2-5-\u5206\u652F\u7684\u63D0\u4EA4\u4E0E\u5408\u5E76"}],"relativePath":"uniapp/mds/2.tabbar.md","lastUpdated":1651408740848}',p={},o=t(`<h1 id="_2-tabbar" tabindex="-1">2. tabBar <a class="header-anchor" href="#_2-tabbar" aria-hidden="true">#</a></h1><h2 id="_2-0-\u521B\u5EFA-tabbar-\u5206\u652F" tabindex="-1">2.0 \u521B\u5EFA tabBar \u5206\u652F <a class="header-anchor" href="#_2-0-\u521B\u5EFA-tabbar-\u5206\u652F" aria-hidden="true">#</a></h2><p>\u8FD0\u884C\u5982\u4E0B\u7684\u547D\u4EE4\uFF0C\u57FA\u4E8E master \u5206\u652F\u5728\u672C\u5730\u521B\u5EFA tabBar \u5B50\u5206\u652F\uFF0C\u7528\u6765\u5F00\u53D1\u548C tabBar \u76F8\u5173\u7684\u529F\u80FD\uFF1A</p><div class="language-bash line-numbers-mode"><pre><code><span class="token function">git</span> checkout -b tabbar
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="_2-1-\u521B\u5EFA-tabbar-\u9875\u9762" tabindex="-1">2.1 \u521B\u5EFA tabBar \u9875\u9762 <a class="header-anchor" href="#_2-1-\u521B\u5EFA-tabbar-\u9875\u9762" aria-hidden="true">#</a></h2><p>\u5728 <code>pages</code> \u76EE\u5F55\u4E2D\uFF0C\u521B\u5EFA\u9996\u9875(home)\u3001\u5206\u7C7B(cate)\u3001\u8D2D\u7269\u8F66(cart)\u3001\u6211\u7684(my) \u8FD9 4 \u4E2A tabBar \u9875\u9762\u3002\u5728 HBuilderX \u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u7684\u4E24\u4E2A\u6B65\u9AA4\uFF0C\u5FEB\u901F\u65B0\u5EFA\u9875\u9762\uFF1A</p><ol><li><p>\u5728 <code>pages</code> \u76EE\u5F55\u4E0A\u9F20\u6807\u53F3\u952E\uFF0C\u9009\u62E9<strong>\u65B0\u5EFA\u9875\u9762</strong></p></li><li><p>\u5728\u5F39\u51FA\u7684\u7A97\u53E3\u4E2D\uFF0C\u586B\u5199<strong>\u9875\u9762\u7684\u540D\u79F0</strong>\u3001<strong>\u52FE\u9009 scss \u6A21\u677F</strong>\u4E4B\u540E\uFF0C\u70B9\u51FB\u521B\u5EFA\u6309\u94AE\u3002\u622A\u56FE\u5982\u4E0B\uFF1A</p><p><img src="`+e+`" alt=""></p></li></ol><h2 id="_2-2-\u914D\u7F6E-tabbar-\u6548\u679C" tabindex="-1">2.2 \u914D\u7F6E tabBar \u6548\u679C <a class="header-anchor" href="#_2-2-\u914D\u7F6E-tabbar-\u6548\u679C" aria-hidden="true">#</a></h2><ol><li><p>\u5C06 <code>\u8D44\u6599</code> \u76EE\u5F55\u4E0B\u7684 <code>static \u6587\u4EF6\u5939</code> \u62F7\u8D1D\u4E00\u4EFD\uFF0C\u66FF\u6362\u6389\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u7684 <code>static \u6587\u4EF6\u5939</code></p></li><li><p>\u4FEE\u6539\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u7684 <code>pages.json</code> \u914D\u7F6E\u6587\u4EF6\uFF0C\u65B0\u589E <code>tabBar</code> \u7684\u914D\u7F6E\u8282\u70B9\u5982\u4E0B\uFF1A</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;tabBar&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;selectedColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#C00000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/home/home&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9996\u9875&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/tab_icons/home.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/tab_icons/home-active.png&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/cate/cate&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u5206\u7C7B&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/tab_icons/cate.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/tab_icons/cate-active.png&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/cart/cart&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u8D2D\u7269\u8F66&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/tab_icons/cart.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/tab_icons/cart-active.png&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;pagePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pages/my/my&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u6211\u7684&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;iconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/tab_icons/my.png&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;selectedIconPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;static/tab_icons/my-active.png&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></li></ol><h2 id="_2-3-\u5220\u9664\u9ED8\u8BA4\u7684-index-\u9996\u9875" tabindex="-1">2.3 \u5220\u9664\u9ED8\u8BA4\u7684 index \u9996\u9875 <a class="header-anchor" href="#_2-3-\u5220\u9664\u9ED8\u8BA4\u7684-index-\u9996\u9875" aria-hidden="true">#</a></h2><ol><li><p>\u5728 HBuilderX \u4E2D\uFF0C\u628A <code>pages</code> \u76EE\u5F55\u4E0B\u7684 <code>index\u9996\u9875\u6587\u4EF6\u5939</code> \u5220\u9664\u6389</p></li><li><p>\u540C\u65F6\uFF0C\u628A <code>page.json</code> \u4E2D\u8BB0\u5F55\u7684 <code>index \u9996\u9875</code> \u8DEF\u5F84\u5220\u9664\u6389</p></li><li><p>\u4E3A\u4E86\u9632\u6B62\u5C0F\u7A0B\u5E8F\u8FD0\u884C\u5931\u8D25\uFF0C\u5728\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\uFF0C\u624B\u52A8\u5220\u9664 <code>pages</code> \u76EE\u5F55\u4E0B\u7684 <code>index \u9996\u9875\u6587\u4EF6\u5939</code></p></li><li><p>\u540C\u65F6\uFF0C\u628A <code>components</code> \u76EE\u5F55\u4E0B\u7684 <code>uni-link \u7EC4\u4EF6\u6587\u4EF6\u5939</code> \u5220\u9664\u6389</p></li></ol><h2 id="_2-4-\u4FEE\u6539\u5BFC\u822A\u6761\u7684\u6837\u5F0F\u6548\u679C" tabindex="-1">2.4 \u4FEE\u6539\u5BFC\u822A\u6761\u7684\u6837\u5F0F\u6548\u679C <a class="header-anchor" href="#_2-4-\u4FEE\u6539\u5BFC\u822A\u6761\u7684\u6837\u5F0F\u6548\u679C" aria-hidden="true">#</a></h2><ol><li><p>\u6253\u5F00 <code>pages.json</code> \u8FD9\u4E2A\u5168\u5C40\u7684\u914D\u7F6E\u6587\u4EF6</p></li><li><p>\u4FEE\u6539 <code>globalStyle</code> \u8282\u70B9\u5982\u4E0B\uFF1A</p><div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;globalStyle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;navigationBarTextStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarTitleText&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u9ED1\u9A6C\u4F18\u8D2D&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;navigationBarBackgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#C00000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;backgroundColor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;#FFFFFF&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ol><h2 id="_2-5-\u5206\u652F\u7684\u63D0\u4EA4\u4E0E\u5408\u5E76" tabindex="-1">2.5 \u5206\u652F\u7684\u63D0\u4EA4\u4E0E\u5408\u5E76 <a class="header-anchor" href="#_2-5-\u5206\u652F\u7684\u63D0\u4EA4\u4E0E\u5408\u5E76" aria-hidden="true">#</a></h2><ol><li>\u5C06\u672C\u5730\u7684 tabbar \u5206\u652F\u8FDB\u884C\u672C\u5730\u7684 commit \u63D0\u4EA4\uFF1A</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;\u5B8C\u6210\u4E86 tabBar \u7684\u5F00\u53D1&quot;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="2"><li>\u5C06\u672C\u5730\u7684 tabbar \u5206\u652F\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u8FDB\u884C\u4FDD\u5B58\uFF1A</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token function">git</span> push -u origin tabbar
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ol start="3"><li>\u5C06\u672C\u5730\u7684 tabbar \u5206\u652F\u5408\u5E76\u5230\u672C\u5730\u7684 master \u5206\u652F\uFF1A</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge tabbar
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol start="4"><li>\u5220\u9664\u672C\u5730\u7684 tabbar \u5206\u652F\uFF1A</li></ol><div class="language-bash line-numbers-mode"><pre><code><span class="token function">git</span> branch -d tabbar
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,22),r=[o];function c(l,i,u,b,d,k){return s(),n("div",null,r)}var g=a(p,[["render",c]]);export{q as __pageData,g as default};
