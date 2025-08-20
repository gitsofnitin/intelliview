import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import JobDescription from './JobDescription'
import ResumeUpload from './ResumeUpload'
import { DialogClose } from '@radix-ui/react-dialog'

function CreateInterviewDialog() {

    const [formData,setFormData] = useState<any>();

   const onHandInputChange = (field:string,value:string)=>{
     setFormData((prev:any)=>({
        ...prev,
        [field]:value}))
   }

    return (
        <Dialog>
            <DialogTrigger>

                <Button>+ Create Interview</Button>
            </DialogTrigger>

            <DialogContent className='min-w-3xl' >
                <DialogHeader>
                    <DialogTitle className='font-medium'>Please Submit Following Details.</DialogTitle>
                    <DialogDescription>
                        <Tabs defaultValue="resume-upload" className="w-full mt-2">
                            <TabsList>
                                <TabsTrigger value="resume-upload">Resume Upload</TabsTrigger>
                                <TabsTrigger value="job-description">Job Description</TabsTrigger>
                            </TabsList>
                            <TabsContent value="resume-upload"><ResumeUpload/></TabsContent>
                            <TabsContent value="job-description"><JobDescription onHandInputChange={onHandInputChange}/></TabsContent>
                        </Tabs>

                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className='flex gap-4'>
                    <DialogClose>
                        <Button variant={'ghost'}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button>
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default CreateInterviewDialog