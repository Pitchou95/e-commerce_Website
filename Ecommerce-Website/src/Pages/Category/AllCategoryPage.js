import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Utility/Pagination'

function AllCategoryPage() {
  return (
    <div className='justify-content-center' style={{minHeight : '670px' }}>
      <CategoryContainer />
      <Pagination />
    </div>
  )
}

export default AllCategoryPage