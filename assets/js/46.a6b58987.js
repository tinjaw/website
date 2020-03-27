(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{379:function(a,t,s){"use strict";s.r(t);var e=s(1),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("This tutorial will show you how to install the Python library for working with Data Packages and Table Schema, load a CSV file, infer its schema, and write a Tabular Data Package.")]),a._v(" "),s("h2",{attrs:{id:"setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[a._v("#")]),a._v(" Setup")]),a._v(" "),s("p",[a._v("For this tutorial, we will need the "),s("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-py",target:"_blank",rel:"noopener noreferrer"}},[a._v("Data Package library"),s("OutboundLink")],1),a._v(" ("),s("a",{attrs:{href:"https://pypi.python.org/pypi/datapackage",target:"_blank",rel:"noopener noreferrer"}},[a._v("PyPI"),s("OutboundLink")],1),a._v(") library.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" datapackage\n")])])]),s("h2",{attrs:{id:"creating-basic-metadata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-basic-metadata"}},[a._v("#")]),a._v(" Creating basic metadata")]),a._v(" "),s("p",[a._v("You can start using the library by importing "),s("code",[a._v("datapackage")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" datapackage\n")])])]),s("p",[a._v("The Package() class allows you to work with data packages. Use it to create a blank datapackage called package like so:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("package "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" datapackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("You can then add useful metadata by adding keys to metadata dict attribute.  Below, we are adding the required "),s("code",[a._v("name")]),a._v(" key as well as a human-readable "),s("code",[a._v("title")]),a._v(" key.  For the keys supported, please consult the full "),s("a",{attrs:{href:"https://specs.frictionlessdata.io/data-package/#metadata",target:"_blank",rel:"noopener noreferrer"}},[a._v("Data Package spec"),s("OutboundLink")],1),a._v(". Note, we will be creating the required "),s("code",[a._v("resources")]),a._v(" key further down below.")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'period-table'")]),a._v("\npackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Periodic Table'")]),a._v("\n")])])]),s("p",[a._v("To view your descriptor file at any time, simply type")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("descriptor\n")])])]),s("h2",{attrs:{id:"inferring-a-csv-schema"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inferring-a-csv-schema"}},[a._v("#")]),a._v(" Inferring a CSV Schema")]),a._v(" "),s("p",[a._v("Let’s say we have a file called "),s("code",[a._v("data.csv")]),a._v(" ("),s("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages/blob/master/periodic-table/data.csv",target:"_blank",rel:"noopener noreferrer"}},[a._v("download"),s("OutboundLink")],1),a._v(") in our working directory that looks like this:")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("atomic number")]),a._v(" "),s("th",[a._v("symbol")]),a._v(" "),s("th",[a._v("name")]),a._v(" "),s("th",[a._v("atomic mass")]),a._v(" "),s("th",[a._v("metal or nonmetal?")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("1")]),a._v(" "),s("td",[a._v("H")]),a._v(" "),s("td",[a._v("Hydrogen")]),a._v(" "),s("td",[a._v("1.00794")]),a._v(" "),s("td",[a._v("nonmetal")])]),a._v(" "),s("tr",[s("td",[a._v("2")]),a._v(" "),s("td",[a._v("He")]),a._v(" "),s("td",[a._v("Helium")]),a._v(" "),s("td",[a._v("4.002602")]),a._v(" "),s("td",[a._v("noble gas")])]),a._v(" "),s("tr",[s("td",[a._v("3")]),a._v(" "),s("td",[a._v("Li")]),a._v(" "),s("td",[a._v("Lithium")]),a._v(" "),s("td",[a._v("6.941")]),a._v(" "),s("td",[a._v("alkali metal")])]),a._v(" "),s("tr",[s("td",[a._v("4")]),a._v(" "),s("td",[a._v("Be")]),a._v(" "),s("td",[a._v("Beryllium")]),a._v(" "),s("td",[a._v("9.012182")]),a._v(" "),s("td",[a._v("alkaline earth metal")])]),a._v(" "),s("tr",[s("td",[a._v("5")]),a._v(" "),s("td",[a._v("B")]),a._v(" "),s("td",[a._v("Boron")]),a._v(" "),s("td",[a._v("10.811")]),a._v(" "),s("td",[a._v("metalloid")])])])]),a._v(" "),s("p",[a._v("We can extrapolate our CSV’s "),s("router-link",{attrs:{to:"/table-schema/"}},[a._v("schema")]),a._v(" by using "),s("code",[a._v("infer")]),a._v(" from the Table Schema library.  The "),s("code",[a._v("infer")]),a._v(" function checks a small subset of your dataset and summarizes expected datatypes against each column, etc. To infer a schema for our dataset and view it, we will simply run")],1),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("infer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'periodic-table/data.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\npackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("descriptor\n")])])]),s("p",[a._v("Where there’s need to infer a schema for more than one tabular data resource, use the glob pattern "),s("code",[a._v("**/*.csv")]),a._v(" instead to infer a schema:")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("package"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("infer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'**/*.csv'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\npackage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("descriptor\n")])])]),s("p",[a._v("We are now ready to save our "),s("code",[a._v("datapackage.json")]),a._v(" file locally. The dp.save() function makes this possible.")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("dp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("save"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'datapackage.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("The "),s("code",[a._v("datapackage.json")]),s("br"),a._v("\n("),s("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages/blob/master/periodic-table/datapackage.json",target:"_blank",rel:"noopener noreferrer"}},[a._v("download"),s("OutboundLink")],1),a._v(") is inlined below.  Note that atomic number has been correctly inferred as an "),s("code",[a._v("integer")]),a._v(" and atomic mass as a "),s("code",[a._v("number")]),a._v(" (float) while every other column is a "),s("code",[a._v("string")]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  'profile'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'tabular-data-package'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  'resources'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    'path'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'data.csv'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    'profile'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'tabular-data-resource'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    'name'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'data'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    'format'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'csv'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    'mediatype'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'text/csv'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    'encoding'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'UTF"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("-8")]),a._v("'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    'schema'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      'fields'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          'name'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'atomic number'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          'type'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'integer'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          'format'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'default'\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          'name'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'symbol'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          'type'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'string'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          'format'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'default'\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          'name'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'name'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          'type'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'string'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          'format'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'default'\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          'name'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'atomic mass'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          'type'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'number'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          'format'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'default'\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n          'name'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'metal or nonmetal?'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          'type'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'string'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n          'format'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'default'\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    'missingValues'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("''"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  'name'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'periodic-table'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  'title'"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" 'Periodic Table'\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"publishing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#publishing"}},[a._v("#")]),a._v(" Publishing")]),a._v(" "),s("p",[a._v("Now that you have created your Data Package, you might want to "),s("router-link",{attrs:{to:"/blog/2016/08/29/publish-online/"}},[a._v("publish your data online")]),a._v(" so that you can share it with others.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);