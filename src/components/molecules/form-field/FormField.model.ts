import {ChangeEvent} from 'react';

interface IFormFieldModel {
   label: string;
   name: string;
   id: string;
   type?: string;
   value: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type FormFieldModel = IFormFieldModel;