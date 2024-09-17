import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { defaultHero, characters } from "../utils/constants";
import { SWContext } from "../utils/context";
import ErrorPage from "../components/ErrorPage";

interface WithErrorPageProps {
    heroId: string;
  }

export const withErrorPage = <P extends object = {}>(Component: React.ComponentType<WithErrorPageProps>) => (props: P) => {
    const { heroId = defaultHero } = useParams<{heroId: string}>();
    const { changeHero, setError } = useContext(SWContext);
    

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
            setError(false);
        } else {
            setError(true);
        }

    }, [heroId])

    return characters[heroId] ? <Component heroId={heroId} {...props}/> : <ErrorPage />
}