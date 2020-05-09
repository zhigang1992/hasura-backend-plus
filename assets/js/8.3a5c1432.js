(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{257:function(t,a,s){"use strict";s.r(a);var e=s(17),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting started")]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("h3",{attrs:{id:"nhost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nhost"}},[t._v("#")]),t._v(" Nhost")]),t._v(" "),s("p",[t._v("The easiest way to deploy HBP is with the official "),s("a",{attrs:{href:"https://nhost.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nhost"),s("OutboundLink")],1),t._v(" managed service. Get your perfect configured backend with PostgreSQL, Hasura and Hasura Backend Plus and save yourself hours of maintenance per month.")]),t._v(" "),s("p",[t._v("All "),s("a",{attrs:{href:"https://nhost.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nhost"),s("OutboundLink")],1),t._v(" projects are built on open source software so you can make realtime web and mobile apps fast 🚀.")]),t._v(" "),s("div",{staticStyle:{"text-align":"center"}},[s("a",{attrs:{href:"https://nhost.io/register",target:"_blank"}},[s("img",{attrs:{src:"https://github.com/nhost/hasura-backend-plus/raw/master/assets/nhost-register-button.png",width:"200px"}})])]),t._v(" "),s("h3",{attrs:{id:"docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[t._v("#")]),t._v(" Docker-compose")]),t._v(" "),s("p",[t._v("Create the following "),s("code",[t._v("docker-compose.yaml")]),t._v(" file, and modify the Hasura Admin Secret in both "),s("code",[t._v("graphql-engine")]),t._v(" and "),s("code",[t._v("hasura-backend-plus")]),t._v(" services.")]),t._v(" "),s("div",{staticClass:"language-yaml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3.6'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("postgres")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgres"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" db_data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/postgresql/data\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("graphql-engine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hasura/graphql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1.1.0\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8080:8080'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("depends_on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postgres'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_GRAPHQL_DATABASE_URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgres"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//postgres"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("postgrespassword@postgres"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5432/postgres\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_GRAPHQL_ADMIN_SECRET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <hasura"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_GRAPHQL_JWT_SECRET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"type": "RS256", "jwk_url": "http://hasura-backend-plus:3000/jwks"}\'')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_GRAPHQL_ENABLE_CONSOLE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hasura-backend-plus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nhost/hasura"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("backend"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("plus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3000:3000'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//graphql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("8080/v1/graphql\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("HASURA_GRAPHQL_ADMIN_SECRET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" <hasura"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("admin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("JWT_ALGORITHM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" RS256\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("db_data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br")])]),s("p",[t._v("Then start the services:")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("docker-compose up -d\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Everything is now up and running.")]),t._v(" "),s("p",[t._v("If you want to get a more advanced example in using an S3-compatible Object Storage, see the "),s("a",{attrs:{href:"recipes#minio"}},[t._v("Minio example")]),t._v(" in the recipes.")]),t._v(" "),s("h3",{attrs:{id:"standalone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standalone"}},[t._v("#")]),t._v(" Standalone")]),t._v(" "),s("h4",{attrs:{id:"docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),s("h4",{attrs:{id:"source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#source-code"}},[t._v("#")]),t._v(" Source Code")]),t._v(" "),s("h2",{attrs:{id:"registration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#registration"}},[t._v("#")]),t._v(" Registration")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -d "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{"email":"real@emailadress.com", "password":"StrongPasswordNot1234"}\'')]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -X POST http://localhost:3000/auth/register`\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"activation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activation"}},[t._v("#")]),t._v(" Activation")]),t._v(" "),s("p",[t._v("As we activated the sending of confirmation emails by default, and any email can register by default, your will soon receive a confirmation link in your inbox.")]),t._v(" "),s("p",[t._v("Click on the link and...")]),t._v(" "),s("h2",{attrs:{id:"login"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[t._v("#")]),t._v(" Login")]),t._v(" "),s("h2",{attrs:{id:"multi-factor-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#multi-factor-authentication"}},[t._v("#")]),t._v(" Multi-Factor Authentication")]),t._v(" "),s("h3",{attrs:{id:"generate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#generate"}},[t._v("#")]),t._v(" Generate")]),t._v(" "),s("h3",{attrs:{id:"enable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[t._v("#")]),t._v(" Enable")]),t._v(" "),s("h3",{attrs:{id:"login-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#login-2"}},[t._v("#")]),t._v(" Login")]),t._v(" "),s("h3",{attrs:{id:"disable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#disable"}},[t._v("#")]),t._v(" Disable")])])}),[],!1,null,null,null);a.default=n.exports}}]);