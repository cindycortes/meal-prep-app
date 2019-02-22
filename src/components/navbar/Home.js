import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'

class Home extends Component {
    routeChange() {
        this.props.history.push('/phaselist')
    }
    render() {

        var styles = {
            backgroundImage: "url('https://www.castlighthealth.com/wp-content/uploads/2018/03/HealthyFood.jpg')",
            width: "100%",
            padding: "200px"
        }

        return (

            <div className="container">
                <Jumbotron style={styles}>
                    <h1 className="display-3"></h1>

                </Jumbotron>

                <div className="row" style={{ marginTop: "50px" }}>

                    <p>Obesity is a chronic disease that requires ongoing effort and permeant lifestyle changes. Bariatric
                    surgery is not a cure nor is it to be considered a “one and done” approach to treating obesity. Weight
                    loss surgery is a simply a tool to help you achieve a healthier weight and lifestyle.
                    In order to have a successful long-term outcome, it is necessary to make a number of permanent
                    lifestyle changes. You will need to change your eating habits, behaviors, mindset, stress management
                    strategies, and physical activity. While the nutrition plan is one of the most important parts of this
                journey but it is not the only component to success. Establishing healthy self-care habits is the key.</p>

                    <p className="center">“A journey of a thousand miles begins with a single step.” ~Lao Tzu</p>
                </div>

                <div className="row">

                    <h4>Start Now!</h4><br />
                    <ul>
                        <li>Weight loss and optimal health is more than diet and exercise; it’s an accumulation of habits
                            that are integrated into your daily life.</li>
                        <li>The bariatric team expects you to start making small lifestyle changes now in
                        preparation for the surgery. Waiting for the pre op consults with the surgeon and
                            dietitian to get started sends the message you are not committed to the process.</li>
                        <li>The surgery only changes the size of your stomach; you have to do the rest to get the results
                            you want long term.</li>
                        <li>As you work through your Bariatric check list, begin to establish the healthy habitsthat will
                            make you successful.</li>
                        <li>The sooner you start, the more prepared you will be for the surgery, recovery, andfor the
                            rest of your life.</li>
                        <li>Certain things will change once you have surgery; such as food intake, separating fluids from meals, but the fundamentals are the same: healthy habits create a healthy body and life. </li>

                    </ul>

                </div>

                <Button onClick={() => this.routeChange('/phaselist')}>Get Started! </Button>



            </div>
        )
    }
}


export default Home;