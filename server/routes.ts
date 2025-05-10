import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up API routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const contactData = contactSchema.parse(req.body);
      
      // Save the contact form submission to storage
      const savedContact = await storage.saveContactSubmission(contactData);
      
      // In a production environment, you would send an email here
      // For this example, we'll just log the data
      console.log("Contact form submission:", savedContact);
      
      /*
      // Email sending example (commented out since we don't have SMTP credentials)
      const transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER || "user@example.com",
          pass: process.env.EMAIL_PASS || "password"
        }
      });
      
      await transporter.sendMail({
        from: '"Cyamunara Rwanda" <noreply@cyamunararwanda.com>',
        to: "cyamunararwanda@gmail.com",
        subject: `New Contact Form: ${contactData.service || 'General Inquiry'}`,
        text: `
          Name: ${contactData.name}
          Email: ${contactData.email}
          Phone: ${contactData.phone || 'Not provided'}
          Service: ${contactData.service || 'Not specified'}
          Message: ${contactData.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${contactData.name}</p>
          <p><strong>Email:</strong> ${contactData.email}</p>
          <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
          <p><strong>Service:</strong> ${contactData.service || 'Not specified'}</p>
          <p><strong>Message:</strong> ${contactData.message}</p>
        `
      });
      */
      
      res.status(201).json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ success: false, message: validationError.message });
      } else {
        console.error("Error handling contact form:", error);
        res.status(500).json({ success: false, message: "Failed to process contact form" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
