import "../../styles/Project.scss";
import pantalla3 from "./../../images/pantallas_Capa-3.png";
import { Link } from "react-router-dom";
function MinionProfileCards() {
  return (
    <div class='project_div'>
      <h2 className="project_title">Minion Profile Cards</h2>
      <div className="div_project">
        <img className="project_img" src={pantalla3} alt="" />
       <div className="project_detail">          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolorum facilis nam sunt quo itaque autem sit eligendi illum, asperiores inventore nostrum tempore expedita voluptatem quis consequuntur! Optio, atque alias!
          </p>
          <span className="detail_icons">
          <a href="https://github.com/martscastrillo/minions-profile-cards"><i class="fa-solid fa-code prj_logo"></i></a>
          <a href="https://martscastrillo.github.io/minions-profile-cards/ "><i class="fa-regular fa-window-restore prj_logo"></i></a>
            </span>
         <Link to="/Dev" className="link">
            <i className="fa-solid fa-chevron-left"></i>Return
          </Link>
        </div>
      </div></div>
  );
}

export default MinionProfileCards;