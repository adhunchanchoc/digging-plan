import React from "react";
import { useState } from "react";
import importedEmployees from "../../data/employees.json";
import { PageWrap, List, Item, Tabs, TabBtn } from "./styledComps";

export default function Home() {
  const [activeTab, setActiveTab] = useState("employees");
  const switchTab = (event) => {
    console.log("switched to", event.target.value);
    setActiveTab(event.target.value);
  };

  const [employees, setEmployees] = useState(importedEmployees);
  // console.table(employees);

  return (
    <>
      <PageWrap>
        <Tabs>
          <TabBtn onClick={switchTab} value="employees" active={activeTab}>
            Zamestnanci
          </TabBtn>
          <TabBtn onClick={switchTab} value="tasks" active={activeTab}>
            Zadane ukoly
          </TabBtn>
        </Tabs>
        {activeTab === "employees" && (
          <>
            <h3>Zamestnanci</h3>
            <List>
              {employees.map((em) => (
                <Item key={em.id}>
                  {em.name} - {em.male ? "muz" : "zena"}
                </Item>
              ))}
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
