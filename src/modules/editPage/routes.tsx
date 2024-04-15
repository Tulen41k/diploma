import { Route } from "react-router-dom";
import { EditPage } from ".";

export function editPage() {
    return (
        <Route>
            <Route path="edit" element={<EditPage/>} />
        </Route>
    )
}