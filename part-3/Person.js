
const Person = (props) => {
    return (
        <div>
            <h1>PERSON</h1>
            <p>Learn some information about this person”</p>
            <p>{props.name.length >8 ? props.name.slice(0,6): props.name}</p>
            <h5>Age:{props.age}</h5>
            <p>{props.age >18 ? <h3>Please go vote</h3> : <h3>You must be 18</h3>}</p>
            <h5>Hobbies:</h5>
            <ul>
                {props.hobbies.map(h =><li>{h}</li>)}
            </ul>
        </div>
    )
}