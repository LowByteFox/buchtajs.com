import Confetti from "./components/Confetti.js"
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import Foob from "./components/Foob.js"

import {
__require as require
} from "./bundle.js";
import { $7b66f1cf, $f6e9706, $d7217306} from "./bundle.js";
var common_4d20_0 = $d7217306();
globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/layout.svelte";
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
let bunVersion = "0.5.7";
let buchtaVersion = "0.5-rc4";
let getDocsTree = [
  "docs/Buchta",
  "docs/Bundler",
  "docs/Cli",
  "docs/Request",
  "docs/Response",
  "docs/Subrouter",
  "docs/[page]"
];
var $$7b66f1cf = $7b66f1cf();
var $$f6e9706 = $f6e9706();
function add_css(target) {
  $$7b66f1cf.append_styles(target, "svelte-6l21ds", "main.svelte-6l21ds:not(#confetti):not(#foob){display:flex;flex-direction:column}div.svelte-6l21ds:not(#confetti):not(#foob){min-height:calc(100vh - 96px);width:100vw}");
}
function create_fragment(ctx) {
  let main;
  let div0;
  let navbar;
  let t0;
  let t1;
  let footer;
  let t2;
  let div1;
  let t3;
  let div2;
  let foob;
  let current;
  navbar = new Navbar({});
  const default_slot_template = ctx[1].default;
  const default_slot = $$7b66f1cf.create_slot(default_slot_template, ctx, ctx[0], null);
  footer = new Footer({});
  foob = new Foob({});
  return {
    c() {
      main = $$7b66f1cf.element("main");
      div0 = $$7b66f1cf.element("div");
      $$7b66f1cf.create_component(navbar.$$.fragment);
      t0 = $$7b66f1cf.space();
      if (default_slot)
        default_slot.c();
      t1 = $$7b66f1cf.space();
      $$7b66f1cf.create_component(footer.$$.fragment);
      t2 = $$7b66f1cf.space();
      div1 = $$7b66f1cf.element("div");
      t3 = $$7b66f1cf.space();
      div2 = $$7b66f1cf.element("div");
      $$7b66f1cf.create_component(foob.$$.fragment);
      this.h();
    },
    l(nodes) {
      main = $$7b66f1cf.claim_element(nodes, "MAIN", { class: true });
      var main_nodes = $$7b66f1cf.children(main);
      div0 = $$7b66f1cf.claim_element(main_nodes, "DIV", { class: true });
      var div0_nodes = $$7b66f1cf.children(div0);
      $$7b66f1cf.claim_component(navbar.$$.fragment, div0_nodes);
      t0 = $$7b66f1cf.claim_space(div0_nodes);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(main_nodes);
      $$7b66f1cf.claim_component(footer.$$.fragment, main_nodes);
      t2 = $$7b66f1cf.claim_space(main_nodes);
      div1 = $$7b66f1cf.claim_element(main_nodes, "DIV", { class: true, id: true });
      var div1_nodes = $$7b66f1cf.children(div1);
      div1_nodes.forEach($$7b66f1cf.detach);
      t3 = $$7b66f1cf.claim_space(main_nodes);
      div2 = $$7b66f1cf.claim_element(main_nodes, "DIV", { id: true, class: true });
      var div2_nodes = $$7b66f1cf.children(div2);
      $$7b66f1cf.claim_component(foob.$$.fragment, div2_nodes);
      div2_nodes.forEach($$7b66f1cf.detach);
      main_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(div0, "class", "svelte-6l21ds");
      $$7b66f1cf.attr(div1, "class", "top-0 fixed left-0 z-50 svelte-6l21ds");
      $$7b66f1cf.attr(div1, "id", "confetti");
      $$7b66f1cf.attr(div2, "id", "foob");
      $$7b66f1cf.attr(div2, "class", "svelte-6l21ds");
      $$7b66f1cf.attr(main, "class", "svelte-6l21ds");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, main, anchor);
      $$7b66f1cf.append_hydration(main, div0);
      $$7b66f1cf.mount_component(navbar, div0, null);
      $$7b66f1cf.append_hydration(div0, t0);
      if (default_slot)
        default_slot.m(div0, null);
      $$7b66f1cf.append_hydration(main, t1);
      $$7b66f1cf.mount_component(footer, main, null);
      $$7b66f1cf.append_hydration(main, t2);
      $$7b66f1cf.append_hydration(main, div1);
      $$7b66f1cf.append_hydration(main, t3);
      $$7b66f1cf.append_hydration(main, div2);
      $$7b66f1cf.mount_component(foob, div2, null);
      current = true;
    },
    p(ctx, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 1))
          $$7b66f1cf.update_slot_base(default_slot, default_slot_template, ctx, ctx[0], !current ? $$7b66f1cf.get_all_dirty_from_scope(ctx[0]) : $$7b66f1cf.get_slot_changes(default_slot_template, ctx[0], dirty, null), null);
      }
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(navbar.$$.fragment, local);
      $$7b66f1cf.transition_in(default_slot, local);
      $$7b66f1cf.transition_in(footer.$$.fragment, local);
      $$7b66f1cf.transition_in(foob.$$.fragment, local);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(navbar.$$.fragment, local);
      $$7b66f1cf.transition_out(default_slot, local);
      $$7b66f1cf.transition_out(footer.$$.fragment, local);
      $$7b66f1cf.transition_out(foob.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(main);
      $$7b66f1cf.destroy_component(navbar);
      if (default_slot)
        default_slot.d(detaching);
      $$7b66f1cf.destroy_component(footer);
      $$7b66f1cf.destroy_component(foob);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  const hljs = require(common_4d20_0);
  $$f6e9706.onMount(() => {
    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el);
    });
  });
  $$self.$$set = ($$props) => {
    if ("$$scope" in $$props)
      $$invalidate(0, $$scope = $$props.$$scope);
  };
  return [$$scope, slots];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, {}, add_css);
  }
}
export default Component;
