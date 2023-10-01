import lume from "lume/mod.ts";
import sitemap from "lume/plugins/sitemap.ts";
import liquid from "lume/plugins/liquid.ts";
import asciidoc from "./www/_plugins/asciidoc.ts";
import postprocessAsciidoc from "./www/_plugins/postprocess-asciidoc.ts";
import highlighting from "./www/_plugins/highlighting.ts";

const site = lume({
    includes: "www/_includes",
    location: new URL("https://databend.systems"),
});

site.loadPages([".html"])

site.use(liquid());
site.use(asciidoc());
site.use(postprocessAsciidoc());
site.use(highlighting());
site.use(sitemap({
    sort: "date=desc", // To sort by data in ascendent order
}));

site.copy("images");
site.copy("fonts");

site.ignore("dist", "bin");

export default site;
