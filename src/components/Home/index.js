import React from "react";
import { PageWrap, List, Item, Tabs, TabBtn } from "./styledComps";

export default function Home() {
  return (
    <>
      <PageWrap>
        <Tabs>
          <TabBtn>Zamestnanci</TabBtn>
          <TabBtn>Zadane ukoly</TabBtn>
        </Tabs>

        <h3>Zamestnanci</h3>
        <List>
          <Item>kop</Item>
          <Item>kop</Item>
          <Item>kop</Item>
        </List>

        <h3>Zadane ukoly</h3>
        <List>
          <Item>kop</Item>
          <Item>kop</Item>
          <Item>kop</Item>
        </List>
      </PageWrap>
    </>
  );
}
