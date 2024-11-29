import React from "react";
import styled from "styled-components";
import { CardTotales } from "../organismos/DashboardDesign/CardTotales";
import { CardProductosTop } from "../organismos/DashboardDesign/CardProductosTop";
import { ChartVentas } from "../organismos/DashboardDesign/ChartVentas";
import { ListCajas } from "../organismos/DashboardDesign/ListCajas";
import { ChartVentasMetodosPago } from "../organismos/DashboardDesign/ChartVentasMetodosPago";
import { DashboardHeader } from "../organismos/DashboardDesign/DashboardHeader";

export function Dashboard() {
  return (
    <DashboardContainer>
      {/* Header */}
      <DashboardHeader/>
      {/* <Header>
        <SearchBar>Search</SearchBar>
        <DateRange>Select Date</DateRange>
        <ExportButton>Export</ExportButton>
      </Header> */}

      {/* Balance Section */}
     

      {/* Main Content */}
      <MainContent>
        <AccountDetails>
          <Placeholder >
            <CardTotales
              title="T. Ventas"
              sales="39,500"
              percentage={20} // Cambio respecto al mes pasado    
              icon="mdi:dollar"
             
            />
          </Placeholder>
          <Placeholder >
            <CardTotales
              title="Clientes"
              sales="39,500"
              percentage={20} // Cambio respecto al mes pasado
              fillWidth={(39500 / 50000) * 100} // Barra de progreso dinámico
              icon="mdi:dollar"
            
            />
          </Placeholder>
          <Placeholder >
            <CardTotales
              title="Usuarios"
              sales="39,500"
              percentage={20} // Cambio respecto al mes pasado
              fillWidth={(39500 / 50000) * 100} // Barra de progreso dinámico
              icon="mdi:dollar"
             
            />
          </Placeholder>
          <Placeholder >
            <CardTotales
              title="Productos"
              sales="39,500"
              percentage={20} // Cambio respecto al mes pasado
              fillWidth={(39500 / 50000) * 100} // Barra de progreso dinámico
              icon="mdi:dollar"
            />
          </Placeholder>
        </AccountDetails>
        <CashFlow>
          <ChartVentas />
          <ChartVentasMetodosPago />
        </CashFlow>
        <IncomeExpense>
          <CardProductosTop />
        </IncomeExpense>

        <RecentActivity><ListCajas/></RecentActivity>
        <MyCards><ListCajas/></MyCards>
      </MainContent>
    </DashboardContainer>
  );
}

/* Estilos */
const DashboardContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;

  min-height: calc(100vh - 40px);
  font-family: "Inter", sans-serif;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 10px;
`;

const SearchBar = styled.div`
  background: #e5e5e5;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`;

const DateRange = styled.div`
  background: #d0d0d0;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`;

const ExportButton = styled.div`
  background: #c0c0c0;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
`;

const TotalBalance = styled.div`
  background: #3b4252;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-areas:
    "accounts accounts income-expense"
    "cashflow  cashflow income-expense"
    "activity cards cards";
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 140px auto auto; /* Altura específica para cada fila */
  gap: 20px;
`;

const CashFlow = styled.div`
  grid-area: cashflow;
  background: #d8dee9;
    border-radius: 8px;
  text-align: center;
  display:flex;
  gap:10px;
  width:100%;
  background-color:${({theme})=>theme.body};
`;

const IncomeExpense = styled.div`
  grid-area: income-expense;
  background-color:${({theme})=>theme.body};

  border-radius: 20px;
  text-align: center;
`;

const Placeholder = styled.div`
  background-color:${({theme})=>theme.body};
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  border:2px solid ${({theme})=>theme.bg};
  
`;

const AccountDetails = styled.div`
  grid-area: accounts;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const RecentActivity = styled.div`
  grid-area: activity;
 
padding:20px;
  border-radius: 8px;
  text-align: center;
`;

const MyCards = styled.div`
  grid-area: cards;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;
