/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecordingUpdateFormInputValues = {
    bucket?: string;
    region?: string;
    key?: string;
};
export declare type RecordingUpdateFormValidationValues = {
    bucket?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecordingUpdateFormOverridesProps = {
    RecordingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bucket?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecordingUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecordingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recording?: any;
    onSubmit?: (fields: RecordingUpdateFormInputValues) => RecordingUpdateFormInputValues;
    onSuccess?: (fields: RecordingUpdateFormInputValues) => void;
    onError?: (fields: RecordingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecordingUpdateFormInputValues) => RecordingUpdateFormInputValues;
    onValidate?: RecordingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecordingUpdateForm(props: RecordingUpdateFormProps): React.ReactElement;
