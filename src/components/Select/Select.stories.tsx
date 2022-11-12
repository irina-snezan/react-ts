import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';
import {ComponentStory} from '@storybook/react';

export default {
    title: 'Select',
    component: Select,
} as ComponentMeta<typeof Select>;

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: 1, title: 'Home'},
                    {value: 2, title: 'About us'},
                    {value: 3, title: 'Contacts'},
                ]}/>
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState('null');
    return <>
        <Select onChange={setValue}
                value={value}
                items={[
                    {value: 1, title: 'Home'},
                    {value: 2, title: 'About us'},
                    {value: 3, title: 'Contacts'},
                ]}/>
    </>
}



//export const Primary: ComponentStory<typeof Select> = () => <Select primary>Select</Select>;
// export const Template: Story<SelectPropsType> = (args) => <Select {...args} />
// const callbacksProps = {
//     onChange: callback
//     //onClick: onclickCallback
// }
//
// export const Select = Template.bind({});
// Select.args = {
//     ...callbacksProps,
//     titleValue: 'Country',
//     //collapsed: false,
//     items: [{value: 1, title: 'Belarus'}, {value: 2, title: 'Italy'}, {value: 3, title: 'China'}],
//
// };
// export const ModeChanging: Story<SelectPropsType> = (args) => {
//     const [parentValue, setParentValue] = useState<string | undefined>(undefined)
//
//     const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
//         setParentValue(e.currentTarget.value)
//     }
//     return <Select {...args} onChange={onChangeHandler} onClick={(value:any) => alert(`this point of menu with ID ${value}`}
//                              items: { [
//                                 {value: 1, title:'Home'},
//                                 {value: 2, title:'About us'},
//                                 {value: 3, title:'Contacts'}
//                             ]} />
// };
//
// ModeChanging.args = {
//     titleValue: 'Country',
//     items: [{value: 1, title: 'Home'}, {value: 2, title: 'About us'}, {value: 3, title: 'Contacts'}],
// }


// export const Select = () => {
//     const [parentValue, setParentValue] = useState<string | undefined>(undefined)
//     const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
//         setParentValue(e.currentTarget.value)
//     }
//     return <select value={parentValue} onChange={onChangeHandler}>
//         <div>none</div>
//         <div value={'1'}>Belarus</div>
//         <div value={'2'}>Italy</div>
//         <div value={'3'}>China</div>
//     </select>
// }
