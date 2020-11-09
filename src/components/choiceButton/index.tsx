import React from 'react';

import { WrapperButton } from './styles';

interface props {
    title_1: string,
    title_2: string
}


const ChoiceButton: React.FC<props> = () => {
    return (
        <WrapperButton>
            <div className="gradient-box-button">
                <button>
                    <h4>Serviços</h4>
                </button>
            </div>

            <div className="gradient-box-button">
                <button>
                    <h4></h4>
                </button>
            </div>
        </WrapperButton>

    );
}

export default ChoiceButton;