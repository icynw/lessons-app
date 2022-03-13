const lessons = [
    {
        id: 1,
        availability: 1,
        subject: "Art",
        location: "Willesden",
        price: "120",
        space: 5,
        cart_space: 0,
        icon: "fa-list",
        image: "./images/Art.jpg"
    },
    {
        id: 2,
        availability: 1,
        subject: "Engineering",
        location: "Neasden",
        price: "100",
        space: 5,
        cart_space: 0,
        icon: "fa-grid",
        image: "./images/Engineering.jpg"
    },
    {
        id: 3,
        availability: 1,
        subject: "English",
        location: "Harlesden",
        price: "110",
        space: 5,
        cart_space: 0,
        icon: "fa-user",
        image: "./images/English gyal.jpg"
    },
    {
        id: 4,
        availability: 1,
        subject: "Geography",
        location: "Ladbroke Grove",
        price: "105",
        space: 5,
        icon: "fa-envelope",
        image: "./images/Geography.jpg"
    },
    {
        id: 5,
        availability: 1,
        subject: "History",
        location: "Harrow Road",
        price: "130",
        space: 5,
        cart_space: 0,
        icon: "fa-envelope",
        image: "./images/History.jpg"
    },
    {
        id: 6,
        availability: 1,
        subject: "Ict",
        location: "Camden",
        price: "150",
        space: 5,
        cart_space: 0,
        icon: "fa-envelope",
        image: "./images/Ict.jpg"
    },
    {
        id: 7,
        availability: 1,
        subject: "Math",
        location: "Kilburn",
        price: "160",
        space: 5,
        cart_space: 0,
        icon: "fa-envelope",
        image: "./images/Maths-applications.jpg"
    },
    {
        id: 8,
        availability: 1,
        subject: "Psychology",
        location: "Dollis Hill",
        price: "115",
        space: 5,
        cart_space: 0,
        icon: "fa-envelope",
        image: "./images/Psychology.jpg"
    },
    {
        id: 9,
        availability: 1,
        subject: "Science",
        location: "Paddington",
        price: "190",
        space: 5,
        cart_space: 0,
        icon: "fa-envelope",
        image: "./images/Science.png"
    },
    {
        id: 10,
        availability: 1,
        subject: "Sociology",
        location: "Kingsbury",
        price: "200",
        space: 5,
        cart_space: 0,
        icon: "fa-envelope",
        image: "./images/Sociology.jpg"
    },
]


// this.filteredLessons = this.lessons.filter((item) => {
//     return (
//       item.subject
//         .toString()
//         .toLowerCase()
//         .includes(event.target.value) ||
//       item.location
//         .toString()
//         .toLowerCase()
//         .includes(event.target.value) ||
//       item.subject.toString().includes(event.target.value) ||
//       item.location.toString().includes(event.target.value)
//     );
//   });
//   this.filteredLessons = this.filteredLessons.filter((item) =>
//     Object.values(item).filter((value) =>
//       value.toString().toLowerCase().includes(event.target.value)
//     )
//   );