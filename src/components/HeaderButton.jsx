import { Button } from '@chakra-ui/react';

export const HeaderButton = ({onClick, title}) => {

    return(
        <Button
            onClick={onClick}
            size={{
                base: 'sm'
            }}
        >
            {title}
        </Button>
    );
}