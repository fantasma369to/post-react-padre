import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react"; // Importar Iconify

export const CardTotales = ({ title, sales, percentage, fillWidth, icon,coloricon,bgicon }) => {
  return (
    <Card >
      <Title >
        <IconWrapper $bgicon={bgicon}>
          <Icon icon={icon} width="20" height="20" color={coloricon} />
        </IconWrapper>
        <TitleText>{title}</TitleText>
        <Percentage>
          <Icon
            icon="akar-icons:arrow-up"
            width="16"
            height="16"
            color="#02972f"
          />{" "}
          {percentage}%
        </Percentage>
      </Title>
      <SalesValue>{sales}</SalesValue>
    </Card>
  );
};

// Estilos con Styled Components
const Card = styled.div`
  border-radius: 20px;
  height: 100%;
  position: relative;
 
`;

const Title = styled.div`
  display: flex;
  align-items: center;
 
`;

const IconWrapper = styled.span`
  position: relative;
  padding: 5px;
  background-color: ${(props)=>props.$bgicon};
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleText = styled.p`
  margin-left: 0.5rem;
  color: ${({theme})=>theme.colortitlecard};
  font-size: 18px;
  
`;

const Percentage = styled.p`
  margin-left: auto;
  color: #02972f;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const SalesValue = styled.p`
 color: ${({theme})=>theme.text};
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 700;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 0;
  left: 0;
  bottom: 0;
`;

const Range = styled.div`
  position: relative;
  background-color: #e5e7eb;
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

const Fill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #10b981;
  width: 76%; /* Valor dinámico */
  height: 100%;
  border-radius: 0.25rem;
`;
