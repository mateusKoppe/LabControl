import templateUrl from './home.component.html';
import './home.component.scss';

export const HomeComponent = {
  templateUrl,
  controller: class HomeController{
    godDamn(){
      alert('God Damn');
    }
  }
};
