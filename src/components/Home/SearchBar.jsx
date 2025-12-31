import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
        <nav className="flex justify-between wrapper  border-b border-gray-300 py-2 mb-4">
          <p className="text-xl ">Instruction Portal</p>
          <div className="flex gap-2 items-center border px-2 py-1 rounded-lg">
            <Search className="size-5 text-primary" />
            <input type="text" placeholder="Search" className="focus:outline-none" />
          </div>
        </nav>
  
  )
}

export default SearchBar