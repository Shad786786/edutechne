import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Vide from './Vide';
import Particles from  './Particles';
import Vide2 from "./Vide2";

function Newweb() {
  return (
    <div>
      <header className="header-login">
        <a href="#">Login to always get in touch with us.</a>
        <div className="login-home"><a href="">Home</a></div>
      </header>

      <div className="input-box">
        <h1 className="login-text1">Login</h1>

        <div className="buttons">
          <button className="button-google">
            <div className="button-google-1">Google</div>
            <div className="button-google-logo"></div>
          </button>

          <button className="button-facebook">
            <div className="button-facebook-1">Facebook</div>
            <div className="button-facebook-logo"></div>
          </button>

          <br />

          <button className="button-linkedin">
            <div className="button-linkedin-1">LinkedIn</div>
            <div className="button-linkedin-logo"></div>
          </button>
        </div>

        <p className="OR">OR</p>

        <div className="input1">
          <input
            className="login-input"
            type="text"
            name="email"
            autoComplete="username"
            placeholder="  email"
          />
          <input
            className="login-input"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="  password"
          />
        </div>

        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>

        <div className="buttons2">
          <button type="button" className="button-forgot1">
            <div className="button-forgot-1">Forgot Password?</div>
          </button>

          <button type="submit" className="button-login1">
            <div className="button-login-1">Login</div>
          </button>
        </div>

        <h4 className="dont-have-account">
          Don't have an account?{" "}
          <a className="sign-up" href="#">
            Sign-up
          </a>
        </h4>
      </div>

     
        <div className="little-container">
          <Particles />
          <h3 className="text-videos">
            <span style={{ marginRight: "370px" }}>Please login to</span>
            <span style={{ marginTop: "20px", display: "flex" }}>
              avail our services
            </span>
            <span style={{ marginTop: "20px", display: "flex" }}>
              and download materials.
            </span>
          </h3>
        

        <Vide />
        </div>
        <div><button type="button" className="button-help"><a href="">Help ?</a></button></div>
        <Vide2 />
      </div>
    
  );
}

export default Newweb;
