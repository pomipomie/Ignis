import { Text, Heading, Flex } from '@chakra-ui/react';

export const Project = () => {

    return(
        <Flex
            direction="column"
            justify="center"
            alignItems="center"
            maxW={{
                base: "90%",
                sm: "80%",
                md: "70%"
            }}
        >
            <Heading
                fontSize={{
                    base: "xl",
                    md: "2xl"
                }}
                py={5}
                color={"purple.900"}
            >
                Project Summary
            </Heading>
            <Text>
                The project consists of the development of a web application and four artificial intelligence models that will be used to predict a fire at an early stage and inform the relevant authorities and agencies of the preventive measures that can be taken, and to monitor and strategically manage active outbreaks in real time, issuing warnings of possible risks and strategic proposals for effective fire management.
            </Text>
        </Flex>
    );
}