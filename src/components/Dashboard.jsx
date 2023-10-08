/* eslint-disable react/prop-types */
import { Flex, Tabs, TabList, Tab, TabPanels, TabPanel, Card, CardHeader, CardBody } from "@chakra-ui/react";

const DashboardCard = ({title, content}) => {
    return(
        <Card
            variant="filled"
        >
            <CardHeader>
                {title}
            </CardHeader>
            <CardBody>
                {content}
            </CardBody>
        </Card>
    );
}

const cardContents = [
    {
        title: "Card 1",
        content: "lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        title: "Card 2",
        content: "lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        title: "Card 3",
        content: "lorem ipsum lorem ipsum lorem ipsum"
    },
    {
        title: "Card 4",
        content: "lorem ipsum lorem ipsum lorem ipsum"
    }
]

export const Dashboard =  () => {
    return(
        <Flex
            width="100vw"
            maxH="100%"
        >
            <Tabs
                isFitted
                width="100%"
                variant="enclosed"
            >
                <TabList>
                    <Tab>Cards</Tab>
                    <Tab>Maps</Tab>
                </TabList>

                <TabPanels
                    overflowY="scroll"
                    maxH="100%"
                >
                    <TabPanel
                        display="flex"
                        flexWrap="wrap"
                        gap={2}
                        justifyContent="center"
                    >
                        { cardContents.map( (card, index) => 
                            (<DashboardCard
                                key={index}
                                title={card.title}
                                content={card.content}
                            />)
                        )}
                    </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
}