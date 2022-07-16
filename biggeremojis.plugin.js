/**
 * @name BiggerEmojis
 */


const payloads = {}

class BiggerEmojis {
    getName() { return "BiggerEmojis" }
    getAuthor() { return "Mika ❤ Floppa#2716" }
    getDescription() { return "Enlarges emojis!" }
    getVersion() { return "1.0.2" }

    load() {
        const observer = new MutationObserver(() => {
            if (BdApi.Plugins.isEnabled(this.getName()))
                refreshEmojis()
            else
                disable()
        });

        observer.observe(document.body, {attributes: false, childList: true, subtree: true});
    }

    unload() {
        disable()
    }
    start() {}
    stop() {
        disable()
    }
}

function refreshEmojis() {
    let emojis = document.getElementsByClassName("emojiContainer-2XKwXX")
    for (let i = 0; i < emojis.length; i++) {
        if (emojis[i].firstChild.classList.contains("emoji")) {
            if (emojis[i].firstChild.getAttribute("src").match("/emojis/")) {
                emojis[i].firstChild.classList.add("custom-emoji")
                emojis[i].firstChild.classList.remove("emoji")
            } else {
                emojis[i].firstChild.classList.add("jumboable")
                emojis[i].firstChild.classList.add("default-emoji")
            }

        }
    }
}

function disable() {
    let emojis = document.getElementsByClassName("emojiContainer-2XKwXX")
        for (let i = 0; i < emojis.length; i++) {
            if (emojis[i].firstChild.classList.contains("default-emoji")) {
                emojis[i].firstChild.classList.remove("jumboable")
                emojis[i].firstChild.classList.remove("default-emoji")
            }else if (emojis[i].firstChild.classList.contains("custom-emoji")) {
                emojis[i].firstChild.classList.remove("custom-emoji")
                emojis[i].firstChild.classList.add("emoji")
            }
        }
}
