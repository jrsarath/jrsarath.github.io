import './assets/scss/app.scss'

const App: React.FC = () => {
    const handleOnClick = () => {
        window.open("mailto:jrsarath@outlook.com")
    }
    return (
        <div className="wrapper">
            <div className="name" onClick={handleOnClick}>
                <h1 className="content">Sarath Singh</h1>
                <h1 className="overlay">DELTA</h1>
            </div>
        </div>
    )
}

export default App;
