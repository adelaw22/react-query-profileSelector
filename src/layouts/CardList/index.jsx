import { useOutletContext } from 'react-router-dom'
import CsvDownloadButton from 'react-json-to-csv'
import { MdOutlineCloudDownload } from 'react-icons/md'
import { UserCard } from '../../components/UserCard'
import CustomPagination from '../../components/customPagination'
import './CardList.css'
import { useState } from 'react'

const CardList = () => {
  const { data, checked } = useOutletContext()
  const [currentData, setCurrentData] = useState(data)

  return (
    <div>
      {currentData?.map((item, i) => (
        <UserCard key={i} usersdata={item} checked={checked} />
      ))}

      <div className="footer-card my-4">
        <div className="download-wrapper">
          <CsvDownloadButton
            data={currentData}
            filename="Users&Details.csv"
            className="downloadBtn"
          >
            <MdOutlineCloudDownload />
            Download Results
          </CsvDownloadButton>
        </div>
        <CustomPagination data={data} setCurrentData={setCurrentData} />
      </div>
    </div>
  )
}

export default CardList
