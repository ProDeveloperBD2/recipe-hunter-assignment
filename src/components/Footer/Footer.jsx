import React from 'react';

const Footer = () => {
    return (
        <div className='pt-4 pe-4 ps-3 pb-4' style={{ backgroundColor: '#F0FAF1' }}>
            <footer>
                <div className='d-flex' style={{ gap: '70px' }}>
                    <div>
                        <h2 className='fw-bold' style={{ color: '#96F796' }}>Recipe Hunter</h2>
                    </div>
                    <div>
                        <h5>Recent Articles</h5>
                        <ul>
                            <li>How I Afford Healthy Food</li>
                            <li>Are Eggs Good For You?</li>
                            <li>Healthy Fitness Meals</li>
                            <li>Unhealthy habits</li>
                            <li>Is Stevia Safe or Addictive?</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Recent Books</h5>
                        <ul>
                            <li>“Healthy Cooking Tips”</li>
                            <li>“The Right Nutrition”</li>
                            <li>“Fear of Food”</li>
                            <li>“What should I eat”</li>
                        </ul>
                    </div>
                    <div>
                        <h5>About Our Mission</h5>
                        <div style={{ lineHeight: "10px" }}>
                            <p>We are dedicated to</p>
                            <p>providing crucial nutrition</p>
                            <p>facts and individual health</p>
                            <p>advisory.</p>
                        </div>
                    </div>
                </div>
                <h6 className='mt-4'>© 2021 Qode Interactive, All Rights Reserved</h6>
            </footer>
        </div>
    );
};

export default Footer;