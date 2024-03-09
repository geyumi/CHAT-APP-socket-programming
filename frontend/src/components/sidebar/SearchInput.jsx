

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" placeholder="Search_" className="input input-bordered rounded-full"></input>
        <button type="submit" className=" btn btn-circle bg-sky-600 text-white ">
            Icon
        </button>
    </form>
  )
}

export default SearchInput