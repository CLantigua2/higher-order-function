const randomString = 'This is a random ass string for no reason';
const companies = [
  { name: "Company One", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Two", category: "Auto", start: 1991, end: 2014 },
  { name: "Company Three", category: "Technology", start: 1995, end: 2017 },
  { name: "Company Four", category: "Strip Club", start: 1890, end: 2018 },
  { name: "Company Five", category: "Retail", start: 2004, end: 2005 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(lit i = 0; i < companies.length; i++) { console.log(companies[i]);}

// forEach get company names
const array = companies.forEach(company => console.log(company.name));

// get 21 and older
const filtered = ages.filter(ages => ages >= 21);
console.log(filtered);

// filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

//  get 80's companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);