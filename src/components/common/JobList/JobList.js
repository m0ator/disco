import React, { useState, useEffect } from 'react';
import { Icon } from '../../common';
import './JobList.css';

const jobData = [
  {
    id: 1,
    title: '店长',
    location: '酒泉',
    type: '全职',
    experience: '1-3年',
    salary: '6-8K',
    requirements: [
      '具备计算机售后服务的相关工作',
      '熟悉厂商的保修政策及服务流程',
      '具有良好的心理素质、团队协作能力',
      '良好的沟通能力、业务能力为店内创造营收'
    ]
  },
  {
    id: 2,
    title: '售后工程师',
    location: '酒泉',
    type: '全职',
    experience: '1-3年',
    salary: '4-8K',
    requirements: [
      '负责计算机售后服务，完成日常保修及维修',
      '对客户送修及报修等设备实施维修及技术咨询',
      '为客户提供上门初步技术支持，有C1驾照',
      '针对客户需求，对设备进行初步维护，检测等'
    ]
  },
  {
    id: 3,
    title: '前台',
    location: '酒泉',
    type: '全职',
    experience: '0-2年',
    salary: '3-6K',
    requirements: [
      '熟悉计算机硬件基础及厂商保修政策',
      '良好的沟通能力、业务能力为店内创造营收',
      '优秀的反应能力和项目管理能力',
      '有相关经验优先'
    ]
  }
];

const JobCard = React.memo(({ job }) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <div className="job-title-section">
          <h3>
            {job.title}
            <div className="job-salary">
              <Icon name="payments" />
              {job.salary}
            </div>
          </h3>
          <div className="job-tags">
            <span className="job-tag">
              <Icon name="location_on" />
              {job.location}
            </span>
            <span className="job-tag">
              <Icon name="work" />
              {job.type}
            </span>
            <span className="job-tag">
              <Icon name="schedule" />
              {job.experience}
            </span>
          </div>
        </div>
      </div>
      <div className="job-content">
        <h4>岗位要求</h4>
        <ul>
          {job.requirements.map((req, index) => (
            <li key={index}>
              <span className="dot">•</span>
              {req}
            </li>
          ))}
        </ul>
      </div>
      <div className="job-footer">
        <button 
          className="apply-button"
          onClick={() => window.open(`mailto:hr@company.com?subject=应聘${job.title}职位`, '_blank')}
        >
          立即申请
          <Icon name="arrow_forward" />
        </button>
      </div>
    </div>
  );
});

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1000));
        setJobs(jobData);
        setLoading(false);
      } catch (err) {
        setError('加载职位信息失败，请稍后重试');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div className="job-list-loading">
        <Icon name="hourglass_empty" className="loading-icon" />
        <p>正在加载职位信息...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="job-list-error">
        <Icon name="error_outline" className="error-icon" />
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="retry-button">
          重试
        </button>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="job-list-empty">
        <Icon name="work_off" className="empty-icon" />
        <p>暂无职位信息</p>
      </div>
    );
  }

  return (
    <div className="job-list">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList; 