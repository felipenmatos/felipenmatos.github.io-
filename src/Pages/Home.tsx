import React from "react";
import styled from "styled-components";
import BodyProfile from "../Components/BodyProfile";
import Card from "../Components/Card";
import Header from "../Components/Header";
import HeaderProfile from "../Components/HeaderProfile";
import imgProject1 from "../../src/icons/images/Projeto1.jpg";
import imgProject2 from "../../src/icons/images/projeto3.jpg";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <Container>
      <Header />
      <HeaderProfile
        title="Portfolio"
        description="Desenvolvedor Front -End com cursos de especialização na área de
            atuação. Atuando desde março de 2021 como programador profissional.
            Felipe é um desenvolvedor empenhado em fazer entregas com qualidade
            e precisão."
        label="Veja mais sobre Felipe"
      />
      <BodyProfile />
      <RowCard>
        <Card photo={imgProject1} />
        <Card photo={imgProject2} />
      </RowCard>
      <RowCard>
        <Card photo={imgProject1} />
        <Card photo={imgProject2} />
      </RowCard>
      <RowCard>
        <Card photo={imgProject1} />
        <Card photo={imgProject2} />
      </RowCard>
      <RowCard>
        <Card photo={imgProject1} />
        <Card photo={imgProject2} />
      </RowCard>
      <Footer />
      <FooterPage>
        <Text>c 2022 . built with care. by Felipe Nonato </Text>
      </FooterPage>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(45, 0, 108);
  background: linear-gradient(
    90deg,
    rgba(45, 0, 108, 1) 0%,
    rgba(121, 9, 117, 1) 32%,
    rgba(131, 0, 255, 1) 100%
  );
  background-size: 100%;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
`;

const RowCard = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 768px) {
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FooterPage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-family: "Kanit", sans-serif;
`;

export default Home;
