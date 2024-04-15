import { Route } from "react-router-dom";
import { HomePage } from ".";

export function homePage() {
    return (
        <Route>
            <Route path="" element={<HomePage/>} />
        </Route>
    )
}
