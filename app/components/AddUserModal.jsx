
"use client";

import { Button, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,Form } from "@heroui/react";

const AddUserModal = () => {

   const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value; 
    const email = e.target.email.value; 
    const role = e.target.role.value; 

    console.log(name,email,role )

    const newUser = {name, email, role} 

     await fetch("http://localhost:7000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    }).then((res) => res.json())
    .then(data => console.log(data))
    
   }
 

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
            <Form onSubmit={handleSubmit} >
            <Modal.Body className="flex flex-col gap-4 ">
              
              <Input  
                placeholder="Name"
                type="text"
                name="name"
                required
                
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                required
             
              />
              <Input
                placeholder="Role (optional)"
                name="role"
                
              />
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit"  className="w-full" >
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