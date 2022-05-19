import React from 'react';

interface IFormModel {
   handleAddUser: (e: React.FormEvent<HTMLFormElement>) => void;
   handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   formValues: {name: string, attendance: string, average: string};
}

export type FormModel = IFormModel