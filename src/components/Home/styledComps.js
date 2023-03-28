import styled from "styled-components";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: space-between; */
  /* text-align: center; */
  border: 1px blue solid;
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
  border: 1px red solid;
  font-size: 20px;
  padding: 0.2rem;
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
