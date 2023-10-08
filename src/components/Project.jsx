import { Text, Heading, Flex, OrderedList, ListItem } from '@chakra-ui/react';

export const Project = () => {

    return(
        <Flex
            direction="column"
            justify="center"
            alignItems="center"
            maxW={{
                base: "95%",
                sm: "85%",
                md: "75%"
            }}
            minH="100%"
            overflowY="auto"
            px={5}
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
            <Heading
                fontSize={{
                    base: "xl",
                    md: "2xl"
                }}
                py={5}
                color={"purple.900"}
            >
                Stages of project development
            </Heading>
            <Heading
                fontSize={{
                    base: "lg",
                    md: "xl"
                }}
                py={5}
                color={"purple.800"}
            >
                Stage 1:
            </Heading>
            <Text>Data collection and preparation of data from various sources.</Text>
            <Heading
                fontSize={{
                    base: "lg",
                    md: "xl"
                }}
                py={5}
                color={"purple.800"}
            >
                Stage 2:
            </Heading>
            <Text fontWeight="bold">Model Training:</Text>
            <OrderedList>
                <ListItem>General Risk Analysis</ListItem>
                <ListItem>Prevention</ListItem>
                <ListItem>Real-time Incident Analysis</ListItem>
                <ListItem>Incident Management</ListItem>
            </OrderedList>
            <Heading
                fontSize={{
                    base: "lg",
                    md: "xl"
                }}
                py={5}
                color={"purple.800"}
            >
                Stage 3:
            </Heading>
            <Text fontWeight="bold">Implementation of the models and integration with the app:</Text>
            <OrderedList>
                <ListItem>Integration of the models with the apis extender (real-time data sources)</ListItem>
                <ListItem>Integration with the web application</ListItem>
            </OrderedList>
            <Heading
                fontSize={{
                    base: "lg",
                    md: "xl"
                }}
                py={5}
                color={"purple.800"}
            >
                Stage 4:
            </Heading>
            <Text>Dashboard with NASA data and an analytical model widget, a prevention model widget, and a fire management and incident analysis widget.</Text>
            <Heading
                fontSize={{
                    base: "lg",
                    md: "xl"
                }}
                py={5}
                color={"purple.800"}
            >
                Stage 5:
            </Heading>
            <Text>Application Communication with External Services
--Email, messaging, SMS, push notifications, emergency system (shortwave system for emergencies).

REST API to provide data to any application that needs it.</Text>
        </Flex>
    );
}