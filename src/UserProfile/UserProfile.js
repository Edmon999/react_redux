import {useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { getUserInfo } from "../Store/action";
import styles from "./UserProfile.module.css";

export default function UserProfile() {
    const dispatch = useDispatch();
    const {userInfo} = useSelector((state) => state.profile)
    useEffect(() => {
       const id = localStorage.getItem('id')
        dispatch(getUserInfo(id))
    }, []);
  return (
    <div className={styles.card}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" />
        <Card.Body>
          <Card.Title> <h1>{userInfo.first_name}</h1></Card.Title>
          <Card.Text className={styles.text}>    
             <span className={styles.personInfo}>{"Personal info"}</span>    <br></br>
             {`Log - ${userInfo.email}`}
              <br></br>
              {`password - ${userInfo.password}`} 
          </Card.Text>
          <Button  variant="info">
           <Link to='/addPost'>Add Post</Link> 
            </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
// componentDidMount(){
//     const id = localStorage.getItem('id')
//     this.props.getUserInfo(id)
// }
//     render(){
//         const {userInfo} = this.props
//           return(
//             <div className={styles.card}>
//                 <h1>{userInfo.first_name} {" "} {userInfo.last_name}</h1>
//                 <div>
//                     <p>{userInfo.email}</p>
//                     <p>{userInfo.password}</p>
//                 </div>
//                  {
//                     userInfo? <EditUserInfo />: <>Loading...</>
//                 }

//             </div>
//         )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//         userInfo: state.profile.userInfo
//     }
// }
// const mapDispatchToProps = {
//     getUserInfo,
// }
// export default connect(mapStateToProps,mapDispatchToProps)(UserProfile)
