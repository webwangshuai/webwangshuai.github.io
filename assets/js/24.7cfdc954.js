(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{519:function(s,t,a){"use strict";a.r(t);var n=a(6),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/climbing-stairs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("爬楼梯"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("假设你正在爬楼梯。需要 n 阶你才能到达楼顶。\n\n每次你可以爬 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 或 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 个台阶。你有多少种不同的方法可以爬到楼顶呢？\n\n示例 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("：\n  "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\n  输入： 3\n  输出： 3\n  解释： 有三种方法可以爬到楼顶。\n  1.  1 阶 + 1 阶 + 1 阶\n  2.  1 阶 + 2 阶\n  3.  2 阶 + 1 阶\n  ")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"解法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解法"}},[s._v("#")]),s._v(" 解法")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/climbing-stairs/solution/cong-zhi-jue-si-wei-fen-xi-dong-tai-gui-hua-si-lu-/",target:"_blank",rel:"noopener noreferrer"}},[s._v("解题思路"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("climbStairs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 暂存上一次的cur")]),s._v("\n    cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当前的cur = 上上次cur + 上一次cur")]),s._v("\n    prev "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// prev 更新为 上一次的cur")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n作者：xiao_ben_zhu\n链接：https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("leetcode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("problems"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("climbing"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("stairs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("solution"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cong"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("zhi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("jue"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("si"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("wei"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("fen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("xi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dong"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("tai"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("gui"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("hua"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("si"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("lu"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n来源：力扣（LeetCode）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);