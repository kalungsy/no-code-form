import "./styles.css";
import Form from "@rjsf/core";
import getProviderFormProperties from "./getProviderFormProperties";

export default function Field(props) {
  const { spec, onChange, formData } = props;
  console.log("Field form data", formData);

  const uiSchema = {
    "ui:submitButtonOptions": {
      props: {
        disabled: false,
        className: "btn btn-info"
      },
      norender: true,
      submitText: "save"
    }
  };

  const dependencies = {
    type: {
      oneOf: [
        {
          properties: {
            type: {
              enum: ["Long Answer"]
            },
            "Max answer length": {
              title: "Max answer length?",
              type: "number",
              default: 100
            },
            "Is it required": {
              title: "Is it required to answer?",
              type: "boolean"
            }
          }
        },
        {
          properties: {
            type: {
              enum: ["Checkbox"]
            }
          }
        },
        {
          properties: {
            type: {
              enum: ["Multiple Choice"]
            },
            "What are the choice avaliable? Enter one option per line.": {
              type: "string",
              format: "textarea"
            },
            "Display type": {
              title: "Use radio input or dropdown menu?",
              type: "string",
              enum: ["radio", "select"],
              default: "radio"
            },
            "Is it required": {
              title: "Is it required to answer?",
              type: "boolean"
            }
          },
          required: ["What are the choice avaliable?", "Display type"]
        },
        {
          properties: {
            type: {
              enum: [
                "Short Answer",
                "Email",
                "Phone Number",
                "Address",
                "Full Date",
                "Year",
                "Rating"
              ]
            },
            "Is it required": {
              title: "Is it required to answer?",
              type: "boolean",
              default: spec.required
            }
          }
        }
      ]
    }
  };

  const formProperties = getProviderFormProperties(spec);

  const schema = {
    submitText: "Save",
    title: "",
    type: "object",
    required: [spec.question],
    properties: formProperties,
    dependencies: dependencies
  };

  const log = (type) => console.log.bind(console, type);

  return (
    <div className="Field">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onChange={onChange}
        onSubmit={log("submitted")}
        onError={log("errors")}
      />
      {spec.can_remove && <button>Delete Question</button>}
    </div>
  );
}
