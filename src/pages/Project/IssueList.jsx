import { DialogContent, DialogTitle, DialogTrigger } from '../../components/ui/dialog'
import { Dialog, DialogHeader } from '../../components/ui/dialog'
import IssueCard from './IssueCard'
import { PlusIcon } from 'lucide-react'

const IssueList = ({ title, status }) => {
  return (
    <>
      <Dialog>
        <Card className="w-full md:w-[300px] lg:w-[310px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="px-2">
            <div className='space-y-2'>
              {[1,1,1].map(item => <IssueCard key={item} />)}
            </div>
          </CardContent>
          <CardFooter>
            <DialogTrigger>
              <Button variant="outline" className="w-full flex items-center gap-2">
              <PlusIcon/>
                Create Issue
              </Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <CreateIssueForm/>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default IssueList