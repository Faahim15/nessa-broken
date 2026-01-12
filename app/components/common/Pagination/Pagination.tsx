"use client";

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
}> = ({ currentPage, totalPages, onPageChange, siblingCount = 1 }) => {
  const getPages = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    const left = Math.max(currentPage - siblingCount, 1);
    const right = Math.min(currentPage + siblingCount, totalPages);

    let lastAdded = 0;

    for (let i = 1; i <= totalPages; i++) {
      const shouldShow =
        i === 1 || i === totalPages || (i >= left && i <= right);

      if (shouldShow) {
        if (lastAdded + 1 !== i) {
          pages.push("...");
        }
        pages.push(i);
        lastAdded = i;
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-x-4 mt-12">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 text-white/80! disabled:text-white/50! hover:text-white disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        Previous
      </button>

      {/* Pages */}
      <div className="flex items-center gap-x-2">
        {getPages().map((page, index) =>
          page === "..." ? (
            <span key={`dots-${index}`} className="text-white/80 px-2">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(Number(page))}
              className={`w-10 h-10 rounded-full transition-colors cursor-pointer ${
                page === currentPage
                  ? "bg-white text-black!"
                  : "text-white/80! hover:bg-gray-700"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 text-white/80! disabled:text-white/50! hover:text-white disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
