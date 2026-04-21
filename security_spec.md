# Security Specification for Ek-Thikana Marketplace

## 1. Data Invariants
- **Users**: `userId` must match the document ID. `role` is immutable once set during signup (except by admins). `walletBalance` should only be incremented by transactions.
- **Vendors**: `vendorId` must match the document ID. `verified` can only be set to `true` by admins.
- **Products**: Must belong to the authenticated vendor. `price` must be positive.
- **Orders**: `customerId` must be the authenticated user. `vendorId` must be a valid vendor.
- **Transactions**: Immutable once created.

## 2. The "Dirty Dozen" Payloads (Denial Tests)
1. **Privilege Escalation**: Attempting to create a user with `role: "admin"`.
2. **KYC Spoofing**: Vendor attempting to set `verified: true` during update.
3. **Wallet Injection**: Directly updating `walletBalance` in `users` collection.
4. **Order Hijacking**: Creating an order with a different `customerId` than the auth user.
5. **Product Counterfeiting**: Creating a product for another vendor's `vendorId`.
6. **Price Manipulation**: Updating a product's price to 0 or negative.
7. **Identity Theft**: Updating another user's profile metadata.
8. **Shadow Field Injection**: Adding an `isAdmin: true` field to a user document.
9. **Relational Break**: Creating a product for a non-existent category.
10. **State Skipping**: Manually setting an order status to `delivered` without it being `shipped`.
11. **PII Leak**: Reading `bankAccount` details of another vendor.
12. **Unauthorized Deletion**: A customer attempting to delete a vendor's product listing.

## 3. Implementation Patterns
- Use `isValidId()` for all document IDs.
- Use `isValidUser()`, `isValidVendor()`, etc. for schema validation.
- Implement action-based updates with `affectedKeys().hasOnly()`.
