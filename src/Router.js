import { BrowserRouter,Route } from "react-router-dom"
import Homepage from "./Components/Homepage"
import Navigation from "./Components/Navigation"
import TestLogin from "./Components/TestLogin"
import TestSignUp from "./Components/TestSignUp"

const Router=()=>{return(
    <BrowserRouter>
        <Route path="/" exact component={Navigation}/>
        <Route path="/login" component={TestLogin} />
        <Route path="/signUp" component={TestSignUp}/>
        <Route path="/home" component={Homepage}/>
        
    </BrowserRouter>
    )    
}

export default Router