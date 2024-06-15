import LocalStorageHandler from '../../services/LocalStorageHandler.js';
import Account from './components/Account/Account.js';
import Authorization from './components/Authorization/Authorization.js';
import Logout from './components/Logout/Logout.js';
import BurgerMenu from './components/MainPage/BurgerMenu.js';
import Slider from './components/MainPage/Slider.js';
import ChangeTheme from './components/MainPage/changeTheme.js';
import ValidationRegistration from './components/Registration/ValidationRegistration.js';
import ChangeLang, { changeLang } from './components/Translation/changeLang.js';
import Pagination from "./components/Pagination/pagination.js";

class App {
    localStorageHandler = new LocalStorageHandler();

    init() {
        const burgerMenu = new BurgerMenu();
        burgerMenu.init();

         const slider = new Slider();
         slider.init();

        const changeTheme = new ChangeTheme();
        changeTheme.init();

        const validationRegistration = new ValidationRegistration();
        validationRegistration.init();

        const authorization = new Authorization();
        authorization.init();

        const logout = new Logout();
        logout.init();

        const changeLang = new ChangeLang();
        changeLang.init();

        const account = new Account();
        account.init();

        const pagination = new Pagination();
        pagination.init();
        
        this.isLogined();
        // window.onload = () => {
        //     const user = JSON.parse(customLocalStorage.get("user"));
        //     if(user) {
        //       console.log("windowOnLoad")
        //         authorization.changePage();
        //         //registration.changePage();
        //         changeTheme.setTheme(user.theme);
        //         translator.changeLang(user.lang);
        
        //         customLocalStorage.set('user', JSON.stringify(user));
        //     }
        // };
    }
   
    isLogined() {
        const user = JSON.parse(this.localStorageHandler.get('user'));
        if(user.isLogined) {
            document.querySelector('.logIn').classList.add('hidden');
            document.querySelector('.logIn_burger').classList.add('hidden');
            document.querySelector('.sighIn').classList.add('hidden');
            document.querySelector('.sighIn_burger').classList.add('hidden');

            document.querySelector('.logout').classList.remove('hidden');
            document.querySelector('.logout_burger').classList.remove('hidden');
            document.querySelector('.pagination-section ').classList.remove('hidden');

            document.querySelectorAll('.open').forEach((elem) => {
                elem.classList.remove('hidden');
            });

            this.changeTheme(user.theme);
            changeLang(user.lang);
        }
    }

    changeTheme(theme) {
        if (theme === 'light') {
            document.body.classList.remove('darkTheme');
        }
        else {
            document.body.classList.add('darkTheme');
        }
    }
}

export default App;
