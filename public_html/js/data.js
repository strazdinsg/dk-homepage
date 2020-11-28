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
                text: "Kahoot: repetition of material from week 3",
                url: "https://create.kahoot.it/share/dk20-3-physical-layer/2fdbd38d-47cf-44ca-b7f4-b8ddf5b7d8f5"
            }
        ]
    }, // EOF Week 4

    //////////////////////
    // Week 5
    //////////////////////
    {
        topic: "The Web",
        description: "This week  we discuss the world wide web (WWW) or the Web for short. The fundamental part of the web is the HTTP protocol, therefore most of the lecture is devoted to understanding HTTP. In the last part we also look at analysis of web traffic with both Wireshark and developer tools in the browser.",
        // Used to separate the videos into modules
        modules: [
            {
                name: "The Web",
                videos: [
                    {
                        title: "Web structure",
                        mediasite_id: "9ec0978d60db41fd8ce5950fa5a544da1d"
                    },
                    {
                        title: "Get entertained (and informed) in just 50 sec! :D",
                        youtube_id: "0TtlAPlQ1YY"
                    },
                    {
                        title: "HTTP protocol overview",
                        mediasite_id: "e80be3d3c61c444ebcb0bfdd2e91b3a51d"
                    },
                    {
                        title: "HTTP request and response messages",
                        mediasite_id: "0261470436b44077bc94f660278624371d"
                    },
                    {
                        title: "Submitting data with HTTP POST",
                        mediasite_id: "fc5c4032da4748158e0db3bf070d42701d"
                    },
                    {
                        title: "Cookies",
                        mediasite_id: "6ae40a3bdf2e45bfa95788c3540ea9dc1d"
                    },
                    {
                        title: "Optimizations",
                        mediasite_id: "3b4d06cc159240e2bec5e3a9cfd03aba1d"
                    },
                    {
                        title: "Securing web with HTTPS",
                        mediasite_id: "ec97afaf3aba47e2ba017ad4fcc2ffbb1d"
                    },
                    {
                        title: "HTTP traffic analysis with Wireshark and Chrome Dev Tools",
                        mediasite_id: "0c40adbf2b6547a1b2f67a67a5320b171d"
                    },
                    {
                        title: "More website analysis with dev tools",
                        mediasite_id: "67f6dd7d6a4140eb89a404edfd78bc8d1d"
                    }
                ]
            },
        ],
        content: [
            {
                title: "Overview of the web",
                items: [
                    "Four building blocks: browser, web server, HTTP protocol, HTML language",
                    "Structure of modern web: HTML + CSS + Javascript",
                ]
            },
            {
                title: "HTTP protocol",
                items: [
                    "Request/response cycle",
                    "Text-based message format",
                    "Submitting data with POST"
                ]
            },
            {
                title: "Cookies",
                items: [
                    "Used for session management",
                    "Privacy issues",
                ]
            },
            {
                title: "Securing HTTP with SSL",
                items: []
            },
            {
                title: "Analysis of web traffic",
                items: [
                    "With wireshark and Chrome developer tools",
                    "How to see encrypted traffic"
                ]
            },
        ],
        slides: [
            {
                title: "The Web",
                file: "Lecture%2005%20Web.pdf"
            },
        ],
        exercises: "Exercises%20for%20Lecture%205.pdf",
        book_chapters: {
            kurose: [
                "2.2"
            ],
            hallsteinsen: [
                "3.2"
            ]
        },
        links: [
            {
                text: "How to Decrypt SSL with Wireshark – HTTPS Decryption Guide",
                url: "https://www.comparitech.com/net-admin/decrypt-ssl-with-wireshark/"
            },
            {
                text: "Kahoot: repetition of material from week 4",
                url: "https://create.kahoot.it/share/dk-20-4-app-layer/2d77e6db-0c27-4286-9ecc-40fafd56fda6"
            }
        ]
    }, // EOF Week 5

    //////////////////////
    // Week 6
    //////////////////////
    {
        topic: "Network programming (Sockets)",
        description: "We discuss the fundamental way of programming networking apps - using socket API.",
        // Used to separate the videos into modules
        modules: [
            {
                name: "Socket introduction, theory",
                videos: [
                    {
                        title: "Introduction, TCP and UDP",
                        mediasite_id: "5f4aa4db96ba4201b9e73dfc4a2d0a9d1d"
                    },
                    {
                        title: "Connection establishment",
                        mediasite_id: "55aa71b94b804ef78c8075d09ad628c11d"
                    },
                    {
                        title: "TCP connection establishment",
                        mediasite_id: "06c402c428314a1691d2a41e455d9d321d"
                    },
                    {
                        title: "Socket API",
                        mediasite_id: "93c7ef6c68b94886a6f68ed6209827711d"
                    },
                ]
            },
            {
                name: "Multi-threaded programming",
                videos: [
                    {
                        title: "Motivation for multi-threading",
                        mediasite_id: "e5136b2b924146d3b7bbb757a654754b1d"
                    },
                    {
                        title: "Multi-threading in real life",
                        mediasite_id: "fed259c0ada84fd3afd16476a618af671d"
                    },
                    {
                        title: "Typical multi-threaded TCP server workflow",
                        mediasite_id: "d701c1a404e44dcb99e4596a8b7743401d"
                    },
                    {
                        title: "CPU threads",
                        mediasite_id: "4072d94e713949a287165a2927fea09c1d"
                    },
                    {
                        title: "Thread programming in Java",
                        mediasite_id: "607c52b3c9484324aa72686e03005deb1d"
                    },
                    {
                        title: "Thread programming in Python",
                        mediasite_id: "0372fafad05d408aba2cea97879ed5881d"
                    },
                ]
            },
            {
                name: "Socket programming in Java (Data)",
                videos: [
                    {
                        title: "Example TCP application",
                        mediasite_id: "01f7c3bae29c467789d47dda3f3397f11d"
                    },
                    {
                        title: "One-page TCP client and server examples",
                        mediasite_id: "1036ffb6cf564476b7767425166df5841d"
                    },
                    {
                        title: "Opening and closing a socket",
                        mediasite_id: "4ed59f2223294dd3b2b19869a9f7b9721d"
                    },
                    {
                        title: "Send and receive data on the socket",
                        mediasite_id: "a8b47a7c449d4b5e9e848abdef09a3361d"
                    },
                    {
                        title: "Easier I/O with BufferedReader and PrintWriter",
                        mediasite_id: "9712ee7b713a42b9938bb051982e602a1d"
                    },
                    {
                        title: "Creating a TCP Server",
                        mediasite_id: "f7988733c9714e61ab921dab3c640d2d1d"
                    },
                    {
                        title: "Multi-threaded server",
                        mediasite_id: "b002f4e1fe3b45efaef63fee05e55f821d"
                    },
                    {
                        title: "Changing the protocol",
                        mediasite_id: "e80bced3c0e844a481d2c0c4c291a3201d"
                    },
                    {
                        title: "Objects as messages",
                        mediasite_id: "889835825526475d83ec5a28391866551d"
                    }
                ]
            },
            {
                name: "Socket programming in Python (Elektro)",
                videos: [
                    {
                        title: "Example TCP application",
                        mediasite_id: "95f9ccbb18d344b08d3f919c20aa88d01d"
                    },
                    {
                        title: "PyCharm editor (for professional coding)",
                        mediasite_id: "4ef780a3a9ba44208926bcd04ed5b6181d"
                    },
                    {
                        title: "TCP client: opening a connection",
                        mediasite_id: "152f7eabdaee4194bdfd4f01eb5d31291d"
                    },
                    {
                        title: "Sending and receiving data",
                        mediasite_id: "ca3a1c7010054542b87deb53f1b968031d"
                    },
                    {
                        title: "Reading one line of text from the socket",
                        mediasite_id: "a433e250fdfb4a48b8e8448282a4bb3c1d"
                    },
                    {
                        title: "Creating a TCP server",
                        mediasite_id: "35527d077b1149a48e4db6e757cdc7531d"
                    },
                    {
                        title: "Reading one line on the server",
                        mediasite_id: "293518c6d4c3445e9af72d26a51c01971d"
                    },
                    {
                        title: "Multi-threaded server",
                        mediasite_id: "febf2b170b274b039b00a028462cde371d"
                    },
                    {
                        title: "Global variables",
                        mediasite_id: "93eb8041045e47bb85f513328436c33b1d"
                    }
                ]
            },
        ],
        content: [
            {
                title: "Socket programming",
                items: [
                    "Connection establishment in TCP, three-way handshake",
                    "Socket API - cross-platform abstraction for network programming",
                    "Multi-threaded programming - why do we need it, what does it mean",
                    "Practical TCP socket programming in a language of your choice"
                ]
            },
        ],
        slides: [
            {
                title: "Socket programming",
                file: "Lecture%2006%20Socket%20programming.pdf"
            },
        ],
        exercises: null,
        book_chapters: {
            kurose: ["beginning og 2.7", "2.7.2"],
            hallsteinsen: ["Vedlegg B"]
        },
        links: [
            {
                text: "Kahoot: repetition of material from week 5",
                url: "https://create.kahoot.it/share/dk-20-5-web/4b2b6a9a-d1ef-4036-a909-4f388c597055"
            },
            {
                text: "Socket programming examples in Python, source code",
                url: "https://github.com/strazdinsg/datakomm-tools/tree/master/PythonSockets"
            }
        ]
    }, // EOF Week 6


    //////////////////////
    // Week 7
    //////////////////////
    {
        topic: "Network programming, Part 2",
        description: "We discuss two topics: UDP socket programming and data marshalling (how to serialize data for transmission).",
        // Used to separate the videos into modules
        modules: [
            {
                name: "Socket programming, part 2",
                videos: [
                    {
                        title: "Intro, UDP programming",
                        mediasite_id: "cccd63104d594e678d404c85d84850a61d"
                    },
                    {
                        title: "UDP sockets in Java",
                        mediasite_id: "dbfcadfa8a45480490e98cdc555374221d"
                    },
                    {
                        title: "UDP sockets in Python",
                        mediasite_id: "a8861c08cf9143e1a512b56d320066ca1d"
                    },
                    {
                        title: "Data marshalling - the problem",
                        mediasite_id: "f79f006ab8a643acb2e384deac60f1ae1d"
                    },
                    {
                        title: "Fixed size messages",
                        mediasite_id: "a7c95db58d2a4742921e5ecac054b8ee1d"
                    },
                    {
                        title: "FSM exercise - a solution",
                        mediasite_id: "7c21046149614b018264abf81b80ab121d"
                    },
                    {
                        title: "Message separators",
                        mediasite_id: "0381d7ec26ba4c3ca9035b036c9514841d"
                    },
                    {
                        title: "Type-Length-Value",
                        mediasite_id: "ec0e112c97b8445ab1cfbc50726611701d"
                    },
                    {
                        title: "Side note: encoding numbers as strings and binary",
                        mediasite_id: "1e521c5dab19405593ebdd252638d26e1d"
                    },
                    {
                        title: "JSON, XML (in UDP or HTTP)",
                        mediasite_id: "a60655e00f5a4d558275f1054191445d1d"
                    },
                    {
                        title: "Google Protocol Buffers",
                        mediasite_id: "a2c86289ae3b43baa10c04e69d5f6e801d"
                    },
                ]
            }
        ],
        content: [
            {
                title: "Socket programming with UDP",
                items: []
            },
            {
                title: "Data marshalling",
                items: [
                    "The problem and motivation: WHY and HOW?",
                    "Encoding data in fixed-size messages",
                    "Using message separators",
                    "Type-Length-Value approach",
                    "Encoding objects in HTTP responses, using JSON for serialization",
                    "Advantages to use custom binary protocols"
                ]
            },
        ],
        slides: [
            {
                title: "Socket programming, Part 2",
                file: "Lecture%2007%20Socket%20programming%202.pdf"
            },
        ],
        exercises: "Exercises%20for%20Lecture%207.pdf",
        book_chapters: {
            kurose: ["beginning of 2.7", "2.7.1"],
            hallsteinsen: []
        },
        links: [
            {
                text: "Socket programming examples in Python, source code",
                url: "https://github.com/strazdinsg/datakomm-tools/tree/master/PythonSockets"
            }
        ]
    }, // EOF Week 7

    //////////////////////
    // Week 8
    //////////////////////
    {
        topic: "High-level Network programming",
        description: "We discuss how higher-level programming abstractions are built. We also take a look at a couple of (currently) popular ways to program network applications: REST API, WebSockets, MQTT, Modbus.",
        // Used to separate the videos into modules
        modules: [
            {
                name: "High-level network programming",
                videos: [
                    {
                        title: "Protocol reuse",
                        mediasite_id: "b0a82571104e474ca45a27e2aa4d91791d"
                    },
                    {
                        title: "Web services, REST",
                        mediasite_id: "835c6c4bd8374d8094bd9ce27efcfaa11d"
                    },
                    {
                        title: "Websocket: motivation",
                        mediasite_id: "d66202e4a85842abb864b3613a5874281d"
                    },
                    {
                        title: "Websocket: idea",
                        mediasite_id: "1b833ce239f34660b6cc53bd62e2736d1d"
                    },
                    {
                        title: "Websocket: protocol",
                        mediasite_id: "b46c8bb07b93400a9c4f94a2d36cff281d"
                    },
                    {
                        title: "Websocket: debugging",
                        mediasite_id: "9a57b1d31e3d406eb529afc9c72619b01d"
                    },
                    {
                        title: "Websocket: programming",
                        mediasite_id: "946727cd154b4e6f9c0b166c977d9c691d"
                    },
                    {
                        title: "Messaging, MQTT",
                        mediasite_id: "3bdfbd7ba8184b34892e76c683ff960d1d"
                    },
                    {
                        title: "Industrial buses, ModBus",
                        mediasite_id: "dd946b1008344cc89a4053ad89d0dc391d"
                    },
                ]
            }
        ],
        content: [
            {
                title: "Protocol reuse and creating higher-level programming abstractions",
                items: []
            },
            {
                title: "WebSockets",
                items: [
                    "Why were WebSockets created?",
                    "How do they work?",
                ]
            },
            {
                title: "WebServices, REST - general idea",
                items: []
            },
            {
                title: "Publish-subscribe messaging, MQTT as one example",
                items: []
            },
            {
                title: "Industrial buses, ModBus as one example",
                items: []
            },
        ],
        slides: [
            {
                title: "High-level network programming",
                file: "Lecture%2008%20High-level%20net%20prog.pdf"
            },
        ],
        exercises: "Exercises%20for%20Lecture%208.pdf",
        book_chapters: {
            kurose: [],
            hallsteinsen: []
        },
        links: [
            {
                text: "REST API client in Python",
                url: "https://realpython.com/api-integration-in-python/"
            },
            {
                text: "REST API client in Java",
                url: "https://github.com/strazdinsg/datakomm-tools/tree/master/REST-examples"
            },
            {
                text: "WebSocket protocol description, RFC 6455",
                url: "https://tools.ietf.org/html/rfc6455"
            },
            {
                text: "WebSocket demo in Javascript",
                url: "https://www.websocket.org/echo.html"
            },
            {
                text: "Summary of MQTT protocol",
                url: "https://www.wikipendium.no/ID203012_Computer_Networks_and_network_programming#mqtt"
            },
            {
                text: "ModBus programming example in Java",
                url: "https://github.com/strazdinsg/datakomm-tools/tree/master/ModBusTest"
            },
        ]
    }, // EOF Week 8

    //////////////////////
    // Week 9
    //////////////////////
    {
        topic: "Transport layer",
        description: "This week we look at the transport layer. We discuss general principles first: multiplexing, reliable data transfer, pipelined transport. Then we discuss the two transport-layer protocols in the Internet: TCP and UDP.",
        // Used to separate the videos into modules
        modules: [
            {
                name: "Transport layer concepts and UDP protocol",
                videos: [
                    {
                        title: "Transport layer introduction",
                        mediasite_id: "b475d797a560469bab5639caa2536a5b1d"
                    },
                    {
                        title: "Multiplexing, ports",
                        mediasite_id: "dbd34a6e29604200874ca18f068ac78a1d"
                    },
                    {
                        title: "Reliable transfer",
                        mediasite_id: "c249774be2174bdeba43e6a4f49410a01d"
                    },
                    {
                        title: "Pipelined transport",
                        mediasite_id: "670d5464882b4eee8f24ecf758cf63ea1d"
                    },
                    {
                        title: "UDP protocol",
                        mediasite_id: "d687ef9c51884174bf99a3de62add2c21d"
                    },
                ]
            },
            {
                name: "TCP protocol",
                videos: [
                    {
                        title: "TCP Introduction",
                        mediasite_id: "a4279f5bb180459e9ce6fb336c5739881d"
                    },
                    {
                        title: "Opening and closing TCP connections",
                        mediasite_id: "4f54377772af405390f88bcd0cd9bc5c1d"
                    },
                    {
                        title: "Reliable transfer in TCP",
                        mediasite_id: "02214e4735a64d5fa73d863e584c08ea1d"
                    },
                    {
                        title: "Flow control in TCP",
                        mediasite_id: "e07f2cd064424466aaa6f3a0eb433fff1d"
                    },
                    {
                        title: "Congestion control idea",
                        mediasite_id: "b63a0ce6afe1476fb759a701d3175e8b1d"
                    },
                    {
                        title: "Congestion control in TCP",
                        mediasite_id: "5bbf1b52b1f74d80ab679e56b840d94f1d"
                    },
                    {
                        title: "TCP always loses packets; Summary of the lecture",
                        mediasite_id: "67f4967b1ef2408d8ed832b6926081281d"
                    },
                ]
            },
            {
                name: "TCP Exercise walkthrough",
                videos: [
                    {
                        title: "Walkthrough for Week 9 exercises",
                        mediasite_id: "e9ad5ce98a3444fbb8b0070b330426af1d"
                    },
                ]
            },
        ],
        content: [
            {
                title: "Transport layer protocols",
                items: [
                    "The goal of transport layer",
                    "Service addressing (multiplexing)",
                    "Concepts necessary for reliable data transfer: acknowledgements, timeouts, retransmission, error detection, sequence numbers",
                    "Pipelined transport",
                ]
            },
            {
                title: "UDP protocol",
                items: []
            },
            {
                title: "TCP protocol",
                items: [
                    "Opening and closing connections",
                    "Reliable transfer with TCP",
                    "Flow control",
                    "Congestion control",
                    "Analysis of TCP segment headers in Wireshark"
                ]
            },
        ],
        slides: [
            {
                title: "Transport layer",
                file: "Lecture%2009%20Transport%20layer.pdf"
            },
        ],
        exercises: "Exercises%20for%20Lecture%209.pdf",
        book_chapters: {
            kurose: ["Chapter 3"],
            hallsteinsen: ["Chapter 4"]
        },
        links: null
    }, // EOF Week 9

    //////////////////////
    // Week 10
    //////////////////////
    {
        topic: "Network layer",
        description: "This week we look at the network layer. We start with introduction - what happens in network layer? Then we look a bit into the mystical creatures called 'routers'. Then we analyze the IP protocol, including the new version IPv6. Then a short intro to routing - how does it work? We finish with discussing 'small but important' tools in the network layer: DHCP protocol for address auto-configuration, Network Address Translation and ICMP for debugging.",
        // Used to separate the videos into modules
        modules: [
            {
                name: "Network layer",
                videos: [
                    {
                        title: "Network layer intro",
                        mediasite_id: "2418c90d6e7b4b7a9ff3294af9ffc7c51d"
                    },
                    {
                        title: "Routers",
                        mediasite_id: "a048e6d3738d4f5ba178c567a495f37c1d"
                    },
                    {
                        title: "IP datagram format",
                        mediasite_id: "1a498858491f422c85ec922f9f7aa9a81d"
                    },
                    {
                        title: "IP addressing",
                        mediasite_id: "9fe6f052bc484a30a098731406d6bff31d"
                    },
                    {
                        title: "IPv6",
                        mediasite_id: "a7937cdb232148f3ad2885eb2e9298ab1d"
                    },
                    {
                        title: "Routing",
                        mediasite_id: "e97391848abc4987afe60b6563c63b601d"
                    },
                    {
                        title: "Routing in the Internet",
                        mediasite_id: "8d39432bd82d467c9c76e32c673f61431d"
                    },
                    {
                        title: "DHCP",
                        mediasite_id: "f3941967df234c908a8855012eb936601d"
                    },
                    {
                        title: "NAT",
                        mediasite_id: "6e10d87ab8f84e508828bd6770963c8d1d"
                    },
                    {
                        title: "Debugging with ICMP",
                        mediasite_id: "e87b43747e69403ca210cbeccf3467de1d"
                    },
                    {
                        title: "Summary",
                        mediasite_id: "bd50237de9f2485bb8ca56499188db711d"
                    },
                ]
            }
        ],
        content: [
            {
                title: "Responsibility of network layer",
                items: [
                    "Routing and forwarding",
                    "Global addressing",
                ]
            },
            {
                title: "What's inside a router?",
                items: []
            },
            {
                title: "IP protocol",
                items: [
                    "Responsibility",
                    "IP datagram format - the main concepts",
                    "IPv6",
                    "IP addresses and hierarchy of IP networks",
                ]
            },
            {
                title: "Routing",
                items: ["General principles", "Basics of routing in the Internet, autonomous systems"]
            },
            {
                title: "Support-tools in the network layer",
                items: [
                    "DHCP for IP address auto-configuration",
                    "Network Address Translation (NAT)",
                    "ICMP for debugging (Ping, traceroute)"
                ]
            },
        ],
        slides: [
            {
                title: "Network layer",
                file: "Lecture%2010%20Network%20layer.pdf"
            },
        ],
        exercises: "Exercises%20for%20Lecture%210.pdf",
        book_chapters: {
            kurose: [
                "4.1 (Network layer introduction)",
                "4.2 (Routers)",
                "4.3 (IP protocol)",
                "4.3.3 (DHCP)",
                "4.3.4 (NAT)",
                "5.1 and 5.2 (Routing introduction)",
                "5.6 (ICMP)"
            ],
            hallsteinsen: [
                "5.1 (Network layer introduction)",
                "5.9 (Routers)",
                "5.3-5.7 and 10.3.2 (IP protocol)",
                "8.14 (DHCP)",
                "8.1.6 (NAT)",
                "10.4 (Routing introduction)",
                "5.8 (ICMP)"
            ]
        },
        links: null
    }, // EOF Week 10

    //////////////////////
    // Week 11
    //////////////////////
    {
        topic: "Link layer",
        description: "This week we look at the link layer. We start with introduction - what happens in link layer? Then we look at the problem of sharing transmission medium and how that can be solved with MAC protocols. Then we discuss principles of error detection and some examples. Then we look at transmission of data within local area network (LAN) and how packets are moved from one LAN to another. We finish by looking at Ethernet and link-layer switches. In the end we go through a case study called \"Retrospective\" in the English book. It summarizes a lot of theory we have went through in the course. This is an important part you can use for repetition.",
        // Used to separate the videos into modules
        modules: [
            {
                name: "Link layer Part 1 - Intro, MAC protocols",
                videos: [
                    {
                        title: "Link layer introduction",
                        mediasite_id: "8ac740b26ffd4be089c85d21b95c8c521d"
                    },
                    {
                        title: "Multiple Access Control (MAC) protocols",
                        mediasite_id: "63282b608886452ea3f5433b8313a6141d"
                    },
                    {
                        title: "Channel partitioning protocols",
                        mediasite_id: "272a2ad9722c40b2af466dc8f4bd897c1d"
                    },
                    {
                        title: "Taking turns protocols",
                        mediasite_id: "5f548555f350402299ae2658d7cb18a61d"
                    },
                    {
                        title: "Random access protocols",
                        mediasite_id: "d9b4c8c7a1394b1da8c4624d145f77881d"
                    },
                ]
            },
            {
                name: "Error detection",
                videos: [
                    {
                        title: "Error detection principles",
                        mediasite_id: "b6ed6298f1944ce192d9e7f91e24155d1d"
                    },
                    {
                        title: "Bit parity check",
                        mediasite_id: "c44fb4b847a24cf68860017f511c41791d"
                    },
                    {
                        title: "Checksums",
                        mediasite_id: "d1ef92034ed7413186a2b7adbf2b728d1d"
                    },
                    {
                        title: "Cyclic Redundancy Check (CRC)",
                        mediasite_id: "fddebe75fa5b45c993d6358a6807e8891d"
                    },
                ]
            },
            {
                name: "Data transmission within LAN and cross-LANs",
                videos: [
                    {
                        title: "Local Area Networks",
                        mediasite_id: "71227f5ce21446559a05c510704061ac1d"
                    },
                    {
                        title: "MAC addresses",
                        mediasite_id: "ce073d77c4174e628502f2eca30a19e01d"
                    },
                    {
                        title: "Address Resolution Protocol (ARP)",
                        mediasite_id: "aa871c6d23bb45ceb58d2078d7d5fa021d"
                    },
                    {
                        title: "Forwarding packets to another LAN",
                        mediasite_id: "bfdb5dbdc5984285b23829ad7303fefe1d"
                    },
                ]
            },
            {
                name: "Ethernet and Switches",
                videos: [
                    {
                        title: "Ethernet",
                        mediasite_id: "9e9ff8e3e38a4e4c8dd1ad7818b37a211d"
                    },
                    {
                        title: "Link-layer switches",
                        mediasite_id: "3f03811dec9a4d17b36f1ca3b18f0ed21d"
                    },
                    {
                        title: "Self-learning for switches",
                        mediasite_id: "e35f51d8d58d47b5b070584725b053421d"
                    },
                    {
                        title: "Typical institutional networks",
                        mediasite_id: "37e590433ea3476197972de769d6a9431d"
                    },
                    {
                        title: "Switches VS routers",
                        mediasite_id: "771ca9bf05124fa79299c0772ccc8c081d"
                    },
                ]
            },
            {
                name: "Retrospective",
                videos: [
                    {
                        title: "Retrospective",
                        mediasite_id: "26b2e19a460642febf018fd3aa9a58901d"
                    },
                ]
            },
        ],
        content: [
            {
                title: "Responsibility of link layer",
                items: [
                ]
            },
            {
                title: "MAC protocols",
                items: ["What is their purpose", "Main types of MAC protocols, their principles"]
            },
            {
                title: "Error detection",
                items: [
                    "Principles and limitations",
                    "Typical examples: parity check, checksums, CRC"
                ]
            },
            {
                title: "Data transmission within local-area-networks (LAN)",
                items: ["Concept of LAN", "Link-layer addresses for transmission within LAN", "Address resolution protocol (ARP)", "Data transmission across LANs"]
            },
            {
                title: "Link-layer switches",
                items: [
                    "Principles of operation (transparency)",
                    "Self-learning principles",
                    "Switches VS routers"
                ]
            },
        ],
        slides: [
            {
                title: "Link layer",
                file: "Lecture%2011%20Link%20layer.pdf"
            },
            {
                title: "Retrospective PPTX (with animations)",
                file: "Retrospective.pptx"
            }
        ],
        exercises: "Exercises%20for%20Lecture%211.pdf",
        book_chapters: {
            kurose: [
                "6.1 (Link layer introduction)",
                "6.2 (Error detection)",
                "6.3 (Sharing of media, MAC protocols)",
                "6.4.1 (Local networks, MAC addresses, ARP protocol)",
                "6.4.2 (Ethernet)",
                "6.4.3 (Link-layer switches)",
                "6.7 (Retrospective)",
            ],
            hallsteinsen: [
                "4.6 (Error detection)",
                "6.1 and 6.2 (Link layer introduction)",
                "6.3.1 and 6.3.3 (Sharing of media, MAC protocols)",
                "6.3.4, 6.4, 7.2.7 (Local networks, MAC addresses, ARP protocol)",
                "7.2 (Ethernet)",
                "7.2.3 (Link-layer switches)",
            ]
        },
        links: null
    }, // EOF Week 11

    //////////////////////
    // Week 12
    //////////////////////
    {
        topic: "Security in computer networks",
        description: "This week we touch the surface of different security aspects related to computer communication. One big part of it is cryptography. Other aspects are discussed, including WiFi security and Virtual Private networks (VPNs). We just touch the general principle without going into details.",
        // Used to separate the videos into modules
        modules: [
            {
                name: "Security in computer networks",
                videos: [
                    {
                        title: "Introduction, the four security aspects",
                        mediasite_id: "6525c35b0986410b8ed3c996e23ec0161d"
                    },
                    {
                        title: "Husk å svare på studiebarometeret! (se lenke i eposten fra NOKUT)",
                        youtube_id: "IF0k3z6u8Jg"
                    },
                    {
                        title: "Cryptography principles",
                        mediasite_id: "9074e94cb9fd439d95b2b9f5dfdda3b51d"
                    },
                    {
                        title: "Symmetric key cryptography",
                        mediasite_id: "5bffe1f4c23d4540bf494aa9a4e9c48b1d"
                    },
                    {
                        title: "Block ciphers",
                        mediasite_id: "656dda79e0d44962ba0e41dce4f5ec481d"
                    },
                    {
                        title: "Public key cryptography",
                        mediasite_id: "7aea568f35c446b9acf5871537be5d561d"
                    },
                    {
                        title: "Public key cryptography continued",
                        mediasite_id: "fa6f2d21098c4e849eacf1bf5b16be5a1d"
                    },
                    {
                        title: "Digital signatures",
                        mediasite_id: "2e9425b935af4ef6aa27f23a8ca09ff61d"
                    },
                    {
                        title: "Key certification",
                        mediasite_id: "354a0c0d5711469cad22f317835b56071d"
                    },
                    {
                        title: "Secure Sockets Layer (SSL)",
                        mediasite_id: "ee3e94b2ed42441abafcbfe7a62d97a31d"
                    },
                    {
                        title: "WiFi security",
                        mediasite_id: "10bb4c57191d4ec0afcb418f63ba5e9c1d"
                    },
                    {
                        title: "Virtual Private Networks (VPN)",
                        mediasite_id: "934a980af715445e85f13dbbce79003d1d"
                    }
                ]
            }
        ],
        content: [
            {
                title: "Security in computer networks",
                items: []
            },
            {
                title: "Four security aspects",
                items: ["Confidentiality", "Authenticity", "Integrity", "Operational stability"]
            },
            {
                title: "Cryptography",
                items: ["General principles", "Symmetric key cryptography principles", "Public key encryption"]
            },
            {
                title: "Digital signatures",
                items: []
            },
            {
                title: "Public key certification",
                items: []
            },
            {
                title: "Secure Socket Layer (SSL) - general principles",
                items: []
            },
            {
                title: "Wireless network (WiFi) security",
                items: []
            },
            {
                title: "Virtual Private Networks (VPN)",
                items: []
            },
        ],
        slides: [
            {
                title: "Network security",
                file: "Lecture%2013%20Security.pdf"
            }
        ],
        exercises: null,
        book_chapters: {
            kurose: [
                "8.1 (Four security aspects)",
                "8.2.1 (Cryptography)",
                "8.2.2 (Public-key cryptography)",
                "8.3 (Message signatures)",
                "8.6 (SSL)",
                "8.7 (VPN)",
                "8.7.1 (Securing Wireless LANs)",
            ],
            hallsteinsen: []
        },
        links: null
    }, // EOF Week 12

    //////////////////////
    // Week 13
    //////////////////////
    {
        topic: "Questions and Answers, Exercise solutions",
        description: "Here are answers to student questions, and solutions to weekly exercises.",
        // Used to separate the videos into modules
        modules: [
            {
                name: "Q&A",
                videos: [
                    {
                        title: "Part 1: Ports on routers, Local IPs, VPN, MAC for custom PCs",
                        mediasite_id: "2d97e696c0a0488e94eb7833de8c97641d"
                    },
                ]
            },
            {
                name: "Exercise solutions",
                videos: [
                    {
                        title: "Exercise solutions: Week 4 - Protocols",
                        mediasite_id: "b198970e85c8440cb2eea65f0130ff801d"
                    },
                ]

            }
        ],
        content: [
            {
                title: "Ports on routers",
                items: []
            },
            {
                title: "How come me and my friend get the same IP?",
                items: []
            },
            {
                title: "VPN - which layer is it?",
                items: []
            },
            {
                title: "MAC address for custom-build PCs",
                items: []
            },
            {
                title: "Exercises for Week 4 - Protocols, documentation, encapsulation",
                items: []
            },
        ],
        slides: [],
        exercises: null,
        book_chapters: {
            kurose: [],
            hallsteinsen: []
        },
        links: null
    }, // EOF Week 14

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
