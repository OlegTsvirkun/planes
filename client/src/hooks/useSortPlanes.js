import { useState, useMemo} from "react";

import React from 'react'

export const useSortPlanes = (planes=[]) => {
    const [isDescSort, setIsDesSort] = useState(false);
    const sortedPlanes = useMemo(() =>{
        const sortablePlanes = [...planes];
        sortablePlanes.sort((a,b)=>{
            if(+a.price < +b.price)return isDescSort ? 1 :-1
            if(+a.price > +b.price)return isDescSort ? -1 :1
            return 0
        })
        return sortablePlanes
    } , [isDescSort,planes])
 return {
    isDescSort,
    setIsDesSort,
    sortedPlanes
 }
}
