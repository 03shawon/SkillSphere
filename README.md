# 🎓 SkillSphere – Online Learning Platform

SkillSphere is a modern, feature-rich online learning platform built with **Next.js (App Router)**. It allows users to explore courses, search dynamically, view detailed course information, and manage authentication with a smooth and responsive UI experience.

---

## 🌐 Live Demo

🚀 https://skillsphere-psi-two.vercel.app/

---

## 🎯 Purpose of the Project

SkillSphere was built to simulate a real-world learning platform where users can:

- Browse and explore structured courses
- Search courses instantly by title
- View detailed course information
- Authenticate using Email/Password and Google
- Manage and update user profile information

---

## ✨ Key Features

### 🔐 Authentication System
- Email & Password Login
- Google OAuth Login
- Secure session-based authentication
- Protected routes (e.g. Profile page)
- Redirect after login using callback URL

---

### 📚 Course Management
- Dynamic course listing
- Detailed course information page
- Instructor, rating, duration, and level display
- Trending/featured course section

---

### 🔍 Search Functionality
- Real-time course search by title
- Instant filtering results
- Empty state handling ("No courses found")

---

### 👤 User Profile System
- Display logged-in user data
- Update name and profile image
- Secure profile route protection
- Session-based user state handling

---

### 🎨 UI/UX & Experience
- Fully responsive design (Mobile, Tablet, Desktop)
- Built with **HeroUI (NextUI)**
- Toast notifications for success & error feedback
- Loading states for better UX
- Custom 404 Not Found page
- Clean and modern UI design

---

## 🛠️ Tech Stack

| Category        | Technology            |
|----------------|-----------------------|
| Framework       | Next.js (App Router)  |
| Library         | React.js              |
| Styling         | Tailwind CSS          |
| UI Library      | HeroUI (NextUI)       |
| Authentication  | Better Auth           |
| Icons           | React Icons           |
| Notifications   | React Hot Toast       |

---

## 📦 NPM Packages Used

- next
- react
- react-dom
- tailwindcss
- @heroui/react
- react-hot-toast
- react-icons
- @gravity-ui/icons
- better-auth

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/skillsphere.git

# Navigate to project folder
cd skillsphere

# Install dependencies
npm install

# Run development server
npm run dev