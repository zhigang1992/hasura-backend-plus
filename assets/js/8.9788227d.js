(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{333:function(a,s,t){"use strict";t.r(s);var e=t(18),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[a._v("#")]),a._v(" Getting started")]),a._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),t("h3",{attrs:{id:"nhost"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nhost"}},[a._v("#")]),a._v(" Nhost")]),a._v(" "),t("p",[a._v("The easiest way to deploy HBP is with the official "),t("a",{attrs:{href:"https://nhost.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("Nhost"),t("OutboundLink")],1),a._v(" managed service. Get your perfect configured backend with PostgreSQL, Hasura and Hasura Backend Plus and save yourself hours of maintenance per month.")]),a._v(" "),t("p",[a._v("All "),t("a",{attrs:{href:"https://nhost.io",target:"_blank",rel:"noopener noreferrer"}},[a._v("Nhost"),t("OutboundLink")],1),a._v(" projects are built on open source software so you can make realtime web and mobile apps fast 🚀.")]),a._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("a",{attrs:{href:"https://nhost.io/register",target:"_blank"}},[t("img",{attrs:{src:"https://github.com/nhost/hasura-backend-plus/raw/master/assets/nhost-register-button.png",width:"200px"}})])]),a._v(" "),t("h3",{attrs:{id:"docker-compose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[a._v("#")]),a._v(" Docker-Compose")]),a._v(" "),t("p",[a._v("Create the following "),t("code",[a._v("docker-compose.yaml")]),a._v(" file, and modify the Hasura Admin Secret in both "),t("code",[a._v("graphql-engine")]),a._v(" and "),t("code",[a._v("hasura-backend-plus")]),a._v(" services.")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3.6'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("services")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("postgres")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" postgres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" db_data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("/var/lib/postgresql/data\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("graphql-engine")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" hasura/graphql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("v1.2.0\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'8080:8080'")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("depends_on")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'postgres'")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("restart")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" always\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("HASURA_GRAPHQL_DATABASE_URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" postgres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//postgres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("postgrespassword@postgres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("5432/postgres\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("HASURA_GRAPHQL_ADMIN_SECRET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'$HASURA_GRAPHQL_ADMIN_SECRET'")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("HASURA_GRAPHQL_JWT_SECRET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"type": "RS256", "jwk_url": "http://hasura-backend-plus:3000/auth/jwks"}\'')]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("HASURA_GRAPHQL_ENABLE_CONSOLE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("hasura-backend-plus")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" nhost/hasura"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("backend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("plus"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("latest\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3000:3000'")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("SERVER_URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3000")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("HASURA_ENDPOINT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" http"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//graphql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("engine"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("8080/v1/graphql\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("HASURA_GRAPHQL_ADMIN_SECRET")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'$HASURA_GRAPHQL_ADMIN_SECRET'")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("JWT_ALGORITHM")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" RS256\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("volumes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("db_data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br")])]),t("p",[a._v("Then start the services:")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("HASURA_GRAPHQL_ADMIN_SECRET")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("your Hasura Admin secret"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\ndocker-compose up -d\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("Everything shoudl be up and running. HBP is listening to "),t("code",[a._v("http://localhost:3000")]),a._v(" and Hasura Graphql Engine is listening to "),t("code",[a._v("http://localhost:8080")]),a._v(".")]),a._v(" "),t("p",[a._v("You can then run the Hasura Console in following the "),t("a",{attrs:{href:"https://hasura.io/docs/1.0/graphql/manual/hasura-cli/hasura_console.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("official instructions"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("If you want to get a more advanced example in using an S3-compatible Object Storage, see the "),t("a",{attrs:{href:"recipes#minio"}},[a._v("Minio example")]),a._v(" in the recipes.")]),a._v(" "),t("h3",{attrs:{id:"standalone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#standalone"}},[a._v("#")]),a._v(" Standalone")]),a._v(" "),t("p",[a._v("You can also install HBP without any other service, and connect it to an existing Hasura server, and/or an S3 instance if you plan to use the storage features.\nThe easiest way is to pull and run a Docker container, but you can also run the service from the source code.")]),a._v(" "),t("h4",{attrs:{id:"using-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-docker"}},[a._v("#")]),a._v(" Using Docker")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3000")]),a._v(":3000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -e "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"HASURA_ENDPOINT=<your Hasura graphql endpoint>"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -e "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"HASURA_GRAPHQL_ADMIN_SECRET=<your Hasura admin secret>"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  -e "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"JWT_KEY=<your JWT RSA256 key>"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  nhost/hasura-backend-plus:latest\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),a._v(" "),t("h4",{attrs:{id:"from-the-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#from-the-source-code"}},[a._v("#")]),a._v(" From the source code")]),a._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/nhost/hasura-backend-plus.git\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" hasura-backend-plus\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" .env.example .env\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" start\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h2",{attrs:{id:"user-registration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-registration"}},[a._v("#")]),a._v(" User registration")]),a._v(" "),t("p",[a._v("By default, any client connecting to HBP can register with a valid email address. Registration requires a valid email and password:")]),a._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -d "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{"email":"real@emailadress.com", "password":"StrongPasswordNot1234"}\'')]),a._v(" -H "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Content-Type: application/json"')]),a._v(" -X POST http://localhost:3000/auth/register`\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("You can however add some safeguards to the registration process.")]),a._v(" "),t("h3",{attrs:{id:"limit-email-domains"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#limit-email-domains"}},[a._v("#")]),a._v(" Limit email domains")]),a._v(" "),t("p",[a._v("You can limit registration to ranges of emails that are only part of a whitelist. For instance, you may want to limit registration only to the email addresses of your own organisation. You can pass a list of comma-separated email domains to the "),t("code",[a._v("ALLOWED_EMAIL_DOMAINS")]),a._v(" environment variable, for instance:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ALLOWED_EMAIL_DOMAINS=gmail.com,yourorganisation.com\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"minimum-password-length"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minimum-password-length"}},[a._v("#")]),a._v(" Minimum password length")]),a._v(" "),t("p",[a._v("By default, clients can register with a password of at least three characters. You can change this in setting a higher value:")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("MIN_PASSWORD_LENGTH=6\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"check-password-simplicity-against-have-i-been-pwned"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-password-simplicity-against-have-i-been-pwned"}},[a._v("#")]),a._v(" Check password simplicity against Have I Been Pwned")]),a._v(" "),t("p",[a._v("You can ask HBP to check on "),t("a",{attrs:{href:"https://haveibeenpwned.com/Passwords",target:"_blank",rel:"noopener noreferrer"}},[a._v("Have I Been Pwned"),t("OutboundLink")],1),a._v(" if the password has been previously exposed in data breaches. If so, the registration will fail. This option is disabled by default.")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("HIBP_ENABLE=false\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"add-registration-fields"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add-registration-fields"}},[a._v("#")]),a._v(" Add registration fields")]),a._v(" "),t("p",[a._v("You may want to extend the "),t("code",[a._v("public.users")]),a._v(" table with your own fields and relations, and to expect the client to set some of them when registering. It is possible to set a list of columns in the "),t("code",[a._v("REGISTRATION_CUSTOM_FIELDS")]),a._v(" environment value.")]),a._v(" "),t("p",[a._v("Here is an example on the way to proceed to add a "),t("code",[a._v("nickname")]),a._v(" value to the registration:")]),a._v(" "),t("ol",[t("li",[a._v("Add a column "),t("code",[a._v("nickname")]),a._v(" of type text to the "),t("code",[a._v("public.users")]),a._v(" table")]),a._v(" "),t("li",[a._v("Set the environment variable "),t("code",[a._v("REGISTRATION_CUSTOM_FIELDS=nickname")])]),a._v(" "),t("li",[a._v("The registration endpoint now expects a "),t("code",[a._v("nickname")]),a._v(" value in addition to "),t("code",[a._v("email")]),a._v(" and "),t("code",[a._v("password")])])]),a._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),t("p",[a._v("Any given column must exist, otherwise registration will fail.")])]),a._v(" "),t("h2",{attrs:{id:"activation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#activation"}},[a._v("#")]),a._v(" Activation")]),a._v(" "),t("p",[a._v("As we activated the sending of confirmation emails by default, and any email can register by default, your will soon receive a confirmation link in your inbox.")]),a._v(" "),t("p",[a._v("Click on the link and...")]),a._v(" "),t("h2",{attrs:{id:"login"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#login"}},[a._v("#")]),a._v(" Login")]),a._v(" "),t("h2",{attrs:{id:"multi-factor-authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multi-factor-authentication"}},[a._v("#")]),a._v(" Multi-Factor Authentication")]),a._v(" "),t("h3",{attrs:{id:"generate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generate"}},[a._v("#")]),a._v(" Generate")]),a._v(" "),t("h3",{attrs:{id:"enable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable"}},[a._v("#")]),a._v(" Enable")]),a._v(" "),t("h3",{attrs:{id:"login-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#login-2"}},[a._v("#")]),a._v(" Login")]),a._v(" "),t("h3",{attrs:{id:"disable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disable"}},[a._v("#")]),a._v(" Disable")])])}),[],!1,null,null,null);s.default=n.exports}}]);