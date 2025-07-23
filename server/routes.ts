import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertInquirySchema, 
  insertServiceRequestSchema, 
  insertRegistrationAssistanceSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.json(inquiry);
    } catch (error) {
      console.error("Error creating inquiry:", error);
      res.status(400).json({ 
        message: "Invalid inquiry data. Please check all required fields and try again." 
      });
    }
  });

  // Get all inquiries
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ 
        message: "Unable to fetch inquiries. Please try again later." 
      });
    }
  });

  // Service request submission
  app.post("/api/service-requests", async (req, res) => {
    try {
      const validatedData = insertServiceRequestSchema.parse(req.body);
      const request = await storage.createServiceRequest(validatedData);
      res.json(request);
    } catch (error) {
      console.error("Error creating service request:", error);
      res.status(400).json({ 
        message: "Invalid service request data. Please check all required fields and try again." 
      });
    }
  });

  // Get all service requests
  app.get("/api/service-requests", async (req, res) => {
    try {
      const requests = await storage.getServiceRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching service requests:", error);
      res.status(500).json({ 
        message: "Unable to fetch service requests. Please try again later." 
      });
    }
  });

  // Registration assistance submission
  app.post("/api/registration-assistance", async (req, res) => {
    try {
      const validatedData = insertRegistrationAssistanceSchema.parse(req.body);
      const assistance = await storage.createRegistrationAssistance(validatedData);
      res.json(assistance);
    } catch (error) {
      console.error("Error creating registration assistance:", error);
      res.status(400).json({ 
        message: "Invalid registration assistance data. Please check all required fields and try again." 
      });
    }
  });

  // Get all registration assistance requests
  app.get("/api/registration-assistance", async (req, res) => {
    try {
      const assistance = await storage.getRegistrationAssistance();
      res.json(assistance);
    } catch (error) {
      console.error("Error fetching registration assistance:", error);
      res.status(500).json({ 
        message: "Unable to fetch registration assistance requests. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
