import React from 'react';
import '../assets/scss/contacts.scss';
import Contact from './Contact'
import Context from '../context'
import { useContext, useState } from 'react'
import { Input } from './Input';
import SearchResults from './SearchResults.jsx'

export default function Contacts() {
  const contactsData = useContext(Context);
  const contacts = contactsData.contacts;
  const addContactData = contactsData.addContact;
  const setMutatedData = contactsData.setMutatedData;
  const [field, showField] = useState(false)
  const [status, setStatus] = useState(true);
  const [showModal, setModalAppearence] = useState(false);
  const [value, setValue] = useState({})
  const [filteredData, setFilteredData] = useState([])
  const [isValid, setValidation] = useState(false);

  const addContact = (event) => {
    event.preventDefault()
    !status ? setMutatedData(value) : addContactData(value);
    setStatus(true)
    setModalAppearence(false)
    return
  }
  const modalHandler = (e) => {
    e.preventDefault()
    setModalAppearence(true)
  }
  const showStatus = () => {
    return setStatus(false)
  }

  const searchContact = (e) => {
    const data = contacts.filter(contacts => contacts.name.toLowerCase().includes(e.target.value));
    setFilteredData(data)
    return data.length && e.target.value.trim() ? showField(true) : showField(false)
  }
  const inputs = [
    {
      title: 'Name Lastname',
      type: 'text',
      rule: 'Name must contain only letters',
      regex: /^[a-z ,.'-]+$/i,
      changeValue(newValue) {
        setValue({ name: newValue })
      }
    },
    {
      title: 'Email',
      type: 'emial',
      rule: 'Invalid email address',
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      changeValue(newValue) {
        setValue({ ...value, mail: newValue })
      }
    },
    {
      title: 'Phone',
      type: 'text',
      rule: "Invalid phone number",
      regex: /^[+0-9]+$/,
      changeValue(newValue) {
        setValue({ ...value, phone: newValue })
      }
    },
    {
      title: 'Team',
      type: 'text',
      changeValue(newValue) {
        setValue({ ...value, team: newValue })
      }
    }
  ]
  return (
    <div className='contacts-wrapper' >
      <h2>Contacts</h2>
      <form onSubmit={modalHandler}>
        <div>
          <div className='search-bar'>
            <i className={!field ? "fas fa-search" : ' fas fa-times'}
              onClick={() => { return field ? showField(false) : showField(true) }}>
            </i>
            <input type='text' className='custom-button' id='search' placeholder='Search' onChange={searchContact} />
            <div className='search-wrapper' style={{ display: field ? 'block' : 'none' }}>
              {filteredData.map((c, i) => <SearchResults name={c.name} phone={c.phone} mail={c.mail} />)}
            </div>
          </div>
          <button type='submit' className='custom-button'>Add New Contact
            <i className="fas fa-plus"></i>
          </button>
        </div>
        {
          status ?
            <div>
              <div className='sections'>
                <div className='name'>Name</div>
                <div className='email'>Email</div>
                <div className='phone'>Phone Number</div>
                <div className='team'>Team</div>
                <div className='actions'>Actions</div>
              </div>
              {contacts.map((e, i) =>
                <Contact id={e.id} name={e.name} phone={e.phone} mail={e.mail} key={i} team={e.team} showStatus={showStatus} />)}
            </div>
            :
            <h1>no contacts !</h1>
        }
      </form>
      {showModal ?
        <div className='modal-wrapper'>
          <div className='modal-content' >
            <form onSubmit={addContact} >
              {inputs.map((input, i) =>
               <Input type={input.type} title={input.title} key={i} rule={input.rule} regex={input.regex} changeValue={input.changeValue} setValidation={setValidation} />)}
              <button className={isValid ? 'custom-button' : 'custom-button invalid'}>Add Contact</button>
              <button className='close' onClick={() => { setModalAppearence(false) }}>
                <i className="fas fa-times"></i>
              </button>
            </form>
          </div>
        </div>
        : ''}
    </div>
  )
}
