import React from 'react';

interface IAddUserModel {
   
}

interface IReducerState {
   name: string;
   average: string;
   attendance: string;
}

interface IReducerAction {
   type: 'INPUT CHANGE' | 'CLEAR VALUES';
   field: string;
   value: string;
}

export type TypeReducerAction = IReducerAction;

export type TypeReducerState = IReducerState;

export type AddUserModel = IAddUserModel