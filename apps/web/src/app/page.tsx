import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Brand } from "@/components/site/brand";
import { SiteHeader } from "@/components/site/site-header";
import { HeroArtwork } from "@/components/site/hero-artwork";
import { ProjectGallery } from "@/components/site/project-gallery";

const services = [
  {
    number: "01",
    title: "Strategie značky",
    short: "Najdeme to, co je opravdu vaše.",
    text: "Společně pojmenujeme, v čem spočívá vaše hodnota, pro koho je důležitá a čím se odlišujete. Vznikne jasný základ pro rozhodování i komunikaci — takový, ve kterém se poznáte.",
    tags: ["Podstata značky", "Positioning", "Komunikační směr"],
  },
  {
    number: "02",
    title: "Obsah & komunikace",
    short: "Dáme vaší hodnotě správná slova.",
    text: "Přeložíme vaši odbornost do jazyka zákazníků. Uspořádáme obsah, najdeme přirozený tón a napíšeme texty, ze kterých lidé pochopí, co děláte a proč by je to mělo zajímat.",
    tags: ["Obsahová strategie", "Copywriting", "Tón komunikace"],
  },
  {
    number: "03",
    title: "Web & digitální design",
    short: "Vytvoříme místo, kde všechno zapadne.",
    text: "Strategii a obsah proměníme ve funkční web. Navrhneme strukturu, vizuální podobu i drobné interakce a postaráme se o vývoj. Aby byl web stejně příjemný na používání jako na pohled.",
    tags: ["UX/UI design", "Motion design", "Vývoj webu"],
  },
];

function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true" className={className}>
      {[0, 45, 90, 135].map((angle) => (
        <path
          key={angle}
          d="M50 8V92"
          stroke="currentColor"
          strokeWidth="10"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  );
}

export default function Home() {
  return (
    <div id="nahoru">
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>
      <SiteHeader />
      <main id="obsah">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="eyebrow hero-eyebrow">
            <span className="status-dot" /> NEZÁVISLÉ KREATIVNÍ STUDIO
          </div>
          <h1 id="hero-title">
            Vaše podnikání
            <br />
            má <em>duši.</em>
            <span className="title-spark">
              <Asterisk />
            </span>
          </h1>
          <div className="hero-copy">
            <p className="hero-statement">Pojďme ji společně osvobodit.</p>
            <p>
              Pomáháme značkám pojmenovat, v čem jsou výjimečné. A ukázat to světu — správnými
              slovy, designem a webem.
            </p>
            <a className="button button-primary" href="#kontakt">
              Pojďme najít váš směr <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
          <HeroArtwork />
          <div className="hero-baseline">
            <a href="#prace">
              Objevte naši práci <ArrowDown size={15} aria-hidden="true" />
            </a>
            <span>
              STRATEGIE <i /> OBSAH <i /> DIGITÁLNÍ ZÁŽITEK
            </span>
            <span className="hero-coordinate">S PODSTATOU. S CITEM.</span>
          </div>
        </section>

        <section className="clients container" aria-label="Vybrané značky">
          <p>
            Značky, se kterými jsme
            <br />
            našli společnou řeč.
          </p>
          <div className="client-wordmarks">
            <span className="client-schwarz">SCHWARZ</span>
            <span className="client-dabricon">DABRICON</span>
            <span className="client-sabris">sabris</span>
            <span className="client-niderle">
              NIDERLE<span>DŘEVOSTAVBY</span>
            </span>
            <span className="client-altenergy">ALTENERGY</span>
          </div>
        </section>

        <section
          className="approach container section-space"
          id="pristup"
          aria-labelledby="approach-title"
        >
          <div className="section-label">
            <span className="label-index">01 /</span> NAŠE PŘESVĚDČENÍ
          </div>
          <div className="approach-content">
            <h2 id="approach-title">
              To důležité už ve vás je.
              <br />
              Pomůžeme tomu dát <em>tvar.</em>
            </h2>
            <div className="approach-copy">
              <p>
                Možná děláte skvělou práci, ale z vaší komunikace to není poznat. Možná jste
                vyrostli a váš web zůstal o kus zpátky. Nebo jen cítíte, že to ještě není úplně ono.
              </p>
              <p>
                Jsme Libertis. Kreativní studio, které propojuje strategii značky, obsah a digitální
                design. Nejdřív vás poznáme. Pak společně najdeme způsob, jak vaši skutečnou hodnotu
                ukázat lidem, pro které je důležitá.
              </p>
            </div>
            <a className="text-link" href="#sluzby">
              Od podstaty k prezentaci <ArrowRight size={19} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="services container" id="sluzby" aria-labelledby="services-title">
          <div className="services-top">
            <div className="section-label">
              <span className="label-index">02 /</span> CO SPOLU VYTVOŘÍME
            </div>
            <h2 id="services-title">
              Jasný směr. <em>Vlastní hlas.</em>
            </h2>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <details className="service" key={service.number} open={index === 0}>
                <summary>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <span className="service-short">{service.short}</span>
                  <span className="service-plus">
                    <Plus size={21} aria-hidden="true" />
                  </span>
                </summary>
                <div className="service-body">
                  <p>{service.text}</p>
                  <ul>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="work container section-space" id="prace" aria-labelledby="work-title">
          <div className="work-header">
            <div>
              <div className="section-label">
                <span className="label-index">03 /</span> VYBRANÁ PRÁCE
              </div>
              <h2 id="work-title">
                Každá značka.
                <br />
                Jiný <em>příběh.</em>
              </h2>
            </div>
            <p>
              Různé obory. Různé výzvy.
              <br />
              Společné hledání toho podstatného.
            </p>
          </div>
          <ProjectGallery />
        </section>

        <section className="process container" aria-labelledby="process-title">
          <div className="process-heading">
            <div className="section-label">
              <span className="label-index">04 /</span> JAK TO U NÁS CHODÍ
            </div>
            <h2 id="process-title">
              Spolupráce začíná
              <br />
              <em>nasloucháním.</em>
            </h2>
            <p>
              Nemusíte přijít s hotovým zadáním.
              <br />
              Stačí chuť podívat se na svou značku jinak.
            </p>
          </div>
          <div className="process-steps">
            <div>
              <span className="process-number">
                01 <ArrowUpRight size={23} aria-hidden="true" />
              </span>
              <h3>Poznáme vás.</h3>
              <p>
                Ptáme se a nasloucháme. Zajímá nás, co děláte, čemu věříte a co od vás zákazníci
                skutečně potřebují.
              </p>
            </div>
            <div>
              <span className="process-number">
                02 <ArrowUpRight size={23} aria-hidden="true" />
              </span>
              <h3>Najdeme podstatu.</h3>
              <p>
                Propojíme souvislosti a pojmenujeme váš jedinečný přínos. Z něj vyroste jasný směr
                značky i komunikace.
              </p>
            </div>
            <div>
              <span className="process-number">
                03 <ArrowUpRight size={23} aria-hidden="true" />
              </span>
              <h3>Dáme jí život.</h3>
              <p>
                Slovy, designem a funkčním webem. S vámi u jednoho stolu a s prostorem pro zpětnou
                vazbu.
              </p>
            </div>
          </div>
        </section>

        <section
          className="contact container section-space"
          id="kontakt"
          aria-labelledby="contact-title"
        >
          <div className="contact-top">
            <div className="section-label">
              <span className="label-index">05 /</span> ZAČNĚME ROZHOVOREM
            </div>
            <span className="contact-side-note">
              Velké věci často začínají
              <br />
              docela obyčejným „ahoj“.
            </span>
          </div>
          <div className="contact-heading">
            <h2 id="contact-title">
              Vaše značka.
              <br />
              <em>Nová perspektiva.</em>
            </h2>
            <a
              className="contact-orb"
              href="mailto:hello@libertisconsulting.com"
              aria-label="Napsat Danielovi e-mail"
            >
              <ArrowUpRight aria-hidden="true" />
            </a>
            <Asterisk className="contact-spark" />
          </div>
          <div className="contact-bottom">
            <p>
              Co kdybychom se na ni podívali společně?
              <br />
              Napište nám, co máte na mysli. Rádi vás poznáme.
            </p>
            <div className="contact-details">
              <a className="contact-email" href="mailto:hello@libertisconsulting.com">
                hello@libertisconsulting.com
                <ArrowUpRight size={19} aria-hidden="true" />
              </a>
              <div>
                <span>Daniel Sýkora</span>
                <a href="tel:+420724587758">+420 724 587 758</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <Brand footer />
        <p>© {new Date().getFullYear()} Libertis Consulting</p>
        <a href="#nahoru">
          Zpátky na začátek <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}
