//Copyright Samuel Lord and Abdul Karim Kikar.
//Licensed under MIT license.
//In POC stage so far.
//In firefox you need to set dom.no_unknown_protocol_error.enabled to false.
currentURL = window.location.href //Should always be at the very begining of the script.


if (location.protocol === "privosp:") {
    window.location.href = window.location.href.replace("privosp:", "http:") + "privopages/" 
} else if (location.protocol === "politics:") {
    window.location.href = window.location.href.replace("privosp:", "http:") + "privopages/politics" 
} else {
    if (window.history.length > 1 && currentURL != previousURL && previousURL != null) {
        if (currentURL.protocol != "politics" && window.location.href.includes("/privopages/politics")) {
            window.location.href = "https://sparksammy.com"
        } else if (currentURL.protocol !== "privosp" && window.location.href.includes("/privopages")) {
            window.location.href = "https://sparksammy.com"
        }
    }
}
previousURL = window.location.href //Changed to current at the very end of the script, should always be at very bottom.