import React from 'react';

const ListComponent = ({ valueList }) => {
    return (
        <>
            <div >
                { valueList.map( valueList =>
                {
                    return (
                        <div>
                            <span>Valor { valueList } selecionado</span>
                        </div>
                    );
                } ) }
            </div>
        </>
    );
};

export default ListComponent;