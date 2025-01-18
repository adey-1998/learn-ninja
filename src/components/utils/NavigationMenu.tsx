"use client";

import React, { useEffect, useState } from "react";

const NavigationMenu = () => {
	const [isScrolling, setIsScrolling] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScrolling(true);
			} else {
				setIsScrolling(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isScrolling]);
	return (
		<div
			className={`fixed transition-all z-50 duration-500 top-0 left-0 w-full px-32 py-4 flex justify-center items-center ${
				isScrolling ? "bg-white " : ""
			}`}
		>
			<h1
				className={`text-2xl  font-bold ${
					isScrolling ? "text-black" : "text-white"
				}`}
			>
				HERO
			</h1>
		</div>
	);
};

export default NavigationMenu;
