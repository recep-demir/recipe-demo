import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 75px);
  padding: 20px;
  background-color: #121212;
  color: #f0f0f0;
`;

export const DetailPart = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #1e1e1e;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  width: 90%;
  max-width: 1200px;
`;

export const ImgContainer = styled.div`
  border: 2px solid #00adb5;
  padding: 15px;
  border-radius: 10px;
  background-color: #222;
  img {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  h1 {
    font-size: 2.5rem;
    color: #00adb5;
  }
  img {
    width: 150px;
    border-radius: 50%;
  }
`;

export const IngredContainer = styled.div`
  width: 100%;
  max-width: 400px;
  font-size: 1.2rem;
  padding: 15px;
  background-color: #2c2c2c;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

export const OtherPart = styled.div`
  width: 100%;
  max-width: 400px;
  font-size: 1.4rem;
  padding: 15px;
  background-color: #2c2c2c;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
`;
