import { useState, useCallback } from "react";
import { useUsers } from "./useUsers";
import { useNavigate } from "react-router-dom";
import { useDeleteUser } from "./useDeleteUser";

import Loader from "../components/Loader";
import UserCard from "./UserCard";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import EditUserModal from "./EditUsersModal";

const UserManagement = () => {
  const { data, isLoading } = useUsers();
  const { users } = data ?? [];
  const { mutate: deleteUser } = useDeleteUser();
  const navigate = useNavigate();

  const [selectedUser, setSelectedUser] = useState(null);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDeleteClick = useCallback(
    (user) => {
      navigate(`/users/delete/${user?.id}`);
      setSelectedUser(user);
      setIsDeleteOpen(true);
    },
    [navigate]
  );

  const handleEditClick = useCallback((user) => {
    setSelectedUser(user);
    setIsEditOpen(true);
  }, []);

  const confirmDelete = () => {
    deleteUser(selectedUser, {
      onSuccess: () => {
        setIsDeleteOpen(false);
      },
    });
  };

  const closeModal = useCallback(() => {
    navigate("/users");
    setIsDeleteOpen(false);
  }, [navigate, setIsDeleteOpen]);

  if (isLoading) return <Loader />;

  if (!users) return <div>No data found</div>;

  return (
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
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        ))}
      </div>

      <ConfirmDeleteModal
        isOpen={isDeleteOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        productName={selectedUser?.email}
      />

      {isEditOpen && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setIsEditOpen(false)}
        />
      )}
    </div>
  );
};

export default UserManagement;
