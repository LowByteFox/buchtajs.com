const buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Footer.svelte";
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
function add_css(target) {
  $$7b66f1cf.append_styles(target, "svelte-ucuuyk", "footer.svelte-ucuuyk.svelte-ucuuyk{background-color:black;margin-top:auto}footer.svelte-ucuuyk>.svelte-ucuuyk{color:white}");
}
function create_fragment(ctx) {
  let footer;
  let h3;
  let t0;
  let t1;
  let t2;
  let t3;
  return {
    c() {
      footer = $$7b66f1cf.element("footer");
      h3 = $$7b66f1cf.element("h3");
      t0 = $$7b66f1cf.text("Built with Buchta v");
      t1 = $$7b66f1cf.text(buchtaVersion);
      t2 = $$7b66f1cf.text(" and Bun v");
      t3 = $$7b66f1cf.text(bunVersion);
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
      footer_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h3, "class", "svelte-ucuuyk");
      $$7b66f1cf.attr(footer, "class", "flex flex-row md:pl-36 md:pr-36 gap-5 h-24 items-center w-screen text-md p-2 svelte-ucuuyk");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, footer, anchor);
      $$7b66f1cf.append_hydration(footer, h3);
      $$7b66f1cf.append_hydration(h3, t0);
      $$7b66f1cf.append_hydration(h3, t1);
      $$7b66f1cf.append_hydration(h3, t2);
      $$7b66f1cf.append_hydration(h3, t3);
    },
    p: $$7b66f1cf.noop,
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(footer);
    }
  };
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, null, create_fragment, $$7b66f1cf.safe_not_equal, {}, add_css);
  }
}
export default Component;
