import { useState, useCallback } from "react";
import { useUsers } from "./useUsers";
import { useNavigate } from "react-router-dom";
import { useDeleteUser } from "./useDeleteUser";

import Loader from "../components/Loader";
import UserCard from "./UserCard";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import EditUserModal from "./EditUsersModal";
import ModalWindow from "../components/ModalWindow";

const UserManagement = () => {
  const { users = [], isLoading } = useUsers();
  const { mutate: deleteUser } = useDeleteUser();
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(selectedUser);

  const handleDeleteClick = useCallback(
    (user) => {
      navigate(`/users/delete/${user?.id}`);
      setSelectedUser(user);
    },
    [navigate]
  );

  const handleEditClick = useCallback(
    (user) => {
      navigate(`/users/edit/${user?.id}`);
      setSelectedUser(user);
    },
    [navigate]
  );

  if (isLoading) return <Loader />;

  if (!users) return <div>No data found</div>;

  return (
    <ModalWindow>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-[#ff4d00] mb-4">
          User Management
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {users?.length === 0 && (
            <p className="text-gray-400">No users found.</p>
          )}

          {users?.map((user) => (
            <UserCard
              key={user?.id}
              user={user}
              onEditClick={handleEditClick}
              onDeleteClick={handleDeleteClick}
            />
          ))}
        </div>
        <ModalWindow.Window name="delete-user">
          <ConfirmDeleteModal
            item={selectedUser}
            identifierKey="email"
            onConfirmDelete={(selectedUser) => deleteUser(selectedUser?.id)}
          />
        </ModalWindow.Window>

        <ModalWindow.Window name="edit-user">
          <EditUserModal user={selectedUser} />
        </ModalWindow.Window>
      </div>
    </ModalWindow>
  );
};

export default UserManagement;
