import { useSearchParams,useNavigate,useLocation } from "react-router-dom";
import qs from 'query-string'
import { useCallback, useState,useEffect } from "react";

const Categorybox = ({ label, icon:Icon, description }) => {
    const [searchParams,setSearchParams] = useSearchParams();
    const [selected, setSelected] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.search);
    console.log(qs.parse(location.search).category);    

  const handleClick=useCallback((label)=>{
    const currentQuery = new URLSearchParams(searchParams);
      console.log("currentQuery>>",currentQuery);
    
      const updatedQuery = { ...currentQuery, category: label };
      console.log("updatedQuery>>",updatedQuery);
    
      if (searchParams.get('category') === label) {
        delete updatedQuery.category;
      }
    
      // Update the URL using the navigate function
      navigate({
        pathname: '/',
        search: new URLSearchParams(updatedQuery).toString(),
      });
    
  },[label,searchParams,navigate])


useEffect(() => {
    // Check the URL parameter and update the 'selected' state accordingly
    const categoryParam = qs.parse(location.search).category;
    setSelected(categoryParam === label);
  }, [location.search, label]);
    
  return (
    <div
    onClick={()=>{handleClick(label)}}
      className={`flex 
      flex-col 
      items-center 
      justify-center 
      gap-2 
      p-3 border-b-2 
      hover:text-neutral-800 
      transition 
      cursor-pointer
        ${selected? 'border-b-neutral-800':'border-transparent'}
        ${selected? 'text-neutral-800':'text-neutral-500'}
      `}
    >
      <Icon/>
      <div className="font-medium text-sm">
       {label}
      </div>

    </div>
  );
};

export default Categorybox;
