import { submitType, TransformType } from '../types';
import { FormInstance } from 'antd-mobile/es/components/form';
export declare function useFormImpl(form: FormInstance, onSubmit: (...args: submitType) => void, transformSubmitDataConfig?: Array<TransformType>): {
    onFinish: (...args: any[]) => any;
    onFinishFailed: (...args: any[]) => any;
    loading: boolean;
    resetHandler: (...args: any[]) => any;
    computedSubmitValues: (...args: any[]) => any;
};
