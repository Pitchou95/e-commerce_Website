import React from 'react' ;
import ReactPaginate from 'react-paginate' ;

function Pagination() {
    const handlePageClick = () => {}
  return (

    <div className='d-flex justify-content-center align-items-center m-3'>
        <ReactPaginate
        breakLabel='...' 
        nextLabel="Next"
        onPageChange={handlePageClick} 
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={100}
        previousLabel="Prev"
        containerClassName='pagination justify-content-centre align-items-center p-3'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        previousClassName='page-item'
        nextClassName='page-item'
        previousLinkClassName='page-link'
        nextLinkClassName='page-link'
        breakClassName='page-item' 
        breakLinkClassName='page-link'
        activeClassName='active' />
    </div>
  )
}

export default Pagination ;