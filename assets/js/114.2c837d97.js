(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{480:function(e,a,t){"use strict";t.r(a);var n=t(1),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Data Package Pipelines is a declarative, stream-based framework for building tabular data processing pipelines. It can be used for all extract, transform, and load (ETL) tasks, and is particularly suited for working with diverse and heterogeneous data sources of varying and unknown quality.")]),e._v(" "),t("p",[e._v("There are many tools and frameworks for doing ETL work with data. Data Package Pipelines is another one! The focus here is on wrangling and controlling messy data from various sources, and using the Frictionless Data tooling to transform these feeds into a stream of clean, consistent data.")]),e._v(" "),t("p",[e._v("Data Package Pipelines is part of "),t("a",{attrs:{href:"https://frictionlessdata.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Frictionless Data"),t("OutboundLink")],1),e._v(", a project funded and maintained by the "),t("a",{attrs:{href:"https://okfn.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open Knowledge Foundation"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://datopian.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Datopian"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"check-it-out"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-it-out"}},[e._v("#")]),e._v(" Check it out")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata/datapackage-pipelines",target:"_blank",rel:"noopener noreferrer"}},[e._v("Get the code"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/frictionlessdata?utf8=%E2%9C%93&q=pipeline&type=&language=",target:"_blank",rel:"noopener noreferrer"}},[e._v("Integrations"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/datahq/dataflows",target:"_blank",rel:"noopener noreferrer"}},[e._v("Data Flows"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"where-it-is-used"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#where-it-is-used"}},[e._v("#")]),e._v(" Where it is used")]),e._v(" "),t("p",[e._v("Data Package Pipelines is ideal for building complex ETL pipelines with a diverse collection of data sources. It uses a declarative pipeline format which can help with teams of engineers and non-technical staff working on data processing and integration projects.")]),e._v(" "),t("h2",{attrs:{id:"a-simple-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-simple-example"}},[e._v("#")]),e._v(" A simple example")]),e._v(" "),t("p",[e._v("A pipeline spec file")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("worldbank-co2-emissions:\n  title: CO2 emission data from the World Bank\n  description: Data per year, provided in metric tons per capita.\n  pipeline:\n    -\n      run: update_package\n      parameters:\n        name: 'co2-emissions'\n        title: 'CO2 emissions (metric tons per capita)'\n        homepage: 'http://worldbank.org/'\n    -\n      run: load\n      parameters:\n        from: \"http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.PC?downloadformat=excel\"\n        name: 'global-data'\n        format: xls\n        headers: 4\n    -\n      run: set_types\n      parameters:\n         resources: global-data\n         types:\n           \"[12][0-9]{3}\":\n              type: number\n    -\n      run: dump_to_zip\n      parameters:\n          out-file: co2-emissions-wb.zip\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);