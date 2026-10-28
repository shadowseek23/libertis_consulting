"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ArrowDown, ArrowUp } from "lucide-react";
import { projects } from "@/data/projects";

type Filter = "all" | "strategy";
const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Vše" },
  { value: "strategy", label: "Strategie & obsah" },
];

export function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);
  const matching = projects.filter((project) => filter !== "strategy" || project.strategy);
  const visible = expanded ? matching : matching.slice(0, 4);

  return (
    <>
      <div className="work-toolbar">
        <div className="project-filters" role="group" aria-label="Filtrovat projekty">
          {filters.map((item) => (
            <button
              type="button"
              key={item.value}
              aria-pressed={filter === item.value}
              onClick={() => {
                setFilter(item.value);
                setExpanded(false);
              }}
            >
              {item.label}
              {item.value === "all" && <span>07</span>}
            </button>
          ))}
        </div>
        <span className="work-note" aria-live="polite">
          {filter === "strategy" ? "03 projekty" : "07 příběhů, každý jiný"}
        </span>
      </div>
      <div className="project-grid" id="project-grid">
        {visible.map((project, index) => (
          <article className="project-card" id={`projekt-${project.id}`} key={project.id}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-visual"
              style={{ backgroundColor: project.color }}
              aria-label={`Prohlédnout web ${project.name} (nové okno)`}
            >
              <div className="project-browser">
                <span />
                <span />
                <span />
                <span className="browser-address">
                  {new URL(project.url).hostname.replace("www.", "")}
                </span>
              </div>
              <div className="project-screen">
                <Image
                  src={project.image}
                  alt={`Screenshot úvodní stránky ${project.name}`}
                  fill
                  sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1500px) calc((100vw - 132px) / 2), 654px"
                  className="project-image"
                />
              </div>
              <span className="project-open">
                <ArrowUpRight size={23} aria-hidden="true" />
                <span>Prohlédnout web</span>
              </span>
            </a>
            <div className="project-heading">
              <h3>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </h3>
              <span>{String(index + 1).padStart(2, "0")} /</span>
            </div>
            <p className="project-headline">{project.headline}</p>
            <p className="project-description">{project.description}</p>
            <ul className="project-tags" aria-label={`Zaměření ${project.name}`}>
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {matching.length > 4 && (
        <div className="more-projects">
          <button
            type="button"
            className="button button-outline"
            aria-expanded={expanded}
            aria-controls="project-grid"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Zobrazit výběr" : "Další příběhy"}
            <span>
              {expanded ? (
                <ArrowUp size={18} aria-hidden="true" />
              ) : (
                <>
                  <span className="more-count">+{matching.length - 4}</span>
                  <ArrowDown size={18} aria-hidden="true" />
                </>
              )}
            </span>
          </button>
        </div>
      )}
    </>
  );
}
