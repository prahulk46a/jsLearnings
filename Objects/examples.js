//q1
const student = {
    name: 'Alice',
    age: 22,
    major: 'Computer Science',
    GPA: 3.8
};
let allkey=Object.keys(student);
console.log(allkey);

//q2
const movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    releaseYear: 2010,
    rating: 8.8
};

const vals=Object.values(movie);
console.log(vals);

//q3
const book = {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian'
};

console.log(Object.entries(book));

//q4
const fromArray = [ ['name', 'Charlie'],
['age', 30],
['job', 'Engineer']];

const objFromArray =Object.fromEntries(fromArray);
console.log(objFromArray);

//q5

const contactInfo = {
    phone: '123-456-7890',
    email: 'john.doe@example.com'
};

const address = {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
};
  