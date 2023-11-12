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
export declare type RecordingCreateFormInputValues = {
    bucket?: string;
    region?: string;
    key?: string;
};
export declare type RecordingCreateFormValidationValues = {
    bucket?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecordingCreateFormOverridesProps = {
    RecordingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bucket?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecordingCreateFormProps = React.PropsWithChildren<{
    overrides?: RecordingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecordingCreateFormInputValues) => RecordingCreateFormInputValues;
    onSuccess?: (fields: RecordingCreateFormInputValues) => void;
    onError?: (fields: RecordingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecordingCreateFormInputValues) => RecordingCreateFormInputValues;
    onValidate?: RecordingCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecordingCreateForm(props: RecordingCreateFormProps): React.ReactElement;
