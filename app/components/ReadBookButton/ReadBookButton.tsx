"use client";

const ReadBookButton = () => {
  const openPdf = () => {
    window.open("/books/books.pdf", "_blank");
  };

  return (
    <button
      onClick={openPdf}
      className="bg-[#2B2F36] mt-5 w-full py-2 rounded-xl cursor-pointer"
    >
      Read Book
    </button>
  );
};

export default ReadBookButton;