/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { S3Object } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type S3ObjectUpdateFormInputValues = {
    name?: string;
    key?: string;
};
export declare type S3ObjectUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type S3ObjectUpdateFormOverridesProps = {
    S3ObjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type S3ObjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: S3ObjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    s3Object?: S3Object;
    onSubmit?: (fields: S3ObjectUpdateFormInputValues) => S3ObjectUpdateFormInputValues;
    onSuccess?: (fields: S3ObjectUpdateFormInputValues) => void;
    onError?: (fields: S3ObjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: S3ObjectUpdateFormInputValues) => S3ObjectUpdateFormInputValues;
    onValidate?: S3ObjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function S3ObjectUpdateForm(props: S3ObjectUpdateFormProps): React.ReactElement;
