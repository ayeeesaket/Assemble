import { Verification_Email_Template } from "./template/emailTemplate.js";
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

export { sendVerificationEmail };