// Mon fichier MonCarnet.js
import MenuNavigation from '../MenuNavigation/MenuNavigation';
import "./MonCarnet.css";


function MonCarnet() {
let formCarnet = (
    <div className="form-container">
      <form className="form">
        <div class="form-group">
          <label for="email">Company Email</label>
          <input required="" name="email" id="email" type="text" />
    </div>
        <div className="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" className="form-submit-btn">Submit</button>
      </form>
    </div>);

let healthInformation = (
  <div class="card">
    <div class="card__content"></div>
  </div>
);

  return (
    <div className="container-mon-carnet">
      <MenuNavigation />
      { formCarnet }
      { healthInformation }
    </div>
  );
}
export default MonCarnet;
