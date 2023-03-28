import React from "react";
import { useState } from "react";
import { PageWrap, List, Item, Tabs, TabBtn } from "./styledComps";

export default function Home() {
  const [activeTab, setActiveTab] = useState("employees");
  const switchTab = (event) => {
    console.log("switched to", event.target.value);
    setActiveTab(event.target.value);
  };
  return (
    <>
      <PageWrap>
        <Tabs>
          <TabBtn onClick={switchTab} value="employees">
            Zamestnanci
          </TabBtn>
          <TabBtn onClick={switchTab} value="tasks">
            Zadane ukoly
          </TabBtn>
        </Tabs>
        {activeTab === "employees" && (
          <>
            <h3>Zamestnanci</h3>
            <List>
              <Item>kop</Item>
              <Item>kop</Item>
              <Item>kop</Item>
            </List>
          </>
        )}
        {activeTab === "tasks" && (
          <>
            <h3>Zadane ukoly</h3>
            <List>
              <Item>kop</Item>
              <Item>kop</Item>
              <Item>kop</Item>
            </List>
          </>
        )}
      </PageWrap>
    </>
  );
}
