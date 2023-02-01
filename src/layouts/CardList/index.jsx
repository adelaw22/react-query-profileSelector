import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { MdOutlineCloudDownload } from 'react-icons/md'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { UserCard } from '../../components/UserCard'
import './CardList.css'

const CardList = () => {
  const { data } = useOutletContext()

  const [currentData, setCurrentData] = useState([])
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
    <div>
      {data?.map((item, i) => (
        <UserCard key={i} usersdata={item} />
      ))}

      <div className="footer-card my-4">
        <div className="download-wrapper">
          <button>
            <MdOutlineCloudDownload />
            Download Results
          </button>
        </div>

        <ReactPaginate
          nextLabel={<FiChevronRight />}
          onPageChange={handlePageClick}
          pageCount={pageCount}
          previousLabel={<FiChevronLeft />}
          renderOnZeroPageCount={null}
          className="card-pagination"
        />
      </div>
    </div>
  )
}

export default CardList
