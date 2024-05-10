import { Route } from "react-router-dom";
import { ResultPage } from ".";

export function resultPage() {
    return (
        <Route>
            <Route path="result" element={<ResultPage/>} />
        </Route>
    )
}