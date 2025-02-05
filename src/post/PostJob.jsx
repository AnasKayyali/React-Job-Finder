import { React } from 'react'
import  Selecter  from '../libs/Selecter'
import { Input, notification } from 'antd' 
import { useStore } from '../store/useStore'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'


const PostJob = () => {

    const queryClient = useQueryClient() 

    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type,message,description) => {
      api[type]({
        message,
        description
      });
    };
    
    const item = useStore((state) => state.item);
    const name2 = useStore((state) => state.name2);
    const location2 = useStore((state) => state.location2);
    const salary = useStore((state) => state.salary);
    const text = useStore((state) => state.text);
    const text2 = useStore((state) => state.text2);
    const chText = useStore((state) => state.changeText);
    const chText2 = useStore((state) => state.changeText2);

    const { TextArea } = Input;

    const onChange = (e) => {
      chText(e.target.value);
    };

    const onChange2 = (e) => {
      chText2(e.target.value);
    };

    const mutation = useMutation(newJob => {
      return axios.post('https://job-finder-json-server.onrender.com/jobs', newJob)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('jobs')
      },
    }
    ) 

    const handlePost = () => {
      name2 === '' || name2 === undefined ? openNotificationWithIcon('error','Error','job title is empty, you should full it') : null
      location2 === '' || location2 === undefined ? openNotificationWithIcon('error','Error','job location is empty, you should full it') : null
      salary === '' || salary === undefined ? openNotificationWithIcon('error','Error','job salary is empty, you should full it') : null
      text === '' ? openNotificationWithIcon('error','Error','job description is empty, you should full it') : null    
      text2 === '' ? openNotificationWithIcon('error','Error','job requirements is empty, you should full it') : null    
      if((name2 !== '' && name2 !== undefined) && (location2 !== '' && location2 !== undefined) && (salary !== '' && salary !== undefined) && (text !== '') && (text2 !== '')) 
      { 
        mutation.mutate({name:name2,location:location2,salary:salary,date:"fresh",description:text,requirements:text2,imgsrc:"./assets/creative-job-hunter-vector-logo-design-template-vector-illustration_227744-685.avif"})
      }
      else
      { null }
    }

    const selecter1 = [
      {
        value: 'Front-End',
        label: 'Front-End',
      },
      {
        value: 'Back-End',
        label: 'Back-End',
      },
      {
        value: 'Full-Stack',
        label: 'Full-Stack',
      },
      {
        value: 'Flutter',
        label: 'Flutter',
      },
    ]

    const selecter2 = [
      {
        value: 'USA',
        label: 'USA',
      },
      {
        value: 'Germany',
        label: 'Germany',
      },
      {
        value: 'Finland',
        label: 'Finland',
      },
      {
        value: 'UAE',
        label: 'UAE',
      },
    ]

    const selecter3 = [
      {
        value: '1000$',
        label: '1000$',
      },
      {
        value: '2000$',
        label: '2000$',
      },
      {
        value: '3000$',
        label: '3000$',
      },
      {
        value: '4000$',
        label: '4000$',
      },
    ] 

  return (
    <>  
        {contextHolder}
        {mutation.isSuccess && openNotificationWithIcon('success','Success','Post is Completed')}
        {mutation.isError && openNotificationWithIcon('error','Error','Post is not Completed')}
        {mutation.isLoading && openNotificationWithIcon('info','Loading...','')}
        <div className="grid grid-cols-2 justify-items-stretch mt-14 gap-x-20 xs:grid-cols-1 md:grid-cols-2">
            <div className="bg-white drop-shadow-xl px-11 py-4">
                <div className='flex gap-x-4'>
                    Choose your Job Title:
                    <Selecter placeholder='Job Title' number={3} selecter={selecter1}/>
                </div>
                <br></br>
                <div className='flex gap-x-4'>
                    Choose your Job Location:
                    <Selecter placeholder='Job Location' number={4} selecter={selecter2}/>
                </div>
                <br></br>                
                <div className='flex gap-x-4'>
                    Choose your Job Salary: 
                    <Selecter placeholder='Job Salary' number={5} selecter={selecter3}/>
                </div>
                <br></br> 
                <br></br> 
                <div className='grid gap-y-4'>
                    Choose image for view:    Upload
                    <img className="w-48 border border-emerald-300" src="/assets/creative-job-hunter-vector-logo-design-template-vector-illustration_227744-685.avif"/> 
                </div>
            </div>
            <div className="bg-white drop-shadow-xl px-11 py-4">
                <div>
                    Enter Discription for your job :
                    <TextArea
                    style={{
                    height: 120,
                    marginBottom: 24,
                    marginTop: 24,
                    }}
                    onChange={onChange}
                    placeholder="can resize"
                    />
                </div>
                <div>
                    Enter Requirements (stack or skills) for your job :
                    <TextArea
                    style={{
                    height: 120,
                    marginBottom: 24,
                    marginTop: 24,
                    }}
                    onChange={onChange2}
                    placeholder="can resize"
                    />
                </div>
                <div className='flex justify-center'>
                  <button className="bg-blue-500 text-white px-16 py-2 mt-6 border border-transparent rounded-lg hover:bg-blue-600 duration-500" onClick={handlePost}> Post </button>
                </div>
            </div>
        </div>
    </>
  )
}


export default PostJob