import React from "react";

const schema = {
  type: "object",
  title: "This is title",
  description: "Here is description",
  required: ["name", "age"],
  properties: {
    name: {
      title: "fullname",
      type: "string",
      minLength: 3
    },
    age: {
      type: "number"
    }
  }
};

const extraErrors = {};

const ObjectFieldTemplate = props => {
  return (
    <div>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
      {props.properties.map(element => (
        <div className="property-wrapper">{element.content}</div>
      ))}
    </div>
  );
};

const FieldTemplate = props => {
  const {
    id,
    classNames,
    label,
    help,
    required,
    description,
    errors,
    children
  } = props;
  console.log(props);
  return (
    <div className={classNames}>
      <label htmlFor={id}>
        {label}
        {required ? "*" : null}
      </label>
      {description}
      {children}
      {errors}
      {help}
    </div>
  );
};

function validate(formData, errors) {
  if (formData.name.length < 5) {
    errors.name.addError("Name must logger than 5");
  }
  return errors;
}

export { schema, ObjectFieldTemplate, FieldTemplate, validate, extraErrors };
