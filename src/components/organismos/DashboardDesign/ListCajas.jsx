import React from "react";
import styled from "styled-components";

const data = [
  {
    image: "https://via.placeholder.com/40",
    address: "196 Kansas Avenue",
    date: "24.08 - 1.09",
    duration: "7 Days",
    amount: "$2,178.78",
    status: "Abierta",
  },
  {
    image: "https://via.placeholder.com/40",
    address: "917 Garden Street",
    date: "24.08 - 1.09",
    duration: "7 Days",
    amount: "$2,178.78",
    status: "Cerrada",
  },
  {
    image: "https://via.placeholder.com/40",
    address: "568 Gotham Center",
    date: "24.08 - 1.09",
    duration: "7 Days",
    amount: "$2,178.78",
    status: "Abierta",
  },
  {
    image: "https://via.placeholder.com/40",
    address: "745 Sunset Boulevard",
    date: "24.08 - 1.09",
    duration: "7 Days",
    amount: "$2,178.78",
    status: "Cerrada",
  },
  {
    image: "https://via.placeholder.com/40",
    address: "12 Ocean Drive",
    date: "24.08 - 1.09",
    duration: "7 Days",
    amount: "$2,178.78",
    status: "Abierta",
  },
];

export const ListCajas = () => {
  return (
    <ListContainer>
      <Title>Cajas por Sucursales</Title>
      {data.map((item, index) => (
        <ListItem key={index}>
        
          <Details>
            <Address>{item.address}</Address>
            <Info>
              <Date>{item.date}</Date>
              <Duration>{item.duration}</Duration>
            </Info>
          </Details>
          <Amount>{item.amount}</Amount>
          <Status status={item.status}>{item.status}</Status>
        </ListItem>
      ))}
    </ListContainer>
  );
};

// Styled Components
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin: auto;

  border-radius: 8px;
  background-color: ${({theme})=>theme.body};
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme})=>theme.text};
  margin-bottom: 10px;
  text-transform:uppercase;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Address = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${({theme})=>theme.text};
  margin: 0;
`;

const Info = styled.div`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: #666;
`;

const Date = styled.span``;

const Duration = styled.span``;

const Amount = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #1f2937;
`;

const Status = styled.span`
  font-size: 10px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 12px;
  color: ${(props) =>
    props.status === "Abierta" ? "#289f18" : "#8f8f8f"};
  background: ${(props) =>
    props.status === "Abierta" ? "rgba(18, 173, 10, 0.3)" : "#353535"};
  text-transform: uppercase;

`;
