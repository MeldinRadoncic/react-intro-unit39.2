
const App = () => {
    return (
        <div>
        <Person age={25} name='Meldin' hobbies = {['Coding','Problem Solving','Raspberry Pi']}/>
        <Person age={15} name='Springboard' hobbies = {['Running','Swimming','Soccer']}/>
        <Person age={50} name='Paul' hobbies = {['Music','Movies','Basketball']}/>

        </div>


    )
}

ReactDOM.render(<App/>,document.getElementById('root'))