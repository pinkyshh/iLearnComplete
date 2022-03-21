import React from 'react'

function Footer () {
    return (
        <div>
            <footer id="footer" className="parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.2s">
                            <h4>iLearn</h4>
                            <p>Now Available on you Desktop.</p>
                        </div>

                        <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.4s">
                            <div className="support-cus">
                                <h4>Project By</h4>
                                <p>Pinky Shahi 6135205</p>
                                <p>Suchawan Chaiworn 6135102</p>
                                <p>Lipika Bania 6138108</p>
                            </div>
                        </div>

                        <div className="wow fadeInUp col-md-4 col-sm-4" data-wow-delay="0.6s">
                            <p className="copyright-text">Copyright © 2022 Pinky & Lipika
                            . Design: Tooplate</p>
                        </div>

                        <div className="col-md-12 col-sm-12 clearfix">
                            <div className="dash-line"></div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
