globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Foob.svelte";
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
let buchtaVersion = "0.5-rc4";
let getDocsTree = [
  "docs/Buchta",
  "docs/Bundler",
  "docs/Cli",
  "docs/Request",
  "docs/Response",
  "docs/Subrouter",
  "docs/[page]"
];
import { $7b66f1cf, $f6e9706} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
var $$f6e9706 = $f6e9706();
function create_if_block(ctx) {
  let div;
  let img;
  let img_src_value;
  return {
    c() {
      div = $$7b66f1cf.element("div");
      img = $$7b66f1cf.element("img");
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      img = $$7b66f1cf.claim_element(div_nodes, "IMG", {
        height: true,
        width: true,
        src: true,
        alt: true
      });
      div_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(img, "height", "48");
      $$7b66f1cf.attr(img, "width", "48");
      if (!$$7b66f1cf.src_url_equal(img.src, img_src_value = "/foob.svg"))
        $$7b66f1cf.attr(img, "src", img_src_value);
      $$7b66f1cf.attr(img, "alt", "Shirakami Fubuki's tail");
      $$7b66f1cf.attr(div, "class", "absolute hidden transition-all duration-300");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
      $$7b66f1cf.append_hydration(div, img);
      ctx[2](div);
    },
    p: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
      ctx[2](null);
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let if_block = ctx[0] && create_if_block(ctx);
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
    },
    p(ctx, [dirty]) {
      if (ctx[0])
        if (if_block)
          if_block.p(ctx, dirty);
        else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        $$7b66f1cf.detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let render = true;
  if (buchtaRoute().query.has("foob"))
    if (buchtaRoute().query.get("foob") == "konkonkon")
      render = true;
    else
      render = false;
  else
    render = false;
  let self;
  let playing = false;
  const PlaySound = () => {
    if (!playing) {
      const audio = new Audio("/konkon-beats.mp3");
      playing = true;
      audio.volume = 0.77;
      audio.loop = false;
      audio.play();
      audio.onended = () => {
        playing = false;
        window.location.href = "https://www.youtube.com/watch?v=c2hbKnXIa_c";
      };
    }
  };
  $$f6e9706.onMount(() => {
    if (!self)
      return;
    document.addEventListener("mousemove", (e) => {
      if (window.innerHeight - 5 <= e.clientY && e.clientX < 10) {
        $$invalidate(1, self.style.left = `0px`, self);
        $$invalidate(1, self.style.transform = `rotate(45deg)`, self);
      } else {
        $$invalidate(1, self.style.left = `-48px`, self);
        $$invalidate(1, self.style.transform = `rotate(0deg)`, self);
      }
    });
    document.addEventListener("click", (e) => {
      if (e.target == self.children[0])
        PlaySound();
    });
    setTimeout(() => {
      const h = document.body.clientHeight - 48;
      $$invalidate(1, self.style.top = `${h}px`, self);
      $$invalidate(1, self.style.left = `-48px`, self);
      $$invalidate(1, self.style.display = "block", self);
    }, 1000);
  });
  function div_binding($$value) {
    $$7b66f1cf.binding_callbacks[$$value ? "unshift" : "push"](() => {
      self = $$value;
      $$invalidate(1, self);
    });
  }
  return [render, self, div_binding];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, {});
  }
}
export default Component;
