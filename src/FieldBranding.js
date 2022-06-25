import "./styles.css";
import Form from "@rjsf/core";

export default function Field() {
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

  const schema = {
    submitText: "Save",
    title: "Branding",
    type: "object",
    properties: {
      your_logo: {
        type: "string",
        title: "Upload your logo",
        format: "data-url"
      },
      primary_color: {
        type: "string",
        title: "Your brand's color",
        format: "color"
      }
    }
  };

  const log = (type) => console.log.bind(console, type);

  return (
    <div className="Field">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
      />
    </div>
  );
}
