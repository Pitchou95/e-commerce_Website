import React from 'react'
import { Link } from 'react-router-dom';


const SubTitle = ({title , btntitle , linkPath}) => {
  return (
    <div>
       <div className='d-flex justify-content-between align-items-center p-3'>
          <div className='sub-tile'>{title}</div>
          {
            btntitle ? (
                <Link to={linkPath} style={{textDecoration:'none'}} >
                    <div className='shopping-now'>{btntitle}</div>
                </Link>
            ) : (null)
          }
       </div>
    </div>
  )
}

export default SubTitle ;