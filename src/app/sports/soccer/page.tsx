"use client";

import "./styles.sass";

import { Fragment, useState } from "react";
import { classNames } from "@/utils/class-names";
import { useCompetitionsData } from "@/contexts";

const tabs = [
  { label: "Ao Vivo" },
  { label: "Próximos" },
  { label: "Resultados" },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);
  const competitionsData = useCompetitionsData();

  if (!competitionsData) return;

  return (
    <div className="card shadow-md rounded-lg p-4 bg-base-100">
      <nav className="flex mb-4">
        <div
          role="tablist"
          className="tabs tabs-boxed bg-transparent
        "
        >
          {tabs.map((tab, index) => (
            <span
              key={tab.label}
              role="tab"
              className={classNames(
                "tab",
                index === selectedTab ? "tab-active" : ""
              )}
              onClick={() => setSelectedTab(index)}
            >
              {tab.label}
            </span>
          ))}
        </div>
      </nav>
      {Object.values(competitionsData).map(
        ({ countryName, countryAbbr, competitions }) =>
          competitions.map(({ name: competitionName, matches }) => (
            <div
              key={`${countryName}-${competitionName}`}
              className="matches-card"
            >
              <div>
                <span
                  className={classNames(
                    "flag",
                    `flag-${countryAbbr.toLowerCase()}`
                  )}
                ></span>
                <div>
                  <span className="local">{countryName}</span> -{" "}
                  <span className="competition">{competitionName}</span>
                </div>
              </div>
              <div>
                <div className="head">
                  <div>
                    <div></div>
                    <div>Home</div>
                    <div></div>
                    <div>Away</div>
                    <div></div>
                  </div>
                </div>
                <div className="body">
                  {matches.map(({ home, away, score }) => (
                    <div key={`${home}${away}${score}`}>
                      <div>Live</div>
                      <div>{home}</div>
                      <div>{score}</div>
                      <div>{away}</div>
                      <div>
                        <span className="transmission transmission-sportv"></span>
                        <span className="transmission transmission-premiere"></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  );
}
