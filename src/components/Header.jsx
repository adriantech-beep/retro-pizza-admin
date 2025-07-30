import { getCurrentUser } from "../util/auth";
import "@fontsource/audiowide";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const currentUser = getCurrentUser();
  const { avatar, email } = currentUser;

  return (
    <header className="w-full md:col-span-5 flex flex-wrap justify-between items-center px-4 md:px-6 py-3 md:py-4 shadow-md bg-white dark:bg-[#1a1a2e] border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsSidebarOpen((prev) => !prev)}
        className="md:hidden  bg-[#ff4d00] text-white p-2 rounded shadow"
      >
        ☰
      </button>

      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
        />
      )}
      <h1 className="text-xl font-[Orbitron] font-bold text-[#ff4d00]">
        Retro<span className="text-black dark:text-white">Pizza Admin</span>
      </h1>

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-full sm:w-38 flex flex-col items-center justify-center text-center">
          <img
            src={avatar}
            alt="user-avatar"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
          />
          <p className="font-[Audiowide] text-[10px] sm:text-[12px] text-gray-700 dark:text-gray-300 truncate max-w-[100px] sm:max-w-none">
            {email}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
