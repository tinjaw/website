(window.webpackJsonp=window.webpackJsonp||[]).push([[150],{511:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"working-with-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-json"}},[t._v("#")]),t._v(" Working with JSON")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://colab.research.google.com/drive/1NLXeYiAxSC0BXZqMRIOSKBo9lk5jkDHf",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open in Colab"}}),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Status: "),a("strong",[t._v("PLUGIN / STABLE")])])]),t._v(" "),a("p",[t._v("Frictionless supports parsing JSON tables (json and jsonl/ndjson).")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" frictionless\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" -q -O table.json https://raw.githubusercontent.com/frictionlessdata/frictionless-py/master/data/table.json\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" table.json\n")])])]),a("pre",[a("code",[t._v('[\n    ["id", "name"],\n    [1, "english"],\n    [2, "中国人"]\n]\n')])]),t._v(" "),a("h2",{attrs:{id:"reading-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-json"}},[t._v("#")]),t._v(" Reading JSON")]),t._v(" "),a("p",[t._v("You can read this format using "),a("code",[t._v("Package/Resource")]),t._v(" or "),a("code",[t._v("Table")]),t._v(" API, for example:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource\n\nresource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("pre",[a("code",[t._v("[Row([('id', 1), ('name', 'english')]), Row([('id', 2), ('name', '中国人')])]\n")])]),t._v(" "),a("h2",{attrs:{id:"writing-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-json"}},[t._v("#")]),t._v(" Writing JSON")]),t._v(" "),a("p",[t._v("The same is actual for writing:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource\n\nresource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'english'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'german'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table.new.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("pre",[a("code",[t._v("'table.new.json'\n")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cat table.new.json\n")])])]),a("pre",[a("code",[t._v('[\n  [\n    "id",\n    "name"\n  ],\n  [\n    1,\n    "english"\n  ],\n  [\n    2,\n    "german"\n  ]\n]\n')])]),t._v(" "),a("h2",{attrs:{id:"configuring-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-json"}},[t._v("#")]),t._v(" Configuring JSON")]),t._v(" "),a("p",[t._v("There is a dialect to configure how Frictionless read and write files in this format. For example:")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dialects\n\nresource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'english'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'german'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table.new.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dialect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("dialects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("JsonDialect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("pre",[a("code",[t._v("'table.new.json'\n")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cat table.new.json\n")])])]),a("pre",[a("code",[t._v('[\n  {\n    "id": 1,\n    "name": "english"\n  },\n  {\n    "id": 2,\n    "name": "german"\n  }\n]\n')])]),t._v(" "),a("p",[t._v("References:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/formats-reference/#csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSV Dialect"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);