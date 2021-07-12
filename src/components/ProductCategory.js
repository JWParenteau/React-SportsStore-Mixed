export default function ProductCategory (props) {
const handleClick = (event) => {
    console.log(`Event of type ${event.type} caused by ${event.target.id}`);
};

    return (
    <li>
        <button
        id={props.category}
        onClick={handleClick}>{props.category}
        </button>
    </li>
    );
}