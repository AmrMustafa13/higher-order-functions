const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// foreach

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i].name);
// }

// companies.forEach(function (company) {
//     console.log(company.name);
// })

// filter

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function (age) {
//     if (age >= 21)
//         return true;
// })
// console.log(canDrink);

// map

// const companiesNames = companies.map(function (company) {
//     return company.name
// })
// console.log(companiesNames);

// sort

// const sortedCompanies = companies.sort(function (a, b) {
//     return a.start > b.start ? 1 : -1;
// })
// console.log(sortedCompanies);

// second example

// const sortedAges = ages.sort(function (a, b) {
//     return a > b ? -1 : 1; // reversed sorting 
// })
// console.log(sortedAges);

// const sorted = ages.sort();
// console.log(sorted);

// reduce

// const agesSum = ages.reduce(function (total, age) {
//     return total + age;
// }, 0);
// console.log(agesSum);

// const agesSum = ages.reduce((total, age) => total + age, 0); //arrow function format
// console.log(agesSum);