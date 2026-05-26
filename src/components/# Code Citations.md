# Code Citations

## License: unknown
https://github.com/dev-phantom/my-portfolio/blob/aac1465adf0a3c2f0482fd00b4a9ddc6c9cd53e7/pages/api/sendEmail.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${
```


## License: unknown
https://github.com/omarlaneor/wwd230/blob/4a5bce20e2cb807d2b5e5b1dd77a978a29e935fd/final/scripts/tables.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p
```


## License: unknown
https://github.com/dev-phantom/my-portfolio/blob/aac1465adf0a3c2f0482fd00b4a9ddc6c9cd53e7/pages/api/sendEmail.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${
```


## License: unknown
https://github.com/omarlaneor/wwd230/blob/4a5bce20e2cb807d2b5e5b1dd77a978a29e935fd/final/scripts/tables.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p
```


## License: unknown
https://github.com/RishabhJPathak/laksh-foundation/blob/74346290b5b3183eaeab753fee02673262bbd451/controllers/mailController.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/Krishi-Sarthi-1/Krishi-Sarthi/blob/47f309e663d76c446318788f14aa63f98938e883/backend/controllers/auth.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/dev-phantom/my-portfolio/blob/aac1465adf0a3c2f0482fd00b4a9ddc6c9cd53e7/pages/api/sendEmail.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${
```


## License: unknown
https://github.com/omarlaneor/wwd230/blob/4a5bce20e2cb807d2b5e5b1dd77a978a29e935fd/final/scripts/tables.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p
```


## License: unknown
https://github.com/RishabhJPathak/laksh-foundation/blob/74346290b5b3183eaeab753fee02673262bbd451/controllers/mailController.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/Krishi-Sarthi-1/Krishi-Sarthi/blob/47f309e663d76c446318788f14aa63f98938e883/backend/controllers/auth.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/dev-phantom/my-portfolio/blob/aac1465adf0a3c2f0482fd00b4a9ddc6c9cd53e7/pages/api/sendEmail.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${
```


## License: unknown
https://github.com/omarlaneor/wwd230/blob/4a5bce20e2cb807d2b5e5b1dd77a978a29e935fd/final/scripts/tables.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p
```


## License: unknown
https://github.com/RishabhJPathak/laksh-foundation/blob/74346290b5b3183eaeab753fee02673262bbd451/controllers/mailController.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/Krishi-Sarthi-1/Krishi-Sarthi/blob/47f309e663d76c446318788f14aa63f98938e883/backend/controllers/auth.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/maansi24/my-portfolio/blob/d76a8b4d023d0e25bdb764bcbf23273d3286e0e3/pages/api/contact.ts

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr
```


## License: unknown
https://github.com/dev-phantom/my-portfolio/blob/aac1465adf0a3c2f0482fd00b4a9ddc6c9cd53e7/pages/api/sendEmail.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${
```


## License: unknown
https://github.com/omarlaneor/wwd230/blob/4a5bce20e2cb807d2b5e5b1dd77a978a29e935fd/final/scripts/tables.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p
```


## License: unknown
https://github.com/RishabhJPathak/laksh-foundation/blob/74346290b5b3183eaeab753fee02673262bbd451/controllers/mailController.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/Krishi-Sarthi-1/Krishi-Sarthi/blob/47f309e663d76c446318788f14aa63f98938e883/backend/controllers/auth.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/maansi24/my-portfolio/blob/d76a8b4d023d0e25bdb764bcbf23273d3286e0e3/pages/api/contact.ts

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr
```


## License: unknown
https://github.com/RishabhJPathak/laksh-foundation/blob/74346290b5b3183eaeab753fee02673262bbd451/controllers/mailController.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/omarlaneor/wwd230/blob/4a5bce20e2cb807d2b5e5b1dd77a978a29e935fd/final/scripts/tables.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/dev-phantom/my-portfolio/blob/aac1465adf0a3c2f0482fd00b4a9ddc6c9cd53e7/pages/api/sendEmail.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/Krishi-Sarthi-1/Krishi-Sarthi/blob/47f309e663d76c446318788f14aa63f98938e883/backend/controllers/auth.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/maansi24/my-portfolio/blob/d76a8b4d023d0e25bdb764bcbf23273d3286e0e3/pages/api/contact.ts

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr
```


## License: unknown
https://github.com/RishabhJPathak/laksh-foundation/blob/74346290b5b3183eaeab753fee02673262bbd451/controllers/mailController.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/omarlaneor/wwd230/blob/4a5bce20e2cb807d2b5e5b1dd77a978a29e935fd/final/scripts/tables.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/dev-phantom/my-portfolio/blob/aac1465adf0a3c2f0482fd00b4a9ddc6c9cd53e7/pages/api/sendEmail.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/Krishi-Sarthi-1/Krishi-Sarthi/blob/47f309e663d76c446318788f14aa63f98938e883/backend/controllers/auth.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p
```


## License: unknown
https://github.com/maansi24/my-portfolio/blob/d76a8b4d023d0e25bdb764bcbf23273d3286e0e3/pages/api/contact.ts

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr
```


## License: unknown
https://github.com/RishabhJPathak/laksh-foundation/blob/74346290b5b3183eaeab753fee02673262bbd451/controllers/mailController.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}
```


## License: unknown
https://github.com/omarlaneor/wwd230/blob/4a5bce20e2cb807d2b5e5b1dd77a978a29e935fd/final/scripts/tables.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}
```


## License: unknown
https://github.com/dev-phantom/my-portfolio/blob/aac1465adf0a3c2f0482fd00b4a9ddc6c9cd53e7/pages/api/sendEmail.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}
```


## License: unknown
https://github.com/Krishi-Sarthi-1/Krishi-Sarthi/blob/47f309e663d76c446318788f14aa63f98938e883/backend/controllers/auth.js

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}
```


## License: unknown
https://github.com/maansi24/my-portfolio/blob/d76a8b4d023d0e25bdb764bcbf23273d3286e0e3/pages/api/contact.ts

```
When you fill and submit the inquiry form, here's where you can see the submissions:

## 📍 **Where to See Form Submissions**

### **1. Server Console (Terminal) - Current Setup** ✅
Currently, submissions are logged to the **server console**. Check the terminal running `npm run dev`:

```
Contact form submission: {
  name: 'John Smith',
  email: 'john@example.com',
  phone: '9876543210',
  subject: 'Frontend Redesign Project',
  message: 'We are looking to redesign...',
  timestamp: '2026-05-24T17:29:40.712Z'
}
POST /api/contact 200 in 365ms
```

### **2. Page Feedback** ✅
- ✅ Green success message displays: *"Message sent successfully! I'll get back to you soon."*
- ✅ Form clears automatically
- ✅ Button shows "Sending..." while processing

---

## 📧 **To Receive Submissions via Email (Recommended)**

To get inquiries **emailed to you**, follow these steps:

### **Step 1: Set up SendGrid (Free account)**
```bash
# Create account at sendgrid.com
# Get your API key
```

### **Step 2: Add API key to `.env.local`**
```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
SENDGRID_API_KEY=SG.your_key_here
```

### **Step 3: Install SendGrid**
```bash
npm install @sendgrid/mail
```

### **Step 4: Update the contact API route**
Edit [src/app/api/contact/route.ts](src/app/api/contact/route.ts):

```typescript
import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    if (process.env.SENDGRID_API_KEY) {
      await sgMail.send({
        to: 'ismailakhtar786@gmail.com', // Your email
        from: 'noreply@ismailakhtar.com', // SendGrid verified sender
        subject: `New Inquiry: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <hr
```

