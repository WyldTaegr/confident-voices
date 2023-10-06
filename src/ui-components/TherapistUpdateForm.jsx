/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, SwitchField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { getTherapist } from "../../queries";
import { updateTherapist } from "../../mutations";
export default function TherapistUpdateForm(props) {
  const {
    id: idProp,
    therapist: therapistModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    parent: false,
  };
  const [parent, setParent] = React.useState(initialValues.parent);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = therapistRecord
      ? { ...initialValues, ...therapistRecord }
      : initialValues;
    setParent(cleanValues.parent);
    setErrors({});
  };
  const [therapistRecord, setTherapistRecord] =
    React.useState(therapistModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getTherapist,
              variables: { id: idProp },
            })
          )?.data?.getTherapist
        : therapistModelProp;
      setTherapistRecord(record);
    };
    queryData();
  }, [idProp, therapistModelProp]);
  React.useEffect(resetStateValues, [therapistRecord]);
  const validations = {
    parent: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          parent,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updateTherapist,
            variables: {
              input: {
                id: therapistRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "TherapistUpdateForm")}
      {...rest}
    >
      <SwitchField
        label="Parent"
        defaultChecked={false}
        isDisabled={false}
        isChecked={parent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              parent: value,
            };
            const result = onChange(modelFields);
            value = result?.parent ?? value;
          }
          if (errors.parent?.hasError) {
            runValidationTasks("parent", value);
          }
          setParent(value);
        }}
        onBlur={() => runValidationTasks("parent", parent)}
        errorMessage={errors.parent?.errorMessage}
        hasError={errors.parent?.hasError}
        {...getOverrideProps(overrides, "parent")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || therapistModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || therapistModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
