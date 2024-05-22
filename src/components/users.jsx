import { getItems} from "../redux/selectror";
import { useSelector } from "react-redux";

export const UsersList=({onClick})=>{

    const items = useSelector(getItems);
return (
    <div>
    {items.items.map((item) => (
        <div id={item.id} key={item.id}>
            <p>Name: {item.name}</p>
            <p>Number: {item.number}</p>
            <button onClick={onClick} >Delete</button>
        </div>
    ))}
</div>
)
}