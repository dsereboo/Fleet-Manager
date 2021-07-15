import React,{ useState, useEffect } from "react"
import Sidebar from "react-sidebar"
import { BrowserRouter, Route, Switch,useHistory } from "react-router-dom"
import Homepage from "./Homepage"
import NavContent from "./NavContent"
import TopDisplayBar from "./TopDisplayBar"
import Fleet from "./Fleet"
import CarProfile from "./CarProfile"

import TestLogin from "./TestLogin"



const mql = window.matchMedia(`(min-width: 800px)`)

const Navigation=(props)=>{
    const styles={
        root: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden"
        },
        sidebar: {
          zIndex: 1200,
          background:"#fff",
          position: "absolute",
          top: 0,
          bottom: 0,
          width: 240,
          transition: "transform .3s ease-out",
          WebkitTransition: "-webkit-transform .3s ease-out",
          willChange: "transform",
          overflowY: "auto"
        },
        content: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          transition: "left .3s ease-out, right .3s ease-out"
        },
        overlay: {
          zIndex: 1100,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0,
          visibility: "hidden",
          transition: "opacity .5s ease-out, visibility .3s ease-out",
          backgroundColor: "rgba(0,0,0,.3)",
        },
        dragHandle: {
          zIndex: 1,
          position: "fixed",
          top: 0,
          bottom: 0
        }
      };

    const [sideDocked, setSideDocked] = useState(mql.matches)
    const [sideBarOpen, setSideBarOpen] = useState(false)

    const mediaQueryChanged = () => {
        setSideDocked(mql.matches)
        setSideBarOpen(false)
    }

    const onSetSidebarOpen = (open) => {
        setSideBarOpen(open)
    }

    useEffect(() => {
        mql.addEventListener('change', mediaQueryChanged);

        return function cleanup() {
            mql.removeEventListener('change', mediaQueryChanged);
        }
    }, [])

    const toggleOpen=()=>{
        setSideBarOpen(true)
    }


    const sideBarProps={
        sidebar: <NavContent/>,
        styles: styles,
        docked: sideDocked,
        open: sideBarOpen,
        onSetOpen: onSetSidebarOpen,
    }
    const history=useHistory()
    return(
        <BrowserRouter basename="/dashboard">
            <Sidebar {...sideBarProps}>
                 {/* {!sideDocked && (<Button variant="primary" onClick={toggleOpen}>=</Button>)} */}
                <TopDisplayBar toggle={toggleOpen}/>
               <Switch>
               <Route path="/home" component={Homepage}/>
                <Route path="/fleet" component={Fleet}/>
                <Route path="/carProfile" component={CarProfile}/>
               </Switch>
            </Sidebar>
        </BrowserRouter>
    )
}


export default Navigation