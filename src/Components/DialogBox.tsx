import { Button ,Link} from '@mui/material'
import React, { useState } from 'react'

const DialogBox:React.FC = () => {
    const [open,setopen]=useState<string>('Delete')
   
  return (
    <>

    <Button  onClick={()=>setopen('deleted')} variant='contained'>
        {open}
    </Button><br/><br/>
    <Link  component='button' underline='none' sx={{Padding:'20px'}}  onClick={()=>{
      console.log(alert('i am simple button'))
    }}>
  {'Registration'}
  </Link>
    </>
  )
}

export default DialogBox