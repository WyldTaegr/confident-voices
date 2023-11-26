/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PostInfoUpdateFormInputValues = {
    title?: string;
    tags?: string;
    description?: string;
    likes?: number;
};
export declare type PostInfoUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    tags?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    likes?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostInfoUpdateFormOverridesProps = {
    PostInfoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    likes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostInfoUpdateFormProps = React.PropsWithChildren<{
    overrides?: PostInfoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    postInfo?: any;
    onSubmit?: (fields: PostInfoUpdateFormInputValues) => PostInfoUpdateFormInputValues;
    onSuccess?: (fields: PostInfoUpdateFormInputValues) => void;
    onError?: (fields: PostInfoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostInfoUpdateFormInputValues) => PostInfoUpdateFormInputValues;
    onValidate?: PostInfoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PostInfoUpdateForm(props: PostInfoUpdateFormProps): React.ReactElement;
