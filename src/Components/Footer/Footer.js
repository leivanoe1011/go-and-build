
import React from "react";

function Footer(){
    
    const currentYear = new Date().getFullYear();
      
    return (
        <>
            <div className="row align-self-center d-flex justify-content-center bg-secondary p-5">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h1 style={{fontSize: "3rem"}} className="text-white">Go and Build Hope!</h1>
                    <br></br>
                    <h3 className="text-white" style={{fontSize: "1rem"}} >Help us build a home and improve the quality of life for a community in need. </h3>
                    <h3 className="text-white" style={{fontSize: "1rem"}}>Go and Build hope for a family in Guatemala.</h3>
                    <h4 className="text-white" style={{fontSize: "1rem"}}><strong className="text-white">501(c)(3) </strong>in Progress</h4>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <h5 style={{display:"none", width: "100%"}}className="text-white ">Connect</h5>
                    <ul style={{display:"none", width: "100%"}} className="connect-links" >
                        <li><a href="#" className="text-white">Facebook</a></li>
                        <li><a href="#" className="text-white">Instragram</a></li>
                        {/* <li><a href="#" className="text-white">Pinterest</a></li> */}
                    </ul>
                </div>
            </div>

            <div className="row align-self-center d-flex justify-content-center bg-dark p-5">
                <div className="col-sm-12 col-md-10 col-lg-10 align-self-center d-flex justify-content-center">
                    <div className="center-align text-white ">&copy; {currentYear} GO-AND-BUILD</div>

                </div>
               
            </div>
        </>
    )
}

export default Footer;

