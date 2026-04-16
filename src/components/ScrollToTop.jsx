import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Har vaar jad pathname badle, scroll nu top te bhejo
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}