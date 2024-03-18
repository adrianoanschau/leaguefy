"use client";

import { useState } from "react";
import "./styles.sass";
import { classNames } from "@/utils/class-names";

const tabs = [
  { label: "Ao Vivo" },
  { label: "Próximos" },
  { label: "Resultados" },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

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
      <div className="matches-card">
        <div>
          <div className="flag flag-br"></div>
          <div>
            <span className="local">Brazil</span> -{" "}
            <span className="competition">Série A</span>
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
            <div>
              <div>Live</div>
              <div>Columbus Crew</div>
              <div>0 - 0</div>
              <div>New York RB</div>
              <div></div>
            </div>
            <div>
              <div>Live</div>
              <div>New York City</div>
              <div>0 - 0</div>
              <div>Toronto</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="matches-card">
        <div>
          <div className="flag flag-gb-eng"></div>
          <div>
            <span className="local">England</span> -{" "}
            <span className="competition">Premier League</span>
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
            <div>
              <div>Live</div>
              <div>Columbus Crew</div>
              <div>0 - 0</div>
              <div>New York RB</div>
              <div></div>
            </div>
            <div>
              <div>Live</div>
              <div>New York City</div>
              <div>0 - 0</div>
              <div>Toronto</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="matches-card">
        <div>
          <div className="flag flag-de"></div>
          <div>
            <span className="local">Germany</span> -{" "}
            <span className="competition">Bundesliga</span>
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
            <div>
              <div>Live</div>
              <div>Columbus Crew</div>
              <div>0 - 0</div>
              <div>New York RB</div>
              <div></div>
            </div>
            <div>
              <div>Live</div>
              <div>New York City</div>
              <div>0 - 0</div>
              <div>Toronto</div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
