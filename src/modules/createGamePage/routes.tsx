import { Route } from "react-router-dom";
import { CreateGamePage } from ".";

export function createGamePage() {
    return (
        <Route>
            <Route path="create" element={<CreateGamePage/>} />
        </Route>
    )
}