import React from "react";
import AddUserModal from "../componets/AddUserModal";

const UserPage = () => {


  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8"> 
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Users</h1>
        </div>
       

            <AddUserModal />
        
      </div>
    </div>
  );
};

export default UserPage;
