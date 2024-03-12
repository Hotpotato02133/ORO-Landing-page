import styled from "styled-components";


const FOOTER = styled.footer`
  padding: 1.2rem calc(2.5rem + 2.5vw);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    div {
      &:first-child {
        margin-bottom: 1rem;
        align-items: center;
      }
    }
  }
`;

const LeftText = styled.div`
  text-align: left;
  @media only screen and (min-width: 21.875em){
    justify-content: center;
    text-align: center;
  }
`;

const RightText = styled.div`
  text-align: right;
  @media only screen and (min-width: 21.875em){
    justify-content:  center;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FOOTER>
      <LeftText>
        © 2024 Built and Design by{" "}
        <a href="https://www.messenger.com/t/100067572742979" target="_blank" rel="noopener noreferrer" aria-label="Chat with us!">
          @ORODevTeam
        </a>
      </LeftText>
      <RightText>
        <a href="https://www.facebook.com/OROBusinessGroup" target="_blank" rel="noopener noreferrer" aria-label="Visit ORO Business Group on Facebook">
          ORO Business Group&nbsp;&nbsp;&nbsp;
        </a>
        <a href="https://www.facebook.com/OROWonderDrug/" target="_blank" rel="noopener noreferrer" aria-label="Visit ORO Wonder Drug on Facebook">
          ORO Wonder Drug&nbsp;&nbsp;&nbsp;
        </a>
        <a href="https://www.facebook.com/OROMegaworld" target="_blank" rel="noopener noreferrer" aria-label="Visit ORO Mega World on Facebook">
          ORO Mega World&nbsp;&nbsp;&nbsp;
        </a>
        <a href="https://www.facebook.com/people/FOTON-Zamboanga/100057353112591/" target="_blank" rel="noopener noreferrer" aria-label="Visit Foton Zamboanga City on Facebook">
          Foton&nbsp;&nbsp;&nbsp;
        </a>
        <a href="https://www.facebook.com/AbaloneSM/" target="_blank" rel="noopener noreferrer" aria-label="Visit Abalone on Facebook">
          Abalone&nbsp;&nbsp;
        </a>
      </RightText>
    </FOOTER>
  );
};

export default Footer;

//© 2024 Design by @ORO DevTeam.
