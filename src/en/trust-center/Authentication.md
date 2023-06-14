# Authentication & Single Sign On

# Identity Provider (IdP)

Access to TeamsPro apps relie 100% on Microsoft Azure Active Directory (AAD) as an IdP for authentication.

Especially, it means that:

- User authentication is performed against your own AAD, just like any other regular Office 365 authentication process.
- You can enable, disable and manage individual permissions grants from your own AAD.
- We're not accessing, processing nor storing any login / password.
- Our authentication mechanism is compatible with any MFA (opens new window)authentication method supported by AAD.

# Single Sign On (SSO)

Single Sign On (SSO) for Microsoft Teams custom apps such as our Virtual Agents are not yet fully supported by Microsoft, as the current implementation for SSO only grants consent for user-level permissions (email, profile, offline_access, openid) but not for other APIs (such as Microsoft Graph).
For further reference, see Microsoft Teams SSO for custom apps known limitations

Service account authentication details

For service account authentication details, please refer to Microsoft Graph Permissions