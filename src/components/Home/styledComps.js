import styled from "styled-components";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: space-between; */
  /* text-align: center; */
  /* border: 1px blue solid; */
  max-width: 700px;
  margin: 0 auto;
`;
export const List = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px black solid;
`;
export const Item = styled.div`
  color: grey;
  display: block;
  font-size: 20px;
  padding: 0.2rem;
  border: 1px black solid;
`;

// kopie
export const DeleteBtn = styled.div`
  display: inline-block;
  position: relative;
  z-index: 50;
  color: red;
  height: 20px;
  width: 20px;
  border-radius: 80%;
  margin: 0;
  margin-left: 5px;
  vertical-align: baseline;
  align-items: center;
  justify-content: center;
  background: white;
  cursor: pointer;
`;

export const FormGroup = styled(Item)`
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: baseline;
  padding-left: 35px;
  padding-right: 35px;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  /* justify-content: space-around; */
  /* align-items: stretch; */
`;
export const TabBtn = styled.button`
  flex-basis: 160px;
  flex-grow: 1;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  height: 45px;
  cursor: pointer;
  background-color: ${(props) => {
    if (props.value === props.active) {
      return "greenyellow;font-weight: 800;";
    } else {
      return "beige";
    }
  }};
`;
