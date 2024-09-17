import { useContext } from "react"
import Navigation from "./Navigation"
import { SWContext } from "../utils/context"
import { characters } from "../utils/constants";

const Header = () => {
    const { hero, isError } = useContext(SWContext);
    let title = characters[hero].name;
    if (isError) title = 'Error';
    
    return (
        <header className="bg-grey-color rounded-t-3xl">
            <Navigation />
            <h1 className="text-center py-4 text-6xl">{title}</h1>
        </header>
    )
}

export default Header