import { TotalReleaseAreaChart } from "./totalReleaseAreaChart";
import { MyRadarChart } from "../app/radarCharts";
import { MyRidgeLineChart } from "../app/myAreaChart";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <main className="flex flex-col gap-8 lg:p-20 p-4">
        <div className="text-black">
          <h1 className="font-bold text-5xl">
            Bolly <span className="text-cyan-600">Blues</span>
          </h1>
          <h3 className="text-2xl">A data visualization of Bollywood</h3>
          <p>
            Inspired from the work of{" "}
            <a
              href="https://man-shar.github.io/BollyBlues/bolly.html"
              target="_blank"
              className="hover:underline text-cyan-600"
            >
              Manas Sharma
            </a>
          </p>
          <p>
            Dataset used for this visualizatioon is taken from{" "}
            <a
              href="https://www.kaggle.com/datasets/nareshbhat/indian-moviesimdb"
              target="_blank"
              className="hover:underline text-cyan-600"
            >
              Kaggle
            </a>
            . IMDB Pages were scraped using{" "}
            <a
              href="http://www.python.org/"
              className="hover:underline text-cyan-600"
            >
              Python
            </a>
            &apos;s Selenium and requests library to get Poster images from 1972
            - 2022.
          </p>
          <p>
            <a
              href="https://ui.shadcn.com/charts"
              target="_blank"
              className="hover:underline text-cyan-600"
            >
              Shadcn Charts
            </a>{" "}
            and{" "}
            <a
              href="https://ui.shadcn.com/charts"
              target="_blank"
              className="hover:underline text-cyan-600"
            >
              Chart.js
            </a>{" "}
            were used to create these charts.
          </p>
        </div>
        <TotalReleaseAreaChart />
        <div className="flex lg:flex-row flex-col gap-8">
          <MyRadarChart />
          <MyRidgeLineChart />
        </div>
      </main>
    </div>
  );
}
