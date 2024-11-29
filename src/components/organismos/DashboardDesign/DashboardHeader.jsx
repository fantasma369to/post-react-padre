import React from "react";
import styled from "styled-components";

export const DashboardHeader = () => {
  return (
    <HeaderContainer>
      <TextContainer>
        <Title>Bienvenido puerco</Title>
        <Subtitle>Aquí tienes una descripción general del tu empresa y tus sucursales activas recientemente..</Subtitle>
      </TextContainer>
      <ActionsContainer>
        <TimeRangeButton>12 months</TimeRangeButton>
        <TimeRangeButton>30 days</TimeRangeButton>
        <TimeRangeButton>7 days</TimeRangeButton>
        <TimeRangeButton>24 hours</TimeRangeButton>
        <FiltersButton>Filters</FiltersButton>
      </ActionsContainer>
    </HeaderContainer>
  );
};

// Estilos
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  
  
  border-radius: 8px;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #9CA3AF;
  margin: 5px 0 0 0;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 10px;
  border:2px solid ${({theme})=>theme.bg};
  border-radius:10px;
`;

const TimeRangeButton = styled.span`

  color:${({theme})=>theme.text};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background:${({theme})=>theme.bg};
  }

  &:focus {
    outline: 2px solid #2563EB;
    outline-offset: 2px;
  }
`;

const FiltersButton = styled.span`
  background: ${({theme})=>theme.bg};
 
  border: 1px solid #6B7280;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: #374151;
  }

  &:focus {
    outline: 2px solid #2563EB;
    outline-offset: 2px;
  }
`;

