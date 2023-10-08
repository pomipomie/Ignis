/* eslint-disable react/prop-types */
import { Flex, Tabs, TabList, Tab, TabPanels, TabPanel, Card, CardHeader, CardBody, Heading, UnorderedList, ListItem, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import map from '../assets/MapScreenshot.png';
import fire from '../assets/histfire.png';
import humidity from '../assets/humidity.png';
import temp from '../assets/temperature.png';
import rate from '../assets/rate.png';

const DashboardCard = ({title, content}) => {
    return(
        <Card
            variant="filled"
            width={{
                base: "90%",
                sm: "70%",
                md: "40%",
            }}
            backgroundColor={"purple.900"}
        >
            <CardHeader pb={0}>
                <Heading 
                    fontSize="1.5em" 
                    textAlign="center"
                    color="purple.50"
                    p={0}
                >
                    {title}
                </Heading>
            </CardHeader>
            <CardBody
                paddingX="2em"
            >
                {content}
            </CardBody>
        </Card>
    );
}

const cardContents = [
    {
        title: "General Risk Analysis",
        content: [
            "Historical fire records",
            "Temperature",
            "Ambient humidity",
            "Soil humidity",
            "Vegetation index",
            "Wind speed and direction",
            "Average precipitation levels",
            " Demographic and economic factors",
            " Geographic factors"
        ]
    },
    {
        title: "Prevention",
        content: [
            "Historical record of fires and magnitude",
            "Conditions under which a fire broke out",
            "Peventive measures taken"
        ]
    },
    {
        title: "Real-time Incident Analysis",
        content: [
            "Rate of spread",
            "Spread direction"
        ]
    },
    {
        title: "Incident Management",
        content: [
            "Most effective measures to mitigate a fire"
        ]
    }
]

export const Dashboard =  () => {
    return(
        <Flex
            width="100vw"
            minH="max-content"
            overflowY="auto"
        >
            <Tabs
                isFitted
                width="100%"
                variant="soft-rounded"
                colorScheme="purple"
                padding={2}
            >
                <TabList>
                    <Tab>Cards</Tab>
                    <Tab>Maps</Tab>
                </TabList>

                <TabPanels
                    overflowY="auto"
                    // height="100%"
                    // minH="max-content"
                >
                    <TabPanel
                        display="flex"
                        flexWrap="wrap"
                        gap={2}
                        justifyContent="center"
                        // minH="fit-content"
                        // overflowY="auto"
                    >
                    <DashboardCard
                        title={cardContents[0].title}
                        content={
                            <Accordion p={0} borderColor="transparent" allowMultiple>
                                <AccordionItem p={0}>
                                    <AccordionButton>
                                    <Heading
                                        size="sm"
                                        color="pink.50"
                                    >
                                        {cardContents[0].content[0]}
                                    </Heading>
                                    <AccordionIcon color="pink.50" />
                                    </AccordionButton>
                                    <AccordionPanel p={0}>
                                        <Image
                                            src={fire}
                                            borderRadius="md"
                                        />
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem p={0}>
                                    <AccordionButton>
                                        <Heading
                                            size="sm"
                                            color="pink.50"
                                        >
                                            {cardContents[0].content[1]}
                                        </Heading>
                                        <AccordionIcon color="pink.50" />
                                    </AccordionButton>
                                    <AccordionPanel p={0}>
                                        <Image
                                            src={temp}
                                            borderRadius="md"
                                        />
                                    </AccordionPanel>
                                </AccordionItem>
                                <AccordionItem p={0}>
                                    <AccordionButton>
                                        <Heading
                                            size="sm"
                                            color="pink.50"
                                        >
                                            {cardContents[0].content[2]}
                                        </Heading>
                                        <AccordionIcon color="pink.50" />
                                    </AccordionButton>
                                    <AccordionPanel p={0}>
                                        <Image
                                            src={humidity}
                                            borderRadius="md"
                                        />
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        }
                    />
                    <DashboardCard
                        title={cardContents[1].title}
                        content={
                            <>
                                <Heading
                                    size="sm"
                                    pb={4}
                                    color="pink.50"
                                >
                                    {cardContents[1].content[0]}
                                </Heading>
                                <Image
                                    src={fire}
                                    borderRadius="md"
                                />
                            </>
                        }
                    />
                    <DashboardCard
                        title={cardContents[2].title}
                        content={
                            <>
                                <Heading
                                    size="sm"
                                    pb={4}
                                    color="pink.50"
                                >
                                    {cardContents[2].content[0]}
                                </Heading>
                                <Image
                                    src={rate}
                                    borderRadius="md"
                                />
                            </>
                        }
                    />
                    <DashboardCard
                        title={cardContents[3].title}
                        content={
                            <>
                                <Heading
                                    size="sm"
                                    pb={4}
                                    color="pink.50"
                                >
                                    {cardContents[3].content[0]}
                                </Heading>
                                <Image
                                    src="https://fireadaptednetwork.org/wp-content/uploads/2020/10/Wildfire-Recovery_Graphic_Chrono_v2020-768x768.png"
                                    borderRadius="md"
                                />
                            </>
                        }
                    />
                        {/* { cardContents.map( (card, index) => 
                            (<DashboardCard
                                key={index}
                                title={card.title}
                                content={
                                    <UnorderedList>
                                    {card.content.map(
                                        (content, index) => (
                                            <ListItem key={index}>
                                                {content}
                                            </ListItem>
                                        )
                                    )}
                                    </UnorderedList>
                                }
                            />)
                        )} */}
                    </TabPanel>
                    <TabPanel
                        display="flex"
                        flexWrap="wrap"
                        gap={2}
                        justifyContent="center"
                    >
                        <Image
                            src={map}
                            objectFit="cover"
                            // width="100%"
                            minH="50vh"
                            borderRadius="md"
                        />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
}