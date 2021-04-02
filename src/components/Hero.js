import React from "react";
import styled from "styled-components";
import BgImg from "../assets/background.png";

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Get 2 FREE Stocks <br /> valued up to $1850!
          </Title>
          <Desc>
            Open and fund a brokerage account with $100 or more and you will
            receive have a chance of claiming stocks like{" "}
            <span>GOOG, FB, SBUX</span> and more!
          </Desc>
          <Button href="http://bit.ly/webull-join">
            <span>Claim your free stocks now</span>
          </Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;

const Section = styled.div`
  background-image: url(${BgImg});
  height: 785px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
`;
const Content = styled.div`
  width: 100%;
  height: 100px;
`;
const Left = styled.div`
  padding-left: 220px;
  padding-top: 143px;
`;
const Title = styled.p`
  font-size: 55px;
  color: #04050a;
  font-weight: 700;
  font-family: OpenSans-Regular, PingFangSC-Regular, Arial, Helvetica,
    "Microsoft YaHei", sans-serif;
`;
const Desc = styled.p`
  width: 472px;
  font-size: 20px;
  color: #9ea0ac;
  line-height: 30px;
  margin-top: 58px;

  > span {
    color: #0b90ff;
  }
`;
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  margin-top: 58px;
  width: 371px;
  height: 71px;
  line-height: 71px;
  font-size: 22px;
  text-align: center;
  color: #fff;
  background: linear-gradient(90deg, #0546d6, #3f89fc);
  text-decoration: none;
  box-shadow: 0 15px 14px rgba(0 42 177/12%);
  font-family: OpenSans-Regular, PingFangSC-Regular, Arial, Helvetica,
    "Microsoft YaHei", sans-serif;
`;