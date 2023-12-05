import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../features/counter/list';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const correctSelector = (state) => ({
    isLoading: state.list.isLoading,
    data: state.list.data,
});

function List() {

    const dispatch = useDispatch();

    // const state = useSelector((state) => state);
    const { isLoading, data } = useSelector(correctSelector);

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    console.log('Data', data);

    // console.log('State', state);

    // if (state.list.isLoading) {
    //     return <h1>Loading..</h1>
    // }
    if (isLoading) {
        return <h1>Loading..</h1>;
    }


    return (
        <>
            <div>
                <Link to={'/create'}>
                    <Button>
                        Create
                    </Button>
                </Link>
            </div>
            <div className='container' style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>

                {/* <button onClick={(e) => dispatch(getData())}>
                    Get Data
                </button> */}
                {
                    data && data.map((e) =>
                    (
                        <div key={e.studentid} className='mt-5 col-3' style={{
                            // display: 'flex',
                            // flexWrap: 'wrap',
                            // flexDirection: 'column',
                            // alignItems: 'center',
                            // justifyContent: 'center',
                        }}>
                            <div className='card d-flex ' style={{
                                // margin: '50px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                boxShadow: '20px 0px 50px lightgrey, -20px -1px 50px wheat',
                                padding: '15px',
                                // width: '400px'
                            }}>
                                <li style={{ listStyle: 'none' }}>{e.studentid}</li>
                                <li style={{ listStyle: 'none' }}>{e.rollno}</li>
                                <li style={{ listStyle: 'none' }}>{e.name}</li>
                                <li style={{ listStyle: 'none' }}>{e.course}</li>
                                <li style={{ listStyle: 'none' }}>{e.address}</li>
                                <li style={{ listStyle: 'none' }}>{e.contact}</li>
                                <li style={{ listStyle: 'none' }}>{e.email}</li>
                            </div>
                        </div>
                    ))
                }



            </div>
        </>
    )
}

export default List