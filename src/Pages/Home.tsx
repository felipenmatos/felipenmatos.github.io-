import React from "react";
import styled from "styled-components";
import logo from "../icons/Logo.svg";
import photoHome from "../icons/PhotoHome.png";
import imgProfile from "../icons/photoBlack.jpg";
import BodyTechnology from "../Components/BodyTechnology";
import Contact from "../Components/BodyContact/contact";
import project1 from "../icons/images/project1.jpg";
import project2 from "../icons/images/project2.jpg";
import project3 from "../icons/images/project3.jpg";
import project4 from "../icons/images/project4.jpg";
import project5 from "../icons/images/project5.png";
import project6 from "../icons/images/project6.jpg";
import project7 from "../icons/images/project7.jpg";
import project8 from "../icons/images/project8.jpg";
import iconCode from "../icons/icons/IconCode.svg";
import iconDesign from "../icons/icons/IconDesign.svg";
import iconCell from "../icons/icons/iconCell.svg";

const Home = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="logo" />
        <Menu>
          <ButtonMenu>Home</ButtonMenu>
          <ButtonMenu>About</ButtonMenu>
          <ButtonMenu>Projects</ButtonMenu>
        </Menu>
      </Header>
      <BodyHome>
        <Column>
          <Name>Felipe</Name>
          <Surname>Nonato</Surname>
          <Description>
            Desenvolvedor Front-End com formação em desenvolvimento de software
            pela Cubos Academy. Trabalho com desenvolvimento de websites,
            aplicativos e sistemas. Tenho constante estudo e busca por novos
            aprendizados para me especializar na stack em que atuo.
          </Description>
          <ButtonStart>Currículo</ButtonStart>
        </Column>
        <ImgBodyHome src={photoHome} alt="photoHome" />
      </BodyHome>
      <BodyAbout>
        <ColumnAbout>
          <ImgProfile src={imgProfile} alt="imgProfile" />
          <ButtonProjects>Projetos</ButtonProjects>
        </ColumnAbout>
        <ColumnAbout>
          <Title>Sobre_</Title>
          <Description>
            Me chamo Felipe, mas pode me chamar de Felps (apelido de infância).
            Sou baiano, tenho formação de especialização em Desenvolvimento de
            Softwares, também alguns cursos que complementam e consolidam novos
            conhecimentos.
          </Description>
          <Description>
            Costumo ser constante e criativo no que costumo fazer. Meus
            principais hobbies são: Assistir filmes e series, jogar, correr e
            desenvolver designs.
          </Description>
          <Description>
            Sou pai do Théo e marido da Natália. Tenho uma cadelinha chamada
            Sol. Minha família é minha principal motivação e inspiração, eles
            são minha base.
          </Description>
        </ColumnAbout>
      </BodyAbout>
      <TitleProject>Projetos_</TitleProject>
      <BodyProjects>
        <RowProject>
          <CardProject>
            <ImgProject src={project1} alt="project1" />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
          <CardProject>
            <ImgProject src={project2} alt="project2" />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
        </RowProject>
        <RowProject>
          <CardProject>
            <ImgProject src={project3} alt="project3" />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
          <CardProject>
            <ImgProject src={project4} alt="project4" />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
        </RowProject>
        <RowProject>
          <CardProject>
            <ImgProject src={project5} alt="project5" />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
          <CardProject>
            <ImgProject src={project6} alt="project6" />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
        </RowProject>
        <RowProject>
          <CardProject>
            <ImgProject src={project7} alt="project5" />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
          <CardProject>
            <ImgProject src={project8} alt="project6" />
            <Row>
              <ButtonCard>Deploy</ButtonCard>
              <ButtonCard>Código</ButtonCard>
            </Row>
          </CardProject>
        </RowProject>
      </BodyProjects>
      <BodyCourses>
        <Title>Serviços_</Title>
        <RowService>
          <CardService>
            <Icon src={iconDesign} alt="iconDesign" />
            <TitleService>Ui Design</TitleService>
            <Description>
              Desenho interface de forma que ela seja clara, objetiva e
              principalmente intuitiva para o usuário.
            </Description>
          </CardService>
          <CardService>
            <Icon src={iconCode} alt="iconCode" />
            <TitleService>Desenvolvimento</TitleService>
            <Description>
              Desenvolvo sites profissionais, blogs, portfólios, landing pages e
              e-commerce.
            </Description>
          </CardService>
          <CardService>
            <Icon src={iconCell} alt="iconCell" />
            <TitleService>Aplicativos Mobile</TitleService>
            <Description>
              Desenvolvimento de aplicativos mobile modernos.
            </Description>
          </CardService>
        </RowService>
      </BodyCourses>
      <BodyTech>
        <BodyTechnology />
      </BodyTech>
      <Footer>
        <Title>Contato</Title>
        <DescriptionFooter>
          Precisa de um desenvolvedor front-end? Vamos trabalhar juntos!
        </DescriptionFooter>
        <RowFooter>
          <ImgProfileFooter src={imgProfile} alt="imgProfile" />
          <DivEmail>
            <Email>felipenfrontend@gmail.com</Email>
          </DivEmail>
        </RowFooter>
        <RowButtons>
          <Contact />
        </RowButtons>
        <TextFooter>by: Felipe Nonato</TextFooter>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #181818;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

const Logo = styled.img`
  margin-left: 20px;
`;

const Menu = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 20px;
`;

const ButtonMenu = styled.button`
  background: transparent;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  :hover {
    color: #6a6a6a;
  }
`;

const BodyHome = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-left: 60px;
`;

const Name = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
`;

const Surname = styled.button`
  margin-top: -30px;
  width: 246px;
  height: 69px;
  text-items: center;
  background: #e85e39;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  border: none;
`;

const Description = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #909090;
`;

const ButtonStart = styled.button`
  width: 180px;
  height: 49px;
  background: #ffffff;
  border-radius: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  color: #6a6a6a;
  border: none;
  cursor: pointer;

  :hover {
    border: 1px solid #6a6a6a;
    background: transparent;
    color: #ffffff;
  }
`;

const ImgBodyHome = styled.img`
  width: 600px;
  height: 422px;

  @media (max-width: 868px) {
    display: none;
  }
`;

const BodyAbout = styled.div`
  width: 100%;
  height: 760px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ColumnAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`;

const ImgProfile = styled.img`
  width: 320px;
  height: 320px;
  border-radius: 100%;
  cursor: pointer;
  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;

  :hover {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const ButtonProjects = styled.button`
  width: 180px;
  height: 49px;
  background: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 70px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  color: #6a6a6a;
  border: none;
  cursor: pointer;

  :hover {
    border: 1px solid #6a6a6a;
    background: transparent;
    color: #ffffff;
  }
`;

const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
`;

const TitleProject = styled.h1`
  margin-left: -55%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
`;

const BodyProjects = styled.div`
  width: 100%;
  height: 1700px;
`;

const RowProject = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;
  margin-left: 10%;
`;

const CardProject = styled.div`
  width: 440px;
  height: 404px;
  background: #d9d9d9;
  border-radius: 10px;7
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease;

  :hover{
    transform: scale(1.1);
  }
`;

const ImgProject = styled.img`
  width: 100%;
  height: 300px;
  cursor: pointer;
  border-radius: 10px 10px 0px 0px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const ButtonCard = styled.button`
  width: 180px;
  height: 49px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #6a6a6a;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  :hover {
    border: 1px solid #6a6a6a;
    background: transparent;
    color: #6a6a6a;
  }
`;

const BodyCourses = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RowService = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const CardService = styled.div`
  width: 270px;
  height: 250px;
  background-color: #282828;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  :hover {
    border: 1px solid #e85e39;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 20px;
`;

const TitleService = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

const BodyTech = styled.div`
  width: 100%;
  height: 200px;
`;

const Footer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #5a5a5a;
`;

const ImgProfileFooter = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  cursor: pointer;
`;

const DescriptionFooter = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000;
`;

const RowFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 320px;
`;

const DivEmail = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  height: 40px;
  border-radius: 10px;
`;

const Email = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  color: #6a6a6a;
  cursor: pointer;
`;

const RowButtons = styled.div``;

const TextFooter = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #000;
`;

export default Home;
