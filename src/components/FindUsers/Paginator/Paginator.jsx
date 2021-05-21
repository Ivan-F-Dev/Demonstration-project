import React, {useState} from 'react'
import s from './Paginator.module.scss';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core";
import {ArrowBackIos, ArrowForwardIos} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '50%',
    },

}));

const Paginator = ({request, totalNumber}) => {

    let [count, setCount] = useState(10)
    let [page, setPage] = useState(1)

    let classes = useStyles()

    let total = totalNumber
    let pagesCount = Math.ceil(total / count)

    return (
        <div className={s.paginator}>

            <div className={s.arrowItem}>
                <button><ArrowBackIos color="primary"/></button>
            </div>
            <div className={s.centralItem}>
                <div className={s.subCentralItem}>
                    <div>{`All users: ${total}`}</div>
                    <div>{`All pages: ${pagesCount}`}</div>
                </div>

                <div className={s.subCentralItem}>
                    <div>
                        <TextField classes={{root: classes.root}} value={count}
                                   onChange={(e) => setCount(e.target.value)}
                                   id="outlined-number" label="Count" type="number" variant="outlined"
                                   InputLabelProps={{shrink: true,}} InputProps={{
                            margin: 'dense',
                            style: {borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}
                        }}/>
                        <TextField classes={{root: classes.root}} value={page} onChange={(e) => setPage(e.target.value)}
                                   type="text"
                                   id="outlined-number" label="Page" type="number" variant="outlined"
                                   InputLabelProps={{shrink: true,}} InputProps={{
                            margin: 'dense',
                            style: {borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px',}
                        }}/>
                    </div>
                </div>
                <div className={s.subCentralItem}>
                    <Button onClick={() => request(count, page)} size="large"
                            variant="contained" color="primary">Request</Button>
                </div>

            </div>
            <div className={s.arrowItem}>
                <button><ArrowForwardIos color="primary"/></button>
            </div>
        </div>
    )
}

export default Paginator;