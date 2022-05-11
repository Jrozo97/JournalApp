import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppbar = () => {

  const dispatch = useDispatch();
  const { active } = useSelector(state => state.notes);

  const handleSave = () => {

    dispatch(startSaveNote(active))
  }

  const handlePictureUpload = () => {
    document.querySelector('#fileSelector').click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      dispatch( startUploading( file ) );
    }
  }

  return (
    <div className='notes__appbar'>
      <span>Personal note</span>

      <input
        id='fileSelector'
        type='file'
        name='file'
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <div className='notes__buttons'>
        <button
          className='btn-notes-appbar'
          onClick={handlePictureUpload}
        >
          Picture
          <i className="fa-solid fa-image"></i>
        </button>
        <button
          className='btn-notes-appbar'
          onClick={handleSave}
        >
          Save
          <i className="fa-solid fa-floppy-disk"></i>
        </button>
      </div>

    </div>
  )
}
