import React from 'react'

const contact = () => {
  return (
    <>
      <div className='my-5 contactLast'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact-div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="number" className="form-control" id="phone" placeholder="Contact Number" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className='col-12'>
                <button className='btn btn-outline-primary contactLast' type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default contact