import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


function Expensespage(){
    return(
<div class="acnav">
    <table className="theight">
    <tr>
        <th>Delivery ID</th>
        <th>Order ID</th>
        <th>Rider ID </th>
        <th>Date</th>
        <th>Status</th>
        <th>Action</th>
    </tr>
    <tr>
    <td>d001</td>
    <td>d001</td>
    <td>d001</td>
    <td>06/07/2020</td>
    <td>delivered</td>
    
    <td>
    <div align="right">
   
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
             
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal3"
              /></a>

              <div class="modal fade" id="myModal3" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <p align="left">Do you want delete.</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    </td>
    </tr>

    <tr>
    <td>d001</td>
    <td>d001</td>
    <td>d001</td>
    <td>06/07/2020</td>
    <td>delivered</td>
    <td>
    <div align="right">
   
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
              
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal3"
              /></a>

              <div class="modal fade" id="myModal3" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <p align="left">Do you want delete.</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    </td>
    </tr>

    <tr>
    <td>d001</td>
    <td>d001</td>
    <td>d001</td>
    <td>06/07/2020</td>
    <td>delivered</td>
    <td>
    <div align="right">
   
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
             
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal3"
              /></a>

              <div class="modal fade" id="myModal3" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <p align="left">Do you want delete.</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    </td>
    </tr>

    <tr>
    <td>d001</td>
    <td>d001</td>
    <td>d001</td>
    <td>06/07/2020</td>
    <td>delivered</td>
    <td>
    <div align="right">
   
              <FontAwesomeIcon icon={faEdit} color="black" className="mr-2" />
              
            <a href="#">
              <FontAwesomeIcon
                icon={faTrash}
                color="black"
                className="mr-2"
                data-toggle="modal"
                data-target="#myModal3"
              /></a>

              <div class="modal fade" id="myModal3" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 className="modal-title">Are you sure?</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <p align="left">Do you want delete.</p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </div>
    </td>
    </tr>
    <div class="left"><button class="button" variant="contained" color="secondary" style={{align:"right"}}><b>Print</b></button></div>
    </table>


</div>
    );
}

export default Expensespage;