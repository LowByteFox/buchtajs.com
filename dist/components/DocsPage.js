globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/components/DocsPage.svelte";
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
let buchtaVersion = "0.5-rc3";
let getDocsTree = [
  "docs/Buchta",
  "docs/Bundler",
  "docs/Request",
  "docs/Response",
  "docs/Subrouter",
  "docs/[page]"
];
import { $7b66f1cf, $f6e9706} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
var $$f6e9706 = $f6e9706();
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function create_else_block(ctx) {
  let div;
  let t0;
  let t1;
  let ul;
  let each_value = document.querySelectorAll(".code-part h1");
  let each_blocks = [];
  for (let i = 0;i < each_value.length; i += 1)
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  return {
    c() {
      div = $$7b66f1cf.element("div");
      t0 = $$7b66f1cf.text(ctx[0]);
      t1 = $$7b66f1cf.space();
      ul = $$7b66f1cf.element("ul");
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].c();
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      t0 = $$7b66f1cf.claim_text(div_nodes, ctx[0]);
      div_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(nodes);
      ul = $$7b66f1cf.claim_element(nodes, "UL", { class: true });
      var ul_nodes = $$7b66f1cf.children(ul);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].l(ul_nodes);
      ul_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(div, "class", "text-xl");
      $$7b66f1cf.attr(ul, "class", "text-xl overflow-visible overscroll-auto");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
      $$7b66f1cf.append_hydration(div, t0);
      $$7b66f1cf.insert_hydration(target, t1, anchor);
      $$7b66f1cf.insert_hydration(target, ul, anchor);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].m(ul, null);
    },
    p(ctx, dirty) {
      if (dirty & 1)
        $$7b66f1cf.set_data(t0, ctx[0]);
      if (dirty & 0) {
        each_value = document.querySelectorAll(".code-part h1");
        let i;
        for (i = 0;i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);
          if (each_blocks[i])
            each_blocks[i].p(child_ctx, dirty);
          else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(ul, null);
          }
        }
        for (;i < each_blocks.length; i += 1)
          each_blocks[i].d(1);
        each_blocks.length = each_value.length;
      }
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
      if (detaching)
        $$7b66f1cf.detach(t1);
      if (detaching)
        $$7b66f1cf.detach(ul);
      $$7b66f1cf.destroy_each(each_blocks, detaching);
    }
  };
}
function create_if_block(ctx) {
  let a;
  let t;
  let a_href_value;
  return {
    c() {
      a = $$7b66f1cf.element("a");
      t = $$7b66f1cf.text(ctx[0]);
      this.h();
    },
    l(nodes) {
      a = $$7b66f1cf.claim_element(nodes, "A", { class: true, href: true });
      var a_nodes = $$7b66f1cf.children(a);
      t = $$7b66f1cf.claim_text(a_nodes, ctx[0]);
      a_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(a, "class", "text-xl");
      $$7b66f1cf.attr(a, "href", a_href_value = "/docs/" + ctx[0] + "/");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, a, anchor);
      $$7b66f1cf.append_hydration(a, t);
    },
    p(ctx, dirty) {
      if (dirty & 1)
        $$7b66f1cf.set_data(t, ctx[0]);
      if (dirty & 1 && a_href_value !== (a_href_value = "/docs/" + ctx[0] + "/"))
        $$7b66f1cf.attr(a, "href", a_href_value);
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(a);
    }
  };
}
function create_each_block(ctx) {
  let li;
  let a;
  let t0_value = ctx[3].innerText + "";
  let t0;
  let a_href_value;
  let t1;
  return {
    c() {
      li = $$7b66f1cf.element("li");
      a = $$7b66f1cf.element("a");
      t0 = $$7b66f1cf.text(t0_value);
      t1 = $$7b66f1cf.space();
      this.h();
    },
    l(nodes) {
      li = $$7b66f1cf.claim_element(nodes, "LI", { class: true });
      var li_nodes = $$7b66f1cf.children(li);
      a = $$7b66f1cf.claim_element(li_nodes, "A", { href: true });
      var a_nodes = $$7b66f1cf.children(a);
      t0 = $$7b66f1cf.claim_text(a_nodes, t0_value);
      a_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(li_nodes);
      li_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(a, "href", a_href_value = "#" + ctx[3].innerText.toLowerCase().replaceAll(" ", "-"));
      $$7b66f1cf.attr(li, "class", "ml-5 list-disc font-bold");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, li, anchor);
      $$7b66f1cf.append_hydration(li, a);
      $$7b66f1cf.append_hydration(a, t0);
      $$7b66f1cf.append_hydration(li, t1);
    },
    p: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(li);
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  function select_block_type(ctx, dirty) {
    if (!ctx[1])
      return create_if_block;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx, -1);
  let if_block = current_block_type(ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = $$7b66f1cf.empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = $$7b66f1cf.empty();
    },
    m(target, anchor) {
      if_block.m(target, anchor);
      $$7b66f1cf.insert_hydration(target, if_block_anchor, anchor);
    },
    p(ctx, [dirty]) {
      if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block)
        if_block.p(ctx, dirty);
      else {
        if_block.d(1);
        if_block = current_block_type(ctx);
        if (if_block) {
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      }
    },
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      if_block.d(detaching);
      if (detaching)
        $$7b66f1cf.detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { name } = $$props;
  let { route } = $$props;
  let parseHeaders = false;
  $$f6e9706.onMount(() => {
    if (route && route.params) {
      if (route.params.get("page") == name)
        $$invalidate(1, parseHeaders = true);
    }
  });
  $$self.$$set = ($$props) => {
    if ("name" in $$props)
      $$invalidate(0, name = $$props.name);
    if ("route" in $$props)
      $$invalidate(2, route = $$props.route);
  };
  return [name, parseHeaders, route];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, { name: 0, route: 2 });
  }
}
export default Component;
