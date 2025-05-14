"use client";

import { createTicket } from "@/actions/ticketActions";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
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
import { z } from "zod";
import { ticketSchema } from "./ticketSchema";

type TicketFormProps = {
    onSuccess?: () => void;
    eventId: string;
};

const TicketForm = ({ eventId }: TicketFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { setTicket } = useTicketStore();

    const form = useForm<z.infer<typeof ticketSchema>>({
        resolver: zodResolver(ticketSchema),
        defaultValues: {
            eventId: eventId,
            name: "",
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof ticketSchema>) {
        try {
            setIsSubmitting(true);
            const result = await createTicket(values);

            if (result.success) {
                setTicket({
                    ticketId: result.ticketId,
                    ...values,
                    eventTitle: "temp",
                    eventId: eventId,
                });

                console.log("succes ticket bought");
                console.log();
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
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter your full name.
                            </FormDescription>
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
                            <FormDescription>
                                We'll never share your email.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Buy Ticket"}
                </Button>
            </form>
        </Form>
    );
};

export default TicketForm;
