import React, { useState } from "react";
import defaultQuestionsLibrary from "./defaultQuestionsLibrary";
import Field from "./Field";

export default function ProviderForm() {
  const [providerFormState, updateProviderFormState] = useState(
    defaultQuestionsLibrary.questions
  );

  const handleFieldChange = (updates) => {
    console.log("handleFieldChange", updates);
    const formData = updates.formData;
    const question = formData.question;

    // update the question's object with form data object
    const index = providerFormState.findIndex(
      (item) => item.question === question
    );
    const next = [...providerFormState];
    next[index] = { ...providerFormState[index], formData: formData };
    console.log("updated form field spec with data", next);
    updateProviderFormState(next);
  };

  console.log("next reader state", providerFormState);

  return (
    <div className="provider-form">
      {defaultQuestionsLibrary.questions.map((question, i) => {
        return (
          <Field
            onChange={handleFieldChange}
            formData={providerFormState[i].formData}
            spec={{
              question: question.question,
              type: question.type,
              required: question.required,
              can_change: question.can_change,
              can_modify: question.can_modify,
              translatable: question.translatable,
              alternative_questions: question.alternative_questions
            }}
          />
        );
      })}
    </div>
  );
}
