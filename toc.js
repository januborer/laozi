// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="forward.html">前言</a></li><li class="chapter-item "><a href="dejing/de.html"><strong aria-hidden="true">1.</strong> 德经</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="dejing/chapter_1.html"><strong aria-hidden="true">1.1.</strong> 第一章</a></li><li class="chapter-item "><a href="dejing/chapter_2.html"><strong aria-hidden="true">1.2.</strong> 第二章</a></li><li class="chapter-item "><a href="dejing/chapter_3.html"><strong aria-hidden="true">1.3.</strong> 第三章</a></li><li class="chapter-item "><a href="dejing/chapter_4.html"><strong aria-hidden="true">1.4.</strong> 第四章</a></li><li class="chapter-item "><a href="dejing/chapter_5.html"><strong aria-hidden="true">1.5.</strong> 第五章</a></li><li class="chapter-item "><a href="dejing/chapter_6.html"><strong aria-hidden="true">1.6.</strong> 第六章</a></li><li class="chapter-item "><a href="dejing/chapter_7.html"><strong aria-hidden="true">1.7.</strong> 第七章</a></li><li class="chapter-item "><a href="dejing/chapter_8.html"><strong aria-hidden="true">1.8.</strong> 第八章</a></li><li class="chapter-item "><a href="dejing/chapter_9.html"><strong aria-hidden="true">1.9.</strong> 第九章</a></li><li class="chapter-item "><a href="dejing/chapter_10.html"><strong aria-hidden="true">1.10.</strong> 第十章</a></li><li class="chapter-item "><a href="dejing/chapter_11.html"><strong aria-hidden="true">1.11.</strong> 第十一章</a></li><li class="chapter-item "><a href="dejing/chapter_12.html"><strong aria-hidden="true">1.12.</strong> 第十二章</a></li><li class="chapter-item "><a href="dejing/chapter_13.html"><strong aria-hidden="true">1.13.</strong> 第十三章</a></li><li class="chapter-item "><a href="dejing/chapter_14.html"><strong aria-hidden="true">1.14.</strong> 第十四章</a></li><li class="chapter-item "><a href="dejing/chapter_15.html"><strong aria-hidden="true">1.15.</strong> 第十五章</a></li><li class="chapter-item "><a href="dejing/chapter_16.html"><strong aria-hidden="true">1.16.</strong> 第十六章</a></li><li class="chapter-item "><a href="dejing/chapter_17.html"><strong aria-hidden="true">1.17.</strong> 第十七章</a></li><li class="chapter-item "><a href="dejing/chapter_18.html"><strong aria-hidden="true">1.18.</strong> 第十八章</a></li><li class="chapter-item "><a href="dejing/chapter_19.html"><strong aria-hidden="true">1.19.</strong> 第十九章</a></li><li class="chapter-item "><a href="dejing/chapter_20.html"><strong aria-hidden="true">1.20.</strong> 第二十章</a></li><li class="chapter-item "><a href="dejing/chapter_21.html"><strong aria-hidden="true">1.21.</strong> 第二十一章</a></li><li class="chapter-item "><a href="dejing/chapter_22.html"><strong aria-hidden="true">1.22.</strong> 第二十二章</a></li><li class="chapter-item "><a href="dejing/chapter_23.html"><strong aria-hidden="true">1.23.</strong> 第二十三章</a></li><li class="chapter-item "><a href="dejing/chapter_24.html"><strong aria-hidden="true">1.24.</strong> 第二十四章</a></li><li class="chapter-item "><a href="dejing/chapter_25.html"><strong aria-hidden="true">1.25.</strong> 第二十五章</a></li><li class="chapter-item "><a href="dejing/chapter_26.html"><strong aria-hidden="true">1.26.</strong> 第二十六章</a></li><li class="chapter-item "><a href="dejing/chapter_27.html"><strong aria-hidden="true">1.27.</strong> 第二十七章</a></li><li class="chapter-item "><a href="dejing/chapter_28.html"><strong aria-hidden="true">1.28.</strong> 第二十八章</a></li><li class="chapter-item "><a href="dejing/chapter_29.html"><strong aria-hidden="true">1.29.</strong> 第二十九章</a></li><li class="chapter-item "><a href="dejing/chapter_30.html"><strong aria-hidden="true">1.30.</strong> 第三十章</a></li><li class="chapter-item "><a href="dejing/chapter_31.html"><strong aria-hidden="true">1.31.</strong> 第三十一章</a></li><li class="chapter-item "><a href="dejing/chapter_32.html"><strong aria-hidden="true">1.32.</strong> 第三十二章</a></li><li class="chapter-item "><a href="dejing/chapter_33.html"><strong aria-hidden="true">1.33.</strong> 第三十三章</a></li><li class="chapter-item "><a href="dejing/chapter_34.html"><strong aria-hidden="true">1.34.</strong> 第三十四章</a></li><li class="chapter-item "><a href="dejing/chapter_35.html"><strong aria-hidden="true">1.35.</strong> 第三十五章</a></li><li class="chapter-item "><a href="dejing/chapter_36.html"><strong aria-hidden="true">1.36.</strong> 第三十六章</a></li><li class="chapter-item "><a href="dejing/chapter_37.html"><strong aria-hidden="true">1.37.</strong> 第三十七章</a></li><li class="chapter-item "><a href="dejing/chapter_38.html"><strong aria-hidden="true">1.38.</strong> 第三十八章</a></li><li class="chapter-item "><a href="dejing/chapter_39.html"><strong aria-hidden="true">1.39.</strong> 第三十九章</a></li><li class="chapter-item "><a href="dejing/chapter_40.html"><strong aria-hidden="true">1.40.</strong> 第四十章</a></li><li class="chapter-item "><a href="dejing/chapter_41.html"><strong aria-hidden="true">1.41.</strong> 第四十一章</a></li><li class="chapter-item "><a href="dejing/chapter_42.html"><strong aria-hidden="true">1.42.</strong> 第四十二章</a></li><li class="chapter-item "><a href="dejing/chapter_43.html"><strong aria-hidden="true">1.43.</strong> 第四十三章</a></li><li class="chapter-item "><a href="dejing/chapter_44.html"><strong aria-hidden="true">1.44.</strong> 第四十四章</a></li></ol></li><li class="chapter-item "><li class="spacer"></li><li class="chapter-item "><a href="daojing/dao.html"><strong aria-hidden="true">2.</strong> 道经</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="daojing/chapter_45.html"><strong aria-hidden="true">2.1.</strong> 第四十五章</a></li><li class="chapter-item "><a href="daojing/chapter_46.html"><strong aria-hidden="true">2.2.</strong> 第四十六章</a></li><li class="chapter-item "><a href="daojing/chapter_47.html"><strong aria-hidden="true">2.3.</strong> 第四十七章</a></li><li class="chapter-item "><a href="daojing/chapter_48.html"><strong aria-hidden="true">2.4.</strong> 第四十八章</a></li><li class="chapter-item "><a href="daojing/chapter_49.html"><strong aria-hidden="true">2.5.</strong> 第四十九章</a></li><li class="chapter-item "><a href="daojing/chapter_50.html"><strong aria-hidden="true">2.6.</strong> 第五十章</a></li><li class="chapter-item "><a href="daojing/chapter_51.html"><strong aria-hidden="true">2.7.</strong> 第五十一章</a></li><li class="chapter-item "><a href="daojing/chapter_52.html"><strong aria-hidden="true">2.8.</strong> 第五十二章</a></li><li class="chapter-item "><a href="daojing/chapter_53.html"><strong aria-hidden="true">2.9.</strong> 第五十三章</a></li><li class="chapter-item "><a href="daojing/chapter_54.html"><strong aria-hidden="true">2.10.</strong> 第五十四章</a></li><li class="chapter-item "><a href="daojing/chapter_55.html"><strong aria-hidden="true">2.11.</strong> 第五十五章</a></li><li class="chapter-item "><a href="daojing/chapter_56.html"><strong aria-hidden="true">2.12.</strong> 第五十六章</a></li><li class="chapter-item "><a href="daojing/chapter_57.html"><strong aria-hidden="true">2.13.</strong> 第五十七章</a></li><li class="chapter-item "><a href="daojing/chapter_58.html"><strong aria-hidden="true">2.14.</strong> 第五十八章</a></li><li class="chapter-item "><a href="daojing/chapter_59.html"><strong aria-hidden="true">2.15.</strong> 第五十九章</a></li><li class="chapter-item "><a href="daojing/chapter_60.html"><strong aria-hidden="true">2.16.</strong> 第六十章</a></li><li class="chapter-item "><a href="daojing/chapter_61.html"><strong aria-hidden="true">2.17.</strong> 第六十一章</a></li><li class="chapter-item "><a href="daojing/chapter_62.html"><strong aria-hidden="true">2.18.</strong> 第六十二章</a></li><li class="chapter-item "><a href="daojing/chapter_63.html"><strong aria-hidden="true">2.19.</strong> 第六十三章</a></li><li class="chapter-item "><a href="daojing/chapter_64.html"><strong aria-hidden="true">2.20.</strong> 第六十四章</a></li><li class="chapter-item "><a href="daojing/chapter_65.html"><strong aria-hidden="true">2.21.</strong> 第六十五章</a></li><li class="chapter-item "><a href="daojing/chapter_66.html"><strong aria-hidden="true">2.22.</strong> 第六十六章</a></li><li class="chapter-item "><a href="daojing/chapter_67.html"><strong aria-hidden="true">2.23.</strong> 第六十七章</a></li><li class="chapter-item "><a href="daojing/chapter_68.html"><strong aria-hidden="true">2.24.</strong> 第六十八章</a></li><li class="chapter-item "><a href="daojing/chapter_69.html"><strong aria-hidden="true">2.25.</strong> 第六十九章</a></li><li class="chapter-item "><a href="daojing/chapter_70.html"><strong aria-hidden="true">2.26.</strong> 第七十章</a></li><li class="chapter-item "><a href="daojing/chapter_71.html"><strong aria-hidden="true">2.27.</strong> 第七十一章</a></li><li class="chapter-item "><a href="daojing/chapter_72.html"><strong aria-hidden="true">2.28.</strong> 第七十二章</a></li><li class="chapter-item "><a href="daojing/chapter_73.html"><strong aria-hidden="true">2.29.</strong> 第七十三章</a></li><li class="chapter-item "><a href="daojing/chapter_74.html"><strong aria-hidden="true">2.30.</strong> 第七十四章</a></li><li class="chapter-item "><a href="daojing/chapter_75.html"><strong aria-hidden="true">2.31.</strong> 第七十五章</a></li><li class="chapter-item "><a href="daojing/chapter_76.html"><strong aria-hidden="true">2.32.</strong> 第七十六章</a></li><li class="chapter-item "><a href="daojing/chapter_77.html"><strong aria-hidden="true">2.33.</strong> 第七十七章</a></li><li class="chapter-item "><a href="daojing/chapter_78.html"><strong aria-hidden="true">2.34.</strong> 第七十八章</a></li><li class="chapter-item "><a href="daojing/chapter_79.html"><strong aria-hidden="true">2.35.</strong> 第七十九章</a></li><li class="chapter-item "><a href="daojing/chapter_80.html"><strong aria-hidden="true">2.36.</strong> 第八十章</a></li><li class="chapter-item "><a href="daojing/chapter_81.html"><strong aria-hidden="true">2.37.</strong> 第八十一章</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
