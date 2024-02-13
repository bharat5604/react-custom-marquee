"use client";
import Image from "next/image";
import $ from "jquery";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    $(document).ready(function (e) {
      var newsNum = $(".newsTicker li").length;

      var totalNews_H = 0;
      for (var i = 0; i < newsNum; i++) {
        var news_H = $(".newsTicker li").eq(i).outerHeight(true);
        totalNews_H = totalNews_H + news_H;
      }

      $(".newsTicker").css("height", totalNews_H + "px");

      var speed = 1,
        animAmount,
        animInterval;

      animateNews();

      function animateNews() {
        $(".newsTicker li")
          .eq(0)
          .animate(
            {
              marginTop: "-=" + speed + "px",
            },
            1,
            function () {
              animAmount = speed;
              var animNews_H = $(".newsTicker li").eq(0).outerHeight(true);

              if (animAmount >= animNews_H) {
                $(this).parent().append($(this));
                $(this).removeAttr("style");
              }

              animInterval = setTimeout(function () {
                animateNews();
              }, 50);
            }
          );
      }

      $(".newsTicker").hover(
        function () {
          clearTimeout(animInterval);
          $(".newsTicker li").eq(0).stop();
        },
        function () {
          animateNews();
        }
      );
    });
  }, []);
  return (
    <main className="">
      <div className="wrap">
        <div className="newsTickerCon">
          <ul className="newsTicker">
            <li>
              <img src="https://us-dev-media.appskeeper.in/assets/_default_upload_bucket/3425175_59877.svg" />
              <div className="headline">
                PALTOP invites you to take a closer look
              </div>

              <p>
                company and learn about the technology and considerations behind
                our outstanding products.
                <br />
                <a href="">read more</a>
              </p>
            </li>
            <li>
              <img src="https://us-dev-media.appskeeper.in/assets/_default_upload_bucket/3425175_59877.svg" />
              <div className="headline">
                Practical Course in Basic or Advanced Implantology
              </div>

              <p>
                company and learn about the technology and considerations behind
                our outstanding products.
                <br />
                <a href="">read more</a>
              </p>
            </li>
            <li>
              <img src="https://us-dev-media.appskeeper.in/assets/_default_upload_bucket/3425175_59877.svg" />
              <div className="headline">
                Lecture &amp; Hands-on Course, New York 2018
              </div>

              <p>
                company and learn about the technology and considerations behind
                our outstanding products.
                <br />
                <a href="">read more</a>
              </p>
            </li>
            <li>
              <img src="https://us-dev-media.appskeeper.in/assets/_default_upload_bucket/3425175_59877.svg" />
              <div className="headline">
                Lecture and Live Surgery by Dr. Michael Klein
              </div>

              <p>
                company and learn about the technology and considerations behind
                our outstanding products.
                <br />
                <a href="">read more</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
