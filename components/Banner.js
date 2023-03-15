globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Banner.js";
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
import { $7b66f1cf} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let div1;
  let div0;
  let img;
  let img_src_value;
  let t0;
  let h2;
  let t1_value = ctx[2][0] + "";
  let t1;
  return {
    c() {
      div1 = $$7b66f1cf.element("div");
      div0 = $$7b66f1cf.element("div");
      img = $$7b66f1cf.element("img");
      t0 = $$7b66f1cf.space();
      h2 = $$7b66f1cf.element("h2");
      t1 = $$7b66f1cf.text(t1_value);
      this.h();
    },
    l(nodes) {
      div1 = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div1_nodes = $$7b66f1cf.children(div1);
      div0 = $$7b66f1cf.claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = $$7b66f1cf.children(div0);
      img = $$7b66f1cf.claim_element(div0_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        width: true,
        height: true
      });
      div0_nodes.forEach($$7b66f1cf.detach);
      t0 = $$7b66f1cf.claim_space(div1_nodes);
      h2 = $$7b66f1cf.claim_element(div1_nodes, "H2", { class: true });
      var h2_nodes = $$7b66f1cf.children(h2);
      t1 = $$7b66f1cf.claim_text(h2_nodes, t1_value);
      h2_nodes.forEach($$7b66f1cf.detach);
      div1_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(img, "class", "h-12 white-svg");
      if (!$$7b66f1cf.src_url_equal(img.src, img_src_value = ctx[2][1]))
        $$7b66f1cf.attr(img, "src", img_src_value);
      $$7b66f1cf.attr(img, "alt", "");
      $$7b66f1cf.attr(img, "width", "48");
      $$7b66f1cf.attr(img, "height", "48");
      $$7b66f1cf.attr(div0, "class", "w-14 flex justify-center");
      $$7b66f1cf.attr(h2, "class", "font-bold text-white");
      $$7b66f1cf.attr(div1, "class", "flex flex-row items-center h-16 gap-5");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div1, anchor);
      $$7b66f1cf.append_hydration(div1, div0);
      $$7b66f1cf.append_hydration(div0, img);
      $$7b66f1cf.append_hydration(div1, t0);
      $$7b66f1cf.append_hydration(div1, h2);
      $$7b66f1cf.append_hydration(h2, t1);
    },
    p: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div1);
    }
  };
}
function create_fragment(ctx) {
  let div3;
  let div2;
  let h1;
  let t0;
  let t1;
  let h2;
  let t2;
  let t3;
  let div1;
  let div0;
  let t4;
  let button;
  let h3;
  let t5;
  let t6;
  let img;
  let img_src_value;
  let mounted;
  let dispose;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0;i < each_value.length; i += 1)
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  return {
    c() {
      div3 = $$7b66f1cf.element("div");
      div2 = $$7b66f1cf.element("div");
      h1 = $$7b66f1cf.element("h1");
      t0 = $$7b66f1cf.text("Buchta");
      t1 = $$7b66f1cf.space();
      h2 = $$7b66f1cf.element("h2");
      t2 = $$7b66f1cf.text("Full-Stack Framework Powered By Bun");
      t3 = $$7b66f1cf.space();
      div1 = $$7b66f1cf.element("div");
      div0 = $$7b66f1cf.element("div");
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].c();
      t4 = $$7b66f1cf.space();
      button = $$7b66f1cf.element("button");
      h3 = $$7b66f1cf.element("h3");
      t5 = $$7b66f1cf.text("Lets get started!");
      t6 = $$7b66f1cf.space();
      img = $$7b66f1cf.element("img");
      this.h();
    },
    l(nodes) {
      div3 = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div3_nodes = $$7b66f1cf.children(div3);
      div2 = $$7b66f1cf.claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = $$7b66f1cf.children(div2);
      h1 = $$7b66f1cf.claim_element(div2_nodes, "H1", { class: true });
      var h1_nodes = $$7b66f1cf.children(h1);
      t0 = $$7b66f1cf.claim_text(h1_nodes, "Buchta");
      h1_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(div2_nodes);
      h2 = $$7b66f1cf.claim_element(div2_nodes, "H2", { class: true });
      var h2_nodes = $$7b66f1cf.children(h2);
      t2 = $$7b66f1cf.claim_text(h2_nodes, "Full-Stack Framework Powered By Bun");
      h2_nodes.forEach($$7b66f1cf.detach);
      t3 = $$7b66f1cf.claim_space(div2_nodes);
      div1 = $$7b66f1cf.claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = $$7b66f1cf.children(div1);
      div0 = $$7b66f1cf.claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = $$7b66f1cf.children(div0);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].l(div0_nodes);
      t4 = $$7b66f1cf.claim_space(div0_nodes);
      button = $$7b66f1cf.claim_element(div0_nodes, "BUTTON", { class: true });
      var button_nodes = $$7b66f1cf.children(button);
      h3 = $$7b66f1cf.claim_element(button_nodes, "H3", { class: true });
      var h3_nodes = $$7b66f1cf.children(h3);
      t5 = $$7b66f1cf.claim_text(h3_nodes, "Lets get started!");
      h3_nodes.forEach($$7b66f1cf.detach);
      button_nodes.forEach($$7b66f1cf.detach);
      div0_nodes.forEach($$7b66f1cf.detach);
      t6 = $$7b66f1cf.claim_space(div1_nodes);
      img = $$7b66f1cf.claim_element(div1_nodes, "IMG", {
        class: true,
        src: true,
        alt: true,
        height: true,
        width: true
      });
      div1_nodes.forEach($$7b66f1cf.detach);
      div2_nodes.forEach($$7b66f1cf.detach);
      div3_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h1, "class", "text-[500%] mt-12 font-bold text-white");
      $$7b66f1cf.attr(h2, "class", "mt-4 ml-1 font-bold text-3xl text-secondary");
      $$7b66f1cf.attr(h3, "class", "m-0 p-0");
      $$7b66f1cf.attr(button, "class", "p-5 bg-black rounded-md text-white font-bold backdrop-blur-md bg-opacity-30 drop-shadow-lg w-auto");
      $$7b66f1cf.attr(div0, "class", "mt-12");
      $$7b66f1cf.attr(img, "class", "object-scale-down hidden lg:block");
      if (!$$7b66f1cf.src_url_equal(img.src, img_src_value = "/buchta.webp"))
        $$7b66f1cf.attr(img, "src", img_src_value);
      $$7b66f1cf.attr(img, "alt", "Logo");
      $$7b66f1cf.attr(img, "height", "580");
      $$7b66f1cf.attr(img, "width", "580");
      $$7b66f1cf.attr(div1, "class", "flex flex-row, justify-between");
      $$7b66f1cf.attr(div2, "class", "flex-grow");
      $$7b66f1cf.attr(div3, "class", "pt-24 w-[85%] m-auto justify-between items-center");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div3, anchor);
      $$7b66f1cf.append_hydration(div3, div2);
      $$7b66f1cf.append_hydration(div2, h1);
      $$7b66f1cf.append_hydration(h1, t0);
      $$7b66f1cf.append_hydration(div2, t1);
      $$7b66f1cf.append_hydration(div2, h2);
      $$7b66f1cf.append_hydration(h2, t2);
      $$7b66f1cf.append_hydration(div2, t3);
      $$7b66f1cf.append_hydration(div2, div1);
      $$7b66f1cf.append_hydration(div1, div0);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].m(div0, null);
      $$7b66f1cf.append_hydration(div0, t4);
      $$7b66f1cf.append_hydration(div0, button);
      $$7b66f1cf.append_hydration(button, h3);
      $$7b66f1cf.append_hydration(h3, t5);
      $$7b66f1cf.append_hydration(div1, t6);
      $$7b66f1cf.append_hydration(div1, img);
      if (!mounted) {
        dispose = $$7b66f1cf.listen(button, "click", ctx[1]);
        mounted = true;
      }
    },
    p(ctx, [dirty]) {
      if (dirty & 1) {
        each_value = ctx[0];
        let i;
        for (i = 0;i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);
          if (each_blocks[i])
            each_blocks[i].p(child_ctx, dirty);
          else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, t4);
          }
        }
        for (;i < each_blocks.length; i += 1)
          each_blocks[i].d(1);
        each_blocks.length = each_value.length;
      }
    },
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div3);
      $$7b66f1cf.destroy_each(each_blocks, detaching);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self) {
  const features = [
    ["Powerful", "/icons/speed.svg"],
    ["Lightweight", "/icons/feather.svg"],
    ["Extendable", "/icons/plug.svg"],
    ["SSR Support", "/icons/server.svg"],
    ["Markdown Support", "/icons/mkdown.svg"],
    ["Svelte Support", "/icons/js.svg"],
    ["Preact Support", "/icons/react.svg"],
    ["And Much More", "/icons/list.svg"]
  ];
  const click_handler = () => window.location = "#getStarted";
  return [features, click_handler];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, {});
  }
}
export default Component;
