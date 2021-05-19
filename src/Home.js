// import { Header } from '../src/Header';
import { Menu } from "../src/Menu";

function index() {
  return (
    <div>
      <Menu />

      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Home</h2>
            <h6 className="margintopbottom20">
              Bienvenu au blog : Mes articles est un blog d'articles qui vous
              ofrre différentes fonctionnalités, entre autre la lecture de toute
              une liste d'article sur différents sujets, vous pouvez également
              en créer le votre, supprimer et commenter des articles existants.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
