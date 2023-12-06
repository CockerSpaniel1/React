import React from "react";
import { Button, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const BS=()=>{

    return(
        <div>
            
            <Stack direction="horizontal" gap={2} style={{paddingLeft:"3vw"}}>
            <Button as="a" variant="primary" id="btn" >
                按鈕
            </Button>
            {/* <Button as="a" variant="success">
                Button as link
            </Button> */}
            </Stack>
        </div>
    )
}
export default BS;