import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from '../../assets/logo.svg';
import { Fragment } from "react";
import Button from '@material-ui/core/Button';

import RegistrationForm from '../registrationForm/registrationForm';
import CustomizedDialogs from '../dialog/dialog';
const Header = () => {

    const [openModal, setOpenModal] = useState(false);
    const [isLoggedIn, setIsLoggedeIn] = useState(false);
    const [isShowBooking, setIsShowBooking] = useState(true);


    return (
    
        <Fragment>


            <div className="headerStyle">
                <div >
                    <img src={Logo} className="logoStyle rotate-image" />
                </div>

                <div className="buttonStyle">

                    {isShowBooking ? <Button variant="contained" className="buttonStyle2" color="primary" >Book Show</Button> : ""}
                    {isLoggedIn ? <Button variant="contained" className="buttonStyle2" onClick={() => { isLoggedIn ? setIsLoggedeIn(false) : setIsLoggedeIn(true); }}>Logout</Button>
                        : <Button variant="contained" className="buttonStyle2" onClick={() => { setOpenModal(true); isLoggedIn ? setIsLoggedeIn(false) : setIsLoggedeIn(true); }}>Login</Button>}
                    
                    <CustomizedDialogs openDialog = {openModal}>
                        <RegistrationForm/>
                    </CustomizedDialogs>


                </div>
            </div>
        </Fragment>

    );
}

export default Header;