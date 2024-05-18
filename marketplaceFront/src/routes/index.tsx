import { Navigate } from "react-router-dom";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";

export const Routes = () =>{

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/home" element={<p>olá thiago</p>}/>
                <Route path="*" element={<Navigate to="/home"/>}/>
            </Switch>
        </BrowserRouter>
    )

}