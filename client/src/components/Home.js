import React from 'react'
import aboutImage from '../assets/images/about-image.jpg'
import surveyClip from '../assets/images/surveyClip.png'
import flower from '../assets/images/flower.png'
import woman from '../assets/images/woman.png'
import fruit from '../assets/images/fruit.png'
import { Link } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth'
import './firebase-config'

const Home = () => {
    const auth = getAuth()
    const user = auth.currentUser
    const signInWithGoogle = () => {
        if (user == null) {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
                .then((re) => {
                    console.log(re)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return (
        <div>
            <section id="home" className="parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10 col-sm-12">
                            <div className="home-wrapper">
                                <h3 className="wow fadeInUp" data-wow-delay="0.4s">Image Survey</h3>
                                <br></br>
                                <h1 className="wow fadeInUp" data-wow-delay="0.6s">iLearn : A new survey panel with daily online surveys</h1>
                                {/* <Link to="#about" className="wow fadeInUp smoothScroll arrow-btn" data-wow-delay="1s"><i className="fa fa-angle-double-down"></i></Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-8">
                            <img src={aboutImage} className="wow fadeInUp img-responsive" data-wow-delay="0.2s" alt="about image" />
                            <div className="wow fadeInUp" data-wow-delay="0.4s">
                                <h4>Interested to Join?</h4>
                                <Link to="/profile" style = { { padding: 10, background: '#2AC7BE' } } onClick={signInWithGoogle}>Sign In With Google</Link>
                            </div>
                        </div>

                        <div className="col-md-8 col-sm-12">
                            <div className="about-thumb">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                                    <h3>we make things better</h3>
                                    <h2>What is iLearn?</h2>
                                </div>
                                <div className="wow fadeInUp" data-wow-delay="0.8s">
                                    <p>Once upon a time, we had a dream....</p>
                                    <p>Then we woke up and made <b>iLearn!</b></p>
                                    <p>At iLearn, we have created a thriving community where anyone can sign up to our online survey platform and get rewards. We offer rewards for online surveys across all sorts of different categories.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="work" className="parallax-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                                <h2>Surveys</h2>
                                <p>At iLearn, taking surveys is a piece of cake. Start taking the survey by clicking at the menu above or <a href="/survey" style = { { color: '#2AC7BE' } }><b>Click here</b></a> to explore more and begin!</p>
                            </div>
                        </div>

                        <div className="service">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s">
                                        <div className="service-icon">
                                            <img src={woman} width="150px" height="150px" />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="service-icon">
                                            <img src={flower} alt="Electric Car" width="150px" height="150px" />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="service-icon">
                                            <img src={fruit} alt="Electric Car" width="150px" height="150px" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Service End  */}

            {/* CONTACT SECTION  */}
            <section id="contact" className="parallax-section">
                <div className="container">
                    <div className="col-md-12 col-sm-12">
                        <img src={surveyClip} className="wow fadeInUp img-responsive jc-center" data-wow-delay="0.2s" alt="about image" style={{ float: 'right' }} />
                    </div>

                    <div className="col-md-12 col-sm-12">
                        {/* SECTION TITLE */}
                        <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                            <h2>Go beyond collecting feedback</h2>
                            <p>Host your surveys on iLearn that can help drive change in your organisation.</p>
                        </div>
                    </div>

                    <div className="col-md-12 col-sm-12">
                        <div className="about-thumb">
                            <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                                <h3>Market Research</h3>
                                <p>Conduct market research quickly.</p>
                                <p>Expand your market research capabilities by finding images for you products packaging or ads based on target audience&apos;s preference.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
