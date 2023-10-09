// core
import React from 'react'

// form validation
import { Formik, Form, Field, useField } from "formik";

import * as Yup from "yup";

// resources
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const StateResidence = ({name, storeStateOptions, submitCount, validations, errors}) => {
  const [field] = useField({ name })

  const validate = (x) => {
    const errorMsg = validations.pleaseSelectStateOfPurchase
    try {
      Yup.string().required(errorMsg).validateSync(x).toString()
    } catch (error) {
      return errorMsg;
    }
  }

  return (
    <>
      <div className="form-group">
        <label className="select">
          <Field as="select" className="form-control" validate={validate} {...field}>
            {storeStateOptions.map((d) => (
                <option key={d.value} value={d.value}>{d.label}</option>
            ))}
          </Field>
          <FontAwesomeIcon icon={faChevronDown} className="fa-solid" />
          {/*
          */}
          {submitCount > 0 && errors.usaStatesList !== "" ? (
              <>
                <div className="help-block with-errors">
                  <ul role="alert" className={"list-unstyled " + (!errors.usaStatesList ? "d-none" : "")}>
                    <li>{errors.usaStatesList}</li>
                  </ul>
                </div>
              </>
          ) : null}
        </label>
      </div>
    </>
  )
}

export default StateResidence