function NavExpand(){
        nav  = document.getElementsByTagName("nav")[0];
        bars = document.getElementsByClassName("fa-bars")[0];
        if(nav.style.height=="120px")
        {
            nav.removeAttribute("style");
            bars.removeAttribute("style");
            nav.style.animationName = "navunexpand"
            bars.style.animationName= "barsback";
        }
        else
        {
            nav.style.height="120px";
            nav.style.animationName = "navexpand"
            bars.style.color="var(--accent)";
            bars.style.animationName= "bars";
        }
    }