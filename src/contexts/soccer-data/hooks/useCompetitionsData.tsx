"use client";

import { useEffect, useState } from "react";
import * as R from "ramda";
import { CompetitionsData, useSoccerDataContext } from "../soccer-data-context";

type MenuData = {
  countryName: string;
  countryAbbr: string;
  competitions: Array<{
    name: string;
    href: string;
    matches: Array<{ home: string; away: string; score: string }>;
  }>;
};

export function useCompetitionsData() {
  const { data } = useSoccerDataContext();
  const [leftMenu, setLeftMenu] = useState<Record<string, MenuData> | null>(
    null
  );

  useEffect(() => {
    if (!data) return;

    const values = Object.values(data);

    const grouped = R.groupBy<(typeof values)[0]>((competition) => {
      return `${competition.country.name}|${competition.country.abbr}`;
    })(values);

    const menu = Object.entries(grouped).reduce(
      (acc, [country, countryData]) => {
        if (!countryData) return acc;

        const [countryName, countryAbbr] = country.split("|");

        acc[countryName] = {
          countryName,
          countryAbbr,
          competitions: countryData.map(({ name, matches }) => ({
            name,
            href: "#",
            matches: Object.values(matches),
          })),
        };

        return acc;
      },
      {} as Record<string, MenuData>
    );

    setLeftMenu(menu);
  }, [data]);

  return leftMenu;
}
