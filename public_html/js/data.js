// Data for each week
const weeks = [
    //////////////////////
    // Week 1
    //////////////////////
    {
        topic: "History of the Internet",
        description: "Week 1 consists of two parts. In the first part we discuss the structure of the course, requirements, etc. In the second part we start by looking at the history of the Internet.",
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
            {
                title: "Tutorial on using Wireshark",
                mediasite_id: "f44c6217ec5745b387c323ea840f48bd1d"
            },
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
            kurose: [],
            hallsteinsen: []
        }
    },
];

// Use this variable find out the current week, numbering starts at 1 (not at 0)
let currentWeek = getUrlParameterByName("week");
if (!currentWeek) currentWeek = 1;
currentWeek = parseInt(currentWeek); // Make sure we get an integer

/**
 * Get HTTP GET parameter value from the URL.
 * Code adapted from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 *
 * @param name Parameter name
 * @return {string|null}
 */
function getUrlParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
