import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import mticket from './image/qr-code__1_-removebg-preview.png';
import food from './image/fast-food__1_-removebg-preview.png';

function Theater() {
  const navigate = useNavigate();

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);

  const handleRequest = () => {
    navigate('/seatinglayout');
    console.log('button is clicked');
  };

  return (
    <>
      <div className='bg-white p-2'>
        <div className='d-flex mb-2'>
          <p className='recomanded-heading my-auto fs-5 m-2'>JACK-TelUgu:xxb</p>
          <button
            className='btn btn-outline-dark rounded-pill p-2 m-auto'
            data-bs-toggle='tooltip'
            data-bs-placement='top'
            title='$230 Platinum'
            style={{ cursor: 'pointer' }}
            onClick={handleRequest}
          >
            10:30PM
          </button>
        </div>
        <div className='d-flex'>
          <img src={mticket} className='img-fluid' alt='M-Ticket' />
          <span className='p-1 py-auto my-auto text-center'>M-Ticket</span>

          <img src={food} className='img-fluid' alt='Food' />
          <span className='p-2 my-auto'>Food & Beverage</span>
        </div>
        <br />
        <pre>Non-cancellable</pre>
      </div>
    </>
  );
}

export default Theater;
