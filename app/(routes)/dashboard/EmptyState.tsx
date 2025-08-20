import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import CreateInterviewDialog from '../_components/CreateInterviewDialog'

function EmptyState() {
  return (
    <div className='mt-14 flex flex-col items-center gap-5 border-dashed p-10 border-4 rounded-2xl bg-gray-100'>
        <Image src={'/dashboard.png'} alt='/emptyState'
          width={130}
          height={130}

        />
        <h2 className='mt-2 text-purple-950 text-lg font-medium'>You do not have any Interview Created</h2>
        <CreateInterviewDialog/>
    </div>
  )
}

export default EmptyState