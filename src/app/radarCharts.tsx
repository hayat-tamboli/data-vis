"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Slider } from "@/components/ui/slider";
import { hindiYearlyGenreCount } from "./data/hindiYearlyGenreCount";
import { SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, ArrowCounterClockwise } from "@phosphor-icons/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radar chart";

const chartConfig = {
  Count: {
    label: "Count",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function MyRadarChart() {
  const [sliderValue, setSliderValue] = useState([1]);
  const [isAnimating, setIsAnimating] = useState(false); // State to track animation

  // Effect to increment the slider value every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) {
        // Check if animation is active
        setSliderValue((prevValue) => {
          if (prevValue[0] < 91) {
            return [prevValue[0] + 1]; // Increment value
          } else {
            // clearInterval(interval); // Clear the interval if max value reached
            return prevValue; // Return current value if max reached
          }
        });
      }
    }, 750); // Set interval for 2000ms (2 seconds)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Function to handle slider manual adjustment
  const handleSliderChange = (value: SetStateAction<number[]>) => {
    setSliderValue(value);
    setIsAnimating(false); // Stop animation
    console.log(value);

    // Restart the animation after 5 seconds
    setTimeout(() => {
      setIsAnimating(true);
    }, 5000);
  };

  return (
    <Card className="flex-1">
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-2xl">Lets talk genres</CardTitle>
        <CardDescription className="text-lg">
          Showing movies by genre from 1931 to 2022
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[650px]"
        >
          <RadarChart data={hindiYearlyGenreCount[sliderValue[0]].GenreCounts}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent className="bg-white" />}
            />
            <PolarAngleAxis dataKey="Genre" />
            <PolarGrid />
            <Radar
              dataKey="Count"
              fill="var(--color-Count)"
              fillOpacity={0.6}
              animationDuration={250}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="mr-2 w-12">Year: {sliderValue[0] + 1931}</div>
        <Button
          variant="outline"
          className={sliderValue[0] == 91 ? "hidden" : "px-3 py-5 mr-4"}
          onClick={() => {
            setIsAnimating(!isAnimating);
          }}
        >
          <Play
            size={20}
            weight="regular"
            className={!isAnimating ? "block" : "hidden"}
          />
          <Pause
            size={20}
            weight="regular"
            className={!isAnimating ? "hidden" : "block"}
          />
        </Button>
        <Button
          variant="outline"
          className={sliderValue[0] != 91 ? "hidden" : "flex px-3 py-5 mr-4"}
          onClick={() => {
            setSliderValue([0]);
          }}
        >
          <ArrowCounterClockwise size={20} />
        </Button>
        <Slider
          value={sliderValue} // Bind the slider value
          max={91}
          step={1}
          onValueChange={handleSliderChange} // Use the new handler
        />
      </CardFooter>
    </Card>
  );
}
