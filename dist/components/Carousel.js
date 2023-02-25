globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Carousel.svelte";
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
function create_fragment(ctx) {
  let div;
  let current;
  const default_slot_template = ctx[3].default;
  const default_slot = $$7b66f1cf.create_slot(default_slot_template, ctx, ctx[2], null);
  return {
    c() {
      div = $$7b66f1cf.element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      div_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(div, "class", "flex flex-col items-center");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
      if (default_slot)
        default_slot.m(div, null);
      ctx[4](div);
      current = true;
    },
    p(ctx, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 4))
          $$7b66f1cf.update_slot_base(default_slot, default_slot_template, ctx, ctx[2], !current ? $$7b66f1cf.get_all_dirty_from_scope(ctx[2]) : $$7b66f1cf.get_slot_changes(default_slot_template, ctx[2], dirty, null), null);
      }
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
      if (default_slot)
        default_slot.d(detaching);
      ctx[4](null);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { timeBeforeSwitch = 5000 } = $$props;
  let element;
  let index = 0;
  let hovering = false;
  $$f6e9706.onMount(() => {
    const size = element.children.length;
    if (size < 1)
      return;
    if (size >= 1) {
      $$invalidate(0, element.children[0].onmouseover = () => {
        hovering = true;
      }, element);
      $$invalidate(0, element.children[0].onmouseout = () => {
        hovering = false;
      }, element);
    }
    for (let i = 1;i < size; i++) {
      $$invalidate(0, element.children[i].style["display"] = "none", element);
      $$invalidate(0, element.children[i].onmouseover = () => {
        hovering = true;
      }, element);
      $$invalidate(0, element.children[i].onmouseout = () => {
        hovering = false;
      }, element);
    }
    setInterval(() => {
      if (hovering)
        return;
      $$invalidate(0, element.children[index].style["display"] = "none", element);
      index++;
      index %= size;
      $$invalidate(0, element.children[index].style["display"] = "block", element);
    }, timeBeforeSwitch);
  });
  function div_binding($$value) {
    $$7b66f1cf.binding_callbacks[$$value ? "unshift" : "push"](() => {
      element = $$value;
      $$invalidate(0, element);
    });
  }
  $$self.$$set = ($$props) => {
    if ("timeBeforeSwitch" in $$props)
      $$invalidate(1, timeBeforeSwitch = $$props.timeBeforeSwitch);
    if ("$$scope" in $$props)
      $$invalidate(2, $$scope = $$props.$$scope);
  };
  return [element, timeBeforeSwitch, $$scope, slots, div_binding];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, { timeBeforeSwitch: 1 });
  }
}
export default Component;
