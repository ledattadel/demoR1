import React from 'react'
import { Empty, Button } from 'antd'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <Empty
    image={Empty.PRESENTED_IMAGE_SIMPLE}    
    imageStyle={{
      height: 60,
    }}
    description={
      <span>
        Page Not Found
      </span>
    }
  >
    
    <Button > <Link to='/'>Go to homepage </Link></Button>
  </Empty>
  )
}

export default index