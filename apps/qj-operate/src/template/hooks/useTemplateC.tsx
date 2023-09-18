import { useState, useMemo, useEffect, useRef, type FC, memo } from 'react';
import { Badge, Button, Popconfirm, FormInstance, message } from 'antd';
import { useStore } from '@brushes/shared-store';
import {
  publishMmodel,
  queryPfsMmodelPage,
  storePfsMmodel,
  updatePfsMmodel,
  saveNewMmodel,
  deletePfsMmodel
} from 'qj-b2b-api';
import { isEqual, omit } from 'lodash-es';

enum EPubStatus {
  未发布,
  已发布
}

export type Template = {
  mmodelId: number;
  mmodelCode: string;
  mmodelName: string;
  mmodelPic: string;
  mmodelFilepath: string;
  mmodelConfig: string;
  mmodelUse: number;
  dataState: EPubStatus;
  modelIsInit: number;
};
const columns = (conditions: Array<boolean>) =>
  new Array(conditions.map((item) => Number(item)).reduce((pre, next) => (pre += next), 0)).fill('auto').join(' ') +
  ' auto';
export const useTemplateC = (form: FormInstance) => {
  const [, setModule] = useStore((state) => state['module']);
  const [isUpdate] = useStore((state) => state['isUpdate']);
  const [, setThemeConfig] = useStore((state) => state['theme']);
  const [templates, setTemplates] = useState<Array<Template>>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState<string>('1');
  const currentTemplate = useRef<Partial<Template> | null>();
  useEffect(() => {
    loadTemplates();
  }, [isUpdate]);

  console.log(46, isUpdate);
  function findOActiveModule(arr: any) {
    if (arr.length === 0) return;
    const filterObj = arr.find((obj: any) => obj.hasOwnProperty('mmodelUse'));
    const { mmodelConfig } = filterObj;
    const resultObj = JSON.parse(mmodelConfig);
    setThemeConfig({ theme: resultObj });
  }

  const loadTemplates = async (controlled_page?: string, controlled_rows?: string) => {
    const { list = [] } =
      (await queryPfsMmodelPage({
        page: controlled_page ?? page,
        rows: controlled_rows ?? '10'
      })) || {};
    findOActiveModule(list);
    list.length && setPage((preState) => preState + 1);
    setTemplates(controlled_page ? list : (preState) => preState.concat(list));
  };

  const onApply = async (template: (typeof templates)[0]) => {
    try {
      await publishMmodel({ mmodelId: template.mmodelId });
      loadTemplates('1', String(templates.length));
    } catch (err) {
      message.error(err.msg);
    }
  };

  const onDelete = async (template: (typeof templates)[0]) => {
    const res = await deletePfsMmodel({ mmodelId: template.mmodelId });
    if (res.success) {
      message.success(res.msg);
      loadTemplates('1', String(templates.length));
    }
  };
  const onEdit = (template: (typeof templates)[0]) => {
    setIsAdd(false);
    form.setFieldsValue({
      mmodelName: template.mmodelName,
      mmodelFilepath: template.mmodelFilepath
    });
    currentTemplate.current = template;
    setOpen(true);
  };
  const onAdd = () => {
    form.resetFields();
    setIsAdd(true);
    setOpen(true);
  };
  const onClick = async (template: (typeof templates)[0]) => setModule({ module: template.mmodelCode });

  const handleCancel = () => setOpen(false);

  const update = (params) => {
    const { mmodelConfig } = currentTemplate.current;
    const modelConfig = JSON.parse(mmodelConfig);
    const doNoChange = isEqual(params.mmodelConfig, modelConfig);
    const result = doNoChange ? omit(params, ['mmodelConfig']) : params;
    return updatePfsMmodel(
      Object.assign({ ...result }, doNoChange ? {} : { mmodelConfig: JSON.stringify(result.mmodelConfig) })
    );
  };
  const save = (params) => storePfsMmodel(params);

  const handleOk = (form: FormInstance) => {
    form.validateFields().then(async (values) => {
      if (!isAdd) {
        await update({
          ...values,
          mmodelId: currentTemplate.current.mmodelId
        });
      } else {
        await save({ paramStr: JSON.stringify(values) });
      }
      callback();
    });
  };

  const callback = () => {
    loadTemplates('1', String(isAdd ? templates.length + 1 : templates.length));
    setOpen(false);
  };

  const saveAs = async (form: FormInstance) => {
    const res = await saveNewMmodel({
      paramStr: JSON.stringify({ ...form.getFieldsValue(), mmodelId: currentTemplate.current.mmodelId ?? '' })
    });
    if (res.success) {
      message.success(res.msg);
      loadTemplates('1', String(templates.length + 1));
      setOpen(false);
    }
  };
  const SingleTemplate: FC<{ instance: Template; tag?: string }> = memo(function SingleTemplate({ instance, tag }) {
    return (
      <div
        key={tag}
        style={Object.assign({}, instance.mmodelUse ? { backgroundColor: 'rgba(57, 134, 246, 0.60)' } : {})}
        className={'templateItem'}
      >
        <div onClick={() => onClick(instance)}>{instance.mmodelName}</div>
        <div
          className="templateItem-control-bar"
          style={Object.assign(
            {},
            { gridTemplateColumns: columns([!instance.dataState, !instance.dataState && !instance.modelIsInit]) }
          )}
        >
          <Popconfirm
            title="发布模板"
            description="是否确认发布该模板?"
            onConfirm={() => onApply(instance)}
            okText="确认"
            cancelText="取消"
          >
            {!instance.dataState && <Button size="small">发布</Button>}
          </Popconfirm>
          <Button size="small" type="primary" onClick={() => onEdit(instance)}>
            编辑
          </Button>
          <Popconfirm
            title="删除模板"
            description="是否确认删除该模板?"
            onConfirm={() => onDelete(instance)}
            okText="确认"
            cancelText="取消"
          >
            {!instance.dataState && !instance.modelIsInit && (
              <Button size="small" type="primary" danger>
                删除
              </Button>
            )}
          </Popconfirm>
        </div>
      </div>
    );
  });
  const renderTemplates = useMemo(() => {
    return templates.map((item) => {
      if (item.mmodelUse) {
        return (
          <Badge.Ribbon key={item.mmodelCode} text={item.dataState ? '已发布' : '未发布'}>
            <SingleTemplate instance={item} />
          </Badge.Ribbon>
        );
      }
      return <SingleTemplate instance={item} key={item.mmodelCode} />;
    });
  }, [templates]);
  return {
    isAdd,
    open,
    onApply,
    onDelete,
    loadTemplates,
    onClick,
    onEdit,
    onAdd,
    handleCancel,
    handleOk,
    saveAs,
    renderTemplates
  };
};
