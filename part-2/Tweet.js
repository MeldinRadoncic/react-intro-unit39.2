
const Tweet = (props) => {
    return (
        <div>
            <h3>{props.username}</h3>
            <ul>
                <li>Name: {props.name}</li>
                <li>Date: {props.date}</li>
                <li>Message: {props.message}</li>
            </ul>
        </div>
    )
}