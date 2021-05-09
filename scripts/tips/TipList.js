import {getTips} from "../database.js"


export const TipList = () => {
    const tips = getTips()

    let html = "<ul>"

    for (const tip of tips) {
        html += `
        <li>${tip}</li>`
    }

    html += "</ul>"

    return html

    }