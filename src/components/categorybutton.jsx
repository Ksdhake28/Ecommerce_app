import { useNavigate } from "react-router-dom";

function categorybutton(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/categories")    
    }

    return(
        <div className="m-2 p-1">
            <button onClick={handleClick}  className="bg-blue-500 rounded-lg p-2 cursor-pointer">Explore Category</button>
        </div>
    );
}
export default categorybutton;