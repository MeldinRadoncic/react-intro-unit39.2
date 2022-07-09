
const App = () => {
    return (
        <div>
        <Tweet username = 'Student' name='Meldin' date = '2022-07-10' message = 'We should learn TypeScript instead of Python'/>
        <Tweet username = 'Node.Js' name='Node' date = '2022-07-10' message = 'I love to use node for backend.'/>
        <Tweet username = 'Student' name='GraphQl' date = '2022-07-10' message = 'After Bootcamp I am going to learn TypeScript,Angular and GO'/>
        </div>


    )
}

ReactDOM.render(<App/>,document.getElementById('root'))