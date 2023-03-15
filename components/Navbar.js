import Sidebar from "./Sidebar.js"

globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Navbar.js";
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
let projects = [
  {
    name: "Buchta",
    description: "Powerful Full-Stack Framework Powered By Bun",
    cover: "/covers/buchta.webp",
    url: "https://buchtajs.com"
  }
];
let buchtaVersion = "0.5";
let bunVersion = "0.5.8";
let getDocsTree = [
  "docs/Buchta",
  "docs/Bundler",
  "docs/CLI",
  "docs/CLI_Usage",
  "docs/Composables",
  "docs/Config",
  "docs/Directories",
  "docs/Middleware",
  "docs/Plugins",
  "docs/Request",
  "docs/Response",
  "docs/Routing_Through_FS",
  "docs/Subrouter",
  "docs/Writing_Custom_Plugin",
  "docs/[page]",
  "docs/layout"
];
import { $7b66f1cf, $ca8cb9be} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
var $$ca8cb9be = $ca8cb9be();
function create_if_block(ctx) {
  let div2;
  let div1;
  let a0;
  let t0;
  let t1;
  let a1;
  let t2;
  let t3;
  let a2;
  let t4;
  let t5;
  let a3;
  let t6;
  let t7;
  let div0;
  let t8;
  let a4;
  let t9;
  let t10;
  let div2_intro;
  let div2_outro;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[0] && create_if_block_1(ctx);
  return {
    c() {
      div2 = $$7b66f1cf.element("div");
      div1 = $$7b66f1cf.element("div");
      a0 = $$7b66f1cf.element("a");
      t0 = $$7b66f1cf.text("Home");
      t1 = $$7b66f1cf.space();
      a1 = $$7b66f1cf.element("a");
      t2 = $$7b66f1cf.text("Get Started");
      t3 = $$7b66f1cf.space();
      a2 = $$7b66f1cf.element("a");
      t4 = $$7b66f1cf.text("Docs");
      t5 = $$7b66f1cf.space();
      a3 = $$7b66f1cf.element("a");
      t6 = $$7b66f1cf.text("Showroom");
      t7 = $$7b66f1cf.space();
      div0 = $$7b66f1cf.element("div");
      t8 = $$7b66f1cf.space();
      a4 = $$7b66f1cf.element("a");
      t9 = $$7b66f1cf.text("Github");
      t10 = $$7b66f1cf.space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div2 = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div2_nodes = $$7b66f1cf.children(div2);
      div1 = $$7b66f1cf.claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = $$7b66f1cf.children(div1);
      a0 = $$7b66f1cf.claim_element(div1_nodes, "A", { href: true, class: true });
      var a0_nodes = $$7b66f1cf.children(a0);
      t0 = $$7b66f1cf.claim_text(a0_nodes, "Home");
      a0_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(div1_nodes);
      a1 = $$7b66f1cf.claim_element(div1_nodes, "A", { href: true, class: true });
      var a1_nodes = $$7b66f1cf.children(a1);
      t2 = $$7b66f1cf.claim_text(a1_nodes, "Get Started");
      a1_nodes.forEach($$7b66f1cf.detach);
      t3 = $$7b66f1cf.claim_space(div1_nodes);
      a2 = $$7b66f1cf.claim_element(div1_nodes, "A", { class: true, href: true });
      var a2_nodes = $$7b66f1cf.children(a2);
      t4 = $$7b66f1cf.claim_text(a2_nodes, "Docs");
      a2_nodes.forEach($$7b66f1cf.detach);
      t5 = $$7b66f1cf.claim_space(div1_nodes);
      a3 = $$7b66f1cf.claim_element(div1_nodes, "A", { class: true, href: true });
      var a3_nodes = $$7b66f1cf.children(a3);
      t6 = $$7b66f1cf.claim_text(a3_nodes, "Showroom");
      a3_nodes.forEach($$7b66f1cf.detach);
      t7 = $$7b66f1cf.claim_space(div1_nodes);
      div0 = $$7b66f1cf.claim_element(div1_nodes, "DIV", { class: true });
      $$7b66f1cf.children(div0).forEach($$7b66f1cf.detach);
      t8 = $$7b66f1cf.claim_space(div1_nodes);
      a4 = $$7b66f1cf.claim_element(div1_nodes, "A", { class: true, href: true });
      var a4_nodes = $$7b66f1cf.children(a4);
      t9 = $$7b66f1cf.claim_text(a4_nodes, "Github");
      a4_nodes.forEach($$7b66f1cf.detach);
      div1_nodes.forEach($$7b66f1cf.detach);
      t10 = $$7b66f1cf.claim_space(div2_nodes);
      if (if_block)
        if_block.l(div2_nodes);
      div2_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(a0, "href", "/");
      $$7b66f1cf.attr(a0, "class", "hover:text-secondary cursor-pointer");
      $$7b66f1cf.attr(a1, "href", "/#getStarted");
      $$7b66f1cf.attr(a1, "class", "hover:text-secondary cursor-pointer");
      $$7b66f1cf.attr(a2, "class", "hover:text-secondary");
      $$7b66f1cf.attr(a2, "href", "/docs/");
      $$7b66f1cf.attr(a3, "class", "hover:text-secondary");
      $$7b66f1cf.attr(a3, "href", "/showroom/");
      $$7b66f1cf.attr(div0, "class", "border border-white w-[50%] m-auto");
      $$7b66f1cf.attr(a4, "class", "hover:text-secondary");
      $$7b66f1cf.attr(a4, "href", "https://github.com/Fire-The-Fox/buchta");
      $$7b66f1cf.attr(div1, "class", "flex flex-col text-center mb-5 font-bold");
      $$7b66f1cf.attr(div2, "class", "fixed top-0 left-0 w-screen h-screen bg-black backdrop-blur-md bg-opacity-70 p-5 overscroll-auto overflow-auto");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div2, anchor);
      $$7b66f1cf.append_hydration(div2, div1);
      $$7b66f1cf.append_hydration(div1, a0);
      $$7b66f1cf.append_hydration(a0, t0);
      $$7b66f1cf.append_hydration(div1, t1);
      $$7b66f1cf.append_hydration(div1, a1);
      $$7b66f1cf.append_hydration(a1, t2);
      $$7b66f1cf.append_hydration(div1, t3);
      $$7b66f1cf.append_hydration(div1, a2);
      $$7b66f1cf.append_hydration(a2, t4);
      $$7b66f1cf.append_hydration(div1, t5);
      $$7b66f1cf.append_hydration(div1, a3);
      $$7b66f1cf.append_hydration(a3, t6);
      $$7b66f1cf.append_hydration(div1, t7);
      $$7b66f1cf.append_hydration(div1, div0);
      $$7b66f1cf.append_hydration(div1, t8);
      $$7b66f1cf.append_hydration(div1, a4);
      $$7b66f1cf.append_hydration(a4, t9);
      $$7b66f1cf.append_hydration(div2, t10);
      if (if_block)
        if_block.m(div2, null);
      current = true;
      if (!mounted) {
        dispose = $$7b66f1cf.listen(div2, "click", ctx[5]);
        mounted = true;
      }
    },
    p(ctx, dirty) {
      if (ctx[0])
        if (if_block) {
          if (dirty & 1)
            $$7b66f1cf.transition_in(if_block, 1);
        } else {
          if_block = create_if_block_1(ctx);
          if_block.c();
          $$7b66f1cf.transition_in(if_block, 1);
          if_block.m(div2, null);
        }
      else if (if_block) {
        $$7b66f1cf.group_outros();
        $$7b66f1cf.transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        $$7b66f1cf.check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(if_block);
      $$7b66f1cf.add_render_callback(() => {
        if (div2_outro)
          div2_outro.end(1);
        div2_intro = $$7b66f1cf.create_in_transition(div2, $$ca8cb9be.fade, { duration: 250 });
        div2_intro.start();
      });
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(if_block);
      if (div2_intro)
        div2_intro.invalidate();
      div2_outro = $$7b66f1cf.create_out_transition(div2, $$ca8cb9be.fade, { duration: 250 });
      current = false;
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div2);
      if (if_block)
        if_block.d();
      if (detaching && div2_outro)
        div2_outro.end();
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1(ctx) {
  let sidebar;
  let current;
  sidebar = new Sidebar({ props: { hide: false } });
  return {
    c() {
      $$7b66f1cf.create_component(sidebar.$$.fragment);
    },
    l(nodes) {
      $$7b66f1cf.claim_component(sidebar.$$.fragment, nodes);
    },
    m(target, anchor) {
      $$7b66f1cf.mount_component(sidebar, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(sidebar.$$.fragment, local);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(sidebar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      $$7b66f1cf.destroy_component(sidebar, detaching);
    }
  };
}
function create_fragment(ctx) {
  let nav;
  let img0;
  let img0_src_value;
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
  let img1;
  let img1_src_value;
  let t15;
  let current;
  let mounted;
  let dispose;
  let if_block = ctx[1] && create_if_block(ctx);
  return {
    c() {
      nav = $$7b66f1cf.element("nav");
      img0 = $$7b66f1cf.element("img");
      t0 = $$7b66f1cf.space();
      div0 = $$7b66f1cf.element("div");
      t1 = $$7b66f1cf.text("Buchta");
      t2 = $$7b66f1cf.space();
      div1 = $$7b66f1cf.element("div");
      t3 = $$7b66f1cf.space();
      div3 = $$7b66f1cf.element("div");
      a0 = $$7b66f1cf.element("a");
      t4 = $$7b66f1cf.text("Home");
      t5 = $$7b66f1cf.space();
      a1 = $$7b66f1cf.element("a");
      t6 = $$7b66f1cf.text("Get Started");
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
      img1 = $$7b66f1cf.element("img");
      t15 = $$7b66f1cf.space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      nav = $$7b66f1cf.claim_element(nodes, "NAV", { class: true });
      var nav_nodes = $$7b66f1cf.children(nav);
      img0 = $$7b66f1cf.claim_element(nav_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
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
      t4 = $$7b66f1cf.claim_text(a0_nodes, "Home");
      a0_nodes.forEach($$7b66f1cf.detach);
      t5 = $$7b66f1cf.claim_space(div3_nodes);
      a1 = $$7b66f1cf.claim_element(div3_nodes, "A", { href: true, class: true });
      var a1_nodes = $$7b66f1cf.children(a1);
      t6 = $$7b66f1cf.claim_text(a1_nodes, "Get Started");
      a1_nodes.forEach($$7b66f1cf.detach);
      t7 = $$7b66f1cf.claim_space(div3_nodes);
      a2 = $$7b66f1cf.claim_element(div3_nodes, "A", { class: true, href: true });
      var a2_nodes = $$7b66f1cf.children(a2);
      t8 = $$7b66f1cf.claim_text(a2_nodes, "Docs");
      a2_nodes.forEach($$7b66f1cf.detach);
      t9 = $$7b66f1cf.claim_space(div3_nodes);
      a3 = $$7b66f1cf.claim_element(div3_nodes, "A", { class: true, href: true });
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
      div3_nodes.forEach($$7b66f1cf.detach);
      t14 = $$7b66f1cf.claim_space(nav_nodes);
      img1 = $$7b66f1cf.claim_element(nav_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t15 = $$7b66f1cf.claim_space(nav_nodes);
      if (if_block)
        if_block.l(nav_nodes);
      nav_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(img0, "class", "cursor-pointer");
      if (!$$7b66f1cf.src_url_equal(img0.src, img0_src_value = "/buchta.webp"))
        $$7b66f1cf.attr(img0, "src", img0_src_value);
      $$7b66f1cf.attr(img0, "alt", "Icon");
      $$7b66f1cf.attr(img0, "width", "32");
      $$7b66f1cf.attr(img0, "height", "32");
      $$7b66f1cf.attr(div0, "class", "font-bold cursor-pointer hover:text-secondary");
      $$7b66f1cf.attr(div1, "class", "flex-grow");
      $$7b66f1cf.attr(a0, "href", "/");
      $$7b66f1cf.attr(a0, "class", "hover:text-secondary cursor-pointer");
      $$7b66f1cf.attr(a1, "href", "/#getStarted");
      $$7b66f1cf.attr(a1, "class", "hover:text-secondary cursor-pointer");
      $$7b66f1cf.attr(a2, "class", "hover:text-secondary");
      $$7b66f1cf.attr(a2, "href", "/docs/");
      $$7b66f1cf.attr(a3, "class", "hover:text-secondary");
      $$7b66f1cf.attr(a3, "href", "/showroom/");
      $$7b66f1cf.attr(div2, "class", "border border-white");
      $$7b66f1cf.attr(a4, "class", "hover:text-secondary");
      $$7b66f1cf.attr(a4, "href", "https://github.com/Fire-The-Fox/buchta");
      $$7b66f1cf.attr(div3, "class", "flex-row gap-5 font-bold hidden lg:flex");
      $$7b66f1cf.attr(img1, "class", "lg:hidden white-svg");
      if (!$$7b66f1cf.src_url_equal(img1.src, img1_src_value = "/icons/bars.svg"))
        $$7b66f1cf.attr(img1, "src", img1_src_value);
      $$7b66f1cf.attr(img1, "alt", "");
      $$7b66f1cf.attr(img1, "width", "32");
      $$7b66f1cf.attr(img1, "height", "32");
      $$7b66f1cf.attr(nav, "class", "flex flex-row md:pl-36 md:pr-36 gap-5 h-12 items-center bg-black backdrop-blur-md bg-opacity-30 drop-shadow-lg fixed w-screen text-md p-2 z-10 text-white");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, nav, anchor);
      $$7b66f1cf.append_hydration(nav, img0);
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
      $$7b66f1cf.append_hydration(nav, t14);
      $$7b66f1cf.append_hydration(nav, img1);
      $$7b66f1cf.append_hydration(nav, t15);
      if (if_block)
        if_block.m(nav, null);
      current = true;
      if (!mounted) {
        dispose = [
          $$7b66f1cf.listen(img0, "click", ctx[2]),
          $$7b66f1cf.listen(div0, "click", ctx[3]),
          $$7b66f1cf.listen(img1, "click", ctx[4])
        ];
        mounted = true;
      }
    },
    p(ctx, [dirty]) {
      if (ctx[1])
        if (if_block) {
          if_block.p(ctx, dirty);
          if (dirty & 2)
            $$7b66f1cf.transition_in(if_block, 1);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          $$7b66f1cf.transition_in(if_block, 1);
          if_block.m(nav, null);
        }
      else if (if_block) {
        $$7b66f1cf.group_outros();
        $$7b66f1cf.transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        $$7b66f1cf.check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(if_block);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(nav);
      if (if_block)
        if_block.d();
      mounted = false;
      $$7b66f1cf.run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let showSidebar = false;
  let showDrawer = false;
  if (typeof window != "undefined") {
    if (window.location.href.includes("/docs/"))
      showSidebar = true;
  }
  const click_handler = () => window.location.href = "/";
  const click_handler_1 = () => window.location.href = "/";
  const click_handler_2 = () => $$invalidate(1, showDrawer = true);
  const click_handler_3 = () => $$invalidate(1, showDrawer = false);
  return [
    showSidebar,
    showDrawer,
    click_handler,
    click_handler_1,
    click_handler_2,
    click_handler_3
  ];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, {});
  }
}
export default Component;
