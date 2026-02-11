import img1 from "../../assets/waterfall.jpg"
import img2 from "../../assets/turkey.jpg"
import img3 from "../../assets/canada.jpg"

export interface DestinationItem {
    id: number;
    image: string;
    title: string;
    location: string;
    rating: string;
}

export const destinationsList: DestinationItem[] = [
    {
        id: 1,
        title: "Waterfall Wild Life",
        location: "NRT, Switzerland",
        rating: "4.5",
        image: img1
    },
    {
        id: 2,
        title: "Historical Place",
        location: "NRT, Turkey",
        rating: "4.8",
        image: img2
    },
    {
        id: 3,
        title: "Mountains & River",
        location: "NRT, Canada",
        rating: "5.0",
        image: img3
    }
];