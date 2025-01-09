const persons = [
  {
    name: "John Doe",
    title: "Software Engineer",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    city: "New York",
    region: "New York",
    country: "USA",
  },
  {
    name: "Jane Smith",
    title: "Product Manager",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    city: "London",
    region: "England",
    country: "UK",
  },
  {
    name: "David Johnson",
    title: "UX Designer",
    email: "davidjohnson@example.com",
    phone: "555-555-5555",
    city: "Berlin",
    region: "Brandenburg",
    country: "Germany",
  },
  {
    name: "Emily Clark",
    title: "Web Developer",
    email: "emilyclark@example.com",
    phone: "333-555-7777",
    city: "Los Angeles",
    region: "California",
    country: "USA",
  },
  {
    name: "Michael Brown",
    title: "Data Scientist",
    email: "michaelbrown@example.com",
    phone: "666-777-8888",
    city: "Toronto",
    region: "Ontario",
    country: "Canada",
  },
  {
    name: "Sophia Lee",
    title: "Product Designer",
    email: "sophialee@example.com",
    phone: "444-333-6666",
    city: "Sydney",
    region: "New South Wales",
    country: "Australia",
  },
  {
    name: "Chris Martin",
    title: "Project Manager",
    email: "chrismartin@example.com",
    phone: "777-888-9999",
    city: "Paris",
    region: "Île-de-France",
    country: "France",
  },
  {
    name: "Olivia Wilson",
    title: "Marketing Manager",
    email: "oliviawilson@example.com",
    phone: "555-444-3333",
    city: "Berlin",
    region: "Berlin",
    country: "Germany",
  },
  {
    name: "James Taylor",
    title: "Software Architect",
    email: "jamestaylor@example.com",
    phone: "111-222-3333",
    city: "San Francisco",
    region: "California",
    country: "USA",
  },
  {
    name: "Lily Walker",
    title: "Business Analyst",
    email: "lilywalker@example.com",
    phone: "999-888-7777",
    city: "London",
    region: "England",
    country: "UK",
  },
];

// function to populate data 
function populateTable(data) {
  const tableBody = document.getElementById("personTableBody");
  tableBody.innerHTML = "";

  data.forEach((person) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = person.name;
    row.appendChild(nameCell);

    const titleCell = document.createElement("td");
    titleCell.textContent = person.title;
    row.appendChild(titleCell);

    const emailCell = document.createElement("td");
    emailCell.textContent = person.email;
    row.appendChild(emailCell);

    const phoneCell = document.createElement("td");
    phoneCell.textContent = person.phone;
    row.appendChild(phoneCell);

    const cityCell = document.createElement("td");
    cityCell.textContent = person.city;
    row.appendChild(cityCell);

    const regionCell = document.createElement("td");
    regionCell.textContent = person.region;
    row.appendChild(regionCell);

    const countryCell = document.createElement("td");
    countryCell.textContent = person.country;
    row.appendChild(countryCell);

    tableBody.appendChild(row);
  });
  updateResultCount(data.length);
}

// Function to update the result count
function updateResultCount(filteredCount) {
    const totalCount = persons.length;
    const resultCountElement = document.getElementById("resultCount");
    resultCountElement.textContent = `Showing ${filteredCount} of ${totalCount} entries`;
  }

// function to perform search
function filterData() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filteredData = persons.filter((person) => {
    return (
      person.name.toLowerCase().includes(query) ||
      person.title.toLowerCase().includes(query) ||
      person.email.toLowerCase().includes(query) ||
      person.phone.includes(query) ||
      person.city.toLowerCase().includes(query) ||
      person.region.toLowerCase().includes(query) ||
      person.country.toLowerCase().includes(query)
    );
  });

  populateTable(filteredData);
}

populateTable(persons);
