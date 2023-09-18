import { Fragment } from 'react';
import {Collapse } from 'antd';
import { config } from '@/menu';
import MenuItem from './menuItem';
import './index.scss';
import { useMaterialMenu } from '../hooks';
import { NodeGraph } from '@brushes/qj-shared-library';


const ModuleC: React.FC<{ defaultValue: NodeGraph; menuConfig: any; pageConfig: { [v: string]: any } }> = ({
  defaultValue,
  pageConfig,
  menuConfig = config
}) => {
  console.log(15, menuConfig, config);
  const { type, groupType } = defaultValue || {};
  const { handleClassify, classifyIndex, activedIndex, lists, detailIndex } = useMaterialMenu(
    groupType || type,
    menuConfig
  );
  return (
    <div className={'moduleC'}>
      <Collapse
        items={menuConfig.map((type, typeIndex) => {
          return {
            key: type.code,
            label: type.label,
            children: (
              <>
                {type.children.map(({ type, name }: any, itemIndex: number) => (
                  <Fragment key={itemIndex}>
                    <p
                      key={itemIndex}
                      className={[
                        'classifyName',
                        itemIndex === activedIndex && classifyIndex === typeIndex ? ' active' : ''
                      ].join('')}
                      onClick={handleClassify.bind(null, typeIndex, itemIndex)}
                    >
                      <span>{name}</span>
                    </p>
                  </Fragment>
                ))}
              </>
            )
          };
        })}
        defaultActiveKey={['basic', 'business', 'marketing']}
        ghost
        className={'classify'}
      />
      {lists.map((item, index) => (
        <div
          className={'template typeScroll'}
          key={index}
          style={{ display: index === detailIndex ? 'block' : 'none' }}
        >
          <MenuItem key={index} pageConfig={pageConfig} lists={item}></MenuItem>
        </div>
      ))}
    </div>
  );
};

export default ModuleC;
