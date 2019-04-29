const TABLE_HEADERS: string[] = [
  "id",
  "name",
  "lastName",
  "address",
  "description",
];

const URL: IURL = {
  get: "https://app-teacher-journal.herokuapp.com/dash",
  post: "https://app-teacher-journal.herokuapp.com/save",
  // get: "https://localhost:3005/dash",
  // post: "https://localhost:3005/save",
};

interface IURL {
  get: string;
  post: string;
}

export { TABLE_HEADERS, URL };
