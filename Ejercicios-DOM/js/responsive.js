const d = document,
      w = window;

export function resposiveMedia(id, mq, mobileContent, desktopContent) {
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if(e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
        }else {
            d.getElementById(id).innerHTML = mobileContent;
        }
        console.log('MQ', breakpoint, e.matches)
    };
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}
