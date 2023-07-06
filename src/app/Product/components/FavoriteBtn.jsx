import React,{useState} from "react";
import {HiShoppingCart,HiOutlineHeart,HiHeart} from "react-icons/hi"

const FavoriteBtn = () => {
    const [favorite, setFavorite] = useState(false);

    // !! Toggle Favorite..
    const handleFavorite = () => {
      setFavorite(!favorite);
    }
    
  
  return (
    <>
      <button
        onClick={handleFavorite}
        className="grid h-8 w-8 place-items-center rounded-full bg-[#65646485] p-1 backdrop-blur-sm"
      >
        {favorite ? (
          <HiHeart className="text-2xl text-red-400" />
        ) : (
          <HiOutlineHeart className="text-2xl text-lime-100" />
        )}
      </button>
    </>
  );
};

export default FavoriteBtn;
