
export const getUser = async () => {
  const res = await fetch("http://localhost:7000/users");
  const data = await res.json();
  return data;
}

export const getSingleUser = async(id) =>{
  const res = await fetch(`http://localhost:7000/user/${id}`);
  const data = await res.json();
  return data;
}
