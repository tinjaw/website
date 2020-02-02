(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{327:function(t,e,a){"use strict";a.r(e);var r=a(0),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("In this section, we will walk through the process of publishing, using a dataset of the periodic table of elements as an example. We will define its metadata by creating a data package, describe the structure of the CSV using a Table Schema, validate it on Goodtables, and finally publish to a public CKAN instance. Let’s start.")]),t._v(" "),a("p",[t._v("First, let’s look at the data. It is available as a CSV file on "),a("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/d2b96aaed6ab12db41d73022a2988eeb292116e9/periodic-table/data.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link"),a("OutboundLink")],1),t._v(". The first five rows look like:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("atomic number")]),t._v(" "),a("th",[t._v("symbol")]),t._v(" "),a("th",[t._v("name")]),t._v(" "),a("th",[t._v("atomic mass")]),t._v(" "),a("th",[t._v("metal or nonmetal?")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("H")]),t._v(" "),a("td",[t._v("Hydrogen")]),t._v(" "),a("td",[t._v("1.00794")]),t._v(" "),a("td",[t._v("nonmetal")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("He")]),t._v(" "),a("td",[t._v("Helium")]),t._v(" "),a("td",[t._v("4.002602")]),t._v(" "),a("td",[t._v("noble gas")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("Li")]),t._v(" "),a("td",[t._v("Lithium")]),t._v(" "),a("td",[t._v("6.941")]),t._v(" "),a("td",[t._v("alkali metal")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("Be")]),t._v(" "),a("td",[t._v("Beryllium")]),t._v(" "),a("td",[t._v("9.012182")]),t._v(" "),a("td",[t._v("alkaline earth metal")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("B")]),t._v(" "),a("td",[t._v("Boron")]),t._v(" "),a("td",[t._v("10.811")]),t._v(" "),a("td",[t._v("metalloid")])])])]),t._v(" "),a("p",[t._v("As we can see, there are some numeric fields, both integers (atomic number) and floating point (atomic mass), and others are textual with strings. Our first objective is to describe the metadata by creating a Data Package, and its contents by creating a Table Schema.")]),t._v(" "),a("h2",{attrs:{id:"step-1-package-our-data-as-a-data-package"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-package-our-data-as-a-data-package"}},[t._v("#")]),t._v(" Step 1. Package our data as a Data Package")]),t._v(" "),a("p",[t._v("The easiest way to create a data package is using the "),a("a",{attrs:{href:"https://create.frictionlessdata.io/",title:"Data Package Creator",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Package Creator"),a("OutboundLink")],1),t._v(". It provides a graphical interface to describe the data package’s metadata, add resources, and define the schema for tabular resources. This is what you should see when you first open it:")]),t._v(" "),a("p",[a("img",{attrs:{src:"dp-creator.png",alt:"Data Package Creator"}})]),t._v(" "),a("p",[t._v("The left side bar contains the metadata for the Data Package as a whole, and the main part on the right contains the metadata for each specific resource.")]),t._v(" "),a("p",[t._v("Let’s add our CSV resource. On the main section of the page, fill the inputs with:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Name")]),t._v(": periodic-table")]),t._v(" "),a("li",[a("strong",[t._v("Path")]),t._v(": "),a("a",{attrs:{href:"https://raw.githubusercontent.com/frictionlessdata/example-data-packages/d2b96aaed6ab12db41d73022a2988eeb292116e9/periodic-table/data.csv",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://raw.githubusercontent.com/frictionlessdata/example-data-packages/d2b96aaed6ab12db41d73022a2988eeb292116e9/periodic-table/data.csv"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("!! Resource and data package names must be unique, lowercase, can contain only letters, numbers, and the characters “.”, “-” and “_”.")]),t._v(" "),a("p",[t._v("And click on the "),a("em",[t._v("Load")]),t._v(" button. After a few seconds, a new box should appear with the text “Add all inferred fields (data has 5 extra column(s))”. Click on it, and the fields will be created, with their data types and formats inferred from the data. This saves us time, as we don’t need to start from scratch.")]),t._v(" "),a("p",[t._v("The Data Package Creator got almost all data types correctly, except the {atomic mass} column. It inferred the column as having integer values, but as we can see from the data, the numbers aren’t whole, they have floating points. Just change the type to "),a("strong",[t._v("number")]),t._v(", and that’s it.")]),t._v(" "),a("p",[t._v("!! You can view a sample of the data in each column by hovering the mouse below its name.")]),t._v(" "),a("p",[t._v("Usually, we would now add titles and descriptions to each field. However, as this is a simple dataset, the field names should be enough. In the end, the fields are:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Data type")]),t._v(" "),a("th",[t._v("Data format")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("atomic number")]),t._v(" "),a("td",[t._v("integer")]),t._v(" "),a("td",[t._v("default")])]),t._v(" "),a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("default")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("default")])]),t._v(" "),a("tr",[a("td",[t._v("atomic mass")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("default")])]),t._v(" "),a("tr",[a("td",[t._v("metal or nonmetal?")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("default")])])])]),t._v(" "),a("p",[t._v("We can add more information about this resource by clicking on the gear icon to the left of the “Load” button. Add the following information:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Title")]),t._v(": Periodic table")]),t._v(" "),a("li",[a("strong",[t._v("Profile")]),t._v(": Tabular Data Resource")]),t._v(" "),a("li",[a("strong",[t._v("Format")]),t._v(": csv")]),t._v(" "),a("li",[a("strong",[t._v("Encoding")]),t._v(": (blank)")]),t._v(" "),a("li",[a("strong",[t._v("Description")]),t._v(": (blank)")])]),t._v(" "),a("p",[t._v("After this, we’re only missing metadata for the data package as a whole, available on the left side bar. Add:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Name")]),t._v(": periodic-table")]),t._v(" "),a("li",[a("strong",[t._v("Title")]),t._v(": Periodic table")]),t._v(" "),a("li",[a("strong",[t._v("Profile")]),t._v(": Tabular Data Package")]),t._v(" "),a("li",[a("strong",[t._v("Description")]),t._v(": Periodic table of chemical elements")]),t._v(" "),a("li",[a("strong",[t._v("Home Page")]),t._v(": "),a("a",{attrs:{href:"https://github.com/frictionlessdata/example-data-packages/tree/master/periodic-table",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/frictionlessdata/example-data-packages/tree/master/periodic-table"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("strong",[t._v("Version")]),t._v(": 1.0.0")]),t._v(" "),a("li",[a("strong",[t._v("License")]),t._v(": CC0-1.0")]),t._v(" "),a("li",[a("strong",[t._v("Author")]),t._v(": (blank)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"dp-creator-filled.png",alt:""}})]),t._v(" "),a("p",[t._v("Let’s validate the data package, to ensure we haven’t missed anything. Just click on the "),a("em",[t._v("Validate")]),t._v(" button on the bottom left, and you should see a green message “Data package is valid!”. This means that the data package is valid, but not necessarily its contents (we’ll check them in the next step).")]),t._v(" "),a("p",[t._v("Save the data package by clicking on the "),a("em",[t._v("Download")]),t._v(" button. This will download a “datapackage.json” file that contains everything we added here. Our next step is to use it to validate the data.")]),t._v(" "),a("h2",{attrs:{id:"step-2-validate-our-data-package-and-its-contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-validate-our-data-package-and-its-contents"}},[t._v("#")]),t._v(" Step 2. Validate our data package and its contents")]),t._v(" "),a("p",[t._v("We now have a data package with our CSV file, including with a table schema describing the contents and types of its columns. Our final step before publishing is validating the data, so we can avoid publishing data with errors. To do so, we’ll use goodtables.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Goodtables"),a("OutboundLink")],1),t._v(" is a tabular data validator that allows you to automatically check for errors such as blank headers, duplicate rows, data with the wrong type (e.g. should be a number but is a date), and others. As it supports data packages, we can simply load the one we created in the previous step. Let’s do it.")]),t._v(" "),a("ol",[a("li",[t._v("Go to "),a("a",{attrs:{href:"https://try.goodtables.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://try.goodtables.io"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("On the "),a("em",[t._v("Source")]),t._v(" input, click on the "),a("em",[t._v("Upload File")]),t._v(" link.")]),t._v(" "),a("li",[t._v("Click on "),a("em",[t._v("Browse…")]),t._v(" and select the "),a("em",[t._v("datapackage.json")]),t._v(" file you downloaded in the previous step")]),t._v(" "),a("li",[t._v("Click on "),a("em",[t._v("Validate")])])]),t._v(" "),a("p",[t._v("After a few seconds, you should see:")]),t._v(" "),a("p",[a("img",{attrs:{src:"try-goodtables.png",alt:"try.goodtables"}})]),t._v(" "),a("p",[t._v("This means that:")]),t._v(" "),a("ul",[a("li",[t._v("The data package is valid")]),t._v(" "),a("li",[t._v("The CSV file is valid")]),t._v(" "),a("li",[t._v("There are no blank rows or headers, or duplicate rows")]),t._v(" "),a("li",[t._v("The data is valid according to the table schema we created (numbers are numbers, and so on)")])]),t._v(" "),a("p",[t._v("Although it can’t tell you if your data is correct, for example if the Aluminium"),a("br"),t._v("\natomic mass is 26.9815386, it does ensure you that all atomic mass values are"),a("br"),t._v("\nnumbers, among the other validations.")]),t._v(" "),a("p",[t._v("Now that we’ve created a data package, described our data with a table schema,"),a("br"),t._v("\nand validated it, we can finally publish it.")]),t._v(" "),a("h2",{attrs:{id:"step-3-publish-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-publish-the-data"}},[t._v("#")]),t._v(" Step 3. Publish the data")]),t._v(" "),a("p",[t._v("Our final step is to publish the dataset. The specifics instructions will vary depend on where you’re publishing to. In this example, we’ll see how to publish to a public "),a("a",{attrs:{href:"https://ckan.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("CKAN"),a("OutboundLink")],1),t._v(" instance, the "),a("a",{attrs:{href:"https://datahub.ckan.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://datahub.ckan.io"),a("OutboundLink")],1),t._v(". If you want to use it and don’t have an account yet, you can request one via "),a("a",{attrs:{href:"https://discuss.okfn.org/c/open-knowledge-labs/datahub",target:"_blank",rel:"noopener noreferrer"}},[t._v("our community page"),a("OutboundLink")],1),t._v(". Let’s start.")]),t._v(" "),a("p",[t._v("After you’re logged in, go to the "),a("a",{attrs:{href:"https://datahub.ckan.io/dataset",target:"_blank",rel:"noopener noreferrer"}},[t._v("datasets list page"),a("OutboundLink")],1),t._v(" and click on the "),a("a",{attrs:{href:"https://datahub.ckan.io/import_datapackage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Import Data Package"),a("OutboundLink")],1),t._v(" button. On this form, click on “Upload”, select the "),a("code",[t._v("datapackage.json")]),t._v(" file we created in the previous step, and choose your organisation. We’ll keep the visibility as private for now, so we can review the dataset before it’s made public.")]),t._v(" "),a("p",[a("img",{attrs:{src:"datahub-import-datapackage.png",alt:"Importing a data packate to the DataHub"}})]),t._v(" "),a("p",[t._v("!! If you don’t see the “Import Data Package” button in your CKAN instance, install the "),a("a",{attrs:{href:"https://github.com/frictionlessdata/ckanext-datapackager",target:"_blank",rel:"noopener noreferrer"}},[t._v("ckanext-datapackager"),a("OutboundLink")],1),t._v(" extension to add support for importing and exporting your datasets as data packages.")]),t._v(" "),a("p",[t._v("You will be redirected to the newly created dataset on CKAN, with its metadata and resource extracted from the data package. Double check if everything seems fine, and when you’re finished, click on the “Manage” button and change the visibility to “Public”.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://datahub.ckan.io/dataset/period-table-9896953431",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"datahub-dataset.png",alt:"Data package in CKAN"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("That’s it! CKAN supports data packages via the "),a("a",{attrs:{href:"https://github.com/frictionlessdata/ckanext-datapackager",target:"_blank",rel:"noopener noreferrer"}},[t._v("ckanext-datapackager"),a("OutboundLink")],1),t._v(" extension, so importing (and exporting) data packages is trivial, as all the work on describing the dataset was done while creating the data package.")])])}),[],!1,null,null,null);e.default=o.exports}}]);