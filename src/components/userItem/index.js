import {Component} from 'react'
import Popup from 'reactjs-popup'
import {FiSave} from 'react-icons/fi'

// import 'reactjs-popup/dist/index.css'
import './index.css'

class userItem extends Component {
  state = {
    nameInput: '',
    emailInput: '',
    mobileInput: '',
    dobInput: '',
    jobTypeInput: '',
  }

  render() {
    const {userDetails, deleteUser, EditUser, addNewData} = this.props
    const {
      emailInput,
      nameInput,
      dobInput,
      mobileInput,
      jobTypeInput,
    } = this.state

    const {
      slNo,
      fullName,
      profilePic,
      mobile,
      emailId,
      isedited,
      jobType,
      dob,
      prefLocation,
    } = userDetails

    console.log(profilePic)

    const onClickDelete = () => {
      deleteUser(slNo)
    }

    const onClickEdit = () => {
      EditUser(slNo)
    }

    const saveItem = () => {
      const newUserDetails = {
        emailInput,
        nameInput,
        dobInput,
        mobileInput,
        jobTypeInput,
      }
      addNewData(newUserDetails)
    }

    const editName = event => {
      this.setState({nameInput: event.target.value})
    }

    const editMail = event => {
      this.setState({emailInput: event.target.value})
    }

    const editMobile = event => {
      this.setState({mobileInput: event.target.value})
    }
    const editDob = event => {
      this.setState({dobInput: event.target.value})
    }

    const editJobtype = event => {
      this.setState({jobTypeInput: event.target.value})
    }

    return (
      <li className="table-row">
        <div className="table-cell ">
          {isedited ? (
            <input
              type="text"
              className="new-input"
              onChange={editName}
              value={nameInput}
            />
          ) : (
            <p>{fullName}</p>
          )}
        </div>
        <hr className="separator" />
        <div className="table-cell ">
          {isedited ? (
            <input
              type="text"
              className="new-input"
              onChange={editMail}
              value={emailInput}
            />
          ) : (
            <p>{emailId}</p>
          )}
        </div>
        <hr className="separator" />
        <div className="table-cell ">
          {isedited ? (
            <input
              type="text"
              className="new-input"
              onChange={editMobile}
              value={mobileInput}
            />
          ) : (
            <p>{mobile}</p>
          )}
        </div>
        <hr className="separator" />
        <div className="table-cell ">
          {isedited ? (
            <input
              type="text"
              className="new-input"
              onChange={editDob}
              value={dobInput}
            />
          ) : (
            <p>{dob}</p>
          )}
        </div>
        <hr className="separator" />
        <div className="table-cell ">
          {isedited ? (
            <input
              type="text"
              className="new-input"
              onChange={editJobtype}
              value={jobTypeInput}
            />
          ) : (
            <p>{jobType}</p>
          )}
        </div>

        <hr className="separator" />
        <div className="action-buttons">
          <div>
            <Popup
              modal
              trigger={
                <button type="button" className="custom-button">
                  Pic
                </button>
              }
            >
              {close => (
                <>
                  <div className="popup-container">
                    <img src={profilePic} className="avatar" alt="avatar" />
                  </div>
                  <button
                    type="button"
                    className="trigger-button"
                    onClick={() => close()}
                  >
                    Close
                  </button>
                </>
              )}
            </Popup>
          </div>
          <div>
            {isedited ? (
              <button type="button" className="save-button" onClick={saveItem}>
                <FiSave />
              </button>
            ) : (
              <button
                type="button"
                className="custom-button"
                onClick={onClickEdit}
              >
                Edit
              </button>
            )}
          </div>
          <div>
            <button
              className="custom-button"
              onClick={onClickDelete}
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    )
  }
}

export default userItem
