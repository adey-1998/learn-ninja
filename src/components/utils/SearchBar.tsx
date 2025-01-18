"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { CalendarIcon, Search } from "lucide-react";

const SearchBar = () => {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(2025, 0), 20),
	});

	return (
		<>
			<Popover>
				<div className="absolute_content flex justify-center items-center py-2 bg-white rounded-full divide-x-2 absolute z-20 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
					<form
						action=""
						className="space-x-2 px-2 flex justify-center items-center"
					>
						<div className="px-8 h-[60px] min-w-[200px] border border-gray-200 rounded-full justify-center items-start hover:bg-gray-100 flex flex-col duration-500">
							<small className="text-xs opacity-60">
								Services
							</small>
							<span>Surf lesson</span>
						</div>
						<div className="px-8 h-[60px] min-w-[200px] border border-gray-200 rounded-full justify-center items-start hover:bg-gray-100 flex flex-col duration-500">
							<small className="text-xs opacity-60">
								Locations
							</small>
							<span>Canggu</span>
						</div>
						<>
							<PopoverTrigger
								asChild
								className="rounded-full w-[300px]"
							>
								<Button
									id="date"
									variant={"outline"}
									className={cn(
										"flex flex-col h-[60px] justify-center items-start px-8"
									)}
								>
									<small className="text-xs opacity-60">
										Select date
									</small>
									<div className="flex gap-1">
										<CalendarIcon />

										{date?.from ? (
											date.to ? (
												<>
													{format(
														date.from,
														"LLL dd, y"
													)}{" "}
													-{" "}
													{format(
														date.to,
														"LLL dd, y"
													)}
												</>
											) : (
												format(
													date.from,
													"LLL dd, y"
												)
											)
										) : (
											<span>
												Pick
												a
												date
											</span>
										)}
									</div>
								</Button>
							</PopoverTrigger>
							<PopoverContent
								className="w-auto z-10 p-0"
								align="end"
								onScroll={(e) => e.preventDefault()}
							>
								<Calendar
									initialFocus
									mode="range"
									defaultMonth={date?.from}
									selected={date}
									onSelect={setDate}
									numberOfMonths={2}
									disabled={[
										{
											before: new Date(),
										},
									]}
									className="w-full"
								/>
								<div className="flex justify-end p-2">
									<Button
										variant="outline"
										size="sm"
										onClick={() =>
											setDate(
												undefined
											)
										}
									>
										Reset
									</Button>
								</div>
							</PopoverContent>
						</>
						<div className="absolute flex justify-center items-center right-4 z-20 top-0 h-full">
							<button
								type="submit"
								className="h-10 rounded-full text-white bg-red-500 flex justify-center items-center w-10"
							>
								<Search size={24} />
							</button>
						</div>
					</form>
				</div>
			</Popover>
		</>
	);
};

export default SearchBar;
