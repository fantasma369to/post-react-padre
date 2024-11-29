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

// Datos simulados para cuatro métodos de pago
const data = [
  { date: "Apr 7", cash: 20000, card: 15000, transfer: 5000, wallet: 3000 },
  { date: "Apr 8", cash: 25000, card: 18000, transfer: 7000, wallet: 4000 },
  { date: "Apr 9", cash: 30000, card: 20000, transfer: 8000, wallet: 5000 },
  { date: "Apr 10", cash: 40000, card: 22000, transfer: 8000, wallet: 6000 },
  { date: "Apr 11", cash: 35000, card: 25000, transfer: 10000, wallet: 7000 },
  { date: "Apr 12", cash: 32000, card: 28000, transfer: 11000, wallet: 8000 },
  { date: "Apr 13", cash: 36000, card: 30000, transfer: 12000, wallet: 9000 },
  { date: "Apr 14", cash: 34000, card: 29000, transfer: 11000, wallet: 9500 },
];

export const ChartVentasMetodosPago = () => {
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
              <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34D399" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#34D399" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorCard" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTransfer" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#F59E0B" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorWallet" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9333EA" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#9333EA" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />
            <YAxis hide domain={[0, "dataMax + 5000"]} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="cash"
              stroke="#34D399"
              fill="url(#colorCash)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Area
              type="monotone"
              dataKey="card"
              stroke="#3B82F6"
              fill="url(#colorCard)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Area
              type="monotone"
              dataKey="transfer"
              stroke="#F59E0B"
              fill="url(#colorTransfer)"
              strokeWidth={2}
              activeDot={{ r: 6 }}
            />
            <Area
              type="monotone"
              dataKey="wallet"
              stroke="#9333EA"
              fill="url(#colorWallet)"
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
        {payload.map((item, index) => (
          <Value key={index}>
            {item.name}: ${item.value.toLocaleString()}
          </Value>
        ))}
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

