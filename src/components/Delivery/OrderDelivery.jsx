import React from "react";
import "./ok.css";

function CreateDeilivaryToken() {
  return (
        <table  className="ttt" >
        <tr>
        <td    className="ttt"  >
        <div className="border border-success col-sm rounded m-5 column ml-2"   >
          <h1 align="center" className="m-2 mb-4">
           Order Delivery
          </h1>
          <form>
            <div class="form-group row">
              <label for="staticToken" class="col-sm col-form-label">
                Order id :
              </label>
              <div class="col-sm">
                <input
                  type="text"
                  
                  
                  id="staticToken"
                  placeholder="001"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="selectOrder" class="col-sm col-form-label">
                Rider id :
              </label>
              <div class="col-sm">
              <input
                  type="text"
                  
                  
                  id="staticToken"
                  placeholder="001"
                />
              </div>
            </div>

           <div class="form-group row">
              <div className="">
                <button className="btn btn-outline-success">Create</button>
              </div>
              <div className="">
                <button className="btn btn-outline-success ml-4">View</button>
              </div>
              <tr >
             
              <img alt="" style={{backgroundSize:"cover",height:"46vh"}} width="250" class="img-rounded"  class="img-thumbnail"  width="500" height="6000" src={require("./img/o.jpg")}/>
              </tr>
             
            </div>
          </form>
        </div>
        </td>
        <table className="tt" >
            <tr>
                <td >
                <div class="form-group row " className="ttt" className="border border-success col-sm rounded m-5 column ml-2" >
              <div className="">
                <center><button className="bt-top">Update Rider Status</button></center>
              </div>
              <div className="">
               <center> <button className="btnn">Update Order Status</button></center>
               <br></br><br></br>
               <center><label><h2></h2><b>Today Delivered</b></label></center>
               <center><input type="text" style={{height:"100px"}} ></input></center>
               <center><label><h2></h2><b>Riders available</b></label></center>
               <center><input type="text" style={{height:"100px"}} ></input></center>
              
              </div></div>
              
                    
                </td>
            </tr>
        </table>
        </tr>
        </table>
    
  );
}

export default CreateDeilivaryToken;