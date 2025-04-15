import React from 'react';
//importing sweetalert2
import Swal from 'sweetalert2';
function SeatingLayout() {
  const handleRequest = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  };
  return (
    <>
                 <div className='container'>
                      <form>
                        <div className="row mb-3">
                          <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                          <div className="col-sm-10">
                            <input type="name" className="form-control" id="inputEmail3" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label for="inputPassword3" className="col-sm-2 col-form-label">Number of Tickets</label>
                          <div className="col-sm-10">
                            <input type="Number" className="form-control" id="inputnumber3" required/>
                          </div>
                        </div>
                        <fieldset className="row mb-3">
                          <legend className="col-form-label col-sm-2 pt-0">ClassName</legend>
                          <div className="col-sm-10">
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                              <label className="form-check-label" for="gridRadios1">
                                First class
                              </label>
                            </div>
                            <div className="form-check">
                              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                              <label className="form-check-label" for="gridRadios2">
                                Second class
                              </label>
                            </div>
                            <div className="form-check disabled">
                              <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                              <label className="form-check-label" for="gridRadios3">
                                Third class
                              </label>
                            </div>
                          </div>
                        </fieldset>
                       
                        <button type="submit" className="btn btn-primary" onCanPlay={handleRequest()}>Pay Now</button>
                      </form>
                  </div>
             
    </>
  );
}

export default SeatingLayout;
