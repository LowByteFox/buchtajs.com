globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/components/CarouselPage.js";
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
let bunVersion = "0.5.8";
let buchtaVersion = "0.5";
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
  "docs/[page]"
];
import { $7b66f1cf} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
function create_fragment(ctx) {
  let div1;
  let div0;
  let img;
  let img_src_value;
  let t0;
  let h2;
  let t1;
  let t2;
  let current;
  const default_slot_template = ctx[3].default;
  const default_slot = $$7b66f1cf.create_slot(default_slot_template, ctx, ctx[2], null);
  return {
    c() {
      div1 = $$7b66f1cf.element("div");
      div0 = $$7b66f1cf.element("div");
      img = $$7b66f1cf.element("img");
      t0 = $$7b66f1cf.space();
      h2 = $$7b66f1cf.element("h2");
      t1 = $$7b66f1cf.text(ctx[1]);
      t2 = $$7b66f1cf.space();
      if (default_slot)
        default_slot.c();
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
        height: true,
        width: true
      });
      t0 = $$7b66f1cf.claim_space(div0_nodes);
      h2 = $$7b66f1cf.claim_element(div0_nodes, "H2", { class: true });
      var h2_nodes = $$7b66f1cf.children(h2);
      t1 = $$7b66f1cf.claim_text(h2_nodes, ctx[1]);
      h2_nodes.forEach($$7b66f1cf.detach);
      div0_nodes.forEach($$7b66f1cf.detach);
      t2 = $$7b66f1cf.claim_space(div1_nodes);
      if (default_slot)
        default_slot.l(div1_nodes);
      div1_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(img, "class", "white-svg object-scale-down h-12");
      if (!$$7b66f1cf.src_url_equal(img.src, img_src_value = "/icons/" + ctx[0]))
        $$7b66f1cf.attr(img, "src", img_src_value);
      $$7b66f1cf.attr(img, "alt", "Icon");
      $$7b66f1cf.attr(img, "height", "48");
      $$7b66f1cf.attr(img, "width", "48");
      $$7b66f1cf.attr(h2, "class", "font-bold");
      $$7b66f1cf.attr(div0, "class", "flex flex-row justify-center items-center gap-5");
      $$7b66f1cf.attr(div1, "class", "mt-5");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div1, anchor);
      $$7b66f1cf.append_hydration(div1, div0);
      $$7b66f1cf.append_hydration(div0, img);
      $$7b66f1cf.append_hydration(div0, t0);
      $$7b66f1cf.append_hydration(div0, h2);
      $$7b66f1cf.append_hydration(h2, t1);
      $$7b66f1cf.append_hydration(div1, t2);
      if (default_slot)
        default_slot.m(div1, null);
      current = true;
    },
    p(ctx, [dirty]) {
      if (!current || dirty & 1 && !$$7b66f1cf.src_url_equal(img.src, img_src_value = "/icons/" + ctx[0]))
        $$7b66f1cf.attr(img, "src", img_src_value);
      if (!current || dirty & 2)
        $$7b66f1cf.set_data(t1, ctx[1]);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4))
          $$7b66f1cf.update_slot_base(default_slot, default_slot_template, ctx, ctx[2], !current ? $$7b66f1cf.get_all_dirty_from_scope(ctx[2]) : $$7b66f1cf.get_slot_changes(default_slot_template, ctx[2], dirty, null), null);
      }
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div1);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { iconName = "empty.svg" } = $$props;
  let { title } = $$props;
  $$self.$$set = ($$props) => {
    if ("iconName" in $$props)
      $$invalidate(0, iconName = $$props.iconName);
    if ("title" in $$props)
      $$invalidate(1, title = $$props.title);
    if ("$$scope" in $$props)
      $$invalidate(2, $$scope = $$props.$$scope);
  };
  return [iconName, title, $$scope, slots];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, { iconName: 0, title: 1 });
  }
}
export default Component;
