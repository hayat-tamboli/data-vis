"use client";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { hindiMovieCountPerYear } from "./data/hindiMovieCountPerYear";
import grossingMovieData from "./data/grossingMovieData";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A step area chart";

const chartConfig = {
  year: {
    color: "hsl(var(--chart-1))",
    label: "Year",
  },
} satisfies ChartConfig;

export function TotalReleaseAreaChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">
          Release of Bollywood movies in each year
        </CardTitle>
        <CardDescription className="text-lg">
          Showing yearly release count of hindi bollywood movies from 1931 to
          2022
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <AreaChart
            accessibilityLayer
            data={hindiMovieCountPerYear}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-year)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-year)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={true}
              strokeDasharray="1 1"
              horizontal={true}
            />
            <XAxis
              dataKey="Year"
              tickLine={true}
              axisLine={false}
              tickMargin={12}
              tickFormatter={(value) => value.toString().slice(-2)}
            />
            <YAxis axisLine={false} />
            <Area
              dataKey="Count"
              type="step"
              animationDuration={5300}
              fill="url(#colorGradient)"
              fillOpacity={0.4}
              stroke="var(--color-year)"
            />
            {/* <ChartTooltip
              cursor={{ strokeDasharray: "3 3" }}
              useTranslate3d
              content={<IMDBChartTooltipContent><div>Hello hello</div></IMDBChartTooltipContent>} //<div className="bg-white p-2 rounded-md drop-shadow-md "></div>}
            /> */}
            <ChartTooltip
              content={
                <ChartTooltipContent
                  hideLabel
                  className="w-[180px] bg-white"
                  formatter={(value, name, item) => (
                    <>
                      <div
                        className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                        style={
                          {
                            "--color-bg": `var(--color-year)`,
                          } as React.CSSProperties
                        }
                      />
                      {/* {chartConfig[name as keyof typeof chartConfig]?.label ||
                        name} */}
                      <div>
                        Total Movies Released in {item.payload["Year"]}{" "}
                        <span className="font-medium">{value}</span>
                      </div>
                      {item.payload["Year"] >= 1972 && (
                        <>
                          <div className="flex items-baseline font-medium tabular-nums text-foreground">
                            <div className="text-muted-foreground">
                              Highest Grossing Movie:
                              <Image
                                src={
                                  "/images/" +
                                  grossingMovieData.find(
                                    (e) => e.Year == item.payload["Year"]
                                  )?.ImageURL
                                }
                                className="h-54 rounded-md object-cover"
                                alt="Hello"
                                width={160}
                                height={300}
                              />
                              <div className="font-bold leading-none mt-1">
                                {
                                  grossingMovieData.find(
                                    (e) => e.Year == item.payload["Year"]
                                  )?.Title
                                }
                              </div>
                              <div>
                                Total Earnings:{" "}
                                <span>
                                  {" "}
                                  {
                                    grossingMovieData.find(
                                      (e) => e.Year == item.payload["Year"]
                                    )?.Earnings
                                  }{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                />
              }
              cursor={false}
              defaultIndex={1}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
