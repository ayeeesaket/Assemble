import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick = () => {
    console.log("hello");
    navigate('/Peepee');
  };

  return (
    <div>
      <footer className="page-footer">
        <div className="footer-list">
          <button className="list-item">CONTACT US</button>
          <button className="list-item">TERMS OF SERVICE</button>
          <button className="list-item" onClick={handlePrivacyPolicyClick}>PRIVACY POLICY</button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;