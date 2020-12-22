import React from 'react';
import '../assets/scss/contacts.scss';
import { useState, useRef } from 'react'
const Contact = ({ id, name, phone, mail, team, showStatus}) => {
  const [editingActive, setEditor] = useState(false)
  const [type, setType] = useState('hidden')
  const [contactName, setName] = useState(name)
  const [contactPhone, setPhone] = useState(phone)
  const [contactMail, setMail] = useState(mail)
  const [contactTeam, setTeam] = useState(team)
  const contactWraper = useRef(null)

  const defaultName = () => {
    if(name.split(' ')[1]){
      return (`${name.split(' ')[0].slice(0, 1)}${name.split(' ')[1].slice(0, 1)}`);
    } else {
      return (`${name.split(' ')[0].slice(0, 1)}`)
    }
  }

  const [avatar, setAvatar] = useState(defaultName)
  const editContact = () => {
    setType('text')
    setEditor(true)
  }
  const saveChanges = () => {
    setType('hidden')
    setEditor(false)
    setAvatar(defaultName)
  }
  const removeContact = () => {
    const lastContatState = contactWraper.current.parentElement.children.length === 2;
    return !lastContatState ? contactWraper.current.parentElement.removeChild(contactWraper.current) : showStatus()
  }
  return (
    <div className='contact' ref={contactWraper}>
      <div className='contact-name'>
        <div className='avatar'>{avatar}</div>
        <div className='name'>
          <input type='text' value={contactName} className={editingActive ? 'editor' : ' editor value'} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <div className='email'>
        <input type='mail' value={contactMail} className={editingActive ? 'editor' : ' editor value'} onChange={e => setMail(e.target.value)} />
      </div>
      <div className='phone-number'>
        <input type='text' value={contactPhone} className={editingActive ? 'editor' : 'editor  value'} onChange={e => setPhone(e.target.value)} />
      </div>
      <div className='team'>
        <input type='text' value={contactTeam} className={editingActive ? 'editor' : ' editor value'} onChange={e => setTeam(e.target.value)} />
      </div>
      <div className='actions'>
        <div className='edit-contact' >
          {type === 'hidden'
            ? <i className='fas fa-pencil-alt' onClick={editContact}></i>
            : <i className='fas fa-check' onClick={saveChanges} />
          }
        </div>
        <div className='remove-contact' onClick={removeContact.bind(null, id)}>
          <i className="far fa-trash-alt"></i>
        </div>
      </div>
    </div>
  )
}

export default Contact;