import SearchBar from "@/components/utils/SearchBar";
import Image from "next/image";

export default function Home() {
	return (
		<main className="w-full min-h-screen">
			<div className="hero_section relative w-full h-screen">
				<Image
					src={
						"https://images.unsplash.com/photo-1619811481192-6788c91eae32?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					alt="hero"
					width={1800}
					height={800}
					priority
					className="w-full h-screen object-cover"
				/>
				<SearchBar />
			</div>
			<div className="w-full min-h-screen"></div>
		</main>
	);
}
