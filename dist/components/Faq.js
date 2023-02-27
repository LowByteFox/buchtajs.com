globalThis.buchtaRoute = () => {
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
import { $7b66f1cf} from "./../bundle.js";
var $$7b66f1cf = $7b66f1cf();
function create_fragment(ctx) {
  let script;
  let t0;
  let t1;
  let div;
  let h10;
  let t2;
  let t3;
  let h11;
  let t4;
  let t5;
  let h20;
  let t6;
  let t7;
  let h12;
  let t8;
  let t9;
  let h21;
  let t10;
  let t11;
  let h13;
  let t12;
  let t13;
  let h22;
  let t14;
  return {
    c() {
      script = $$7b66f1cf.element("script");
      t0 = $$7b66f1cf.text("{\n          \"@context\": \"https://schema.org\",\n          \"@type\": \"FAQPage\",\n          \"mainEntity\": [{\n            \"@type\": \"Question\",\n            \"name\": \"Is Buchta production ready?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Yes, as of Buchta 0.5, it is production ready. While bun.js still isn't, Buchta focuses to be production ready.\"\n            }\n          },{\n            \"@type\": \"Question\",\n            \"name\": \"What goal is Buchta trying to achieve?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Buchta is trying to be small, fast, and powerful at the same time.\"\n            }\n          },{\n            \"@type\": \"Question\",\n            \"name\": \"When buchta started?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Buchta started when Bun version 0.1.1 was released.\"\n            }\n          }]\n        }");
      t1 = $$7b66f1cf.space();
      div = $$7b66f1cf.element("div");
      h10 = $$7b66f1cf.element("h1");
      t2 = $$7b66f1cf.text("FAQ");
      t3 = $$7b66f1cf.space();
      h11 = $$7b66f1cf.element("h1");
      t4 = $$7b66f1cf.text("Is Buchta production ready?");
      t5 = $$7b66f1cf.space();
      h20 = $$7b66f1cf.element("h2");
      t6 = $$7b66f1cf.text("Yes, as of Buchta 0.5, it is production ready. While bun.js still isn't,\n        Buchta focuses to be production ready.");
      t7 = $$7b66f1cf.space();
      h12 = $$7b66f1cf.element("h1");
      t8 = $$7b66f1cf.text("What goal is Buchta trying to achieve?");
      t9 = $$7b66f1cf.space();
      h21 = $$7b66f1cf.element("h2");
      t10 = $$7b66f1cf.text("Buchta is trying to be small, fast, and powerful at the same time.");
      t11 = $$7b66f1cf.space();
      h13 = $$7b66f1cf.element("h1");
      t12 = $$7b66f1cf.text("When buchta started?");
      t13 = $$7b66f1cf.space();
      h22 = $$7b66f1cf.element("h2");
      t14 = $$7b66f1cf.text("Buchta started when Bun version 0.1.1 was released.");
      this.h();
    },
    l(nodes) {
      const head_nodes = $$7b66f1cf.head_selector("svelte-1otvyiy", document.head);
      script = $$7b66f1cf.claim_element(head_nodes, "SCRIPT", { type: true });
      var script_nodes = $$7b66f1cf.children(script);
      t0 = $$7b66f1cf.claim_text(script_nodes, "{\n          \"@context\": \"https://schema.org\",\n          \"@type\": \"FAQPage\",\n          \"mainEntity\": [{\n            \"@type\": \"Question\",\n            \"name\": \"Is Buchta production ready?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Yes, as of Buchta 0.5, it is production ready. While bun.js still isn't, Buchta focuses to be production ready.\"\n            }\n          },{\n            \"@type\": \"Question\",\n            \"name\": \"What goal is Buchta trying to achieve?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Buchta is trying to be small, fast, and powerful at the same time.\"\n            }\n          },{\n            \"@type\": \"Question\",\n            \"name\": \"When buchta started?\",\n            \"acceptedAnswer\": {\n              \"@type\": \"Answer\",\n              \"text\": \"Buchta started when Bun version 0.1.1 was released.\"\n            }\n          }]\n        }");
      script_nodes.forEach($$7b66f1cf.detach);
      head_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(nodes);
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      h10 = $$7b66f1cf.claim_element(div_nodes, "H1", { class: true });
      var h10_nodes = $$7b66f1cf.children(h10);
      t2 = $$7b66f1cf.claim_text(h10_nodes, "FAQ");
      h10_nodes.forEach($$7b66f1cf.detach);
      t3 = $$7b66f1cf.claim_space(div_nodes);
      h11 = $$7b66f1cf.claim_element(div_nodes, "H1", { class: true });
      var h11_nodes = $$7b66f1cf.children(h11);
      t4 = $$7b66f1cf.claim_text(h11_nodes, "Is Buchta production ready?");
      h11_nodes.forEach($$7b66f1cf.detach);
      t5 = $$7b66f1cf.claim_space(div_nodes);
      h20 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h20_nodes = $$7b66f1cf.children(h20);
      t6 = $$7b66f1cf.claim_text(h20_nodes, "Yes, as of Buchta 0.5, it is production ready. While bun.js still isn't,\n        Buchta focuses to be production ready.");
      h20_nodes.forEach($$7b66f1cf.detach);
      t7 = $$7b66f1cf.claim_space(div_nodes);
      h12 = $$7b66f1cf.claim_element(div_nodes, "H1", { class: true });
      var h12_nodes = $$7b66f1cf.children(h12);
      t8 = $$7b66f1cf.claim_text(h12_nodes, "What goal is Buchta trying to achieve?");
      h12_nodes.forEach($$7b66f1cf.detach);
      t9 = $$7b66f1cf.claim_space(div_nodes);
      h21 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h21_nodes = $$7b66f1cf.children(h21);
      t10 = $$7b66f1cf.claim_text(h21_nodes, "Buchta is trying to be small, fast, and powerful at the same time.");
      h21_nodes.forEach($$7b66f1cf.detach);
      t11 = $$7b66f1cf.claim_space(div_nodes);
      h13 = $$7b66f1cf.claim_element(div_nodes, "H1", { class: true });
      var h13_nodes = $$7b66f1cf.children(h13);
      t12 = $$7b66f1cf.claim_text(h13_nodes, "When buchta started?");
      h13_nodes.forEach($$7b66f1cf.detach);
      t13 = $$7b66f1cf.claim_space(div_nodes);
      h22 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h22_nodes = $$7b66f1cf.children(h22);
      t14 = $$7b66f1cf.claim_text(h22_nodes, "Buchta started when Bun version 0.1.1 was released.");
      h22_nodes.forEach($$7b66f1cf.detach);
      div_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(script, "type", "application/ld+json");
      $$7b66f1cf.attr(h10, "class", "font-bold");
      $$7b66f1cf.attr(h11, "class", "mt-4");
      $$7b66f1cf.attr(h12, "class", "mt-4");
      $$7b66f1cf.attr(h13, "class", "mt-4");
      $$7b66f1cf.attr(div, "class", "mt-12");
    },
    m(target, anchor) {
      $$7b66f1cf.append_hydration(document.head, script);
      $$7b66f1cf.append_hydration(script, t0);
      $$7b66f1cf.insert_hydration(target, t1, anchor);
      $$7b66f1cf.insert_hydration(target, div, anchor);
      $$7b66f1cf.append_hydration(div, h10);
      $$7b66f1cf.append_hydration(h10, t2);
      $$7b66f1cf.append_hydration(div, t3);
      $$7b66f1cf.append_hydration(div, h11);
      $$7b66f1cf.append_hydration(h11, t4);
      $$7b66f1cf.append_hydration(div, t5);
      $$7b66f1cf.append_hydration(div, h20);
      $$7b66f1cf.append_hydration(h20, t6);
      $$7b66f1cf.append_hydration(div, t7);
      $$7b66f1cf.append_hydration(div, h12);
      $$7b66f1cf.append_hydration(h12, t8);
      $$7b66f1cf.append_hydration(div, t9);
      $$7b66f1cf.append_hydration(div, h21);
      $$7b66f1cf.append_hydration(h21, t10);
      $$7b66f1cf.append_hydration(div, t11);
      $$7b66f1cf.append_hydration(div, h13);
      $$7b66f1cf.append_hydration(h13, t12);
      $$7b66f1cf.append_hydration(div, t13);
      $$7b66f1cf.append_hydration(div, h22);
      $$7b66f1cf.append_hydration(h22, t14);
    },
    p: $$7b66f1cf.noop,
    i: $$7b66f1cf.noop,
    o: $$7b66f1cf.noop,
    d(detaching) {
      $$7b66f1cf.detach(script);
      if (detaching)
        $$7b66f1cf.detach(t1);
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
