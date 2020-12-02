(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{504:function(t,s,a){"use strict";a.r(s);var n=a(1),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"working-with-aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-aws"}},[t._v("#")]),t._v(" Working with AWS")]),t._v(" "),a("blockquote",[a("p",[t._v("Status: "),a("strong",[t._v("EXPERIMENTAL")])])]),t._v(" "),a("p",[t._v("Frictionless supports reading data from S3 cloud source. You can read file in any format that is available in your bucket.")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" frictionless"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("aws"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"reading-from-aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reading-from-aws"}},[t._v("#")]),t._v(" Reading from AWS")]),t._v(" "),a("p",[t._v("You can read from this source using "),a("code",[t._v("Package/Resource")]),t._v(" or "),a("code",[t._v("Table")]),t._v(" API, for example:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource\n\nresource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'s3://bucket/table.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read_rows"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("For reading from a private bucket you need to setup AWS creadentials as it’s described in "),a("a",{attrs:{href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html#environment-variables",target:"_blank",rel:"noopener noreferrer"}},[t._v("Boto3 documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"writing-to-aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-to-aws"}},[t._v("#")]),t._v(" Writing to AWS")]),t._v(" "),a("blockquote",[a("p",[t._v("it’s not yet supported")])]),t._v(" "),a("h2",{attrs:{id:"configuring-aws"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-aws"}},[t._v("#")]),t._v(" Configuring AWS")]),t._v(" "),a("p",[t._v("There is a control to configure how Frictionless read files in this storage. For example:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Resource\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" frictionless"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aws "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" S3Control\n\nresource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'english'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'german'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'table.new.csv'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("controls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("S3Control"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("endpoint_url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<url>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("References:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://frictionlessdata.io/tooling/python/schemes-reference/#s3",target:"_blank",rel:"noopener noreferrer"}},[t._v("S3 Control"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);