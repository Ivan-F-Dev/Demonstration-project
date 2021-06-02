import {useEffect, useState} from "react";

const useValidation = (value, validations) => {
    const [commonError, setCommonError] = useState(undefined)
    const [isEmpty, setEmpty] = useState(undefined)
    const [minLengthError, setMinLengthError] = useState(undefined)
    const [maxLengthError, setMaxLengthError] = useState(undefined)
    const [upperCase, setUpperCase] = useState(undefined)
    const [lowerCase, setLowerCase] = useState(undefined)
    const [spaces, setSpaces] = useState(undefined)
    const [numbers, setNumbers] = useState(undefined)
    const [emailError, setEmailError] = useState(undefined)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength' :
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty' :
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'maxLength' :
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'isEmail' :
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                case 'ownUpperCase' :
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].toUpperCase() === value[i] && isNaN(value[i])) {
                            setUpperCase(true)
                            break
                        } else {
                            setUpperCase(false)
                        }
                    }
                    break;
                case 'ownLowerCase' :
                    for (let i = 0; i < value.length; i++) {
                        if (value[i].toLowerCase() === value[i]) {
                            setLowerCase(true)
                            break
                        } else {
                            setLowerCase(false)
                        }
                    }
                    break;
                case 'ownSpaces' :
                    for (let i = 0; i < value.length; i++) {
                        if (value[i] === " ") {
                            setSpaces(true)
                            break
                        } else {
                            setSpaces(false)
                        }
                    }
                    break;
                case 'ownNumbers' :
                    for (let i = 0; i < value.length; i++) {
                        if (!isNaN(value[i])) {
                            setNumbers(true)
                            break
                        } else {
                            setNumbers(false)
                        }
                    }
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || maxLengthError || emailError
            || (numbers === undefined ? false : !numbers) || spaces || (upperCase === undefined ? false : !upperCase) || (lowerCase === undefined ? false : !lowerCase)) {
            setCommonError(true)
        } else {
            setCommonError(false)
        }
    }, [isEmpty, minLengthError, maxLengthError, emailError, numbers, spaces, upperCase, lowerCase])

    return {
        numbers,
        spaces,
        upperCase,
        lowerCase,
        emailError,
        commonError,
        isEmpty,
        minLengthError,
        maxLengthError
    }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = (e) => {
        setDirty(true)
    }
    return {
        value,
        isDirty,
        onChange,
        onBlur,
        ...valid
    }
}

export const comparePasswords = (pass1, pass2) => {
    if (pass1.length !== pass2.length) {
        return false
    } else {
        for (let i = 0; i < pass1.length; i++) {
            if (pass1[i] === pass2[i]) {
                continue
            } else {
                return false
            }
        }
        return true
    }
}