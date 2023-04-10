import { useState, useEffect } from 'react';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [worker, setWorker] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeJobId,setActiveJobId] = useState(0);
  const fetchData = async () => {
    let resp = await fetch(url);
    let data = await resp.json();
    setWorker(data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);
  if (loading) {
    return (
      <section className='jobs-center'>
        <div className='loading'></div>
      </section>
    );
  }
  return (
    <section className='jobs-center'>
      <BtnContainer jobs={worker} activeJobId={activeJobId} updateActiveJobId={setActiveJobId}></BtnContainer>
      <JobInfo job={worker[activeJobId]}></JobInfo>
    </section>
  );
};
export default App;
