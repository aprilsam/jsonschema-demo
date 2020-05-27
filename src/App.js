import React from "react";
import "./styles.css";
import Form from "@rjsf/core";
import {
  schema,
  ObjectFieldTemplate,
  FieldTemplate,
  validate,
  extraErrors
} from "./schema1";

export default function App() {
  return (
    <div className="App">
      <Form
        schema={schema}
        validate={validate}
        ObjectFieldTemplate={ObjectFieldTemplate}
        extraErrors={extraErrors}
      />
      <Form
        schema={schema}
        validate={validate}
        FieldTemplate={FieldTemplate}
        extraErrors={extraErrors}
      />
    </div>
  );
}
