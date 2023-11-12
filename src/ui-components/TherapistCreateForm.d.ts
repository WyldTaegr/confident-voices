/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps } from "@aws-amplify/ui-react";
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
export declare type TherapistCreateFormInputValues = {
    parent?: boolean;
};
export declare type TherapistCreateFormValidationValues = {
    parent?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TherapistCreateFormOverridesProps = {
    TherapistCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    parent?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TherapistCreateFormProps = React.PropsWithChildren<{
    overrides?: TherapistCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TherapistCreateFormInputValues) => TherapistCreateFormInputValues;
    onSuccess?: (fields: TherapistCreateFormInputValues) => void;
    onError?: (fields: TherapistCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TherapistCreateFormInputValues) => TherapistCreateFormInputValues;
    onValidate?: TherapistCreateFormValidationValues;
} & React.CSSProperties>;
export default function TherapistCreateForm(props: TherapistCreateFormProps): React.ReactElement;
