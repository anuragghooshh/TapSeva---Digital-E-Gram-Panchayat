import React from 'react';
import InputAndLabel from '../../inputAndLabel/InputAndLabel';

interface ServiceStepProps {
    input: {
        service_name: string;
        description: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    errors: any;
}

const ServiceStep1: React.FC<ServiceStepProps> = ({ handleChange, input, errors }) => {
    return (
        <div className="space-y-5">
            <InputAndLabel required>
                <InputAndLabel.Label htmlFor='service_name'>Service Name</InputAndLabel.Label>
                <InputAndLabel.Input
                    type='text'
                    placeholder='Enter Service Name'
                    id='service_name'
                    name='service_name'
                    required={true}
                    value={input.service_name}
                    onChange={handleChange}
                />
                {errors.service_name && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.service_name}</p>}
            </InputAndLabel>
            <InputAndLabel required>
                <InputAndLabel.Label htmlFor='description'>Description</InputAndLabel.Label>
                <InputAndLabel.TextArea
                    placeholder='Enter Description'
                    id='description'
                    name='description'
                    required={true}
                    value={input.description}
                    onChange={handleChange}
                />
                {errors.description && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.description}</p>}
            </InputAndLabel>
        </div>
    );
};

export default ServiceStep1;