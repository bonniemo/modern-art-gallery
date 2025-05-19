"use client";
import { createTicket } from "@/actions/ticketActions";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useTicketStore } from "@/stores/useTicketStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosArrowForward } from "react-icons/io";
import { z } from "zod";
import { ticketSchema } from "./ticketSchema";

const TicketForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const setTicketDetails = useTicketStore((state) => state.setTicketDetails);
    const ticketDetails = useTicketStore((state) => state.ticketDetails);

    const form = useForm<z.infer<typeof ticketSchema>>({
        resolver: zodResolver(ticketSchema),
        defaultValues: {
            eventId: ticketDetails.eventId,
            eventTitle: ticketDetails.eventTitle,
            eventDate: ticketDetails.eventDate,
            name: "",
            email: "",
            street: "",
            city: "",
            postalCode: "",
            country: "",
        },
    });

    async function onSubmit(values: z.infer<typeof ticketSchema>) {
        try {
            setIsSubmitting(true);
            const result = await createTicket(values);

            if (result.success) {
                setTicketDetails({
                    ticketId: result.ticketId,
                    ...values,
                });

                console.log("succes ticket bought");
                form.reset();
            } else {
                console.log("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit(onSubmit)(e);
                }}
                className="space-y-8"
            >
                <input type="hidden" {...form.register("eventId")} />
                <input type="hidden" {...form.register("eventTitle")} />
                <input type="hidden" {...form.register("eventDate")} />

                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder="your@email.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Street Address</FormLabel>
                            <FormControl>
                                <Input placeholder="123 Main St" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                                <Input placeholder="12345" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                                <Input placeholder="Newport" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Country</FormLabel>
                            <FormControl>
                                <Input placeholder="USA" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <button
                    className="flex items-center w-max h-16 drop-shadow-lg group"
                    aria-label="Get tickets for this event"
                    type="submit"
                    disabled={isSubmitting}
                >
                    <div className="bg-dark px-4 h-full flex justify-center items-center group-hover:bg-accent">
                        <p className="uppercase text-light text-p-s leading-body-s font-extrabold">
                            {isSubmitting ? "Processing..." : "Get Tickets"}
                        </p>
                    </div>
                    <div className="bg-accent h-full flex items-center px-2 group-hover:bg-dark">
                        <IoIosArrowForward className="text-2xl text-light" />
                    </div>
                </button>
            </form>
        </Form>
    );
};

export default TicketForm;
