import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick3 = () => {
    console.log("hello");
    navigate('/Peepee');
  };
  const handlePrivacyPolicyClick2 = () => {
    console.log("hello");
    navigate('/Terms');
  };

  return (
    <div>
      <footer className="page-footer">
        <div className="footer-list">
          <button className="list-item">CONTACT US</button>
          <button className="list-item" onClick={handlePrivacyPolicyClick2}>TERMS OF SERVICE</button>
          <button className="list-item" onClick={handlePrivacyPolicyClick3}>PRIVACY POLICY</button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;