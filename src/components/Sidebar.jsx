import { PanelLeft } from 'lucide-react';

function Sidebar(){

    return(
        <div className="w-48 h-dvh py-6 bg-gray-900 text-white font-display text-center">
            <h2 className="text-xl">Explore Categories</h2>
            <ul className="mt-2 text-lg">
                <li >Electronics</li>
                <li>Sports</li>
                <li>Food</li>
            </ul>
        </div>
    );
}

export default Sidebar;