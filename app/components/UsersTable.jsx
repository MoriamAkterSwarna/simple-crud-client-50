"use client";
import { Table, Button, Chip } from "@heroui/react";
import { getUser } from "../lib/data";
import { useRouter } from "next/navigation";
import Link from 'next/link'

const UsersTable = ({ users }) => {
  const router = useRouter()

const handleDelete= async(id) =>{

  fetch(`http://localhost:7000/user/${id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then( async (data) => {
   
    if(data.deletedCount > 0){
      alert("User deleted successfully")
       router.refresh()
     await getUser()
    }
  })
  
}



  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Users table">
          <Table.Header>
            <Table.Column isRowHeader>NAME</Table.Column>
            <Table.Column>EMAIL</Table.Column>
            <Table.Column>ROLE</Table.Column>
            <Table.Column>ACTIONS</Table.Column>
          </Table.Header>
          <Table.Body>
            {users.map((user) => (
              <Table.Row key={user._id}>
                <Table.Cell className="font-medium">{user.name}</Table.Cell>
                <Table.Cell className="text-default-500">
                  {user.email}
                </Table.Cell>
                <Table.Cell>
                  {user.role ? (
                    <Chip size="sm" variant="soft" color="accent">
                      {user.role}
                    </Chip>
                  ) : (
                    <span className="text-default-400 text-sm">—</span>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <div className="flex gap-2">
                    <Link href={`/user/${user._id}`} size="sm" variant="primary" className="px-4 py-1 border-2 rounded-full">
                      Details
                    </Link>
                    
                    <Link href={`/user/${user._id}`} size="sm" className="px-4 py-1 border-2 rounded-full bg-green-600" variant="secondary">
                      Edit
                    </Link>
                    {/* DELETE */}
                    <Button onPress={() => handleDelete(user?._id)} size="sm" variant="danger">
                      Delete
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default UsersTable;
