import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { activeNote, startDeletingNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppbar } from './NotesAppbar'

export const NoteScreen = () => {

    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title, id } = formValues;

    const activeId = useRef(note.id);

    useEffect(() => {

        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id;
        }

    }, [note, reset]);

    useEffect(() => {

        dispatch(activeNote(formValues.id, { ...formValues }))

    }, [formValues, dispatch])

    const handleDeleteNote = () => {
        dispatch(startDeletingNote(id))
    }


    return (
        <div className='notes__main-content'>

            <NotesAppbar />

            <div className='notes__content'>

                <input
                    type='text'
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                    name='title'
                    value={title}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder='What happened today?'
                    className='notes__textarea'
                    name='body'
                    value={body}
                    onChange={handleInputChange}
                >
                </textarea>
                <div className='footer-notes'>

                    {
                        (note.url)
                        && (
                            <div className='notes__image'>
                                <img
                                    src={note.url}
                                    alt='image_note'
                                />

                            </div>
                        )
                    }
                    <div className='notes__delete-note' onClick={handleDeleteNote}>
                        <span className='icon-delete'>
                        <i className="fa-solid fa-trash"></i>
                        </span>
                        <br />
                        <h3>Delete</h3>
                    </div>
                </div>

            </div>


        </div>
    )
}
