import React from "react";
import ProviderForm from "./ProviderForm";
import FieldLogo from "./FieldBranding";
import ProviderFormPreview from "./ProviderFormPreview";
import "./ProviderFormLayout.scss";

export default function ProviderFormLayout(props) {
  return (
    <div className="provider-form-layout">
      <div className="provider-form-header"></div>
      <div className="provider-form-layout-inner">
        <div className="provider-form-section">
          <FieldLogo />
          <hr />
          <ProviderForm />
        </div>
        <div className="provider-form-preview-section">
          <ProviderFormPreview />
        </div>
      </div>
      <div className="provider-form-footer">
        <button>Add a question</button>
        <button>Save form</button>
      </div>
    </div>
  );
}
