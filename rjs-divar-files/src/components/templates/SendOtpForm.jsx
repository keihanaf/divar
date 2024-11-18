import React from 'react';
import {sendOtp} from "services/auth.js";
import styles from "./SendOtpForm.module.css"
import {p2e} from "../../utils/numbers.js";

function SendOtpForm({mobile, setMobile, setStep}) {
    const submitHandler = async (e) => {
        e.preventDefault();

        if (p2e(mobile).length !== 11) return;
        const {response, error} = await sendOtp(mobile)
        if (response) setStep(2);
        if (error) console.log(error.response.data.message);
        console.log({response, error})
    }

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <p>ورود به حساب کاربری</p>
            <span>
                برای استفاده از امکانات دیوار، لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره پیامک خواهد شد.
            </span>
            <label htmlFor="input">شماره موبایل خود را وارد بکنید.</label>
            <input type="number"
                   id="input"
                   placeholder="شماره موبایل"
                   value={mobile}
                   onChange={(e) => setMobile(e.target.value)}
            />
            <button type="submit">ارسال کد تایید</button>
        </form>
    )
}
export default SendOtpForm;