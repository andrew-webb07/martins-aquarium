import {getLocations} from "../database.js"

export const LocationList = () => {
    const locations = getLocations()

    let htmlString = '<article class="locations">'

    for (const location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<div class="location">
                <img class="location__image" src=${location.image}
                alt="">
                <div class="location__info">
                <span>${location.name}</span>
                <span>${location.fishType}</span>
        </div>`
    }
    htmlString += `</article>`

    return htmlString
}