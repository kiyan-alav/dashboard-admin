import React from "react";
import {
  AreaChart,
  linearGradient,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ResponsiveContainer,
} from "recharts";

import "./Chart.css";

export default function Chart({ title, data, xAxisDataKey, areaDataKey }) {
  return (
    <>
      <section className="chartContainer">
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4}>
          <AreaChart
            width={730}
            // height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey={xAxisDataKey} />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey={areaDataKey}
              stroke="#8884d8"
              fillOpacity={1}
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </section>
    </>
  );
}
