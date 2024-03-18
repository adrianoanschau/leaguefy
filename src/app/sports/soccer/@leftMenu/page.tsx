"use client";

import { Fragment } from "react";
import "./styles.sass";

import { useCompetitionsData } from "@/contexts";
import { classNames } from "@/utils/class-names";
import Link from "next/link";

export default function SoccerLeftMenu() {
  const competitionsData = useCompetitionsData();

  if (!competitionsData) return;

  return (
    <ul className="menu">
      {Object.values(competitionsData).map(
        ({ countryName, countryAbbr, competitions }) => (
          <Fragment key={countryName}>
            <li className="menu-title">
              <span
                className={classNames(
                  "flag",
                  `flag-${countryAbbr.toLowerCase()}`
                )}
              ></span>
              <span>{countryName}</span>
            </li>
            {competitions.map((competition) => (
              <li key={competition.name}>
                <Link href={competition.href}>{competition.name}</Link>
              </li>
            ))}
          </Fragment>
        )
      )}
    </ul>
  );
}
