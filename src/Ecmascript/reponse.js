export const findLongestWord = (tab) => 
tab.reduce((prev, curr) => prev.length < curr.length ?

console.log(`${curr} : ${curr.length}` ): console.log(`${prev} : ${prev.length}` ));







export const totalMarks=(tab)=>{
    console.log(tab);
  return  tab.map((e)=>{
        e.marks < 50 && (e.marks+=15 )
        return e
    }).filter((obj)=>obj.marks>50).reduce((acc,curr)=>
      acc + curr.marks
    ,0)
}

export function countDistinct(arrays) {
    return arrays.flat().reduce((counts, element) => {
        counts[element] = (counts[element] || 0) + 1;
        return counts;
    }, {});
}
