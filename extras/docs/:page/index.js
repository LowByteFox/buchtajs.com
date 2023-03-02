globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/docs/:page/index.svelte";
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
let buchtaVersion = "0.5-rc5";
let getDocsTree = [
  "docs/Buchta",
  "docs/Bundler",
  "docs/Cli",
  "docs/Config",
  "docs/Plugins",
  "docs/Request",
  "docs/Response",
  "docs/Subrouter",
  "docs/Writing_Custom_Plugin",
  "docs/[page]"
];
import { $7b66f1cf, $b13d3c26} from "http://localhost/node_modules.58d4842e2df40001.bun";
var $$7b66f1cf = $7b66f1cf();
var $$b13d3c26 = $b13d3c26();
function create_catch_block(ctx) {
  return {
    c: $$7b66f1cf.noop,
    l: $$7b66f1cf.noop,
    m: $$7b66f1cf.noop,
    p: $$7b66f1cf.noop,
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d: $$7b66f1cf.noop
  };
}
function create_then_block(ctx) {
  let layout;
  let current;
  layout = new Layout({ props: { html: ctx[1] } });
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
    p: $$7b66f1cf.noop,
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
function create_pending_block(ctx) {
  let h1;
  let t;
  return {
    c() {
      h1 = $$7b66f1cf.element("h1");
      t = $$7b66f1cf.text("Please wait...");
      this.h();
    },
    l(nodes) {
      h1 = $$7b66f1cf.claim_element(nodes, "H1", { class: true });
      var h1_nodes = $$7b66f1cf.children(h1);
      t = $$7b66f1cf.claim_text(h1_nodes, "Please wait...");
      h1_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h1, "class", "text-primary");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, h1, anchor);
      $$7b66f1cf.append_hydration(h1, t);
    },
    p: $$7b66f1cf.noop,
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(h1);
    }
  };
}
function create_fragment(ctx) {
  let await_block_anchor;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 1,
    blocks: [, , ,]
  };
  $$7b66f1cf.handle_promise(promise = ctx[0](), info);
  return {
    c() {
      await_block_anchor = $$7b66f1cf.empty();
      info.block.c();
    },
    l(nodes) {
      await_block_anchor = $$7b66f1cf.empty();
      info.block.l(nodes);
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);
      info.mount = () => await_block_anchor.parentNode;
      info.anchor = await_block_anchor;
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      $$7b66f1cf.update_await_block_branch(info, ctx, dirty);
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i = 0;i < 3; i += 1) {
        const block = info.blocks[i];
        $$7b66f1cf.transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function instance($$self) {
  const getMk = async () => {
    const req = await fetch("./page.md");
    return Promise.resolve($$b13d3c26.parse(await req.text()));
  };
  return [getMk];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, {});
  }
}
export default Component;
