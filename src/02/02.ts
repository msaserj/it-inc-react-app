type CityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: cityType
}

type TechType = {
    id: number
    title: string
}

type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

const student: StudentType = {
    "name": "Serj",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Sverdlova",
        city: {
            title: "kostroma",
            countryTitle: "Russia"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "JS"
        },
    ]
}

console.log(student.technologies[2].title)
console.log(student.address.city.title)