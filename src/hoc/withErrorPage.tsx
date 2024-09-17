import { Component, useContext, useEffect } from "react";
import ErrorPage from "../components/ErrorPage";
import { characters, defaultHero } from "../utils/constants";
import { useParams } from "react-router-dom";
import { SWContext } from "../utils/context";
//@ts-ignore
export const withErrorPage = Component => props => {
    const { heroId = defaultHero } = useParams();
    const { changeHero } = useContext(SWContext);

    useEffect(() => {
        if (!characters[heroId]) {
            return
        }
        changeHero(heroId);
    }, [heroId])

    return characters[heroId] ? <Component heroId={heroId} {...props} /> : <ErrorPage />
}