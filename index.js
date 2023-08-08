const user = {id: 12, name: Shuchy, job: Student};
// console.log(user);

const stringified = JSON.stringify(user);
// console.log(stringified);

const object = JSON.parse(stringified);
// console.log(object);

const company = {
        name : "facebook",
        ceo: {
                name: "Mark",
                id: 2,
                food: "Susie"

        }
        web: {
                work: "Website Development",
                employee: 25,
                framework: "React Js",
                tech: {
                        first: 'html',
                        second: 'css',
                        third: 'js'
                }
        }
}

const companyStringfied = JSON.stringify(company);
// console.log(companyStringfied);

const convert = JSON.parse(companyStringfied);
// console.log(convert);


function loadData(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

