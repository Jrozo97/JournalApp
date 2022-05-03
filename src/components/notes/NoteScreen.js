import React from 'react'
import { NotesAppbar } from './NotesAppbar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>

            <NotesAppbar />

            <div className='notes__content'>

                <input
                    type='text'
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                />
                <textarea
                    placeholder='What happened today?'
                    className='notes__textarea'
                >
                </textarea>

                <div className='notes__image'>
                    <img
                        src='https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
                        alt='image_note'
                    />

                </div>

            </div>

        </div>
    )
}
