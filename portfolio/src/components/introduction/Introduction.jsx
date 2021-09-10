import "./introduction.scss"
import { Grid } from '@material-ui/core';

export default function Introduction() {
    return (
        <div className="introduction" id="introduction">
            <Grid item xs={6}>
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/me3.png" className="photo"></img>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="right">
                    <div className="content">
                        <h2>Welcome to my portfolio, I´m</h2>
                        <h1>Bjørnar Hoff</h1>
                        <h3>Computer engineer</h3>
                    </div>
                    <div className="icons">
                        <a href="https://www.facebook.com/bjornar.hoff">
                            <img src="assets/facebook.png"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/bj%C3%B8rnar-hoff-46b8a9166/">
                            <img src="assets/linkedin.png"></img>
                        </a>
                        <a href="https://www.instagram.com/bjornarhoff/">
                            <img src="assets/instagram.png"></img>
                        </a>
                        <a href="https://github.com/bjornarhoff">
                            <img src="assets/GitHub-Mark-32px.png"></img>
                        </a>
                    </div>
                </div>
            </Grid>
        </div>
    )
}
