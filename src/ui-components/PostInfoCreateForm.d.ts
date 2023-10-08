/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostInfoCreateFormInputValues = {
    title?: string;
    tags?: string;
    description?: string;
};
export declare type PostInfoCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostInfoCreateFormOverridesProps = {
    PostInfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type PostInfoCreateFormProps = React.PropsWithChildren<{
    overrides?: PostInfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostInfoCreateFormInputValues) => PostInfoCreateFormInputValues;
    onSuccess?: (fields: PostInfoCreateFormInputValues) => void;
    onError?: (fields: PostInfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostInfoCreateFormInputValues) => PostInfoCreateFormInputValues;
    onValidate?: PostInfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostInfoCreateForm(props: PostInfoCreateFormProps): React.ReactElement;
