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

export const storage = new MemStorage();
