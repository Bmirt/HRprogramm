import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import signOut from "../../images/signOutIcon.png";
import auth from "../../auth/auth";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <img src={logo} className={styles.logo} title="logo" alt="logo" />
        </div>
        <div className={styles.headerLists}>
          <ul>
            <li>Hi, Lika Zuroshvili</li>
            <li>
              <button
                onClick={() => auth.logout(() => this.props.history.push("/"))}
              >
                <img className={styles.icon} src={signOut} alt="sign out" />
              </button>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);

// render() {
//   const profiles = paginate(
//     this.state.rows,
//     this.state.currentPage,
//     this.state.pageSize
//   );
//   if (this.state.rows.length)
//     return (
//       <div className={styles.container}>
//         <div className={styles.search}>
//           <input
//             type="text"
//             className={styles.searchInput}
//             placeholder="Search..."
//             onChange={e => this.profilesFilterer(e)}
//           />
//           <button>
//             <img src={searchIcon} alt="search" />
//           </button>
//         </div>

//         <SmartTable
//           columnHeaders={this.state.columnHeaders}
//           rows={profiles}
//         />
//         <Pagination
//           itemsCount={this.props.state.profileListReducer.profiles.length}
//           pageSize={this.state.pageSize}
//           currentPage={this.state.currentPage}
//           onPageChange={this.handlePageChange}
//         />
// {this.state.creating && <Backdrop />}
//         {this.state.creating && (
//           <Modal
//             title="Add Candidate"
//             canCancel
//             canConfirm
//             onCancel={this.modalCancelHandler}
//             onConfirm={this.modalConfirmHandler}
//           >
//             <form>
//               <div className="form-control">
//                 <label htmlFor="name">Name,Surname</label>
//                 <input type="text" name="name" onChange={this.handleChange} />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="phone">Phone</label>
//                 <input
//                   type="number"
//                   name="phone"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="Current_position">Current Position</label>
//                 <input
//                   type="text"
//                   name="position"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="profile">Profile</label>
//                 <input
//                   type="email"
//                   name="profile"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="portfolio">Portfolio</label>
//                 <input
//                   type="text"
//                   name="portfolio"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="Comment">Comment</label>
//                 <input
//                   type="text"
//                   name="Comment"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="English">English</label>
//                 <input type="text" name="English" />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="Salary_Expectation">Salary Expectation</label>
//                 <input type="text" name="salary" onChange={this.handleChange} />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="source">Source</label>
//                 <input type="text" name="source" onChange={this.handleChange} />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="status">Status</label>
//                 <input type="text" name="status" onChange={this.handleChange} />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="projects">Projects</label>
//                 <input
//                   type="text"
//                   name="projects"
//                   onChange={this.handleChange}
//                 />
//               </div>
//               <div className="form-control">
//                 <label htmlFor="Technologies">Technologies</label>
//                 <input
//                   type="text"
//                   name="technologies"
//                   onChange={this.handleChange}
//                 />
//               </div>
//             </form>
//           </Modal>
//         )}
//       </div>
//     );
//   return (
//     <div className={styles.container}>
//       <div className={styles.search}>
//         <input
//           type="text"
//           className={styles.searchInput}
//           placeholder="Search..."
//           onChange={e => this.profilesFilterer(e)}
//         />
//         <button>
//           <img src={searchIcon} alt="search" />
//         </button>
//       </div>
//     </div>
//   );
// }
