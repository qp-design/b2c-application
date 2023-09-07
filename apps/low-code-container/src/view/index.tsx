import './index.scss';
import { useMemo, useRef, useState } from 'react';
import Root from './root';
import { Button } from 'antd';

import { Provider } from '@brushes/shared-store';
const Index = () => {
  const isNeedJump = useMemo(() => {
    return window.location.href.includes('platform=B2B')
  }, [])
  const [coe, setCoe] = useState(1);
  const port = useMemo(() => {
    const path = window.location.host.includes('lcdev') || process.env.NODE_ENV === 'development' ? 'lcdev' : 'lc';
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

  const clickImpl = (value: number) => {
    if(isNeedJump && value === 2) {
      openIpml()
    } else {
      setCoe(value);
    }
  }

  const openIpml = () => {
    window.open(`${localStorage.getItem('operate') || ''}paas/b2b-bus-pc-saas/index.html#/homeYs?host=${(
      localStorage.getItem('operate') || ''
    ).slice(0, -1)}&token=${localStorage.getItem('operate-info')}`)
  }

  return (
    <div className={'indexWrap'}>
      <div className={'tabWrap'}>
        <Button type="link"></Button>
        <ul>
          {config.current.map((item) => (
            <li key={item.value} className={item.value === coe ? 'active' : ''} onClick={(e) => clickImpl(item.value)}>
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
            referrerPolicy="no-referrer-when-downgrade"
            src={`${localStorage.getItem('operate') || ''}paas/b2c-bus-pc-saas/index.html#/dashboard?host=${(
              localStorage.getItem('operate') || ''
            ).slice(0, -1)}&token=${localStorage.getItem('operate-info')}`}
            title={'后台'}
          />
        )}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/display-name
export default () => <Provider><Index /></Provider>;
