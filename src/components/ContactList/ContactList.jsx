import { getFilter, getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import style from './ContactList.module.css';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filters = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleDelete = id => {
        dispatch(deleteContact(id));
    }
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <>
        {contacts.length === 0 ? (
            <h3>Contact book is empty!</h3>) : (
                <ul className={style.list}>
                        {filteredContacts.map(({id, name, number}) => (
                        <li className={style.item} key={id}>
                            <p>
                                {name}: {number}
                            </p>
                            <button className={style.button} type="button" onClick={() => handleDelete(id)} value="delete">Delete contact</button>
                        </li>
                    ))}
                </ul>
            )}
    </>
    )    
}