import React, { useState } from "react";
import { ReactFormBuilder, ReactFormGenerator } from "react-form-builder2";
import { FormBuilder as FormBuilderIo, Formio, FormEdit } from "react-formio";
import { formIoData } from "./consts";
import "./styles.css";
import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";
// require("formBuilder");
// "formBuilder": "3.4.2",

const url = `https://safe-springs-353/06.herokuapp.com/api/formdata?cid=`;
// const saveUrl = `https://safe-springs-35306.herokuapp.com/api/formdata?cid`;

export default function App() {
  // const [data, setData] = useState([]);
  // const [preview, togglePreview] = useState(false);
  const [formData, setFormData] = useState(formIoData);
  // const [selectedSection, setSelectedSection] = useState("reactFormBuilder");
  // const onPost = (d) => setData(d.task_data);
  // const onToggle = () => togglePreview(!preview);
  const printResult = () => {
    // if (selectedSection === "formIo") {

    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components
    }).then((form) => {
      console.log(form.component.components);
      form.on("submit", (data) => console.log("submit", data));
      // console.log(document.getElementById("formio-result"));
    });
    // }
  };

  return (
    <div className="App">
      <h2>Form builder playground</h2>
      {/* <div className="btn-toolbar">
        <button
          className={selectedSection === "reactFormBuilder" ? "blue" : "gray"}
          onClick={() => setSelectedSection("reactFormBuilder")}
        >
          React Form Builder
        </button>
        <button
          className={selectedSection === "formIo" ? "blue" : "gray"}
          onClick={() => setSelectedSection("formIo")}
        >
          FormIo
        </button>
        <button
          className={selectedSection === "formBuilderDev" ? "blue" : "gray"}
          onClick={() => setSelectedSection("formBuilderDev")}
        >
          FormBuilder.dev
        </button>
        <button
          className={selectedSection === "formBuilderOnline" ? "blue" : "gray"}
          onClick={() => setSelectedSection("formBuilderOnline")}
        >
          FormBuilder.online
        </button>
      </div> */}
      {/* {selectedSection === "reactFormBuilder" && (
        <div>
          <div className="align-left">
            <button onClick={onToggle}>Show/hide preview</button>
          </div>
          {!preview && (
            <ReactFormBuilder
              url={url}
              onPost={onPost}
              // editElement={btn}
              editMode={true}
              // saveUrl={saveUrl}
              // showDescription={false}
              // toolbarItems={items}
            />
          )}

          {preview && <ReactFormGenerator data={data} answer_data={{}} />}
        </div>
      )} */}
      {/* {selectedSection === "formIo" && ( */}
      <div>
        <button className="green" onClick={printResult}>
          display result
        </button>

        <FormBuilderIo
          form={formIoData}
          // onChange={schema => setFormData(schema)}
          onSubmit={(data) => {
            console.log(data);
          }}
          saveForm={(data) => setFormData(data)}
          saveText="Save Form"
          onSubmitDone={(data) => console.log(data)}
        />
        <div style={{ display: "none" }}>
          <div id="formio-result" />
        </div>
      </div>
      {/* )} */}
      {/* {selectedSection === "formBuilderDev" && <div />}
      {selectedSection === "formBuilderOnline" && <div />} */}
    </div>
  );
}
