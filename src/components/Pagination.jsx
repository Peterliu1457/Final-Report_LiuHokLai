import React, { useState } from 'react';

function Pagination({ totalPages }) {
    const [currentPage, setCurrentPage] = useState(1);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderPages = () => {
        let pages = [];

        if (totalPages <= 4) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => goToPage(i)}
                        className={`border px-3 py-1 ${
                            currentPage === i ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'
                        }`}
                    >
                        {i}
                    </button>
                );
            }
        } else {
            if (currentPage <= 2) {
                for (let i = 1; i <= 3; i++) {
                    pages.push(
                        <button
                            key={i}
                            onClick={() => goToPage(i)}
                            className={`border px-3 py-1 ${
                                currentPage === i ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'
                            }`}
                        >
                            {i}
                        </button>
                    );
                }
                pages.push(<span key="dots1" className="px-3 py-1">...</span>);
                pages.push(
                    <button
                        key={totalPages}
                        onClick={() => goToPage(totalPages)}
                        className={`border px-3 py-1 ${
                            currentPage === totalPages ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'
                        }`}
                    >
                        {totalPages}
                    </button>
                );
            } else if (currentPage >= totalPages - 1) {
                pages.push(
                    <button
                        key={1}
                        onClick={() => goToPage(1)}
                        className={`border px-3 py-1 ${
                            currentPage === 1 ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'
                        }`}
                    >
                        1
                    </button>
                );
                pages.push(<span key="dots2" className="px-3 py-1">...</span>);
                for (let i = totalPages - 2; i <= totalPages; i++) {
                    pages.push(
                        <button
                            key={i}
                            onClick={() => goToPage(i)}
                            className={`border px-3 py-1 ${
                                currentPage === i ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'
                            }`}
                        >
                            {i}
                        </button>
                    );
                }
            } else {
                pages.push(
                    <button
                        key={1}
                        onClick={() => goToPage(1)}
                        className={`border px-3 py-1 ${
                            currentPage === 1 ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'
                        }`}
                    >
                        1
                    </button>
                );
                pages.push(<span key="dots3" className="px-3 py-1">...</span>);
                pages.push(
                    <button
                        key={currentPage}
                        onClick={() => goToPage(currentPage)}
                        className={`border px-3 py-1 bg-blue-800 text-white`}
                    >
                        {currentPage}
                    </button>
                );
                pages.push(<span key="dots4" className="px-3 py-1">...</span>);
                pages.push(
                    <button
                        key={totalPages}
                        onClick={() => goToPage(totalPages)}
                        className={`border px-3 py-1 ${
                            currentPage === totalPages ? 'bg-blue-800 text-white' : 'bg-white text-blue-800'
                        }`}
                    >
                        {totalPages}
                    </button>
                );
            }
        }

        return pages;
    };

    return (
        <div className="flex items-center space-x-2">
            <span className="text-gray-500">共{totalPages}页</span>
            <button
                onClick={prevPage}
                className="border px-3 py-1 text-gray-400"
                disabled={currentPage === 1}
            >
                &lt;
            </button>
            {renderPages()}
            <button
                onClick={nextPage}
                className="border px-3 py-1 text-gray-400"
                disabled={currentPage === totalPages}
            >
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
