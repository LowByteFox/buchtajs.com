const buchtaRoute = () => {
  let params = new Map;
  const path = "/components/Faq.svelte";
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
let buchtaVersion = "0.5-rc2";
let getDocsTree = [
  "docs/buchta",
  "docs/[page]"
];
import { $7b66f1cf} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
function create_fragment(ctx) {
  let div;
  let h10;
  let t0;
  let t1;
  let h11;
  let t2;
  let t3;
  let h20;
  let t4;
  let t5;
  let h12;
  let t6;
  let t7;
  let h21;
  let t8;
  let t9;
  let h13;
  let t10;
  let t11;
  let h22;
  let t12;
  let a;
  let t13;
  let t14;
  let h14;
  let t15;
  let t16;
  let h23;
  let t17;
  return {
    c() {
      div = $$7b66f1cf.element("div");
      h10 = $$7b66f1cf.element("h1");
      t0 = $$7b66f1cf.text("FAQ");
      t1 = $$7b66f1cf.space();
      h11 = $$7b66f1cf.element("h1");
      t2 = $$7b66f1cf.text("Is Buchta production ready?");
      t3 = $$7b66f1cf.space();
      h20 = $$7b66f1cf.element("h2");
      t4 = $$7b66f1cf.text("Yes, as of Buchta 0.5, it is production ready. While bun.js still isn't, Buchta focuses to be production ready.");
      t5 = $$7b66f1cf.space();
      h12 = $$7b66f1cf.element("h1");
      t6 = $$7b66f1cf.text("What goal is Buchta trying to achieve?");
      t7 = $$7b66f1cf.space();
      h21 = $$7b66f1cf.element("h2");
      t8 = $$7b66f1cf.text("Buchta is trying to be small, fast, and powerful at the same time.");
      t9 = $$7b66f1cf.space();
      h13 = $$7b66f1cf.element("h1");
      t10 = $$7b66f1cf.text("Is Buchta good for an API?");
      t11 = $$7b66f1cf.space();
      h22 = $$7b66f1cf.element("h2");
      t12 = $$7b66f1cf.text("Yes, but if you want to squeeze all the performance, consider using ");
      a = $$7b66f1cf.element("a");
      t13 = $$7b66f1cf.text("Elysia");
      t14 = $$7b66f1cf.space();
      h14 = $$7b66f1cf.element("h1");
      t15 = $$7b66f1cf.text("When buchta started?");
      t16 = $$7b66f1cf.space();
      h23 = $$7b66f1cf.element("h2");
      t17 = $$7b66f1cf.text("Buchta started when Bun version 0.1.1 was released.");
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      h10 = $$7b66f1cf.claim_element(div_nodes, "H1", { class: true });
      var h10_nodes = $$7b66f1cf.children(h10);
      t0 = $$7b66f1cf.claim_text(h10_nodes, "FAQ");
      h10_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(div_nodes);
      h11 = $$7b66f1cf.claim_element(div_nodes, "H1", { class: true });
      var h11_nodes = $$7b66f1cf.children(h11);
      t2 = $$7b66f1cf.claim_text(h11_nodes, "Is Buchta production ready?");
      h11_nodes.forEach($$7b66f1cf.detach);
      t3 = $$7b66f1cf.claim_space(div_nodes);
      h20 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h20_nodes = $$7b66f1cf.children(h20);
      t4 = $$7b66f1cf.claim_text(h20_nodes, "Yes, as of Buchta 0.5, it is production ready. While bun.js still isn't, Buchta focuses to be production ready.");
      h20_nodes.forEach($$7b66f1cf.detach);
      t5 = $$7b66f1cf.claim_space(div_nodes);
      h12 = $$7b66f1cf.claim_element(div_nodes, "H1", { class: true });
      var h12_nodes = $$7b66f1cf.children(h12);
      t6 = $$7b66f1cf.claim_text(h12_nodes, "What goal is Buchta trying to achieve?");
      h12_nodes.forEach($$7b66f1cf.detach);
      t7 = $$7b66f1cf.claim_space(div_nodes);
      h21 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h21_nodes = $$7b66f1cf.children(h21);
      t8 = $$7b66f1cf.claim_text(h21_nodes, "Buchta is trying to be small, fast, and powerful at the same time.");
      h21_nodes.forEach($$7b66f1cf.detach);
      t9 = $$7b66f1cf.claim_space(div_nodes);
      h13 = $$7b66f1cf.claim_element(div_nodes, "H1", { class: true });
      var h13_nodes = $$7b66f1cf.children(h13);
      t10 = $$7b66f1cf.claim_text(h13_nodes, "Is Buchta good for an API?");
      h13_nodes.forEach($$7b66f1cf.detach);
      t11 = $$7b66f1cf.claim_space(div_nodes);
      h22 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h22_nodes = $$7b66f1cf.children(h22);
      t12 = $$7b66f1cf.claim_text(h22_nodes, "Yes, but if you want to squeeze all the performance, consider using ");
      a = $$7b66f1cf.claim_element(h22_nodes, "A", { class: true, href: true, target: true });
      var a_nodes = $$7b66f1cf.children(a);
      t13 = $$7b66f1cf.claim_text(a_nodes, "Elysia");
      a_nodes.forEach($$7b66f1cf.detach);
      h22_nodes.forEach($$7b66f1cf.detach);
      t14 = $$7b66f1cf.claim_space(div_nodes);
      h14 = $$7b66f1cf.claim_element(div_nodes, "H1", { class: true });
      var h14_nodes = $$7b66f1cf.children(h14);
      t15 = $$7b66f1cf.claim_text(h14_nodes, "When buchta started?");
      h14_nodes.forEach($$7b66f1cf.detach);
      t16 = $$7b66f1cf.claim_space(div_nodes);
      h23 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h23_nodes = $$7b66f1cf.children(h23);
      t17 = $$7b66f1cf.claim_text(h23_nodes, "Buchta started when Bun version 0.1.1 was released.");
      h23_nodes.forEach($$7b66f1cf.detach);
      div_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h10, "class", "font-bold");
      $$7b66f1cf.attr(h11, "class", "mt-4");
      $$7b66f1cf.attr(h12, "class", "mt-4");
      $$7b66f1cf.attr(h13, "class", "mt-4");
      $$7b66f1cf.attr(a, "class", "font-bold");
      $$7b66f1cf.attr(a, "href", "https://elysiajs.com/");
      $$7b66f1cf.attr(a, "target", "_blank");
      $$7b66f1cf.attr(h14, "class", "mt-4");
      $$7b66f1cf.attr(div, "class", "mt-12");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
      $$7b66f1cf.append_hydration(div, h10);
      $$7b66f1cf.append_hydration(h10, t0);
      $$7b66f1cf.append_hydration(div, t1);
      $$7b66f1cf.append_hydration(div, h11);
      $$7b66f1cf.append_hydration(h11, t2);
      $$7b66f1cf.append_hydration(div, t3);
      $$7b66f1cf.append_hydration(div, h20);
      $$7b66f1cf.append_hydration(h20, t4);
      $$7b66f1cf.append_hydration(div, t5);
      $$7b66f1cf.append_hydration(div, h12);
      $$7b66f1cf.append_hydration(h12, t6);
      $$7b66f1cf.append_hydration(div, t7);
      $$7b66f1cf.append_hydration(div, h21);
      $$7b66f1cf.append_hydration(h21, t8);
      $$7b66f1cf.append_hydration(div, t9);
      $$7b66f1cf.append_hydration(div, h13);
      $$7b66f1cf.append_hydration(h13, t10);
      $$7b66f1cf.append_hydration(div, t11);
      $$7b66f1cf.append_hydration(div, h22);
      $$7b66f1cf.append_hydration(h22, t12);
      $$7b66f1cf.append_hydration(h22, a);
      $$7b66f1cf.append_hydration(a, t13);
      $$7b66f1cf.append_hydration(div, t14);
      $$7b66f1cf.append_hydration(div, h14);
      $$7b66f1cf.append_hydration(h14, t15);
      $$7b66f1cf.append_hydration(div, t16);
      $$7b66f1cf.append_hydration(div, h23);
      $$7b66f1cf.append_hydration(h23, t17);
    },
    p: $$7b66f1cf.noop,
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
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

new Component({
    target: document.body,
    hydrate: true
});
