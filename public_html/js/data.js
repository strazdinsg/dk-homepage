// Data for each week
const weeks = [
    //////////////////////
    // Week 1
    //////////////////////
    {
        topic: "History of the Internet",
        description: "Week 1 consists of two parts. In the first part we discuss the structure of the course, requirements, etc. In the second part we start by looking at the history of the Internet.",
        modules: [
            {
                name: "History",
                videos: [
                    {
                        title: "History #1: Communication",
                        mediasite_id: "74fe8a2a4f704d9ab1650994568122021d"
                    },
                    {
                        title: "History #2: Packet Switching",
                        mediasite_id: "106c43be8862443684ff38221ea7a4dc1d"
                    },
                    {
                        title: "History #3: ARPANET",
                        mediasite_id: "b870f98112ac47b9abb20e4352c740501d"
                    },
                    {
                        title: "History #4: Inter-networking",
                        mediasite_id: "b334a1373d9c4624b54713f4a07e7a161d"
                    },
                    {
                        title: "History #5: The Web",
                        mediasite_id: "8f3b30d0879c4efda60aa01bf6fd5a8a1d"
                    },
                    {
                        title: "History #6: Recent developments",
                        mediasite_id: "8e6a094ce8164046b1decfa72213c3d81d"
                    },
                ]
            }
        ],
        content: [
            {
                title: "Communication",
                items: [
                    "Why is communication needed?",
                    "What type of communication existed before the Internet?"
                ]
            },
            {
                title: "Packet switching",
                items: [
                    "What is circuit switching? What are the advantages and drawbacks of it?",
                    "What is packet switching and why is it important for modern communication?"
                ]
            },
            {
                title: "Predecessors of the Internet",
                items: [
                    "First packet-switched network: ARPANET. When and where did it arise?",
                    "ALOHAnet and other initiatives"
                ]
            },
            {
                title: "How was a global Inter-network created?",
                items: [
                    "Common protocols as a precondition for a global network",
                    "When and where is the Internet created?",
                    "TCP as the first common protocol",
                    "When does Europe join? When does Norway join?"
                ]
            },
            {
                title: "The web as the driver for rapid growth of the Internet",
                items: []
            },
            {
                title: "Status of the Internet today, recent developments",
                items: [
                    "Fast fiber-optics networks",
                    "Internet everywhere with 5G and other technologies",
                    "Smart devices, Internet of Things",
                    "All types of traffic sent over the Internet"
                ]
            },
        ],
        exercises: "Exercises%20for%20Lecture%201.pdf",
        slides: [
            {
                title: "Course introduction",
                file: "Lecture%2001-1%20-Introduction.pdf"
            },
            {
                title: "History",
                file: "Lecture%2001-2%20History%20of%20the%20Internet.pdf"
            }
        ],
        book_chapters: {
            kurose: ["1.7"],
            hallsteinsen: ["1.4"]
        }
    },

    //////////////////////
    // Week 2
    //////////////////////
    {
        topic: "Fundamental networking concepts, network traffic analysis with Wireshark",
        description: "In the second week we look at different fundamental concepts of computer networks.",
        modules: [
            {
                name: "Fundamentals",
                videos: [
                    {
                        title: "Fundamentals #1: Nuts and bolts",
                        mediasite_id: "0ffd6dd824de4dfa9d68dc73f3db433f1d"
                    },
                    {
                        title: "Fundamentals #2: Services",
                        mediasite_id: "18f37751622142afb188c71b8e92728d1d"
                    },
                    {
                        title: "Fundamentals #3: Protocols",
                        mediasite_id: "78804d476c6d47ae94d5a9d16dae3f541d"
                    },
                    {
                        title: "Exercise on protocol design",
                        mediasite_id: "5f2b0f5ae8a14de58da3a498ce0cd2ff1d"
                    },
                    {
                        title: "A solution for the exercise",
                        mediasite_id: "33c689da15a84b67844e5f4da4f03d6e1d"
                    },
                    {
                        title: "Fundamentals #4: Encoding data as bits",
                        mediasite_id: "c9d4dc822d5147c69735754b160665991d"
                    },
                    {
                        title: "Fundamentals #5: Queues, delays, packet loss",
                        mediasite_id: "c76ccf1ebbe2441aa4035200ff48e27e1d"
                    },
                    {
                        title: "Fundamentals #6: Internet Service Providers (ISP)",
                        mediasite_id: "40613fb6c98046218653e92802fc4d411d"
                    },
                    {
                        title: "Fundamentals #7: Core networks, access networks",
                        mediasite_id: "6db68b89d5584628a54b9b2ab13b1afd1d"
                    },
                ]
            },
            {
                name: "Network traffic analysis",
                videos: [
                    {
                        title: "Tutorial on using Wireshark",
                        mediasite_id: "f44c6217ec5745b387c323ea840f48bd1d"
                    },
                ]
            }
        ],
        content: [
            {
                title: "Nuts-and-bolts view (devices)",
                items: ["what are the fundamental building blocks (types of devices/hardware) participating in the computer networks?"]
            },
            {
                title: "Services",
                items: ["how can we describe computer networks from the service view?"]
            },
            {
                title: "Protocols",
                items: [
                    "What is a protocol?",
                    "Why do we need protocols for communication and networked services?"
                ]
            },
            {
                title: "Data transmission",
                items: ["How do we encode objects (text, images, audio, and video) as data messages?"]
            },
            {
                title: "Queues, delays and packet loss for packet-switched networks",
                items: [
                    "Why do we need queues?",
                    "Why do we get varying (not constant) delays?",
                    "Describe the four types of delays",
                    "Why (when) does packet loss occur?"
                ]
            },
            {
                title: "Internet service providers (ISPs)",
                items: [
                    "Who are ISPs?",
                    "The hierarchy of ISPs – why and how?"
                ]
            },
            {
                title: "Content distribution networks",
                items: ["What are these and why do we use them?"]
            },
            {
                title: "Network backbone and access networks",
                items: [
                    "The characteristics of network backbone",
                    "Access networks – the goal and characteristics"
                ]
            },
            {
                title: "Popular access net technologies",
                items: [
                    "Reusing phone line (DSL)",
                    "Fiber optics",
                    "Mobile routers (4G, 5G)"
                ]
            },
            {
                title: "Network traffic analysis",
                items: [
                    "What is sent over the network?",
                    "Wireshark tool for network traffic analysis – practical skills for using it for packet overview and individual packet analysis",
                ]
            }
        ],
        slides: [
            {
                title: "Fundamentals",
                file: "Lecture%2002%20Fundamentals.pdf"
            },
        ],
        exercises: "Exercises%20for%20Lecture%202.pdf",
        book_chapters: {
            kurose: [
                "1.1.1 (Nuts and bolts)",
                "1.1.2 (Service description)",
                "1.1.3 (Protocols)",
                "1.2.1 (Access networks)",
                "1.3.3 (ISP)",
                "1.4.1 and 1.4.2 (Queues, delays, packet loss)"
            ],
            hallsteinsen: [
                "3.1 (Nuts and bolts, and service description)",
                "2.2 (Protocols)"
            ]
        }
    }, // EOF Week 2

    //////////////////////
    // Week 3
    //////////////////////
    {
        topic: "Physical layer",
        description: "We discuss physical-layer issues: how to encode data into bits and which are popular physical media used for computer networks.",
        modules: [
            {
                name: "Physical layer",
                videos: [
                    {
                        title: "PHY #1: Analog and digital data",
                        mediasite_id: "8293aa2b0abc436a8d6db8ea54d86eb31d"
                    },
                    {
                        title: "PHY #2: Signaling, symbols, bitrate",
                        mediasite_id: "97e84a5e592c487db9dbc3e27ae306491d"
                    },
                    {
                        title: "PHY #3: Digital signaling",
                        mediasite_id: "e4b550d45472486fa8fb414d9559e89c1d"
                    },
                    {
                        title: "PHY #4: Analog signaling",
                        mediasite_id: "4086d91ce1eb4f4a8c35b3ca8d87bf0d1d"
                    },
                    {
                        title: "PHY #5: Synchronization",
                        mediasite_id: "4bf2fdc92ff44288b0fc50e000faf6f81d"
                    },
                    {
                        title: "PHY #6: Physical media",
                        mediasite_id: "c2f0286f3df34ac793121fbc5858bbff1d"
                    },
                    {
                        title: "How the fiber optic cable works",
                        youtube_id: "0MwMkBET_5I"
                    }
                ],
            }
        ],
        content: [
            {
                title: "Data and signals",
                items: [
                    "Digital and analog data",
                    "Encoding data as symbols into digital and analog signals"
                ]
            },
            {
                title: "Digital signaling",
                items: [
                    "The principles – encoding bits as different voltage levels",
                    "Challenges: effectiveness, synchronization, robustness",
                    "Digital encoding types: absolute, differential, bi-phase",
                    "Popular encodings: Non-Return to Zero (NRZ), Non-Return to Zero Inverted (NRZI), Manchester (Biphase)"
                ]
            },
            {
                title: "Analog signaling",
                items: [
                    "The principle of modulating a carrier signal with data signal",
                    "Popular modulations: ASK, FSK, PSK"
                ]
            },
            {
                title: "Synchronization",
                items: ["why is it important to synchronize sender and receiver, what would happen if they are out-of-sync?"]
            },
            {
                title: "Physical media",
                items: [
                    "Name the popular physical media today",
                    "Advantages and drawbacks for each of these physical media: twisted pair cable, fiber optic cable, wireless communication"
                ]
            },
        ],
        slides: [
            {
                title: "Physical layer",
                file: "Lecture%2003%20Physical%20layer.pdf"
            },
        ],
        exercises: "Exercises%20for%20Lecture%203.pdf",
        book_chapters: {
            kurose: [
                "1.2.2 (Physical media)"
            ],
            hallsteinsen: [
                "6.6 (Medier)",
                "6.7 (Analoge og digitale data og signaler)",
            ]
        },
        links: [
            {
                text: "Data Encoding Techniques, Digital Modulation Techniques in Tutorialspoint",
                url: "https://www.tutorialspoint.com/digital_communication/digital_communication_data_encoding_techniques.htm"
            },
            {
                text: "Chapters 6.5-6.7 from Hallsteinsen's book",
                url: "./slides/HB%20Ch%206.5-6.7.pdf"
            },
            {
                text: "Kahoot: repetition of material from weeks 1 and 2",
                url: "https://create.kahoot.it/share/dk20-2-fundamentals/c36c3023-bf57-4f5a-94ac-e4cbcf35d49b"
            }
        ]
    }, // EOF Week 3

    //////////////////////
    // Week 4
    //////////////////////
    {
        topic: "Application layer",
        description: "This week consists of three modules. First module is about protocols, this time - with more details on who manages the protocols and how to find documentation. Second module is introduction into the application layer - the choices for communication architectures, introduction to the socket abstraction. The third module is about one very important application-layer service: the Domain Name System (DNS).",
        // Used to separate the videos into modules
        modules: [
            {
                name: "Protocols",
                videos: [
                    {
                        title: "The need for protocols",
                        mediasite_id: "7d487e2372164085898f2691f9ff6aad1d"
                    },
                    {
                        title: "Standardization organizations",
                        mediasite_id: "c3c9c383b50c4dbc99ed2f777a5a6dea1d"
                    },
                    {
                        title: "Finding documentation",
                        mediasite_id: "f555f26a5cdc428686ea33281d22039d1d"
                    },
                    {
                        title: "Protocol layers",
                        mediasite_id: "c57e7f1934064c7ea8d5363061d7a8161d"
                    },
                    {
                        title: "Encapsulation",
                        mediasite_id: "4abe48fad8aa4f6aa6f8f4827eb5b8a21d"
                    }
                ]
            },
            {
                name: "Application layer",
                videos: [
                    {
                        title: "Introduction to application layer",
                        mediasite_id: "6205983fdc1f4801915428e943f0a31c1d"
                    },
                    {
                        title: "Requirements from the transport layer",
                        mediasite_id: "bc523f31fb5046e3b9a65e0d87af2d601d"
                    },
                    {
                        title: "Server-client VS Peer-to-peer communication architectures",
                        mediasite_id: "214449cb43d7465997f591aed716afa91d"
                    },
                    {
                        title: "Connection-oriented and connection-less communication",
                        mediasite_id: "a1116b778adf44a1b4a729bafa098ad01d"
                    },
                    {
                        title: "Sockets",
                        mediasite_id: "a412433f842444e58849bf042e4c313e1d"
                    }
                ]
            },
            {
                name: "Domain Name System (DNS)",
                videos: [
                    {
                        title: "Motivation for DNS",
                        mediasite_id: "80541a8480514eafa17cbc3a234a6e141d"
                    },
                    {
                        title: "DNS servers hierarchy",
                        mediasite_id: "3513f6592900449790ecc6ef54fca00f1d"
                    },
                    {
                        title: "DNS caching",
                        mediasite_id: "90c228e52f394250ac205ded6c4cd2cb1d"
                    },
                    {
                        title: "Packet format",
                        mediasite_id: "3eacbf5458e8453499bf18c27c89cd921d"
                    },
                    {
                        title: "Registering a domain name",
                        mediasite_id: "a88459b55e7d4265a2bd3e46db4d26671d"
                    }
                ]
            }
        ],
        content: [
            {
                title: "Computer network protocols",
                items: [
                    "The need for protocols",
                    "What is a protocol?",
                    "Who maintains the protocols? Standardization organizations: IETF, IEEE, ISO, W3C",
                    "Looking up protocol documentation in IETF RFC directory",
                    "Layered protocols for the Internet. ISO/OSI and TCP/IP models",
                    "Protocol encapsulation"
                ]
            },
            {
                title: "Application layer",
                items: [
                    "Goals, responsibilities",
                    "Requirements from transport protocol",
                    "Examples of app-layer protocols",
                    "Connection architectures: server-client, peer-to-peer",
                    "Connection-oriented and connection-less communication",
                    "Socket abstraction"
                ]
            },
            {
                title: "Domain name system (DNS)",
                items: [
                    "Motivation for DNS",
                    "DNS server hierarchy",
                    "DNS caching",
                    "Understanding DNS packets, analysis with Wireshark",
                ]
            },
        ],
        slides: [
            {
                title: "Protocols",
                file: "Lecture%2004-1%20Protocols.pdf"
            },
            {
                title: "Application layer",
                file: "Lecture%2004-2%20App%20layer%20intro.pdf"
            },
            {
                title: "DNS",
                file: "Lecture%2004-3%20DNS.pdf"
            }
        ],
        exercises: "Exercises%20for%20Lecture%204.pdf",
        book_chapters: {
            kurose: [
                "beginning of 2 and 2.1, 2.1.5 (Application layer)",
                "2.1.3, 2.1.4 (Requirements for transport layer)",
                "2.1.1 (Server-client VS P2P)",
                "beginning of 3.3. and 3.5 (Connection oriented/-less)",
                "2.1.2 (Sockets)",
                "end of 1.1.1, page 33 (Standardization)",
                "1.5 (Protocol layers)",
                "1.5.2 (Encapsulation)",
                "2.4 (DNS)"
            ],
            hallsteinsen: [
                "3.1 and 3.5 (Application layer)",
                "4.1 (Requirements for transport layer)",
                "2.6 (Server-client VS P2P)",
                "4.4 (Connection oriented/-less)",
                "2.2 and 2.3 (Standardization)",
                "2.4 (Protocol layers)",
                "2.4.1 (Encapsulation)",
                "3.4 (DNS)"
            ]
        },
        links: [
            {
                text: "Network sockets (Wikipedia)",
                url: "https://en.wikipedia.org/wiki/Network_socket"
            },
            {
                text: "How to Decrypt SSL with Wireshark – HTTPS Decryption Guide",
                url: "https://www.comparitech.com/net-admin/decrypt-ssl-with-wireshark/"
            },
            {
                text: "Kahoot: repetition of material from week 3",
                url: "https://create.kahoot.it/share/dk20-3-physical-layer/2fdbd38d-47cf-44ca-b7f4-b8ddf5b7d8f5"
            }
        ]
    }, // EOF Week 4
];

// Use this variable find out the current week, numbering starts at 1 (not at 0)
let currentWeek = getUrlParameterByName("week", 1);
let currentModule = getUrlParameterByName("module", 1);

// Make sure we get the parameters as integers
currentWeek = parseInt(currentWeek);
currentModule = parseInt(currentModule);

/**
 * Get HTTP GET parameter value from the URL.
 * Code adapted from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 *
 * @param name Parameter name
 * @param {string|null} defaultValue Return this if the parameter is not specified in the URL
 * @return {string|null}
 */
function getUrlParameterByName(name, defaultValue) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return defaultValue;
    if (!results[2]) return defaultValue;
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
