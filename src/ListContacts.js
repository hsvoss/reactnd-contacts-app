import React from 'react';
import Proptypes from 'prop-types';


function ListContacts(props) {
    return (
        <ol className={'contact-list'}>
            {props.contacts.map(contact => (
                <li key={contact.id} className='contact-list-item'>
                    <div className='contact-avatar'
                         style={{
                             backgroundImage: `url(${contact.avatarURL})`
                         }}/>
                    <div className='contact-details'>
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                    </div>
                    <button className='contact-remove' onClick={() => props.onDeleteContact(contact)}>Remove</button>
                </li>
            ))}
        </ol>
    );
}

ListContacts.propTypes = {
    contacts: Proptypes.array.isRequired,
    onDeleteContact: Proptypes.func.isRequired,

}


export default ListContacts