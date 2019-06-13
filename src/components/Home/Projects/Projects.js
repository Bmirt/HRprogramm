import React, { Component } from "react";
import styles from "./Projects.module.css";
export default class Home extends Component {

  state={
    technologies:[]
}
  generateContent = (<div>not found</div>)
  componentDidMount(){
    const token = localStorage.getItem("token");
    fetch("http://laravel.local/api/get-projects", {
      headers: {
      "Content-Type": "applcation/json",
   Authorization: token
 }
})
 .then(res => res.json())
 .then(res =>this.setState({
    technologies:res.projects
}))
}



  render() {
    console.log(this.state)
        let generateContent = this.state.technologies.map((item)=>{
            return(
                <div className={styles.projecthlist}>
                    <span className={styles.projectitem}>{item.title}</span>
                    {/* <span className={styles.techitem}>{item.profiles.length}</span> */}
                </div>
            )
        })
        console.log(this.state)
    return <div className={styles.container}>

             <div>
                <div>
                    {generateContent}
                </div>
            </div>
      {/* <table >
        <tbody>
  <tr>
    <th>Paylix</th>
    <th>nOMS</th> 
    <th>Ag365e</th>
    <th>newrow</th>
    <th>Paylix</th>
    <th>Project Test</th>
    <th>Project Test</th>
    <th>Project Test</th>
    <th>Project Test</th>
    <th>Project Test</th>
    <th>Project Test</th>
    <th>Project Test</th>
    <th>Project Test</th>
    <th>Project Test</th>
    <th>Project Test</th>
    <th>Project Test</th>
    <th>Project Test</th>
  </tr>
  </tbody>
  <tbody>
  <tr>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
  </tr>
  </tbody>
  <tbody>
  <tr>
  <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
  </tr></tbody>
  <tbody>
  <tr>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
  </tr>
  </tbody>
  <tbody>
  <tr>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
  </tr>
  </tbody>
  <tbody>
  <tr>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
    <td>Testing</td>
  </tr>
  </tbody>
</table> */}

      </div>;
  }
}
