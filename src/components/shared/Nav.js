import React, { Component } from 'react';
import { connect } from 'react-redux'
import "./../Budget/Budget.css"

class Nav extends Component {
  render() {
    // console.log(this.props);
    let { firstName, lastName } = this.props.user;
    if (!firstName) firstName = 'MISSING'
    if (!lastName) lastName = 'MISSING'

    return (
      <div className="top">
        <div className="title">budgetty</div>
        <div className="user-info">
          {firstName} {lastName}
          <img src="./peterquill.jpg" alt="" className='photo' />
          <a href='http://localhost:4000/auth/logout'><button className='btn btn-md btn-outline-dark mr-4'>logout</button></a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => ({user: reduxState.user})

export default connect(mapStateToProps)(Nav);