import './index.scss';
import { useMemo, useRef, useState } from 'react';
import Root from './root';
import { Button } from 'antd';
const Index = () => {
  const [coe, setCoe] = useState(1);
  const port = useMemo(() => {
    const path = window.location.host.includes('lcdev') ? 'lcdev' : 'lc';
    return {
      url: `http://container.${path}.qjclouds.com/remoteEntry.js?id=${new Date().valueOf()}`,
      // url: `http://localhost:7777/remoteEntry.js?id=${new Date().valueOf()}`,
      scope: 'app_container',
      module: './low-code'
    };
  }, []);

  const config = useRef([
    {
      label: '前台',
      value: 1
    },
    {
      label: '后台',
      value: 2
    }
  ]);

  return (
    <div className={'indexWrap'}>
      <div className={'tabWrap'}>
        <Button type="link"></Button>
        <ul>
          {config.current.map((item) => (
            <li key={item.value} className={item.value === coe ? 'active' : ''} onClick={(e) => setCoe(item.value)}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className={'contentWrap'}>
        {coe === 1 ? (
          <Root isDevelop={process.env.NODE_ENV === 'development'} port={port} />
        ) : (
          <iframe
            className={`contentO active`}
            referrerpolicy="no-referrer-when-downgrade"
            src={`${localStorage.getItem('operate') || ''}/paas/b2c-bus-pc-saas/index.html#/dashboard?host=${(
              localStorage.getItem('operate') || ''
            ).slice(0, -1)}&token=${localStorage.getItem('operate-info')}`}
            title={'后台'}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
