import ModalWindow from "../components/ModalWindow";

const UserCard = ({ user, onEdit, handleDeleteClick }) => {
  const { email, role, avatar } = user;

  return (
    <div className="bg-[#0f0f1e] border border-[#ff4d00]/30 rounded-xl p-4 flex gap-4 items-center shadow">
      <img
        src={avatar}
        alt={email}
        className="w-16 h-16 rounded-full object-cover border border-[#ff4d00]/40"
      />
      <div className="flex-1">
        <p className="text-white font-medium">{email}</p>
        <p className="text-sm text-gray-400 capitalize">Role: {role}</p>
      </div>
      <div className="flex items-center gap-2">
        <ModalWindow.Open opens="edit-user">
          <button
            onClick={() => onEdit(user)}
            className="text-sm px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded text-white"
          >
            Edit
          </button>
        </ModalWindow.Open>
        <ModalWindow.Open opens="delete-user">
          <button
            onClick={() => handleDeleteClick(user)}
            className="text-sm px-3 py-1 bg-red-600 hover:bg-red-500 rounded text-white"
          >
            Delete
          </button>
        </ModalWindow.Open>
      </div>
    </div>
  );
};

export default UserCard;
