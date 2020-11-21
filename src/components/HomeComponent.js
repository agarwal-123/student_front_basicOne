import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import "./CSS/Home.css";

export default function HomeComponent(props) {

      return (
	      <div>
	      <head>
	          <meta property="og:site_name" content="YouTube">
      <meta property="og:url" content="https://www.youtube.com/watch?v=vo0Mo0jr7dM">
    <meta property="og:title" content="IntelliJ - Java Development on Apple MacBook Pro 13&quot; M1 in 4K">
    <meta property="og:image" content="https://i.ytimg.com/vi/vo0Mo0jr7dM/maxresdefault.jpg">
    <meta property="og:image:width" content="1280">
    <meta property="og:image:height" content="720">

      <meta property="og:description" content="Many of you folks requested how JetBrains IntelliJ and Java Development is running on the new Apple Silicon chips, and I am happy to report that everything i...">

    <meta property="al:ios:app_store_id" content="544007664">
    <meta property="al:ios:app_name" content="YouTube">
      <meta property="al:ios:url" content="vnd.youtube://www.youtube.com/watch?v=vo0Mo0jr7dM&amp;feature=applinks">

      <meta property="al:android:url" content="vnd.youtube://www.youtube.com/watch?v=vo0Mo0jr7dM&amp;feature=applinks">
    <meta property="al:android:app_name" content="YouTube">
    <meta property="al:android:package" content="com.google.android.youtube">
    <meta property="al:web:url" content="https://www.youtube.com/watch?v=vo0Mo0jr7dM&amp;feature=applinks">

    <meta property="og:type" content="video.other">
      <meta property="og:video:url" content="https://www.youtube.com/embed/vo0Mo0jr7dM">
      <meta property="og:video:secure_url" content="https://www.youtube.com/embed/vo0Mo0jr7dM">
      <meta property="og:video:type" content="text/html">
      <meta property="og:video:width" content="1280">
      <meta property="og:video:height" content="720">

        <meta property="og:video:tag" content="Apple M1">
        <meta property="og:video:tag" content="Apple Silicon">
        <meta property="og:video:tag" content="Apple M1 MacBook">
        <meta property="og:video:tag" content="MacBook M1">
        <meta property="og:video:tag" content="MacBook Pro M1">
        <meta property="og:video:tag" content="MacBook Pro 13 Apple Silicon">
        <meta property="og:video:tag" content="MacBook Air M1">
        <meta property="og:video:tag" content="MacBook Pro Apple Silicon">
        <meta property="og:video:tag" content="MacBook Pro 13 M1">
        <meta property="og:video:tag" content="MacBook Late 2020 M1">
        <meta property="og:video:tag" content="MacBook 2020 M1">
        <meta property="og:video:tag" content="MacBook Apple Silicon 2020">
        <meta property="og:video:tag" content="Apple m1 Hands on">
        <meta property="og:video:tag" content="Progamming Apple M1">
        <meta property="og:video:tag" content="Coding Apple Silicon">
        <meta property="og:video:tag" content="Programming Apple Silicon">
        <meta property="og:video:tag" content="Java Apple M1">
        <meta property="og:video:tag" content="Java Apple Silicon">
        <meta property="og:video:tag" content="IntelliJ M1">
        <meta property="og:video:tag" content="IntelliJ Apple Silicon">
        <meta property="og:video:tag" content="IntelliJ MacBook M1">
        <meta property="og:video:tag" content="JetBrains MacBook M1">
        <meta property="og:video:tag" content="JetBrains Apple Silicon">
        <meta property="og:video:tag" content="Java JRE">

    <meta property="fb:app_id" content="87741124305">

      <meta name="twitter:card" content="player">
    <meta name="twitter:site" content="@youtube">
    <meta name="twitter:url" content="https://www.youtube.com/watch?v=vo0Mo0jr7dM">
    <meta name="twitter:title" content="IntelliJ - Java Development on Apple MacBook Pro 13&quot; M1 in 4K">
    <meta name="twitter:description" content="Many of you folks requested how JetBrains IntelliJ and Java Development is running on the new Apple Silicon chips, and I am happy to report that everything i...">
    <meta name="twitter:image" content="https://i.ytimg.com/vi/vo0Mo0jr7dM/maxresdefault.jpg">
    <meta name="twitter:app:name:iphone" content="YouTube">
    <meta name="twitter:app:id:iphone" content="544007664">
    <meta name="twitter:app:name:ipad" content="YouTube">
    <meta name="twitter:app:id:ipad" content="544007664">
      <meta name="twitter:app:url:iphone" content="vnd.youtube://www.youtube.com/watch?v=vo0Mo0jr7dM&amp;feature=applinks">
      <meta name="twitter:app:url:ipad" content="vnd.youtube://www.youtube.com/watch?v=vo0Mo0jr7dM&amp;feature=applinks">
    <meta name="twitter:app:name:googleplay" content="YouTube">
    <meta name="twitter:app:id:googleplay" content="com.google.android.youtube">
    <meta name="twitter:app:url:googleplay" content="https://www.youtube.com/watch?v=vo0Mo0jr7dM">
      <meta name="twitter:player" content="https://www.youtube.com/embed/vo0Mo0jr7dM">
      <meta name="twitter:player:width" content="1280">
      <meta name="twitter:player:height" content="720">


    
  </head>
		
	<div className="h-outer-wrapper">
		<div className="h-upper-modal">
		<div className="h-heading-wrapper">
			<div className="h-text-container">The Basic One</div>
			<div className="h-logo">
				<img src="./assets/ico.jpeg"></img>
			</div>
		</div>

		<div className="h-button-group">
			<div className="h-button1 h-button">
				<button onClick={()=>{props.changeHome(false);}} className="h-btn h-header__btn">
				Register / Login
				</button>
			</div>
			<div className="h-button2 h-button">
				<button onClick={()=>{props.changestate(true);localStorage.token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjYyMGY5MmIxNDdkYjAwMjQ0MzMzM2MiLCJpYXQiOjE2MDAyNjIwMzR9.c-ff-D5UurJeOke1hql5Yrx9azMJ9sHi9fwOdyekXeU";props.changeHome(false);}} className="h-btn h-header__btn">
				Login as Guest
				</button>
			</div>
		</div>
		</div>

		
	<div className="h-lower-modal">
		<div className="u-center-text u-margin-bottom-big">
			<h2 className="heading-secondary">Developers</h2>
		</div>

		<div className="h-row">
			<div className="h-story">
			<figure className="h-story__shape">
				<img
					src="./assets/avt2.png"
					alt="Person on a tour"
					className="h-story__img"
				/>
				<figcaption className="h-story__caption">
					Dhruv agarwal
				</figcaption>
			</figure>
			
			<div className="h-story__text">
				<h3 className="h-heading-tertiary h-u-margin-bottom-small">
					I am debugging like a detective in a crime movie
					where i am also the murderer :P{" "}
				</h3>
				<div className="clearfix personal-info">
					<img
					src="./assets/linkedin.svg"
					className="linkedin"
					/>
					<div className="linkedin-text">
					{" "}
					<a
						href="https://www.linkedin.com/in/dhruva-agarwal-bb78a8137/"
						target="_blank"
					>
						Dhruva Agarwal
					</a>
					</div>

					<img
					src="./assets/github-logo.svg"
					className="linkedin"
					/>
					<div className="linkedin-text">
					{" "}
					<a
						href="https://github.com/agarwal-123/"
						target="_blank"
					>
						Dhruva Agarwal
					</a>
					</div>
				</div>
				<br />
				<div>
					<p>
					<ul>
						<li>
							About 1 year experience of
							Javascript Frameworks, like React
							and Nodejs.
						</li>
						<li>
							Love to solve complex algorithmic
							problems. Codechef profile:{" "}
							<img
							src="./assets/codechef.svg"
							className="chef"
							/>{" "}
							<a
							href="https://www.codechef.com/users/dhruv331"
							target="_blank"
							>
							dhruv331
							</a>
						</li>
						<li>
							Curruntly exploring React-Native for
							a better understanding of mobile
							applications.
						</li>
					</ul>
					</p>
				</div>
			</div>
			</div>
		</div>

		<div className="h-row">
			<div className="h-story">
			<figure className="h-story__shape">
				<img
					src="./assets/avt2.png"
					alt="Person on a tour"
					className="h-story__img"
				/>
				<figcaption className="h-story__caption">
					Raushan Kumar
				</figcaption>
			</figure>
			<div className="h-story__text">
				<h3 className="h-heading-tertiary h-u-margin-bottom-small">
					I love building and automating useless things
					because everything is useless until someone use
					them :)
				</h3>
				<div className="clearfix personal-info">
					<img
					src="./assets/linkedin.svg"
					className="linkedin"
					/>
					<div className="linkedin-text">
					{" "}
					<a
						href="https://www.linkedin.com/in/raushan-kumar-197882179/"
						target="_blank"
					>
						Raushan Kumar
					</a>
					</div>

					<img
					src="./assets/github-logo.svg"
					className="linkedin"
					/>
					<div className="linkedin-text">
					{" "}
					<a
						href="https://github.com/raushan303"
						target="_blank"
					>
						Raushan Kumar
					</a>
					</div>
				</div>
				<br />
				<div>
					<p>
					<ul>
						<li>
							As a Web Developer with over 1 year
							experience of Javascript Frameworks,
							like React and Nodejs.
						</li>
						<li>
							I am also in love with competitive
							coding.{" "}
							<img
							src="./assets/codechef.svg"
							className="chef"
							/>{" "}
							<a href="https://www.codechef.com/users/raushan303">
							raushan303
							</a>
							<img
							src="./assets/codeforces.svg"
							className="forces"
							/>{" "}
							<a href="https://codeforces.com/profile/raushan303">
							raushan303
							</a>{" "}
							<img
							src="./assets/leetcode.svg"
							className="code"
							/>{" "}
							<a href="https://leetcode.com/raushan303/">
							raushan303
							</a>
						</li>
						<li>
							Curruntly exploring React-Native and
							Flutter for a better understanding
							of mobile applications.
						</li>
					</ul>
					</p>
				</div>
			</div>
			</div>
		</div>

		<div className="h-row">
			<div className="h-story">
			<figure className="h-story__shape">
				<img src="./assets/avt2.png" alt="Person on a tour" className="h-story__img"/>
				<figcaption className="h-story__caption">
					Siddhant Gandhi
				</figcaption>
			</figure>
			<div className="h-story__text">
				<h3 className="h-heading-tertiary h-u-margin-bottom-small">
					If you have a complex solution, then there is
					something wrong with the approach :D
				</h3>
				<div className="clearfix personal-info">
				
				<img src="./assets/linkedin.svg" className="linkedin"/>

				<div className="linkedin-text">
					{" "}
					<a href="https://www.linkedin.com/in/sgbtech96/" target="_blank">
					Siddhant Gandhi
					</a>
				</div>

				<img
					src="./assets/github-logo.svg"
					className="linkedin"
				/>
				<div className="linkedin-text">
					{" "}
					<a href="https://github.com/sgbtech96" target="_blank">
					Siddhant Gandhi
					</a>
				</div>

				</div>
				
				<br />
				
				<div>
				
				<p>
				<ul>
					<li>
						I'm keen to develop products that
						could be deployed for public use.
					</li>
					<li>
						I've been working on the MERN tech
						stack, and React Native to build
						cross-platform applications for a
						year.
					</li>
					<li>
						A freak at brainstorming algorithmic
						programming problems.
						<img src="./assets/codechef.svg" className="chef"/>
						{" "}
						<a href="https://www.codechef.com/users/sgbtech96" target="_blank">
						sgbtech96
						</a>
					</li>
				</ul>
				</p>

			</div>
			</div>
			</div>
		</div>

		<div className="h-row">
			<div className="h-story">
				<figure className="h-story__shape">
					<img src="./assets/avt2.png" alt="Person on a tour" className="h-story__img"/>
					<figcaption className="h-story__caption">
						Raghav Bansal
					</figcaption>
				</figure>
				<div className="h-story__text">
				
				<h3 className="h-heading-tertiary h-u-margin-bottom-small">
					In order to understand recursion, one must first
					understand recursion.{" "}
				</h3>
				
				<div className="clearfix personal-info">
					<img src="./assets/linkedin.svg" className="linkedin"/>
					<div className="linkedin-text">
						{" "}
						<a href="https://www.linkedin.com/in/raghav-bansal-b10862154/" target="_blank">
						Raghav Bansal
						</a>
					</div>

					<img src="./assets/github-logo.svg" className="linkedin"/>
					<div className="linkedin-text">
						{" "}
						<a href="https://github.com/bansalraghav19" target="_blank">
						Raghav Bansal
						</a>
					</div>
				</div>
				<br />
				<div>
					<p>
						<ul>
						<li>
							About 1 year experience of
							Javascript Frameworks, like React
							and Nodejs.
						</li>
						<li>
							I am also in love with competitive
							coding.{" "}
							<img
								src="./assets/codeforces.svg"
								className="forces"
							/>{" "}
							<a href="https://codeforces.com/profile/bansalraghav_19">
								bansalraghav_19
							</a>
							<img
								src="./assets/codechef.svg"
								className="chef"
							/>{" "}
							<a href="https://www.codechef.com/users/bansalraghav19">
								bansalraghav19
							</a>
						</li>
						<li>
							Curruntly exploring React-Native for
							a better understanding of mobile
							applications.
						</li>
						</ul>
					</p>
				</div>
				</div>
			</div>
		</div>

		</div>   
	</div>
</div>
       
    );
}
