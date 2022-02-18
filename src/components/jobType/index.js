import './index.css'

const JobType = props => {
  const {jobType, changeJobType, isActive} = props
  const {JobTypeId} = jobType
  console.log(isActive)

  const onClickJobType = () => {
    changeJobType(JobTypeId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  console.log(activeTabBtnClassName)

  return (
    <div className="job-type-field">
      <button
        type="button"
        onClick={onClickJobType}
        className={`button ${activeTabBtnClassName}`}
      >
        {JobTypeId}
      </button>
    </div>
  )
}

export default JobType
