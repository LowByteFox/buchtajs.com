import DocsPage from "./DocsPage.js"

globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Sidebar.svelte";
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
let buchtaVersion = "0.5-rc3";
let getDocsTree = [
  "docs/buchta",
  "docs/[page]"
];
import { $7b66f1cf} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let docspage;
  let current;
  docspage = new DocsPage({
    props: {
      name: ctx[2].slice(5),
      route: ctx[1]
    }
  });
  return {
    c() {
      $$7b66f1cf.create_component(docspage.$$.fragment);
    },
    l(nodes) {
      $$7b66f1cf.claim_component(docspage.$$.fragment, nodes);
    },
    m(target, anchor) {
      $$7b66f1cf.mount_component(docspage, target, anchor);
      current = true;
    },
    p: $$7b66f1cf.noop,
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(docspage.$$.fragment, local);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(docspage.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      $$7b66f1cf.destroy_component(docspage, detaching);
    }
  };
}
function create_each_block(ctx) {
  let show_if = !ctx[2].includes("[page]");
  let if_block_anchor;
  let current;
  let if_block = show_if && create_if_block(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = $$7b66f1cf.empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = $$7b66f1cf.empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      $$7b66f1cf.insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx, dirty) {
      if (show_if)
        if_block.p(ctx, dirty);
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
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        $$7b66f1cf.detach(if_block_anchor);
    }
  };
}
function create_fragment(ctx) {
  let div1;
  let h2;
  let a;
  let t0;
  let t1;
  let div0;
  let div1_class_value;
  let current;
  let each_value = getDocsTree;
  let each_blocks = [];
  for (let i = 0;i < each_value.length; i += 1)
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  const out = (i) => $$7b66f1cf.transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div1 = $$7b66f1cf.element("div");
      h2 = $$7b66f1cf.element("h2");
      a = $$7b66f1cf.element("a");
      t0 = $$7b66f1cf.text("Get started");
      t1 = $$7b66f1cf.space();
      div0 = $$7b66f1cf.element("div");
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].c();
      this.h();
    },
    l(nodes) {
      div1 = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div1_nodes = $$7b66f1cf.children(div1);
      h2 = $$7b66f1cf.claim_element(div1_nodes, "H2", { class: true });
      var h2_nodes = $$7b66f1cf.children(h2);
      a = $$7b66f1cf.claim_element(h2_nodes, "A", { href: true });
      var a_nodes = $$7b66f1cf.children(a);
      t0 = $$7b66f1cf.claim_text(a_nodes, "Get started");
      a_nodes.forEach($$7b66f1cf.detach);
      h2_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(div1_nodes);
      div0 = $$7b66f1cf.claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = $$7b66f1cf.children(div0);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].l(div0_nodes);
      div0_nodes.forEach($$7b66f1cf.detach);
      div1_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(a, "href", "/docs/");
      $$7b66f1cf.attr(h2, "class", "mb-5 mr-5");
      $$7b66f1cf.attr(div0, "class", "overscroll-auto overflow-auto");
      $$7b66f1cf.attr(div1, "class", div1_class_value = "mr-8 w-full lg:w-[15%] md:border-r-2 lg:block font-bold " + (ctx[0] ? "hidden" : ""));
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div1, anchor);
      $$7b66f1cf.append_hydration(div1, h2);
      $$7b66f1cf.append_hydration(h2, a);
      $$7b66f1cf.append_hydration(a, t0);
      $$7b66f1cf.append_hydration(div1, t1);
      $$7b66f1cf.append_hydration(div1, div0);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].m(div0, null);
      current = true;
    },
    p(ctx, [dirty]) {
      if (dirty & 2) {
        each_value = getDocsTree;
        let i;
        for (i = 0;i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            $$7b66f1cf.transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            $$7b66f1cf.transition_in(each_blocks[i], 1);
            each_blocks[i].m(div0, null);
          }
        }
        $$7b66f1cf.group_outros();
        for (i = each_value.length;i < each_blocks.length; i += 1)
          out(i);
        $$7b66f1cf.check_outros();
      }
      if (!current || dirty & 1 && div1_class_value !== (div1_class_value = "mr-8 w-full lg:w-[15%] md:border-r-2 lg:block font-bold " + (ctx[0] ? "hidden" : "")))
        $$7b66f1cf.attr(div1, "class", div1_class_value);
    },
    i(local) {
      if (current)
        return;
      for (let i = 0;i < each_value.length; i += 1)
        $$7b66f1cf.transition_in(each_blocks[i]);
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0;i < each_blocks.length; i += 1)
        $$7b66f1cf.transition_out(each_blocks[i]);
      current = false;
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div1);
      $$7b66f1cf.destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  const route = buchtaRoute();
  let { hide = true } = $$props;
  $$self.$$set = ($$props) => {
    if ("hide" in $$props)
      $$invalidate(0, hide = $$props.hide);
  };
  return [hide, route];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, { hide: 0 });
  }
}
export default Component;
