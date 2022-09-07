import { useEffect, useState } from "react";

export function useCard() {
    const [card, setCard] = useState([])
    
/**CONSUMO DE JSON**/
    useEffect(() => {
        fetch("/json/courses.json")
            .then((res) => res.json())
            .then((data) => {
                setCard(data)
                // console.log(data)             
            });
    }, []);
    return card;
}
