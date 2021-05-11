import Badge from 'react-bootstrap/Badge';
import Toast from 'react-bootstrap/Toast';

export default function ToDoItem(props)
{
    const { todo } = props;

    const pillText = todo.completed ? 'Complete' : 'Pending';
    const pillVariant = todo.completed ? 'danger' : 'success';

    return (
        <Toast>
            <Toast.Header>
                <Badge pill variant={pillVariant}>{pillText}</Badge>
                <strong class="ml-2 mr-auto">{todo.assignedTo}</strong>
            </Toast.Header>
            <Toast.Body>
                {todo.title}
                <div className="text-right">
                    <small>Difficulty: {todo.difficulty}</small>
                </div>
            </Toast.Body>
        </Toast>
    )
}