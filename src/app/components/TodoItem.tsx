import styles from '../main.module.css';

type TodoItemProps = {
  id: string;
  title: string;
  complete: Boolean;
};

export default function TodoItem({ id, title, complete }: TodoItemProps) {
  return (
    <li className={styles.todoItem}> 
      <input id={id} type="checkbox" className={styles.todoItem} /> 
      <label htmlFor={id} className={styles.todoItem}> 
        {title}
      </label>
    </li>
  );
}
