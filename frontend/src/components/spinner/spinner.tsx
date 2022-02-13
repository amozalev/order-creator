import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './styles';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export const Spinner: React.FC<any> = () => {
    return (
        <S.Spinner>
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
        </S.Spinner>
    );
};