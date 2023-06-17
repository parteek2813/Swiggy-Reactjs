
export function filter(searchtext, restraunts){
    const filterData= restraunts.filter(
        (restaurant)=> restaurant?.data?.name?.toLowerCase()?.includes(searchtext?.toLowerCase())
    );
    return filterData;
}