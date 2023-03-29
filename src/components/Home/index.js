import React, { useEffect } from "react";
import { useState } from "react";
import importedEmployees from "../../data/employees.json";
import {
  PageWrap,
  List,
  Item,
  Tabs,
  TabBtn,
  FormGroup,
  DeleteBtn,
} from "./styledComps";

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
    name: "",
    male: true,
  });
  const handleNew = (event) => {
    // setNewEmployee({ ...newEmployee, [event.target.name]: event.target.value });
    // oproti puvodni funkcni verzi DOPLNEN PRAVY BOOLean, vyuzivam name namisto oftype()
    setNewEmployee({
      ...newEmployee,
      [event.target.name]:
        event.target.name === "male"
          ? event.target.value === "true"
            ? true
            : false
          : event.target.value,
    });
  };
  // useEffect(() => console.log(newEmployee), [newEmployee]);
  useEffect(
    () => console.log("pocet zamestnancu", employees.length),
    [employees]
  );
  const handleAdd = () => {
    setEmployees(() => [...employees, newEmployee]);
    setNewEmployee({
      id: newEmployee.id + 1, //inkrementace previous value employees length se neaktualizuje
      // name: "Jmeno Prijmeni",
      // male: true,
    });
  };
  const handleDelete = (id) => {
    // console.log("deleting", id);
    let updatedEmployees = employees.filter((em) => em.id != id); // DOP neprimy zpusob upravy state
    setEmployees(updatedEmployees);
  };

  const [manpower, setManpower] = useState(0); // potencial vsech kopacu v metrech za hod
  useEffect(() => {
    let total = 0;
    employees.forEach((em) => {
      total += em.male ? 1 : 0.5; // teprve spravny BOOLEAN pocita spravne
      console.log("total", total);
    });
    setManpower(total);
  }, [employees]);
  const [Tasks, setTasks] = useState([
    { kod: "kopAB01", metru: 5, maxhod: 4 },
    { kod: "kopAA02", metru: 2, maxhod: 3 },
    { kod: "kopBA15", metru: 8, maxhod: 12 },
  ]);
  const [newTask, setNewTask] = useState(Tasks);
  const handleNewTask = (event) => {
    console.log(event.target.value);
    setNewTask(() => {
      return {
        ...newTask,
        [event.target.name]:
          event.target.type == "number"
            ? parseFloat(event.target.value) //pozor, je desetinne
            : event.target.value,
      };
      //+ZKUS forms s useRef
      // return { kod: "<ABBA>", metru: 2, maxhod: 6 };
    });
    // console.table(newTask);
    // console.log(event);
    validateTask();
  };
  const addNewTask = () => {
    setTasks(() => [...Tasks, newTask]);
  };
  const handleDeleteTask = (kod) => {
    let updatedTasks = Tasks.filter((task) => task.kod != kod);
    setTasks(updatedTasks);
  };
  const [isValidTask, setIsValidTask] = useState(false);
  const validateTask = () => {
    let TEMPisValid = false;
    // if (1 + 0.5 + 1 + 1 >= manpower) console.log("OK", newTask.kod);
    if (newTask.metru / newTask.maxhod <= manpower) {
      TEMPisValid = true;
      console.log("ukol lze pridat");
      // setIsValidTask(true);
    } else {
      TEMPisValid = false;
      console.log("nedostatek pracovniku");
      // setIsValidTask(false);
    }
    setIsValidTask(TEMPisValid);
  };
  // update je o krok pozadu, pokud dam dependency / ALE zase bude vice narocne -casto renderovano
  useEffect(validateTask);

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
                  <DeleteBtn id={em.id} onClick={() => handleDelete(em.id)}>
                    X
                  </DeleteBtn>
                </Item>
              ))}
            </List>
            <FormGroup>
              <input
                type="text"
                onChange={handleNew}
                name="name"
                placeholder="cele jmeno"
                value={newEmployee.name}
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
              {Tasks.map((task) => {
                return (
                  <Item key={task.kod}>
                    {task.kod} / {task.metru} m / {task.maxhod} hod.
                    <DeleteBtn onClick={() => handleDeleteTask(task.kod)}>
                      X
                    </DeleteBtn>
                  </Item>
                );
              })}
            </List>
            <FormGroup>
              <input
                name="kod"
                style={{ width: "100px", fontSize: 18 }}
                type="text"
                onChange={handleNewTask}
                placeholder="kod ukolu"
                value={newTask.kod}
              />
              <label>
                <input
                  name="metru"
                  style={{ width: "40px", fontSize: 18 }}
                  type="number"
                  onChange={handleNewTask}
                  value={newTask.metru}
                />
                metru
              </label>
              <label>
                <input
                  name="maxhod"
                  style={{ width: "40px", fontSize: 18 }}
                  type="number"
                  onChange={handleNewTask}
                  value={newTask.maxhod}
                  // value="false"
                />
                max hod.
              </label>
              <input
                disabled={!isValidTask}
                type="button"
                onClick={addNewTask}
                value="Zadat"
                style={{
                  height: "2rem",
                  backgroundColor: !isValidTask ? "red" : "green",
                }}
              />
            </FormGroup>
          </>
        )}
      </PageWrap>
    </>
  );
}
