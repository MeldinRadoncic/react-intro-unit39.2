
const App = () => {
    return (
        <div>
           <FirstComponent/> 
           <NamedComponent name='Springboard'/>
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))