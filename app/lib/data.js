
export const getUser = async() =>{
      const usersData = await fetch("http://localhost:7000/users")
  const res = await usersData.json() 
  return res; 
}
