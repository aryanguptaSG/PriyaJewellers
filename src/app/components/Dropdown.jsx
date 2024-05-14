"use client"
import React ,{useState , useEffect} from 'react'

function Dropdown({
    list =[] , selected ="" , setSelected = ()=>{} , title ="" , className = ""
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredList, setFilteredList] = useState(list);
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
      setFilteredList(list);
      setSearchText("");
    }, [list , isOpen])

    useEffect(() => {
      searchTag();
    }, [searchText])

    const searchTag = ()=>{
      let latest = list;
      if(searchText){
        latest = latest.filter(item => item.toLowerCase().startsWith(searchText.toLowerCase()));
      }
      setFilteredList(latest);
    }
    
  return (
    <div className={`px-4 py-2 rounded-xl mt-2 cursor-pointer shadow-box w-fit ${className}`} >
      <div className='flex items-center space-x-5' onClick={() => setIsOpen(!isOpen)}>
        <div>{selected}</div>
         <div className={`${isOpen ? "rotate-90":""} text-sm`}>&#10095;</div>
    </div>
      {isOpen && (
        <div>
          <div>
            <input className='border rounded-lg my-2 w-full border-gray-400 px-2 py-1' type="text" name="dropdown-search" placeholder='search' value={searchText}onChange={(e)=>{setSearchText(e.target.value)}}/>
          </div>
          <div className='space-y-1 border-t-2 max-h-[200px] overflow-scroll' onClick={(e)=>{
              if(e.target.tagName === "P"){
                  setSelected(e.target.innerText);
                  setIsOpen(false)
              }
          }}>
            {
              filteredList.map((item,id)=>{
                  return <p className='hover:bg-gray-100 pl-1 rounded-md' key={id}>{item}</p>
              })
            }
            <p>{title}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dropdown;