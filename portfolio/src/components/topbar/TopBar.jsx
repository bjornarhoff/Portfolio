import "./topbar.scss"

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="leftside">
                    <a href="#introduction" className="logo">.portfolio</a>
                </div>

                <div className="rightside">
                    <a href="#contact" className="link">Contact me</a>
                </div>
            </div>
        </div>
    )
}
