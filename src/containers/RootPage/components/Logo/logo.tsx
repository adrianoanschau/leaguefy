import { Changa } from "next/font/google";

const changa = Changa({ subsets: ["latin"] });

export default function Logo() {
  return (
    <div className={changa.className}>
      <a className="btn btn-ghost text-4xl lowercase font-bold text-white">
        leaguefy
      </a>
    </div>
  );
}
