import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import './firebase-config'
import Swal from 'sweetalert2'

export const Survey = () => {
    const [surveys, setSurveys] = useState([])
    const auth = getAuth()
    const user = auth.currentUser

    useEffect(() => {
        const fetchSurveys = async () => {
            const res = await axios.get('http://localhost:3500/surveys')
            console.log(res)
            setSurveys(res.data)
        }

        fetchSurveys()
    }, [])

    const forceLogin = () => {
        if (user == null) {
            Swal.fire({
                title: 'Please Sign In to Continue.',
                text: 'Click the button below to Sign In',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#2AC7BE',
                confirmButtonText: '<a href="/profile"> Sign In </a>',
                cancelButtonColor: '#d33',
                cancelButtonText: '<a href="/survey"> Cancel </a>'
            })
        }
    }

    return (
        <div>
            <section id="survey" className="parallex-section">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10 col-sm-12" >
                        </div>
                    </div>
                </div>
            </section>

            <section id="work-survey" className="parallax-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-sm-12">
                            <div className="wow fadeInUp section-title" data-wow-delay="0.2s" style={{ paddingTop: 8 }}>
                                <h2 >Survey Categories</h2>
                                <p>At iLearn, taking surveys is a piece of cake. Choose a category from below to begin!</p>
                            </div>
                        </div>

                        <div className="service" style={{ paddingBottom: 8 }}>
                            <div className="container">
                                <div className="row">
                                    {surveys.map((survey, index) => (
                                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.0s" key = {index}>
                                            <div className="service-item">
                                                <Link to={'/surveys/' + survey.category} onClick={forceLogin} className="nav-item nav-link active is-active" active-color="cyan">
                                                    <div className="service-icon">
                                                        <img src={survey.logo} alt={survey.category} width="150px" height="150px" />
                                                    </div>
                                                    <h3>{survey.category}</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Survey
