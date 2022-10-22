let Person = {

    fullName: "sachin Tedulakar",
    city: "pune",
    age: "25",
    isMarried: true,
}

for (const key in Person) {
    if (Object.hasOwnProperty.call(Person, key)) {
        const element = Person[key];
        console.log(element);
    }
}


