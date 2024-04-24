import { Route } from "react-router-dom";
import { GamePage } from ".";

export function gamePage() {
    return (
        <Route>
            <Route path="game" element={<GamePage/>} />
        </Route>
    )
}