import { Verification_Email_Template } from "./template/emailTemplate.js";
import {Acoount_recovery_template} from "./template/usernameTemplate.js"
import transporter from "../../libs/emailConfig.js";

const sendVerificationEmail = async (email, verificationCode) => {
    try {
        const response = await transporter.sendMail({
            from: '"Assemble" <testme2004.04@gmail.com>',
            to: email,
            subject: "Account Verification",
            html: Verification_Email_Template.replace("{verificationCode}", verificationCode),
        });
        console.log("Email Send Successfully: ", response);
    } catch (error) {
        console.log(error.message);
    }
};

const sendUsername = async (email,username)=>{
    try {
        const response = await transporter.sendMail({
            from: '"Assemble" <testme2004.04@gmail.com>',
            to: email,
            subject: "Account Recovery",
            html: Acoount_recovery_template.replace("{username}", username),
        });
        console.log("Email Send Successfully: ", response);
    } catch (error) {
        console.log(error.message);
    }
}

export { sendVerificationEmail ,sendUsername};