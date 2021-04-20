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
            <Button onClick={() => setState(1)} className={`${classes.root} ${state === 1 && classes.rootTest}`}>Тестовая кнопка1</Button>
            <Button onClick={() => setState(2)} className={`${classes.root} ${state === 2 && classes.rootTest}`}>Тестовая кнопка2</Button>
            <Button onClick={() => setState(3)} className={`${classes.root} ${state === 3 && classes.rootTest}`}>Тестовая кнопка3</Button>
            <Button onClick={() => setState(0)} className={classes.root}>Обнуляющая кнопка</Button>

        </div>
    )
}


export default Test;