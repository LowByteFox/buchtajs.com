globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Project.svelte";
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
function create_fragment(ctx) {
  let div;
  let img;
  let img_src_value;
  let t0;
  let h2;
  let t1;
  let t2;
  let h3;
  let t3;
  let mounted;
  let dispose;
  return {
    c() {
      div = $$7b66f1cf.element("div");
      img = $$7b66f1cf.element("img");
      t0 = $$7b66f1cf.space();
      h2 = $$7b66f1cf.element("h2");
      t1 = $$7b66f1cf.text(ctx[0]);
      t2 = $$7b66f1cf.space();
      h3 = $$7b66f1cf.element("h3");
      t3 = $$7b66f1cf.text(ctx[1]);
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      img = $$7b66f1cf.claim_element(div_nodes, "IMG", { src: true, alt: true, class: true });
      t0 = $$7b66f1cf.claim_space(div_nodes);
      h2 = $$7b66f1cf.claim_element(div_nodes, "H2", { class: true });
      var h2_nodes = $$7b66f1cf.children(h2);
      t1 = $$7b66f1cf.claim_text(h2_nodes, ctx[0]);
      h2_nodes.forEach($$7b66f1cf.detach);
      t2 = $$7b66f1cf.claim_space(div_nodes);
      h3 = $$7b66f1cf.claim_element(div_nodes, "H3", { class: true });
      var h3_nodes = $$7b66f1cf.children(h3);
      t3 = $$7b66f1cf.claim_text(h3_nodes, ctx[1]);
      h3_nodes.forEach($$7b66f1cf.detach);
      div_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      if (!$$7b66f1cf.src_url_equal(img.src, img_src_value = ctx[2]))
        $$7b66f1cf.attr(img, "src", img_src_value);
      $$7b66f1cf.attr(img, "alt", "Website Cover");
      $$7b66f1cf.attr(img, "class", "object-scale-down");
      $$7b66f1cf.attr(h2, "class", "text-white font-bold");
      $$7b66f1cf.attr(h3, "class", "text-white");
      $$7b66f1cf.attr(div, "class", "flex flex-col text-center bg-black backdrop-blur-md bg-opacity-30 drop-shadow-md hover:scale-105 transition-transform p-5 gap-2.5 rounded-lg cursor-pointer");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
      $$7b66f1cf.append_hydration(div, img);
      $$7b66f1cf.append_hydration(div, t0);
      $$7b66f1cf.append_hydration(div, h2);
      $$7b66f1cf.append_hydration(h2, t1);
      $$7b66f1cf.append_hydration(div, t2);
      $$7b66f1cf.append_hydration(div, h3);
      $$7b66f1cf.append_hydration(h3, t3);
      if (!mounted) {
        dispose = $$7b66f1cf.listen(div, "click", ctx[4]);
        mounted = true;
      }
    },
    p(ctx, [dirty]) {
      if (dirty & 4 && !$$7b66f1cf.src_url_equal(img.src, img_src_value = ctx[2]))
        $$7b66f1cf.attr(img, "src", img_src_value);
      if (dirty & 1)
        $$7b66f1cf.set_data(t1, ctx[0]);
      if (dirty & 2)
        $$7b66f1cf.set_data(t3, ctx[1]);
    },
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { name } = $$props;
  let { description } = $$props;
  let { cover } = $$props;
  let { url } = $$props;
  const click_handler = () => window.location.href = url;
  $$self.$$set = ($$props) => {
    if ("name" in $$props)
      $$invalidate(0, name = $$props.name);
    if ("description" in $$props)
      $$invalidate(1, description = $$props.description);
    if ("cover" in $$props)
      $$invalidate(2, cover = $$props.cover);
    if ("url" in $$props)
      $$invalidate(3, url = $$props.url);
  };
  return [name, description, cover, url, click_handler];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, {
      name: 0,
      description: 1,
      cover: 2,
      url: 3
    });
  }
}
export default Component;
