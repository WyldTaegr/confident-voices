/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExerciseCreateFormInputValues = {};
export declare type ExerciseCreateFormValidationValues = {};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExerciseCreateFormOverridesProps = {
    ExerciseCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
} & EscapeHatchProps;
export declare type ExerciseCreateFormProps = React.PropsWithChildren<{
    overrides?: ExerciseCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ExerciseCreateFormInputValues) => ExerciseCreateFormInputValues;
    onSuccess?: (fields: ExerciseCreateFormInputValues) => void;
    onError?: (fields: ExerciseCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExerciseCreateFormInputValues) => ExerciseCreateFormInputValues;
    onValidate?: ExerciseCreateFormValidationValues;
} & React.CSSProperties>;
export default function ExerciseCreateForm(props: ExerciseCreateFormProps): React.ReactElement;
