// Template Literals
const name = "Bharath";
const age = 28;
const job = "Web Developer";
const city = "Bangalore";
let bioData;

bioData = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>City: ${city}</li>
</ul>
`;

document.getElementById("Template_literal").innerHTML = bioData;

// Object literals
const person = {
  firstName: "Bharat",
  age: 28,
  email: "bharathsgowda111@gmail.com",
  hobbies: ["eat", "BikeRiding", "Cricket"],
  address: {
    city: "Bangalore",
    state: "karnataka"
  },
  getBirthYear: function () {
    return 2020 - this.age;
  }
};

let val;
val = person;

val = `
<ul>
<li>Frist Name: ${val.firstName}</li>
<li>Age: ${val.age}</li>
<li>Email: ${val.email}</li>
<li>Hobbies: ${val.hobbies}</li>
<li>Hobbies: ${val.hobbies[0]}</li>
<li>Address: ${val.address.city}</li>
<li>Address: ${val.address.state}</li>
<li>Age: ${val.getBirthYear()}</li>
</ul>

`;

document.getElementById("object_literal").innerHTML = val;
