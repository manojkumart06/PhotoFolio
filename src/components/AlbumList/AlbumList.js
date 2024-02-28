import React, { useState, useEffect } from 'react';
import './AlbumList.css';
import Albumform from '../AlbumForm/AlbumForm';
import { db } from '../../firebaseinit';
import Imageslist from '../ImageList/ImageList';
import {
  collection,
  addDoc,
  getDocs,
} from 'firebase/firestore';


export default function Albumslist() {
  const [showForm, setShowForm] = useState(false);
  const [setAlbumName] = useState('');
  const [albums, setAlbums] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  useEffect(() => {
    fetchAlbums();
  }, []);

  // Fetch albums from the Firestore database
  const fetchAlbums = async () => {
    const querySnapshot = await getDocs(collection(db, 'albums'));
    const albumsData = [];
    querySnapshot.forEach((doc) => {
      albumsData.push({ id: doc.id, name: doc.data().name });
    });
    setAlbums(albumsData);
  };

  // Toggle the visibility of the album creation form
  const handleAddAlbum = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  // Create a new album in the Firestore database
  const handleAlbumCreate = async (name) => {
    try {
      const docRef = await addDoc(collection(db, 'albums'), {
        name: name,
      });
      setAlbumName(name);
      const newAlbum = { id: docRef.id, name: name }; // Create a new album object
      setAlbums([newAlbum, ...albums]); // Add the new album to the beginning of the list
    } catch (error) {
      console.error('Error creating album:', error);
    }
  };

  // Handle the click event when an album is clicked
  const handleAlbumClick = (albumId) => {
    setSelectedAlbumId(albumId);
    setShowForm(false); // Hide the form when clicking on an album
  };

  // Handle the click event when the back button is clicked
  const handleBackClick = () => {
    setSelectedAlbumId(null);
  };

  return (
    <>
        <div className="header">
            <img src="https://cdn-icons-png.flaticon.com/128/7894/7894161.png" alt="logo" />
            <span>PhotoFolio</span>
        </div>
      {showForm && <Albumform onAlbumCreate={handleAlbumCreate} />}
      {!selectedAlbumId && (
        <div className="albumslistmain">
          <h2 className="text">List of Albums</h2>
          <button className="addbtn" onClick={handleAddAlbum}>
            {showForm ? 'Cancel' : 'Add Album'}
          </button>
        </div>
      )}

      {!selectedAlbumId && albums.length > 0 && (
        <div className="grid">
          {albums.map((album) => (
            <div
              className="container"
              key={album.id}
              onClick={() => handleAlbumClick(album.id)}
            >
              <img src="https://cdn-icons-gif.flaticon.com/12754/12754654.gif" alt="album" />
              <span>{album.name}</span>
            </div>
          ))}
        </div>
      )}

      {selectedAlbumId && (
        <Imageslist albumId={selectedAlbumId} onBackClick={handleBackClick} />
      )}
       <div className="footer">
            
            <span>@CreatorManoj 🖋️</span>
    </div>
    </>
  );
}
