import React, { useEffect, useState } from "react";

const View = ({ modal }) => {
  const { scholarImage, scholarName, nid, status, city, phone, _id } = modal;


//   main array of object state

const [books, setbooks] = useState([])

// input field
  const[ title, setTitle] = useState('')
  const[ author, setAuther] = useState('')
  const[ isbn, setIsbn] = useState('')

//   form submit event
const handleAddBookSubmit=(e)=>{
    e.preventDefault();

    // object 
    let book={
        title: title,
        author:author,
        isbn:isbn
    }
    setbooks([...books,book])
    setTitle('')
    setAuther('')
    setIsbn('')

}
// DATA Save to local storage
useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books))


},[books])
  return (
    <div style={{ height: "300px" }}>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Scholars
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <section id="contact">
                <div className="container-lg">
                  <div className="text-center">
                    <h2>Get in Touch</h2>
                   
                  </div>

                  <div className="row justify-content-center my-5">
                    <div className="col-lg-6">
                        {/* form */}

                      <form 
                      onSubmit={handleAddBookSubmit}
                      
                      style={{ backgroundColor: 'gainsboro' , width:'270px'}}> 
                        <div class="mb-3">


                          <label for="exampleInputEmail1" class="form-label">
                          scholars name
                          </label>
                          
                          <input
                          onChange={(e) => setTitle(e.target.value)} value={title}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        
                        </div>


                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Email phone 
                          </label>
                          <input
                            onChange={(e) => setAuther(e.target.value)} value={author}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        
                        </div>

                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label">
                            Email address
                          </label>
                          <input
                             onChange={(e) => setIsbn(e.target.value)} value={isbn}
                            type="text"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                          />
                        
                        </div>
                        
                       
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
           {/* <p> hi</p>   */}
           {/* tabol */}
           <div>
               <p>hi</p>  
               {books.length <1 && <div> <h6>no books are added yet</h6></div>}
           </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
