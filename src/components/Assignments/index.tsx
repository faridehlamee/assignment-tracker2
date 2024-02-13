
import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";

interface Assignment {
  title: string;
  completed: boolean;
}
interface AssignmentsProps {
  assignments: Assignment[];
  setAssignments: React.Dispatch<React.SetStateAction<Assignment[]>>;
}

export function Assignments({ assignments, setAssignments }: AssignmentsProps) {

  //const [assignmentToBeDeleted, setAssignmentToBeDeleted] = useState("");
  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{assignments.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{assignments.filter(assignment => assignment.completed).length} of {assignments.length}</span>
        </div>
      </header>            
      

      {
        assignments.map((assignment)=>(                  
          <div className={styles.list}>
            <Assignment assignment={assignment} setAssignments = {setAssignments}/>       
          </div>
        ))
           
        }

    </section>
  );
}
