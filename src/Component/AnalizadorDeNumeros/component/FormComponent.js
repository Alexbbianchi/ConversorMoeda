import React, { useState, useEffect } from 'react';
import { Input, Button  } from 'antd';

function FormComponent ( {onSave} )
{
    const [ valueInput, setValueInput ] = useState('');
    
    return (
        <>
            <div >
                <Input style={{ width: '50%', marginTop: '20px' }}  onChange={ e => setValueInput( e.currentTarget.value ) } />
                <Button style={{ marginBottom: '20px' }} type="primary" onClick={ () => onSave( valueInput, setValueInput ) }>Adicionar</Button>
            </div>
        </>
    );
};

export default FormComponent;