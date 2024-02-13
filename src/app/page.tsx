"use client";
import Image from "next/image";
import $ from "jquery";
import { useEffect } from "react";
import useNewsTicker from "@/hooks/useNewsTicker";

export default function Home() {
  useEffect(() => {
    // $(document).ready(function (e) {
    //   let newsNum = $(".newsTicker li").length;
    //   let totalNews_H = 0;
    //   for (let i = 0; i < newsNum; i++) {
    //     let news_H: any = $(".newsTicker li").eq(i).outerHeight(true);
    //     totalNews_H = totalNews_H + news_H;
    //   }
    //   $(".newsTicker").css("height", totalNews_H + "px");
    //   let speed = 1,
    //     animAmount,
    //     animInterval: any;
    //   animateNews();
    //   function animateNews() {
    //     $(".newsTicker li")
    //       .eq(0)
    //       .animate(
    //         {
    //           marginTop: "-=" + speed + "px",
    //         },
    //         1,
    //         function () {
    //           animAmount = speed;
    //           let animNews_H: any = $(".newsTicker li").eq(0).outerHeight(true);
    //           if (animAmount >= animNews_H) {
    //             $(this).parent().append($(this));
    //             $(this).removeAttr("style");
    //           }
    //           animInterval = setTimeout(function () {
    //             animateNews();
    //           }, 50);
    //         }
    //       );
    //   }
    //   $(".newsTicker").hover(
    //     function () {
    //       clearTimeout(animInterval);
    //       $(".newsTicker li").eq(0).stop();
    //     },
    //     function () {
    //       animateNews();
    //     }
    //   );
    // });
  }, []);

  useNewsTicker({ speed: 1, interval: 60, className: "newsTicker" });
  useNewsTicker({ speed: 1, interval: 60, className: "newsTicker1" });
  return (
    <main className="flex">
      <div className="wrap">
        <div className="newsTickerCon">
          <ul className="newsTicker">
            <li>
              <img src="https://us-dev-media.appskeeper.in/assets/_default_upload_bucket/3425175_59877.svg" />
              <div className="p-2">
                <div className="headline">
                  PALTOP invites you to take a closer look
                </div>

                <p>
                  company and learn about the technology and considerations
                  behind our outstanding products.
                  <br />
                  <a href="">read more</a>
                </p>
              </div>
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
      <div className="wrap">
        <div className="newsTickerCon">
          <ul className="newsTicker1">
            <li>
              <img src="https://us-dev-media.appskeeper.in/assets/_default_upload_bucket/3425175_59877.svg" />
              <div className="p-2">
                <div className="headline">
                  PALTOP invites you to take a closer look
                </div>

                <p>
                  company and learn about the technology and considerations
                  behind our outstanding products.
                  <br />
                  <a href="">read more</a>
                </p>
              </div>
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
