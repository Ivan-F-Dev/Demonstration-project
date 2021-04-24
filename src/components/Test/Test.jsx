import React, {useState} from 'react'
import s from './Test.module.scss';
import Button from '@material-ui/core/Button';

const Test = () => {
    const [state, setState] = useState(0)

    return (
        <div className={s.test}>
            Test
            <div>
                <Button onClick={() => setState(1)} color={state === 1 ? "primary" : "default"}>Тестовая кнопка1</Button>
                <Button onClick={() => setState(2)} color={state === 2 ? "primary" : "default"}>Тестовая кнопка2</Button>
                <Button onClick={() => setState(3)} color={state === 3 ? "primary" : "default"}>Тестовая кнопка3</Button>
                <Button onClick={() => setState(0)} color={state === 0 ? "primary" : "default"}>Обнуляющая кнопка</Button>
            </div>
        </div>
    )
}

export default Test;