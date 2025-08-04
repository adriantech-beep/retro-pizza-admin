import { useState } from "react";
import { useUpdateUser } from "../users/useUpdateUser";

const EditUserModal = ({ user = [], onCloseModal }) => {
  const { id, email: initialEmail, role: initialRole } = user;

  const [email, setEmail] = useState(initialEmail);
  const [role, setRole] = useState(initialRole);
  const [avatar, setAvatar] = useState(null);

  const { mutate: updateUser, isPending } = useUpdateUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("role", role);
    if (avatar) formData.append("avatar", avatar);

    updateUser({ id, data: formData });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-[#0f0f1e] border border-[#ff4d00]/30 text-white rounded-xl p-6 w-full max-w-md shadow-lg animate-fadeIn">
        <h2 className="text-xl font-bold text-[#ff4d00] mb-4">Edit User</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Role</label>
            <select
              className="w-full px-3 py-2 bg-gray-800 text-white rounded border border-gray-600"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Avatar (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="block w-full text-sm text-gray-300"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => onCloseModal?.()}
              className="px-4 py-2 rounded border border-gray-500 hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="px-4 py-2 rounded bg-[#ff4d00] hover:bg-[#e94300] font-semibold"
            >
              {isPending ? "Updating..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;
