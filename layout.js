import Confetti from "./components/Confetti.js"
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"

import {
__require as require
} from "./bundle.js";
import { $7b66f1cf, $f6e9706, $d7217306} from "./bundle.js";
var common_4d20_0 = $d7217306();
const buchtaRoute = () => {
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
let bunVersion = "0.5.6";
let buchtaVersion = "0.5-rc2";
let getDocsTree = [
  "docs/buchta",
  "docs/[page]"
];
var $$7b66f1cf = $7b66f1cf();
var $$f6e9706 = $f6e9706();
function add_css(target) {
  $$7b66f1cf.append_styles(target, "svelte-180lr59", "main.svelte-180lr59:not(#confetti){display:flex;flex-direction:column}div.svelte-180lr59:not(#confetti){min-height:calc(100vh - 96px);width:100vw;background-image:linear-gradient(\n            to right top,\n            #051937,\n            #004d7a,\n            #008793,\n            #00bf72,\n            #a8eb12\n        )}");
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
  let current;
  navbar = new Navbar({ props: { route: ctx[0] } });
  const default_slot_template = ctx[2].default;
  const default_slot = $$7b66f1cf.create_slot(default_slot_template, ctx, ctx[1], null);
  footer = new Footer({});
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
      main_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(div0, "class", "svelte-180lr59");
      $$7b66f1cf.attr(div1, "class", "top-0 fixed left-0 Z-50 svelte-180lr59");
      $$7b66f1cf.attr(div1, "id", "confetti");
      $$7b66f1cf.attr(main, "class", "svelte-180lr59");
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
      current = true;
    },
    p(ctx, [dirty]) {
      const navbar_changes = {};
      if (dirty & 1)
        navbar_changes.route = ctx[0];
      navbar.$set(navbar_changes);
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 2))
          $$7b66f1cf.update_slot_base(default_slot, default_slot_template, ctx, ctx[1], !current ? $$7b66f1cf.get_all_dirty_from_scope(ctx[1]) : $$7b66f1cf.get_slot_changes(default_slot_template, ctx[1], dirty, null), null);
      }
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(navbar.$$.fragment, local);
      $$7b66f1cf.transition_in(default_slot, local);
      $$7b66f1cf.transition_in(footer.$$.fragment, local);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(navbar.$$.fragment, local);
      $$7b66f1cf.transition_out(default_slot, local);
      $$7b66f1cf.transition_out(footer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(main);
      $$7b66f1cf.destroy_component(navbar);
      if (default_slot)
        default_slot.d(detaching);
      $$7b66f1cf.destroy_component(footer);
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
  let { route } = $$props;
  $$self.$$set = ($$props) => {
    if ("route" in $$props)
      $$invalidate(0, route = $$props.route);
    if ("$$scope" in $$props)
      $$invalidate(1, $$scope = $$props.$$scope);
  };
  return [route, $$scope, slots];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, { route: 0 }, add_css);
  }
}
export default Component;

new Component({
    target: document.body,
    hydrate: true
});
