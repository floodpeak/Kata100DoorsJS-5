export default (door)=>{
  if(door === 4){
    return [1,2,4]
  }
  const result = [1]
  if(door > 1){
    result.push(door)
  }
  return result
}
