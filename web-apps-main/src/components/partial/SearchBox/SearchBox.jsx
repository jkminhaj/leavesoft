import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className="relative flex items-center">
            <IoSearch className="mr-2"/>
            <input type="text" placeholder="Search here..." className="border p-2 rounded"/>
        </div>
    )
}

export default SearchBox;
