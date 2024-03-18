"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { onValue } from "@/firebase/database";

type CountryData = {
  name: string;
  abbr: string;
};

type MatchData = {
  home: string;
  away: string;
  score: string;
};

export type CompetitionsData = {
  country: CountryData;
  name: string;
  matches: Record<string, MatchData>;
};

type SoccerDataContextType = {
  data: Record<string, CompetitionsData> | null;
};

export const SoccerDataContext = createContext<SoccerDataContextType>({
  data: null,
});

export const SoccerDataContextProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<Record<string, CompetitionsData> | null>(
    null
  );

  useEffect(() => {
    async function fetchData() {
      try {
        onValue<Record<string, CompetitionsData>>("/competitions", (data) => {
          setData(data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <SoccerDataContext.Provider value={{ data }}>
      {children}
    </SoccerDataContext.Provider>
  );
};

export const useSoccerDataContext = () => useContext(SoccerDataContext);
