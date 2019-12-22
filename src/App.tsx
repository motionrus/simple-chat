import React from "react"
import Header from "./components/Header/Header"
import {ThemeProvider} from "@material-ui/core/styles"
import "antd/dist/antd.css"
import {blue} from "@material-ui/core/colors"
import {createMuiTheme} from "@material-ui/core/styles"
import SignIn from "./components/SignIn/SignIn"
import {BrowserRouter as Router, Route} from "react-router-dom"
import SignUp from "./components/SignUp/SignUp"

const theme = createMuiTheme({
  palette: {
    primary: {main: blue[500]}, // Purple and green play nicely together.
    secondary: {main: "#11cb5f"}, // This is just green.A700 as hex.
  },
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router >
        <Header auth={false}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/sign-up" component={SignUp}/>
      </Router>
    </ThemeProvider>
  )
}

export default App
