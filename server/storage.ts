import { desc, eq } from "drizzle-orm";
import {
  Contact,
  ContactSubmission,
  contactSubmissions,
  users,
  type InsertContact,
} from "../shared/schema";
import { db } from "./db";

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  getUser(id: number): Promise<any | undefined>;
  getUserByUsername(username: string): Promise<any | undefined>;
  createUser(user: any): Promise<any>;
  saveContactSubmission(contact: InsertContact): Promise<Contact>;
  getContactSubmissions(): Promise<Contact[]>;
  getContactSubmissionById(id: number): Promise<Contact | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, any>;
  private contacts: Map<number, Contact>;
  private userCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
  }

  async getUser(id: number): Promise<any | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<any | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: any): Promise<any> {
    const id = this.userCurrentId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactSubmission(contactData: InsertContact): Promise<Contact> {
    const id = this.contactCurrentId++;
    const timestamp = new Date();
    // Optional form fields arrive as `undefined`; the DB row type uses `null`.
    const contact: Contact = {
      id,
      name: contactData.name,
      email: contactData.email,
      phone: contactData.phone ?? null,
      service: contactData.service ?? null,
      message: contactData.message,
      createdAt: timestamp,
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getContactSubmissionById(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
}

/**
 * Postgres-backed storage. Used whenever DATABASE_URL is set, which is what
 * production needs: MemStorage cannot persist anything on serverless, where
 * each invocation may run in a fresh instance.
 */
export class DbStorage implements IStorage {
  private get client() {
    if (!db) {
      throw new Error("DbStorage requires DATABASE_URL to be set");
    }
    return db;
  }

  async getUser(id: number): Promise<any | undefined> {
    const rows = await this.client
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    return rows[0];
  }

  async getUserByUsername(username: string): Promise<any | undefined> {
    const rows = await this.client
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1);
    return rows[0];
  }

  async createUser(user: any): Promise<any> {
    const rows = await this.client.insert(users).values(user).returning();
    return rows[0];
  }

  async saveContactSubmission(contactData: InsertContact): Promise<Contact> {
    // Optional form fields arrive as `undefined`; the column is nullable.
    const rows = await this.client
      .insert(contactSubmissions)
      .values({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone ?? null,
        service: contactData.service ?? null,
        message: contactData.message,
      })
      .returning();
    return rows[0];
  }

  async getContactSubmissions(): Promise<Contact[]> {
    return this.client
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
  }

  async getContactSubmissionById(id: number): Promise<Contact | undefined> {
    const rows = await this.client
      .select()
      .from(contactSubmissions)
      .where(eq(contactSubmissions.id, id))
      .limit(1);
    return rows[0];
  }
}

// Fall back to in-memory storage only when no database is configured, so local
// development still runs without one. Anything persisted this way is lost on
// restart, so production must set DATABASE_URL.
export const storage: IStorage = db ? new DbStorage() : new MemStorage();
