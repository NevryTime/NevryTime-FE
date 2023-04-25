import React from 'react';
import { SearchBarContainer, SearchBarInput, SearchBtn } from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface SearchBarType {
  width?: number;
  height?: number;
  borderRadius?: number;
  placeholder: string;
  onChange?: React.ChangeEventHandler;
}

export const SearchBar = (props: SearchBarType) => {
  const { width, height, placeholder, onChange, borderRadius } = props;

  return (
    <SearchBarContainer>
      <SearchBarInput
        width={width}
        height={height}
        placeholder={placeholder}
        onChange={onChange}
        borderRadius={borderRadius ? borderRadius : 0}
      />
      <SearchBtn>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </SearchBtn>
    </SearchBarContainer>
  );
};

export default SearchBar;
