import { Route } from "react-router-dom";
import { RulesPage } from ".";

export function rulesPage() {
    return (
        <Route>
            <Route path="rules" element={<RulesPage/>} />
        </Route>
    )
}