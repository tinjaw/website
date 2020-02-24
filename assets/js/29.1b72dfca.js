(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{322:function(e,t,a){e.exports=a.p+"assets/img/FDdarwin1.8b2fb42c.png"},323:function(e,t,a){e.exports=a.p+"assets/img/FDdarwin2.3a98a635.png"},402:function(e,t,a){"use strict";a.r(t);var o=a(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[o("strong",[e._v("This blog is part of a series showcasing projects developed during the 2019 Frictionless Data Tool Fund. Originally published "),o("a",{attrs:{href:"https://blog.okfn.org/2019/12/09/andre-heughebaert-frictionless-darwincore/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://blog.okfn.org/2019/12/09/andre-heughebaert-frictionless-darwincore/"),o("OutboundLink")],1)])]),e._v(" "),o("p",[o("em",[e._v("The 2019 Frictionless Data Tool Fund provided four mini-grants of $5,000 to support individuals or organisations in developing an open tool for reproducible research built using the Frictionless Data specifications and software. This fund is part of the Frictionless Data for Reproducible Research project, which is funded by the Sloan Foundation. This project applies our work in Frictionless Data to data-driven research disciplines, in order to facilitate reproducible data workflows in research contexts.")])]),e._v(" "),o("p",[e._v("André Heughebaert is an open biodiversity data advocate in his work and his free time. He is an IT Software Engineer at the Belgian Biodiversity Platform and is also the Belgian GBIF (Global Biodiversity Information Facility) Node manager. During this time, he has worked with the Darwin Core Standards and Open Biodiversity data on a daily basis. This work inspired him to apply for the Tool Fund, where he has developed a tool to convert DarwinCore Archives into Frictionless Data Packages.")]),e._v(" "),o("p",[e._v("The DarwinCore Archive (DwCA) is a standardised container for biodiversity data and metadata largely used amongst the GBIF community, which consists of more than 1,500 institutions around the world. The DwCA is used to publish biodiversity data about observations, collections specimens, species checklists and sampling events. However, this domain specific standard has some limitations, mainly the star schema (core table + extensions), rules that are sometimes too permissive, and a lack of controlled vocabularies for certain terms. These limitations encouraged André to investigate emerging open data standards. In 2016, he discovered Frictionless Data and published his first data package on historical data from 1815 Napoleonic Campaign of Belgium. He was then encouraged to create a tool that would, in part, build a bridge between these two open data ecosystems.")]),e._v(" "),o("p",[e._v("As a result, the Frictionless DarwinCore tool converts DwCA into Frictionless Data Packages, and also gives access to the vast Frictionless Data software ecosystem enabling constraints validation and support of a fully relational data schema.  Technically speaking, the tool is implemented as a Python library, and is exposed as a Command Line Interface. The tool automatically converts:")]),e._v(" "),o("ul",[o("li",[e._v("DwCA data schema into datapackage.json")]),e._v(" "),o("li",[e._v("EML metadata into human readable markdown readme file")]),e._v(" "),o("li",[e._v("data files are converted when necessary, this is when default values are described")])]),e._v(" "),o("p",[e._v("The resulting zip file complies to both DarwinCore and Frictionless specifications.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(322),alt:"flow"}}),e._v(" "),o("br"),e._v(" "),o("em",[e._v("Frictionless DarwinCore Flow")])]),e._v(" "),o("p",[e._v("André hopes that bridging the two standards will give an excellent opportunity for the GBIF community to provide open biodiversity data to a wider audience. He says this is also a good opportunity to discover the Frictionless Data specifications and assess their applicability to the biodiversity domain. In fact, on 9th October 2019, André presented the tool at a GBIF Global Nodes meeting. It was perceived by the nodes managers community as an exploratory and pioneering work. While the command line interface offers a simple user interface for non-programmers, others might prefer the more flexible and sophisticated Python API. André encourages anyone working with DarwinCore data, including all data publishers and data users of GBIF network, to try out the new tool.")]),e._v(" "),o("p",[e._v("“I’m quite optimistic that the project will feed the necessary reflection on the evolution of our biodiversity standards and data flows.”")]),e._v(" "),o("p",[e._v("To get started, installation of the tool is done through a single pip install command (full directions can be found in the project README). Central to the tool is a table of DarwinCore terms linking a Data Package type, format and constraints for every DwC term. The tool can be used as CLI directly from your terminal window or as Python Library for developers. The tool can work with either locally stored or online DwCA. Once converted to Tabular DataPackage, the DwC data can then be ingested and further processed by software such as Goodtables, OpenRefine or any other Frictionless Data software.")]),e._v(" "),o("p",[e._v("André has aspirations to take the Frictionless DarwinCore tool further by encapsulating the tool in a web-service that will directly deliver Goodtables reports from a DwCA, which will make it even more user friendly. Additional ideas for further improvement would be including an import pathway for DarwinCore data into Open Refine, which is a popular tool in the GBIF community. André’s long term hope is that the Data Package will become an optional format for data download on "),o("a",{attrs:{href:"http://GBIF.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("GBIF.org"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:a(323),alt:"workflow"}}),e._v(" "),o("br")]),e._v(" "),o("p",[e._v("Further reading:")]),e._v(" "),o("p",[e._v("Repository: "),o("a",{attrs:{href:"https://github.com/frictionlessdata/FrictionlessDarwinCore",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/frictionlessdata/FrictionlessDarwinCore"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Project blog: "),o("a",{attrs:{href:"https://andrejjh.github.io/fdwc.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://andrejjh.github.io/fdwc.github.io/"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=i.exports}}]);