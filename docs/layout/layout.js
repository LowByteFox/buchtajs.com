import Sidebar from "../../components/Sidebar.js"
import Layout from "../../layout.js"

globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/docs/layout/layout.js";
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
let buchtaVersion = "0.5";
let bunVersion = "0.5.8";
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
  "docs/[page]",
  "docs/layout"
];
import { $7b66f1cf, $f6e9706} from "./../../bundle.js";
var $$7b66f1cf = $7b66f1cf();
var $$f6e9706 = $f6e9706();
function add_css(target) {
  $$7b66f1cf.append_styles(target, "svelte-yemzca", ".docs-page.svelte-yemzca{min-height:calc(100vh - 96px * 2)}");
}
function create_default_slot(ctx) {
  let div1;
  let sidebar;
  let t;
  let div0;
  let current;
  sidebar = new Sidebar({});
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
      $$7b66f1cf.attr(div0, "class", "overflow-x-auto code-part w-full ");
      $$7b66f1cf.attr(div1, "class", "flex flex-row w-[95%] md:w-[85%] m-auto mt-16 text-white bg-black backdrop-blur-md bg-opacity-30 drop-shadow-lg rounded-md p-5 docs-page mb-5 svelte-yemzca");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div1, anchor);
      $$7b66f1cf.mount_component(sidebar, div1, null);
      $$7b66f1cf.append_hydration(div1, t);
      $$7b66f1cf.append_hydration(div1, div0);
      div0.innerHTML = ctx[0];
      current = true;
    },
    p(ctx, dirty) {
      if (!current || dirty & 1)
        div0.innerHTML = ctx[0];
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
      if (dirty & 3)
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
  let { html } = $$props;
  $$f6e9706.onMount(async () => {
    document.querySelectorAll("pre > code.hljs").forEach((el) => {
      const btn = document.createElement("img");
      btn.classList.add("white-svg");
      btn.setAttribute("style", "position: absolute; top: 10px; right: 10px;");
      btn.setAttribute("src", "/icons/copy.svg");
      btn.setAttribute("alt", "Copy");
      btn.setAttribute("height", "18");
      btn.setAttribute("width", "18");
      btn.addEventListener("click", () => {
        btn.classList.remove("white-svg");
        btn.classList.add("green-svg");
        btn.setAttribute("src", "/icons/check.svg");
        btn.setAttribute("alt", "Copied");
        navigator.clipboard.writeText(el.innerText);
        setTimeout(() => {
          btn.classList.remove("green-svg");
          btn.classList.add("white-svg");
          btn.setAttribute("src", "/icons/copy.svg");
          btn.setAttribute("alt", "Copy");
        }, 1000);
      });
      el.setAttribute("style", "position: relative;");
      el.appendChild(btn);
    });
    document.querySelectorAll(".docs-notebook").forEach((notebook) => {
      const tabs = notebook.querySelectorAll(".notebook-top > *");
      const parts = notebook.querySelectorAll(".notebook-parts > *");
      const partsEl = notebook.querySelector(".notebook-parts");
      partsEl.innerHTML = "";
      partsEl.appendChild(parts[0]);
      const size = Math.min(tabs.length, parts.length);
      for (let i = 0;i < size; i++)
        tabs[i].addEventListener("click", () => {
          tabs.forEach((tab) => tab.classList.remove("notebook-top-active"));
          tabs[i].classList.add("notebook-top-active");
          partsEl.innerHTML = "";
          partsEl.appendChild(parts[i]);
        });
    });
  });
  $$self.$$set = ($$props) => {
    if ("html" in $$props)
      $$invalidate(0, html = $$props.html);
  };
  return [html];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, { html: 0 }, add_css);
  }
}
export default Component;
