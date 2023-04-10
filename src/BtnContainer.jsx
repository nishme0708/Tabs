const BtnContainer = ({ jobs, updateActiveJobId, activeJobId }) => {
  return (
    <div className='btn-container'>
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            className={index == activeJobId ? 'job-btn active-btn' : 'job-btn'}
            onClick={() => updateActiveJobId(index)}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
