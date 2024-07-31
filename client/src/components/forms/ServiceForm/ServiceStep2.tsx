import React from 'react';
import InputAndLabel from '../../inputAndLabel/InputAndLabel';

interface ServiceStepProps {
    input: {
        DownloadableForm: string;
        category: string;
    };
    handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    errors: any;
}

const ServiceStep2: React.FC<ServiceStepProps> = ({ handleChange, input, errors }) => {
    return (
        <div className="space-y-5">
            <InputAndLabel required>
                <InputAndLabel.Label htmlFor='DownloadableForm'>Downloadable Form URL</InputAndLabel.Label>
                <InputAndLabel.Input
                    type='url'
                    placeholder='Enter Downloadable Form URL'
                    id='DownloadableForm'
                    name='DownloadableForm'
                    value={input.DownloadableForm}
                    onChange={handleChange}
                />
            </InputAndLabel>
            <InputAndLabel required>
                <InputAndLabel.Label htmlFor='category'>Category</InputAndLabel.Label>
                <InputAndLabel.Select
                    id='category'
                    name='category'
                    value={input.category}
                    onChange={handleChange}
                    required={true}
                >
                    <InputAndLabel.Select.Option value='' disabled={true}>Select Category</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='General'>General</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='Citizen Services'>Citizen Services</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='Health'>Health</InputAndLabel.Select.Option>
                    <InputAndLabel.Select.Option value='Education'>Education</InputAndLabel.Select.Option>
                </InputAndLabel.Select>
                {errors.category && <p className="font-work text-negative-400 text-sm lg:text-base">{errors.category}</p>}
            </InputAndLabel>
        </div>
    );
};

export default ServiceStep2;