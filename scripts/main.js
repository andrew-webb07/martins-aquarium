// Import the FishList function from the correct module
import {FishList} from "./fish/FishList.js"
import {TipList} from "./tips/TipList.js"
import { LocationList } from "./locations/LocationList.js"

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const FishesHTMLElement = document.querySelector(".fishes")

const TipsHTMLElement = document.querySelector(".tips")

const LocationsHTMLElement = document.querySelector(".location-container")


FishesHTMLElement.innerHTML = FishList()

TipsHTMLElement.innerHTML = TipList()

LocationsHTMLElement.innerHTML = LocationList()