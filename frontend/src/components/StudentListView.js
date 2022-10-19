import Student from './Student'

export default function StudentView(props) {
    return (
        <div>
            <ul>
                {props.studentList.map(student => <Student student={student} />)}
            </ul>
        </div>
    )
}