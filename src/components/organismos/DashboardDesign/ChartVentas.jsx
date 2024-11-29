import React from "react";
import styled from "styled-components";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Datos simulados
const data = [
  { date: "Apr 7", value: 40000 },
  { date: "Apr 8", value: 45000 },
  { date: "Apr 9", value: 48000 },
  { date: "Apr 10", value: 62800 },
  { date: "Apr 11", value: 52000 },
  { date: "Apr 12", value: 56000 },
  { date: "Apr 13", value: 60000 },
  { date: "Apr 14", value: 58000 },
];

export const ChartVentas = () => {
  return (
    <Card>
      <Header>
        <Title>Total revenue</Title>
        <Dropdown>Monthly</Dropdown>
      </Header>
      <MainInfo>
        <Revenue>$17,086.92</Revenue>
        <Change>
          <ArrowUp />
          <Percentage>8.34%</Percentage>
        </Change>
        <Gains>Gained $9,721.54 this month</Gains>
      </MainInfo>
      <ChartWrapper>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7745CA" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#7745CA" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />
            <YAxis
              hide
              domain={[0, "dataMax + 2000"]}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#7745CA"
              fillOpacity={1}
              fill="url(#colorValue)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </Card>
  );
};

// Tooltip personalizado
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <Date>{label}</Date>
        <Value>{payload[0].value.toLocaleString()}k</Value>
      </TooltipContainer>
    );
  }
  return null;
};

// Estilos
const Card = styled.div`
  
  border-radius: 12px;
  padding: 20px;
 

  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #1f2937;
`;

const Dropdown = styled.div`
  font-size: 14px;
  color: #6b7280;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }
`;

const MainInfo = styled.div`
  margin: 20px 0;
`;

const Revenue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
`;

const Change = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

const ArrowUp = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid #10b981;
`;

const Percentage = styled.span`
  font-size: 14px;
  color: #10b981;
`;

const Gains = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

const ChartWrapper = styled.div`
  margin-top: 20px;
`;

const TooltipContainer = styled.div`
  background: #111827;
  padding: 10px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 12px;
`;

const Date = styled.div`
  font-size: 14px;
`;

const Value = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

