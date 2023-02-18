import { Buchticka, BuchtickaResponse, BuchtickaRequest } from "./buchticka";
const server = new Buchticka();

server.get("/components/Footer.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Footer.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Carousel.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Carousel.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Faq.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Faq.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/CarouselPage.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/CarouselPage.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Confetti.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Confetti.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Banner.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Banner.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/components/Navbar.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./components/Navbar.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/layout.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./layout.js"); s.setHeader("Content-Type", "application/javascript"); })
server.get("/", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./index.html"); s.setHeader("Content-Type", "text/html"); })
server.get("/cover.png", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./cover.png"); s.setHeader("Content-Type", "image/png"); })
server.get("/global.css", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./global.css"); s.setHeader("Content-Type", "text/css"); })
server.get("/icons/react.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/react.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/archive.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/archive.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/plug.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/plug.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/server.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/server.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/js.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/js.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/empty.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/empty.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/mkdown.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/mkdown.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/feather.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/feather.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/sign_arrow.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/sign_arrow.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/speed.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/speed.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/icons/list.svg", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./icons/list.svg"); s.setHeader("Content-Type", "image/svg+xml"); })
server.get("/favicon.ico", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./favicon.ico"); s.setHeader("Content-Type", "image/vnd.microsoft.icon"); })
server.get("/hljs.css", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./hljs.css"); s.setHeader("Content-Type", "text/css"); })
server.get("/tailwind.css", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./tailwind.css"); s.setHeader("Content-Type", "text/css"); })
server.get("/buchta.png", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./buchta.png"); s.setHeader("Content-Type", "image/png"); })
server.get("/bundle.js", (r: any, s: any) => { s.sendFile(import.meta.dir + "/" + "./bundle.js"); s.setHeader("Content-Type", "application/javascript"); })
server.run(3000)
