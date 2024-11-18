import React from 'react';
import {checkOtp} from "services/auth.js";
import {setCookie} from "utils/cookie.js";
import {useNavigate} from "react-router-dom";
import useUser from "hooks/useUser.js";

import styles from "./CheckOtpForm.module.css"
import {p2e} from "../../utils/numbers.js";

function CheckOtpForm({code , setCode, setStep, mobile}) {
    const navigate = useNavigate();
    const { refetchProfile } = useUser()

    const submitHandler = async (e) => {
        e.preventDefault();
        if (p2e(code).length !== 5) return;

        const {response , error} = await checkOtp(mobile , p2e(code));
        if (response) {
            setCookie(response.data);
            localStorage.setItem('isLoggedIn', 'true');
            await refetchProfile();
            navigate("/");
            window.location.reload();
        }
        if (error) console.log(error.response.data.message);
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <p>تایید کد پیامک شده.</p>
            <span> کد پیامک شده به شماره «{p2e(mobile)}» را وارد کنید.</span>
            <label htmlFor="input">کد تایید را وارد کنید.</label>
            <input type="text"
                   id="input"
                   placeholder="کد تایید"
                   value={code}
                   onChange={(e) => setCode(e.target.value)}
            />
            <button type="submit">ورود</button>
            <button onClick={() => setStep(1)} className={styles.backButton}>تغییر شماره موبایل</button>
        </form>
    )
}
export default CheckOtpForm;
