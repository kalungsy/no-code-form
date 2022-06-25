export default {
  questions: [
    {
      question: "Rate your experience here",
      type: "Rating",
      required: true,
      can_remove: false,
      can_change: false,
      translatable: false,
      alternative_questions: [
        "How was your experience with us today?",
        "Were our staff helpful today?"
      ]
    },
    {
      question: "Information accurately listed on HopeOneSource.me?",
      type: "boolean",
      required: true,
      can_remove: false,
      can_change: false,
      translatable: false,
      alternative_questions: [
        "Did you get accurate information on the HopeOneSource.me website?"
      ]
    },
    {
      question: "Tell us about your experience",
      type: "Short Answer",
      required: true,
      can_remove: false,
      can_change: false,
      translatable: false,
      alternative_questions: ["Can you describe your experience with us today?"]
    },
    {
      question:
        "This month, how hopeful are you about having stable health, housing, food and income?",
      type: "Multiple Choice",
      required: true,
      can_remove: false,
      can_change: false,
      translatable: false,
      alternative_questions: [
        "Are you helpful about getting your health this month?",
        "Are you helpful about getting getting stable food this month?",
        "Are you helpful about getting getting stable housing this month?"
      ]
    },
    {
      question:
        "To improve your experience and chances to win gift certificates, may we text you?",
      type: "boolean",
      required: true,
      can_remove: false,
      can_change: false,
      translatable: false,
      alternative_questions: ["May we text you? gift certificate"]
    },
    {
      question: "Cell phone number",
      type: "Phone Number",
      required: true,
      can_remove: false,
      can_change: false,
      translatable: false,
      alternative_questions: ["What is your cell phone number?"]
    },
    {
      question: "Dummy non-required question?",
      type: "Address",
      can_remove: true
    }
  ],
  options: {
    submit_text: "Submit",
    theme: {
      brand_logo: "",
      primary_color: "",
      secondary_color: "",
      default_color: "",
      disabled_color: ""
    }
  }
};
