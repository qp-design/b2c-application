import React from 'react';
import { SelectPicture } from '../selectPictureOrVideo';
import { SelectLink } from '../selectLink';
import SelectInfo from '../selectInfo';

export const SelectCube = ({
  form,
  name,
  parentName = [],
  needInput = false,
  noImg = false
}: {
  form: any;
  name: any;
  parentName?: Array<any>;
  needInput?: boolean;
  noImg?: boolean;
}) => {
  const [coe, target] = name;
  const [imgUrl, link, title] = target;
  return (
    <div className={'selectCube'}>
      <ul className={'cubeGroup'}>
        <li className={'cubeItem'}>
          <div className="lPart">
            {needInput ? null : (
              <div className={'title'}>
                <p>第 {coe + 1} 项</p>
              </div>
            )}
            <div className={'pickLink'}>
              <SelectLink
                form={form}
                name={[coe, link]}
                parentName={parentName}
              />
            </div>
            {needInput ? <SelectInfo name={[coe, title]} /> : null}
          </div>
          {noImg ? null : (
            <div className="rPart">
              <SelectPicture
                form={form}
                name={[coe, imgUrl]}
                parentName={parentName}
              />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};
