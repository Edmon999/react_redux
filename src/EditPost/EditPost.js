import { Button, Modal } from "react-bootstrap";
import styles from "./EditPost.module.css"
import DatePicker from "react-datepicker"
import { useDispatch} from "react-redux";
import { useState } from "react";
import { editPost } from "../Store/action";

export default function EditPost({post,handleClose}) {
   const [edit_Post,setEditPost] = useState(post)
   const [date, setDate] = useState(post.date)
   const dispatch = useDispatch()
    const handleChangeTitle = (e) => {
         setEditPost({
           ...edit_Post,
           title: e.target.value
         })
    }
    const handleChangeDescription = (e) => {
      setEditPost({
        ...edit_Post,
        description: e.target.value
      })
    }
    
    const handleSave = () => {
      const editDate = new Date(date)
      const editedPost = {
        ...edit_Post,
        date: editDate.toLocaleDateString() , 
      }
      dispatch(editPost(editedPost))
    }
    return (
        <div>
        <Modal show={true} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            name="title" 
            type="text"
            className={styles.taskInput}
            onChange={(e) => handleChangeTitle(e)}
            defaultValue={post.title}
          />
          <textarea
            rows="5"
            placeholder="Description"
            onChange={(e) => handleChangeDescription(e)}
            name="description"
            defaultValue={post.description}
            className={styles.description}
          > 
          </textarea>
          <DatePicker 
            selected={date ? new Date(date) : new Date()}
            onChange={(date) => setDate(date)}
            minDate={new Date()}
          />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary"
              onClick={handleSave}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
}