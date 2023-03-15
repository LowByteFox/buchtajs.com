import { Buchticka, BuchtickaResponse, BuchtickaRequest } from "./buchticka";
const server = new Buchticka();

server.get("/showroom", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./showroom/index.html"); s.setHeader("Content-Type", "text/html"); })
server.get("/components/CarouselPage.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/CarouselPage.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Footer.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Footer.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Navbar.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Navbar.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Sidebar.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Sidebar.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Carousel.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Carousel.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Banner.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Banner.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Project.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Project.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Foob.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Foob.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/DocsPage.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/DocsPage.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Faq.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Faq.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/docs/Middleware/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Middleware/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/Request/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Request/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/CLI/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/CLI/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/Writing_Custom_Plugin/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Writing_Custom_Plugin/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/Plugins/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Plugins/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/Composables/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Composables/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/layout/layout.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/layout/layout.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/docs/:page", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/:page/index.html"); s.setHeader("Content-Type", "text/html"); })
server.get("/docs/Bundler/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Bundler/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/Response/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Response/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/Subrouter/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Subrouter/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/index.html"); s.setHeader("Content-Type", "text/html"); })
server.get("/docs/Buchta/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Buchta/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/Directories/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Directories/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/CLI_Usage/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/CLI_Usage/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/Config/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Config/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/docs/Routing_Through_FS/page.md", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./docs/Routing_Through_FS/page.md"); s.setHeader("Content-Type", "text/markdown"); })
server.get("/", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./index.html"); s.setHeader("Content-Type", "text/html"); })
server.get("/layout.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./layout.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/tailwind.css", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./tailwind.css"); s.setHeader("Content-Type", "text/css"); })
server.get("/cover.png", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./cover.png"); s.setHeader("Content-Type", "image/png"); })
server.get("/buchta.webp", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./buchta.webp"); s.setHeader("Content-Type", "image/webp"); })
server.get("/konkon-beats.mp3", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./konkon-beats.mp3"); s.setHeader("Content-Type", "audio/mpeg"); })
server.get("/favicon.ico", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./favicon.ico"); s.setHeader("Content-Type", "image/x-icon"); })
server.get("/global.css", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./global.css"); s.setHeader("Content-Type", "text/css"); })
server.get("/covers/buchta.webp", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./covers/buchta.webp"); s.setHeader("Content-Type", "image/webp"); })
server.get("/hljs.css", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./hljs.css"); s.setHeader("Content-Type", "text/css"); })
server.get("/icons/archive.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/archive.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/copy.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/copy.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/empty.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/empty.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/js.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/js.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/feather.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/feather.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/right.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/right.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/sign_arrow.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/sign_arrow.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/speed.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/speed.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/down.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/down.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/bars.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/bars.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/list.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/list.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/check.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/check.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/server.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/server.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/plug.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/plug.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/react.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/react.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/mkdown.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/mkdown.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/fonts/qFdB35WCmI96Ajtm81GgY9TqxycJ.woff2", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./fonts/qFdB35WCmI96Ajtm81GgY9TqxycJ.woff2"); s.setHeader("Content-Type", "font/woff2"); })
server.get("/fonts/qFdB35WCmI96Ajtm81GgY93qxycJ.woff2", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./fonts/qFdB35WCmI96Ajtm81GgY93qxycJ.woff2"); s.setHeader("Content-Type", "font/woff2"); })
server.get("/fonts/qFdH35WCmI96Ajtm81GlU9s.woff2", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./fonts/qFdH35WCmI96Ajtm81GlU9s.woff2"); s.setHeader("Content-Type", "font/woff2"); })
server.get("/fonts/qFdB35WCmI96Ajtm81GgY9fqxycJ.woff2", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./fonts/qFdB35WCmI96Ajtm81GgY9fqxycJ.woff2"); s.setHeader("Content-Type", "font/woff2"); })
server.get("/fonts/qFdH35WCmI96Ajtm81GrU9vyww.woff2", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./fonts/qFdH35WCmI96Ajtm81GrU9vyww.woff2"); s.setHeader("Content-Type", "font/woff2"); })
server.get("/fonts/qFdB35WCmI96Ajtm81GgY9nqxw.woff2", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./fonts/qFdB35WCmI96Ajtm81GgY9nqxw.woff2"); s.setHeader("Content-Type", "font/woff2"); })
server.get("/fonts/qFdH35WCmI96Ajtm81GqU9vyww.woff2", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./fonts/qFdH35WCmI96Ajtm81GqU9vyww.woff2"); s.setHeader("Content-Type", "font/woff2"); })
server.get("/fonts/qFdB35WCmI96Ajtm81GgY9bqxycJ.woff2", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./fonts/qFdB35WCmI96Ajtm81GgY9bqxycJ.woff2"); s.setHeader("Content-Type", "font/woff2"); })
server.get("/fonts/qFdH35WCmI96Ajtm81GoU9vyww.woff2", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./fonts/qFdH35WCmI96Ajtm81GoU9vyww.woff2"); s.setHeader("Content-Type", "font/woff2"); })
server.get("/fonts/qFdH35WCmI96Ajtm81GhU9vyww.woff2", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./fonts/qFdH35WCmI96Ajtm81GhU9vyww.woff2"); s.setHeader("Content-Type", "font/woff2"); })
server.get("/foob.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./foob.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/CNAME", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./CNAME"); s.setHeader("Content-Type", "application/octet-stream"); })
server.get("/ookami_mio.png", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./ookami_mio.png"); s.setHeader("Content-Type", "image/png"); })
server.get("/bundle.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./bundle.js"); s.setHeader("Content-Type", "application/javascript"); })
server.run(3000)
