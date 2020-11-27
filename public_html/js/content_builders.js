/**
 * Print a heading that includes week nr and title
 * @param weekNr Week number, starts at 1
 * @param parentNode Parent DOM Element where the content should be added. Use <body> when not specified.
 */
function printWeekHeading(weekNr, parentNode) {
    if (!parentNode) parentNode = document.body;
    const heading = document.createElement("h1");
    const week = weeks[weekNr - 1];
    heading.innerText = "Week " + weekNr + " - " + week.topic;
    heading.id = "week-" + weekNr;
    parentNode.appendChild(heading);
}

/**
 * Print a heading that includes week nr, module nr and module name
 * @param weekNr Week number, starts at 1
 * @param moduleNr Module number, starts at 1
 * @param parentNode Parent DOM Element where the content should be added. Use <body> when not specified.
 */
function printModuleHeading(weekNr, moduleNr, parentNode) {
    if (!parentNode) parentNode = document.body;
    const heading = document.createElement("h1");
    const modules = weeks[weekNr - 1].modules;
    const module = modules[moduleNr - 1];
    let moduleTitle = "";
    if (modules.length > 1) {
        moduleTitle = ", Module " + moduleNr;
    }
    heading.innerText = "Week " + weekNr + moduleTitle + " - " + module.name;
    parentNode.appendChild(heading);
}

/**
 * Print the description of the week's learning content
 * @param weekNr Week number, starts at 1
 * @param parentNode Parent DOM Element where the content should be added. Use <body> when not specified.
 */
function printWeekDescription(weekNr, parentNode) {
    if (!parentNode) parentNode = document.body;
    const paragraph = document.createElement("p");
    const week = weeks[weekNr - 1];
    paragraph.innerText = week.description;
    paragraph.id = "week-desc-" + weekNr;
    parentNode.appendChild(paragraph);
}

/**
 * Print the contents of the week
 * @param weekNr Week number, starts at 1
 * @param parentNode Parent DOM Element where the content should be added. Use <body> when not specified.
 */
function printWeekContents(weekNr, parentNode) {
    if (!parentNode) parentNode = document.body;
    const paragraph = document.createElement("p");
    paragraph.innerText = "At the end of the week you should have the following knowledge (and/or skills):";
    parentNode.appendChild(paragraph);
    const listNode = document.createElement("ol");
    weeks[weekNr - 1].content.forEach(content => printWeekContent(content, listNode));
    parentNode.appendChild(listNode);
}

function printWeekContent(content, listNode) {
    const topicNode = document.createElement("li");
    let c = "<b>" + content.title + "</b>";
    if (content.items.length >= 1) {
        c += ": ";
        if (content.items.length > 1) {
            // Several items, add them as a separate list
            c += "<ul>";
            content.items.forEach(item => {
                c += "<li>" + item + "</li>";
            });
            c += "</ul>";
        } else {
            // Only one item, show it directly
            c += content.items[0];
        }
    }
    topicNode.innerHTML = c;
    listNode.appendChild(topicNode);
}

/**
 * Print material list for the week
 * @param weekNr Week number, starts at 1
 * @param parentNode Parent DOM Element where the content should be added. Use <body> when not specified.
 */
function printWeekMaterials(weekNr, parentNode) {
    if (!parentNode) parentNode = document.body;
    const heading = document.createElement("h2");
    heading.innerText = "Learning materials";
    parentNode.appendChild(heading);
    const listNode = document.createElement("ul");
    listNode.appendChild(createVideoLinksForWeek(weekNr));
    const week = weeks[weekNr - 1];
    if (week.slides !== null && week.slides.length >= 1) {
        const slideNode = document.createElement("li");
        slideNode.innerHTML = createSlideLinkContent(week.slides);
        listNode.appendChild(slideNode);
    }
    if (week.exercises) {
        const exerciseNode = document.createElement("li");
        exerciseNode.innerHTML = "<a href='exercises/" + week.exercises + "'>Exercises</a>";
        listNode.appendChild(exerciseNode);
    }
    if (week.book_chapters.kurose.length > 0 || week.book_chapters.hallsteinsen.length > 0) {
        const bookNode = document.createElement("li");
        bookNode.innerHTML = createBookContent(week.book_chapters);
        listNode.appendChild(bookNode);
    }
    if (week.links) {
        const linkNode = createLinks(week.links, "Online materials");
        if (linkNode) {
            listNode.appendChild(linkNode);
        }
    }
    parentNode.appendChild(listNode);
}

/**
 * Create slide links
 * @param {array} slides Array containing slide information
 * @return {string} String to be placed inside a slide node
 */
function createSlideLinkContent(slides) {
    let s = "";
    if (slides.length > 1) {
        s = "Slides: <ul>";
        slides.forEach(slideInfo => {
            s += "<li><a href='slides/" + slideInfo.file + "'>" + slideInfo.title + "</a></li>"
        });
        s += "</ul>";
    } else {
        s = "<a href='slides/" + slides[0].file + "'>Slides</a>";
    }
    return s;
}

/**
 * Create related book chapter content
 * @param {object} bookChapters Book chapter object
 * @return {string} Content to be placed inside book link node
 */
function createBookContent(bookChapters) {
    let bc = "Relevant book chapters: <ul>";
    if (bookChapters.kurose.length > 0) {
        bc += createBookChapterContent(bookChapters.kurose, "Kurose-Ross' book");
    }
    if (bookChapters.hallsteinsen.length > 0) {
        bc += createBookChapterContent(bookChapters.hallsteinsen, "Hallsteinsen's book");
    }
    bc += "</ul>";
    return bc;
}

/**
 * Create an item describing relevant chapters for a single book
 * @param {array} chapters Array containing chapter numbers
 * @param {string} bookName Name of the book
 * @return {string} String to be placed inside one book list-item
 */
function createBookChapterContent(chapters, bookName) {
    let bc = "<li>" + bookName + ": ";
    bc += chapters.join(", ");
    bc += "</li>";
    return bc;
}

/**
 * Create a node with external links
 * @param {array} links Array containing objects with text and link
 * @param {string} linkTitle The title to show describing the links
 * @return {Element} DOM Element containing the list
 */
function createLinks(links, linkTitle) {
    const list = document.createElement("ul");
    links.forEach(link => {
        const item = document.createElement("li");
        item.innerHTML = "<a href='" + link.url + "'>" + link.text + "</a>";
        list.appendChild(item);
    });
    // This whole thing will be a single item in a list
    const wrapper = document.createElement("li");
    wrapper.innerText = linkTitle + ": ";
    wrapper.appendChild(list);
    return wrapper;
}


/**
 * Create link to a video of a specific week
 * @param {int} weekNr Week number, starts at 1, not at zero.
 * @return Element A DOM element containing the link(s)
 */
function createVideoLinksForWeek(weekNr) {
    const week = weeks[weekNr - 1];
    const item = document.createElement("li");
    if (week.modules.length === 1) {
        // A single module for the week
        const link = document.createElement("a");
        link.setAttribute("href", "videos.html?week=" + weekNr);
        link.innerText = "Videos";
        item.appendChild(link);
    } else {
        // Multiple modules for the week
        item.innerText = "Videos this week:";
        const videoList = document.createElement("ul");
        item.appendChild(videoList);
        let moduleIndex = 1;
        week.modules.forEach(module => {
            const videoItem = document.createElement("li");
            videoList.appendChild(videoItem);
            videoItem.innerHTML = "<a href='videos.html?week=" + weekNr + "&module=" + moduleIndex + "'>" + module.name + "</a>";
            moduleIndex++;
        });
    }
    return item;
}

/**
 * Create link to a video of a specific week
 * @param {int} weekNr Week number, starts at 1, not at zero.
 * @return Element A DOM element containing the link(s)
 */
function createVideoListingLink(weekNr) {
    const week = weeks[weekNr - 1];
    const paragraph = document.createElement("p");
    if (week.modules.length === 1) {
        // A single module for the week
        const link = document.createElement("a");
        link.setAttribute("href", "videos.html?week=" + weekNr);
        link.innerText = "Week " + weekNr + ": " + weeks[weekNr - 1].topic;
        paragraph.appendChild(link);
    } else {
        // Multiple modules for the week
        let moduleIndex = 1;
        week.modules.forEach(module => {
            const link = document.createElement("a");
            link.setAttribute("href", "videos.html?week=" + weekNr + "&module=" + moduleIndex);
            link.innerText = "Week " + weekNr + ", Module " + moduleIndex + ": " + module.name;
            const container = document.createElement("p");
            container.appendChild(link);
            paragraph.appendChild(container);
            moduleIndex++;
        });
    }
    return paragraph;
}

/**
 * Show a container with embedded video (append it to the HTML body)
 * @param {object} video Information about the video.
 */
function showVideo(video) {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "video-cell");
    const h2 = document.createElement("h2");
    h2.innerText = video.title;
    containerDiv.appendChild(h2);
    let iframe = document.createElement("iframe");
    if (video.youtube_id) {
        // A YouTube video
        iframe.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + video.youtube_id);
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    } else if (video.mediasite_id) {
        // Video stored on MediaSite
        iframe.setAttribute("src", "https://mediasite.ntnu.no/Mediasite/Play/" + video.mediasite_id);
        iframe.setAttribute("msallowfullscreen", "");
        iframe.setAttribute("allow", "fullscreen");
    } else {
        iframe = null;
    }

    if (iframe) {
        containerDiv.appendChild(iframe);
        document.body.appendChild(containerDiv);
    }
}

/**
 * Add a link to video fpr a particular week to a given menu parent node.
 * @param {int} weekNr Week number, starts at 1, not at zero.
 * @param {Element} parentNode Parent node where the menu item will be added
 */
function addVideoMenuItems(weekNr, parentNode) {
    const modules = weeks[weekNr - 1].modules;
    let moduleIndex = 1;
    modules.forEach(module => {
        const menuItem = document.createElement("a");
        menuItem.setAttribute("class", "dropdown-item");
        menuItem.setAttribute("href", "videos.html?week=" + weekNr + "&module=" + moduleIndex);
        menuItem.innerText = "Week " + weekNr + " - " + module.name;
        parentNode.appendChild(menuItem);
        moduleIndex++;
    });
}

/**
 * Add a week-intro block to a given menu parent node.
 * @param {int} weekNr Week number, starts at 1, not at zero.
 * @param {Element} parentNode Parent node where the content will be added
 */
function addWeekIntroBlock(weekNr, parentNode) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    const col = document.createElement("div");
    col.setAttribute("class", "col-lg-12");
    row.appendChild(col);
    const heading = document.createElement("h2");
    heading.innerText = "Week " + weekNr;
    col.appendChild(heading);
    const description = document.createElement("p");
    description.innerText = weeks[weekNr - 1].description;
    col.appendChild(description);
    const link = document.createElement("p");
    link.innerHTML = "<a class=\"btn btn-secondary\" href=\"materials.html#week-" + weekNr + "\" role=\"button\">View details &raquo;</a>";
    col.appendChild(link);
    col.appendChild(document.createElement("hr"));
    parentNode.appendChild(row);
}
