import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer/Footer';
import Title from './component/Title/Title'
import Wine from './component/Wine/Wine'
import UserLogin from './component/User/UserLogin';
import SignupForm from './component/SignupForm/SignupForm';

function App() {
    return ( < >
        <
        Footer title = "Our first footer"
        number = { 200 }
        isON = { false }
        /> <
        Title / >
        <
        Wine title = "serab adi 1"
        description = "serab1"
        rating = { 1 }
        islike /
        >
        <
        Wine title = "serab adi 2"
        description = "serab2"
        rating = { 2 }
        islike /
        >
        <
        Wine title = "serab adi 3"
        description = "serab3"
        rating = { 3 }
        islike /
        >
        <
        UserLogin / >
        <
        SignupForm / >

        <
        /> 
    );
}

export default App;