import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import PropTypes from 'prop-types';

const MyPagination = ({ currentPage, handlePageChange }) => {
  const axiosPublic = useAxiosPublic();
  const itemPerPage = 6 ;

  const { data: productsCount } = useQuery({
    queryKey: ["totalProduct"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/productCount");  
        const count= res.data;  
        return count !== undefined ? { count } : {};
      } catch {
        return {};
      }
    }
  });
  const count =  productsCount?.count?.count ;
  const numberOfPages = Math.ceil(count / itemPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center dark:bg-gray-800 w-full">
      <div className="flex items-center justify-center">
        <div className="py-3 border rounded-lg dark:border-gray-600">
          <ol className="flex items-center text-sm text-gray-500 divide-x rtl:divide-x-reverse divide-gray-300 dark:text-gray-400 dark:divide-gray-600">
            <li>
              <button
                type="button"
                className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
                aria-label="Previous"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <svg
                  className="w-5 h-5 rtl:scale-x-[-1]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            {pageNumbers?.map((page) => (
              <li key={page}>
                <button
                  type="button"
                  className={`relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none transition text-yellow-600 ${
                    page === currentPage
                      ? 'bg-yellow-500/10 ring-2 ring-yellow-500'
                      : 'hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5'
                  }`}
                  onClick={() => handlePageChange(page)}
                >
                  <span>{page}</span>
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="relative flex items-center justify-center font-medium min-w-[2rem] px-1.5 h-8 -my-3 rounded-md outline-none hover:bg-gray-500/5 focus:bg-yellow-500/10 focus:ring-2 focus:ring-yellow-500 dark:hover:bg-gray-400/5 transition text-yellow-600"
                aria-label="Next"
                disabled={currentPage === numberOfPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <svg
                  className="w-5 h-5 rtl:scale-x-[-1]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

MyPagination.propTypes = {
  handlePageChange : PropTypes.func ,
  currentPage : PropTypes.number,
}

export default MyPagination;
