"use client"

import {
  Card,
  Input,
  Button,
  Spinner,
  Form,
} from "@heroui/react";
import { useRouter } from "next/navigation";
export default function UpdateCard({user, id}) {

  const router = useRouter()

  const onSubmit =(e) =>{
     e.preventDefault();
    
        const name = e.target.name.value;
        const email = e.target.email.value;
        const role = e.target.role.value;
    
      const updatedUser = {
        name,
        email,
        role,
      }; 

      fetch(`http://localhost:7000/updateUser/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("User updated:", data);
          router.refresh()
        })
        
        

  }

    return (
      <div className=" max-w-3xl mx-auto mt-4 ">
         <Card >
        <Card.Header className="p-6 pb-2">
          <div>
            <h1 className="text-2xl font-bold">Edit User</h1>
            <p className="text-default-500 text-sm mt-1">
              ID: <span className="font-mono text-xs">{id}</span>
            </p>
          </div>
        </Card.Header>
        <Card.Content className="p-6 pt-4 flex flex-col gap-4">
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <Input
          name="name"
            placeholder="John Doe"
              aria-label="Name"
            defaultValue={user?.name || ""}
            
          />
          <Input
            type="email"
            name="email"
            placeholder="john@example.com"
              aria-label="Email"
            defaultValue={user?.email || ""}
           
          />
          <Input
          name="role"
            placeholder="admin, user, editor…"
              aria-label="Role"
            defaultValue={user?.role || ""}
            
          />

         

          <div className="flex gap-3 pt-2">
            <Button
                variant="secondary"
              onPress={() => router.push("/user")}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
                variant="primary"
            
              type="submit"
              className="flex-1"
            >
              Save Changes
            </Button>
          </div>
          </Form>
        </Card.Content>
      </Card>
      </div>
    );
    };