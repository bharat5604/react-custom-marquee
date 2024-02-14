import { useEffect } from "react";
import $ from "jquery";

interface NewsTickerOptions {
  speed: number;
  interval: number;
  className: string;
}

const useNewsTicker = (options: NewsTickerOptions) => {
  useEffect(() => {
    const { speed, interval, className } = options;

    let newsNum = $(`.${className} li`).length;
    let totalNews_H = 0;

    for (let i = 0; i < newsNum; i++) {
      let news_H: number | undefined = $(`.${className} li`)
        .eq(i)
        .outerHeight(true);
      totalNews_H = totalNews_H + news_H!;
    }

    $(`.${className}`).css("height", totalNews_H + "px");

    let animInterval: number;
    // Animate invoked here
    animateNews();

    function animateNews() {
      $(`.${className} li`)
        .eq(0)
        .animate(
          {
            marginTop: `-=${speed}px`,
          },
          1,
          function () {
            let animAmount = speed;
            let animNews_H: number | undefined = $(`.${className} li`)
              .eq(0)
              .outerHeight(true);

            if (animAmount >= animNews_H!) {
              $(this).parent().append($(this));
              $(this).removeAttr("style");
            }

            animInterval = window.setTimeout(function () {
              animateNews();
            }, interval);
          }
        );
    }

    $(`.${className}`).hover(
      function () {
        clearTimeout(animInterval);
        $(`.${className} li`).eq(0).stop();
      },
      function () {
        animateNews();
      }
    );

    return () => {
      clearTimeout(animInterval);
    };
  }, [options.speed, options.interval, options.className, options]);
};

export default useNewsTicker;
