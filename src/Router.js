import { BrowserRouter,Route } from "react-router-dom"
import Navigation from "./Components/Navigation"
import TestLogin from "./Components/TestLogin"
import TestSignUp from "./Components/TestSignUp"

const Router=()=>{return(
    <BrowserRouter>
        <Route path="/dashboard" component={Navigation}/>
        <Route path="/login" component={TestLogin} />
        <Route path="/signUp" component={TestSignUp}/> 
             
    </BrowserRouter>
    )    
}

export default Router