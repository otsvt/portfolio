export const ButtonMenu = ({ toggleMenu, resetForm }) => {
  return (
    <div>
      <div className="flex justify-between items-center gap-10">
        <button
          onClick={() => {
            toggleMenu();
            resetForm();
          }}
          className="ml-auto group flex flex-col gap-1 cursor-pointer p-2 rounded"
        >
          <span className="w-9 h-1 bg-[#5E5E5E] group-hover:bg-[#A2A2A2] transition-colors rounded"></span>
          <span className="w-9 h-1 bg-[#5E5E5E] group-hover:bg-[#A2A2A2] transition-colors rounded"></span>
          <span className="w-9 h-1 bg-[#5E5E5E] group-hover:bg-[#A2A2A2] transition-colors rounded"></span>
        </button>
      </div>
    </div>
  );
};
