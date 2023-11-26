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
export declare type TherapistUpdateFormInputValues = {
    parent?: boolean;
};
export declare type TherapistUpdateFormValidationValues = {
    parent?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TherapistUpdateFormOverridesProps = {
    TherapistUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    parent?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type TherapistUpdateFormProps = React.PropsWithChildren<{
    overrides?: TherapistUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    therapist?: any;
    onSubmit?: (fields: TherapistUpdateFormInputValues) => TherapistUpdateFormInputValues;
    onSuccess?: (fields: TherapistUpdateFormInputValues) => void;
    onError?: (fields: TherapistUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TherapistUpdateFormInputValues) => TherapistUpdateFormInputValues;
    onValidate?: TherapistUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TherapistUpdateForm(props: TherapistUpdateFormProps): React.ReactElement;
