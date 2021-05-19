import React, {useState} from 'react'
import s from './Paginator.module.scss';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '15%',
    },
}));

const Paginator = ({request, usersState}) => {

    let [count, setCount] = useState(10)
    let [page, setPage] = useState(1000)

    let classes = useStyles()

    let totalNumber = usersState.totalNumber
    let pagesCount = totalNumber / count
    return (
        <div className={s.paginator}>
            <div>{'<<<'}</div>
            <div>
                <div>
                    <TextField classes={{root: classes.root}} value={count} onChange={(e) => setCount(e.target.value)}
                               id="outlined-number" label="Count" type="number" variant="outlined"
                               InputLabelProps={{shrink: true,}} InputProps={{margin: 'dense', style: {borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}}/>
                    <TextField classes={{root: classes.root, input: classes.input}} value={page} onChange={(e) => setPage(e.target.value)} type="text"
                               id="outlined-number" label="Page" type="number" variant="outlined"
                               InputLabelProps={{shrink: true,}} InputProps={{margin: 'dense', style: {borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px',}}} />
                </div>

                <Button onClick={() => request(count, page)} size="large"
                        variant="contained" color="primary">Request</Button>
            </div>
            <div>{'>>>'}</div>
        </div>
    )
}

export default Paginator;