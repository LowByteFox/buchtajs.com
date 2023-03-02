globalThis.buchtaRoute = () => {
  let params = new Map;
  const path = "/index.svelte";
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
function create_default_slot_5(ctx) {
  let div;
  let h20;
  let t0;
  let t1;
  let h21;
  let t2;
  return {
    c() {
      div = $$7b66f1cf.element("div");
      h20 = $$7b66f1cf.element("h2");
      t0 = $$7b66f1cf.text("Buchta focuses on performance and reliability");
      t1 = $$7b66f1cf.space();
      h21 = $$7b66f1cf.element("h2");
      t2 = $$7b66f1cf.text("Most of it is being achieved using bun");
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      h20 = $$7b66f1cf.claim_element(div_nodes, "H2", { class: true });
      var h20_nodes = $$7b66f1cf.children(h20);
      t0 = $$7b66f1cf.claim_text(h20_nodes, "Buchta focuses on performance and reliability");
      h20_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(div_nodes);
      h21 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h21_nodes = $$7b66f1cf.children(h21);
      t2 = $$7b66f1cf.claim_text(h21_nodes, "Most of it is being achieved using bun");
      h21_nodes.forEach($$7b66f1cf.detach);
      div_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h20, "class", "mt-4 font-bold");
      $$7b66f1cf.attr(div, "class", "flex flex-col items-center");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
      $$7b66f1cf.append_hydration(div, h20);
      $$7b66f1cf.append_hydration(h20, t0);
      $$7b66f1cf.append_hydration(div, t1);
      $$7b66f1cf.append_hydration(div, h21);
      $$7b66f1cf.append_hydration(h21, t2);
    },
    p: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
    }
  };
}
function create_default_slot_4(ctx) {
  let div;
  let h20;
  let t0;
  let t1;
  let h21;
  let t2;
  return {
    c() {
      div = $$7b66f1cf.element("div");
      h20 = $$7b66f1cf.element("h2");
      t0 = $$7b66f1cf.text("Buchta supports SSR");
      t1 = $$7b66f1cf.space();
      h21 = $$7b66f1cf.element("h2");
      t2 = $$7b66f1cf.text("Current plugins that support SSR are markdown, svelte and preact");
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      h20 = $$7b66f1cf.claim_element(div_nodes, "H2", { class: true });
      var h20_nodes = $$7b66f1cf.children(h20);
      t0 = $$7b66f1cf.claim_text(h20_nodes, "Buchta supports SSR");
      h20_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(div_nodes);
      h21 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h21_nodes = $$7b66f1cf.children(h21);
      t2 = $$7b66f1cf.claim_text(h21_nodes, "Current plugins that support SSR are markdown, svelte and preact");
      h21_nodes.forEach($$7b66f1cf.detach);
      div_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h20, "class", "mt-4 font-bold");
      $$7b66f1cf.attr(div, "class", "flex flex-col items-center");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
      $$7b66f1cf.append_hydration(div, h20);
      $$7b66f1cf.append_hydration(h20, t0);
      $$7b66f1cf.append_hydration(div, t1);
      $$7b66f1cf.append_hydration(div, h21);
      $$7b66f1cf.append_hydration(h21, t2);
    },
    p: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
    }
  };
}
function create_default_slot_3(ctx) {
  let div;
  let h20;
  let t0;
  let t1;
  let h21;
  let t2;
  return {
    c() {
      div = $$7b66f1cf.element("div");
      h20 = $$7b66f1cf.element("h2");
      t0 = $$7b66f1cf.text("Buchta doesn't use module bundlers like Vite, Webpack, Rollup.");
      t1 = $$7b66f1cf.space();
      h21 = $$7b66f1cf.element("h2");
      t2 = $$7b66f1cf.text("Instead, Buchta uses bundler shipped with bun! This decreases dependencies and improves speed");
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      h20 = $$7b66f1cf.claim_element(div_nodes, "H2", { class: true });
      var h20_nodes = $$7b66f1cf.children(h20);
      t0 = $$7b66f1cf.claim_text(h20_nodes, "Buchta doesn't use module bundlers like Vite, Webpack, Rollup.");
      h20_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(div_nodes);
      h21 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h21_nodes = $$7b66f1cf.children(h21);
      t2 = $$7b66f1cf.claim_text(h21_nodes, "Instead, Buchta uses bundler shipped with bun! This decreases dependencies and improves speed");
      h21_nodes.forEach($$7b66f1cf.detach);
      div_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h20, "class", "mt-4 font-bold");
      $$7b66f1cf.attr(div, "class", "flex flex-col items-center");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
      $$7b66f1cf.append_hydration(div, h20);
      $$7b66f1cf.append_hydration(h20, t0);
      $$7b66f1cf.append_hydration(div, t1);
      $$7b66f1cf.append_hydration(div, h21);
      $$7b66f1cf.append_hydration(h21, t2);
    },
    p: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
    }
  };
}
function create_default_slot_2(ctx) {
  let div;
  let h20;
  let t0;
  let t1;
  let h21;
  let t2;
  return {
    c() {
      div = $$7b66f1cf.element("div");
      h20 = $$7b66f1cf.element("h2");
      t0 = $$7b66f1cf.text("You can write your own plugins");
      t1 = $$7b66f1cf.space();
      h21 = $$7b66f1cf.element("h2");
      t2 = $$7b66f1cf.text("Buchta supports custom plugins to extend its functionality");
      this.h();
    },
    l(nodes) {
      div = $$7b66f1cf.claim_element(nodes, "DIV", { class: true });
      var div_nodes = $$7b66f1cf.children(div);
      h20 = $$7b66f1cf.claim_element(div_nodes, "H2", { class: true });
      var h20_nodes = $$7b66f1cf.children(h20);
      t0 = $$7b66f1cf.claim_text(h20_nodes, "You can write your own plugins");
      h20_nodes.forEach($$7b66f1cf.detach);
      t1 = $$7b66f1cf.claim_space(div_nodes);
      h21 = $$7b66f1cf.claim_element(div_nodes, "H2", {});
      var h21_nodes = $$7b66f1cf.children(h21);
      t2 = $$7b66f1cf.claim_text(h21_nodes, "Buchta supports custom plugins to extend its functionality");
      h21_nodes.forEach($$7b66f1cf.detach);
      div_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h20, "class", "mt-4 font-bold");
      $$7b66f1cf.attr(div, "class", "flex flex-col items-center");
    },
    m(target, anchor) {
      $$7b66f1cf.insert_hydration(target, div, anchor);
      $$7b66f1cf.append_hydration(div, h20);
      $$7b66f1cf.append_hydration(h20, t0);
      $$7b66f1cf.append_hydration(div, t1);
      $$7b66f1cf.append_hydration(div, h21);
      $$7b66f1cf.append_hydration(h21, t2);
    },
    p: $$7b66f1cf.noop,
    d(detaching) {
      if (detaching)
        $$7b66f1cf.detach(div);
    }
  };
}
function create_default_slot_1(ctx) {
  let carouselpage0;
  let t0;
  let carouselpage1;
  let t1;
  let carouselpage2;
  let t2;
  let carouselpage3;
  let current;
  carouselpage0 = new CarouselPage({
    props: {
      iconName: "speed.svg",
      title: "Fast",
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    }
  });
  carouselpage1 = new CarouselPage({
    props: {
      iconName: "server.svg",
      title: "SSR Support",
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    }
  });
  carouselpage2 = new CarouselPage({
    props: {
      iconName: "archive.svg",
      title: "Custom Bundler",
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    }
  });
  carouselpage3 = new CarouselPage({
    props: {
      iconName: "plug.svg",
      title: "Extendable",
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      $$7b66f1cf.create_component(carouselpage0.$$.fragment);
      t0 = $$7b66f1cf.space();
      $$7b66f1cf.create_component(carouselpage1.$$.fragment);
      t1 = $$7b66f1cf.space();
      $$7b66f1cf.create_component(carouselpage2.$$.fragment);
      t2 = $$7b66f1cf.space();
      $$7b66f1cf.create_component(carouselpage3.$$.fragment);
    },
    l(nodes) {
      $$7b66f1cf.claim_component(carouselpage0.$$.fragment, nodes);
      t0 = $$7b66f1cf.claim_space(nodes);
      $$7b66f1cf.claim_component(carouselpage1.$$.fragment, nodes);
      t1 = $$7b66f1cf.claim_space(nodes);
      $$7b66f1cf.claim_component(carouselpage2.$$.fragment, nodes);
      t2 = $$7b66f1cf.claim_space(nodes);
      $$7b66f1cf.claim_component(carouselpage3.$$.fragment, nodes);
    },
    m(target, anchor) {
      $$7b66f1cf.mount_component(carouselpage0, target, anchor);
      $$7b66f1cf.insert_hydration(target, t0, anchor);
      $$7b66f1cf.mount_component(carouselpage1, target, anchor);
      $$7b66f1cf.insert_hydration(target, t1, anchor);
      $$7b66f1cf.mount_component(carouselpage2, target, anchor);
      $$7b66f1cf.insert_hydration(target, t2, anchor);
      $$7b66f1cf.mount_component(carouselpage3, target, anchor);
      current = true;
    },
    p(ctx, dirty) {
      const carouselpage0_changes = {};
      if (dirty & 1)
        carouselpage0_changes.$$scope = { dirty, ctx };
      carouselpage0.$set(carouselpage0_changes);
      const carouselpage1_changes = {};
      if (dirty & 1)
        carouselpage1_changes.$$scope = { dirty, ctx };
      carouselpage1.$set(carouselpage1_changes);
      const carouselpage2_changes = {};
      if (dirty & 1)
        carouselpage2_changes.$$scope = { dirty, ctx };
      carouselpage2.$set(carouselpage2_changes);
      const carouselpage3_changes = {};
      if (dirty & 1)
        carouselpage3_changes.$$scope = { dirty, ctx };
      carouselpage3.$set(carouselpage3_changes);
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(carouselpage0.$$.fragment, local);
      $$7b66f1cf.transition_in(carouselpage1.$$.fragment, local);
      $$7b66f1cf.transition_in(carouselpage2.$$.fragment, local);
      $$7b66f1cf.transition_in(carouselpage3.$$.fragment, local);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(carouselpage0.$$.fragment, local);
      $$7b66f1cf.transition_out(carouselpage1.$$.fragment, local);
      $$7b66f1cf.transition_out(carouselpage2.$$.fragment, local);
      $$7b66f1cf.transition_out(carouselpage3.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      $$7b66f1cf.destroy_component(carouselpage0, detaching);
      if (detaching)
        $$7b66f1cf.detach(t0);
      $$7b66f1cf.destroy_component(carouselpage1, detaching);
      if (detaching)
        $$7b66f1cf.detach(t1);
      $$7b66f1cf.destroy_component(carouselpage2, detaching);
      if (detaching)
        $$7b66f1cf.detach(t2);
      $$7b66f1cf.destroy_component(carouselpage3, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let banner;
  let t0;
  let main;
  let h20;
  let t1;
  let t2;
  let h21;
  let t3;
  let t4;
  let h22;
  let t5;
  let t6;
  let pre0;
  let code0;
  let t7_value = `\$ bun x buchta init <project-name>`;
  let t7;
  let t8;
  let h23;
  let t9;
  let t10;
  let pre1;
  let code1;
  let t11_value = `\$ cd <project-name>`;
  let t11;
  let t12;
  let h24;
  let t13;
  let t14;
  let pre2;
  let code2;
  let t15_value = `\$ bun install && bun run buchta serve`;
  let t15;
  let t16;
  let h25;
  let t17;
  let t18;
  let h26;
  let t19;
  let t20;
  let h27;
  let t21;
  let t22;
  let carousel;
  let t23;
  let faq;
  let current;
  banner = new Banner({});
  carousel = new Carousel({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  faq = new Faq({});
  return {
    c() {
      $$7b66f1cf.create_component(banner.$$.fragment);
      t0 = $$7b66f1cf.space();
      main = $$7b66f1cf.element("main");
      h20 = $$7b66f1cf.element("h2");
      t1 = $$7b66f1cf.text("\xA0");
      t2 = $$7b66f1cf.space();
      h21 = $$7b66f1cf.element("h2");
      t3 = $$7b66f1cf.text("Getting Started");
      t4 = $$7b66f1cf.space();
      h22 = $$7b66f1cf.element("h2");
      t5 = $$7b66f1cf.text("Create simple project");
      t6 = $$7b66f1cf.space();
      pre0 = $$7b66f1cf.element("pre");
      code0 = $$7b66f1cf.element("code");
      t7 = $$7b66f1cf.text(t7_value);
      t8 = $$7b66f1cf.space();
      h23 = $$7b66f1cf.element("h2");
      t9 = $$7b66f1cf.text("Change into project directory");
      t10 = $$7b66f1cf.space();
      pre1 = $$7b66f1cf.element("pre");
      code1 = $$7b66f1cf.element("code");
      t11 = $$7b66f1cf.text(t11_value);
      t12 = $$7b66f1cf.space();
      h24 = $$7b66f1cf.element("h2");
      t13 = $$7b66f1cf.text("Install dependencies and start buchta");
      t14 = $$7b66f1cf.space();
      pre2 = $$7b66f1cf.element("pre");
      code2 = $$7b66f1cf.element("code");
      t15 = $$7b66f1cf.text(t15_value);
      t16 = $$7b66f1cf.space();
      h25 = $$7b66f1cf.element("h2");
      t17 = $$7b66f1cf.text("That's it!");
      t18 = $$7b66f1cf.space();
      h26 = $$7b66f1cf.element("h2");
      t19 = $$7b66f1cf.text("What is Buchta?");
      t20 = $$7b66f1cf.space();
      h27 = $$7b66f1cf.element("h2");
      t21 = $$7b66f1cf.text("Buchta is a full-stack web framework that lets you create web applications. Buchta is pretty boring, just plain HTML, CSS, js/ts, but when you add a few of its plugins, you'll for sure have fun. Buchta currently supports Svelte, Preact, and Markdown. Buchta is complex on the inside but simple on the outside allowing users and developers creating their plugins to have an easy time.");
      t22 = $$7b66f1cf.space();
      $$7b66f1cf.create_component(carousel.$$.fragment);
      t23 = $$7b66f1cf.space();
      $$7b66f1cf.create_component(faq.$$.fragment);
      this.h();
    },
    l(nodes) {
      $$7b66f1cf.claim_component(banner.$$.fragment, nodes);
      t0 = $$7b66f1cf.claim_space(nodes);
      main = $$7b66f1cf.claim_element(nodes, "MAIN", { class: true });
      var main_nodes = $$7b66f1cf.children(main);
      h20 = $$7b66f1cf.claim_element(main_nodes, "H2", { class: true, id: true });
      var h20_nodes = $$7b66f1cf.children(h20);
      t1 = $$7b66f1cf.claim_text(h20_nodes, "\xA0");
      h20_nodes.forEach($$7b66f1cf.detach);
      t2 = $$7b66f1cf.claim_space(main_nodes);
      h21 = $$7b66f1cf.claim_element(main_nodes, "H2", { class: true });
      var h21_nodes = $$7b66f1cf.children(h21);
      t3 = $$7b66f1cf.claim_text(h21_nodes, "Getting Started");
      h21_nodes.forEach($$7b66f1cf.detach);
      t4 = $$7b66f1cf.claim_space(main_nodes);
      h22 = $$7b66f1cf.claim_element(main_nodes, "H2", {});
      var h22_nodes = $$7b66f1cf.children(h22);
      t5 = $$7b66f1cf.claim_text(h22_nodes, "Create simple project");
      h22_nodes.forEach($$7b66f1cf.detach);
      t6 = $$7b66f1cf.claim_space(main_nodes);
      pre0 = $$7b66f1cf.claim_element(main_nodes, "PRE", { class: true });
      var pre0_nodes = $$7b66f1cf.children(pre0);
      code0 = $$7b66f1cf.claim_element(pre0_nodes, "CODE", {});
      var code0_nodes = $$7b66f1cf.children(code0);
      t7 = $$7b66f1cf.claim_text(code0_nodes, t7_value);
      code0_nodes.forEach($$7b66f1cf.detach);
      pre0_nodes.forEach($$7b66f1cf.detach);
      t8 = $$7b66f1cf.claim_space(main_nodes);
      h23 = $$7b66f1cf.claim_element(main_nodes, "H2", { class: true });
      var h23_nodes = $$7b66f1cf.children(h23);
      t9 = $$7b66f1cf.claim_text(h23_nodes, "Change into project directory");
      h23_nodes.forEach($$7b66f1cf.detach);
      t10 = $$7b66f1cf.claim_space(main_nodes);
      pre1 = $$7b66f1cf.claim_element(main_nodes, "PRE", { class: true });
      var pre1_nodes = $$7b66f1cf.children(pre1);
      code1 = $$7b66f1cf.claim_element(pre1_nodes, "CODE", {});
      var code1_nodes = $$7b66f1cf.children(code1);
      t11 = $$7b66f1cf.claim_text(code1_nodes, t11_value);
      code1_nodes.forEach($$7b66f1cf.detach);
      pre1_nodes.forEach($$7b66f1cf.detach);
      t12 = $$7b66f1cf.claim_space(main_nodes);
      h24 = $$7b66f1cf.claim_element(main_nodes, "H2", { class: true });
      var h24_nodes = $$7b66f1cf.children(h24);
      t13 = $$7b66f1cf.claim_text(h24_nodes, "Install dependencies and start buchta");
      h24_nodes.forEach($$7b66f1cf.detach);
      t14 = $$7b66f1cf.claim_space(main_nodes);
      pre2 = $$7b66f1cf.claim_element(main_nodes, "PRE", { class: true });
      var pre2_nodes = $$7b66f1cf.children(pre2);
      code2 = $$7b66f1cf.claim_element(pre2_nodes, "CODE", {});
      var code2_nodes = $$7b66f1cf.children(code2);
      t15 = $$7b66f1cf.claim_text(code2_nodes, t15_value);
      code2_nodes.forEach($$7b66f1cf.detach);
      pre2_nodes.forEach($$7b66f1cf.detach);
      t16 = $$7b66f1cf.claim_space(main_nodes);
      h25 = $$7b66f1cf.claim_element(main_nodes, "H2", { class: true });
      var h25_nodes = $$7b66f1cf.children(h25);
      t17 = $$7b66f1cf.claim_text(h25_nodes, "That's it!");
      h25_nodes.forEach($$7b66f1cf.detach);
      t18 = $$7b66f1cf.claim_space(main_nodes);
      h26 = $$7b66f1cf.claim_element(main_nodes, "H2", { class: true });
      var h26_nodes = $$7b66f1cf.children(h26);
      t19 = $$7b66f1cf.claim_text(h26_nodes, "What is Buchta?");
      h26_nodes.forEach($$7b66f1cf.detach);
      t20 = $$7b66f1cf.claim_space(main_nodes);
      h27 = $$7b66f1cf.claim_element(main_nodes, "H2", { class: true });
      var h27_nodes = $$7b66f1cf.children(h27);
      t21 = $$7b66f1cf.claim_text(h27_nodes, "Buchta is a full-stack web framework that lets you create web applications. Buchta is pretty boring, just plain HTML, CSS, js/ts, but when you add a few of its plugins, you'll for sure have fun. Buchta currently supports Svelte, Preact, and Markdown. Buchta is complex on the inside but simple on the outside allowing users and developers creating their plugins to have an easy time.");
      h27_nodes.forEach($$7b66f1cf.detach);
      t22 = $$7b66f1cf.claim_space(main_nodes);
      $$7b66f1cf.claim_component(carousel.$$.fragment, main_nodes);
      t23 = $$7b66f1cf.claim_space(main_nodes);
      $$7b66f1cf.claim_component(faq.$$.fragment, main_nodes);
      main_nodes.forEach($$7b66f1cf.detach);
      this.h();
    },
    h() {
      $$7b66f1cf.attr(h20, "class", "font-bold mb-4");
      $$7b66f1cf.attr(h20, "id", "getStarted");
      $$7b66f1cf.attr(h21, "class", "font-bold mb-4 text-3xl");
      $$7b66f1cf.attr(pre0, "class", "language-shell bg-black rounded-md backdrop-blur-md bg-opacity-30 mt-5");
      $$7b66f1cf.attr(h23, "class", "pt-2");
      $$7b66f1cf.attr(pre1, "class", "language-shell bg-black rounded-md backdrop-blur-md bg-opacity-30 mt-5");
      $$7b66f1cf.attr(h24, "class", "pt-2");
      $$7b66f1cf.attr(pre2, "class", "language-shell bg-black rounded-md backdrop-blur-md bg-opacity-30 mt-5");
      $$7b66f1cf.attr(h25, "class", "pt-2 font-bold");
      $$7b66f1cf.attr(h26, "class", "mt-24 font-bold text-3xl");
      $$7b66f1cf.attr(h27, "class", "mt-2 pb-12");
      $$7b66f1cf.attr(main, "class", "w-[95%] md:w-[85%] m-auto mt-64 mb-12 text-white");
    },
    m(target, anchor) {
      $$7b66f1cf.mount_component(banner, target, anchor);
      $$7b66f1cf.insert_hydration(target, t0, anchor);
      $$7b66f1cf.insert_hydration(target, main, anchor);
      $$7b66f1cf.append_hydration(main, h20);
      $$7b66f1cf.append_hydration(h20, t1);
      $$7b66f1cf.append_hydration(main, t2);
      $$7b66f1cf.append_hydration(main, h21);
      $$7b66f1cf.append_hydration(h21, t3);
      $$7b66f1cf.append_hydration(main, t4);
      $$7b66f1cf.append_hydration(main, h22);
      $$7b66f1cf.append_hydration(h22, t5);
      $$7b66f1cf.append_hydration(main, t6);
      $$7b66f1cf.append_hydration(main, pre0);
      $$7b66f1cf.append_hydration(pre0, code0);
      $$7b66f1cf.append_hydration(code0, t7);
      $$7b66f1cf.append_hydration(main, t8);
      $$7b66f1cf.append_hydration(main, h23);
      $$7b66f1cf.append_hydration(h23, t9);
      $$7b66f1cf.append_hydration(main, t10);
      $$7b66f1cf.append_hydration(main, pre1);
      $$7b66f1cf.append_hydration(pre1, code1);
      $$7b66f1cf.append_hydration(code1, t11);
      $$7b66f1cf.append_hydration(main, t12);
      $$7b66f1cf.append_hydration(main, h24);
      $$7b66f1cf.append_hydration(h24, t13);
      $$7b66f1cf.append_hydration(main, t14);
      $$7b66f1cf.append_hydration(main, pre2);
      $$7b66f1cf.append_hydration(pre2, code2);
      $$7b66f1cf.append_hydration(code2, t15);
      $$7b66f1cf.append_hydration(main, t16);
      $$7b66f1cf.append_hydration(main, h25);
      $$7b66f1cf.append_hydration(h25, t17);
      $$7b66f1cf.append_hydration(main, t18);
      $$7b66f1cf.append_hydration(main, h26);
      $$7b66f1cf.append_hydration(h26, t19);
      $$7b66f1cf.append_hydration(main, t20);
      $$7b66f1cf.append_hydration(main, h27);
      $$7b66f1cf.append_hydration(h27, t21);
      $$7b66f1cf.append_hydration(main, t22);
      $$7b66f1cf.mount_component(carousel, main, null);
      $$7b66f1cf.append_hydration(main, t23);
      $$7b66f1cf.mount_component(faq, main, null);
      current = true;
    },
    p(ctx, dirty) {
      const carousel_changes = {};
      if (dirty & 1)
        carousel_changes.$$scope = { dirty, ctx };
      carousel.$set(carousel_changes);
    },
    i(local) {
      if (current)
        return;
      $$7b66f1cf.transition_in(banner.$$.fragment, local);
      $$7b66f1cf.transition_in(carousel.$$.fragment, local);
      $$7b66f1cf.transition_in(faq.$$.fragment, local);
      current = true;
    },
    o(local) {
      $$7b66f1cf.transition_out(banner.$$.fragment, local);
      $$7b66f1cf.transition_out(carousel.$$.fragment, local);
      $$7b66f1cf.transition_out(faq.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      $$7b66f1cf.destroy_component(banner, detaching);
      if (detaching)
        $$7b66f1cf.detach(t0);
      if (detaching)
        $$7b66f1cf.detach(main);
      $$7b66f1cf.destroy_component(carousel);
      $$7b66f1cf.destroy_component(faq);
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
      if (dirty & 1)
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
