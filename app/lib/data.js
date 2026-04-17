
export const getUser = async () => {
  const res = await fetch("https://simple-crud-server-m50.vercel.app/users");
  const data = await res.json();
  return data;
}

export const getSingleUser = async(id) =>{
  const res = await fetch(`https://simple-crud-server-m50.vercel.app/user/${id}`);
  const data = await res.json();
  return data;
}
