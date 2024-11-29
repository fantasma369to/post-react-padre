import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Datos simulados
const sessionData = [
  { country: "Cerveza", value: 634, percentage: "8%", flag: "🇦🇺" },
  { country: "Camuflaje", value: 589, percentage: "7.2%", flag: "🇮🇩" },
  { country: "Dildo", value: 562, percentage: "6.2%", flag: "🇹🇭" },
  { country: "Cigarrillos", value: 453, percentage: "5.4%", flag: "🇩🇪" },
  { country: "Polo", value: 603, percentage: "5.4%", flag: "🇩🇪" },
];

export const CardProductosTop = () => {
  return (
    <CardContainer>
      <Header>
        <Title>TOP 5</Title>
        <Subtitle>Productos más vendidos</Subtitle>
      </Header>
      <Content>
        {sessionData.map((data, index) => (
          <Row key={index}>
            <Country>
             
              <CountryName>{data.country}</CountryName>
            </Country>
            <Stats>
              <Value>{data.value}</Value>
              <Percentage>{data.percentage}</Percentage>
            </Stats>
          </Row>
        ))}
      </Content>
      <BarChartWrapper>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={sessionData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            {/* Degradado para las barras */}
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6f15ca" stopOpacity={1} />
                <stop offset="100%" stopColor="#6f15ca" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="country"
              tick={{ fontSize: 12, fill: "#374151" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#374151" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#171717",
                borderRadius: "8px",
                color: "#fff",
                border: "none",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <Bar
              dataKey="value"
              fill="url(#barGradient)"
              radius={[10, 10, 0, 0]} // Bordes redondeados superiores
            />
          </BarChart>
        </ResponsiveContainer>
      </BarChartWrapper>
    </CardContainer>
  );
};

// Estilos
const CardContainer = styled.div`
 
  border-radius: 16px;
  padding: 20px;

`;

const Header = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: ${({theme})=>theme.text};
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #6b7280;
  margin: 5px 0 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Country = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 2;
`;

const Flag = styled.span`
  font-size: 18px;
`;

const CountryName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme})=>theme.text};
`;

const Stats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Value = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme})=>theme.colortitlecard};
`;

const Percentage = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #34d399;
`;

const BarChartWrapper = styled.div`
  margin-top: 30px;
`;

