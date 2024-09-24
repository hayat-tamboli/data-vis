"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { hindiYearlyGenreCount } from "./data/hindiYearlyGenreCount";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

ChartJS.register(
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const MyRidgeLineChart = () => {
  // X - axis lable
  const labels = [
    "1931",
    "1932",
    "1933",
    "1934",
    "1935",
    "1936",
    "1937",
    "1938",
    "1939",
    "1940",
    "1941",
    "1942",
    "1943",
    "1944",
    "1945",
    "1946",
    "1947",
    "1948",
    "1949",
    "1950",
    "1951",
    "1952",
    "1953",
    "1954",
    "1955",
    "1956",
    "1957",
    "1958",
    "1959",
    "1960",
    "1961",
    "1962",
    "1963",
    "1964",
    "1965",
    "1966",
    "1967",
    "1968",
    "1969",
    "1970",
    "1971",
    "1972",
    "1973",
    "1974",
    "1975",
    "1976",
    "1977",
    "1978",
    "1979",
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
  ];

  const actionDataset = [];
  const romanceDataset = [];
  const comedyDataset = [];
  const thrillerDataset = [];
  const familyDataset = [];
  let actionFound = false;
  let romanceFound = false;
  let comedyFound = false;
  let thrillerFound = false;
  let familyFound = false;

  for (let i = 0; i < hindiYearlyGenreCount.length; i++) {
    const element = hindiYearlyGenreCount[i];
    for (let j = 0; j < element.GenreCounts.length; j++) {
      const genre = element.GenreCounts[j];
      if (genre.Genre === "Action") {
        actionDataset.push(genre.Count);
        actionFound = true;
      }
      if (genre.Genre === "Romance") {
        romanceDataset.push(genre.Count);
        romanceFound = true;
      }
      if (genre.Genre === "Comedy") {
        comedyDataset.push(genre.Count);
        comedyFound = true;
      }
      if (genre.Genre === "Thriller") {
        thrillerDataset.push(genre.Count);
        thrillerFound = true;
      }
      if (genre.Genre === "Family") {
        familyDataset.push(genre.Count);
        familyFound = true;
      }
    }
    if (actionFound == false) {
      actionDataset.push(0);
    }
    if (romanceFound == false) {
      romanceDataset.push(0);
    }
    if (comedyFound == false) {
      comedyDataset.push(0);
    }
    if (thrillerFound == false) {
      thrillerDataset.push(0);
    }
    if (familyFound == false) {
      familyDataset.push(0);
    }

    actionFound = false;
    romanceFound = false;
    comedyFound = false;
    thrillerFound = false;
    familyFound = false;
  }

  const data = {
    labels: labels,
    datasets: [
      {
        // Title of Graph
        label: "Action",
        data: actionDataset,
        fill: true,
        borderColor: "#96D3F0bb",
        backgroundColor: "#96D3F020",
        tension: 0.1,
      },
      {
        // Title of Graph
        label: "Romance",
        data: romanceDataset,
        fill: true,
        borderColor: "#e23d30bb",
        backgroundColor: "#e23d3030",
        tension: 0.1,
      },
      {
        // Title of Graph
        label: "Comedy",
        data: comedyDataset,
        fill: true,
        borderColor: "#7A2785bb",
        backgroundColor: "#7A278540",
        tension: 0.1,
      },
      {
        // Title of Graph
        label: "Thriller",
        data: thrillerDataset,
        fill: true,
        borderColor: "#99A792bb",
        backgroundColor: "#99A79250",
        tension: 0.1,
      },
      {
        // Title of Graph
        label: "Family",
        data: familyDataset,
        fill: true,
        borderColor: "#f8a554bb",
        backgroundColor: "#f8a55460",
        tension: 0.1,
      },
      // insert similar in dataset object for making multi line chart
    ],
  };

  // To make configuration
  const options = {
    responsive: true,
    transitions: {
      show: {
        animations: {
          x: {
            from: 0,
          },
          y: {
            from: 0,
          },
        },
      },
      hide: {
        animations: {
          x: {
            to: 0,
          },
          y: {
            to: 0,
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 14,
            family: "ClashGrotesk-Variable",
          },
        },
      },
      title: {
        display: true,
      },
      tooltip: {
        mode: "index",
        backgroundColor: "#ffffff",
        bodyColor: "#000000",
        titleColor: "#000000",
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        grid: {
          color: "#00000009",
          borderColor: "grey",
          tickColor: "grey",
        },
        title: {
          display: false,
          text: "Years",
        },
      },
      y: {
        grid: {
          color: "#00000009",
          borderColor: "grey",
          tickColor: "grey",
        },
        stacked: false,
        title: {
          display: false,
          text: "Count",
        },
      },
    },
  };

  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle className="text-2xl">The race of genres</CardTitle>
        <CardDescription className="text-lg">
          Showing top 5 genre count of hindi bollywood movies from 1931 to 2022
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center mt-auto">
        <div className="w-full my-auto">
          <Line data={data} options={options} height={300} />
        </div>
      </CardContent>
    </Card>
  );
};
