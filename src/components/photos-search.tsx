import React from "react";
import SearchIcon from "../assets/icons/search.svg?react";
import { debounce } from "../helpers/utils";
import InputText from "./Input-text";


export default function PhotosSearch(){
  const [inputValue, setInputValue] = React.useState("");

  const debouncedSetValue = React.useCallback(
    debounce((value: string)=> console.log("valor: ", value), 200),
  []);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>){
    const value = e.target.value;
    
    setInputValue(value);
    debouncedSetValue(value);
  }

  return(
    <InputText 
      icon={SearchIcon} 
      placeholder="Buscar foto"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}