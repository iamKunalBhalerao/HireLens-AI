/**
 * Standardized API Response Structure
 *
 * @fileoverview Defines a standard ApiResponse utility class to format successful HTTP responses.
 * Implements a structure consistent with error responses (statusCode, success status, message, and data payload).
 */

export class ApiResponse<T = any> {
  statusCode: number;
  success: boolean;
  data: T;
  message: string;

  constructor(statusCode: number, data: T, message = "Success") {
    this.statusCode = statusCode;
    this.success = statusCode >= 200 && statusCode < 300;
    this.data = data;
    this.message = message;
  }
}
