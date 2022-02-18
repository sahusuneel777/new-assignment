import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import UserItem from './components/userItem'
import JobType from './components/jobType'
import './App.css'

const jobsTypeList = [
  {JobTypeId: 'FT', displayText: 'Full Time'},
  {JobTypeId: 'PT', displayText: 'Part Time'},
  {JobTypeId: 'Consultant', displayText: 'Consultant'},
]
const jobsTypes = {
  FT: 'FullTime',
  PT: 'PartTime',
  Consultant: 'Consultant',
}
const initialUsersList = [
  {
    slNo: uuidv4(),
    fullName: 'Shalna',
    profilePic:
      'https://res.cloudinary.com/dnv6kesmt/image/upload/v1645116120/mini-project/female_avatar_g3enft.png',
    mobile: '+420 255 991 3525 ',
    emailId: 'sbradder@mlb.com',
    jobType: 'Consultant',
    dob: '25-03-1984',
    prefLocation: 'chennai',
  },
  {
    slNo: uuidv4(),
    fullName: 'Abie',
    profilePic:
      'https://res.cloudinary.com/dnv6kesmt/image/upload/v1645116120/mini-project/male-avatar_hrxdmz.png',
    mobile: '+47 228 583 9463',
    emailId: 'sbrisbane@mlb.com',
    jobType: 'Part Time',
    dob: '12-07-1990',
    prefLocation: 'Delhi',
  },
  {
    slNo: uuidv4(),
    fullName: 'Johanna',
    profilePic:
      'https://res.cloudinary.com/dnv6kesmt/image/upload/v1645116120/mini-project/female_avatar_g3enft.png',
    mobile: '+7 525 409 6303',
    emailId: 'jjoannidi@delicious.com',
    jobType: 'Consultant',
    dob: '12-10-1986',
    prefLocation: 'Pune',
  },
  {
    slNo: uuidv4(),
    fullName: 'Fax',
    profilePic:
      'https://res.cloudinary.com/dnv6kesmt/image/upload/v1645116120/mini-project/male-avatar_hrxdmz.png',
    mobile: '+1 692 651 3855',
    emailId: 'fcromwell3@del.com',
    jobType: 'Part Time',
    dob: '25-03-1984',
    prefLocation: 'chennai',
  },
  {
    slNo: uuidv4(),
    fullName: 'Jasmine',
    profilePic:
      'https://res.cloudinary.com/dnv6kesmt/image/upload/v1645116120/mini-project/female_avatar_g3enft.png',
    mobile: '+385 707 676 7442 ',
    emailId: 'jaccsell4@msn.com',
    jobType: 'Full time',
    dob: '15-09-1998',
    prefLocation: 'Delhi',
  },
  {
    slNo: uuidv4(),
    fullName: 'Bandon',
    profilePic:
      'https://res.cloudinary.com/dnv6kesmt/image/upload/v1645116120/mini-project/male-avatar_hrxdmz.png',
    mobile: '+505 725 624 0025',
    emailId: 'bhawtin@infoseek.com',
    jobType: 'Full time',
    dob: '10-06-1980',
    prefLocation: 'chennai',
  },
]
class App extends Component {
  state = {
    userList: initialUsersList,
    fullName: '',
    profilePic: '',
    mobile: '+',
    showError: '',
    emailId: '',
    isedited: false,
    jobType: jobsTypeList[0].JobTypeId,
    dob: '',
    prefLocation: 'Chennai',
  }

  onAddUser = () => {
    const {
      fullName,
      profilePic,
      mobile,
      emailId,
      jobType,
      dob,
      prefLocation,
      isedited,
    } = this.state

    const newUser = {
      slNo: uuidv4(),
      fullName,
      profilePic,
      mobile,
      emailId,
      isedited,
      jobType: jobsTypes[jobType],
      dob,
      prefLocation,
    }
    if (
      fullName !== '' &&
      profilePic !== '' &&
      mobile !== '' &&
      emailId !== '' &&
      dob !== ''
    ) {
      this.setState(prevState => ({userList: [...prevState.userList, newUser]}))
      this.setState({
        fullName: '',
        profilePic: '',
        mobile: '',
        emailId: '',
        dob: '',
        showError: '',
      })
    } else {
      this.setState({showError: 'all fields must be filled'})
    }
  }

  onChangeFullName = event => {
    this.setState({fullName: event.target.value})
  }

  onChangeProfile = event => {
    this.setState({profilePic: event.target.value})
  }

  onChangeMobile = event => {
    this.setState({mobile: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({emailId: event.target.value})
  }

  onChangeDob = event => {
    this.setState({dob: event.target.value})
  }

  onchangePrefLocation = event => {
    this.setState({prefLocation: event.target.value})
  }

  deleteUser = slNo => {
    const {userList} = this.state
    const FilteredUserList = userList.filter(eachUser => eachUser.slNo !== slNo)
    this.setState({userList: FilteredUserList})
  }

  changeJobType = jobTypeValue => {
    console.log(jobTypeValue)
    this.setState({jobType: jobTypeValue})
  }

  EditUser = slNo => {
    const {userList} = this.state
    this.setState(prevState => ({
      userList: prevState.userList.map(eachUserData => {
        if (slNo === eachUserData.slNo) {
          return {...eachUserData, isedited: !eachUserData.isedited}
        }
        return eachUserData
      }),
    }))
    console.log(userList)
  }

  addNewData = data => {
    const {
      slNo,
      emailInput,
      nameInput,
      dobInput,
      mobileInput,
      jobTypeInput,
    } = data
    console.log(data)
    this.setState(prevState => ({
      userList: prevState.userList.map(eachUser => {
        if (slNo === eachUser.slNo) {
          console.log(true)
          return {
            ...eachUser,
            name: nameInput,
            email: emailInput,
            mobile: mobileInput,
            dob: dobInput,
            jobType: jobTypeInput,
            isedited: false,
          }
        }
        return eachUser
      }),
    }))
  }

  render() {
    const {
      userList,
      fullName,
      mobile,
      profilePic,
      emailId,
      jobType,
      dob,
      showError,
      prefLocation,
    } = this.state
    console.log(userList)
    return (
      <div className="app-container">
        <h1>Registration</h1>
        <div className="registration-form">
          <div className="input-field">
            <label htmlFor="fullName">Fullname</label>
            <input
              id="fullName"
              value={fullName}
              onChange={this.onChangeFullName}
              type="text"
            />
          </div>

          <div className="input-field">
            <label htmlFor="profile">Profile Pic</label>
            <input
              id="profile"
              placeholder="paste the image url here"
              value={profilePic}
              onChange={this.onChangeProfile}
              type="text"
            />
          </div>

          <div className="input-field">
            <label htmlFor="phone">Mobile</label>
            <input
              id="phone"
              value={mobile}
              onChange={this.onChangeMobile}
              type="text"
            />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email Id</label>
            <input
              id="email"
              value={emailId}
              onChange={this.onChangeEmail}
              type="text"
            />
          </div>
          {/* className="${activeBtn}" */}
          <div className="jobType-field">
            <p>Job Type</p>

            {jobsTypeList.map(eachJobType => (
              <JobType
                jobType={eachJobType}
                changeJobType={this.changeJobType}
                key={eachJobType.JobTypeId}
                isActive={jobType === eachJobType.JobTypeId}
              />
            ))}
          </div>

          <div className="input-field">
            <label htmlFor="Date">Date</label>
            <input
              onChange={this.onChangeDob}
              value={dob}
              id="Date"
              type="date"
            />
          </div>

          <div className="input-field">
            <label htmlFor="preferredLocation">pref. Location</label>
            <select value={prefLocation} onChange={this.onchangePrefLocation}>
              <option>Chennai</option>
              <option>Pune</option>
              <option>Hyderabad</option>
              <option>New Delhi</option>
            </select>
          </div>

          <div className="addUser-field">
            <button type="button" onClick={this.onAddUser} className="add-btn">
              + Add/Update
            </button>
            <p className="error-msg">{showError}</p>
          </div>
        </div>

        <ul className="users-list-container">
          <li className="user-table-header">
            <p className="table-header-cell">name</p>
            <hr className="separator" />
            <p className="table-header-cell">Email</p>
            <hr className="separator" />
            <p className="table-header-cell">Mobile</p>
            <hr className="separator" />
            <p className="table-header-cell">DOB</p>
            <hr className="separator" />
            <p className="table-header-cell">Job Type</p>
            <hr className="separator" />
            <p className="table-header-cell">Action</p>
          </li>
          {userList.map(eachUser => (
            <UserItem
              key={eachUser.slNo}
              userDetails={eachUser}
              deleteUser={this.deleteUser}
              EditUser={this.EditUser}
              addNewData={this.addNewData}
              //   toggleFavorite={this.toggleFavorite}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
