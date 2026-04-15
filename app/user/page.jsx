import AddUserModal from "../components/AddUserModal";
import UsersTable from "../components/UsersTable";
import { getUser } from "../lib/data";

export const dynamic = "force-dynamic";


const UserPage = async () => {
  const users = await getUser();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Users: {users?.length}</h1>
        </div>

        <AddUserModal />
      </div>

      {/* Users Table */}
      <UsersTable users={users} />  
    </div>
  );
};

export default UserPage;
