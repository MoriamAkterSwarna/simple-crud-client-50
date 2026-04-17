"use client";

import { Button, Input, Modal, Form } from "@heroui/react";
import { useRouter } from "next/navigation";


const AddUserModal = () => {
  const router = useRouter()
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const role = e.target.role.value;

    

    const newUser = { name, email, role };

    await fetch("https://simple-crud-server-m50.vercel.app/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        router.refresh()
      });
  };

  return (
    <>
      <Modal>
        <Button variant="secondary">+ Create User</Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-90">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Add New User</Modal.Heading>
              </Modal.Header>
              <Form onSubmit={handleSubmit}>
                <Modal.Body className="flex flex-col gap-4 ">
                  <Input placeholder="Name" type="text" name="name" required />
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <Input placeholder="Role (optional)" name="role" />
                </Modal.Body>
                <Modal.Footer>
                  <Button type="submit" className="w-full" slot="close" >
                    Add User
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
};

export default AddUserModal;
