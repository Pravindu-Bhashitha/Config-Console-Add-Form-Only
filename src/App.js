import "./App.css";
import Logout from "./Logout";
import ThirdOne from "./ThirdOne";
import MyComponent from "./MyComponent";
import FourthPart from "./FourthPart";
import Toggale from "./Toggale";

function App() {
  return (
    <div className="App">
      <div className="FirstOne">
        <MyComponent></MyComponent>
        <Logout></Logout>
      </div>
      <div className="Third">
        <p>Sample page 2</p>
      </div>
      <div className="Middleone">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      </div>
      <div className="ThirdPart">
        <div className="firstbuttons">
          <button className="button1">Load Existing Settings</button>
          <button className="button2">Clear Existing Settings</button>
        </div>
        <div className="Note">
          <p className="Space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
          <p className="Note1">
            <b>Note:</b> You can check the accuracy of SMTP server settings and
            send emails to the test email address. You must install the Job
            Scheduler windows service on your application server in order to
            function Job Scheduler properly.
          </p>
          <br />
          <p className="Note2">*CDO: Collaboration Data Objects</p>
        </div>
        <div className="Fillings">
          <div className="Fill1">
            <label className="ServerType">Server Type*</label>
            <input className="ServerTypein" type="text"></input>
          </div>

          <div className="Fill2">
            <label className="SMTPServer">SMTP Server*</label>
            <input className="SSMTPServerin" type="text"></input>
          </div>

          <div className="Fill3">
            <label className="SMTPServerPort">SMTP Server Port</label>
            <input className="SSMTPServerPortin" type="text"></input>
          </div>

          <div className="Fill4">
            <label className="SenderEmailAddress">Sender Email Address *</label>
            <input className="SenderEmailAddressin" type="text"></input>
          </div>

          <div className="Fill5">
            <label className="RecipientEmailAddress">
              Recipient Email Address *
            </label>
            <input className="RecipientEmailAddressin" type="text"></input>
          </div>

          <div className="Fill6">
            <label className="TestEmailBody">Test Email Body *</label>
            <textarea className="TestEmailBodyin"></textarea>
          </div>

          <div className="Fill7">
            <label className="EnableCDOSettings">Enable CDO Settings</label>
            <label class="switch">
              <input type="checkbox"></input>
              <span class="slider"></span>
            </label>
          </div>

          <div className="Fill8">
            <label className="UserName">User Name *</label>
            <input className="UserNamein" type="text"></input>
          </div>

          <div className="Fill9">
            <label className="Password">Password *</label>
            <input className="Passwordin" type="text"></input>
          </div>

          <div className="secondbuttons">
            <button className="button3">Save SMTP Settings</button>
            <button className="button4">Send Test Email</button>
          </div>
        </div>

        <div className="Blank">
          <p className="Space">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>

        <div className="footer">
          <footer>
            <b>Copyright</b> Example Company © 2014-2018
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
