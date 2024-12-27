import { createContext, useContext } from "react";
import men_img from "../assets/Png/men_img.png"
import women from "../assets/Png/women.png"
import jenny from "../assets/Png/jenny.png"
import lenly from "../assets/Png/lenly.png"
import guy from "../assets/Png/guy.png"
import girl_curl from "../assets/Png/girl_curl.png"
import robert from "../assets/Png/robert.png"
import jacob from "../assets/Png/jacob.png"
import startup_girl from "../assets/Png/startup_girl.png"
import group_img from "../assets/Png/group_img.png"
import blog_3 from "../assets/Png/blog_3.png"
import blog_4 from "../assets/Png/blog_4.png"
import blog_5 from "../assets/Png/blog_5.png"
export const BioContext = createContext({})
export function maincontext() {
    return useContext(BioContext)
}

// 2nd Step 
export const BioProvider = (props) => {
    const Author_cards = [
        {
            img: men_img,
            heading: "Floyd Miles",
            peragraph: "Content Writer @Company",
        },
        {
            img: women,
            heading: "Dianne Russell",
            peragraph: "Content Writer @Company",
        },
        {
            img: jenny,
            heading: "Jenny Wilson",
            peragraph: "Content Writer @Company",
        },
        {
            img: lenly,
            heading: "Leslie Alexander",
            peragraph: "Content Writer @Company",
        },
    ]

    const Posts = [
        {
            img: startup_girl,
            text: "Startup",
            heading: "Design tips for designers that cover everything you need",
            par: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            img: group_img,
            text: "BUSINESS",
            heading: "How to build rapport with your web design clients",
            par: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            img: blog_3,
            text: "Startup",
            heading: "Logo design trends to avoid in 2022",
            par: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            img: blog_4,
            text: "TECHNOLOGY",
            heading: "8 Figma design systems you can download for free today",
            par: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        },
        {
            img: blog_5,
            text: "ECONOMY",
            heading: "Font sizes in UI design: The complete guide to follow",
            par: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
        }
    ]

    const Author_cards2 = [
        {
            img: men_img,
            heading: "Floyd Miles",
            peragraph: "Content Writer @Company",
        },
        {
            img: women,
            heading: "Dianne Russell",
            peragraph: "Content Writer @Company",
        },
        {
            img: jenny,
            heading: "Jenny Wilson",
            peragraph: "Content Writer @Company",
        },
        {
            img: lenly,
            heading: "Leslie Alexander",
            peragraph: "Content Writer @Company",
        },
        {
            img: guy,
            heading: "Guy Hawkins",
            peragraph: "Content Writer @Company",
        },
        {
            img: girl_curl,
            heading: "Eleanor Pena",
            peragraph: "Content Writer @Company",
        },
        {
            img: robert,
            heading: "Robert Fox",
            peragraph: "Content Writer @Company",
        },
        {
            img: jacob,
            heading: "Jacob Jones",
            peragraph: "Content Writer @Company",
        }
    ]

    return (
        <BioContext.Provider value={{ Author_cards, Posts, Author_cards2 }}>
            {props.children}
        </BioContext.Provider>
    )
}