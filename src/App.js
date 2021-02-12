import "./styles/Nav.css";

function App() {

    return (
        <div className="container">
            <div className="navigation">
                <a href="#">
                    <img
                        className="hn-logo"
                        src="/assets/logo.gif"
                        alt="hn logo"
                    />
                </a>
                <a href="#" className={"bold title"}>
                    Hacker News
                </a>
                <a href="#">new</a> |<a href="#">threads</a> |
                <a href="#">comments</a> |<a href="#">ask</a> |
                <a href="#">show</a> |<a href="#">jobs</a> |
                <a href="#">submit</a>
                <a href="#" className="login">
                    login
                </a>
            </div>
        </div>
    );
}
export default App;
