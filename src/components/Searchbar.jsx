import { Search } from 'lucide-react';

function SearchBar(){

    return(
        <div className='m-2 relative flex items-center w-full max-w-lg'>
        <input type="text" placeholder="Search for Product" className="w-full p-2 pr-10 border border-blue-500 rounded-full focus:border-2 border-blue-500" /><Search className='absolute right-3' size={20}/>
        </div>
    );
}
export default SearchBar;