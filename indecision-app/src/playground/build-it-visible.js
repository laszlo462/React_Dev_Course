const app = {
    title: 'Visibility Toggle' ,
    details: 'Oh look, details!'
}

const appRoot = document.getElementById("app");

let visibility = false

const toggle = () => {
    visibility = !visibility
    renderApp()
}

const renderApp = () => {
    const visibleApp = (
        <div>
        <h1>{app.title}</h1>
        <button onClick={toggle}>
        {visibility ? 'Hide details' : 'Show details'}
        </button>
        {visibility && (
            <div>
                <p>{app.details}</p>
            </div>
        )}
        </div>
    )
    ReactDOM.render(visibleApp, appRoot);
}

renderApp()