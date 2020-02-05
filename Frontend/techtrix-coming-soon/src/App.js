import React from 'react';

import './App.css';

function App() {
  return (
 <body>
   
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <center>
          <img src="./img/logo-2.png" class="mr-3" width="250px" height="250px"/>
        </center>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-2 col-lg-1 col-4 mb-2 mb-md-0 timer-box pt-4 pb-4 mr-2">
        <div class="row">
          <div class="col-12">
            <div class="timer-box-num" name="days">00</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="timer-box-text"><h5>Days</h5></div>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-lg-1 col-4 mb-2 mb-md-0 timer-box pt-4 pb-4 mr-2">
        <div class="row">
          <div class="col-12">
            <div class="timer-box-num" name="hours">06</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="timer-box-text"><h5>Hours</h5></div>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-lg-1 col-4 timer-box pt-4 pb-4 mr-2">
        <div class="row">
          <div class="col-12">
            <div class="timer-box-num" name="minutes">09</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="timer-box-text"><h5>Minutes</h5></div>
          </div>
        </div>
      </div>
      <div class="col-md-2 col-lg-1 col-4 timer-box pt-4 pb-4 mr-2">
        <div class="row">
          <div class="col-12">
            <div class="timer-box-num" name="seconds">25</div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="timer-box-text"><h5>Seconds</h5></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 content">
        <center>
          <h4>We are coming soon</h4>
        </center>
      </div>
    </div>
    <div class="row mt-3 text-center">
      <div class="col-12">
        <form class="form-inline" id="notifs-form">
          <button  data-modal="modal-4" type="button" class="btn mt-2 mt-md-0" id="reach-us">Reach us</button>
          <label class="notified-label"></label>
        </form>
      </div>
    </div>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>

  <footer class="text-center page-footer">
    <div class="pb-4 pt-4">
      <a href="https://facebook.com/techtrix.rcciit" target="_blank">
        <i class="fab fa-facebook-f mr-3 social-icon"></i>
      </a>

      <a href="https://twitter.com/techtrix_rcciit" target="_blank">
        <i class="fab fa-twitter mr-3 social-icon"></i>
      </a>

      <a href="https://instagram.com/techtrix.rcciit" target="_blank">
        <i class="fab fa-instagram mr-3 social-icon"></i>
      </a>
      <a href="https://github.com/swc-rcciit" target="_blank">
        <i class="fab fa-github mr-3 social-icon"></i>
      </a>

    </div>
  </footer>
 </body>
  );
}

export default App;
