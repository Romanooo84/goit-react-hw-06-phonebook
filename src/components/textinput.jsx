import { useDispatch } from "react-redux";
import { addItem, deleteItem} from "../redux/actions";
import { getItems} from "../redux/selectror";
import { useSelector } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Filter } from "./filter"

export const TextInput = () => {

    const dispatch = useDispatch();
    const items = useSelector(getItems);

    const [nameValue, setNameValue] = useState('');
    const [numberValue, setNumberValue] = useState('')
    const [name, setName] = useState()
    const [number, setNumber] =useState()

    const onChange = event => {
        event.preventDefault();
        
        if (event.target.name === 'name') {
            setNameValue(event.target.value);
            setName(event.target.value)
        }
        else if (event.target.name === 'number') {
            setNumberValue(event.target.value);
           setNumber(event.target.id)
        }
    
    };

    const onSubmit = event => {
        event.preventDefault();
        let userData = { id: nanoid(), name: name, number: number }
        dispatch(addItem(userData));
        setName()
        setNumber()
        setNameValue('')
        setNumberValue('')
    }

    const onClick=event=>{
        event.preventDefault();
        dispatch(deleteItem(event.target.parentNode.id));
    }
   
    return (
    <div>  
        <p>Contacts</p>
        <form onSubmit={onSubmit}> 
            <p>Name</p>    
                    <input
                    type="text"
                    name="name"
                    id='id'
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    value = {nameValue}
                    required
                    onChange={onChange}
                    
                    
                />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    value = {numberValue}
                    required
                    onChange={onChange}
                    
                    />
                <button type='submit'>Add Contact</button>
            </form> 
            <Filter />
            <div>
            {items.items.map((item) => (
                <div id={item.id} key={item.id}>
                    <p>Name: {item.name}</p>
                    <p>Number: {item.number}</p>
                    <button onClick={onClick} >Delete</button>
                </div>
            ))}
        </div>
    </div>
    )
}