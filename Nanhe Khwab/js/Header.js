import $ from "jQuery";

function init() {
    initHamburgerMenu();
}

function initHamburgerMenu() {
    const hamMenu = $(".nav-link-list");
    const hamIcon = $(".nav-hb");
    const activeCls = "hb-active";
    const navLink = $(".nav-link");

    hamIcon
        .click(() => {
            if (hamIcon.hasClass(activeCls)) {
                hamIcon.removeClass(activeCls);
                hamMenu.removeClass(activeCls);
            } else {
                hamIcon.addClass(activeCls);
                hamMenu.addClass(activeCls);
            }
        })

    navLink
        .click(() => {
            hamMenu.removeClass(activeCls);
        })
}

export default function Header() {
    return {
        init: init
    };
};
