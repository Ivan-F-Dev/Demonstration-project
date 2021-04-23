import React, {useState} from 'react'
import s from './Test.module.scss';
import Button from '@material-ui/core/Button';
import {useStylesNavBar} from "../../MUI/MIU Styles";

const Test = () => {
    const [state, setState] = useState(0)
    const classes = useStylesNavBar()
    return (
        <div className={s.test}>
            Test
            <Button onClick={() => setState(1)} color={state === 1 ? "primary" : "default"} className={classes.root}>Тестовая
                кнопка1</Button>
            <Button onClick={() => setState(2)} color={state === 2 ? "primary" : "default"} className={classes.root}>Тестовая
                кнопка2</Button>
            <Button onClick={() => setState(3)} color={state === 3 ? "primary" : "default"} className={classes.root}>Тестовая
                кнопка3</Button>
            <Button onClick={() => setState(0)} color={state === 0 ? "primary" : "default"}>Обнуляющая кнопка</Button>
        </div>
    )
}

export default Test;