const buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Navbar.svelte";
  let currentPath = "";
  if (typeof window != "undefined")
    currentPath = window.location.href;
  else
    return {
      query: new Map,
      params: new Map
    };
  const url = new URL(currentPath);
  const paramDefs = path.match(/:.+?(?=\/)/g);
  if (!paramDefs)
    return { query: url.searchParams, params: null };
  const paths = path.split("/");
  const currentPaths = url.pathname.split("/");
  for (const el of paramDefs) {
    const value = currentPaths[paths.indexOf(el)];
    params.set(el.slice(1), value);
  }
  return {
    query: url.searchParams,
    params
  };
};
let getDocsTree = [
  "docs/buchta",
  "docs/[page]"
];
let bunVersion = "0.5.7";
let buchtaVersion = "0.5-rc2";
import { $7b66f1cf} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
function create_fragment(ctx) {
  let nav;
  let img;
  let img_src_value;
  let t0;
  let div0;
  let t1;
  let t2;
  let div1;
  let t3;
  let div3;
  let a0;
  let t4;
  let t5;
  let a1;
  let t6;
  let t7;
  let a2;
  let t8;
  let t9;
  let a3;
  let t10;
  let t11;
  let div2;
  let t12;
  let a4;
  let t13;
  let t14;
  let a5;
  let t15;
  return {
    c() {
      nav = $$7b66f1cf.element("nav");
      img = $$7b66f1cf.element("img");
      t0 = $$7b66f1cf.space();
      div0 = $$7b66f1cf.element("div");
      t1 = $$7b66f1cf.text("Buchta");
      t2 = $$7b66f1cf.space();
      div1 = $$7b66f1cf.element("div");
      t3 = $$7b66f1cf.space();
      div3 = $$7b66f1cf.element("div");
      a0 = $$7b66f1cf.element("a");
      t4 = $$7b66f1cf.text("Get Started");
      t5 = $$7b66f1cf.space();
      a1 = $$7b66f1cf.element("a");
      t6 = $$7b66f1cf.text("Blog");
      t7 = $$7b66f1cf.space();
      a2 = $$7b66f1cf.element("a");
      t8 = $$7b66f1cf.text("Docs");
      t9 = $$7b66f1cf.space();
      a3 = $$7b66f1cf.element("a");
      t10 = $$7b66f1cf.text("Showroom");
      t11 = $$7b66f1cf.space();
      div2 = $$7b66f1cf.element("div");
      t12 = $$7b66f1cf.space();
      a4 = $$7b66f1cf.element("a");
      t13 = $$7b66f1cf.text("Github");
      t14 = $$7b66f1cf.space();
      a5 = $$7b66f1cf.element("a");
      t15 = $$7b66f1cf.text("Discord");
      this.h();
    },
    l(nodes) {
      nav = $$7b66f1cf.claim_element(nodes, "NAV", { class: true });
      var nav_nodes = $$7b66f1cf.children(nav);
      img = $$7b66f1cf.claim_element(nav_nodes, "IMG", { src: true, alt: true, width: true });
      t0 = $$7b66f1cf.claim_space(nav_nodes);
      div0 = $$7b66f1cf.claim_element(nav_nodes, "DIV", { class: true });
      var div0_nodes = $$7b66f1cf.children(div0);
      t1 = $$7b66f1cf.claim_text(div0_nodes, "Buchta");
      div0_nodes.forEach($$7b66f1cf.detach);
      t2 = $$7b66f1cf.claim_space(nav_nodes);
      div1 = $$7b66f1cf.claim_element(nav_nodes, "DIV", { class: true });
      $$7b66f1cf.children(div1).forEach($$7b66f1cf.detach);
      t3 = $$7b66f1cf.claim_space(nav_nodes);
      div3 = $$7b66f1cf.claim_element(nav_nodes, "DIV", { class: true });
      var div3_nodes = $$7b66f1cf.children(div3);
      a0 = $$7b66f1cf.claim_element(div3_nodes, "A", { href: true, class: true });
      var a0_nodes = $$7b66f1cf.children(a0);
      t4 = $$7b66f1cf.claim_text(a0_nodes, "Get Started");
      a0_nodes.forEach($$7b66f1cf.detach);
      t5 = $$7b66f1cf.claim_space(div3_nodes);
      a1 = $$7b66f1cf.claim_element(div3_nodes, "A", { class: true });
      var a1_nodes = $$7b66f1cf.children(a1);
      t6 = $$7b66f1cf.claim_text(a1_nodes, "Blog");
      a1_nodes.forEach($$7b66f1cf.detach);
      t7 = $$7b66f1cf.claim_space(div3_nodes);
      a2 = $$7b66f1cf.claim_element(div3_nodes, "A", { class: true, href: true });
      var a2_nodes = $$7b66f1cf.children(a2);
      t8 = $$7b66f1cf.claim_text(a2_nodes, "Docs");
      a2_nodes.forEach($$7b66f1cf.detach);
      t9 = $$7b66f1cf.claim_space(div3_nodes);
      a3 = $$7b66f1cf.claim_element(div3_nodes, "A", { class: true });
      var a3_nodes = $$7b66f1cf.children(a3);
      t10 = $$7b66f1cf.claim_text(a3_nodes, "Showroom");
      a3_nodes.forEach($$7b66f1cf.detach);
      t11 = $$7b66f1cf.claim_space(div3_nodes);
      div2 = $$7b66f1cf.claim_element(div3_nodes, "DIV", { class: true });
      $$7b66f1cf.children(div2).forEach($$7b66f1cf.detach);
      t12 = $$7b66f1cf.claim_space(div3_nodes);
      a4 = $$7b66f1cf.claim_element(div3_nodes, "A", { class: true, href: true });
      var a4_nodes = $$7b66f1cf.children(a4);
      t13 = $$7b66f1cf.claim_text(a4_nodes, "Github");
      a4_nodes.forEach($$7b66f1cf.detach);
      t14 = $$7b66f1cf.claim_space(div3_nodes);
      a5 = $$7b66f1cf.claim_element(div3_nodes, "A", { class: true });
      var a5_nodes = $$7b66f1cf.children(a5);
      t15 = $$7b66f1cf.claim_text(a5_nodes, "Discord");
      a5_nodes.forEach($$7b66f1cf.detach);
      div3_nodes.forEach($$7b66f1cf.detach);
      nav_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      if (!$$7b66f1cf.src_url_equal(img.src, img_src_value = "/buchta.png"))
        $$7b66f1cf.attr(img, "src", img_src_value);
      $$7b66f1cf.attr(img, "alt", "Icon");
      $$7b66f1cf.attr(img, "width", "32");
      $$7b66f1cf.attr(div0, "class", "font-bold");
      $$7b66f1cf.attr(div1, "class", "flex-grow");
      $$7b66f1cf.attr(a0, "href", "/#getStarted");
      $$7b66f1cf.attr(a0, "class", "hover:text-[#004E7B] cursor-pointer");
      $$7b66f1cf.attr(a1, "class", "hover:text-[#004E7B]");
      $$7b66f1cf.attr(a2, "class", "hover:text-[#004E7B]");
      $$7b66f1cf.attr(a2, "href", "/docs/");
      $$7b66f1cf.attr(a3, "class", "hover:text-[#004E7B]");
      $$7b66f1cf.attr(div2, "class", "border-2 border-black");
      $$7b66f1cf.attr(a4, "class", "hover:text-[#004E7B]");
      $$7b66f1cf.attr(a4, "href", "https://github.com/Fire-The-Fox/buchta");
      $$7b66f1cf.attr(a5, "class", "hover:text-[#004E7B]");
      $$7b66f1cf.attr(div3, "class", "flex flex-row gap-5 font-bold");
      $$7b66f1cf.attr(nav, "class", "flex flex-row pl-36 pr-36 gap-5 h-12 items-center bg-white backdrop-blur-md bg-opacity-30 drop-shadow-lg fixed w-screen text-md p-2 z-10");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, nav, anchor);
      $$7b66f1cf.append_hydration(nav, img);
      $$7b66f1cf.append_hydration(nav, t0);
      $$7b66f1cf.append_hydration(nav, div0);
      $$7b66f1cf.append_hydration(div0, t1);
      $$7b66f1cf.append_hydration(nav, t2);
      $$7b66f1cf.append_hydration(nav, div1);
      $$7b66f1cf.append_hydration(nav, t3);
      $$7b66f1cf.append_hydration(nav, div3);
      $$7b66f1cf.append_hydration(div3, a0);
      $$7b66f1cf.append_hydration(a0, t4);
      $$7b66f1cf.append_hydration(div3, t5);
      $$7b66f1cf.append_hydration(div3, a1);
      $$7b66f1cf.append_hydration(a1, t6);
      $$7b66f1cf.append_hydration(div3, t7);
      $$7b66f1cf.append_hydration(div3, a2);
      $$7b66f1cf.append_hydration(a2, t8);
      $$7b66f1cf.append_hydration(div3, t9);
      $$7b66f1cf.append_hydration(div3, a3);
      $$7b66f1cf.append_hydration(a3, t10);
      $$7b66f1cf.append_hydration(div3, t11);
      $$7b66f1cf.append_hydration(div3, div2);
      $$7b66f1cf.append_hydration(div3, t12);
      $$7b66f1cf.append_hydration(div3, a4);
      $$7b66f1cf.append_hydration(a4, t13);
      $$7b66f1cf.append_hydration(div3, t14);
      $$7b66f1cf.append_hydration(div3, a5);
      $$7b66f1cf.append_hydration(a5, t15);
    },
    p: $$7b66f1cf.noop,
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(nav);
    }
  };
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, null, create_fragment, $$7b66f1cf.safe_not_equal, {});
  }
}
export default Component;

new Component({
    target: document.body,
    hydrate: true
});
