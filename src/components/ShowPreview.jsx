const ShowPreview = ({
  formState,
  setShowPreview,
  getImagePreview,
  handleSubmit,
}) => {
  const { name, description, price, category, image } = formState.inputs;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-white dark:bg-[#0f0f1e] w-full max-w-md mx-auto p-6 rounded-xl border border-[#ff4d00]/40 shadow-lg relative text-gray-900 dark:text-[#fff8e7]">
        <h2 className="text-2xl font-[Orbitron] mb-4 text-[#ff4d00] text-center">
          Preview Pizza
        </h2>

        <div className="space-y-3">
          <div>
            <label className="text-sm font-semibold">Name:</label>
            <p className="text-base">{name.value}</p>
          </div>

          <div>
            <label className="text-sm font-semibold">Description:</label>
            <p className="text-base">{description.value}</p>
          </div>

          <div className="flex justify-between gap-4">
            <div>
              <label className="text-sm font-semibold">Price:</label>
              <p>₱{price.value}</p>
            </div>
            <div>
              <label className="text-sm font-semibold">Category:</label>
              <p>{category.value}</p>
            </div>
          </div>

          {image.value && (
            <div className="mt-4">
              <label className="text-sm font-semibold">Image Preview:</label>
              <img
                src={getImagePreview(image.value)}
                alt="Pizza preview"
                className="w-full h-48 object-contain rounded border border-[#ff4d00]/30 mt-1"
              />
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setShowPreview(false)}
            className="px-4 py-2 text-sm rounded bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-gray-800 dark:text-white"
          >
            Edit
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 text-sm rounded bg-[#ff4d00] hover:bg-[#e94300] text-white font-semibold shadow"
          >
            Confirm Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowPreview;
