/* Lògica del web: idioma + targetes de fanzines + visor. Els textos són a content.js */
(function () {
  const LANGS = ["va", "es", "uk", "en"];
  const HTML_LANG = { va: "ca-valencia", es: "es", uk: "uk", en: "en" };

  function pickLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem("asau-lang");
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* sense emmagatzematge: no passa res */ }
    return "va";
  }

  function el(tag, attrs = {}, children = []) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else if (k === "style") n.setAttribute("style", v);
      else n.setAttribute(k, v);
    }
    children.forEach((c) => c && n.append(c));
    return n;
  }

  const viewer = document.getElementById("viewer");
  const track = viewer.querySelector(".viewer-track");
  viewer.querySelector(".close").addEventListener("click", () => viewer.close());
  viewer.addEventListener("click", (e) => { if (e.target === viewer || e.target === track) viewer.close(); });

  function openViewer(z) {
    track.replaceChildren(...[z.cover, ...z.spreads].map((src) => el("img", { src, alt: z.title, loading: "lazy" })));
    viewer.showModal();
    track.scrollLeft = 0;
  }

  function renderZines(lang) {
    document.getElementById("zines").replaceChildren(...ZINES.map((z) => card(z, lang)));
  }

  function card(z, lang) {
    const t = UI[lang];
    {
      const style = `--accent:${z.color};--ink2:${z.ink2};--accent2:${z.ink2}`;
      let cover;
      if (z.soon) {
        cover = el("div", { class: "zine-cover" }, [
          el("div", {}, [el("div", { class: "soon-label", text: t.soon }), el("div", { class: "mono", style: "margin-top:8px", text: z.by })]),
        ]);
      } else {
        cover = el("button", { class: "zine-cover", "aria-label": `${t.see_inside}: ${z.title}` }, [
          el("img", { src: z.cover, alt: z.title, loading: "lazy" }),
        ]);
        cover.addEventListener("click", () => openViewer(z));
      }
      const meta = el("div", { class: "zine-meta" }, [
        el("div", { class: "zine-series mono", text: z.series[lang] }),
        el("h3", { text: z.title }),
        z.desc[lang] ? el("p", { class: "zine-desc", text: z.desc[lang] }) : null,
        z.specs[lang] ? el("div", { class: "zine-specs mono", text: `${z.specs[lang]} · ${t.lang_label}` }) : null,
        el("div", { class: "zine-by mono", text: `${t.by} ${z.by}` }),
      ]);
      const card = el("article", { class: "zine" + (z.soon ? " soon" : ""), style }, [cover, meta]);
      if (!z.soon) {
        const btn = el("button", { class: "zine-open mono", text: t.see_inside + " →" });
        btn.addEventListener("click", () => openViewer(z));
        card.append(btn);
      }
      return card;
    }
  }

  function renderCollabs(lang) {
    document.getElementById("collabs").replaceChildren(...COLLABS.map((c) =>
      el("div", { class: "collab" }, [
        el("h3", { text: c.name }),
        el("p", { text: UI[lang][c.textKey] }),
        el("div", { class: "links mono" }, c.links.map(([label, href]) => el("a", { href, target: "_blank", rel: "noopener", text: label + " ↗" }))),
        c.zines && c.zines.length ? el("div", { class: "zines zines-collab" }, c.zines.map((z) => card(z, lang))) : null,
      ])));
  }

  function renderContact() {
    const links = [];
    if (CONTACT.instagram) links.push(el("a", { href: CONTACT.instagram, target: "_blank", rel: "noopener", class: "mono", text: "Instagram " + CONTACT.instagramHandle + " ↗" }));
    if (CONTACT.email) links.push(el("a", { href: "mailto:" + CONTACT.email, class: "mono", text: CONTACT.email }));
    document.getElementById("contact-links").replaceChildren(...links);
  }

  function setLang(lang) {
    document.documentElement.lang = HTML_LANG[lang];
    document.querySelectorAll("[data-i18n]").forEach((n) => { n.textContent = UI[lang][n.dataset.i18n] || ""; });
    document.querySelectorAll(".langs button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    renderZines(lang);
    renderCollabs(lang);
    try { localStorage.setItem("asau-lang", lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll(".langs button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  renderContact();
  setLang(pickLang());
})();
