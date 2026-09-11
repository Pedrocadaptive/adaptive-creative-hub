import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import logoWhite from "@/assets/adaptive-logo-white.png.asset.json";
import symbolWhite from "@/assets/adaptive-symbol-white.png.asset.json";
import workLight from "@/assets/work-light.jpg";
import workChrome from "@/assets/work-chrome.jpg";
import workDance from "@/assets/work-dance.jpg";
import workArch from "@/assets/work-arch.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adaptive Creative Studio — Imagem, filme e mundo" },
      {
        name: "description",
        content:
          "Adaptive é um estúdio criativo de imagem, filme e mundo. O ponto onde uma ideia deixa de ser imaginada e começa a ser vista.",
      },
      { property: "og:title", content: "Adaptive Creative Studio" },
      {
        property: "og:description",
        content:
          "Estúdio criativo de imagem, filme e mundo. Onde uma ideia deixa de ser imaginada e começa a ser vista.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const disciplines = ["Imagem", "Filme", "Mundo", "Direção Criativa", "Pós-produção", "Inteligência Artificial"];

const works = [
  {
    src: workLight,
    title: "Aurora Interior",
    client: "Campanha · Marca de luxo",
    year: "2026",
  },
  {
    src: workChrome,
    title: "Forma Líquida",
    client: "Filme de produto · CGI",
    year: "2025",
  },
  {
    src: workDance,
    title: "Corpo em Trânsito",
    client: "Filme de moda · Editorial",
    year: "2025",
  },
  {
    src: workArch,
    title: "Hora Azul",
    client: "Série fotográfica · Arquitetura",
    year: "2024",
  },
];

const partners = [
  "Natura",
  "Vivo",
  "O Boticário",
  "Havaianas",
  "Itaú",
  "Ambev",
  "Renner",
  "SBT",
  "Nubank",
  "iFood",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" aria-label="Adaptive Creative Studio">
            <img src={logoWhite.url} alt="Adaptive" className="h-4 w-auto" />
          </a>
          <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#work" className="transition-colors hover:text-foreground">
              Trabalhos
            </a>
            <a href="#studio" className="transition-colors hover:text-foreground">
              Estúdio
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contacto
            </a>
          </div>
          <a
            href="#contact"
            className="text-xs uppercase tracking-[0.2em] text-accent transition-colors hover:text-foreground"
          >
            Iniciar projeto
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pb-16 pt-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 50% 30%, oklch(0.38 0.16 268 / 0.55), transparent 70%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-7xl">
          <img src={symbolWhite.url} alt="" className="mb-8 h-14 w-auto opacity-90" />
          <h1 className="max-w-4xl font-display text-3xl font-black uppercase leading-[1.15] tracking-tight text-balance md:text-5xl">
            EARN THE FUTURE. UM ESTÚDIO QUE ADAPTA MARCAS À NOVA ERA DIGITAL COM ESTRATÉGIA, CRIATIVIDADE E TECNOLOGIA.
          </h1>
          <div className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <ArrowDown className="h-4 w-4 animate-bounce" />
            Scroll
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section aria-label="Disciplinas" className="overflow-hidden border-y border-border py-6">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...disciplines, ...disciplines].map((d, i) => (
            <span key={i} className="flex items-center gap-12 text-2xl font-semibold uppercase tracking-[0.15em] text-muted-foreground">
              {d}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="mb-16 flex items-end justify-between">
          <h2 className="font-display text-4xl font-black uppercase tracking-tighter md:text-6xl">Trabalhos selecionados</h2>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground md:block">
            2024 — 2026
          </span>
        </div>
        <div className="grid gap-x-8 gap-y-20 md:grid-cols-2">
          {works.map((w, i) => (
            <figure key={w.title} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <div className="group overflow-hidden rounded-lg bg-card">
                <img
                  src={w.src}
                  alt={`${w.title} — ${w.client}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-medium">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.client}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{w.year}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-[1fr_1.4fr] md:py-40">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">O estúdio</p>
          </div>
          <div>
            <p className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tighter md:text-5xl">
              Adaptar é o nosso método.
            </p>
            <p className="mt-6 text-lg font-medium leading-relaxed text-muted-foreground">
              Somos uma equipa pequena de Viseu com obsessão por detalhe. Acreditamos que cada projeto é uma
              circunstância nova — e construímo-lo imagem a imagem, frame a frame, sem assumir que o que
              funcionou ontem funciona amanhã.
            </p>
            <div className="mt-16 grid gap-10 sm:grid-cols-3">
              {[
                { n: "08", label: "Anos de estúdio" },
                { n: "120+", label: "Projetos entregues" },
                { n: "14", label: "Prémios internacionais" },
              ].map((s) => (
                <div key={s.label} className="border-t border-border pt-6">
                  <p className="font-display text-4xl font-black text-accent">{s.n}</p>
                  <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section aria-label="Clientes" className="border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-12 text-center text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Confiam em nós
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {partners.map((p) => (
              <li
                key={p}
                className="text-lg font-light uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center md:py-44">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Novo projeto</p>
          <a
            href="mailto:hello@adaptive.studio"
            className="group inline-flex items-center gap-4 font-display text-[12vw] font-black uppercase tracking-tighter transition-colors hover:text-accent md:text-8xl"
          >
            Vamos criar
            <ArrowUpRight className="h-[0.6em] w-[0.6em] transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
          </a>
          <p className="mt-10 text-sm font-medium text-muted-foreground">hello@adaptive.studio</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row">
          <span className="flex items-center gap-3">
            <img src={symbolWhite.url} alt="Símbolo Adaptive" className="h-5 w-auto" />
            © 2026 Adaptive Creative Studio
          </span>
          <div className="flex gap-8">
            <a href="#top" className="transition-colors hover:text-foreground">
              Instagram
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Behance
            </a>
            <a href="#top" className="transition-colors hover:text-foreground">
              Vimeo
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
