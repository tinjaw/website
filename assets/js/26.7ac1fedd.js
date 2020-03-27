(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{266:function(a,t,e){a.exports=e.p+"assets/img/data-world-1.5a4d0891.png"},267:function(a,t,e){a.exports=e.p+"assets/img/data-world-2.6312c262.png"},388:function(a,t,e){"use strict";e.r(t);var r=e(1),o=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("p",[a._v("At "),r("a",{attrs:{href:"https://data.world",target:"_blank",rel:"noopener noreferrer"}},[a._v("data.world"),r("OutboundLink")],1),a._v(", we deal with a great diversity of data, both in terms of content and in terms of source format - most people working with data are emailing each other spreadsheets or CSVs, and not formally defining schema or semantics for what’s contained in these data files.")]),a._v(" "),r("p",[a._v("When "),r("a",{attrs:{href:"https://data.world",target:"_blank",rel:"noopener noreferrer"}},[a._v("data.world"),r("OutboundLink")],1),a._v(" ingests tabular data, we “virtualize” the tables away from their source format, and build layers of type and semantic information on top of the raw data. What this allows us to do is to produce a clean Tabular Data Package"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn1",id:"fnref1"}},[a._v("[1]")])]),a._v(" for any dataset, whether the input is CSV files, Excel Spreadsheets, JSON data, SQLite Database files - any format that we know how to extract tabular information from - we can present it as cleaned-up CSV data with a "),r("code",[a._v("datapackage.json")]),a._v(" that describes the schema and metadata of the contents.")]),a._v(" "),r("p",[r("img",{attrs:{src:e(266),alt:"Available Data"}}),a._v(" "),r("br"),a._v(" "),r("em",[a._v("Tabular Data Package structure on disk")])]),a._v(" "),r("p",[a._v("We would also like to see graph data packages developed as part of the Frictionless Data specifications, or “Universal Data Packages” that can encapsulate both tabular and graph data.  It would be great to be able to present tabular and graph data in the same package and develop software that knows how to use these things together.")]),a._v(" "),r("p",[a._v("To elaborate on this, it makes a lot of sense to normalize tabular data down to clean, well-formed CSVs or data that is more graph-like, and to normalize it to a standard format.  RDF"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn2",id:"fnref2"}},[a._v("[2]")])]),a._v(" is a well-established and standardized format, with many serialized forms that could be used interchangeably (RDF XML, Turtle, N-Triples, or JSON-LD, for example).  The metadata in the "),r("code",[a._v("datapackage.json")]),a._v(" would be extremely minimal, since the schema for RDF data is encoded into the data file itself.  It might be helpful to use the "),r("code",[a._v("datapackage.json")]),a._v(" descriptor to catalog the standard taxonomies and ontologies that were in use, for example, it would be useful to know if a file contained SKOS"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn3",id:"fnref3"}},[a._v("[3]")])]),a._v(" vocabularies, or OWL"),r("sup",{staticClass:"footnote-ref"},[r("a",{attrs:{href:"#fn4",id:"fnref4"}},[a._v("[4]")])]),a._v(" classes.")]),a._v(" "),r("p",[a._v("In the coming days, we want to continue to enrich the metadata we include in Tabular Data Packages exported from "),r("a",{attrs:{href:"https://data.world",target:"_blank",rel:"noopener noreferrer"}},[a._v("data.world"),r("OutboundLink")],1),a._v(", and we’re looking  into using "),r("code",[a._v("datapackage.json")]),a._v(" as an import format as well as an export option.")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://data.world",target:"_blank",rel:"noopener noreferrer"}},[a._v("data.world"),r("OutboundLink")],1),a._v(" works with lots of data across many domains - what’s great about Frictionless Data is that it’s a lightweight set of content specifications that can be a starting point for building domain-specific content standards - it really helps with the “first mile” of standardizing data and making it interoperable.")]),a._v(" "),r("p",[r("img",{attrs:{src:e(267),alt:"Available Data"}}),a._v(" "),r("br"),a._v(" "),r("em",[a._v("Tabular datasets can be downloaded as Tabular Data Packages")])]),a._v(" "),r("p",[a._v("In a certain sense, a Tabular Data Package is sort of like an open-source, cross-platform, accessible replacement for spreadsheets that can act as a “binder” for several related tables of data.  "),r("strong",[a._v("I could easily imagine web or desktop-based tools that look and function much like a traditional spreadsheet, but  use Data Packages as their serialization format.")])]),a._v(" "),r("p",[a._v("To read more about Data Package integration at "),r("a",{attrs:{href:"https://data.world",target:"_blank",rel:"noopener noreferrer"}},[a._v("data.world"),r("OutboundLink")],1),a._v(", read our post: "),r("a",{attrs:{href:"https://meta.data.world/try-this-frictionless-data-world-ad36b6422ceb#.rbbf8k40t",target:"_blank",rel:"noopener noreferrer"}},[a._v("Try This: Frictionless data.world"),r("OutboundLink")],1),a._v(".  Sign up, and starting playing with data.")]),a._v(" "),r("hr",{staticClass:"footnotes-sep"}),a._v(" "),r("section",{staticClass:"footnotes"},[r("ol",{staticClass:"footnotes-list"},[r("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[r("p",[a._v("Tabular Data Package specifications: "),r("a",{attrs:{href:"https://specs.frictionlessdata.io/tabular-data-package",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://specs.frictionlessdata.io/tabular-data-package"),r("OutboundLink")],1),a._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[a._v("↩︎")])])]),a._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[r("p",[a._v("RDF: Resource Description Framework: "),r("a",{attrs:{href:"https://www.w3.org/RDF/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.w3.org/RDF/"),r("OutboundLink")],1),a._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[a._v("↩︎")])])]),a._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn3"}},[r("p",[a._v("SKOS: Simple Knowledge Organization System: "),r("a",{attrs:{href:"https://www.w3.org/2004/02/skos/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.w3.org/2004/02/skos/"),r("OutboundLink")],1),a._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref3"}},[a._v("↩︎")])])]),a._v(" "),r("li",{staticClass:"footnote-item",attrs:{id:"fn4"}},[r("p",[a._v("OWL Web Ontology Language: "),r("a",{attrs:{href:"https://www.w3.org/TR/owl-ref/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.w3.org/TR/owl-ref/"),r("OutboundLink")],1),a._v(" "),r("a",{staticClass:"footnote-backref",attrs:{href:"#fnref4"}},[a._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);