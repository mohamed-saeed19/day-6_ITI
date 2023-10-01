import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-4 p-5">
                <h4>GET IN TOUCH</h4>
                <div>
                    <div className='d-flex'>
                        <h6>facebook : </h6>
                        <a className='text-danger' href='#'><i className='fab fa-facebook mx-2'></i></a>

                    </div>
                    <div className='d-flex'>
                        <h6>Google : </h6>
                        <a className='text-danger'href='#'><i className="ms-4 fa-brands fa-google mx-2"></i></a>

                    </div>
                </div>
            </div>
            <div className="col-md-4 p-5 d-flex align-items-center justify-content-center">
            <button className='btn2'>Contact Me</button>

            </div>
            <div className=" col-md-4  p-5 position-relative">
                <div className='footer position-absolute end-0'>
                <h6 >Social Media : </h6>
                <div >
                        <a className='text-danger' href='#'><i className='fab fa-twitter mx-2'></i></a>

                        <a className='text-danger' href='#'><i className="fa-brands fa-linkedin mx-2"></i></a>

                        <a className='text-danger' href='#'><i className="fa-brands fa-whatsapp mx-2"></i></a>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer