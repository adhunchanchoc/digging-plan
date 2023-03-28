import React, { useEffect } from "react";
import { useState } from "react";
import importedEmployees from "../../data/employees.json";
import { PageWrap, List, Item, Tabs, TabBtn, FormGroup } from "./styledComps";

export default function Home() {
  const [activeTab, setActiveTab] = useState("employees");
  const switchTab = (event) => {
    console.log("switched to", event.target.value);
    setActiveTab(event.target.value);
  };
  const [employees, setEmployees] = useState(importedEmployees);
  // console.table(employees);
  const [newEmployee, setNewEmployee] = useState({
    id: employees.length + 1,
    name: "Jmeno Prijmeni",
    male: true,
  });
  const handleNew = (event) => {
    // {if (event.target.name==="" DOPLN PRAVY BOOLean
    setNewEmployee({ ...newEmployee, [event.target.name]: event.target.value });
  };
  useEffect(() => console.log(newEmployee), [newEmployee]);
  const handleAdd = () => {
    setEmployees(() => [...employees, newEmployee]);
    setNewEmployee({
      id: newEmployee.id + 1, //inkrementace previous value employees length se neaktualizuje
      // name: "Jmeno Prijmeni",
      // male: true,
    });
  };

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
                  {/* {em.name} - {em.male ? "muz" : "zena"} */}
                  {em.name} -{" "}
                  {typeof em.male === "boolean"
                    ? em.male
                      ? "muz"
                      : "zena"
                    : em.male === "true"
                    ? "muz"
                    : "zena"}
                </Item>
              ))}
            </List>
            <FormGroup>
              <input
                type="text"
                onChange={handleNew}
                name="name"
                placeholder="cele jmeno"
              />
              <label htmlFor="m">
                <input
                  type="radio"
                  onChange={handleNew}
                  // checked
                  value="true"
                  name="male"
                  id="m"
                />
                muz
              </label>
              <label htmlFor="f">
                <input
                  type="radio"
                  onChange={handleNew}
                  value="false"
                  name="male"
                  id="f"
                />
                zena
              </label>
              <input type="button" onClick={handleAdd} value="Pridat" />
            </FormGroup>
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
