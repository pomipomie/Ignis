import { Button } from '@chakra-ui/react';

export const HeaderButton = ({onClick, title,isHidden}) => {

    return(
        <Button
            onClick={onClick}
            size={{
                base: 'sm'
            }}
            colorScheme='pink'
            display={isHidden ? "none" : "inherit"}
        >
            {title}
        </Button>
    );
}