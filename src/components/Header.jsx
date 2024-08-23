import '../App.css'; // Importing the App.css file

export default function Header(props) {
    return (
        <header>{props.children}</header>
    )
}