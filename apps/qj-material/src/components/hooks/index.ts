import { useEffect, useState } from 'react';
import { useMaterialGraph } from '@brushes/qj-shared-library';

export function useMaterialMenu(type: string, config: Array<any>) {
  const expPageGraph = useMaterialGraph();
  const [menuId, setMenuId] = useState();
  const [classifyIndex, setClassifyIndex] = useState(-1);
  const [detailIndex, setDetailIndex] = useState(0);
  const [activedIndex, setActived] = useState(-1);
  const [lists, setList] = useState(() => {
    return [config[0]['children'][0]['group']];
  });

  useEffect(() => {
    outer: for (let i = 0; i < config.length; i++) {
      const citem = config[i].children;
      for (let j = 0; j < citem.length; j++) {
        if (type === citem[j].type) {
          commonImpl(i, j);
          break outer; //跳出内层循环
        }
      }
    }
  }, [type, config]);

  useEffect(() => {
    const sub = expPageGraph.activedPageId$.subscribe((value: any) => {
      setMenuId(value);
      onHandleClassify(value);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  const onHandleClassify = (pageId: string) => {
    if (!pageId) return;
    // if(pageId !== 'index') {
    //   const index = config.find(item => item.code === 'business')!.children.findIndex(citem => citem.code === pageId);
    //   if(index === -1) {
    //     message.error(`菜单配置有问题: ${pageId}不存在，检查一下菜单配置`);
    //     return;
    //   }
    //   commonImpl(1, index)
    // } else {
    //   commonImpl(0, 0)
    // }
    commonImpl(-1, -1);
  };

  const length = (typeIndex: number) => {
    let length = 0;
    for (let i = 0; i < typeIndex; i++) {
      length += config[typeIndex - 1]['children'].length;
    }
    return length;
  };

  const commonImpl = (typeIndex: number, itemIndex: number) => {
    if (typeIndex === -1) return;
    const len = length(typeIndex);
    setActived(itemIndex);
    setClassifyIndex(typeIndex);
    setDetailIndex(len + itemIndex);

    const item = config[typeIndex]['children'][itemIndex]['group'];
    setList((prevState) => {
      prevState[itemIndex + len] = item;
      return prevState;
    });
  };

  const handleClassify = (typeIndex: number, itemIndex: number) => {
    commonImpl(typeIndex, itemIndex);
    // const pageId = expPageGraph.activedPageId$.getValue();
    // if(pageId !== 'index') {
    //   expPageGraph.setPageIdImpl(code)
    // }
  };

  return {
    classifyIndex,
    detailIndex,
    activedIndex,
    handleClassify,
    lists,
    menuId
  };
}
