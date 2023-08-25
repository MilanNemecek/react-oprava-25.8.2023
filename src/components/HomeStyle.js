import styled from "styled-components";

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  width: 100%;
  align-items: center;
  background-color: #bdbdbd;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  background: transparent;
  margin: 30px 0px;
  height: 40px;
  padding-top: 0;
  justify-content: space-between;
  align-items: center;
`;

export const TabButtons = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 48%;
  border: 1px solid white;
  color: white;
  font-size: 20px;
  cursor: pointer;
  background-color: transparent;
  ${(props) => {
    if (props.name === props["data-active"]) {
      return `
        background-color: black;
        `;
    }
  }}
`;
export const FishList = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background: transparent;
`;
export const FishItem = styled.div`
  display: flex;
  height: 45px;
  padding: 0 15px;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f2f3;
  &:nth-child(even) {
    background-color: #c0a9bd;
  }
`;
export const BtnDeleteFish = styled.button`
  color: red;
  border: 2px solid red;
  border-radius: 50%;
  font-weight: bolder;
  height: 25px;
  width: 25px;
  &:hover {
    background-color: lightgrey;
  }
`;
export const FishForm = styled(FishList)`
  flex-direction: row;
  margin: 30px 0px;
  padding-top: 0;
`;
export const Input = styled.input`
  width: 100px;
  height: 25px;
  padding-left: 10px;
`;
export const RadioButtons = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  margin-top: -5px;
  margin-left: 73px;
`;
export const BtnAdd = styled.button`
  width: 100px;
  height: 32px;
  background-color: black;
  color: white;
  margin-left: 150px;
  padding-bottom: 5px;
  padding-top: 5px;
  border: none;
  outline: 1px solid black;
  &:hover {
    background-color: #c0a9bd;
  }
`;
export const Fish = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
`;
export const PlanButton = styled.button`
    margin-top:10px;
    border-radius: 5px;
    border:none;
    padding: 5px 10px;
    color:white ;
`;
