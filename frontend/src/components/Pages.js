import React, { useState,useEffect } from "react";
import './Mystyle.css'
const Pages = () => {

  const books = [
    { id: 0, author: "F. Scott Fitzgerald", genre: "Classic", pages: 180 },
    { id: 1, author: "Harper Lee", genre: "Classic", pages: 281 },
    { id: 2, author: "George Orwell", genre: "Dystopian", pages: 328 },
    { id: 3, author: "J.K. Rowling", genre: "Fantasy", pages: 320 },
    { id: 4, author: "J.D. Salinger", genre: "Classic", pages: 224 },
    { id: 5, author: "Jane Austen", genre: "Romance", pages: 279 },
    { id: 6, author: "J.R.R. Tolkien", genre: "Fantasy", pages: 310 },
    { id: 7, author: "Dan Brown", genre: "Thriller", pages: 689 },
    { id: 8, author: "Suzanne Collins", genre: "Science Fiction", pages: 374 },
    { id: 9, author: "Paulo Coelho", genre: "Fantasy", pages: 208 },
    { id: 10, author: "William Golding", genre: "Classic", pages: 224 },
    { id: 11, author: "Margaret Mitchell", genre: "Historical Fiction", pages: 1037 },
    { id: 12, author: "Stieg Larsson", genre: "Mystery", pages: 672 },
    { id: 13, author: "Stephen King", genre: "Horror", pages: 447 },
    { id: 14, author: "Andy Weir", genre: "Science Fiction", pages: 369 },
    { id: 15, author: "Kathryn Stockett", genre: "Historical Fiction", pages: 544 },
    { id: 16, author: "Cormac McCarthy", genre: "Dystopian", pages: 287 },
    { id: 17, author: "Alex Michaelides", genre: "Mystery", pages: 336 },
    { id: 18, author: "Donna Tartt", genre: "Literary Fiction", pages: 864 },
    { id: 19, author: "Erin Morgenstern", genre: "Fantasy", pages: 387 }
];

const m=3;  
const [id, setId] = useState(0); 
const [visible, setVisible] = useState(false); 
const images = [`image_${id%m}.jpg`, `image_${id%m}.jpg`, `image_${id%m}.jpg`]; // Sample image names
const n =books.length; // Get the total number of books

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 900) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  handleResize(); // Call the function once to set initial state

  window.addEventListener("resize", handleResize); // Add event listener for window resize

  // Cleanup function to remove event listener when component unmounts
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, [visible]); // Empty dependency array ensures the effect runs only once on component mount

const divStyle = {
  backgroundImage: `url(./${images[id%m]})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
};

const handleNext = () => {
  setId((prevId) => (prevId + 1) % n); 
};

const handlePrev = () => {
  setId((prevId) => Math.max(prevId - 1, 0)); 
};

return (
  <div>
    <div style={divStyle} className="flex">
      {!visible ? (
        <>
          <h1 className="position">Author: {books[id].author}</h1>
          <h1 className="position">Genre: {books[id].genre}</h1>
          <h1 className="position">Number: {books[id].pages}</h1>
        </>
      ) : (
        <>
          <h3 className="position">Author: {books[id].author}</h3>
          <h3 className="position">Genre: {books[id].genre}</h3>
          <h3 className="position">Number: {books[id].pages}</h3>
        </>
      )}
    </div>
    <div id="next_prev">
      <button onClick={handlePrev} className="box"><h2>Previous</h2></button>
      <button onClick={handleNext} className="box"><h2>Next</h2></button>
    </div>
  </div>
);
};
export default Pages;
