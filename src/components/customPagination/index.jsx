import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const CustomPagination = ({ data, setCurrentData }) => {
  const [pageCount, setPageCount] = useState(0)
  const [dataOffset, setDataOffset] = useState(0)
  const cardPerPage = 3

  useEffect(() => {
    const endOffset = dataOffset + cardPerPage
    setCurrentData(data?.slice(dataOffset, endOffset))
    setPageCount(Math.ceil(data?.length / cardPerPage))
  }, [dataOffset, cardPerPage, data])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * cardPerPage) % data?.length
    setDataOffset(newOffset)
  }

  return (
    <>
      <ReactPaginate
        nextLabel={<FiChevronRight />}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel={<FiChevronLeft />}
        renderOnZeroPageCount={null}
        className="card-pagination"
      />
    </>
  )
}

export default CustomPagination
