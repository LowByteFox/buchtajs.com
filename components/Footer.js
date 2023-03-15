globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Footer.js";
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
function add_css(target) {
  $$7b66f1cf.append_styles(target, "svelte-ucuuyk", "footer.svelte-ucuuyk.svelte-ucuuyk{background-color:black;margin-top:auto}footer.svelte-ucuuyk>.svelte-ucuuyk{color:white}");
}
function create_if_block(ctx) {
  let h4;
  let t0;
  let a;
  let t1;
  return {
    c() {
      h4 = $$7b66f1cf.element("h4");
      t0 = $$7b66f1cf.text("Color scheme inspired by ");
      a = $$7b66f1cf.element("a");
      t1 = $$7b66f1cf.text("Ookami Mio");
      this.h();
    },
    l(nodes) {
      h4 = $$7b66f1cf.claim_element(nodes, "H4", { class: true });
      var h4_nodes = $$7b66f1cf.children(h4);
      t0 = $$7b66f1cf.claim_text(h4_nodes, "Color scheme inspired by ");
      a = $$7b66f1cf.claim_element(h4_nodes, "A", {
        class: true,
        href: true,
        target: true,
        rel: true
      });
      var a_nodes = $$7b66f1cf.children(a);
      t1 = $$7b66f1cf.claim_text(a_nodes, "Ookami Mio");
      a_nodes.forEach($$7b66f1cf.detach);
      h4_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(a, "class", "text-secondary");
      $$7b66f1cf.attr(a, "href", "https://hololive.hololivepro.com/en/talents/ookami-mio/");
      $$7b66f1cf.attr(a, "target", "_blank");
      $$7b66f1cf.attr(a, "rel", "noreferrer");
      $$7b66f1cf.attr(h4, "class", "svelte-ucuuyk");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, h4, anchor);
      $$7b66f1cf.append_hydration(h4, t0);
      $$7b66f1cf.append_hydration(h4, a);
      $$7b66f1cf.append_hydration(a, t1);
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(h4);
    }
  };
}
function create_fragment(ctx) {
  let footer;
  let h3;
  let t0;
  let t1;
  let t2;
  let t3;
  let t4;
  let if_block = ctx[0] && create_if_block(ctx);
  return {
    c() {
      footer = $$7b66f1cf.element("footer");
      h3 = $$7b66f1cf.element("h3");
      t0 = $$7b66f1cf.text("Built with Buchta v");
      t1 = $$7b66f1cf.text(buchtaVersion);
      t2 = $$7b66f1cf.text(" and Bun v");
      t3 = $$7b66f1cf.text(bunVersion);
      t4 = $$7b66f1cf.space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      footer = $$7b66f1cf.claim_element(nodes, "FOOTER", { class: true });
      var footer_nodes = $$7b66f1cf.children(footer);
      h3 = $$7b66f1cf.claim_element(footer_nodes, "H3", { class: true });
      var h3_nodes = $$7b66f1cf.children(h3);
      t0 = $$7b66f1cf.claim_text(h3_nodes, "Built with Buchta v");
      t1 = $$7b66f1cf.claim_text(h3_nodes, buchtaVersion);
      t2 = $$7b66f1cf.claim_text(h3_nodes, " and Bun v");
      t3 = $$7b66f1cf.claim_text(h3_nodes, bunVersion);
      h3_nodes.forEach($$7b66f1cf.detach);
      t4 = $$7b66f1cf.claim_space(footer_nodes);
      if (if_block)
        if_block.l(footer_nodes);
      footer_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h3, "class", "svelte-ucuuyk");
      $$7b66f1cf.attr(footer, "class", "flex flex-col justify-center h-24 items-center w-screen text-md p-2 svelte-ucuuyk");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, footer, anchor);
      $$7b66f1cf.append_hydration(footer, h3);
      $$7b66f1cf.append_hydration(h3, t0);
      $$7b66f1cf.append_hydration(h3, t1);
      $$7b66f1cf.append_hydration(h3, t2);
      $$7b66f1cf.append_hydration(h3, t3);
      $$7b66f1cf.append_hydration(footer, t4);
      if (if_block)
        if_block.m(footer, null);
    },
    p(ctx, [dirty]) {
      if (ctx[0])
        if (if_block)
          ;
        else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(footer, null);
        }
      else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(footer);
      if (if_block)
        if_block.d();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { ookami = false } = $$props;
  $$self.$$set = ($$props) => {
    if ("ookami" in $$props)
      $$invalidate(0, ookami = $$props.ookami);
  };
  return [ookami];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, { ookami: 0 }, add_css);
  }
}
export default Component;
