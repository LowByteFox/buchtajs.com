const buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Banner.svelte";
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
import { $7b66f1cf} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let div1;
  let div0;
  let img;
  let img_src_value;
  let t0;
  let h2;
  let t1_value = ctx[1][0] + "";
  let t1;
  let t2;
  return {
    c() {
      div1 = $$7b66f1cf.element("div");
      div0 = $$7b66f1cf.element("div");
      img = $$7b66f1cf.element("img");
      t0 = $$7b66f1cf.space();
      h2 = $$7b66f1cf.element("h2");
      t1 = $$7b66f1cf.text(t1_value);
      t2 = $$7b66f1cf.space();
      this.h();
    },
    l(nodes) {
      div1 = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div1_nodes = $$7b66f1cf.children(div1);
      div0 = $$7b66f1cf.claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = $$7b66f1cf.children(div0);
      img = $$7b66f1cf.claim_element(div0_nodes, "IMG", { class: true, src: true, alt: true });
      div0_nodes.forEach($$7b66f1cf.detach);
      t0 = $$7b66f1cf.claim_space(div1_nodes);
      h2 = $$7b66f1cf.claim_element(div1_nodes, "H2", { class: true });
      var h2_nodes = $$7b66f1cf.children(h2);
      t1 = $$7b66f1cf.claim_text(h2_nodes, t1_value);
      h2_nodes.forEach($$7b66f1cf.detach);
      t2 = $$7b66f1cf.claim_space(div1_nodes);
      div1_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(img, "class", "h-12 white-svg");
      if (!$$7b66f1cf.src_url_equal(img.src, img_src_value = ctx[1][1]))
        $$7b66f1cf.attr(img, "src", img_src_value);
      $$7b66f1cf.attr(img, "alt", "");
      $$7b66f1cf.attr(div0, "class", "w-14 flex justify-center");
      $$7b66f1cf.attr(h2, "class", "font-bold text-white");
      $$7b66f1cf.attr(div1, "class", "flex flex-row items-center h-16 gap-5");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div1, anchor);
      $$7b66f1cf.append_hydration(div1, div0);
      $$7b66f1cf.append_hydration(div0, img);
      $$7b66f1cf.append_hydration(div1, t0);
      $$7b66f1cf.append_hydration(div1, h2);
      $$7b66f1cf.append_hydration(h2, t1);
      $$7b66f1cf.append_hydration(div1, t2);
    },
    p: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div1);
    }
  };
}
function create_fragment(ctx) {
  let div3;
  let div2;
  let h10;
  let t0;
  let t1;
  let h11;
  let t2;
  let t3;
  let div1;
  let div0;
  let t4;
  let img;
  let img_src_value;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0;i < each_value.length; i += 1)
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  return {
    c() {
      div3 = $$7b66f1cf.element("div");
      div2 = $$7b66f1cf.element("div");
      h10 = $$7b66f1cf.element("h1");
      t0 = $$7b66f1cf.text("Buchta");
      t1 = $$7b66f1cf.space();
      h11 = $$7b66f1cf.element("h1");
      t2 = $$7b66f1cf.text("Full Stack Framework Powered By Bun");
      t3 = $$7b66f1cf.space();
      div1 = $$7b66f1cf.element("div");
      div0 = $$7b66f1cf.element("div");
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].c();
      t4 = $$7b66f1cf.space();
      img = $$7b66f1cf.element("img");
      this.h();
    },
    l(nodes) {
      div3 = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div3_nodes = $$7b66f1cf.children(div3);
      div2 = $$7b66f1cf.claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = $$7b66f1cf.children(div2);
      h10 = $$7b66f1cf.claim_element(div2_nodes, "H1", { class: true });
      var h10_nodes = $$7b66f1cf.children(h10);
      t0 = $$7b66f1cf.claim_text(h10_nodes, "Buchta");
      h10_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(div2_nodes);
      h11 = $$7b66f1cf.claim_element(div2_nodes, "H1", { class: true });
      var h11_nodes = $$7b66f1cf.children(h11);
      t2 = $$7b66f1cf.claim_text(h11_nodes, "Full Stack Framework Powered By Bun");
      h11_nodes.forEach($$7b66f1cf.detach);
      t3 = $$7b66f1cf.claim_space(div2_nodes);
      div1 = $$7b66f1cf.claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = $$7b66f1cf.children(div1);
      div0 = $$7b66f1cf.claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = $$7b66f1cf.children(div0);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].l(div0_nodes);
      div0_nodes.forEach($$7b66f1cf.detach);
      t4 = $$7b66f1cf.claim_space(div1_nodes);
      img = $$7b66f1cf.claim_element(div1_nodes, "IMG", { class: true, src: true, alt: true });
      div1_nodes.forEach($$7b66f1cf.detach);
      div2_nodes.forEach($$7b66f1cf.detach);
      div3_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h10, "class", "text-[500%] mt-12 font-bold text-white");
      $$7b66f1cf.attr(h11, "class", "mt-4 ml-1 font-bold");
      $$7b66f1cf.attr(div0, "class", "flex-grow mt-12");
      $$7b66f1cf.attr(img, "class", "w-[35%]");
      if (!$$7b66f1cf.src_url_equal(img.src, img_src_value = "https://raw.githubusercontent.com/Fire-The-Fox/buchta/develop/buchta.png"))
        $$7b66f1cf.attr(img, "src", img_src_value);
      $$7b66f1cf.attr(img, "alt", "Logo");
      $$7b66f1cf.attr(div1, "class", "flex flex-row, justify-between");
      $$7b66f1cf.attr(div2, "class", "flex-grow");
      $$7b66f1cf.attr(div3, "class", "pt-24 w-[85%] m-auto justify-between items-center");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div3, anchor);
      $$7b66f1cf.append_hydration(div3, div2);
      $$7b66f1cf.append_hydration(div2, h10);
      $$7b66f1cf.append_hydration(h10, t0);
      $$7b66f1cf.append_hydration(div2, t1);
      $$7b66f1cf.append_hydration(div2, h11);
      $$7b66f1cf.append_hydration(h11, t2);
      $$7b66f1cf.append_hydration(div2, t3);
      $$7b66f1cf.append_hydration(div2, div1);
      $$7b66f1cf.append_hydration(div1, div0);
      for (let i = 0;i < each_blocks.length; i += 1)
        each_blocks[i].m(div0, null);
      $$7b66f1cf.append_hydration(div1, t4);
      $$7b66f1cf.append_hydration(div1, img);
    },
    p(ctx, [dirty]) {
      if (dirty & 1) {
        each_value = ctx[0];
        let i;
        for (i = 0;i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx, each_value, i);
          if (each_blocks[i])
            each_blocks[i].p(child_ctx, dirty);
          else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (;i < each_blocks.length; i += 1)
          each_blocks[i].d(1);
        each_blocks.length = each_value.length;
      }
    },
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div3);
      $$7b66f1cf.destroy_each(each_blocks, detaching);
    }
  };
}
function instance($$self) {
  const features = [
    ["Powerful", "/icons/speed.svg"],
    ["Lightweight", "/icons/feather.svg"],
    ["Extendable", "/icons/plug.svg"],
    ["SSR Support", "/icons/server.svg"],
    ["Markdown Support", "/icons/mkdown.svg"],
    ["Svelte Support", "/icons/js.svg"],
    ["Preact Support", "/icons/react.svg"],
    ["And Much More", "/icons/list.svg"]
  ];
  return [features];
}

class Component extends $$7b66f1cf.SvelteComponent {
  constructor(options) {
    super();
    $$7b66f1cf.init(this, options, instance, create_fragment, $$7b66f1cf.safe_not_equal, {});
  }
}
export default Component;

new Component({
    target: document.body,
    hydrate: true
});
