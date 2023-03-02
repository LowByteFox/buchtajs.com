globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Confetti.svelte";
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
import { $7b66f1cf, $f6e9706} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
var $$f6e9706 = $f6e9706();
function add_css(target) {
  $$7b66f1cf.append_styles(target, "svelte-bkszor", ".confetti-holder.svelte-bkszor.svelte-bkszor{position:relative}@keyframes svelte-bkszor-rotate{0%{transform:skew(var(--skew)) rotate3d(var(--full-rotation))}100%{transform:skew(var(--skew)) rotate3d(var(--rotation-xyz), calc(var(--rotation-deg) + 360deg))}}@keyframes svelte-bkszor-translate{0%{opacity:1}8%{transform:translateY(calc(var(--translate-y) * 0.95)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.9)));opacity:1}12%{transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x) * (var(--x-spread) * 0.95)));opacity:1}16%{transform:translateY(var(--translate-y)) translateX(calc(var(--translate-x) * var(--x-spread)));opacity:1}100%{transform:translateY(calc(var(--translate-y) + var(--fall-distance))) translateX(var(--translate-x));opacity:0}}@keyframes svelte-bkszor-no-gravity-translate{0%{opacity:1}100%{transform:translateY(var(--translate-y)) translateX(var(--translate-x));opacity:0}}.confetti.svelte-bkszor.svelte-bkszor{--translate-y:calc(-200px * var(--translate-y-multiplier));--translate-x:calc(200px * var(--translate-x-multiplier));position:absolute;height:calc(var(--size) * var(--scale));width:calc(var(--size) * var(--scale));animation:svelte-bkszor-translate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear;opacity:0;pointer-events:none}.confetti.svelte-bkszor.svelte-bkszor::before{--full-rotation:var(--rotation-xyz), var(--rotation-deg);content:'';display:block;width:100%;height:100%;background:var(--color);background-size:contain;transform:skew(var(--skew)) rotate3d(var(--full-rotation));animation:svelte-bkszor-rotate var(--transition-duration) var(--transition-delay) var(--transition-iteration-count) linear}.rounded.svelte-bkszor .confetti.svelte-bkszor::before{border-radius:50%}.cone.svelte-bkszor .confetti.svelte-bkszor{--translate-x:calc(200px * var(--translate-y-multiplier) * var(--translate-x-multiplier))}.no-gravity.svelte-bkszor .confetti.svelte-bkszor{animation-name:svelte-bkszor-no-gravity-translate;animation-timing-function:ease-out}@media(prefers-reduced-motion){.confetti.svelte-bkszor.svelte-bkszor,.confetti.svelte-bkszor.svelte-bkszor::before{animation:none}}");
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[18] = list[i];
  return child_ctx;
}
function create_if_block(ctx) {
  let div;
  let each_value = { length: ctx[6] };
  let each_blocks = [];
  for (let i = 0;i < each_value.length; i += 1)
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  return {
    c() {
      div = $$7b66f1cf.element("div");
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].c();
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].l(div_nodes);
      div_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(div, "class", "confetti-holder svelte-bkszor");
      $$7b66f1cf.toggle_class(div, "rounded", ctx[9]);
      $$7b66f1cf.toggle_class(div, "cone", ctx[10]);
      $$7b66f1cf.toggle_class(div, "no-gravity", ctx[11]);
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].m(div, null);
    },
    p(ctx, dirty) {
      if (dirty & 20991) {
        each_value = { length: ctx[6] };
        let i;
        for (i = 0;i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);
          if (each_blocks[i])
            each_blocks[i].p(child_ctx, dirty);
          else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (;i < each_blocks.length; i += 1)
          each_blocks[i].d(1);
        each_blocks.length = each_value.length;
      }
      if (dirty & 512)
        $$7b66f1cf.toggle_class(div, "rounded", ctx[9]);
      if (dirty & 1024)
        $$7b66f1cf.toggle_class(div, "cone", ctx[10]);
      if (dirty & 2048)
        $$7b66f1cf.toggle_class(div, "no-gravity", ctx[11]);
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
      $$7b66f1cf.destroy_each(each_blocks, detaching);
    }
  };
}
function create_each_block(ctx) {
  let div;
  return {
    c() {
      div = $$7b66f1cf.element("div");
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true, style: true });
      $$7b66f1cf.children(div).forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(div, "class", "confetti svelte-bkszor");
      $$7b66f1cf.set_style(div, "--fall-distance", ctx[8]);
      $$7b66f1cf.set_style(div, "--size", ctx[0] + "px");
      $$7b66f1cf.set_style(div, "--color", ctx[14]());
      $$7b66f1cf.set_style(div, "--skew", randomBetween(-45, 45) + "deg," + randomBetween(-45, 45) + "deg");
      $$7b66f1cf.set_style(div, "--rotation-xyz", randomBetween(-10, 10) + ", " + randomBetween(-10, 10) + ", " + randomBetween(-10, 10));
      $$7b66f1cf.set_style(div, "--rotation-deg", randomBetween(0, 360) + "deg");
      $$7b66f1cf.set_style(div, "--translate-y-multiplier", randomBetween(ctx[2][0], ctx[2][1]));
      $$7b66f1cf.set_style(div, "--translate-x-multiplier", randomBetween(ctx[1][0], ctx[1][1]));
      $$7b66f1cf.set_style(div, "--scale", 0.1 * randomBetween(2, 10));
      $$7b66f1cf.set_style(div, "--transition-duration", ctx[4] ? `calc(${ctx[3]}ms * var(--scale))` : `${ctx[3]}ms`);
      $$7b66f1cf.set_style(div, "--transition-delay", randomBetween(ctx[5][0], ctx[5][1]) + "ms");
      $$7b66f1cf.set_style(div, "--transition-iteration-count", ctx[4] ? "infinite" : ctx[7]);
      $$7b66f1cf.set_style(div, "--x-spread", 1 - ctx[12]);
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
    },
    p(ctx, dirty) {
      if (dirty & 256)
        $$7b66f1cf.set_style(div, "--fall-distance", ctx[8]);
      if (dirty & 1)
        $$7b66f1cf.set_style(div, "--size", ctx[0] + "px");
      if (dirty & 4)
        $$7b66f1cf.set_style(div, "--translate-y-multiplier", randomBetween(ctx[2][0], ctx[2][1]));
      if (dirty & 2)
        $$7b66f1cf.set_style(div, "--translate-x-multiplier", randomBetween(ctx[1][0], ctx[1][1]));
      if (dirty & 24)
        $$7b66f1cf.set_style(div, "--transition-duration", ctx[4] ? `calc(${ctx[3]}ms * var(--scale))` : `${ctx[3]}ms`);
      if (dirty & 32)
        $$7b66f1cf.set_style(div, "--transition-delay", randomBetween(ctx[5][0], ctx[5][1]) + "ms");
      if (dirty & 144)
        $$7b66f1cf.set_style(div, "--transition-iteration-count", ctx[4] ? "infinite" : ctx[7]);
      if (dirty & 4096)
        $$7b66f1cf.set_style(div, "--x-spread", 1 - ctx[12]);
    },
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let if_block = !ctx[13] && create_if_block(ctx);
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
      if (!ctx[13])
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
function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
function instance($$self, $$props, $$invalidate) {
  let { size = 10 } = $$props;
  let { x = [-0.5, 0.5] } = $$props;
  let { y = [0.25, 1] } = $$props;
  let { duration = 2000 } = $$props;
  let { infinite = false } = $$props;
  let { delay = [0, 50] } = $$props;
  let { colorRange = [0, 360] } = $$props;
  let { colorArray = [] } = $$props;
  let { amount = 50 } = $$props;
  let { iterationCount = 1 } = $$props;
  let { fallDistance = "100px" } = $$props;
  let { rounded = false } = $$props;
  let { cone = false } = $$props;
  let { noGravity = false } = $$props;
  let { xSpread = 0.15 } = $$props;
  let { destroyOnComplete = true } = $$props;
  let complete = false;
  $$f6e9706.onMount(() => {
    if (!destroyOnComplete || infinite || iterationCount == "infinite")
      return;
    setTimeout(() => $$invalidate(13, complete = true), (duration + delay[1]) * iterationCount);
  });
  function getColor() {
    if (colorArray.length)
      return colorArray[Math.round(Math.random() * (colorArray.length - 1))];
    else
      return `hsl(${Math.round(randomBetween(colorRange[0], colorRange[1]))}, 75%, 50%`;
  }
  $$self.$$set = ($$props) => {
    if ("size" in $$props)
      $$invalidate(0, size = $$props.size);
    if ("x" in $$props)
      $$invalidate(1, x = $$props.x);
    if ("y" in $$props)
      $$invalidate(2, y = $$props.y);
    if ("duration" in $$props)
      $$invalidate(3, duration = $$props.duration);
    if ("infinite" in $$props)
      $$invalidate(4, infinite = $$props.infinite);
    if ("delay" in $$props)
      $$invalidate(5, delay = $$props.delay);
    if ("colorRange" in $$props)
      $$invalidate(15, colorRange = $$props.colorRange);
    if ("colorArray" in $$props)
      $$invalidate(16, colorArray = $$props.colorArray);
    if ("amount" in $$props)
      $$invalidate(6, amount = $$props.amount);
    if ("iterationCount" in $$props)
      $$invalidate(7, iterationCount = $$props.iterationCount);
    if ("fallDistance" in $$props)
      $$invalidate(8, fallDistance = $$props.fallDistance);
    if ("rounded" in $$props)
      $$invalidate(9, rounded = $$props.rounded);
    if ("cone" in $$props)
      $$invalidate(10, cone = $$props.cone);
    if ("noGravity" in $$props)
      $$invalidate(11, noGravity = $$props.noGravity);
    if ("xSpread" in $$props)
      $$invalidate(12, xSpread = $$props.xSpread);
    if ("destroyOnComplete" in $$props)
      $$invalidate(17, destroyOnComplete = $$props.destroyOnComplete);
  };
  return [
    size,
    x,
    y,
    duration,
    infinite,
    delay,
    amount,
    iterationCount,
    fallDistance,
    rounded,
    cone,
    noGravity,
    xSpread,
    complete,
    getColor,
    colorRange,
    colorArray,
    destroyOnComplete
  ];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, {
      size: 0,
      x: 1,
      y: 2,
      duration: 3,
      infinite: 4,
      delay: 5,
      colorRange: 15,
      colorArray: 16,
      amount: 6,
      iterationCount: 7,
      fallDistance: 8,
      rounded: 9,
      cone: 10,
      noGravity: 11,
      xSpread: 12,
      destroyOnComplete: 17
    }, add_css);
  }
}
export default Component;
