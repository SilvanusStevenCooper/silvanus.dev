"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useState } from "react";

const FormComponent = () => {
  const services = [
    { service: "Web page development" },
    { service: "Web site development" },
    { service: "Web app development" },
    { service: "Mobile app development" },
    { service: "Mobile money integration" },
    { service: "Bank Card payment integration" },
    { service: "Counsultancy" },
    { service: "Want us to collaborate" },
    { service: "Want us to be coding buddies" },
    { service: "Just want to be friends" },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const data = {
      ...formData,
      service: selectedService,
    };
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("Your message has been sent successfully!");
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-auto xl:h-[55%] order-2 xl:order-none">
      <form
        onSubmit={handleSubmit}
        className="flex h-full xl:h-auto flex-col gap-6 py-10 px-4 xl:p-10 bg-[#27272c] rounded-t-xl xl:rounded-xl"
      >
        <h3 className="text-3xl text-accent text-center">
          Want to work with me?
        </h3>
        <p className="text-center">
          I will definitely love to work with you too. Weither you want us to
          work on a project together, or you just want consultation service to
          clarify something you have a doubt about, or better still you want me
          to do a development job for you, I am here to do just that. Fill out
          the form below and I promise I will get back to you
        </p>

        {/* inputs */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* select */}
        <div
          className="flex flex-1 items-center xl:justify-end 
          "
        >
          <Select required onValueChange={setSelectedService}>
            <SelectTrigger value={formData.service} className="w-full">
              <SelectValue placeholder="Select a Service" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                {services.map((service, index) => (
                  <SelectItem key={index} value={service.service}>
                    {service.service}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <input type="hidden" name="service" value={selectedService} />
        </div>
        {/* textarea */}
        <Textarea
          className="h-auto xl:h-[200px]  mb-4 xl:mb-0 "
          name="message"
          placeholder="Please give a brief description of what you want to work on"
          value={formData.message}
          onChange={handleChange}
          required
        />

        {/* btn */}
        <Button
          type="submit"
          disabled={isSubmitting}
          size={"md"}
          className="max-w-40"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default FormComponent;
