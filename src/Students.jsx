import {useEffect,useState} from 'react'
import axios from 'axios'

function Students() {
    const [students,setStudents] = useState([])

    useEffect(() => {
      axios.get('https://omar-class-api.adaptable.app/students')
      .then((student)=>{
        setStudents(student.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    
  
    }, [])
    
  return (
    <div>
        {students.map((student)=>{
            return(
                <div key={student.id}>
                    <h1>{student.name}</h1>
                </div>
            )
        })}
    </div>
  )
}

export default Students