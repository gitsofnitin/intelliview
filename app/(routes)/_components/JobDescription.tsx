import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function JobDescription({onHandInputChange}:any) {

  

  return (
    <div className='border rounded-2xl p-10'>
      <div>
        <label>Job Title</label>
        <Input placeholder='Ex. Full Stack React Developer, AI engineer' 
        onChange={(event)=>onHandInputChange('jobTitle',event.target.value)}
        />
      </div>
      <div className='mt-6'>
        <label>Job Description</label>
        <Textarea placeholder='Enter or Paste Job Description' 
        className='h-[200px]'
         onChange={(event)=>onHandInputChange('jobDescription',event.target.value)}
         />
      </div>
    </div>
  )
}

export default JobDescription