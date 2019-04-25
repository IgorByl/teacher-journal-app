const message: {} = {
  Name: "",
  LastName: "",
};
const messages: {} = {
  required: "Please enter your name.",
  minlength: "Must be longer than 1 characters.",
  pattern: "Must enclude only letters.",
};

const STUDENT_FORM_CONTROL: string[] = [
  "name",
  "lastname",
  "address",
  "description",
];

const SUBJECT_FORM_CONTROL: string[] = [
  "subject",
  "teacher",
  "cabinet",
  "description",
];

export { message, messages, STUDENT_FORM_CONTROL, SUBJECT_FORM_CONTROL };
