import Card from "../components/productCard";
import SearchBar from "../components/Searchbar";
import Catbutton from "../components/categorybutton";

function Home(){

    return(
        <>
        <div className="flex justify-center items-center"> <SearchBar /> <Catbutton /> </div>
        <div className="flex flex-wrap justify-around">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />    
        </div>
        <div className="flex flex-wrap justify-around">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />    
        </div>
        </>
    );
}
export default Home;