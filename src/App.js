import React from 'react';
import "./index.scss"
import "./App.scss"
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from './components/Login'
import { useState, useEffect } from 'react';
import Contacts from './components/Contacts';
import Context from './context';
import Loader from './components/Loader.jsx';


function App() {
  const [isLogedIn, setLogedIn] = useState(false)
  const [contacts, setContacts]= useState([])
  const [loading, setLoader] = useState(true)
  const getData = () =>{
    fetch('db.json',
    {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then(function(response){
        return response.json();
      })
      .then(function(contactsData) {
          setContacts(contactsData.contacts)
      });
    }

    // the right way to delete contact, but I delete contacts from UI to escape db.json mutations

    // const removeContact = id => {
    //   setContacts(contacts.filter(contact => id !== contact.id))
    // }

    const addContact = (data) => {
      setContacts([...contacts, data])
    }

    const setMutatedData = (data) => {
      setContacts([data])
    }
    const searchData = (data) => {
      const newData = contacts.filter(c =>  c.name.toLowerCase().includes(data))
      setContacts(newData)
    }
    useEffect(()=> {
      getData()
      searchData()
    },[])
    return (
    <Context.Provider value={{ contacts, addContact,setMutatedData}}>
        <Router>
          {!isLogedIn
            ? <Redirect to="/login" />
            : <Redirect to='/contatcs' />
          }
          <Switch>
            {isLogedIn
            ? <div id="App">
                <Dashboard />
                <div className="main-content">
                  <Header />
                  <section id="content">
                    <Route path="/" exact>
                      <h1>Home page</h1>
                    </Route>
                    <Route path='/contatcs' exact>
                    {loading && <Loader/>}
                      <Contacts />
                    </Route>
                  </section>
                </div>
              </div>
            : <div id="App">
                <Route path="/login">
                  <Login setLogedIn={setLogedIn} setLoader={setLoader}/>
                </Route>
              </div>
            }
          </Switch>
        </Router>
    </Context.Provider>

  )
}

export default App;