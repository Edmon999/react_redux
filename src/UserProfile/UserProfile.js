import {useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

import { getUserInfo } from "../Store/action";
import styles from "./UserProfile.module.css";
import EditUserInfo from "../EditUserInfo/editUserInfo";

export default function UserProfile() {
    const dispatch = useDispatch();
    const {userInfo} = useSelector((state) => state.profile)
    useEffect(() => {
       const id = localStorage.getItem('id')
        dispatch(getUserInfo(id))
    }, []);
  return (
    <div className={styles.card}>
      <h1>
        {userInfo.first_name}  {userInfo.last_name}
      </h1>
      <div>
        <p>{userInfo.email}</p>
        <p>{userInfo.password}</p>
      </div>
      {userInfo ? <EditUserInfo /> : <>Loading...</>}
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
