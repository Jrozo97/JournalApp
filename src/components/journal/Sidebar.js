import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { startNewNote } from '../../actions/notes';
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(startLogout())
    }

    const handleAddNewEntry = () => {
        dispatch(startNewNote())
    }

    return (
        <aside className='journal__sidebar'>

            <div className='journal__sidebar-navbar'>
                <h3 className='journal__sidebar-navbar-title'>
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/journalapp-4d018.appspot.com/o/Grupo%2014.png?alt=media&token=3c4e86a4-fc3a-4a75-b679-0b84d88cf976"
                        alt="logo journal" />
                    <span className='name-title'> {name} </span>
                </h3>
                <button className='btn-logout' onClick={handleLogout}>Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></button>
            </div>

            <div
                className='journal__new-entry'
                onClick={handleAddNewEntry}
            >
                <i className='far fa-calendar-plus fa-5x'></i>
                <p className='mt-5'>
                    New entry
                </p>
            </div>

            <JournalEntries />

        </aside>
    )
}
