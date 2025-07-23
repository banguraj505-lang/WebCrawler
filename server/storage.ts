import { 
  users, 
  inquiries, 
  serviceRequests, 
  registrationAssistance,
  type User, 
  type InsertUser,
  type Inquiry,
  type InsertInquiry,
  type ServiceRequest,
  type InsertServiceRequest,
  type RegistrationAssistance,
  type InsertRegistrationAssistance
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getInquiries(): Promise<Inquiry[]>;
  getInquiry(id: number): Promise<Inquiry | undefined>;
  
  createServiceRequest(request: InsertServiceRequest): Promise<ServiceRequest>;
  getServiceRequests(): Promise<ServiceRequest[]>;
  getServiceRequest(id: number): Promise<ServiceRequest | undefined>;
  
  createRegistrationAssistance(assistance: InsertRegistrationAssistance): Promise<RegistrationAssistance>;
  getRegistrationAssistance(): Promise<RegistrationAssistance[]>;
  getRegistrationAssistanceById(id: number): Promise<RegistrationAssistance | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private inquiries: Map<number, Inquiry>;
  private serviceRequests: Map<number, ServiceRequest>;
  private registrationAssistance: Map<number, RegistrationAssistance>;
  private currentUserId: number;
  private currentInquiryId: number;
  private currentServiceRequestId: number;
  private currentRegistrationId: number;

  constructor() {
    this.users = new Map();
    this.inquiries = new Map();
    this.serviceRequests = new Map();
    this.registrationAssistance = new Map();
    this.currentUserId = 1;
    this.currentInquiryId = 1;
    this.currentServiceRequestId = 1;
    this.currentRegistrationId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const id = this.currentInquiryId++;
    const inquiry: Inquiry = {
      ...insertInquiry,
      id,
      phone: insertInquiry.phone || null,
      status: "pending",
      createdAt: new Date(),
    };
    this.inquiries.set(id, inquiry);
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return Array.from(this.inquiries.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getInquiry(id: number): Promise<Inquiry | undefined> {
    return this.inquiries.get(id);
  }

  async createServiceRequest(insertRequest: InsertServiceRequest): Promise<ServiceRequest> {
    const id = this.currentServiceRequestId++;
    const request: ServiceRequest = {
      ...insertRequest,
      id,
      phone: insertRequest.phone || null,
      urgency: insertRequest.urgency || "normal",
      status: "pending",
      createdAt: new Date(),
    };
    this.serviceRequests.set(id, request);
    return request;
  }

  async getServiceRequests(): Promise<ServiceRequest[]> {
    return Array.from(this.serviceRequests.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getServiceRequest(id: number): Promise<ServiceRequest | undefined> {
    return this.serviceRequests.get(id);
  }

  async createRegistrationAssistance(insertAssistance: InsertRegistrationAssistance): Promise<RegistrationAssistance> {
    const id = this.currentRegistrationId++;
    const assistance: RegistrationAssistance = {
      ...insertAssistance,
      id,
      documents: insertAssistance.documents || null,
      status: "pending",
      createdAt: new Date(),
    };
    this.registrationAssistance.set(id, assistance);
    return assistance;
  }

  async getRegistrationAssistance(): Promise<RegistrationAssistance[]> {
    return Array.from(this.registrationAssistance.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getRegistrationAssistanceById(id: number): Promise<RegistrationAssistance | undefined> {
    return this.registrationAssistance.get(id);
  }
}

// Database Storage Implementation
export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [inquiry] = await db
      .insert(inquiries)
      .values({
        ...insertInquiry,
        phone: insertInquiry.phone || null,
      })
      .returning();
    return inquiry;
  }

  async getInquiries(): Promise<Inquiry[]> {
    return await db.select().from(inquiries).orderBy(inquiries.createdAt);
  }

  async getInquiry(id: number): Promise<Inquiry | undefined> {
    const [inquiry] = await db.select().from(inquiries).where(eq(inquiries.id, id));
    return inquiry || undefined;
  }

  async createServiceRequest(insertRequest: InsertServiceRequest): Promise<ServiceRequest> {
    const [request] = await db
      .insert(serviceRequests)
      .values({
        ...insertRequest,
        phone: insertRequest.phone || null,
        urgency: insertRequest.urgency || "normal",
      })
      .returning();
    return request;
  }

  async getServiceRequests(): Promise<ServiceRequest[]> {
    return await db.select().from(serviceRequests).orderBy(serviceRequests.createdAt);
  }

  async getServiceRequest(id: number): Promise<ServiceRequest | undefined> {
    const [request] = await db.select().from(serviceRequests).where(eq(serviceRequests.id, id));
    return request || undefined;
  }

  async createRegistrationAssistance(insertAssistance: InsertRegistrationAssistance): Promise<RegistrationAssistance> {
    const [assistance] = await db
      .insert(registrationAssistance)
      .values({
        ...insertAssistance,
        documents: insertAssistance.documents || null,
      })
      .returning();
    return assistance;
  }

  async getRegistrationAssistance(): Promise<RegistrationAssistance[]> {
    return await db.select().from(registrationAssistance).orderBy(registrationAssistance.createdAt);
  }

  async getRegistrationAssistanceById(id: number): Promise<RegistrationAssistance | undefined> {
    const [assistance] = await db.select().from(registrationAssistance).where(eq(registrationAssistance.id, id));
    return assistance || undefined;
  }
}

export const storage = new DatabaseStorage();
