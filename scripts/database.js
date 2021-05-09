export const database = {
    fish: [
        {
            name: "Bart",
            food: "crustaceans",
            size: 3,
            species: "no clue",
            location: "Lake Michigan",
            image: "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755__340.jpg",
        },
        {
            name: "Goldy",
            food: "fish pellets",
            size: 5,
            species: "comet",
            location: "my house",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Goldfish_1.jpg",
        },
        {
            name: "Sharknado",
            food: "humans",
            size: 144,
            species: "carcharias",
            location: "Deep Deep Pacific Ocean",
            image: "https://cdn.pixabay.com/photo/2017/12/07/16/55/shark-3004153_1280.jpg",
        }
    ],
    tips : ["Feed them", "Love them", "Wash them...well don't wash them"]
}

export const getFish = () => {
    return [...database.fish]
}

export const getTips = () => {
    return [...database.tips]
}