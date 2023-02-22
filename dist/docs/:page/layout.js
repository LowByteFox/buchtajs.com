import Sidebar from "../../components/Sidebar.js"
import Layout from "../../layout.js"

const buchtaRoute = () => {
  let params = new Map;
  const path = "/docs/:page/layout.svelte";
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
import { $7b66f1cf} from "./../../bundle.js";
var $$7b66f1cf = $7b66f1cf();
function add_css(target) {
  $$7b66f1cf.append_styles(target, "svelte-pob63f", ".docs-page.svelte-pob63f{min-height:calc(100vh - 96px * 2)}h1{font-weight:bold}");
}
function create_default_slot(ctx) {
  let div1;
  let sidebar;
  let t;
  let div0;
  let current;
  sidebar = new Sidebar({ props: { route: ctx[0] } });
  return {
    c() {
      div1 = $$7b66f1cf.element("div");
      $$7b66f1cf.create_component(sidebar.$$.fragment);
      t = $$7b66f1cf.space();
      div0 = $$7b66f1cf.element("div");
      this.h();
    },
    l(nodes) {
      div1 = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div1_nodes = $$7b66f1cf.children(div1);
      $$7b66f1cf.claim_component(sidebar.$$.fragment, div1_nodes);
      t = $$7b66f1cf.claim_space(div1_nodes);
      div0 = $$7b66f1cf.claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = $$7b66f1cf.children(div0);
      div0_nodes.forEach($$7b66f1cf.detach);
      div1_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(div0, "class", "overflow-x-auto code-part w-full");
      $$7b66f1cf.attr(div1, "class", "flex flex-row w-[95%] md:w-[85%] m-auto mt-16 text-white bg-white backdrop-blur-md bg-opacity-30 drop-shadow-lg rounded-md p-5 docs-page svelte-pob63f");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div1, anchor);
      $$7b66f1cf.mount_component(sidebar, div1, null);
      $$7b66f1cf.append_hydration(div1, t);
      $$7b66f1cf.append_hydration(div1, div0);
      div0.innerHTML = ctx[1];
      current = true;
    },
    p(ctx, dirty) {
      const sidebar_changes = {};
      if (dirty & 1)
        sidebar_changes.route = ctx[0];
      sidebar.$set(sidebar_changes);
      if (!current || dirty & 2)
        div0.innerHTML = ctx[1];
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
      if (detaching)
        $$7b66f1cf.detach(div1);
      $$7b66f1cf.destroy_component(sidebar);
    }
  };
}
function create_fragment(ctx) {
  let layout;
  let current;
  layout = new Layout({
    props: {
      route: ctx[0],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      $$7b66f1cf.create_component(layout.$$.fragment);
    },
    l(nodes) {
      $$7b66f1cf.claim_component(layout.$$.fragment, nodes);
    },
    m(target, anchor) {
      $$7b66f1cf.mount_component(layout, target, anchor);
      current = true;
    },
    p(ctx, [dirty]) {
      const layout_changes = {};
      if (dirty & 1)
        layout_changes.route = ctx[0];
      if (dirty & 7)
        layout_changes.$$scope = { dirty, ctx };
      layout.$set(layout_changes);
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(layout.$$.fragment, local);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(layout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      $$7b66f1cf.destroy_component(layout, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { route } = $$props;
  let { htmlCode } = $$props;
  $$self.$$set = ($$props) => {
    if ("route" in $$props)
      $$invalidate(0, route = $$props.route);
    if ("htmlCode" in $$props)
      $$invalidate(1, htmlCode = $$props.htmlCode);
  };
  return [route, htmlCode];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, { route: 0, htmlCode: 1 }, add_css);
  }
}
export default Component;

new Component({
    target: document.body,
    hydrate: true
});
