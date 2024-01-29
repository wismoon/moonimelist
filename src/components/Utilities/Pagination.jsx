import React from 'react'

const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }
    const handleNextPage = () => {
        setPage((nextState) => nextState + 1)
        scrollTop()
    }
  return (
    <div className='flex justify-end items-end gap-2 py-4 px-2 text-color-electricBlue'>
        {page <= 1 ? null :
            <button 
                className="transition-all hover:text-color-secondary"
                onClick={handlePrevPage}
                >Prev</button>
        }
        <p>{page} of {lastPage}</p>
        {page >= lastPage ? null :
            <button 
                className="transition-all hover:text-color-secondary"
                onClick={handleNextPage}
                >Next</button>
        }
    </div>
  )
}

export default Pagination