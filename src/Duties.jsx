import { FaAngleDoubleRight } from 'react-icons/fa';
import { v4 as uuid } from 'uuid';
const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        const id = uuid();
        return (
          <div className='job-desc' key={id} >
            {' '}
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Duties;
