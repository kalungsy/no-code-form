export default function getProviderFormProperties(fieldSpec) {
  const properties = fieldSpec.can_modify
    ? createQuestion(fieldSpec)
    : createUnmodifiedableQuestion(fieldSpec);

  if (!fieldSpec.required) {
    properties.required = {
      type: "boolean",
      title: "Required to answer?"
    };
  }

  return properties;
}

function createUnmodifiedableQuestion(fieldSpec) {
  const properties = {
    question: {
      type: null,
      title: `Question: ${fieldSpec.question}`,
      default: fieldSpec.question,
      disabled: true
    }
  };

  if (fieldSpec.alternative_questions) {
    properties.use_alternative_question = {
      type: "string",
      enum: fieldSpec.alternative_questions,
      title: "Use an alternative questions, optional."
    };
  }

  return properties;
}

function createQuestion(fieldSpec) {
  const properties = {
    question: {
      type: "string",
      title: "What is your question?",
      default: fieldSpec.question
    }
  };

  if (fieldSpec.can_modify) {
    properties.type = {
      type: "string",
      title: "What type of answer is it?",
      enum: [
        "Short Answer",
        "Long Answer",
        "Checkbox",
        "Multiple Choice",
        "Email",
        "Phone Number",
        "Address",
        "Full Date",
        "Year",
        "Rating"
      ],
      default: fieldSpec.type
    };
  }

  return properties;
}
