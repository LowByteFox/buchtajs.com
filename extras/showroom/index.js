globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/showroom/index.svelte";
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
import { $7b66f1cf} from "http://localhost/node_modules.58d4842e2df40001.bun";
var $$7b66f1cf = $7b66f1cf();
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let project;
  let current;
  project = new Project({
    props: {
      name: ctx[0].name,
      description: ctx[0].description,
      cover: ctx[0].cover,
      url: ctx[0].url
    }
  });
  return {
    c() {
      $$7b66f1cf.create_component(project.$$.fragment);
    },
    l(nodes) {
      $$7b66f1cf.claim_component(project.$$.fragment, nodes);
    },
    m(target, anchor) {
      $$7b66f1cf.mount_component(project, target, anchor);
      current = true;
    },
    p: $$7b66f1cf.noop,
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(project.$$.fragment, local);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(project.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      $$7b66f1cf.destroy_component(project, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let main;
  let h1;
  let t0;
  let t1;
  let div;
  let current;
  let each_value = projects;
  let each_blocks = [];
  for (let i = 0;i < each_value.length; i += 1)
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  const out = (i) => $$7b66f1cf.transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      main = $$7b66f1cf.element("main");
      h1 = $$7b66f1cf.element("h1");
      t0 = $$7b66f1cf.text("List of websites made using Buchta");
      t1 = $$7b66f1cf.space();
      div = $$7b66f1cf.element("div");
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].c();
      this.h();
    },
    l(nodes) {
      main = $$7b66f1cf.claim_element(nodes, "MAIN", { class: true });
      var main_nodes = $$7b66f1cf.children(main);
      h1 = $$7b66f1cf.claim_element(main_nodes, "H1", { class: true });
      var h1_nodes = $$7b66f1cf.children(h1);
      t0 = $$7b66f1cf.claim_text(h1_nodes, "List of websites made using Buchta");
      h1_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(main_nodes);
      div = $$7b66f1cf.claim_element(main_nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].l(div_nodes);
      div_nodes.forEach($$7b66f1cf.detach);
      main_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h1, "class", "font-bold text-white mb-5");
      $$7b66f1cf.attr(div, "class", "grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 ");
      $$7b66f1cf.attr(main, "class", "w-[95%] md:w-[85%] m-auto mt-16 mb-5");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, main, anchor);
      $$7b66f1cf.append_hydration(main, h1);
      $$7b66f1cf.append_hydration(h1, t0);
      $$7b66f1cf.append_hydration(main, t1);
      $$7b66f1cf.append_hydration(main, div);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].m(div, null);
      current = true;
    },
    p(ctx, dirty) {
      if (dirty & 0) {
        each_value = projects;
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
            each_blocks[i].m(div, null);
          }
        }
        $$7b66f1cf.group_outros();
        for (i = each_value.length;i < each_blocks.length; i += 1)
          out(i);
        $$7b66f1cf.check_outros();
      }
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
        $$7b66f1cf.detach(main);
      $$7b66f1cf.destroy_each(each_blocks, detaching);
    }
  };
}
function create_fragment(ctx) {
  let layout;
  let current;
  layout = new Layout({
    props: {
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
      if (dirty & 8)
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

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, null, create_fragment, $$7b66f1cf.safe_not_equal, {});
  }
}
export default Component;
