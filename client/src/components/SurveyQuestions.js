import React, { useEffect, useState } from 'react'
import { SurveryComponents } from './SurveryComponents'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { user } from './firebase-config'

export const SurveyQuestions = () => {
    const params = useParams()
    const [surveys, setSurveys] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(6)

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = surveys.slice(indexOfFirstPost, indexOfLastPost)

    const flatten = (ary) => {
        let ret = []
        for (let i = 0; i < ary.length; i++) {
            if (Array.isArray(ary[i])) {
                ret = ret.concat(flatten(ary[i]))
            } else {
                ret.push(ary[i])
            }
        }
        return ret
    }

    const handleSubmit = async () => {
        const data = {
            images: currentPosts.map(survey => {
                const { isSelected } = survey
                if (!isSelected) return { ...survey, isSelected: false }
                return survey
            })
        }
        console.log(currentPosts)
        console.log(data.images)
        data.images.map(ans => (
            axios.post('http://localhost:3500/answers', ans)

        ))
        setCurrentPage(currentPage + 1)
    }

    useEffect(() => {
        const fetchSurveys = async () => {
            const res = await axios.get(`http://localhost:3500/surveys/${params.id}`)
            setCurrentPage(1)
            setSurveys(res.data.images)
        }
        fetchSurveys()
    }, [])

    return (
        <div>
            <section id="survey-questions" className="parallex-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-1 col-md-10 col-sm-12"></div>
                    </div>
                </div>
            </section>

            <section id="survey-work" className="parallax-section">
                <h2>Begin the survey</h2>
                <p>
                    Choose the images that you like the most.
                </p>
            </section>
            <SurveryComponents surveys={currentPosts} />
            <div className="flex-parent jc-center">
            <Link to="/survey">
                <button
                    className="submitbtn margin-right"
                    name="submit"
                    type="submit"
                // onClick={handleSubmit}
                >
                Exit Survey
                </button>
            </Link >
            <button
                className="nextbtn"
                name="next"
                type="next"
                onClick={handleSubmit}
            >
                Submit
            </button>
            </div>
        </div>
    )
}

export default SurveyQuestions
