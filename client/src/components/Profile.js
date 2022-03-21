import React, { useState, useEffect } from 'react'
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { Link } from 'react-router-dom'

function Profile () {
    const auth = getAuth()
    const userNew = auth.currentUser
    const [user, setUser] = useState(null)

    const signOutWithGoogle = () => {
        signOut(auth).then((re) => {
            console.log(re)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((re) => {
                // console.log(re)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            const user = {
                uid: userAuth.uid,
                name: userAuth.displayName,
                photo: userAuth.photoURL
            }
            if (userAuth) {
                console.log('userAuth', userAuth)
                setUser(user)
             } else {
                setUser(null)
            }
        })
        return unsubscribe
    }, [])

    if (user) {
        return (
            <div>
                <section id="profile" className="parallex-section"></section>
                {/* <!-- PROFILE DETAIL SECTION --> */}
                <section id="profile_detail" className="parallax-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                                    <img src={userNew.photoURL} alt="User Profile Picture" className='profile-wrapper'/>
                                    <h2><b>{userNew.displayName}</b></h2>
                                    <p>{userNew.email}</p>
                                    <Link to="/"><button className="signOutbtn" name="signOut" onClick={signOutWithGoogle}>Sign Out</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    } else {
        return (
            <div>
                <section id="profile" className="parallex-section"></section>
                {/* <!-- PROFILE DETAIL SECTION --> */}
                <section id="profile_detail" className="parallax-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="wow fadeInUp section-title" data-wow-delay="0.6s">
                                    <div className='profile-wrapper'></div>
                                    <h4>Be a part of Our Community</h4>
                                    <p></p>
                                    <button className="signInbtn" name="signIn" onClick={signInWithGoogle}>Sign In With Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Profile
